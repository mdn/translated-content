---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
---

{{APIRef("File API")}}

`readAsDataURL` 메서드는 컨텐츠를 특정 {{domxref("Blob")}} 이나 {{domxref("File")}}에서 읽어 오는 역할을 합니다. 읽어오는 read 행위가 종료되는 경우에, {{domxref("FileReader.readyState","readyState")}} 의 상태가 `DONE`이 되며, {{event("loadend")}} 이벤트가 트리거 됩니다. 이와 함께, base64 인코딩 된 스트링 데이터가 {{domxref("FileReader.result","result")}} 속성(attribute)에 담아지게 됩니다.

## 문법

```js
instanceOfFileReader.readAsDataURL(blob);
```

### 파라미터

- `blob`
  - : 읽고자 하는 {{domxref("Blob")}} 또는 {{domxref("File")}}.

## 예제

### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<img src="" height="200" alt="이미지 미리보기..." />
```

### JavaScript

```js
function previewFile() {
  var preview = document.querySelector("img");
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      preview.src = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

### 실행 결과

{{EmbedLiveSample("Example", "100%", 240)}}

## 복수의 파일 읽기 예제

### HTML

```html
<input id="browse" type="file" onchange="previewFiles()" multiple />
<div id="preview"></div>
```

### JavaScript

```js
function previewFiles() {
  var preview = document.querySelector("#preview");
  var files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // `file.name` 형태의 확장자 규칙에 주의하세요
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      var reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          preview.appendChild(image);
        },
        false,
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}
```

> **참고:**
>
> [`FileReader()`](/ko/docs/Web/API/FileReader) 생성자는 Internet Explorer 10 이전 버전에서는 지원하지 않는 기능입니다.
>
> 정상적으로 지원하는 코드를 확인하기 위해서는 다음 링크를 참조하시기 바랍니다. [crossbrowser possible solution for image preview](https://mdn.mozillademos.org/files/3699/crossbrowser_image_preview.html).
> 또는 [this more powerful example](https://mdn.mozillademos.org/files/3698/image_upload_preview.html).

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 바깥 고리

- {{domxref("FileReader")}}
