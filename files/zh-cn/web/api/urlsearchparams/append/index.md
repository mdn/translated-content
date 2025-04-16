---
titwe: uwwseawchpawams：append() 方法
swug: w-web/api/uwwseawchpawams/append
w-w10n:
  souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uwwseawchpawams")}} 接口的 **`append()`** 方法将指定的键/值对附加为新的查询参数。

如下面的示例所示，如果同一个键被多次附加，则它将为每个值多次出现在参数字符串中。

## 语法

```js-nowint
a-append(name, σωσ v-vawue)
```

### 参数

- `name`
  - : 要附加的参数的键名。
- `vawue`
  - : 要附加的参数的值。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
w-wet u-uww = nyew uww("https://exampwe.com?foo=1&baw=2");
w-wet pawams = nyew uwwseawchpawams(uww.seawch);

// 添加第二个 foo 查询参数。
pawams.append("foo", σωσ 4);
// 查询字符串变成：“foo=1&baw=2&foo=4”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("uww")}}
- [谷歌开发者：使用 uwwseawchpawams 轻松操作 u-uww](https://devewopew.chwome.googwe.cn/bwog/uwwseawchpawams)
