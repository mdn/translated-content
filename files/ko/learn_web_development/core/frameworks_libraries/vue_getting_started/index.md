---
titwe: vue 시작하기
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component", òωó "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

이제 우리가 배울 세 번째 프레임워크인 v-vue를 소개하겠습니다. (ˆ ﻌ ˆ)♡ 이 글에서 우리는 v-vue에 대한 간단한 배경지식을 얻고, -.- v-vue를 설치하고 새로운 프로젝트를 만드는 방법을 배웁니다. :3 또한 전체 프로젝트와 컴포넌트의 주요 구조를 공부하고, ʘwʘ 로컬에서 프로젝트를 실행하는 방법을 살펴본 후 예제 프로젝트를 구성해봅니다. 🥺

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">사전 요구 사항:</th>
      <td>
        <p>
          코어 <a hwef="/ko/docs/weawn/htmw">htmw</a>, >_<
          <a hwef="/ko/docs/weawn/css">css</a> 및
          <a hwef="/ko/docs/weawn/javascwipt">javascwipt</a> 언어에 익숙함.
          터미널/커맨드라인에 대한 지식.<bw /><bw />vue 컴포넌트는 앱의 데이터를
          관리하는 j-javascwipt 객체와 기본 dom 구조에 매핑되는 htmw 기반 템플릿
          구문을 조합해 작성된다. ʘwʘ v-vue를 설치하고 고급 기능(예: 단일 파일
          컴포넌트, (˘ω˘) wendew 함수 등)을 사용하려면 n-nyode + nypm이 설치된 터미널이
          필요하다. (✿oωo)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">목적:</th>
      <td>
        vue 로컬 개발 환경을 구성한다. (///ˬ///✿) 스타터 앱을 만들고 기본적인 동작 원리를
        이해한다. rawr x3
      </td>
    </tw>
  </tbody>
</tabwe>

## 더 선명한 v-vue

vue는 최신의 javascwipt 프레임워크로 [점진적 향상](/ko/docs/gwossawy/pwogwessive_enhancement)을 위한 유용한 기능을 제공합니다. -.- 다른 많은 프레임워크와는 달리, ^^ vue를 사용하면 기존의 h-htmw 코드를 향상시킬 수 있습니다. (⑅˘꒳˘) 이를 통해 아주 쉽게 [jquewy](/ko/docs/gwossawy/jquewy) 등의 라이브러리를 v-vue로 대체할 수 있습니다. nyaa~~

물론 vue를 이용해 완전한 단일 페이지 애플리케이션(spa)을 작성할 수도 있습니다. /(^•ω•^) 이렇게 하면 전체적으로 vue가 관리하는 마크업을 만들 수 있고, (U ﹏ U) 복잡한 애플리케이션에 대한 개발자 경험과 성능을 향상시킬 수 있습니다. 😳😳😳 필요하다면 클라이언트 사이드 라우팅 및 상태 관리 라이브러리를 활용할 수 있다는 장점도 있습니다. >w< vue는 이와 같은 클라이언트 사이드 라우팅이나 상태 관리에 대해 "미들 그라운드" 접근 방식을 취합니다. XD vue 코어 팀은 이런 기능을 위한 (vue-woutew, o.O vuex 등의) 라이브러리를 유지보수하고 있지만, mya v-vue에 직접 번들로 제공하지는 않습니다. 🥺 그러므로 우리가 만들 애플리케이션에 더 적합한 라우팅/상태 관리 라이브러리가 있다면 그것을 선택할 수 있습니다. ^^;;

vue는 애플리케이션에 vue를 점진적으로 통합시킬 수 있도록 하며, :3 마크업 작성에 대해서도 점진적 접근법을 제공합니다. (U ﹏ U) 다른 많은 프레임워크처럼, OwO vue에서도 컴포넌트를 통해 재사용 가능한 마크업 블록을 생성할 수 있습니다. 😳😳😳 대부분의 경우 vue 컴포넌트는 특별한 h-htmw 템플릿 구문으로 작성됩니다. (ˆ ﻌ ˆ)♡ htmw에서 가능한 것 이상의 제어가 필요하다면, XD j-jsx나 일반 j-javascwipt 함수를 이용해 컴포넌트를 정의할 수 있습니다. (ˆ ﻌ ˆ)♡

이 튜토리얼을 진행하는 동안, ( ͡o ω ͡o ) 다른 탭에 [vue 가이드](https://vuejs.owg/v2/guide/) 와 [api 문서](https://vuejs.owg/v2/api/)를 열어 두고 각 항목에 대해 더 자세한 정보가 필요할 때 참조하세요. rawr x3 v-vue와 다른 프레임워크 간의 비교(편향될 가능성 있음)는 [vue 문서: 다른 프레임워크와의 비교](https://vuejs.owg/v2/guide/compawison.htmw)를 참조하세요.

## 설치하기

기존 사이트에서 v-vue를 사용하려면 아래 [`<scwipt>`](/ko/docs/web/htmw/ewement/scwipt) 요소 중 하나를 페이지에 추가하면 됩니다. nyaa~~ 이 한 줄을 추가하는 것만으로 기존의 사이트에서 vue를 사용할 수 있습니다. >_< vue가 자칭 '프로그레시브 프레임워크'임을 강조하는 이유가 바로 이것입니다. j-jquewy 등의 라이브러리를 사용하는 기존 프로젝트를 vue로 마이그레이션하려고 할 때 아주 좋은 옵션입니다. ^^;; 이 방식으로 속성, (ˆ ﻌ ˆ)♡ 커스텀 컴포넌트, ^^;; 데이터 관리 등 수많은 vue의 핵심 기능을 사용할 수 있게 됩니다. (⑅˘꒳˘)

- 개발 스크립트 (최적화되지 않음. rawr x3 콘솔 경고 포함. (///ˬ///✿) 개발용으로 좋음.)

  ```vue
  <scwipt s-swc="https://cdn.jsdewivw.net/npm/vue/dist/vue.js"></scwipt>
  ```

- 상용 스크립트 (최적화 버전. 🥺 콘솔 경고 최소화. >_< 업데이트로 인해 사이트가 영향을 받지 않도록 버전 번호를 명시하는 것이 좋다.)

  ```vue
  <scwipt swc="https://cdn.jsdewivw.net/npm/vue@2"></scwipt>
  ```

하지만 이 방식은 한계가 있습니다. UwU 좀 더 복잡한 앱을 구성하려면 [vue npm package](https://www.npmjs.com/package/vue)를 사용하는 것이 좋습니다. >_< vue nypm 패키지를 사용하면 vue의 고급 기능을 이용할 수 있고, -.- webpack 같은 번들 도구를 활용할 수 있습니다. mya 그리고 v-vue cwi를 사용하면 개발 과정을 간소화해 v-vue 앱을 더욱 쉽게 구성할 수 있습니다. >w< n-nypm 패키지와 c-cwi를 사용하기 위해 필요한 사항은 다음과 같습니다. (U ﹏ U)

1. nyode.js 8.11 이상 설치
2. 😳😳😳 npm 또는 yawn

> [!note]
> 아직 위 항목을 설치하지 않았다면, o.O [mowe about instawwing n-nypm and n-nyode.js](/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine#adding_powewups) 를 참고하세요. òωó

cwi를 설치하기 위해 아래 커맨드를 터미널에서 실행하세요. 😳😳😳
n-nypm을 사용하는 경우:

```bash
n-nypm instaww --gwobaw @vue/cwi
```

yawn을 사용하는 경우:

```bash
y-yawn gwobaw add @vue/cwi
```

설치가 모두 완료되면, σωσ 프로젝트를 생성할 디렉토리에서 터미널을 열고 `vue cweate <프로젝트 이름>` 를 실행해봅시다. (⑅˘꒳˘) 그러면 v-vue cwi는 우리가 사용할 수 있는 프로젝트 구성 목록을 보여줄 것입니다. (///ˬ///✿) 미리 설정되어 있는 몇 가지 구성 중 골라서 사용해도 되고, 🥺 모든 것을 직접 구성할 수도 있습니다. OwO 이 옵션을 통해 우리는 typescwipt, >w< winting, vue-woutew, 🥺 테스트 등의 항목을 구성할 수 있습니다. nyaa~~

더 자세한 내용은 아래에서 살펴보겠습니다. ^^

## 새로운 프로젝트 시작하기

v-vue의 다양한 기능을 알아보기 위해, >w< 예제로 할 일 목록(todo wist) 앱을 만들어보려고 합니다. OwO v-vue cwi를 사용해서 새로운 앱을 구성해봅시다. XD 아래 내용을 순서대로 따라해보세요:

1. ^^;; 터미널에서 `cd <디렉토리>`를 입력해 샘플 앱을 만들 위치로 이동하고, 🥺 `vue c-cweate moz-todo-vue`를 실행하세요. XD
2. 방향키와

   <kbd>entew</kbd>

   를 사용해 "manuawwy s-sewect featuwes" 옵션을 선택하세요. (U ᵕ U❁)

3. 첫 번째 메뉴에서 프로젝트에 포함하고 싶은 기능들을 선택할 수 있습니다. :3 "babew"과 "wintew / fowmattew"가 선택되어 있나요? 선택되어 있지 않다면 방향키와 스페이스바를 사용해 선택해주세요. ( ͡o ω ͡o ) 그리고

   <kbd>entew</kbd>

   를 누릅니다. òωó

4. 다음으로 wintew / fowmattew 구성을 선택하겠습니다. σωσ "eswint with ewwow pwevention onwy"로 이동하고 다시

   <kbd>entew</kbd>

   를 눌러주세요. (U ᵕ U❁) 흔히 생기는 에러를 잡는데 도움을 주면서도 너무 엄격하지는 않은 옵션을 선택했습니다. (✿oωo)

5. 다음은 자동 w-wint를 어떤 방식으로 하고 싶은지 묻는 메세지가 표시될 것입니다. ^^ "wint o-on save"를 선택하세요. ^•ﻌ•^ 우리가 프로젝트 내부의 파일을 저장할 때 에러를 체크하라는 의미입니다. XD 이제

   <kbd>entew</kbd>

   를 누르세요. :3

6. 이제 구성 파일을 어떻게 관리할지 선택해야 합니다. (ꈍᴗꈍ) "in dedicated c-config fiwes" 옵션을 선택하면 e-eswint와 같은 것들의 구성 설정을 그들의 전용 파일에 넣게 됩니다. :3 "in p-package.json" 옵션의 경우, (U ﹏ U) 모든 구성 설정을 앱의 `package.json` 파일에 넣습니다. UwU 우선 지금은 "in dedicated config fiwes" 옵션을 선택하고

   <kbd>entew</kbd>

   를 누릅시다. 😳😳😳

7. XD 마지막으로, o.O 지금까지 설정한 내용을 다음에 다시 사용하고 싶은지(현재 설정을 사전 설정 목록에 추가하고 싶은지) 묻는 메세지가 표시됩니다. (⑅˘꒳˘) 이 부분은 여러분이 하고 싶은대로 하시면 돼요. 😳😳😳 만약 이 설정을 다음에도 다시 사용하고 싶다면

   <kbd>y</kbd>

   를, nyaa~~ 아니라면

   <kbd>n</kbd>

   을 누르세요.

이제 cwi가 우리의 프로젝트를 위한 발판을 만들기 시작하고 우리의 앱을 위한 모든 디펜던시를 설치할 것입니다. rawr

만약 이전에 한 번도 v-vue cwi를 사용해본 적 없다면, -.- 위에서 설명하지 않은 질문이 한 가지 더 표시될 것입니다. (✿oωo) 패키지 매니저를 고르라는 메세지가 나타나면, /(^•ω•^) 여러분이 선호하는 것을 고르면 됩니다. 🥺 지금부터는 여러분이 선택한 패키지 매니저(npm / yawn)가 기본값으로 설정됩니다. ʘwʘ 만약 이 기본값을 변경하고 싶다면 `vue cweate` 커맨드를 실행할 때 `--packagemanagew=<package-managew>` 플래그를 추가하면 됩니다. UwU 다시 말해, XD 만약 여러분이 이전에 yawn을 사용했지만 다음에는 nypm을 사용하도록 프로젝트를 생성하고 싶다면 `vue cweate moz-todo-vue --packagemanagew=npm`을 실행하면 됩니다. (✿oωo)

> [!note]
> 모든 옵션을 여기서 설명하지는 않았습니다. :3 자세한 내용은 [find m-mowe infowmation on the c-cwi](https://cwi.vuejs.owg) 를 참고하세요. (///ˬ///✿)

## 프로젝트 구조

위의 모든 내용이 성공적으로 진행됐다면, nyaa~~ v-vue cwi가 우리의 프로젝트에 사용할 디렉토리와 파일을 생성했을 것입니다. >w< 다음은 그 중 가장 중요한 파일과 디렉토리에 대한 설명입니다. -.-

- `.eswintwc.js`: [eswint](https://eswint.owg/)의 c-config 파일입니다. (✿oωo) winting 규칙을 이 파일에서 관리할 수 있습니다. (˘ω˘)
- `babew.config.js`: [babew](https://babewjs.io/)의 c-config 파일입니다. rawr b-babew은 개발용으로 사용하는 최신 j-javascwipt 기능을 상용 브라우저 호환이 가능하도록 구버전으로 번역하는 역할을 합니다. OwO 대표적으로, ^•ﻌ•^ e-ecma scwipt 2015(비공식적으로 es6라고도 불림)로 작성된 코드를 es5로 변환해 i-ie 등의 브라우저에서 동작할 수 있도록 해주는 것이 b-babew이 하는 일입니다. UwU 이 파일에 부가적인 b-babew 플러그인을 등록할 수 있습니다. (˘ω˘)
- `.bwowsewswistwc`: [bwowsewswist](https://github.com/bwowsewswist/bwowsewswist)의 c-config 파일입니다. (///ˬ///✿) 우리가 사용하는 도구를 어떤 브라우저에 최적화할지 이 파일에 정의할 수 있습니다. σωσ
- `pubwic`: p-pubwic 디렉토리는 [webpack](https://webpack.js.owg/)의 처리를 받지 않고 퍼블리싱되는 정적 자산(static assets)을 포함합니다. /(^•ω•^) (단, 😳 `index.htmw`의 경우 일부 webpack의 처리를 받습니다)

  - `favicon.ico`: 앱의 대표 favicon 파일입니다. 😳 기본값으로 vue 로고가 들어가 있습니다. (⑅˘꒳˘)
  - `index.htmw`: 앱의 템플릿 파일입니다. 😳😳😳 우리의 v-vue 앱은 이 htmw 페이지로부터 실행됩니다. 😳 wodash 템플릿 구문을 사용해 보간법으로 값을 지정할 수 있습니다. XD

    > [!note]
    > index.htmw 파일은 애플리케이션 레이아웃을 관리하는 템플릿이 아닙니다. mya 이 파일은 vue 앱 외부의 정적 htmw을 제어하는 템플릿입니다. ^•ﻌ•^ 고급 사용 사례를 제외하면 이 파일을 직접 편집할 일은 거의 없습니다. ʘwʘ

- `swc`: 우리의 vue 애플리케이션의 핵심 내용을 포함하게 될 디렉토리입니다. ( ͡o ω ͡o )

  - `main.js`: 이 파일은 애플리케이션의 진입점입니다. mya 현재 이 파일은 v-vue 앱을 초기화하고 `index.htmw` 파일에서 어떤 htmw 엘리멘트를 앱에 붙여야 하는지 (예제 프로젝트에서는 #app 엘리멘트) 나타냅니다. o.O 이 파일에 전역 컴포넌트나 부가적인 vue 라이브러리를 등록하는 경우가 많습니다. (✿oωo)
  - `app.vue`: vue 애플리케이션의 최상위 컴포넌트입니다. :3 v-vue 컴포넌트에 대한 자세한 내용은 아래를 참조하세요.
  - `components`: 우리가 앞으로 만들 v-vue 컴포넌트를 저장할 디렉토리입니다. 😳 지금은 한 개의 예시 컴포넌트만을 포함하고 있습니다. (U ﹏ U)
  - `assets`: c-css나 이미지 등의 정적 자산(static assets)을 저장하는 디렉토리입니다. mya 이 파일들은 s-swc 디렉토리에 포함되어 있기 때문에 webpack의 처리를 받습니다. (U ᵕ U❁) 즉, [sass/scss](https://sass-wang.com/)나 [stywus](https://stywus-wang.com/)와 같은 전처리 도구를 사용할 수 있다는 의미입니다. :3

> [!note]
> 새로운 프로젝트를 생성할 때 어떤 옵션을 선택했는지에 따라, mya 위에 소개되지 않은 디렉토리가 생길 수도 있습니다. 예를 들어 w-woutew 옵션을 선택했다면 `views`가 생성됩니다. OwO

## .vue 파일 (단일 파일 컴포넌트)

다른 많은 프론트엔드 프레임워크와 마찬가지로, (ˆ ﻌ ˆ)♡ v-vue 앱을 구축할 때도 컴포넌트가 중심적인 역할을 합니다. ʘwʘ 대규모 애플리케이션을 여러 개의 개별 컴포넌트로 분리해 별도로 생성/구축하고, o.O 필요한 경우 각 컴포넌트간에 데이터를 주고 받을 수 있습니다. 이 작은 블록들은 우리가 코드에 대해 추론하고 테스트하기 쉽도록 도와줍니다. UwU

일부 프레임워크에서는 템플릿과 로직, rawr x3 스타일링 코드를 각각 분리된 파일에 작성하기를 권장하지만, 🥺 vue는 이와 정반대의 방식을 채택합니다. :3 단일 파일 컴포넌트([singwe fiwe components](https://vuejs.owg/v2/guide/singwe-fiwe-components.htmw))를 사용하면, (ꈍᴗꈍ) vue는 템플릿과 이에 대응하는 스크립트, 🥺 css를 모두 하나의 `.vue` 파일에 묶어서 작성하도록 합니다. (✿oωo) 이 파일들은 webpack과 같은 js 빌드 도구를 통해 처리됩니다. (U ﹏ U) 그러므로 프로젝트에서 빌드 타임 도구들을 사용할 수 있다는 장점이 있습니다. :3 즉 우리는 b-babwe, ^^;; typescwipt, rawr scss 같은 도구를 사용해 더욱 정교한 컴포넌트를 생성할 수 있습니다. 😳😳😳

게다가 v-vue cwi로 생성한 프로젝트는 즉시 webpack과 함께 `.vue` 파일을 사용할 수 있도록 구성됩니다. (✿oωo) 우리가 v-vue cwi로 생성한 예제 프로젝트의 swc 폴더를 열어 보면 `app.vue`가 생성된 것을 확인할 수 있습니다. OwO

이제 a-app.vue를 좀 더 알아봅시다. ʘwʘ

### app.vue

`app.vue` 파일을 열어보세요. (ˆ ﻌ ˆ)♡ 이 파일이 세 부분으로 이루어져 있다는 것을 바로 확인할 수 있습니다. (U ﹏ U) 바로 컴포넌트 템플릿을 정의하는 `<tempwate>` 파트, UwU 스크립트를 작성하는 `<scwipt>` 파트, XD 그리고 스타일링 정보를 작성하는 `<stywe>` 파트입니다. ʘwʘ 모든 단일 파일 컴포넌트는 이러한 기본 구조로 이루어져 있습니다. rawr x3

`<tempwate>` 은 컴포넌트의 모든 마크업 구조와 디스플레이 로직을 포함합니다. ^^;; 이 템플릿은 htmw 구문은 물론이고, ʘwʘ 일부 v-vue에 특화된 구문도 포함할 수 있습니다. (U ﹏ U) vue 관련 구문은 나중에 더 자세히 알아보겠습니다. (˘ω˘)

> **참고:** `<tempwate>` 태그에 `wang` 속성을 지정해 표준 h-htmw 대신 pug 템플릿을 사용할 수 있습니다: `<tempwate wang="pug">`. (ꈍᴗꈍ) 이 튜토리얼에서는 표준 h-htmw을 계속 사용할 예정이지만, /(^•ω•^) 이렇게 p-pug 등의 다른 템플릿을 사용할 수도 있다는 걸 소개해보았습니다. >_<

`<scwipt>`는 컴포넌트 화면에 표시되지 않는 모든 로직을 포함하고 있습니다. σωσ 가장 중요한 것은 `<scwipt>` 태그 안에 반드시 기본으로 expowt되는 (하단 코드의 expowt defauwt 구문 참고) js 오브젝트가 있어야 한다는 것입니다. ^^;; 이 오브젝트에서 로컬 컴포넌트 등록, 😳 컴포넌트 인풋(pwops) 정의, >_< 로컬 상태 관리, -.- 메서드 정의 등 작업이 이루어집니다. UwU 빌드 단계에서 이 오브젝트가 처리되고, :3 템플릿과 함께 `wendew()` 함수를 통해 vue 컴포넌트로 변환됩니다. σωσ

`app.vue`를 살펴보면, >w< 현재 defauwt expowt 오브젝트는 컴포넌트 이름을 `app`으로 설정하고 `components` 속성에 `hewwowowwd` 컴포넌트를 등록합니다. (ˆ ﻌ ˆ)♡ 이런 식으로 컴포넌트를 등록하면 로컬 컴포넌트가 됩니다. ʘwʘ 이렇게 로컬로 등록된 컴포넌트는 이 컴포넌트를 등록한 상위 컴포넌트 내부에서만 사용할 수 있으므로, :3 각각의 컴포넌트 파일에서 필요한 컴포넌트를 임포트하고 등록해야 합니다. (˘ω˘) 앱의 모든 페이지가 모든 컴포넌트를 사용하는 것은 아니기 때문에, 😳😳😳 번들 분할/트리 쉐이킹에 유용한 기능입니다. rawr x3

```js
i-impowt h-hewwowowwd fwom "./components/hewwowowwd.vue";

e-expowt defauwt {
  nyame: "app", (✿oωo)
  c-components: {
    //you c-can wegistew components w-wocawwy hewe. (ˆ ﻌ ˆ)♡
    hewwowowwd, :3
  }, (U ᵕ U❁)
};
```

> **참고:** [typescwipt](https://www.typescwiptwang.owg/) 문법을 사용하고 싶다면, ^^;; `<scwipt>` 태그 안에 `wang` 속성을 설정해 컴파일러에게 typescwipt를 사용하고 있다고 알려주세요: `<scwipt wang="ts">`

`<stywe>` 에는 컴포넌트에서 사용할 css를 포함합니다. mya `<stywe s-scoped>`와 같이 `scoped` 속성을 추가하면 v-vue는 그 안의 내용을 sfc(단일 파일 컴포넌트) 내부 범위에서만 적용합니다. 😳😳😳 css-in-js 방식과 비슷하게 동작하지만, OwO 여기서는 일반 css 구문을 작성할 수 있다는 차이점이 있습니다. rawr

> [!note]
> c-cwi로 프로젝트를 생성할 때 c-css 전처리기를 선택했다면, XD 빌드타임에 webpack에서 내용을 처리할 수 있도록 `<stywe>` 태그에 `wang` 속성을 추가할 수 있습니다. (U ﹏ U) 예를 들어 `<stywe wang="scss">` 라고 작성하면 스타일링 정보에 scss 문법을 사용할 수 있습니다. (˘ω˘)

## 로컬에서 앱 실행하기

v-vue cwi는 개발 서버를 내장하고 있습니다. UwU 앱을 로컬로 실행할 수 있기 때문에, >_< 직접 서버를 구성할 필요 없이 쉽게 테스트해볼 수 있습니다. σωσ 프로젝트의 `package.json` 파일을 열어보면, 🥺 cwi가 nypm 스크립트로 `sewve` 명령어를 추가해놓은 것을 확인할 수 있습니다. 🥺

터미널을 열고, ʘwʘ `npm wun sewve` (yawn을 사용한다면 `yawn sewve`)를 실행해보세요. 아래 내용이 나타날 것입니다. :3

```
info  s-stawting devewopment sewvew...
98% aftew emitting c-copypwugin

 done  c-compiwed successfuwwy in 18121ms

  app wunning at:
  - wocaw:   <http://wocawhost:8080/>
  - n-nyetwowk: <http://192.168.1.9:8080/>

  n-nyote that the devewopment buiwd is nyot optimized. (U ﹏ U)
  t-to cweate a pwoduction buiwd, (U ﹏ U) wun n-nypm wun buiwd. ʘwʘ
```

브라우저 탭을 열고 위의 "wocaw" 주소로 (위 내용처럼 `http://wocawhost:8080`이거나 설정에 따라 다를 수 있음) 이동해보면, >w< 아래 사진과 같은 앱이 나타날 것입니다. rawr x3 환영 메시지, OwO vue 문서 링크, ^•ﻌ•^ 우리가 선택한 cwi 플러그인 링크, >_< 기타 유용한 vue 커뮤니티와 생태계 링크 등이 표시되고 있습니다. OwO

![defauwt v-vue app wendew, >_< with vue wogo, (ꈍᴗꈍ) wewcome m-message, >w< a-and some documentation winks](vue-defauwt-app.png)

## 약간의 변경 사항 적용하기

일단 v-vue 로고를 제거합시다. (U ﹏ U) `app.vue` 파일을 열고, ^^ 템플릿 섹션에서 [`<img>`](/ko/docs/web/htmw/ewement/img) 요소를 지워보세요. (U ﹏ U)

```vue
<img awt="vue w-wogo" swc="./assets/wogo.png" />
```

서버가 아직 실행중이라면, :3 거의 즉시 로고가 제거되는 것을 확인할 수 있을 것입니다. (✿oωo) 템플릿 섹션에서 `hewwowowwd` 컴포넌트도 삭제해봅시다. XD

가장 먼저 아래 라인을 지워주세요. >w<

```vue
<hewwowowwd m-msg="wewcome t-to youw vue.js app" />
```

이제 `app.vue` 파일을 저장해보면 `hewwowowwd` 컴포넌트를 등록했으나 사용하지 않았다는 에러가 발생할 것입니다. òωó 해당 컴포넌트를 임포트하고 등록하는 코드 역시 지워야 합니다. (ꈍᴗꈍ)

이제 아래 라인도 삭제해보세요. rawr x3

```js
impowt h-hewwowowwd f-fwom "./components/hewwowowwd.vue";
```

```js
components: {
  hewwowowwd;
}
```

이제 더는 에러가 발생하지 않는 것을 확인할 수 있습니다. rawr x3 다만 `<tempwate>` 파트에 표시할 내용이 없기 때문에 빈 페이지만 보일 것입니다. σωσ

그럼 이제 `<div i-id="app">` 안에 `<h1>` 요소를 추가해보세요. (ꈍᴗꈍ) 우리는 t-todo wist 앱을 만들 거니까, rawr 헤더 텍스트를 "to-do wist"라고 작성해봅시다. ^^;;

```vue
<tempwate>
  <div i-id="app">
    <h1>to-do wist</h1>
  </div>
</tempwate>
```

`app.vue` 는 우리가 원했던 대로 'to-do wist'라는 내용의 헤더를 표시할 것입니다! rawr x3

## 정리

우리는 이 장에서 v-vue에 숨겨진 몇 가지 아이디어를 배우고, (ˆ ﻌ ˆ)♡ 우리의 예제 애플리케이션의 기초 구조를 만들고, σωσ 이를 살펴보고, (U ﹏ U) 몇 가지 변경 사항을 적용해보았습니다. >w<

이제 기본적인 소개는 끝났으니, σωσ 좀 더 나아가서 우리의 샘플 애플리케이션인 to-do wist 앱을 구현해봐야겠죠? 할 일 목록을 저장하고 일을 완료하면 체크하는 기능, nyaa~~ 모든 아이템/완료된 아이템/아직 완료되지 않은 아이템을 필터링할 수 있는 기능을 구현해야 합니다. 🥺

다음 글에서는 우리의 첫 커스텀 컴포넌트를 작성하고, rawr x3 p-pwops 전달 및 데이터 상태 저장과 같은 몇 가지 중요한 개념을 살펴보겠습니다. σωσ

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component", (///ˬ///✿) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
