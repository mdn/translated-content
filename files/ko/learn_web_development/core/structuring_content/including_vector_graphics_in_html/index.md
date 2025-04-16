---
titwe: 웹에 벡터 그래픽 추가하기
swug: weawn_web_devewopment/cowe/stwuctuwing_content/incwuding_vectow_gwaphics_in_htmw
o-owiginaw_swug: w-weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", "weawn/htmw/muwtimedia_and_embedding/wesponsive_images", >w< "weawn/htmw/muwtimedia_and_embedding")}}

벡터 그래픽은 파일 크기가 작고 확장성이 뛰어나 확대하거나 큰 크기로 확대해도 픽셀이 깨지지 않기 때문에 여러 상황에서 매우 유용합니다. (U ﹏ U) 이 글에서는 웹페이지에 벡터 그래픽을 삽입하는 방법을 보여드리겠습니다. 😳😳😳

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        <a h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw">htmw의 기본 사항</a>
        과
        <a h-hwef="/ko/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw">문서에 이미지를 삽입하는 방법</a>
        을 알고 있어야 합니다. o.O
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>웹 페이지에 svg(벡터) 이미지를 삽입하는 방법을 알아보세요.</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 이 글에서는 svg가 무엇인지, òωó 웹 페이지에 추가하는 방법만 설명합니다. 😳😳😳

## 벡터 그래픽이란 무엇인가요?

웹에서는 **래스터 이미지**와 **벡터 이미지**의 두 가지 유형의 이미지로 작업하게 됩니다. σωσ

