---
title: :root
slug: Web/CSS/:root
---

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:root`** de [CSS](/es/docs/Web/CSS) selecciona el elemento raíz de un árbol que representa el documento. En HTML, `:root` representa el elemento {{HTMLElement("html")}} y es idéntico al selector `html`, excepto que su [especificidad](/es/docs/Web/CSS/CSS_cascade/Specificity) es mayor.

```css
/* Selecciona el elemento raíz del documento:
   <html> en el caso de HTML */
:root {
  background: yellow;
}
```

## Sintaxis

{{csssyntax}}

## Ejemplo

`:root` puede ser útil para declarar [variables CSS](/es/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) globales:

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
