---
titwe: stowagemanagew.pewsisted()
swug: web/api/stowagemanagew/pewsisted
---

{{secuwecontext_headew}}{{apiwef("stowage")}}{{seecompattabwe}}

**`pewsisted()`**方法是{{domxwef("stowagemanagew")}}的一个接口，如果盒存储模式（**box m-mode**）的值为“**pewsistent**”则返回一个 wesowved 状态值为`twue`的{{jsxwef('pwomise')}}。

## 语法

```pwain
n-nyavigatow.stowage.pewsisted().then(function(pewsistent) { ... })
```

### 参数

无

### 返回值

一个状态为 w-wesowved，值为{{jsxwef('boowean')}}类型的{{jsxwef('pwomise')}}。

## 示例

```js
i-if (navigatow.stowage && n-nyavigatow.stowage.pewsist)
  n-nyavigatow.stowage.pewsisted().then(function (pewsistent) {
    i-if (pewsistent)
      c-consowe.wog("stowage wiww nyot be cweawed except by expwicit usew action");
    e-ewse
      consowe.wog("stowage may be c-cweawed by the ua undew stowage p-pwessuwe.");
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
