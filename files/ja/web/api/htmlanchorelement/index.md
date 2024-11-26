---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement`** インターフェイスはハイパーリンク要素を表し、そのような要素のレイアウトと表示を操作するための特別なプロパティとメソッド（継承元である通常の {{domxref("HTMLElement")}} オブジェクトインターフェイスにないもの）を提供します。 このインターフェイスは [`<a>`](/ja/docs/Web/HTML/Element/a) 要素に対応しています。 [`<link>`](/ja/docs/Web/HTML/Element/link) は [`HTMLLinkElement`](/ja/docs/Web/API/HTMLLinkElement) で表されるものであり、混同しないでください。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLAnchorElement.attributionSrc")}} {{securecontext_inline}} {{experimental_inline}}
  - : {{htmlelement("a")}} 要素の [`attributionsrc`](/ja/docs/Web/HTML/Element/a#attributionsrc) 属性をプログラムで取得および設定し、その属性の値を反映します。`attributionsrc` は、ブラウザーに {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを送信するように指定します。 サーバー側では、これを使用してレスポンスで {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーを送信し、ナビゲーションベースの帰属元を登録します。
- {{domxref("HTMLAnchorElement.download")}}
  - : 文字列で、リンク先リソースをブラウザーに表示するのではなくダウンロードすることを意図していることを示します。値は、提案するファイル名を表します。そのファイル名が基になる OS の有効なファイル名でなかった場合は、ブラウザーが修正します。
- {{domxref("HTMLAnchorElement.hash")}}
  - : 文字列で、参照する URL の先頭のハッシュマーク (`#`) を含むフラグメント識別子を表します。
- {{domxref("HTMLAnchorElement.host")}}
  - : 文字列で、参照する URL のホスト名とポート番号（既定のポート番号でない場合）を表します。
- {{domxref("HTMLAnchorElement.hostname")}}
  - : 文字列で、参照する URL のホスト名を表します。
- {{domxref("HTMLAnchorElement.href")}}
  - : 文字列で、 HTML の [`href`](/ja/docs/Web/HTML/Element/a#href) 属性を反映し、リンク先リソースの有効な URL を含みます。
- {{domxref("HTMLAnchorElement.hreflang")}}
  - : 文字列で、リンク先リソースの言語を示す HTML の [`hreflang`](/ja/docs/Web/HTML/Element/a#hreflang) 属性を反映します。
- {{domxref("HTMLAnchorElement.origin")}} {{readonlyInline}}
  - : URL のオリジン、つまりスキーム（プロトコル）、ドメイン（ホスト名）、ポートを含む文字列を返します。
- {{domxref("HTMLAnchorElement.password")}}
  - : ドメイン名の前に指定されたパスワードを含む文字列を返します。
- {{domxref("HTMLAnchorElement.pathname")}}
  - : 最初の `/` に続き、クエリー文字列やフラグメントを含まない URL のパスを含む文字列です。
- {{domxref("HTMLAnchorElement.ping")}}
  - : 空白区切りの URL のリスト。リンクが続いた場合、ブラウザーは本体 PING を伴う {{HTTPMethod("POST")}} リクエストを URL に送信します。
- {{domxref("HTMLAnchorElement.port")}}
  - : 文字列で、参照する URL のポート番号部分がある場合は、それを表します。
- {{domxref("HTMLAnchorElement.protocol")}}
  - : 文字列で、参照する URL の末尾のコロン (`:`) を含むプロトコルの部分を表します。
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
  - : 文字列で、どのリファラーを使用するかを示す HTML の [`referrerpolicy`](/ja/docs/Web/HTML/Element/a#referrerpolicy) 属性を反映します。
- {{domxref("HTMLAnchorElement.rel")}}
  - : 文字列で、対象オブジェクトからリンク先オブジェクトへの関係を指定する HTML の [`rel`](/ja/docs/Web/HTML/Element/a#rel) 属性を反映します。
- {{domxref("HTMLAnchorElement.relList")}} {{readonlyInline}}
  - : {{domxref("DOMTokenList")}} で、 HTML の [`rel`](/ja/docs/Web/HTML/Element/a#rel) 属性を反映するトークンのリストを返します。
- {{domxref("HTMLAnchorElement.search")}}
  - : 参照する URL の検索要素（先頭の疑問符 (`?`) を含む）をがあれば、それを表す文字列です。
- {{domxref("HTMLAnchorElement.target")}}
  - : 文字列で、リンク先リソースを表示する場所を示す HTML の [`target`](/ja/docs/Web/HTML/Element/a#target) 属性を反映します。
- {{domxref("HTMLAnchorElement.text")}}
  - : 文字列で、 {{domxref("Node.textContent")}} プロパティの別名です。
- {{domxref("HTMLAnchorElement.type")}}
  - : 文字列で、リンク先リソースの MIME タイプを示す HTML の [`type`](/ja/docs/Web/HTML/Element/a#type) 属性を反映します。
- {{domxref("HTMLAnchorElement.username")}}
  - : ドメイン名の前に指定されたユーザー名を含む文字列です。

### 廃止されたプロパティ

- `HTMLAnchorElement.charset` {{deprecated_inline}}
  - : 文字列で、リンク先リソースの文字エンコードを表します。
- `HTMLAnchorElement.coords` {{deprecated_inline}}
  - : 文字列で、カンマ区切りの座標リストを表します。
- `HTMLAnchorElement.name` {{deprecated_inline}}
  - : 文字列で、アンカー名を表します。
- `HTMLAnchorElement.rev` {{deprecated_inline}}
  - : 文字列で、リンク先オブジェクトから対象オブジェクトへの関係を指定する HTML の [`rev`](/ja/docs/Web/HTML/Element/a#rev) HTML 属性を表します。
- `HTMLAnchorElement.shape` {{deprecated_inline}}
  - : 文字列で、アクティブ領域の形状を表します。

## インスタンスメソッド

_親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

- {{domxref("HTMLAnchorElement.toString()")}}
  - : URL 全体を含む文字列を返します。 {{domxref("HTMLAnchorElement.href")}} と同じですが、値の変更に使用することはできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装する HTML 要素: {{HTMLElement("a")}}
