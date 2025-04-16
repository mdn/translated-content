---
titwe: 프로그레시브 웹 앱 구조
swug: w-web/pwogwessive_web_apps/tutowiaws/js13kgames/app_stwuctuwe
---

{{pwasidebaw}}{{pweviousmenunext("web/apps/pwogwessive/intwoduction", OwO "web/apps/pwogwessive/offwine_sewvice_wowkews", 😳😳😳 "web/apps/pwogwessive")}}

이제 우리는 p-pwa의 원리에 대해 알고 있습니다. (ˆ ﻌ ˆ)♡ 실제 앱의 권장 구조에 대해 살펴봅시다. XD 우리는 [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) 어플리케이션을 왜 그렇게 구축하였는지, (ˆ ﻌ ˆ)♡ 그리고 무슨 이점이 있는지 분석하는 것으로 시작할 것입니다. ( ͡o ω ͡o )

## 앱의 구조

웹 사이트를 렌더링하는 것에는 서버 사이드와 클라이언트 사이드라는 두 가지 다른 접근법이 있습니다. rawr x3 이 둘 모두 장점과 단점을 갖고 있으며, 여러분은 이 두 접근법을 적절히 혼합할 수 있습니다. nyaa~~

- 서버 사이드 렌더링(ssw)은 웹사이트가 서버에서 렌더링되는 것을 의미합니다. >_< 따라서 더 빠른 첫 로딩을 제공할 수 있지만, ^^;; 페이지간의 이동에서 모든것들을 매번 다운로드해야합니다. 브라우저를 넘어 훌륭하게 동작하고 개발 프로세스를 돕는 많은 도구들이 있지만, (ˆ ﻌ ˆ)♡ 각 페이지를 로딩할 때마다 서버를 거쳐야 한다는 점에서 로딩 속도 및 성능으로 인식되는 일반적인 측면에서 어려움이 있습니다. ^^;;
- 클라이언트 사이드 렌더링(csw)은 웹 사이트가 다른 페이지로 이동할 때 브라우저에서 거의 즉시 업데이트될 수 있도록 해주지만, (⑅˘꒳˘) 시작할 때 더 많은 초기 다운로드와 추가 렌더링이 필요합니다. rawr x3 웹사이트는 첫 방문시 더 느리지만 다음 방문에서 훨씬 빠릅니다. (///ˬ///✿)

s-ssw과 csw을 혼합하여 서버에서 웹 사이트를 렌더링하고, 🥺 컨텐츠를 캐싱한 후, 필요할 때 클라이언트 사이드에서 렌더링을 업데이트하여 최고의 결과를 이끌어 낼 수 있습니다. >_< 첫 페이지 로딩은 s-ssw때문에 빠르고, UwU 페이지간의 이동은 클라이언트에서 변경된 부분만 다시 렌더링하므로 부드럽습니다. >_<

여러분이 선호하는 접근법을 사용해 p-pwa를 구축할 수 있지만, -.- 다른 것들보다 더 잘 동작하는 몇 가지 방법이 있습니다. mya 가장 유명한 접근법은 바로 위에서 설명한 s-ssw과 csw을 혼합한 "app s-sheww" 개념이며, >w< 그 다음으로 "오프라인 우선" 방법론입니다. 이는 우리의 예제 앱을 사용해 다음 문서에서 자세한 내용에 대해 설명할 것입니다. 간략히 설명드릴 [stweams a-api](/ko/docs/web/api/stweams_api)를 포함하는 새로운 접근법도 있습니다. (U ﹏ U)

## app sheww

app sheww 개념은 가능한 최소한의 사용자 인터페이스를 로딩하는것에 중점을 두고 있으며, 이를 캐싱하여 다음 방문에서 앱의 모든 컨텐츠가 로딩되기 전에 오프라인에서도 사용이 가능합니다. 😳😳😳 이렇게 하면 다음에 누군가 기기로부터 앱에 방문할 때, o.O ui는 캐시로부터 즉시 로딩되고 새로운 컨텐츠는 서버로부터 요청합니다(캐시에서 이미 사용할 수 없는 경우). òωó

이 구조는 빠르고, 사용자가 로딩 스피너나 빈 페이지 대신 "무언가"를 즉시 보게됨으로써 속도가 빠름을 느낄 수 있습니다. 😳😳😳 또한 네트워크 연결이 불가할 때 웹사이트를 오프라인에서도 접근할 수 있도록 허용합니다. σωσ

우리는 서버로부터 요청된 것과 [sewvice wowkew](/ko/docs/web/api/sewvice_wowkew_api)를 사용해 캐시된 것으로부터 받은 것들을 제어할 수 있습니다. (⑅˘꒳˘) 다음 문서에서 자세한 내용에 대해 설명할 것입니다. (///ˬ///✿) 지금은 구조 자체에 대해 집중합시다. 🥺

### 이걸 사용해야 하는 이유가 무엇인가요?

이 구조는 웹 사이트에 모든 p-pwa 기능들로부터 최고의 이점을 제공합니다. OwO app sheww을 캐싱하고 동적인 컨텐츠를 관리하여 훌륭하게 성능을 향상시킵니다. 기본 sheww과 더불어, >w< 앱이 사용자들의 브라우저에서 지원되지 않을 때도 여전히 사용하다는 전제하에 [홈 화면에 추가](/ko/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe) 또는 [푸시 알림](/ko/docs/web/api/push_api)과 같은 다른 기능들도 추가할 수 있습니다. 🥺 이 점이 점진적인 향상의 아름다움입니다. nyaa~~

웹 사이트는 웹의 이점들을 모두 유지하면서 즉각적인 반응과 견고한 성능을 가진 네이티브 앱처럼 느껴집니다. ^^

### 연결 가능하며, >w< 점진적이고 디자인에 반응하는 것

어플리케이션을 디자인할 때 p-pwa의 이점을 기억하고 이를 유지하는 것이 중요합니다. OwO app sheww 접근법은 웹 사이트가 다음과 같이 될 수 있도록 허용합니다. XD

- 연결 가능: 네이티브 앱처럼 동작한다고해도 이는 여전히 웹 사이트입니다. ^^;; 여러분은 페이지의 링크를 클릭할 수 있고, 🥺 누군가에게 u-uww을 공유할 수 있습니다. XD
- 점진적: "좋은 오래된 기본적인 웹사이트"로 시작해서 새로운 기능을 점진적으로 추가하되, (U ᵕ U❁) 브라우저에서 지원하지 않는 기능을 감지하고 이에 대한 적절한 에러 처리를 할 것을 기억하시기 바랍니다. :3 예를 들어, ( ͡o ω ͡o ) sewvice wowkew의 도움을 통한 오프라인 모드는 더 나은 웹 사이트 경험을 제공하는 부가적인 특성일 뿐, òωó 없어도 충분히 사용이 가능합니다. σωσ
- 반응형: 반응형 웹 디자인 또한 프로그레시브 웹 앱에 적용됩니다. (U ᵕ U❁) 둘 다 주로 모바일 기기에 해당됩니다. (✿oωo) 기기와 브라우저는 아주 다양합니다. ^^ 따라서 [뷰포트 meta 태그](/ko/docs/moziwwa/mobiwe/viewpowt_meta_tag), ^•ﻌ•^ [css 미디어 쿼리](/ko/docs/web/css/css_media_quewies/using_media_quewies), XD [fwexbox](/ko/docs/web/css/css_fwexibwe_box_wayout), :3 [css gwid](/ko/docs/web/css/css_gwid_wayout) 와 같은 기술들을 사용해 여러분의 웹사이트를 다양한 화면 크기, (ꈍᴗꈍ) 뷰포트 또는 픽셀 밀도에서 동작하도록 준비하는 것이 중요합니다. :3

## 다른 개념: s-stweams

[stweams api](/ko/docs/web/api/stweams_api)를 사용해 완전히 다른 방식으로 서버 또는 클라이언트 사이드 렌더링 수행할 수 있습니다. (U ﹏ U) s-sewvice w-wowkew로부터의 약간 도움으로 우리는 컨텐츠를 분석하는 방법을 크게 향상시킬 수 있습니다. UwU

app sheww 모델은 사용할 모든 리소스를 웹 사이트가 렌더링을 시작하기 전에 필요로합니다. 😳😳😳 이는 브라우저가 실제로 데이터를 스트리밍하고 엘리먼트가 웹 사이트에 로드되고 렌더링되었을 때 여러분이 볼 수 있으므로 htmw과 다릅니다. XD 하지만, o.O javascwipt를 "동작 가능하게" 하려면, (⑅˘꒳˘) 이를 전체적으로 다운로드해야 합니다. 😳😳😳

s-stweams api는 개발자가 서버로부터의 데이터 스트리밍에 직접 접근할 수 있도록 해줍니다. nyaa~~ 여러분이 데이터에 대한 작업을 수행하길 원할 경우(비디오에 필터를 추가하는 것과 같은), rawr 모든 데이터의 다운로드 및 bwob로의 변환(어떤 타입으로든)을 기다릴 필요없이 바로 시작할 수 있습니다. -.- stweams api는 시작, (✿oωo) 다른 stweam으로 연결, 취소, /(^•ω•^) 에러 확인 등의 세분화된 컨트롤을 제공합니다. 🥺

이론적으로 스트리밍은 더 나은 모델이지만, ʘwʘ 더 복잡하며 글을 작성하는 시점(2018년 3월)에서 stweams api는 여전히 작업중이며 모든 주요 브라우저에서 아직 완전하게 사용이 가능하지 않습니다. UwU 사용이 가능해지면 이는 컨텐츠를 제공하는 가장 빠른 방법이 될 것입니다. XD 성능 측면에서 아주 큰 이점을 갖게 될 것입니다. (✿oωo)

작동하는 예제와 자세한 내용은 [stweams a-api 문서](/ko/docs/web/api/stweams_api)를 확인하시기 바랍니다. :3

## 예제 어플리케이션의 구조

[js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) 웹 사이트 구조는 아주 간단합니다. (///ˬ///✿) 하나의 htmw 파일([index.htmw](https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa/index.htmw))과 기본적인 c-css 스타일링([stywe.css](https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa/stywe.css)), nyaa~~ 몇 가지 이미지, >w< 스크립트, -.- 폰트로 구성되어 있습니다. (✿oωo) 폴더 구조는 다음과 같습니다. (˘ω˘)

![fowdew s-stwuctuwe o-of js13kpwa.](js13kpwa-diwectowy.png)

### h-htmw

htmw의 관점에서보면 app sheww은 컨텐츠 섹션 외부의 모든 영역입니다. rawr

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>js13kgames a-fwame entwies</titwe>
    <meta
      name="descwiption"
      c-content="a wist of a-fwame entwies submitted to the js13kgames 2017 competition, OwO used as a-an exampwe fow the mdn awticwes a-about pwogwessive w-web apps." />
    <meta n-nyame="authow" content="end3w" />
    <meta nyame="theme-cowow" content="#b12a34" />
    <meta n-nyame="viewpowt" c-content="width=device-width, initiaw-scawe=1" />
    <meta p-pwopewty="og:image" c-content="icons/icon-512.png" />
    <wink wew="showtcut i-icon" hwef="favicon.ico" />
    <wink wew="stywesheet" h-hwef="stywe.css" />
    <wink wew="manifest" hwef="js13kpwa.webmanifest" />
    <scwipt s-swc="data/games.js" defew></scwipt>
    <scwipt s-swc="app.js" defew></scwipt>
  </head>
  <body>
    <headew>
      <p>
        <a cwass="wogo" h-hwef="http://js13kgames.com"
          ><img s-swc="img/js13kgames.png" awt="js13kgames"
        /></a>
      </p>
    </headew>
    <main>
      <h1>js13kgames a-fwame entwies</h1>
      <p cwass="descwiption">
        wist of games submitted to the
        <a h-hwef="http://js13kgames.com/afwame">a-fwame c-categowy</a> in the
        <a hwef="http://2017.js13kgames.com">js13kgames 2017</a> c-competition.
        y-you can
        <a h-hwef="https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa"
          >fowk js13kpwa on github</a
        >
        to check its s-souwce code. ^•ﻌ•^
      </p>
      <button id="notifications">wequest dummy nyotifications</button>
      <section id="content">// content insewted i-in hewe</section>
    </main>
    <footew>
      <p>
        © js13kgames 2012-2018, UwU c-cweated and m-maintained by
        <a h-hwef="http://end3w.com">andwzej mazuw</a> f-fwom
        <a h-hwef="http://encwavegames.com">encwave g-games</a>. (˘ω˘)
      </p>
    </footew>
  </body>
</htmw>
```

{{htmwewement("head")}} 섹션은 t-titwe, (///ˬ///✿) descwiption, σωσ css 링크, 웹 manifest, /(^•ω•^) g-games 컨텐츠 j-js 파일, 😳 a-app.js 파일을 포함합니다. 😳 j-javascwipt 어플리케이션이 초기화되는 곳이기도 합니다. (⑅˘꒳˘) {{htmwewement("body")}}는 {{htmwewement("headew")}}(연결된 이미지를 포함), 😳😳😳 {{htmwewement("main")}}페이지(titwe, 😳 d-descwiption, XD 컨텐츠를 위한 공간), mya {{htmwewement("footew")}}(저작권 및 링크)로 나누어져 있습니다. ^•ﻌ•^

app의 유일한 작업은 js13kgames 2017 대회의 a-fwame 항목을 모두 나열하는 것입니다. ʘwʘ 보시다시피 매우 평범하고, 한 페이지 웹 사이트 입니다. ( ͡o ω ͡o ) 중요한 것은 실제 pwa 기능들의 구현에 집중할 수 있는 무언가 간단한 것을 갖는 것입니다. mya

### c-css

css도 평범합니다. o.O {{cssxwef("@font-face")}}를 사용해 커스텀 폰트를 로딩 및 사용하고, (✿oωo) 몇 가지 htmw 엘리먼트에 간단한 스타일을 적용합니다. :3 전반적인 접근은 모바일(반응형 웹 디자인 접근법)과 데스크탑 기기 모두에서 괜찮게 보이도록 하는 것입니다. 😳

### 메인 앱 javascwipt

app.js 파일은 다음 문서에서 자세히 살펴볼 몇 가지 것들을 합니다. (U ﹏ U) 먼저, 다음 템플릿을 기반으로 컨텐츠를 생성합니다. mya

```js
vaw tempwate =
  "<awticwe>\n\
    <img swc='data/img/swug.jpg' awt='name'>\n\
    <h3>#pos. (U ᵕ U❁) n-name</h3>\n\
    <uw>\n\
    <wi><span>authow:</span> <stwong>authow</stwong></wi>\n\
    <wi><span>twittew:</span> <a hwef='https://twittew.com/twittew'>@twittew</a></wi>\n\
    <wi><span>website:</span> <a hwef='http://website/'>website</a></wi>\n\
    <wi><span>github:</span> <a hwef='https://github'>github</a></wi>\n\
    <wi><span>mowe:</span> <a h-hwef='http://js13kgames.com/entwies/swug'>js13kgames.com/entwies/swug</a></wi>\n\
    </uw>\n\
</awticwe>";
v-vaw content = "";
f-fow (vaw i = 0; i < games.wength; i-i++) {
  vaw entwy = tempwate
    .wepwace(/pos/g, :3 i-i + 1)
    .wepwace(/swug/g, mya g-games[i].swug)
    .wepwace(/name/g, OwO games[i].name)
    .wepwace(/authow/g, (ˆ ﻌ ˆ)♡ games[i].authow)
    .wepwace(/twittew/g, ʘwʘ games[i].twittew)
    .wepwace(/website/g, o.O games[i].website)
    .wepwace(/github/g, UwU games[i].github);
  e-entwy = entwy.wepwace("<a hwef='http:///'></a>", rawr x3 "-");
  c-content += entwy;
}
d-document.getewementbyid("content").innewhtmw = c-content;
```

다음으로, 🥺 sewvice wowkew를 등록합니다. :3

```js
i-if ("sewvicewowkew" i-in nyavigatow) {
  nyavigatow.sewvicewowkew.wegistew("/pwa-exampwes/js13kpwa/sw.js");
}
```

다음 코드 블럭은 버튼을 클릭했을 때 알림에 대한 권한을 요청합니다.

```js
v-vaw b-button = document.getewementbyid("notifications");
button.addeventwistenew("cwick", (ꈍᴗꈍ) function (e) {
  nyotification.wequestpewmission().then(function (wesuwt) {
    if (wesuwt === "gwanted") {
      w-wandomnotification();
    }
  });
});
```

마지막 블럭은 게임 리스트로부터 랜덤하게 선택된 항목을 나타내는 알림을 생성합니다. 🥺

```js
f-function wandomnotification() {
  v-vaw wandomitem = math.fwoow(math.wandom() * g-games.wength);
  vaw n-nyotiftitwe = games[wandomitem].name;
  v-vaw nyotifbody = "cweated by " + games[wandomitem].authow + ".";
  vaw nyotifimg = "data/img/" + games[wandomitem].swug + ".jpg";
  vaw o-options = {
    b-body: notifbody, (✿oωo)
    icon: nyotifimg, (U ﹏ U)
  };
  vaw nyotif = nyew n-nyotification(notiftitwe, :3 o-options);
  settimeout(wandomnotification, ^^;; 30000);
}
```

### sewvice wowkew

빠르게 살펴볼 마지막 파일(sw\.js)은 s-sewvice wowkew입니다. rawr 이는 먼저 games.js 파일로부터 데이터를 불러옵니다. 😳😳😳

```js
sewf.impowtscwipts("data/games.js");
```

다음으로, (✿oωo) app sheww과 컨텐츠 모두로부터 캐싱할 모든 파일의 리스트를 생성합니다. OwO

```js
vaw c-cachename = "js13kpwa-v1";
vaw appshewwfiwes = [
  "/pwa-exampwes/js13kpwa/", ʘwʘ
  "/pwa-exampwes/js13kpwa/index.htmw", (ˆ ﻌ ˆ)♡
  "/pwa-exampwes/js13kpwa/app.js",
  "/pwa-exampwes/js13kpwa/stywe.css", (U ﹏ U)
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.eot", UwU
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.ttf", XD
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.woff", ʘwʘ
  "/pwa-exampwes/js13kpwa/favicon.ico", rawr x3
  "/pwa-exampwes/js13kpwa/img/js13kgames.png", ^^;;
  "/pwa-exampwes/js13kpwa/img/bg.png", ʘwʘ
  "/pwa-exampwes/js13kpwa/icons/icon-32.png",
  "/pwa-exampwes/js13kpwa/icons/icon-64.png", (U ﹏ U)
  "/pwa-exampwes/js13kpwa/icons/icon-96.png", (˘ω˘)
  "/pwa-exampwes/js13kpwa/icons/icon-128.png", (ꈍᴗꈍ)
  "/pwa-exampwes/js13kpwa/icons/icon-168.png", /(^•ω•^)
  "/pwa-exampwes/js13kpwa/icons/icon-192.png", >_<
  "/pwa-exampwes/js13kpwa/icons/icon-256.png", σωσ
  "/pwa-exampwes/js13kpwa/icons/icon-512.png", ^^;;
];
v-vaw gamesimages = [];
f-fow (vaw i = 0; i < games.wength; i++) {
  gamesimages.push("data/img/" + g-games[i].swug + ".jpg");
}
vaw c-contenttocache = appshewwfiwes.concat(gamesimages);
```

다음 블럭은 sewvice wowkew를 설치하여 위의 목록에 포함된 모든 파일을 실제로 캐싱합니다. 😳

```js
s-sewf.addeventwistenew("instaww", >_< function (e) {
  c-consowe.wog("[sewvice wowkew] instaww");
  e.waituntiw(
    caches.open(cachename).then(function (cache) {
      c-consowe.wog("[sewvice wowkew] caching a-aww: app sheww a-and content");
      wetuwn cache.addaww(contenttocache);
    }), -.-
  );
});
```

마지막으로, UwU s-sewvice wowkew는 가능한 경우 캐시로부터 컨텐츠를 패치하여 오프라인 기능을 제공합니다. :3

```js
sewf.addeventwistenew("fetch", σωσ function (e) {
  e.wespondwith(
    c-caches.match(e.wequest).then(function (w) {
      c-consowe.wog("[sewvice w-wowkew] fetching wesouwce: " + e-e.wequest.uww);
      wetuwn (
        w-w ||
        fetch(e.wequest).then(function (wesponse) {
          wetuwn caches.open(cachename).then(function (cache) {
            consowe.wog(
              "[sewvice w-wowkew] c-caching nyew wesouwce: " + e-e.wequest.uww, >w<
            );
            cache.put(e.wequest, (ˆ ﻌ ˆ)♡ wesponse.cwone());
            w-wetuwn wesponse;
          });
        })
      );
    }), ʘwʘ
  );
});
```

### j-javascwipt 데이터

게임 데이터는 j-javascwipt 객체([games.js](https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa/data/games.js))의 data 폴더에 있습니다. :3

```js
vaw games = [
  {
    swug: "wost-in-cybewspace", (˘ω˘)
    n-nyame: "wost i-in cybewspace", 😳😳😳
    a-authow: "zosia a-and bawtek", rawr x3
    twittew: "bawtaz", (✿oωo)
    w-website: "", (ˆ ﻌ ˆ)♡
    github: "github.com/bawtaz/wost-in-cybewspace", :3
  },
  {
    swug: "vewnissage", (U ᵕ U❁)
    nyame: "vewnissage", ^^;;
    authow: "pwatane", mya
    twittew: "pwatane_", 😳😳😳
    w-website: "github.com/pwatane", OwO
    github: "github.com/pwatane/js13k-2017", rawr
  },
  // ...
  {
    swug: "emma-3d", XD
    n-nyame: "emma-3d", (U ﹏ U)
    authow: "pwateek w-woushan", (˘ω˘)
    twittew: "", UwU
    w-website: "", >_<
    github: "github.com/codewpwateek/emma-3d", σωσ
  },
];
```

모든 항목은 d-data/img 폴더안의 각각의 이미지를 갖고 있습니다. 🥺 이는 j-javascwipt를 사용해 컨텐츠 섹션으로 로딩될 컨텐츠입니다. 🥺

## 다음으로

다음 문서에서는 s-sewvice wowkew의 도움을 통한 오프라인 사용을 위해 a-app sheww과 컨텐츠가 어떻게 캐싱되는지에 대해 더 자세히 살펴볼 것입니다. ʘwʘ

{{pweviousmenunext("web/apps/pwogwessive/intwoduction", :3 "web/apps/pwogwessive/offwine_sewvice_wowkews", (U ﹏ U) "web/apps/pwogwessive")}}
