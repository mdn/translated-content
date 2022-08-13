---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
translation_of: Web/API/Geolocation/getCurrentPosition
---
{{securecontext_header}}{{ APIRef("Geolocation API") }}

Mit der Methode **`Geolocation.getCurrentPosition()`** kann die Position des Gerätes bestimmt werden.

## Syntax

    navigator.geolocation.getCurrentPosition(success[, error[, [options]])

### Parameter

- `success`
  - : Eine Funktion, die nach erfolgreicher Positionsbestimmung aufgerufen wird. Sie erhält ein Objekt vom Typ {{domxref("GeolocationPosition")}} als Parameter.
- `error` {{optional_inline}}
  - : Eine Funktion, die im Fehlerfall aufgerufen wird. Sie erhält ein Objekt vom Typ {{domxref("GeolocationPositionError")}} als Parameter.
- `options` {{optional_inline}}
  - : Ein Objekt vom Typ {{domxref("PositionOptions")}}. Es enthält:\* `maximumAge`: Die Positionsbestimmung darf höchstens diese Zeit in Millisekunden zurückliegen. Falls 0, muss ein aktueller Wert ermittelt werden, falls [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity), sollte kein aktueller Wert ermittelt werden.
    Vorgabe: 0.
    - `timeout`: Wartezeit in Millisekunden, bis die Positionsbestimmung abgebrochen und, so gegeben, die Funktion `error` aufgerufen wird. Bei [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity) keine Begrenzung.
      Vorgabe: [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity).
    - `enableHighAccuracy`: `true`, um eine genauere Position zu ermitteln, jedoch möglicherweise zu Lasten von Wartezeit und Energieverbrauch.
      Vorgabe: `false`.

## Beispiel

```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## Spezifikationen

| Spezifikation                        | Status                           | Kommentar            |
| ------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('Geolocation')}} | {{Spec2('Geolocation')}} | Erste Spezifikation. |

## Browserkompatibilität

{{Compat("api.Geolocation.getCurrentPosition")}}

## Siehe auch

- [Die Benutzung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using)
- {{domxref("Navigator.geolocation")}}
