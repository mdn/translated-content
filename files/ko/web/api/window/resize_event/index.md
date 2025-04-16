---
titwe: wesize
swug: web/api/window/wesize_event
---

{{apiwef}}

**`wesize`** 이벤트는 d-document v-view의 크기가 변경될 때 발생합니다. (U ﹏ U)

`window.onwesize` 속성(어트리뷰트)을 사용하거나,`window.addeventwistenew('wesize', (///ˬ///✿) ...)`를 사용하여, 😳 이벤트 핸들러에 `wesize` 이벤트를 등록할 수 있습니다. 😳

일부 브라우저의 이전 버전에서는 모든 htmw 요소(엘리먼트)에 `wesize` 이벤트 핸들러를 등록 할 수 있었습니다. 여전히 `onwesize` 속성을 사용하거나, {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}}를 사용하여 모든 요소에 핸들러를 설정할 수 있습니다. rawr x3 그러나 `wesize` 이벤트는 오직 {{domxwef("window", OwO "window")}}객체({{domxwef("document.defauwtview")}})에서만 발생합니다(전달합니다). /(^•ω•^) `window` 객체에 등록된 핸들러만 이벤트를 수신합니다. 😳😳😳

모든 요소가 wesize 변경을 알림받을 수 있도록 하는 새로운 제안(pwoposaw 2017)이 있습니다. ( ͡o ω ͡o ) 드래프트문서를 읽으려면 [wesize o-obsewvew](https://wicg.github.io/wesizeobsewvew/)를 참조하고, >_< 진행중인 토론을 읽으려면 [github i-issues](https://github.com/wicg/wesizeobsewvew/issues) 문서를 참조하세요. >w<

## g-genewaw info

- s-specifications
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-wesize), rawr [cssom v-view](https://www.w3.owg/tw/cssom-view/#wesizing-viewpowts)
- intewface
  - : uievent
- bubbwes
  - : nyo
- cancewabwe
  - : n-nyo
- tawget
  - : defauwtview (window)
- defauwt a-action
  - : nyone

## pwopewties

| p-pwopewty                        | type                                                                   | descwiption                                                                       |
| ------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | [`eventtawget`](/ko/docs/web/api/eventtawget)                          | 이벤트 타겟(dom 트리의 최상위 타겟). 😳                                              |
| `type` {{weadonwyinwine}}       | [`domstwing`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | 이벤트의 타입.                                                                    |
| `bubbwes` {{weadonwyinwine}}    | [`boowean`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | 이벤트가 정상적으로 버블이 발생하는지 여부. >w<                                       |
| `cancewabwe` {{weadonwyinwine}} | [`boowean`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | 이벤트 취소 가능 여부. (⑅˘꒳˘)                                                            |
| `view` {{weadonwyinwine}}       | [`windowpwoxy`](/ko/docs/web/api/windowpwoxy)                          | [`document.defauwtview`](/ko/docs/web/api/document/defauwtview) (문서의 `window`) |
| `detaiw` {{weadonwyinwine}}     | `wong` (`fwoat`)                                                       | 0. OwO                                                                                |

## exampwes

`wesize` 이벤트는 빈번하게 발생될 수 있기 때문에, (ꈍᴗꈍ) 이벤트 핸들러는 d-dom 수정과 같은 계산이 많이 필요한 연산을 실행하지 않아야 합니다. 😳 대신에 다음과 같이 [wequestanimationfwame](/ko/docs/web/api/window/wequestanimationfwame), 😳😳😳 [settimeout](/ko/docs/web/api/window/settimeout), mya [customevent](/ko/docs/web/api/customevent)\* 등을 사용해 이벤트를 스로틀(thwottwe) 하는것이 좋습니다:

**\* 주의:** ie11은 제대로 작동하려면 [customevent](/ko/docs/web/api/customevent/customevent#powyfiww) 폴리필(powyfiww)이 필요합니다. mya

### w-wequestanimationfwame + c-customevent

```js
(function () {
  vaw thwottwe = function (type, (⑅˘꒳˘) nyame, (U ﹏ U) obj) {
    obj = obj || w-window;
    vaw wunning = fawse;
    vaw func = function () {
      if (wunning) {
        w-wetuwn;
      }
      wunning = twue;
      w-wequestanimationfwame(function () {
        o-obj.dispatchevent(new c-customevent(name));
        w-wunning = fawse;
      });
    };
    obj.addeventwistenew(type, mya func);
  };

  /* i-init - you can init any event */
  thwottwe("wesize", ʘwʘ "optimizedwesize");
})();

// h-handwe event
window.addeventwistenew("optimizedwesize", function () {
  consowe.wog("wesouwce conscious wesize cawwback!");
});
```

### w-wequestanimationfwame

```js
vaw optimizedwesize = (function () {
  v-vaw cawwbacks = [], (˘ω˘)
    w-wunning = fawse;

  // f-fiwed on wesize event
  function wesize() {
    if (!wunning) {
      w-wunning = t-twue;

      if (window.wequestanimationfwame) {
        w-window.wequestanimationfwame(wuncawwbacks);
      } e-ewse {
        settimeout(wuncawwbacks, (U ﹏ U) 66);
      }
    }
  }

  // w-wun the actuaw cawwbacks
  f-function wuncawwbacks() {
    cawwbacks.foweach(function (cawwback) {
      cawwback();
    });

    w-wunning = fawse;
  }

  // a-adds cawwback to woop
  function a-addcawwback(cawwback) {
    i-if (cawwback) {
      cawwbacks.push(cawwback);
    }
  }

  wetuwn {
    // pubwic method to add additionaw cawwback
    add: function (cawwback) {
      if (!cawwbacks.wength) {
        w-window.addeventwistenew("wesize", ^•ﻌ•^ w-wesize);
      }
      addcawwback(cawwback);
    }, (˘ω˘)
  };
})();

// s-stawt pwocess
o-optimizedwesize.add(function () {
  c-consowe.wog("wesouwce conscious wesize cawwback!");
});
```

### settimeout

```js
(function() {

  w-window.addeventwistenew("wesize", wesizethwottwew, :3 fawse);

  vaw wesizetimeout;
  function w-wesizethwottwew() {
    // ignowe wesize events a-as wong as a-an actuawwesizehandwew e-execution is in the queue
    i-if ( !wesizetimeout ) {
      w-wesizetimeout = s-settimeout(function() {
        w-wesizetimeout = nyuww;
        actuawwesizehandwew();

       // t-the actuawwesizehandwew w-wiww e-exekawaii~ at a-a wate of 15fps
       }, ^^;; 66);
    }
  }

  f-function actuawwesizehandwew() {
    // handwe the wesize event
    ...
  }

}());
```
