---
title: 소개
slug: Web/SVG/Tutorials/SVG_from_scratch/Introduction
original_slug: Web/SVG/Tutorial/Introduction
---

{{SVGRef}}{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

![Mozilla dino logo](dino.svg)

[SVG](/ko/docs/Web/SVG)는 [XHTML](/ko/docs/Glossary/XHTML)과 비슷한 [XML](/ko/docs/Web/XML) 언어로 오른쪽에 있는 것과 같은 그래픽을 그리는 데 사용된다. SVG 이미지는 필요한 모든 선과 모양을 직접 일일이 지정하거나, 이미 존재하는 래스터 이미지를 수정하거나, 이 두 가지 방법을 조합해서 만들 수 있다. 이미지와 그 구성요소들은 변형되고, 조합되고, 필터링될 수 있으며, 이를 통해 원래의 형태를 완전히 바꿀 수도 있다.

SVG는 비슷한 경쟁 포맷들이 [W3C](https://www.w3.org)에 제출되었지만 완전히 승인되지는 않았던 1999년에 등장했다. 명세는 오랫동안 존재해 왔지만 웹 브라우저에서 느리게 받아들여졌기 때문에, 웹 문서에서 바로 SVG를 포함하는 컨텐츠는 2009년까지도 많지 않았다. 사용할 수 있는 구현조차도 경쟁기술인 [HTML5 캔버스](/ko/docs/Web/API/Canvas_API)나 (애플리케이션 인터페이스로서) 어도비 플래시보다 느린 편이다. SVG는 캔버스나 플래시와 비교했을 때 [DOM 인터페이스](/ko/docs/Web/API)를 사용할 수 있는 점과 서드파티 확장을 필요로 하지 않는 이점을 가지고 있다. SVG를 활용할 지는 사용자의 목적에 달려있다.

[Can I Use...](https://caniuse.com/#feat=svg)에서 확인할 수 있듯이, SVG 지원은 2009년부터 확대되어 왔다.

### 기본적인 요소들

[HTML](/ko/docs/Web/HTML)은 헤더, 문단, 표와 같은 요소들을 제공한다. SVG도 마찬가지로 원, 사각형, 간단한 곡선과 복잡한 곡선을 그릴 수 있는 요소들을 제공한다. 간단한 SVG 문서는 {{ SVGElement('svg') }} 루트 요소와 그래픽을 구성하기 위한 몇몇 기본 도형들로 구성된다. 또한 {{ SVGElement('g') }} 요소를 통해 간단한 모양들을 조합할 수 있다.

이를 통해서 SVG 이미지는 아주 복잡해질 수도 있다. SVG는 그라디언트, 회전, 필터 효과, 애니메이션, JavaScript를 통한 조작을 지원한다. 하지만 SVG의 이러한 추가적인 기능들은 그래픽 영역을 정의하는 비교적 작은 요소들의 집합에 의존하고 있다.

### 시작하기 전에

[잉크스케이프(Inkscape)](https://www.inkscape.org/)를 비롯해 SVG를 네이티브 포맷으로 활용하는 무료 드로잉 애플리케이션들이 있다. 하지만 이 튜토리얼에서는 순수하게 XML과 (독자가 선택한) 텍스트 에디터만을 사용한다. 이는 SVG의 내부 구조에 대한 이해를 돕기 위함이며, 이렇게 하기 위해서는 직접 마크업 언어를 경험해보는 것이 무엇보다 중요하다. SVG를 배우는 이유를 되새겨보자. 모든 SVG 뷰어가 같은 방식으로 구현되어 있지는 않기 때문에, 어떤 애플리케이션에서 잘 보여지도록 작성된 SVG가 다른 애플리케이션에서는 의도한 대로 작동하지 않을 수도 있다. 이는 SVG 명세나 SVG와 함께 사용되는 [JavaScript](/ko/docs/Web/JavaScript)나 [CSS](/ko/docs/Web/CSS)를 지원하는 수준이 서로 상이하기 때문에 발생하는 문제이다.

SVG는 모든 모던 웹 브라우저에서 지원하고 있으며, 이전부터 지원해오던 경우도 있다. [Can I use](http://caniuse.com/svg)에서 SVG 지원 현황을 표로 확인할 수 있다. Firefox는 1.5 버전에서부터 SVG를 지원해오고 있으며, 매 버전이 나올 때마다 SVG 지원 범위도 넓어지고 있다. 바라건대 이 튜토리얼과 MDN 문서가 개발자들이 Gecko와 다른 주요 구현체들의 차이를 이해하는 데 도움이 되길 바란다.

SVG를 시작하기에 앞서, 기초적인 XML 문법이나 HTML 같은 다른 마크업 언어를 이해할 필요가 있다. XML에 익숙하지 않다면 다음 사항들을 유념하기 바란다.

- XML은 (HTML과 달리) 대소문자를 구분하는 언어이므로 SVG 요소와 속성은 반드시 예제에 보이는 대로 입력해야 한다.
- SVG에서 속성 값은 숫자라고 할지라도 반드시 따옴표로 둘러싸야 한다.

SVG의 명세는 아주 길다. 이 튜토리얼에서는 기초적인 부분만을 다룬다. 이미 SVG에 익숙하다면 [요소 레퍼런스](/ko/docs/SVG/Element)나 [인터페이스 레퍼런스](/ko/docs/Web/API/Document_Object_Model#svg_interfaces)에서 필요한 부분을 찾아보면 된다.

### SVG의 종류

2003년에 권고가 된 후 최신의 완전한(full) SVG 버전은 1.1이다. 1.1은 1.0을 기반으로 작성되었으나 구현을 쉽게 하기 위해 좀 더 모듈화되었다. [SVG 1.1 두번째 에디션](https://www.w3.org/TR/SVG/)은 2011년에 권고되었다. 완전한 SVG 1.2가 SVG의 다음 주요 릴리즈였다. 1.2 대신 현재 활발히 개발중인 [SVG 2.0](https://www.w3.org/TR/SVG2/)으로 넘어갈 것이다. SVG 2.0에서는 CSS 3과 마찬가지로 구성요소들이 느슨히 결합된 명세들로 분리될 것이다.

완전한 SVG 권고와는 별도로 W3C 워킹 그룹에서는 2003년에 SVG Tiny와 SVG Basic을 내놓았다. SVG Tiny와 SVG Basic은 모바일 기기를 위한 것이다. 먼저 SVG Tiny에 따르면 적은 리소스를 가진 작은 기기에서도 그래픽을 생성할 수 있어야 한다. SVG Basic은 완전한 SVG 명세의 많은 부분을 지원하지만 구현하기 어렵거나 애니메이션과 같이 무거운 렌더 작업은 포함하지 않는다. 2008년에는 SVG Tiny 1.2가 W3C 권고가 되었다.

다중 페이지 지원 및 더 나은 색상 관리를 위한 SVG 프린트 명세도 계획되어 있었다. 이 작업은 현재 진행되지 않고 있다.

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}
