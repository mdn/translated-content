---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
---

{{ APIRef("Geolocation API") }}

O método **`Geolocation.getCurrentPosition()`** é utilizado para capturar a posição atual do dispositivo.

## Sintaxe

```
navigator.geolocation.getCurrentPosition(success, error, options)
```

### Parâmetros

- _success_
  - : Uma função de retorno que captura um objeto {{domxref("Position")}} como seu parâmetro de entrada.
- _error_ {{optional_inline}}
  - : Uma função de retorno opcional que captura um objeto {{domxref ("PositionError")}} como seu parâmetro de entrada.
- _options_ {{optional_inline}}
  - : Um objeto opcional {{domxref("PositionOptions")}}.

## Exemplo

```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Sua posição atual é:");
  console.log("Latitude : " + crd.latitude);
  console.log("Longitude: " + crd.longitude);
  console.log("Mais ou menos " + crd.accuracy + " metros.");
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando geolocalização](/pt-BR/docs/WebAPI/Using_geolocation)
- {{domxref("Navigator.geolocation")}}
