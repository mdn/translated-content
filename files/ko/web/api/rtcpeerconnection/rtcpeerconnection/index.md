---
title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
tags:
  - API
  - Constructor
  - RTCPeerConnection
  - Reference
  - WebRTC
browser-compat: api.RTCPeerConnection.RTCPeerConnection
translation_of: Web/API/RTCPeerConnection/RTCPeerConnection
---
{{APIRef("WebRTC")}}

**`RTCPeerConnection()`** 생성자는 로컬 기기와 원격 피어 간의 연결을 나타내는 {{domxref("RTCPeerConnection")}} 객체를 새로 만들어 반환합니다.

## 구문

```js
pc = new RTCPeerConnection([configuration]);
```

### 매개변수

- `configuration` {{optional_inline}}
  - : 새로운 연결을 설정하는 옵션 객체입니다.
    - `bundlePolicy` {{optional_inline}}
      - : 원격 피어가 [SDP BUNDLE 표준](https://webrtcstandards.info/sdp-bundle/)과 호환되지 않을 때 어떻게 candidate의 네고시에이션을 처리 할 것인지를 정의합니다.

        가능한 값은 다음 열거형 값 중 하나로, 기본 값은 `balanced`입니다.
        - `balanced`
          - : The ICE agent initially creates one {{domxref("RTCDtlsTransport")}}
            for each type of content added: audio, video, and data channels.
            If the remote endpoint is not BUNDLE-aware,
            then each of these DTLS transports handles all the communication for one type of data.
        - `max-compat`
          - : The ICE agent initially creates one {{domxref("RTCDtlsTransport")}} per media track
            and a separate one for data channels.
            If the remote endpoint is not BUNDLE-aware,
            everything is negotiated on these separate DTLS transports.
        - `max-bundle`
          - : The ICE agent initially creates only a single {{domxref("RTCDtlsTransport")}}
            to carry all of the {{DOMxRef("RTCPeerConnection")}}'s data.
            If the remote endpoint is not BUNDLE-aware,
            then only a single track will be negotiated and the rest ignored.
    - `certificates` {{optional_inline}}
      - : 연결 인증에 사용할 {{domxref("RTCCertificate")}}를 담은 {{jsxref("Array")}}입니다. 지정하지 않을 경우 {{domxref("RTCPeerConnection")}} 인스턴스 각각에 대해 인증서가 자동으로 생성됩니다. 주어진 연결에 대해 하나의 인증서만 사용되지만, 다양한 알고리즘을 사용하는 여러 인증서를 제공하면 특정 상황에서의 연결 성공률을 높일 수 있습니다. 아래의 [인증서 사용하기](#인증서_사용하기)에서 더 많은 정보를 확인하세요.

        > **참고:** 이 옵션은 처음 지정한 이후 변경할 수 없습니다. 인증서를 설정한 후엔 모든 {{domxref("RTCPeerConnection.setConfiguration()")}}이 무시됩니다.
    - `iceCandidatePoolSize` {{optional_inline}}
      - : ICE candidate 풀의 크기를 지정하는 부호 없는 16비트 정수 값입니다. 기본 값은 0으로 candidate 를 미리 가져오지 않을 것임을 나타냅니다. 연결 시도 전부터 ICE 에이전트가 ICE candidate를 가져올 수 있도록 허용하면 {{domxref("RTCPeerConnection.setLocalDescription()")}} 호출 시점에 이미 candidate를 조사할 수 있으므로 특정 상황에서 연결 속도가 빨라질 수 있습니다.

        > **참고:** ICE candidate 풀의 크기를 변경하면 ICE 수집이 시작할 수 있습니다.
    - `iceServers` {{optional_inline}}
      - : ICE 에이전트가 사용할 수 있는 서버(보통 STUN/TURN)를 설명하는 {{domxref("RTCIceServer")}} 객체의 배열입니다. 지정하지 않을 경우 STUN/TURN 서버를 사용하지 않고 연결 시도를 하므로 연결이 로컬 피어로 제한됩니다.
    - `iceTransportPolicy` {{optional_inline}}
      - : 현재 ICE 트랜스포트 정책입니다. 지정하지 않을 경우 기본 값은 `all`로, 모든 candidate를 고려합니다. 가능한 값은 다음과 같습니다.
        - `"all"`
          - : 모든 ICE candidate를 고려합니다.
        - `"relay"`
          - : IP 주소가 중개 중인, 예컨대 STUN 또는 TURN 서버를 통해 전송 중인 ICE candidate만 고려합니다.
    - `peerIdentity` {{optional_inline}}
      - : {{domxref("RTCPeerConnection")}}의 대상 피어 아이덴티티를 나타내는 {{domxref("DOMString")}}입니다. 기본 값은 `null`입니다. 이 값을 지정한 경우 `RTCPeerConnection`은 주어진 이름으로 인증에 성공해야 원격 피어로 연결을 시도합니다.
    - `rtcpMuxPolicy` {{optional_inline}}
      - : non-multiplexed RTCP를 지원하기 위해 ICE 수집 중 사용할 RTCP mux 정책입니다. 가능한 값은 다음과 같습니다.
        - `negotiate`
          - : Instructs the ICE agent to gather both {{Glossary("RTP")}} and {{Glossary("RTCP")}} candidates.
            If the remote peer can multiplex RTCP,
            then RTCP candidates are multiplexed atop the corresponding RTP candidates.
            Otherwise, both the RTP and RTCP candidates are returned, separately.
        - `require`
          - : Tells the ICE agent to gather ICE candidates for only RTP,
            and to multiplex RTCP atop them.
            If the remote peer doesn't support RTCP multiplexing,
            then session negotiation fails.
            This is the default value.

### 반환 값

`configuration`이 지정된 경우 그에 맞게 구성한, 그렇지 않은 경우 기본값 구성을 이용한 {{domxref("RTCPeerConnection")}} 객체입니다.

### 인증서 사용하기

When you wish to provide your own certificates for use by an
{{domxref("RTCPeerConnection")}} instead of having the `RTCPeerConnection`
generate them automatically, you do so by calling the static
{{domxref("RTCPeerConnection.generateCertificate()")}} function.

The `certificates` property's value cannot be changed once it's first
specified. If it's included in the configuration passed into a call to a connection's
{{domxref("RTCPeerConnection.setConfiguration", "setConfiguration()")}}, it is ignored.

This attribute supports providing multiple certificates because even though a given
DTLS connection uses only one certificate, providing multiple certificates allows
support for multiple encryption algorithms. The implementation of
`RTCPeerConnection` will choose which certificate to use based on the
algorithms it and the remote peer support, as determined during DTLS handshake.

If you don't provide certificates, new ones are generated automatically. One obvious
benefit to providing your own is identity key continuity—if you use the same certificate
for subsequent calls, the remote peer can tell you're the same caller. This also avoids
the cost of generating new keys.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC architecture overview](/en-US/docs/Web/API/WebRTC_API/Architecture)
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
