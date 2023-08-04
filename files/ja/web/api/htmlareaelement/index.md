---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

**`HTMLAreaElement`** インターフェイスは、（通常のオブジェクトである {{domxref("HTMLElement")}} が継承によって利用できるもの以外に） {{HtmlElement("area")}} 要素のレイアウトと表示を操作するための特別なプロパティとメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLElement.accessKey")}}
  - : 文字列で、入力フォーカスをこのハイパーリンクに切り替える単一文字を表します。
- {{domxref("HTMLAreaElement.alt")}}
  - : 要素の代替テキストを含む HTML の [`alt`](/ja/docs/Web/HTML/Element/area#alt) 属性を反映する文字列です。
- {{domxref("HTMLAreaElement.coords")}}
  - : ホットスポット領域を定義する座標を含む HTML の [`coords`](/ja/docs/Web/HTML/Element/area#coords) 属性を反映する文字列です。
- {{domxref("HTMLAreaElement.download")}} {{experimental_inline}}
  - : 文字列で、リンク先リソースをブラウザーに表示するのではなくダウンロードすることを意図していることを示します。値は、提案するファイル名を表します。そのファイル名が基になる OS の有効なファイル名でなかった場合は、ブラウザーが修正します。
- {{domxref("HTMLAreaElement.hash")}}
  - : 文字列で、参照する URL の先頭のハッシュマーク ('`#`') を含むフラグメント識別子を表します。
- {{domxref("HTMLAreaElement.host")}}
  - : 文字列で、参照する URL のホスト名とポート番号（既定のポート番号でない場合）を表します。
- {{domxref("HTMLAreaElement.hostname")}}
  - : 文字列で、参照する URL のホスト名を表します。
- {{domxref("HTMLAreaElement.href")}}
  - : 文字列で、 HTML の [`href`](/ja/docs/Web/HTML/Element/area#href) 属性を反映し、リンク先リソースの有効な URL を含みます。
- {{domxref("HTMLAreaElement.noHref")}} {{deprecated_inline}}
  - : 論理値のフラグで、領域がアクティブでない (`true`) かアクティブである (`false`) かを示します。
- {{domxref("HTMLAreaElement.origin")}} {{ReadOnlyInline}}
  - : URL のオリジン、つまりスキーム（プロトコル）、ドメイン（ホスト名）、ポートを含む文字列を返します。
- {{domxref("HTMLAreaElement.password")}}
  - : ドメイン名の前に指定されたパスワードを含む文字列を返します。
- {{domxref("HTMLAreaElement.pathname")}}
  - : 最初の `'/'` に続き、クエリー文字列やフラグメントを含まない URL のパスを含む文字列です。
- {{domxref("HTMLAreaElement.port")}}
  - : 文字列で、参照する URL のポート番号部分がある場合は、それを表します。
- {{domxref("HTMLAreaElement.protocol")}}
  - : 文字列で、参照する URL の末尾のコロン ('`:`') を含むプロトコルの部分を表します。
- {{domxref("HTMLAreaElement.referrerPolicy")}} {{experimental_inline}}
  - : 文字列で、どのリファラーを使用するかを示す HTML の [`referrerpolicy`](/ja/docs/Web/HTML/Element/area#referrerpolicy) 属性を反映します。
- {{domxref("HTMLAreaElement.rel")}}
  - : 文字列で、対象オブジェクトからリンク先オブジェクトへの関係を指定する HTML の [`rel`](/ja/docs/Web/HTML/Element/area#rel) 属性を反映します。
- {{domxref("HTMLAreaElement.relList")}} {{ReadOnlyInline}}
  - : {{domxref("DOMTokenList")}} で、 HTML の [`rel`](/ja/docs/Web/HTML/Element/area#rel) 属性を反映し、現在の文書とリンクされたリソースとの関係を、トークンのリストで示したものを返します。
- {{domxref("HTMLAreaElement.search")}}
  - : 参照する URL の検索要素（先頭の疑問符 ('`?`') を含む）をがあれば、それを表す文字列です。
- {{domxref("HTMLAreaElement.shape")}}
  - : 文字列で、 HTML の [`shape`](/ja/docs/Web/HTML/Element/area#shape) 属性を反映し、ホットスポットの形状を示します。既知の値に制限されています。
- {{domxref("HTMLElement.tabIndex")}}
  - : 現在の文書のタブ移動ナビゲーション順序での要素の位置を含む `long` です。
- {{domxref("HTMLAreaElement.target")}}
  - : 文字列で、リンク先リソースを表示する場所を示す HTML の [`target`](/ja/docs/Web/HTML/Element/area#target) 属性を反映します。
- {{domxref("HTMLAreaElement.username")}}
  - : ドメイン名の前に指定されたユーザー名を含む文字列です。

## インスタンスメソッド

_親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

- {{domxref("HTMLAreaElement.toString()")}}
  - : URL 全体を含む文字列を返します。 {{domxref("HTMLAreaElement.href")}} の別名です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装する HTML 要素: {{ HTMLElement("area") }}
