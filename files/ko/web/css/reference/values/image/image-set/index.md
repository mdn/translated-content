---
title: image-set()
slug: Web/CSS/Reference/Values/image/image-set
original_slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

**`image-set()`** [CSS](/ko/docs/Web/CSS) [함수형](/ko/docs/Web/CSS/CSS_Functions) 표기법은 브라우저가 높은 해상도를 위해 주어진 이미지 집합 안에서 가장 적합한 CSS를 선택하도록 할 수 있는 방법입니다.

해상도와 대역폭은 기기와 네트워크 접근에 따라 달라집니다. `image-set()` 함수는 가장 적합한 해상도의 이미지를 사용자의 기기로 전달하여 기기와 설정에 따른 적합한 이미지를 선택할 수 있도록 하는데, 이는 해상도와 이미지 옵션의 집합을 제공하고 각 이미지에는 해상도 정의도 연관되어 있습니다. 해상도는 파일 크기에 따라 프록시로도 사용될 수 있습니다. 느린 모바일 연결이지만 높은 해상도의 화면을 가진 사용자 에이전트는 고해상도 이미지의 로드를 기다리는 것보다 저해상도 이미지를 선호할 수도 있습니다.

`image-set()` 은 각각의 사용자가 필요로 하는 것을 결정하기 보다는 선택할 수 있는 옵션을 제공합니다.

## 구문

```css-nolint
/* 해상도를 기반으로 이미지 선택하기 */
image-set(
  "image1.jpg" 1x,
  "image2.jpg" 2x
);

image-set(
  url("image1.jpg") 1x,
  url("image2.jpg") 2x
);

/* 해상도를 기반으로 그라디언트 선택하기 */
image-set(
  linear-gradient(blue, white) 1x,
  linear-gradient(blue, green) 2x
);

/* 지원하는 확장자를 기반으로 이미지 선택하기 */
image-set(
  url("image1.avif") type("image/avif"),
  url("image2.jpg") type("image/jpeg")
);
```

### 값

- `<image>`
  - : [`<image>`](/ko/docs/Web/CSS/image) 태그는 이미지 집합을 제외하고서는 어떠한 이미지 타입도 될 수 있습니다. `image-set()` 함수는 다른 `image-set()` 함수 내에 중첩될 수 없습니다.
- `<string>`
  - : 이미지의 URL입니다.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/ko/docs/Web/CSS/resolution) 태그는 픽셀 당 도트 단위인 `x` 혹은 `dppx` 를 포함하여 인치 당 도트 단위인 `dpi`, 센티미터 당 도트 단위인 `dpcm` 등 단위를 나타냅니다. `image-set()` 내의 모든 이미지는 고유한 해상도를 가져야 합니다.
- `type(<string>)` {{optional_inline}}
  - : "image/jpeg" 와 같은 유효한 MIME 타입의 문자열입니다.

### 형식 구문

{{csssyntax}}

## 접근성

브라우저는 배경 이미지에 대한 특수한 정보를 보조 기술로 제공하지 않습니다. 이는 주로 화면 리더기를 위한 기능인데, 스크린 리더는 배경 이미지의 존재를 알리지 않기 때문에 사용자는 아무런 정보를 전달 받을 수 없습니다. 만일 이미지에 페이지의 전반적인 목적을 이해하는 데에 중요한 정보가 포함되어 있다면 이를 문서 안에서 의미론적으로 설명하는 것이 좋습니다.

- [MDN WCAG 이해하기, 가이드라인 1.1 설명](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Success Criterion 1.1.1 이해하기 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 예제

### background-image 옵션으로 대안으로 image-set()를 사용하기

이 예제는 [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) 가 두 개의 {{cssxref("background-image")}} 옵션의 대안, 즉 일반적인 버전과 고해상도 버전의 해상도를 어떻게 제공하는지에 대해 설명합니다.

{{EmbedGHLiveSample("css-examples/images/image-set.html", '100%', 600)}}

> [!NOTE]
> 위 예제에서처럼, `-webkit` 접미사는 크롬과 사파리에서도 사용할 수 있습니다. 파이어폭스 90에서는 (개발자가 표준 속성을 추가하지 않은 경우 호환성을 제공하기 위해) `-webkit-image-set()` 가 `image-set()` 의 별칭으로 사용됩니다.

### 이미지 확장자의 대안으로 image-set()를 사용하기

다음 예제에서는 `type()` 함수가 AVIF 와 JPEG 확장자를 전달하기 위해 사용될 수도 있음을 설명합니다. 만일 브라우저가 avif를 지원한다면 이는 해당 버전을 선택하게 되고, 그렇지 않다면 jpeg 버전을 사용하게 됩니다.

{{EmbedGHLiveSample("css-examples/images/image-set-type.html", '100%', 600)}}

#### 폴백 제공하기

`image-set()` 을 위한 내장 폴백은 존재하지 않습니다. 이 기능을 지원하지 않는 브라우저를 위해 {{cssxref("background-image")}} 를 포합하려면 `image-set()` 를 사용하는 줄 앞에 별도의 정의가 필요합니다.

```css
.box {
  background-image: url("large-balloons.jpg");
  background-image: image-set(
    "large-balloons.avif" type("image/avif"),
    "large-balloons.jpg" type("image/jpeg")
  );
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("image")}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("url", "url()")}}
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("cross-fade", "cross-fade()")}}
