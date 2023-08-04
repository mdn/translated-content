---
title: Document.createAttribute()
slug: Web/API/Document/createAttribute
---

{{ ApiRef("DOM") }}

El método **`Document.createAttribute()`** crea un nuevo nodo de tipo atributo (attr), y lo retorna. El objeto crea un nodo implementando la interfaz {{domxref("Attr")}}. El DOM no impone que tipo de atributos pueden ser agregados a un particular elemento de esta forma.

> **Nota:** El texto pasado como parametro es convertido a minusculas.

## Sintaxis

```js
atributo = document.createAttribute(nombre);
```

### Parametros

- `nombre` es un string conteniendo el nombre del atributo.

### Valor que retorna

Un nodo {{domxref("Attr")}} nodo.

### Excepciones

- `INVALID_CHARACTER_ERR` si el parametro contiene caracteres invalidos para un atributo XML .

## Ejemplo

```js
var nodo = document.getElementById("div1");
var a = document.createAttribute("miAtributo");
a.value = "nuevoVal";
nodo.setAttributeNode(a);
console.log(nodo.getAttribute("miAtributo")); // "nuevoVal"
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver ademas

- {{domxref("Document.createElement()")}}
