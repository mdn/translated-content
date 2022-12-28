---
title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
---

{{APIRef("WebRTC")}}

**`RTCPeerConnection()`** 构造函数返回一个新建的 {{domxref("RTCPeerConnection")}} 实例，它代表了本地端机器与远端机器的一条连接。

## 语法

```js-nolint
new RTCPeerConnection()
new RTCPeerConnection(configuration)
```

### 参数

- `configuration` {{optional_inline}}

  - : An object providing options to configure the new connection:

    - `bundlePolicy` {{optional_inline}}

      - : Specifies how to handle negotiation of candidates
        when the remote peer is not compatible
        with the [SDP BUNDLE standard](https://webrtcstandards.info/sdp-bundle/).
        If the remote endpoint is BUNDLE-aware,
        all media tracks and data channels are bundled onto a single transport at the completion of negotiation,
        regardless of policy used,
        and any superfluous transports that were created initially are closed at that point.

        In technical terms,
        a BUNDLE lets all media flow between two peers flow across a single **5-tuple**;
        that is, from a single IP and port on one peer to a single IP and port on the other peer,
        using the same transport protocol.

        This must be one of the following string values,
        if not `balanced` is assumed:

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

      - : An {{jsxref("Array")}} of objects of type {{domxref("RTCCertificate")}}
        which are used by the connection for authentication.
        If this property isn't specified,
        a set of certificates is generated automatically for each {{domxref("RTCPeerConnection")}} instance.
        Although only one certificate is used by a given connection,
        providing certificates for multiple algorithms may improve the odds of successfully connecting in some circumstances.
        See [Using certificates](#using_certificates) for further information.

        > **Note:** This configuration option cannot be changed after it is first specified; once the certificates have been set, this property is ignored in future calls to {{domxref("RTCPeerConnection.setConfiguration()")}}.

    - `iceCandidatePoolSize` {{optional_inline}}

      - : An unsigned 16-bit integer value which specifies the size of the prefetched ICE candidate pool.
        The default value is 0 (meaning no candidate prefetching will occur).
        You may find in some cases that connections can be established more quickly
        by allowing the ICE agent to start fetching ICE candidates
        before you start trying to connect,
        so that they're already available for inspection
        when {{domxref("RTCPeerConnection.setLocalDescription()")}} is called.

        > **Note:** Changing the size of the ICE candidate pool may trigger the beginning of ICE gathering.

    - `iceServers` {{optional_inline}}
      - : An array of {{domxref("RTCIceServer")}} objects,
        each describing one server which may be used by the ICE agent;
        these are typically STUN and/or TURN servers.
        If this isn't specified,
        the connection attempt will be made with no STUN or TURN server available,
        which limits the connection to local peers.
    - `iceTransportPolicy` {{optional_inline}}

      - : The current ICE transport policy;
        if the policy isn't specified, `all` is assumed by default,
        allowing all candidates to be considered.
        Possible values are:

        - `"all"`
          - : All ICE candidates will be considered.
        - `"public"` {{deprecated_inline}}
          - : Only ICE candidates with public IP addresses will be considered. _Removed from the specification's May 13, 2016 working draft._
        - `"relay"`
          - : Only ICE candidates whose IP addresses are being relayed, such as those being passed through a STUN or TURN server, will be considered.

    - `peerIdentity` {{optional_inline}}
      - : A string
        which specifies the target peer identity for the {{domxref("RTCPeerConnection")}}.
        If this value is set
        (it defaults to `null`),
        the `RTCPeerConnection` will not connect to a remote peer
        unless it can successfully authenticate with the given name.
    - `rtcpMuxPolicy` {{optional_inline}}

      - : The RTCP mux policy to use when gathering ICE candidates, in order to support non-multiplexed RTCP. Possible values are:

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

### 返回值

一个新建的 {{domxref("RTCPeerConnection")}} 对象，如果指定了配置信息（`configuration`），它按照指定配置进行配置，否则，它将按照基本配置进行配置。

### 使用证书

当你希望为一个 {{domxref("RTCPeerConnection")}} 使用自己的证书，而不是让 `RTCPeerConnection` 自动生成，你可以通过调用静态函数 {{domxref("RTCPeerConnection.generateCertificate()")}} 来实现。

`certificates` 属性值在首次指定后便无法更改。如果在传递到调用的 {{domxref("RTCPeerConnection.setConfiguration", "setConfiguration()")}} 函数的配置信息中包含了该属性，则该属性会被忽略。

该属性支持提供多个证书，因为即使给定的 DTLS 连接仅使用一个证书，提供多个证书也可以支持多种加密算法。`RTCPeerConnection` 的实现会根据其和远程的对等方支持的算法来选择要使用的证书，这在 DTLS 握手期间确定。

如果你不提供证书，则会自动生成新的证书。提供你自己的证书有一个明显的好处：身份密钥的连续性——如果你对后续的调用使用相同的证书，则远程对等方可以告诉你是同一个调用者。这也避免生成新密钥的成本。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [信令和视频通话](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC 架构概述](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC 会话的生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
