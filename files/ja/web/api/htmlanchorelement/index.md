---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement`** インターフェイスはハイパーリンク要素を表し、そのような要素のレイアウトと表示を操作するための特別なプロパティとメソッド（継承元である通常の {{domxref("HTMLElement")}} オブジェクトインターフェイスにないもの）を提供します。 このインターフェイスは [`<a>`](/ja/docs/Web/HTML/Element/a) 要素に対応しています。 [`<link>`](/ja/docs/Web/HTML/Element/link) は [`HTMLLinkElement`](/ja/docs/Web/API/HTMLLinkElement) で表されるものであり、混同しないでください。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLElement.accessKey")}}
  - : 文字列で、入力フォーカスをこのハイパーリンクに切り替える単一文字を表します。
- {{domxref("HTMLAnchorElement.download")}} {{experimental_inline}}
  - : 文字列で、リンク先リソースをブラウザーに表示するのではなくダウンロードすることを意図していることを示します。値は、提案するファイル名を表します。そのファイル名が基になる OS の有効なファイル名でなかった場合は、ブラウザーが修正します。
- {{domxref("HTMLAnchorElement.hash")}}
  - : 文字列で、参照する URL の先頭のハッシュマーク ('`#`') を含むフラグメント識別子を表します。
- {{domxref("HTMLAnchorElement.host")}}
  - : 文字列で、参照する URL のホスト名とポート番号（既定のポート番号でない場合）を表します。
- {{domxref("HTMLAnchorElement.hostname")}}
  - : 文字列で、参照する URL のホスト名を表します。
- {{domxref("HTMLAnchorElement.href")}}
  - : 文字列で、 HTML の {{htmlattrxref("href", "a")}} 属性を反映し、リンク先リソースの有効な URL を含みます。
- {{domxref("HTMLAnchorElement.hreflang")}}
  - : 文字列で、リンク先リソースの言語を示す HTML の {{htmlattrxref("hreflang", "a")}} 属性を反映します。
- {{domxref("HTMLAnchorElement.origin")}} {{readonlyInline}}
  - : URL のオリジン、つまりスキーム（プロトコル）、ドメイン（ホスト名）、ポートを含む文字列を返します。
- {{domxref("HTMLAnchorElement.password")}}
  - : ドメイン名の前に指定されたパスワードを含む文字列を返します。
- {{domxref("HTMLAnchorElement.pathname")}}
  - : 最初の `'/'` に続き、クエリー文字列やフラグメントを含まない URL のパスを含む文字列です。
- {{domxref("HTMLAnchorElement.port")}}
  - : 文字列で、参照する URL のポート番号部分がある場合は、それを表します。
- {{domxref("HTMLAnchorElement.protocol")}}
  - : 文字列で、参照する URL の末尾のコロン ('`:`') を含むプロトコルの部分を表します。
- {{domxref("HTMLAnchorElement.referrerPolicy")}} {{experimental_inline}}
  - : 文字列で、どのリファラーを使用するかを示す HTML の {{htmlattrxref("referrerpolicy", "a")}} 属性を反映します。
- {{domxref("HTMLAnchorElement.rel")}}
  - : 文字列で、対象オブジェクトからリンク先オブジェクトへの関係を指定する HTML の {{htmlattrxref("rel", "a")}} 属性を反映します。
- {{domxref("HTMLAnchorElement.relList")}} {{readonlyInline}}
  - : {{domxref("DOMTokenList")}} で、 HTML の {{htmlattrxref("rel", "a")}} 属性を反映するトークンのリストを返します。
- {{domxref("HTMLAnchorElement.search")}}
  - : 参照する URL の検索要素（先頭の疑問符 ('`?`') を含む）をがあれば、それを表す文字列です。
- {{domxref("HTMLElement.tabIndex")}}
  - : 現在の文書のタブ移動ナビゲーション順序での要素の位置を含む `long` です。
- {{domxref("HTMLAnchorElement.target")}}
  - : 文字列で、リンク先リソースを表示する場所を示す HTML の {{htmlattrxref("target", "a")}} 属性を反映します。
- {{domxref("HTMLAnchorElement.text")}}
  - : 文字列で、 {{domxref("Node.textContent")}} プロパティの別名です。
- {{domxref("HTMLAnchorElement.type")}}
  - : 文字列で、リンク先リソースの MIME タイプを示す HTML の {{htmlattrxref("type", "a")}} 属性を反映します。
- {{domxref("HTMLAnchorElement.username")}}
  - : ドメイン名の前に指定されたユーザー名を含む文字列です。

### 廃止されたプロパティ

- {{domxref("HTMLAnchorElement.charset")}} {{deprecated_inline}}
  - : 文字列で、リンク先リソースの文字エンコードを表します。
- {{domxref("HTMLAnchorElement.coords")}} {{deprecated_inline}}
  - : 文字列で、カンマ区切りの座標リストを表します。
- {{domxref("HTMLAnchorElement.name")}} {{deprecated_inline}}
  - : 文字列で、アンカー名を表します。
- {{domxref("HTMLAnchorElement.rev")}} {{deprecated_inline}}

  - : 文字列で、リンク先オブジェクトから対象オブジェクトへの関係を指定する HTML の {{htmlattrxref("rev", "a")}} HTML 属性を表します。

    > **メモ:** 現在、W3C HTML 5.2 仕様では、`rev` が廃止されていないことを示していますが、WHATWG の標準では、`rev` が廃止されています。この不一致が解決されるまで、廃止されていると想定する必要があります。

- {{domxref("HTMLAnchorElement.shape")}} {{deprecated_inline}}
  - : 文字列で、アクティブ領域の形状を表します。

## メソッド

_親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

- {{domxref("HTMLElement.blur")}}
  - : 現在の要素からキーボードフォーカスを取り除きます。
- {{domxref("HTMLElement.focus")}}
  - : 現在の要素にキーボードフォーカスを与えます。
- {{domxref("HTMLAnchorElement.toString()")}}
  - : URL 全体を含む文字列を返します。 {{domxref("HTMLAnchorElement.href")}} と同じですが、値の変更に使用することはできません。

`blur()` および `focus()` メソッドは、HTML5 以降の {{domxref("HTMLElement")}} から継承されますが、DOM Level 2 HTML 以前の仕様では `HTMLAnchorElement` で定義されていました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装する HTML 要素: {{HTMLElement("a")}}
