---
title: Vibration API
slug: Web/API/Vibration_API
---

{{DefaultAPISidebar("Vibration API")}}

目前大多數的行動裝置均具備振動硬體以搖晃裝置，讓軟體程式碼能對使用者產生實際反饋。**Vibration API** 即可讓 Web Apps 存取振動硬體。當然，若裝置並未支援振動硬體，就不會產生任何效果。

## 振動說明

振動即如「on-off」脈衝的形式，且持續時間亦有不同的變化。可透過單一整數讓振動持續數個毫秒 (ms)；或可由多個整數組成陣列，達到振動與暫停交錯的振動形式。只要單一 [`window.navigator.vibrate()`](/zh-TW/docs/Web/API/Navigator/vibrate) 函式即可控制振動。

### 單次振動

你可指定單一數值，或用單一數值構成 1 組陣列，讓振動硬體動作 1 次：

```js
window.navigator.vibrate(200);
window.navigator.vibrate([200]);
```

上列 2 個範例均可使裝置振動達 200 ms。

### 振動形式

用數值構成陣列，敘述裝置在一段期間內振動與停止振動的情形。陣列中的所有值均轉換為整數，接著直譯 (Interprete) 成裝置振動與停止振動的毫秒數。範例如下：

```js
window.navigator.vibrate([200, 100, 200]);
```

根據此陣列，裝置將振動 200 ms、暫停 100 ms，再振動 200 ms。

你可照自己喜好而指定多組振動/暫停的變化，且輸入項的數量為奇數或偶數均可。由於振動將在每個振動期間結束時停止，所以不一定要提供暫停數值作為最後 1 組輸入項。

### 取消目前振動

在 [`window.navigator.vibrate()`](/zh-TW/docs/Web/API/Navigator/vibrate) 的值為「0」、空白陣列，或陣列全為「0」時呼叫此函式，即可取消目前執行中的振動作業。`

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 另可參閱

- {{domxref("window.navigator.vibrate()")}}
