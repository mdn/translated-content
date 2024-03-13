---
title: Element.matches()
slug: Web/API/Element/matches
---

{{APIRef}}

El método `matches()` comprueba si el {{domxref("Element")}} sería seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna `false`.

## Sintaxis

```js
var result = element.matches(selectorString);
```

### Parámetros

`selectorString` es una cadena de texto que representa el selector a probar.

### Valor devuelto

`result` es un {{domxref("Boolean")}}.

### Excepciones

- `SYNTAX_ERR`
  - : La cadena especificada como selector no es válida.

## Ejemplo

```html
<ul id="aves">
  <li>Loro de alas naranja</li>
  <li class="amenazada">Ágila Filipina</li>
  <li>Gran Pelícano Blanco</li>
</ul>

<script type="text/javascript">
  var aves = document.getElementsByTagName("li");

  for (var i = 0; i < aves.length; i++) {
    if (aves[i].matches(".amenazada")) {
      console.log(
        "El " + aves[i].textContent + " está amenazada de extinción!",
      );
    }
  }
</script>
```

Esto mostrará "El Águila Filipina está amenazada de extinción!" en el log de la consola, dado que el elemento tiene un atributo `class` con valor `amenazada`.

## Polyfill

Para navegadores que no soportan `Element.matches()` o `Element.matchesSelector()`, pero aun incorporan soporte para `document.querySelectorAll()`, existe un polyfill:

```js
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}
```

However, given the practicality of supporting older browsers, the following should suffice for most (if not all) practical cases (ej. soporte IE9+).

```js
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [The syntax of Selectors](/es/docs/Web/Guide/CSS/Getting_started/Selectors)
- Otros métodos que usan selectores: {{domxref("element.querySelector()")}} and {{domxref("element.closest()")}}.
