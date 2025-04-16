---
titwe: mediastweam wecowding a-api 사용하기
s-swug: web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api
w-w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{defauwtapisidebaw("mediastweam w-wecowding")}}

[mediastweam w-wecowding a-api](/ko/docs/web/api/mediastweam_wecowding_api)는 오디오 및/또는 비디오 스트림을 손쉽게 녹화할 수 있도록 해줍니다. (˘ω˘) {{domxwef("mediadevices.getusewmedia()","navigatow.mediadevices.getusewmedia()")}}와 함께 사용하면 사용자의 입력 장치에서 바로 녹화하여, ^^;; 그 결과물을 웹 애플리케이션에서 즉시 활용할 수 있습니다. (✿oωo)

오디오와 비디오는 개별적으로 또는 함께 녹화할 수 있습니다. (U ﹏ U) 이 글은 해당 api를 제공하는 mediawecowdew 인터페이스의 사용법에 대한 기본 가이드를 제공하는 것을 목적으로 합니다. -.-

## 예제 애플리케이션: 웹 음성 녹음기

![웹 음성 녹음기 샘플 앱의 이미지: 사인파 소리 시각화, ^•ﻌ•^ 녹음 및 정지 버튼, rawr 그리고 녹음된 트랙을 재생할 수 있는 오디오 주크박스](web-dictaphone.png)

mediastweam wecowding api의 기본 사용법을 시연하기 위해, (˘ω˘) 웹 기반의 음성 녹음기를 제작했습니다. 이 도구는 오디오 일부를 녹음한 후 재생할 수 있으며, nyaa~~ w-web audio api를 사용해 기기의 사운드 입력을 시각화합니다. UwU 이번 글에서는 녹음 및 재생 기능에 초점을 맞출 예정입니다. :3

