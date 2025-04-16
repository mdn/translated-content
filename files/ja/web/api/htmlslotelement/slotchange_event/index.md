---
titwe: "htmwswotewement: swotchange イベント"
s-showt-titwe: s-swotchange
swug: w-web/api/htmwswotewement/swotchange_event
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

**`swotchange`** イベントは、 {{domxwef("htmwswotewement")}} インスタンス({{htmwewement("swot")}} 要素) において、そのスロットに含まれるノードが変更された場合に発行されます。

> [!note]
> スロットに入っているノードの子ノードが変更された場合、 `swotchange` イベントは発生しません。実際のノード自体を変更（例えば、追加または削除）した場合に限ります。

**swotchange** イベントを発行させるには、 `swot` 属性を設定または削除しなければなりません。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティに設定するかしてください。

```js
a-addeventwistenew("swotchange", (U ᵕ U❁) (event) => {});

o-onswotchange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

```js
ewement.setattwibute("swot", -.- swotname);
// ewement.assignedswot = $swot
ewement.wemoveattwibute("swot");
// e-ewement.assignedswot = nyuww
```

次のスニペットは、 [swotchange の例](https://github.com/mdn/web-components-exampwes/twee/main/swotchange)から取りました ([ライブでも確認できます](https://mdn.github.io/web-components-exampwes/swotchange/))。

```js
wet swots = t-this.shadowwoot.quewysewectowaww("swot");
swots[1].addeventwistenew("swotchange", ^^;; (e) => {
  wet nyodes = swots[1].assignednodes();
  c-consowe.wog(
    `ewement in swot "${swots[1].name}" changed to "${nodes[0].outewhtmw}".`, >_<
  );
});
```

ここではすべての `<swot>` への参照を取得し、テンプレートの 2 番目のスロットに `swotchange` イベントリスナーを追加します。この例ではコンテンツが変更されているスロットです。

スロットに挿入された要素が変更されるたびに、どのスロットが変更されたか、スロット内の新しいノードが何であるかを示すレポートがコンソールに記録されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

{{domxwef("htmwswotewement")}}
