---
title: UDP (User Datagram Protocol)
slug: Glossary/UDP
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

**UDP** (User Datagram Protocol、ユーザーデータグラムプロトコル) は、セキュリティや信頼性よりも伝送速度と効率が重要な場合に、データを送信するために {{glossary("IPv6","IP")}} と一緒に使用される長年利用されている{{glossary("protocol", "プロトコル")}} です。

UDP は、最小限のプロトコルメカニズムを備えたシンプルな[コネクションレス通信](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%8D%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%AC%E3%82%B9%E5%9E%8B%E9%80%9A%E4%BF%A1)モデルを採用しています。 UDP はデータの整合性を保証する[チェックサム](https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%82%B5%E3%83%A0)と、データグラムの送信元と送信先の異なる機能へのアドレス指定に[ポート番号](<https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%BC%E3%83%88_(%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF)>)を使用します。[ハンドシェイク](https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%B3%E3%83%89%E3%82%B7%E3%82%A7%E3%82%A4%E3%82%AF)は行われないため、ユーザープログラムは基盤となるネットワークの信頼性の低さにさらされます。つまり、配信、順序付け、重複保護の保証はありません。ネットワークインターフェイスレベルでエラー訂正機能が必要な場合、アプリケーションは、この目的のために設計された[Transmission Control Protocol、伝送制御プロトコル](https://ja.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP) または [Stream Control Transmission Protocol、ストリーム制御伝送プロトコル](https://ja.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) (SCTP) を使用できます。

UDP は、エラーチェックと訂正が不要、またはアプリケーション内で実行される用途に適しています。 UDP は、[プロトコルスタック](https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AD%E3%83%88%E3%82%B3%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF)におけるそのような処理のオーバーヘッドを回避します。時間的制約のあるアプリケーションでは、パケットを破棄する方が[再送](https://ja.wikipedia.org/wiki/%E5%86%8D%E9%80%81)によって遅延されたパケットを待つよりも望ましいため、 UDP がよく使用されます。[リアルタイムシステム](https://ja.wikipedia.org/wiki/%E3%83%AA%E3%82%A2%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)では、再送は選択肢にならない場合があります。

## 関連情報

- Wikipedia の [User Datagram Protocol、ユーザーデータグラムプロトコル](https://ja.wikipedia.org/wiki/User_Datagram_Protocol)
- [仕様](https://datatracker.ietf.org/doc/html/rfc768)
