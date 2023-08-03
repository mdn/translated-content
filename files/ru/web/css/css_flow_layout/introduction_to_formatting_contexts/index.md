---
title: Введение в контексты форматирования
slug: Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts
---

{{CSSRef}}

В этой статье представлена концепция контекстов форматирования (formatting context). Существует несколько типов контекстов форматирования, например, блочный контекст форматирования (block formatting context, BFC), строчный контекст форматирования (inline formatting context), флексовый контекст форматирования (flex formatting context). В статье даны основы того, как они себя ведут, и как вы можете использовать это поведение.

Всё на странице является частью **контекста форматирования** (formatting context), который представляет собой область, в которой происходит раскладка контента по определённым правилам. **Блочный контекст форматирования** (block formatting context, BFC) делает раскладку своих дочерних элементов в соответствии с правилами блочной раскладки, **флексовый контекст форматирования** (flex formatting context) раскладывает свои дочерние элементы как {{Glossary("flex item", "флекс-элементы")}} и т.д. Каждый контекст форматирования использует свои правила раскладки.

## Блочные контексты форматирования

Самый внешний элемент в документе, который использует правила блочной раскладки, устанавливает первый или **начальный блочный контекст форматирования** (initial block formatting context). Это означает, что все элементы внутри элемента `<html>` раскладываются в соответствии с нормальным потоком, следуя правилам блочной и строчной раскладки. Элементы, участвующие в БКФ, используют правила, описанные в модели бокса (CSS Box Model), которая определяет, как поля (margins), границы (borders) и отступы (paddings) элемента взаимодействуют с другими блоками в том же контексте.

### Создание нового блочного контекста форматирования

Элемент {{HTMLElement("html")}} не единственный, кто может создавать блочный контекст форматирования. Любой элемент, который по умолчанию представляет собой блок, также создаёт блочный контекст форматирования для своих потомков. Кроме того, существуют свойства CSS, которые могут заставить элемент создавать БКФ, даже если он не делает этого по умолчанию. Это может быть полезным поскольку новый БКФ будет вести себя во многом как внешний документа, в том смысле, что он создаёт новую мини-раскладку в основной раскладке. БКФ содержит все внутри себя, {{cssxref("float")}} and {{cssxref("clear")}} применяются только к элементам, которые находится в том же контексте форматирования, также как и поля (margings) схлопываются только между элементами одного и того же контекста форматирования.

Кроме корневого элемента ({{HTMLElement("html")}}) новый БКФ создаётся в следующих случаях:

- плавающие элементы ({{cssxref("float", "float: left", "#left")}} или {{cssxref("float", "float: right", "#right")}});
- абсолютно позиционированные элементы ({{cssxref("position", "position: absolute", "#absolute")}}, {{cssxref("position", "position: fixed", "#fixed")}} или {{cssxref("position", "position: sticky", "#sticky")}});
- элементы с {{cssxref("display", "display: inline-block", "#inline-block")}};
- ячейки табицы или элементы с `display: table-cell`, включая анонимные ячейки таблицы, которые создаются, когда используются свойства `display: table-*`;
- заголовки таблицы или элементы с `display: table-caption`;
- блочные элементы, когда значение свойства overflow отлично от `visible`;
- элементы с `display: flow-root` или `display: flow-root list-item`;
- элементы с {{cssxref("contain", "contain: layout", "#layout")}}, `content`, или `strict`
- {{Glossary("flex item", "флекс-элементы")}};
- грид-элементы;
- [контейнеры мультиколонок](/ru/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol);
- элементы с {{cssxref("column-span")}} в значении `all`.

Let's have a look at a couple of these in order to see the effect creating a new BFC.

In the example below, we have a floated element inside a `<div>` with a border applied. The content of that `div` has floated alongside the floated element. As the content of the float is taller than the content alongside it, the border of the div now runs through the float. As explained in the [guide to in-flow and out of flow elements](/ru/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow), the float has been taken out of flow so the background and border of the div only contain the content and not the float.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

Creating a new BFC would contain the float. A typical way to do this in the past has been to set `overflow: auto` or set other values than the initial value of `overflow: visible`.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}

Setting `overflow: auto` created a new BFC containing the float. Our `div` now becomes a mini-layout inside our layout. Any child element will be contained inside it.

The problem with using `overflow` to create a new BFC is that the `overflow` property is meant for telling the browser how you wish to deal with overflowing content. There are some occasions in which you will find you get unwanted scrollbars or clipped shadows when you use this property purely to create a BFC. In addition, it is potentially not very readable for a future developer, as it may not be obvious why you used overflow for this purpose. If you do this, it would be a good idea to comment the code to explain.

### Explicitly creating a BFC using display: flow-root

Using `display: flow-root` (or `display: flow-root list-item)` on the containing block will create a new BFC without any other potentially problematic side-effects.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 720)}}

With `display: flow-root` on the {{HTMLElement("div")}}, everything inside that container participates in the block formatting context of that container, and floats will not poke out of the bottom of the element.

The name of the `flow-root` keyword refers to the fact that you're creating something that serves, in essence, like a new root element (like {{HTMLElement("html")}} does), given how the new context is created and its flow layout functions.

## Inline formatting contexts

Inline formatting contexts exist inside other formatting contexts and can be thought of as the context of a paragraph. The paragraph creates an inline formatting context inside which such things as {{HTMLElement("strong")}}, {{HTMLElement("a")}}, or {{HTMLElement("span")}} elements are used on text.

The box model does not fully apply to items participating in an inline formatting context. In a horizontal writing mode line, horizontal padding, borders and margin will be applied to the element and push the text away left and right. However, margins above and below the element will not be applied. Vertical padding and borders will be applied but may overlap content above and below as, in the inline formatting context, the line boxes will not be pushed apart by padding and borders.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/inline.html", '100%', 720)}}

## Other formatting contexts

This guide covers flow layout and is therefore not referring to other possible formatting contexts. As such, it is useful to understand that creating any kind of formatting context will change the way elements inside that formatting context behave. This behavior is always described in the specification and also here on MDN.

## Summary

In this guide, we have looked in more detail at the block and Inline formatting contexts and the important subject of creating a block formatting context (BFC). In the next guide, we will find out [how normal flow interacts with different writing modes](/ru/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes).

## See also

- [Block formatting context](/ru/docs/Web/Guide/CSS/Block_formatting_context)
- [Visual Formatting Model](/ru/docs/Web/CSS/Visual_formatting_model)
- [CSS Box Model](/ru/docs/Web/CSS/CSS_Box_Model)
