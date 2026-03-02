---
title: TCP handshake (TCP ハンドシェイク)
slug: Glossary/TCP_handshake
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{GlossarySidebar}}

{{glossary('TCP','TCP (Transmission Control Protocol)')}} は、IP ネットワーク上で TCP/IP 接続を設定するために、 **3 ウェイ・ハンドシェイク**（別名 TCP ハンドシェイク、3 メッセージハンドシェイク、 SYN-SYN-ACK）を使用します。

TCP セッションをネゴシエートして TCP セッションを開始するために TCP によって送信される 3 つのメッセージは、それぞれ SYN、_SYN-ACK_、ACK と呼ばれており、それぞれ **SYN**chronize, **SYN**chronize-**ACK**nowledgement, **ACK**nowledge を表します。 HTTP ブラウザーのリクエストなどのデータを送信する前に互いに情報を双方向に渡したい 2 台のコンピューターが、接続の引数をネゴシエートすることができるように、３つのメッセージの仕組みが設計されています。

ホスト（一般的にはブラウザー）は、 TCP SYNchronize パケットをサーバーに送信します。サーバーは SYN を受信し、 SYNchronize-ACKnowledgement を返送します。ホストはサーバーの SYN-ACK を受信し、ACKnowledge を送信します。サーバーは ACK を受信し、 TCP ソケット接続が確立されます。

このハンドシェイク手順は、安全な接続を作成する際に、{{glossary('DNS', 'DNS ルックアップ')}}の後、および {{glossary('TLS')}} ハンドシェイクの前に実行されます。接続は 4 度目のハンドシェイクを通じて、接続の各終端で独立して終了させることができます。

## 関連情報

- [トランスポート層セキュリティ (TLS) プロトコル](/ja/docs/Web/Security/Defenses/Transport_Layer_Security)
- {{Glossary("HTTPS")}}
- [トランスポート層セキュリティ](https://ja.wikipedia.org/wiki/Transport_Layer_Security)（ウィキペディア）
