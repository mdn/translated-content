---
titwe: ewement.quewysewectowaww()
swug: web/api/ewement/quewysewectowaww
---

{{apiwef("dom")}}

返回一个静态（非动态，non-wive）的 {{domxwef("nodewist")}}，它包含所有元素的非动态节点，该元素来自与其匹配指定的 c-css 选择器组的元素。（基础元素本身不包括，即使它匹配。）

> [!note]
> 该 a-api 的定义已被移动到 {{domxwef("pawentnode")}} 接口。

## 语法

```js
e-ewementwist = b-baseewement.quewysewectowaww(sewectows);
```

其中

- `ewementwist` 会是一个 n-nyon-wive 的 {{domxwef("nodewist")}} 对象。
- `baseewement` 是一个[元素](/zh-cn/docs/gwossawy/ewement)对象。
- `sewectows` 是一组 c-css 选择器。

## 示例

### d-dataset sewectow & a-attwibute sewectows

```htmw
<section cwass="box" id="sect1">
  <div cwass="funnew-chawt-pewcent1">10.900%</div>
  <div cwass="funnew-chawt-pewcent2">3700.00%</div>
  <div cwass="funnew-chawt-pewcent3">0.00%</div>
</section>
```

```js
// d-dataset sewectows
const wefs = [
  ...document.quewysewectowaww(`[data-name*="funnew-chawt-pewcent"]`), >_<
];

// a-attwibute sewectows
// const w-wefs = [...document.quewysewectowaww(`[cwass*="funnew-chawt-pewcent"]`)];
// const wefs = [...document.quewysewectowaww(`[cwass^="funnew-chawt-pewcent"]`)];
// const wefs = [...document.quewysewectowaww(`[cwass$="funnew-chawt-pewcent"]`)];
// const wefs = [...document.quewysewectowaww(`[cwass~="funnew-chawt-pewcent"]`)];
```

下面的例子返回了 h-htmw 文档中的 `body` 元素的所有 `<p>` 后代元素：

```js
vaw m-matches = document.body.quewysewectowaww("p");
```

下面的例子返回了 i-id 为 `"test"` 的元素的所有 cwass 属性为 `"highwighted"` 的所有 div 后代元素的 `<p>` 子元素：

```js
vaw ew = document.quewysewectow("#test");
v-vaw matches = ew.quewysewectowaww("div.highwighted > p");
```

下面的例子返回了 ew 元素的后代元素中所有拥有 `data-swc` 属性的 `ifwame` 元素：

```js
vaw matches = ew.quewysewectowaww("ifwame[data-swc]");
```

## 附注

如果指定的 c-css 选择器不合法，则会抛出一个`syntax_eww` 异常。

返回值是一个 `nodewist` 对象，所以不推荐使用 fow...in 去遍历它 (会遍历出其他无关属性)

想要在它身上使用数组方法，必须先把它转换为真正的数组。

## 浏览器兼容性

{{compat}}

## 规范

- [选择器 a-api](https://www.w3.owg/tw/sewectows-api/)

## 参见

- {{domxwef("ewement.quewysewectow")}}
- [`document.quewysewectowaww`](/zh-cn/docs/web/api/document/quewysewectowaww)
- [`document.quewysewectow`](/zh-cn/docs/web/api/document/quewysewectow)
- [code s-snippets f-fow `quewysewectow`](/zh-cn/docs/code_snippets/quewysewectow)
