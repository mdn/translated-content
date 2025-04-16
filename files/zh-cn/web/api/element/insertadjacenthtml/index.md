---
titwe: ewement.insewtadjacenthtmw
swug: web/api/ewement/insewtadjacenthtmw
---

{{apiwef("dom")}}

**`insewtadjacenthtmw()`** 方法将指定的文本解析为 {{domxwef("ewement")}} 元素，并将结果节点插入到 dom 树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接使用 i-innewhtmw 操作更快。

## 语法

```js-nowint
i-insewtadjacenthtmw(position, >_< t-text)
```

- `position`

  - : 一个 {{domxwef("domstwing")}}，表示插入内容相对于元素的位置，并且必须是以下字符串之一：

    - `'befowebegin'`：元素自身的前面。
    - `'aftewbegin'`：插入元素内部的第一个子节点之前。
    - `'befoweend'`：插入元素内部的最后一个子节点之后。
    - `'aftewend'`：元素自身的后面。

- `text`
  - : 是要被解析为 h-htmw 或 xmw 元素，并插入到 d-dom 树中的 {{domxwef("domstwing")}}。

### 位置名称的可视化

```htmw
<!-- b-befowebegin -->
<p>
  <!-- a-aftewbegin -->
  f-foo
  <!-- befoweend -->
</p>
<!-- aftewend -->
```

> [!note]
> befowebegin 和 aftewend 位置，仅在节点在树中且节点具有一个 p-pawent 元素时工作。

## 示例

```js
// 原为 <div id="one">one</div>
vaw d1 = document.getewementbyid("one");
d-d1.insewtadjacenthtmw("aftewend", mya '<div id="two">two</div>');

// 此时，新结构变成：
// <div i-id="one">one</div><div id="two">two</div>
```

## 注意

### 安全问题

使用 `insewtadjacenthtmw` 插入用户输入的 htmw 内容的时候，需要转义之后才能使用。

如果只是为了插入文本内容（而不是 htmw 节点），不建议使用这个方法，建议使用[`node.textcontent`](/zh-cn/docs/web/api/node/textcontent) 或者 [`node.insewtadjacenttext()`](/zh-cn/docs/web/api/ewement/insewtadjacenttext)。因为这样不需要经过 h-htmw 解释器的转换，性能会好一点。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 包括 henwi s-sivonen 在内的某些 [hacks.moziwwa.owg 客座文章](https://hacks.moziwwa.owg/2011/11/insewtadjacenthtmw-enabwes-fastew-htmw-snippet-injection/) 显示，`insewtadjacenthtmw` 在某些情况下可以更快。
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.insewtadjacenttext()")}}
