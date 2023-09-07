---
title: <input type="file">
slug: Web/HTML/Element/input/file
---

{{HTMLSidebar}}

**`file`** 유형의 {{htmlelement("input")}} 요소에는 저장 장치의 파일을 하나 혹은 여러 개 선택할 수 있습니다. 그 후, [양식을 제출](/ko/docs/Learn/HTML/Forms)해 서버로 전송하거나, [File API](/ko/docs/Web/API/File/Using_files_from_web_applications)를 사용한 JavaScript 코드로 조작할 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#값">값</a></strong>
      </td>
      <td>선택한 파일의 경로를 나타내는 {{domxref("DOMString")}}.</td>
    </tr>
    <tr>
      <td><strong>이벤트</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}},
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td>
        <p><strong>지원하는 공통 특성</strong></p>
      </td>
      <td><a href="/ko/docs/Web/HTML/Element/input#required"><code>required</code></a></td>
    </tr>
    <tr>
      <td><strong>추가 특성</strong></td>
      <td>
        <a href="/ko/docs/Web/HTML/Element/input/file#accept"><code>accept</code></a>,
        <a href="/ko/docs/Web/HTML/Element/input/file#capture"><code>capture</code></a>,
        <a href="/ko/docs/Web/HTML/Element/input/file#files"><code>files</code></a>,
        <a href="/ko/docs/Web/HTML/Element/input/file#multiple"><code>multiple</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 특성</strong></td>
      <td><code>files</code>, <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM 인터페이스</strong></td>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>메서드</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
  </tbody>
</table>

## 값

