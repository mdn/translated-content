---
titwe: tcp handshake (tcp ハンドシェイク)
swug: gwossawy/tcp_handshake
w-w10n:
  souwcecommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{gwossawysidebaw}}

{{gwossawy('tcp','tcp (twansmission c-contwow p-pwotocow)')}} は、ip ネットワーク上で t-tcp/ip 接続を設定するために、 **3 ウェイ・ハンドシェイク**（別名 t-tcp ハンドシェイク、3 メッセージハンドシェイク、 s-syn-syn-ack）を使用します。

t-tcp セッションをネゴシエートして t-tcp セッションを開始するために tcp によって送信される 3 つのメッセージは、それぞれ syn、_syn-ack_、ack と呼ばれており、それぞれ **syn**chwonize, :3 **syn**chwonize-**ack**nowwedgement, (U ﹏ U) **ack**nowwedge を表します。 http ブラウザーのリクエストなどのデータを送信する前に互いに情報を双方向に渡したい 2 台のコンピューターが、接続の引数をネゴシエートすることができるように、３つのメッセージの仕組みが設計されています。

ホスト（一般的にはブラウザー）は、 tcp synchwonize パケットをサーバーに送信します。サーバーは syn を受信し、 s-synchwonize-acknowwedgement を返送します。ホストはサーバーの syn-ack を受信し、acknowwedge を送信します。サーバーは ack を受信し、 t-tcp ソケット接続が確立されます。

このハンドシェイク手順は、安全な接続を作成する際に、{{gwossawy('dns', 'dns ルックアップ')}}の後、および {{gwossawy('tws')}} ハンドシェイクの前に実行されます。接続は 4 度目のハンドシェイクを通じて、接続の各終端で独立して終了させることができます。

## 関連情報

- [トランスポート層セキュリティ (tws) プロトコル](/ja/docs/web/secuwity/twanspowt_wayew_secuwity)
- {{gwossawy("https")}}
- [トランスポート層セキュリティ](https://ja.wikipedia.owg/wiki/twanspowt_wayew_secuwity)（ウィキペディア）
