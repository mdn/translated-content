---
title: "조리법 : 미디어 객체"
slug: Web/CSS/Layout_cookbook/Media_objects
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

> [!CALLOUT]
>
> #### 프론트엔드 웹 개발자가 되고자 하시나요?
>
> 프론트엔드 웹 개발자가 되고 싶지만 무엇을 먼저 배워야 할지 모르겠다면, MDN 커리큘럼을 참고해 학습 계획을 세우는 것을 추천합니다. 이 커리큘럼은 성공적인 프론트엔드 개발자가 되기 위한 필수 기술과 실습을 체계적으로 학습할 수 있는 경로를 제공하며, 추천 학습 자료도 함께 제공합니다.
>
> [**시작하기**](/en-US/curriculum/)

{{CSSRef}}

"미디어 객체"는 웹 전반에서 흔히 볼 수 있는 패턴입니다. 이는 한쪽에는 이미지가, 다른 한쪽에는 설명 텍스트가 들어가는 두 열 박스를 의미합니다. 예를 들어, 소셜 미디어 게시물이 이에 해당합니다.

![Example of a media object with profile image on the left side and lorem ipsum text to the right filling up 80% of the space](media-object.png)

## 요구사항

미디어 객체 패턴은 다음과 같은 특성 중 일부 또는 전부를 필요로 합니다.

- 모바일에서는 스택 형태, 데스크톱에서는 두 열로 구성.
- 이미지는 왼쪽 또는 오른쪽에 위치할 수 있음.
- 이미지는 작거나 클 수 있음.
- 미디어 객체들은 중첩될 수 있음.
- 미디어 객체는 어느 쪽이 더 높든지 관계없이 컨텐츠를 올바르게 정렬해야 함.

## 레시피

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects.html", '100%', 2700)}}

> [!CALLOUT]
>
> [이 예제를 다운받으세요.](https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects--download.html)

## 선택 사항

미디어 객체에 [그리드 레이아웃](/ko/docs/Web/CSS/CSS_grid_layout)을 사용하기로 결정했습니다. 이는 필요할 때 2차원으로 레이아웃을 컨트롤할 수 있게 해줍니다. 이렇게 하면 짧은 컨텐츠 위에 푸터가 있을 때, 푸터를 미디어 객체의 아래로 밀어 넣을 수 있습니다.

그리드 레이아웃을 사용하는 또 다른 이유는 이미지의 트랙 크기를 지정하기 위해 {{cssxref("fit-content")}}을 사용할 수 있기 때문입니다. `fit-content`를 최대 200픽셀로 설정하면, 아이콘과 같은 작은 이미지를 사용할 때 트랙은 이미지의 `max-content` 크기만큼만 커집니다. 이미지가 더 큰 경우, 트랙은 200픽셀에서 성장이 멈추고, 이미지에 {{cssxref("max-width")}} 100%가 적용되므로, 열 안에 계속 맞도록 축소됩니다.

{{cssxref("grid-template-areas")}}를 사용해 레이아웃을 설정하면 CSS에서 패턴을 명확히 볼 수 있습니다. 500픽셀 최대 너비가 설정되면 그리드가 정의되어, 더 작은 장치에서는 미디어 객체가 스택 형태로 전환됩니다.

이 패턴의 옵션 중 하나는 이미지를 다른 쪽으로 전환하는 media-flip 클래스를 추가하여 레이아웃을 반전시키는 것입니다. `media-flip` 클래스는 반전된 그리드 템플릿을 정의하여 레이아웃이 좌우 대칭이 되도록 합니다.

한 미디어 객체를 다른 객체 안에 중첩할 경우, 일반 레이아웃에서는 두 번째 트랙에 배치하고, 반전된 경우 첫 번째 트랙에 배치해야 합니다.

## 같이 보기

- {{cssxref("fit-content")}} 속성
- [그리드 템플릿 영역 사용하기](/ko/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [CSS 그리드 레이아웃](/ko/docs/Web/CSS/CSS_grid_layout) 모듈
