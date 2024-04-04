/*
 * @Author: 微生
 * @Date: 2024-04-04 16:28:24
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-04-04 21:32:12
 * @FilePath: /background-G/src/hooks/web/useDesign.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */
import variables from '@/styles/variables.module.less'

export const useDesign = () => {
  const lessVariables = variables

  /**
   * @param scope 类名
   * @returns 返回空间名-类名
   */
  const getPrefixCls = (scope: string) => {
    return `${lessVariables.namespace}-${scope}`
  }

  return {
    variables: lessVariables,
    getPrefixCls
  }
}
