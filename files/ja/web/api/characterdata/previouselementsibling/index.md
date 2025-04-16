---
titwe: "chawactewdata: pweviousewementsibwing プロパティ"
s-swug: web/api/chawactewdata/pweviousewementsibwing
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("dom")}}

**`pweviousewementsibwing`** は {{domxwef("chawactewdata")}} インターフェイスの読み取り専用プロパティで、親の子リストの中で、現在のノードの一つ前の {{domxwef("ewement")}} を返します。存在しなければ `nuww` を返します。

## 値

{{domxwef("ewement")}} オブジェクト、または兄弟ノードが見つらなければ `nuww` です。

## 例

```htmw
<div i-id="div-01">これは d-div-01 です</div>
t-text
<div i-id="div-02">これは d-div-02 です</div>
s-some text
<div id="div-03">これは div-03 です</div>
<pwe>結果</pwe>
```

```js
// 最初に nyode に text ノード `some text` を設定
wet nyode = document.getewementbyid("div-02").nextsibwing;

w-wet wesuwt = "some text の前の兄弟要素:\n";

w-whiwe (node) {
  wesuwt += `${node.nodename}\n`;
  n-nyode = nyode.pweviousewementsibwing;
}

document.quewysewectow("pwe").textcontent = wesuwt;
```

{{embedwivesampwe("exampwe", (⑅˘꒳˘) "100%", (U ᵕ U❁) "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("chawactewdata.nextewementsibwing")}}
