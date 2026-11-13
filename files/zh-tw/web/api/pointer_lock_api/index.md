---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
---

{{DefaultAPISidebar("Pointer Lock API")}}{{ SeeCompatTable() }}

**Pointer lock** (之前稱為 Mouse lock) 提供「隨時間經過所產生的滑鼠位移資訊 (即 deltas)」的輸入方法，而不只是滑鼠游標的絕對位置而已。此函式可存取基本的滑鼠位移、將滑鼠事件的目標鎖定至單一元素、讓滑鼠單一方向的位移距離不再受限、將游標移除到視點之外。

若 App 需要大量的滑鼠輸入以控制位移、旋轉物件、更改輸入項，那此 API 就特別有用。另對特別注重視覺效果的 App 尤其必要，如第一人稱視角、3D 視圖、模型建構等。

舉例來說，你可讓消費者不需點擊任何按鈕，只要透過滑鼠即可控制視角。而按鈕可用於其他動作。對於查看地圖、衛星圖像、第一人稱場景類 (如遊戲或虛擬實境影片) 的 App 來說，這種滑鼠輸入方式特別方便易用。

即使滑鼠游標移出瀏覽器或螢幕之外，Pointer lock 還是能讓你存取滑鼠事件。舉例來說，消費者還是可繼續移動滑鼠以旋轉或操作 3D 模型。若沒有 Pointer lock，則只要指標移出瀏覽器或螢幕之外，旋轉或操作隨即停止。遊戲玩家會特別喜歡此功能。他們現在可以隨便亂按按鈕並隨意滑動滑鼠；不再擔心滑鼠游標滑出遊戲區域而點到其他應用程式，結果退出遊戲發生慘案！

## 基本概念

Pointer lock 與 [mouse capture](/zh-TW/docs/Web/API/Element/setCapture) 相關。在拖曳滑鼠時，Mouse capture 可持續向目標元素傳遞事件，且只要放開滑鼠按鈕隨即跟著停止。Pointer lock 與 mouse capture 不同之處在於：

- Pointer lock 屬持久性。除非發生顯式 (Explicit) API 呼叫，或使用者做出特定的釋放手勢，否則 Pointer lock 將不會釋放滑鼠。
- Pointer lock 不侷限於螢幕或瀏覽器的範圍。
- 不論滑鼠按鈕狀態為何，Pointer lock 將持續送出事件。
- Pointer lock 會隱藏游標。

## 範例

下列範例可讓你設定自己網頁上的 Pointer lock。

```js
<button onclick="lockPointer();">Lock it!</button>
<div id="pointer-lock-element"></div>
<script>
// Note: at the time of writing, only Mozilla and WebKit support Pointer Lock.

// The element we'll make fullscreen and pointer locked.
var elem;

document.addEventListener("mousemove", function(e) {
  var movementX = e.movementX       ||
                  e.mozMovementX    ||
                  e.webkitMovementX ||
                  0,
      movementY = e.movementY       ||
                  e.mozMovementY    ||
                  e.webkitMovementY ||
                  0;

  // Print the mouse movement delta values
  console.log("movementX=" + movementX, "movementY=" + movementY);
}, false);

function fullscreenChange() {
  if (document.webkitFullscreenElement === elem ||
      document.mozFullscreenElement === elem ||
      document.mozFullScreenElement === elem) { // Older API upper case 'S'.
    // Element is fullscreen, now we can request pointer lock
    elem.requestPointerLock = elem.requestPointerLock    ||
                              elem.mozRequestPointerLock ||
                              elem.webkitRequestPointerLock;
    elem.requestPointerLock();
  }
}

document.addEventListener('fullscreenchange', fullscreenChange, false);
document.addEventListener('mozfullscreenchange', fullscreenChange, false);
document.addEventListener('webkitfullscreenchange', fullscreenChange, false);

function pointerLockChange() {
  if (document.mozPointerLockElement === elem ||
      document.webkitPointerLockElement === elem) {
    console.log("Pointer Lock was successful.");
  } else {
    console.log("Pointer Lock was lost.");
  }
}

document.addEventListener('pointerlockchange', pointerLockChange, false);
document.addEventListener('mozpointerlockchange', pointerLockChange, false);
document.addEventListener('webkitpointerlockchange', pointerLockChange, false);

function pointerLockError() {
  console.log("Error while locking pointer.");
}

document.addEventListener('pointerlockerror', pointerLockError, false);
document.addEventListener('mozpointerlockerror', pointerLockError, false);
document.addEventListener('webkitpointerlockerror', pointerLockError, false);

function lockPointer() {
  elem = document.getElementById("pointer-lock-element");
  // Start by going fullscreen with the element. Current implementations
  // require the element to be in fullscreen before requesting pointer
  // lock--something that will likely change in the future.
  elem.requestFullscreen = elem.requestFullscreen    ||
                           elem.mozRequestFullscreen ||
                           elem.mozRequestFullScreen || // Older API upper case 'S'.
                           elem.webkitRequestFullscreen;
  elem.requestFullscreen();
}
</script>
```

