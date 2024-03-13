---
title: Geolocation.clearWatch()
slug: Web/API/Geolocation/clearWatch
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

O método **`Geolocation.clearWatch()`** é usado para cancelar o registro dos manipuladores de monitoramento de localização / erro instalados anteriormente usando {{domxref("Geolocation.watchPosition()")}}.

## Syntax

```
navigator.geolocation.clearWatch(id);
```

### Parameters

- _id_
  - : O número do ID retornado pelo método {{domxref("Geolocation.watchPosition()")}} ao instalar o manipulador que você deseja remover.

## Exemplo

```js
var id, target, option;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulation, you reach the target");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
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

## Veja Também

- [Usando geolocation](/pt-BR/docs/WebAPI/Using_geolocation)
- {{domxref("Geolocation")}}
- {{domxref("Geolocation.watchPosition()")}}
- {{domxref("Geolocation.getCurrentPosition()")}}
