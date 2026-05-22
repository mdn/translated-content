---
title: Element.setAttribute
slug: Web/API/Element/setAttribute
---

{{APIRef}}

Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.

Para obtener el valor actual de un atributo, se utiliza {{domxref("Element.getAttribute", "getAttribute()")}}; para eliminar un atributo, se llama a {{domxref("Element.removeAttribute", "removeAttribute()")}}.

## Sintaxis

```js
Element.setAttribute(name, value);
```

### Parámetros

- `name`
  - : Un {{domxref("DOMString")}} indicando el nombre del atributo cuyo valor se va a cambiar. El nombre del atributo se convierte automáticamente en minúsculas cuando `setAttribute()` se llama sobre un elemento HTML en un documento HTML.
- `value`
  - : Un {{domxref("DOMString")}} que contenga el valor que asignar al atributo. Cualquier valor indicado que no sea una cadena de texto se convierte automáticamente en una cadena de texto.

Los atributos booleanos se consideran `true` si al menos están presentes en el elemento, independientemente de su `value` actual; como regla, se debería especificar una cadena de texto vacía (`""`) en `value` (algunas personas utilizan el nombre del atributo; esto funciona pero no es un standard). Vea un [ejemplo](#ejemplo) posterior para una demostración práctica.

Dado que `value` se convierte en una cadena de texto, indicando `null` no necesariamente hace lo que se espera. En lugar de eliminar el atributo o establecer su valor para ser {{jsxref("null")}}, establece el valor del atributo a la cadena de texto `"null"`. Si se desea eliminar un atributo, se debe llamar a {{domxref("Element.removeAttribute", "removeAttribute()")}}.

### Valor devuelto

{{jsxref("undefined")}}.

### Excepciones

- `InvalidCharacterError`
  - : El atributo especificado `name` contiene uno o más caracteres que no son válidos en el nombre del atributo.

## Ejemplo

En el siguiente ejemplo, `setAttribute()` se utiliza para establecer atributos en un {{HTMLElement("button")}}.

### HTML

```html
<button>Hola Mundo</button>
```

### JavaScript

```js
var b = document.querySelector("button");

b.setAttribute("name", "helloButton");
b.setAttribute("disabled", "");
```

Esto demuestra dos cosas:

- La primera llamada a `setAttribute()` muestra cómo se cambia el valor del atributo `name` a "helloButton". Puede ver esto utilizando el inspector de página de su navegador ([Chrome](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/?hl=es), [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide), [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html), [Safari](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html)).
- Para establecer el valor de un atributo booleano, como `disabled`, se puede especificar cualquier valor. Una cadena de texto vacía o el nombre de un atributo son valores recomendados. Todo lo que importa es que si el atributo está presente, _independientemente de su valor actual_, su valor se considera como `true`. La ausencia del atributo significa que su valor es `false`. Estableciendo una cadena vacía (`""`) como el valor del atributo `disabled`, se estaría cambiando `disabled` a `true`, lo que provoca que el botón sea deshabilitado.

{{ EmbedLiveSample('Example', '300', '50') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
