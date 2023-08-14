---
title: Usando geolocation
slug: Web/API/Geolocation_API
---

A **API geolocation** permite que o usuário forneça sua localização a aplicativos web se ele desejar. Por questões de privacidade, o usuário é perguntado se permite fornecer informações de localização.

## O objeto geolocation

O aplicativo de geolocalização é utilizado através de um objeto filho chamado `geolocation` localizado dentro do objeto `navigator`. Se o objeto existe, os serviços de geolocalização estarão disponíveis. Você pode adicionalmente testar a presença da geolocalização:

```js
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  alert(
    "I'm sorry, but geolocation services are not supported by your browser.",
  );
}
```

Ao iniciar no Gecko 1.9.2 (Firefox 3.6), add-ons podem obter o objeto de geolocalização obtendo a referência para o serviço de geolocaliazação como se ve a seguir:

```js
var geolocation = Components.classes["@mozilla.org/geolocation;1"].getService(
  Components.interfaces.nsIDOMGeoGeolocation,
);
```

### Obtendo a posição atual

Para obter a localização atual do usuário, você pode utiliza o método `getCurrentPosition()`. Isto inicia uma requisição assíncrona para identificar a posição do usuário, e consulta o hardware de localização para conseguir informações atualizadas. Quando a posição é determinada, uma rotina específica de retorno é executada. Você pode opcionalmente gerar uma segunda rotina de retorno se um erro ocorrer. Um terceiro, e opcional, parâmetro é a interface "opções" onde você pode configurar o tempo máximo da posição recebida e o tempo a se esperar por uma solicitação.

Use `getCurrentPosition()` se você deseja uma única posição rapidamente, independente da precisão. Dispositivos com GPS, por exemplo, podem levar um minuto ou mais para conseguir a localização, e portanto dados menos precisos (localização do IP location ou rede wifi) podem retornar do método `getCurrentPosition()`.

