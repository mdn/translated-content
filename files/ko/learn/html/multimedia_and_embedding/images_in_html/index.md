---
title: HTML의 이미지
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

초창기의 웹에는 텍스트만 있었고 조금 지루했습니다. 다행히도 웹 페이지 안에 이미지 (및 보다 흥미로운 유형의 컨텐츠)를 삽입하는 기능이 추가되기까지는 오래 걸리지 않았습니다. 시작해볼 수 있는 다른 유형의 멀티미디어가 있지만 단순한 이미지를 웹 페이지에 삽입하는 데 사용되는 {{htmlelement ( "img")}} 요소로 쉽게 시작해 보겠습니다. 이 글에서는 기초내용 부터 심층적으로 사용하는 방법, {{htmlelement("figure")}}를 사용하여 캡션을 주석으로 추가하는 방법, {{htmlelement("CSS")}}배경 이미지와 관련된 사용 방법을 자세히 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선행사항:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일작업</a
        >에 대한 기본 지식, HTML 기초 지식 익숙 (<a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML 시작하기</a
        >에서 설명)
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        간단한 이미지를 HTML에 삽입하고, 캡션을 사용하여 주석을 추가하는 방법과
        HTML 이미지가 CSS 배경 이미지와 관련되는 방법을 배우십시오.
      </td>
    </tr>
  </tbody>
</table>

## 웹페이지에 어떻게 이미지를 넣을까?

이미지를 웹사이트에 넣기위해서 {{htmlelement("img")}} 요소를 사용합니다. 이것은 텍스트 내용이나 클로징 태그를 갖지 않는 {{glossary("비어있는 요소 (empty element)")}}이며, 적어도 `src`(풀네임인 source라고 불리곤 합니다)라는 속성 하나는 사용되어야합니다. `src` 속성은 당신이 페이지에 삽입하고자 하는 이미지를 가리키는 경로를 포함합니다. 그 경로는 {{htmlelement("a")}} 요소의 `href` 속성 값처럼 상대경로여도, 절대경로여도 됩니다.

