---
title: <abbr>
slug: Web/HTML/Element/abbr
---

{{HTMLSidebar}}

El **elemento HTML `<abbr>`** (_o Elemento de Abreviación HTML_) representa una abreviación o acrónimo; el atributo opcional [`title`](/es/docs/Web/HTML/Global_attributes#title) puede ampliar o describir la abreviatura. Si está presente, el atributo `title` debe contener la descripción completa y nada más.

```html
<p>I do <abbr title="Hypertext Markup Language">HTML</abbr></p>
```

El artículo [Cómo marcar abreviaciones y hacerlas entendibles](/es/Learn/HTML/Howto/Mark_abbreviations_and_make_them_understandable) es una guía para aprender a usar `<abbr>` y elementos relacionados.

| Interfaz DOM                                                               | {{domxref("HTMLElement")}}                                                                                                                                                                                                   |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Categorías de contenido](/es/docs/Web/Guide/HTML/categorias_de_contenido) | [Contenido dinámico](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico), [contenido estático o de texto](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_estático_o_de_texto), contenido palpable |
| Conteido permitido                                                         | [Contenido de estático o de texto](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_estático_o_de_texto)                                                                                                            |
| Elementos padre permitidos                                                 | Cualquier elemento que acepte [contenido estático o de texto](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_estático_o_de_texto)                                                                                 |

## Atributos

Este elemento sólo incluye los [atributos globales](/es/docs/Web/HTML/Atributos_Globales). El atributo [`title`](/es/docs/Web/HTML/Global_attributes#title) tiene un sentido específicamente semántico cuando es usado con el elemento `<abbr>`; _debe_ contener una completa descripción o ampliación de la abreviación. Este texto es usualmente presentado por los navegadores como tooltip cuando se pasa el mouse sobre el elemento.

Cada elemento `<abbr>` usado es independiente de todos los otros; dar un `<title>` a uno no hace que automáticamente todos los demás adquieran la misma descripción.

> **Nota:** En lenguajes con números gramaticales (especialmente lenguajes con más de dos números, como el Árabe), utiliza el mismo número gramatical en el atributo `title` como dentro del elemento `<abbr>`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Estilo por defecto

El propósito de este elemento es puramente para la conveniencia del autor y por defecto todos los navegadores lo muestran en línea ({{cssxref('display')}}`: inline`), sin embargo su estilo por defecto varía de un navegador a otro:

- Algunos navegadores, como Internet Exlorer, no lo diseñan de manera diferente que el elemento {{HTMLElement("span")}}.
- Opera, Firefox, y algunos otros añaden un subrayado de puntos al contenido del elemento.
- Algunos navegadores no sólo añaden un subrayado de puntos, sino que también lo ponen en minúsculas; para evitar este estilo, añadir algo como {{cssxref('font-variant')}}`: none` en CSS se hace cargo de este caso.

## Ver también

- [Utilizando el elemento \<abbr>](/es/Learn/HTML/Howto/Mark_abbreviations_and_make_them_understandable)
- Otros elementos de nivel semántico de texto: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("b")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
