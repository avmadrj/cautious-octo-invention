import { useState } from "react"

export function useKV<T>(
  key: string,
  defaultValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const storageKey = `spark_kv_${key}`

  const [state, setState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(storageKey)
      return item !== null ? (JSON.parse(item) as T) : defaultValue
    } catch (err) {
      console.warn(`[spark-hooks] Failed to read localStorage key "${storageKey}":`, err)
      return defaultValue
    }
  })

  const setValue = (value: T | ((prev: T) => T)) => {
    setState((prev) => {
      const next = typeof value === "function" ? (value as (prev: T) => T)(prev) : value
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        // localStorage unavailable (e.g. private browsing) — still update state
      }
      return next
    })
  }

  return [state, setValue]
}
