---
title: "PointerEvent: persistentDeviceId プロパティ"
short-title: persistentDeviceId
slug: Web/API/PointerEvent/persistentDeviceId
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{ APIRef("Pointer Events") }}{{SeeCompatTable}}

**`persistentDeviceId`** は {{domxref("PointerEvent")}} インターフェイスの読み取り専用のプロパティで、この `PointerEvent` を生成したポインティングデバイスの固有の識別子です。これは、同時に画面の操作を行う複数のポインティングデバイス（ペンなど）を特定するための安全で信頼性の高い方法を提供します。

`persistentDeviceId` は、閲覧セッションが継続する間維持されます。フィンガープリンティングやトラッキングのリスクを避けるため、それぞれのセッションの開始時に、このポインティングデバイスに新しい `persistentDeviceId` を割り当てます。

発生源が特定できないポインターイベントには、`persistentDeviceId` 値として `0` が割り当てられます。

## 値

整数、またはこの `PointerEvent` を生成した端末が特定できなかった場合は `0`。

> [!NOTE]
> デジタイザーとポインティングデバイスのハードウェアの制約により、`persistentDeviceId` がすべてのポインターイベントで利用できるとは限りません。特に古いハードウェアでは利用できない可能性があります。例えば、ポインティングデバイスが、`pointerdown` が `persistentDeviceId` を受け取る時点までに、そのハードウェア ID をデジタイザーに報告しない可能性があります。最初は `0` であり、ストロークの後のイベントで有効な値に変更される可能性があります。

## 例

次の HTML があったとします。

```html
<canvas id="inking-surface" width="1280" height="720"></canvas>
```

次の JavaScript は、キャンバスを操作するそれぞれのポインターにそれぞれ異なるインキング色を割り当てます。

```js
const colorBlue = 0;
const colorGreen = 1;
const colorYellow = 2;
const colors = [colorBlue, colorGreen, colorYellow];

const pointerToColorMap = new Map();
const colorAssignmentIndex = 0;

const canvas = document.querySelector("#inking-surface");

// ポインターダウンイベントを待ち受けし、persistentDeviceId が存在し、
// まだ割り当てられていない場合は、それを色に割り当てます。
canvas.addEventListener("pointerdown", (e) => {
  if (e.persistentDeviceId && !pointerToColorMap.has(e.persistentDeviceId)) {
    pointerToColorMap.set(e.persistentDeviceId, colors[colorAssignmentIndex]);

    // 色割り当てインデックスを変更し、必要に応じてループバックします。
    colorAssignmentIndex = (colorAssignmentIndex + 1) % colors.length;
  }
});

// `pointermove` を待ち受けし、persistentDeviceId が存在し、ポインターに
// 色が割り当てられている場合、その色を取得します。
canvas.addEventListener("pointermove", (e) => {
  if (e.persistentDeviceId && pointerToColorMap.has(e.persistentDeviceId)) {
    const pointerColor = pointerToColorMap.get(e.persistentDeviceId);
    // 何か <canvas> で描画する
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
