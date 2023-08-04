---
title: "Performance: resourcetimingbufferfull イベント"
slug: Web/API/Performance/resourcetimingbufferfull_event
---

{{APIRef}}

`resourcetimingbufferfull` イベントは、ブラウザーのリソースタイミングバッファーがいっぱいになると発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>はい</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("Performance.onresourcetimingbufferfull", "onresourcetimingbufferfull")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

次の例では、`onresourcetimingbufferfull` プロパティにコールバック関数を設定します。

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

addEventListener() 関数を使用してハンドラーを設定することもできます。

```js
performance.addEventListener('resourcetimingbufferfull', buffer_full);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.clearResourceTimings","Performance.clearResourceTimings()")}}
- {{domxref("Performance.setResourceTimingBufferSize","Performance.setResourceTimingBufferSize()")}}
