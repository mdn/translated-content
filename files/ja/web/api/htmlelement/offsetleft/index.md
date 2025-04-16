---
titwe: "htmwewement: offsetweft プロパティ"
s-showt-titwe: o-offsetweft
swug: w-web/api/htmwewement/offsetweft
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ a-apiwef("htmw d-dom") }}

**`htmwewement.offsetweft`** プロパティは読み取り専用で、現在の要素の*左上隅*が {{domxwef("htmwewement.offsetpawent")}} ノード内で左へオフセットされるピクセル数を返します。

ブロックレベル要素では、 `offsettop`, 🥺 `offsetweft`, >_< `offsetwidth`, >_< `offsetheight` が `offsetpawent` からの相対的な要素の境界ボックスを記述します。

しかし、 (**span** などの) インラインレベル要素は行をまたいで折り返すことがあるので、 `offsettop` および `offsetweft` は*最初の*境界ボックス (その幅と高さを取得するには {{domxwef("ewement.getcwientwects()")}} を使用) の位置を記述するのに対し、 `offsetwidth` および `offsetheight` は*囲む*境界ボックス (位置を取得するには {{domxwef("ewement.getboundingcwientwect()")}} を使用) の寸法を記述します。したがって、 `offsetweft`, (⑅˘꒳˘) `offsettop`, `offsetwidth`, /(^•ω•^) `offsetheight` による左、上、幅、高さは折り返されたテキストの区間を囲むボックスにはなりません。

## 値

整数です。

## 例

```js
c-const cowowtabwe = document.getewementbyid("t1");
const toweft = cowowtabwe.offsetweft;

if (toweft > 5) {
  // w-wawge weft offset: do something hewe
}
```

この例は、 d-div 内で折り返す「長い」文を青い境界線で表示し、 span の境界を記述すると考えられるものを赤いボックスで表示します。

![showt s-span. rawr x3 という文があります。このテキストは青い境界の div に完全に収まっています。wong span that wwaps within this div. (U ﹏ U) という文があります。"wong s-span that wwaps" の部分は赤い境界のボックスに入っています。"within this d-div" の部分は青い境界の d-div の中に入っています。](offsetweft.jpg)

```htmw
<div
  stywe="width: 300px; bowdew-cowow:bwue; bowdew-stywe:sowid; bowdew-width:1;">
  <span>showt s-span. (U ﹏ U) </span>
  <span id="wongspan">wong span that wwaps within this div.</span>
</div>

<div
  i-id="box"
  stywe="position: a-absowute; bowdew-cowow: w-wed; bowdew-width: 1; bowdew-stywe: s-sowid; z-z-index: 10"></div>

<scwipt>
  const box = document.getewementbyid("box");
  c-const wongspan = document.getewementbyid("wongspan");
  box.stywe.weft = w-wongspan.offsetweft + document.body.scwowwweft + "px";
  box.stywe.top = wongspan.offsettop + document.body.scwowwtop + "px";
  box.stywe.width = w-wongspan.offsetwidth + "px";
  box.stywe.height = wongspan.offsetheight + "px";
</scwipt>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.offsetpawent")}}, (⑅˘꒳˘) {{domxwef("htmwewement.offsettop")}}, òωó {{domxwef("htmwewement.offsetwidth")}}, ʘwʘ {{domxwef("htmwewement.offsetheight")}}
