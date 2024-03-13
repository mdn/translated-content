---
title: Geolocation.watchPosition()
slug: Web/API/Geolocation/watchPosition
---

{{ APIref("Geolocation API") }}

O método **`Geolocation.watchPosition()`** é usado para registrar uma função manipuladora (handler function) que irá ser chamada automáticamente cada vez que a posição no dispositivo mudar. Você pode, opcionalemnte, especificar uma função de retorno que manipulará qualquer erro.

Este método retorna um valor para o _watch ID_ que pode ser usado para desregistrar o manipulador passando isto para o método {{domxref("Geolocation.clearWatch()")}}.

## Síntaxe

```js-nolint
watchPosition(success)
watchPosition(success, error)
watchPosition(success, error, options)
```

### Parâmetros

- _success_
  - : AUma função de retorno (callback) que pega um objeto {{domxref("Position")}} como parametro de entrada.
- _error_ {{optional_inline}}
  - : Uma função de retorno opcional que pega um objeto {{domxref("PositionError")}} como parametro de entrada.
- _options_ {{optional_inline}}
  - : Um objeto opcional {{domxref("PositionOptions")}}.

## Exemplo

```js
var id, target, options;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Parabéns, você alcançou o destino");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn("ERRO(" + err.code + "): " + err.message);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando geolocalização](/pt-BR/docs/WebAPI/Using_geolocation)
- A interface que ele pertence, {{domxref("Geolocation")}}, e como acessar {{domxref("NavigatorGeolocation.geolocation")}}.
- A operação oposta: {{domxref("Geolocation.clearWatch()")}}
- Um método similar: {{domxref("Geolocation.getCurrentPosition()")}}
