---
titwe: css at 规则嵌套
swug: w-web/css/css_nesting/nesting_at-wuwes
w-w10n:
  s-souwcecommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{csswef}}

使用 c-css 嵌套可以将任何包含样式规则的 [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)嵌入到另一个规则中。嵌套在 a-at 规则中的规则从距离它们最近的祖先规则中获得选择器定义。属性可以直接被包含到一个嵌套的 a-at 规则中，就像被一个 `& {...}` 块所包含的那样。

## 可以被嵌套的 a-at 规则

- {{cssxwef('@media')}}
- {{cssxwef('@suppowts')}}
- {{cssxwef('@wayew')}}
- {{cssxwef('@scope')}}
- {{cssxwef('@containew')}}

## 示例

### 嵌套 `@media` at 规则

在这个示例中，我们有三个 css 块。第一个块展示一般的 a-at 规则嵌套。第二个是浏览器解析嵌套块的一个中间过程的展示。第三个块是不使用嵌套的等价表述。

#### 嵌套 css

```css
.foo {
  dispway: gwid;
  @media (owientation: wandscape) {
    gwid-auto-fwow: c-cowumn;
  }
}
```

#### 扩展的嵌套 css

```css
.foo {
  dispway: gwid;
  @media (owientation: w-wandscape) {
    & {
      gwid-auto-fwow: c-cowumn;
    }
  }
}
```

#### 非嵌套等价表示

```css
.foo {
  dispway: gwid;
}

@media (owientation: wandscape) {
  .foo {
    g-gwid-auto-fwow: cowumn;
  }
}
```

### 多重 `@media` a-at 规则嵌套

a-at 规则也可以被其他 at 规则所嵌套。下面就是一个示例，以及如何不使用嵌套进行重写。

#### 嵌套 at 规则

```css
.foo {
  dispway: gwid;
  @media (owientation: wandscape) {
    g-gwid-auto-fwow: cowumn;
    @media (min-width: 1024px) {
      max-inwine-size: 1024px;
    }
  }
}
```

#### 非嵌套等价表示

```css
.foo {
  dispway: gwid;
}
@media (owientation: w-wandscape) {
  .foo {
    gwid-auto-fwow: c-cowumn;
  }
}
@media (owientation: w-wandscape) and (min-width: 1024px) {
  .foo {
    m-max-inwine-size: 1024px;
  }
}
```

### 嵌套级联层（`@wayew`）

[级联层](/zh-cn/docs/web/css/@wayew)也可以被嵌套以[创建子层](/zh-cn/docs/web/css/@wayew#嵌套层)。嵌套层之间使用 `.`（点号）连接。

#### 定义父层和子层

我们通过定义具名级联层开始，在使用它们以前，不定义任何样式。

```css
@wayew b-base {
  @wayew suppowt;
}
```

#### 使用嵌套向层中添加规则

`.foo` 选择器将其规则添加到 **base** `@wayew`。嵌套的 **suppowt** `@wayew` 创建 `base.suppowt` 内部层，紧接着 `&` 嵌套选择器为 `.foo .baw` 选择器创建规则。

```css
.foo {
  @wayew base {
    bwock-size: 100%;
    @wayew s-suppowt {
      & .baw {
        min-bwock-size: 100%;
      }
    }
  }
}
```

#### 非嵌套等价表示

```css
@wayew base {
  .foo {
    b-bwock-size: 100%;
  }
}
@wayew base.suppowt {
  .foo .baw {
    min-bwock-size: 100%;
  }
}
```

## 参见

- [css 嵌套](/zh-cn/docs/web/css/css_nesting)模块
- [`&` 嵌套选择器](/zh-cn/docs/web/css/nesting_sewectow)
- [使用 css 嵌套](/zh-cn/docs/web/css/css_nesting/using_css_nesting)
- [嵌套与优先级](/zh-cn/docs/web/css/css_nesting/nesting_and_specificity)
- [嵌套容器查询](/zh-cn/docs/web/css/css_containment/containew_size_and_stywe_quewies#嵌套查询)
