---
title: Storage.setItem()
slug: Web/API/Storage/setItem
---

{{APIRef("Web Storage API")}}

El método `setItem()` de la interfaz {{domxref("Storage")}}, cuando reciba una clave y un valor, añadirá estos al almacén, o actualizará el valor si la clave ya existe.

## Sintaxis

```
storage.setItem(keyName, keyValue);
```

### Parámetros

- _keyName_
  - : Un {{domxref("DOMString")}} conteniendo la clave que se quiere crear/actualizar.
- _keyValue_
  - : Un {{domxref("DOMString")}} conteniendo el valor que se le quiere dar a la clave que se está creando/actualizando.

### Devuelve

_No devuelve valor._

### Excepciones

`setItem()` puede lanzar una excepción si el almacén esta lleno. Particularmente, en Safari Mobile (desde iOS 5) siempre lo hará cuando el usuario ingresa en modo privado (Safari determina una cuota de 0 bytes en modo privado, al contrario de otros navegadores, que permiten almacenamiento en modo privado, usando contenedores de información separados).
Por lo tanto, los desarrolladores deben asegurarse de **capturar siempre las posibles excepciones de `setItem()`**.

## Ejemplo

La siguiente función crea tres ítems dentro del almacenamiento local.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");
}
```

> **Nota:** Para ver un ejemplo real, vea nuestro [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

[Usando la Web Storage API](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
