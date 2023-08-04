---
title: "@namespace"
slug: Web/CSS/@namespace
---

{{CSSRef}}

**`@namespace`** es una [regla](/es/docs/Web/CSS/At-rule) que define [XML namespace](/es/docs/Namespaces) a ser usados en una [hoja de estilos CSS](/es/docs/Glossary/CSS). Los namespaces definidos pueden utilizarse para restringir [selectores universales](/es/docs/Web/CSS/Universal_selectors), [types](/es/docs/Web/CSS/Type_selectors), y [selectores de atributos](/es/docs/Web/CSS/Attribute_selectors) para seleccionar sólo elementos dentro de ese namespace.La regla `@namespace` generalmente sólo es útil cuando se trata de documents que contienen múltiples namespace—como HTML5 con SVG o MathML, o XML que mezclamúltiplesvocabularios.

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* Esto coincide con todos los elementos XHTML <a>, ya que el XHTML es el namespace por defecto sin prefijo */
a {
}

/* Esto coincide con todos los elementos SVG <a> */
svg|a {
}

/* Esto concuerda con todos los elementos XHTML y SVG <a> elements */
*|a {
}
```

Cualquier `@namespace` debe seguir todas las reglas de [@charset](/es/docs/Web/CSS/%40charset) y [@import](/es/docs/Web/CSS/%40import), y preceder a todas las demás reglas y [declaraciones de estilo](/es/docs/Web/API/CSSStyleDeclaration) de una hoja de estilos.

Se puede utilizar `@namespace` para definirun **namespace por defecto** de una hoja de estilos. Cuando se define un namespace por defecto, todos los selectores universales y tipos (pero no los selectores de atributo, véase la nota a continuación) se aplican únicamente a los elementos de ese namespace

La regla `@namespace` también puede usarse para definir un **prefijo de namespace**. Cuando un selector universal, tipo, o selector de atributo se antepone a un prefijo de un namespace, ese selector sólo coincide si el namespace y el nombre del elemento o atributo coinciden.

En [HTML5](/es/docs/Glossary/HTML5), conocidos como[elementos externos](https://html.spec.whatwg.org/#foreign-elements) automaticamente se les asignarán un namespace. Esto significa que los elementos HTML actuarán como si estuvieran en un namespace XHTML (`http://www.w3.org/1999/xhtml`), incluso si no hay ningún atributo xmlns en ninguna parte del document, y los elementos [\<svg>](/es/docs/Web/SVG/Element/svg) y [\<math>](/es/docs/Web/MathML/Element/math) se les asignará un namespace propio (`http://www.w3.org/2000/svg` and `http://www.w3.org/1998/Math/MathML`).

> **Nota:** En XML, a menos que se defina un prefijo directamente sobre un atributo (_ejemplo._, `xlink:href`), ese atributo no tiene namespace. En otras palabras, los atributos no heredan el namespace del elemento en el que están. Para que coincida con este comportamiento, el namespace por defecto en CSS no se aplica a los selectores de atributos.

## Sintaxis

```css
/* Namespace por defecto */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* Namespace sin prefijo */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
```

### Sintaxis oficial

{{csssyntax}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
