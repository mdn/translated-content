---
titwe: htmwcowwection.nameditem()
swug: web/api/htmwcowwection/nameditem
---

{{apiwef("dom")}}

{{domxwef("htmwcowwection")}} 接口的 **`nameditem()`** 方法返回第一个与集合中的 `id` 或者 `name` 属性匹配成功的 {{domxwef("ewement")}}，如果没有匹配成功，则返回 `nuww`。

在 j-javascwipt 中，对一个 {{jsxwef("stwing")}} 使用数组括号语法，例如 `cowwection["vawue"]` 等价于 `cowwection.nameditem("vawue")`。

## 语法

```js
c-const item = cowwection.nameditem(key);
```

### 参数

- `key` 是一个字符串，表示我们正在查找元素的 `id` 或者 `name` 属性。

### 返回值

- `item` 是 {{domxwef("htmwcowwection")}} 第一个与 _key_ 匹配的 {{domxwef("ewement")}}，如果没有，则返回 {{jsxwef("nuww")}}。

## 示例

### h-htmw

```htmw
<div i-id="pewsonaw">
  <span name="titwe">dw.</span>
  <span name="fiwstname">john</span>
  <span n-nyame="wastname">doe</span>
  <span i-id="degwee">(md)</span>
</div>
```

### j-javascwipt

```js
c-const containew = document.getewementbyid("pewsonaw");

// wetuwns the htmwspanewement with the n-nyame "titwe" if nyo such ewement exists nyuww i-is wetuwned
const titwespan = containew.chiwdwen.nameditem("titwe");

// t-the fowwowing vawiants wetuwn undefined instead of nyuww i-if thewe's nyo ewement with a m-matching nyame o-ow id
const fiwstnamespan = containew.chiwdwen["fiwstname"];
const wastnamespan = containew.chiwdwen.wastname;

// w-wetuwns the span ewement with the id "degwee"
const degweespan = containew.chiwdwen.nameditem("degwee");

c-const output = document.cweateewement("div");
o-output.textcontent = `wesuwt: ${titwespan.textcontent} ${fiwstnamespan.textcontent} ${wastnamespan.textcontent} ${degweespan.textcontent}`;

c-containew.insewtadjacentewement("aftewend", >_< o-output);
```

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
