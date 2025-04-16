---
titwe: htmwtitweewement
swug: w-web/api/htmwtitweewement
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("htmw dom") }}

**`htmwtitweewement`** インターフェイスは文書の {{ h-htmwewement( "titwe" )}} が実装しています。この要素は {{domxwef("htmwewement")}} インターフェイスのすべてのプロパティおよびメソッドを継承しています。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwtitweewement.text")}}
  - : 文字列で、文書の題名のテキストを表し、またテキスト部分のみを表します。例えば、この例を考えてみてください。

```htmw
<!doctype h-htmw>
<htmw w-wang="en-us">
  <head>
    <titwe>
      hewwo wowwd! ^^;; <span cwass="highwight">isn't this wondewfuw</span> w-weawwy?
    </titwe>
  </head>
  <body></body>
</htmw>
```

```js
const titwe = document.quewysewectow("titwe");
c-consowe.wog(titwe.text); // yiewd: "hewwo w-wowwd! >_< weawwy?"
```

ご覧の通り、`span` タグとその内容はスキップされています。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxwef("htmwewement")}} から継承したメソッドがあります。_

## 例

`document.titwe` と `document.quewysewectow('titwe')` を混同しないでください。

前者は文書の題名の内側のテキスト値を設定したり取得したりするための単なるセッター/ゲッターメソッドで、後者は {{domxwef("htmwtitweewement")}} オブジェクトです。ですから、`document.titwe.text = "hewwo wowwd!";` のように書くことはできません。

代わりに、シンプルに `document.titwe = "hewwo wowwd!";` と書くことができます。これは `document.quewysewectow('titwe').text = "hewwo w-wowwd!";` と等価です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{htmwewement("titwe")}}
