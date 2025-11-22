---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

**`FontFace`** は [CSS フォント読み込み API](/ja/docs/Web/API/CSS_Font_Loading_API) のインターフェイスで、単一の使用可能なフォントフェイスを表します。

このインターフェイスは、フォントフェイスのソース（外部リソースへの URL またはバッファー）と、`style` や `weight` などのフォントプロパティを定義します。
URL フォントのソースの場合、リモートフォントが取得され読み込まれたときに発生させたり、読み込み状況を追跡したりすることができます。

## コンストラクター

- {{domxref("FontFace.FontFace", "FontFace()")}}
  - : 新しい `FontFace` オブジェクトを、 URL で記述されている外部リソースまたは {{jsxref("ArrayBuffer")}} から構築して返します。

## インスタンスプロパティ

- {{domxref("FontFace.ascentOverride")}}
  - : フォントのアセンダーの寸法を取得または設定する文字列です。これは {{cssxref("@font-face/ascent-override", "ascent-override")}} 記述子と等価です。
- {{domxref("FontFace.descentOverride")}}
  - : フォントのディセンダーの寸法を取得または設定する文字列です。これは {{cssxref("@font-face/descent-override", "descent-override")}} 記述子と等価です。
- {{domxref("FontFace.display")}}
  - : フォントがダウンロードされ、使用する準備ができているかどうかによって、フォントフェイスがどのように表示されるかを決定する文字列。
- {{domxref("FontFace.family")}}
  - : フォントのファミリを取得または設定する文字列です。これは {{cssxref("@font-face/font-family", "font-family")}} 記述子と等価です。
- {{domxref("FontFace.featureSettings")}}
  - : フォントの variant プロパティでは利用できない、使用する頻度の低いフォント特性を取得または設定する文字列です。 CSS の {{cssxref("font-feature-settings")}} プロパティと等価です。
- {{domxref("FontFace.lineGapOverride")}}
  - : フォントの行ギャップの寸法を取得または設定するには文字列を指定します。これは {{cssxref("@font-face/line-gap-override", "line-gap-override")}} 記述子と等価です。
- {{domxref("FontFace.loaded")}} {{ReadOnlyInline}}
  - : {{jsxref("Promise")}} を返します。これは、オブジェクトのコンストラクターで指定したフォントを読み込みに完了した場合に、現在の `FontFace` オブジェクトで解決したり、 `SyntaxError` {{domxref("DOMException")}} で拒否されたりします。
- {{domxref("FontFace.status")}} {{ReadOnlyInline}}
  - : フォントの状態を示す列挙値 `"unloaded"`、`"loading"`、`"loaded"`、`"error"` のいずれかを返します。
- {{domxref("FontFace.stretch")}}
  - : 文字列で、フォントがどのように伸縮するかを取得または設定します。これは {{cssxref("@font-face/font-stretch", "font-stretch")}} 記述子と同等です。
- {{domxref("FontFace.style")}}
  - : 文字列で、フォントのスタイルを取得または設定します。これは {{cssxref("@font-face/font-style", "font-style")}} 記述子と等価です。
- {{domxref("FontFace.unicodeRange")}}
  - : 文字列で、フォントを包含する Unicode コードポイントの範囲を取得または設定します。これは {{cssxref("@font-face/unicode-range", "unicode-range")}} 記述子と等価です。
- {{domxref("FontFace.variant")}}
  - : 文字列で、フォントのバリアントを取得または設定します。
- {{domxref("FontFace.variationSettings")}} {{Experimental_Inline}}
  - : 文字列で、フォントのバリエーション設定を取得または設定します。これは {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} 記述子と等価です。
- {{domxref("FontFace.weight")}}
  - : 文字列で、フォントの太さが入ります。これは {{cssxref("@font-face/font-weight", "font-weight")}} 記述子と等価です。
- {{domxref("FontFace.load()")}}
  - : 現在のオブジェクトのコンストラクターに渡された要求（場所または元のオブジェクト内のバッファーも含む）に基づいてフォントを読み込み、現在の FontFace オブジェクトに解決する {{jsxref('Promise')}} を返します。

## 例

下記のコードでは、URL "myfont.woff" のデータといくつかのフォント記述子を使用してフォントフェイスを定義しています。
これがどのように動作するのかを示すために、プロパティを使用して `stretch` 記述子を定義しています。

```js
// FontFace を定義
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

次に、 {{domxref("FontFace.load()")}} を使ってフォントを読み込み、返すプロミスを使用して完了を追跡したり、エラーを報告したりします。

```js
// フォントを読み込む
font.load().then(
  () => {
    // 解決 - document.fonts にフォントを追加
  },
  (err) => {
    console.error(err);
  },
);
```

実際にフォントを使用するには、 {{domxref("FontFaceSet")}} に追加する必要があります。
これはフォントを読み込む前でも後でもできます。

それ以外の例は、 [CSS フォント読み込み API > 例](/ja/docs/Web/API/CSS_Font_Loading_API#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [@font-face](/ja/docs/Web/CSS/Reference/At-rules/@font-face)
