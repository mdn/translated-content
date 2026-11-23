---
title: "Window: queryLocalFonts() メソッド"
short-title: queryLocalFonts()
slug: Web/API/Window/queryLocalFonts
l10n:
  sourceCommit: 6855bf0bdd644345f66b88b477fd219a5e7f866e
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`window.queryLocalFonts()`** メソッドは、ローカルで利用できるフォントフェイスを表す {{domxref("FontData")}} オブジェクトの配列で履行される {{jsxref("Promise")}} を返します。

このメソッドを使用するには、ユーザーが `local-fonts` へのアクセスを許可する必要があります（権限の状態は{{domxref("Permissions API", "権限 API", "", "nocode")}} を介して照会できます）。加えて、この機能はサーバーで設定された[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)によってブロックされる場合があります。

## 構文

```js-nolint
queryLocalFonts(options)
```

### 引数

- `options` {{optional_inline}}
  - : オプションの設定引数を含むオブジェクトです。現在、定義されているプロパティは 1 つだけです。
    - `postscriptNames` {{optional_inline}}
      - : フォントの PostScript 名の配列です。指定した場合、配列内の PostScript 名に一致するフォントだけが結果に含まれます。指定しない場合は、すべてのフォントが結果に含まれます。

### 返値

ローカルで利用できるフォントフェイスを表す {{domxref("FontData")}} オブジェクトの配列で履行される {{jsxref("Promise")}} です。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : このメソッドが最初に呼び出された後、ブラウザーの権限プロンプトでこの機能の使用が拒否された場合に発生します。
- `SecurityError` {{domxref("DOMException")}}
  - : この機能の使用が[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)によってブロックされた場合、ボタンの押下などのユーザー操作を介して呼び出されなかった場合、または現在の{{glossary("origin", "オリジン")}}が不透明なオリジンである場合に発生します。

## 例

動作するライブデモについては、[ローカルフォントアクセス API のデモ](https://mdn.github.io/dom-examples/local-font-access/)<sup>(英語)</sup>を参照してください。

### フォントの列挙

次のスニペットは、利用できるすべてのフォントを照会し、メタデータを記録します。例えば、フォントピッカーコントロールを設定するために使用できます。

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

### 返される結果の制限

返されるフォントデータを特定のフォントフェイスのリストだけに制限するには、`postscriptNames` オプションを使用します。

```js
async function returnSpecificFonts() {
  const availableFonts = await window.queryLocalFonts({
    postscriptNames: ["Verdana", "Verdana-Bold", "Verdana-Italic"],
  });

  return availableFonts;
}
```

### 低レベルデータへのアクセス

{{domxref("FontData.blob", "blob()")}} メソッドは、低レベルの [SFNT](https://en.wikipedia.org/wiki/SFNT)<sup>(英語)</sup> データへのアクセスを提供します。これは、PostScript、TrueType、OpenType、Web Open Font Format (WOFF) などのフォント形式を含むことができるフォントファイル形式です。

```js
async function computeOutlineFormat() {
  try {
    const availableFonts = await window.queryLocalFonts({
      postscriptNames: ["ComicSansMS"],
    });
    for (const fontData of availableFonts) {
      // blob() は、有効かつ完全な SFNT ラップ済みフォントデータを含む Blob を返す
      const sfnt = await fontData.blob();
      // 必要なバイトだけを切り出す。最初の 4 バイトは SFNT バージョン情報
      // 仕様書: https://learn.microsoft.com/en-us/typography/opentype/spec/otff#organization-of-an-opentype-font
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Local Font Access API", "ローカルフォントアクセス API", "", "nocode")}}
- [ローカルフォントを使用した高度なタイポグラフィ](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)<sup>(英語)</sup>
- {{cssxref("@font-face")}}
