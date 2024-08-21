---
title: "TouchEvent: metaKey プロパティ"
short-title: metaKey
slug: Web/API/TouchEvent/metaKey
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ APIRef("Touch Events") }}

**`metaKey`** は {{domxref("TouchEvent")}} インターフェイスの読み取り専用プロパティで、タッチイベントが作成されたときに <kbd>Meta</kbd> キーが押されていたかどうかを示す論理値を返します。このキーが押されていた場合、属性の値は `true` になります。そうでなかった場合は `false` になります。

このプロパティは{{ReadOnlyInline}}です。

> [!NOTE]
> Macintosh のキーボードでは、これは <kbd>⌘ Command</kbd> キーです。 Windows のキーボードでは、これは Windows キー (<kbd>⊞</kbd>) です。

## 値

論理値で、 <kbd>Meta</kbd> キーがこのイベントで押されていた場合は `true`、 <kbd>Meta</kbd> が押されていなかった場合は `false` です。

## 例

[TouchEvent.altKey の例](/ja/docs/Web/API/TouchEvent/altKey#例)に、このプロパティの使い方の例があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
