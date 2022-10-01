---
title: NetworkInformation.onchange
slug: Web/API/NetworkInformation/change_event
original_slug: Web/API/NetworkInformation/onchange
---

{{apiref("Network Information API")}}{{SeeCompatTable}}

**`NetworkInformation.onchange`** イベントハンドラは、接続情報が変化したときに発火し、{{domxref("NetworkInformation")}} オブジェクトが {{event("change")}} を受け取るコードを含みます。

## 構文

```
netInfo.onchange = function() { ... }
```

## 例

```js
// 接続型の取得
var type = navigator.connection.type;

function changeHandler(e) {
   // ここで接続型の変更を操作する
}

// change イベントの登録:
navigator.connection.onchange = changeHandler;

// Another way: navigator.connection.addEventListener('change', changeHandler);
```

## 仕様

| 仕様                                             | ステータス                                   | コメント   |
| ------------------------------------------------ | -------------------------------------------- | ---------- |
| {{SpecName('Network Information')}} | {{Spec2('Network Information')}} | 最初の定義 |

## ブラウザ実装状況

{{Compat("api.NetworkInformation.onchange")}}
