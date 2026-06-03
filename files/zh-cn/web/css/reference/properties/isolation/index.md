---
title: isolation
slug: Web/CSS/Reference/Properties/isolation
l10n:
  sourceCommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

**`isolation`** [CSS](/zh-CN/docs/Web/CSS) 属性决定了元素是否必须创建一个新的{{glossary("stacking context", "层叠上下文")}}。

{{InteractiveExample("CSS Demo: isolation")}}

```css interactive-example-choice
isolation: auto;
```

```css interactive-example-choice
isolation: isolate;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="background-container">
    <div id="example-element">
      <img src="/shared-assets/images/examples/firefox-logo.svg" />
      <p><code>mix-blend-mode: multiply;</code></p>
    </div>
  </div>
</section>
```

```css interactive-example
.background-container {
  background-color: #f4f460;
  width: 250px;
}

#example-element {
  border: 1px solid black;
  margin: 2em;
}

#example-element * {
  mix-blend-mode: multiply;
  color: #8245a3;
}
```

该属性与 {{cssxref("mix-blend-mode")}} 和 {{cssxref("z-index")}} 结合使用时尤其有用。

## 语法

```css
/* 关键字值 */
isolation: auto;
isolation: isolate;

/* 全局值 */
isolation: inherit;
isolation: initial;
isolation: revert;
isolation: revert-layer;
isolation: unset;
```

`isolation` 属性指定为下列关键字值之一。

### 值

- `auto`
  - : 只有当应用于元素的某个属性需要时，才会创建一个新的层叠上下文。
- `isolate`
  - : 必须创建新的层叠上下文。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 强制为元素创建新的层叠上下文

#### HTML

```html
<div class="big-square ">
  <div class="isolation-auto">
    <div class="small-square">auto</div>
  </div>
  <div class="isolation-isolate">
    <div class="small-square">isolate</div>
  </div>
</div>
```

#### CSS

```css
.isolation-auto {
  isolation: auto;
}

.isolation-isolate {
  isolation: isolate;
}

.big-square {
  background-color: rgb(0, 255, 0);
  width: 200px;
  height: 210px;
}

.small-square {
  background-color: rgb(0, 255, 0);
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
```

#### 结果

{{ EmbedLiveSample('强制为元素创建新的层叠上下文', 230, 230) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}、{{cssxref("background-blend-mode")}}
