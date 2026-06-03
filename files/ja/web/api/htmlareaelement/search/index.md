---
title: "HTMLAreaElement: search プロパティ"
short-title: search
slug: Web/API/HTMLAreaElement/search
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{ApiRef("HTML DOM")}}

**`search`** は {{domxref("HTMLAreaElement")}} インターフェイスのプロパティで、検索文字列、またの名をクエリー文字列、 `"?"` に続いて `<area>` 要素の `href` の引数を含む文字列です。URL に検索クエリーがない場合、このプロパティには空文字列 (`""`) が入ります。

このプロパティを設定して、 URL のクエリ文字列を変更することができます。設定すると、指定された値に、まだ存在しない場合は 1 つの `"?"` 接頭辞が追加されます。このプロパティを `""` に設定すると、クエリー文字列が除去されます。

クエリーは、設定時には{{Glossary("Percent-encoding", "パーセントエンコード")}}されますが、読み取り時にはパーセントデコードされません。

最新のブラウザーでは、[`URLSearchParams`](/ja/docs/Web/API/URLSearchParams/get#例) と [`URL.searchParams`](/ja/docs/Web/API/URL/searchParams#例) を提供して、クエリー文字列から引数を簡単に解析できるようにしています。

詳しくは {{domxref("URL.search")}} を参照してください。

## 値

文字列です。

## 例

### エリアのリンクから検索文字列を取得

```js
// <area id="myArea" href="/ja/docs/HTMLAreaElement?q=123"> 要素が文書内にあったとします
const area = document.getElementById("myArea");
area.search; // '?q=123' を返す
```

### URLSearchParams を使用した高度な解釈

他にも、 [`URLSearchParams`](/ja/docs/Web/API/URLSearchParams/get#例) が使われる場面があります。

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // 数値 123 を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
