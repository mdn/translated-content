---
title: virtualkeyboardpolicy
slug: Web/HTML/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`virtualkeyboardpolicy`** は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)で、列挙型の属性です。{{htmlattrxref("contenteditable")}} 属性を使用している要素に指定すると、タブレットや携帯電話など、ハードウェアキーボードが利用できないような端末での画面の仮想キーボードの動作を制御することができます。

この属性は、以下の値のいずれかを取る必要があります。

- `auto` または空文字列の場合は、この要素がフォーカスまたはタップされた際に、自動的に仮想キーボードを表示します。
- `manual` の場合は、要素へのフォーカスやタップを仮想キーボードの状態から切り離します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} および {{domxref("HTMLElement.isContentEditable")}}
- {{domxref("VirtualKeyboard_API", "仮想キーボード API", "", "nocode")}}
