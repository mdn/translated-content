---
title: 하이퍼링크 만들기
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

하이퍼 링크는 중요하다. — 웹을 웹답게 만들기 때문이다. 이 글에서는 링크를 만드는데 필요한 구문을 보여주고 링크의 모범 사례를 설명한다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">미리 알아두면 좋은 지식들:</th>
      <td>
        기본적인 HTML 에 대한 친숙함, as covered in
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Getting started with HTML</a
        >. HTML text formatting, as covered in
        <a
          href="/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML text fundamentals</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        <p>
          하이퍼링크를 효과적으로 다루는 방법과 수많은 파일들을 함께 연결하는
          방법을 배웁니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 하이퍼링크란 무엇인가?

하이퍼링크는 웹이 제공하는 가장 흥미로운 혁신 중 하나입니다, 하이퍼링크는 웹이 시작된 이래 웹의 특성이었습니다. 그러나 하이퍼링크는 웹을 웹 다워보이도록 만들어줍니다. — 문서들을 다른 문서들과 연결시켜 주기도 하구요. 또는 우리가 원하는 다른 resource 들과 연결해주기도 합니다. 우리는 또한 문서들의 특정 부분들끼리 연결할 수 있죠.그리고 우리는 앱들을 단순한 웹 주소를 통해 이용하게 만들 수도 있습니다. (설치 혹은 여러가지 작업들을 필요로 하는 native 앱과 비교해보세요.) 거의 모든 web content 들은 링크로 바뀔 수 있는데요. 우리가 그것들을 클릭하거나 활성화시키면 웹 브라우저가 다른 웹 주소({{glossary("URL")}})로 갑니다.

> **참고:** **메모**: URL은 HTML 파일, 텍스트 파일, 이미지, 텍스트 문서들, 비디오와 오디오 파일들, 그리고 웹상에서 존재할 수 있는 어느 것이라 할지라도 연결할 수 있다.만약 웹 브라우저가 어떻게 파일을 보여주거나 다룰지 모른다면, 웹 브라우저는 당신이 파일을 열기를 원하는지 (만약 그렇다면, 파일을 열거나 처리하는 것에 대한 의무는 device에서 적절한 native 앱에게 넘겨질 겁니다.) 혹은 파일을 다운로드 하기를 원하는지 (만약 그렇다면, 당신은 그것을 나중에 다룰 수 있습니다.) 궁금해 할 것입니다.

예를 들면, BBC 홈페이지엔 많은 링크들이 있는데요. 그것들은 수많은 뉴스들 뿐만 아니라 다른 웹사이트들 (navigation functionality), 로그인/등록 페이지들 (user tools) 그리고 더 많은 다른 곳에도 연결되어 있습니다.

![frontpage of bbc.co.uk, showing many news items, and navigation menu functionality](bbc-homepage.png)

## 링크의 구조

