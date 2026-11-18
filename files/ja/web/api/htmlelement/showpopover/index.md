---
title: "HTMLElement: showPopover() メソッド"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 88dc56f83da6cf7adf4a2ad8803a412141ed4989
---

{{APIRef("Popover API")}}

**`showPopover()`** は {{domxref("HTMLElement")}} インターフェイスのメソッドで、{{domxref("Popover_API", "ポップオーバー", "", "nocode")}}要素（すなわち有効な [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性がある要素）を{{glossary("top layer", "最上位レイヤー")}}に追加することで表示します。

`showPopover()` が [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性のついた現在非表示の要素に対して呼び出された場合、{{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} イベントが発生し、続いてポップオーバーが表示され、それから {{domxref("HTMLElement/toggle_event", "toggle")}} イベントが発生します。

## 構文

```js-nolint
showPopover()
showPopover(options)
```

### 引数

- `options` {{optional_inline}}
  - : 次のプロパティを含むことがあるオブジェクトです。
    - `source` {{optional_inline}}
      - : {{domxref("HTMLElement")}} への参照で、表示アクションに関連付けられたポップオーバーのインボーカー（コントロール要素）をプログラムで定義します。`source` オプションでポップオーバーとそのインボーカーを関連付けると、次の 2 つの効果があります。
        - ブラウザーは、ポップオーバーが表示されたときに、キーボードフォーカスの移動順序内の論理的な位置に配置します。これにより、キーボードを使うユーザーにとってポップオーバーのアクセシビリティが向上します（[ポップオーバーのアクセシビリティ機能](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのアクセシビリティ機能)も参照）。
        - ブラウザーはこの 2 つの間に暗黙的なアンカー参照を作成します。これにより、[CSS のアンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)を使って、コントロール要素に対する相対位置にポップオーバーを簡単に配置できます。詳しくは[ポップオーバーのアンカー位置指定](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのアンカー位置指定)を参照してください。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 別のポップオーバーの表示中または非表示中にこのメソッドが呼び出された場合に発生します（例: `beforetoggle` イベントリスナー内）。

## 例

次の例では、キーボードの特定のキーを押すことで、ポップオーバーを表示する機能を提供します。

最初に HTML です。

```html
<div id="mypopover" popover>
  <h2>ヘルプ！</h2>

  <p>アプリを操作するため、次のコマンドを使用できます。</p>

  <ul>
    <li><ins>C</ins> を押すと、チーズを注文できます</li>
    <li><ins>T</ins> を押すと、豆腐を注文できます</li>
    <li><ins>B</ins> を押すと、ベーコンを注文できます</li>
  </ul>
  <hr />
  <ul>
    <li>"Service" と言うと、ロボットのウェイターが注文を取りに来ます</li>
    <li>"Escape" と言うと、射出座席が作動します</li>
  </ul>
</div>
```

そして機能をつなげる JavaScript です。

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.showPopover();
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
