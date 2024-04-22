---
title: WebSocket
slug: Web/API/WebSocket
---

{{ SeeCompatTable() }}

`WebSocket` 物件提供了建立、管理 [WebSocket](/zh_tw/WebSockets) 伺服器連線的 API，它也有在連線中傳送、接收資料的能力。

## 方法一覽

| `void close(in optional unsigned long code, in optional DOMString reason);` |
| --------------------------------------------------------------------------- |
| `void send(in DOMString data);`                                             |

## 屬性

| 屬性             | 形態                                      | 描述                                                                                                                                                                        |
| ---------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `binaryType`     | {{ DOMXref("DOMString") }}                | 表示連線傳輸的二進制資料形態的字串，若使用 {{ domxref("Blob") }} 物件則為 "blob"，使用 [`ArrayBuffer`](/zh_tw/JavaScript_typed_arrays/ArrayBuffer) 物件則為 "arraybuffer"。 |
| `bufferedAmount` | [`unsigned long`](/zh-TW/unsigned_long)   | 呼叫 [`send()`](#send) 隊列但尚未傳輸至網路上資料的位元數。連線關閉時此值不會重設為零。連續呼叫 [`send()`](#send) 會讓此值不斷上升。**唯讀**                                |
| `extensions`     | {{ DOMXref("DOMString") }}                | 伺服器選擇的擴展。目前僅有空字串或表示資料經過壓縮的 "deflate-stream"。**唯讀**                                                                                             |
| `onclose`        | {{ domxref("EventListener") }}            | 當 WebSocket 連線的 `readyState` 切換至 `CLOSED` 時呼叫的事件監聽器。監聽器接收命名為 "close" 的 [`CloseEvent`](/zh_tw/WebSockets/WebSockets_reference/CloseEvent)。        |
| `onerror`        | {{ domxref("EventListener") }}            | 當錯誤發生時呼叫的事件監聽器。事件為命名 "error" 的簡單事件。                                                                                                               |
| `onmessage`      | {{ domxref("EventListener") }}            | 當瀏覽器接收伺服器的訊息時呼叫的事件監聽器。監聽器接收命名為 "message" 的 [`MessageEvent`](/zh_tw/WebSockets/WebSockets_reference/MessageEvent)。                           |
| `onopen`         | {{ domxref("EventListener") }}            | 當 WebSocket 連線的 `readyState` 切換至 `OPEN` 時呼叫的事件監聽器，表示連線已準備傳送、接收資料。事件為命名 "open" 的簡單事件。                                             |
| `protocol`       | {{ DOMXref("DOMString") }}                | 伺服器選擇的子協定，這是建立 WebSocket 物件時 `protocols` 參數裡的其中一個字串。                                                                                            |
| `readyState`     | [`unsigned short`](/zh-TW/unsigned_short) | 連線的目前狀態，是就緒狀態常數的其中一個。**唯讀**                                                                                                                          |
| `url`            | {{ DOMXref("DOMString") }}                | 建構方法解析出來的 URL，總是絕對 URL。**唯讀**                                                                                                                              |

## 常數

### 就緒狀態常數

`readyState` 屬性使用以下常數描述 WebSocket 的連線狀態。

| 常數         | 值  | 描述                       |
| ------------ | --- | -------------------------- |
| `CONNECTING` | `0` | 連線尚未打開。             |
| `OPEN`       | `1` | 連線已打開，可以進行通訊。 |
| `CLOSING`    | `2` | 連線正在進行關閉程序。     |
| `CLOSED`     | `3` | 連線已關閉／連線不能打開。 |

## 方法

### close()

關閉 WebSocket 連線／連線嘗試，若連線已為 `CLOSED`，此方法沒有作用。

```plain
void close(
  in optional unsigned short code,
  in optional DOMString reason
);
```

#### 參數

- `code` {{ optional_inline() }}
  - : 表示狀態代碼，狀態代碼用以解釋連線關閉的原因。若未指定參數，預設值為 1000（表示正常的「事務完結（transaction complete）」關閉）。請參考 [`CloseEvent`](/zh_tw/WebSockets/WebSockets_reference/CloseEvent) 頁面的[狀態代碼列表](/zh_tw/WebSockets/WebSockets_reference/CloseEvent#.e7.8b.80.e6.85.8b.e4.bb.a3.e7.a2.bc)，有所有的合法值。
- `reason` {{ optional_inline() }}
  - : 解釋連線關閉原因的人類可讀字串，字串必不可大於 123 個 UTF-8 字符。

#### 可丟例外

- `INVALID_ACCESS_ERR`
  - : 指定不合法的 `code`。
- `SYNTAX_ERR`
  - : `reason` 字串太長或是含有未配對的代理對。

### send()

透過 WebSocket 連線傳輸資料至伺服器。

```plain
void send(
  in DOMString data
);

void send(
  in ArrayBuffer data
);

void send(
  in Blob data
);
```

#### 參數

- `data`
  - : 要傳送至伺服器的字串。

#### 可丟例外

- `INVALID_STATE_ERR`
  - : 目前連線不為 `OPEN`。
- `SYNTAX_ERR`
  - : 資料為帶有未配對代理對的字串。

#### 註釋

> **備註：** Gecko `send()` 方法的實作與 Gecko 6.0 的規範有差別。Gecko 回傳一個 `boolean` 以表示連線是否仍處於開啟狀態（且資料成功隊列／傳輸）。另外，此時此刻，Gecko 不支援 [`ArrayBuffer`](/zh_tw/JavaScript_typed_arrays/ArrayBuffer) 或 {{ domxref("Blob") }} 作為資料形態。

## 參見

- [製作 WebSocket 客戶端應用程式](/zh_tw/WebSockets/Writing_WebSocket_client_applications)
- [HTML5: WebSockets](http://dev.w3.org/html5/websockets/)

## 瀏覽器兼容

{{Compat}}
