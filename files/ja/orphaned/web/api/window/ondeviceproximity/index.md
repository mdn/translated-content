---
title: Window.ondeviceproximity
slug: orphaned/Web/API/Window/ondeviceproximity
original_slug: Web/API/Window/ondeviceproximity
---

{{ ApiRef() }}

{{event("deviceproximity")}} イベントを受け取るイベントリスナーを指定します。これらのイベントは、デバイスセンサーが、物がデバイスに近づいたこと、または離れたことを検知したときに発生します。

## 構文

```
window.onuserproximity = funcRef
```

`funcRef` は、{{event("deviceproximity")}} イベントが発生したときに呼び出される関数です。これらは {{domxref("DeviceProximityEvent")}} 型のイベントです。

## 仕様

| 仕様                                                                                                 | ステータス                               | コメント   |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| {{ SpecName('Proximity Events', '#device-proximity', 'Proximity Events') }} | {{ Spec2('Proximity Events') }} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.Window.ondeviceproximity")}}

## 関連項目

- {{event("deviceproximity")}}
- {{domxref("DeviceProximityEvent")}}
- [Proximity API](/ja/docs/WebAPI/Proximity)