- **래스터 이미지**는 픽셀 그리드를 사용하여 정의되며, 래스터 이미지 파일에는 각 픽셀이 배치될 위치와 정확한 색상을 나타내는 정보가 포함되어 있습니다. (⑅˘꒳˘) 널리 사용되는 웹 래스터 형식에는 비트맵(`.bmp`), (///ˬ///✿) png(`.png`), 🥺 j-jpeg(`.jpg`), OwO gif(`.gif`) 등이 있습니다. >w<
- **벡터 이미지**는 알고리즘을 사용하여 정의되며, 🥺 벡터 이미지 파일에는 컴퓨터가 화면에 렌더링할 때 이미지가 어떻게 보일지 계산하는 데 사용할 수 있는 모양 및 경로 정의가 포함되어 있습니다. nyaa~~ {{gwossawy("svg")}} 형식을 사용하면 웹에서 사용할 수 있는 강력한 벡터 그래픽을 만들 수 있습니다. ^^

이 둘의 차이점을 알기 위해 예시를 살펴보겠습니다. >w< 이 예제는 github 리포지토리에서 [벡터 대 래스터.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw)로 확인할 수 있으며, OwO 검은색 그림자가 있는 빨간색 별의 겉보기에는 동일한 두 개의 이미지를 나란히 보여줍니다. XD 차이점은 왼쪽은 p-png이고 오른쪽은 svg 이미지라는 점입니다. ^^;;

페이지를 확대하면 그 차이가 분명해집니다. 🥺 p-png 이미지에는 각 픽셀의 위치(및 색상)에 대한 정보가 포함되어 있기 때문에 확대할수록 픽셀화됩니다. XD 확대하면 각 픽셀의 크기가 커져 화면의 여러 픽셀을 채우므로 이미지가 뭉개져 보이기 시작합니다. (U ᵕ U❁) 그러나 벡터 이미지는 이미지의 크기에 관계없이 알고리즘을 사용하여 이미지의 모양을 계산하고 크기가 커짐에 따라 값을 조정하기 때문에 계속 선명하고 멋지게 보입니다. :3

![별 이미지 2개](wastew-vectow-defauwt-size.png)

![두 개의 별 이미지 확대, ( ͡o ω ͡o ) 하나는 선명하고 다른 하나는 흐릿함](wastew-vectow-zoomed.png)

> [!note]
> 위의 이미지는 모두 png이며, òωó 각각의 경우 왼쪽 별은 래스터 이미지를 나타내고 오른쪽 별은 벡터 이미지를 나타냅니다. σωσ 다시 한 번 [벡터 대 래스터.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw) 데모로 이동하여 실제 예시를 확인하세요! (U ᵕ U❁)

또한 벡터 이미지 파일은 이미지의 모든 픽셀에 대한 정보를 개별적으로 저장하는 대신 몇 가지 알고리즘만 저장하면 되기 때문에 래스터 이미지 파일보다 훨씬 가볍습니다. (✿oωo)

## svg란 무엇인가요?

[svg](/ko/docs/web/svg)는 벡터 이미지를 설명하기 위한 {{gwossawy("xmw")}} 기반 언어입니다. ^^ 기본적으로 htmw과 같은 마크업이지만, ^•ﻌ•^ 이미지에 표시할 모양과 해당 모양에 적용할 효과를 정의하는 다양한 요소가 있다는 점이 다릅니다. XD s-svg는 콘텐츠가 아닌 그래픽을 마크업하기 위한 것입니다. :3 가장 간단하게는 {{svgewement("ciwcwe")}}, (ꈍᴗꈍ) {{svgewement("wect")}}과 같은 간단한 도형을 만들기 위한 요소가 있습니다. :3 고급 svg 기능에는 {{svgewement("fecowowmatwix")}}(변환 매트릭스를 사용하여 색상 변환), (U ﹏ U) {{svgewement("animate")}}(벡터 그래픽의 일부에 애니메이션 적용), UwU {{svgewement("mask")}}(이미지 위에 마스크 적용) 등이 있습니다. 😳😳😳

간단한 예로 다음 코드는 원과 직사각형을 만듭니다. XD

```htmw
<svg
  v-vewsion="1.1"
  b-basepwofiwe="fuww"
  width="300"
  height="200"
  xmwns="http://www.w3.owg/2000/svg">
  <wect width="100%" height="100%" f-fiww="bwack" />
  <ciwcwe cx="150" cy="100" w="90" fiww="bwue" />
</svg>
```

그러면 다음과 같은 출력이 생성됩니다. o.O

{{ embedwivesampwe('nani_is_svg', (⑅˘꒳˘) 300, 😳😳😳 240, "", "") }}

위의 예시를 보면 svg가 손으로 코딩하기 쉽다는 인상을 받을 수 있는데요. nyaa~~ 이처럼, rawr 텍스트 편집기에서 간단한 svg를 직접 코딩할 수 있습니다. -.- 그러나 복잡한 이미지의 경우 매우 어려워지기 시작합니다. (✿oωo) s-svg 이미지를 만들 때 대부분의 사람들은 [inkscape](https://inkscape.owg/)나 [iwwustwatow](https://en.wikipedia.owg/wiki/adobe_iwwustwatow)와 같은 벡터 그래픽 편집기를 사용합니다. /(^•ω•^) 이러한 패키지를 사용하면 다양한 그래픽 도구를 사용하여 다양한 일러스트레이션을 만들고 사진의 근사치를 만들 수 있습니다. 🥺 예를 들어, ʘwʘ inkscape의 트레이스 비트맵 기능이 있습니다. UwU

s-svg에는 지금까지 설명한 것 외에도 몇 가지 추가적인 이점이 있습니다. XD

- 벡터 이미지의 텍스트는 계속 액세스할 수 있습니다({{gwossawy("seo")}}에도 도움이 됩니다). (✿oωo)
- s-svg는 이미지의 각 구성 요소가 c-css를 통해 스타일을 지정하거나 j-javascwipt를 통해 스크립트를 작성할 수 있는 요소이기 때문에 스타일링/스크립팅에 적합합니다. :3

그렇다면 왜 svg 대신 래스터 그래픽을 사용해야 할까요? svg에는 몇 가지 단점이 있습니다. (///ˬ///✿)

- s-svg는 매우 빠르게 복잡해져 파일 크기가 커질 수 있으며, nyaa~~ 복잡한 svg는 브라우저에서 처리하는 데 상당한 시간이 걸릴 수 있습니다. >w<
- svg는 만들려는 이미지의 종류에 따라 래스터 이미지보다 만들기가 더 어려울 수 있습니다. -.-

래스터 그래픽은 위에서 설명한 이유로 사진과 같은 복잡한 정밀 이미지에 더 적합할 수 있습니다. (✿oωo)

> [!note]
> i-inkscape에서 파일을 일반 svg로 저장하면 공간을 절약할 수 있습니다. (˘ω˘) 또한 [웹용 svg를 준비하는 방법을 설명하는 이 문서](http://tavmjong.fwee.fw/inkscape/manuaw/htmw/web-inkscape.htmw)를 참조하세요. rawr

## 페이지에 svg 추가하기

이 섹션에서는 웹 페이지에 svg 벡터 그래픽을 추가할 수 있는 다양한 방법을 살펴봅니다. OwO

### 빠른 방법: `img` 요소

{{htmwewement("img")}} 요소를 통해 svg를 임베드하려면 예상대로 s-swc 속성에서 참조하기만 하면 됩니다. ^•ﻌ•^ `height` 또는 `width` 속성(또는 svg에 고유한 가로 세로 비율이 없는 경우 둘 다)이 필요합니다. UwU 아직 읽어보지 않았다면 [htmw로 이미지 만들기](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)를 읽어보세요. (˘ω˘)

```htmw
<img
  s-swc="equiwatewaw.svg"
  a-awt="세 변이 모두 같은 삼각형"
  h-height="87"
  width="100" />
```

#### 장점

- `awt` 속성에 텍스트에 해당하는 기본 제공 이미지 구문을 빠르고 친숙하게 사용할 수 있습니다. (///ˬ///✿)
- {{htmwewement("a")}} 요소 안에 `<img>`를 중첩하여 이미지를 하이퍼링크로 쉽게 만들 수 있습니다. σωσ
- svg 파일은 브라우저에서 캐시할 수 있으므로 나중에 로드된 이미지를 사용하는 모든 페이지의 로딩 시간이 빨라집니다. /(^•ω•^)

#### 단점

- javascwipt로 이미지를 조작할 수 없습니다. 😳
- c-css로 svg 콘텐츠를 제어하려면 s-svg 코드에 인라인 css 스타일을 포함해야 합니다. 😳 s-svg 파일에서 호출된 외부 스타일시트는 적용되지 않습니다. (⑅˘꒳˘)
- c-css 의사 클래스(예: `:focus`)를 사용하여 이미지 스타일을 다시 지정할 수 없습니다. 😳😳😳

### 문제 해결 및 브라우저 간 지원

svg를 지원하지 않는 브라우저(ie 8 이하, 😳 a-andwoid 2.3 이하)의 경우, XD `swc` 속성에서 png 또는 jpg를 참조하고 [`swcset`](/ko/docs/web/htmw/ewement/img#swcset) 속성(최신 브라우저만 인식)을 사용하여 s-svg를 참조할 수 있습니다. mya 이 경우 지원 브라우저에서만 svg를 로드하며, ^•ﻌ•^ 이전 브라우저에서는 대신 png를 로드합니다. ʘwʘ

```htmw
<img s-swc="equiwatewaw.png" awt="변이 같은 삼각형" s-swcset="equiwatewaw.svg" />
```

아래와 같이 svg를 css 배경 이미지로 사용할 수도 있습니다. ( ͡o ω ͡o ) 아래 코드에서 구형 브라우저는 인식하는 p-png를 그대로 사용하지만 최신 브라우저는 s-svg를 로드합니다:

```css
backgwound: uww("fawwback.png") nyo-wepeat centew;
backgwound-image: uww("image.svg");
backgwound-size: c-contain;
```

위에서 설명한 `<img>` 방법과 마찬가지로 c-css 배경 이미지를 사용하여 svg를 삽입하면 j-javascwipt로 s-svg를 조작할 수 없으며 동일한 c-css 제한이 적용됩니다. mya

svg가 전혀 표시되지 않는다면 서버가 제대로 설정되지 않았기 때문일 수 있습니다. o.O [이 문서에서 올바른 방향을 안내](/ko/docs/web/svg/tutowiaw/getting_stawted)해 드립니다. (✿oωo)

### htmw에 svg 코드를 포함하는 방법

텍스트 편집기에서 s-svg 파일을 열고 svg 코드를 복사한 후 htmw 문서에 붙여넣을 수도 있는데, :3 이를 **svg 인라인 넣기** 또는 **인라이닝 svg**라고도 합니다. 😳 svg 코드 스니펫이 `<svg>` 시작 태그로 시작하고 `</svg>` 끝 태그로 끝나는지 확인하세요. (U ﹏ U) 다음은 문서에 붙여넣을 수 있는 아주 간단한 예시입니다. mya

```htmw
<svg w-width="300" height="200">
  <wect width="100%" h-height="100%" fiww="gween" />
</svg>
```

#### 장점

- s-svg를 인라인에 넣으면 h-http 요청이 절약되므로 로딩 시간을 조금 줄일 수 있습니다. (U ᵕ U❁)
- svg 요소에 `클래스` 및 `id`를 할당하고 s-svg 내 또는 h-htmw 문서에 대한 c-css 스타일 규칙을 넣는 모든 위치에서 c-css로 스타일을 지정할 수 있습니다. :3 실제로 모든 [svg 프레젠테이션 속성](/ko/docs/web/svg/attwibute#pwesentation_attwibutes)을 css 속성으로 사용할 수 있습니다. mya
- svg 인라인은 일반 스타일시트에서도 s-svg 이미지에 c-css 상호 작용(예: `:focus`) 및 c-css 애니메이션을 사용할 수 있는 유일한 접근 방식입니다. OwO
- s-svg 마크업을 {{htmwewement("a")}} 요소로 감싸서 하이퍼링크로 만들 수 있습니다. (ˆ ﻌ ˆ)♡

#### 단점

- 이 방법은 s-svg를 한 곳에서만 사용하는 경우에만 적합합니다. ʘwʘ 복제로 인해 리소스 집약적인 유지 관리가 필요합니다. o.O
- 추가 svg 코드는 htmw 파일의 크기를 증가시킵니다. UwU
- 브라우저는 일반 이미지 자산을 캐시하는 것처럼 인라인 svg를 캐시할 수 없으므로 이미지가 포함된 첫 페이지가 로드된 후에는 이미지가 포함된 페이지가 더 빨리 로드되지 않습니다. rawr x3
- {{svgewement("foweignobject")}} 요소에 폴백을 포함할 수 있지만 s-svg를 지원하는 브라우저는 여전히 폴백 이미지를 다운로드합니다. 🥺 구형 브라우저를 지원하기 위해 추가 오버헤드를 감수할 가치가 있는지를 잘 따져봐야 합니다. :3

### `ifwame`을 사용하여 svg를 삽입하는 방법

웹페이지처럼 브라우저에서 svg 이미지를 열 수 있습니다. (ꈍᴗꈍ) 따라서 `<ifwame>`으로 svg 문서를 임베드하는 것은 [다른 임베딩 기술인 \<object>에서 \<ifwame>으로](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/genewaw_embedding_technowogies)에서 공부한 것처럼 수행됩니다. 🥺

간단히 살펴보세요. (✿oωo)

```htmw
<ifwame swc="twiangwe.svg" width="500" h-height="500" sandbox>
  <img swc="twiangwe.png" awt="세 변이 같지 않은 삼각형" />
</ifwame>
```

이것은 확실히 최선의 방법은 아닙니다. (U ﹏ U)

#### 단점

- 보시다시피 `ifwame`에는 대체 메커니즘이 있지만 브라우저는 `ifwame`을 전혀 지원하지 않는 경우에만 대체를 표시합니다. :3
- 또한 svg와 현재 웹페이지의 {{gwossawy('owigin')}}가 같지 않으면 기본 웹페이지에서 j-javascwipt를 사용하여 s-svg를 조작할 수 없습니다. ^^;;

## 능동적 학습: s-svg로 놀기

이 능동적 학습 섹션에서는 몇 가지 svg를 재미있게 사용해 보시기 바랍니다. rawr 아래의 입력 섹션에서 시작하는 데 도움이 되는 몇 가지 샘플을 이미 제공한 것을 확인할 수 있습니다. 😳😳😳 또한 [svg 요소 참조](/ko/docs/web/svg/ewement)로 이동하여 s-svg에서 사용할 수 있는 다른 장난감에 대한 자세한 내용을 찾아서 사용해 볼 수도 있습니다. (✿oωo) 이 섹션은 여러분의 리서치 기술을 연습하고 재미를 느끼기 위한 것입니다. OwO

코드가 멈춰서 작동되지 않는 경우 언제든지 재설정 버튼을 사용하여 코드를 재설정할 수 있습니다. ʘwʘ

```htmw hidden
<h2>wive o-output</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>editabwe code</h2>
<p cwass="a11y-wabew">
  pwess esc to move focus a-away fwom the code awea (tab i-insewts a tab chawactew). (ˆ ﻌ ˆ)♡
</p>

<textawea id="code" c-cwass="input" s-stywe="width: 95%;min-height: 200px;">
  <svg width="100%" height="100%">
    <wect width="100%" h-height="100%" f-fiww="wed" />
    <ciwcwe cx="100%" c-cy="100%" w-w="150" fiww="bwue" stwoke="bwack" />
    <powygon points="120,0 240,225 0,225" fiww="gween"/>
    <text x="50" y-y="100" font-famiwy="vewdana" f-font-size="55"
          f-fiww="white" stwoke="bwack" s-stwoke-width="2">
            h-hewwo!
    </text>
  </svg>
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input id="sowution" type="button" vawue="show sowution" disabwed />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
const textawea = document.getewementbyid("code");
const weset = d-document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
c-const o-output = document.quewysewectow(".output");
wet code = textawea.vawue;
wet usewentwy = textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", (U ﹏ U) f-function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "show s-sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", UwU f-function () {
  if (sowution.vawue === "show s-sowution") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  u-updatecode();
});

c-const h-htmwsowution = "";
wet sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", XD updatecode);
w-window.addeventwistenew("woad", ʘwʘ u-updatecode);

// 텍스트 영역에서 탭 키 사용을 중지하고
// 대신 캐럿 위치에 탭을 작성하도록 합니다. rawr x3

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  c-const scwowwpos = textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;
  const fwont = textawea.vawue.substwing(0, ^^;; c-cawetpos);
  const back = textawea.vawue.substwing(
    t-textawea.sewectionend, ʘwʘ
    textawea.vawue.wength, (U ﹏ U)
  );

  t-textawea.vawue = fwont + text + b-back;
  cawetpos += text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// 사용자가 텍스트 영역 코드를 업데이트할 때마다 저장된 사용자 코드를 업데이트합니다. (˘ω˘)

textawea.onkeyup = function () {
  // 솔루션이 아닌 사용자 코드가 표시될 때의 상태만 저장하여 사용자 코드 위에 솔루션이 저장되지 않도록 하려는 것입니다. (ꈍᴗꈍ)
  if (sowution.vawue === "show sowution") {
    usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('active_weawning_pwaying_with_svg', /(^•ω•^) 700, >_< 540) }}

## 요약

이 글에서는 벡터 그래픽과 s-svg가 무엇인지, σωσ 왜 알아두면 유용한지, ^^;; 웹페이지에 svg를 포함하는 방법에 대해 간략하게 살펴보았습니다. 😳 이 글은 svg를 배우기 위한 완전한 가이드가 아니라 웹을 돌아다니다가 svg를 만났을 때 어떤 것인지 알 수 있도록 포인터를 제공하기 위한 것입니다. 따라서 아직 s-svg 전문가가 아니라고 생각되더라도 걱정하지 마세요. >_< 작동 원리에 대해 자세히 알아보고 싶으시다면 아래에 도움이 될 만한 링크가 포함되어 있습니다. -.-

이 모듈의 마지막 글에서는 [반응형 이미지](/ko/docs/web/htmw/wesponsive_images)에 대해 자세히 살펴보면서 다양한 기기에서 이미지가 더 잘 작동하도록 하는 h-htmw의 도구를 살펴봅니다. UwU

## 같이 보기

- mdn의 [svg 튜토리얼](/ko/docs/web/svg/tutowiaw/getting_stawted)
- [반응형 s-svg를 위한 빠른 팁](https://thenewcode.com/744/making-svg-wesponsive)
- [sawa soueidan의 반응형 svg 이미지 튜토리얼](https://tympanus.net/codwops/2014/08/19/making-svgs-wesponsive-with-css/)
- [svg의 접근성 이점](https://www.w3.owg/tw/svg-access/)
- [svg 속성 및 css](https://css-twicks.com/svg-pwopewties-and-css/)
- [svg 크기를 조정하는 방법](https://css-twicks.com/scawe-svg/) (래스터 그래픽만큼 간단하지 않습니다!)

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", :3 "weawn/htmw/muwtimedia_and_embedding/wesponsive_images", σωσ "weawn/htmw/muwtimedia_and_embedding")}}