```js
navigator.geolocation.getCurrentPosition(function (position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

O exemplo acima irá fazer a função the `do_something()` executar quando a localização for obtida.

### Verificando a posição atual

Se os dados de posição mudam (sejam pelo movimento do dispositivo ou se uma informação mais precisa for recebida), se pode configurar um retorno que é feito com esta informação de posição atual. Isto é feito usando a função `watchPosition()`, a qual tem os mesmos parâmetros de entrada da função `getCurrentPosition()`. Seu retorno é chamada múltiplas vezes, permitindo que o navegador ou atualize sua posição enquanto você se move, ou forneça uma localização mais precisa enquanto diferentes técnicas são usadas para localizar sua posição. O erro do retorno, o qual é opcional assim como no `getCurrentPosition()`, é chamado uma única vez, se nenhum resultado válido retornar.

O `watchPosition()` pode ser usado sem que não haja a chamada inicial de `getCurrentPosition()`.

```js
var watchID = navigator.geolocation.watchPosition(function (position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

O método `watchPosition()` retorna um número de ID que pode ser usado para identificar a `posição` solicitada; você pode usar esse valor em conjunto com o método `clearWatch()`, parando a localização do usuário.

```
navigator.geolocation.clearWatch(watchID);
```

`watchPosition()`retorna um callback sucesso e erro (como `getCurrentPosition`) e um objeto `positionObjects`, que pode ter três propriedades:

- `enableHighAccuracy` – Um booleano que indica ao dispositivo que você deseja obter leituras mais precisas (este parâmetro pode ou não pode fazer a diferença, dependendo do seu hardware)
- `maximumAge` – Idade máxima (em milissegundos) da leitura (opção adequada, pois o dispositivo pode armazenar em cache leituras para poupar energia e / ou largura de banda)
- `timeout` – O tempo máximo (em milissegundos) que está preparado para permitir que o dispositivo para tentar obter uma Geo Location

Segue uma chamada para watchPosition:

```
var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, {enableHighAccuracy:true, maximumAge:30000, timeout:27000});
```

Exemplo de watchPosition em uso: [thedotproduct.org/posts/a-simple-example-of-navigatorgeolocationwatchposition](https://www.thedotproduct.org/posts/a-simple-example-of-navigatorgeolocationwatchposition.html)

## Imprimindo uma posição

A localização do usuário é impressa usando o objeto Position, que tem os seguintes campos:

- timestamp
  - : Momento em que a leitura foi feita, como `DOMTimeStamp`.
- coords
  - : Objecto [`nsIDOMGeoPositionCoords`](/pt-BR/XPCOM_Interface_Reference/NsIDOMGeoPositionCoords) indicando a localização.
- address
  - : `nsIDOMGeoPositionAddress` objeto especificando o endereço correspondente, se disponível.

## <br>Manipulação de erros

Retornando o callback de erro, se fornecido, chamar `getCurrentPosition()` e `watchPosition()`, tem a seguinte assinatura:

```
function errorCallback(PositionError error);
```

O `PositionError` tem a seguinte estrutura de campos:

- code
  - : Um código de erro numérico dos seguintes procedimentos:
- _`UNKNOWN_ERROR`_ (valor numérico 0)
  - : O processo de aquisição de localização falhou devido a um erro de qualquer outro código nesta interface.
- _`PERMISSION_DENIED`_ (valor numérico 1)
  - : O processo de aquisição da localização falhou porque a origem aplicativo não tem permissão para usar a API de Geolocalização.
- _`POSITION_UNAVAILABLE`_ (valor numérico 2)
  - : A posição do dispositivo não pôde ser determinada. Um ou mais provedores de localização utilizados no processo de aquisição local gerou um erro interno que falou o processo completamente.
- _`TIMEOUT`_ (numeric value 3)
  - : O comprimento máximo de tempo especificado.
- message
  - : Uma mensagem de erro legível para uso em registros e depuração, mas não para exibir para o usuário.

## Compatibilidade com navegadores

| Navegador                  | Suporte Básico  | [Geolocation Level 2](http://dev.w3.org/geo/api/spec-source-v2.html) |
| -------------------------- | --------------- | -------------------------------------------------------------------- |
| Internet Explorer          | IE9 RC          | ---                                                                  |
| Firefox (Gecko)            | **3.5** (1.9.1) | ---                                                                  |
| Opera                      | **10.60**       | ---                                                                  |
| Safari \| Chrome \| WebKit | 5 \| 5 \| 533   | ---                                                                  |

## Solicitando permissão

Qualquer add-on hospedado em addons.mozilla.org, que faz uso de dados de geolocalização, deve solicitar antes uma permissão. A função a seguir vai solicitar a permissão de um modo semelhante ao prompt. A resposta do usuário será salva no parâmetro `pref`. A função fornecida no parâmetro de `callback` será chamado com um valor booleano que indica a resposta do usuário. Se for `true`, o add-on poderá retornar dados de geolocalização.

```js
function prompt(window, pref, message, callback) {
  let branch = Components.classes[
    "@mozilla.org/preferences-service;1"
  ].getService(Components.interfaces.nsIPrefBranch);

  if (branch.getPrefType(pref) === branch.PREF_STRING) {
    switch (branch.getCharPref(pref)) {
      case "always":
        return callback(true);
      case "never":
        return callback(false);
    }
  }

  let done = false;

  function remember(value, result) {
    return function () {
      done = true;
      branch.setCharPref(pref, value);
      callback(result);
    };
  }

  let self = window.PopupNotifications.show(
    window.gBrowser.selectedBrowser,
    "geolocation",
    message,
    "geo-notification-icon",
    {
      label: "Share Location",
      accessKey: "S",
      callback: function (notification) {
        done = true;
        callback(true);
      },
    },
    [
      {
        label: "Always Share",
        accessKey: "A",
        callback: remember("always", true),
      },
      {
        label: "Never Share",
        accessKey: "N",
        callback: remember("never", false),
      },
    ],
    {
      eventCallback: function (event) {
        if (event === "dismissed") {
          if (!done) callback(false);
          done = true;
          window.PopupNotifications.remove(self);
        }
      },
      persistWhileVisible: true,
    },
  );
}

prompt(
  window,
  "extensions.foo-addon.allowGeolocation",
  "Foo Add-on wants to know your location.",
  function callback(allowed) {
    alert(allowed);
  },
);
```

## Veja também

- `nsIGeolocationProvider`
- `nsIDOMGeolocation`
- `nsIDOMGeoPosition`
- `nsIDOMGeoPositionCallback`
- `nsIDOMGeoPositionError`
- `nsIDOMGeoPositionErrorCallback`
- `nsIDOMGeoPositionOptions`
- `nsIDOMNavigatorGeolocation`
- [Geolocation API on w3.org](http://dev.w3.org/geo/api/spec-source.html)
- [Demos about the Geolocation API](/pt-BR/demos/tag/tech:geolocation)
