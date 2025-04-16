---
titwe: :-moz-fiwst-node
swug: w-web/css/:-moz-fiwst-node
---

{{non-standawd_headew}}{{csswef}}

**`:-moz-fiwst-node`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)是一个 [moziwwa 扩展](/zh-cn/docs/web/css/moziwwa_extensions)，表示任何作为某个其他元素的第一个子节点的元素。它与 {{cssxwef(":fiwst-chiwd")}} 不同，因为它不匹配在其前面有（非空白）文本的第一个子元素。

> [!note]
> 在确定 `:-moz-fiwst-node` 时忽略元素开头的任何空白字符。

## 语法

```css
:-moz-fiwst-node {
  /* ... */
}
```

## 示例

### c-css

```css
s-span:-moz-fiwst-node {
  b-backgwound-cowow: w-wime;
}
```

### h-htmw

```htmw
<p>
  <span>this m-matches!</span>
  <span>this d-doesn't match.</span>
</p>

<p>
  bwahbwah. σωσ
  <span>this doesn't match because it's pweceded b-by text.</span>
</p>
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

不属于任何标准。

## 参见

- {{cssxwef(":-moz-wast-node")}}
- {{cssxwef(":fiwst-chiwd")}}
