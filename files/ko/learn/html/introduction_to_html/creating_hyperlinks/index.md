---
title: 하이퍼링크 만들기
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

웹을 웹답게 만든다는 점에서 하이퍼 링크는 중요합니다. 이 글에서는 링크를 만드는데 필요한 구문을 보여주고 링크의 모범 사례를 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 지식</th>
      <td>
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML 시작하기</a
        >에서 설명하는 기본적인 HTML 숙련도.
        <a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML text fundamentals</a
        >에서 설명하는 HTML 텍스트 포맷팅에 대한 지식.
      </td>
    </tr>
    <tr>
      <th scope="row">목표</th>
      <td>
        <p>
          하이퍼링크를 효과적으로 다루는 방법과 수많은 파일들을 함께 연결하는 방법을 배웁니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 하이퍼링크란

하이퍼링크는 웹이 제공하는 가장 흥미로운 혁신 중 하나입니다. 하이퍼링크는 처음부터 웹의 기능이었으며 웹을 웹으로 만드는 요소입니다. 하이퍼링크를 사용하면 문서를 다른 문서나 리소스에 연결하거나, 문서의 특정 부분에 연결하거나, 웹 주소에서 앱을 사용할 수 있습니다. 클릭하거나 다른 방법으로 활성화된 웹 브라우저가 다른 웹 주소({{glossary("URL")}})로 이동하도록 거의 모든 웹 콘텐츠를 링크로 변환할 수 있습니다.

> **참고:** URL은 HTML 파일, 텍스트 파일, 이미지, 텍스트 문서들, 비디오와 오디오 파일들, 그리고 웹상에서 존재할 수 있는 어느 것이든 연결할 수 있습니다. 웹 브라우저가 파일을 표시하거나 처리하는 방법을 모르는 경우 파일을 열 것인지(이 경우 파일을 열거나 처리해야 할 의무가 장치의 적절한 기본 앱에 전달됨) 또는 파일을 다운로드할 것인지(이 경우 나중에 처리를 시도할 수 있음) 묻는 메시지가 표시됩니다.

예를 들어, BBC 홈페이지에는 여러 뉴스 기사뿐만 아니라 사이트의 다양한 영역(내비게이션 기능), 로그인/등록 페이지(사용자 도구) 등을 가리키는 많은 링크가 포함되어 있습니다.

![많은 뉴스 항목과 탐색 메뉴 기능을 보여주는 bbc.co.uk의 첫 페이지](updated-bbc-website.png)

## 링크의 구조

