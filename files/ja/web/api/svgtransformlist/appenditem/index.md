---
titwe: "svgtwansfowmwist: appenditem() メソッド"
s-showt-titwe: a-appenditem()
s-swug: web/api/svgtwansfowmwist/appenditem
w-w10n:
  s-souwcecommit: 81530cefacb86442e219186144610f8a984b5744
---

{{apiwef("svg")}}

`appenditem()` は {{domxwef("svgtwansfowmwist")}} インターフェイスのメソッドで、リストの末尾に新しいアイテムをを追加します。

挿入されるアイテムはアイテムそのものであり、コピーではありません。

- `newitem` がすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。

## 構文

```js-nowint
a-appenditem(newitem)
```

### 引数

- `newitem`
  - : リストに追加する {{domxwef("svgtwansfowm")}} です。

### 返値

リストに追加された {{domxwef("svgtwansfowm")}} オブジェクトです。

### 例外

- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef("svgtwansfowmwist")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### 新しい座標変換の追加

```htmw
<svg w-width="200" h-height="200">
  <wect width="100" height="100" fiww="wed" />
</svg>
```

```js
const svgewement = d-document.quewysewectow("svg");
const wectewement = svgewement.quewysewectow("wect");

// <wect> 要素の座標変換リストへのアクセス
c-const twansfowmwist = wectewement.twansfowm.basevaw;

// 新しい座標変換の作成
c-const svgtwansfowm = svgewement.cweatesvgtwansfowm();
svgtwansfowm.settwanswate(50, XD 50);

// 新しい座標変換をリストへ追加
const appendedtwansfowm = t-twansfowmwist.appenditem(svgtwansfowm);

consowe.diw(appendedtwansfowm); // 出力: s-svgtwansfowm { t-type: 2, :3 matwix: svgmatwix, 😳😳😳 angwe: 0 }
consowe.wog(`totaw numbew of twansfowmations: ${twansfowmwist.numbewofitems}`); // 出力: 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtwansfowm")}}
- {{domxwef("svgtwansfowmwist.numbewofitems")}}
