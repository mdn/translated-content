---
title: Mixin
slug: Glossary/Mixin
---

Un _mixin_ es un conjunto coherente de {{glossary("method","métodos")}} y {{glossary("property","propiedades")}} implementadas por otras interfaces y {{glossary("class","clases")}}.

Ejemplo

@mixin nombre_del_mixin{

width: 100% ;

}

La forma más común de llamar a un mixin y aplicar esas propiedades y métodos es el _include_ (ejemplo `@include nombre_del_mixin`). Al utilizar el _include_ para llamar las propiedades y métodos incluidos en el mixin, son entonces parte de la nueva interfaz.

<p class="hidden"><strong>Esa definición es un poco confusa. Propongo que reemplazamos ésto con:</strong> Un mixin es una clase u objeto que contiene uno o más {{glossary("method","métodos")}} y/o {{glossary("property","propiedades")}} implementadas por otra {{glossary("interface")}} o {{glossary("class","clase")}}. Las propiedades y los métodos son entonces parte de la nueva interfaz o clase y se utilizan simplemente como un definido explícitamente por la clase o interfaz.</p>

## Aprende más

### Conocimiento general

- [Mixin](http://es.wikipedia.org/wiki/Mixin) en Wikipedia

### Referencia técnica

- Ejemplo de mixin: [Body](/es/docs/Web/API/Body)
