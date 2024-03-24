---
title: Контекст наложения (stacking context)
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
---

Контекст наложения (stacking context) это концепция трёхмерного расположения HTML-элементов вдоль оси Z по отношению к пользователю, находящемуся перед экраном. HTML-элементы занимают это место по порядку, основанному на атрибутах элемента.

« [CSS](/ru/docs/CSS) « [Understanding CSS z-index](/ru/docs/CSS/Understanding_z-index)

## Контекст наложения

В предыдущем примере [Добавляем z-index](/ru/docs/CSS/Understanding_z-index/Adding_z-index), порядок отображения определённых DIVs элементов зависел от их z-index значения. Это возникает благодаря тому, что у этих элементов есть специальные свойства, которые заставляют их формировать контекст наполнения ( _stacking context )_.

Контекст может формироваться в любом месте документа, любым элементом, у которого выполняется одно из следующих условий:

- является корневым элементом (HTML),
- позиционирован абсолютно (position:absolute) или относительно (position:relative) с z-index значением отличным от "auto",
- flex элемент с z-index отличным от "auto", чей родительский элемент имеет свойство display: flex|inline-flex,
- элементы с {{cssxref("opacity")}} меньше чем 1. (См. [the specification for opacity](http://www.w3.org/TR/css3-color/#transparency)),
- элементы с {{cssxref("transform")}} отличным от "none",
- элементы с {{cssxref("mix-blend-mode")}} значением отличным от "normal",
- элементы с {{cssxref("filter")}} значением отличным от "none",
- элементы с {{cssxref("isolation")}} установленным в "isolate",
- `position: fixed`
- если мы указываем элементу атрибут `{{cssxref("will-change")}}` при этом не обязательно присваивать ему значения (См. [this post](http://dev.opera.com/articles/css-will-change-property/))
- элементы с {{cssxref("-webkit-overflow-scrolling")}} установленным в "touch"

Внутри контекста наложения дочерние элементы расположены в соответствии с правилами, описанными ранее. Важно заметить, что значения свойства z-index для дочерних элементов формирующих контекст наложения, будут учитываться только в рамках родительского элемента. Контекст наложения обрабатываются атомарно, как единое целое в контексте наложения родителя.

Суммируем:

- Позиционирование и присваивание HTML-элементам свойства z-index создаёт контекст наложения, (так же как и присваивание элементу opacity меньше 1).
- Контексты наложения могут быть частью других контекстов наложения и вместе создавать иерархию контекстов наложения.
- Каждый контекст наложения абсолютно независим от своего соседа: только подчинённые элементы учитываются при обработке контекста наложения.

> **Примечание:** Иерархия контекстов наложения является подмножеством иерархии HTML-элементов, потому что только определённые элементы создают контексты наложения. Можно сказать, что элементы, которые не создают собственного контекста наложения, используют контекст наложения родителя.

## Пример

![Example of stacking rules modified using z-index](understanding_zindex_04.png)

В примере каждый позиционированный элемент создаёт свой контекст наложения, так как имеет свойства position и z-index. Иерархия контекстов наложения выглядит следующим образом:

- Root

  - DIV #1
  - DIV #2
  - DIV #3

    - DIV #4
    - DIV #5
    - DIV #6

Важно отметить, что DIV #4, DIV #5 и DIV #6 являются дочерними для DIV #3, поэтому они полностью располагаются в DIV#3. Once stacking and rendering within DIV #3 is completed, the whole DIV #3 element is passed for stacking in the root element with respect to its sibling's DIV.

> **Примечание:**
>
> - DIV #4 отрисовывается под DIV #1, потому что z-index (5) DIV #1 действителен внутри контакта наложения корневого элемента, в то время как z-index (6) DIV #4 действителен внутри контекста наложения DIV #3. Поэтому, DIV #4 находиться ниже DIV #1, потому что DIV #4 принадлежит DIV #3, который в свою очередь имеет меньший z-index(по сравнению с .DIV #1).
> - По этим же причинам DIV #2 (z-index 2) отрисовывается под DIV#5 (z-index 1), так как DIV #5 принадлежит DIV #3, чей z-index больше( чем z-index DIV #2).
> - У DIV #3 есть свойство z-index 4, но это значение независимо от z-index'ов DIV #4, DIV #5 и DIV #6, потому что принадлежат они разным контекстам наложения.
> - An easy way to figure out the _rendering order_ of stacked elements along the Z axis is to think of it as a "version number" of sorts, where child elements are minor version numbers underneath their parent's major version numbers. This way we can easily see how an element with a z-index of 1 (DIV #5) is stacked above an element with a z-index of 2 (DIV #2), and how an element with a z-index of 6 (DIV #4) is stacked below an element with a z-index of 5 (DIV #1). In our example (sorted according to the final rendering order):
>
>   - Root
>
>     - DIV #2 - z-index is 2
>     - DIV #3 - z-index is 4
>
>       - DIV #5 - z-index is 1, stacked under an element with a z-index of 4, which results in a rendering order of 4.1
>       - DIV #6 - z-index is 3, stacked under an element with a z-index of 4, which results in a rendering order of 4.3
>       - DIV #4 - z-index is 6, stacked under an element with a z-index of 4, which results in a rendering order of 4.6
>
>     - DIV #1 - z-index is 5

## Example Source Code

```html
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
  <head>
    <title>
      Understanding CSS z-index: The Stacking Context: Example Source
    </title>

    <style type="text/css">
      * {
        margin: 0;
      }
      html {
        padding: 20px;
        font:
          12px/20px Arial,
          sans-serif;
      }
      div {
        opacity: 0.7;
        position: relative;
      }
      h1 {
        font: inherit;
        font-weight: bold;
      }
      #div1,
      #div2 {
        border: 1px dashed #696;
        padding: 10px;
        background-color: #cfc;
      }
      #div1 {
        z-index: 5;
        margin-bottom: 190px;
      }
      #div2 {
        z-index: 2;
      }
      #div3 {
        z-index: 4;
        opacity: 1;
        position: absolute;
        top: 40px;
        left: 180px;
        width: 330px;
        border: 1px dashed #900;
        background-color: #fdd;
        padding: 40px 20px 20px;
      }
      #div4,
      #div5 {
        border: 1px dashed #996;
        background-color: #ffc;
      }
      #div4 {
        z-index: 6;
        margin-bottom: 15px;
        padding: 25px 10px 5px;
      }
      #div5 {
        z-index: 1;
        margin-top: 15px;
        padding: 5px 10px;
      }
      #div6 {
        z-index: 3;
        position: absolute;
        top: 20px;
        left: 180px;
        width: 150px;
        height: 125px;
        border: 1px dashed #009;
        padding-top: 125px;
        background-color: #ddf;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div id="div1">
      <h1>Division Element #1</h1>
      <code
        >position: relative;<br />
        z-index: 5;</code
      >
    </div>

    <div id="div2">
      <h1>Division Element #2</h1>
      <code
        >position: relative;<br />
        z-index: 2;</code
      >
    </div>

    <div id="div3">
      <div id="div4">
        <h1>Division Element #4</h1>
        <code
          >position: relative;<br />
          z-index: 6;</code
        >
      </div>

      <h1>Division Element #3</h1>
      <code
        >position: absolute;<br />
        z-index: 4;</code
      >

      <div id="div5">
        <h1>Division Element #5</h1>
        <code
          >position: relative;<br />
          z-index: 1;</code
        >
      </div>

      <div id="div6">
        <h1>Division Element #6</h1>
        <code
          >position: absolute;<br />
          z-index: 3;</code
        >
      </div>
    </div>
  </body>
</html>
```

### Division Element #1

```css
position: relative;
z-index: 5;
```

### Division Element #2

```css
position: relative;
z-index: 2;
```

### Division Element #3

```css
position: absolute;
z-index: 4;
```

### Division Element #4

```css
position: relative;
z-index: 6;
```

### Division Element #5

```css
position: relative;
z-index: 1;
```

### Division Element #6

```css
position: absolute;
z-index: 3;
```

## Смотрите также

- [Stacking without z-index](/ru/docs/CSS/Understanding_z-index/Stacking_without_z-index) : Default stacking rules
- [Stacking and float](/ru/docs/CSS/Understanding_z-index/Stacking_and_float) : How floating elements are handled
- [Adding z-index](/ru/docs/CSS/Understanding_z-index/Adding_z-index) : Using z-index to change default stacking
- [Stacking context example 1](/ru/docs/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/ru/docs/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/ru/docs/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level
