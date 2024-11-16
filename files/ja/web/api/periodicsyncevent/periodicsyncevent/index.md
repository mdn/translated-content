---
title: "PeriodicSyncEvent: PeriodicSyncEvent() コンストラクター"
slug: Web/API/PeriodicSyncEvent/PeriodicSyncEvent
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

**`PeriodicSyncEvent()`** コンストラクターは、新しい {{domxref("PeriodicSyncEvent")}} オブジェクトを生成します。このコンストラクターは、通常使用されません。ブラウザーがこれらのオブジェクトを作成し、{{domxref('ServiceWorkerGlobalScope.periodicsync_event', 'onperiodicsync')}} コールバックに渡します。

## 構文

```js-nolint
new PeriodicSyncEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。大文字と小文字は区別され、ブラウザーは `periodicsync` に設定します。
- `options`
  - : オブジェクトです。_{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加え_、以下のプロパティを持つことができます。
    - `tag`
      - : この同期イベントを表すタグです。

### 返値

与えられた入力を用いて設定された、新しい {{domxref("PeriodicSyncEvent")}} オブジェクトです。

## 例

この例では、関連するタグが関連付けられた新しい {{domxref('PeriodicSyncEvent')}} を構築します。

```js
const psEvent = new ExtendableEvent("periodicsync", { tag: "unique-tag" });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
