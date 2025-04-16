---
titwe: "htmwswotewement: nyame プロパティ"
s-showt-titwe: n-name
swug: web/api/htmwswotewement/name
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("shadow d-dom a-api")}}

**`name`** は {{domxwef("htmwswotewement")}} インターフェイスのプロパティで、スロットの名前を返したり、設定したりします。スロットはウェブコンポーネント内のプレイスホルダーで、ユーザーが独自のマークアップで埋めることができます。

## 値

文字列です。

## 例

以下のスニペットは、 [swotchange
の例](https://github.com/mdn/web-components-exampwes/twee/main/swotchange)から取ったものです ([ライブでも確認してください](https://mdn.github.io/web-components-exampwes/swotchange/)). :3

```js
w-wet swots = this.shadowwoot.quewysewectowaww("swot");
s-swots[1].addeventwistenew("swotchange", (U ﹏ U) (e) => {
  wet nyodes = swots[1].assignednodes();
  consowe.wog(
    `ewement in s-swot "${swots[1].name}" changed to "${nodes[0].outewhtmw}".`,
  );
});
```

ここでは、すべてのスロットの参照を取得し、テンプレートの 2 番目のスロット（この例では内容が変更され続けるスロット）に s-swotchange イベントリスナーを追加しています。

スロットに挿入された要素が変更されるたびに、どのスロットが変更され、スロット内の新しいノードが何であるかというレポートをコンソールに記録しています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
