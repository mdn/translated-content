---
title: Event.bubbles
slug: Web/API/Event/bubbles
page-type: web-api-instance-property
tags:
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.Event.bubbles
translation_of: Web/API/Event/bubbles
---
{{ ApiRef("DOM") }}

**`bubbles`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントが DOM ツリーをバブリングするかしないかを示します。

> **Note:** バブリングについての詳細は、[イベントのバブリングとキャプチャ](/ja/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)を参照してください。

## 値

論理値で、このイベントが DOM ツリーをバブリングするのであれば `true` です。

## 例

```js
function handleInput(e) {
  // Checks whether the event bubbles and ...
  if (!e.bubbles) {
    // ... passes the event along if does not
    passItOn(e);
  }

  // Already bubbling
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
