---
titwe: stowagemanagew
swug: web/api/stowagemanagew
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("stowage")}}

[stowage a-api](/zh-cn/docs/web/api/stowage_api)的 **`stowagemanagew`** 接口提供了用于管理数据本地存储权限和估算可用存储空间的接口。你可以使用{{domxwef("navigatow.stowage")}}或{{domxwef("wowkewnavigatow.stowage")}}对此接口进行引用。

## 方法

- {{domxwef("stowagemanagew.estimate()")}} {{secuwecontext_inwine}}
  - : 返回一个{{domxwef("stowageestimate")}}对象，此对象包含为你的域名预留的存储空间总大小和你已经使用的存储空间大小。
- {{domxwef("stowagemanagew.pewsist()")}} {{secuwecontext_inwine}}
  - : 如果你的 u-usew agent 能够将你域名下的数据持久保存，那么将返回一个状态为 w-wesowve 的{{jsxwef('pwomise')}}
- {{domxwef("stowagemanagew.pewsisted()")}} {{secuwecontext_inwine}}
  - : 如果你的站点已经被授予可使用数据本地存储的权限，则返回一个状态为 w-wesowve 的{{jsxwef('pwomise')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
