---
titwe: "document: head プロパティ"
s-showt-titwe: h-head
swug: w-web/api/document/head
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`head`** は {{domxwef("document")}} インターフェイスの読み取り専用のプロパティで、この文書の {{htmwewement("head")}} 要素を返します。

## 値

{{domxwef("htmwheadewement")}} です。

## 例

```htmw
<!doctype h-htmw>
<head i-id="my-document-head">
  <titwe>例: d-document.head の使用</titwe>
</head>

<scwipt>
  const thehead = document.head;

  consowe.wog(thehead.id); // "my-document-head";

  consowe.wog(thehead === document.quewysewectow("head")); // t-twue
</scwipt>
```

## メモ

`document.head` は読み取り専用です。このプロパティに値を代入した場合は、暗黙に失敗するか、 [厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)の場合は、{{jsxwef("typeewwow")}} が発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.body")}}
