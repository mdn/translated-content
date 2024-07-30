---
title: "HTMLInputElement: selectionDirection プロパティ"
short-title: selectionDirection
slug: Web/API/HTMLInputElement/selectionDirection
l10n:
  sourceCommit: 0436adf460c5cd5daeb9a80440b515c9f65f2acc
---

{{ApiRef("HTML DOM")}}

**`selectionDirection`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、ユーザーがテキストを選択する方向を示す文字列です。

## 値

文字列です。以下の値のいずれかを取ります。

- `forward`
  - : ユーザーは入力テキストの末尾に向かって選択範囲を広げています。
- `backward`
  - : ユーザーは入力テキストの先頭に向かって選択範囲を広げています。
- `none`
  - : ユーザーは選択範囲を拡張していません。

> [!NOTE]
> Windows では、方向は選択範囲に対するキャレットの相対位置を示します。 "forward" 選択ではキャレットは選択範囲の終わりにあり、 "backward" 選択ではキャレットは選択範囲の始めにあります。 Windows には "none" の方向はありません。

> [!NOTE]
> Mac では、 方向はユーザーが Shift キー修飾つきの矢印キーを使用して選択範囲の大きさを変更したときに、 選択範囲のどの終わりが影響を受けるかを示します。 "forward" 方向は選択範囲の終わりが変更されることを意味し、 "backward" 方向は選択範囲の始めが変更されることを意味します。 "none" 方向は Mac の既定で、まだ具体的な方向が選択されていないことを示します。ユーザーは最初に選択範囲を調整するときに、どの方向の矢印キーを用いたかに基づいて暗黙のうちに方向を設定します。

## 例

### HTML

```html
<label for="selectionDirection">selectionDirection property</label>
<input type="text" id="selectionDirection" value="MDN" />
<p id="direction"></p>
```

### JavaScript

```js
const textSelectionDirection = document.querySelector("#selectionDirection");
const pConsole = document.querySelector("#direction");
pConsole.textContent =
  "Selection direction : " + textSelectionDirection.selectionDirection;
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.selectionDirection")}} プロパティ
- {{domxref("HTMLInputElement.selectionStart")}} プロパティ
- {{domxref("HTMLInputElement.selectionEnd")}} プロパティ
- {{domxref("HTMLInputElement.setSelectionRange")}} メソッド
