---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: d842f8c32316dbe36cff9fc5e0e777602e32d958
---

{{GlossarySidebar}}

**Base64**는 이진 데이터를 기수-64 표현으로 변환하여 {{glossary("ASCII")}} 문자열 형식으로 나타내는 유사한 [이진 데이터를 텍스트로 인코딩](https://en.wikipedia.org/wiki/Binary-to-text_encoding)방식의 그룹입니다. 'Base64'라는 용어는 특정 [MIME 콘텐츠 전송 인코딩](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding)에서 생겼습니다.

특정 알고리즘을 표현하기 위해 "Base64"라는 용어가 단독으로 사용되는 경우, 일반적으로 [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) 섹션4에 설명된 Base64 버전을 나타냅니다. Base64는 아래 알파벳을 사용하여 64진수를 표현하고 `=`를 패딩 문자로 사용합니다.

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

일반적인 변형은 URL 경로 세그먼트나 쿼리 매개변수에서 문제를 일으킬 수 있는 문자를 피하기 위해 패딩을 생략하고 `+/`를 `-_`로 바꾸는 "Base64 URL 안전"입니다.

Base64 인코딩 체계는 일반적으로 ASCII 텍스트만 처리할 수 있는 미디어(또는 여전히 임의의 이진 데이터를 수용하기에 부족한 일부 ASCII 상위 집합)를 통해 저장하거나 전송하기 위해 이진 데이터를 인코딩하는 데 사용됩니다. 이렇게 하면 전송 중에 데이터가 수정되지 않고 그대로 유지됩니다. Base64의 일반적인 애플리케이션은 다음과 같습니다.

- [MIME](https://en.wikipedia.org/wiki/MIME)를 통한 이메일
- [XML](/ko/docs/Web/XML)에 복잡한 데이터 저장
- [`data:` URL](/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)에 포함될 수 있도록 바이너리 데이터를 인코딩

## 인코딩된 크기 증가

각 Base64 숫자는 6비트의 데이터를 나타냅니다. 따라서, 입력 문자열/이진 파일의 8-비트 바이트 3개(3*8비트 = 24비트)는 6비트 Base64 숫자 4개(4*6 = 24비트)로 표현될 수 있습니다.

이는 문자열이나 파일의 Base64 버전이 일반적으로 원본 대비 3분의1 만큼 더 크다는 것을 의미합니다(정확한 크기 증가는 문자열의 절대 길이, 길이를 3으로 나눈 나머지 값, 패딩 문자 사용 여부 등 다양한 요인에 따라 달라집니다).

## JavaScript 지원

브라우저는 기본적으로 Base64 문자열을 디코딩하고 인코딩하기 위한 두 가지 JavaScript 함수를 제공합니다.

- [`btoa`](/ko/docs/Web/API/btoa): 이진 데이터 문자열에서 Base64로 인코딩된 ASCII 문자열을 생성합니다("btoa"는 "binary to ASCII"로 읽어야 합니다).
- [`atob`](/ko/docs/Web/API/atob): Base64로 인코딩된 문자열을 디코딩합니다("atob"는 "ASCII to binary"로 읽어야 합니다).

> [!NOTE]
> Base64는 텍스트 인코딩이 아닌 바이너리 인코딩이지만, 바이너리 데이터 타입을 지원하기 전에 `btoa` 및 `atob`가 웹 플랫폼에 추가되었습니다. 결과적으로 두 함수는 문자열을 사용하여 이진 데이터를 나타내며, 각 문자의 코드 포인트는 각 바이트 값을 나타냅니다. 이로 인해, `btoa`를 사용하여 임의의 텍스트 데이터를 인코딩할 수 있다는 일반적인 오해가 생겼습니다. 예를 들어, 텍스트 또는 HTML 문서의 Base64 `data:` URL을 생성하는 것입니다.
>
> 그러나, 바이트 코드 포인트 대응은 `0x7f` 까지의 코드 포인트에 대해서만 안정적으로 유지됩니다. 또한, `0xff` 이상의 코드 포인트는 1바이트의 최대 값을 초과하여 `btoa`에서 오류를 발생시킵니다. 다음 섹션에서는 임의의 유니코드 텍스트를 인코딩할 대 이 제한 사항을 해결하는 방법을 자세히 설명합니다.

## "유니코드 문제"

`btoa`는 입력 문자열의 코드 포인트를 바이트 값으로 해석하므로 문자열에서 `btoa`를 호출하면 문자의 코드 포인트가 `0xff`를 초과하는 경우 "문자 범위를 벗어났습니다" 예외가 발생합니다. 임의의 유니코드 텍스트를 인코딩해야 하는 사용 사례의 경우, 먼저 문자열을 UTF-8의 구성 바이트로 변환한 다음 바이트를 인코딩해야 합니다.

가장 간단한 해결책은 `TextEncoder` 및 `TextDecoder`를 사용하여 문자열의 UTF-8과 단일 바이트 표현 간에 변환하는 것입니다.

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join("");
  return btoa(binString);
}

// Usage
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

## 임의의 이진 데이터 변환

이전 섹션의 `bytesToBase64` 및 `base64ToBytes` 함수를 사용하여 Base64 문자열과 [`Uint8Array`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) 간을 변환할 수 있습니다.

또는, 기본적으로 [`FileReader`](/ko/docs/Web/API/FileReader) 및 [`fetch`](/ko/docs/Web/API/Fetch_API) API를 통해 웹 플랫폼 내에서 base64 데이터 URL 간 비동기 변환이 가능합니다.

```js
async function bytesToBase64DataUrl(bytes, type = "application/octet-stream") {
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => resolve(reader.result),
      onerror: () => reject(reader.error),
    });
    reader.readAsDataURL(new File([bytes], "", { type }));
  });
}

async function dataUrlToBytes(dataUrl) {
  const res = await fetch(dataUrl);
  return new Uint8Array(await res.arrayBuffer());
}

// 사용법
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```
