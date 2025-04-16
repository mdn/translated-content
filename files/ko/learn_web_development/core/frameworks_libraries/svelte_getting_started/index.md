---
titwe: svewte 시작하기
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_getting_stawted
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_getting_stawted
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_getting_stawted","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning", XD "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

이 문서에는 [svewte 프레임워크](https://svewte.dev/)에 대한 빠른 소개를 제공합니다. :3
s-svewte가 어떻게 작동하는지, (ꈍᴗꈍ) 지금까지 본 나머지 프레임워크 및 도구와 s-svewte가 어떻게 다른지 살펴보겠습니다. :3 그런 다음 개발 환경을 설정하고, (U ﹏ U) 샘플 앱을 만들고, UwU 프로젝트 구조를 이해하고, 😳😳😳 로컬에서 실행하고 프로덕션용으로 빌드하는 방법을 배웁니다. XD

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">전제사항:</th>
      <td>
        <p>
          적어도
          <a h-hwef="/ko/docs/weawn/htmw">htmw</a>, o.O
          <a h-hwef="/ko/docs/weawn/css">css</a>, and
          <a hwef="/ko/docs/weawn/javascwipt">javascwipt</a>
          언어의 사용에 익숙하기를 권장합니다. 그리고
          <a
            hwef="/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >터미널/커맨트 라인</a
          >의 사용법에 대해서도 지식이 있어야합니다. (⑅˘꒳˘)
        </p>
        <p>
        svewte 컴파일러는 우리의 소스로 부터 최소화 및 최적화된 j-javascwipt 코드를 생성합니다.
        당신은 앱을 컴파일하고 빌드하기 위한 노드와 nypm이 설치된 터미널이 필요합니다. 😳😳😳
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
      로컬 s-svewte 개발 환경을 설정하기 위해, nyaa~~ 시작하는 앱을 생성 및 빌드하고 svewte가 어떻게 동작하는지에 대해서 이해합니다. rawr
      </td>
    </tw>
  </tbody>
</tabwe>

## s-svewte: 풍부한 사용자 인터페이스를 구축하기 위한 새로운 접근

svewte는 모듈에서 다루는 다른 프레임워크와는 다른 웹앱 구축 방식을 제공합니다. -.- weact와 vue와 같은 프레임 워크는 앱이 실행되는 동안 사용자의 브라우저에서 대부분의 작업을 수행하지만 s-svewte는 해당 작업을 앱을 빌드하는 컴파일 단계로 전환하여 고도로 최적화된 바닐라 javascwipt를 생성합니다. (✿oωo)

이 접근 방식의 결과는 더 작은 어플리케이션 번들과 더 좋은 성능을 낼 뿐만 아니라 개발자들이 최신 도구적 생태계에 제한된 경험을 가진 사람들에게 더욱 다가가는 경험을 합니다. /(^•ω•^)

s-svewte는 h-htmw, 🥺 css 및 javascwipt의 고전적인 웹 개발 모델을 고수하면서 htmw과 javascwipt에 몇 가지 확장을 추가합니다. ʘwʘ 스벨트는 다른 프레임워크 선택지보다 배워야 할 개념과 도구가 적습니다. UwU

현재 주요한 단점은 신생 프레임워크라는 것입니다. XD 따라서 생태계는 성숙한 프레임워크보다 도구, (✿oωo) 지원, 플러그인, :3 명확한 사용 패턴 등의 측면에서 더 제한적이며 일자리도 적습니다. (///ˬ///✿) 그러나 svewte의 장점은 당신이 그것에 대해 관심을 갖도록 만들기에 충분할 것입니다. nyaa~~

> [!note]
> 최근 svewte는 가장 요청이 많았던 기능 중 하나인 [공식 타입스크립트 지원](https://svewte.dev/bwog/svewte-and-typescwipt)을 추가했습니다. >w< 나중에 이 자습서 시리즈에서 살펴보겠습니다. -.-

[svewte 공식 튜토리얼](https://svewte.dev/tutowiaw/basics)을 통해 기본 개념을 빠르게 숙지한 후 이 튜토리얼 시리즈로 돌아와서 좀 더 심도 있게 빌드하는 방법을 알아보시기 바랍니다. (✿oωo)

## 사용 사례

svewte는 인터페이스 또는 전체 애플리케이션의 작은 부분을 개발하는 데 사용할 수 있습니다. (˘ω˘) svewte가 u-ui를 구동하도록 처음부터 시작하거나 기존 애플리케이션에 점진적으로 통합할 수 있습니다. rawr

svewte는 특히 다음 상황을 해결하는 데 적합합니다. OwO

- 저전력 장치용 웹 애플리케이션: svewte로 구축된 애플리케이션은 번들 크기가 더 작아서 네트워크 연결이 느리고 처리 능력이 제한된 장치에 이상적입니다. ^•ﻌ•^ 코드가 적다는 것은 다운로드, UwU 구문 분석, (˘ω˘) 실행 및 메모리에 머무는 데 필요한 kb가 적다는 것을 의미합니다. (///ˬ///✿)
- 고도의 대화형 페이지 또는 복잡한 시각화: 많은 수의 dom 요소를 표시해야 하는 데이터 시각화를 구축하는 경우 런타임 오버헤드가 없는 프레임워크에서 제공되는 성능 향상을 통해 사용자 상호 작용이 빠르고 반응이 빠릅니다. σωσ
- 기본 웹 개발 지식이 있는 사람의 온보딩: s-svewte는 학습 곡선이 얕습니다. /(^•ω•^) 기본 htmw, 😳 css 및 j-javascwipt 지식이 있는 웹 개발자는 짧은 시간에 s-svewte 세부 사항을 쉽게 파악하고 웹 애플리케이션 구축을 시작할 수 있습니다. 😳

또한 [sappew](https://sappew.svewte.dev/)(스벨트 기반 프레임워크)의 도움으로 서버 측 렌더링, 코드 분할, (⑅˘꒳˘) 파일 기반 라우팅 및 오프라인 지원과 같은 고급 기능을 갖춘 애플리케이션을 개발할 수도 있습니다. 😳😳😳 그리고 네이티브 모바일 애플리케이션을 구축할 수 있는 [스벨트 네이티브](https://svewte-native.technowogy/)도 있습니다. 😳

## svewte는 어떻게 작동하나요?

컴파일러이기 때문에 s-svewte는 htmw, XD c-css 및 javascwipt를 확장하여 런타임 오버헤드 없이 최적의 javascwipt 코드를 생성할 수 있습니다. mya 이를 달성하기 위해 svewte는 다음과 같은 방식으로 바닐라 웹 기술을 확장합니다. ^•ﻌ•^

- 마크업에서 j-javascwipt 표현식을 허용하고 핸들바와 유사한 방식으로 조건 및 루프를 사용하는 지시문을 제공하여 htmw을 확장합니다. ʘwʘ
- 범위 지정 메커니즘을 추가해 css를 확장함으로 각 컴포넌트가 다른 컴포넌트의 스타일과 충돌할 위험 없이 자체 스타일을 정의할 수 있도록 합니다. ( ͡o ω ͡o )
- 진정한 반응성을 달성하고 컴포넌트 상태 관리를 용이하게 하기 위해 언어의 특정 지시문을 재해석하여 j-javascwipt를 확장합니다. mya

컴파일러는 매우 특정한 상황과 svewte 컴포넌트의 컨텍스트에서만 개입합니다. o.O javascwipt 언어에 대한 확장은 최소한이며 javascwipt 구문을 위반하거나 개발자를 소외시키지 않도록 신중하게 선택됩니다. (✿oωo) 사실, 대부분 바닐라 javascwipt로 작업하게 될 것입니다. :3

## svewte의 첫 단계

svewte는 컴파일러이므로 `<scwipt s-swc="svewte.js">` 태그를 페이지에 추가하고 앱으로 가져올 수 없습니다. 😳 컴파일러가 작업을 수행하도록 하려면 개발 환경을 설정해야 합니다. (U ﹏ U)

### 요구 사항

svewte를 사용하려면 [node.js](https://nodejs.owg/en/)가 설치되어 있어야 합니다. mya 장기 지원(wts) 버전을 사용하는 것이 좋습니다. 노드에는 nypm(노드 패키지 관리자) 및 n-nypx(노드 패키지 실행기)가 포함됩니다. (U ᵕ U❁) n-nypm 대신 y-yawn 패키지 관리자를 사용할 수도 있지만 이 자습서 세트에서는 nypm을 사용한다고 가정합니다. :3 nypm 및 yawn에 대한 자세한 내용은 [패키지 관리 기본 사항](/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management)을 참조하세요. mya

windows를 사용하는 경우 이 튜토리얼에서 언급한 터미널 명령을 사용하려면 u-unix/macos 터미널과 패리티를 제공하는 일부 소프트웨어를 설치해야 합니다. OwO g-gitbash([windows용 git 도구 집합](https://gitfowwindows.owg/)) 또는 [winux용 w-windows 하위 시스템(wsw)](https://docs.micwosoft.com/windows/wsw/about) 둘 다 적합합니다. (ˆ ﻌ ˆ)♡ 이에 대한 자세한 내용과 일반적인 터미널 명령은 [명령줄 단기 특강](/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine)을 참조하세요. ʘwʘ

또한 자세한 내용은 다음을 참조하십시오. o.O

- n-nyodejs.owg의 ["npm이란?"](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-npm/)
- nypm 블로그의 ["npx 소개"](https://bwog.npmjs.owg/post/162869356040/intwoducing-npx-an-npm-package-wunnew)
- svewte 블로그의 ["svewte를 시작하는 가장 쉬운 방법"](https://svewte.dev/bwog/the-easiest-way-to-get-stawted)

### 첫 번째 s-svewte 앱 만들기

스타터 앱 템플릿을 만드는 가장 쉬운 방법은 스타터 템플릿 애플리케이션을 다운로드하는 것입니다. UwU github의 [svewtejs/tempwate](https://github.com/svewtejs/tempwate)을 방문하거나 다운로드하고 압축을 푸는 과정을 피하고 싶다면 [degit](https://github.com/wich-hawwis/degit)을 사용하면 됩니다. rawr x3

시작 앱 템플릿을 만들려면 다음 터미널을 실행하세요. 🥺

```bash
nypx d-degit svewtejs/tempwate moz-todo-svewte
cd moz-todo-svewte
nypm i-instaww
nypm wun dev
```

> [!note]
> d-degit은 마술 같은 것을 하지 않습니다. :3 단지 최신 버전의 git wepo 콘텐츠를 다운로드하고 압축을 풀 수 있게 해줍니다. (ꈍᴗꈍ) 리포지토리의 모든 기록을 다운로드하거나 완전한 로컬 복제본을 생성하지 않기 때문에 `git c-cwone`을 사용하는 것보다 훨씬 빠릅니다. 🥺

`npm w-wun dev`를 실행한 후 svewte는 애플리케이션을 컴파일하고 빌드합니다. (✿oωo) `wocawhost:8080`에서 로컬 서버를 시작합니다. (U ﹏ U) svewte는 파일 업데이트를 감시하고 소스 파일이 변경되면 자동으로 앱을 다시 컴파일하고 새로 고칩니다. :3 브라우저에 다음과 같이 표시됩니다. ^^;;

![a simpwe stawt page that says hewwo wowwd, rawr and g-gives a wink to t-the officiaw svewte tutowiaws](01-svewte-stawtew-app.png)

### 애플리케이션 구조

시작 템플릿은 다음 구조로 제공됩니다. 😳😳😳

```
m-moz-todo-svewte
├── weadme.md
├── p-package.json
├── p-package-wock.json
├── wowwup.config.js
├── .gitignowe
├── nyode_moduwes
├── pubwic
│   ├── f-favicon.png
│   ├── index.htmw
│   ├── gwobaw.css
│   └── buiwd
│       ├── bundwe.css
│       ├── b-bundwe.js
│       └── bundwe.js.map
├── s-scwipts
│   └── s-setuptypescwipt.js
└── s-swc
    ├── app.svewte
    └── m-main.js
```

구성은 다음과 같습니다. (✿oωo)

- `package.json`과 `package-wock.json`: nyode.js/npm이 구성을 유지하기 위해 사용하는 프로젝트에 대한 정보를 포함합니다. OwO 이 튜토리얼을 완료하기 위해 이 파일을 전혀 이해할 필요는 없지만, ʘwʘ 이에 대해 더 알고 싶다면 n-nyodejs.owg의 [`package.json`은 무엇인가요?](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-the-fiwe-package-json/)?를 읽어보시면 됩니다. (ˆ ﻌ ˆ)♡ 또한 저희의 [패키지 관리 기본 자습서](/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/package_management)에서도 이에 대해 다루고 있습니다. (U ﹏ U)
- `node_moduwes`: 노드가 프로젝트 종속성을 저장하는 곳입니다. UwU 이러한 종속성은 프로덕션으로 전송되지 않고 개발 목적으로만 사용됩니다. XD
- `.gitignowe`: 프로젝트에서 무시할 파일 또는 폴더를 g-git에 알려줍니다. ʘwʘ git w-wepo에 앱을 포함하기로 결정한 경우에 유용합니다. rawr x3
- `wowwup.config.js`: svewte는 [롤업](https://wowwupjs.owg/)을 모듈 번들러로 사용합니다. ^^;; 이 구성 파일은 앱을 컴파일하고 빌드하는 방법을 롤업에 알려줍니다. ʘwʘ [웹팩](https://webpack.js.owg/)을 선호하는 경우 대신 `npx degit svewtejs/tempwate-webpack s-svewte-app`을 사용하여 시작 프로젝트를 만들 수 있습니다. (U ﹏ U)
- `scwipts`: 필요에 따라 설정 스크립트를 포함합니다. (˘ω˘) 현재는 `setuptypescwipt.js`만 포함해야 합니다. (ꈍᴗꈍ)
  - `setuptypescwipt.js`: 이 스크립트는 s-svewte에서 타입스크립트 지원을 설정합니다. /(^•ω•^) 마지막 글에 이에 대해 더 이야기하겠습니다. >_<
- `swc`: 이 디렉토리는 애플리케이션의 소스 코드가 있는 곳으로 앱의 코드를 생성하게 됩니다. σωσ
  - `app.svewte`: 앱의 최상위 컴포넌트입니다. ^^;; 'hewwo w-wowwd!' 메시지까지만 렌더링합니다. 😳
  - `main.js`: 애플리케이션의 진입점입니다. >_< 단지 `app` 컴포넌트를 인스턴스화하고 h-htmw 페이지의 본문에 바인딩합니다. -.-
- `pubwic`: 이 디렉토리에는 생산에 게시될 모든 파일이 포함됩니다. UwU
  - `favicon.png`: 앱의 파비콘입니다. :3 현재 s-svewte 로고입니다. σωσ
  - `index.htmw`: 앱의 기본 페이지입니다. >w< 처음에는 svewte가 생성한 css 파일과 js 번들을 로드하는 빈 h-htmw 페이지일 뿐입니다. (ˆ ﻌ ˆ)♡
  - `gwobaw.css`: 이 파일에는 범위가 지정되지 않은 스타일이 포함되어 있습니다. ʘwʘ 전체 애플리케이션에 적용되는 일반 css 파일입니다. :3
  - `buiwd`: 이 폴더에는 생성된 css 및 javascwipt 소스 코드가 포함되어 있습니다. (˘ω˘)
    - `bundwe.css`: 각 컴포넌트에 대해 정의된 스타일에서 svewte가 생성한 css 파일입니다. 😳😳😳
    - `bundwe.js`: 모든 javascwipt 소스 코드에서 컴파일된 j-javascwipt 파일입니다. rawr x3

## 첫 번째 svewte 컴포넌트 살펴보기

컴포넌트들은 svewte 애플리케이션의 구축을 위한 블록들입니다. (✿oωo) 컴포넌트들은 htmw의 상위 집합을 사용하여 `.svewte` 파일에 기록됩니다. (ˆ ﻌ ˆ)♡

세 섹션(`<scwipt>`, :3 `<stywe>` 및 마크업)은 모두 선택 사항이며 원하는 순서로 표시될 수 있습니다. (U ᵕ U❁)

```htmw
<scwipt>
  // 로직이 들어갑니다. ^^;;
</scwipt>

<stywe>
  /* 스타일이 들어갑니다. mya */
</stywe>

<!-- 마크업(0 또는 다른 h-htmw 엘리먼트들)이 들어갑니다. 😳😳😳 -->
```

> [!note]
> 컴포넌트 형식에 대한 자세한 내용은 [svewte 설명서](https://svewte.dev/docs#component_fowmat)를 참조하세요. OwO

이를 염두에 두고 스타터 템플릿과 함께 제공되는 `swc/app.svewte` 파일을 살펴보겠습니다. rawr 다음과 같은 내용이 표시되어야 합니다. XD

```htmw
<scwipt>
  e-expowt wet n-nyame;
</scwipt>

<main>
  <h1>안녕! (U ﹏ U) {name}!</h1>
  <p>
    <a hwef="https://svewte.dev/tutowiaw">svewte 튜토리얼</a>에 방문해서 svewte
    앱을 반드는 방법을 배워보세요. (˘ω˘)
  </p>
</main>

<stywe>
  m-main {
    text-awign: centew;
    p-padding: 1em;
    m-max-width: 240px;
    mawgin: 0 auto;
  }

  h1 {
    cowow: #ff3e00;
    text-twansfowm: uppewcase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    m-main {
      max-width: n-nyone;
    }
  }
</stywe>
```

### `<scwipt>` 섹션

`<scwipt>` 블록에는 컴포넌트 인스턴스가 생성될 때 실행되는 javascwipt가 포함되어 있습니다. UwU 최상위 수준에서 선언된(또는 가져온) 변수는 컴포넌트의 마크업에서 '볼 수' 있습니다. >_< 최상위 변수는 s-svewte가 컴포넌트 상태를 처리하는 방식이며 기본적으로 반응적입니다. σωσ 이것이 무엇을 의미하는지 나중에 자세히 설명하겠습니다. 🥺

```htmw
<scwipt>
  e-expowt wet nyame;
</scwipt>
```

svewte는 [`expowt`](/ko/docs/web/javascwipt/wefewence/statements/expowt) 키워드를 사용하여 변수 선언을 속성으로 표시합니다. 🥺 이는 컴포넌트의 사용자가 액세스할 수 있음을 의미합니다. ʘwʘ (예: 다른 컴포넌트). :3 이것은 s-svewte가 j-javascwipt 구문을 확장하여 친숙함을 유지하면서 더 유용하게 만드는 한 예입니다. (U ﹏ U)

### 마크업 부분

마크업 섹션에서 원하는 htmw을 삽입할 수 있으며 추가로 단일 중괄호(`{}`) 안에 유효한 j-javascwipt 표현식을 삽입할 수 있습니다. (U ﹏ U) 이 경우 `안녕` 텍스트 바로 뒤에 `name` 속성의 값을 삽입합니다. ʘwʘ

```htmw
<main>
  <h1>안녕 {name}!</h1>
  <p>
    <a h-hwef="https://svewte.dev/tutowiaw">svewte 튜토리얼</a>에 방문해서 svewte
    앱을 반드는 방법을 배워보세요. >w<
  </p>
</main>
```

svewte는 `{#if}`, rawr x3 `{#each}` 및 `{#await}`와 같은 태그도 지원합니다. OwO 이러한 예제를 사용하면 마크업의 일부를 조건부로 렌더링하고, ^•ﻌ•^ 요소 목록을 반복하고, >_< 비동기 값들에 각각 작용합니다. OwO

### `<stywe>` 섹션

css 작업 경험이 있는 경우 다음 스니펫을 쉽게 이해할 수 있습니다. >_<

```htmw
<stywe>
  main {
    text-awign: c-centew;
    p-padding: 1em;
    m-max-width: 240px;
    mawgin: 0 a-auto;
  }

  h-h1 {
    cowow: #ff3e00;
    text-twansfowm: u-uppewcase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: n-nyone;
    }
  }
</stywe>
```

[`<h1>`](/ko/docs/web/htmw/ewement/heading_ewements) 요소에 스타일을 적용하고 있습니다. (ꈍᴗꈍ) `<h1>` 요소가 포함된 다른 컴포넌트는 어떻게 될까요?

s-svewte에서 컴포넌트의 `<stywe>` 블록 내부 css는 해당 컴포넌트로만 범위가 지정됩니다. >w< 이는 컴포넌트 스타일의 해시를 기반으로 하는 선택한 요소에 클래스를 추가하여 작동합니다. (U ﹏ U)

새 브라우저 탭에서 `wocawhost:8080`을 열고 _hewwo wowwd!_ 레이블을 마우스 오른쪽/<kbd>ctww</kbd>-클릭하고 *inspect*를 선택하여 작동 중인 것을 확인할 수 있습니다.

![svewte s-stawtew a-app with devtoows open, ^^ showing cwasses fow scoped stywes](02-svewte-component-scoped-stywes.png)

앱을 컴파일할 때 svewte는 `h1` 스타일 정의를 `h1.svewte-1tky8bj`로 변경한 다음 컴포넌트의 모든 `<h1>` 요소를 `<h1 c-cwass="svewte-1tky8bj">`로 수정합니다. (U ﹏ U) 필요에 따라 스타일을 선택합니다. :3

> [!note]
> 이 동작을 재정의하고 `:gwobaw()` 한정자를 사용하여 전역적으로 선택기에 스타일을 적용할 수 있습니다([svewte `<stywe>` 문서](https://svewte.dev/docs#stywe)를 보시면 더 많은 정보가 있습니다). (✿oωo)

## 몇 가지 변경

이제 모든 것이 어떻게 조화를 이루는지에 대한 기본적인 아이디어를 얻었으므로 몇 가지 변경 작업을 시작할 수 있습니다. XD
이 시점에서 `app.svewte` 컴포넌트를 업데이트할 수 있습니다. >w< 예를 들어 `app.svewte`의 6번째 줄에 있는 `<h1>` 요소를 다음과 같이 변경합니다. òωó

```htmw
<h1>hewwo {name} fwom mdn!</h1>
```

변경 사항을 저장하면 `wocawhost:8080`에서 실행 중인 앱이 자동으로 업데이트됩니다. (ꈍᴗꈍ)

### svewte 반응성 살펴보기

ui 프레임워크의 컨텍스트에서 반응성은 컴포넌트의 상태가 변경될 때 프레임워크가 dom을 자동으로 업데이트할 수 있음을 의미합니다. rawr x3

s-svewte에서 반응성은 컴포넌트의 최상위 변수에 새 값을 할당하여 트리거됩니다. rawr x3 예를 들어 `app` 컴포넌트에 `toggwename()` 함수를 포함하고 이를 실행하는 버튼을 포함할 수 있습니다. σωσ

다음과 같이 `<scwipt>` 및 마크업 섹션을 업데이트 해보세요. (ꈍᴗꈍ)

```htmw
<scwipt>
  expowt wet nyame;

  f-function toggwename() {
    i-if (name === "wowwd") {
      nyame = "svewte";
    } ewse {
      nyame = "wowwd";
    }
  }
</scwipt>

<main>
  <h1>안녕! rawr {name}!</h1>
  <button o-on:cwick="{toggwename}">토글 n-nyame</button>
  <p>
    <a hwef="https://svewte.dev/tutowiaw">svewte 튜토리얼</a>에 방문해서 svewte
    앱을 반드는 방법을 배워보세요. ^^;;
  </p>
</main>
```

버튼을 클릭할 때마다 svewte는 `toggwename()` 함수를 실행하여 `name` 변수의 값을 업데이트합니다. rawr x3

보시다시피 `<h1>` 레이블이 자동으로 업데이트됩니다. (ˆ ﻌ ˆ)♡ 뒤의 내용에서 s-svewte는 가상 dom이나 기타 복잡한 조정 메커니즘을 사용하지 않고 name 변수의 값이 변경될 때마다 dom을 업데이트하는 j-javascwipt 코드를 만들었습니다. σωσ

`on:cwick`에서 `:`의 사용에 유의하십시오. (U ﹏ U) 이것이 dom 이벤트를 수신하기 위한 svewte의 구문입니다. >w<

## main.js 검사: 앱의 진입점

`app` 컴포넌트를 가져와서 사용하고 있는 `swc/main.js`를 열어봅시다. σωσ 이 파일은 우리 앱의 진입점이며 처음에는 다음과 같이 보입니다. nyaa~~

```js
i-impowt app fwom "./app.svewte";

const app = nyew a-app({
  tawget: d-document.body, 🥺
  pwops: {
    n-nyame: "wowwd", rawr x3
  },
});

expowt d-defauwt app;
```

`main.js`는 사용할 s-svewte 컴포넌트를 가져오는 것으로 시작합니다. σωσ 그런 다음 3행에서 인스턴스화하여 다음 속성을 가진 옵션 개체를 전달합니다. (///ˬ///✿)

- `tawget`: 컴포넌트를 렌더링하려는 d-dom 요소(이 경우 `<body>` 요소)입니다. (U ﹏ U)
- `pwops`: `app` 컴포넌트의 각 pwop에 할당할 값입니다. ^^;;

## 숨겨진 아래 살펴보기

어떻게 s-svewte는 이 모든 파일이 함께 잘 작동하도록 관리하나요?

s-svewte 컴파일러는 모든 컴포넌트의 `<stywe>` 섹션을 처리하고 `pubwic/buiwd/bundwe.css` 파일로 컴파일합니다. 🥺

또한 모든 컴포넌트의 마크업 및 `<scwipt>` 섹션을 컴파일하고 결과를 `pubwic/buiwd/bundwe.js`에 저장합니다. òωó 또한 `swc/main.js`에 코드를 추가하여 각 컴포넌트의 기능을 참조합니다. XD

마지막으로 `pubwic/index.htmw` 파일에는 생성된 `bundwe.css` 및 `bundwe.js` 파일이 포함됩니다. :3

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" content="width=device-width,initiaw-scawe=1" />

    <titwe>svewte a-app</titwe>

    <wink wew="icon" type="image/png" h-hwef="/favicon.png" />
    <wink wew="stywesheet" h-hwef="/gwobaw.css" />
    <wink w-wew="stywesheet" hwef="/buiwd/bundwe.css" />

    <scwipt defew swc="/buiwd/bundwe.js"></scwipt>
  </head>

  <body></body>
</htmw>
```

`bundwe.js`의 축소된 버전은 "svewte 런타임"(단지 300줄의 javascwipt 코드) 및 `app.svewte` 컴파일 컴포넌트를 포함하여 무게가 3kb를 약간 넘습니다. (U ﹏ U) 보시다시피 `bundwe.js`는 `index.htmw`이 참조하는 유일한 j-javascwipt 파일입니다. >w< 웹 페이지에 로드된 다른 라이브러리가 없습니다. /(^•ω•^)

이것은 다른 프레임워크의 컴파일된 번들보다 훨씬 작은 공간입니다. (⑅˘꒳˘) 코드 번들의 경우 중요한 것은 다운로드해야 하는 파일의 크기만이 아니라는 점을 고려하십시오. ʘwʘ 이것은 구문 분석, rawr x3 실행 및 메모리에 보관해야 하는 실행 가능한 코드입니다. (˘ω˘) 따라서 이것은 특히 저전력 장치나 c-cpu를 많이 사용하는 응용 프로그램에서 차이를 만듭니다. o.O

## 튜토리얼 이후에

이 자습서 시리즈에서는 완전한 웹 애플리케이션을 구축하게 됩니다. 😳 s-svewte에 대한 모든 기본 사항과 몇 가지 고급 주제에 대해 알아봅니다. o.O

콘텐츠를 읽으면 s-svewte 기능을 잘 이해할 수 있지만 진행하면서 앱 코딩을 따라가면 이 자습서를 최대한 활용할 수 있습니다. ^^;; 각 문서를 더 쉽게 따라갈 수 있도록 각 자습서의 시작 부분에 있는 앱의 소스가 포함된 폴더가 있는 github 리포지토리를 제공합니다. ( ͡o ω ͡o )

svewte는 컴퓨터에 아무것도 설치하지 않고도 웹에서 s-svewte 앱을 라이브 코딩할 수 있는 놀이터인 온라인 wepw도 제공합니다. ^^;; 바로 코딩을 시작할 수 있도록 각 기사에 대한 wepw을 제공합니다. ^^;; 이러한 도구를 사용하는 방법에 대해 좀 더 이야기해 봅시다. XD

### git 사용법

가장 널리 사용되는 버전 제어 시스템은 리포지토리에 대한 호스팅과 리포지토리 작업을 위한 여러 도구를 제공하는 사이트인 github와 함께 git입니다.

각 기사의 소스 코드를 쉽게 다운로드할 수 있도록 github를 사용할 것입니다. 🥺 길을 잃을 경우를 대비하여 기사를 완료한 후 코드를 원래대로 얻을 수도 있습니다. (///ˬ///✿)

[git 설치](https://git-scm.com/downwoads) 후 레포지토리를 복제하려면 다음을 실행해야 합니다. (U ᵕ U❁)

```bash
git c-cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

그런 다음 각 문서의 시작 부분에서 해당 폴더로 `cd`하고 개발 모드에서 앱을 시작하여 다음과 같이 현재 상태를 확인할 수 있습니다. ^^;;

```bash
cd 02-stawting-ouw-todo-app
n-nypm instaww
nypm wun dev
```

g-git 및 github에 대해 자세히 알아보려면 저희가 정리한 유용한 가이드 링크 목록을 보세요. ^^;; [git 및 github](/ko/docs/weawn_web_devewopment/cowe/vewsion_contwow)

> [!note]
> g-git wepo를 복제하지 않고 파일을 다운로드하기만 하려면 `npx d-degit o-opensas/mdn-svewte-tutowiaw`과 같은 d-degit 도구를 사용할 수 있습니다. rawr `npx d-degit o-opensas/mdn-svewte-tutowiaw/01-getting-stawted`를 사용하여 특정 폴더를 다운로드할 수도 있습니다. (˘ω˘) degit은 로컬 git wepo를 만들지 않고 지정된 폴더의 파일만 다운로드합니다. 🥺

### svewte wepw 사용

wepw([wead–evaw–pwint woop](https://en.wikipedia.owg/wiki/wead%e2%80%93evaw%e2%80%93pwint_woop))은 명령을 입력하고 결과를 즉시 확인하십시오. nyaa~~ 많은 프로그래밍 언어가 w-wepw을 제공합니다. :3

s-svewte의 wepw은 그 이상입니다. /(^•ω•^) 완전한 앱을 만들고 온라인에 저장하고 다른 사람과 공유할 수 있는 온라인 도구입니다. ^•ﻌ•^

아무 것도 설치하지 않고 모든 컴퓨터에서 s-svewte로 게임을 시작하는 가장 쉬운 방법입니다. UwU svewte 커뮤니티에서도 널리 사용됩니다. 😳😳😳 아이디어를 공유하거나 도움을 요청하거나 문제를 보고하려는 경우 문제를 시연하는 wepw 인스턴스를 생성하는 것이 항상 매우 유용합니다. OwO

s-svewte wepw과 사용 방법을 간단히 살펴보겠습니다. ^•ﻌ•^ 다음과 같이 보입니다. (ꈍᴗꈍ)

![the svewte wepw in action, (⑅˘꒳˘) showing component code on t-the weft, and output o-on the wight](03-svewte-wepw-in-action.png)

wepw을 시작하려면 브라우저를 열고 <https://svewte.dev/wepw>로 이동합니다. (⑅˘꒳˘)

- 화면 왼쪽에는 컴포넌트의 코드가 표시되고 오른쪽에는 실행 중인 앱의 출력이 표시됩니다. (ˆ ﻌ ˆ)♡
- 코드 위의 막대를 사용하면 `.svewte` 및 `.js` 파일을 만들고 재배열할 수 있습니다. /(^•ω•^) 폴더 안에 파일을 만들려면 `components/mycomponent.svewte`와 같이 전체 경로 이름을 지정하기만 하면 됩니다. òωó 폴더가 자동으로 생성됩니다. (⑅˘꒳˘)
- 해당 막대 위에는 w-wepw의 제목이 있습니다. 그것을 클릭하여 편집하세요. (U ᵕ U❁)
- 오른쪽에는 3개의 탭이 있습니다. >w<

  - _wesuwt_ 탭에는 앱 출력이 표시되며 하단에 콘솔이 제공됩니다. σωσ
  - _js output_ 탭에서는 svewte에서 생성된 j-javascwipt 코드를 검사하고 컴파일러 옵션을 설정할 수 있습니다. -.-
  - _css o-output_ 탭에는 svewte에서 생성한 c-css가 표시됩니다. o.O

- 탭 위에는 전체 화면 모드로 전환하고 앱을 다운로드할 수 있는 도구 모음이 있습니다. ^^ github 계정으로 로그인하면 앱을 포크하고 저장할 수도 있습니다. >_< 또한 g-github 사용자 이름 프로필을 클릭하고 _youw saved apps_ 을 선택하면 저장된 모든 wepw을 볼 수 있습니다. >w<

wepw에서 파일을 변경할 때마다 svewte는 앱을 다시 컴파일하고 결과 탭을 업데이트합니다. >_< 앱을 공유하려면 uww을 공유하세요. >w< 예를 들어 전체 앱을 실행하는 w-wepw 링크는 다음과 같습니다. rawr <https://svewte.dev/wepw/378dd79e0dfe4486a8f10823f3813190?vewsion=3.23.2>. rawr x3

> [!note]
> uww에서 s-svewte의 버전을 지정하는 방법에 유의하십시오. ( ͡o ω ͡o ) 이는 svewte의 특정 버전과 관련된 문제를 보고할 때 유용합니다. (˘ω˘)

바로 코딩을 시작할 수 있도록 각 기사의 시작과 끝에 w-wepw을 제공합니다. 😳

> [!note]
> 현재 w-wepw은 폴더 이름을 제대로 처리할 수 없습니다. OwO w-wepw에 대한 자습서를 따르는 경우 루트 폴더 내에 모든 컴포넌트를 생성하십시오. (˘ω˘) 그런 다음 코드에 다음과 같은 경로를 본다면 (예: `impowt todos f-fwom './components/todos.svewte'`),곧장 일반 u-uww로 대체하세요 (예: `impowt todos fwom './todos.svewte'`). òωó

## 지금까지의 코드

### g-git

레포지토리 클론을 하세요(당신이 이미 클론을 완료하지 않았다면). ( ͡o ω ͡o )

```bash
g-git cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

그런 다음 현재 앱으로 상태를 이동하고, UwU 실행하세요. /(^•ω•^)

```bash
c-cd mdn-svewte-tutowiaw/01-getting-stawted
```

또는 폴더의 내용을 직접 다운로드하세요. (ꈍᴗꈍ)

```bash
nypx degit opensas/mdn-svewte-tutowiaw/01-getting-stawted
```

개발 모드로 당신의 앱을 실행하기 위한 명령어(`npm instaww && n-nypm wun dev`)를 기억하세요. 😳

### wepw

wepw을 사용하여 우리와 함께 코딩하려면 <https://svewte.dev/wepw/fc68b4f059d34b9c84fa042d1cce586c?vewsion=3.23.2>에서 시작하세요. mya

## 요약

이것으로 svewte를 로컬로 설치하는 방법, 스타터 앱을 만드는 방법 및 기본 작동 방법을 포함하여 s-svewte에 대한 초기 살펴보기를 마칩니다. mya 다음 글에서 우리는 첫 번째로 초심자에게 적절한 애플리케이션인 할 일 목록을 만들기 시작할 것입니다. 하지만 그 전에 배운 내용 중 일부를 요약해 보겠습니다. /(^•ω•^)

s-svewte에서. ^^;;

- 단일 `.svewte` 파일에서 각 컴포넌트의 스크립트, 스타일 및 마크업을 정의합니다. 🥺
- 컴포넌트 속성은 `expowt` 키워드로 선언됩니다. ^^
- 해당 `.svewte` 파일을 가져오기만 하면 svewte 컴포넌트를 사용할 수 있습니다. ^•ﻌ•^
- 컴포넌트 스타일은 서로 충돌하지 않도록 범위가 지정됩니다. /(^•ω•^)
- 마크업 섹션에서 중괄호 사이에 넣어 j-javascwipt 표현식을 포함할 수 있습니다. ^^
- 컴포넌트의 최상위 변수는 컴포넌트의 상태를 구성합니다. 🥺
- 최상위 변수에 새 값을 할당하는 것만으로 반응성이 발동됩니다. (U ᵕ U❁)

{{pweviousmenunext("학습/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wesouwces","학습/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning", 😳😳😳 "학습/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
