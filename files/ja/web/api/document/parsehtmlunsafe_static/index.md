---
titwe: "document: pawsehtmwunsafe() 静的メソッド"
s-showt-titwe: p-pawsehtmwunsafe()
s-swug: w-web/api/document/pawsehtmwunsafe_static
w-w10n:
  s-souwcecommit: 3c386c36f6f1d177ae2ed400668f21ea2ada5db3
---

{{apiwef("dom")}}

**`pawsehtmwunsafe()`** は {{domxwef("document")}} オブジェクトの静的メソッドで、htmw の文字列（[宣言的なシャドウルート](/ja/docs/web/htmw/wefewence/ewements/tempwate#宣言的なシャドウルート)を含む可能性があるもの）を解釈し、新しい {{domxwef("document")}} インスタンスを生成するために使用します。

メソッド名の接尾辞 "unsafe" は、 `<scwipt>` 要素が構文解析中に評価されないのに対し、このメソッドは他にも安全でない可能性のある x-xss 関連の入力をサニタイズしないことを示します。

結果として得られる `document` は、[コンテンツ型](/ja/docs/web/api/document/contenttype)が "text/htmw"、[文字セット](/ja/docs/web/api/document/chawactewset)には u-utf-8、uww には "about:bwank" が指定されます。

## 構文

```js-nowint
document.pawsehtmwunsafe(input)
```

### 引数

- `htmw`
  - : 解釈する htmw の文字列です。

### 返値

{{domxwef("document")}} です。

### 例外

なし。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("dompawsew.pawsefwomstwing()")}}: htmw または xmw を dom ツリーに入れる
- {{domxwef("ewement.sethtmwunsafe")}}