파일 입력 칸의 [`value`](/ko/docs/Web/HTML/Element/input#value) 특성은 선택한 파일의 경로를 나타내는 {{domxref("DOMString")}}을 담습니다. 사용자가 여러 개의 파일을 선택한 경우 `value`는 파일 목록의 첫 번째 파일을 가리키며, 나머지 파일은 요소의 {{domxref("HTMLInputElement.files")}} 속성으로 가져올 수 있습니다.

> **참고:**1. 아직 아무런 파일도 선택하지 않은 경우 빈 문자열(`""`)을 사용합니다. 2. 악의적인 소프트웨어가 사용자의 파일 구조를 알아내는 것을 방지하기 위해, 값 문자열은 항상 [C:\fakepath\를 앞에 포함](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly)합니다.

## 추가 특성

모든 {{htmlelement("input")}} 요소의 공용 특성 외에도, `file` 유형은 아래의 특성도 지원합니다.

| 특성                    | 설명                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| [`accept`](#accept)     | 허용하는 파일 유형을 나타내는 하나 이상의 [고유 파일 유형 지정자](#고유_파일_유형_지정자) |
| [`capture`](#capture)   | 이미지 또는 비디오 데이터를 캡처할 때 사용할 방법                                         |
| [`files`](#files)       | 선택한 파일을 나열하는 {{domxref("FileList")}}                                            |
| [`multiple`](#multiple) | 지정할 경우 사용자가 여러 개의 파일을 선택할 수 있음                                      |

### {{htmlattrdef("accept")}}

[`accept`](/ko/docs/Web/HTML/Attributes/accept) 특성은 파일 입력 칸이 허용할 파일 유형을 나타내는 문자열로, 쉼표로 구분한 [**고유 파일 유형 지정자**](#고유_파일_유형_지정자)의 목록입니다. 주어진 파일 유형의 식별 방법이 여러 가지일 수도 있으므로, 특정 파일 형식이 필요할 땐 유형의 집합을 제공하는 것이 좋습니다.

예를 들어, Microsoft Word 파일을 식별하는 방법은 여러가지이므로, Word 파일을 허용하는 `<input>`은 다음과 같은 형태를 갖게 됩니다.

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### {{htmlattrdef("capture")}}

[`accept`](/ko/docs/Web/HTML/Attributes/accept) 특성이 이미지나 비디오 캡처 데이터를 요구할 경우, [`capture`](/ko/docs/Web/HTML/Attributes/capture) 특성으로는 어떤 카메라를 사용할지 지정할 수 있습니다. `user` 값은 전면 카메라(사용자를 향한 카메라)와 마이크를, `environment` 값은 후면 카메라와 마이크를 사용해야 함을 나타냅니다. `capture` 특성을 누락한 경우 {{Glossary("user agent", "사용자 에이전트")}}가 어떤 쪽을 선택할지 스스로 결정합니다. 요청한 방향의 카메라를 사용할 수 없는 경우 사용자 에이전트는 자신이 선호하는 기본 모드로 대체할 수 있습니다.

> **참고:** `capture`는 과거 불리언 특성이었으며, 존재할 경우 파일 선택 창을 요청하는 대신 장치의 카메라나 마이크 등 미디어 캡처 장치를 요청했었습니다.

### {{htmlattrdef("files")}}

선택한 모든 파일을 나열하는 {{domxref("FileList")}} 객체입니다. [`multiple`](/ko/docs/Web/HTML/Element/input/file#multiple) 특성을 지정하지 않았다면 두 개 이상의 파일을 포함하지 않습니다.

### {{htmlattrdef("multiple")}}

[`multiple`](/ko/docs/Web/HTML/Attributes/multiple) 불리언 특성을 지정한 경우 사용자가 파일 선택 창에서 복수의 파일을 선택할 수 있습니다.

## 비표준 특성

위의 표준 특성 외에도, 다음과 같이 일부 브라우저에서만 사용할 수 있는 비표준 특성도 존재합니다. 지원하지 않는 브라우저에서의 코드 동작에 제약이 생길 수 있으므로, 가능하면 사용을 피해야 합니다.

| 특성                                  | 설명                                                                                                                 |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [`webkitdirectory`](#webkitdirectory) | 사용자가 디렉토리를 선택할 수 있는지 나타내는 불리언 특성. [`multiple`](#multiple) 특성을 지정한 경우 복수 선택 가능 |

### {{htmlattrdef("webkitdirectory")}} {{non-standard_inline}}

`webkitdirectory` 불리언 특성이 존재할 경우 사용자의 파일 선택 창에서 디렉토리만 선택 가능해야 함을 나타냅니다. {{domxref("HTMLInputElement.webkitdirectory")}} 문서를 방문해 보다 자세한 정보와 예제를 알아보세요.

> **참고:** `webkitdirectory`는 원래 WebKit 기반 브라우저에서만 구현했었으나, Microsoft Edge와 Firefox(50 이상)도 지원합니다. 그러나, 비록 상대적으로 널리 지원하고는 있으나, 여전히 비표준 특성이므로 대안이 없는 경우에만 사용해야 합니다.

## 고유 파일 유형 지정자

**고유 파일 유형 지정자**는 `file` 유형의 {{htmlelement("input")}}에서 선택할 수 있는 파일의 종류를 설명하는 문자열입니다. 각각의 유형 지정자는 다음 형태 중 하나를 취할 수 있습니다.

- 마침표로 시작하는 유효한 파일 이름 확장자. 대소문자를 구분하지 않습니다. 예시: `.jpg`, `.pdf`, `.doc`.
- 확장자를 포함하지 않은 유효한 MIME 유형 문자열.
- `audio/*`는 "모든 오디오 파일"을 의미합니다.
- `video/*`는 "모든 비디오 파일"을 의미합니다.
- `image/*`는 "모든 이미지 파일"을 의미합니다.

`accept` 특성이 고유 파일 유형 지정자를 값으로 받습니다. 쉼표로 구분하면 여러 개의 지정자도 사용할 수 있습니다. 예를 들어, 표준 이미지 형식 뿐만 아니라 PDF 파일도 받을 수 있어야 하는 입력 칸은 다음 코드처럼 작성할 수 있습니다.

```html
<input type="file" accept="image/*,.pdf" />
```

## 파일 입력 칸 사용하기

### 기본 예제

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Choose file to upload</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

결과는 다음과 같습니다.

{{EmbedLiveSample('기본_예제', 650, 60)}}

> **참고:** 이 예제는 GitHub에서도 볼 수 있습니다. [소스 코드](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/simple-file.html)와 [라이브 예제](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html)를 확인하세요.

사용자의 장치와 운영체제에 상관없이, 파일 입력 칸은 사용자가 파일을 선택할 수 있도록 파일 선택 대화창을 여는 하나의 버튼을 제공합니다.

예제 코드와 같이 [`multiple`](/ko/docs/Web/HTML/Element/input/file#multiple) 특성을 지정한 경우 파일 여러 개를 한 번에 선택할 수 있습니다. 사용자는 플랫폼이 허용하는 방법(<kbd>Shift</kbd>, <kbd>Ctrl</kbd> 누르기 등)을 통해 파일 선택 창에서 두 개 이상의 파일을 선택합니다. `<input>` 하나에 파일 하나씩만 선택을 허용하고 싶은 경우 `multiple` 특성을 제거하세요.

### 선택한 파일의 정보 가져오기

요소의 {{domxref("HTMLInputElement.files")}} 속성은 선택한 파일({{domxref("File")}}) 목록을 {{domxref("FileList")}} 객체로 반환합니다. `FileList`는 배열처럼 행동하므로, `length` 속성을 사용해 현재 선택한 파일의 수를 알 수 있습니다.

각각의 `File` 객체는 다음과 같은 정보를 가지고 있습니다.

- `name`
  - : 파일 이름.
- `lastModified`
  - : 파일을 마지막으로 수정한 시각을 나타내는 숫자. UNIX 표준시(1970년 1월 1일 자정)으로부터 지난 시간을 밀리초 단위로 나타낸 값입니다.
- `lastModifiedDate` {{deprecated_inline}}
  - : 파일을 마지막으로 수정한 시각을 나타내는 {{jsxref("Date")}} 객체. 더 이상 사용하지 않아야 합니다. `lastModified`를 대신 사용하세요.
- `size`
  - : 파일의 크기를 바이트 단위로 나타낸 값.
- `type`
  - : 파일의 [MIME 유형](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
- `webkitRelativePath` {{non-standard_inline}}
  - : [`webkitdirectory`](/ko/docs/Web/HTML/Element/input/file#webkitdirectory) 특성을 사용한 경우, 기준 디렉토리에 대한 파일의 상대적인 경로. 비표준 특성이므로 사용에 주의가 필요합니다.

<div class="hidden note"><p><strong>Note</strong>: You can set as well as get the value of <code>HTMLInputElement.files</code> in all modern browsers; this was most recently added to Firefox, in version 57 (see [Firefox bug 1384030](https://bugzil.la/1384030)).</p></div>

### 가능한 파일 유형 제한하기

종종, 사용자가 아무 파일이나 선택하지 못하도록 제한하고, 받을 수 있는 파일의 유형을 정해두고 싶을 때가 있습니다. 예를 들어, 프로필 사진을 받는 입력 칸의 경우, {{glossary("JPEG")}}, {{glossary("PNG")}}처럼 웹 호환 가능한 이미지 형식을 선택하도록 해야 할 것입니다.

허용하는 파일 유형은 [`accept`](/ko/docs/Web/HTML/Element/input/file#accept) 특성을 사용해 지정할 수 있으며, 허용할 파일 확장자나 MIME 유형을 쉼표로 구분한 값을 제공해야 합니다. 다음은 몇 가지 예시입니다.

- `accept="image/png"` or `accept=".png"` — PNG 파일을 허용합니다.
- `accept="image/png, image/jpeg"` 또는 `accept=".png, .jpg, .jpeg"` — PNG와 JPEG를 허용합니다.
- `accept="image/*"` — `image/*` MIME 유형을 가진 모든 파일을 허용합니다. 많은 모바일 기기에서는, 이 값을 지정할 경우 사용자가 카메라로 사진을 찍을 수 있도록 설정합니다.
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — MS Word 문서처럼 보이는 파일을 모두 허용합니다.

보다 완전한 예제 코드를 보겠습니다.

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Choose file to upload</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

위 코드는 이전 예제와 비슷하게 보이는 결과를 냅니다.

{{EmbedLiveSample('가능한_파일_유형_제한하기', 650, 60)}}

> **참고:** GitHub에서도 볼 수 있습니다. [소스 코드](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/file-with-accept.html), [라이브 실행 결과](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

외형은 유사해 보일지라도, 이번 예제에서 파일을 선택하려고 한다면 `accept`에 지정한 파일 유형만 선택 가능함을 확인할 수 있습니다. (정확한 동작은 브라우저와 운영체제에 따라 다를 수 있습니다)

![Screenshot of a macOS file picker dialog. Files other than JPEG are grayed-out and unselectable.](file-chooser.png)

`accept` 특성은 선택한 파일 유형을 검증하지는 않으며, 단순히 브라우저가 사용자를 올바른 파일 유형으로 유도하도록 힌트를 제공할 뿐입니다. (대부분의 경우) 사용자가 파일 선택 창의 옵션을 설정해 `accept`를 덮어쓰고 자신이 원하는 아무 파일이나 선택할 수 있으므로, 파일 입력 칸에 잘못된 유형의 파일이 올 수 있습니다.

그러므로, 반드시 적절한 서버 사이드 유효성 검증을 통해 `accept` 특성을 보조해야 합니다.

### 참고

1. 파일 입력 칸의 값을 스크립트에서 설정할 수는 없습니다. 따라서 다음 코드는 아무런 효과도 내지 않습니다.

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. `<input type="file">` 로 선택한 원본 파일의 실제 경로는 명확한 보안상 문제로 인해 알 수 없습니다. 대신 앞에 `C:\fakepath\` 를 붙인 파일 이름을 경로로 보여줍니다. 하필 이런 모습이 된 것에는 역사적인 이유가 있지만 이 동작은 모든 최신 브라우저에서 지원하고 있으며, 사실 [명세에도 포함](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly)되어 있습니다.

## 예제

이번 예제에서는 좀 더 발전된 파일 선책 창을 만들어 보겠습니다. `HTMLInputElement.files` 속성에서 알 수 있는 정보도 활용하면서, 몇 가지 재밌는 활용법도 보여드리겠습니다.

> **참고:** 전체 소스 코드는 GitHub에 있습니다. [file-example.html](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/file-example.html) ([라이브 실행 결과](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). 주 목적이 JavaScript이므로 CSS는 따로 설명하지 않겠습니다.

우선 HTML을 살펴보겠습니다.

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
    <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      accept=".jpg, .jpeg, .png"
      multiple />
  </div>
  <div class="preview">
    <p>No files currently selected for upload</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  width: 580px;
  background: #ccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li,
div > p {
  background: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid black;
}

form img {
  height: 64px;
  order: 1;
}

form p {
  line-height: 32px;
  padding-left: 10px;
}

form label,
form button {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

form label:hover,
form button:hover {
  background-color: #2d5ba3;
  color: white;
}

form label:active,
form button:active {
  background-color: #0d3f8f;
  color: white;
}
```

지금까지 봤던 것과 거의 같으므로 설명할 부분은 없겠습니다.

이제 JavaScript 차례입니다.

우선 양식의 파일 입력 칸과, `.preview` 클래스를 가진 {{htmlelement("div")}} 요소에 대한 참조를 가져옵니다. 그 후, {{htmlelement("input")}} 요소를 숨겨버립니다. 파일 입력 칸은 보통 못생겼고, 스타일을 적용하기도 어려우며 브라우저마다 디자인이 다르기 때문입니다. `<input>`은 연결된 {{htmlelement("label")}}을 클릭해도 활성화할 수 있으므로, 시각적으로 `<input>`을 숨긴 후 레이블에 버튼처럼 스타일을 적용해서, 파일을 업로드하고 싶은 경우 레이블을 누르라는 것을 알려주는 편이 낫습니다.

```js
var input = document.querySelector("input");
var preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **참고:** {{cssxref("visibility", "visibility: hidden")}}, {{cssxref("display", "display: none")}}로 숨길 경우 접근성 보조 기술이 파일 입력 칸을 상호작용 할 수 없는 상태라고 인식하기 때문에 {{cssxref("opacity")}}를 대신 사용합니다.

그 다음으로는 입력 칸에 [이벤트 수신기](/ko/docs/Web/API/EventTarget/addEventListener)를 부착해 그 값이 달라지는지(예제의 경우, 파일을 선택할 때) 지켜봅니다. 이벤트 수신기는 밑에서 만들 `updateImageDisplay()` 함수를 호출하게 됩니다.

```js
input.addEventListener("change", updateImageDisplay);
```

`updateImageDisplay()` 함수를 호출하면 다음 작업을 수행하게 됩니다.

- {{jsxref("Statements/while", "while")}} 반복문을 사용해 `<div>`에 존재하는 이전 파일의 미리보기를 제거합니다.
- 선택한 모든 파일의 정보를 들고 있는 {{domxref("FileList")}} 객체를 가져온 후 `curFiles` 변수에 저장합니다.
- `curFiles.length`가 0과 같은지 검사해 아무런 파일도 선택하지 않았는지 검사합니다. 그렇다면, `<div>`에 아무런 파일도 선택하지 않았다는 메시지를 출력합니다.
- 반면, 파일을 선택한 경우라면, 각각의 파일을 순회하며 각각의 정보를 미리보기 `<div>`에 출력합니다. 참고할 점:
- 뒤에서 작성할 `validFileType()` 함수를 사용해 순회 중인 파일이 올바른 유형, 즉 `accept` 특성에 속한 파일인지 판별합니다.
- 올바른 파일이라면,

  - `<div>` 안의 목록에 해당 파일의 이름과 크기를 항목으로 추가합니다. 이름은 `file.name`과 `file.size`로 가져옵니다. 또 다른 함수인 `returnFileSize()`는 파일 크기를 보기 좋게 바이트/KB/MB로 서식해 출력합니다. (브라우저는 바이트 크기로만 알려줍니다)
  - {{domxref("URL.createObjectURL", "URL.createObjectURL(curFiles[i])")}}를 호출해 이미지 미리보기 썸네일을 생성하고, 새로 만든 {{htmlelement("img")}} 태그의 [`src`](/ko/docs/Web/HTML/Element/img#src)에 지정한 후, 이미지도 목록의 항목에 추가합니다.

- 파일 유형이 유효하지 않은 경우 사용자에게 다른 파일을 선택해야 한다고 알려주는 메시지를 표시합니다.

```js
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(
          file.size,
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
```

`validFileType()` 함수는 매개변수로 {{domxref("File")}} 객체를 받아서, 그 파일의 `type`이 `fileTypes`의 아무 값과 동일한지 판별합니다. {{jsxref("Array.prototype.includes()")}}를 사용하여 type과 일치하는 값이 존재하면 `true`, 아니면 `false`를 반환합니다.

```js
// https://developer.mozilla.org/ko/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
```

`returnFileSize()` 함수는 숫자(현재 파일의 `size` 속성에서 가져온, 파일의 바이트 크기)를 받은 후, 읽기 좋게 바이트/KB/MB 단위로 서식을 적용합니다.

```js
function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + "KB";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + "MB";
  }
}
```

결과는 다음과 같습니다. 한번 직접 파일을 선택해보세요.

{{EmbedLiveSample('예제', '100%', 200)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보 기

- [웹 애플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications) — `<input type="file">`과 File API에 대한 유용한 예제를 더 가지고 있습니다.
- [CSS 속성 호환성](/ko/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
