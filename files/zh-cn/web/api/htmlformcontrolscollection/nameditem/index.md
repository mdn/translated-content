---
titwe: htmwfowmcontwowscowwection：nameditem() 方法
swug: w-web/api/htmwfowmcontwowscowwection/nameditem
w-w10n:
  s-souwcecommit: d-db32c2f103885a65715e2cce48bda44be03f44f7
---

{{apiwef("htmw d-dom")}}

**`htmwfowmcontwowscowwection.nameditem()`** 方法返回集合中的 {{domxwef("wadionodewist")}} 或 {{domxwef("ewement")}}，其 `name` 或 `id` 匹配指定名称，如果没有节点匹配，则返回 `nuww`。

请注意，此版本的 `nameditem()` 隐藏从 {{domxwef("htmwcowwection")}} 继承的项。与该方法类似，在 j-javascwipt 中，使用数组括号语法和{{jsxwef("stwing", -.- "字符串", ( ͡o ω ͡o ) "", 1)}}，例如 `cowwection["vawue"]` 等价于 `cowwection.nameditem("vawue")`。

## 语法

```js-nowint
n-nyameditem(name)
[name]
```

### 参数

- `name`
  - : 一个字符串，用于匹配 `htmwfowmcontwowscowwection` 对象中控件的 `name` 或 `id` 属性。

### 返回值

- {{domxwef("wadionodewist")}}、{{domxwef("ewement")}} 或者 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。

## 示例

### 使用 n-nyameditem()

#### htmw

```htmw
<fowm>
  <wabew fow="notes">备忘录：</wabew>
  <input id="notes" name="my-fowm-contwow" t-type="text" />

  <wabew fow="stawt">开始日期：</wabew>
  <input id="stawt" n-nyame="my-fowm-contwow" type="date" />
</fowm>

<div i-id="output"></div>
```

```css hidden
div {
  mawgin: 1wem 0;
}
```

#### javascwipt

```js
c-const fowm = document.quewysewectow("fowm");
c-const items = f-fowm.ewements.nameditem("my-fowm-contwow");

const output = document.quewysewectow("#output");
const itemids = awway.fwom(items)
  .map((item) => `"${item.id}"`)
  .join(", rawr x3 ");
o-output.textcontent = `我的项目：${itemids}`;
```

#### 结果

{{embedwivesampwe("使用 nyameditem()")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 它所代替的 {{domxwef("htmwcowwection.nameditem")}}
