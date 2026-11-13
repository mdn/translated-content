---
title: "HTMLInputElement: files property"
short-title: files
slug: Web/API/HTMLInputElement/files
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directory Entries API")}}

**`HTMLInputElement.files`** 속성은 [`<input type="file">`](/ko/docs/Web/HTML/Reference/Elements/input/file) 요소로 선택한 {{domxref("FileList")}}에 접근할 수 있습니다.

## 값

선택한 파일이 있는 경우 해당 파일을 나열하는 {{domxref("FileList")}} 객체입니다. **`HTMLInputElement`**가 `type="file"`이 아닌 경우는 `null`입니다.

## 예제

이 예제에서는 **`HTMLInputElement.files`** 속성에 접근하여 사용자가 선택한 각 파일의 이름, 수정된 날짜, 크기 및 타입을 로그에 출력합니다.

### HTML

```html
<input id="files" type="file" multiple />
```

### JavaScript

**`HTMLInputElement.files`**는 파일이 선택되지 않은 경우에도 {{domxref("FileList")}}의 인스턴스를 반환합니다. 따라서 파일 선택 여부를 확인하지 않아도 {{JSxref("Statements/for...of", "for...of")}}를 사용하여 이를 안전하게 반복할 수 있습니다.

```js
const fileInput = document.getElementById("files");

console.log(fileInput.files instanceof FileList); // 비어있어도 참입니다.

for (const file of fileInput.files) {
  console.log(file.name); // 파일 이름 출력
  let fileDate = new Date(file.lastModified);
  console.log(fileDate.toLocaleDateString()); // 로케일에 맞는 날짜 출력
  console.log(
    file.size < 1000 ? file.size : Math.round(file.size / 1000) + "KB",
  );
  console.log(file.type); // MIME 유형 출력
}
```

## 명세서

{{ Specifications }}

## 브라우저 호환성

{{ Compat }}

## 같이 보기

- {{domxref("DataTransfer.files")}}
