---
title: CommandEvent
slug: Web/API/CommandEvent
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Invoker Commands API")}}

**`CommandEvent`** インターフェイスは、有効な {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} および {{domxref("HTMLButtonElement.command", "command")}} 属性を持つ{{domxref("HTMLButtonElement", "ボタン")}}要素が対話型要素を呼び出そうとしている際にユーザーに通知するイベントを表します。

これは `HTMLElement` の {{domxref("HTMLElement.command_event", "command")}} イベントのイベントオブジェクトであり、呼び出しコントロールが操作されたとき（例えばクリックまたは押下されたとき）のアクションを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CommandEvent.CommandEvent", "CommandEvent()")}}
  - : `CommandEvent` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスには、親である {{DOMxRef("Event")}} から継承したプロパティがあります。_

- {{domxref("CommandEvent.source")}} {{ReadOnlyInline}}
  - : この呼び出しの発生源であるボタンを表す {{domxref("HTMLButtonElement")}} です。
- {{domxref("CommandEvent.command")}} {{ReadOnlyInline}}
  - : ソースボタンの {{domxref("HTMLButtonElement.command", "command")}} 値を表す文字列です。

## 例

### 基本的な例

```html-nolint
<button commandfor="mypopover" command="show-popover">ポップオーバーを表示</button>

<div popover id="mypopover" role="[適切な ARIA ロールを宣言]">
  <!-- popover content here -->
  <button commandfor="mypopover" command="hide-popover">ポップオーバーを非表示</button>
</div>
```

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("command", (event) => {
  if (event.command === "show-popover") {
    console.log("ポップオーバーが表示されようとしています");
  }
});
```

### コマンドのカスタム値の使用

この例では、[カスタム値を持つ `commands`](/ja/docs/Web/HTML/Reference/Elements/button#カスタム値) で 3 つのボタンが作成されています。

```html
<div class="controls">
  <button commandfor="the-image" command="--rotate-left">左へ回転</button>
  <button commandfor="the-image" command="--reset">リセット</button>
  <button commandfor="the-image" command="--rotate-right">右へ回転</button>
</div>

<img
  id="the-image"
  src="/shared-assets/images/examples/dino.svg"
  alt="0 度回転した恐竜の頭" />
```

```css hidden
.controls {
  margin-block-end: 20px;
}
```

イベントリスナーは [`command` イベント](/ja/docs/Web/API/HTMLElement/command_event)を使用して画像に取り付けられています。ボタンがクリックされると、リスナーはボタンに割り当てられた独自の `command` 値に基づいてコードを実行し、画像を回転させると同時に、画像の新しい角度を示すために alt テキストを更新しています。

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  let rotate = parseInt(event.target.style.rotate || "0", 10);
  if (event.command === "--reset") {
    rotate = 0;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-left") {
    rotate = rotate === -270 ? 0 : rotate - 90;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-right") {
    rotate = rotate === 270 ? 0 : rotate + 90;
    event.target.style.rotate = `${rotate}deg`;
  }
  event.target.alt = `${rotate} 度回転した恐竜の頭`;
});
```

{{EmbedLiveSample('using_custom_values_for_commands', '100%', "220")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Invoker Commands API", "呼び出しコマンド API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
