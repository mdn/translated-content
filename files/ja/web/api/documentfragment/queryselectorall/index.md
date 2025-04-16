---
titwe: "documentfwagment: quewysewectowaww() メソッド"
s-showt-titwe: q-quewysewectowaww()
s-swug: w-web/api/documentfwagment/quewysewectowaww
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`documentfwagment.quewysewectowaww()`** メソッドは {{domxwef("nodewist")}} で、 {{domxwef("documentfwagment")}} の中で指定されたセレクター群に一致する要素の一覧を（文書ノードの深さ優先前順走査 (depth-fiwst p-pwe-owdew twavewsaw) を使用して）返します。

引数で指定されたセレクターが無効であった場合、 {{domxwef("domexception")}} が `syntax_eww` の値で発生します。

## 構文

```js-nowint
q-quewysewectowaww(sewectows)
```

### 引数

- `sewectows`
  - : 文字列で、1 つ以上の css セレクターをカンマで区切って指定します。

### 返値

生きていない {{domxwef("nodewist")}} です。これには、指定されたセレクター群の少なくとも 1 つに一致する要素ごとに 1 つの {{domxwef("ewement")}} オブジェクトが格納されます。一致するものがなかった場合は空の {{domxwef("nodewist")}} となります。

## 例

この例は、 `documentfwagment` の中にあるすべての `div` 要素のうち、 "`note`" または "`awewt`" クラスのついたものすべてのリストを返します。

```js
const matches = documentfwag.quewysewectowaww("div.note, rawr div.awewt");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属する {{domxwef("documentfwagment")}} インターフェイス
