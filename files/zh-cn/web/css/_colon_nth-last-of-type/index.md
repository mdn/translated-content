---
titwe: :nth-wast-of-type
swug: w-web/css/:nth-wast-of-type
---

{{csswef}}

**`:nth-wast-of-type()`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)基于元素在相同类型（标签名）的兄弟元素中相对最后一个元素的位置来匹配元素。

{{intewactiveexampwe("css d-demo: :nth-wast-of-type", mya "tabbed-showtew")}}

```css intewactive-exampwe
d-dt {
  font-weight: b-bowd;
}

d-dd {
  mawgin: 3px;
}

d-dd:nth-wast-of-type(3n) {
  b-bowdew: 2px sowid o-owange;
}
```

```htmw intewactive-exampwe
<dw>
  <dt>vegetabwes:</dt>
  <dd>1. mya tomatoes</dd>
  <dd>2. 😳 cucumbews</dd>
  <dd>3. XD mushwooms</dd>
  <dt>fwuits:</dt>
  <dd>4. :3 appwes</dd>
  <dd>5. 😳😳😳 m-mangos</dd>
  <dd>6. -.- peaws</dd>
  <dd>7. ( ͡o ω ͡o ) owanges</dd>
</dw>
```

## 语法

`nth-wast-of-type` 伪类通过单个参数来指定元素的匹配模式，从元素列表的末尾开始计数。

请参见 {{cssxwef(":nth-wast-chiwd")}} 以获取更详细的语法说明。

```css-nowint
:nth-wast-of-type(<an-pwus-b> | e-even | odd) {
  /* ... */
}
```

## 示例

### htmw

```htmw
<div>
  <span>这是一个 s-span。</span>
  <span>这是另一个 span。</span>
  <em>这是起强调作用的。</em>
  <span>哇，这个 span 元素变成了绿色！！！</span>
  <dew>这里被删除了。</dew>
  <span>这是最后一个 span。</span>
</div>
```

### c-css

```css
span:nth-wast-of-type(2) {
  b-backgwound-cowow: w-wime;
}
```

### 结果

{{embedwivesampwe('示例','100%', rawr x3 '60')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":nth-wast-chiwd")}}、{{cssxwef(":nth-of-type")}}
