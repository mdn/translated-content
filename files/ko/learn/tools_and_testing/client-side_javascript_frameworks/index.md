---
title: Understanding client-side JavaScript frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
---

{{LearnSidebar}}

자바스크립트 프레임워크는 최신 프론트엔드 웹 개발의 필수 부분으로, 개발자에게 확장 가능한 대화형 웹 응용 프로그램을 구축하기 위한 검증된 도구를 제공합니다. 많은 현대 기업들은 프레임워크를 도구화(tooling)의 표준 부분으로 사용하기때문에, 프론트엔드 개발에는 이제 프레임워크 경험이 필요합니다.

프론트엔드 개발자 지망생으로서 프레임워크를 배울 때 시작해야 할 부분을 알기가 어려울 수 있습니다. 선택할 수 있는 프레임워크가 너무 많고, 새로운 프레임워크는 항상 나타나고,대부분 유사한 방식으로 작동하지만 다른 일을 합니다. 때문에 프레임워크를 사용할 때 주의해야 할 몇 가지 사항이 있습니다.

이 글에서는 프레임워크를 배우는데 도움이되는 편안한 출발점을 제공하고자 합니다. 우리는 React/ReactDOM, Vue, 또는 그외 특정 프레임워크에 대해 알아야 할 모든 것을 철저하게 가르치려는것이 아닙니다. 프레임워크 자체 문서들 및 다른 리소스들이 이미 철저하게 가르쳐주고 있습니다. 대신 우리는 다음과 같은, 보다 근본적인 질문에 답하고 지원하려고 합니다.

- 왜 프레임워크를 사용해야 하나요? 그들이 어떤 문제를 해결하나요?
- 프레임워크를 선택할 때 어떤 질문을 해야 하나요? 프레임워크를 사용해야 하나요?
- 프레임워크에는 어떤 기능이 있나요? 그것들은 일반적으로 어떻게 작동하고, 이러한 기능에 대한 프레임워크에 구현은 어떻게 다른가요?
- "vanilla" 자바스크립트 또는 HTML과 어떤 관련이 있나요?

그 후에, 우리는 몇 가지 다른 프레임워크 선택의 핵심을 다루는 튜토리얼을 제공할 것입니다. 이는 더 심도있게 학습하기에 충분한 맥락과 친숙함을 제공해줄겁니다. 우리는 여러분이 앞으로 나아가 접근성과 같은 웹 플랫폼의 근본적인 모범 사례를 잊지 않는 실용적인 방법으로 프레임워크에 대해 배우고 발전시키기를 바랍니다.

