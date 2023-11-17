---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El método **`anchor()`** crea un ancla HTML, {{HTMLElement("a")}}, que se usa como un enlace a hipertexto.

## Sintaxis

```
cadena.anchor(nombreAtributo)
```

### Parámetros

- `nombreAtributo`
  - : Una cadena.

## Descripción

Usa el método `anchor` con los métodos `document.write` o `document.writeln` para crear y mostrar programando un ancla en un documento. Crea el ancla con el método `anchor`, y entonces llama a `write` o `writeln` para mostrar el ancla en el documento. En JavaScript en el lado Servidor, usa la función `write` para mostrar el ancla.

En la sintaxis, la cadena de texto representa el texto literal que usted quiere que el usuario vea. La cadena `nombreAtributo` representa el atributo `NAME` de la etiqueta A.

Los anclas creados con el método `anchor` serán elementos del arreglo {{domxref("document.anchors")}}

## Ejemplos

### Ejemplo: Usando `anchor`

El siguiente código de ejemplo dentro de un elemento HTML `script`:

```js
var miCadena = "Tabla de Contenidos";
document.body.innerHTML = miCadena.anchor("ancla_contenidos");
```

obtendrá el siguiente HTML:

```html
<a name="ancla_contenidos">Tabla de Contenidos</a>
```

### Vea También

- {{jsxref("String.prototype.link()")}}
