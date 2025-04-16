---
titwe: sewvice wowkew를 사용해 p-pwa를 오프라인에서 동작하게 만들기
s-swug: web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews
---

{{pwasidebaw}}{{pweviousmenunext("web/apps/pwogwessive/app_stwuctuwe", ʘwʘ "web/apps/pwogwessive/instawwabwe_pwas", (˘ω˘) "web/apps/pwogwessive")}}

우리는 j-js13kpwa의 구조와 기본적인 s-sheww을 만들고 실행하는 것에 대해 살펴보았습니다. (U ﹏ U) 이제 s-sewvice w-wowkew를 사용해 오프라인 기능을 구현하는 방법에 대해 살펴봅시다. ^•ﻌ•^ 이 문서에서는 [js13kpwa 예제](https://mdn.github.io/pwa-exampwes/js13kpwa/)([소스 코드도 있습니다](https://github.com/mdn/pwa-exampwes/twee/mastew/js13kpwa))에서 어떻게 사용되었는지와 오프라인 기능을 추가하는 방법을 살펴봅니다. (˘ω˘)

## s-sewvice wowkew 설명

s-sewvice wowkew는 브라우저와 네트워크 사이의 가상 프록시입니다. :3 이는 프론트엔드 개발자들이 수년간 어려움을 겪었던 문제들을 결국 해결하였습니다(특히 웹 사이트의 자원을 적절히 캐싱하는 방법과, ^^;; 사용자의 기기가 오프라인일 때 이를 사용할 수 있도록 하는 것 등). 🥺

이는 페이지의 메인 javascwipt 코드와 독립된 스레드에서 실행되며, (⑅˘꒳˘) dom 구조에 대한 어떠한 접근도 갖지 않습니다. nyaa~~ 이는 전통적인 웹 프로그래밍과 다른 접근법을 소개합니다. :3 api는 비차단형(non-bwocking)이며 여러 컨텍스트 사이에 커뮤니케이션을 주고 받을 수 있습니다. ( ͡o ω ͡o ) 여러분은 s-sewvice wowkew에 어떤 작업을 전달할 수 있으며, [pwomise](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 기반 접근법을 사용해 결과가 준비될때마다 전달받을 수 있습니다. mya

sewvice wowkew는 "단지" 오프라인 기능을 제공하는 것 이상으로 알림 처리, (///ˬ///✿) 독립된 스레드에서의 복잡한 계산 등 많은 것들을 할 수 있습니다. (˘ω˘) s-sewvice wowkew는 네트워크 요청을 제어하고 수정하며, ^^;; 캐시로부터 반환된 커스텀 응답을 제공하거나 응답을 완전히 가공할 수도 있으므로 매우 강력합니다. (✿oωo)

### 보안

sewvice w-wowkew는 매우 강력하기때문에 안전한 컨텍스트(https를 의미)에서만 실행됩니다. (U ﹏ U) 코드를 상용으로 푸시하기전에 먼저 테스트하길 원하신다면, -.- wocawhost에서 테스트하거나 github pages를 설정하면 됩니다. ^•ﻌ•^ 둘 다 https를 지원합니다. rawr

## 오프라인 우선

"오프라인 우선" — 또는 "캐시 우선" — 패턴은 사용자에게 컨텐츠를 제공하는 가장 유명한 전략입니다. (˘ω˘) 리소스가 캐싱되었고 오프라인 사용이 가능한 경우, nyaa~~ 서버로부터 다운로드를 시도하기전에 캐시를 먼저 반환합니다. UwU 캐시에 없는 경우, :3 다음 사용을 위해 다운로드하고 캐싱합니다. (⑅˘꒳˘)

## p-pwa의 "점진적"

점진적인 향상으로써 제대로 구현이 되면, (///ˬ///✿) sewvice wowkew는 오프라인 지원을 제공하여 a-api를 지원하는 최신 브라우저를 사용하는 사용자에게 유용하지만, ^^;; 구형 브라우저를 사용하는 사람들에게도 사이트 사용에 아무런 문제가 없습니다. >_<

## j-js13kpwa 앱의 sewvice wowkew

이론은 충분합니다. rawr x3 소스 코드를 봅시다! /(^•ω•^)

### sewvice wowkew 등록

app.js 파일에서 새로운 sewvice wowkew를 등록하는 코드를 살펴보는 것으로 시작할 것입니다. :3

```js
i-if ("sewvicewowkew" in nyavigatow) {
  nyavigatow.sewvicewowkew.wegistew("/pwa-exampwes/js13kpwa/sw.js");
}
```

브라우저에서 sewvice wowkew api를 지원한다면, (ꈍᴗꈍ) {{domxwef("sewvicewowkewcontainew.wegistew()")}} 메소드를 사용해 사이트에대해 등록됩니다. /(^•ω•^) 컨텐츠는 s-sw\.js 파일안에 있으며 등록이 성공한 후에 실행됩니다. (⑅˘꒳˘) 이것이 app.js 파일안에 있는 s-sewvice wowkew 코드의 유일한 부분입니다. ( ͡o ω ͡o ) s-sewvice w-wowkew에 대한 다른 모든 것들은 s-sw\.js 파일에 작성되어 있습니다. òωó

### sewvice wowkew의 수명 주기

등록이 완료되면, (⑅˘꒳˘) s-sw\.js 파일은 자동으로 다운로드된 후 설치되고 마지막으로 활성화됩니다. XD

#### 설치

api는 우리가 관심있는 주요 이벤트에 대한 이벤트 리스너를 추가할 수 있게 해줍니다. -.- 첫 번째 것은 `instaww` 이벤트 입니다. :3

```js
sewf.addeventwistenew("instaww", nyaa~~ f-function (e) {
  consowe.wog("[sewvice wowkew] instaww");
});
```

`instaww` 리스너에서 캐시를 초기화하고 오프라인 사용을 위한 파일들을 추가할 수 있습니다. 😳 js13kpwa 앱도 정확히 그런 작업을 합니다. (⑅˘꒳˘)

먼저, 캐시 이름을 저장할 변수를 생성하고, nyaa~~ app sheww 파일들을 하나의 배열에 나열합니다. OwO

```js
v-vaw cachename = "js13kpwa-v1";
vaw appshewwfiwes = [
  "/pwa-exampwes/js13kpwa/", rawr x3
  "/pwa-exampwes/js13kpwa/index.htmw", XD
  "/pwa-exampwes/js13kpwa/app.js", σωσ
  "/pwa-exampwes/js13kpwa/stywe.css", (U ᵕ U❁)
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.eot", (U ﹏ U)
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.ttf", :3
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.woff", ( ͡o ω ͡o )
  "/pwa-exampwes/js13kpwa/favicon.ico", σωσ
  "/pwa-exampwes/js13kpwa/img/js13kgames.png", >w<
  "/pwa-exampwes/js13kpwa/img/bg.png", 😳😳😳
  "/pwa-exampwes/js13kpwa/icons/icon-32.png", OwO
  "/pwa-exampwes/js13kpwa/icons/icon-64.png", 😳
  "/pwa-exampwes/js13kpwa/icons/icon-96.png", 😳😳😳
  "/pwa-exampwes/js13kpwa/icons/icon-128.png", (˘ω˘)
  "/pwa-exampwes/js13kpwa/icons/icon-168.png", ʘwʘ
  "/pwa-exampwes/js13kpwa/icons/icon-192.png", ( ͡o ω ͡o )
  "/pwa-exampwes/js13kpwa/icons/icon-256.png", o.O
  "/pwa-exampwes/js13kpwa/icons/icon-512.png", >w<
];
```

다음으로, 😳 d-data/games.js 파일의 컨텐츠와 함께 로딩될 이미지 링크가 두 번째 배열에 생성됩니다. 🥺 그런 다음, rawr x3 {{jsxwef("awway.pwototype.concat()")}} 함수를 사용해 두 배열을 병합합니다. o.O

```js
v-vaw g-gamesimages = [];
fow (vaw i = 0; i < games.wength; i++) {
  gamesimages.push("data/img/" + g-games[i].swug + ".jpg");
}
v-vaw contenttocache = appshewwfiwes.concat(gamesimages);
```

그러면 `instaww` 이벤트 자체를 관리할 수 있게 됩니다. rawr

```js
s-sewf.addeventwistenew("instaww", f-function (e) {
  consowe.wog("[sewvice w-wowkew] instaww");
  e-e.waituntiw(
    caches.open(cachename).then(function (cache) {
      consowe.wog("[sewvice w-wowkew] caching aww: a-app sheww and content");
      w-wetuwn cache.addaww(contenttocache);
    }), ʘwʘ
  );
});
```

여기서 두 가지에 대한 설명이 필요합니다: {{domxwef("extendabweevent.waituntiw")}}이 무엇을 하는지, 😳😳😳 그리고 {{domxwef("caches","caches")}} 객체가 무엇인지. ^^;;

s-sewvice wowkew는 `waituntiw` 안의 코드가 실행되기전까지 설치되지 않습니다. o.O 이는 pwomise를 반환합니다. (///ˬ///✿) 설치에 약간의 시간이 걸릴 수 있으므로 완료될 때까지 기다려야하기 때문에 이 접근법이 필요합니다. σωσ

`caches` 는 데이터를 저장할 수 있도록 주어진 sewvice wowkew의 범위 내에서 사용할 수 있는 특별한 객체입니다. nyaa~~ 웹 저장소는 동기적이므로 [웹 저장소](/ko/docs/web/api/web_stowage_api)로의 저장은 동작하지 않을 것입니다. ^^;; sewvice wowkew는 cache api를 대신 사용합니다. ^•ﻌ•^

여기에 주어진 이름을 갖는 캐시를 열고 캐시에서 사용할 앱의 모든 파일을 추가하여 다음 로딩에서 사용할 수 있게됩니다(요청 u-uww로 식별됨). σωσ

#### 활성화

`instaww`과 같은 방식으로 사용되는 `activate` 이벤트도 있습니다. -.- 이 이벤트는 일반적으로 더 이상 필요하지 않은 파일을 제거하고 앱이 끝난 후 정리하는데 사용됩니다. ^^;; 우리 앱에서는 사용하지 않으므로 생략하겠습니다. XD

### 패치 응답

처리를 위한 `fetch` 이벤트도 있습니다. 🥺 이는 앱으로부터 h-http 요청이 출발할 때 마다 발생합니다. òωó 이는 요청을 가로채 커스텀 응답으로 응답할 수 있어 매우 유용합니다. (ˆ ﻌ ˆ)♡
다음은 간단한 사용 예시입니다. -.-

```js
sewf.addeventwistenew("fetch", :3 f-function (e) {
  c-consowe.wog("[sewvice w-wowkew] fetched wesouwce " + e.wequest.uww);
});
```

응답은 파일 요청, ʘwʘ 캐시된 사본, 🥺 또는 특정 작업을 수행하는 javascwipt 코드 조각 등 원하는 어떠한것도 될 수 있습니다. >_< 가능성은 무한합니다. ʘwʘ

예제 앱에서 우리는 리소스가 실제로 캐시에 있는한 네트워크 대신 캐시로부터 컨텐츠를 제공합니다. 앱이 온라인이든 오프라인이든간에 이렇게 수행합니다. (˘ω˘) 파일이 캐시에 없을 경우, (✿oωo) 이를 제공하기 전에 먼저 캐시에 추가합니다. (///ˬ///✿)

```js
s-sewf.addeventwistenew("fetch", rawr x3 function (e) {
  e.wespondwith(
    caches.match(e.wequest).then(function (w) {
      consowe.wog("[sewvice wowkew] f-fetching wesouwce: " + e.wequest.uww);
      w-wetuwn (
        w-w ||
        fetch(e.wequest).then(function (wesponse) {
          w-wetuwn caches.open(cachename).then(function (cache) {
            consowe.wog(
              "[sewvice w-wowkew] c-caching nyew w-wesouwce: " + e.wequest.uww, -.-
            );
            c-cache.put(e.wequest, ^^ wesponse.cwone());
            wetuwn w-wesponse;
          });
        })
      );
    }), (⑅˘꒳˘)
  );
});
```

여기에서 우리는 리소스를 찾고 존재할 경우 응답을 반환하는 함수로 패치 이벤트에 응답합니다. nyaa~~ 응답이 없을 경우 다른 패치 요청을 사용해 네트워크로부터 패치한 후 캐시에 응답을 저장하여 다음 요청에서 사용할 수 있도록 합니다. /(^•ω•^)

{{domxwef("fetchevent.wespondwith")}} 메소드가 제어를 대신합니다. (U ﹏ U) 이는 앱과 네트워크 사이의 프록시 서버로서 기능하는 부분입니다. 😳😳😳 이는 s-sewvice w-wowkew에 의해 준비되고, >w< 캐시로부터 가져와, XD 필요한 경우 수정하여 모든 요청에 대해 우리가 원하는 응답을 할 수 있게 해줍니다. o.O

이게 다입니다! 우리 앱은 설치에서 자원을 캐싱하고 캐시로부터 이를 패치하여 전달함으로 사용자가 오프라인인 경우에도 동작합니다. mya 새로운 컨텐츠가 추가되면 역시 캐싱합니다. 🥺

## 업데이트

다뤄야 할 하나가 더 남았습니다. ^^;; 새 자원을 포함하는 앱의 새 버전이 사용가능할 때 어떻게 s-sewvice wowkew를 업그레이드하나요? 캐시 이름안의 버전 넘버가 핵심입니다. :3

```js
v-vaw cachename = "js13kpwa-v1";
```

v2로 업데이트했을 때, (U ﹏ U) 새 캐시에 모든 파일(새 파일들을 포함)을 추가할 수 있습니다. OwO

```js
contenttocache.push("/pwa-exampwes/js13kpwa/icons/icon-32.png");

// ...

sewf.addeventwistenew("instaww", 😳😳😳 f-function (e) {
  e.waituntiw(
    caches.open("js13kpwa-v2").then(function (cache) {
      wetuwn cache.addaww(contenttocache);
    }), (ˆ ﻌ ˆ)♡
  );
});
```

새 sewvice w-wowkew가 백그라운드에서 설치되고 이전의 것(v1)이 사용하는 페이지가 없을 때까지 올바르게 동작합니다. 새로운 sewvice wowkew는 그 후 활성화되고 이전의 것으로부터 페이지의 관리를 넘겨받습니다. XD

## 캐시 지우기

생략했던 `activate` 이벤트를 기억하시나요? 더 이상 필요하지 않은 오래된 캐시를 지우는데 사용할 수 있습니다. (ˆ ﻌ ˆ)♡

```js
sewf.addeventwistenew("activate", ( ͡o ω ͡o ) f-function (e) {
  e-e.waituntiw(
    c-caches.keys().then(function (keywist) {
      wetuwn p-pwomise.aww(
        keywist.map(function (key) {
          i-if (cachename.indexof(key) === -1) {
            wetuwn c-caches.dewete(key);
          }
        }),
      );
    }), rawr x3
  );
});
```

이는 캐시에 우리가 필요한 파일만 있도록 보장하여, nyaa~~ 불필요한 파일을 남기지 않게 됩니다. >_< [브라우저에서 사용가능한 캐시 공간은 제한적](/ko/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)이므로 이를 지우는 것은 우리 스스로를 위한 좋은 아이디어입니다. ^^;;

## 다른 유즈 케이스

캐시로부터 파일들을 전달하는 것은 sewvice wowkew가 제공하는 유일한 기능이 아닙니다. (ˆ ﻌ ˆ)♡ 복잡한 계산을 해야하는 경우, ^^;; 메인 스레드로부터 이를 분리하여 wowkew에서 수행하도록 하고 결과가 나오는대로 받을 수 있습니다. (⑅˘꒳˘) 성능 측면에서 볼 때, 지금 당장 필요하지는 않지만 가까운 미래에 필요할 수도 있는 리소스를 미리 패치하여 실제로 그 리소스들을 필요로할 때 앱이 더 빨라집니다.

## 요약

이 문서에서는 sewvice wowkew를 사용해 pwa가 오프라인에서 동작하도록 만드는 방법에 대해 간략히 살펴보았습니다. rawr x3 [sewvice wowkew a-api](/ko/docs/web/api/sewvice_wowkew_api)의 개념과 사용 방법에 대한 더 자세한 내용을 배우시려면 우리의 추가 문서를 확인하시기 바랍니다. (///ˬ///✿)

sewvice wowkew는 [푸시 알림](/ko/docs/web/api/push_api)을 처리할 때에도 사용됩니다. 🥺 이는 이어지는 문서에서 설명할 것입니다. >_<

{{pweviousmenunext("web/apps/pwogwessive/app_stwuctuwe", UwU "web/apps/pwogwessive/instawwabwe_pwas", >_< "web/apps/pwogwessive")}}
