---
title: WebSocket.readyState
slug: Web/API/WebSocket/readyState
tags:
  - API
  - プロパティ
  - リファレンス
  - Web API
  - WebSocket
browser-compat: api.WebSocket.readyState
translation_of: Web/API/WebSocket/readyState
---
{{APIRef("Web Sockets API")}}

**`WebSocket.readyState`** は読み取り専用のプロパティで、 {{domxref("WebSocket")}} の「現在」の接続状態を返します。

## 値

以下のいずれかの `unsigned short` 値です。

| 値 | 状態        | 説明                                              |
| ----- | ------------ | -------------------------------------------------------- |
| `0`   | `CONNECTING` | ソケットの作成が完了した。コネクションは開かれていない。 |
| `1`   | `OPEN`       | コネクションが開かれ、通信の準備ができている。           |
| `2`   | `CLOSING`    | コネクションが閉じる過程にある。                         |
| `3`   | `CLOSED`     | コネクションが閉じられたか、開くことができなかった。     |

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
