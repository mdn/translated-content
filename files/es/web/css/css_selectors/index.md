---
title: Selectores CSS
slug: Web/CSS/CSS_selectors
---

{{CSSRef}}

Los **selectores** definen sobre qué elementos se aplicará un conjunto de reglas CSS.

## Selectores básicos

- [Selector de tipo](/es/docs/Web/CSS/Type_selectors)

  - : Selecciona todos los elementos que coinciden con el nombre del elemento especificado.

    **Sintaxis:** `eltname`

    **Ejemplo:** `input` se aplicará a cualquier elemento {{HTMLElement('input')}}.

- [Selector de clase](/es/docs/Web/CSS/Class_selectors)

  - : Selecciona todos los elementos que tienen el atributo de `class` especificado.

    **Sintaxis:** `.classname`

    **Ejemplo:** `.index` seleccionará cualquier elemento que tenga la clase "_index_".

- [Selector de ID](/es/docs/Web/CSS/ID_selectors)

  - : Selecciona un elemento basándose en el valor de su atributo `id`. Solo puede haber un elemento con un determinado ID dentro de un documento.

    **Sintaxis:** `#idname`

    **Ejemplo:** `#toc` se aplicará a cualquier elemento que tenga el ID "_toc_".

- [Selector universal](/es/docs/Web/CSS/Universal_selectors)

  - : Selecciona todos los elementos. Opcionalmente, puede estar restringido a un espacio de nombre específico o a todos los espacios de nombres.

    **Sintaxis:** `* ns|* *|*`

    **Ejemplo:** `*` se aplicará a todos los elementos del documento.

- [Selector de atributo](/es/docs/Web/CSS/Attribute_selectors)

  - : Selecciona elementos basándose en el valor de un determinado atributo.

    **Sintaxis:** `[attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]`

    **Ejemplo:** `[autoplay]` seleccionará todos los elementos que tengan el atributo "autoplay" establecido (a cualquier valor).

## Combinadores

- [Combinador de hermanos adyacentes](/es/docs/Web/CSS/Selectores_hermanos_adyacentes)

  - : El combinador `+` selecciona hermanos adyacentes. Esto quiere decir que el segundo elemento sigue directamente al primero y ambos comparten el mismo elemento padre.

    **Sintaxis:** `A + B`

    **Ejemplo:** La regla `h2 + p` se aplicará a todos los elementos {{HTMLElement('p')}} que siguen directamente a un elemento {{HTMLElement('h2')}}.

- [Combinador general de hermanos](/es/docs/Web/CSS/Selectores_hermanos_generales)

  - : El combinador `~` selecciona hermanos. Esto quiere decir que el segundo elemento sigue al primero (no necesariamente de forma inmediata) y ambos comparten el mismo elemento padre.

    **Sintaxis:** `A ~ B`

    **Ejemplo:** La regla `p ~ span` se aplicará a todos los elementos {{HTMLElement('span')}} que siguen un elemento {{HTMLElement('p')}}.

- [Combinador de hijo](/es/docs/Web/CSS/Child_selectors)

  - : El combinador `>` selecciona los elementos que son hijos directos del primer elemento.

    **Sintaxis:** `A > B`

    **Ejemplo:** La regla `ul > li` se aplicará a todos los elementos {{HTMLElement('li')}} que son hijos directos de un elemento {{HTMLElement('ul')}}.

- [Combinador de descendientes](/es/docs/Web/CSS/Descendant_selectors)

  - : El combinador `(espacio)` selecciona los elementos que son descendientes del primer elemento.

    **Sintaxis:** `A B`

    **Ejemplo:** La regla `div span` se aplicará a todos los elementos {{HTMLElement('span')}} que están dentro de un elemento {{HTMLElement('div')}}.

- [Combinador de column](/es/docs/Web/CSS/Column_combinator)a {{Experimental_Inline}}

  - : El combinador `||` selecciona los elementos especificados pertenecientes a una columna.

    **Sintaxis:** `A || B`

    **Ejemplo:** `col || td` seleccionará todos los elementos {{HTMLElement("td")}} que pertenezcan al ámbito de {{HTMLElement("col")}}.

## Pseudoclases

- Las [pseudoclases](/es/docs/Web/CSS/Pseudo-classes) permiten la selección de elementos, basada en información de estado que no está contenida en el árbol de documentos.
  - : **Ejemplo:** La regla a`:visited` se aplicará a todos los elementos {{HTMLElement("a")}} que hayan sido visitados por el usuario.

## Pseudoelementos

- Los [pseudoelementos](/es/docs/Web/CSS/Pseudoelementos) son abstracciones del árbol que representan entidades más allá de los elementos HTML. Por ejemplo, HTML no tiene un elemento que describa la primera letra de un párrafo ni los marcadores de una lista. Los pseudoelementos representan estas entidades y nos permiten asignarles reglas CSS. De este modo podemos diseñar estas entidades de forma independiente.
  - : **Ejemplo:** La regla `p::first-line` se aplicará a la primera línea de texto de todos los elementos {{HTMLElement('p')}}.

## Especificaciones

{{Specifications}}
