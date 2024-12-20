---
title: 웹 폰트
slug: Learn_web_development/Core/Text_styling/Web_fonts
original_slug: Learn/CSS/Styling_text/Web_fonts
l10n:
  sourceCommit: 45268b07c84a04b45d46bcdf104e2b33be00adcf
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

이 과정의 첫 번째 기사에서 우리는 폰트와 텍스트를 꾸미는데 가능한 CSS 기본 기능들에 대해서 살펴보았습니다. 이 글에서는 더 나아가 웹 폰트를 자세히 살펴보겠습니다. 웹 페이지에서 사용자 정의 폰트를 사용하여 보다 다양한 사용자 정의 텍스트 스타일을 지정하는 방법을 살펴보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">사전 지식:</th>
      <td>
        기본 컴퓨터 활용 능력, HTML 기초
        (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        > 공부하기), CSS 기초
        (<a href="/ko/docs/Learn/CSS/First_steps">CSS 소개</a> 공부하기),
        <a href="/ko/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS 텍스트 및 폰트 기본 사항</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
      타사 서비스를 사용하거나, 직접 코드를 작성해서 웹 폰트를 웹 페이지에 적용하는 방법을 학습하기.
      </td>
    </tr>
  </tbody>
</table>

## Font families 요약하기

[CSS 텍스트 및 폰트 기본 사항](/ko/docs/Learn/CSS/Styling_text/Fundamentals)에서 살펴본 것처럼, {{cssxref("font-family")}} 속성을 사용하여 HTML에 적용되는 폰트를 제어할 수 있습니다. 여기에는 하나 이상의 폰트 패밀리 이름이 필요합니다. 웹페이지를 표시할 때 브라우저는 실행 중인 시스템에서 사용 가능한 폰트를 찾을 때까지 폰트 패밀리 값 목록을 아래로 살펴봅니다.

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

이 시스템은 잘 작동하지만, 기존에는 웹 개발자가 선택할 수 있는 폰트가 제한적이었습니다. 모든 일반적인 시스템에서 사용 가능하다고 보장할 수 있는 폰트는 [웹 안전 폰트](/ko/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts) 라고 불리는 소수의 폰트뿐입니다. 폰트 스택을 사용하여 선호하는 폰트, 웹 안전 대체 폰트, 기본 시스템 폰트 순서로 지정할 수 있습니다. 그러나 이렇게 하면 당신의 디자인이 각 폰트에서 작동하는지 확인하는 데 필요한 테스트가 필요하므로 작업량이 증가합니다.

## 웹 폰트

하지만 아주 잘 작동하는 대안도 있습니다. CSS를 사용하면 웹에서 사용할 수 있는 폰트 파일을 지정하여 웹 사이트에 액세스할 때 함께 다운로드 할 수 있습니다. 이 CSS 기능을 지원하는 어떤 브라우저라도 당신이 특별히 선택한 폰트를 표시할 수 있습니다. 놀랍습니다! 필요한 구문은 다음과 같습니다.

우선, 다운로드 할 폰트 파일을 명시하는 {{cssxref("@font-face")}} 규칙 집합이 CSS의 시작 부분에 있습니다.

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

그 아래에는 {{cssxref("@font-face")}} 안에 지정된 폰트 패밀리 이름을 사용하여 평소처럼 원하는 폰트에 사용자 지정 폰트를 적용할 수 있습니다.

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

구문은 이보다 조금 더 복잡해집니다. 아래에서 더 자세히 살펴보겠습니다.

웹 폰트에 관해서 염두에 두어야 할 몇 가지 중요한 내용들이 있습니다.

1. 폰트는 일반적으로 무료로 사용할 수 없습니다. 폰트에 대한 비용을 지불하거나 코드(또는 사이트)에서 폰트 제작자에게 크레딧을 부여하는 등 다른 라이센스 조건을 따라야 합니다. 적절한 크레딧을 제공하지 않고 폰트를 훔쳐서 사용하면 안 됩니다.
2. 모든 주요 브라우저는 WOFF/WOFF2 (Web Open Font Format versions 1 and 2)를 지원합니다. 심지어 IE9(2011년 출시)와 같은 구형 브라우저에서도 WOFF 형식을 지원합니다.
3. WOFF2는 가변 폰트, 크로마틱 폰트 및 폰트 컬렉션을 포함한 TrueType 및 OpenType의 모든 사양을 지원합니다.
4. 폰트 파일을 나열하는 순서가 중요합니다. 다운로드할 여러 폰트 파일 목록을 브라우저에 제공하면, 브라우저는 사용할 수 있는 첫 번째 폰트 파일을 선택합니다. 따라서 가장 먼저 나열하는 형식은 가장 선호하는 형식, 즉 WOFF2여야 하고 이전 형식은 그 뒤에 나열해야 합니다. 브라우저가 한 형식을 이해하지 못하면 그 뒤에 있는 다음 형식으로 넘어갑니다.
5. 레거시 브라우저에서 작업해야 하는 경우, 다운로드 할 수 있는 EOT (Embedded Open Type), TTF (TrueType Font) 및 SVG 웹 폰트를 제공해야 합니다. 이 기사에서는 필요한 파일을 생성할 수 있는 Fontsquirrel 웹폰트 생성기를 사용합니다.

