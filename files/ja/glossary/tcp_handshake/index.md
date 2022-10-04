---
title: TCPハンドシェイク
slug: Glossary/TCP_handshake
---

{{glossary('Transmission Control Protocol (TCP)','TCP (トランスミッションコントロールプロトコル)')}}は、IP ネットワーク上の 2 台のコンピューター間でコネクション型通信を行うためのトランスポート層におけるホスト間プロトコルです。 TCP は、IP ネットワーク上で TCP/IP 接続を設定するために、**3 ウェイ・ハンドシェイク**(別名 TCP ハンドシェイク、3 メッセージハンドシェイク、および、もしくはまたは SYN-SYN-ACK)を使用します。TCP セッションをネゴシエートして TCP セッションを開始するために TCP によって送信される 3 つのメッセージは、それぞれ SYN、_SYN-ACK_ **/ SYN**chronize のための ACK、**SYN**chronize-**ACK**nowledgement / **ACK**nowledge という愛称で呼ばれています。HTTP ブラウザーのリクエストなどのデータを送信する前に互いに情報を双方向に渡したい 2 台のコンピューターが、接続のパラメータをネゴシエートすることができるように、３つのメッセージの仕組みが設計されています。

ホスト（一般的にはブラウザー）は、TCP SYNchronize パケットをサーバーに送信します。サーバーは SYN を受信し、SYNchronize-ACKnowledgement を返送します。ホストはサーバーの SYN-ACK を受信し、ACKnowledge を送信します。サーバーは ACK を受信し、TCP ソケット接続が確立されます。

このハンドシェイクステップは、安全な接続を作成する際に、{{glossary('DNS', 'DNS ルックアップ')}}の後、および{{glossary('TLS')}} ハンドシェイクの前に実行されます。接続は 4 度目のハンドシェイクを通じて、接続の各終端で独立して終了させることができます。

## 関連情報

- [トランスポート層セキュリティ(TLS)プロトコル](/ja/docs/Web/Security/Transport_Layer_Security)
- {{Glossary("HTTPS")}}
- Wikipedia 上の[トランスポート層セキュリティ](https://ja.wikipedia.org/wiki/Transport_Layer_Security)
