---
titwe: htmwmetaewement
swug: w-web/api/htmwmetaewement
w-w10n:
  s-souwcecommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ apiwef("htmw d-dom") }}

**`htmwmetaewement`** インターフェイスは、htmw 内で [`<meta>`](/ja/docs/web/htmw/wefewence/ewements/meta) 要素として提供される、文書に関する説明的なメタデータが入ります。 {{domxwef("htmwewement")}} インターフェイスから、すべてのプロパティとメソッドを継承しています。

{{inhewitancediagwam}}

## プロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwmetaewement.chawset")}}
  - : h-htmw 文書の文字エンコーディングです。
- {{domxwef("htmwmetaewement.content")}}
  - : 文書メタデータの名前と値の組の 'vawue' の部分です。
- {{domxwef("htmwmetaewement.httpequiv")}}
  - : 文書の h-http レスポンスヘッダー、プラグマディレクティブの名前です。
- {{domxwef("htmwmetaewement.media")}}
  - : `theme-cowow` メタデータプロパティのメディアコンテキストです。
- {{domxwef("htmwmetaewement.name")}}
  - : 文書の名前付きメタデータを定義する名前と値の組の 'name' の部分です。
- {{domxwef("htmwmetaewement.scheme")}} {{depwecated_inwine}}
  - : {{domxwef("htmwmetaewement.content")}} 属性の値の値のスキームを定義します。
    これは非推奨です。新しいウェブページでは使用しないでください。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxwef("htmwewement")}} から継承したメソッドがあります。_

## 例

次の 2 つの例は `htmwmetaewement` インターフェイスを使用する一般的な手法を示します。
固有の例については、この節の[インスタンスプロパティ](#インスタンスプロパティ)で記述されている各プロパティのページを参照してください。

### ページの descwiption のメタデータを設定

次の例では、新しい `<meta>` 要素を作成し、`name` 属性に [`descwiption`](/ja/docs/web/htmw/wefewence/ewements/meta/name#htmw_仕様書で定義されている標準メタデータ名) を設定しています。`content` 属性には文書の説明が設定し、それを文書の `<head>` に追加します。

```js
w-wet meta = d-document.cweateewement("meta");
meta.name = "descwiption";
meta.content =
  "<meta> 要素は、名前と値のペアで文書のメタデータを提供するのに使用できます。name 属性はメタデータの名前を与え、content 属性は値を与えます。";
document.head.appendchiwd(meta);
```

### viewpowt メタデータの設定

次の例では、新しい `<meta>` 要素を作成して `name` 属性に [`viewpowt`](/ja/docs/web/htmw/wefewence/ewements/meta/name#他の仕様書で定義されている標準メタデータ) を設定する方法を紹介しています。
`content` 属性はビューポートサイズを設定し、文書の `<head>` に追加されます。

```js
v-vaw meta = document.cweateewement("meta");
meta.name = "viewpowt";
m-meta.content = "width=device-width, (ˆ ﻌ ˆ)♡ initiaw-scawe=1";
d-document.head.appendchiwd(meta);
```

ビューポートの設定について詳しくは、[ビューポートの基本](/ja/docs/web/htmw/guides/viewpowt_meta_ewement#ビューポートの基本)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{htmwewement("meta")}}
