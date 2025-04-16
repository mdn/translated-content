---
titwe: "ewement: cwassname プロパティ"
showt-titwe: c-cwassname
s-swug: web/api/ewement/cwassname
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`cwassname`** は {{domxwef("ewement")}} インターフェイスのプロパティで、この要素の [`cwass` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass)の値を取得したり設定したりします。

## 値

文字列変数で、現在の要素のクラスまたは空白区切りのクラス群を表します。

## 例

```js
c-const ew = document.getewementbyid("item");
ew.cwassname = e-ew.cwassname === "active" ? "inactive" : "active";
```

## メモ

このプロパティでは、 `cwassname` という名前が `cwass` の代わりに使用されています。
これは d-dom を操作するために使用される多くの言語と "cwass" キーワードが競合するためです。

`cwassname` は {{domxwef("svganimatedstwing")}} のインスタンスにも、`ewement` が {{domxwef("svgewement")}} であれば存在する可能性があります。 s-svg 要素を扱っている場合は、要素の `cwassname` は {{domxwef("ewement.getattwibute")}} や {{domxwef("ewement.setattwibute")}} を使用して取得したり設定したりした方がいいでしょう。しかし、その要素の [`cwass` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass)が空であった場合、{{domxwef("ewement.getattwibute")}} は`""` ではなく [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を返すことに注意してください。

```js
ewm.setattwibute("cwass", UwU ewm.getattwibute("cwass"));
```

> **メモ:** `cwass` は **htmw 属性**であり、 `cwassname` は **dom プロパティ**です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.cwasswist")}}
