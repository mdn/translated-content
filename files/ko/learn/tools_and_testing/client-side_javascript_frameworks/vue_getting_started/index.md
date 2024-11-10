---
title: Vue 시작하기
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

이제 우리가 배울 세 번째 프레임워크인 Vue를 소개하겠습니다. 이 글에서 우리는 Vue에 대한 간단한 배경지식을 얻고, Vue를 설치하고 새로운 프로젝트를 만드는 방법을 배웁니다. 또한 전체 프로젝트와 컴포넌트의 주요 구조를 공부하고, 로컬에서 프로젝트를 실행하는 방법을 살펴본 후 예제 프로젝트를 구성해봅니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 요구 사항:</th>
      <td>
        <p>
          코어 <a href="/ko/docs/Learn/HTML">HTML</a>,
          <a href="/ko/docs/Learn/CSS">CSS</a> 및
          <a href="/ko/docs/Learn/JavaScript">JavaScript</a> 언어에 익숙함.
          터미널/커맨드라인에 대한 지식.<br /><br />Vue 컴포넌트는 앱의 데이터를
          관리하는 JavaScript 객체와 기본 DOM 구조에 매핑되는 HTML 기반 템플릿
          구문을 조합해 작성된다. Vue를 설치하고 고급 기능(예: 단일 파일
          컴포넌트, render 함수 등)을 사용하려면 node + npm이 설치된 터미널이
          필요하다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        Vue 로컬 개발 환경을 구성한다. 스타터 앱을 만들고 기본적인 동작 원리를
        이해한다.
      </td>
    </tr>
  </tbody>
</table>

## 더 선명한 Vue

Vue는 최신의 JavaScript 프레임워크로 [점진적 향상](/ko/docs/Glossary/Progressive_Enhancement)을 위한 유용한 기능을 제공합니다. 다른 많은 프레임워크와는 달리, Vue를 사용하면 기존의 HTML 코드를 향상시킬 수 있습니다. 이를 통해 아주 쉽게 [JQuery](/ko/docs/Glossary/jQuery) 등의 라이브러리를 Vue로 대체할 수 있습니다.

물론 Vue를 이용해 완전한 단일 페이지 애플리케이션(SPA)을 작성할 수도 있습니다. 이렇게 하면 전체적으로 Vue가 관리하는 마크업을 만들 수 있고, 복잡한 애플리케이션에 대한 개발자 경험과 성능을 향상시킬 수 있습니다. 필요하다면 클라이언트 사이드 라우팅 및 상태 관리 라이브러리를 활용할 수 있다는 장점도 있습니다. Vue는 이와 같은 클라이언트 사이드 라우팅이나 상태 관리에 대해 "미들 그라운드" 접근 방식을 취합니다. Vue 코어 팀은 이런 기능을 위한 (vue-router, vuex 등의) 라이브러리를 유지보수하고 있지만, Vue에 직접 번들로 제공하지는 않습니다. 그러므로 우리가 만들 애플리케이션에 더 적합한 라우팅/상태 관리 라이브러리가 있다면 그것을 선택할 수 있습니다.

Vue는 애플리케이션에 Vue를 점진적으로 통합시킬 수 있도록 하며, 마크업 작성에 대해서도 점진적 접근법을 제공합니다. 다른 많은 프레임워크처럼, Vue에서도 컴포넌트를 통해 재사용 가능한 마크업 블록을 생성할 수 있습니다. 대부분의 경우 Vue 컴포넌트는 특별한 HTML 템플릿 구문으로 작성됩니다. HTML에서 가능한 것 이상의 제어가 필요하다면, JSX나 일반 JavaScript 함수를 이용해 컴포넌트를 정의할 수 있습니다.

