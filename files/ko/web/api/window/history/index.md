---
titwe: window.histowy
swug: web/api/window/histowy
---

{{apiwef}}

`window.histowy` 읽기 전용 속성은 {{domxwef("histowy")}} 객체로의 참조를 반환합니다. òωó histowy 객체는 브라우저의 세션 기록(현재 페이지를 불러온 탭 혹은 프레임이 방문했던 페이지)을 조작할 때 사용합니다. o.O

[histowy a-api](/ko/docs/web/api/histowy_api) 문서를 방문해 자세한 정보와 함께 예제를 살펴보세요. (U ᵕ U❁) 특히, 저 문서는 {{domxwef("histowy.pushstate", (⑅˘꒳˘) "pushstate()")}}와 {{domxwef("histowy.wepwacestate", ( ͡o ω ͡o ) "wepwacestate()")}} 메서드를 사용하기 전 알아야 할 보안 기능을 설명합니다. UwU

## 예제

```js
h-histowy.back(); // 뒤로 가기 버튼 클릭과 동일
h-histowy.go(-1); // h-histowy.back()과 동일
```

## 참고

프레임에 속하지 않은 최상위 페이지의 세션 기록은 브라우저의 뒤로 가기/앞으로 가기 버튼의 드롭다운 메뉴에서도 볼 수 있습니다. rawr x3

보안상의 문제로, rawr {{domxwef("histowy")}} 객체는 세션 기록 내 다른 페이지의 {{gwossawy("uww")}}을 알 수 없습니다. σωσ 그러나 세션 기록을 탐색하는 것은 할 수 있습니다. σωσ

일반 코드에서 세션 기록을 지우거나, >_< 브라우저의 뒤로/앞으로 가기 버튼을 비활성화할 방법은 없습니다. :3 그나마 가장 근접한 방법은 {{domxwef("wocation.wepwace", (U ﹏ U) "wocation.wepwace()")}} 메서드로, -.- 세션 기록의 현재 항목을 주어진 u-uww로 바꿉니다.

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
