---
title: Window.localStorage
slug: Web/API/Window/localStorage
---

{{APIRef()}}

La propiedad de sólo lectura **`localStorage`** te permite acceder al objeto local {{DOMxRef("Storage")}}; los datos persisten almacenados entre las diferentes sesiones de navegación. localStorage es similar a [`sessionStorage`](/es/docs/Web/API/Window/sessionStorage). La única diferencia es que, mientras los datos almacenados en localStorage no tienen fecha de expiración, los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra la página.

Con [`sessionStorage`](/es/docs/Web/API/Window/sessionStorage) los datos persisten sólo en la ventana/tab que los creó, mientras que con `localStorage` los datos persisten entre ventanas/tabs con el mismo origen.

Debe tenerse en cuenta que los datos almacenados tanto en `localStorage` como en `sessionStorage` **son específicos del protocolo de la página**.

Las claves y los valores son **siempre cadenas de texto** (ten en cuenta que, al igual que con los objetos, las claves de enteros se convertirán automáticamente en cadenas de texto).

## Sintaxis

```js
miStorage = window.localStorage;
```

### Valor

Un objeto {{DOMxRef("Storage")}} que se puede utilizar para acceder al espacio de almacenamiento local del origen actual.

### Excepciones

- `SecurityError`
  - : La solicitud viola una decisión de política, o el origen no es [una tupla válida de protocolo/host/puerto](/es/docs/Web/Security/Defenses/Same-origin_policy) (esto puede suceder si el origen usa el protocolo `file:` o `data:`, por ejemplo). Por ejemplo, el usuario puede tener su navegador configurado a fin de denegar el permiso para conservar datos al origen especificado.

## Ejemplo

El siguiente código accede al objeto local {{DOMxRef("Storage")}} actual y agrega un ítem al mismo usando {{DOMxRef("Storage.setItem()")}}.

```js
localStorage.setItem("miGato", "Juan");
```

> [!NOTE]
> Por favor ver el articulo [Usando la Web Storage API](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) para un ejemplo completo.

La sintaxis para leer el ítem almacenado en `localStorage` es la siguiente:

```js
var cat = localStorage.getItem("miGato");
```

La sintaxis para eliminar el ítem almacenado en `localStorage` es la siguiente:

```js
localStorage.removeItem("miGato");
```

La sintaxis para eliminar todos los ítems almacenados en `localStorage` es la siguiente:

```js
// Elimina todos los elementos
localStorage.clear();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando la Web Storage API](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Window.sessionStorage](/es/docs/Web/API/Window/sessionStorage)
