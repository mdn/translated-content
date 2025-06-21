---
title: 클라이언트 측 프레임워크 소개
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

JavaScript와 프레임워크의 간략한 역사, 프레임워크가 존재하는 이유와 프레임워크가 우리에게 제공하는 것, 배울 프레임워크를 선택하는 방법에 대해 생각하기 시작하는 방법, 클라이언트 측 프레임워크에 대한 대안이 무엇인지 살펴보는 영역에 대한 일반적인 개요로 프레임워크를 살펴보기 시작합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        <a href="/ko/docs/Learn/HTML">HTML</a>,
        <a href="/ko/docs/Learn/CSS">CSS</a>,
        <a href="/ko/docs/Learn/JavaScript">JavaScript</a> 핵심에 대한 친숙도.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        클라이언트 측 JavaScript 프레임워크가 어떻게 존재하게 되었는지, 어떤 문제를 해결하는지, 어떤 대안이 있는지, 그리고 하나를 선택하는 방법을 이해합니다.
      </td>
    </tr>
  </tbody>
</table>

## 간략한 역사

JavaScript가 1969년에 등장했을 때, 그때까지 정적 문서로 구성된 웹에 간헐적인 상호 작용과 흥분을 더했습니다. 웹은 단순히 읽는 것이 아니라, 하는 것을 하는 곳이 되었습니다. JavaScript의 인기는 꾸준히 증가했습니다. JavaScript로 작업한 개발자는 직면한 문제를 해결하기 위한 도구를 작성하고 **라이브러리**라는 재사용 가능한 패키지로 패키징하여 솔루션을 다른 사람과 공유할 수 있습니다. 이 공유된 라이브러리 생태계는 웹의 성장을 형성하는 데 도움이 되었습니다.

