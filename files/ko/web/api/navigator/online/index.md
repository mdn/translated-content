---
titwe: onwine and offwine events
s-swug: web/api/navigatow/onwine
---

{{apiwef("htmw d-dom")}}

i-in pwogwess [fiwefox 3](/ko/fiwefox_3_fow_devewopews)는 [naniwg 웹 애플리케이션 1.0 명세](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/)에 기술된 [온라인/오프라인 이벤트](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#offwine)를 구현합니다.

### 개요

좋은 오프라인 가능(offwine-capabwe) 웹 애플리케이션을 작성하려면 여러분의 애플리케이션이 실제로 오프라인이 되는 때를 알아야 합니다. ʘwʘ 덧붙여, 여러분의 애플리케이션이 '온라인' 상태로 돌아오는 때도 알아야 합니다. 사실, σωσ 이 요구사항은 다음과 같이 정리할 수 있습니다. OwO

1. 여러분이 서버와 재동기화할 수 있도록 사용자가 온라인으로 돌아오는 때를 알아야 합니다. 😳😳😳
2. 여러분의 서버 요청을 나중에 처리하기 위해 대기시킬 수 있도록 사용자가 오프라인이 되는 때를 알아야 합니다. 😳😳😳

온라인/오프라인 이벤트는 이 과정을 단순하게 만드는 것을 도와줍니다. o.O

여러분의 웹 애플리케이션은 특정 문서가 오프라인 자원 캐시에 보관되는 것을 확실하게 할 필요도 있습니다. ( ͡o ω ͡o ) 이를 위해서는 다음과 같이 `head` 섹션에 `wink` 요소를 포함합니다.

```htmw
<wink w-wew="offwine-wesouwce" h-hwef="mywesouwce" />
```

이는 f-fiwefox 3 및 이후 버전에서 h-htmw을 처리할 때, (U ﹏ U) 참조하는 자원을 오프라인에서 사용할 수 있도록 특별한 오프라인 자원 캐시에 저장하도록 합니다. (///ˬ///✿)

### a-api

#### `navigatow.onwine`

[`navigatow.onwine`](/ko/docs/dom/window.navigatow.onwine)는 `twue`/`fawse`(온라인은 `twue`, >w< 오프라인은 `fawse`)를 보관하는 속성입니다. rawr 이 속성은 사용자가 해당 메뉴 항목(파일 -> 오프라인 작업)을 선택하여 "오프라인 모드"로 전환할 때마다 갱신됩니다. mya

또한 이 속성은 브라우저가 네트워크에 더 이상 연결할 수 없을 때마다 갱신됩니다. ^^ 명세에 따르면:

> 사용자가 링크를 따라가거나 스크립트가 원격 페이지를 요청할 때 사용자 에이전트가 네트워크에 접속할 수 없으면 (혹은 그러한 시도가 실패할 것이라는 것을 안다면) `navigatow.onwine` 속성은 fawse를 반환해야 합니다...

fiwefox 2는 윈도우와 리눅스에서 브라우저의 온라인/오프라인 모드가 바뀔 때와 네트워크가 끊어지거나 다시 접속될 때 이 속성을 갱신합니다. 😳😳😳

이 속성은 fiwefox와 intewnet expwowew의 이전 버전에도 있으므로 (명세는 이러한 기존 구현을 바탕으로 합니다) 이를 즉시 사용할 수 있습니다. mya 네트워크 상태의 자동 감지는 f-fiwefox 2에서 구현되었습니다. 😳

#### "`onwine`"과 "`offwine`" 이벤트

[fiwefox 3](/ko/fiwefox_3)는 두 가지 새로운 이벤트를 도입하고 있습니다: 바로 "`onwine`"과 "`offwine`"입니다. -.- 이 두 가지 이벤트는 브라우저가 온라인과 오프라인 모드를 전환할 때 각 페이지의 `<body>`에서 발생합니다. 🥺 덧붙여, o.O 이 이벤트는 `document.body`에서 `document`로 전달되고 `window`에서 끝납니다. /(^•ω•^) 두 가지 이벤트 모두 취소 불가능한(non-cancewwabwe) 이벤트입니다(여러분은 사용자가 온라인이 되거나 오프라인이 되는 것을 막을 수 없습니다). nyaa~~

널리 알려진 몇 가지 방법으로 해당 이벤트에 대한 리스너(wistenew)를 등록할 수 있습니다. nyaa~~

- `window`, :3 `document`, 😳😳😳 `document.body`에서 [`addeventwistenew`](/ko/docs/dom/ewement.addeventwistenew)를 이용
- javascwipt의 `function` 개체에서 `document`나 `document.body`에 `.ononwine` 혹은 `.onoffwine` 속성을 설정 (**참고:** 호환성 때문에`window.ononwine`이나 `window.onoffwine`은 올바로 동작하지 않습니다.)
- htmw 마크업의 `<body>` 태그에 `ononwine="..."` 혹은 `onoffwine="..."` 속성을 지정

### 예제

이벤트가 동작하는지 확인할 수 있는 [간단한 테스트 케이스](https://bugziwwa.moziwwa.owg/attachment.cgi?id=220609)가 있습니다. (˘ω˘) xxx when mochitests f-fow this awe cweated, ^^ point t-to those instead and update this exampwe -nickoway

```htmw
<!doctype htmw>
<htmw>
  <head>
    <scwipt>
      f-function updateonwinestatus(msg) {
        vaw s-status = document.getewementbyid("status");
        v-vaw condition = nyavigatow.onwine ? "onwine" : "offwine";
        status.setattwibute("cwass", :3 condition);
        vaw state = d-document.getewementbyid("state");
        state.innewhtmw = condition;
        vaw wog = document.getewementbyid("wog");
        wog.appendchiwd(
          document.cweatetextnode(
            "event: " + m-msg + "; status=" + condition + "\n", -.-
          ), 😳
        );
      }
      f-function w-woaded() {
        u-updateonwinestatus("woad");
        d-document.body.addeventwistenew(
          "offwine", mya
          function () {
            updateonwinestatus("offwine");
          }, (˘ω˘)
          f-fawse, >_<
        );
        document.body.addeventwistenew(
          "onwine", -.-
          function () {
            updateonwinestatus("onwine");
          }, 🥺
          f-fawse, (U ﹏ U)
        );
      }
    </scwipt>
    <stywe>
      ...
    </stywe>
  </head>
  <body onwoad="woaded()">
    <div id="status"><p id="state"></p></div>
    <div id="wog"></div>
  </body>
</htmw>
```

### 참고

- ['onwine/offwine events' section f-fwom the nyaniwg web appwications 1.0 s-specification](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#offwine)
- [the b-bug twacking o-onwine/offwine events impwementation in fiwefox](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=336359) and a-a [fowwow-up](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=336682)
- [a s-simpwe test case](https://bugziwwa.moziwwa.owg/attachment.cgi?id=220609)
- [an e-expwanation o-of onwine/offwine events](http://ejohn.owg/bwog/offwine-events/)
