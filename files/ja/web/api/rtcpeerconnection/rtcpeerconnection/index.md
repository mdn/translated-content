---
title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
---

{{APIRef("WebRTC")}}

**`RTCPeerConnection()`** コンストラクターは、ローカル端末とリモート端末間の接続を表す新しく作成された {{domxref("RTCPeerConnection")}} を返します。

## 構文

```js
new RTCPeerConnection();
new RTCPeerConnection(configuration);
```

### 引数

- `configuration` {{optional_inline}}

  - : 新しい接続を構成するためのオプションを提供するオブジェクトです。

    - `bundlePolicy` {{optional_inline}}

      - : リモートの相手が [SDP BUNDLE 規格](https://webrtcstandards.info/sdp-bundle/)に対応していない場合に、候補の交渉を処理する方法を指定します。
        リモートのエンドポイントが BUNDLE に対応している場合、使用したポリシーに関わら ず、交渉の完了時にすべてのメディアトラックとデータチャネルが 1 つのトランスポートにバンドルされ、最初に作成された余分なトランスポートはその時点で閉じられます。

        技術的には、 BUNDLE は 2 つのピア間のすべてのメディアフローを単一の **5 タプル**に流すことができます。
        つまり、一方のピアの単一の IP とポートから、もう一方のピアの単一の IP とポートへ、同じトランスポートプロトコルを使用して流れます。

        これは以下の文字列値のいずれかでなければならず、そうでない場合は `balanced` とみなされます。

        - `balanced`
          - : ICE エージェントは、最初に追加されたコンテンツの種類（音声、映像、データチャネル）ごとに 1 つの {{domxref("RTCDtlsTransport")}} を作成します。
            リモートエンドポイントがBUNDLEに対応していない場合、これらの DTLS トランスポートのそれぞれは、 1 つの種類のデータに対するすべての通信を処理します。
        - `max-compat`
          - : ICE エージェントは、最初にメディアトラックごとに 1 つの {{domxref("RTCDtlsTransport")}} を作成し、データチャンネル用に別のものを作成します。
            リモートエンドポイントが BUNDLE に対応していない場合、すべてはこれらの別々の DTLS トランスポート上で交渉されます。
        - `max-bundle`
          - : ICE エージェントは最初、 {{domxref("RTCDtlsTransport")}} のすべてのデータを運ぶために、単一の {{DOMxRef("RTCPeerConnection")}} のみを作成します。
            リモートエンドポイントが BUNDLE に対応していない場合、 1 つのトラックのみが交渉され、残りは無視されます。

    - `certificates` {{optional_inline}}

      - : 接続が認証に使用する {{domxref("RTCCertificate")}} 型のオブジェクトの {{jsxref("Array")}} です。
        このプロパティが指定されていない場合、資格情報のセットは各 {{domxref("RTCPeerConnection")}} インスタンスに対して自動的に生成されます。
        1 つの接続で使用される資格情報は 1 つだけですが、複数のアルゴリズムに資格情報を提供することで、状況によっては接続に成功する確率が向上する場合があります。
        詳しくは、[資格情報の使用](#資格情報の使用)を参照してください。

        > **メモ:** この構成オプションは、最初に指定した後は変更できません。いったん資格情報が設定されると、今後 {{domxref("RTCPeerConnection.setConfiguration()")}} を呼び出す際には、このプロパティは無視されます。

    - `iceCandidatePoolSize` {{optional_inline}}

      - : 先読みされる ICE 候補プールのサイズを指定する、符号なし 16 ビット整数値です。
        既定値は 0 （候補の先読みをしない）です。
        接続を試みる前に ICE エージェントに ICE 候補のフェッチを開始させ、 {{domxref("RTCPeerConnection.setLocalDescription()")}} が呼ばれたときにすでに検査できるようにすると、よりすばやく接続できるようになる場合があります。

        > **メモ:** ICE 候補者プールのサイズを変更すると、ICE の収集が開始されるきっかけとなる場合があります。

    - `iceServers` {{optional_inline}}
      - : ICE エージェントが使用するサーバーを記述した {{domxref("RTCIceServer")}} オブジェクトの配列です。
        これらは通常、 STUN サーバーや TURN サーバーです。
        これが指定されていない場合、 STUN や TURN サーバーがない状態で接続が試みられ、ローカルピアーに接続が制限されます。
    - `iceTransportPolicy` {{optional_inline}}

      - : 現在の ICE トランスポートポリシー。
        ポリシーが指定されていない場合、既定で `all` とみなされ、すべての候補が考慮されるようになります。
        指定できる値は次のとおりです。

        - `"all"`
          - : ICE の候補はすべて考慮されます。
        - `"public"` {{deprecated_inline}}
          - : 公開 IP アドレスを持つ ICE の候補のみが考慮されます。_仕様書の 2016 年 5 月 13 日の草稿から削除されました。_
        - `"relay"`
          - : STUN や TURN サーバーを経由しているなど、 IP アドレスが中継されている ICE の候補のみが考慮されます。

    - `peerIdentity` {{optional_inline}}
      - : 文字列で、 {{domxref("RTCPeerConnection")}} のターゲットピア ID を指定します。
        この値が設定されている場合（既定値は `null`）、 `RTCPeerConnection` は与えられた名前での認証に成功しない限り、リモートピアに接続しないようにします。
    - `rtcpMuxPolicy` {{optional_inline}}

      - : 非多重 RTCP に対応するために、 ICE の候補を収集する際に使用する RTCP mux ポリシー。指定可能な値は以下のとおりです。

        - `negotiate`
          - : ICE エージェントに {{Glossary("RTP")}} と {{Glossary("RTCP")}} 候補の両方を収集するように指示します。
            リモートピアが RTCP を多重化できる場合、 RTCP 候補は、対応する RTP 候補の上に多重化されます。
            そうでない場合、 RTP と RTCP の両方の候補が別々に返されます。
        - `require`
          - : ICE エージェントに、 RTP のみの ICE 候補を収集し、その上に RTCP を多重化するように指示します。
            リモートピアーが RTCP の多重化に対応していない場合、セッション交渉は失敗します。
            これは既定値です。

### 返値

新しく作成された {{domxref("RTCPeerConnection")}} オブジェクトで、 `configuration` が指定されていればその通りに設定され、そうでなければ適切な基本の既定値に設定されます。

### 資格情報の使用

`RTCPeerConnection` が自動的に資格情報を生成するのではなく、 {{domxref("RTCPeerConnection")}} が使用するために独自に提供したい場合は、静的な {{domxref("RTCPeerConnection.generateCertificate()")}} 関数を呼び出すことによって行うことができます。

`certificates` プロパティの値は、一度指定すると変更することができません。もし、接続の {{domxref("RTCPeerConnection.setConfiguration", "setConfiguration()")}} の呼び出しに渡された設定に含まれていたとしても、無視されます。

この属性は複数の資格情報の提供に対応しています。それは、与えられた DTLS 接続が 1 つの資格情報のみを使用したとしても、複数の資格情報を提供することで複数の暗号化アルゴリズムに対応することができるからです。 `RTCPeerConnection` の実装は、DTLS ハンドシェイク中に決定された、自身とリモートピアーが対応するアルゴリズムに基づいて、使用する資格情報を選択することになります。

資格情報を提供しない場合、新しい資格情報が自動的に生成されます。自分で資格情報を用意することの明らかな利点は、 ID キーの継続性です。次回以降の呼び出しに同じ資格情報を使用すると、リモートピアーは同じ呼び出し元であることを指示することができます。また、新しい鍵を生成するコストもかかりません。

**<<<--- add link to information about identity --->>>**

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [シグナリングとビデオ通話](/ja/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC の構造の概要](/ja/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC セッションの寿命](/ja/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