이제 JavaScript는 [모든 웹사이트의 98%에서 사용되는](https://w3techs.com/technologies/details/cp-javascript) 웹의 필수적인 부분이며, 웹은 현대 생활의 필수적인 부분입니다. 사용자는 종이를 쓰고, 예산을 관리하고, 음악을 스트리밍하고, 영화를 보고, 원거리에 있는 다른 사람들과 텍스트, 오디오 또는 비디오 채팅을 통해 즉시 통신합니다. 웹을 사용하면 컴퓨터에 설치된 기본 애플리케이션에서만 가능했던 작업을 수행할 수 있습니다. 이러한 현대적이고 복잡한 대화형 웹사이트를 종종 **웹 애플리케이션**이라고 합니다.

최신 JavaScript 프레임워크의 출현으로 매우 동적인 대화형 애플리케이션을 훨씬 쉽게 구축할 수 있게 되었습니다. **프레임워크**는 소프트웨어 구축 방법에 대한 의견을 제공하는 라이브러리입니다. 이러한 의견은 응용 프로그램에서 예측 가능성과 동질성을 허용합니다. 예측 가능성을 통해 소프트웨어를 엄청난 크기로 확장하고 유지 관리할 수 있습니다. 예측 가능성과 유지 관리 가능성은 소프트웨어의 건강과 수명에 필수적입니다.

JavaScript 프레임워크는 매일 사용하는 많은 웹사이트를 포함하여 최신 웹에서 인상적인 소프트웨어의 대부분을 지원합니다. 현재 이 글을 읽고 있는 MDN 웹 문서는 React/ReactDOM 프레임워크를 사용하여 프런트엔드에 전원을 공급합니다.

## 어떤 프레임워크가 있습니까?

많은 프레임워크가 있지만, 현재 "빅 4"는 다음과 같은 것으로 간주됩니다.

### Ember

[Ember](https://emberjs.com/)는 [SproutCore](https://en.wikipedia.org/wiki/SproutCore) 프로젝트에서 시작된 작업의 연속으로 2011년 12월에 처음 출시되었습니다. React 및 Vue와 같은 최신 대안보다 사용자가 적은 오래된 프레임워크이지만 안정성, 커뮤니티 지원 및 일부 영리한 코딩 원칙으로 인해 여전히 상당한 인기를 누리고 있습니다.

[Ember 학습 시작](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)

### Angular

[Angular](https://angular.io)는 Google의 Angular 팀과 개인 및 기업 커뮤니티가 주도하는 오픈 소스 웹 애플리케이션 프레임워크입니다. [AngularJS](https://angularjs.org/)를 빌드한 동일한 팀에서 완전히 다시 작성했습니다. Angular는 2016년 9월 14일 공식적으로 출시되었습니다.

Angular는 선언적 HTML 템플릿을 사용하는 컴포넌트 기반 프레임워크입니다. 빌드 시 개발자에게 투명하게 프레임워크의 컴파일러가 템플릿을 최적화된 JavaScript 명령으로 변환합니다. Angular는 다음 장에서 좀 더 자세히 살펴볼 JavaScript의 상위 집합인 [TypeScript](https://www.typescriptlang.org/)를 사용합니다.

[Angular 학습 시작](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

### Vue

원래 [AngularJS](https://angularjs.org/) 프로젝트에서 작업하고 배운 후, Evan You는 2014년에 [Vue](https://vuejs.org/)를 출시했습니다. Vue는 빅 4중 막내이지만, 최근 인기가 높아지고 있습니다.

Vue는 [AngularJS](https://angularjs.org/)와 마찬가지로 일부 자체 코드로 HTML을 확장합니다. 그 외에도 주로 최신 표준 JavaScript에 의존합니다.

[Vue 학습 시작](/ko/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)

### React

Facebook은 2013년에 [React](https://reactjs.org/)를 출시했습니다. 이 시점에서 Facebook은 이미 내부적으로 많은 문제를 해결하기 위해 React를 사용하고 있었습니다. 기술적으로 React 자체는 프레임워크가 아닙니다. UI 컴포넌트를 렌더링하기 위한 라이브러리입니다. React는 애플리케이션을 만들기 위해 다른 라이브러리와 함께 사용됩니다. React 및 [React Native](https://reactnative.dev/)는 개발자가 모바일 애플리케이션을 만들 수 있도록 합니다. React 및 [ReactDOM](https://reactjs.org/docs/react-dom.html)을 사용하면 웹 애플리케이션 등을 만들 수 있습니다.

React와 ReactDOM은 함께 사용되는 경우가 많기 때문에, React는 일반적으로 JavaScript 프레임워크로 이해됩니다. 이 모듈을 읽으면서 우리는 구어체로 이해하는 작업을 할 것입니다.

React는 [JSX](https://reactjs.org/docs/introducing-jsx.html)로 알려진 HTML과 유사한 구문으로 JavaScript를 확장합니다.

[React 학습 시작](/ko/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)

## 프레임워크가 존재하는 이유는 무엇입니까?

우리의 프레임워크 생성에 영감을 준 환경에 대해 논의했지만 실제로 왜 개발자가 프레임워크를 만들어야 할 필요성을 느꼈는지에 대해서는 언급하지 않았습니다. 이유를 탐색하려면 먼저 소프트웨어 개발의 과제를 검토해야 합니다.

다음 장에서 다양한 프레임워크를 사용하여 구현하는 방법을 살펴볼 할 일 목록 생성기와 같은 일반적인 종류의 애플리케이션을 고려하십시오. 이 애플리케이션은 사용자가 작업 목록을 렌더링하고, 새 작업을 추가하고, 작업을 삭제하는 것과 같은 작업을 수행할 수 있도록 해야 합니다. 애플리케이션의 기본 데이터를 안정적으로 추적하고 업데이트하면서 이를 수행해야 합니다. 소프트웨어 개발에서는 이 기본 데이터를 상태라고 합니다.

각각의 목표는 이론적으로 간단합니다. 데이터를 반복하여 렌더링할 수 있습니다. 새 작업을 만들기 위해 객체에 추가할 수 있습니다. 식별자를 사용하여 작업을 찾거나 편집하거나 삭제할 수 있습니다. 응용 프로그램이 사용자가 브라우저를 통해 이러한 모든 작업을 수행할 수 있도록 해야 한다는 점을 기억하면, 일부 균열이 나타나기 시작합니다. **진짜 문제는 애플리케이션의 상태를 변경할 때마다 일치하도록 UI를 업데이트해야 한다는 것입니다.**

할 일 목록 앱의 하나 기능인 작업 목록 렌더링을 살펴봄으로써 이 문제의 어려움을 검토할 수 있습니다.

## DOM 변경에 대한 상세 설명

HTML 요소를 빌드하고 적절한 시간에 브라우저에서 렌더링하려면, 엄청난 양의 코드가 필요합니다. 상태가 다음과 같이 구성된 객체의 배열이라고 가정해 보겠습니다.

```js
const state = [
  {
    id: "todo-0",
    name: "몇 가지 프레임워크를 알아보자!",
  },
];
```

이러한 작업 중 하나를 사용자에게 어떻게 표시합니까? 각 작업을 목록 항목으로 나타내려고 합니다. 순서가 지정되지 않은 목록 요소(a [`<ul>`](/ko/docs/Web/HTML/Reference/Elements/ul)) 안에 HTML[`<li>`](/ko/docs/Web/HTML/Reference/Elements/li) 요소를 어떻게 만들까요? 다음과 같이 보일 수 있습니다.

```js
function buildTodoItemEl(id, name) {
  const item = document.createElement("li");
  const span = document.createElement("span");
  const textContent = document.createTextNode(name);

  span.appendChild(textContent);

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}
```

여기서는, [`document.createElement()`](/ko/docs/Web/API/Document/createElement) 메서드를 사용하여 `<li>`를 만들고 몇 줄의 추가 코드를 사용하여 필요한 속성과 자식을 만듭니다.

이전 코드 조각의 10번째 줄은 또 다른 빌드 함수인 `buildDeleteButtonEl()`을 참조합니다. 목록 항목 요소를 빌드하는 데 사용하는 것과 유사한 패턴을 따릅니다.

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  const textContent = document.createTextNode("Delete");

  button.setAttribute("type", "button");
  button.appendChild(textContent);

  return button;
}
```

이 버튼은 아직 아무것도 하지 않지만, 나중에 삭제 기능을 구현하기로 결정하면 됩니다. 페이지에서 항목을 렌더링하는 코드는 다음과 같을 수 있습니다.

```js
function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.firstChild) {
    todoListEl.removeChild(todoListEl.firstChild);
  }
  todoListEl.appendChild(frag);
}
```

이제 UI에 30줄 이상의 코드가 단지 DOM에서 렌더링하기 위해 생겼고, 나중에 목록 항목의 스타일을 지정하는 데 사용할 수 있는 클래스를 추가하지도 않았습니다!

이 예에서와 같이, DOM으로 직접 작업하려면, DOM이 작동하는 방식에 대한 많은 것(속성을 변경하는 방법, 요소를 서로 안에 넣는 방법, 페이지에 표시하는 방법)을 이해해야 합니다. 이 코드는 실제로 사용자 상호 작용을 처리하거나 작업 추가 또는 삭제를 처리하지 않습니다. 이러한 기능을 추가하면 적시에 적절한 방식으로 UI를 업데이트 해야 한다는 점을 기억해야 합니다.

JavaScript 프레임워크는 이러한 종류의 작업을 훨씬 쉽게 하기 위해 만들어졌으며, 더 나은 개발자 경험을 제공하기 위해 존재합니다. 이들은 JavaScript에 새로운 기능을 제공하지 않고, 오늘날의 웹을 구축할 수 있도록 JavaScript의 기능에 더 쉽게 액세스하는 것을 지원합니다.

이 섹션의 코드 샘플을 실제로 보려면 [CodePen에서 작동하는 앱 버전](https://codepen.io/mxmason/pen/XWbPNmw)을 확인하세요. 사용자가 새 작업을 추가하고 삭제할 수도 있습니다.

이 섹션에서 사용된 JavaScript에 대해 자세히 읽어보십시오.

- [`document.createElement()`](/ko/docs/Web/API/Document/createElement)
- [`document.createTextNode()`](/ko/docs/Web/API/Document/createTextNode)
- [`document.createDocumentFragment()`](/ko/docs/Web/API/Document/createDocumentFragment)
- [`eventTarget.addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener)
- [`node.appendChild()`](/ko/docs/Web/API/Node/appendChild)
- [`node.removeChild()`](/ko/docs/Web/API/Node/removeChild)

## UI를 구축하는 또 다른 방법

모든 JavaScript 프레임워크는 사용자 인터페이스를 보다 선언적으로 작성하는 방법을 제공합니다. 즉, 그것들은 UI가 어떻게 보여야 하는지를 설명하는 코드를 작성할 수 있게 해주며, 프레임워크는 뒤에서 DOM에서 일어나도록 합니다.

반복적으로 새로운 DOM 요소를 구축하는 바닐라 JavaScript 접근 방식은 한 눈에 이해하기 어려웠습니다. 반대로, 다음 코드 블록은 Vue를 사용하여 작업 목록을 설명하는 방법을 보여줍니다.

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name\}}</span>
    <button type="button">삭제</button>
  </li>
</ul>
```

그게 전부입니다. 이 코드 조각은 약 32줄의 코드를 6줄로 줄입니다. 중괄호와 `v-` 속성이 익숙하지 않더라도 괜찮습니다. 이 모듈의 뒷부분에서 Vue 관련 구문에 대해 배우게 됩니다. 여기서 알아두어야 할 점은 이 코드는 그것이 나타내는 UI처럼 보이지만, 기본 JavaScript 코드는 그렇지 않다는 것입니다.

Vue 덕분에 UI를 구축하기 위해 자체 함수를 작성할 필요가 없었습니다. 프레임워크는 이를 최적화되고 효율적인 방식으로 처리합니다. 여기서 우리의 유일한 역할은 각 항목이 어떻게 생겼는지 Vue에 설명하는 것이었습니다. Vue에 익숙한 개발자는 프로젝트에 참여하면 진행 상황을 빠르게 파악할 수 있습니다. Vue는 혼자가 아닙니다. 프레임워크를 사용하면 팀과 개인의 효율성이 향상됩니다.

바닐라 JavaScript에서 이것과 유사한 일을 하는 것이 가능합니다. [템플릿 리터럴 문자열](/ko/docs/Web/JavaScript/Reference/Template_literals)을 사용하면 최종 요소의 모양을 나타내는 HTML 문자열을 쉽게 작성할 수 있습니다. 이는 할 일 목록 응용프로그램과 같이 단순한 것에 유용한 아이디어일 수 있지만, 수천 개의 데이터 레코드를 관리하고 사용자 인터페이스에서 많은 고유 요소를 렌더링할 수 있는 대규모 응용프로그램에서는 유지 관리할 수 있습니다.

## 프레임워크가 우리에게 주는 다른 것들

프레임워크가 제공하는 다른 이점 중 일부를 살펴보겠습니다. 이전에 언급했듯이 프레임워크의 이점은 바닐라 JavaScript에서 달성할 수 있지만, 프레임워크를 사용하면 이러한 문제를 직접 해결해야 하는 모든 인지 부하가 제거됩니다.

### 도구

이 모듈의 각 프레임워크에는 대규모 활성 커뮤니티가 있으므로, 각 프레임워크의 에코시스템은 개발자 경험을 개선하는 도구를 제공합니다. 이러한 도구를 사용하면 테스트(응용 프로그램이 제대로 작동하는지 확인) 또는 Linting(코드에 오류가 없고 스타일이 일관성이 있는지 확인)과 같은 항목을 쉽게 추가할 수 있습니다.

> [!NOTE]
> 웹 도구 개념에 대해 자세히 알아보려면, [클라이언트 측 도구 개요](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)를 확인해주세요.

### 구획화

대부분의 주요 프레임워크는 개발자가 사용자 인터페이스의 다른 부분을 서로 통신할 수 있는 유지 관리 가능하고, 재사용 가능한 코드 덩어리인 컴포넌트로 추상화하도록 권장합니다. 주어진 컴포넌트와 관련된 모든 코드는 하나의 파일(또는 몇 개의 특정 파일)에 있을 수 있으므로 개발자는 해당 컴포넌트를 변경하기 위해 어디로 가야 하는지 정확히 알 수 있습니다. 바닐라 JavaScript 앱에서는 효율적이고, 확장 가능한 방식으로 이를 달성하기 위해 고유한 규칙 집합을 만들어야 합니다. 많은 JavaScript 개발자는 자신의 장치에 남겨두면 UI의 한 부분과 관련된 모든 코드가 파일 전체 또는 다른 파일 전체에 퍼져 있는 상태로 끝날 수 있습니다.

### 라우팅

웹의 가장 중요한 기능은 사용자가 한 페이지에서 다른 페이지로 이동할 수 있다는 것입니다. 결국 웹은 서로 연결된 문서의 네트워크입니다. 바로 이 웹사이트의 링크를 따라가면 브라우저가 서버와 통신하고 표시할 새 콘텐츠를 가져옵니다. 이렇게 하면 주소 표시줄의 URL이 변경됩니다. 이 새 URL을 저장하고 나중에 페이지로 다시 돌아오거나, 다른 사람과 공유하여 같은 페이지를 쉽게 찾을 수 있습니다. 브라우저는 탐색 기록을 기억하고 앞뒤로 탐색할 수도 있습니다. 이를 **서버 측 라우팅**이라고 합니다.

최신 웹 애플리케이션은 일반적으로 새 HTML 파일을 가져오거나 렌더링하지 않습니다. 단일 HTML 셸을 로드하고, 사용자를 웹의 새 주소로 안내하지 않고 내부 DOM(**단일 페이지 앱** 또는 **SPA**라고 합니다)을 지속적으로 업데이트 합니다. 각각의 새 의사 웹페이지는 일반적으로 시각적인 요소들라고 하며, 기본적으로 라우팅이 수행되지 않습니다.

SPA가 충분히 복잡하고, 고유한 시각적인 요소들을 충분히 렌더링하는 경우, 애플리케이션에 라우팅 기능을 가져오는 것이 중요합니다. 사람들은 애플리케이션의 특정 페이지에 연결하고, 탐색 기록에서 앞뒤로 이동할 수 있는 기능에 익숙하며, 이러한 표준 웹 기능이 손상되면 경험이 저하됩니다. 이러한 방식으로 클라이언트 애플리케이션에서 라우팅을 처리하는 경우 **클라이언트 측 라우팅**이라고 합니다.

JavaScript와 브라우저의 기본 기능을 사용하여 라우터를 만드는 것은 가능하지만, 널리 사용되고 적극적으로 개발된 프레임워크에는 라우팅을 개발 프로세스에서 보다 직관적으로 만들 수 있는 동반 라이브러리가 있습니다.

## 프레임워크를 사용할 때 고려해야 할 사항

효과적인 웹 개발자가 된다는 것은 작업에 가장 적합한 도구를 사용하는 것을 의미합니다. JavaScript 프레임워크를 사용하면 프런트엔드 애플리케이션 개발이 쉬워지지만, 모든 문제를 해결할 수 있는 묘책은 아닙니다. 이 섹션에서는 프레임워크를 사용할 때 고려해야 할 몇 가지 사항에 대해 설명합니다. 프레임워크가 전혀 필요하지 않을 수도 있다는 점을 염두에 두세요. 단지 프레임워크를 위해 프레임워크를 사용하게 되는 것은 아니라는 점에 유의하세요.

### 도구에 대한 친숙도

바닐라 JavaScript와 마찬가지로 프레임워크는 학습하고 고유한 특성을 갖는 데 시간이 걸립니다. 프로젝트에 프레임워크를 사용하기로 결정하기 전에, 프레임워크가 자신에게 불리하게 작동하지 않고, 자신에게 유용하도록 기능을 충분히 익힐 시간이 있는지 확인하고, 팀원도 편안하게 사용할 수 있는지 확인하세요.

### 오버엔지니어링

웹 개발 프로젝트가 몇 페이지로 구성된 개인 포트폴리오이고, 해당 페이지에 대화형 기능이 거의 또는 전혀 없는 경우, 프레임워크(및 모든 JavaScript)가 전혀 필요하지 않을 수 있습니다. 즉, 프레임워크는 모놀리식(monolithic)이 아니며, 일부는 다른 것보다 소규모 프로젝트에 더 적합합니다. Smashing Magazine의 기사에서 Sarah Drasner는 [Vue가 jQuery를 대체할 수 있는 방법](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/)이 웹 페이지의 작은 부분을 상호 작용하는 도구로 사용하는 방법에 대해 작성하였습니다.

### 더 큰 코드 기반 및 추상화

프레임워크를 사용하면 백그라운드에서 DOM 상호 작용을 처리하여, 보다 선언적인 코드를 작성할 수 있으며 때로는 전체적으로 더 적은 코드를 작성할 수 있습니다. 이 추상화는 개발자 경험에 유용하지만, 무료는 아닙니다. 작성한 내용을 DOM 변경으로 변환하기 위해, 프레임워크는 자체 코드를 실행해야 합니다. 그러면 최종 소프트웨어 조각이 더 커지고 실행 비용이 더 많이 듭니다.

일부 추가 코드는 불가피하며, 트리쉐이킹(빌드 프로세스 중에 앱에서 실제로 사용되지 않는 모든 코드 제거)을 지원하는 프레임워크를 사용하면 애플리케이션을 작게 유지할 수 있지만, 이는 특히 휴대전화와 같이 네트워크/스토리지 제약이 더 많은 기기에서 앱의 성능을 고려할 때 여전히 염두에 두어야 할 요소입니다.

프레임워크의 추상화는 JavaScript뿐만 아니라, 웹의 본질과의 관계에도 영향을 미칩니다. 웹 용으로 빌드하는 방법에 관계없이, 사용자가 궁극적으로 상호 작용하는 계층인 최종 결과는, HTML입니다. 전체 애플리케이션을 JavaScript로 작성하면 HTML과 다양한 태그의 목적을 간과하게 될 수 있으며, 의미가 없고 액세스할 수 없는 HTML 문서를 생성하게 됩니다. 실제로 JavaScript에 전적으로 의존하고 JavaScript 없이는 작동하지 않는 깨지기 쉬운 응용 프로그램을 작성할 수 있습니다.

프레임워크는 문제의 원인이 아닙니다. 우선 순위가 잘못되면, 모든 애플리케이션이 깨지기 쉽고, 비대해지며, 액세스가 불가능할 수 있습니다. 그러나 프레임워크는 개발자로서 우리의 우선 순위를 증폭시켜줍니다. 우선 순위가 복잡한 웹 앱을 만드는 것이라면, 쉽게 할 수 있습니다. 그러나 우선 순위가 성능과 접근성을 신중하게 보호하지 않으면, 프레임워크가 취약성, 코드 양의 증가 및 접근성을 증폭시킬 것입니다. 프레임워크에 의해 증폭된 최신 개발자 우선순위는 많은 곳에서 웹의 구조를 뒤집었습니다. 강력한 콘텐츠 우선 문서 네트워크 대신, 웹은 이제 종종 JavaScript를 먼저 사용하고, 사용자 경험을 마지막에 둡니다.

## 프레임워크 기반 웹의 접근성

이전 섹션에서 말한 내용을 기반으로, 접근성에 대해 좀 더 이야기해 봅시다. 사용자 인터페이스를 접근 가능하게 만들려면 항상 약간의 생각과 노력이 필요하며, 프레임워크는 해당 프로세스를 복잡하게 만들 수 있습니다. ARIA [라이브 영역](/ko/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) 또는 포커스 관리와 같은 기본 브라우저 기능에 액세스하려면 고급 프레임워크 API를 사용해야 하는 경우가 많습니다.

경우에 따라, 프레임워크 애플리케이션은 기존 웹 사이트에 존재하지 않는 접근성 장벽을 생성합니다. 이에 대한 가장 큰 예는 앞에서 언급한 클라이언트 측 라우팅입니다.

기존(서버 측) 라우팅을 사용하면, 웹 탐색에서 예측 가능한 결과를 얻을 수 있습니다. 브라우저는 페이지 상단에 초점을 맞추는 것을 알고 있으며, 보조 기술은 페이지 제목을 알립니다. 이러한 일은 새 페이지로 이동할 때마다 발생합니다.

클라이언트 측 라우팅을 사용하면, 브라우저가 새 웹 페이지를 로드하지 않으므로, 자동으로 포커스를 조정하거나 새 페이지 제목을 알려야 한다는 것을 알 수 없습니다. 프레임워크 작성자는 이러한 기능을 다시 생성하는 JavaScript를 작성하는 데 막대한 시간과 노력을 기울였으며, 그 후에도 완벽하게 수행된 프레임워크는 없었습니다.

결론은 모든 웹 프로젝트의 맨 처음부터 접근성을 고려해야 한다는 것입니다. 그렇지 않으면 프레임워크를 사용하는 추상화된 코드베이스가 주요 접근성 문제를 겪을 가능성이 더 높다는 점을 명심하세요.

## 프레임워크를 선택하는 방법

이 모듈에서 설명하는 각 프레임워크는 웹 애플리케이션 개발에 대해 서로 다른 접근 방식을 사용합니다. 각각은 정기적으로 개선되거나 변경되고 있습니다. 올바른 프레임워크를 선택하는 것은 팀 및 프로젝트에 따라 달라지는 프로세스이며, 필요에 맞는 것을 찾기 위해 자체 조사를 수행해야 합니다. 즉, 보다 효과적으로 옵션을 조사하기 위해 물어볼 수 있는 몇 가지 질문을 확인했습니다.

1. 프레임워크는 어떤 브라우저를 지원합니까?
2. 프레임워크가 활용하는 도메인별 언어는 무엇입니까?
3. 프레임워크에 강력한 커뮤니티와 유용한 문서(및 기타 지원)가 있습니까?

이 섹션의 표는 각 프레임워크에서 제공하는 현재 브라우저 지원과 함께 사용할 수 있는 **도메인 별 언어**에 대한 간략한 요약을 제공합니다.

대체로, {{Glossary("DSL/Domain_specific_language", "domain-specific languages (DSLs)")}}은 소프트웨어 개발의 특정 영역과 관련된 프로그래밍 언어입니다. 프레임워크 맥락에서, DSL은 해당 프레임워크로 개발하기 쉽게 만드는 JavaScript 또는 HTML의 변형입니다. 결정적으로, 어떤 프레임워크도 개발자가 특정 DSL을 사용하도록 요구하지 않지만, 거의 모두 특정 DSL을 염두에 두고 설계되었습니다. 프레임워크의 기본 DSL을 사용하지 않기로 선택하면, 개발자 경험을 향상시킬 수 있는 기능을 놓치게 됩니다.

새 프로젝트를 선택할 때, 프레임워크의 지원 매트릭스와 DSL을 진지하게 고려해야 합니다. 일치하지 않는 브라우저 지원은 사용자에게 장벽이 될 수 있습니다. 일치하지 않는 DSL 지원은 당신과 당신의 팀원에게 장벽이 될 수 있습니다.

| 프레임워크 | 브라우저 지원                       | 선호하는 DSL | 지원되는 DSL들         | 참고자료                                                                    |
| ---------- | ----------------------------------- | ------------ | ---------------------- | --------------------------------------------------------------------------- |
| Angular    | Modern                              | TypeScript   | HTML-based; TypeScript | [공식 문서](https://angular.io/guide/browser-support)                       |
| React      | Modern                              | JSX          | JSX; TypeScript        | [공식 문서](https://reactjs.org/docs/react-dom.html#browser-support)        |
| Vue        | Modern (IE9+ in Vue 2)              | HTML-based   | HTML-based, JSX, Pug   | [공식 문서](https://cli.vuejs.org/guide/browser-compatibility.html)         |
| Ember      | Modern (IE9+ in Ember version 2.18) | Handlebars   | Handlebars, TypeScript | [공식 문서](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/) |

> [!NOTE]
> 우리가 "HTML-based"이라고 설명한 DSL에는 공식 이름이 없습니다. 실제 DSL은 아니지만 비표준 HTML이므로, 강조할 가치가 있다고 생각합니다.

### 프레임워크에 강력한 커뮤니티가 있습니까?

커뮤니티 규모는 접근하기 쉬운 숫자와 직접적인 상관관계가 없기 때문에 측정하기 가장 어려운 지표일 것입니다. 프로젝트의 GitHub 별 또는 주간 npm 다운로드 수를 확인하여 인기도를 파악할 수 있지만, 때로는 몇 개의 포럼을 검색하거나 다른 개발자와 대화하는 것이 가장 좋습니다. 커뮤니티의 규모뿐만 아니라, 커뮤니티가 얼마나 환영하고 포용적인지, 사용 가능한 문서가 얼마자 좋은지도 중요합니다.

### 웹상의 의견

이 문제에 대한 우리의 말을 그대로 받아들이지 마세요. 웹 전체에 토론이 있습니다. Wikimedia Foundation은 최근 Vue를 프런트 엔드로 사용하기로 선택하고 [프레임워크 채택에 대한 의견 요청(RFC) 요청](https://phabricator.wikimedia.org/T241180)을 게시했습니다. RFC의 작성자인 Eric Gardner는 시간을 들여 Wikimedia 프로젝트의 요구 사항과 특정 프레임워크가 팀에 적합한 이유를 설명했습니다. 이 RFC는 프런트 엔드 프레임워크를 사용할 계획을 세울 때 스스로 수행해야 하는 조사 유형의 좋은 예입니다.

[JavaScript 현황 설문조사](https://stateofjs.com/)는 JavaScript 개발자의 유용한 피드백 모음입니다. 프레임워크 사용과 프레임워크에 대한 개발자 정서에 대한 데이터를 포함하여 JavaScript와 관련된 많은 주제를 다루고 있습니다. 현재 몇 년간의 데이터를 사용할 수 있으므로 프레임워크의 인기도를 알 수 있습니다.

Vue 팀은 [Vue를 다른 인기 있는 프레임워크와 철저하게 비교했습니다](https://v2.vuejs.org/v2/guide/comparison.html). 이 비교에는 약간의 편향이 있을 수 있지만(그들은 지적합니다), 그럼에도 불구하고 귀중한 리소스입니다.

## 클라이언트 측 프레임워크의 대안

웹 개발 프로세스를 신속하게 처리할 도구를 찾고 있고, 프로젝트에 집중적인 클라이언트 측 JavaScript가 필요하지 않다는 것을 알고 있다면, 웹 구축을 위한 몇 가지 다른 솔루션 중 하나에 도달할 수 있습니다.

- 콘텐츠 관리 시스템
- 서버 측 렌더링
- 정적 사이트 생성기

### 콘텐츠 관리 시스템

**콘텐츠 관리 시스템**(**CMSes**)은 사용자가 직접 코드를 작성하지 않고도 웹용 콘텐츠를 만들 수 있는 도구입니다. 대규모 프로젝트, 특히 코딩 능력이 제한된 콘텐츠 작성자의 입력이 필요한 프로젝트나, 시간을 절약하려는 프로그래머에게 적합한 솔루션입니다. 그러나 설정하는 데 상당한 시간이 필요하며, CMS를 사용하면 웹 사이트의 최종 출력에 대한 제어를 최소한 어느 정도 양보해야 합니다. 예를 들어, 선택한 CMS가 기본적으로 액세스 가능한 콘텐츠를 작성하지 않는 경우, 이를 개선하기 어려운 경우가 많습니다.

인기있는 예로는 [Wordpress](https://wordpress.com/), [Joomla](https://www.joomla.org/), 및 [Drupal](https://www.drupal.org/)이 있습니다.

### 서버 측 렌더링

**서버 측 렌더링** (**SSR**)은 단일 페이지 애플리케이션을 렌더링하는 것이 서버의 작업인 애플리케이션 아키텍처입니다. 이는 JavaScript 애플리케이션을 구축하는 가장 일반적이고 가장 간단한 방법인 클라이언트측 렌더링의 반대입니다. 렌더링된 HTML 파일만 전송하기 때문에 클라이언트 장치에서 서버 측 렌더링이 더 쉽지만, 클라이언트 측에서 렌더링된 애플리케이션에 비해 설정하기 어려울 수 있습니다.

이 모듈에서 다루는 모든 프레임워크는 서버 측 렌더링과 클라이언트 측 렌더링을 지원합니다. React의 경우 [Next.js](https://nextjs.org/), Vue의 경우 [Nuxt.js](https://nuxtjs.org/)(헷갈릴 수 있지만, 관련 없음!), Ember의 경우 [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot), Angular의 경우 [Angular Universal](https://angular.io/guide/universal)를 확인하세요.

> [!NOTE]
> 일부 SSR 솔루션은 커뮤니티에서 작성하고 유지 관리하는 반면, 일부는 프레임워크 유지 관리자가 제공하는 "공식" 솔루션입니다.

### 정적 사이트 생성기

정적 사이트 생성기는 여러 페이지로 구성된 웹사이트의 모든 웹페이지(관련 CSS 또는 JavaScript 포함)를 동적으로 생성하여 원하는 위치에 게시할 수 있도록 하는 프로그램입니다. 예를 들어, 게시 호스트는 GitHub 페이지 분기, Netlify 인스턴스 또는 선택한 개인 서버일 수 있습니다. 이 접근 방식에는 주로 성능(사용자 장치가 JavaScript로 페이지를 구축하지 않고 이미 완료됨) 및 보안(정적 페이지에는 공격 벡터가 적음)과 관련된 여러 가지 이점이 있습니다. 이러한 사이트는 여전히 필요한 경우 JavaScript를 사용할 수 있지만 그것에 의존하지는 않습니다. 정적 사이트 생성기는 다른 도구와 마찬가지로 학습하는 데 시간이 걸리므로, 개발 프로세스에 장벽이 될 수 있습니다.

정적 사이트는 고유한 페이지를 원하는 만큼 적게 또는 많이 가질 수 있습니다. 프레임워크를 통해 클라이언트 측 JavaScript 애플리케이션을 빠르게 작성할 수 있는 것처럼 정적 사이트 생성기를 사용하면 개별적으로 작성했을 HTML 파일을 빠르게 생성할 수 있습니다. 프레임워크와 마찬가지로 정적 사이트 생성기를 사용하면 개발자가 웹 페이지의 공통 부분을 정의하는 컴포넌트를 작성하고, 이러한 컴포넌트를 함께 구성하여 최종 페이지를 만들 수 있습니다. 정적 사이트 생성기의 맥락에서 이러한 컴포넌트를 **템플릿**이라고 합니다. 정적 사이트 생성기에 의해 구축된 웹 페이지는 프레임워크 애플리케이션의 홈이 될 수도 있습니다. 예를 들어, 사용자가 방문할 때 정적으로 생성된 웹 사이트의 특정 페이지에서 React 애플리케이션을 부팅하도록 하려면 그렇게 할 수 있습니다.

정적 사이트 생성기는 꽤 오랫동안 사용되어 왔으며, 최근 웹 역사에서 약간의 부활을 보았습니다. 이제 [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/), [Eleventy](https://www.11ty) 및 [Gatsby](https://www.gatsbyjs.com/)와 같은 몇 가지 강력한 옵션을 사용할 수 있습니다.

정적 사이트 생성기에 대해 전체적으로 자세히 알아보려면 Tatiana Mac의 [Eleventy 초보자 가이드](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/)를 확인하세요. 시리즈의 첫 번째 기사에서, 그녀는 정적 사이트 생성기가 무엇인지, 웹 콘텐츠를 게시하는 다른 수단과 어떻게 관련되는지 설명합니다.

## 요약

이것으로 프레임워크 소개를 마치겠습니다. 아직 어떤 코드도 가르치지 않았지만, 처음에 프레임워크를 사용하는 이유와 프레임워크를 선택하는 방법에 대한 유용한 배경 정보를 제공하고, 더 많은 것을 배우고 몰입할 수 있도록 만들었습니다!

다음 기사는 더 낮은 수준으로 내려가서, 프레임워크가 제공하는 경향이 있는 특정 종류의 기능과, 프레임워크가 작동하는 이유를 살펴봅니다.

{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
