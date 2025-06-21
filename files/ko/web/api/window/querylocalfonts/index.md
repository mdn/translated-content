---
title: "Window: queryLocalFonts() method"
slug: Web/API/Window/queryLocalFonts
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`window.queryLocalFonts()`** 메서드는 로컬에서 사용 가능한 폰트 페이스를 나타내는 {{domxref("FontData")}} 객체의 배열을 충족하는 {{jsxref("Promise")}} 를 반환합니다.

이 메서드를 사용하기 위해서 사용자는 반드시 `local-fonts` ({{domxref("Permissions API", "", "", "nocode")}}를 통한 권한 상태) 접근 권한을 허용해야 합니다. 또한, 이 특성은 사용자의 서버에 설정된 [권한 정책](/ko/docs/Web/HTTP/Permissions_Policy)에 의하여 차단될 수 있습니다.

## 구문

```js-nolint
queryLocalFonts(options)
```

### 매개변수

- `options` {{optional_inline}}
  - : 선택적인 설정 파라미터를 포함합니다. 현재는 하나의 속성이 정의되어 있습니다.
    - `postscriptNames` {{optional_inline}}
      - : 폰트 PostScript 이름의 배열입니다. 이 속성이 설정되어 있으면 PostScript 이름과 매칭되는 폰트들만 결과에 나타나게 됩니다. 그렇지 않으면 모든 폰트가 결과에 속하게 됩니다.

### 반환 값

로컬에서 사용 가능한 폰트 페이스를 나타내는 {{domxref("FontData")}} 객체의 배열을 충족하는 {{jsxref("Promise")}} 를 반환합니다.

### 예외

- `NotAllowedError` {{domxref("DOMException")}}
  - : 사용자가 이 메서드가 처음으로 호출된 후 브라우저의 권한 요청에서 이 특성을 사용할 권한을 거부한 상태입니다.
- `SecurityError` {{domxref("DOMException")}}
  - : 이 기능의 사용이 [권한 정책](/ko/docs/Web/HTTP/Permissions_Policy)에 의해 차단되었거나, 버튼 클릭과 같은 사용자 상호작용을 통해 호출되지 않았거나, 현재 {{glossary("origin")}} 이 모호한 출처이기 때문입니다.

## 예제

실시간 데모를 실행하려면 [Font Select Demo](https://local-font-access.glitch.me/demo/)를 확인하세요.

### 폰트 열거형

아래 스니펫은 사용 가능한 모든 폰트를 조회하고 메타데이터를 기록합니다. 예를 들어 폰트 선택 제어를 채우는 데에 사용할 수 있습니다.

```js
async function logFontData() {
  try {
    const availableFonts = await window.queryLocalFonts();
    for (const fontData of availableFonts) {
      console.log(fontData.postscriptName);
      console.log(fontData.fullName);
      console.log(fontData.family);
      console.log(fontData.style);
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

### 반환된 결과 제어하기

`postscriptNames` 기능을 사용하면 반환된 폰트 데이터를 폰트 페이스의 특정 리스트로 제한할 수 있습니다.

```js
async function returnSpecificFonts() {
  const availableFonts = await window.queryLocalFonts({
    postscriptNames: ["Verdana", "Verdana-Bold", "Verdana-Italic"],
  });

  return availableFonts;
}
```

### 낮은 레벨의 데이터에 접근하기

{{domxref("FontData.blob", "blob()")}} 메서드는 낮은 레벨의 [SFNT](https://en.wikipedia.org/wiki/SFNT) 데이터에 접근할 수 있도록 합니다. SFNT는 PostScript, TrueType, OpenType, Web Open Font Format(WOFF) 과 같은 다른 폰트 형식을 포함할 수 있는 폰트 파일 형식입니다.

```js
async function computeOutlineFormat() {
  try {
    const availableFonts = await window.queryLocalFonts({
      postscriptNames: ["ComicSansMS"],
    });
    for (const fontData of availableFonts) {
      // `blob()`은 유효하고 완전한 SFNT 래핑된 폰트 데이터를 포함하는
      // Blob을 반환합니다.
      const sfnt = await fontData.blob();
      // 필요한 바이트만 잘라냅니다. 처음 4바이트는 SFNT
      // 버전의 정보입니다.
      // 명세: https://learn.microsoft.com/ko/typography/opentype/spec/otff#organization-of-an-opentype-font
      const sfntVersion = await sfnt.slice(0, 4).text();

      let outlineFormat = "UNKNOWN";
      switch (sfntVersion) {
        case "\x00\x01\x00\x00":
        case "true":
        case "typ1":
          outlineFormat = "truetype";
          break;
        case "OTTO":
          outlineFormat = "cff";
          break;
      }
      console.log("Outline format:", outlineFormat);
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}
- [로컬 폰트와 함께 향상된 타이포그래피 사용하기](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
