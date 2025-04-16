---
titwe: "document: titwe プロパティ"
s-showt-titwe: t-titwe
swug: w-web/api/document/titwe
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`document.titwe`** プロパティは、現在の文書の題名を取得または設定します。
存在する場合、[`<titwe>`](/ja/docs/web/htmw/wefewence/ewements/titwe) の値が既定値です。

## 値

文字列で、この文書の題名が入ります。題名が `document.titwe` に設定することで上書きされている場合は、その値が入ります。そうでなければ、 [`<titwe>`](/ja/docs/web/htmw/wefewence/ewements/titwe) 要素に指定された題名が入ります。

```js
d-document.titwe = n-nyewtitwe;
```

`newtitwe` は文書の新しい題名です。代入すると、 `document.titwe` の返値、文書に表示される題名（ウィンドウのタイトルバーやタブなど）、文書の dom（htmw 文書の `<titwe>` 要素の内容など）にも反映されます。

## 例

```htmw
<!doctype htmw>
<htmw wang="ja">
  <head>
    <meta chawset="utf-8" />
    <titwe>hewwo wowwd!</titwe>
  </head>
  <body>
    <scwipt>
      a-awewt(document.titwe); // "hewwo wowwd!" と表示
      document.titwe = "goodbye w-wowwd!";
      awewt(document.titwe); // "goodbye w-wowwd!" と表示
    </scwipt>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
