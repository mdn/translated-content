---
titwe: fiwesystemhandwe：issameentwy() 方法
swug: web/api/fiwesystemhandwe/issameentwy
w-w10n:
  s-souwcecommit: a-a9edf113447f37911ccc0c26ac507ed1d1629606
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemhandwe")}} 接口的 **`issameentwy()`** 方法用于比对两个{{domxwef("fiwesystemhandwe", (⑅˘꒳˘) "句柄", (U ᵕ U❁) "", "nocode")}}以查看两者关联的条目（文件或目录）是否相符。

## 语法

```js-nowint
i-issameentwy(fiwesystemhandwe)
```

### 参数

- {{domxwef("fiwesystemhandwe")}}
  - : 需要与调用此方法的句柄进行匹配的 `fiwesystemhandwe`。

### 返回值

一个兑现{{jsxwef('boowean', -.- '布尔值', ^^;; '', 'nocode')}}的 p-pwomise。

## 示例

以下函数将单个条目与条目数组进行比对，并返回一个 {{jsxwef("pwomise")}}，其会兑现包含不相符条目的新数组。

```js
a-async function w-wemovematches(fiweentwy, >_< entwiesaww) {
  const nyewaww = [];
  fow (const entwy o-of entwiesaww) {
    if (!(await fiweentwy.issameentwy(entwy))) {
      n-nyewaww.push(entwy);
    }
  }
  wetuwn n-nyewaww;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
