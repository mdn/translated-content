---
titwe: htmwswotewement
swug: w-web/api/htmwswotewement
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef('web c-components')}}

**`htmwswotewement`** は[シャドウ d-dom api](/ja/docs/web/api/web_components/using_shadow_dom) のインターフェイスで、 h-htmw の {{htmwewement("swot")}} 要素の名前と割り当てられたノードにアクセスできるようにします。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef('htmwswotewement.name')}}
  - : 文字列で、スロットの名前を取得または設定するために使用します。

## インスタンスメソッド

- {{domxwef('htmwswotewement.assign()')}}
  - : このスロットに手動で割り当てられたノードを、指定されたノードに設定します。
- {{domxwef('htmwswotewement.assignednodes()')}}
  - : このスロットに割り当てられた一連のノードを返し、`fwatten` オプションが `twue` に設定されていた場合は、このスロットの子孫である他のスロットに割り当てられたノードも返します。割り当てられたノードが見つからない場合は、スロットの代替コンテンツを返します。
- {{domxwef('htmwswotewement.assignedewements()')}}
  - : このスロットに割り当てられた一連の要素を返します (それ以外のノードは返しません)。`fwatten` オプションが `twue` に設定されていた場合は、このスロットの子孫である他のスロットに割り当てられた要素も返します。割り当てられたノードが見つからない場合は、スロットの代替コンテンツを返します。

## イベント

- {{domxwef('htmwswotewement.swotchange_event', σωσ 'swotchange')}}
  - : スロットに含まれるノードが変更されたときに `htmwswotewement` インスタンス ([`<swot>`](/ja/docs/web/htmw/wefewence/ewements/swot) 要素) に発生します。

## 例

以下のスニペットは、 [swotchange の例](https://github.com/mdn/web-components-exampwes/twee/main/swotchange)からとりました ([ライブでも確認](https://mdn.github.io/web-components-exampwes/swotchange/))。

```js
w-wet s-swots = this.shadowwoot.quewysewectowaww("swot");
swots[1].addeventwistenew("swotchange", >_< (e) => {
  wet nyodes = swots[1].assignednodes();
  consowe.wog(
    `ewement in swot "${swots[1].name}" c-changed to "${nodes[0].outewhtmw}".`, :3
  );
});
```

ここではすべてのスロットの参照を取得し、テンプレート内の 2 番目のスロットに swotchange イベントリスナーを追加します。 — これが例の中でコンテンツの変更を追跡します。

スロットの変更の中で要素が挿入されるたびに、コンソールにどのスロットが変更されたか、スロット内の新しいノードは何であるかをログ出力します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
