---
title: '@supports'
slug: Web/CSS/@supports
translation_of: Web/CSS/@supports
---

{{ CSSRef() }}

## Описание

The `@supports` [CSS](/en/CSS) [at-rule](/en/CSS/At-rule) associates a set of nested statements, in a CSS block, that is delimited by curly braces, with a condition consisting of testing of CSS declarations, that is property-value pairs, combined with arbitrary conjunctions, disjunctions, and negations of them. Such a condition is called a _supports condition_.

`@supports` gives CSS the ability to perform a _feature query_.

The `@supports` at-rule may be used not only at the top level of a CSS, but also inside any [CSS conditional-group at-rule](/en/CSS/At-rule#Conditional_Group_Rules) and can be accessed via the CSS object model interface {{domxref("CSSSupportsRule")}}.

## Синтаксис

A supports condition consists of one or several declarations combined by different logical operators. Precedence of operators can be overruled by using parentheses.

### Синтаксис объявления

The simplest expression is a CSS declaration, that is a CSS property name followed by a value, separated by a colon. The following expression

```css
( transform-origin: 5% 5% )
```

returns true if the {{ cssxref("transform-origin") }} implements a syntax considering `5% 5%` as valid.

A CSS declaration is always surrounded by parentheses.

### Оператор not

The `not` operator can precede any expression to create a new expression, resulting in the negation of the original expression. The following expression

```css
not ( transform-origin: 10em 10em 10em )
```

returns true if {{ cssxref("transform-origin") }} doesn't implement a syntax considering `10em 10em 10em` as valid.

Like any operator, the `not` operator can be applied to a declaration of any complexity. The following examples are all valid expressions:

```css
not ( not ( transform-origin: 2px ) )
(display: flexbox) and ( not (display: inline-grid) )
```

> **Предупреждение:** there is no need to enclose the `not` operator between two parentheses when at the top level. To combine it with other operators, like `and` and `or`, the parentheses are required.

### Оператор and

From two expressions, the `and` operator creates a new expression consisting in the conjunction of the two original ones; the resulting expression is true only if both of the original expressions also resolve to true. In this example, the complete expression resolves to true if and only if the two expressions are simultaneously true:

```css
(display: table-cell) and (display: list-item)
```

Several conjunctions can be juxtaposed without the need of more parentheses:

```css
(display: table-cell) and (display: list-item) and (display:run-in)
```

is equivalent to:

```css
(display: table-cell) and ((display: list-item) and (display:run-in))
```

### Оператор or

From two expressions, the `or` operator creates a new expression consisting in the disjunction of the two original ones; the resulting expression is true if one, or both, of the original expressions also resolves to true. In this example, the complete expression resolves to true if at least one of the two expressions is true:

```css
( transform-style: preserve ) or ( -moz-transform-style: preserve )
```

Several disjunctions can be juxtaposed without the need of more parentheses:

```css
( transform-style: preserve ) or ( -moz-transform-style: preserve ) or
( -o-transform-style: preserve ) or ( -webkit-transform-style: preserve  )
```

is equivalent to:

```css
( transform-style: preserve-3d ) or (( -moz-transform-style: preserve-3d ) or
(( -o-transform-style: preserve-3d ) or ( -webkit-transform-style: preserve-3d  )))
```

> **Предупреждение:** when using both `and` and `or` operators, the parentheses must be used in order to define the order in which they apply. If not, the condition is invalid leading to the whole at-rule to be ignored.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Тестирование заданного свойства

```css
@supports (animation-name: test) {
    … /* specific CSS applied when animations are supported unprefixed */
    @keyframes { /* @supports being a CSS conditional group at-rule, it can includes other relevant at-rules */
      …
    }
}
```

### Тестирование заданного свойства или его версии с префиксом

```css
@supports ( (perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or
            (-ms-perspective: 10px) or (-o-perspective: 10px) ) {
    … /* specific CSS applied when 3D transforms, eventually prefixed, are supported */
}
```

### Тестирование неподдерживаемого или специфического свойства

```css
@supports not ((text-align-last:justify) or (-moz-text-align-last:justify) ){
    … /* specific CSS applied to simulate text-align-last:justify */
}
```

## Спецификации

| Спецификация                                                                         | Статус                                   | Комментарий                 |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | --------------------------- |
| {{ SpecName('CSS3 Conditional', '#at-supports', '@supports') }} | {{ Spec2('CSS3 Conditional') }} | Первоначальное определение. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- The CSSOM class {{ domxref("CSSSupportsRule") }}, and the {{ domxref("CSS.supports") }} method that allows to perform the same check via JavaScript.
