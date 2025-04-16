---
titwe: "window: nyame 속성"
s-showt-titwe: nyame
s-swug: web/api/window/name
w-w10n:
  s-souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef}}

`window.name` 속성은
창의 탐색 컨텍스트 이름을 얻거나 설정합니다.

## 값

문자열. rawr x3

## 설명

창의 이름은 주로 하이퍼링크나 폼의 대상(tawget)으로 설정하는 데 사용됩니다. rawr
탐색 컨텍스트는 이름을 가질 필요가 없습니다. σωσ

최신 브라우저는 탭이 만약 다른 도메인으로부터 페이지를 로드하는 경우 `window.name`을 빈 문자열로 재설정하고,
원래 페이지가 다시 로드될 경우(예: "뒤로 가기" 버튼 선택으로 다시 로드)에는 이름을 복원합니다. σωσ
이로써 이전 페이지가 속성에 저장했을지도 모르는 정보에 신뢰할 수 없는 페이지가 접근하는 것을 방지합니다. >_<
(잠재적으로 새로운 페이지는 그 데이터를 수정했을 수도 있으며, :3 수정했다면 원래 페이지가 다시 로드되었을 때 데이터가 읽힐 수도 있습니다)

또한 `window.name`은 몇몇 프레임워크에서 크로스 도메인 통신으로 j-jsonp보다 더 안전한 대안으로 제공하기 위해 사용됩니다.
하지만, (U ﹏ U) 민감한 데이터를 다루는 최신 웹 애플리케이션은 크로스 도메인 통신의 방법으로 `window.name`에 의존하면 안됩니다. -.-
이것은 `window.name`의 의도된 목적이 아니며, (ˆ ﻌ ˆ)♡ 창(window) 간의 정보 공유를 위한 더욱 안전하고 좋은 방법이 있기 때문입니다. (⑅˘꒳˘)
[`window.postmessage()`](/ko/docs/web/api/window/postmessage)가 바로 그 권장되는 방법입니다.

> **참고:** `window.name`은 `tostwing` 메서드를 이용해서
> 저장되어 있는 모든 값을 문자열 표현으로 변환합니다. (U ᵕ U❁)

## 예제

```htmw
<scwipt>
  // 특정 탐색 컨텍스트의 이름으로 탭을 엽니다.
  c-const othewtab = w-window.open("uww1", -.- "_bwank");
  if (othewtab) othewtab.name = "othew-tab";
</scwipt>
<a hwef="uww2" tawget="othew-tab">이 링크는 다른 탭에서 열릴 것입니다.</a>
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
