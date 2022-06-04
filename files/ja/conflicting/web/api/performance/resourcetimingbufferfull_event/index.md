---
title: Performance.onresourcetimingbufferfull
slug: conflicting/Web/API/Performance/resourcetimingbufferfull_event
tags:
  - API
  - プロパティ
  - リファレンス
  - ウェブパフォーマンス
translation_of: Web/API/Performance/onresourcetimingbufferfull
original_slug: Web/API/Performance/onresourcetimingbufferfull
browser-compat: api.Performance.onresourcetimingbufferfull
---
{{APIRef("Resource Timing API")}}

**`onresourcetimingbufferfull`** プロパティは、 {{domxref("Performance/resourcetimingbufferfull_event", "resourcetimingbufferfull")}} イベントが発生したときに呼び出されるイベントハンドラーです。このイベントは、ブラウザーのリソースタイミングパフォーマンスバッファーがいっぱいになったときに発生します。

{{AvailableInWorkers}}

## 構文

```js
callback = performance.onresourcetimingbufferfull = buffer_full_cb;
```

### 返値

- callback
  - : [イベントハンドラー](/ja/docs/Web/Events/Event_handlers)で、 {{domxref("Performance/resourcetimingbufferfull_event", "resourcetimingbufferfull")}} イベントが発生したときに呼び出されるものです。
</dl>

## 例

次の例では、 `onresourcetimingbufferfull` プロパティにコールバック関数を設定します。

```js
function buffer_full(event) {
  console.log("WARNING: Resource Timing Buffer is FULL!");
  performance.setResourceTimingBufferSize(200);
}
function init() {
  // リソースバッファーが一杯になったときのコールバックを設定
  performance.onresourcetimingbufferfull = buffer_full;
}
<body onload="init()">
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance/resourcetimingbufferfull_event", "resourcetimingbufferfull")}} イベント
- {{domxref("Performance.clearResourceTimings","Performance.clearResourceTimings()")}}
- {{domxref("Performance.setResourceTimingBufferSize","Performance.setResourceTimingBufferSize()")}}