**["클라이언트 사이드 프레임워크 소개"문서로 지금 시작하세요!](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## 전제조건

클라이언트 사이드 프레임워크를 배우기 전에 [HTML](/ko/docs/Learn/HTML), [CSS](/ko/docs/Learn/CSS), [JavaScript](/ko/docs/Learn/JavaScript) 와 같은 핵심 웹 언어의 기초를 익혀야 합니다.

결과적으로 코드는 더욱 풍부해지고 전문적이게 될 것이며, 프레임워크가 구축하고 있는 근본적인 웹 플랫폼 기능을 이해한다면 보다 확실하게 문제를 해결할 수 있을 겁니다.

> **알림:** ### 프론트 개발자가 되고 싶으신가요?목표를 달성하는데 필요한 모든 필수 정보가 포함 된 과정을 구성했습니다.[시작하기](/ko/docs/Learn/Front-end_web_developer)

## 입문 가이드

- [1. 클라이언트 사이드 프레임워크 소개](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : 우리는 이 영역에 대한 일반적인 개요로 프레임워크를 살펴 볼겁니다. 자바스크립트와 프레임워크의 간략한 역사, 프레임워크가 왜 존재하는지와 그들이 우리에게 무엇을 제공하는지, 학습을 프레임워크를 어떻게 선택할지 생각하는 방법, 클라이언트 사이드 프레임워크에 대한 어떤 대안이 있는지 등이 해당합니다.
- [2. 프레임워크 주요 기능](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : 각 주요 자바스크립트 프레임워크는 DOM 업데이트, 브라우저 이벤트 처리, 즐거운 개발 경험에 대해 다양한 접근 방식을 갖고 있습니다. 이 글에서는 "4대" 프레임워크의 주요 기능을 살펴보고 프레임워크가 높은 수준에서 작동하는 방식과 프레임워크의 차이점을 살펴봅니다.

## 리액트 튜토리얼

> **참고:** **참조**: React/ReactDOM 16.13.1과 create-react-app 3.4.1. 을 사용하여 2020년 5월에 마지막으로 테스트된 튜토리얼입니다.
>
> 우리의 버전에 대해 여러분의 코드를 확인해야 하는 경우, 우리의 [todo-react repository](https://github.com/mdn/todo-react)에서 샘플 React app 코드의 완성된 버전을 볼 수 있습니다. 라이브 버전을 실행하려면<https://mdn.github.io/todo-react-build/>을 참조하세요.

- [1. React 시작하기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - : 이 글은 리액트에 대한 첫걸음입니다. 우리는 리액트의 배경과 사용 사례에 대한 약간의 세부 사항을 학습합니다. 우리 컴퓨터 로컬에서 기본적인 리액트 툴체인을 설정하고, 간단한 스타터 앱을 만들어 리액트가 어떻게 작동하는지 배웁니다.
- [2. React todo list 시작하기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : 우리가 React에서 개념 증명(proof-of-concept)을 작성하는 임무를 맡았다고 가정 해 봅시다. 사용자가 작업하려는 과제(task)를 추가, 수정, 삭제 혹은 그것들을 삭제하는 대신 완료된 것으로 표시할 수 있는 앱입니다. 이 글에서는 기본 앱 컴포넌트 구조와 스타일을 배치하는 과정, 각각의 컴포넌트를 정의하고 상호작용하는 방법을 설명합니다.
- [3. React app 컴포넌트 세분화](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : 이 시점에서 우리의 앱은 단일체(monolith)입니다. 우리는 이것을 관리 가능하고 설명적인 컴포넌트들로 분리해야 합니다. React에는 컴포넌트와 컴포넌트가 아닌것에 대한 엄격한 규칙이 없습니다. 그것은 사용자에게 달려있습니다. 이 글에서는 앱을 컴포넌트로 분해하는 합리적인 방법을 보여줍니다.
- [4. React 상호작용(interactivity): Events 와 state](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : 컴포넌트 구성이 완성되면 완전한 정적 UI 에서 실제로 상호작용하고 변화시킬 수 있는 UI로 앱을 업데이트할 차례입니다. 이 글에서는 이벤트와 state에 대해 자세히 알아봅니다.
- [5. React 상호작용(interactivity): 수정, 필터링, 조건부 렌더링](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : 리액트 여정이 끝날 무렵(적어도 현재로서는) Todo list 앱의 주요 기능 영역에 마무리 작업을 추가합니다. 여기서는 기존 과제(task)를 편집할 수 있도록 하고, 완료된 과제와 완료되지 않은 과제 모두 필터링 하는 작업이 포함됩니다. 또한 도중에 조건부 UI 렌더링도 살펴보겠습니다.
- [6. React 접근성(Accessibility)](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : 이 글에서는 React의 포커스 관리를 포함하여 접근성에 관점을 맞출것입니다. 키보드 전용 및 스크린 리더기 사용자 모두에게 유용성을 개선하고 혼동을 줄일 수 있습니다.
- [7. React 리소스(resources)](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : 우리의 마지막 글은 학습을 계속하기 위해 사용할 수 있는 React 리소스 목록을 제공합니다.

## Ember tutorials

> **참고:** **참조**: Ember/Ember CLI 3.18.0을 사용하여 2020년 5월에 마지막으로 테스트된 튜토리얼입니다.
>
> 우리의 버전에 대해 여러분의 코드를 확인해야 하는 경우, 우리의 [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc)에서 샘플 Ember app 코드의 완성된 버전을 볼 수 있습니다. 라이브 버전을 실행하려면 <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> 을 참조하세요. (여기에는 튜토리얼에서 다루지 않은 몇 가지 기능도 포함됩니다.)

- [1. Ember 시작하기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : 첫 번째 Ember 글에서는 Ember 의 작동방식과 유용한 기능에 대해 살펴봅니다. 로컬에 Ember 툴체인을 설치하고, 샘플 앱을 만들어 개발 준비를 위한 초기 설정을 수행합니다.
- [2. Ember app 구조와 컴포넌트화](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : 이 글에서는 TodoMVC Ember app의 구조를 설계하는 방법에 대해 알아봅니다. HTML을 추가하고, HTML 구조를 컴포넌트로 나눕니다.
- [3. Ember 상호작용(interactivity): Events, classes, state](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : 이제 앱에 상호작용하는 기능을 추가하여 새로운 할일(todo) 항목을 추가하고 표시할 수 있습니다. 그 과정에서 Ember 이벤트를 사용하는 방법을 살펴보겠습니다. 상호작용하는 기능을 제어하기 위해 자바스크립트 코드를 포함하는 컴포넌트 클래스를 만들고, 앱의 데이터 상태(state)를 추적하는 서비스를 설정합니다.
- [4. Ember 상호작용: 푸터 기능, 조건부 렌더링](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : 이제 앱에서 푸터 기능을 시작할 차례입니다. 아직 완료하지 않은 할일(todo) 항목의 수를 카운트하고, 완료된 할일(체크표시한 체크박스)에 스타일을 올바르게 적용합니다. 또한 "Clear completed" 버튼을 연결합니다. 이 과정에서 템플릿에서 조건부 렌더링을 사용하는 방법을 배웁니다.
- [5. Ember 라우팅](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : 이 글에서는 라우팅 또는 URL기반 필터링에 대해 설명합니다. 이를 사용하여 todo의 세 가지 뷰("All", "Active", "Completed")를 고유한 URL로 제공합니다.
- [6. Ember 리소스와 문제해결](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : 마지막 Ember 글은 학습을 진행하는데 사용할 수 있는 리소스 목록, 유용한 문제 해결(troubleshooting)에 관한 내용, 그외 정보를 제공합니다.

## Vue tutorials

> **참고:** **참조**: Vue 2.6.11을 사용하여 2020년 5월에 마지막으로 테스트한 튜토리얼입니다.
>
> 우리의 버전에 대해 여러분의 코드를 확인해야 하는 경우, 우리의 [todo-vue repository](https://github.com/mdn/todo-vue)에서 샘플 Vue app 코드의 완성된 버전을 볼 수 있습니다. 라이브 버전을 실행하려면 <https://mdn.github.io/todo-vue/dist/> 를 참조하세요.

- [1. Vue 시작하기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : 이제 세 번째 프레임워크 뷰를 소개합니다. 이 글에서는 Vue의 배경을 약간 살펴보고, 설치 방법과 새 프로젝트를 만드는 방법에 대해 알아봅니다. 전체 프로젝트의 HLS(high-level structure) 와 각각의 컴포넌트를 공부합니다. 또한, 프로젝트를 로컬에서 실행하는 방법과 예제 작성을 시작할 준비를 합니다.
- [2. 첫 번째 Vue 컴포넌트 만들기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : 이제 Vue에 대해 자세히 살펴보고 우리만의 커스텀 컴포넌트를 만들겠습니다. Todo list의 각 항목을 나타내는 컴포넌트를 만드는 것으로 시작합니다. 그 과정에서, 다른 컴포넌트 내에서 컴포넌트를 호출하고, props(properties)를 통해 데이터를 전달하고 데이터 상태를 저장하는 등 중요한 개념을 학습합니다.
- [3. Vue 컴포넌트 리스트 렌더링](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)

  - : 이 시점에서 우리는 충분히 잘 작동하는 컴포넌트를 얻었습니다. 이제 앱에 여러 `ToDoItem` 컴포넌트를 추가할 준비가 되었습니다. 이 글에서는 `App.vue` 컴포넌트에 todo 항목 데이터 셋을 추가하는 방법을 살펴보고, `v-for` 지시문(directive)을 사용하여 `ToDoItem` 컴포넌트를 반복하여 출력합니다.

- [4. 새로운 todo form추가: Vue events, methods, models](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : 이제 샘플 데이터와 각 비트의 데이터를 가져와서 앱의 `ToDoItem` 내에 렌더링하는 루프가 준비되었습니다. 다음으로 필요한 것은 사용자가 todo 항목을 앱에 입력할 수 있게 하는 기능입니다. 이를 위해 text `<input>`, 데이터가 제출될 때 발생하는 이벤트, 데이터 제출 시 데이터를 추가하고 목록을 다시 렌더링하기 위한 방법, 데이터를 제어하는 모델이 필요합니다. 이것이 이 글에서 다룰 내용입니다.
- [5. Styling Vue components with CSS](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : 마침내 우리 앱이 좀 더 멋지게 보입니다. 이 글에서는 CSS를 사용하여 Vue 컴포넌트를 스타일링하는 다양한 방법을 살펴봅니다.
- [6. Vue computed properties 사용하기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : 이 글에서는 computed properties 라고 불리는 Vue 기능을 사용하여 완료된 todo 항목 수를 표시하는 카운터를 추가합니다. 이들은 메서드와 유사하게 작동하지만 종속성 중 하나가 변경될 때만 다시 실행됩니다.
- [7. Vue 조건부 렌더링: 이미 존재하는 todo 항목 편집](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : 이제 우리가 아직 놓치고 있는 주요 기능 중 한 기능의 주요한 부분 중 하나를 추가 할 차례입니다. 이를 위해 Vue의 조건부 렌더링 기능 `v-if` 와 `v-else` 를 활용하여, 이미 존재하는 todo 항목 view 와 todo 항목 레이블을 업데이트 할 수 있는 편집 view 간에 전환할 수 있습니다. 또한 todo 항목들을 삭제하는 기능을 추가하는 방법도 살펴봅니다.
- [8. Vue refs를 통한 포커스 관리](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : 이제 거의 다 만들었습니다. 마지막으로 살펴볼 기능은 포커스 관리와 앱의 키보드 접근성을 향상시키는 방법입니다. Vue refs를 사용하여 이를 처리하는 방법을 살펴보겠습니다. ref는 가상 DOM 아래의 기본 DOM 노드에 직접 접근하거나 한 컴포넌트에서 하위 컴포넌트의 내부 DOM 구조로 직접 접근할 수 있는 고급 기능입니다.
- [9. Vue resources](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : 이제 Vue에 대한 학습을 마무리 할 것입니다. 학습을 진행하는데 사용할 수 있는 리소스 목록과 유용한 팁이 있습니다.

## Svelte tutorials

> **참고:** **참조**: Svelte 3.24.1 을 사용하여 2020년 8월에 마지막으로 테스트된 튜토리얼입니다.
>
> 코드를 우리 버전과 비교하여 확인해야 하는 경우, [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) repo에서 각각의 문서 뒤에 있어야 하는 샘플 Svelte 앱 코드의 완성된 버전을 볼 수 있습니다. 라이브 버전을 실행하려면 Svelte REPL 을 참조하세요 <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [1. Svelte 시작하기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - : 이 문서에서는 [Svelte framework](https://svelte.dev/)에 대한 간략한 소개를 제공합니다. Svelte의 작동 방식과 지금까지 살펴본 나머지 프레임워크 및 도구와 차별화되는 점을 살펴보겠습니다. 그 다음 개발 환경 구성하기, 샘플 앱 만들기, 프로젝트 구조 이해하기, 로컬에서 실행하기와 프로덕션 용으로 빌드하는 방법을 알아보겠습니다.
- [2. Svelte Todo list app 시작하기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - : 이제 Svelte가 작동하는 방식에 대한 기본적인 이해를 마쳤으므로, 예제 앱(todo list) 빌드를 시작하겠습니다. 이 문서에서는 먼저 앱에서 구현해야할 기능을 살펴보고, 그 다음 `Todos.svelte` 컴포넌트를 만들어 정적 마크업과 스타일을 배치합니다. 그리고 To-Do list 앱 기능 개발을 시작할 준비를 합니다. 이 내용은 다음 문서에서 계속 설명하겠습니다.
- [3. Svelte의 동적 동작: 변수와 props 작업](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - : 이제 마크업과 스타일이 준비되었으므로 Svelte To-Do list 앱에 필요한 기능 개발을 시작할 수 있습니다. 이 문서에서는 변수와 props를 사용하여 앱을 동적으로 만듭니다. 할일(todo)을 추가하거나 삭제하고, 완료로 표시하고, 상태별로 필터링 할 수 있습니다.
- [4. Svelte app 컴포넌트화](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - : 이 문서의 핵심 목표는 앱을 관리 가능한 컴포넌트로 나누고, 이들간에 정보를 공유하는 방법을 살펴 보는 것입니다. 앱을 컴포넌트화 하고 기능을 추가하여 기존 컴포넌트를 업데이트 할 수 있도록 합니다.
- [5. 향상된 Svelte: 반응성, 생명주기, 접근성](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - : 이 문서에서는 앱의 최종 기능을 추가하고 앱을 더욱 컴포넌트화 합니다. 객체와 배열의 업데이트와 관련된 반응성(reactivity) 이슈를 처리하는 방법을 배웁니다. 일반적인 함정을 피하기 위해 우리는 Svelte의 반응성 시스템을 좀 더 깊이 공부해야 합니다. 또한 접근성(accessibility ) 관련 이슈를 비롯해 좀 더 많은 내용을 해결하는 방법도 살펴보겠습니다.
- [6. Svelte stores 사용하기](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - : 이 문서에서는 Svelte에서 상태 관리를 처리하는 또 다른 방법을 보여줍니다. [스토어(Stores](https://svelte.dev/tutorial/writable-stores)). 스토어는 값을 갖고있는 글로벌 데이터 저장소입니다. 컴포넌트는 스토어를 구독하고 값이 변경되면 알림을 받을 수 있습니다.
- [7. Svelte의 타입스크립트 지원](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - : 이제 Svelte 애플리케이션에서 타입스크립트를 사용하는 방법을 배웁니다. 먼저 타입스크립트가 무엇이며 어떤 이점이 있는지 알아봅니다. 그 다음 타입스크립트 파일과 함께 작동하도록 프로젝트를 구성하는 방법을 살펴봅니다. 마지막으로 앱을 검토하여 타입스크립트 기능을 최대한 활용하기 위해 어떤 수정을 해야 하는지 살펴보겠습니다.
- [8. 배포(Deployment)와 다음단계](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
  - : 이 마지막 문서에서는 애플리케이션을 배포하고 온라인으로 가져오는 방법을 살펴봅니다. 또한 Svelte 학습 여정을 계속하기 위해 알아야 할 몇 가지 리소스를 공유합니다.

## Which frameworks did we choose?

우리는 React/ReactDOM, Ember, Vue의 세 가지 주요 프레임워크에 초점을 맞춘 가이드와 시작하는 글 모음을 함께 게시하고 있습니다. 여기에는 여러가지 이유가 있습니다.

- 이것들은 잠시동안 인기가 있습니다. 다른 소프트웨어 툴과 마찬가지로 다음주에도 중단되지 않고 적극적으로 개발 되는 도구를 선택하고 유지하는것이 좋습니다. 또한 이것은 구인할 때에도 바람직하게 작용할 겁니다.
- 이들은 강력한 커뮤니티와 좋은 문서를 갖고 있습니다. 복잡한 주제를 배우는 데 도움을 얻을 수 있다는 것이 특히 중요하고, 처음시작하는 경우라면 더욱 그렇습니다.
- 우리는 모든 최신 프레임 워크를 다룰 수 있는 리소스가 없습니다. 새로운 목록이 항상 표시되므로 이 목록을 최신 상태로 유지하기가 매우 어려울 수 있습니다.
- 초심자로서 매우 많은 선택지 중 집중할 것을 선택하는 것은 매우 현실적인 문제입니다. 따라서 목록을 짧게 유지하는것이 좋습니다.

우리는 이것을 미리 말하고 싶습니다. 위 프레임워크들이 최고라고 생각하거나 어떤 식으로든 보증되기 때문에 선택하지 않았습니다. 우리는 단지 이 프레임워크들이 위의 기준에서 높은 점수를 얻었다고 생각합니다.

이 글을 처음 게시할 때 더 많은 프레임워크가 포함되기를 원했지만, 더 오래 지연시키지 않고 내용을 릴리즈 한 다음에 나중에 프레임워크 가이드를 더 추가하기로 결정했습니다. 이 컨텐츠에 좋아하는 프레임워크가 표시되지 않았고, 이를 변경하고 싶다면 언제든지 저희와 논의하시기 바랍니다. [Matrix](https://wiki.mozilla.org/Matrix)나 [Discourse](https://discourse.mozilla.org/c/mdn)를 통해 연락하거나 [mdn-admins list](mailto:mdn-admins@mozilla.org)로 메일을 보내셔도 됩니다.
