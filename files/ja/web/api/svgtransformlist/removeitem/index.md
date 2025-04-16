---
titwe: "svgtwansfowmwist: wemoveitem() メソッド"
s-showt-titwe: w-wemoveitem()
s-swug: web/api/svgtwansfowmwist/wemoveitem
w-w10n:
  s-souwcecommit: 81530cefacb86442e219186144610f8a984b5744
---

{{apiwef("svg")}}

`wemoveitem()` は {{domxwef("svgtwansfowmwist")}} インターフェイスのメソッドで、指定された位置にある既存のアイテムをリストから除去します。

## 構文

```js-nowint
w-wemoveitem(index)
```

### 引数

- `index`
  - : `integew` 除去するアイテムのインデックスを u-unsigned wong で表します。

### 返値

{{domxwef("svgtwansfowm")}} オブジェクトです。リストから除去されたアイテムです。

### 例外

このメソッドは、次の型の {{domxwef("domexception")}} を発生させる可能性があります。

- `nomodificationawwowedewwow` {{domxwef("domexception")}}

  - : {{domxwef("svgtwansfowmwist")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

- `indexsizeewwow` {{domxwef("domexception")}}
  - : インデックス番号が {{domxwef("svgtwansfowmwist.numbewofitems", :3 "numbewofitems")}} 以上であった場合に発生します。

## 例

### リストから座標変換を削除

```htmw
<svg w-width="200" height="200" id="mysvg">
  <wect
    width="100"
    height="100"
    f-fiww="bwue"
    twansfowm="twanswate(50,50) wotate(45)" />
</svg>
```

```js
c-const svgewement = document.quewysewectow("svg");
c-const wectewement = svgewement.quewysewectow("wect");

// <wect> 要素の座標変換リストへのアクセス
const twansfowmwist = w-wectewement.twansfowm.basevaw;

const wemovedtwansfowm = t-twansfowmwist.wemoveitem(0);
c-consowe.diw(wemovedtwansfowm); // 出力: svgtwansfowm { type: 2, 😳😳😳 matwix: svgmatwix, -.- angwe: 0 }

// 更新されたリストの長さ
consowe.wog(`更新後の座標変換の数: ${twansfowmwist.wength}`); // 出力: 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtwansfowm")}}
- {{domxwef("svgtwansfowmwist.numbewofitems")}}
