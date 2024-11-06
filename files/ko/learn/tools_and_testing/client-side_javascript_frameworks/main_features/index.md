---
title: 프레임워크 주요 기능
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

주요 JavaScript 프레임워크는 DOM 업데이트하는 방식, 브라우저 이벤트 처리하는 법 그리고 즐거운 개발자 경험 제공을 제공하는 방식에 있어 차이가 있습니다. 이 기사에서는 "빅 4" 프레임워크의 주요 기능을 살펴보고, 프레임워크가 높은 수준에서 작용하는 방식과 프레임워크 간의 차이점을 살펴봅니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        <a href="/ko/docs/Learn/HTML">HTML</a>,
        <a href="/ko/docs/Learn/CSS">CSS</a>, 및
        <a href="/ko/docs/Learn/JavaScript">JavaScript</a> 언어 핵심에 대한 친숙도
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>프레임워크의 주요 코드 기능을 이해합니다.</td>
    </tr>
  </tbody>
</table>

## 도메인 특정 언어

이 모듈에서 설명하는 모든 프레임워크는 JavaScript로 구동되며 모두 도메인별 언어(DSL, domain-specific language)을 사용하여 애플리케이션을 구축할 수 있습니다. 특히 React는 컴포넌트 작성을 위해 **JSX** 사용을 대중화한 반면, Ember는 **Handlebars**를 활용합니다. HTML과 달리, 이러한 언어는 데이터 변수를 읽는 방법을 알고 있으며, 이 데이터를 사용하여 UI 작성 프로세스를 간소화할 수 있습니다.

Angular 앱은 종종 **TypeScript**를 많이 사용합니다. TypeScript는 사용자 인터페이스 작성과 관련이 없지만, 도메인 특정 언어이며, 일반 JavaScript와 상당한 차이가 있습니다.

