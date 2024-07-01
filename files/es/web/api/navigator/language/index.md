---
title: NavigatorLanguage.language
slug: Web/API/Navigator/language
---

{{APIRef("HTML DOM")}}

La propiedad de solo lectura **`Navigator.language`** devuelve un string representando el lenguaje predefinido del usuario, generalmente es el lenguaje configurado para la interfaz del navegador.

## Sintaxis

```
lang = globalObj.navigator.language
```

### Valores

`Un string que representa el código del lenguaje standard como se define en la` [BCP 47](http://www.ietf.org/rfc/bcp/bcp47.txt). Ejemplos de códigos válidos de lenguaje incluyen: "en", "en-US", "fr", "es-ES", etc.

## Ejemplo

```js
if (window.navigator.language != "en") {
  doLangSelect(window.navigator.language);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad de Navegadores

{{Compat}}

## Ver también

- {{domxref("Navigator.languages", "navigator.languages")}}
- {{domxref("navigator")}}
