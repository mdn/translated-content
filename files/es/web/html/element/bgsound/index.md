---
title: <bgsound>
slug: Web/HTML/Element/bgsound
original_slug: Web/HTML/Elemento/bgsound
---

{{non-standard_header}}

## Resumen

El elemento HTML de sonido de fondo (\<bgsound>) es un elemento de Internet Explorer que asocia un sonido de fondo con un página .

> **Nota:** Para incrustar un elemento en una página web , se debe de usar el elemento {{HTMLElement("audio")}}

## Atributos

- {{htmlattrdef("balance")}}
  - : Este atributo define un número entre -10,000 y + 10,000 que determina como el volumen será dividido entre los altavoces .
- {{htmlattrdef("loop")}}
  - : Este atributo indica el número de veces que un soinido será reproducido ya sea como un valor numérico o la palabra clave _infinite_ .
- {{htmlattrdef("src")}}
  - : Este atributo especifica la URL del archivo de sonido que será reproducido , el cual debe ser uno de los siguientes tipos : wav, .au, o .mid.
- {{htmlattrdef("volume")}}
  - : Este atributo define un número entre -10,000 y 0 que determina la fuerza del sonido de fondo de una página .

## Ejemplo

```html
<bgsound src="sound1.mid">

<bgsound src="sound2.au" loop="infinite">
```

## Notas

Funcionalidad similar puede ser lograda en algunas versiones de Netscape usando la etiqueta \<embed> para invocar un reproductor de audio .

Puedes escribir bgsound con una etiqueta de cierre automático \<bgsound /> . Ahora bien , desde que este elemento no es parte de un estándar , haciendolo como XHTML no lo hará valido.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{htmlelement("audio")}}, el cual es el elemento estándar para incrustar audio en un documento.

{{HTMLSidebar}}
