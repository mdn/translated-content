---
title: <image>
slug: Web/CSS/image
---

{{CSSRef}}

**`<image>`** [CSS](/ko/docs/Web/CSS) [자료형](/ko/docs/Web/CSS/CSS_Types)은 2차원 이미지를 나타냅니다. 이미지는 {{cssxref("&lt;url&gt;")}}로 참조하는 일반 이미지, {{cssxref("&lt;gradient&gt;")}} 또는 {{cssxref("element")}}를 사용해 동적으로 생성하는 이미지 두 종류가 있습니다. 다른 이미지 함수로는 {{cssxref("imagefunction", "image()")}}, {{cssxref("image-set")}}, {{cssxref("cross-fade")}} 등이 있습니다. 이미지는 {{CSSxRef("background-image")}}, {{CSSxRef("border-image")}}, {{CSSxRef("content")}}, {{CSSxRef("cursor")}}, {{CSSxRef("list-style-image")}} 등 많은 속성에 사용할 수 있습니다.

## 이미지 유형

CSS는 다음 이미지 종류를 처리할 수 있습니다.

- **본질적인 크기**(원래 크기)를 가진 이미지. JPEG, PNG 등 [래스터 포맷](https://ko.wikipedia.org/wiki/%EB%9E%98%EC%8A%A4%ED%84%B0_%EA%B7%B8%EB%9E%98%ED%94%BD%EC%8A%A4).
- **여러 개의 본질적인 크기**를 가진 이미지. 하나의 파일이 이미지의 여러 버전을 가지고 있는 경우. 일부 .ico 파일 등. 이 때, 본질적인 크기는 제일 크고 컨테이닝 박스와 가로세로 비율이 제일 비슷한 이미지를 따라갑니다.
- 본질적인 크기는 없지만 **본질적인 종횡비**를 가진 이미지. SVG 등 [벡터 포맷](https://ko.wikipedia.org/wiki/%EB%B2%A1%ED%84%B0_%EA%B7%B8%EB%9E%98%ED%94%BD%EC%8A%A4).
- **본질적인 크기도, 종횡비도 없는** 이미지. CSS 그레이디언트 등.

CSS는 객체의 구체적인 크기를 (1) 그 본질적인 크기, (2) {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("background-size")}} 등 CSS 속성으로 설정한 크기, (3) 아래 표에 나열한, 이미지를 설정한 속성에 따른 기본값을 통해 결정합니다.

| 객체 유형 (CSS 속성)                                                                | 객체 크기의 기본값                                                                 |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                     | 요소의 배경 위치 영역 크기                                                         |
| {{CSSxRef("list-style-image")}}                                                     | `1em` 문자의 크기                                                                  |
| {{CSSxRef("border-image-source")}}                                                  | 요소의 테두리 이미지 영역 크기                                                     |
| {{CSSxRef("cursor")}}                                                               | 브라우저가 정의한, 클라이언트 시스템의 일반적인 커서 사이즈                        |
| {{CSSxRef("mask-image")}}                                                           | ?                                                                                  |
| {{CSSxRef("shape-outside")}}                                                        | ?                                                                                  |
| {{CSSxRef("mask-border-source")}}                                                   | ?                                                                                  |
| {{cssxref("@counter-style")}}의 {{CSSxRef("symbols")}}                              | 실험적 기능. 지원 시엔 브라우저가 정의한, 클라이언트 시스템의 일반적인 커서 사이즈 |
| 의사 요소의 {{CSSxRef("content")}} ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | 300px × 150px 사각형                                                               |

구체적인 크기는 다음 알고리즘을 사용해 계산합니다.

- 너비와 높이 모두 지정한 크기가 있다면 그 값을 구체적인 크기로 사용합니다.
- 너비 또는 높이만 지정한 크기가 있고, 본질적인 종횡비가 있다면 그 값으로 다른 크기를 계산해 사용하고, 지정한 크기가 본질적인 크기와 일치하면 다른 크기도 본질적인 크기를 사용하고, 모두 아니면 객체 크기의 기본값을 사용합니다.
- 너비도 높이도 지정한 크기가 없다면, 객체 크기의 기본값을 넘지 않는 한도에서 이미지의 본질적인 종횡비를 사용해 구체적인 크기를 결정합니다. 본질적인 종횡비가 없으면 요소의 종횡비를 사용하며, 요소도 가지고 있지 않으면 객체 크기의 기본값에서 가져옵니다.

> **참고:** 모든 브라우저가 모든 속성에 모든 유형의 이미지를 지원하는건 아닙니다. [브라우저 호환성](#브라우저_호환성) 항목을 참고하세요.

## 구문

`<image>` 자료형은 다음 중 하나로 나타낼 수 있습니다.

- {{CSSxRef("&lt;url&gt;")}} 자료형
- {{CSSxRef("&lt;gradient&gt;")}} 자료형
- {{CSSxRef("element")}} 함수로 정의한 웹페이지의 일부
- {{CSSxRef("image()")}} 함수로 정의한 이미지, 이미지 조각, 단일 색
- {{CSSxRef("cross-fade")}} 함수로 정의한 두 개 이상 이미지의 혼합
- {{CSSxRef("image-set")}} 함수로 정의한 이미지 중 적절한 해상도

## 예제

### 유효한 이미지

```css example-good
url(test.jpg)               /* "test.jpg"가 실제로 이미지일 때 <url> */
linear-gradient(blue, red)  /* <gradient> */
element(#realid)            /* "realid"가 페이지에 존재하는 ID일 때
                               element() 함수로 참조한 웹페이지의 일부 */
image(ltr 'arrow.png#xywh=0,0,16,16', red)
                            /* "arrow.png"가 지원되는 이미지일 때 <url>의 일부, 원본의 좌상단부터 16x16
                               지원하지 않는 이미지일 때 빨강 단색
                               RTL 언어에서는 이미지아 가로방향 반전됨 */
cross-fade(20% url(twenty.png), url(eighty.png))
                            /* 혼합 이미지, "twenty.png" 불투명도 20%
                                         "eighty.png" 불투명도 80% */
image-set('test.jpg' 1x, 'test-2x.jpg' 2x)
                            /* 여러 해상도의 이미지 묶음 */
```

### 유효하지 않은 이미지

```css example-bad
nourl.jpg            /* 이미지 파일은 url() 함수로 정의해야 함 */
url(report.pdf)      /* url() 함수가 가리키는 파일은 이미지여야 함 */
element(#fakeid)     /* 요소 ID가 페이지에 존재해야 함 */
image(z.jpg#xy=0,0)  /* 이미지 조각은 xywh=#,#,#,# 형식으로 작성해야 함 */
image-set('cat.jpg' 1x, 'dog.jpg' 1x) /* 각각의 이미지가 다른 해상도를 가져야 함 */
```

## 접근성 고려사항

브라우저는 배경 이미지에 대한 어떠한 정보도 보조 기술에 제공하지 않습니다. 스크린 리더 사용자에게 특히 큰 영향을 주는데, 스크린 리더가 배경 이미지의 존재를 표현하지 않으므로 사용자도 이미지에 대해 알 수 없기 때문입니다. 이미지가 문서의 목적을 이해하는 것에 중요한 정보를 포함하는 경우 문서에 구조적으로 포함하는 편이 좋습니다.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("element")}}
- {{CSSxRef("imagefunction", "image()")}}
- {{CSSxRef("image-set")}}
- {{CSSxRef("cross-fade")}}
