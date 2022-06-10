---
title: FileList
slug: Web/API/FileList
translation_of: Web/API/FileList
---
{{APIRef("File API")}}{{gecko_minversion_header("1.9")}}

이 타입의 객체는 HTML {{HTMLElement("input")}} 엘리먼트의 `files` 속성으로부터 반환됩니다; 이는 `<input type="file">` 엘리먼트로 선택된 파일의 리스트에 접근하도록 합니다. 또한 드래그 앤 드랍 API를 사용할 때 웹 컨텐트에 드랍된 파일의 리스트에도 사용됩니다; 이 사용에 대한 자세한 내용은 [`DataTransfer`](/en-US/docs/DragDrop/DataTransfer "DragDrop/DataTransfer") 객체를 보십시오.

> **참고:** {{Gecko("1.9.2")}} 이전에는, input 엘리먼트는 한번에 하나의 선택된 파일만 지원되었습니다, 이는 FileList가 하나의 파일만을 포함했음을 의미합니다. {{Gecko("1.9.2")}}를 시작으로, input 엘리먼트의 multiple 속성이 true이면, FileList는 복수의 파일을 포함할 수 있습니다.

<h2 id="Using_the_file_list" name="Using_the_file_list">파일 리스트 사용</h2>

모든 `<input>` 엘리먼트 노드는 이 리스트의 항목에 접근하도록 허용하는 `files` 배열을 가지고 있습니다. 예를 들어, HTML이 다음의 파일 입력을 포함한다면:

```html
<input id="fileItem" type="file">
```

다음 코드 행은 노드의 파일 목록에있는 첫 번째 파일을 File 객체로 가져옵니다.

```js
var file = document.getElementById('fileItem').files[0];
```

<h2 id="Method_overview" name="Method_overview">Method overview</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code>File <a href="#item ()">item</a>(index);</code>
      </td>
    </tr>
  </tbody>
</table>

<h2 id="Attributes" name="Attributes">Properties</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Attribute</td>
      <td class="header">Type</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>length</code></td>
      <td><code>integer</code></td>
      <td>목록에있는 파일의 수를 나타내는 읽기 전용 값.</td>
    </tr>
  </tbody>
</table>

<h2 id="Methods" name="Methods">Methods</h2>

<h3 id="item()" name="item()">item()</h3>

파일리스트의 지정된 인덱스에있는 파일을 나타내는 File 객체를 리턴합니다.

```js
File item(
  index
);
```

<h6 id="Parameters" name="Parameters">Parameters</h6>

- `index`
  - : 리스트로부터 받은 파일의 인덱스로, 0부터 시작합니다.

<h6 id="Return_value" name="Return_value">Return value</h6>

요청된 파일을 나타내는 [`File`](/en-US/docs/DOM/File "DOM/File") 입니다.

<h2 id="Example" name="Example">예시</h2>

이 예시는 `input` 엘리먼트를 사용하여 사용자에 의해 선택된 모든 파일을 순회합니다:

```js
// fileInput is an HTML input element: <input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files is a FileList object (similar to NodeList)
var files = fileInput.files;
var file;

// loop through files
for (var i = 0; i < files.length; i++) {

    // get item
    file = files.item(i);
    //or
    file = files[i];

    alert(file.name);
}
```

완전한 코드는 다음과 같습니다.

```html
<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
<!--multiple is set to allow multiple files to be selected-->

<input id="myfiles" multiple type="file">

</body>

<script>

var pullfiles=function(){
    // love the query selector
    var fileInput = document.querySelector("#myfiles");
    var files = fileInput.files;
    // cache files.length
    var fl = files.length;
    var i = 0;

    while ( i < fl) {
        // localize file var in the loop
        var file = files[i];
        alert(file.name);
        i++;
    }
}

// set the input element onchange to call pullfiles
document.querySelector("#myfiles").onchange=pullfiles;

//a.t
</script>

</html>
```

<h2 id="Specification" name="Specification">명세</h2>

- [File upload state](http://www.whatwg.org/specs/web-apps/current-work/multipage/number-state.html#concept-input-type-file-selected) (HTML5 working draft)

<h2 id="See_also" name="See_also">See also</h2>

- [Using files from web applications](/en-US/docs/Using_files_from_web_applications "Using files from web applications")
- [`File`](/en-US/docs/DOM/File "DOM/File")
- [`FileReader`](/en-US/docs/DOM/FileReader "DOM/FileReader")
