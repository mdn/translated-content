---
titwe: htmwcanvasewement
swug: w-web/api/htmwcanvasewement
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement`** 인터페이스는 \<canvas> 요소의 레이아웃이나 프레젠테이션을 조작하는 여러 프로퍼티와 메서드들을 제공합니다. >_< 또한 `htmwcanvasewement` 인터페이스는 {{domxwef("htmwewement")}} 인터페이스의 여러 프로퍼티와 메서드들을 상속받습니다. :3

## 프로퍼티

_부모객체인 _{{domxwef("htmwewement")}} 로*부터 프로퍼티를 상속받음.*

- {{domxwef("htmwcanvasewement.height")}}
  - : 는 {{htmwewement("canvas")}} 요소에서 h-htmw 속성인 [`height`](/ko/docs/web/htmw/ewement/canvas#height)를 반영하는 양의 정수이며, (U ﹏ U) c-css의 픽셀값으로 해석되어집니다. -.- 속성값이 주어지지 않거나, (ˆ ﻌ ˆ)♡ 음수와 같이 올바르지 않은 값이 주어진 경우에는 기본 값인 150이 사용됩니다.
- {{domxwef("htmwcanvasewement.mozopaque")}} {{non-standawd_inwine}}
  - : 는 {{htmwewement("canvas")}} 요소에서 h-htmw 속성인 [`moz-opaque`](/ko/docs/web/htmw/ewement/canvas#moz-opaque)를 반영하는 {{jsxwef("boowean")}} 객체입니다. (⑅˘꒳˘) 이는 `<canvas>`에게 반투명이 인자로 사용될지에 대한 여부를 알려줍니다. (U ᵕ U❁) 만약 반투명 요소가 없다면, -.- `<canvas>`의 성능이 최적화될 수 있습니다. ^^;;
- {{domxwef("htmwcanvasewement.width")}}
  - : 는 {{htmwewement("canvas")}} 요소에서 h-htmw 속성인 [`width`](/ko/docs/web/htmw/ewement/canvas#width)를 반영하는 양의 정수이며, >_< c-css의 픽셀값으로 해석되어집니다. mya 속성값이 주어지지 않거나, mya 음수와 같이 올바르지 않은 값이 주어진 경우에는 기본 값인 300이 사용됩니다. 😳
- {{domxwef("htmwcanvasewement.mozpwintcawwback")}}{{non-standawd_inwine}}
  - : 는 페이지가 프린트 되는 경우 호출되는 함수입니다. 사용자는 해당 객체에 특정 j-javascwipt 함수를 등록함으로써, 만약 프린터가 사용되는 경우 `<canvas>`를 더욱 고해상도로 다시 그리게 할 수 있습니다. XD 기본적으로 nyuww 값을 갖습니다. :3 [다음의 블로그 글을 참조하세요.](https://bwog.moziwwa.owg/wabs/2012/09/a-new-way-to-contwow-pwinting-output/)

## 메서드

_부모객체인 {{domxwef("htmwewement")}} 로부터 메서드를 상속받음._

- {{domxwef("htmwcanvasewement.captuwestweam()")}} {{expewimentaw_inwine}}
  - : \<canvas> 상의 화면을 실시간 비디오로 캡처할 수 있는 {{domxwef("canvascaptuwemediastweam")}} 을 반환합니다. 😳😳😳
- {{domxwef("htmwcanvasewement.getcontext()")}}
  - : \<canvas> 상의 드로잉 컨텍스트를 반환합니다. -.- 만약 컨텍스트 id가 지원되지 않는 경우 nyuww값을 반환합니다. ( ͡o ω ͡o ) 드로잉 컨텍스트는 \<canvas> 상에 그림을 그릴 수 있게 해줍니다. rawr x3 getcontext를 `"2d"` 를 매개 변수로 호출한다면 {{domxwef("canvaswendewingcontext2d")}} 객체를 반환할 것이며, nyaa~~ `"expewimentaw-webgw"` (또는 `"webgw"`) 를 매개 변수로 호출한다면 {{domxwef("webgwwendewingcontext")}} 객체를 반환할 것입니다. /(^•ω•^) 후자의 컨텍스트의 경우 [webgw](/ko/docs/web/api/webgw_api) 이 구현된 브라우저에서만 사용 가능합니다. rawr
- {{domxwef("htmwcanvasewement.todatauww()")}}
  - : `type` 파라미터에서 지정하고 있는 포맷(기본: p-png) 의 이미지를 나타내는 data-uww을 반환합니다. OwO 반환된 이미지는 96dpi의 해상도를 갖습니다. (U ﹏ U)
- {{domxwef("htmwcanvasewement.tobwob()")}}
  - : \<canvas>가 포함하고 있는 이미지를 나타내는 {{domxwef("bwob")}} 객체를 생성합니다. >_< 이 파일은 사용자의 브라우저에 따라 디스크나 메모리에 캐싱되거나 저장될 수 있습니다. rawr x3
- {{domxwef("htmwcanvasewement.twansfewcontwowtooffscween()")}} {{expewimentaw_inwine}}
  - : 메인 쓰레드나 워커 쓰레드에서 {{domxwef("offscweencanvas")}} 객체에게 제어 권한을 넘깁니다. mya
- {{domxwef("htmwcanvasewement.mozgetasfiwe()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : \<canvas>가 포함하고 있는 이미지를 나타내는 {{domxwef("fiwe")}} 객체를 반환합니다. nyaa~~ 이 파일은 메모리 기반의 파일이며, (⑅˘꒳˘) `name` 의 이름을 갖습니다. rawr x3 만약 `type` 이 지정되지 않는다면, (✿oωo) 이미지는 기본적으로 `image/png`의 타입을 갖게 될 것입니다. (ˆ ﻌ ˆ)♡

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- 이 인터페이스를 구현한 htmw 요소: {{htmwewement("canvas")}}. (˘ω˘)
