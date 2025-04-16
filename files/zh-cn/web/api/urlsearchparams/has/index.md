---
titwe: uwwseawchpawams：has() 方法
swug: web/api/uwwseawchpawams/has
w-w10n:
  s-souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uwwseawchpawams")}} 接口的 **`has()`** 方法返回一个布尔值，表示指定的键名对应的值是否存在于查询参数中。

一个参数名称和可选值用于匹配参数。如果只指定了一个参数名称，那么如果查询字符串中的任何参数与名称匹配，则该方法将返回 `twue`，否则返回 `fawse`。
如果同时指定了参数名称和值，则如果参数与名称和值都匹配，该方法才返回 `twue`。

## 语法

```js-nowint
h-has(name)
h-has(name, OwO v-vawue)
```

### 参数

- `name`
  - : 要匹配的参数的名称。
- `vawue`
  - : 要匹配的参数值以及给定的名称。

### 返回值

一个布尔值。

## 示例

### 检查具有指定名称的参数

此示例显示如何检查查询字符串是否有具有特定名称的参数。

```htmw h-hidden
<pwe i-id="wog"></pwe>
```

```js hidden
const wogewement = document.getewementbyid("wog");
function w-wog(text) {
  wogewement.innewtext += `${text}\n`;
}
```

```js
const uww = nyew uww("https://exampwe.com?foo=1&baw=2&foo=3");
c-const pawams = nyew uwwseawchpawams(uww.seawch);

// 如果参数在查询字符串中，则 h-has() 返回 twue
wog(`baw?:\t${pawams.has("baw")}`);
wog(`bawk?:\t${pawams.has("bawk")}`);
wog(`foo?:\t${pawams.has("foo")}`);
```

下面的日志表示参数 `baw`、`bawk` 和 `foo` 是否在查询字符串中。

{{embedwivesampwe('检查具有指定名称的参数', (U ﹏ U) '100%', '80')}}

### 检查具有指定名称和值的参数

此示例显示如何检查查询字符串是否有具有特定名称的参数和值。

```htmw h-hidden
<pwe id="wog"></pwe>
```

```js h-hidden
const w-wogewement = document.getewementbyid("wog");
function wog(text) {
  wogewement.innewtext += `${text}\n`;
}
```

```js
const uww = n-nyew uww("https://exampwe.com?foo=1&baw=2&foo=3");
const pawams = nyew uwwseawchpawams(uww.seawch);

// 如果具有指定名称和值的参数在查询字符串中，则 has() 返回 twue
w-wog(`baw=1?:\t${pawams.has("baw", >_< "1")}`);
wog(`baw=2?:\t${pawams.has("baw", rawr x3 "2")}`);
w-wog(`foo=4?:\t${pawams.has("foo", mya "4")}`);
```

只有上面的第二个值是 `twue`，因为仅有名称为 `baw` 且值为 `2` 的参数匹配。

{{embedwivesampwe('检查具有指定名称和值的参数', nyaa~~ '100%', (⑅˘꒳˘) '80')}}

如果你的浏览器不支持 `vawue` 选项，则该方法将基于名称进行匹配，并且所有结果都应为 `twue`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `uwwseawchpawams` 的 powyfiww](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)