DSL은 브라우저에서 직접 읽을 수 없습니다. 먼저 JavaScript 또는 HTML로 변환해야 합니다. [변환은 개발 프로세스의 추가 단계](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview#transformation)이지만, 일반적으로 프레임워크 도구는 이 단계를 처리하는 데 필요한 도구를 포함하거나 이 단계를 포함하도록 조정할 수 있습니다. 이러한 도메인별 언어를 사용하지 않고 프레임워크 앱을 구축할 수 있지만, 도메인별 언어를 활용하면 개발 프로세스가 간소화되고 해당 프레임워크 관련 커뮤니티에서 도움을 더 쉽게 찾을 수 있습니다.

### JSX

JavaScript 및 XML을 나타내는 [JSX](https://reactjs.org/docs/introducing-jsx.html)는 HTML과 유사한 구문을 JavaScript 환경에 제공하는 JavaScript의 확장입니다. React 팀에서 React 애플리케이션에 사용하기 위해 발명했지만, 예를 들어 Vue 앱과 같은 다른 애플리케이션을 개발하는 데 사용할 수 있습니다.

다음은 간단한 JSX 예제를 보여줍니다.

```js
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

이 표현식은 [`<h1>`](/ko/docs/Web/HTML/Element/Heading_Elements)이 있는 HTML [`<header>`](/ko/docs/Web/HTML/Element/header) 요소를 나타냅니다. 4행에서 `subject` 주변의 중괄호는 애플리케이션이 `subject` 상수의 값을 읽고 이를 `<h1>`에 삽입하도록 지시합니다.

React와 함께 사용하면, 이전 코드 조각의 JSX가 다음과 같이 컴파일됩니다.

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

궁극적으로 브라우저에 의해 렌더링될 때, 위의 코드 조각은 다음과 같은 HTML을 생성합니다.

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

[Handlebars](https://handlebarsjs.com/) 템플릿 언어는 Ember 애플리케이션에만 국한되지 않지만, Ember 앱에서 많이 활용됩니다. Handlebars 코드는 HTML과 유사하지만, 다른 곳에서 데이터를 가져올 수 있는 옵션이 있습니다. 이 데이터는 애플리케이션이 궁극적으로 빌드하는 HTML에 영향을 미치는 데 사용될 수 있습니다.

JSX와 마찬가지로, Handlebars는 중괄호를 사용하여 변수 값을 주입합니다. Handlebars는 한 쌍의 중괄호 대신 이중 쌍의 중괄호를 사용합니다.

이 Handlebars 템플릿이 주어지면:

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

그리고 이 데이터:

```js
{
  subject: "World";
}
```

Handlebars는 다음과 같이 HTML을 빌드합니다.

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/)는 JavaScript의 상위집합입니다. 즉, JavaScript를 확장합니다. 모든 JavaScript 코드는 유효한 TypeScript이지만, 그 반대는 아닙니다. TypeScript는 엄격한 방식으로 코드를 쓸 수 있어 유용합니다. 예를 들어, 정수 `a`와 `b`를 취해 그 합계를 반환하는 함수 `add()`를 생각해 보세요.

JavaScript에서, 해당 함수는 다음과 같이 작성할 수 있습니다.

```js
function add(a, b) {
  return a + b;
}
```

JavaScript에 익숙한 사람에게는 사소할 점일 수 있지만, 이 코드는 더 명확하게 쓸 수 있습니다. JavaScript에서는 `+` 연산자를 사용하여 문자열을 함께 연결하므로, 이 함수는 `a`와 `b`가 문자열인 경우에도 기술적으로 여전히 작동합니다.이 경우에는 이 코드가 예상한 결과를 제공하지 않을 수 있습니다. 이 함수에 숫자만 전달되도록 하려면 어떻게 해야 할까요? TypeScript는 이를 가능하게 합니다.

```ts
function add(a: number, b: number) {
  return a + b;
}
```

여기에서 각 매개변수 뒤에 쓰여진 `: number`는 TypeScript에 `a`와 `b`가 모두 숫자여야 함을 알려줍니다. 이 함수를 사용하고 `'2'`를 인수로 전달하면, TypeScript는 컴파일 중에 오류를 발생시키고, 실수를 수정해야 합니다. 우리는 이러한 오류를 발생시키는 자체 JavaScript를 작성할 수 있지만, 소스 코드를 훨씬 더 장황하게 만듭니다. TypeScript가 이러한 검사를 처리하도록 하는 것이 더 합리적일 것입니다.

## 컴포넌트 작성하기

이전 장에서 언급했듯이, 대부분의 프레임워크에는 일종의 컴포넌트 모델이 있습니다. React 컴포넌트는 JSX, Handlebars가 있는 Ember 컴포넌트, HTML을 약간 확장하는 템플릿 구문이 있는 Angular 및 Vue 컴포넌트로 작성할 수 있습니다.

컴포넌트를 어떻게 써야하는지와 관계없이, 각 프레임워크의 컴포넌트는 필요할 수도 있는 외부 속성, 컴포넌트가 관리해야 하는 내부 상태 및 사용자가 컴포넌트의 마크업에서 트리거할 수 있는 이벤트를 제공하는 방법을 제공합니다.

이 섹션의 나머지 코드 조각은 React를 예로 사용하며 JSX로 작성됩니다.

### 속성(프로퍼티)

속성 또는 **props**는 컴포넌트가 렌더링하기 위해 필요한 외부 데이터입니다. 온라인 잡지를 위한 웹 사이트를 구축중이고, 각각의 기고가가 자신의 작업에 대한 공로를 인정받고 있는지 확인해야 한다고 가정합니다. 각 기사와 함께 사용할 `AuthorCredit` 컴포넌트를 만들 수 있습니다. 이 컴포넌트는 작성자의 초상화와 저자에 대한 짧은 바이라인을 표시해야 합니다. 렌더링할 이미지와 인쇄할 작성자를 알기 위해 `AuthorCredit`은 일부 속성을 수락해야 합니다.

이 `AuthorCredit` 컴포넌트의 React 표현은 다음과 같을 수 있습니다.

```js
function AuthorCredit(props) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} />
      <figcaption>{props.byline}</figcaption>
    </figure>
  );
}
```

`{props.src}`, `{props.alt}` 및 `{props.byline}`은 속성이 컴포넌트에 삽입되는 위치를 나타냅니다. 이 컴포넌트를 렌더링하려면, 렌더링하려는 위치(아마도 다른 컴포넌트 내부에 있을 것임)에 다음과 같은 코드를 작성합니다.

```js
<AuthorCredit
  src="./assets/zelda.png"
  alt="Zelda Schiff의 초상"
  byline="Zelda Schiff는 Library Times의 편집장입니다."
/>
```

그러면 궁극적으로 다음 [`<figure>`](/ko/docs/Web/HTML/Element/figure) 요소가 렌더링됩니다. 구조는 `AuthorCredit` 컴포넌트에 정의된 대로, 콘텐츠는`AuthorCredit` 컴포넌트 호출에 포함된 속성에 정의된 대로 표시됩니다.

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff는 Library Times의 편집장입니다.</figcaption>
</figure>
```

