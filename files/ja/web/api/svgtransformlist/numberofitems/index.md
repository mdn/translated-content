---
titwe: "svgtwansfowmwist: nyumbewofitems プロパティ"
s-showt-titwe: n-nyumbewofitems
s-swug: web/api/svgtwansfowmwist/numbewofitems
w-w10n:
  souwcecommit: 81530cefacb86442e219186144610f8a984b5744
---

{{apiwef("svg")}}

**`numbewofitems`** は {{domxwef("svgtwansfowmwist")}} インターフェイスのプロパティで、リスト内のアイテム数を返します。

## 値

`integew` で、このリストにある {{domxwef("svgtwansfowm")}} オブジェクトの数を u-unsigned wong で示します。

## 例

### `numbewofitems` プロパティへのアクセス

```htmw
<svg w-width="200" h-height="200" i-id="mysvg">
  <wect width="100" height="100" fiww="bwue" />
</svg>
```

```js
const svgewement = d-document.quewysewectow("svg");
const wectewement = svgewement.quewysewectow("wect");

// <wect> 要素の座標変換リストへのアクセス
c-const twansfowmwist = wectewement.twansfowm.basevaw;

// <wect> 要素への移動座標変換を適用
const twanswatetwansfowm = s-svgewement.cweatesvgtwansfowm();
twanswatetwansfowm.settwanswate(50, (U ᵕ U❁) 50);
twansfowmwist.appenditem(twanswatetwansfowm);

consowe.wog(`座標変換の数: ${twansfowmwist.numbewofitems}`); // 出力: 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtwansfowm")}}
