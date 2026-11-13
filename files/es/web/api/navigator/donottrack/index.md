---
title: Navigator.doNotTrack
slug: Web/API/Navigator/doNotTrack
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}

Devuelve los ajustes de do-not-track del usuario. Esto es `"1"` si el usuario ha solicitado no ser rastreado por sitios web, contenidos, o anuncios.

## Sintaxis

```
dnt = navigator.doNotTrack;
```

El valor refleja el de la cabecera do-not-track, ej. valores de {"1", "0", "unspecified" }. Nota: Antes de Gecko 32, Gecko empleaba los valores { "yes", "no", "unspecified"} ([bug 887703](https://bugzilla.mozilla.org/show_bug.cgi?id=887703)).

## Ejemplo

```js
console.log(navigator.doNotTrack);
// imprime "1" si DNT está habilitado; "0" si el usuario ha aceptado el rastreo; en caso contrario es "unspecified"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [Guía sobre el campo Do Not Track](/es/docs/Web/HTTP/Headers/DNT)
