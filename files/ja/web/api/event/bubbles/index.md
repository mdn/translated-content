---
title: "Event: bubbles プロパティ"
short-title: bubbles
slug: Web/API/Event/bubbles
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{ ApiRef("DOM") }}

**`bubbles`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントが DOM ツリーをバブリングするかしないかを示します。

> **メモ:** バブリングについての詳細は、[イベントのバブリングとキャプチャ](/ja/docs/Learn/JavaScript/Building_blocks/Events#イベントのバブリングとキャプチャリング)を参照してください。

## 値

論理値で、このイベントが DOM ツリーをバブリングするのであれば `true` です。

## 例

```js
function handleInput(e) {
  // バブリングするイベントを渡すかどうかをチェック
  if (!e.bubbles) {
    passItOn(e);
  }

  // 既にバブリングした
  doOutput(e);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Event.stopPropagation", "stopPropagation()")}} はイベントのバブリングを停止します
- {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}} は同じイベントが DOM 内の同じ水準で他のリスナーを呼び出すことを抑止します
- {{domxref("Event.preventDefault", "preventDefault()")}} は拡散を続けることを許可しますが、ブラウザーがイベントを扱うためのリスナーがない既定のアクションを実行することを許可しません