A basic link is created by wrapping the text (or other content, see [Block level links](#block_level_links)) you want to turn into a link inside an {{htmlelement("a")}} element, and giving it an {{htmlattrxref("href", "a")}} 속성은 (also known as a **target**) 사이트의 주소가 포함된 링크를 당신에게 줍니다.

```html
<p>I'm creating a link to
<a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

위 코드의 결과는 다음과 같습니다:

나는 링크를 만들었다. [the Mozilla homepage](https://www.mozilla.org/en-US/).

### title 속성에 부가적인 정보를 더하기

`title`; 속성은 해당 페이지에 어떤 종류의 정보가 포함되어 있는지 또는 알아야할 사항과 같은 링크에 대한 보충할만한 유용한 정보를 포함하기 위한 것을 나타낼때 사용한다.

예제 코드 :

```html
<p>I'm creating a link to
<a href="https://www.mozilla.org/en-US/"
   title="The best place to find more information about Mozilla's
          mission and how to contribute">the Mozilla homepage</a>.
</p>
```

이것은 그리고 마우스를 오버했을때에 툴팁에 대한 기능도 제공해줄 수 있다.

제가 만든 링크 입니다. [the Mozilla homepage](https://www.mozilla.org/en-US/).

> **참고:** 링크 제목은 마우스 호버시에만 공개 된다. 이것은 웹 페이지를 탐색하기 위해 키보드에만 의존하는 사람들이 타이틀 정보에 접근하는데 어려움을 겪게 된다는 것을 의미한다. 만약 title의 정보가 페이지 사용에 있어서 정말로 중요하다면, 해당하는 정보를 일반 텍스트에 넣어줌으로써 모든 사용자가 접근할 수 있는 방식으로 제시해주어야한다.

### 능동학습: 링크를 만들어봅시다.

적극적으로 학습해 봅시다: local code 편집기를 사용해서 하나의 HTML document 를 만드세요. ([소스코드: 템플릿 시작하기](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)가 잘 될거에요.)

- HTML body 속에, 하나의 혹은 더 많은 paragraph 들, 혹은 당신이 이미 알고 있는 다른 타입의 content 들을 더해보세요.
- 몇몇의 content들을 링크로 바꾸세요.
- 타이틀 속성들을 더하세요.

### Block level 링크들

이전에 얘기했듯이, 여러분은 어떤 내용이든 link로 바꿀 수 있습니다. [block level 요소들](/en-US/Learn/HTML/Introduction_to_HTML/Getting_started#Block_versus_inline_elements) 이라고 할지라도요. 만약 링크로 바꾸고 싶은 이미지가 있다면, `<a> 와 </a>` 사이에 그 이미지를 넣으시기만 하시면 됩니다.

```html
<a href="https://www.mozilla.org/en-US/">
  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
</a>
```

> **참고:** **메모**: 나중에 보실 글에선 웹에서 이미지를 사용하는 것에 대해 더 많이 배우실 겁니다.

## URL 과 path 에 대한 기본 지침

link target 에 대해 완전히 이해하기 위해서, URL 과 파일 path에 대하여 이해하실 필요가 있습니다. 이번 시간에는 여러분께서 성취하실 필요가 있는 정보에 대해서 알려드릴게요.

URL, 혹은 Uniform Resource Locator 은 단순히 무언가가 웹상의 어디에 위치하는지 결정하는 하나의 텍스트 문자열이랍니다. 예를 들면, Mozilla's 영어 홈페이지는`https://www.mozilla.org/en-US/`이죠.

URL은 파일들을 찾기위해 path를 이용합니다. path는 당신이 관심있어 하는 파일이 파일 시스템 어디에 있는지 구체적으로 명시하구요. 디렉토리 구조에 대한 예제를 보시죠. (see the [creating-hyperlinks](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/creating-hyperlinks) directory.)

![A simple directory structure. The parent directory is called creating-hyperlinks and contains two files called index.html and contacts.html, and two directories called projects and pdfs, which contain an index.html and a project-brief.pdf file, respectively](simple-directory.png)

이 디렉토리 구조의 **root**는 `creating-hyperlinks`. 웹사이트를 로컬 단에서 다룰 때에는 전체 웹사이트가 모두 들어갈 수 있는 하나의 디렉토리를 가져야 할 것입니다. Root 안에서 우리는 `index.html` 파일과 `contacts.html` 파일을 갖습니다. 진짜 웹사이트 안에서 `index.html` 는 우리의 홈 페이지 또는 랜딩 페이지(웹사이트의 접속 포인트 또는 웹사이트의 특정 부분 이 되는 페이지)가 될 것입니다.

또 Root 안에는 두 개의 디렉토리가 있습니다 — `pdfs` 와 `projects`. 이들은 각각 하나의 파일을 내부에 가지고 있습니다 — 각각 PDF (`project-brief.pdf`) 와 `index.html` 파일입니다. 당신은 두 개의 `index.html` 파일들을 각각 파일 시스템의 다른 위치에 있도록 해서 하나의 프로젝트 안에 가질 수 있습니다. 많은 웹 사이트들이 이렇게 하고 있습니다. 두번째 `index.html`는 아마 프로젝트와 관련된 정보의 메인 랜딩 페이지가 될 것입니다.

- **같은 디렉토리(폴더)**: `contacts.html`을 가리키는 하이퍼링크를 `index.html`(top level `index.html`) 안에 포함시키려면 현재 파일과 동일한 디렉토리에 연결하려는 파일의 파일 이름만 지정하면 된다. 따라서 사용할 URL은 `contacts.html`: 입니다.

```html
<p>Want to contact a specific staff member?
Find details on our <a href="contacts.html">contacts page</a>.</p>
```

- **하위 디렉토리로 하향 이동**: `projects/index.html`을 가리키는 하이퍼링크를 internal `index.html`(`index.html`에 상위 레벨)에 포함시키려면 연결하려는 파일을 표시하기 전에 프로젝트 디렉토리로 내려가야 할 것이다. 이 작업은 디렉토리 이름, 그 다음 슬래시, 그 다음 파일 이름을 지정하여 수행되므로 사용할 URL은`projects/index.html` 입니다.

```html
<p>Visit my <a href="projects/index.html">project homepage</a>.</p>
```

- **부모 디렉토리로 상향 이동**: `pdfs/project-brief.pdf`를 가리키는 하이퍼링크를 `projects/index.html` 안에 포함시키려면 디렉토리 레벨을 올린 다음 pdf 디렉토리로 다시 내려가야 할 것이다. "상위 디렉터리 이동"은 두 개의 점을 사용하여 표시된다. — `..` — 따라서 사용할 URL은 `../pdfs/project-brief.pdf`:

```html
<p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
```

> **참고:** 필요한 경우 아래와 같이 이러한 기능의 여러 인스턴스를 복잡한 URL로 결합할 수 있다 `../../../complex/path/to/my/file.html`.

### Document fragments(문서 조각)

문서 상단이 아닌 HTML 문서 내부의 특정 부분(Document fragments(문서 조각)에 링크 할 수 있다. 그것을 하기 위해서 먼저 당신은 링크를 시키고 싶은 태그에 {{htmlattrxref("id")}} 속성을 넣어 주어야한다. 일반적으로는 특정 헤드라인에 연결하는 것이 타당하다.

예제:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

만약 특정 ID에 연결하려면 URL 끝에 해시/파운드 기호를 포함하면 된다,

예제:

```html
<p>Want to write us a letter? Use our <a href="contacts.html#Mailing_address">mailing address</a>.</p>
```

Document fragments(문서 조각)를 단독으로 사용하여 동일한 문서의 다른 부분에 연결할 수 있다

```html
<p>The <a href="#Mailing_address">company mailing address</a> can be found at the bottom of this page.</p>
```

### 절대 URL과 상대 URL

웹에서는 절대 URL과 상대 URL 두 가지의 용어를 찾아볼 수 있습니다.

**절대 URL**: {{glossary("protocol")}}과 {{glossary("domain name")}}을 포함한, 웹에서 정의된 절대적인 위치를 가리킵니다. 예를 들어, 만약 `index.html` 페이지가 `projects` 폴더에 업로드 되면 이는 웹 서버의 root 안에 위치하게 되고
웹 사이트 도메인은 `http://www.example.com`,
그 페이지는 `http://www.example.com/projects/index.html`
(혹은 그저 `http://www.example.com/projects/`, 대부분의 웹 서버는 URL에서 명시되지 않은 경우 페이지를 불러오기 위해 `index.html` 과 같은 랜딩 페이지를 찾습니다.)

절대 URL은 어디에 사용되든 항상 같은 장소를 가리킵니다.

**상대 URL**: 당신이 link하고 있는 파일(과거 섹션의 파일 같은)로부터 상대적인 위치를 가리킵니다. 예를 들어, 우리가 예시 파일 `http://www.example.com/projects/index.html` 에서 같은 디렉토리에 있는 PDF 파일로 link하고 싶다면, URL은 `project-brief.pdf` 과 같이 파일이름이어야 할 것입니다— 추가 정보는 필요 없습니다. 만약 PDF 파일이 `projects` 하위 디렉토리인 `pdfs`에 있다면, 상대 URL은 `pdfs/project-brief.pdf` 일 것입니다. (같은 URL로 `http://www.example.com/projects/pdfs/project-brief.pdf`.)

상대 URL은 파일의 실제 위치가 어디냐에 따라 다른 장소를 가리킬 것입니다. — 예를 들어 우리가 `index.html` 파일을 `projects` 디렉토리에서 웹사이트의 root로 옮긴다면 (최상위, 어느 디렉토리에도 포함되지 않음), `pdfs/project-brief.pdf` 의 상대 URL은 `http://www.example.com/pdfs/project-brief.pdf`를 가리킬 것입니다.
`http://www.example.com/projects/pdfs/project-brief.pdf`를 가리키지 않습니다.

물론, 당신이 `index.html` 파일을 옮겼다고 해서 `project-brief.pdf` 파일과 `pdfs` 폴더의 위치가 갑자기 바뀌지는 않을 것입니다- 이것은 당신의 링크가 잘못된 곳을 가리키게 할 것이므로 클릭을 해도 제대로 작동하지 않을 것입니다. 주의하세요!

## Link 실습하기

링크 작성시 지켜야할 몇가지 모범 사례에 대해 살펴보자

### 링크 명을 명확하게

당신의 페이지에 링크를 올리는 것은 쉽다. 그것으로는 충분하지 않다. 우리는 모든 독자들에게 현재 상황과 그들이 선호하는 도구에 상관없이 접근성 높은 우리의 링크를 만들 필요가 있다.

예를 들면:

- 스크린리더 사용자들은 링크에서 페이지 링크를 넘고, 컨텍스트에서 벗어난 링크를 읽는 것을 좋아한다.
- 검색 엔진은 링크 텍스트를 사용하여 대상 파일을 인덱싱하므로 링크 텍스트에 키워드를 포함시켜 링크되는 내용을 효과적으로 설명하는 것이 좋다.
- 시각적 독자들은 한 마디 한 마디를 읽기보다는 페이지를 훑어보고, 그들의 눈에는 링크처럼 눈에 띄는 페이지 특징이 그려질 것이다. 그들은 링크 텍스트가 유용하다는 것을 알게 될 것이다.

구체적인 예제를 한번 살펴보자:

_link test:_ [Download Firefox](https://firefox.com)

```html
<p><a href="https://firefox.com/">
  Download Firefox
</a></p>
```

_**Bad** link text:_ [Click here](https://firefox.com/) to download Firefox

```html
<p><a href="https://firefox.com/">
  Click here
</a>
to download Firefox</p>
```

Other tips:

- 링크 텍스트의 일부로 URL을 작성하지마세요 — URL은 보기 흉하며, 화면 판독기가 글자로 URL을 읽어낼 때 이상하게 들린다.
- 링크 텍스트에 "link"나 "links to"라고 쓰지마라 — 그것은 단지 소음이다. Screen readers 사용자들은 사용자에게 연관성이 있다고 말한다. 링크에는 일반적으로 다른 색상으로 스타일링 되고 밑줄이 그어져 있기 때문에 시각적으로 브라우저를 보는 사람들도 링크가 있다는 것을 알기 때문이다. (사용자들이 일반적으로 익숙하기 때문에 이 관습은 깨지면 안된다.)
- 링크 라벨은 가능한 짧게 유지하자 — 긴 링크는 특히 전체 내용을 읽어야하는 screen reader 사용자들을 짜증나게 한다.
- 동일한 텍스트의 여러 복사본이 서로 다른 위치에 연결되는 인스턴스 최소화. 이것은 스크린리더 사용자들에게 문제를 일으킬 수 있는데, 그들은 종종 문맥에서 링크 목록을 꺼낸다. "여기를 클릭", "여기를 클릭", "여기를 클릭"이라고 표시된 모든 링크를 여러 개 제시한다. 혼란스러울 것이다.

### 가능하면 상대 링크 사용하기

위의 설명에서, 당신은 절대 링크를 항상 사용하는 것이 좋은 생각이라고 생각할 수 있다; 결국, 그것들은 페이지가 상대적인 링크처럼 움직였을 때 깨지지 않는다. 그러나 동일한 웹 사이트 내의 다른 위치에 연결할 때 가능한 한 상대 링크를 사용해야 한다(다른 웹 사이트에 연결할 때는 절대 링크를 사용해야 한다).

- 우선, 당신의 코드를 스캔하는 것이 훨씬 쉽다. — 상대 링크가 일반적으로 절대 링크보다 훨씬 짧기 때문에 코드를 읽는 것이 훨씬 더 쉽다.
- 둘째, 가능한 한 상대적인 URL을 이용하는 것이 더 효율적이다. 절대 URL을 사용할 때, 브라우저는 {{glossary("DNS")}}로 도메인 이름을 쿼리하여 서버의 실제 위치를 조회하는 것으로 시작하고, 그 서버로 가서 요청되고 있는 파일을 찾는다. 반면에 상대적인 URL을 사용하면, 브라우저는 요청되고 있는 파일을 같은 서버에서 찾아 볼 뿐이다. 따라서 상대 URL이 할 수 있는 절대 URL을 사용하면 브라우저가 계속해서 추가 작업을 수행하도록 만들 수 있으며, 이것은 브라우저의 성능이 저하된다는 것을 의미한다.

### 비 HTML 리소스 연결 시 - 명확한 표식 남기기

PDF나 워드 문서와 같이 다운로드되거나 스트리밍되거나(비디오나 오디오와 같은) 다른 예상하지 못한 효과(팝업 창을 열거나 플래시 동영상을 로드)에 연결할 때는 명확한 표현을 추가하여 혼란을 줄 수 있어야 한다. 그것은 꽤 성가실 수 있다.

예를 들어:

- 대역폭이 낮은 연결에 있는 경우 링크를 클릭하면 멀티 메가바이트 다운로드가 예기치 않게 시작된다.
- 플래시 플레이어를 설치하지 않은 경우 링크를 클릭한 다음 플래시가 필요한 페이지로 이동한다.

여기서 사용할 수 있는 텍스트의 종류를 보려면 몇 가지 예를 살펴보십시오.:

```html
<p><a href="http://www.example.com/large-report.pdf">
  Download the sales report (PDF, 10MB)
</a></p>

<p><a href="http://www.example.com/video-stream/">
  Watch the video (stream opens in separate tab, HD quality)
</a></p>

<p><a href="http://www.example.com/car-game">
  Play the car game (requires Flash)
</a></p>
```

### 다운로드 연결 시 download attribute 사용

브라우저에서 열지 않고 다운로드할 리소스에 연결하는 경우 다운로드 속성을 사용하여 기본 저장 파일 이름을 제공할 수 있다.

Firefox 39의 Windows 버전에 대한 다운로드 링크가 있는 예:

```html
<a href="https://download.mozilla.org/?product=firefox-39.0-SSL&os=win&lang=en-US"
   download="firefox-39-installer.exe">
  Download Firefox 39 for Windows
</a>
```

## 활동적인 학습: 탐색 메뉴 만들기

이 연습에서는 일부 페이지를 탐색 메뉴와 함께 연결하여 다중 페이지 웹 사이트를 생성하십시오. 이것은 웹사이트가 만들어지는 하나의 일반적인 방식이다. — 동일한 탐색 메뉴를 포함한 모든 페이지에 동일한 페이지 구조가 사용되기 때문에 링크를 클릭할 때 같은 장소에 머물고 있다는 인상을 주며, 다른 내용이 제기되고 있다.

다음 4개의 페이지의 로컬 복사본을 서로 동일한 디렉토리에 만들어야 한다 (전체 목록을 보려면 [navigation-menu-start](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-start) 디렉토리를 참조):

- [index.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/social.html)

당신이 해야할 것:

1. 연결할 페이지의 이름이 포함된 순서 없는 목록을 한 페이지의 지정된 위치에 추가하십시오. 네비게이션 메뉴는 보통 링크의 목록일 뿐이므로 의미적으로 OK이다.
2. 각 페이지 이름을 해당 페이지 링크로 변경하십시오.
3. Navigation 메뉴를 각 페이지에 복사하십시오.
4. 각 페이지에서 동일한 페이지에 대한 링크만 제거하십시오. — 페이지에 대한 링크가 포함된다는 것은 혼란스럽고 의미가 없으며, 링크가 부족하면 현재 어떤 페이지에 있는지 시각적으로 잘 알 수 있다.

완성된 예는 다음과 같다:

![An example of a simple HTML navigation menu, with home, pictures, projects, and social menu items](navigation-example.png)

> **참고:** 만약 당신이 막히거나, 당신이 그것을 제대로 가지고 있는지 확신할 수 없다면, 당신은 정확한 답을 보기 위해 [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-marked-up) 디렉토리를 확인할 수 있다.

## 이메일 링크

클릭했을 때 리소스나 페이지에 연결하지 않고 새 발신 전자 메일 메시지를 여는 링크나 단추를 만들 수 있다.

이것은 {{HTMLElement("a")}} 태그안에 `mailto:` URL 스키마를 사용하여 구현할 수 있다.

가장 기본적이고 일반적으로 사용되는 형태의 `mailto:` 링크는 단순히 대상 수신인의 이메일 주소를 표시한다.

예를 들면:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

이렇게 되면 다음과 같은 링크가 생성된다: [Send email to nowhere](mailto:nowhere@mozilla.org).

사실, 이메일 주소는 심지어 선택사항이다. 그것을 생략하면(즉, 당신의 {{htmlattrxref("href", "a")}} 아직 목적지 주소가 지정되지 않은 사용자의 메일 클라이언트에 의해 새로운 발신 이메일 창이 열린다. 이것은 종종 사용자가 선택한 주소로 이메일을 보내기 위해 클릭할 수 있는 "공유" 링크로서 유용하다.

### 세부 사항 지정하기

이메일 주소 외에도 다른 정보를 제공할 수 있다. 실제로 표준 메일 헤더 필드는 사용자가 제공하는 `mailto` URL에 추가할 수 있다. 이것들 중 가장 일반적으로 사용되는 것은 "subject", "cc", and "body"(참된 헤더 필드는 아니지만 새 이메일에 대한 짧은 내용 메시지를 지정할 수 있음)이다. 각 필드와 그 값은 조회 용어로 지정된다.

아래 예제가 cc, bcc, subject and body 를 포함한다.:

```html
<a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&amp;subject=The%20subject%20of%20the%20email &amp;body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> **참고:** 각 필드의 값은 URL로 인코딩되어야 한다(즉, 출력되지 않은 문자 및 [percent-escaped](http://en.wikipedia.org/wiki/Percent-encoding)). 또한 `mailto:` URL의 각 필드를 구분하는 `&` 의 사용에 유의하십시오. 이것은 표준 URL 쿼리 표기법입니다.

여기 다른 몇 가지 `mailto` URL 샘플들이 있다:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## 요약

이제 링크는 여기까지입니다, 어쨌든! 나중에 스타일링을 시작하면 링크로 돌아간다. 다음 HTML에서는 텍스트 의미론(Text Semantics)으로 돌아가서 유용하게 사용할 수 있는 고급/비정상적인 기능을 살펴보도록 하겠다. — 다음 목적지는 고급 텍스트 서식에 대해 알아볼 것이다.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}