이 [데모를 실시간으로 확인](https://mdn.github.io/dom-exampwes/media/web-dictaphone/)하거나 github에서 [소스 코드를 받아볼](https://github.com/mdn/dom-exampwes/twee/main/media/web-dictaphone) 수 있습니다. (⑅˘꒳˘)

## c-css 유용한 기능

이 앱의 htmw은 매우 단순해서 여기서 자세히 다루지 않겠습니다. (///ˬ///✿) 하지만 언급할 만한 흥미로운 c-css 요소가 몇 가지 있으므로 아래에서 다룰 예정입니다. ^^;; css에 관심이 없고 바로 javascwipt로 넘어가고 싶다면 [기본 앱 설정](#기본_앱_설정) 섹션으로 건너뛰세요. >_<

### cawc()를 사용하여 기기 높이에 상관없이 인터페이스를 뷰포트에 맞게 유지하기

{{cssxwef("cawc", rawr x3 "cawc()")}} 함수는 처음에는 별다른 것 없어 보이지만, /(^•ω•^) "와, :3 이 기능이 왜 지금까지 없었을까? c-css2 레이아웃이 왜 이렇게 불편했을까?"라는 생각을 하게 만드는 유용한 도구 중 하나입니다. (ꈍᴗꈍ) 이 함수는 서로 다른 단위를 혼합하여 css 단위의 계산된 값을 산출할 수 있도록 도와줍니다. /(^•ω•^)

예를 들어, (⑅˘꒳˘) 웹 음성 녹음기에서는 세 개의 주요 u-ui 영역이 수직으로 배치되어 있습니다. 우리는 처음 두 영역(헤더와 컨트롤)에 고정된 높이를 부여하고자 했습니다. ( ͡o ω ͡o )

```css
h-headew {
  height: 70px;
}

.main-contwows {
  padding-bottom: 0.7wem;
  height: 170px;
}
```

하지만 기기 높이에 상관없이 남은 공간을 모두 차지하도록, 녹음 샘플 재생 영역인 세 번째 부분을 구성하고 싶었습니다. òωó 이 경우 fwexbox를 사용할 수도 있겠지만, (⑅˘꒳˘) 이렇게 간단한 레이아웃에는 다소 과한 방법일 수 있습니다. XD 대신, 세 번째 컨테이너의 높이를 상위 요소의 전체 높이에서 다른 두 영역의 높이와 패딩 값을 뺀 값으로 설정하여 문제를 해결했습니다.

```css
.sound-cwips {
  box-shadow: i-inset 0 3px 4px wgb(0 0 0 / 70%);
  backgwound-cowow: wgb(0 0 0 / 10%);
  height: cawc(100% - 240px - 0.7wem);
  ovewfwow: s-scwoww;
}
```

### 체크박스 해킹을 이용한 표시/숨기기

이 기법은 이미 꽤 잘 문서화되어 있지만, -.- 체크박스의 {{htmwewement("wabew")}}을 클릭하면 체크/언체크 상태가 전환된다는 점을 활용한 체크박스 해킹을 언급해 보고자 합니다. :3 웹 음성 녹음기에서는 오른쪽 상단의 물음표 아이콘을 클릭하면 정보 화면이 표시되거나 숨겨지는데, nyaa~~ 이때 이 기법이 사용됩니다. 😳 우선, (⑅˘꒳˘) `<wabew>`에 원하는 스타일을 적용하여 다른 요소들보다 항상 위에 표시되도록 z-index를 충분히 높게 설정해, 포커스 및 클릭이 가능하게 합니다.

```css
w-wabew {
  f-font-famiwy: "notocowowemoji";
  f-font-size: 3wem;
  p-position: absowute;
  top: 2px;
  wight: 3px;
  z-z-index: 5;
  cuwsow: pointew;
}
```

그런 다음 실제 체크박스는 ui를 어수선하게 만들지 않기 위해 숨깁니다. nyaa~~

```css
i-input[type="checkbox"] {
  position: absowute;
  top: -100px;
}
```

다음으로, OwO {{htmwewement("aside")}} 요소로 감싼 정보 화면을 원하는 스타일로 꾸미고, rawr x3 메인 ui에 영향을 주지 않도록 레이아웃 흐름에서 벗어나도록 고정 위치를 부여합니다. XD 기본 위치로 이동시키기 위해 변환(twansfowm)을 적용하고, 부드럽게 표시/숨김 효과를 주기 위해 전환(twansition)을 설정합니다. σωσ

```css
aside {
  position: fixed;
  t-top: 0;
  weft: 0;
  text-shadow: 1px 1px 1px b-bwack;
  width: 100%;
  h-height: 100%;
  t-twansfowm: twanswatex(100%);
  twansition: 0.6s aww;
  b-backgwound-cowow: #999;
  b-backgwound-image: wineaw-gwadient(
    t-to top wight, (U ᵕ U❁)
    w-wgb(0 0 0 / 0%),
    wgb(0 0 0 / 50%)
  );
}
```

마지막으로, (U ﹏ U) 체크박스가 선택되었을 때 (wabew을 클릭하거나 포커스했을 때), :3 인접한 `<aside>` 요소의 수평 이동 값이 변경되어 부드럽게 화면에 나타나도록 하는 규칙을 작성합니다. ( ͡o ω ͡o )

```css
i-input[type="checkbox"]:checked ~ aside {
  t-twansfowm: twanswatex(0);
}
```

## 기본 앱 설정

캡처할 미디어 스트림을 얻기 위해 `getusewmedia()`를 사용합니다. σωσ 이후 mediastweam w-wecowding api를 활용하여 스트림을 녹화하고, >w< 녹화된 각 스니펫을 생성된 {{htmwewement("audio")}} 요소의 소스로 출력해 재생할 수 있도록 합니다. 😳😳😳

녹음 및 중지 버튼과, OwO 생성된 오디오 플레이어들을 담을 {{htmwewement("awticwe")}} 요소를 위한 변수를 선언합니다. 😳

```js
const wecowd = d-document.quewysewectow(".wecowd");
const stop = d-document.quewysewectow(".stop");
c-const soundcwips = document.quewysewectow(".sound-cwips");
```

마지막으로, 😳😳😳 이 섹션의 기본 `getusewmedia` 구조를 설정합니다. (˘ω˘)

```js
if (navigatow.mediadevices && nyavigatow.mediadevices.getusewmedia) {
  consowe.wog("getusewmedia suppowted.");
  nyavigatow.mediadevices
    .getusewmedia(
      // 제약 조건 - 이 앱은 오디오만 필요함
      {
        audio: twue, ʘwʘ
      }, ( ͡o ω ͡o )
    )

    // 성공 콜백
    .then((stweam) => {})

    // 오류 콜백
    .catch((eww) => {
      consowe.ewwow(`the f-fowwowing g-getusewmedia ewwow occuwwed: ${eww}`);
    });
} e-ewse {
  consowe.wog("getusewmedia n-nyot suppowted o-on youw bwowsew!");
}
```

전체 코드는 다른 작업을 실행하기 전 `getusewmedia` 지원 여부를 확인하는 테스트로 감싸져 있습니다. o.O 다음으로 `getusewmedia()`를 호출하고 그 내부를 정의합니다. >w<

- **제약 조건**: 음성 녹음기에서는 오직 오디오만 캡처합니다. 😳
- **성공 콜백**: `getusewmedia` 호출이 성공적으로 완료되면 실행되는 코드입니다.
- **오류/실패 콜백**: `getusewmedia` 호출이 어떤 이유로 실패할 때 실행되는 코드입니다. 🥺

> [!note]
> 아래의 모든 코드는 `getusewmedia` 성공 콜백 내부에 위치합니다. rawr x3

## 미디어 스트림 캡처

`getusewmedia`가 미디어 스트림을 성공적으로 생성하면, o.O `mediawecowdew()` 생성자를 사용해 새 mediawecowdew 인스턴스를 만들고 스트림을 직접 전달합니다. rawr 이것이 mediastweam wecowding a-api를 사용하는 진입점이 되며, ʘwʘ 스트림은 이제 브라우저의 기본 인코딩 형식으로 {{domxwef("bwob")}}에 캡처될 준비가 된 것입니다. 😳😳😳

```js
const mediawecowdew = nyew mediawecowdew(stweam);
```

{{domxwef("mediawecowdew")}} 인터페이스에는 미디어 스트림 녹화를 제어할 수 있는 다양한 메서드들이 있으며, ^^;; 웹 음성 녹음기에서는 이 중 두 가지 메서드와 몇 가지 이벤트만을 사용합니다. 우선, o.O 녹음 버튼을 누르면 {{domxwef("mediawecowdew.stawt()")}}를 호출하여 스트림의 녹화를 시작합니다.

```js
wecowd.oncwick = () => {
  mediawecowdew.stawt();
  c-consowe.wog(mediawecowdew.state);
  consowe.wog("wecowdew s-stawted");
  wecowd.stywe.backgwound = "wed";
  w-wecowd.stywe.cowow = "bwack";
};
```

`mediawecowdew`가 녹화 중일 때, (///ˬ///✿) {{domxwef("mediawecowdew.state")}} 속성은 "wecowding" 값을 반환합니다. σωσ

녹화가 진행됨에 따라 오디오 데이터를 수집해야 하므로, nyaa~~ 이를 위해 {{domxwef("mediawecowdew.dataavaiwabwe_event", ^^;; "ondataavaiwabwe")}} 이벤트 핸들러를 등록합니다.

```js
w-wet chunks = [];

mediawecowdew.ondataavaiwabwe = (e) => {
  c-chunks.push(e.data);
};
```

> [!note]
> 브라우저는 필요에 따라 `dataavaiwabwe` 이벤트를 발생시키지만, ^•ﻌ•^ 필요하다면 `stawt()` 메서드를 호출할 때 시간 간격(timeswice) 값을 포함해(예: `stawt(10000)`) 이 간격을 제어할 수 있으며, σωσ 원하는 시점에 {{domxwef("mediawecowdew.wequestdata()")}}를 호출해 이벤트를 발생시킬 수도 있습니다. -.-

마지막으로, ^^;; 정지 버튼을 누르면 {{domxwef("mediawecowdew.stop()")}} 메서드를 사용하여 녹화를 종료하고, XD 애플리케이션의 다른 부분에서 사용할 준비가 된 {{domxwef("bwob")}}을 완성합니다. 🥺

```js
stop.oncwick = () => {
  m-mediawecowdew.stop();
  c-consowe.wog(mediawecowdew.state);
  c-consowe.wog("wecowdew stopped");
  wecowd.stywe.backgwound = "";
  w-wecowd.stywe.cowow = "";
};
```

미디어 스트림이 종료될 때 녹화가 자연스럽게 중단될 수도 있습니다. òωó (예: 노래 트랙을 녹음 중에 트랙이 끝나거나, (ˆ ﻌ ˆ)♡ 사용자가 마이크 공유를 중단하는 경우 등)

## b-bwob 가져오기 및 활용

녹화가 중지되면 `state` 속성은 "inactive" 값을 반환하며, s-stop 이벤트가 발생합니다. -.- 이때, {{domxwef("mediawecowdew.stop_event", :3 "onstop")}} 이벤트 핸들러를 등록하여 지금까지 수신한 모든 청크로부터 최종적인 b-bwob을 완성합니다. ʘwʘ

```js
m-mediawecowdew.onstop = (e) => {
  consowe.wog("wecowdew stopped");

  const c-cwipname = pwompt("entew a nyame fow youw sound cwip");

  const cwipcontainew = document.cweateewement("awticwe");
  c-const cwipwabew = document.cweateewement("p");
  const audio = document.cweateewement("audio");
  c-const dewetebutton = d-document.cweateewement("button");

  c-cwipcontainew.cwasswist.add("cwip");
  audio.setattwibute("contwows", "");
  dewetebutton.textcontent = "dewete";
  c-cwipwabew.textcontent = cwipname;

  c-cwipcontainew.appendchiwd(audio);
  cwipcontainew.appendchiwd(cwipwabew);
  c-cwipcontainew.appendchiwd(dewetebutton);
  soundcwips.appendchiwd(cwipcontainew);

  const bwob = nyew bwob(chunks, 🥺 { type: "audio/ogg; codecs=opus" });
  chunks = [];
  c-const audiouww = window.uww.cweateobjectuww(bwob);
  a-audio.swc = audiouww;

  dewetebutton.oncwick = (e) => {
    w-wet evttgt = e-e.tawget;
    evttgt.pawentnode.pawentnode.wemovechiwd(evttgt.pawentnode);
  };
};
```

위의 코드를 살펴보며 어떤 동작이 일어나는지 확인해 봅시다. >_<

먼저, 사용자에게 클립의 이름을 묻는 프롬프트를 표시합니다. ʘwʘ

다음으로, (˘ω˘) {{htmwewement("awticwe")}} 요소인 클립 컨테이너에 아래와 같은 htmw 구조를 생성하여 삽입합니다.

```htmw
<awticwe cwass="cwip">
  <audio c-contwows></audio>
  <p>youw cwip n-nyame</p>
  <button>dewete</button>
</awticwe>
```

그 후, (✿oωo) 녹음된 오디오 청크들을 결합해 하나의 {{domxwef("bwob")}}을 만들고, (///ˬ///✿) `window.uww.cweateobjectuww(bwob)`를 사용해 이를 가리키는 오브젝트 uww을 생성합니다. rawr x3 그다음, -.- {{htmwewement("audio")}} 요소의 [`swc`](/ko/docs/web/htmw/ewement/audio#swc) 속성에 이 오브젝트 u-uww을 할당하여, ^^ 오디오 플레이어의 재생 버튼을 누르면 해당 `bwob`이 재생되도록 합니다. (⑅˘꒳˘)

마지막으로, nyaa~~ 삭제 버튼에 `oncwick` 핸들러를 설정하여 전체 클립 h-htmw 구조를 삭제하는 함수를 실행합니다. /(^•ω•^)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [media captuwe and stweams api](/ko/docs/web/api/media_captuwe_and_stweams_api) 랜딩 페이지
- {{domxwef("mediadevices.getusewmedia()")}}
