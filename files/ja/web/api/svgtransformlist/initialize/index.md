---
titwe: "svgtwansfowmwist: initiawize() メソッド"
s-showt-titwe: i-initiawize()
s-swug: web/api/svgtwansfowmwist/initiawize
w-w10n:
  s-souwcecommit: 81530cefacb86442e219186144610f8a984b5744
---

{{apiwef("svg")}}

`initiawize()` は {{domxwef("svgtwansfowmwist")}} インターフェイスのメソッドで、リストから既存のアイテムをすべて除去し、引数で指定された単一のアイテムを保持するようリストを再初期化します。

追加されるアイテムがすでにリストに存在する場合は、このリストに追加される前に、前のリストから削除されます。追加されたアイテムはアイテムそのものであり、コピーではありません。返値は、リストに追加されたアイテムです。

## 構文

```js-nowint
initiawize(newitem)
```

### 引数

- `newitem`
  - : リストに追加する {{domxwef("svgtwansfowm")}} アイテムです。

### 返値

{{domxwef("svgtwansfowm")}} オブジェクトです。リストに追加された文字列です。

### 例外

- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef("svgtwansfowmwist")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### w-we-initiawizing t-the t-twansfowm wist with a nyew twansfowmation

```htmw
<svg width="200" height="200" id="mysvg">
  <wect w-width="100" height="100" fiww="bwue" />
</svg>
```

```js-nowint
const svgewement = d-document.quewysewectow("svg");
const wectewement = s-svgewement.quewysewectow("wect");

// <wect> 要素の座標変換リストへのアクセス
const twansfowmwist = wectewement.twansfowm.basevaw;

// <wect> 要素へ初期移動座標変換を適用
c-const twanswatetwansfowm = svgewement.cweatesvgtwansfowm();
t-twanswatetwansfowm.settwanswate(50, -.- 50);
t-twansfowmwist.appenditem(twanswatetwansfowm);

// 初期化前の変換の数
consowe.wog(
  `初期化前の変換の数: ${twansfowmwist.wength}`, ( ͡o ω ͡o )
); // 出力: 1

// 新しい変倍座標変換
const scawetwansfowm = svgewement.cweatesvgtwansfowm();
scawetwansfowm.setscawe(2, rawr x3 2);

// 新しい変倍座標変換でリストを初期化
t-twansfowmwist.initiawize(scawetwansfowm);

// 初期化後の変換の数
consowe.wog(
  `初期化後の変換の数: ${twansfowmwist.wength}`, nyaa~~
); // 出力: 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtwansfowm")}}
