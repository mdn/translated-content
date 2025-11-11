---
title: React resources
slug: Learn_web_development/Core/Frameworks_libraries/React_resources
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

마지막 글에서는 학습을 더 진행하는 데 사용할 수 있는 React 리소스 목록을 제공합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        <p>
          <a href="/ko/docs/Learn/HTML">HTML</a>,
          <a href="/ko/docs/Learn/CSS">CSS</a>, 및
          <a href="/ko/docs/Learn/JavaScript">JavaScript</a> 언어 핵심에 대한 친숙도,
          <a
            href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >터미널/커멘드 라인</a
          >에 대한 지식.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>React에 대해 자세히 알아보기 위한 추가 리소스를 제공하기 위함입니다.</td>
    </tr>
  </tbody>
</table>

## 컴포넌트 수준 스타일

이 자습서에서는 이 접근 방식을 사용하지 않지만, 많은 React 애플리케이션은 하나의 모놀리식 스타일시트가 아니라, 컴포넌트별로 스타일을 정의합니다.

`create-react-app`을 사용하면 CSS 파일을 JavaScript 모듈로 가져올 수 있으므로, 해당 컴포넌트가 렌더링될 때만 CSS가 사용자에게 전송됩니다. 이 애플리케이션의 경우, 예를 들어 전용 `Form.css` 파일을 작성하여 각 컴포넌트의 스타일을 저장한 다음, 다음과 같이 스타일을 각각의 해당 모듈로 가져올 수 있습니다.

```jsx
import Form from "./Form";
import "./Form.css";
```

이 접근 방식을 사용하면 특정 컴포넌트에 속하는 CSS를 쉽게 식별하고 관리할 수 있습니다. 그러나 코드베이스 전체에서 스타일시트를 산산조각 내기도 하며, 스타일시트 분할이 그닥 가치가 없을 수도 있습니다. 수백 개의 고유한 시각적인 요소와 많은 이동 요소가 있는 대규모 애플리케이션의 경우, 사용자에게 전송되는 관련없는 코드의 양을 제한하는 것이 좋습니다. 애플리케이션 전체 스타일이 있고 그 위에 특정 컴포넌트 스타일을 빌드하는 편이 좋을 수 있습니다.

