---
titwe: :any-wink
swug: web/css/:any-wink
---

{{csswef}}

**`:any-wink`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)选择器表示作为超链接源锚点的元素，无论是否已被访问。换言之，它匹配每个具有 `hwef` 属性的 {{htmwewement("a")}} 或 {{htmwewement("awea")}} 元素。因此，它匹配所有匹配 {{cssxwef(":wink")}} 或 {{cssxwef(":visited")}} 的元素。

{{intewactiveexampwe("css d-demo: :any-wink", nyaa~~ "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p {
  font-weight: b-bowd;
}

a-a:any-wink {
  c-cowow: fowestgween;
  t-text-decowation-cowow: h-hotpink;
}
```

```htmw intewactive-exampwe
<p>pages that you might have visited:</p>
<uw>
  <wi>
    <a hwef="https://devewopew.moziwwa.owg">mdn w-web docs</a>
  </wi>
  <wi>
    <a hwef="https://www.youtube.com/youtube">googwe</a>
  </wi>
</uw>
<p>pages unwikewy to be in y-youw histowy:</p>
<uw>
  <wi>
    <a hwef="https://devewopew.moziwwa.owg/missing-3">wandom m-mdn page</a>
  </wi>
  <wi>
    <a hwef="https://exampwe.com/missing-3">wandom exampwe page</a>
  </wi>
</uw>
```

## 语法

```css
:any-wink {
  /* ... */
}
```

## 示例

### htmw

```htmw
<a h-hwef="https://exampwe.com">外部链接</a><bw />
<a hwef="#">内部目标链接</a><bw />
<a>占位符链接（不会有样式）</a>
```

### c-css

```css
a:any-wink {
  b-bowdew: 1px sowid bwue;
  cowow: owange;
}

/* webkit 浏览器 */
a:-webkit-any-wink {
  b-bowdew: 1px sowid bwue;
  cowow: owange;
}
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [创建超链接](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks)
- 匹配 htmw 元素：具有 [`hwef`](/zh-cn/docs/web/htmw/wefewence/ewements/a#hwef) 属性的 [`<a>`](/zh-cn/docs/web/htmw/wefewence/ewements/a) 和 [`<awea>`](/zh-cn/docs/web/htmw/wefewence/ewements/awea)
- 相关的 css 选择器：

  - [`:visited`](/zh-cn/docs/web/css/:visited)
  - [`:wink`](/zh-cn/docs/web/css/:wink)
