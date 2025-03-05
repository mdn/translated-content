---
title: "PopStateEvent: PopStateEvent() コンストラクター"
short-title: PopStateEvent()
slug: Web/API/PopStateEvent/PopStateEvent
l10n:
  sourceCommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{APIRef("History API")}}

**`PopStateEvent()`** コンストラクターは、新しい {{domxref("PopStateEvent")}} オブジェクトを生成します。

> [!NOTE]
> ウェブ開発者は通常このコンストラクターを呼び出す必要はありません。ブラウザーは {{domxref("Window/popstate_event", "popstate")}} イベントを発行するときにこれらのオブジェクトを生成するからです。

## 構文

```js-nolint
new PopStateEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前の文字列です。
    大文字と小文字は区別され、ブラウザーはこれを `popstate` に設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加えて_、以下のプロパティがあります。
    - `state` {{optional_inline}}
      - : 状態を表すオブジェクトです。実質的には {{domxref("history.pushState()")}} または {{domxref("history.replaceState()")}} の呼び出しで指定された値です。設定されていない場合、既定値は `null` です。

### 返値

新しい {{domxref("PopStateEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("history.pushState()")}}
- {{domxref("history.replaceState()")}}
- {{domxref("Window/popstate_event", "popstate")}} イベント