### 상태

이전 장에서 **상태**의 개념에 대해 이야기했습니다. 강력한 상태 처리 메커니즘은 효과적인 프레임워크의 핵심이며, 각 컴포넌트에는 상태 제어가 필요한 데이터가 있을 수 있습니다. 이 상태는 컴포넌트가 사용 중인 동안 어떤 식으로든 지속됩니다. 속성과 마찬가지로, 상태를 사용하여 컴포넌트가 렌더링되는 방식에 영향을 줄 수 있습니다.

예를 들어, 클릭한 횟수를 세는 버튼을 생각해 보십시오. 이 컴포넌트는 자체 count 상태 추적을 담당해야 하며, 다음과 같이 작성할 수 있습니다.

```js
function CounterButton() {
  const [count] = useState(0);
  return <button>{count}번 클릭됨</button>;
}
```

[`useState()`](https://reactjs.org/docs/hooks-reference.html#usestate)는 **[React 후크](https://reactjs.org/docs/hooks-intro.html)** 입니다. 초기 데이터 값이 주어지면, 업데이트될 때 해당 값을 추적합니다. 코드는 처음에 브라우저에서 다음과 같이 렌더링됩니다.

```html
<button>0번 클릭됨</button>
```

`useState()` 호출은 코드를 직접 작성할 필요 없이, 앱 전체에서 강력한 방식으로 `count` 값을 추적합니다.

### 이벤트

대화형이 되려면, 애플리케이션이 사용자에게 응답할 수 있도록 컴포넌트가 브라우저 이벤트에 응답하는 방법이 필요합니다. 프레임워크는 브라우저 이벤트를 수신하기 위한 자체 구문을 제공합니다. 이러한 구문은 같은 이름의 브라우저 이벤트를 참조합니다.

React에서, [`click`](/ko/docs/Web/API/Element/click_event) 이벤트를 수신하려면 `onClick` 이라는 특수 속성이 필요합니다. 클릭 수를 계산할 수 있도록 위에서 `CounterButton` 코드를 업데이트 해 보겠습니다.

```js
function CounterButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}번 클릭됨</button>;
}
```

이 버전에서는 `count` 값을 업데이트하기 위해 호출할 수 있는 특수 `setCount()` 함수를 만들기 위해 추가 `useState()` 기능을 사용하고 있습니다. 4행에서 이 함수를 호출하고, `count`를 현재 값에 1을 더한 값으로 설정합니다.

## 컴포넌트 스타일링

각 프레임워크는 컴포넌트 또는 애플리케이션 전체에 대한 스타일을 정의하는 방법을 제공합니다. 컴포넌트의 스타일을 정의하는 각 프레임워크의 접근 방식은 약간 다르지만, 모두 다양한 방법을 제공합니다. 일부 도우미 모듈을 추가하면 [Sass](https://sass-lang.com/) 또는 [Less](https://lesscss.org/)에서 프레임워크 앱의 스타일을 지정하거나, 또는 [PostCSS](https://postcss.org/)로 CSS 스타일시트를 트랜스파일할 수 있습니다.

## 의존성 처리

모든 주요 프레임워크는 의존성을 처리하기 위한 메커니즘을 제공합니다. 다른 컴포넌트 내부의 컴포넌트를 사용하며, 때로는 여러 계층 구조 수준이 있습니다. 다른 기능과 마찬가지로 정확한 메커니즘은 프레임워크마다 다르지만, 최종 결과는 동일합니다. 컴포넌트는 표준 [JavaScript 모듈 문법](/ko/docs/Web/JavaScript/Guide/Modules) 또는 적어도 유사한 것을 사용하여, 컴포넌트를 다른 컴포넌트로 가져오는 경향이 있습니다.

### 컴포넌트 안의 컴포넌트

컴포넌트 기반 UI 아키텍처의 주요 이점 중 하나는 컴포넌트를 함께 구성할 수 있다는 것입니다. 웹 사이트를 구축하기 위해 서로 내부에 HTML 태그를 작성할 수 있는 것처럼 다른 컴포넌트 내부의 컴포넌트를 사용하여 웹 애플리케이션을 구축할 수 있습니다. 각 프레임워크를 사용하면 다른 컴포넌트를 활용하는 (따라서 의존하는) 컴포넌트를 작성할 수 있습니다.

예를 들어, `AuthorCredit` React 컴포넌트는 `Article` 컴포넌트 내에서 활용될 수 있습니다. 즉, `Article`은 `AuthorCredit`을 가져와야 합니다.

```js
import AuthorCredit from "./components/AuthorCredit";
```

완료되면, 다음과 같이 `Article` 컴포넌트 내에서 `AuthorCredit`을 사용할 수 있습니다.

```js
// …

<AuthorCredit />

// …
```

### 의존성 주입

실제 응용 프로그램에는 종종 여러 단계의 중첩이 있는 컴포넌트 구조가 포함될 수 있습니다. 여러 단계로 중첩된 `AuthorCredit` 컴포넌트는 어떤 이유로 애플리케이션의 가장 루트 단계에서의 데이터가 필요할 수 있습니다.

우리가 만들고 있는 잡지 사이트가 다음과 같이 구성되어 있다고 가정해 보겠습니다.

```js
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

우리의 `App` 컴포넌트에는 `AuthorCredit` 컴포넌트에 필요한 데이터가 있습니다. 우리는 `Home`과 `Article`을 다시 작성하여 속성을 전달하는 것을 알 수 있지만, 데이터의 원본과 대상 사이에 매우 많은 단계가 있는 경우, 지루할 수 있고 과도합니다. `Home` 및 `Article`은 실제로 저자의 초상이나 작성자를 사용하지 않지만, 해당 정보를 `AuthorCredit`에 가져오려면, `Home` 및 `Article`을 변경해서 받아들여야 합니다.

많은 컴포넌트 계층을 통해 데이터를 전달하는 문제를 속성 구멍 뚫기(props drilling)라고 하며, 대규모 응용 프로그램에는 적합하지 않습니다.

속성 구멍 뚫기(props drilling)를 피하기 위해, 프레임워크는 의존성 주입이라는 기능을 제공합니다. 이 기능은 중간 단계를 거치지 않고, 특정 데이터를 필요한 컴포넌트에 직접 가져오는 방법입니다. 각 프레임워크는 다른 이름과 다른 방식으로 의존성 주입을 구현하지만, 그 효과는 궁극적으로 동일합니다.

Angular는 이 과정을 [의존성 주입](https://angular.io/guide/dependency-injection)이라고 부릅니다. Vue에는 [`provide()`와 `inject()` 컴포넌트 메서드](https://v2.vuejs.org/v2/api/#provide-inject), React에는 [Context API](https://reactjs.org/docs/context.html), Ember는 [서비스](https://guides.emberjs.com/release/services/)를 통해 상태를 공유합니다.

### 생명주기

프레임워크의 맥락에서, 컴포넌트의 **수명 주기**는 컴포넌트가 DOM에 추가된 후 브라우저에 의해 렌더링(종종 마운팅이라고 합니다)되는 시간부터 DOM에서 제거(종종 언마운팅이라고 합니다)되는 시간까지 거치는 단계의 모음입니다. 각 프레임워크는 이러한 수명 주기 단계의 이름을 다르게 지정하며, 모든 개발자가 동일한 단계에 접근할 수 있는 것은 아닙니다. 모든 프레임워크는 동일한 일반 모델을 따릅니다. 이를 통해, 개발자는 컴포넌트가 마운트될 때, 렌더링될 때, 마운트 해제될 때 및 이들 사이의 여러 단계에서 특정 작업을 수행할 수 있습니다.

렌더 단계는 사용자가 애플리케이션과 상호 작용할 때 가장 많이 반복되기 때문에, 이해하는 것이 가장 중요합니다. 새 정보가 브라우저에 있는 항목에 추가되었는지, 삭제되었는지 또는 그곳에 있는 내용을 편집했는지 여부에 관계없이 브라우저가 새로운 것을 렌더링해야 할 때마다 실행됩니다.

이 [React 컴포넌트의 생명 주기 다이어그램](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)은 개념에 대한 일반적인 개요를 제공합니다.

## 요소 렌더링

생명 주기와 마찬가지로, 프레임워크는 애플리케이션을 렌더링하는 방법에 대해 다르지만 유사한 접근 방식을 선택합니다. 이들 모두는 브라우저 DOM의 현재 렌더링된 버전을 추적하고, 응용 프로그램의 컴포넌트가 다시 렌더링될 때 DOM이 어떻게 변경되어야 하는지에 대해 각각 약간씩 다른 결정을 내립니다. 프레임워크가 이러한 결정을 내리기 때문에, 일반적으로 DOM과 직접 상호 작용하지 않습니다. DOM에서 멀어지는 이 추상화는 DOM을 직접 업데이트하는 것보다 더 복잡하고 메모리 집약적이지만, DOM이 없으면 프레임워크는 알려진 선언적 방식으로 프로그래밍할 수 없습니다.

**가상 DOM**은 브라우저의 DOM에 대한 정보가 JavaScript 메모리에 저장되는 방식입니다. 애플리케이션은 이 DOM 사본을 업데이트한 다음, 무엇을 렌더링할지 결정하기 위해 "실제" DOM(사용자를 위해 실제로 렌더링되는 DOM)과 비교합니다. 애플리케이션은 업데이트된 가상 DOM과 현재 렌더링된 DOM 간의 차이점을 비교하기 위해 "diff"를 빌드하고, 해당 diff를 사용해 업데이트를 실제 DOM에 적용합니다. React와 Vue는 모두 가상 DOM 모델을 사용하지만, 디핑(diffing) 또는 렌더링할 때 정확히 동일한 논리를 적용하지 않습니다.

[React 문서에서 가상 DOM에 대해 자세히 읽어보세요](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom).

**증분 DOM**은 무엇을 렌더링할지 결정하기 위해 DOM 비교(diff)를 구축하다는 점에서 가상 DOM과 유사하지만, JavaScript 메모리에 DOM의 완전한 복사본을 생성하지 않는다는 점에서 다릅니다. 변경할 필요가 없는 DOM 부분은 무시합니다. Angular는 증분 DOM을 사용하는 이 모듈에서 지금가지 논의된 유일한 프레임워크입니다.

[Auth0 블로그에서 증분 DOM에 대한 자세한 내용을 읽을 수 있습니다](https://auth0.com/blog/incremental-dom/).

**Glimmer VM**은 Ember만이 유일합니다. 가상 DOM도 증분 DOM도 아닙니다. Ember의 템플릿이 JavaScript보다 읽기 쉽고, 빠른 일종의 "바이트 코드"로 변환되는 별도의 프로세스입니다.

## 라우팅

[이전 장에서 언급했던 라우팅](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction#routing)은 웹 경험의 중요한 부분입니다. 많은 시각적인 요소가 포함되어 충분히 복잡한 앱에서 중단되는 경험을 방지하기 위해, 이 모듈에서 다루는 각 프레임워크는 개발자가 애플리케이션에서 클라이언트 측 라우팅을 구현하는 데 도움이 되는 라이브러리(또는 둘 이상의 라이브러리)를 제공합니다.

## 테스팅

모든 응용 프로그램은 소프트웨어가 예상대로 계속 작동하도록 보장하는 테스트 범위의 이점을 누리며, 웹 응용 프로그램도 마찬가지입니다. 각 프레임워크의 에코시스템은 테스트 작성을 용이하게 하는 도구를 제공합니다. 테스트 도구는 프레임워크 자체에 내장되어 있지 않지만, 프레임워크 앱을 생성하는 데 사용되는 명령줄 인터페이스 도구를 통해 적절한 테스트 도구에 접근할 수 있습니다.

단위 및 통합 테스트 기능이 모두 포함된 광범위한 도구가 각 프레임워크 생태계에 있습니다.

[테스트 라이브러리](https://testing-library.com/)는 React, Vue 및 Angular를 비롯한 많은 JavaScript 환경용 도구가 포함된 테스트 유틸리티 모음입니다. Ember 문서는 [Ember 앱 테스트](https://guides.emberjs.com/release/testing/)를 다룹니다.

다음은 React Testing Library의 도움으로 작성된 `CounterButton`에 대한 빠른 테스트입니다. 버튼의 존재 여부, 버튼을 0, 1, 2번 클릭한 후 올바른 텍스트가 표시되는지 여부와 같은 여러가지를 테스트합니다.

```js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CounterButton from "./CounterButton";

it("Renders a semantic button with an initial state of 0", () => {
  const { getByRole } = render(<CounterButton />);
  const btn = getByRole("button");

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Clicked 0 times");
});

it("Increments the count when clicked", () => {
  const { getByRole } = render(<CounterButton />);
  const btn = getByRole("button");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1 times");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 2 times");
});
```

## 요약

프레임워크를 사용하여 애플리케이션을 만들 때, 사용할 실제 언어, 기능 및 도구에 대해 아이디어가 좀 더 떠올랐나요? 지금부터 열정적으로 시작하고 실제로 코딩해보세요. 지금 학습을 시작할 프레임워크를 선택해보세요.

- [React](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Ember](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
- [Vue](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Svelte](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
- [Angular](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
