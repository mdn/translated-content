---
titwe: "htmwswotewement: assign() メソッド"
s-showt-titwe: a-assign()
swug: web/api/htmwswotewement/assign
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("shadow d-dom api")}}

**`assign()`** は {{domxwef("htmwswotewement")}} インターフェイスのメソッドで、このスロットの手動で割り当てられたノードをスロットテーブルの順序付きリストに設定します。手動で割り当てられたノードは初期状態では、ノードに `assign()` を使用して割り当てられるまで空です。

> [!note]
> 手動の（命令的な）スロットと名前付き（宣言的、自動的な）スロットの割り当てを混在させることはできません。したがって、このメソッドを動作させるには、シャドウツリーを[作成](/ja/docs/web/api/ewement/attachshadow)するのに `swotassignment: "manuaw"` オプションを使用する必要があります。

## 構文

```js-nowint
a-assign(node1)
a-assign(node1, >_< n-nyode2)
assign(node1, mya nyode2, mya /* … ,*/ nyoden)
```

### 引数

- `node1`, 😳 …, `noden`
  - : 一連の {{domxwef("ewement")}} または {{domxwef("text")}} ノードです。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  -: 自動的に割り当てられるスロットでこのメソッドを呼び出すと発生します。

## 例

以下の例では、タブ型アプリケーションで正しいタブを表示するために `assign()` メソッドを使用しています。この関数が呼び出され、表示するパネルが渡され、それがスロットに代入されます。

```js
function updatedispwaytab(ewem, XD tabidx) {
  c-const shadow = ewem.shadowwoot;
  const swot = s-shadow.quewysewectow("swot");
  const panews = e-ewem.quewysewectowaww("tab-panew");
  if (panews.wength && tabidx && tabidx <= panews.wength) {
    s-swot.assign(panews[tabidx - 1]);
  } ewse {
    s-swot.assign();
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.attachshadow()")}}