이 튜토리얼을 진행하는 동안, 다른 탭에 [Vue 가이드](https://vuejs.org/v2/guide/) 와 [API 문서](https://vuejs.org/v2/api/)를 열어 두고 각 항목에 대해 더 자세한 정보가 필요할 때 참조하세요. Vue와 다른 프레임워크 간의 비교(편향될 가능성 있음)는 [Vue 문서: 다른 프레임워크와의 비교](https://vuejs.org/v2/guide/comparison.html)를 참조하세요.

## 설치하기

기존 사이트에서 Vue를 사용하려면 아래 [`<script>`](/ko/docs/Web/HTML/Element/script) 요소 중 하나를 페이지에 추가하면 됩니다. 이 한 줄을 추가하는 것만으로 기존의 사이트에서 Vue를 사용할 수 있습니다. Vue가 자칭 '프로그레시브 프레임워크'임을 강조하는 이유가 바로 이것입니다. JQuery 등의 라이브러리를 사용하는 기존 프로젝트를 Vue로 마이그레이션하려고 할 때 아주 좋은 옵션입니다. 이 방식으로 속성, 커스텀 컴포넌트, 데이터 관리 등 수많은 Vue의 핵심 기능을 사용할 수 있게 됩니다.

- 개발 스크립트 (최적화되지 않음. 콘솔 경고 포함. 개발용으로 좋음.)

  ```vue
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  ```

- 상용 스크립트 (최적화 버전. 콘솔 경고 최소화. 업데이트로 인해 사이트가 영향을 받지 않도록 버전 번호를 명시하는 것이 좋다.)

  ```vue
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  ```

하지만 이 방식은 한계가 있습니다. 좀 더 복잡한 앱을 구성하려면 [Vue NPM package](https://www.npmjs.com/package/vue)를 사용하는 것이 좋습니다. Vue NPM 패키지를 사용하면 Vue의 고급 기능을 이용할 수 있고, WebPack 같은 번들 도구를 활용할 수 있습니다. 그리고 Vue CLI를 사용하면 개발 과정을 간소화해 Vue 앱을 더욱 쉽게 구성할 수 있습니다. npm 패키지와 CLI를 사용하기 위해 필요한 사항은 다음과 같습니다.

1. Node.js 8.11 이상 설치
2. npm 또는 yarn

> [!NOTE]
> 아직 위 항목을 설치하지 않았다면, [more about installing npm and Node.js](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#Adding_powerups) 를 참고하세요.

CLI를 설치하기 위해 아래 커맨드를 터미널에서 실행하세요.
npm을 사용하는 경우:

```bash
npm install --global @vue/cli
```

yarn을 사용하는 경우:

```bash
yarn global add @vue/cli
```

설치가 모두 완료되면, 프로젝트를 생성할 디렉토리에서 터미널을 열고 `vue create <프로젝트 이름>` 를 실행해봅시다. 그러면 Vue CLI는 우리가 사용할 수 있는 프로젝트 구성 목록을 보여줄 것입니다. 미리 설정되어 있는 몇 가지 구성 중 골라서 사용해도 되고, 모든 것을 직접 구성할 수도 있습니다. 이 옵션을 통해 우리는 TypeScript, linting, vue-router, 테스트 등의 항목을 구성할 수 있습니다.

더 자세한 내용은 아래에서 살펴보겠습니다.

## 새로운 프로젝트 시작하기

Vue의 다양한 기능을 알아보기 위해, 예제로 할 일 목록(todo list) 앱을 만들어보려고 합니다. Vue CLI를 사용해서 새로운 앱을 구성해봅시다. 아래 내용을 순서대로 따라해보세요:

1. 터미널에서 `cd <디렉토리>`를 입력해 샘플 앱을 만들 위치로 이동하고, `vue create moz-todo-vue`를 실행하세요.
2. 방향키와

   <kbd>Enter</kbd>

   를 사용해 "Manually select features" 옵션을 선택하세요.

3. 첫 번째 메뉴에서 프로젝트에 포함하고 싶은 기능들을 선택할 수 있습니다. "Babel"과 "Linter / Formatter"가 선택되어 있나요? 선택되어 있지 않다면 방향키와 스페이스바를 사용해 선택해주세요. 그리고

   <kbd>Enter</kbd>

   를 누릅니다.

4. 다음으로 linter / formatter 구성을 선택하겠습니다. "Eslint with error prevention only"로 이동하고 다시

   <kbd>Enter</kbd>

   를 눌러주세요. 흔히 생기는 에러를 잡는데 도움을 주면서도 너무 엄격하지는 않은 옵션을 선택했습니다.

5. 다음은 자동 lint를 어떤 방식으로 하고 싶은지 묻는 메세지가 표시될 것입니다. "Lint on save"를 선택하세요. 우리가 프로젝트 내부의 파일을 저장할 때 에러를 체크하라는 의미입니다. 이제

   <kbd>Enter</kbd>

   를 누르세요.

6. 이제 구성 파일을 어떻게 관리할지 선택해야 합니다. "In dedicated config files" 옵션을 선택하면 ESLint와 같은 것들의 구성 설정을 그들의 전용 파일에 넣게 됩니다. "In package.json" 옵션의 경우, 모든 구성 설정을 앱의 `package.json` 파일에 넣습니다. 우선 지금은 "In dedicated config files" 옵션을 선택하고

   <kbd>Enter</kbd>

   를 누릅시다.

7. 마지막으로, 지금까지 설정한 내용을 다음에 다시 사용하고 싶은지(현재 설정을 사전 설정 목록에 추가하고 싶은지) 묻는 메세지가 표시됩니다. 이 부분은 여러분이 하고 싶은대로 하시면 돼요. 만약 이 설정을 다음에도 다시 사용하고 싶다면

   <kbd>y</kbd>

   를, 아니라면

   <kbd>n</kbd>

   을 누르세요.

이제 CLI가 우리의 프로젝트를 위한 발판을 만들기 시작하고 우리의 앱을 위한 모든 디펜던시를 설치할 것입니다.

만약 이전에 한 번도 Vue CLI를 사용해본 적 없다면, 위에서 설명하지 않은 질문이 한 가지 더 표시될 것입니다. 패키지 매니저를 고르라는 메세지가 나타나면, 여러분이 선호하는 것을 고르면 됩니다. 지금부터는 여러분이 선택한 패키지 매니저(npm / yarn)가 기본값으로 설정됩니다. 만약 이 기본값을 변경하고 싶다면 `vue create` 커맨드를 실행할 때 `--packageManager=<package-manager>` 플래그를 추가하면 됩니다. 다시 말해, 만약 여러분이 이전에 yarn을 사용했지만 다음에는 npm을 사용하도록 프로젝트를 생성하고 싶다면 `vue create moz-todo-vue --packageManager=npm`을 실행하면 됩니다.

> [!NOTE]
> 모든 옵션을 여기서 설명하지는 않았습니다. 자세한 내용은 [find more information on the CLI](https://cli.vuejs.org) 를 참고하세요.

## 프로젝트 구조

위의 모든 내용이 성공적으로 진행됐다면, Vue CLI가 우리의 프로젝트에 사용할 디렉토리와 파일을 생성했을 것입니다. 다음은 그 중 가장 중요한 파일과 디렉토리에 대한 설명입니다.

- `.eslintrc.js`: [eslint](https://eslint.org/)의 config 파일입니다. linting 규칙을 이 파일에서 관리할 수 있습니다.
- `babel.config.js`: [Babel](https://babeljs.io/)의 config 파일입니다. Babel은 개발용으로 사용하는 최신 JavaScript 기능을 상용 브라우저 호환이 가능하도록 구버전으로 번역하는 역할을 합니다. 대표적으로, ECMA Script 2015(비공식적으로 ES6라고도 불림)로 작성된 코드를 ES5로 변환해 IE 등의 브라우저에서 동작할 수 있도록 해주는 것이 Babel이 하는 일입니다. 이 파일에 부가적인 babel 플러그인을 등록할 수 있습니다.
- `.browserslistrc`: [Browserslist](https://github.com/browserslist/browserslist)의 config 파일입니다. 우리가 사용하는 도구를 어떤 브라우저에 최적화할지 이 파일에 정의할 수 있습니다.
- `public`: public 디렉토리는 [Webpack](https://webpack.js.org/)의 처리를 받지 않고 퍼블리싱되는 정적 자산(static assets)을 포함합니다. (단, `index.html`의 경우 일부 Webpack의 처리를 받습니다)

  - `favicon.ico`: 앱의 대표 favicon 파일입니다. 기본값으로 Vue 로고가 들어가 있습니다.
  - `index.html`: 앱의 템플릿 파일입니다. 우리의 Vue 앱은 이 HTML 페이지로부터 실행됩니다. lodash 템플릿 구문을 사용해 보간법으로 값을 지정할 수 있습니다.

    > [!NOTE]
    > index.html 파일은 애플리케이션 레이아웃을 관리하는 템플릿이 아닙니다. 이 파일은 Vue 앱 외부의 정적 HTML을 제어하는 템플릿입니다. 고급 사용 사례를 제외하면 이 파일을 직접 편집할 일은 거의 없습니다.

- `src`: 우리의 Vue 애플리케이션의 핵심 내용을 포함하게 될 디렉토리입니다.

  - `main.js`: 이 파일은 애플리케이션의 진입점입니다. 현재 이 파일은 Vue 앱을 초기화하고 `index.html` 파일에서 어떤 HTML 엘리멘트를 앱에 붙여야 하는지 (예제 프로젝트에서는 #app 엘리멘트) 나타냅니다. 이 파일에 전역 컴포넌트나 부가적인 Vue 라이브러리를 등록하는 경우가 많습니다.
  - `App.vue`: Vue 애플리케이션의 최상위 컴포넌트입니다. Vue 컴포넌트에 대한 자세한 내용은 아래를 참조하세요.
  - `components`: 우리가 앞으로 만들 Vue 컴포넌트를 저장할 디렉토리입니다. 지금은 한 개의 예시 컴포넌트만을 포함하고 있습니다.
  - `assets`: CSS나 이미지 등의 정적 자산(static assets)을 저장하는 디렉토리입니다. 이 파일들은 src 디렉토리에 포함되어 있기 때문에 Webpack의 처리를 받습니다. 즉, [Sass/SCSS](https://sass-lang.com/)나 [Stylus](https://stylus-lang.com/)와 같은 전처리 도구를 사용할 수 있다는 의미입니다.

> [!NOTE]
> 새로운 프로젝트를 생성할 때 어떤 옵션을 선택했는지에 따라, 위에 소개되지 않은 디렉토리가 생길 수도 있습니다. 예를 들어 router 옵션을 선택했다면 `views`가 생성됩니다.

## .vue 파일 (단일 파일 컴포넌트)

다른 많은 프론트엔드 프레임워크와 마찬가지로, Vue 앱을 구축할 때도 컴포넌트가 중심적인 역할을 합니다. 대규모 애플리케이션을 여러 개의 개별 컴포넌트로 분리해 별도로 생성/구축하고, 필요한 경우 각 컴포넌트간에 데이터를 주고 받을 수 있습니다. 이 작은 블록들은 우리가 코드에 대해 추론하고 테스트하기 쉽도록 도와줍니다.

일부 프레임워크에서는 템플릿과 로직, 스타일링 코드를 각각 분리된 파일에 작성하기를 권장하지만, Vue는 이와 정반대의 방식을 채택합니다. 단일 파일 컴포넌트([Single File Components](https://vuejs.org/v2/guide/single-file-components.html))를 사용하면, Vue는 템플릿과 이에 대응하는 스크립트, CSS를 모두 하나의 `.vue` 파일에 묶어서 작성하도록 합니다. 이 파일들은 Webpack과 같은 JS 빌드 도구를 통해 처리됩니다. 그러므로 프로젝트에서 빌드 타임 도구들을 사용할 수 있다는 장점이 있습니다. 즉 우리는 Bable, TypeScript, SCSS 같은 도구를 사용해 더욱 정교한 컴포넌트를 생성할 수 있습니다.

게다가 Vue CLI로 생성한 프로젝트는 즉시 Webpack과 함께 `.vue` 파일을 사용할 수 있도록 구성됩니다. 우리가 Vue CLI로 생성한 예제 프로젝트의 src 폴더를 열어 보면 `App.vue`가 생성된 것을 확인할 수 있습니다.

이제 App.vue를 좀 더 알아봅시다.

### App.vue

`App.vue` 파일을 열어보세요. 이 파일이 세 부분으로 이루어져 있다는 것을 바로 확인할 수 있습니다. 바로 컴포넌트 템플릿을 정의하는 `<template>` 파트, 스크립트를 작성하는 `<script>` 파트, 그리고 스타일링 정보를 작성하는 `<style>` 파트입니다. 모든 단일 파일 컴포넌트는 이러한 기본 구조로 이루어져 있습니다.

`<template>` 은 컴포넌트의 모든 마크업 구조와 디스플레이 로직을 포함합니다. 이 템플릿은 HTML 구문은 물론이고, 일부 Vue에 특화된 구문도 포함할 수 있습니다. Vue 관련 구문은 나중에 더 자세히 알아보겠습니다.

> **참고:** `<template>` 태그에 `lang` 속성을 지정해 표준 HTML 대신 Pug 템플릿을 사용할 수 있습니다: `<template lang="pug">`. 이 튜토리얼에서는 표준 HTML을 계속 사용할 예정이지만, 이렇게 Pug 등의 다른 템플릿을 사용할 수도 있다는 걸 소개해보았습니다.

`<script>`는 컴포넌트 화면에 표시되지 않는 모든 로직을 포함하고 있습니다. 가장 중요한 것은 `<script>` 태그 안에 반드시 기본으로 export되는 (하단 코드의 export default 구문 참고) JS 오브젝트가 있어야 한다는 것입니다. 이 오브젝트에서 로컬 컴포넌트 등록, 컴포넌트 인풋(props) 정의, 로컬 상태 관리, 메서드 정의 등 작업이 이루어집니다. 빌드 단계에서 이 오브젝트가 처리되고, 템플릿과 함께 `render()` 함수를 통해 Vue 컴포넌트로 변환됩니다.

`App.vue`를 살펴보면, 현재 default export 오브젝트는 컴포넌트 이름을 `app`으로 설정하고 `components` 속성에 `HelloWorld` 컴포넌트를 등록합니다. 이런 식으로 컴포넌트를 등록하면 로컬 컴포넌트가 됩니다. 이렇게 로컬로 등록된 컴포넌트는 이 컴포넌트를 등록한 상위 컴포넌트 내부에서만 사용할 수 있으므로, 각각의 컴포넌트 파일에서 필요한 컴포넌트를 임포트하고 등록해야 합니다. 앱의 모든 페이지가 모든 컴포넌트를 사용하는 것은 아니기 때문에, 번들 분할/트리 쉐이킹에 유용한 기능입니다.

```js
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    //You can register components locally here.
    HelloWorld,
  },
};
```

> **참고:** [TypeScript](https://www.typescriptlang.org/) 문법을 사용하고 싶다면, `<script>` 태그 안에 `lang` 속성을 설정해 컴파일러에게 TypeScript를 사용하고 있다고 알려주세요: `<script lang="ts">`

`<style>` 에는 컴포넌트에서 사용할 CSS를 포함합니다. `<style scoped>`와 같이 `scoped` 속성을 추가하면 Vue는 그 안의 내용을 SFC(단일 파일 컴포넌트) 내부 범위에서만 적용합니다. CSS-in-JS 방식과 비슷하게 동작하지만, 여기서는 일반 CSS 구문을 작성할 수 있다는 차이점이 있습니다.

> [!NOTE]
> CLI로 프로젝트를 생성할 때 CSS 전처리기를 선택했다면, 빌드타임에 Webpack에서 내용을 처리할 수 있도록 `<style>` 태그에 `lang` 속성을 추가할 수 있습니다. 예를 들어 `<style lang="scss">` 라고 작성하면 스타일링 정보에 SCSS 문법을 사용할 수 있습니다.

## 로컬에서 앱 실행하기

Vue CLI는 개발 서버를 내장하고 있습니다. 앱을 로컬로 실행할 수 있기 때문에, 직접 서버를 구성할 필요 없이 쉽게 테스트해볼 수 있습니다. 프로젝트의 `package.json` 파일을 열어보면, CLI가 npm 스크립트로 `serve` 명령어를 추가해놓은 것을 확인할 수 있습니다.

터미널을 열고, `npm run serve` (yarn을 사용한다면 `yarn serve`)를 실행해보세요. 아래 내용이 나타날 것입니다.

```
INFO  Starting development server...
98% after emitting CopyPlugin

 DONE  Compiled successfully in 18121ms

  App running at:
  - Local:   <http://localhost:8080/>
  - Network: <http://192.168.1.9:8080/>

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

브라우저 탭을 열고 위의 "local" 주소로 (위 내용처럼 `http://localhost:8080`이거나 설정에 따라 다를 수 있음) 이동해보면, 아래 사진과 같은 앱이 나타날 것입니다. 환영 메시지, Vue 문서 링크, 우리가 선택한 CLI 플러그인 링크, 기타 유용한 Vue 커뮤니티와 생태계 링크 등이 표시되고 있습니다.

![default vue app render, with vue logo, welcome message, and some documentation links](vue-default-app.png)

## 약간의 변경 사항 적용하기

일단 Vue 로고를 제거합시다. `App.vue` 파일을 열고, 템플릿 섹션에서 [`<img>`](/ko/docs/Web/HTML/Element/img) 요소를 지워보세요.

```vue
<img alt="Vue logo" src="./assets/logo.png" />
```

서버가 아직 실행중이라면, 거의 즉시 로고가 제거되는 것을 확인할 수 있을 것입니다. 템플릿 섹션에서 `HelloWorld` 컴포넌트도 삭제해봅시다.

가장 먼저 아래 라인을 지워주세요.

```vue
<HelloWorld msg="Welcome to Your Vue.js App" />
```

이제 `App.vue` 파일을 저장해보면 `HelloWorld` 컴포넌트를 등록했으나 사용하지 않았다는 에러가 발생할 것입니다. 해당 컴포넌트를 임포트하고 등록하는 코드 역시 지워야 합니다.

이제 아래 라인도 삭제해보세요.

```js
import HelloWorld from "./components/HelloWorld.vue";
```

```js
components: {
  HelloWorld;
}
```

이제 더는 에러가 발생하지 않는 것을 확인할 수 있습니다. 다만 `<template>` 파트에 표시할 내용이 없기 때문에 빈 페이지만 보일 것입니다.

그럼 이제 `<div id="app">` 안에 `<h1>` 요소를 추가해보세요. 우리는 todo list 앱을 만들 거니까, 헤더 텍스트를 "To-Do List"라고 작성해봅시다.

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` 는 우리가 원했던 대로 'To-Do List'라는 내용의 헤더를 표시할 것입니다!

## 정리

우리는 이 장에서 Vue에 숨겨진 몇 가지 아이디어를 배우고, 우리의 예제 애플리케이션의 기초 구조를 만들고, 이를 살펴보고, 몇 가지 변경 사항을 적용해보았습니다.

이제 기본적인 소개는 끝났으니, 좀 더 나아가서 우리의 샘플 애플리케이션인 To-Do List 앱을 구현해봐야겠죠? 할 일 목록을 저장하고 일을 완료하면 체크하는 기능, 모든 아이템/완료된 아이템/아직 완료되지 않은 아이템을 필터링할 수 있는 기능을 구현해야 합니다.

다음 글에서는 우리의 첫 커스텀 컴포넌트를 작성하고, props 전달 및 데이터 상태 저장과 같은 몇 가지 중요한 개념을 살펴보겠습니다.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
