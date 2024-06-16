---
title: "HTMLInputElement: multiple property"
short-title: multiple
slug: Web/API/HTMLInputElement/multiple
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLInputElement.multiple`** 속성은 입력이 여러 개의 값을 가질 수 있는지 여부를 나타냅니다. 현재 Firefox는 `<input type="file">`에 대해서만 `multiple`을 지원합니다.

## 값

불리언 값입니다.

## 예제

```js
// fileInput 은 <input type=file multiple> 입니다.
let fileInput = document.getElementById("myfileinput");

if (fileInput.multiple) {
  // fileInput.files를 순회합니다.
  for (const file of fileInput.files) {
    // 하나의 파일에 대한 작업을 수행합니다.
  }
  // 파일이 하나만 있는 경우
} else {
  let [file] = fileInput.files;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [FileList](/ko/docs/Web/API/FileList)
- [Bug 523771](https://bugzil.la/523771) - \<input type=file multiple> 지원
