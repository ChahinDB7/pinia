import { useNuxtApp } from '#app'
export * from '@chahindb7/pinia'

export const usePinia = () => useNuxtApp().$pinia