[Firefox 폰트 편집기](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html)를 사용해서 웹 폰트의 여부에 관계없이 페이지에서 사용 중인 폰트를 확인하고 조작할 수 있습니다. 이 동영상은 좋은 방법을 제공합니다.

{{EmbedYouTube("UazfLa1O94M")}}

## 능동적 학습: 웹 폰트 예시

이를 염두에 두고 기본 원칙에 따라 기본 웹 폰트 예제를 만들어 보겠습니다. 임베드된 라이브 예제를 사용해서 시연하기는 어렵습니다. 대신에 아래 섹션에 자세히 설명된 단계를 따라 과정에 대한 아이디어를 얻으세요.

[web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) 및 [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) 파일을 코드를 추가할 시작점으로 사용해야 합니다. ([live example](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html) 를 확인해 주세요). 지금 컴퓨터의 새 디렉터리에 이 파일의 복사본을 만드세요. `web-font-start.css` 파일에는 예제의 기본 레이아웃과 조판을 처리하기 위한 최소한의 CSS가 있습니다.

### 폰트 찾기

이 예제에서는 제목과 본문 텍스트에 각각 하나씩 두 개의 웹 폰트를 사용하겠습니다. 먼저 폰트가 포함된 폰트 파일을 찾아야 합니다. 폰트는 폰트 파운드리에서 제작하며 다양한 파일 형식으로 저장됩니다. 일반적으로 폰트를 구할 수 있는 사이트는 세 가지 유형이 있습니다.

