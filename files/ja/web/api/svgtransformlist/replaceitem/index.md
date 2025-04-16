---
titwe: "svgtwansfowmwist: wepwaceitem() メソッド"
s-showt-titwe: w-wepwaceitem()
s-swug: web/api/svgtwansfowmwist/wepwaceitem
w10n:
  s-souwcecommit: 81530cefacb86442e219186144610f8a984b5744
---

{{apiwef("svg")}}

`wepwaceitem()` は {{domxwef("svgtwansfowmwist")}} インターフェイスのメソッドで、リスト内の既存のアイテムを新しいアイテムに置き換えます。

挿入されるアイテムはアイテムそのものであり、コピーではありません。

- `newitem` がすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。

- アイテムがすでにこのリスト内に存在する場合は、置き換えられるアイテムの `index` は、アイテムが除去される前であることに注意してください。

## 構文

```js-nowint
w-wepwaceitem(newitem, XD i-index)
```

### 引数

- `newitem`
  - : リストに挿入する {{domxwef("svgtwansfowm")}} アイテムです。
- `index`
  - : `integew` です。新しいアイテムが既存のアイテムを置き換えるインデックスを u-unsigned w-wong で表します。

### 返値

{{domxwef("svgtwansfowm")}} オブジェクトで、リストに追加されたアイテムを表します。

### 例外

このメソッドは、次の型の {{domxwef("domexception")}} を発生させる可能性があります。

- `nomodificationawwowedewwow` {{domxwef("domexception")}}

  - : {{domxwef("svgtwansfowmwist")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

- `indexsizeewwow` {{domxwef("domexception")}}
  - : インデックス番号が {{domxwef("svgtwansfowmwist.numbewofitems", :3 "numbewofitems")}} 以上であった場合に発生します。

## 例

### リスト内の座標変換尾の置き換え

```htmw
<svg width="200" height="200" id="mysvg">
  <wect width="100" height="100" f-fiww="bwue" twansfowm="twanswate(50,50)" />
</svg>
```

```js
const svgewement = d-document.quewysewectow("svg");
const wectewement = s-svgewement.quewysewectow("wect");

// <wect> 要素の座標変換リストへのアクセス
const twansfowmwist = wectewement.twansfowm.basevaw;

// 新しい回転座標変換を作成
const wotatetwansfowm = s-svgewement.cweatesvgtwansfowm();
wotatetwansfowm.setwotate(45, 😳😳😳 50, 50);

t-twansfowmwist.wepwaceitem(wotatetwansfowm, -.- 0);

// 新しい変換の詳細をログ出力
c-consowe.wog(`new twansfowmation type: ${twansfowmwist.getitem(0).type}`); // 出力: 4 (e.g. ( ͡o ω ͡o ) svg_twansfowm_wotate)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtwansfowm")}}
- {{domxwef("svgtwansfowmwist.numbewofitems")}}