## 函式/屬性概述

Pointer lock API 與 Fullscreen API 類似，可添增 [requestPointerLock](/zh-TW/docs/Web/API/Element/requestPointerLock) 新函式 (目前尚未標準化) 而擴充 DOM 元素。可為下列：

```js
element.webkitRequestPointerLock(); // Chrome
element.mozRequestPointerLock(); // Firefox
element.requestPointerLock(); // Standard
```

目前在建置 [requestPointerLock](/zh-TW/docs/Web/API/Element/requestPointerLock) 時，還是必須緊密結合 [requestFullScreen](/zh-TW/docs/Web/API/Element/requestFullScreen) 與 Fullscreen API。在指標鎖定某一元素之前，必須先進入全螢幕模式。如同上方的 Demo，指標鎖定屬於非同步程序，並透過 [pointerlockchange](/zh-TW/docs/Web/API/GlobalEventHandlers.pointerlockchange) 與 [pointerlockerror](/zh-TW/docs/Web/API/GlobalEventHandlers.pointerlockerror) 事件，指出該請求是否成功。此與 Fullscreen API 的運作方式相同 (使用其 [requestFullScreen](/zh-TW/docs/Web/API/Element/requestFullScreen) 函式，另搭配 [fullscreenchange](/zh-TW/docs/Web/API/GlobalEventHandlers.fullscreenchange) 與 [fullscreenerror](/zh-TW/docs/Web/API/GlobalEventHandlers.fullscreenerror) 事件)。

Pointer lock API 另擴充了 [and \<table>) and provides functionality global to the document (suc">Document](/zh-TW/docs/Web/API/Document) 介面，同時添增了新的屬性與函式。如果目前有鎖定的元素，則新的屬性可存取該所訂元素，並命名為 [pointerLockElement](/zh-TW/docs/Web/API/Document/pointerLockElement) (目前尚未標準化)。[and \<table>) and provides functionality global to the document (suc">Document](/zh-TW/docs/Web/API/Document) 上的新函式則為 [exitPointerLock](/zh-TW/docs/Web/API/Document/exitPointerLock)；顧名思義，此函式可退出 Pointer lock。

[pointerLockElement](/zh-TW/docs/Web/API/Document/pointerLockElement) 屬性可確定指標目前是否鎖定了任何元素 (例如進行 Boolean 檢查)。若確實有鎖定的元素，則可取得參考。以下為此二種用法的範例：

```js
document.pointerLockElement =
  document.pointerLockElement ||
  document.mozPointerLockElement ||
  document.webkitPointerLockElement;

// 1) Used as a boolean check: are we pointer locked?
if (!!document.pointerLockElement) {
  // pointer is locked
} else {
  // pointer is not locked
}

// 2) Used to access the pointer locked element
if (document.pointerLockElement === someElement) {
  // someElement is currently pointer locked
}
```

[Document.exitPointerLock](/zh-TW/docs/Web/API/Document/exitPointerLock) 函式則用以退出 Pointer lock。且和 [requestPointerLock](/zh-TW/docs/Web/API/Element/requestPointerLock) 一樣，[Document.exitPointerLock](/zh-TW/docs/Web/API/Document/exitPointerLock) 是使用 [pointerlockchange](/zh-TW/docs/Web/API/GlobalEventHandlers.pointerlockchange) 與 [pointerlockerror](/zh-TW/docs/Web/API/GlobalEventHandlers.pointerlockerror) 事件，以非同步方式作業：

```js
document.exitPointerLock =
  document.exitPointerLock ||
  document.mozExitPointerLock ||
  document.webkitExitPointerLock;

function pointerLockChange() {
  document.pointerLockElement =
    document.pointerLockElement ||
    document.mozPointerLockElement ||
    document.webkitPointerLockElement;

  if (!!document.pointerLockElement) {
    console.log("Still locked.");
  } else {
    console.log("Exited lock.");
  }
}

document.addEventListener("pointerlockchange", pointerLockChange, false);
document.addEventListener("mozpointerlockchange", pointerLockChange, false);
document.addEventListener("webkitpointerlockchange", pointerLockChange, false);

// Attempt to unlock
document.exitPointerLock();
```

## pointerlockchange 事件

若 Pointer lock 狀態改變，如呼叫 [requestPointerLock](/zh-TW/docs/Web/API/Element/requestPointerLock)、[exitPointerLock](/zh-TW/docs/Web/API/Document/exitPointerLock)，或使用者按下 ESC 鍵等。則 [pointerlockchange](/zh-TW/docs/Web/API/GlobalEventHandlers.pointerlockchange) 事件隨即傳送至 `document`。此簡單事件不包含額外資料。

