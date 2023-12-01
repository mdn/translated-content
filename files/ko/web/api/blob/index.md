---
title: Blob
slug: Web/API/Blob
---

{{APIRef("File API")}}

**`Blob`** 객체는 파일류의 불변하는 미가공 데이터를 나타냅니다. 텍스트와 이진 데이터의 형태로 읽을 수 있으며, {{domxref("ReadableStream")}}으로 변환한 후 스트림 메서드를 사용해 데이터를 처리할 수도 있습니다.

`Blob`은 JavaScript 네이티브 형태가 아닌 데이터도 표현할 수 있습니다. {{domxref("File")}}이 `Blob`에 기반한 인터페이스로, 사용자 시스템의 파일을 지원하기 위해 `Blob` 인터페이스를 상속해 기능을 확장한 것입니다.

## 블롭 사용하기

블롭이 아닌 객체와 데이터로 `Blob`을 생성하려면 {{domxref("Blob.Blob", "Blob()")}} 생성자를 사용하세요. 다른 블롭의 일부에서 새로운 블롭을 생성할 땐 {{domxref("Blob.slice", "slice()")}} 메서드를 사용할 수 있습니다. 사용자의 파일 시스템 내 파일을 `Blob`으로 얻는 방법은 {{domxref("File")}} 문서를 참고하세요.

`Blob` 객체를 받을 수 있는 API의 목록도 {{domxref("File")}} 문서에 있습니다.

## 생성자

- {{domxref("Blob.Blob", "Blob()")}}
  - : 매개변수로 제공한 배열의 모든 데이터를 합친 데이터를 담은 새로운 `Blob` 객체를 반환합니다.

## 속성

- {{domxref("Blob.prototype.size")}} {{readonlyinline}}
  - : `Blob` 객체가 담은 데이터의 바이트 단위의 사이즈입니다.
- {{domxref("Blob.prototype.type")}} {{readonlyinline}}
  - : `Blob` 객체가 담은 데이터의 MIME 유형을 나타내는 문자열입니다. 유형을 알 수 없는 경우 빈 문자열을 반환합니다.

## 인스턴스 메서드

- {{DOMxRef("Blob.prototype.arrayBuffer()")}}
  - : `Blob`의 전체 내용을 이진 데이터로 담은 {{domxref("ArrayBuffer")}}로 이행하는 프로미스를 반환합니다
- {{domxref("Blob.prototype.slice()")}}
  - : 메서드를 호출한 블롭의 바이트를 주어진 시작 바이트와 끝 바이트 범위에서 복제해 새로운 `Blob` 객체를 생성하고 반환합니다.
- {{domxref("Blob.prototype.stream()")}}
  - : `Blob`의 콘텐츠를 읽을 수 있는 {{domxref("ReadableStream")}}을 반환합니다.
- {{domxref("Blob.prototype.text()")}}
  - : `Blob`의 전체 내용을 UTF-8 텍스트로 담은 {{domxref("USVString")}}으로 이행하는 프로미스를 반환합니다.

## 예제

### 블롭 생성하기

{{DOMxRef("Blob.Blob", "Blob()")}} 생성자를 사용해 다른 객체에서 블롭을 생성할 수 있습니다. 예를 들어, 아래 코드는 문자열에서 블롭을 생성합니다.

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

### 형식화 배열의 콘텐츠를 나타내는 URL 생성하기

다음 코드는 JavaScript [형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)을 생성하고, 배열의 데이터를 담은 `Blob` 객체도 만듭니다. 그 후, {{domxref("URL.createObjectURL()")}}을 호출해 블롭을 {{glossary("URL")}}로 변환합니다.

#### HTML

```html
<p>
  이 예제는 스페이스 문자부터 대문자 Z까지의 ASCII 코드를 담은 형식화 배열을
  생성한 후 객체 URL로 변환합니다. 아래에 링크를 추가했으니, 클릭해서 디코딩한
  객체 URL을 확인하세요.
</p>
```

#### JavaScript

아래 코드의 주제는 `typedArrayToURL()` 함수로, 주어진 형식화 배열에서 `Blob`을 생성한 후 블롭의 객체 URL을 반환합니다. 데이터를 객체 URL로 변환한 후에는 (데이터가 이미지 정보라면) {{HTMLElement("img")}} 요소의 [`src`](/ko/docs/Web/HTML/Element/img#src) 특성에 지정하는 등 다양하게 사용할 수 있습니다.

```js
function typedArrayToURL(typedArray, mimeType) {
  return URL.createObjectURL(new Blob([typedArray.buffer], { type: mimeType }));
}

const bytes = new Uint8Array(59);

for (let i = 0; i < 59; i++) {
  bytes[i] = 32 + i;
}

const url = typedArrayToURL(bytes, "text/plain");

const link = document.createElement("a");
link.href = url;
link.innerText = "배열 URL 열기";

document.body.appendChild(link);
```

#### 결과

예제의 링크를 클릭해서 브라우저가 객체 URL을 디코딩한 결과를 확인하세요.

{{EmbedLiveSample("형식화_배열의_콘텐츠를_나타내는_URL_생성하기", 600, 200)}}

### 블롭에서 데이터 추출하기

블롭에서 데이터를 읽는 방법 중 하나는 {{domxref("FileReader")}}를 사용하는 것입니다. 다음 코드는 `Blob`의 콘텐츠를 형식화 배열로 가져옵니다.

```js
const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result에 블롭의 내용이 형식화 배열로 들어있음
});
reader.readAsArrayBuffer(blob);
```

{{domxref("Response")}}를 사용하는 방법도 있습니다. 다음 코드는 `Blob`의 내용을 텍스트로 가져옵니다.

```js
const text = await new Response(blob).text();
```

텍스트로 가져올 땐 {{DOMxRef("Blob.prototype.text()")}}를 사용할 수도 있습니다.

```js
const text = await blob.text();
```

`FileReader`의 다른 메서드를 사용하면 블롭의 데이터를 문자열이나 데이터 URL로도 읽어올 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("BlobBuilder")}}
- {{domxref("FileReader")}}
- {{domxref("File")}}
- {{domxref("URL.createObjectURL")}}
- [웹 애플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)
