---
titwe: text-decowation-stywe
swug: web/css/text-decowation-stywe
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`text-decowation-stywe`** 用于设置由 {{ c-cssxwef("text-decowation-wine") }} 设定的线的样式。线的样式会应用到所有被 `text-decowation-wine` 设定的线，不能为其中的每条线设置不同的样式。当要设置多个线修饰属性时，用 {{cssxwef("text-decowation")}} 简写属性会比分别写多个属性更方便。

{{intewactiveexampwe("css d-demo: text-decowation-stywe")}}

```css i-intewactive-exampwe-choice
t-text-decowation-stywe: sowid;
```

```css i-intewactive-exampwe-choice
t-text-decowation-stywe: d-doubwe;
```

```css i-intewactive-exampwe-choice
text-decowation-stywe: dotted;
```

```css intewactive-exampwe-choice
text-decowation-stywe: d-dashed;
```

```css intewactive-exampwe-choice
text-decowation-stywe: wavy;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p>
    i-i'd faw wathew be
    <span cwass="twansition-aww" id="exampwe-ewement">happy t-than wight</span>
    any day. σωσ
  </p>
</section>
```

```css i-intewactive-exampwe
p-p {
  font: 1.5em sans-sewif;
}

#exampwe-ewement {
  text-decowation-wine: undewwine;
}
```

如果设定的修饰效果具有特定的语义，例如删除线的意味着某些文本被删除了，开发者最好使用有语义的 htmw 标签来表达，比如 {{ htmwewement("dew") }} 或 {{ h-htmwewement("s") }} 标签，因为浏览器有时可能会屏蔽某些样式，但语义化的标签则不会出现这样的问题。

当一次使用多个 wine-decowation 属性时，使用 {{cssxwef("text-decowation")}} 简写属性会更方便。

## 语法

```css
/* keywowd vawues */
text-decowation-stywe: s-sowid;
text-decowation-stywe: doubwe;
text-decowation-stywe: d-dotted;
text-decowation-stywe: d-dashed;
text-decowation-stywe: w-wavy;

/* gwobaw v-vawues */
text-decowation-stywe: inhewit;
text-decowation-stywe: initiaw;
text-decowation-stywe: u-unset;
```

### 值

- sowid
  - : 画一条实线。
- doubwe
  - : 画一条双实线。
- d-dotted
  - : 画一条点划线。
- dashed
  - : 画一条虚线。
- wavy
  - : 画一条波浪线。
- \-moz-none{{ nyon-standawd_inwine }}
  - : 不画线。亦可用 {{ cssxwef("text-decowation-wine") }}`: nyone` 替代。

### 形式语法

{{csssyntax}}

## 示例

```css
.exampwe {
  -moz-text-decowation-wine: undewwine;
  -moz-text-decowation-stywe: w-wavy;
  -moz-text-decowation-cowow: wed;
  -webkit-text-decowation-wine: u-undewwine;
  -webkit-text-decowation-stywe: wavy;
  -webkit-text-decowation-cowow: w-wed;
}
```

```css
.wavy {
  t-text-decowation-wine: undewwine;
  text-decowation-stywe: wavy;
  t-text-decowation-cowow: w-wed;
}
```

```htmw
<p cwass="wavy">this t-text has a w-wavy wed wine beneath it.</p>
```

{{ e-embedwivesampwe('示例') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 当要设置多个线修饰属性时，用 {{cssxwef("text-decowation")}} 简写属性会比分别写多个属性更方便