[create-react-app 문서에서 컴포넌트 스타일시트에 대해 자세히 알아보세요.](https://create-react-app.dev/docs/adding-a-stylesheet/)

## React DevTools

이 자습서에서는 `console.log()`를 사용하여 애플리케이션의 상태와 속성을 확인했으며 React가 CLI와 브라우저의 JavaScript 콘솔에서 모두 제공하는 유용한 경고 및 오류 메시지도 볼 수 있지만, 여기서 할 수 있는 일이 더 있습니다.

React DevTools 유틸리티를 사용하면 브라우저에서 직접 React 애플리케이션의 내부를 검사할 수 있습니다. 브라우저의 개발자 도구에 새 패널을 추가하고 이를 통해 다양한 컴포넌트의 상태와 속성을 검사하고, 상태와 속성을 편집하여 애플리케이션을 즉시 변경할 수 있습니다.

이 스크린샷은 React DevTools에 표시되는 완성된 애플리케이션을 보여줍니다.

![React devtools에 표시되는 프로젝트](react-devtools.png)

왼쪽에는, 배열에서 렌더링되는 항목에 대한 일부 고유 키를 포함하여, 응용 프로그램을 구성하는 모든 컴포넌트가 표시됩니다. 오른쪽에는 애플리케이션 컴포넌트가 활용하는 props와 훅이 표시됩니다. 또한, `Form`, `FilterButton` 및 `Todo` 컴포넌트가 오른쪽으로 들여쓰기되어 있다는 점에 유의하세요. 이는 `App`이 해당 컴포넌트의 부모임을 나타냅니다. 더 복잡한 어플리케이션에서, 이 화면은 부모/자식 관계를 한눈에 이해하는 데 유용합니다.

React DevTools는 다양한 형태로 제공됩니다.

- A [Chrome 브라우저 익스텐션](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
- A [Firefox 브라우저 익스텐션](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
- A [Microsoft Edge 브라우저 익스텐션](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).
- A [npm 또는 Yarn으로 설치할 수 있는 독립 실행형 애플리케이션](https://www.npmjs.com/package/react-devtools).

이 중에 하나를 설치한 다음, 이를 사용하여 방금 빌드한 애플리케이션을 검사하세요!

[React 블로그에서 React DevTools에 대해 자세히 읽어보세요.](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)

## Context API

이 자습서에서 빌드한 애플리케이션은 컴포넌트 props를 활용하여 `App` 컴포넌트에서 필요한 하위 컴포넌트로 데이터를 전달했습니다. 대부분의 경우, props는 데이터 공유에 적합한 방법입니다. 그러나 복잡하고 깊이 중첩된 응용 프로그램의 경우 항상 최선은 아닙니다.

React는 [Context API](https://reactjs.org/docs/context.html)를 제공하여 컴포넌트 트리 아래로 props를 전달하지 않고 필요한 컴포넌트에 데이터를 제공합니다. 이를 용이하게 하는 [useContext 훅](https://reactjs.org/docs/hooks-reference.html#usecontext)도 있습니다.

이 API를 직접 사용해 보고 싶다면, Smashing Magazine에서 [React 컨텍스트에 대한 소개 기사](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/)를 작성한 기사를 읽어보세요.

## 클래스 컴포넌트

이 튜토리얼에서는 언급하지 않았지만, 클래스를 사용하여 React Component를 구축할 수 있습니다. 이를 클래스 컴포넌트라고 합니다. 훅이 등장하기 전까지 클래스는 상태를 컴포넌트로 가져오거나 렌더링 부수효과를 관리하는 유일한 방법이었습니다. 그들은 여전히 특정 다른 엣지 케이스 기능을 처리하는 유일한 방법이며, 레거시 React 프로젝트에서 매우 일반적입니다. 공식 React 문서는 이에 대해 배우기에 좋은 곳입니다.

- [React 문서의 상태 및 수명 주기](https://reactjs.org/docs/state-and-lifecycle.html)
- [React 문서의 React 소개](https://reactjs.org/tutorial/tutorial.html)
- [MDN에서 JavaScript 클래스에 대해 읽어보기](/ko/docs/Web/JavaScript/Reference/Classes)

## 테스팅

`create-react-app`은 애플리케이션을 즉시 테스트할 수 있는 몇 가지 도구를 제공합니다. 자습서의 앞부분에서 관련 파일을 삭제했을 수 있습니다. `create-react-app` 문서 [테스트를 위한 몇 가지 기본 사항을 다룹니다](https://create-react-app.dev/docs/running-tests/).

## 라우팅

라우팅은 일반적으로 사용자 컴퓨터의 애플리케이션이 아닌 서버에서 처리되지만, 브라우저의 위치를 읽고 업데이트하고, 특정 사용자 인터페이스를 렌더링하도록 웹 애플리케이션을 구성할 수 있습니다. 이를 클라이언트 측 라우팅이라고 합니다. 애플리케이션에 대한 고유 경로(`/home`, `/dashboard` 또는 `/login`)를 많이 만들 수 있습니다.

React 커뮤니티는 클라이언트 측 라우팅을 위한 두 가지 주요 라이브러리인 [React Router](https://reactrouter.com/) 및 [Reach Router](https://reach.tech/router/)를 만들었습니다.

- React Router는 복잡한 라우팅 요구 사항이 있는 애플리케이션에 적합하며, Reach Router보다 일부 엣지 케이스를 더 잘 충족합니다. 그러나 React Router는 더 큰 라이브러리입니다.
- Reach Router는 단순한 애플리케이션에 적합하며, 사용자가 페이지를 탐색할 때 포커스를 자동으로 관리합니다.

포커스 관리는 클라이언트 측 라우팅에서 필수적입니다. 포커스 관리가 없으면 키보드 사용자는 포커스 림보에 갇힐 수 있으며, 스크린 리더 사용자는 자신이 새 페이지로 이동했는지 모를 수 있습니다. Reach Router는 접근성이 더 좋기 때문에, 시작하기에 좋은 곳입니다.

그러나 한 가지 주의 사항이 있습니다. 이러한 프로젝트는 [가까운 미래에 병합](https://reacttraining.com/blog/reach-react-router-future/)될 것입니다. 이 병합이 발생하면, React Router는 살아남은 프로젝트가 됩니다(Reach의 포커스 관리 기능 추가).

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
