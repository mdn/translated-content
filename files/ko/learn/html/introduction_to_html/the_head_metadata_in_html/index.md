---
title: head 태그에는 무엇이 있을까? HTML의 메타데이터
slug: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}

HTML의 {{glossary("Head", "head")}}는 페이지를 열 때 웹 브라우저에 표시되지 않습니다. head는 {{htmlelement("title")}} 같은 페이지나, {{glossary("CSS")}}의 링크(HTML 컨텐츠를 CSS로 스타일링하기를 원한다면), 파비콘(favicon), 그리고 다른 메타데이터(작성자, 중요한 키워드와 같은 HTML에 대한 내용)를 포함합니다. 이 글에서는 위 내용들과 그 이상에 대해 다룰 것입니다. 이것은 head에 있어야하는 마크업이나 다른 코드들을 다루는데 좋은 기초가 될 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 지식:</th>
      <td>
        HTML의 기본 구조,
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Getting started with HTML</a
        >문서의 내용을 사전에 읽으면 좋습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        HTML의 head을 사용하는 목적과 HTML 문서에 어떤 영향을 끼칠 수 있는지에
        대해 학습합니다.
      </td>
    </tr>
  </tbody>
</table>

## HTML head란?

[HTML document we covered in the previous article](/en-US/Learn/HTML/Introduction_to_HTML/Getting_started#Anatomy_of_an_HTML_document)을 다시 봅시다.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

HTML {{htmlelement("head")}} 요소의 내용입니다. — 페이지를 열 때 브라우저에 표시되는 {{htmlelement("body")}}요소와 다르게, head의 내용는 페이지에 표시되지 않습니다. 대신에 head의 내용이 하는 일은 페이지에 대한 {{glossary("Metadata", "metadata")}}를 포함하는 것입니다. 위 예시의 head는 매우 간결합니다:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

더 큰 웹 페이지의 경우엔 head가 꽤 많은 항목을 가질 수 있습니다. 가장 좋아하는 홈페이지로 가서 [developer tools](/ko/docs/Learn/Discover_browser_developer_tools)을 이용해 head를 살펴보십시오. 이 글의 목적은 head에 들어갈 수 있는 것들 전부를 어떻게 사용하는지 보여주기 위한 것이 아니라, 주로 head에 넣고 싶어할만한 것들을 익숙하게 하고 사용하는 방법을 가르쳐주는 것입니다.

## 제목 달기

우리는 action에서 {{htmlelement("title")}} 요소를 이미 봤습니다. 이것은 문서의 title을 추가하기 위해 사용될 수 있습니다. head는 body에서 최상위 부분에 들어가는{{htmlelement("h1")}} 요소와 헷갈릴 수 있습니다. \<h1> 요소는 가끔 title을 가리키기도 하지만 이것은 엄연히 다릅니다!

- {{htmlelement("h1")}} 요소는 일반적으로 페이지당 한 번 씩 사용되는데, 페이지 내용물의 제목이나 뉴스의 헤드라인을 표시하기 위해서 페이지를 열 때 브라우저에 표시됩니다.
- {{htmlelement("title")}}은 (문서의 컨텐츠가 아니라) HTML문서 전체의 타이틀 표현하기 위한 메타데이터입니다.

### 능동적 학습: 간단한 예제 살펴보기

1. 능동적인 학습을 시작하기 위해서, GitHub repo에가서 [title-example.html 페이지](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/title-example.html)의 복사본을 다운로드 하십시오. 다음 중 하나를 하면 됩니다:

   1. 복사 붙여넣기를 새로운 텍스트 편집기에서 실행하고 당신이 알 만한 경로에 저장하십시오.
   2. 페이지에서 "Raw"버튼을 누르면, 새창에 Raw code가 나타납니다. 그런 다음 브라우저 메뉴에서 _File > Save Page As..._ 로 원하는 곳에 저장하십시오

2. 이제 당신의 브라우저에서 받은 파일을 여십시오.아래와 같이 보일 것입니다:

   ![A simple web page with the title set to 'title' element, and the 'h1' set to 'h1' element.](title-example.png)\<h1>컨텐츠가 보이는 곳이 어디인지 이제 명백할 것입니다. 그리고 `<title>` 컨텐츠도 어디에 있는지 알 수 있습니다!

3. 텍스트 편집기에서도 이것을 열 수 있습니다. 이 요소들을 변경해보고, 페이지 새로고침하면서 즐겨보십시오.

`<title>` 요소는 다른 방식으로 사용될 수도 있는데, 예를 들면 브라우저에서 사이트를 북마크할 때, `<title>`의 내용물을 추천하는 북마크 이름으로 사용하기도 합니다.

![A webpage being bookmarked in firefox; the bookmark name has been automatically filled in with the contents of the 'title' element ](bookmark-example.png)

`<title>`은 아래에서 보는것 처럼 검색결과로 사용되기도 합니다.

## 메타데이터: \<meta> 요소

메타데이터는 데이터를 설명하는 데이터이다 그리고 HTML에서 문서에 공식적으로 메타데이터를 적용하는 방법이 있습니다. — the {{htmlelement("meta")}} 요소. 물론 이 기사에서 다루고 있는 다른 것들도 메타 데이터라고 보면 됩니다. 페이지의 \<head> 안에 다양한 형태의 `<meta>` 가 있습니다. 하지만 이 단계에서 모두 다루지는 않을 것입니다. 대신에 흔히 볼 수 있고 자주 쓰이는 것들에 대해 다뤄 보도록 하겠습니다.

### 문서의 character 인코딩을 특정하기

위에서의 예제에서 , 아래의 줄이 포함됩니다:

```html
<meta charset="utf-8" />
```

이 요소는 문서의 character—문서에서 허용하는 문자 집합(character set)— encoding에 대해서 간단히 표시합니다 . `utf-8` 은 전세계적인 character 집합으로 많은 언어들을 문자들을 포함합니다. 이는 웹 페이지에서 어떤 문자라도 취급할 수 있다는 것을 의미합니다. 따라서 당신이 작성할 모든 페이지에서 character 집합을 utf-8로 지정하는것은 좋은 생각입니다! 예를 들어서 당신의 웹페이지는 영어나 일본어 모두 허용합니다:

![a web page containing English and Japanese characters, with the character encoding set to universal, or utf-8. Both languages display fine,](correct-encoding.png)예시로, 만약 (라틴 알파벳 사용을 위해서) `ISO-8859-1`로 characterset을 설정한다면, 페이지가 엉망으로 렌더링 될 것입니다:

![a web page containing English and Japanese characters, with the character encoding set to latin. The Japanese characters don't display correctly](bad-encoding.png)

> [!NOTE]
> 크롬과 같은 어떤 브라우저는 자동으로 잘못된 인코딩을 고치기 때문에, 어떤 브라우저를 사용하는가에 따라 이 문제를 겪지 않을 수도 있습니다. 그래도 다른 브라우저에서 있을 잠재적인 문제를 피하기 위하여 인코딩을 `utf-8` 으로 설정해야 합니다.

### 능동적 학습: character 인코딩 실험

이것을 사용해 보기 위해 이전 섹션에서 익혔던 `<title>` ([title-example.html page](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/title-example.html))에서 얻은 간단한 HTML 템플릿을 다시 켜고 멘타 문자 세트값을 `ISO-8859-1`로 변경한 다음, 페이지에 일본어를 추가합니다.

```html
<p>Japanese example: ご飯が熱い。</p>
```

### 저자와 설명을 추가

많은 `<meta>` 요소가 `name` 과 `content` 속성을 가집니다:

- `name` 은 메타 요소가 어떤 정보의 형태를 갖고 있는지 알려줍니다.
- `content`는 실제 메타데이터의 컨텐츠입니다.

이러한 두가지 메타데이터는 당신의 페이지에서 관리자를 정리하고 머릿말을 요약하는데 유용합니다. 아래의 예시를 보면:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications." />
```

저자를 지정하는 것은 콘텐츠 작성자에 대한 정보를 볼 수 있게 해준다. 일부 컨텐츠 관리 시스템에는 페이지 작성자 정보를 자동으로 추출해서 사용할 수 있는 기능이 있다.

페이지 콘텐츠 관련 키워드를 포함시키는 것은 검색엔진에서 이 페이지가 더 많이 표시 될 가능성이 생기게 할 수 있다. (이러한 활동을 [Search Engine Optimization](/ko/docs/Glossary/SEO), 또는 {{glossary("SEO")}} 라고 함.)

### Active learning: The description's use in search engines

이 설명은 검색엔진 결과 페이지에서도 사용된다. 한번 알아보자.

1. 다음 링크로 간다. [front page of The Mozilla Developer Network](/en-US/).
2. 페이지의 소스를 본다. (Right/

   <kbd>Ctrl</kbd>

   \+ click on the page, choose _View Page Source_ from the context menu.)

3. 메타 태그를 찾아본다. 아마 아래와 같은 형태로 생겼을 것이다.

   ```html
   <meta
     name="description"
     content="The Mozilla Developer Network (MDN) provides
   information about Open Web technologies including HTML, CSS, and APIs for both
   Web sites and HTML5 Apps. It also documents Mozilla products, like Firefox OS." />
   ```

4. 지금 당신이 애용하는 검색엔진으로 "Mozilla Developer Network"를 찾아보라(우리는 YAHOO를 사용한다). 검색 결과를 보면, `<meta>` 및 `<title>` 요소의 컨텐츠 설명이 어떤 역할을 했는지 알 수 있을 것이다.

   ![A Yahoo search result for "Mozilla Developer Network"](search-result.png)

> [!NOTE]
> Google에서는 메인 MDN 홈페이지 링크 아래에 MDN의 몇 가지 관련 서브 페이지가 표시된다. 이를 사이트 링크라고하며 Google의 웹 마스터 도구에서 구성 할 수 있다. 그리고 이는 Google 검색 엔진에서 사이트의 검색 결과를 개선하는 방법이다.

> [!NOTE]
> 많은 `<meta>` 기능들이 더이상 사용되지 않는다. (예를들어 `<meta name="keywords" content="fill, in, your, keywords, here">` 같은, 다른 검색 용어에 대해 해당 페이지의 관련성을 부여하기 위해 검색 엔진에 제공하던 키워드 등..) 스팸 발송자들이 키워드 목록에 수백 개의 키워드를 채워버리는 악용 사례가 생겨 버렸기 때문에 이것들은 검색 엔진들이 아예 무시를 해버리게 되었다.

### Other types of metadata

웹페이지를 돌아다니다 보면 다른 종류의 메타데이터들을 꽤 많이 볼 수 있다. 웹 사이트에서 볼 수있는 기능들은 특정 사이트 (예 : 소셜 네트워킹 사이트)에 사용할 수있는 특정 정보를 제공하도록 설계된 독점 제작물이다.

[Open Graph Data](http://ogp.me/) 는 Facebook이 웹 사이트에 더 풍부한 메타 데이터를 제공하기 위해 발명한 메타 데이터 프로토콜이다. MDN 소스코드에서 다음과 같은 부분을 볼 수 있을 것이다.

```html
<meta
  property="og:image"
  content="https://developer.mozilla.org/mdn-social-share.png" />
<meta
  property="og:description"
  content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both Web sites
and HTML5 Apps. It also documents Mozilla products, like Firefox OS." />
<meta property="og:title" content="Mozilla Developer Network" />
```

Facebook에서 MDN에 링크를 하면, 이미지와 설명이 함께 나타난다. 사용자에게는 더 좋은 정보를 보여줄 수 있는 것이다.

![Open graph protocol data from the MDN homepage as displayed on facebook, showing an image, title, and description.](facebook-output.png)Twitter 에서도 유사한 형태의 독점적인 자체 메타데이터를 가지고 있는데, 특정 웹사이트의 url이 twitter.com에 표시 될 때와 유사한 효과가 있다.

```html
<meta name="twitter:title" content="Mozilla Developer Network" />
```

## 맞춤 아이콘 추가하기

당신의 사이트 디자인을 좀 더 풍성하게 만들기 위해서 , 당신은 커스텀 아이콘 레퍼런스를 매타데이터에 추가하고 특정 콘텐츠에서 이것을 보여지게 할 수 있다.

The humble favicon, which has been around for many years, was the first icon of this type, a 16 x 16 pixel icon used in multiple places. 각 열린 페이지의 탭이나 북마크 패널 페이지 쪽에서 favicon을 볼 수 있다.

favicon은 다음과 같이 너의 사이트에 추가할 수 있다:

1. 당신의 사이트의 인덱스 페이지와 같은 디렉토리에 `.ico` 포멧의 파일을 저장하라 (most browsers will support favicons in more common formats like `.gif` or `.png`, but using the ICO format will ensure it works as far back as Internet Explorer 6.)
2. `다음 줄을 HTML <head>에 추가하여 favicon을 참조하라`:

   ```html
   <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
   ```

북마크 페널의 페비콘이 그 예시이다:

![The Firefox bookmarks panel, showing a bookmarked example with a favicon displayed next to it.](bookmark-favicon.png)

요즘은 많은 다른 아이콘 타입이 있다. 예를 들어서 MDN 홈페이지에서 다음과 같은 것을 발견할 것이다:

```html
<!-- third-generation iPad with high-resolution Retina display: -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="144x144"
  href="https://developer.mozilla.org/static/img/favicon144.png" />
<!-- iPhone with high-resolution Retina display: -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="114x114"
  href="https://developer.mozilla.org/static/img/favicon114.png" />
<!-- first- and second-generation iPad: -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="72x72"
  href="https://developer.mozilla.org/static/img/favicon72.png" />
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link
  rel="apple-touch-icon-precomposed"
  href="https://developer.mozilla.org/static/img/favicon57.png" />
<!-- basic favicon -->
<link
  rel="shortcut icon"
  href="https://developer.mozilla.org/static/img/favicon32.png" />
```

주석은 각 아이콘의 용도를 설명한다. 웹사이트가 iPad의 홈 화면에 저장 될 때 사용할 고해상도 아이콘을 제공하는 것 등을 포함한다.

지금 당장 모든 아이콘을 구현할 줄 알아야 한다는 성급한 부담을 가질 필요는 없다. 이것은 고급 기능에 속하기도 하며, 이번 과정을 통해 여러 '지식'을 습득해야 가능하다. 이 페이지의 주된 목적은 다른 웹사이트의 소스 코드를 보며 그 '지식'을 습득할 수 있도록 하려는데에 있다.

## HTML에 CSS 와 JavaScript 적용하기

현대의 모든 웹사이트는 상호작용 기능이 많은 영상 플레이어, 지도, 게임 등을 위해 {{glossary("JavaScript")}}가 필요하고, 이것들을 더 멋져 보이게 하기 위해 {{glossary("CSS")}}가 사용된다. 이것들은 {{htmlelement ( "link")}} 요소와 {{htmlelement ( "script")}} 요소를 사용하여 웹 페이지에 가장 일반적으로 적용된다.

- {{htmlelement("link")}}는 항상 문서의 head 부분에 위치한다. 이것은 두 가지 속성을 취하는데, rel="stylesheet", 즉 문서의 스타일 시트임을 나타냄과 동시에 스타일 시트 파일의 경로를 포함하는 href를 내포한다.

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- {{htmlelement("script")}} 는 head에 들어갈 필요가 없다. `</body>` 태그 바로 앞, 문서 본문의 맨 끝에 넣는 것이 좋으며, JavaScript를 적용하기 전에 모든 HTML 내용을 브라우저에서 읽었는지 확인하는 것이 좋다. 액세스 과정에서 JavaScript가 아직 존재하지 않는 요소라고 판단하며 에러가 날 수 있다.

  ```html
  <script src="my-js-file.js"></script>
  ```

  **Note**: `<script>` 태그가 비어있다고 보일 수 도 있지만 그렇지 않으며, 반드시 태그를 닫아주어야 한다(\</script>). 외부 스크립트 파일을 지정하는 대신 스크립트를 `<script>` 안에 넣을 수 도 있다.

### Active learning: applying CSS and JavaScript to a page

1. 이 실습을 시작하려면, 같은 로컬 디렉토리 안에 [meta-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/script.js) 그리고 [style.css](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/style.css) 파일을 미리 만들어 놓아야 한다. 올바른 이름과 파일 확장자로 저장되어 있는지 확인하는 것도 필수!
2. 애용하는 브라우져에서 HTML 파일을 열고, 텍스트 에디터도 실행한다.
3. 위에서 나온 설명대로 CSS와 JavaScript가 HTML에 적용되도록 HTML에 {{htmlelement("link")}} 및 {{htmlelement("script")}} 를 추가한다.

HTML을 저장하고 브라우저를 새로 고치면 올바르게 변경된 것이다:

![Example showing a page with CSS and JavaScript applied to it. The CSS has made the page go green, whereas the JavaScript has added a dynamic list to the page.](js-and-css.png)

- JavaScript가 빈 목록을 페이지에 추가했다. 이제 목록의 아무 곳이나 클릭하면 새 목록 항목에 대한 텍스트를 입력하라는 대화 상자가 나타난다. OK 버튼을 누르면 새로운 목록 아이템이 추가된다. 기존에 있던 목록의 아이템을 클릭하면 해당 아이템의 텍스트를 변경 할 수 있는 대화 상자가 나타난다.
- CSS에 의해 배경이 녹색으로 변하고 텍스트가 커진다. 그리고 javaScript가 페이지에 추가 한 일부 스타일도 적용된다(검은색 테두리가 있는 빨간색 공간).

> [!NOTE]
> CSS나 JS를 적용하는데서 부터 애를 먹고 있으면 [css-and-js.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/css-and-js.html) 페이지를 참고하기를 추천한다.

## 문서의 기본 언어 설정

마지막으로, 페이지의 언어를 설정 할 수도 있다. 이 작업은 [lang attribute](/ko/docs/Web/HTML/Global_attributes/lang) 을 여는 HTML 태그에 추가하여 수행 할 수 있다. ([meta-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/meta-example.html) 과 아래 참조)

```html
<html lang="en-US"></html>
```

이것은 여러 방면에서 유용하다. HTML 문서는 언어가 설정되어 있으면 검색 엔진에 의해 보다 효과적으로 색인화되며(예를 들어 언어 별 결과에 올바르게 표시되도록..) 화면 판독기를 사용하여 시각장애가 있는 사용자에게 유용하다.(예: 6이라는 숫자는 프랑스어와 영어에서 모두 존재하지만, 각기 다른 발음이 적용된다.)

또한, 문서의 하위 섹션을 다른 언어로 인식하도록 설정할 수도 있다. 예를들어 다음과 같이 일본어 일본어로 된 섹션에 대해서는 일본어로 인식하도록 할 수 있다:

```html
<p>Japanese example: <span lang="jp">ご飯が熱い。</span>.</p>
```

이 코드는 [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 표준에 따른다. [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/) 에서 자세한 내용을 확인할 수 있다.

## 요약

HTML head에 대한 퀵 파이어 투어가 마무리 되었다. 여기에서 보고 할 수 있는 것보다 훨씬 많은 부분이 있지만, 지금 단계에서는 복잡하거나 어렵게 느껴질 수도 있을 것이고 단지 당신에게 지극히 일반적이고 기초적인 사용법만을 제시했을 뿐이다.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}
