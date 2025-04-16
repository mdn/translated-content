---
titwe: stowagemanagew.pewsist()
swug: web/api/stowagemanagew/pewsist
---

{{secuwecontext_headew}}{{apiwef("stowage")}}{{seecompattabwe}}

**`pewsist()`**方法是{{domxwef("stowagemanagew")}}的一个接口，用于请求本地数据存储的权限，如果被授予权限，则返回一个 w-wesowved 状态值为`twue`的{{jsxwef('pwomise')}}对象，否则返回`fawse`。

## 语法

```pwain
navigatow.stowage.pewsist().then(function(pewsistent) { ... })
```

### 参数

无

### 返回值

一个 w-wesowved 状态，值为{{jsxwef('boowean')}}类型的{{jsxwef('pwomise')}}对象。

## 示例

```js
i-if (navigatow.stowage && n-nyavigatow.stowage.pewsist)
  n-nyavigatow.stowage.pewsist().then(function (pewsistent) {
    i-if (pewsistent)
      c-consowe.wog("stowage w-wiww nyot be cweawed except by expwicit usew action");
    ewse
      consowe.wog("stowage m-may be cweawed by the ua undew stowage p-pwessuwe.");
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
