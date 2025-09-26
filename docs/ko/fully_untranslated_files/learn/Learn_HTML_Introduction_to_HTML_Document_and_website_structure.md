---
title: 문서와 웹사이트 구조
slug: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

당신의 페이지의 (단락 또는 이미지 같은) 개개의 파트를 정의할 뿐 아니라, {{glossary("HTML")}}은 웹 사이트의 구역을 정의하는 ("헤더", "네비게이션 메뉴", "메인 컨텐츠 칼럼"과 같은) 수많은 블록 수준 요소들로 웹 사이트를 자랑합니다. 이번 글은 어떻게 기본 웹 구조를 설계하고, 어떻게 그 구조를 나타내는 HTML을 작성하는지 살펴봅니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선행 조건:</th>
      <td>
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Getting started with HTML</a
        >의 HTML의 기본.
        <a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML text fundamentals</a
        >의 HTML 텍스트 형식.
        <a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Creating hyperlinks</a
        >의 하이퍼링크의 동작 방식.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        시멘틱 태그를 사용하여 문서 구조를 만드는 방법과 간단한 웹사이트 구조
        만드는 방법을 배운다.
      </td>
    </tr>
  </tbody>
</table>

## 문서의 기본 섹션

웹페이지는 서로 많이 다르게 보일 수 있지만, 페이지가 전체화면 비디오 혹은 게임이거나 예술 프로젝트, 좋지 않은 구조를 가지고 있지 않은 이상에는 대부분 유사한 구성 요소를 가지고 있습니다.

- header
  - : 일반적으로 큰 제목과 로고 등이 있는 큰 띠. 한 웹페이지에서 주요 정보가 있는 곳입니다.
- navigation bar
  - : 홈 페이지의 메인 섹션으로 연결합니다; 대부분 메뉴 버튼이나 링크, 탭으로 표현됩니다. 헤더와 같이, 이 항목은 대부분 한 페이지로부터 다른 페이지로 넘어가도 구성으로 남아있습니다. — 웹 사이트에서 일관적이지 못한 네비게이션을 사용할 경우 방문자는 복잡함과 불만족스러움을 느낄 것입니다. 많은 웹 디자이너들은 네비게이션 바를 개별적인 구성 요소로 사용하기 보다 hearder bar의 일부로 다루지만 이는 필수 사항은 아닙니다; 사실 일부 사람들은 접근성을 위해서는 두 개로 나누는 것이 좋다고 주장하는데, 나뉜 경우 스크린 리더들이 두 특징들을 더 잘 읽을 수 있기 때문입니다.
- main content
  - : 웹 페이지에서 가장 독특한 컨텐츠를 포함하고 있는 중심의 큰 부분으로, 예를 들어, 당신이 보고 싶어하는 비디오, 당신이 읽고 있는 주요 이야기, 당신이 보고 싶어하는 지도, 또는 뉴스 헤드라인 등이 있습니다. 물론 이 부분은 각 페이지마다 다른 웹 사이트의 한 부분입니다.
- sidebar
  - : 주변의 정보, 링크, 인용 부호, 광고 등입니다. 일반적으로 이는 메인 컨텐츠에 무엇이 포함되어 있느냐에 따라 다릅니다. (예를 들어 기사 페이지에서, sidebar는 작성자의 소개, 또는 관련 기사 링크를 포함할 것입니다.) 그러나 보조 navigation system으로서 되풀이되는 요소를 사용하는 경우도 찾아볼 수 있습니다.
- footer
  - : 페이지 바닥의 줄로 일반적으로 작은 정보, 저작권 정보, 또는 연락처 등을 포함하고 있습니다. (header와 같이) 일반적인 정보를 담고 있는 부분이지만 보통 중요하지 않거나 웹 사이트 자체에 부차적인 정보입니다. Footer는 또 가끔 {{Glossary("SEO")}} 목적으로 사용되는데, 인기 컨텐츠 바로가기 링크를 제공합니다.

"전형적인 웹사이트"는 다음과 같이 구성될 수 있습니다:

