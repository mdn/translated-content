---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("HTML DOM")}}

**`HTMLImageElement`** インターフェイスは HTML の {{HTMLElement("img")}} 要素を表現し、画像要素を操作するためのプロパティとメソッドを提供します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("HTMLImageElement.Image()", "Image()")}}
  - : `Image()` コンストラクターは、 DOM ツリーに属さない HTML の {{HTMLElement("img")}} 要素を表す新しい `HTMLImageElement` オブジェクトを生成し、返します。オプションで幅と高さの引数を受け取ることができます。引数なしで呼び出された場合、 `new Image()` は {{DOMxRef("Document.createElement()", "document.createElement('img')")}} を呼び出すのと同じになります。

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLImageElement.alt")}}
  - : 文字列で、HTML の [`alt`](/ja/docs/Web/HTML/Reference/Elements/img#alt) 属性を反映します。画像が読み込まれなかった場合に表示される代替フォールバックコンテンツを表します。
- {{domxref("HTMLImageElement.complete")}} {{ReadOnlyInline}}
  - : 論理値で、ブラウザーが画像の取得を完了した場合、成功したかどうかに関わらず `true` を返します。つまり、読み込むべき画像を示す {{domxref("HTMLImageElement.src", "src")}} の値が存在しない場合も、この値は `true` となります。
- {{domxref("HTMLImageElement.crossOrigin")}}
  - : 文字列で、この画像要素の CORS 設定を指定します。詳細は [CORS 設定属性](/ja/docs/Web/HTML/Reference/Attributes/crossorigin)を参照してください。これは CORS が使用されていない場合、 `null` になることがあります。
- {{domxref("HTMLImageElement.currentSrc")}} {{ReadOnlyInline}}
  - : 現在表示されている画像が読み込まれた URL を表す文字列を返します。この文字列は、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)が適用されている場合、状況の変化に応じて画像が調整され、変更される可能性があります。
- {{domxref("HTMLImageElement.decoding")}}
  - : ブラウザーが画像をどのようにデコードすべきかのヒントを表すオプションの文字列です。この値を指定する場合、許可されている値のいずれかでなければなりません。同期的に画像をデコードする場合は `sync`、非同期的に画像をデコードする場合は `async`、優先順位を指定しない場合は `auto` （これが既定値）です。このプロパティの値の意味については、 {{domxref("HTMLImageElement.decoding", "decoding")}} のページを参照してください。
- {{domxref("HTMLImageElement.fetchPriority")}}
  - : オプションの文字列で、他の画像との比較において画像の取得を優先させるためのブラウザーへのヒントを表します。この値を指定する場合、許可されている値のいずれかでなければなりません。高い優先度で取得する場合は `high`、低い優先度で取得する場合は `low`、優先度を設定しない場合は `auto` （これが既定値）です。