> [!NOTE]
> 此事件目前在 Firefox 中的前綴為 `mozpointerlockchange`；在 Chrome 中的前綴為 `webkitpointerlockchange`。

## pointerlockerror 事件

當呼叫 [requestPointerLock](/zh-TW/docs/Web/API/Element/requestPointerLock) 或 [exitPointerLock](/zh-TW/docs/Web/API/Document/exitPointerLock) 而發生錯誤時，隨即傳送 [pointerlockerror](/zh-TW/docs/Web/API/GlobalEventHandlers.pointerlockerror) 事件至 `document`。此簡單事件不包含額外資料。

> [!NOTE]
> 此事件在 Firefox 中的前綴為 `mozpointerlockerror`；在 Chrome 中的前綴為 `webkitpointerlockerror`。

## 擴充至滑鼠事件

Pointer lock API 可透過位移屬性而擴充標準的 [MouseEvent](/zh-TW/docs/Web/API/MouseEvent) 介面。

```plain
partial interface MouseEvent {
    readonly attribute long movementX;
    readonly attribute long movementY;
};
```

> [!NOTE]
> 位移屬性目前在 Firefox 中的前綴為 `.mozMovementX` 與 `.mozMovementY`；在 Chrome 中的前綴為`.webkitMovementX` 與 `.webkitMovementY`。

滑鼠事件的二個新參數 (即 [movementX](/zh-TW/docs/Web/API/MouseEvent/movementX) 與 [movementY](/zh-TW/docs/Web/API/MouseEvent/movementY)) 將提供滑鼠位置的變化情形。此二項參數的值，等於 [MouseEvent](/zh-TW/docs/Web/API/MouseEvent) 屬性值 (即 [screenX](/zh-TW/docs/Web/API/MouseEvent/screenX) 與 [screenY](/zh-TW/docs/Web/API/MouseEvent/screenY)) 之間的變化；而 [MouseEvent](/zh-TW/docs/Web/API/MouseEvent) 屬性另儲存於二項連續的 [mousemove](/zh-TW/docs/Web/API/GlobalEventHandlers.mousemove) 事件 (即 eNow 與 ePrevious) 之內。換句話說，Pointer lock 參數 `movementX = eNow.screenX - ePrevious.screenX`。

### 鎖定狀態

在啟動 Pointer lock 之後，標準的 [MouseEvent](/zh-TW/docs/Web/API/MouseEvent) 屬性 [clientX](/zh-TW/docs/Web/API/MouseEvent/clientX)、[clientY](/zh-TW/docs/Web/API/MouseEvent/clientY)、[screenX](/zh-TW/docs/Web/API/MouseEvent/screenX)、[screenY](/zh-TW/docs/Web/API/MouseEvent/screenY) 均維持不變，如同滑鼠沒有移動。[movementX](/zh-TW/docs/Web/API/MouseEvent/movementX) 與 [movementY](/zh-TW/docs/Web/API/MouseEvent/movementY) 屬性將持續提供滑鼠的位置變化。如果滑鼠朝單一方向持續移動，[movementX](/zh-TW/docs/Web/API/MouseEvent/movementX) 與 [movementY](/zh-TW/docs/Web/API/MouseEvent/movementY) 的值也就不受限。此時「滑鼠游標」的概念不存在，游標無法移出視窗之外，也不會受限於螢幕邊界。

### 未鎖定狀態

無論滑鼠的鎖定狀態為何，[movementX](/zh-TW/docs/Web/API/MouseEvent/movementX) 與 [movementY](/zh-TW/docs/Web/API/MouseEvent/movementY) 參數均保持有效；另為了方便起見，甚至在未鎖定狀態下仍可保持有效。

在解鎖滑鼠之後，系統游標可退出並重新進入瀏覽器視窗，且 [movementX](/zh-TW/docs/Web/API/MouseEvent/movementX) 與 [movementY](/zh-TW/docs/Web/API/MouseEvent/movementY) 此時可能設定為零。

## iframe 限制

Pointer lock 一次僅能鎖定一組 iframe。在鎖定一組 iframe 之後，就無法鎖定另一組 iframe 並轉移目標至該 iframe 之上；Pointer lock 將發生錯誤。為擺脫此限制，必須先將鎖定的 iframe 解鎖，再鎖定另一組 iframe。

由於 iframes 是根據預設值運作，因此預設為「沙箱式 (sandboxed)」的 iframes 將阻擋 Pointer lock。為擺脫此限制，Chrome 應該很快就會推出 `<iframe sandbox="allow-pointer-lock">` 的「屬性/值」整合形式。

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 另可參閱

- {{domxref("MouseEvent")}}
