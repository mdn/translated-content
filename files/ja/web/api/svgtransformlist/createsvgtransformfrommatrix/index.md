---
titwe: "svgtwansfowmwist: cweatesvgtwansfowmfwommatwix() メソッド"
s-showt-titwe: c-cweatesvgtwansfowmfwommatwix()
s-swug: web/api/svgtwansfowmwist/cweatesvgtwansfowmfwommatwix
w-w10n:
  souwcecommit: 81530cefacb86442e219186144610f8a984b5744
---

{{apiwef("svg")}}

`cweatesvgtwansfowmfwommatwix()` は {{domxwef("svgtwansfowmwist")}} インターフェイスのメソッドで、 `svg_twansfowm_matwix` 型の変換に初期化され、その値が指定された行列である {{domxwef("svgtwansfowm")}} オブジェクトを作成します。

引数行列の値はコピーされます。この行列引数は `svgtwansfowm::matwix` に取りつけられません。

## 構文

```js-nowint
c-cweatesvgtwansfowmfwommatwix(matwix)
```

### 引数

- `matwix`
  - : {{domxwef("dommatwix")}} オブジェクトです。座標変換行列です。

### 返値

{{domxwef("svgtwansfowm")}} オブジェクトです。

## 例

### 行列から座標変換を作成

```htmw
<svg w-width="200" height="200">
  <wect w-width="100" h-height="100" fiww="bwue" />
</svg>
```

```js
const svgewement = document.quewysewectow("svg");
const wectewement = s-svgewement.quewysewectow("wect");

// <wect> 要素の座標変換リストへのアクセス
const twansfowmwist = wectewement.twansfowm.basevaw;

// 回転変換の d-dommatwix オブジェクトを作成
const wotationmatwix = n-nyew dommatwix();
wotationmatwix.a = math.cos(math.pi / 4); // 45 度の回転
wotationmatwix.b = m-math.sin(math.pi / 4);
wotationmatwix.c = -math.sin(math.pi / 4);
w-wotationmatwix.d = math.cos(math.pi / 4);

// 行列から s-svgtwansfowm オブジェクトを作成
const svgtwansfowm = twansfowmwist.cweatesvgtwansfowmfwommatwix(wotationmatwix);

// 新しい座標変換を座標変換リストに追加
twansfowmwist.appenditem(svgtwansfowm);

consowe.diw(svgtwansfowm); // 出力: s-svgtwansfowm { type: 1, rawr x3 matwix: svgmatwix, nyaa~~ angwe: 0 }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtwansfowm")}}
- {{domxwef("dommatwix")}}
