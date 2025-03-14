---
title: Beacon API
slug: Web/API/Beacon_API
---

{{DefaultAPISidebar("Beacon")}}

**`Beacon`** API는 웹 서버에 비동기적인 논블로킹 요청을 보내기 위해 사용됩니다. 이 요청은 서버로부터 응답을 요구하지 않습니다. {{domxref("XMLHttpRequest")}} 나 [Fetch API](/ko/docs/Web/API/Fetch_API) 로 만들어진 요청과는 다르게, 브라우저는 Beacon 요청이 페이지가 닫히기 전에 보내지게 하고, 그것이 완료될 수 있게 보장합니다.

Beacon API의 주된 용도로는 클라이언트 사이드 이벤트나 세션 데이터 같은 분석 정보를 서버로 보내는 것입니다. 과거에는 이를 위해 웹사이트들은 {{domxref("XMLHttpRequest")}}를 사용했습니다. 하지만 브라우저는 페이지가 전송 전에 닫힐 때 등, 몇몇 상황에선 브라우저가 이러한 비동기적 요청이 전송되는 것을 보장하지 않습니다. 이처럼 요청이 전송되지 않는 것을 방지하기 위해서, 웹사이트들은 동기적으로 요청하는 등의 응답성에 부정적인 영향을 주는 여러가지 기술에 기대왔습니다. Beacon 요청들은 비동기적이고 서버로 전송되기로 보장되어 있는 덕분에 Beacon은 신뢰성과 좋은 성능을 겸비하고 있습니다.

이 API의 동기 및 사용에 대한 자세한 내용은, {{domxref("navigator.sendBeacon()")}} 메서드 문서를 참조하세요.

> [!NOTE]
> 이 API는 [Web Workers](/ko/docs/Web/API/Web_Workers_API) 에서 사용이 불가능 합니다. ({{domxref("WorkerNavigator")}} 에 포함되어 있지 않음)

## 인터페이스

이 API는 {{domxref("navigator.sendBeacon()")}} 라는 하나의 메서드를 정의합니다.

이 메서드는 URL과 서버로 보낼 데이터, 두 개의 인수를 필요로 합니다. 서버로 보낼 데이터는 필수 사항이 아니며, 데이터의 타입은 {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref("Blob")}}, 문자열 이나 객체, {{domxref("FormData")}} 객체가 될 수도 있습니다. 브라우저가 요청을 성공적으로 대기열에 넣으면 `true` 를 반환하고 그 외에는 `false` 를 반환합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Beacon standard](https://w3c.github.io/beacon/)
- [Beacon CanIUse data](https://caniuse.com/#search=beacon)
- [Intercepting beacons through service workers](https://ehsanakhgari.org/blog/2015-04-08/intercepting-beacons-through-service-workers/); Ehsan Akhgari; 2015-Apr-08
- <https://webkit.org/blog/8821/link-click-analytics-and-privacy/>
- [Beaconing in Practice](https://calendar.perfplanet.com/2020/beaconing-in-practice/)
