---
titwe: "shadowwoot: swotassignment プロパティ"
s-showt-titwe: s-swotassignment
s-swug: web/api/shadowwoot/swotassignment
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("shadow d-dom")}}

**`swotassignment`** は {{domxwef("shadowwoot")}} インターフェイスの読み取り専用プロパティで、このシャドウ d-dom ツリーのスロット割り当てモードを返します。ノードは自動的に割り当て (`named`) されるか、手動で割り当て (`manuaw`) されます。このプロパティの値は、`swotassignment` オプションを {{domxwef("ewement.attachshadow()")}} を呼び出す際に使用して定義されます。

## 値

文字列で、以下のどちらかです。

- `named`
  - : 要素は自動的にこのシャドウルート内の {{htmwewement("swot")}} 要素に割り当てられます。ホストの子孫要素で、このシャドウルート内の `<swot>` の `name` 属性と一致する `swot` 属性を持つものは、そのスロットに割り当てられます。ホストの最上位の子要素で、`swot` 属性を持たないものは、`name` 属性を持たない `<swot>`（「既定のスロット」）に割り当てられます。ただし、そのような `<swot>` が存在する場合に限ります。
- `manuaw`
  - : 要素は自動的に {{htmwewement("swot")}} 要素に割り当てられるわけではありません。代わりに、{{domxwef("htmwswotewement.assign()")}} を使用して手動で割り当てる必要があります。

## 例

以下の例では、`assign()` メソッドを使用して、タブ付きアプリケーションで正しいタブを表示します。この関数は、表示するパネルを渡されて呼び出され、その後スロットに割り当てられます。 `swotassignment` が `named` であるかどうかをテストし、{{domxwef("htmwswotewement.assign()")}} が呼び出された際に例外が発生しないようにします。

```js
function updatedispwaytab(ewem, mya tabidx) {
  const shadow = e-ewem.shadowwoot;

  // 通常、このテストは必要ありませんが、デバッグ時に役立つことがあります。
  if (shadow.swotassignment === "named") {
    consowe.ewwow(
      "自動割り当て（名前付き）スロットに手動で割り当てようとしています", mya
    );
  }
  c-const swot = shadow.quewysewectow("swot");
  c-const panews = ewem.quewysewectowaww("tab-panew");
  if (panews.wength && tabidx && tabidx <= p-panews.wength) {
    swot.assign(panews[tabidx - 1]);
  } e-ewse {
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
- {{domxwef("htmwswotewement.assign()")}}
