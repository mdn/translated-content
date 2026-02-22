---
title: SVGAElement
slug: Web/API/SVGAElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("SVG")}}

**`SVGAElement`** インターフェイスは、{{SVGElement("a")}} 要素のプロパティにアクセスし、それらを操作するためのメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは親である {{domxref("SVGGraphicsElement")}} から継承したプロパティもあります。_

- {{domxref("SVGAElement.download")}}
  - : 文字列で、リンクされたリソースがブラウザーで表示されるのではなく、ダウンロードされることを意図していることを示します。
- {{domxref("SVGAElement.hash")}}
  - : 文字列で、参照先 URL 内のフラグメント識別子を表します。先頭のハッシュ記号 (`#`) が存在する場合は、それも含みます。
- {{domxref("SVGAElement.host")}}
  - : 文字列で、参照された URL 内のホスト名とポート（デフォルトポートでない場合）を表します。
- {{domxref("SVGAElement.hostname")}}
  - : 文字列で、参照された URL 内のホスト名を表します。
- {{domxref("SVGAElement.href")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedString")}} で、{{SVGAttr("href")}} または {{SVGAttr("xlink:href")}} {{deprecated_inline}} 属性を反映します。
- {{domxref("SVGAElement.hreflang")}}
  - : 文字列で、リンクされたリソースの言語を示します。
- {{domxref("SVGAElement.interestForElement")}} {{experimental_inline}} {{non-standard_inline}}
  - : 関連付けられた {{svgelement("a")}} 要素が関心インボーカーとして指定されている場合、[関心インボーカー](/ja/docs/Web/API/Popover_API/Using_interest_invokers#関心インボーカーの作成)の対象要素を取得または設定します。
- {{domxref("SVGAElement.origin")}} {{ReadOnlyInline}}
  - : URL のオリジン（スキーム、ドメイン、ポート）を含む文字列を返します。
- {{domxref("SVGAElement.pathname")}}
  - : 文字列で、最初の `/` に続いて URL のパスが示されます。クエリー文字列やフラグメントは含まれません。
- {{domxref("SVGAElement.password")}}
  - : ドメイン名の前に指定されたパスワードが含まれている文字列です。
- {{domxref("SVGAElement.ping")}}
  - : `ping` 属性を反映する文字列です。空白区切りの URL のリストが含まれます。ハイパーリンクがたどられた際、ブラウザーは（バックグラウンドで）、{{HTTPMethod("POST")}} で本体 `PING` のリクエストを送信します。通常はトラッキングに使用されます。
- {{domxref("SVGAElement.port")}}
  - : 文字列で、参照された URL のポート番号成分（存在する場合）を表します。
- {{domxref("SVGAElement.protocol")}}
  - : 文字列で、参照されたURLのプロトコル要素（末尾のコロン (`:`) を含む）を表します。
- {{domxref("SVGAElement.referrerPolicy")}}
  - : 文字列で、どの[リファラー](/ja/docs/Web/HTTP/Reference/Headers/Referer)を [URL](/ja/docs/Glossary/URL) のフェッチ時に送信するかを指定します。
- {{domxref("SVGAElement.rel")}}
  - : 文字列で、SVG の `rel` 属性を反映し、リンク先との関連を指定します。
- {{domxref("SVGAElement.relList")}}
  - : {{domxref("DOMTokenList")}} で、SVG の `rel` 属性を、トークンのリストとして反映します。
- {{domxref("SVGAElement.search")}}
  - : 文字列で、URLのクエリー文字列（存在する場合）を表します。先頭の疑問符 (`?`) を含みます。
- {{domxref("SVGAElement.target")}} {{ReadOnlyInline}}
  - : 指定された要素の {{SVGAttr("target")}} 属性に対応します。
- {{domxref("SVGAElement.text")}} {{deprecated_inline}}
  - : 文字列で、{{domxref("Node.textContent")}} プロパティの別名です。
- {{domxref("SVGAElement.type")}}
  - : 文字列で、`type` 属性を反映し、リンクされたリソースの MIME タイプを示します。
- {{domxref("SVGAElement.username")}}
  - : ドメイン名の前に指定されたユーザー名を含む文字列です。

## インスタンスメソッド

_このインターフェイスは親である {{domxref("SVGGraphicsElement")}} から継承したメソッドもあります。_

## 例

次の例では、{{SVGElement("a")}} 要素の {{SVGAttr("target")}} 属性が `_blank` に設定されており、リンクがクリックされると、条件が満たされたかどうかを通知するためにログ出力されます。

```js
const linkRef = document.querySelector("a");
linkRef.target = "_self";

linkRef.onclick = () => {
  if (linkRef.target === "_blank") {
    console.log("BLANK!");
    linkRef.target = "_self";
  } else {
    console.log("SORRY! not _blank");
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGElement("a")}} 要素
