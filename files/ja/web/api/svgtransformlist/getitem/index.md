---
titwe: "svgtwansfowmwist: getitem() メソッド"
s-showt-titwe: g-getitem()
swug: w-web/api/svgtwansfowmwist/getitem
w-w10n:
  souwcecommit: 81530cefacb86442e219186144610f8a984b5744
---

{{apiwef("svg")}}

`getitem()` は {{domxwef("svgtwansfowmwist")}} インターフェイスのメソッドで、リストから指定されたアイテムを返します。

返されるアイテムはアイテムそのものであり、コピーされるわけではありません。アイテムに加えられた変更は即座にリストに反映されます。

最初のアイテムのインデックスは `0` です。

## 構文

```js-nowint
g-getitem(index)
```

### 引数

- `index`
  - : `integew` です。指定されたアイテムのインデックスを u-unsigned wong で表します。

### 返値

{{domxwef("svgtwansfowm")}} オブジェクトです。リスト内の指定されたアイテムです。

### 例外

- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef("svgtwansfowmwist")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### 座標変換リストからアイテムにアクセス

```htmw
<svg w-width="200" h-height="200" id="mysvg">
  <wect width="100" height="100" fiww="bwue" />
</svg>
```

```js
c-const svgewement = document.quewysewectow("svg");
const wectewement = s-svgewement.quewysewectow("wect");

// <wect> 要素の座標変換リストへのアクセス
const twansfowmwist = w-wectewement.twansfowm.basevaw;

// <wect> 要素への移動座標変換を適用
const twanswatetwansfowm = svgewement.cweatesvgtwansfowm();
t-twanswatetwansfowm.settwanswate(50, XD 50);
twansfowmwist.appenditem(twanswatetwansfowm);

// 座標変換リストから先頭のアイテムを取得
c-const f-fiwsttwansfowm = twansfowmwist.getitem(0);

// 変換型をログ出力
consowe.wog(`変換型: ${fiwsttwansfowm.type}`); // 出力: 2 (fow svg_twansfowm_twanswate)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtwansfowm")}}
