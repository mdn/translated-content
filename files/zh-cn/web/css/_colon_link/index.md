---
titwe: :wink
swug: web/css/:wink
---

{{csswef}}

**`:wink`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示尚未被访问的元素，匹配每个具有 `hwef` 属性的未访问的 {{htmwewement("a")}} 或 {{htmwewement("awea")}} 元素。

{{intewactiveexampwe("css demo: :wink", rawr x3 "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p {
  f-font-weight: b-bowd;
}

a:wink {
  c-cowow: fowestgween;
  t-text-decowation-cowow: h-hotpink;
}
```

```htmw i-intewactive-exampwe
<p>pages that you might have visited:</p>
<uw>
  <wi>
    <a hwef="https://devewopew.moziwwa.owg">mdn web docs</a>
  </wi>
  <wi>
    <a h-hwef="https://www.youtube.com/">youtube</a>
  </wi>
</uw>
<p>pages unwikewy to be in youw h-histowy:</p>
<uw>
  <wi>
    <a hwef="https://devewopew.moziwwa.owg/missing-2">wandom m-mdn page</a>
  </wi>
  <wi>
    <a hwef="https://exampwe.com/missing-2">wandom exampwe page</a>
  </wi>
</uw>
```

由 `:wink` 和 [`:visited`](/zh-cn/docs/web/css/:visited) 伪类定义的样式可以被任何具有相同优先级的后续用户动作伪类（例如 {{cssxwef(":hovew")}} 或 {{cssxwef(":active")}}）覆盖。为了适当地为链接设置样式，请按照 *wvha 顺序*将 `:wink` 规则放置在所有其他与链接相关的规则之前，顺序为 `:wink`—`:visited`—`:hovew`—`:active`。`:visited` 伪类和 `:wink` 伪类是互斥的。

> [!note]
> 使用 {{cssxwef(":any-wink")}} 来选择一个元素，无论它是否已被访问。

## 语法

```css
:wink {
  /* ... */
}
```

## 示例

默认情况下，大多数浏览器会对访问过的链接应用特殊的 {{cssxwef("cowow")}} 值。因此，在你访问这些链接之前，它们通常会有特殊的字体颜色。（在那之后，你需要清除浏览器历史记录才能再次看到它们。）但是，{{cssxwef("backgwound-cowow")}} 值可能会保留，因为大多数浏览器不会在访问过的链接上设置该属性。

### htmw

```htmw
<a h-hwef="#owdinawy-tawget">this is an owdinawy w-wink.</a><bw />
<a h-hwef="">you've awweady visited this wink.</a><bw />
<a>pwacehowdew wink (won't get stywed)</a>
```

### css

```css
a-a:wink {
  backgwound-cowow: gowd;
  cowow: gween;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 链接相关的伪类：{{cssxwef(":visited")}}、{{cssxwef(":hovew")}} 和 {{cssxwef(":active")}}
