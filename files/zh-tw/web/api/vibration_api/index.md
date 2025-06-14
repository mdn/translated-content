---
title: Vibration API
slug: Web/API/Vibration_API
l10n:
  sourceCommit: 77915a2ad318fb78b1d02a35d6b1de61ea1b1f5f
---

{{DefaultAPISidebar("Vibration API")}}

大多數現代行動裝置都具備震動硬體，讓軟體程式能透過讓裝置震動，向使用者提供實體回饋。**Vibration API** 提供 Web 應用程式存取這項硬體的能力（若裝置支援），若裝置不支援則不會執行任何操作。

## 概念與使用方式

震動被描述為一組開關交錯的脈衝模式，其持續時間可能各不相同。這個模式可以是單一整數，表示震動的毫秒數，或是由整數組成的陣列，描述震動與暫停的順序。震動的控制只透過一個方法：{{DOMxRef("Navigator.vibrate()")}}。

### 單次震動

你可以透過傳入單一數值或只包含一個值的陣列，讓震動硬體震動一次：

```js
navigator.vibrate(200);
navigator.vibrate([200]);
```

這兩個範例都會讓裝置震動 200 毫秒。

### 震動模式

整數陣列會描述裝置交替震動與不震動的期間。陣列中的每個值都會被轉換為整數，並依序解讀為裝置應震動的毫秒數與應停止震動的毫秒數。例如：

```js
navigator.vibrate([200, 100, 200]);
```

這會讓裝置震動 200 毫秒，暫停 100 毫秒，然後再震動 200 毫秒。

你可以指定任意多組震動／暫停的配對，陣列的項目數可以是偶數也可以是奇數。值得注意的是，陣列的最後一項不一定需要是暫停，因為每段震動時間結束後會自動停止。

### 取消目前震動

呼叫 {{DOMxRef("Navigator.vibrate()")}} 並傳入 `0`、空陣列或僅包含零的陣列，即可取消目前正在進行的震動模式。

### 持續震動

你可以透過基本的 `setInterval` 與 `clearInterval` 操作來建立持續的震動效果：

```js
let vibrateInterval;

// 啟動震動，傳入持續時間
function startVibrate(duration) {
  navigator.vibrate(duration);
}

// 停止震動
function stopVibrate() {
  // 清除 interval 並停止持續震動
  if (vibrateInterval) clearInterval(vibrateInterval);
  navigator.vibrate(0);
}

// 以指定的持續時間與間隔啟動持續震動
// 假設傳入的是數字
function startPersistentVibrate(duration, interval) {
  vibrateInterval = setInterval(() => {
    startVibrate(duration);
  }, interval);
}
```

當然，以上範例未涵蓋使用陣列模式的情況。若要使用陣列建立持續震動效果，則需計算整個陣列數值的總和，並以該總和（加上一些延遲時間）為基礎來建立間隔。

## 介面

### 延伸至其他介面

- {{domxref("Navigator.vibrate()")}}
  - : 在支援的裝置上觸發震動。不支援時不會執行任何操作。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{DOMxRef("Navigator.vibrate()")}}
