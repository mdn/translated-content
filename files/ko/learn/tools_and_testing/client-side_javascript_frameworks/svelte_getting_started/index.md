---
title: Svelte 시작하기
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

이 문서에는 [Svelte 프레임워크](https://svelte.dev/)에 대한 빠른 소개를 제공합니다.
Svelte가 어떻게 작동하는지, 지금까지 본 나머지 프레임워크 및 도구와 Svelte가 어떻게 다른지 살펴보겠습니다. 그런 다음 개발 환경을 설정하고, 샘플 앱을 만들고, 프로젝트 구조를 이해하고, 로컬에서 실행하고 프로덕션용으로 빌드하는 방법을 배웁니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제사항:</th>
      <td>
        <p>
          적어도
          <a href="/ko/docs/Learn/HTML">HTML</a>,
          <a href="/ko/docs/Learn/CSS">CSS</a>, and
          <a href="/ko/docs/Learn/JavaScript">JavaScript</a>
          언어의 사용에 익숙하기를 권장합니다. 그리고
          <a
            href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >터미널/커맨트 라인</a
          >의 사용법에 대해서도 지식이 있어야합니다.
        </p>
        <p>
        Svelte 컴파일러는 우리의 소스로 부터 최소화 및 최적화된 자바스크립트 코드를 생성합니다.
        당신은 앱을 컴파일하고 빌드하기 위한 노드와 npm이 설치된 터미널이 필요합니다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
      로컬 Svelte 개발 환경을 설정하기 위해, 시작하는 앱을 생성 및 빌드하고 Svelte가 어떻게 동작하는지에 대해서 이해합니다.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: 풍부한 사용자 인터페이스를 구축하기 위한 새로운 접근

Svelte는 모듈에서 다루는 다른 프레임워크와는 다른 웹앱 구축 방식을 제공합니다. React와 Vue와 같은 프레임 워크는 앱이 실행되는 동안 사용자의 브라우저에서 대부분의 작업을 수행하지만 Svelte는 해당 작업을 앱을 빌드하는 컴파일 단계로 전환하여 고도로 최적화된 바닐라 자바스크립트를 생성합니다.

이 접근 방식의 결과는 더 작은 어플리케이션 번들과 더 좋은 성능을 낼 뿐만 아니라 개발자들이 최신 도구적 생태계에 제한된 경험을 가진 사람들에게 더욱 다가가는 경험을 합니다.

Svelte는 HTML, CSS 및 자바스크립트의 고전적인 웹 개발 모델을 고수하면서 HTML과 자바스크립트에 몇 가지 확장을 추가합니다. 스벨트는 다른 프레임워크 선택지보다 배워야 할 개념과 도구가 적습니다.

현재 주요한 단점은 신생 프레임워크라는 것입니다. 따라서 생태계는 성숙한 프레임워크보다 도구, 지원, 플러그인, 명확한 사용 패턴 등의 측면에서 더 제한적이며 일자리도 적습니다. 그러나 Svelte의 장점은 당신이 그것에 대해 관심을 갖도록 만들기에 충분할 것입니다.

> **참고:** 최근 Svelte는 가장 요청이 많았던 기능 중 하나인 [공식 타입스크립트 지원](https://svelte.dev/blog/svelte-and-typescript)을 추가했습니다. 나중에 이 자습서 시리즈에서 살펴보겠습니다.

[Svelte 공식 튜토리얼](https://svelte.dev/tutorial/basics)을 통해 기본 개념을 빠르게 숙지한 후 이 튜토리얼 시리즈로 돌아와서 좀 더 심도 있게 빌드하는 방법을 알아보시기 바랍니다.

## 사용 사례

Svelte는 인터페이스 또는 전체 애플리케이션의 작은 부분을 개발하는 데 사용할 수 있습니다. Svelte가 UI를 구동하도록 처음부터 시작하거나 기존 애플리케이션에 점진적으로 통합할 수 있습니다.

Svelte는 특히 다음 상황을 해결하는 데 적합합니다.

- 저전력 장치용 웹 애플리케이션: Svelte로 구축된 애플리케이션은 번들 크기가 더 작아서 네트워크 연결이 느리고 처리 능력이 제한된 장치에 이상적입니다. 코드가 적다는 것은 다운로드, 구문 분석, 실행 및 메모리에 머무는 데 필요한 KB가 적다는 것을 의미합니다.
- 고도의 대화형 페이지 또는 복잡한 시각화: 많은 수의 DOM 요소를 표시해야 하는 데이터 시각화를 구축하는 경우 런타임 오버헤드가 없는 프레임워크에서 제공되는 성능 향상을 통해 사용자 상호 작용이 빠르고 반응이 빠릅니다.
- 기본 웹 개발 지식이 있는 사람의 온보딩: Svelte는 학습 곡선이 얕습니다. 기본 HTML, CSS 및 JavaScript 지식이 있는 웹 개발자는 짧은 시간에 Svelte 세부 사항을 쉽게 파악하고 웹 애플리케이션 구축을 시작할 수 있습니다.

또한 [Sapper](https://sapper.svelte.dev/)(스벨트 기반 프레임워크)의 도움으로 서버 측 렌더링, 코드 분할, 파일 기반 라우팅 및 오프라인 지원과 같은 고급 기능을 갖춘 애플리케이션을 개발할 수도 있습니다. 그리고 네이티브 모바일 애플리케이션을 구축할 수 있는 [스벨트 네이티브](https://svelte-native.technology/)도 있습니다.

## Svelte는 어떻게 작동하나요?

컴파일러이기 때문에 Svelte는 HTML, CSS 및 자바스크립트를 확장하여 런타임 오버헤드 없이 최적의 JavaScript 코드를 생성할 수 있습니다. 이를 달성하기 위해 Svelte는 다음과 같은 방식으로 바닐라 웹 기술을 확장합니다.

- 마크업에서 자바스크립트 표현식을 허용하고 핸들바와 유사한 방식으로 조건 및 루프를 사용하는 지시문을 제공하여 HTML을 확장합니다.
- 범위 지정 메커니즘을 추가해 CSS를 확장함으로 각 컴포넌트가 다른 컴포넌트의 스타일과 충돌할 위험 없이 자체 스타일을 정의할 수 있도록 합니다.
- 진정한 반응성을 달성하고 컴포넌트 상태 관리를 용이하게 하기 위해 언어의 특정 지시문을 재해석하여 자바스크립트를 확장합니다.

컴파일러는 매우 특정한 상황과 Svelte 컴포넌트의 컨텍스트에서만 개입합니다. 자바스크립트 언어에 대한 확장은 최소한이며 자바스크립트 구문을 위반하거나 개발자를 소외시키지 않도록 신중하게 선택됩니다. 사실, 대부분 바닐라 자바스크립트로 작업하게 될 것입니다.

## Svelte의 첫 단계

Svelte는 컴파일러이므로 `<script src="svelte.js">` 태그를 페이지에 추가하고 앱으로 가져올 수 없습니다. 컴파일러가 작업을 수행하도록 하려면 개발 환경을 설정해야 합니다.

### 요구 사항

Svelte를 사용하려면 [Node.js](https://nodejs.org/en/)가 설치되어 있어야 합니다. 장기 지원(LTS) 버전을 사용하는 것이 좋습니다. 노드에는 npm(노드 패키지 관리자) 및 npx(노드 패키지 실행기)가 포함됩니다. npm 대신 Yarn 패키지 관리자를 사용할 수도 있지만 이 자습서 세트에서는 npm을 사용한다고 가정합니다. npm 및 yarn에 대한 자세한 내용은 [패키지 관리 기본 사항](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)을 참조하세요.

Windows를 사용하는 경우 이 튜토리얼에서 언급한 터미널 명령을 사용하려면 Unix/macOS 터미널과 패리티를 제공하는 일부 소프트웨어를 설치해야 합니다. Gitbash([Windows용 git 도구 집합](https://gitforwindows.org/)) 또는 [Linux용 Windows 하위 시스템(WSL)](https://docs.microsoft.com/windows/wsl/about) 둘 다 적합합니다. 이에 대한 자세한 내용과 일반적인 터미널 명령은 [명령줄 단기 특강](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)을 참조하세요.

또한 자세한 내용은 다음을 참조하십시오.

- nodejs.org의 ["npm이란?"](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- npm 블로그의 ["npx 소개"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- Svelte 블로그의 ["Svelte를 시작하는 가장 쉬운 방법"](https://svelte.dev/blog/the-easiest-way-to-get-started)

### 첫 번째 Svelte 앱 만들기

스타터 앱 템플릿을 만드는 가장 쉬운 방법은 스타터 템플릿 애플리케이션을 다운로드하는 것입니다. GitHub의 [sveltejs/template](https://github.com/sveltejs/template)을 방문하거나 다운로드하고 압축을 푸는 과정을 피하고 싶다면 [degit](https://github.com/Rich-Harris/degit)을 사용하면 됩니다.

시작 앱 템플릿을 만들려면 다음 터미널을 실행하세요.

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> **참고:** degit은 마술 같은 것을 하지 않습니다. 단지 최신 버전의 git repo 콘텐츠를 다운로드하고 압축을 풀 수 있게 해줍니다. 리포지토리의 모든 기록을 다운로드하거나 완전한 로컬 복제본을 생성하지 않기 때문에 `git clone`을 사용하는 것보다 훨씬 빠릅니다.

`npm run dev`를 실행한 후 Svelte는 애플리케이션을 컴파일하고 빌드합니다. `localhost:8080`에서 로컬 서버를 시작합니다. Svelte는 파일 업데이트를 감시하고 소스 파일이 변경되면 자동으로 앱을 다시 컴파일하고 새로 고칩니다. 브라우저에 다음과 같이 표시됩니다.

![A simple start page that says hello world, and gives a link to the official svelte tutorials](01-svelte-starter-app.png)

### 애플리케이션 구조

시작 템플릿은 다음 구조로 제공됩니다.

```
moz-todo-svelte
├── README.md
├── package.json
├── package-lock.json
├── rollup.config.js
├── .gitignore
├── node_modules
├── public
│   ├── favicon.png
│   ├── index.html
│   ├── global.css
│   └── build
│       ├── bundle.css
│       ├── bundle.js
│       └── bundle.js.map
├── scripts
│   └── setupTypeScript.js
└── src
    ├── App.svelte
    └── main.js
```

구성은 다음과 같습니다.

- `package.json`과 `package-lock.json`: Node.js/npm이 구성을 유지하기 위해 사용하는 프로젝트에 대한 정보를 포함합니다. 이 튜토리얼을 완료하기 위해 이 파일을 전혀 이해할 필요는 없지만, 이에 대해 더 알고 싶다면 NodeJS.org의 [`package.json`은 무엇인가요?](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)?를 읽어보시면 됩니다. 또한 저희의 [패키지 관리 기본 자습서](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)에서도 이에 대해 다루고 있습니다.
- `node_modules`: 노드가 프로젝트 종속성을 저장하는 곳입니다. 이러한 종속성은 프로덕션으로 전송되지 않고 개발 목적으로만 사용됩니다.
- `.gitignore`: 프로젝트에서 무시할 파일 또는 폴더를 git에 알려줍니다. git repo에 앱을 포함하기로 결정한 경우에 유용합니다.
- `rollup.config.js`: Svelte는 [롤업](https://rollupjs.org/)을 모듈 번들러로 사용합니다. 이 구성 파일은 앱을 컴파일하고 빌드하는 방법을 롤업에 알려줍니다. [웹팩](https://webpack.js.org/)을 선호하는 경우 대신 `npx degit sveltejs/template-webpack svelte-app`을 사용하여 시작 프로젝트를 만들 수 있습니다.
- `scripts`: 필요에 따라 설정 스크립트를 포함합니다. 현재는 `setupTypeScript.js`만 포함해야 합니다.
  - `setupTypeScript.js`: 이 스크립트는 Svelte에서 타입스크립트 지원을 설정합니다. 마지막 글에 이에 대해 더 이야기하겠습니다.
- `src`: 이 디렉토리는 애플리케이션의 소스 코드가 있는 곳으로 앱의 코드를 생성하게 됩니다.
  - `App.svelte`: 앱의 최상위 컴포넌트입니다. 'Hello World!' 메시지까지만 렌더링합니다.
  - `main.js`: 애플리케이션의 진입점입니다. 단지 `App` 컴포넌트를 인스턴스화하고 HTML 페이지의 본문에 바인딩합니다.
- `public`: 이 디렉토리에는 생산에 게시될 모든 파일이 포함됩니다.
  - `favicon.png`: 앱의 파비콘입니다. 현재 Svelte 로고입니다.
  - `index.html`: 앱의 기본 페이지입니다. 처음에는 Svelte가 생성한 CSS 파일과 js 번들을 로드하는 빈 HTML 페이지일 뿐입니다.
  - `global.css`: 이 파일에는 범위가 지정되지 않은 스타일이 포함되어 있습니다. 전체 애플리케이션에 적용되는 일반 CSS 파일입니다.
  - `build`: 이 폴더에는 생성된 CSS 및 JavaScript 소스 코드가 포함되어 있습니다.
    - `bundle.css`: 각 컴포넌트에 대해 정의된 스타일에서 Svelte가 생성한 CSS 파일입니다.
    - `bundle.js`: 모든 JavaScript 소스 코드에서 컴파일된 JavaScript 파일입니다.

## 첫 번째 Svelte 컴포넌트 살펴보기

컴포넌트들은 Svelte 애플리케이션의 구축을 위한 블록들입니다. 컴포넌트들은 HTML의 상위 집합을 사용하여 `.svelte` 파일에 기록됩니다.

세 섹션(`<script>`, `<style>` 및 마크업)은 모두 선택 사항이며 원하는 순서로 표시될 수 있습니다.

```html
<script>
  // 로직이 들어갑니다.
</script>

<style>
  /* 스타일이 들어갑니다. */
</style>

<!-- 마크업(0 또는 다른 HTML 엘리먼트들)이 들어갑니다. -->
```

> **참고:** 컴포넌트 형식에 대한 자세한 내용은 [Svelte 설명서](https://svelte.dev/docs#Component_format)를 참조하세요.

이를 염두에 두고 스타터 템플릿과 함께 제공되는 `src/App.svelte` 파일을 살펴보겠습니다. 다음과 같은 내용이 표시되어야 합니다.

```html
<script>
  export let name;
</script>

<main>
  <h1>안녕! {name}!</h1>
  <p>
    <a href="https://svelte.dev/tutorial">Svelte 튜토리얼</a>에 방문해서 Svelte
    앱을 반드는 방법을 배워보세요.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

### `<script>` 섹션

`<script>` 블록에는 컴포넌트 인스턴스가 생성될 때 실행되는 자바스크립트가 포함되어 있습니다. 최상위 수준에서 선언된(또는 가져온) 변수는 컴포넌트의 마크업에서 '볼 수' 있습니다. 최상위 변수는 Svelte가 컴포넌트 상태를 처리하는 방식이며 기본적으로 반응적입니다. 이것이 무엇을 의미하는지 나중에 자세히 설명하겠습니다.

```html
<script>
  export let name;
</script>
```

Svelte는 [`export`](/ko/docs/Web/JavaScript/Reference/Statements/export) 키워드를 사용하여 변수 선언을 속성으로 표시합니다. 이는 컴포넌트의 사용자가 액세스할 수 있음을 의미합니다. (예: 다른 컴포넌트). 이것은 Svelte가 자바스크립트 구문을 확장하여 친숙함을 유지하면서 더 유용하게 만드는 한 예입니다.

### 마크업 부분

마크업 섹션에서 원하는 HTML을 삽입할 수 있으며 추가로 단일 중괄호(`{}`) 안에 유효한 자바스크립트 표현식을 삽입할 수 있습니다. 이 경우 `안녕` 텍스트 바로 뒤에 `name` 속성의 값을 삽입합니다.

```html
<main>
  <h1>안녕 {name}!</h1>
  <p>
    <a href="https://svelte.dev/tutorial">Svelte 튜토리얼</a>에 방문해서 Svelte
    앱을 반드는 방법을 배워보세요.
  </p>
</main>
```

Svelte는 `{#if}`, `{#each}` 및 `{#await}`와 같은 태그도 지원합니다. 이러한 예제를 사용하면 마크업의 일부를 조건부로 렌더링하고, 요소 목록을 반복하고, 비동기 값들에 각각 작용합니다.

### `<style>` 섹션

CSS 작업 경험이 있는 경우 다음 스니펫을 쉽게 이해할 수 있습니다.

```html
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

[`<h1>`](/ko/docs/Web/HTML/Element/Heading_Elements) 요소에 스타일을 적용하고 있습니다. `<h1>` 요소가 포함된 다른 컴포넌트는 어떻게 될까요?

Svelte에서 컴포넌트의 `<style>` 블록 내부 CSS는 해당 컴포넌트로만 범위가 지정됩니다. 이는 컴포넌트 스타일의 해시를 기반으로 하는 선택한 요소에 클래스를 추가하여 작동합니다.

새 브라우저 탭에서 `localhost:8080`을 열고 _HELLO WORLD!_ 레이블을 마우스 오른쪽/<kbd>Ctrl</kbd>-클릭하고 *Inspect*를 선택하여 작동 중인 것을 확인할 수 있습니다.

![Svelte starter app with devtools open, showing classes for scoped styles](02-svelte-component-scoped-styles.png)

앱을 컴파일할 때 Svelte는 `h1` 스타일 정의를 `h1.svelte-1tky8bj`로 변경한 다음 컴포넌트의 모든 `<h1>` 요소를 `<h1 class="svelte-1tky8bj">`로 수정합니다. 필요에 따라 스타일을 선택합니다.

> **참고:** 이 동작을 재정의하고 `:global()` 한정자를 사용하여 전역적으로 선택기에 스타일을 적용할 수 있습니다([Svelte `<style>` 문서](https://svelte.dev/docs#style)를 보시면 더 많은 정보가 있습니다).

## 몇 가지 변경

이제 모든 것이 어떻게 조화를 이루는지에 대한 기본적인 아이디어를 얻었으므로 몇 가지 변경 작업을 시작할 수 있습니다.
이 시점에서 `App.svelte` 컴포넌트를 업데이트할 수 있습니다. 예를 들어 `App.svelte`의 6번째 줄에 있는 `<h1>` 요소를 다음과 같이 변경합니다.

```html
<h1>Hello {name} from MDN!</h1>
```

변경 사항을 저장하면 `localhost:8080`에서 실행 중인 앱이 자동으로 업데이트됩니다.

### Svelte 반응성 살펴보기

UI 프레임워크의 컨텍스트에서 반응성은 컴포넌트의 상태가 변경될 때 프레임워크가 DOM을 자동으로 업데이트할 수 있음을 의미합니다.

Svelte에서 반응성은 컴포넌트의 최상위 변수에 새 값을 할당하여 트리거됩니다. 예를 들어 `App` 컴포넌트에 `toggleName()` 함수를 포함하고 이를 실행하는 버튼을 포함할 수 있습니다.

다음과 같이 `<script>` 및 마크업 섹션을 업데이트 해보세요.

```html
<script>
  export let name;

  function toggleName() {
    if (name === "world") {
      name = "svelte";
    } else {
      name = "world";
    }
  }
</script>

<main>
  <h1>안녕! {name}!</h1>
  <button on:click="{toggleName}">토글 name</button>
  <p>
    <a href="https://svelte.dev/tutorial">Svelte 튜토리얼</a>에 방문해서 Svelte
    앱을 반드는 방법을 배워보세요.
  </p>
</main>
```

버튼을 클릭할 때마다 Svelte는 `toggleName()` 함수를 실행하여 `name` 변수의 값을 업데이트합니다.

보시다시피 `<h1>` 레이블이 자동으로 업데이트됩니다. 뒤의 내용에서 Svelte는 가상 DOM이나 기타 복잡한 조정 메커니즘을 사용하지 않고 name 변수의 값이 변경될 때마다 DOM을 업데이트하는 자바스크립트 코드를 만들었습니다.

`on:click`에서 `:`의 사용에 유의하십시오. 이것이 DOM 이벤트를 수신하기 위한 Svelte의 구문입니다.

## main.js 검사: 앱의 진입점

`App` 컴포넌트를 가져와서 사용하고 있는 `src/main.js`를 열어봅시다. 이 파일은 우리 앱의 진입점이며 처음에는 다음과 같이 보입니다.

```js
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
```

`main.js`는 사용할 Svelte 컴포넌트를 가져오는 것으로 시작합니다. 그런 다음 3행에서 인스턴스화하여 다음 속성을 가진 옵션 개체를 전달합니다.

- `target`: 컴포넌트를 렌더링하려는 DOM 요소(이 경우 `<body>` 요소)입니다.
- `props`: `App` 컴포넌트의 각 prop에 할당할 값입니다.

## 숨겨진 아래 살펴보기

어떻게 Svelte는 이 모든 파일이 함께 잘 작동하도록 관리하나요?

Svelte 컴파일러는 모든 컴포넌트의 `<style>` 섹션을 처리하고 `public/build/bundle.css` 파일로 컴파일합니다.

또한 모든 컴포넌트의 마크업 및 `<script>` 섹션을 컴파일하고 결과를 `public/build/bundle.js`에 저장합니다. 또한 `src/main.js`에 코드를 추가하여 각 컴포넌트의 기능을 참조합니다.

마지막으로 `public/index.html` 파일에는 생성된 `bundle.css` 및 `bundle.js` 파일이 포함됩니다.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <title>Svelte app</title>

    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="/global.css" />
    <link rel="stylesheet" href="/build/bundle.css" />

    <script defer src="/build/bundle.js"></script>
  </head>

  <body></body>
</html>
```

`bundle.js`의 축소된 버전은 "Svelte 런타임"(단지 300줄의 자바스크립트 코드) 및 `App.svelte` 컴파일 컴포넌트를 포함하여 무게가 3KB를 약간 넘습니다. 보시다시피 `bundle.js`는 `index.html`이 참조하는 유일한 자바스크립트 파일입니다. 웹 페이지에 로드된 다른 라이브러리가 없습니다.

이것은 다른 프레임워크의 컴파일된 번들보다 훨씬 작은 공간입니다. 코드 번들의 경우 중요한 것은 다운로드해야 하는 파일의 크기만이 아니라는 점을 고려하십시오. 이것은 구문 분석, 실행 및 메모리에 보관해야 하는 실행 가능한 코드입니다. 따라서 이것은 특히 저전력 장치나 CPU를 많이 사용하는 응용 프로그램에서 차이를 만듭니다.

## 튜토리얼 이후에

이 자습서 시리즈에서는 완전한 웹 애플리케이션을 구축하게 됩니다. Svelte에 대한 모든 기본 사항과 몇 가지 고급 주제에 대해 알아봅니다.

콘텐츠를 읽으면 Svelte 기능을 잘 이해할 수 있지만 진행하면서 앱 코딩을 따라가면 이 자습서를 최대한 활용할 수 있습니다. 각 문서를 더 쉽게 따라갈 수 있도록 각 자습서의 시작 부분에 있는 앱의 소스가 포함된 폴더가 있는 GitHub 리포지토리를 제공합니다.

Svelte는 컴퓨터에 아무것도 설치하지 않고도 웹에서 Svelte 앱을 라이브 코딩할 수 있는 놀이터인 온라인 REPL도 제공합니다. 바로 코딩을 시작할 수 있도록 각 기사에 대한 REPL을 제공합니다. 이러한 도구를 사용하는 방법에 대해 좀 더 이야기해 봅시다.

### Git 사용법

가장 널리 사용되는 버전 제어 시스템은 리포지토리에 대한 호스팅과 리포지토리 작업을 위한 여러 도구를 제공하는 사이트인 GitHub와 함께 Git입니다.

각 기사의 소스 코드를 쉽게 다운로드할 수 있도록 GitHub를 사용할 것입니다. 길을 잃을 경우를 대비하여 기사를 완료한 후 코드를 원래대로 얻을 수도 있습니다.

[git 설치](https://git-scm.com/downloads) 후 레포지토리를 복제하려면 다음을 실행해야 합니다.

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

그런 다음 각 문서의 시작 부분에서 해당 폴더로 `cd`하고 개발 모드에서 앱을 시작하여 다음과 같이 현재 상태를 확인할 수 있습니다.

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

git 및 GitHub에 대해 자세히 알아보려면 저희가 정리한 유용한 가이드 링크 목록을 보세요. [Git 및 GitHub](/ko/docs/Learn/Tools_and_testing/GitHub)

> **참고:** git repo를 복제하지 않고 파일을 다운로드하기만 하려면 `npx degit opensas/mdn-svelte-tutorial`과 같은 degit 도구를 사용할 수 있습니다. `npx degit opensas/mdn-svelte-tutorial/01-getting-started`를 사용하여 특정 폴더를 다운로드할 수도 있습니다. Degit은 로컬 git repo를 만들지 않고 지정된 폴더의 파일만 다운로드합니다.

### Svelte REPL 사용

REPL([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop))은 명령을 입력하고 결과를 즉시 확인하십시오. 많은 프로그래밍 언어가 REPL을 제공합니다.

Svelte의 REPL은 그 이상입니다. 완전한 앱을 만들고 온라인에 저장하고 다른 사람과 공유할 수 있는 온라인 도구입니다.

아무 것도 설치하지 않고 모든 컴퓨터에서 Svelte로 게임을 시작하는 가장 쉬운 방법입니다. Svelte 커뮤니티에서도 널리 사용됩니다. 아이디어를 공유하거나 도움을 요청하거나 문제를 보고하려는 경우 문제를 시연하는 REPL 인스턴스를 생성하는 것이 항상 매우 유용합니다.

Svelte REPL과 사용 방법을 간단히 살펴보겠습니다. 다음과 같이 보입니다.

![the svelte REPL in action, showing component code on the left, and output on the right](03-svelte-repl-in-action.png)

REPL을 시작하려면 브라우저를 열고 <https://svelte.dev/repl>로 이동합니다.

- 화면 왼쪽에는 컴포넌트의 코드가 표시되고 오른쪽에는 실행 중인 앱의 출력이 표시됩니다.
- 코드 위의 막대를 사용하면 `.svelte` 및 `.js` 파일을 만들고 재배열할 수 있습니다. 폴더 안에 파일을 만들려면 `components/MyComponent.svelte`와 같이 전체 경로 이름을 지정하기만 하면 됩니다. 폴더가 자동으로 생성됩니다.
- 해당 막대 위에는 REPL의 제목이 있습니다. 그것을 클릭하여 편집하세요.
- 오른쪽에는 3개의 탭이 있습니다.

  - _Result_ 탭에는 앱 출력이 표시되며 하단에 콘솔이 제공됩니다.
  - _JS output_ 탭에서는 Svelte에서 생성된 JavaScript 코드를 검사하고 컴파일러 옵션을 설정할 수 있습니다.
  - _CSS output_ 탭에는 Svelte에서 생성한 CSS가 표시됩니다.

- 탭 위에는 전체 화면 모드로 전환하고 앱을 다운로드할 수 있는 도구 모음이 있습니다. GitHub 계정으로 로그인하면 앱을 포크하고 저장할 수도 있습니다. 또한 GitHub 사용자 이름 프로필을 클릭하고 _Your saved apps_ 을 선택하면 저장된 모든 REPL을 볼 수 있습니다.

REPL에서 파일을 변경할 때마다 Svelte는 앱을 다시 컴파일하고 결과 탭을 업데이트합니다. 앱을 공유하려면 URL을 공유하세요. 예를 들어 전체 앱을 실행하는 REPL 링크는 다음과 같습니다. <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> **참고:** URL에서 Svelte의 버전을 지정하는 방법에 유의하십시오. 이는 Svelte의 특정 버전과 관련된 문제를 보고할 때 유용합니다.

바로 코딩을 시작할 수 있도록 각 기사의 시작과 끝에 REPL을 제공합니다.

> **참고:** 현재 REPL은 폴더 이름을 제대로 처리할 수 없습니다. REPL에 대한 자습서를 따르는 경우 루트 폴더 내에 모든 컴포넌트를 생성하십시오. 그런 다음 코드에 다음과 같은 경로를 본다면 (예: `import Todos from './components/Todos.svelte'`),곧장 일반 URL로 대체하세요 (예: `import Todos from './Todos.svelte'`).

## 지금까지의 코드

### Git

레포지토리 클론을 하세요(당신이 이미 클론을 완료하지 않았다면).

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

그런 다음 현재 앱으로 상태를 이동하고, 실행하세요.

```bash
cd mdn-svelte-tutorial/01-getting-started
```

또는 폴더의 내용을 직접 다운로드하세요.

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

개발 모드로 당신의 앱을 실행하기 위한 명령어(`npm install && npm run dev`)를 기억하세요.

### REPL

REPL을 사용하여 우리와 함께 코딩하려면 <https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>에서 시작하세요.

## 요약

이것으로 Svelte를 로컬로 설치하는 방법, 스타터 앱을 만드는 방법 및 기본 작동 방법을 포함하여 Svelte에 대한 초기 살펴보기를 마칩니다. 다음 글에서 우리는 첫 번째로 초심자에게 적절한 애플리케이션인 할 일 목록을 만들기 시작할 것입니다. 하지만 그 전에 배운 내용 중 일부를 요약해 보겠습니다.

Svelte에서.

- 단일 `.svelte` 파일에서 각 컴포넌트의 스크립트, 스타일 및 마크업을 정의합니다.
- 컴포넌트 속성은 `export` 키워드로 선언됩니다.
- 해당 `.svelte` 파일을 가져오기만 하면 Svelte 컴포넌트를 사용할 수 있습니다.
- 컴포넌트 스타일은 서로 충돌하지 않도록 범위가 지정됩니다.
- 마크업 섹션에서 중괄호 사이에 넣어 자바스크립트 표현식을 포함할 수 있습니다.
- 컴포넌트의 최상위 변수는 컴포넌트의 상태를 구성합니다.
- 최상위 변수에 새 값을 할당하는 것만으로 반응성이 발동됩니다.

{{PreviousMenuNext("학습/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","학습/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "학습/Tools_and_testing/Client-side_JavaScript_frameworks")}}
