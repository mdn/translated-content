---
title: "<img>: 이미지 삽입 요소"
slug: Web/HTML/Element/img
---

{{HTMLSidebar}}

**HTML `<img>` 요소**는 문서에 이미지를 넣습니다.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

위의 예제를 통해 `<img>` 요소의 사용법을 알 수 있습니다.

- `src` 특성은 **필수**이며, 포함하고자 하는 이미지로의 경로를 지정합니다.
- `alt` 특성은 이미지의 텍스트 설명이며 필수는 아니지만, 스크린 리더가 `alt`의 값을 읽어 사용자에게 이미지를 설명하므로, 접근성 차원에서 **매우 유용**합니다. 또한 네트워크 오류, 콘텐츠 차단, 죽은 링크 등 이미지를 표시할 수 없는 경우에도 이 속성의 값을 대신 보여줍니다.

다양한 목적을 위한 많은 수의 속성이 더 존재합니다.

- [Referrer](/ko/docs/Web/HTTP/Headers/Referrer-Policy) {{glossary("CORS")}} control for security and privacy: see [`crossorigin`](/ko/docs/Web/HTML/Element/img#crossorigin) and [`referrerpolicy`](/ko/docs/Web/HTML/Element/img#referrerpolicy).
- Setting an {{glossary("intrinsic size")}} using [`width`](/ko/docs/Web/HTML/Element/img#width), [`height`](/ko/docs/Web/HTML/Element/img#height), and [`intrinsicsize`](/ko/docs/Web/HTML/Element/img#intrinsicsize): this sets the space taken up by an image to ensure the page layout is stable before it loads.
- Responsive image hints with [`sizes`](/ko/docs/Web/HTML/Element/img#sizes) and [`srcset`](/ko/docs/Web/HTML/Element/img#srcset) (see also the {{htmlelement("picture")}} element and our [Responsive images](/ko/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) tutorial).

## 지원하는 이미지 형식

HTML 표준은 지원해야 하는 이미지 형식을 명시하고 있지 않으므로, 각각의 {{glossary("user agent", "사용자 에이전트")}}는 서로 다른 형식을 지원합니다. 전체 목록은 [웹 브라우저가 지원하는 이미지 형식 안내서](/ko/docs/Web/Media/Formats/Image_types)를 참고하세요.

## 이미지를 가져올 수 없을 때

이미지를 불러오거나 그릴 때 오류가 발생했고, [`onerror`](/ko/docs/Web/HTML/Global_attributes#onerror) 속성에 오류 처리기를 등록했다면 {{event("error")}} 이벤트와 함께 처리기를 호출합니다. 오류는 다양한 상황에서 발생할 수 있는데, 그 중 일부 원인은 다음과 같습니다.

- [`src`](/ko/docs/Web/HTML/Element/img#src) 속성이 비었거나 {{jsxref("null")}}임.
- `src`의 URL이 현재 사용자가 보는 페이지의 URL과 같음.
- 지정한 이미지가 손상돼 불러올 수 없음.
- 이미지의 메타데이터가 손상돼 원본 크기를 알아낼 수 없고, `<img>` 요소의 속성에도 크기를 지정하지 않음.
- {{Glossary("user agent", "사용자 에이전트")}}가 지원하지 않는 이미지 형식임.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("alt")}}

  - : 이미지의 대체 텍스트 설명.

  > **참고:** 브라우저가 항상 이미지를 표시하는건 아닙니다. 예를 들어,

  - 비 시각적 브라우저 (시각 장애인이 사용하는 일부 브라우저 등)
  - 사용자가 이미지 불러오기 거부 (대역폭 절약, 개인정보 보호 등)
  - 유효하지 않은 이미지거나, [지원하지 않는 형식](/ko/docs/Web/HTML/Element/img#지원하는_이미지_형식)

  위와 같은 경우 브라우저가 이미지를 `alt` 특성의 텍스트로 대체할 수 있습니다. 그러므로 가능한 경우 `alt` 특성에 항상 유용한 값을 제공해야 합니다.

  `alt` 특성을 아예 지정하지 않은 경우 이미지가 콘텐츠의 중요 부분이나 텍스트로 표현할 수 없음을 의미합니다. 빈 문자열(`alt=""`)을 사용한 경우, 이미지가 콘텐츠의 중요 부분이 **아니므로**(장식 또는 추적용 픽셀 등), 비 시각적 브라우저가 {{glossary("Rendering engine", "렌더링")}}을 하지 않아도 된다는 의미입니다. 시각적 브라우저도 `alt` 특성이 비어있을 경우 깨진 이미지 아이콘을 표시하지 않습니다.

  이미지를 텍스트로서 복사-붙여넣기할 때와, 이미지 링크를 북마크 할 때도 `alt`의 값을 사용합니다. {{htmlattrdef("crossorigin")}}

  - : CORS를 사용해 지정한 이미지 파일을 가져와야 하는지의 여부. [교차 출처 활성화 리소스](/ko/docs/Web/HTML/CORS_enabled_image)는 {{HTMLElement("canvas")}} 요소에 사용해도 캔버스를 "오염"시키지 않습니다. 가능한 값은 다음과 같습니다.

- `anonymous`

  - : 자격 증명 없이 교차 출처 요청을 전송합니다. 즉, {{httpheader("Origin")}} {{glossary("HTTP")}} 헤더를 쿠키, [X.509 인증서](https://tools.ietf.org/html/rfc5280), [HTTP Basic 인증](/ko/docs/Web/HTTP/Authentication#Basic_인증_스킴) 없이 전송합니다. 서버에서 {{httpheader("Access-Control-Allow-Origin")}} HTTP 헤더를 지정하지 않음으로써 요청 출처 사이트에 자격 증명을 보내지 않는다면 이미지는 "오염"되고, 사용처가 제한됩니다.

- `use-credentials`

  - : 자격 증명과 함께 교차 출처 요청을 전송합니다. 즉, `Origin` HTTP 헤더를 쿠키, X 509 인증서, 또는 HTTP Basic 이증과 함께 전송합니다. 서버에서 `Access-Control-Allow-Credentials` HTTP 헤더를 통한 자격 증명을 요청 출처 사이트에 보내지 않는다면 이미지는 "오염"되고, 사용처가 제한됩니다.

  특성이 존재하지 않으면 리소스를 CORS 요청 없이(`Origin` HTTP 헤더 없이) 가져오므로, {{htmlelement("canvas")}}를 오염시키게 됩니다. 유효하지 않은 값의 경우 `anonymous` 키워드를 사용한 것으로 간주합니다.

- {{htmlattrdef("decoding")}}

  - : 이미지 디코딩에 관해 브라우저에 제공할 힌트. 가능한 값은 다음과 같습니다.

- `sync`
  - : 다른 콘텐츠와 함께 표시하기 위해 이미지를 동기적으로 디코딩 합니다.
- `async`
  - : 다른 콘텐츠의 표시 지연을 피하기 위해 이미지를 비동기적으로 디코딩 합니다.
- `auto`
  - : 선호하는 디코딩 모드가 없음을 나타내는 기본값입니다. 사용자에게 제일 적절한 값을 브라우저가 결정합니다.
- {{htmlattrdef("height")}}
  - : 픽셀 단위의 이미지의 고유 크기. 단위 없는 정수여야 합니다.
- {{htmlattrdef("importance")}} {{experimental_inline}}

  - : 리소스의 상대적인 다운로드 중요도. 가능한 값은 다음과 같습니다.

  `auto`: **설정 안함**. 브라우저가 자체 휴리스틱을 사용해 이미지의 우선순위를 결정합니다.

  `high`: 이미지가 **높은** 우선순위를 지님.

  `low`: 이미지가 **낮은** 우선순위를 지님.

  - {{htmlattrdef("intrinsicsize")}} {{deprecated_inline}}

    - This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it's the size specified in the attribute. Specifically, the image would raster at these dimensions and `naturalWidth`/`naturalHeight` on images would return the values specified in this attribute. [Explainer](https://github.com/ojanvafai/intrinsicsize-attribute), [examples](https://googlechrome.github.io/samples/intrinsic-size/index.html)

- {{htmlattrdef("ismap")}}

  - : 이미지가 [서버 사이드 맵](https://ko.wikipedia.org/wiki/%EC%9D%B4%EB%AF%B8%EC%A7%80_%EB%A7%B5)의 일부인지 나타냄. 서버 사이드 맵에 속하는 경우, 사용자가 이미지에서 클릭한 위치를 서버로 전송합니다.

  > **참고:** 포인팅 장치가 없는 사용자도 갈 수 있는 대체 목적지를 제공하기 위해, `ismap`은 `&#x3C;img>` 요소가 유효한 [`href`](/ko/docs/Web/HTML/Element/a#href) 특성을 가진 {{htmlelement("a")}} 요소의 자손인 경우에만 사용 가능합니다.

- {{htmlattrdef("loading")}}

  - : 브라우저가 이미지를 불러올 때 사용할 방식을 지정합니다.

  - `eager`: 뷰포트 안에 위치하는지 여부에 상관하지 않고 이미지를 즉시 불러옵니다. (기본값)
  - `lazy`: 이미지가 뷰포트의 일정 거리 안으로 들어와야 불러옵니다. 거리는 브라우저가 정의합니다. 이미지를 보게 될 것으로 충분히 예상 가능한 상황에만 불러옴으로써, 불필요하게 네트워크와 저장소 대역폭을 낭비하지 않을 수 있습니다. 또한 일반적인 사용처에서는 대개 성능을 향상할 수 있습니다.

- {{htmlattrdef("referrerpolicy")}} {{experimental_inline}}

  - : 리소스를 가져올 때 사용할 리퍼러를 나타내는 문자열.

  - `no-referrer:` {{httpheader("Referer")}} 헤더를 전송하지 않습니다.
  - `no-referrer-when-downgrade:` TLS(HTTPS) 지원을 하지 않는 출처에 대해서는 `Referer` 헤더를 전송하지 않습니다. 따로 지정하지 않은 경우 사용하는 기본 정책입니다.
  - `origin:` `Referer` 헤더가 요청 출처의 {{glossary("schema", "스킴")}}, {{glossary("host", "호스트")}}, {{glossary("port", "포트")}}를 포함합니다.
  - `origin-when-cross-origin:` 다른 출처로 요청할 땐 리퍼럴 데이터를 스킴, 호스트, 포트로 제한합니다. 동일 출처로 요청할 땐 전체 경로와 쿼리 문자열도 포함합니다.
  - `unsafe-url:` `Referrer` 헤더가 항상 출처, 경로, 쿼리 문자열을 포함합니다. 하지만 프래그먼트, 비밀번호, 사용자 이름은 포함하지 않습니다. TLS로 보호받는 리소스에서 그렇지 않은 출처로 정보를 누출할 수 있으므로 **안전하지 않습니다**.

- {{htmlattrdef("sizes")}}

  - : 소스 크기를 나타내는, 쉼표로 구분한 하나 이상의 문자열. 각각의 문자열은 다음 구성요소로 이루어집니다.

    - [미디어 조건](/ko/docs/Web/Guide/CSS/Media_queries#구문). 마지막 항목에서는 생략해야 합니다.
    - 소스 크기 값.

  미디어 조건은 이미지의 속성이 아니라** {{glossary("viewport", "뷰포트")}}** 속성을 가리킵니다. 예를 들어, `(max-height: 500px) 1000px`은 1000px 너비의 소스를 사용하려면 **뷰포트**가 500px 이하여야 한다는 뜻입니다.

  소스 크기는 의도한 이미지 표시 크기를 지정합니다. {{glossary("user agent", "사용자 에이전트")}}는 현재 소스 크기를 사용해, 너비(`w`) 서술자를 사용한 `srcset` 특성의 소스 중 하나를 선택합니다. 선택한 소스 크기는 이미지의 {{glossary("intrinsic size", "고유 크기")}}({{glossary("CSS")}} 스타일을 입히지 않은 경우 이미지의 표시 크기)에 영향을 줍니다. `srcset`이 비어있거나 너비 서술자를 사용하지 않은 경우, `sizes` 특성은 아무 효과도 없습니다.

- {{htmlattrdef("src")}}
  - : 이미지의 {{glossary("URL")}}. 필수 사항입니다. `srcset`을 지원하는 {{glossary("Browser", "브라우저")}}의 `srcset`에 픽셀 밀도 `1x`와 `w` 서술자가 없는 경우, `src`는 픽셀 밀도 `1x`의 이미지 후보로 취급합니다.
- {{htmlattrdef("srcset")}}

  - : {{glossary("user agent", "사용자 에이전트")}}가 사용할 수 있는 이미지 소스의 후보. 쉼표로 구분하는 한 개 이상의 문자열 목록입니다. 각각의 문자열은 다음 구성요소로 이루어집니다.

    - 이미지의 {{glossary("URL")}}.
    - 선택적으로, 공백과 함께 그 뒤를 잇는...

    - 너비 서술자(양의 정수와 바로 뒤의 '`w`' 문자). 너비 서술자의 값을 `sizes` 특성으로 지정한 소스 크기로 나눠서 픽셀 밀도를 구합니다.
    - 픽셀 밀도 서술자(양의 실수와 바로 뒤의 '`x`' 문자).

  서술자를 포함하지 않은 경우 기본값인 `1x`로 간주합니다.

  같은 `srcset` 특성에 너비와 픽셀 밀도 서술자를 함께 사용하거나, 동일한 서술자를 두 개 이상 사용하는건 유효하지 않습니다.

  사용자 에이전트 스스로 가능한 소스 중 하나를 선택합니다. 따라서 사용자 에이전트는 사용자의 개인 설정 또는 대역폭 상황에 따라 선택을 조절할 수 있는 상당한 여지를 가집니다. [반응형 이미지 자습서](/ko/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)를 방문해 예제를 살펴보세요.

- {{htmlattrdef("width")}}
  - : 이미지의 픽셀 기준 고유 너비. 단위 없는 정수여야 합니다.
- {{htmlattrdef("usemap")}}

  - : 요소와 연결할 [이미지 맵](/ko/docs/HTML/Element/map)의 프래그먼트.

  > **참고: **`&#x3C;img>` 요소가 {{htmlelement("a")}} 또는 {{HTMLElement("button")}} 요소의 자손이면 사용할 수 없습니다.

### Deprecated attributes

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : Aligns the image with its surrounding context. Use the {{cssxref('float')}} and/or {{cssxref('vertical-align')}} {{glossary("CSS")}} properties instead of this attribute. Allowed values:

    - `top`
      - : Equivalent to `vertical-align: top` or `vertical-align: text-top`
    - `middle`
      - : Equivalent to `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : The default, equivalent to `vertical-align: unset` or `vertical-align: initial`
    - `left`
      - : Equivalent to `float: left`
    - `right`
      - : Equivalent to `float: right`

- {{htmlattrdef("border")}} {{deprecated_inline}}
  - : The width of a border around the image. Use the {{cssxref('border')}} {{glossary("CSS")}} property instead.
- {{htmlattrdef("hspace")}} {{deprecated_inline}}
  - : The number of pixels of white space on the left and right of the image. Use the {{cssxref('margin')}} CSS property instead.
- {{htmlattrdef("longdesc")}} {{deprecated_inline}}

  - : A link to a more detailed description of the image. Possible values are a {{glossary("URL")}} or an element [`id`](/ko/docs/Web/HTML/Global_attributes#id).

    > **Note:** This attribute is mentioned in the latest {{glossary("W3C")}} version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), but has been removed from the {{glossary("WHATWG")}}'s [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). It has an uncertain future; authors should use a {{glossary("WAI")}}-{{glossary("ARIA")}} alternative such as [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) or [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details).

- {{htmlattrdef("name")}} {{deprecated_inline}}
  - : A name for the element. Use the [`id`](/ko/docs/Web/HTML/Global_attributes#id) attribute instead.
- {{htmlattrdef("vspace")}} {{deprecated_inline}}
  - : The number of pixels of white space above and below the image. Use the {{cssxref('margin')}} CSS property instead.

## CSS 스타일링

`<img>`는 [대체 요소](/ko/docs/Web/CSS/Replaced_element)입니다. 기본적으로 {{cssxref("display")}}는 `inline`이나, 기본 크기는 내장한 이미지의 고유 크기로 정해지므로 마치 `inline-block`처럼 보입니다. {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} 등의 속성을 이미지에 지정할 수 있습니다.

`<img>`는 기준선을 갖지 않으므로, {{cssxref("vertical-align")}}`: baseline`을 지정한 인라인 서식 맥락에서는 이미지의 아래쪽 모서리가 텍스트 기준선으로 가게 됩니다.

요소 박스 내의 이미지 위치는 {{cssxref("object-position")}} 속성으로 바꿀 수 있습니다. 크기는 {{cssxref("object-fit")}} 속성을 통해 요소 크기에 맞출지, 요소를 채울지 등을 지정할 수 있습니다.

이미지는 고유 너비와 높이를 가질 수 있지만, 일부 유형의 이미지는 그렇지 않습니다. 예를 들어, {{glossary("SVG")}} 요소는 루트 {{svgelement("svg")}} 요소에 `width`와 `height`가 없는 경우 고유 크기를 가지지 않습니다.

## 예제

### 보조 텍스트

페이지에 이미지를 삽입하고, 접근성을 높이기 위해 대체 텍스트를 제공하는 간단한 예제입니다.

```html
<img src="favicon144.png" alt="MDN logo" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### 이미지 링크

이 예제는 이전 코드에 더해 이미지를 링크로 바꾸는 법을 보입니다. 단순히 `<img>` 태그를 {{htmlelement("a")}} 안에 넣기만 하면 됩니다. 다만 고려할 점 하나는, 해당 링크가 가리키는 곳을 설명하는 대체 텍스트를 포함해야 한다는 것입니다.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### `srcset` 특성 사용하기

이번 예제에서는 [`srcset`](/ko/docs/Web/HTML/Element/img#srcset) 특성에 고해상도 버전 로고를 추가했습니다. 그러면 고해상도 장치에서는 일반 `src` 이미지 대신 고해상도 이미지를 사용합니다. `srcset` 특성을 지원하는 {{glossary("user agent", "사용자 에이전트")}}는 `src` 특성을 `srcset` `1x` 로 간주합니다.

```html
<img src="favicon72.png" alt="MDN logo" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### `srcset`과 `sizes` 특성 사용하기

[`srcset`](/ko/docs/Web/HTML/Element/img#srcset)를 지원하는 {{glossary("user agent", "사용자 에이전트")}}는, `srcset`에 `w` 서술자를 사용한 경우 `src` 특성을 무시합니다. 다음 코드는 미디어 조건 `(max-width: 600px)`을 만족할 때 200px 너비의 이미지를 불러오고, 그 외의 경우엔 다른 이미지(400px)를 불러옵니다.

```html
<img
  src="clock-demo-200px.png"
  alt="Clock"
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(min-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> **참고:** 직접 창 크기를 조절하면서 이미지의 변화를 관측하려면 {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', '별도 페이지')}}를 방문하세요.

## 보안 및 개인정보 고려사항

`<img>` 요소를 사용하는 것에는 문제가 없으나, 의도치 않게 사용자 개인정보와 보안에 악영향을 줄 수 있습니다. [Referer 헤더: 개인정보 및 보안 고려사항](/ko/docs/Web/Security/Referer_header:_privacy_and_security_concerns) 문서를 방문해 더 많은 정보를 알아보세요.

## 접근성 고려사항

### 적합한 대체 설명 작성

[`alt`](/ko/docs/Web/HTML/Element/img#alt) 특성의 값은 이미지 콘텐츠를 간단하고 명료하게 설명해야 합니다. 그러나 이미지의 존재 여부나, 이미지 파일의 이름을 나타내서는 안됩니다. 이미지를 텍스트로 설명할 방법이 없어서 의도적으로 `alt`를 지정하지 않은 경우, 해당 이미지가 나타내려는 바를 알려줄 수 있는 다른 방법을 고려해보세요.

#### 부적절

```html example-bad
<img alt="이미지" src="penguin.jpg" />
```

#### 적절

```html example-good
<img alt="해변에 서있는 바위뛰기펭귄." src="penguin.jpg" />
```

일부 스크린 리더는 `alt` 특성을 가지지 않는 이미지를 보면 파일 이름을 표현하는 경우가 있는데, 이 때 파일의 이름이 이미지의 콘텐츠를 설명하지 않는다면 사용자가 혼란스러울 수 있습니다.

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Guideline 1.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_—_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### `title` 특성

[`title`](/ko/docs/Web/HTML/Global_attributes#title) 특성은 [`alt`](/ko/docs/Web/HTML/Element/img#alt) 특성을 적합하게 대체할 수 없습니다. 또한, `alt`의 값을 `title`에도 반복하는 것을 피해야 합니다. 같은 값을 지정할 경우 일부 스크린 리더가 설명을 두 번씩 읽게 되므로 사용자가 혼란스러울 수 있습니다.

`title` 요소를 사용해 `alt` 설명에 대한 부연 설명을 제공해서도 안됩니다. 이미지가 설명을 필요로 하는 경우 {{htmlelement("figure")}}와 {{htmlelement("figcaption")}} 요소를 사용하세요.

`title` 특성은 보통 툴팁, 즉 사용자가 커서를 이미지 위에 올리고 가만히 있으면 짧은 시간 뒤에 나타나는 형태로 표현합니다. 따라서 추가 정보를 제공할 수는 있겠으나 터치 화면, 또는 키보드만 사용하는 경우도 존재하므로 사용자가 툴팁을 볼 수 있을 것이라고 기대해서는 안됩니다. 사용자에게 많이 중요한 정보를 포함해야 하면 `title` 특성 대신 위에 명시한 다른 방법을 사용하세요.

- [Using the HTML title attribute – updated | The Paciello Group](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#내장_콘텐츠"
          >내장 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#뚜렷한_콘텐츠"
          >뚜렷한 콘텐츠</a
        >. `usemap` 특성을 가진 경우
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        없음. {{glossary("empty element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#내장_콘텐츠"
          >내장 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLImageElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("picture")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} 요소
- 이미지 관련 CSS 속성: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
