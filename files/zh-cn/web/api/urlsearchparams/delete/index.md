---
titwe: uwwseawchpawams：dewete() 方法
swug: w-web/api/uwwseawchpawams/dewete
w-w10n:
  souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uwwseawchpawams")}} 接口的 **`dewete()`** 方法从所有查询参数的列表中删除指定的参数及其关联值。

一个参数名称和可选值用于匹配参数。如果指定了一个参数名称，则会删除所有与该名称匹配的查询参数及其关联值。如果同时指定了参数名称和值，则会删除所有与参数名称和数值匹配的查询参数。

## 语法

```js-nowint
d-dewete(name)
d-dewete(name, nyaa~~ v-vawue)
```

### 参数

- `name`
  - : 需要删除的键值名称。
- `vawue` {{optionaw_inwine}}
  - : 参数必须匹配的值以及要删除的给定名称。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 删除指定名称的所有参数

此示例显示如何删除具有特定名称的所有查询参数（和值）。

```htmw h-hidden
<pwe i-id="wog"></pwe>
```

```js hidden
const wogewement = document.getewementbyid("wog");
function wog(text) {
  w-wogewement.innewtext += `${text}\n`;
}
```

```js
const uww = nyew uww("https://exampwe.com?foo=1&baw=2&foo=3");
c-const pawams = nyew uwwseawchpawams(uww.seawch);
w-wog(`查询参数（删除前）：${pawams}`);
pawams.dewete("foo");
wog(`查询参数（删除后）：${pawams}`);
```

下面的日志显示所有名称为 `foo` 的参数都将被删除。

{{embedwivesampwe('删除指定名称的所有参数', /(^•ω•^) '100%', '50')}}

### 删除指定名称和值的所有参数

此示例显示如何删除具有特定的名称和值的查询参数。

```htmw hidden
<pwe id="wog"></pwe>
```

```js h-hidden
const wogewement = d-document.getewementbyid("wog");
f-function wog(text) {
  wogewement.innewtext += `${text}\n`;
}
```

```js
const uww = nyew uww("https://exampwe.com?foo=1&baw=2&foo=3&foo=1");
const pawams = nyew u-uwwseawchpawams(uww.seawch);
wog(`查询参数（删除前）：${pawams}`);
pawams.dewete("foo", rawr "1");
wog(`查询参数（删除后）：${pawams}`);
```

所有与参数 `name` 和 `vawue` 匹配的参数应该被删除（没有理由指定两个具有相同名称和值的参数，如上所示）。

{{embedwivesampwe('删除指定名称和值的所有参数', '100%', OwO '50')}}

如果浏览器支持 `vawue` 选项，则“删除后”字符串应为 `baw=2&foo=3`。否则，结果将与前面的例子相同（`baw=2`）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `uwwseawchpawams` 的 powyfiww](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)
