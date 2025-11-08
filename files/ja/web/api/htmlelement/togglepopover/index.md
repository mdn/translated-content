---
title: "HTMLElement: togglePopover() メソッド"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

**`togglePopover()`** は {{domxref("HTMLElement")}} インターフェイスのメソッドで、{{domxref("Popover_API", "ポップオーバー", "", "nocode")}}要素（すなわち有効な [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性がある要素）の非表示状態と表示状態をトグル切り替えします。

`togglePopover()` が [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性の付いた要素に対して呼び出されると、次のようになります。

1. {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} イベントが発行されます。
2. ポップオーバーが非表示状態と表示状態の間で切り替わります。
   1. もともと表示状態であった場合は、非表示状態に切り替わります。
   2. もともと非表示状態であった場合は、表示状態に切り替わります。
3. {{domxref("HTMLElement/toggle_event", "toggle")}} イベントが発行されます。

## 構文

```js-nolint
togglePopover(force)
```

### 引数

- `force`
  - : 論理値で、`togglePopover()` を {{domxref("HTMLElement.showPopover", "showPopover()")}} または {{domxref("HTMLElement.hidePopover", "hidePopover()")}} のように動作させます。ただし、そのポップオーバーが既にその状態にあっても、例外が発生しない点が異なります。
    - `true` に設定された場合、ポップオーバーは非表示だった場合に表示されます。表示されていた場合は、何も起こりません。
    - `false` に設定された場合、ポップオーバーは表示されていた場合に非表示になります。非表示になっていた場合は、何も起こりません。

### 返値

呼び出しの後でポップアップが開いた場合は `true`、それ以外の場合は `false` です。

古いバージョンのブラウザーでは、返値がなし ({{jsxref("undefined")}}) になることがあります（[ブラウザーの互換性](#ブラウザーの互換性)を参照）。

## 例

[Popover API examples landing page](https://mdn.github.io/dom-examples/popover-api/) では、MDN のポップオーバーの全ての集合にアクセスすることができます。

### 単純なポップアップ

これは [Toggle Help UI Popover Example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/) を少し変更したものです。
この例では（例のウィンドウにフォーカスがあるときに）キーボードの具体的なキーを押すことでポップオーバーのオン・オフを切り替えます。

この例のHTMLは下記の通りです。
この最初の要素はポップアップを呼び出す方法を指示しています。ポップアップは既定では非表示になっているため、ポップアップを呼び出す必要があります。

```html-nolint
<p id="instructions">
  "h" を押すとヘルプ画面を表示切替します（先に例のウィンドウを選択してください）。
</p>
```

次に、ポップアップとなる `<div>` 要素を定義します。
実際のコンテンツは重要ではありませんが、`<div>` をポップオーバーにするために、[`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性が必要で、既定では非表示になることに注意してください（または、JavaScript でこの要素を設定することもできます）。

```html
<div id="mypopover" popover>
  <h2>ヘルプ</h2>

  <p>以下のコマンドを使用してアプリを制御することができます。</p>

  <ul>
    <li><ins>C</ins> を押すとチーズを注文します</li>
    <li><ins>T</ins> を押すと豆腐を注文します</li>
    <li><ins>B</ins> を押すとベーコンを注文します</li>
  </ul>
</div>
```

この例の JavaScript は下記の通りです。
最初にポップオーバーが対応しているかどうかを調べ、対応していない場合はポップオーバー `div` がインラインで表示されないように非表示にします。

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.innerText = "";
  instructions.innerText = "ポップオーバーに対応していません";
}
```

ポップオーバーに対応している場合は、`h` キーが押されたときの待ち受けを追加し、それを使用してポップアップを開くための発生させます。
また、呼び出した後にポップアップが開かれたのか閉じられたのかをログ出力しますが、これは `true` または `false` を返した場合のみです。

```js
if (HTMLElement.prototype.hasOwnProperty("popover")) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
      const popupOpened = popover.togglePopover();

      // 対応するブラウザーでポップオーバーが開いているか閉じられているかを調べる
      if (popupOpened !== undefined) {
        instructions.innerText +=
          popupOpened === true ? `\n開きました` : `\n閉じました`;
      }
    }
  });
}
```

下記のライブサンプルを使用して試すことができます。

{{EmbedLiveSample('Examples', 700, 290)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) グローバル属性
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
