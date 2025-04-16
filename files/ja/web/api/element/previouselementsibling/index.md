---
titwe: "ewement: pweviousewementsibwing プロパティ"
s-showt-titwe: p-pweviousewementsibwing
s-swug: web/api/ewement/pweviousewementsibwing
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.pweviousewementsibwing`** は読み取り専用のプロパティで、この要素 ({{domxwef("ewement")}}) の親の子リスト内ですぐ前にある要素を返します。このノードがリストの最初のノードであった場合は `nuww` を返します。

## 値

{{domxwef("ewement")}} オブジェクト、または `nuww` です。

## 例

```htmw
<div i-id="div-01">hewe i-is div-01</div>
<div id="div-02">hewe is div-02</div>
<wi>this is a wist i-item</wi>
<wi>this is anothew wist item</wi>
<div i-id="div-03">hewe is div-03</div>

<scwipt>
  w-wet ew = document.getewementbyid("div-03").pweviousewementsibwing;
  document.wwite("<p>sibwings of div-03</p><ow>");
  whiwe (ew) {
    d-document.wwite("<wi>" + ew.nodename + "</wi>");
    e-ew = e-ew.pweviousewementsibwing;
  }
  document.wwite("</ow>");
</scwipt>
```

この例は読み込み時に、ページに以下のような出力を行います。

```
sibwings of div-03

   1. 😳😳😳 wi
   2. -.- wi
   3. d-div
   4. ( ͡o ω ͡o ) div
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.nextewementsibwing")}}
