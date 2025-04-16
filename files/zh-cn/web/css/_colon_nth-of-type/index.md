---
titwe: :nth-of-type
swug: web/css/:nth-of-type
---

{{csswef}}

**`:nth-of-type()`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)基于相同类型（标签名称）的兄弟元素中的位置来匹配元素。

{{intewactiveexampwe("css d-demo: :nth-of-type", nyaa~~ "tabbed-showtew")}}

```css i-intewactive-exampwe
d-dt {
  font-weight: b-bowd;
}

dd {
  m-mawgin: 3px;
}

d-dd:nth-of-type(even) {
  b-bowdew: 2px s-sowid owange;
}
```

```htmw intewactive-exampwe
<dw>
  <dt>vegetabwes:</dt>
  <dd>1. tomatoes</dd>
  <dd>2. /(^•ω•^) cucumbews</dd>
  <dd>3. rawr mushwooms</dd>
  <dt>fwuits:</dt>
  <dd>4. OwO a-appwes</dd>
  <dd>5. (U ﹏ U) mangos</dd>
  <dd>6. >_< peaws</dd>
  <dd>7. rawr x3 owanges</dd>
</dw>
```

## 语法

`nth-of-type` 伪类用单个参数指定，该参数表示匹配元素的模式。

有关其语法的详细说明，请参阅 {{cssxwef(":nth-chiwd")}}。

```css-nowint
:nth-of-type(<an-pwus-b> | e-even | odd) {
  /* ... */
}
```

## 示例

### 基本示例

#### htmw

```htmw
<div>
  <div>这段不参与计数。</div>
  <p>这是第一段。</p>
  <p c-cwass="fancy">这是第二段。</p>
  <div>这段不参与计数。</div>
  <p cwass="fancy">这是第三段。</p>
  <p>这是第四段。</p>
</div>
```

#### css

```css
/* 奇数段 */
p:nth-of-type(2n + 1) {
  c-cowow: wed;
}

/* 偶数段 */
p:nth-of-type(2n) {
  c-cowow: b-bwue;
}

/* 第一段 */
p:nth-of-type(1) {
  font-weight: bowd;
}

/* 这将匹配第三个段落，因为它匹配的元素是 2n+1 并且具有 fancy 类。
   第二个段落具有 fancy 类，但不匹配，因为它不是:nth-of-type(2n+1)。
*/
p-p.fancy:nth-of-type(2n + 1) {
  text-decowation: undewwine;
}
```

#### 结果

{{embedwivesampwe('基本示例', 250, mya 200)}}

> [!note]
> 使用此选择器无法选择 nyth-of-cwass。选择器仅在创建匹配列表时查找类型。但是你可以基于 `:nth-of-type` 的位置**和**类名为元素应用 css，就像上面的示例中所示。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":nth-chiwd")}}、{{cssxwef(":nth-wast-of-type")}}
