---
title: CSS at 规则嵌套
slug: Web/CSS/CSS_nesting/Nesting_at-rules
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{CSSRef}}

使用 CSS 嵌套可以将任何包含样式规则的 [at 规则](/zh-CN/docs/Web/CSS/At-rule)嵌入到另一个规则中。嵌套在 at 规则中的规则从距离它们最近的祖先规则中获得选择器定义。属性可以直接被包含到一个嵌套的 at 规则中，就像被一个 `& {...}` 块所包含的那样。

## 可以被嵌套的 at 规则

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}

## 示例

### 嵌套 `@media` at 规则

在这个示例中，我们有三个 CSS 块。第一个块展示一般的 at 规则嵌套。第二个是浏览器解析嵌套块的一个中间过程的展示。第三个块是不使用嵌套的等价表述。

#### 嵌套 CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
  }
}
```

#### 扩展的嵌套 CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    & {
      grid-auto-flow: column;
    }
  }
}
```

#### 非嵌套等价表示

```css
.foo {
  display: grid;
}

@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
```

### 多重 `@media` at 规则嵌套

At 规则也可以被其他 at 规则所嵌套。下面就是一个示例，以及如何不使用嵌套进行重写。

#### 嵌套 at 规则

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
    @media (min-width: 1024px) {
      max-inline-size: 1024px;
    }
  }
}
```

#### 非嵌套等价表示

```css
.foo {
  display: grid;
}
@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
@media (orientation: landscape) and (min-width: 1024px) {
  .foo {
    max-inline-size: 1024px;
  }
}
```

### 嵌套级联层（`@layer`）

[级联层](/zh-CN/docs/Web/CSS/@layer)也可以被嵌套以[创建子层](/zh-CN/docs/Web/CSS/@layer#嵌套层)。嵌套层之间使用 `.`（点号）连接。

#### 定义父层和子层

我们通过定义具名级联层开始，在使用它们以前，不定义任何样式。

```css
@layer base {
  @layer support;
}
```

#### 使用嵌套向层中添加规则

`.foo` 选择器将其规则添加到 **base** `@layer`。嵌套的 **support** `@layer` 创建 `base.support` 内部层，紧接着 `&` 嵌套选择器为 `.foo .bar` 选择器创建规则。

```css
.foo {
  @layer base {
    block-size: 100%;
    @layer support {
      & .bar {
        min-block-size: 100%;
      }
    }
  }
}
```

#### 非嵌套等价表示

```css
@layer base {
  .foo {
    block-size: 100%;
  }
}
@layer base.support {
  .foo .bar {
    min-block-size: 100%;
  }
}
```

## 参见

- [CSS 嵌套](/zh-CN/docs/Web/CSS/CSS_nesting)模块
- [`&` 嵌套选择器](/zh-CN/docs/Web/CSS/Nesting_selector)
- [使用 CSS 嵌套](/zh-CN/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [嵌套与优先级](/zh-CN/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [嵌套容器查询](/zh-CN/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#嵌套查询)
