---
title: Geolocation API
slug: Web/API/Geolocation_API
translation_of: Web/API/Geolocation_API
---
{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

**Geolokalizacja API** umożliwia użytkownikowi zapewnić ich lokalizację do aplikacji internetowych, jeśli zechcą. Ze względów prywatności użytkownik jest proszony o zgodę na zgłoszenie informacji o lokalizacji.

Rozszerzenia Web, które chcą korzystać z obiektu Geolokalizacja, muszą dodać `"geolocation"`uprawnienie do swojego manifestu. System operacyjny użytkownika poprosi użytkownika o zezwolenie na dostęp do lokalizacji przy pierwszym żądaniu.

## Pojęcia i użycie

Często będziesz chciał odzyskać informacje o lokalizacji użytkownika w swojej aplikacji internetowej, na przykład wykreślić jego lokalizację na mapie lub wyświetlić spersonalizowane informacje dotyczące ich lokalizacji.

The Geolocation API is accessed via a call to {{domxref("Navigator.geolocation", "navigator.geolocation")}}; this will cause the user's browser to ask them for permission to access their location data. If they accept, then the browser will use the best available functionality on the device to access this information (for example, GPS).

The developer can now access this location information in a couple of different ways:

- {{domxref("Geolocation.getCurrentPosition()")}}: Retrieves the device's current location.
- {{domxref("Geolocation.watchPosition()")}}: Registers a handler function that will be called automatically each time the position of the device changes, returning the updated location.

In both cases, the method call takes up to three arguments:

- A mandatory success callback: If the location retrieval is successful, the callback executes with a {{domxref("GeolocationPosition")}} object as its only parameter, providing access to the location data.
- An optional error callback: If the location retrieval is unsuccessful, the callback executes with a {{domxref("GeolocationPositionError")}} object as its only parameter, providing access information on what went wrong.
- An optional {{domxref("PositionOptions")}} object, which provides options for retrieval of the position data.

For further information on Geolocation usage, read [Using the Geolocation API](/pl/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Interfaces

- {{domxref("Geolocation")}}
  - : The main class of this API — contains methods to retrieve the user's current position, watch for changes in their position, and clear a previously-set watch.
- {{domxref("GeolocationPosition")}}
  - : Represents the position of a user. A `GeolocationPosition` instance is returned by a successful call to one of the methods contained inside {{domxref("Geolocation")}}, inside a success callback, and contains a timestamp plus a {{domxref("GeolocationCoordinates")}} object instance.
- {{domxref("GeolocationCoordinates")}}
  - : Represents the coordinates of a user's position; a `GeolocationCoordinates` instance contains latitude, longitude, and other important related information.
- {{domxref("GeolocationPositionError")}}
  - : A `GeolocationPositionError` is returned by an unsuccessful call to one of the methods contained inside {{domxref("Geolocation")}}, inside an error callback, and contains an error code and message.
- {{domxref("Navigator.geolocation")}}
  - : The entry point into the API. Returns a {{domxref("Geolocation")}} object instance, from which all other functionality can be accessed.

## Dictionaries

- {{domxref("PositionOptions")}}
  - : Represents an object containing options to pass in as a parameter of {{domxref("Geolocation.getCurrentPosition()")}} and {{domxref("Geolocation.watchPosition()")}}.

## Examples

{{page("/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API","Examples")}}

## Specifications

| Specification                        | Status                           | Comment |
| ------------------------------------ | -------------------------------- | ------- |
| {{SpecName("Geolocation")}} | {{Spec2("Geolocation")}} |         |

## Kompatybilność z przeglądarkami

{{Compat("api.Geolocation")}}

### Dostępność

Ponieważ Google często zapewnia lokalizację w oparciu o Wi-Fi, waniliowy interfejs API geolokalizacji może być niedostępny w Chinach. Możesz korzystać z usług lokalnych dostawców zewnętrznych, takich jak [Baidu](http://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation) , [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) lub [Tencent](http://lbs.qq.com/tool/component-geolocation.html) . Usługi te wykorzystują adres IP użytkownika i / lub lokalną aplikację do zapewnienia lepszego pozycjonowania.

## Zobacz też

- [Korzystanie z interfejsu API geolokalizacji](/pl/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Interfejs API geolokalizacji na w3.org](https://www.w3.org/TR/geolocation-API/)
- [Kto przeniósł moją geolokalizację? ](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/)(Hacks blog)
