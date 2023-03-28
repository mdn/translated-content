---
title: Tipo, classes e Seletores ID.
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

Nesta lição, vamos analisar alguns dos seletores simples, o qual provavelmente serão os mais frequentemente usados no seu trabalho.
<table>
  <tbody>
    <tr>
      <th scope="row">Pré-requistos:</th>
      <td>Familiaridade básica com uso de computadores,
        <a
          href="/pt-BR/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Instalando software básico</a
        >, conhecimento básico em
        <a
          href="/pt-BR/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >como trabalhar com arquivos</a
        >, HTML básico (estude
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
        >), e uma ideia de como o CSS funciona  (estude
        <a href="/pt-BR/docs/Learn/CSS/First_steps">CSS primeiros passos</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender sobre os diferentes seletores CSS, que podemos usar para aplicar em um documento CSS.
      </td>
    </tr>
  </tbody>
</table>

## Seletores de tipo

Os **seletores de tipo** podem ser chamados de _seletor de tag_ ou _seletor de elemento_, porque o mesmo seleciona uma tag/elemento HTML no seu documento. No exemplo abaixo, nós usamos os seletores de tipo para selecionar as tag/elemento `span`, `em` e `strong`.

**Tente adicionar uma regra CSS para selecionar a tag/elemento `<h1>`  e mudar sua cor para azul.**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## Seletor universal

O seletor universal é indicado por um (`*`). Com ele, é possível selecionar tudo que está no documento (ou dentro do elemento pai se estiver sendo encadeado com outro elemento e um combinador descendente). No exemplo a seguir, nós usamos o seletor universal para remover as margens de todos elementos, substituindo o comportamento padrão do navegador (no comportamento padrão dos navegadores, os elementos HTML possuem margens). Em vez da margem adicionada automaticamente pelo comportamento padrão dos navegadores nas tags de cabeçalhos (`<h1> <h2> <h3> <h4> <h5> <h6>`) e paragráfos (`<p>`), as mesmas foram retiradas, deixando o coteúdo mais próximo um do outro.

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

This kind of behavior can sometimes be seen in "reset stylesheets", which strip out all of the browser styling. Since the universal selector makes global changes, we use it for very specific situations, such as the one described below.

### Using the universal selector to make your selectors easier to read

One use of the universal selector is to make selectors easier to read and more obvious in terms of what they are doing. For example, if we wanted to select any descendant elements of an `<article>` element that are the first child of their parent, including direct children, and make them bold, we could use the {{cssxref(":first-child")}} pseudo-class. We will learn more about this in the lesson on [pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements), as a descendant selector along with the `<article>` element selector:

```css
article :first-child {
  font-weight: bold;
}
```

However, this selector could be confused with `article:first-child`, which will select any `<article>` element that is the first child of another element.

To avoid this confusion, we can add the universal selector to the `:first-child` pseudo-class, so it is more obvious what the selector is doing. It is selecting _any_ element which is the first-child of an `<article>` element, or the first-child of any descendant element of `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Although both do the same thing, the readability is significantly improved.

## Class selectors

The class selector starts with a dot (`.`) character. It will select everything in the document with that class applied to it. In the live example below we have created a class called `highlight`, and have applied it to several places in my document. All of the elements that have the class applied are highlighted.

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### Targeting classes on particular elements

You can create a selector that will target specific elements with the class applied. In this next example, we will highlight a `<span>` with a class of `highlight` differently to an `<h1>` heading with a class of `highlight`. We do this by using the type selector for the element we want to target, with the class appended using a dot, with no white space in between.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

This approach reduces the scope of a rule. The rule will only apply to that particular element and class combination. You would need to add another selector if you decided the rule should apply to other elements too.

### Target an element if it has more than one class applied

You can apply multiple classes to an element and target them individually, or only select the element when all of the classes in the selector are present. This can be helpful when building up components that can be combined in different ways on your site.

In the example below, we have a `<div>` that contains a note. The grey border is applied when the box has a class of `notebox`. If it also has a class of `warning` or `danger`, we change the {{cssxref("border-color")}}.

We can tell the browser that we only want to match the element if it has two classes applied by chaining them together with no white space between them. You'll see that the last `<div>` doesn't get any styling applied, as it only has the `danger` class; it needs `notebox` as well to get anything applied.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## ID selectors

An ID selector begins with a `#` rather than a dot character, but is used in the same way as a class selector. However, an ID can be used only once per page, and elements can only have a single `id` value applied to them. It can select an element that has the `id` set on it, and you can precede the ID with a type selector to only target the element if both the element and ID match. You can see both of these uses in the following example:

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> **Warning:** Using the same ID multiple times in a document may appear to work for styling purposes, but don't do this. It results in invalid code, and will cause strange behavior in many places.

> **Note:** As we learned in the lesson on specificity, an ID has high specificity. It will overrule most other selectors. In most cases, it is preferable to add a class to an element instead of an ID. However, if using the ID is the only way to target the element — perhaps because you do not have access to the markup and cannot edit it — this will work.

## Summary

That wraps up Type, class, and ID selectors. We'll continue exploring selectors by looking at [attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}
