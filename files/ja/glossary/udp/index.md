---
title: UDP (User Datagram Protocol)
slug: Glossary/UDP
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

**UDP** (User Datagram Protocol、ユーザーデータグラムプロトコル) は、セキュリティや信頼性よりも伝送速度と効率が重要な場合に、データを送信するために {{glossary("IPv6","IP")}} と一緒に使用される長年利用されている{{glossary("protocol", "プロトコル")}} です。

UDP は、最小限のプロトコルメカニズムを備えたシンプルな[コネクションレス通信](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%8D%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%AC%E3%82%B9%E5%9E%8B%E9%80%9A%E4%BF%A1)モデルを採用しています。 UDP はデータの整合性を保証する[チェックサム](https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%82%B5%E3%83%A0)と、データグラムの送信元と送信先の異なる機能へのアドレス指定に[ポート番号](<https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%BC%E3%83%88_(%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF)>)を使用します。[ハンドシェイク](https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%B3%E3%83%89%E3%82%B7%E3%82%A7%E3%82%A4%E3%82%AF)は行われないため、ユーザープログラムは基盤となるネットワークの信頼性の低さにさらされます。つまり、配信、順序付け、重複保護の保証はありません。ネットワークインターフェイスレベルでエラー訂正機能が必要な場合、アプリケーションは、この目的のために設計された[Transmission Control Protocol、伝送制御プロトコル](https://ja.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP) または [Stream Control Transmission Protocol、ストリーム制御伝送プロトコル](https://ja.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) (SCTP) を使用できます。

UDP is suitable for purposes where error checking and correction are either not necessary or are performed in the application; UDP avoids the overhead of such processing in the [protocol stack](https://en.wikipedia.org/wiki/Protocol_stack). Time-sensitive applications often use UDP because dropping packets is preferable to waiting for packets delayed due to [retransmission](<https://en.wikipedia.org/wiki/Retransmission_(data_networks)>), which may not be an option in a [real-time system](https://en.wikipedia.org/wiki/Real-time_system).

## See also

- [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) on Wikipedia
- [Specification](https://datatracker.ietf.org/doc/html/rfc768)