![a simple website structure example featuring a main heading, navigation menu, main content, side bar, and footer.](sample-website.png)

## 컨텐츠 구조화를 위한 HTML

위에 보이는 간단한 예제는 아름답지는 않습니다. 하지만 전형적인 웹사이트 레이아웃을 보여주기에는 모자람이 없는 예제입니다. 어떤 웹사이트는 Column이 더 있을 수 있고, 더 복잡할 수 있습니다 하지만 아이디어가 있고 적절한 CSS를 활용한다면, 모든 요소를 활용하여 section별로 구분하여 당신이 원하는 모양으로 만들 수 있습니다. 하지만 이를 논의하기 전에, 우리는 semantic을 고려해서 (요소의 의미를 고려해서) **요소를 적재적소에 사용해야 합니다**.

이유는 시각 장애인과 관련이 있습니다. 시각 장애인에게는 색상,글꼴이 중요하지 않습니다. 화면이 전체 스토리를 말해주지 않기 때문입니다.

> **참고:** 색맹은 세계 인구의[8% 를 차지 합니다](http://www.color-blindness.com/2006/04/28/colorblind-population/). 시각 장애인은 세계 인구의 약 4-5%를 차지합니다 (2012년에는 [전 세계적으로 2억 8,500만명](https://en.wikipedia.org/wiki/Visual_impairment)), 총 인구는 [70억 이었습니다](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg).)

HTML 코드에서 기능에 따라 콘텐츠 섹션을 마크업할 수 있습니다. 위에서 설명한 콘텐츠 섹션을 나타내는 요소를 명확하게 사용할 수 있으며 스크린리더와 같은 보조 기술은 이러한 요소를 인식하고 "기본 탐색 찾기" 또는 "주요 콘텐츠 찾기" 과정의 앞부분에서 언급했듯이 올바른 작업에 올바른 요소 구조와 의미 체계를 사용하지 않으면 여러 가지 올바르지 않은 결과가 발생합니다..

이러한 시맨틱 마크업을 구현하기 위해 HTML은 이러한 섹션을 나타내는 데 사용할 수 있는 전용 태그를 제공합니다. 예시:

- **header:** {{htmlelement("header")}}.
- **navigation bar:** {{htmlelement("nav")}}.
- **main content:** {{htmlelement("main")}}, {{HTMLElement("article")}}, {{htmlelement("section")}},{{htmlelement("div")}} 의 다양한 하위 섹션이 있습니다.
- **sidebar:** {{htmlelement("aside")}}; 종종 {{htmlelement("main")}}안에 위치합니다.
- **footer:** {{htmlelement("footer")}}.

### 능동적 학습: 예제 코드 탐색

위에서 본 예제는 다음 코드로 표시됩니다([Github 리포지토리에서 예제를 찾아보세요](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/document_and_website_structure/index.html)). 위의 예를 살펴본 다음 아래 목록을 살펴보고 어떤 부분이 시각적 개체의 어떤 섹션을 구성하는지 확인하시기 바랍니다.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>My page title</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One"
      rel="stylesheet"
      type="text/css" />
    <link rel="stylesheet" href="style.css" />

    <!-- the below three lines are a fix to get HTML5 semantic elements working in old versions of Internet Explorer-->
    <!--[if lt IE 9]>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
  </head>

  <body>
    <!-- Here is our main header that is used across all the pages of our website -->

    <header>
      <h1>Header</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <!-- A Search form is another commmon non-linear way to navigate through a website. -->

      <form>
        <input type="search" name="q" placeholder="Search query" />
        <input type="submit" value="Go!" />
      </form>
    </nav>

    <!-- Here is our page's main content -->
    <main>
      <!-- It contains an article -->
      <article>
        <h2>Article heading</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>

        <h3>subsection</h3>

        <p>
          Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem.
          Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.
        </p>

        <p>
          Pelientesque auctor nisi id magna consequat sagittis. Curabitur
          dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet.
          Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.
        </p>

        <h3>Another subsection</h3>

        <p>
          Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
          soclis natoque penatibus et manis dis parturient montes, nascetur
          ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem
          facilisis semper ac in est.
        </p>

        <p>
          Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
          tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
          ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi
          diam iaculis velit, is fringille sem nunc vet mi.
        </p>
      </article>

      <!-- the aside content can also be nested within the main content -->
      <aside>
        <h2>Related</h2>

        <ul>
          <li><a href="#">Oh I do like to be beside the seaside</a></li>
          <li><a href="#">Oh I do like to be beside the sea</a></li>
          <li><a href="#">Although in the North of England</a></li>
          <li><a href="#">It never stops raining</a></li>
          <li><a href="#">Oh well...</a></li>
        </ul>
      </aside>
    </main>

    <!-- And here is our main footer that is used across all the pages of our website -->

    <footer>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  </body>
</html>
```

코드를 살펴보고 이해하세요. 코드 내부의 주석도 코드를 이해하는 데 도움이 될 것입니다. 문서 레이아웃을 이해하는 열쇠는 건전한 HTML 구조를 작성한 다음 CSS로 레이아웃하는 것이기 때문에 이 기사에서 다른 많은 작업을 요구하지 않습니다. CSS 주제의 일부로 CSS 레이아웃을 연구하기 시작할 때까지 기다리겠습니다.

## HTML 레이아웃 요소의 세부 사항

모든 HTML 섹션 요소의 전반적인 의미를 자세히 이해하는 것이 좋습니다. 이것은 웹 개발에 대한 더 많은 경험을 얻기 시작하면서 점차적으로 작업하게 될 것입니다. HTML 요소 참조를 읽으면 많은 세부 정보를 찾을 수 있습니다. 지금으로서는 다음과 같은 주요 정의를 이해하려고 노력해야 합니다:

- {{HTMLElement('main')}} 는 그 _페이지에 독자적인_ 컨텐츠입니다*.* Use `<main>` only _once_ per page, and put it directly inside {{HTMLElement('body')}}. Ideally this shouldn't be nested within other elements.
- {{HTMLElement('article')}} encloses a block of related content that makes sense on its own without the rest of the page (e.g. a single blog post.)
- {{HTMLElement('section')}} is similar to `<article>`, but it is more for grouping together a single part of the page that constitutes one single piece of functionality (e.g. a mini map, or a set of article headlines and summaries.) It's considered best practice to begin each section with a [heading](/en-US/Learn/HTML/Howto/Set_up_a_proper_title_hierarchy); also note that you can break `<article>`s up into different `<section>`s, or `<section>`s up into different `<article>`s, depending on the context.
- {{HTMLElement('aside')}} contains content that is not directly related to the main content but can provide additional information indirectly related to it (glossary entries, author biography, related links, etc.)
- {{HTMLElement('header')}} represents a group of introductory content. If it is a child of {{HTMLElement('body')}} it defines the global header of a webpage, but if it's a child of an {{HTMLElement('article')}} or {{HTMLElement('section')}} it defines a specific header for that section (try not to confuse this with [titles and headings](/en-US/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_a_title).)
- {{HTMLElement('nav')}} contains the main navigation functionality for the page. Secondary links, etc., would not go in the navigation.
- {{HTMLElement('footer')}} represents a group of end content for a page.

### 의미 없는 래퍼

때로는 일부 항목을 함께 그룹화하거나 일부 콘텐츠를 래핑하는 데 이상적인 의미론적 요소를 찾을 수 없는 상황이 발생합니다. 때로는 요소 집합을 그룹화하여 일부 요소가 있는 단일 엔터티로 모든 요소에 영향을 미치기를 원할 수 있습니다.{{glossary("CSS")}} 또는 {{glossary("JavaScript")}}. 이와 같은 경우 HTML은 다음을 제공합니다. {{HTMLElement("div")}} 과 {{HTMLElement("span")}} 엘리먼트. 당신은 적합하게 이것들을 사용해야 합니다 [`class`](/ko/docs/Web/HTML/Global_attributes#class)속성은 쉽게 타겟팅할 수 있도록 일종의 레이블을 제공합니다.

{{HTMLElement("span")}} 엘리먼트는 내용을 감싸는 더 나은 의미 체계 텍스트 요소가 생각나지 않거나 특정 의미를 추가하고 싶지 않은 경우에만 사용해야 하는 인라인 비의미적 요소입니다. For example:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door
  <span class="editor-note"
    >[Editor's note: At this point in the play, the lights should be down
    low]</span
  >.
</p>
```

In this case, the editor's note is supposed to merely provide extra direction for the director of the play; it is not supposed to have extra semantic meaning. For sighted users, CSS would perhaps be used to distance the note slightly from the main text.

{{HTMLElement("div")}} is a block level non-semantic element, which you should only use if you can't think of a better semantic block element to use, or don't want to add any specific meaning. For example, imagine a shopping cart widget that you could choose to pull up at any point during your time on an e-commerce site:

```html
<div class="shopping-cart">
  <h2>Shopping cart</h2>
  <ul>
    <li>
      <p>
        <a href=""><strong>Silver earrings</strong></a
        >: $99.95.
      </p>
      <img src="../products/3333-0985/thumb.png" alt="Silver earrings" />
    </li>
    <li>...</li>
  </ul>
  <p>Total cost: $237.89</p>
</div>
```

이것은 페이지의 주요 콘텐츠와 반드시 관련이 있는 것은 아니기 때문에 실제로

가 아닙니다(어디서나 볼 수 있기를 원합니다.) 그것은 일부가 아니기 때문에 `<section>`을 사용하는 것을 특별히 보증하지도 않습니다. 페이지의 주요 내용입니다. 따라서 이 경우 `<div>`가 좋습니다. 스크린리더 사용자가 쉽게 찾을 수 있도록 푯말로 제목을 포함했습니다.

> **경고:** Div는 사용하기 너무 편리해서 너무 많이 사용하기 쉽습니다. 의미론적 가치가 없기 때문에 HTML 코드를 어지럽힐 뿐입니다. 더 나은 의미론적 솔루션이 없을 때만 사용하도록 주의하고 사용을 최소로 줄이십시오. 그렇지 않으면 문서를 업데이트하고 유지 관리하는 데 어려움을 겪을 수 있습니다.

### Line breaks and horizontal rules

줄바꿈에 사용하는 두 가지 요소는 다음과 같습니다. {{htmlelement("br")}} and {{htmlelement("hr")}}:

`<br>` 단락에 줄 바꿈을 만듭니다. 우편 주소나 시와 같이 일련의 고정된 짧은 줄을 원하는 상황에서 단단한 구조를 강제하는 유일한 방법입니다. For example:

```html
<p>
  There once was a girl called Nell<br />
  Who loved to write HTML<br />
  But her structure was bad, her semantics were sad<br />
  and her markup didn't read very well.
</p>
```

`<br>` elements, the paragraph would just be rendered in one long line (as we said earlier in the course, [HTML ignores most whitespace](/en-US/Learn/HTML/Introduction_to_HTML/Getting_started#Whitespace_in_HTML)); with them in the code, the markup renders like this:

There once was a girl called Nell
Who loved to write HTML
But her structure was bad, her semantics were sad
and her markup didn't read very well.

`<hr>` 요소는 텍스트의 주제 변경(예: 주제 또는 장면의 변경)을 나타내는 문서에 수평선을 만듭니다. 시각적으로 수평선처럼 보입니다. As an example:

```
<p>Ron was backed into a corner by the marauding netherbeasts. Scared, but determined to protect his friends, he raised his wand and prepared to do battle, hoping that his distress call had made it through.</p>
<hr>
<p>Meanwhile, Harry was sitting at home, staring at his royalty statement and pondering when the next spin off series would come out, when an enchanted distress letter flew through his window and landed in his lap. He read it hasily, and lept to his feet; "better get back to work then", he mused.</p>
```

다음과 같이 렌더링 할 것입니다:

Ron was backed into a corner by the marauding netherbeasts. Scared, but determined to protect his friends, he raised his wand and prepared to do battle, hoping that his distress call had made it through.

---

Meanwhile, Harry was sitting at home, staring at his royalty statement and pondering when the next spin off series would come out, when an enchanted distress letter flew through his window and landed in his lap. He read it hasily and sighed; "better get back to work then", he mused.

## 간단한 웹사이트 계획하기

간단한 웹페이지의 콘텐츠를 계획했다면 다음 논리적 단계는 최고의 사용자 경험을 위해 전체 웹사이트에 어떤 콘텐츠를 넣고 싶은지, 어떤 페이지가 필요한지, 어떻게 정렬하고 서로 연결해야 하는지 알아내는 것입니다. 이를 {{glossary("Information architecture")}}라고 합니다. 크고 복잡한 웹 사이트에서는 이 프로세스에 많은 계획이 포함될 수 있지만 몇 페이지로 된 간단한 웹 사이트에서는 상당히 간단하고 재미있을 수 있습니다!

1. 몇 요소들은 대부분의 페이지에 공통적으로 적용될 것이란 걸 명심하세요 — 네비게이션 메뉴나 footer 컨텐츠처럼. 예를 들어 비즈니스를 위한 페이지라면, 당신의 연락처를 각각의 페이지의 footer에 보이도록 하는 것은 좋은 생각입니다. 모든 페이지에 공통적으로 포함하고 싶은 것을 적어보세요.![the common features of the travel site to go on every page: title and logo, contact, copyright, terms and conditions, language chooser, accessibility policy](common-features.png)
2. 다음으로, 각 페이지의 구조를 간단한 스케치로 그리세요.아마 위의 우리의 간단한 웹사이트 같을 것입니다). 각 블럭의 기능을 적으세요.![A simple diagram of a sample site structure, with a header, main content area, two optional sidebars, and footer](site-structure.png)
3. 이제 웹사이트에 포함시키길 원하는 (각 페이지에 공통적이지 않은) 다른 모든 컨텐츠를 brainstorm하세요 - 리스트에 모두 적어 내려가세요. ![A long list of all the features that we could put on our travel site, from searching, to special offers and country-specific info](feature-list.png)
4. 다음으로, 이 모든 컨텐츠들을 그룹화 해 다른 페이지에서 어떤 부분들이 함께할 수 있을지 생각할 수 있습니다. 이것은 {{glossary("Card sorting")}}이라는 기술과 매우 유사합니다.![The items that should appear on a holiday site sorted into 5 categories: Search, Specials, Country-specific info, Search results, and Buy things](card-sorting.png)
5. 이제 대략적인 사이트맵을 그려보세요 - 사이트의 각 페이지를 동그라미로 지정하고, 각 페이지 간 동작 흐름을 보여주기 위해 선을 그으세요. 홈페이지는 아마 가운데에 있고, 모두는 아니어도 대부분에 연결될 것 입니다; 작은 사이트 안의 대부분의 페이지는, 비록 예외는 있겠지만, 메인 네비게이션에서 사용할 수 있어야 합니다. 당신은 아마 이것들이 어떻게 보여져야 할지에 대한 설명도 적고 싶을 것입니다. ![A map of the site showing the homepage, country page, search results, specials page, checkout, and buy page](site-map.png)

### 능동적인 학습: 나만의 사이트맵 만들기

무엇에 대한 사이트를 만들고 싶습니까? 자신이 만든 웹사이트에 대해 위의 예를 수행해 보십시오.

> **참고:** 작업물을 어딘가에 저장하세요; 나중에 필요할 수 도 있습니다.

## 요약

이 시점에서 웹 페이지/사이트를 구성하는 방법에 대해 더 잘 알고 있어야 합니다. 이 모듈의 마지막 기사에서는 HTML을 디버그하는 방법을 연구할 것입니다.

## See also

- [Using HTML sections and outlines](/ko/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines): Advanced guide to HTML5 semantic elements and the HTML5 outline algorithm.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}
