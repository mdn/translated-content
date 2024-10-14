---
title: "HTMLElement: virtualKeyboardPolicy プロパティ"
short-title: virtualKeyboardPolicy
slug: Web/API/HTMLElement/virtualKeyboardPolicy
l10n:
  sourceCommit: c7e432ec4c970b0b63741101bacce148804138e4
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

**`virtualKeyboardPolicy`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素のコンテンツが編集可能な場合（{{htmlelement("input")}} や {{htmlelement("textarea")}} 要素、[`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) 属性が設定された要素など）、タブレットやモバイル端末、その他ハードウェアキーボードが利用できない端末での画面に表示される仮想キーボードの動作を示す文字列を取得または設定します。

これは HTML の [`virtualkeyboardpolicy`](/ja/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) グローバル属性の値を反映します。

## 値

列挙値です。取りうる値は以下のとおりです。

- `"auto"` または空文字列 (`""`)
  - : ユーザーが要素をタップまたはフォーカスすると、ブラウザーは自動的に仮想キーボードを表示させます。
- `"manual"`
  - : ブラウザーは仮想キーボードを自動的に表示しません。仮想キーボードの表示/非表示はスクリプトによって手動で処理されます。

## 例

次の例は、スクリプトで画面に表示される仮想キーボードの動作を制御する方法を示しています。

```js
const element = document.querySelector("input");

// 画面に表示される仮想キーボードの動作は、スクリプトによって手動で制御します。
element.virtualKeyboardPolicy = "manual";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`virtualkeyboardpolicy`](/ja/docs/Web/HTML/Global_attributes#virtualkeyboardpolicy) グローバル属性