> **참고:** 계속하기 전에 절대경로, 상대경로에 대해 복습하기 위해 [A quick primer on URLs and paths](/en-US/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#A_quick_primer_on_URLs_and_paths)를 읽어보세요.

예를 들어, 당신의 이미지 파일 이름이 `dinosaur.jpg` 이고, 당신의 HTML 페이지와 같은 디렉토리 아래에 위치한다면 이런 식으로 이미지를 삽입할 수 있습니다:

```html
<img src="dinosaur.jpg" />
```

그 이미지가 HTML페이지와 같은 디렉토리 하의 `images` 라는 하위 디렉토리에 있다면 (이러한 방식은 구글이 {{glossary("SEO")}}/색인을 위해 추천합니다), 이런 식으로 삽입할 수 있습니다:

```html
<img src="images/dinosaur.jpg" />
```

> **참고:** **노트:** 검색 엔진은 이미지 파일 이름을 읽고 SEO에 포함시킵니다. 따라서 그 내용을 기술하는 파일 이름을 사용하세요. `img835.png`.보다는 `dinosaur.jpg` 가 낫습니다.

절대경로를 사용해서 이미지를 삽입할 수도 있습니다. 예를 들면:

```html
<img src="https://www.example.com/images/dinosaur.jpg" />
```

그러나 이건 무의미합니다. DNS 서버로부터 IP 주소를 처음부터 다시 찾아보는 등 브라우저가 더 많은 일을 하게 만들기 때문입니다. 당신은 거의 항상 당신의 HTML과 같은 서버에 이미지를 두게 될 것입니다.

> **경고:** : 대부분의 이미지들은 저작권 적용 대상입니다. 따라서,
>
> 1. 당신이 그 이미지에 대한 소유권을 갖고 있거나
> 2. 당신이 그 이미지의 소유자로부터 명확한 서류상의 허가를 받았거나
> 3. 그 이미지가 실제로 공공재라는 충분한 증거가 있는 경우
>
> 가 아니면 당신의 웹페이지에 이미지를 **게시하지 마십시오.**
> 저작권 침해는 불법이며 비윤리적입니다. 또한 당신의 `src` 속성이 링크하도록 허가받지 않은 누군가의 웹사이트에 호스팅 된 이미지를 가리키지 않도록 하십시오. 이러한 행위를 "핫 링킹(hot linking)"이라고 합니다. 누군가의 대역폭을 훔쳐 쓰는 것은 불법입니다. 이것은 당신의 페이지를 느리게 만들고, 그 이미지가 삭제되거나 무언가 부끄러운 걸로 바뀌어도 당신은 그것을 통제할 권한이 없습니다.

위에서 쓴 우리의 코드는 이러한 결과를 보여줄 것입니다:

![A basic image of a dinosaur, embedded in a browser, with "Images in HTML" written above it](basic-image.png)

> **참고:** {{htmlelement("img")}} 와 {{htmlelement("video")}} 와 같은 element들을 대체 element라고 하기도 합니다. 그 이유는 element의 내용과 크기가 element 그 자체가 아니라, 외부적인 요소(이미지나 비디오)에 의해 결정되기 때문입니다.

> **참고:** 완성된 예제들을 [running on Github](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html)에서 확인하실 수 있습니다. ([source code](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/images-in-html/index.html) 도 참고하세요.)

### Alternative text

다음으로 살펴볼 속성은 `alt`이다. 이 값은 이미지가 보여지지 않을 경우를 대비해서 이미지를 설명할 수 있는 글을 값으로 가진다. 예를 들어, 위의 코드를 다음과 같이 바꿀 수 있다:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

`alt` 를 잘 작성하였는지 확인하기 위한 가장 쉬운 방법은 파일 이름을 고의로 틀리게 적는 것이다. 예를 들어 이미지 파일의 이름을 `dinosooooor.jpg` 로 바꾼다면 브라우저는 이미지를 보여주는 대신, alt의 내용을 보여줄 것이다:

![The Images in HTML title, but this time the dinosaur image is not displayed, and alt text is in its place.](alt-text.png)

alt는 왜 굳이 사용되거나 필요한걸까? alt는 여러가지 이유로 유용하게 사용된다:

- 사용자가 시각적인 장애를 가지고 있는 경우 [screen reader](https://en.wikipedia.org/wiki/Screen_reader)가 그 내용을 읽어줄 수 있을 것이다. 사실 alt를 가지고 있다는 것만으로 대부분의 사용자들에게 도움이 될 수 있다.
- 위에서 살펴봤듯이, 파일명을 잘못 적거나 path를 잘못 적었을 수도 있다.
- 아직까지도 텍스트만 지원되는 브라우저(예를 들면 : [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29))를 사용하는 사용자들이 있기 때문에 이미지 지원이 안되는 사용자들도 있다.
- 텍스트를 제공하여 검색엔진이 이를 활용할 수 있도록 할 수 있다. 예를 들어, 검색엔진의 검색 query가 alt 텍스트와 일치할 수 있을 것이다.
- 사용자가 데이터 통신량과 방해요소를 줄이기 위해 고의적으로 이미지를 꺼 놓았을 수도 있다. 이러한 현상은 휴대기기 사용자들에게서 많이 나타나며 대역폭이 비싸거나 제한된 지역에서도 나타난다.

그렇다면 `alt` 안에 정확히 무엇을 써야될까? 그 내용은 이미지가 _왜_ 사용되었는지에 따라 다르다. 다른말로 해서, 이미지가 나타나지 않으면:

- **장식.** You should use [CSS background images](#css_background_images) for decorative images, but if you must use HTML, add a blank `alt=""`. If the image isn't part of the content, a screen reader shouldn't waste time reading it.
- **내용.** If your image provides significant information, provide the same information in a _brief_ `alt` text – or even better, in the main text which everybody can see. Don't write redundant `alt` text. How annoying would it be for a sighted user if all paragraphs were written twice in the main content? If the image is described adequately by the main text body, you can just use `alt=""`.
- **링크.** If you put an image inside {{htmlelement("a")}} tags, to turn an image into a link, you still must provide [accessible link text](/en-US/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#Use_clear_link_wording). In such cases you may, either, write it inside the same `<a>` element, or inside the image's `alt` attribute – whichever works best in your case.
- **텍스트.** 텍스트는 이미지로 나타내면 안된다. 메인 헤딩이 drop shadow가 필요하다면 이미지로 넣는 방법 대신에 [CSS](/ko/docs/Web/CSS/text-shadow)를 사용하도록 하자. 최후의 수단으로 이미지를 사용해야된다면 `alt` 속성에 설명을 적어두길 바란다.

기본적으로, 이미지가 나타나지 않을 때, 사용자에게 충분할 설명을 제공하는 것이 목적이다. 이러한 방법을 통해 사용자가 이미지를 보지 않고도 내용을 충분히 전달 받을 수 있다. 이미지를 브라우저에서 끄고 어떻게 나타나는지 관찰해보자. 이미지가 나타나지 않을 때 alt의 소중함을 깨닫게 될 것이다.

> **참고:** 더 자세한 정보를 얻길 원하다면 [Text Alternatives](/ko/docs/Learn/Accessibility/HTML#Text_alternatives)를 클릭.

### Width and height

`width` 와 `height` 속성을 통해 이미지의 크기를 조정할 수 있다. 이미지의 크기를 알아내는 몇가지 방법이 있는데 Mac은 <kbd>Cmd</kbd> + <kbd>I</kbd> 를 통해 이미지 정보를 볼 수 있다. 예제로 돌아와서, 우리는 이렇게 해볼 수 있다:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

평범한 경우에 위와 같은 방법은 디스플레이에 큰 차이를 주지 않는다. 그러나 만약에 이미지가 로딩중이어서 아직 페이지에 안나타나더라도 브라우저는 지정된 크기의 공간을 이미지를 위해 할당해둔다:

![The Images in HTML title, with dinosaur alt text, displayed inside a large box that results from width and height settings](alt-text-with-width-height.png)

이미지 크기를 지정해두는 것은 좋은 습관이며 이를 통해, 페이지가 더 빠르고 순조롭게 로딩될 수 있다.

그러나 HTML 속성을 통해 이미지의 크기를 조정하는 것은 바람직하지 않다. 이미지 크기를 원본보다 크게 잡으면 원하지 않는 방향으로 나타날 수 있으며 사용자의 필요에 맞지 않는 불필요한 대역폭을 사용할 수도 있다. 또한, [aspect ratio](https://en.wikipedia.org/wiki/Aspect_ratio_%28image%29)를 지키지 않으면 이미지가 왜곡되어 나타날 수도 있다. 이미지 편집기를 통해서 크기를 변경한 후에 웹페이지에 올리는 것이 바람직하다.

> **참고:** 이미지 크기를 변경해야 한다면 [CSS](/ko/docs/Learn/CSS) 를 사용하도록 하자.

### Image titles

As [with links](/en-US/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#Adding_supporting_information_with_%3Ctitle%3E), you can also add `title` attributes to images, to provide further supporting information if needed. In our example, we could do this:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

This gives us a tooltip, just like link titles:

![The dinosaur image, with a tooltip title on top of it that reads A T-Rex on display at the Manchester University Museum ](image-with-title.png)

Image titles aren't essential to include. It is often better to include such supporting information in the main article text, rather than attached to the image. However, they are useful in some circumstances; for example, in an image gallery when you have no space for captions.

### Active learning: embedding an image

It is now your turn to play! This active learning section will have you up and running with a simple embedding exercise. You are provided with a basic {{htmlelement("img")}} tag; we'd like you to embed the image located at the following URL:

```
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Earlier we said to never hotlink to images on other servers, but this is just for learning purposes, so we'll let you off this one time.

We would also like you to:

- Add some alt text, and check that it works by misspelling the image URL.
- Set the image's correct `width` and `height` (hint; it is 200px wide and 171px high), then experiment with other values to see what the effect is.
- Set a `title` on the image.

If you make a mistake, you can always reset it using the _Reset_ button. If you get really stuck, press the _Show solution_ button to see an answer:

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
<img>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var htmlSolution =
  '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171"\n title="A T-Rex on display in the Manchester University Museum">';
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## Annotating images with figures and figure captions

Speaking of captions, there are a number of ways that you could add a caption to go with your image. For example, there would be nothing to stop you doing this:

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <p>A T-Rex on display in the Manchester University Museum.</p>
</div>
```

This is ok. It contains the content you need, and is nicely stylable using CSS. But there is a problem here: there is nothing that semantically links the image to its caption, which can cause problems for screen readers. For example, when you have 50 images and captions, which caption goes with which image?

A better solution, is to use the HTML5 {{htmlelement("figure")}} and {{htmlelement("figcaption")}} elements. These are created for exactly this purpose: to provide a semantic container for figures, and clearly link the figure to the caption. Our above example could be rewritten like this:

```
<figure>
  <img src="images/dinosaur.jpg"
       alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
       width="400"
       height="341">

  <figcaption>A T-Rex on display in the Manchester University Museum.</figcaption>
</figure>
```

The {{htmlelement("figcaption")}} element tells browsers, and assistive technology that the caption describes the other content of the {{htmlelement("figure")}} element.

> **참고:** From an accessibility viewpoint, captions and [`alt`](/ko/docs/Web/HTML/Element/img#alt) text have distinct roles. Captions benefit even people who can see the image, whereas [`alt`](/ko/docs/Web/HTML/Element/img#alt) text provides the same functionality as an absent image. Therefore, captions and `alt` text shouldn't just say the same thing, because they both appear when the image is gone. Try turning images off in your browser and see how it looks.

A figure doesn't have to be an image. It is an independent unit of content that:

- Expresses your meaning in a compact, easy-to-grasp way.
- Could go in several places in the page's linear flow.
- Provides essential information supporting the main text.

A figure could be several images, a code snippet, audio, video, equations, a table, or something else.

### Active learning: creating a figure

In this active learning section, we'd like you to take the finished code from the previous active learning section, and turn it into a figure:

- Wrap it in a {{htmlelement("figure")}} element.
- Copy the text out of the `title` attribute, remove the `title` attribute, and put the text inside a {{htmlelement("figcaption")}} element below the image.

If you make a mistake, you can always reset it using the _Reset_ button. If you get really stuck, press the _Show solution_ button to see an answer:

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea
  id="code"
  class="input"
  style="min-height: 100px; width: 95%"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var htmlSolution =
  '<figure>\n <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171">\n <figcaption>A T-Rex on display in the Manchester University Museum</figcaption>\n</figure>';
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_2', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## CSS background images

You can also use CSS to embed images into webpages (and JavaScript, but that's another story entirely). The CSS {{cssxref("background-image")}} property, and the other `background-*` properties, are used to control background image placement. For example, to place a background image on every paragraph on a page, you could do this:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

The resulting embedded image, is arguably easier to position and control than HTML images. So why bother with HTML images? As hinted to above, CSS background images are for decoration only. If you just want to add something pretty to your page to enhance the visuals, this is fine. Though, such images have no semantic meaning at all. They can't have any text equivalents, are invisible to screen readers, etc. This is HTML images time to shine!

Summing up: if an image has meaning, in terms of your content, you should use an HTML image. If an image is purely decoration, you should use CSS background images.

> **참고:** You'll learn a lot more about [CSS background images](/ko/docs/Learn/CSS/Styling_boxes/Backgrounds) in our [CSS](/ko/docs/Learn/CSS) topic.

That's all for now. We have covered images and captions in detail. In the next article we'll move it up a gear, looking at how to use HTML to embed video and audio in web pages.

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