- {{domxref("HTMLImageElement.height")}}
  - : HTML の [`height`](/ja/docs/Web/HTML/Reference/Elements/img#height) 属性を反映した整数値です。画像のレンダリング時の高さを CSS ピクセル数で表します。
- {{domxref("HTMLImageElement.isMap")}}
  - : HTML の [`ismap`](/ja/docs/Web/HTML/Reference/Elements/img#ismap) 属性を反映した論理値で、画像がサーバーサイドイメージマップの一部であることを示します。これは、 `<img>` 要素とそれに対応する {{HTMLElement("map")}} を用いて指定され、画像内のクリック可能な領域を示す {{HTMLElement("area")}} 要素を含むクライアントサイドイメージマップと異なるものです。画像は {{HTMLElement("a")}} 要素の中に含まれていなければなりません。詳細は `ismap` のページを参照してください。
- {{domxref("HTMLImageElement.loading")}}
  - : 文書の読み込みを最適化するために使用するブラウザーへのヒントを提供する文字列で、画像をすぐに読み込むか (`eager`) それとも必要に応じて読み込むか (`lazy`) を決定します。
- {{domxref("HTMLImageElement.naturalHeight")}} {{ReadOnlyInline}}
  - : 利用できる場合は、画像の本来の高さを CSS ピクセル数で表した整数値を返します。そうでない場合は `0` を示します。これは、画像が自然な大きさでレンダリングされた場合の高さです。
- {{domxref("HTMLImageElement.naturalWidth")}} {{ReadOnlyInline}}
  - : 利用できる場合は、画像の本来の幅を CSS ピクセル数で表した整数値を返します。そうでない場合は `0` を示します。これは、画像が自然な大きさでレンダリングされた場合の幅です。
- {{domxref("HTMLImageElement.referrerPolicy")}}
  - : HTML の [`referrerpolicy`](/ja/docs/Web/HTML/Reference/Elements/img#referrerpolicy) 属性を反映した文字列です。画像を取得するためにどのリファラーを使用するかを決定する方法を{{Glossary("user agent", "ユーザーエージェント")}}に伝えます。この文字列が取り得る値の詳細については、この記事をお読みください。
- {{domxref("HTMLImageElement.sizes")}}
  - : HTML の [`sizes`](/ja/docs/Web/HTML/Reference/Elements/img#sizes) 属性を反映した文字列です。この文字列は、画像の条件付きサイズのリストをカンマ区切りで指定します。すなわち、与えられたビューポートの大きさに対して、特定の画像サイズが使用されることになります。この文字列の形式の詳細については、 {{domxref("HTMLImageElement.sizes", "sizes")}} ページにあるドキュメントを参照してください。
- {{domxref("HTMLImageElement.src")}}
  - : HTML の [`src`](/ja/docs/Web/HTML/Reference/Elements/img#src) 属性を反映した文字列です。これには、ベース URI を含む画像の完全な URL を指定します。 `src` 属性の URL を変更することで、要素に別の画像を読み込むことができます。
- {{domxref("HTMLImageElement.srcset")}}
  - : HTML の [`srcset`](/ja/docs/Web/HTML/Reference/Elements/img#srcset) 属性を反映した文字列です。これは、画像候補のリストをカンマ (`',', U+002C COMMA`) 区切りで指定します。それぞれの候補画像は、 URL の後にスペースが続き、その後に画像のサイズを示す特別な形式の文字列が続きます。サイズは、幅またはサイズの倍数で指定することができます。サイズの部分文字列の形式については、 {{domxref("HTMLImageElement.srcset", "srcset")}} ページをお読みください。
- {{domxref("HTMLImageElement.useMap")}}
  - : HTML の [`usemap`](/ja/docs/Web/HTML/Reference/Elements/img#usemap) 属性を反映した文字列です。これは、使用するイメージマップを記述した {{HTMLElement("map")}} 要素のページローカルな URL を含みます。ページローカルの URL は、ポンド (ハッシュ) 記号 (`#`) の後に `<map>` 要素の ID を続けたもの、例えば `#my-map-element` のようになります。 `<map>` には、画像内のクリック可能な領域を示す {{HTMLElement("area")}} 要素が順番に入ります。
- {{domxref("HTMLImageElement.width")}}
  - : HTML の [`width`](/ja/docs/Web/HTML/Reference/Elements/img#width) 属性を反映した整数値で、画像のレンダリング幅を CSS ピクセルで表します。
- {{domxref("HTMLImageElement.x")}} {{ReadOnlyInline}}
  - : {{HTMLElement("html")}} 要素を含むブロックの原点に対する、画像の CSS レイアウトボックスの左境界線の水平オフセットを示す整数です。
- {{domxref("HTMLImageElement.y")}} {{ReadOnlyInline}}
  - : {{HTMLElement("html")}} 要素を含むブロックの原点に対する、画像の CSS レイアウトボックスの上境界線の垂直オフセットを示す整数です。

## 廃止されたプロパティ

- {{domxref("HTMLImageElement.align")}} {{deprecated_inline}}
  - : 周囲のコンテキストに対する画像の配置を示す文字列。指定可能な値は `"left"`, `"right"`, `"justify"`, そして `"center"` です。これは時代遅れです。代わりに、 CSS （{{cssxref("text-align")}} など、名前に反して画像で動作するもの）を使って整列を指定する必要があります。
- {{domxref("HTMLImageElement.border")}} {{deprecated_inline}}
  - : 画像を囲む境界の幅を定義する文字列。これは非推奨です。代わりに CSS の {{cssxref("border")}} プロパティを使用してください。
- {{domxref("HTMLImageElement.hspace")}} {{deprecated_inline}}
  - : 画像の左右に空ける空間の量を（ピクセル数で）指定する整数値です。
- {{domxref("HTMLImageElement.longDesc")}} {{deprecated_inline}}
  - : 画像の内容に関する長い説明文が掲載されている URL を指定する文字列です。これは、画像を自動的にハイパーリンクにするために使用されます。現代的なHTMLでは、ハイパーリンクを定義する {{HTMLElement("a")}} 要素の中に `<img>` を代わりに配置します。
- {{domxref("HTMLImageElement.name")}} {{deprecated_inline}}
  - : 要素の名前を表す文字列です。
- {{domxref("HTMLImageElement.vspace")}} {{deprecated_inline}}
  - : 画像の上下に空ける空間をピクセル単位で指定する整数値です。

## インスタンスメソッド

_親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

- {{domxref("HTMLImageElement.decode()")}}
  - : 画像がデコードされ、 DOM に画像を追加しても安全になったときに解決されるプロミス ({{jsxref("Promise")}}) を返します。これにより、デコードされていない画像が DOM に追加された場合のように、画像をデコードするために次のフレームのレンダリングが中断されることを防ぐことができます。

## エラー

画像の読み込みやレンダリング中にエラーが発生し、`onerror` イベントハンドラーが {{domxref("HTMLElement/error_event", "error")}} イベントを処理するために設定されていた場合、そのイベントハンドラーが呼ばれることになります。これは、以下のような様々な状況で起こり得ます。

- [`src`](/ja/docs/Web/HTML/Reference/Elements/img#src) 属性がないか `null` である。
- 指定された `src` の URL が、ユーザーが現在いるページの URL と同じである。
- 指定された画像が何らかの原因で破損しており、読み込むことができない。
- 指定された画像のメタデータが寸法を取得できない状態に破損しており、 `<img>` 要素の属性に寸法が指定されていない。
- 指定された画像が{{Glossary("user agent", "ユーザーエージェント")}}が対応していない形式である。

## 例

```js
const img1 = new Image(); // Image コンストラクター
img1.src = "image1.png";
img1.alt = "alt";
document.body.appendChild(img1);

const img2 = document.createElement("img"); // DOM の HTMLImageElement を使う
img2.src = "image2.jpg";
img2.alt = "alt text";
document.body.appendChild(img2);

// 文書内の最初の画像を使用
alert(document.images[0].src);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("img")}}
