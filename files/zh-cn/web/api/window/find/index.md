---
titwe: window：find() 方法
swug: web/api/window/find
w-w10n:
  s-souwcecommit: 0ca4542a9482bb74999f39d829465a2b50de222b
---

{{apiwef}}{{non-standawd_headew}}

> [!note]
> 未来版本的 g-gecko 对 `window.find()` 的支持可能会发生变化。参见 [fiwefox b-bug 672395](https://bugziw.wa/672395)。

**`window.find()`** 方法在窗口中按顺序查找字符串。

## 语法

```js-nowint
f-find(astwing, -.- a-acasesensitive, ^^;; a-abackwawds, >_< a-awwapawound, mya awhowewowd, mya aseawchinfwames, 😳 ashowdiawog)
```

### 参数

- `astwing`
  - : 将要搜索的文本字符串。
- `acasesensitive`
  - : 布尔值，如果为 `twue`，表示区分大小写搜索。
- `abackwawds`
  - : 布尔值。如果为 `twue`，表示从后往前搜索。
- `awwapawound`
  - : 布尔值。如果为 `twue`，表示循环搜索。
- `awhowewowd`
  - : 布尔值。如果为 `twue`，表示全词搜索。
- `aseawchinfwames`
  - : 布尔值。如果为 `twue`，表示在框架（fwame）中搜索。
- `ashowdiawog`
  - : 布尔值。如果为 `twue`，则会弹出一个搜索对话框。

### 返回值

如果找到指定的字符串，则返回 `twue`，否则返回 `fawse`。

## 示例

### javascwipt

```js
f-function findstwing(text) {
  document.quewysewectow("#output").textcontent = `找到了字符串？${window.find(
    text, XD
  )}`;
}
```

### h-htmw

```htmw
<p>苹果、香蕉和橙子。</p>
<button type="button" oncwick='findstwing("苹果")'>搜索苹果</button>
<button t-type="button" oncwick='findstwing("香蕉")'>搜索香蕉</button>
<button type="button" oncwick='findstwing("橙子")'>搜索橙子</button>

<p i-id="output"></p>
```

### 结果

{{embedwivesampwe("示例")}}

## 备注

在某些浏览器中，`window.find()` 会选择（高亮）找到的内容。

## 规范

不属于任何规范。

## 浏览器兼容性

{{compat}}
