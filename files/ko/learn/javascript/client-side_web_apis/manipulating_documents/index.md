---
title: JavaScript
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
original_slug: Web/CSS/Getting_Started/JavaScript
---
이 페이지는 입문서의 II 부입니다. II 부는 모질라에서의 CSS의 범위(scope)를 보여주는 예제들을 포함하고 있습니다.

II 부의 각 페이지는 CSS 가 다른 기술(technologies)들과 어떻게 상호작용하는지 설명하고 있습니다. 이 페이지들은 이들 다른 기술들을 사용하는 방법들을 가르치기위해서 디자인 되지는 않았습니다. 이 들 기술들을 자세히 배우려면 다른 입문서를 보세요.

대신 이 페이지들은 CSS의 다양한 사용법을 설명하기 위해서 디자인되었습니다. 이들 페이지들을 사용하려면, CSS에 대해 좀 알고 있어야만 합니다, 그러나, 다른 분야 기술들에대한 어떤 지식을 필요로하지는 않습니다.

### 정보: 자바스크립트(JavaScript)

자바스크립트(JavaScript)는
_프로그래밍 언어_
입니다. 모질라 애플리케이션( 예를 들면, 모질라 브라우저) 사용할 때, 컴퓨터가 실행시키는 코드의 많은 부분이 자바스크립트로 쓰여져 있습니다.

자바스크립트는 스타일 시트와 상호작용하여, 문서 스타일을 동적으로 변화시키는 프로그램을 쓸 수 있게 해줍니다.

이렇게 하는데 세가지 방법이 있습니다:

- 문서의 스타일 시트 리스트와 함께 작동함으로써 — 예: 스타일 시트를 첨가, 제거, 또는 수정함으로써
- 스타일 시트의 규칙(rules)와 함께 작동함으로써 — 예: 규칙을 첨가, 제거, 또는 수정 함으로써
- DOM내의 각 엘리먼트(element)와 함께 작동함으로써 — 예: 문서 스타일을 문서의 스타일 시트와는 독립적으로 수정함으로써

| 모질라에서의 자바스트립트에 대해 더 많은 정보를 원하시면, 이 위키(wiki)에 있는 [JavaScript](ko/JavaScript)페이지를 보세요. |
| -------------------------------------------------------------------------------------------------------------------------- |

### 액션: 자바스크립트 예제(demonstration)

새로은 HTML 문서 `doc5.html`를 만드세요. 아래의 내용물을 복사해서 붙여넣되 스크롤해서 전체를 다 넣을 수 있도록 하세요:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN">
<HTML>

<HEAD>
<TITLE>Mozilla CSS Getting Started - JavaScript demonstration</TITLE>
<LINK rel="stylesheet" type="text/css" href="style5.css">
<SCRIPT type="text/javascript" src="script5.js"></SCRIPT>
</HEAD>

<BODY>
<H1>JavaScript sample</H1>

<DIV id="square"></DIV>

<BUTTON type="button" onclick="doDemo(this);">Click Me</BUTTON>

</BODY>
</HTML>
```

새로운 CSS 파일 `style5.css`을 만드세요. 아래의 내용물을 복사해서 붙여넣으세요:

```css
/*** JavaScript demonstration ***/
#square {
  width: 20em;
  height: 20em;
  border: 2px inset gray;
  margin-bottom: 1em;
  }

button {
  padding: .5em 2em;
  }
```

새로운 텍스트 파일 `script5.js`을 만드세요. 아래의 내용물을 복사해서 붙여넣으세요:

```js
// JavaScript demonstration
function doDemo (button) {
  var square = document.getElementById("square")
  square.style.backgroundColor = "#fa4"
  button.setAttribute("disabled", "true")
  setTimeout(clearDemo, 2000, button)
  }

function clearDemo (button) {
  var square = document.getElementById("square")
  square.style.backgroundColor = "transparent"
  button.removeAttribute("disabled")
  }
```

브라우저에서 문서을 열고 버튼을 누르세요.

이 위키페이지는 자바스크립트를 지원하지 않습니다. 따라서 예제가 어떻게 실행되는 지 보여드릴 수 없습니다. 버튼을 누른 전과 후가 대략 다음과 같이 보입니다:

<table>
  <tbody>
    <tr>
      <td style="padding-right: 2em">
        <table style="border: 2px outset #36b; padding: 0 1em 0.5em 0.5em">
          <tbody>
            <tr>
              <td>
                <p><strong>JavaScript demonstration</strong></p>
                <div
                  style="
                    width: 5em;
                    height: 5em;
                    border: 2px inset gray;
                    background-color: white;
                  "
                >
                  <div
                    style="
                      width: 2em;
                      height: 1em;
                      border: 1px outset black;
                      background-color: #ccc;
                      margin-top: 4px;
                    "
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table style="border: 2px outset #36b; padding: 0 1em 0.5em 0.5em">
          <tbody>
            <tr>
              <td>
                <p><strong>JavaScript demonstration</strong></p>
                <div
                  style="
                    width: 5em;
                    height: 5em;
                    border: 2px inset gray;
                    background-color: #fa4;
                  "
                >
                  <div
                    style="
                      width: 2em;
                      height: 1em;
                      border: 1px inset black;
                      background-color: #ccc;
                      margin-top: 4px;
                    "
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

이 예제에서 주의할 점:

- HTML 문서는 전처럼 스타일 시트에 링크되어 있으며, 스크립트에도 링크되어 있습니다.
- 스크립트는 DOM안의 개개의 엘리먼트(element)와 함께 작동합니다. 스크립트는 사각형(square)의 스타일을 직접 수정합니다. 스크립트는 버튼의 스타일을 속성(attribute)을 변경함으로써 간접적으로 수정합니다.
- 자바스크립트에서 `document.getElementById("square")` 는 그 기능상 CSS 선별자(selector) `#square` 와 유사합니다.
- 자바스크립트에서 `backgroundColor`는 CSS 속성 `background-color`에 상응합니다.
- 브라우저는 버튼이 사용할 수 없게 되었을 때 그 모습을 바꾸어 주는 `button{{ mediawiki.external('disabled=\"true\"') }}`에 대한 내장된 CSS 규칙을 가지고 있습니다.

| 스크립트를 변경해서 사각형(square)이 색이 변할 때 오른쪽으로 20em 점프했다가 이후 되 돌아오게 만드세요. |
| ------------------------------------------------------------------------------------------------------- |

#### 그럼 다음은?

If you had difficulty understanding this page, or if you have other comments about it, please contribute to its Discussion page.

이 예제에서 HTML 문서가 단지 버튼 엘리먼트만이 스크립트를 사용함에도 불구하고 스크립트에 링크를 가지고 있었습니다. 모질라는 CSS를 확장해서 자바스크립트 코드를 (내용물과 다른 스타일 시트들도) 선택된 엘리먼트에 링크할 수 있게 합니다. 다음 페이지에서는 다음을 실행해 봅니다: **[XBL bindings](ko/CSS/Getting_Started/XBL_bindings)**