기본 링크는 텍스트 또는 기타 내용([Block level links](#block_level_links))을 {{htmlelement("a")}} 요소 안에 감싸고 웹 주소를 포함하는 {{htmlattrxref("href", "a")}} 속성(**Hypertext Reference** 또는 **target**)을 사용하여 생성됩니다.

```html
<p>
  나는 <a href="https://www.mozilla.org/en-US/">Mozilla 홈페이지</a>로 향하는
  링크를 만들었습니다.
</p>
```

위 코드의 결과는 다음과 같습니다.

나는 [Mozilla 홈페이지](https://www.mozilla.org/en-US/)로 향하는 링크를 만들었습니다.

### Block level 링크들

이전에 얘기했듯이, 여러분은 어떤 내용이든 link로 바꿀 수 있습니다. [block level 요소들](/en-US/Learn/HTML/Introduction_to_HTML/Getting_started#Block_versus_inline_elements) 이라고 할지라도요. 만약 링크로 바꾸고 싶은 이미지가 있다면, 다음 코드 스니펫과 같이 `{{htmlelement("a")}}` 요소로 이미지를 감싸면 됩니다.

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

이렇게 하면 헤더를 링크로 바꿀 수 있습니다.
{{EmbedLiveSample('Block level links', '100%', 150)}}

### 이미지 링크들

링크로 만들 이미지가 있는 경우 {{htmlelement("a")}} 요소를 사용하여 {{htmlelement("img")}} 요소와 함께 참조되는 이미지 파일을 감쌉니다.

```css hidden
img {
  height: 100px;
  width: 150px;
  border: 1px solid gray;
}
```

```html
<a href="https://developer.mozilla.org/en-US/">
  <img src="mdn_logo.svg" alt="MDN Web Docs homepage" />
</a>
```

그러면 MDN logo가 링크로 연결됩니다.
{{EmbedLiveSample('Image links', '100%', 150)}}

> **참고:** 웹에서 이미지를 사용하는 방법에 대한 자세한 내용은 다음 문서에서 확인할 수 있습니다.

### title 속성에 부가적인 정보를 더하기

링크에 추가할 수 있는 또 다른 속성은 `title`입니다. Title은 페이지에 포함된 정보 또는 웹 사이트에서 주의해야 할 사항 등 링크에 대한 추가 정보를 포함하고 있습니다.

```html-nolint
<p>
  I'm creating a link to
  <a
    href="https://www.mozilla.org/en-US/"
    title="The best place to find more information about Mozilla's
          mission and how to contribute">
    the Mozilla homepage</a>.
</p>
```

그러면 다음과 같은 결과가 나오고 링크 위를 마우스를 올리면 제목이 툴팁으로 표시됩니다.

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> **참고:** 링크 제목은 마우스 호버에만 표시되므로 키보드 컨트롤이나 터치스크린을 사용하여 웹 페이지를 탐색하는 사용자는 제목 정보에 액세스하는 데 어려움을 겪습니다. Title의 정보가 페이지의 사용에 있어서 정말로 중요하다면, 해당하는 정보를 일반 텍스트로 넣어줌으로써 모든 사용자가 접근할 수 있는 방식으로 표시해야 합니다.

### 능동학습: 예제 링크를 만들어봅시다

코드 편집기와 [소스코드: 템플릿 시작하기](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)를 사용하여 HTML 문서를 만듭니다.

- HTML body 안에 이미 알고 있는 하나 이상의 단락 또는 다른 유형의 내용을 추가합니다.
- 일부 내용을 링크로 변경합니다.
- title 속성들을 추가해보세요.

## URL과 path에 대한 기본 지침

link target에 대해 완전히 이해하기 위해서, URL과 파일 path에 대하여 이해할 필요가 있습니다. 이 섹션에서는 이 작업을 수행하는 데 필요한 정보를 제공합니다.

URL, 혹은 Uniform Resource Locator은 단순히 무언가가 웹상의 어디에 위치하는지 결정하는 하나의 텍스트 문자열입니다. 예를 들면, Mozilla 영어 홈페이지는 `https://www.mozilla.org/en-US/`이죠.

URL은 파일들을 찾기위해 path를 이용합니다. path는 당신이 관심있어 하는 파일이 파일 시스템 어디에 있는지 구체적으로 명시하구요. 디렉토리 구조에 대한 예제를 보시죠. ([하이퍼링크 만들기](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/creating-hyperlinks)를 보세요.)

![A simple directory structure. The parent directory is called creating-hyperlinks and contains two files called index.html and contacts.html, and two directories called projects and pdfs, which contain an index.html and a project-brief.pdf file, respectively](simple-directory.png)

이 디렉토리 구조의 **root**를 `creating-hyperlinks`라고 부릅니다. 웹사이트를 로컬 단에서 다룰 때에는 전체 웹사이트가 모두 들어갈 수 있는 하나의 디렉토리를 가져야 할 것입니다. Root 안에서 우리는 `index.html` 파일과 `contacts.html` 파일을 갖습니다. 실제 웹사이트에서 `index.html` 는 우리의 홈페이지 또는 랜딩 페이지(웹사이트의 접속 포인트 또는 웹사이트의 특정 부분이 되는 페이지)가 될 것입니다.

또 Root 안에는 `pdfs`와 `projects`라는 두 개의 디렉토리가 있습니다. 이들은 각각 PDF(`project-brief.pdf`)와 `index.html` 파일을 내부에 가지고 있습니다. 두 개의 index.html 파일이 서로 다른 파일 시스템 위치에 있는 한, 하나의 프로젝트에 두 개의 index.html 파일을 포함할 수 있습니다. 두번째 `index.html`는 아마 프로젝트와 관련된 정보의 메인 랜딩 페이지가 될 것입니다.

- **같은 디렉토리(폴더):** `contacts.html`을 가리키는 하이퍼링크를 `index.html`(최상위 레벨 `index.html`) 안에 포함하려면 현재 파일과 동일한 디렉토리에 있으므로 연결하려는 파일의 이름만 지정하면 됩니다. 따라서 사용할 URL은 `contacts.html` 입니다.

```html
<p>
  Want to contact a specific staff member? Find details on our
  <a href="contacts.html">contacts page</a>.
</p>
```

- **하위 디렉토리로 하향 이동:** `projects/index.html`을 가리키는 하이퍼링크를 `index.html`(최상위 레벨 `index.html`)에 포함하려면 연결하려는 파일을 표시하기 전에 프로젝트 디렉토리로 내려가야 합니다. 이 작업은 디렉토리 이름, 그 다음 슬래시, 그 다음 파일 이름을 지정하여 수행되므로 사용할 URL은 `projects/index.html` 입니다.

```html
<p>저의 <a href="projects/index.html">프로젝트 홈페이지</a>에 방문해주세요.</p>
```

- **부모 디렉토리로 상향 이동:** `pdfs/project-brief.pdf`를 가리키는 하이퍼링크를 `projects/index.html` 안에 포함하려면 디렉토리 레벨을 올린 다음 다시 pdf 디렉토리로 내려가야 합니다. "상위 디렉터리 이동"은 두 개의 점(`..`)을 사용하여 표시합니다. 따라서 사용할 URL은 `../pdfs/project-brief.pdf` 입니다.

```html
<p>나의 <a href="../pdfs/project-brief.pdf">프로젝트 개요</a> 링크입니다.</p>
```

> **참고:** 필요한 경우 아래와 같이 상향 이동이나 하향 이동 기능을 이용해 여러 인스턴스를 복잡한 URL로 결합할 수 있습니다. `../../../complex/path/to/my/file.html`.

### 문서 조각

문서 상단이 아닌 HTML 문서 내부의 특정 부분(Document fragments(문서 조각)에 연결할 수 있습니다. 그러기 위해 먼저 여러분은 연결하고 싶은 태그에 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 속성을 넣어주어야 합니다. 일반적으로는 아래와 같이 특정 헤드라인에 연결하는 것이 타당합니다.

예제

```html
<h2 id="Mailing_address">Mailing 주소</h2>
```

그런 다음 해당 ID에 연결하려면 아래 예시와 같이 URL 끝에 해시/파운드 기호를 포함하면 됩니다.

```html
<p>
  우리에게 메일을 보내고 싶나요? 그럼
  <a href="contacts.html#Mailing_address">메일 주소</a>를 확인해주세요.
</p>
```

Document fragments(문서 조각)를 참조하여 현재 문서의 다른 부분에 연결할 수도 있습니다.

```html
<p>
  <a href="#Mailing_address">회사 메일 주소</a>는 페이지의 하단에서 찾을 수
  있습니다.
</p>
```

### 절대 URL과 상대 URL

웹에서는 절대 URL과 상대 URL 두 가지의 용어를 찾아볼 수 있습니다.

**절대 URL:** {{glossary("protocol")}}과 {{glossary("domain name")}}을 포함한, 웹에서 정의된 절대적인 위치를 가리킵니다. 예를 들어, 만약 `index.html` 페이지가 `projects` 폴더에 업로드 되면 이는 웹 서버의 root 안에 위치하게 되고
웹 사이트의 도메인이 `http://www.example.com`라면, 해당 페이지는 `http://www.example.com/projects/index.html`
(혹은 그저 `http://www.example.com/projects/`가 됩니다. 대부분의 웹 서버는 URL에서 명시되지 않은 경우 페이지를 불러오기 위해 `index.html`과 같은 랜딩 페이지를 찾습니다.)

절대 URL은 어디에 사용되든 항상 같은 장소를 가리킵니다.

**상대 URL:** 연결되어 있는 파일(과거 섹션의 파일 같은)로부터 상대적인 위치를 가리킵니다. 예를 들어, 여러분이 예시 파일 `http://www.example.com/projects/index.html`에서 같은 디렉토리에 있는 PDF 파일로 연결하고 싶다면, URL은 `project-brief.pdf` 과 같이 파일이름이어야 할 것입니다. 추가 정보는 필요 없습니다. 만약 PDF 파일이 `projects`의 하위 디렉토리인 `pdfs`에 있다면, 상대 URL은 `pdfs/project-brief.pdf`일 것입니다. (같은 URL이지만 절대 경로로는 `http://www.example.com/projects/pdfs/project-brief.pdf`로 표현할 수 있습니다.)

상대 URL은 파일의 실제 위치가 어디냐에 따라 다른 장소를 가리킬 것입니다. 예를 들어 여러분이 `index.html` 파일을 `projects` 디렉토리에서 웹사이트의 root로 옮긴다면 (어느 디렉토리에도 포함되지 않는 최상위 디렉토리), `pdfs/project-brief.pdf` 의 상대 URL은 `http://www.example.com/pdfs/project-brief.pdf`를 가리킬 것입니다.
`http://www.example.com/projects/pdfs/project-brief.pdf`를 가리키지 않습니다.

물론, 여러분이 `index.html` 파일을 옮겼다고 해서 `project-brief.pdf` 파일과 `pdfs` 폴더의 위치가 갑자기 바뀌지는 않을 것입니다. 이것은 당신의 링크가 잘못된 곳을 가리키게 할 것이므로 클릭을 해도 제대로 작동하지 않을 것입니다. 주의하세요!

## Link 실습

링크를 작성할 때 따라야 할 몇 가지 좋은 관습이 있습니다. 지금부터 살펴보겠습니다.

### 링크 명을 명확하게

여러분의 페이지에 링크를 올리는 것은 쉽습니다. 하지만 그것만으로는 충분하지 않습니다. 여러분은 모든 독자들에게 현재 상황과 선호하는 도구와 관계없이 링크에 접근할 수 있도록 해야 합니다.

예를 들면

- 스크린 리더 사용자들은 페이지의 링크에서 링크로 이동하거나 문맥을 벗어난 링크를 읽는 것을 좋아합니다.
- 검색 엔진은 링크 텍스트를 사용하여 대상 파일을 인덱싱하므로 링크 텍스트에 키워드를 포함하여 링크되는 내용을 효과적으로 설명하는 것이 좋습니다.
- 시각적 독자들은 모든 단어를 읽는 것보다 페이지를 훑어보고, 링크와 같이 눈에 띄는 페이지 특징에 끌릴 것입니다. 그들은 설명적인 링크 텍스트가 유용하다고 생각할 것입니다.

구체적인 예제를 한번 살펴봅시다.

**좋은** link text: [Download Firefox](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/firefox/">Download Firefox</a></p>
```

**나쁜** link text: [Click here](https://www.mozilla.org/firefox/) to download Firefox

```html example-bad
<p>
  <a href="https://www.mozilla.org/firefox/">Click here</a> to download Firefox
</p>
```

다른 팁들

- URL을 링크 텍스트의 일부로 반복하지 마십시오. URL이 보기 흉하며, 화면을 보는 사람들이 글자로 URL을 볼 때 이상하게 보입니다.
- 링크 텍스트에 "link"나 "links to"라고 쓰지마세요. 잡음이 될 뿐입니다. 화면 판독기는 사용자에게 링크가 있다고 말합니다. 링크는 일반적으로 다른 색상으로 스타일링되고 밑줄이 그어져 있기 때문에 시각적으로 브라우저를 보는 사용자들도 링크가 있다는 것을 알 것입니다. (사용자들이 익숙하기 때문에 일반적으로 이 규칙을 어기면 안 됩니다.)
- 링크 텍스트를 가능한 짧게 유지하십시오. 화면 판독기는 전체 링크 텍스트를 해석해야 하므로 유용합니다.
- 동일한 텍스트의 여러 복사본이 서로 다른 장소에 연결되는 경우를 최소화합니다. "여기 클릭", "여기 클릭", "여기 클릭"이라는 라벨이 붙어 있는 링크 목록이 있는 경우, 화면 판독기 사용자에게 문제가 발생할 수 있습니다.

### 비 HTML 리소스 연결 시 명확한 표식 남기기

다운로드될 리소스(예: PDF 또는 Word 문서), 스트리밍될 리소스(예: 비디오 또는 오디오), 또는 다른 잠재적으로 예기치 않은 효과(팝업 창 열기)에 연결할 경우, 혼동을 줄이기 위해 명확한 문구를 추가해야 합니다.

예를 들면

- 저대역폭 연결 중인 경우 링크를 클릭하면 예기치 않게 여러 메가바이트 다운로드가 시작됩니다.

여기서 사용할 수 있는 텍스트의 종류를 알아보기 위해 몇 가지 예를 살펴보겠습니다.

```html
<p>
  <a href="https://www.example.com/large-report.pdf">
    Download the sales report (PDF, 10MB)
  </a>
</p>

<p>
  <a href="https://www.example.com/video-stream/" target="_blank">
    Watch the video (stream opens in separate tab, HD quality)
  </a>
</p>
```

### 다운로드 연결 시 download 속성 사용

브라우저에서 열지 않고 다운로드할 리소스에 연결하는 경우 `다운로드` 속성을 사용하여 기본 저장 파일 이름을 제공할 수 있습니다. 다음은 최신 Windows 버전의 Firefox 다운로드 링크의 예입니다.

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

## 활동적인 학습: 탐색 메뉴 만들기

이 연습을 위해 일부 페이지를 탐색 메뉴와 함께 연결하여 다중 페이지 웹 사이트를 만들었으면 합니다. 이것은 웹 사이트를 만드는 일반적인 방법 중 하나입니다. 동일한 탐색 메뉴를 포함하여 모든 페이지에서 동일한 페이지 구조가 사용되므로 링크를 클릭하면 사용자가 같은 장소에 있고 다른 내용이 표시됩니다.

다음 네 페이지의 로컬 복사본을 모두 같은 디렉토리에 만들어야 합니다. (전체 목록을 보려면 [navigation-menu-start](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-start) 디렉토리를 참조하세요.)

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

여러분이 해야할 것

1. 연결할 페이지의 이름이 포함된 한 페이지의 표시된 위치에 순서 없는 목록을 추가합니다. 탐색 메뉴는 일반적으로 링크의 목록이므로 의미론적으로 좋습니다.
2. 각 페이지 이름을 해당 페이지에 대한 링크로 변경합니다.
3. 탐색 메뉴를 각 페이지에 복사합니다.
4. 각 페이지에서 동일한 페이지에 대한 링크만 제거합니다. 페이지가 자신에 대한 링크를 포함하는 것은 혼란스럽고 불필요합니다. 또한 링크가 없으면 현재 사용 중인 페이지를 시각적으로 확인할 수 있습니다.

완성된 예는 다음과 같습니다.

![An example of a simple HTML navigation menu, with home, pictures, projects, and social menu items](navigation-example.png)

> **참고:** 문제가 발생하거나 문제가 제대로 해결되었는지 확신할 수 없는 경우 [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-marked-up) 디렉토리를 확인하여 정답을 확인할 수 있습니다.

## 이메일 링크

클릭하면 리소스 또는 페이지에 연결하는 대신 새 발신 전자 메일 메시지를 여는 링크 또는 단추를 만들 수 있습니다. 이것은 {{HTMLElement("a")}} 태그안에 `mailto:` URL 스키마를 사용하여 구현할 수 있습니다.

가장 기본적이고 일반적으로 사용되는 형태의 `mailto:` 링크는 단순히 대상 수신인의 이메일 주소를 표시합니다.

예를 들면

```html
<a href="mailto:nowhere@mozilla.org">아무데나 전자 메일 보내기</a>
```

이렇게 되면 다음과 같은 링크가 생성됩니다. [아무데나 전자 메일 보내기](mailto:nowhere@mozilla.org).

사실, 이메일 주소는 심지어 선택사항입니다. 그것을 생략하면(즉, 당신의 [`href`](/ko/docs/Web/HTML/Element/a#href) 아직 목적지 주소가 지정되지 않은 사용자의 메일 클라이언트에 의해 새로운 발신 이메일 창이 열립니다. 이것은 종종 사용자가 선택한 주소로 이메일을 보내기 위해 클릭할 수 있는 "공유" 링크로서 유용합니다.

### 세부 사항 지정하기

이메일 주소 외에도 다른 정보를 제공할 수 있습니다. 실제로 표준 메일 헤더 필드는 사용자가 제공하는 `mailto` URL에 추가할 수 있습니다. 이 중 가장 일반적으로 사용되는 것은 "subject", "cc" 및 "body"(실제 헤더 필드는 아니지만 새 전자 메일에 대한 짧은 내용 메시지를 지정할 수 있습니다.)입니다. 각 필드와 해당 값은 쿼리 단위로 지정됩니다.

다음은 cc, bcc, subject 및 body를 포함하는 예입니다.

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> **참고:** 각 필드의 값은 인쇄되지 않는 문자(탭, 캐리지 리턴, 페이지 구분과 같은 보이지 않는 문자 [percent-escaped](http://en.wikipedia.org/wiki/Percent-encoding))와 공백을 사용하여 URL로 인코딩해야 합니다.
> 또한 물음표(`?`)를 사용하여 필드 값에서 기본 URL을 구분하고, `mailto:` URL의 각 필드를 구분하는 `&`를 사용합니다.
> 이것은 표준 URL 쿼리 표기법입니다.
> 어떤 URL 쿼리 표기법이 더 일반적으로 사용되는지 이해하기 위해 [The GET method](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data#the_get_method) 문서를 읽어보세요.

여기 다른 몇 가지 `mailto` URL 샘플들이 있습니다.

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## 실력을 시험해 보세요

이 글의 끝에 도달한 여러분은 가장 중요했던 정보들을 기억하고 계신가요? 다음 단계로 넘어가기 전에 이 정보를 알고있는지 확인하기 위한 추가 테스트 해볼 수 있습니다. 자세한 내용은 [Test your skills: Links](/en-US/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Links) 링크를 참조하세요.

## 요약

이제 링크는 여기까지입니다. 어쨌든! 스타일링을 시작하면 나중에 이 과정의 링크로 돌아올 것입니다. 다음 HTML에서는 텍스트 의미론(Text Semantics)으로 돌아가서 유용하게 사용할 수 있는 고급의 다른 기능들을 살펴보도록 하겠습니다. 다음에 알아볼 내용은 [Advanced text formatting](/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)입니다.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}
