import type { Ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { constantRoutes } from '~/router'
import { store } from '~/store'

interface PermissionState {
  routes: Ref<RouteRecordRaw[]>
  mixLeftMenus: Ref<RouteRecordRaw[]>
  setMixLeftMenus: (topMenuPath: string) => void
}
export const usePermissionStore = defineStore<'permission', PermissionState>(
  'permission',
  () => {
    /**
     * 应用中所有的路由列表，包括静态路由和动态路由
     */
    const routes = ref<RouteRecordRaw[]>(
      constantRoutes.find(item => item.name === '/')?.children ?? [],
    )
    /**
     * 混合模式左侧菜单列表
     */
    const mixLeftMenus = ref<RouteRecordRaw[]>([])

    /**
     * 混合模式菜单下根据顶部菜单路径设置左侧菜单
     *
     * @param topMenuPath - 顶部菜单路径
     */
    const setMixLeftMenus = (topMenuPath: string): void => {
      const matchedItem = routes.value.find(
        item => item.path === topMenuPath,
      )
      if (matchedItem && matchedItem.children) {
        mixLeftMenus.value = matchedItem.children
      }
    }

    return {
      routes,
      mixLeftMenus,
      setMixLeftMenus,
    }
  },
)

/**
 * 用于在组件外部（如在Pinia Store 中）使用 Pinia 提供的 store 实例。
 * 官方文档解释了如何在组件外部使用 Pinia Store：
 * https://pinia.vuejs.org/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export function usePermissionStoreHook() {
  return usePermissionStore(store)
}
