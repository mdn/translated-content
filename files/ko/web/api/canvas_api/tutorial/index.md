---
title: 캔버스 튜토리얼
slug: Web/API/Canvas_API/Tutorial
---

{{DefaultAPISidebar("Canvas API")}}[![](canvas_tut_examples.jpg)](/ko/docs/HTML/Canvas)

[**`<canvas>`**](/ko/docs/HTML/Canvas)는 [HTML](/ko/docs/HTML) 요소 중 하나로서, 스크립트(보통은 [자바스크립트](/ko/docs/JavaScript))를 사용하여 그림을 그리는 데에 사용됩니다. 예를 들면, 그래프를 그리거나 사진을 합성하거나, 간단한(혹은 [복잡할 수도 있는](/ko/docs/HTML/Canvas/A_Basic_RayCaster)) 애니메이션을 만드는 데에 사용될 수 있습니다. 오른쪽에 보이는 이미지들은 앞으로 설명하게 될 [**`<canvas>`**](/ko/docs/HTML/Canvas)를 사용하여 만들 수 있는 것들의 일부입니다.

이 튜토리얼은 `<canvas>` 요소를 사용하여 2D 그래픽을 어떻게 그리는지 기초부터 설명합니다. 예제들을 통하여 캔버스로 할 수 있는 것이 무엇인지 알려주며, 바로 사용할 수 있도록 코드도 제공합니다.

`<canvas>`는 Apple의 Webkit에 처음 도입되어 Mac OS X 대시보드(Dashboard)에 사용되었고, 이후 다른 브라우저에도 구현되어 왔습니다. 현재 대부분의 주요 브라우저에서 지원됩니다.

## 시작하기 전 알아두어야 할 것

`<canvas>` 요소를 사용하는 것이 어려운 일은 아니지만, [HTML](/ko/docs/HTML)과 [자바스크립트](/ko/docs/JavaScript)에 대한 기본 지식을 갖추고 있어야 합니다. 몇몇 오래된 브라우저는 `<canvas>` 요소를 지원하지 않지만, 최근 버전의 주요 브라우저들은 모두 지원하고 있습니다. 캔버스의 크기는 300px \* 150px (너비 \* 높이)가 초기 설정값이며, HTML `height`와 `width` 속성을 사용하여 바꿀 수 있습니다. 캔버스에 그림을 그리려면 자바스크립트 컨텍스트 오브젝트를 사용하며, 즉석에서 그림을 생성할 수 있습니다.

## 튜토리얼 내용

- [캔버스(Canvas) 기본 사용법](/ko/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
- [캔버스에 도형 그리기](/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
- [스타일과 색 적용하기](/ko/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
- [텍스트 그리기](/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [이미지 사용하기](/ko/docs/Web/API/Canvas_API/Tutorial/Using_images)
- [모양 변환](/ko/docs/Web/API/Canvas_API/Tutorial/Transformations)
- [도형 합성](/ko/docs/Web/API/Canvas_API/Tutorial/Compositing)
- [애니메이션 기본](/ko/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [애니메이션 고급](/ko/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [픽셀 다루기](/ko/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [Hit 영역과 accessibility](/ko/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
- [캔버스 최적화](/ko/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
- [마무리](/ko/docs/Web/API/Canvas_API/Tutorial/Finale)

## 같이 보기

- [캔버스 주제 페이지](/ko/docs/Web/API/Canvas_API)
- [Adobe 일러스트레이터와 캔버스 플러그인](http://visitmix.com/labs/ai2canvas/)
- [HTML5 캔버스 튜토리얼](http://www.html5canvastutorials.com/)

{{ Next("Web/API/Canvas_API/Tutorial/Basic_usage") }}
