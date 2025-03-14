---
title: 후디니 (Houdini)
slug: Glossary/Houdini
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

후디니(Houdini)는 개발자에게 CSS를 확장해, 브라우저 렌더링 엔진의 스타일 및 레이아웃 프로세스에 연결할 수 있는 기능을 제공하는 저수준 API의 모음입니다. 후디니(Houdini)는 개발자에게 [CSS 객체 모델](/ko/docs/Web/API/CSS_Object_Model) ([CSSOM](/ko/docs/Glossary/CSSOM))에 대한 접근 권한을 주어, 개발자가 브라우저에서 CSS로 구문 분석할 수 있는 코드를 작성할 수 있도록 만들어 줍니다.

후디니(Houdini)의 이점은 개발자가 웹 표준 명세서가 CSS 기능을 정의할 때까지, 그리고 모든 브라우저가 기능을 완전히 구현할 때까지 기다리지 않고 CSS 기능을 만들 수 있다는 것입니다.

후디니(Houdini)가 지원하는 많은 기능은 JavaScript로 생성될 수 있지만, JavaScript가 활성화되기 전에 CSSOM과 직접 상호작용하면 구문 분석 시간이 더 빨라집니다. 브라우저는 스크립트에 있는 스타일 업데이트를 적용하기 전에 레이아웃, 페인트 및 복합 프로세스를 포함한 CSSOM을 생성합니다. 업데이트된 JavaScript 스타일을 구현하기 위해 레이아웃, 페인트 및 복합 프로세스가 반복됩니다.
후디니(Houdini) 코드는 첫 번째 렌더링 주기가 완료될 때까지 기다리지 않습니다. 오히려, 첫 번재 주기에 포함되어, 렌더링 가능하고 이해가능한 스타일을 만듭니다.

## 같이 보기

- [Houdini](/ko/docs/Web/API/Houdini_APIs)
- [CSSOM](/ko/docs/Web/API/CSS_Object_Model)
- [CSS Paint API](/ko/docs/Web/API/CSS_Painting_API)
- [CSS Typed OM](/ko/docs/Web/API/CSS_Typed_OM_API)
