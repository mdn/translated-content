---
title: Краткая форма записи свойств
slug: Web/CSS/Shorthand_properties
---

{{cssref}}

**_Сокращённые свойства_** - это такие CSS-свойства, которые позволяют одновременно устанавливать значения нескольких других свойств. Используя сокращённое свойство, вы можете писать более сжатые (и часто более читаемые) таблицы стилей, экономя время и энергию.

The CSS specification defines shorthand properties to group the definition of common properties acting on the same theme. For instance, the CSS {{cssxref("background")}} property is a shorthand property that's able to define the values of {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}}, and {{cssxref("background-position")}}. Similarly, the most common font-related properties can be defined using the shorthand {{cssxref("font")}}, and the different margins around a box can be defined using the {{cssxref("margin")}} shorthand.

## Tricky edge cases

Even if they are very convenient to use, there are a few edge cases to keep in mind when using them:

1. A value which is not specified is set to its initial value. That sounds anecdotal, but it really means that it **overrides** previously set values. Therefore:

   ```css
   background-color: red;
   background: url(images/bg.gif) no-repeat left top;
   ```

   will not set the color of the background to `red` but to {{cssxref("background-color")}}'s default, `transparent`, as the second rule has precedence.

2. Only the individual properties values can inherit. As missing values are replaced by their initial value, it is impossible to allow inheritance of individual properties by omitting them. The keyword `inherit` can be applied to a property, but only as a whole, not as a keyword for one value or another. That means that the only way to make some specific value to be inherited is to use the longhand property with the keyword `inherit`.
3. Shorthand properties try not to force a specific order for the values of the properties they replace. This works well when these properties use values of different types, as the order has no importance, but this does not work as easily when several properties can have identical values. Handling of these cases are grouped in several categories:

   1. Shorthands handling properties related to edges of a box, like {{cssxref("border-style")}}, {{cssxref("margin")}} or {{cssxref("padding")}}, always use a consistent 1-to-4-value syntax representing those edges:

      | ![border1.png](/files/3646/border1.png) | _The 1-value syntax_: `border-width: 1em` — The unique value represents all edges                                                                                                                                                                                                                               |
      | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | ![border2.png](/files/3647/border2.png) | _The 2-value syntax_: `border-width: 1em 2em` — The first value represents the vertical, that is top and bottom, edges, the second the horizontal ones, that is the left and right ones.                                                                                                                        |
      | ![border3.png](/files/3648/border3.png) | _The 3-value syntax_: `border-width: 1em 2em 3em` — The first value represents the top edge, the second, the horizontal, that is left and right, ones, and the third value the bottom edge                                                                                                                      |
      | ![border4.png](/files/3649/border4.png) | _The 4-value syntax_: `border-width: 1em 2em 3em 4em` — The four values represent the top, right, bottom and left edges respectively, always in that order, that is clock-wise starting at the top (The initial letter of Top-Right-Bottom-Left matches the order of the consonant of the word _trouble_: TRBL) |

   2. Similarly, shorthands handling properties related to corners of a box, like {{cssxref("border-radius")}}, always use a consistent 1-to-4-value syntax representing those corners:

      | ![corner1.png](/files/3650/corner1.png) | _The 1-value syntax_: `border-radius: 1em` — The unique value represents all corners                                                                                                                                              |
      | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | ![corner2.png](/files/3651/corner2.png) | _The 2-value syntax_: `border-radius: 1em 2em` — The first value represents the top left and bottom right corner, the second the top right and bottom left ones.                                                                  |
      | ![corner3.png](/files/3652/corner3.png) | _The 3-value syntax_: `border-radius: 1em 2em 3em` — The first value represents the top left corner, the second the top right and bottom left ones, and the third value the bottom right corner                                   |
      | ![corner4.png](/files/3653/corner4.png) | _The 4-value syntax_: `border-radius: 1em 2em 3em 4em` — The four values represent the top left, top right, bottom right and bottom left corners respectively, always in that order, that is clock-wise starting at the top left. |

## Background properties

A background with the following properties ...

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

... can be shortened to just one declaration:

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(The shorthand form is actually the equivalent of the longhand properties above plus `background-attachment: scroll` and, in CSS3, some additional properties.)

## Font properties

The following declarations ...

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

... can be shortened to the following:

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

This shorthand declaration is actually equivalent to the longhand declarations above plus `font-variant: normal` and `font-size-adjust: none` (CSS2.0 / CSS3), `font-stretch: normal` (CSS3).

## Border properties

With borders, the width, color, and style can be simplified into one declaration. For example, the following CSS ...

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

... can be simplified as:

```css
border: 1px solid #000;
```

## Margin and padding properties

Shorthand versions of margin and padding values work the same way. The following CSS declarations ...

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

... are the same as the following declaration. Note that the values are in clockwise order, beginning at the top: top, right, bottom, then left (TRBL, the consonants in "trouble").

```css
margin: 10px 5px 10px 5px;
```

## See also

- Ключевые концепции CSS
  - [Синтаксис CSS](/ru/docs/Web/CSS/Syntax)
  - [@-правила](/ru/docs/Web/CSS/At-rule)
  - [комментарии](/ru/docs/Web/CSS/Comments)
  - [специфичность](/ru/docs/Web/CSS/Specificity)
  - [наследование](/ru/docs/Web/CSS/inheritance)
  - [блочная модель](/ru/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [режимы компоновки](/ru/docs/Web/CSS/Layout_mode)
  - [модели визуального форматирования](/ru/docs/Web/CSS/Visual_formatting_model)
  - [Схлопывание отступов](/ru/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Значения
    - [начальные](/ru/docs/Web/CSS/initial_value)
    - [вычисленные](/ru/docs/Web/CSS/computed_value)
    - [используемые](/ru/docs/Web/CSS/used_value)
    - [действительные](/ru/docs/Web/CSS/actual_value)
  - [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
  - [Сокращённые свойства](/ru/docs/Web/CSS/Shorthand_properties)
  - [Замещаемые элементы](/ru/docs/Web/CSS/Replaced_element)
- Shorthand properties: {{cssxref("animation")}}, {{cssxref("background")}}, {{cssxref("border")}}, {{cssxref("border-bottom")}}, {{cssxref("border-color")}}, {{cssxref("border-left")}}, {{cssxref("border-radius")}}, {{cssxref("border-right")}}, {{cssxref("border-style")}}, {{cssxref("border-top")}}, {{cssxref("border-width")}}, {{cssxref("column-rule")}}, {{cssxref("columns")}}, {{cssxref("flex")}}, {{cssxref("flex-flow")}}, {{cssxref("font")}}, {{cssxref("grid")}}, {{cssxref("grid-area")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("grid-template")}}, {{cssxref("list-style")}}, {{cssxref("margin")}}, {{cssxref("offset")}}, {{cssxref("outline")}}, {{cssxref("overflow")}}, {{cssxref("padding")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, {{cssxref("place-self")}}, {{cssxref("text-decoration")}}, {{cssxref("transition")}}
