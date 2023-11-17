---
title: "@namespace"
slug: Web/CSS/@namespace
---

{{ CSSRef() }}

## Описание

`@namespace` - это правила ([at-rule](/ru/docs/Web/CSS/At-rule)) определяющие [пространства имён XML](/ru/docs/Namespaces), которые будут использованы в [таблице стилей](/ru/docs/Web/API/StyleSheet). Они применяются чтобы ограничить CSS селекторы только элементами принадлежащими конкретному пространству имён. Пространства имён полезны, в основном, когда идёт взаимодействие с документами содержащими множество пространств имён, такими как HTML5 со встроенным SVG, MathML или XML.

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* This matches all XHTML <a> elements, as XHTML is the default unprefixed namespace */
a {
}

/* This matches all SVG <a> elements */
svg|a {
}

/* This matches both XHTML and SVG <a> elements */
*|a {
}
```

Любое `@namespace` правило обязано следовать всем [@charset](/ru/docs/Web/CSS/%40charset) и [@import](/ru/docs/Web/CSS/%40import) правилам, а так же всем [описаниям стилей](/ru/docs/Web/API/CSSStyleDeclaration) в таблице стилей.

`@namespace` может быть использован для определения стандартного пространства имён для конкретной таблице стилей. Когда стандартное пространство имён определено, все селекторы (но не атрибуты селекторов, смотрите заметку ниже) применяются только к элементам в этом пространстве имён.

`@namespace` правила можно использовать для определения префиксов имён. Когда селектор имеет префикс, он будет выбирать элементы совпадающие по пространству имён и именам или атрибутам.

В [HTML5](/ru/docs/HTML/HTML5) существуют [сторонние элементы](https://html.spec.whatwg.org/#foreign-elements) которые автоматически ассоциируются с соответствующими пространствами имён. Это значит, что HTML-элементы будут действовать так, как если бы они находились в пространстве имён (`http://www.w3.org/1999/xhtml`), также если они не имеют `xmlns` атрибута где-либо в документе, то такие элементы как [\<svg>](/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/SVG) и [\<math>](/ru/docs/Web/MathML/Element/math) будут ассоциироваться с их стандартными пространствами имён (`http://www.w3.org/2000/svg` and `http://www.w3.org/1998/Math/MathML`).

> **Примечание:** Примечание: В XML, если префикс отличается от атрибута (Например, `xlink:href`), то атрибут не будет иметь пространства имён. Другими словами, атрибуты не могут наследовать пространство имён элемента в котором они находятся.

## Синтаксис

```css
/* Default namespace */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* Prefixed namespace */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
```

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