- 무료 폰트 배포자: 무료로 폰트를 다운로드 할 수 있는 사이트입니다. (폰트 제작자에게 크레딧을 제공해야 하는 등 일부 라이센스 조건이 있을 수 있습니다). 예를 들면 [Font Squirrel](https://www.fontsquirrel.com/), [dafont](https://www.dafont.com/) 및 [Everything Fonts](https://everythingfonts.com/) 을 포함합니다.
- 유료 폰트 배포자: [fonts.com](https://www.fonts.com/) 또는 [myfonts.com](https://www.myfonts.com/) 같은 사이트는 유료로 폰트를 제공합니다. 예를 들어 [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com), 또는 [Exljbris](https://www.exljbris.com/) 같은 폰트 파운드리에서 직접 폰트를 구매할 수도 있습니다.
- 온라인 폰트 서비스: 폰트를 저장하고 제공하는 사이트로, 전체 과정을 더 쉽게 만들어 줍니다. [온라인 폰트 서비스 사용하기](#using_an_online_font_service) 에서 자세한 내용을 확인하세요.

폰트를 찾아봅시다! [Font Squirrel](https://www.fontsquirrel.com/)로 이동해서 두 가지 폰트를 선택합니다. 제목에는 멋진 디스플레이 폰트이나 슬랩 세리프 폰트를, 단락에는 약간 덜 화려하고 가독성이 좋은 폰트를 선택하세요. 폰트를 찾았으면 다운로드 버튼을 누르고, 이전에 저장한 HTML 및 CSS 파일과 같은 디렉터리에 파일을 저장합니다. TTF (True Type Fonts) 또는 OTF (Open Type Fonts)의 여부는 중요하지 않습니다.

두 개의 폰트 패키지의 압축을 해제합니다. (웹 폰트는 일반적으로 폰트 파일과 라이센스 정보가 포함된 ZIP 파일로 배포됩니다) 패키지에는 여러 개의 폰트 파일이 있을 수 있습니다. 일부 폰트는 얇은 폰트, 중간 폰트, 굵은 폰트, 이탤릭 폰트, 얇은 이탤릭 등등 다양한 변형이 있는 형태로 배포됩니다. 이 예시에서는 각 선택에 대해 하나의 폰트 파일만 신경 쓰세요.

> [!NOTE]
> Font Squirrel에서 오른쪽 열에 있는 "폰트 찾기" 섹션에서 다양한 태그와 분류를 클릭하여 표시된 선택 항목들을 필터링할 수 있습니다.

### 필요한 코드 생성하기

이제 필요한 코드(및 폰트 형식)를 생성해야 합니다. 각 폰트에 대해 다음 단계를 따르세요.

1. 상업용 및/또는 웹 프로젝트에 사용하려는 경우 라이센스 요구 사항을 충족했는지 확인하세요.
2. Fontsquirrel [웹 폰트 생성기](https://www.fontsquirrel.com/tools/webfont-generator)로 이동합니다.
3. "폰트 업로드" 버튼을 사용해서 두 개의 폰트 파일을 업로드 합니다.
4. "예, 업로드하는 폰트는 법적으로 웹 임베딩에 사용할 수 있는 폰트입니다." 라는 체크박스 라벨을 체크합니다.
5. "키트 다운로드" 를 클릭합니다

생성기의 처리가 완료되면 ZIP 파일을 다운로드 할 수 있습니다. HTML 및 CSS와 같은 디렉터리에 저장합니다.

레거시 브라우저를 지원하고 싶다면, 웹 폰트 생성기에서 "전문가" 모드를 선택하고 SVG, EOT 및 TTF 형식을 선택한 후 키트르 다운로드 하세요.

폰트 생성을 위한 웹 서비스들을 일반적으로 파일 크기에 제한이 있습니다. 이런 상황에서는 다음과 같은 도구를 사용하는 것을 고려해 보세요.

1. [sfnt2woff-zopfli](https://github.com/bramstein/sfnt2woff-zopfli) ttf에서 woff로 변환
2. [fontforge](https://fontforge.org/) ttf에서 svg로 변환
3. [batik ttf2svf](https://people.apache.org/~clay/batik/ttf2svg.html) ttf에서 svg로 변환
4. [woff2](https://github.com/google/woff2) ttf에서 woff2로 변환

### 데모에 코드 구현하기

방금 생성한 웹 폰트 키트의 압축을 풉니다. 그 안에는 몇 가지 유용한 아이템들이 있습니다.

- 각 폰트의 두 가지 버전 `.woff`, `.woff2` 파일
- 각 폰트에 대한 데모 HTML 파일. 브라우저에서 이 파일들을 불러와 다양한 사용 환경에서 폰트가 어떻게 보이는지 확인할 수 있습니다.
- `stylesheet.css` 파일에는 생성된 @font-face 코드가 포함되어 있습니다.

데모에서 이러한 폰트를 구현하려면 다음 단계를 따르세요.

1. 압축을 푼 디렉터리의 이름을 `fonts`와 같이 쉽고 간단한 이름으로 변경합니다.
2. `stylesheet.css`파일을 열고 두 개의 `@font-face` 규칙 집합을 `web-font-start.css` 파일에 복사합니다. 사이트에서 폰트를 사용하기 전에, 폰트를 가져와야 하므로 CSS의 맨 위에 배치해야 합니다.
3. 각 `url()` 함수는 CSS로 가져올 폰트 파일을 가리킵니다. 파일 경로가 올바른지 확인해야 하므로 각 경로의 시작 부분에 `fonts/`를 추가합니다. (필요에 따라 조정)
4. 이제 웹 안전 또는 시스템 기본 폰트 같은 폰트 스택에서 이러한 폰트들을 사용할 수 있습니다. 예시를 확인하세요

   ```css
   @font-face {
     font-family: "zantrokeregular";
     src:
       url("fonts/zantroke-webfont.woff2") format("woff2"),
       url("fonts/zantroke-webfont.woff") format("woff");
     font-weight: normal;
     font-style: normal;
   }
   ```

   ```css
   font-family: "zantrokeregular", serif;
   ```

멋진 폰트가 구현된 데모 페이지가 완성됩니다. 폰트마다 크기가 다르기 때문에 크기, 간격 등을 조정해서 모양과 느낌을 정리해야 할 수 있습니다.

![The finished design of a Web font active learning exercise. The page has two headings and three paragraphs. The page contains different fonts and text at different sizes.](web-font-example.png)

> [!NOTE]
> 작동하는데 문제가 있는 경우 완성된 파일과 비교해 보세요. [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) 및 [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css)을 확인해 보세요. 또한 [Github에서 코드를 다운로드](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) 받거나 [완성된 예제를 실행시킬 수 있습니다](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## 온라인 폰트 서비스 이용하기

온라인 폰트 서비스는 일반적으로 폰트를 저장하고 제공하므로 `@font-face` 같은 코드를 작성할 필요가 없습니다. 대신에 일반적으로 사이트에 한 두줄의 간단한 코드를 넣기만 하면 모든 것이 작동합니다. [Adobe Fonts](https://fonts.adobe.com/) 및 [Cloud.typography](https://www.typography.com/webfonts) 같은 예시가 있습니다. 특히 빠른 테스트 작업과 데모 작성에 유용한 이러한 서비스들은 [Google Fonts](https://fonts.google.com/)를 제외하고 구독 기반입니다.

이러한 서비스는 대부분 사용하기 쉬우므로 여기서 자세히 다루지 않습니다. 아이디어를 얻을 수 있도록 여기서 Google Fonts에 대해 간단히 살펴봅니다. 다시 말하지만 `web-font-start.html` 및 `web-font-start.css` 사본을 시작점으로 이용하세요.

1. [Google Fonts](https://fonts.google.com/)로 이동합니다.
2. 좋아하는 폰트를 검색하거나 페이지 상단의 필터를 사용해 원하는 폰트의 종류를 표시하고 원하는 폰트 몇 개를 선택합니다.
3. 폰트 패밀리를 선택하기 위해 폰트 미리 보기를 클릭하고, 폰트 옆에 있는 ⊕ 버튼을 누릅니다.
4. 폰트를 선택했으면 우측 상단에 있는 '선택한 폰트 보기' 버튼을 누릅니다.
5. 결과 화면에서 먼저 표시된 HTML 코드를 복사하여 HTML 파일의 head에 붙여 넣습니다. 기존 {{htmlelement("link")}} 요소 위에 붙여 넣어 폰트를 가져온 다음 CSS에서 폰트를 사용하도록 합니다.
6. 그런 다음 사용자 정의 폰트를 HTML에 적용하려면 나열된 CSS 선언을 적절하게 CSS에 복사해야 합니다.

> [!NOTE]
> 완성된 버전을 [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) 및 [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css)에서 확인할 수 있습니다. 작업물을 비교하려면 ([라이브 확인하기](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html))를 사용하세요.

## @font-face 자세히 알아보기

Fontsquirrel에서 생성한 `@font-face` 구문을 살펴봅시다. 다음은 규칙 집합 중 하나의 모습입니다.

```css
@font-face {
  font-family: "zantrokeregular";
  src:
    url("zantroke-webfont.woff2") format("woff2"),
    url("zantroke-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
```

어떤 기능을 하는지 살펴봅시다.

- `font-family`: 이 줄은 폰트를 참조할 이름을 정합니다. CSS 전체에서 일관되게 사용한다면 어떤 이름이라도 지정할 수 있습니다.
- `src`: 이 줄은 CSS로 가져올 폰트 파일의 경로 (`url` 부분)와 각 폰트 파일의 형식(`format` 부분)을 지정합니다. 각 경우에 후자는 선택 사항이지만, 브라우저에서 사용할 수 있는 폰트를 더 빨리 결정할 수 있기에 선언하는 것이 좋습니다. 쉼표로 구분하여 여러 개의 선언을 나열할 수 있습니다. 브라우저는 캐스케이드 규칙에 따라 검색하므로 WOFF2와 같이 선호하는 형식을 앞에 선언하는 것이 가장 좋습니다.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: 이 줄은 폰트의 가중치와 이탤릭체 여부를 지정합니다. 동일한 폰트의 가중치를 여러 개 가져오는 경우, 폰트 패밀리의 모든 다른 구성원을 다른 이름으로 호출할 필요 없이, 폰트 가중치/스타일을 선택한 다음 {{cssxref("font-weight")}}/{{cssxref("font-style")}}의 다른 값을 사용하여 폰트 중에 선택할 수 있습니다. [@font-face 팁: 폰트 가중치와 폰트 스타일을 정의하여 CSS를 단순하게 유지하는 방법](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/)에 대한 자세한 내용은 Roger Johansson의 글에서 확인할 수 있습니다.

> [!NOTE]
> 웹 폰트에 {{cssxref("font-variant")}} 및 {{cssxref("font-stretch")}} 값을 지정할 수 있습니다. 최신 브라우저에서는 웹 폰트에서 사용할 특정 문자 범위인 {{cssxref("@font-face/unicode-range", "unicode-range")}} 값을 지정할 수도 있습니다. 지원 브라우저에서는 지정된 문자만 다운로드 되므로 불필요한 다운로드를 줄일 수 있습니다. Drew McLellan가 작성한 유니코드 범위를 사용하여 [Unicode-Range를 사용하여 사용자 정의 폰트 스택 만들기](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/)에서 이 기능을 활용하는 방법에 대한 좋은 아이디어를 확인할 수 있습니다.

## 가변 폰트

가변 폰트라는 브라우저에서 사용가능한 새로운 폰트 기술이 있습니다. 가변 폰트는 너비, 굵기 및 스타일에 따라 별도의 폰트 파일을 사용하는 대신 하나의 파일에 다양한 서체 변형을 통합할 수 있는 폰트입니다. 초보자 과정에서는 다소 고급스러운 내용이지만, 좀 더 자세히 알아보고 싶다면 [가변 폰트 가이드](/ko/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) 를 읽어보세요.

## 요약

텍스트 스타일링의 기본에 대한 글을 살펴봤으니, 이제 과정에 대한 평가를 통해 이해도를 테스트할 시간입니다. [커뮤니티 학교 홈페이지 조판](/ko/docs/Learn/CSS/Styling_text/Typesetting_a_homepage).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}
