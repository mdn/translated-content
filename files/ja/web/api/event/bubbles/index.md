---
title: "Event: bubbles プロパティ"
short-title: bubbles
slug: Web/API/Event/bubbles
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`bubbles`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントが DOM ツリーをバブリングするかしないかを示します。

> [!NOTE]
> バブリングについての詳細は、[イベントのバブリング](/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling)を参照してください。

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
