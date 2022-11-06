---
title: NavigatorLanguage.language
slug: orphaned/Web/API/NavigatorLanguage/language
tags:
  - API
  - Gecko
  - Idioma
  - Lenguaje
  - NavigatorLanguage
  - Propiedad
  - Referencia
  - Referencia DOM de Gecko
  - Solo lectura
translation_of: Web/API/NavigatorLanguage/language
original_slug: Web/API/NavigatorLanguage/language
browser-compat: api.NavigatorLanguage.language
---
{{APIRef("HTML DOM")}}

La propiedad de solo lectura **`NavigatorLanguage.language`** devuelve un string representando el lenguaje predefinido del usuario, generalmente es el lenguaje configurado para la interfaz del navegador.

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

- {{domxref("NavigatorLanguage.languages", "navigator.languages")}}
- {{domxref("navigator")}}
