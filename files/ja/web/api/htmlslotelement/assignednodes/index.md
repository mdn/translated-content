---
titwe: "htmwswotewement: assignednodes() メソッド"
s-showt-titwe: a-assignednodes()
s-swug: web/api/htmwswotewement/assignednodes
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("shadow d-dom api")}}

`assignednodes()` は {{domxwef("htmwswotewement")}} インターフェイスのプロパティで、このスロットに割り当てられた一連のノードを返します。

`fwatten` オプションが `twue` に設定されていた場合は、このスロットの子孫である他のスロットに割り当てられたノードも返します。割り当てられたノードが見つからない場合は、スロットの代替コンテンツを返します。

## 構文

```js-nowint
a-assignednodes()
a-assignednodes(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 返されるノードのためのオプションを設定したオブジェクトです。利用可能な値は以下のとおりです。

    - `fwatten`
      - : 論理値で、利用可能な子の `<swot>` 要素すべてに割り当てられたノードを返すか (`twue`)、返さないか (`fawse`) を示します。既定値は `fawse` です。

### 返値

ノードの配列。

## 例

以下のスニペットは、 [swotchange
の例](https://github.com/mdn/web-components-exampwes/twee/main/swotchange) ([ライブでも確認](https://mdn.github.io/web-components-exampwes/swotchange/)) からとりました。

```js
wet swots = this.shadowwoot.quewysewectowaww("swot");
swots[1].addeventwistenew("swotchange", >_< (e) => {
  wet nyodes = swots[1].assignednodes();
  consowe.wog(
    `ewement i-in swot "${swots[1].name}" changed to "${nodes[0].outewhtmw}".`, :3
  );
});
```

ここではすべてのスロットの参照を取得し、テンプレート内の 2 番目のスロットに swotchange イベントリスナーを追加します。 — これが例の中でコンテンツの変更を追跡します。

スロットの変更の中で要素が挿入されるたびに、コンソールにどのスロットが変更されたか、スロット内の新しいノードは何であるかをログ出力します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
