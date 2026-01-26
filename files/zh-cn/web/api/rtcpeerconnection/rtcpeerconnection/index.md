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
  - : 一个对象，用于提供配置新连接的选项：
    - `bundlePolicy` {{optional_inline}}
      - : 指定当远程对等点与 [SDP BUNDLE 标准](https://webrtcstandards.info/sdp-bundle/)不兼容时，应如何处理候选的协商。如果远程端点可以感知 BUNDLE，则在协商完成时，所有媒体轨道和数据通道都将捆绑到单个传输上，而不管使用何种策略，并且最初创建的任何多余传输都将在此时关闭。

        用技术术语来说，BUNDLE 允许两个对等点之间的所有媒体流流经单个 **5 元组**；也就是说，使用相同的传输协议从一个对等点的单个 IP 和端口到另一个对等点的单个 IP 和端口。

        如果假定为不平衡（`balanced`），这必须是以下字符串值之一：
        - `balanced`
          - : ICE 代理最初为每一种内容类型（音频、视频、数据通道）创建一个 {{domxref("RTCDtlsTransport")}}。如果远程端点无法感知 BUNDLE，那么每一个 DTLS 传输用于处理一种数据类型的通信。
        - `max-compat`
          - : ICE 代理最初为每个媒体轨道创建一个 {{domxref("RTCDtlsTransport")}}，对数据通道则创建一个单独的传输。如果远程端点无法感知 BUNDLE，那么对于所有的内容都会协商一个单独的 DTLS 传输。
        - `max-bundle`
          - : ICE 代理最初仅创建一个 {{domxref("RTCDtlsTransport")}} 来承载所有的 {{DOMxRef("RTCPeerConnection")}} 的数据。如果远程端点无法感知 BUNDLE，那么仅会协商一个轨道而忽略其余的轨道。

    - `certificates` {{optional_inline}}
      - : 一个由 {{domxref("RTCCertificate")}} 对象组成的{{jsxref("Array", "数组", "", 1)}}，用于连接的身份验证。如果未指定该属性，则会为每一个 {{domxref("RTCPeerConnection")}} 实例自动创建一组证书。尽管一个给定的连接只使用一个证书，但提供多个证书可以支持多种算法，从而提高某些情况下的连接成功的机率。参见[使用证书](#使用证书)以了解更多信息。

        > [!NOTE]
        > 此配置选项在首次指定后便不能更改；一旦设置了证书，此属性将在之后调用 {{domxref("RTCPeerConnection.setConfiguration()")}} 时被忽略。

    - `iceCandidatePoolSize` {{optional_inline}}
      - : 一个无符号 16 位整数，其指定了预获取的 ICE 候选池的大小。其默认值为 0（表示不会发生候选的预获取）。你可能会发现，在某些情况下，通过在尝试建立连接前允许 ICE 代理预获取 ICE 候选，可以更快地建立连接，以在调用 {{domxref("RTCPeerConnection.setLocalDescription()")}} 时，已可以检查连接。

        > [!NOTE]
        > 改变 ICD 候选池的大小可能会触发 ICE 收集的开始。

    - `iceServers` {{optional_inline}}
      - : 一个由 {{domxref("RTCIceServer")}} 对象组成的数组，每个对象描述一个可能被 ICE 代理使用的服务器；这些通常是 STUN 或 TURN 服务器。如果未指定，则将在没有可用的 STUN 或 TURN 服务器的情况下进行连接尝试，这将连接限制为本地对等点。
    - `iceTransportPolicy` {{optional_inline}}
      - : 当前的 ICE 传输策略；如果未指定策略，则默认使用 `all` 策略，允许考虑所有的候选。可能的值有：
        - `"all"`
          - : 所有的 ICE 候选都会被考虑。
        - `"public"` {{deprecated_inline}}
          - : 只有拥有公共 IP 地址的 ICE 候选才会被考虑。_在 2016 年 5 月 13 日的规范工作草案中被移除。_
        - `"relay"`
          - : 只有 IP 地址被中继的 ICE 候选，例如那些通过 STUN 或 TURN 服务器传递的，才会被考虑。

    - `peerIdentity` {{optional_inline}}
      - : 一个字符串，用于指定 {{domxref("RTCPeerConnection")}} 目标对等点的标识。如果设置了该值（其默认为 `null`），则在成功验证远程对等点的身份为给定的名称之前，`RTCPeerConnection` 不会与其建立连接。
    - `rtcpMuxPolicy` {{optional_inline}}
      - : 收集 ICE 候选时使用的 RTCP mux 策略，以支持非复用的 RTCP。可能的值有：
        - `negotiate`
          - : 指示 ICE 代理收集 {{Glossary("RTP")}} 和 {{Glossary("RTCP")}} 候选。如果远程对等点支持 RTCP 复用，那么 RTCP 候选将在相应的 RTP 候选之上多路复用。否则，分别返回 RTP 和 RTCP 候选。
        - `require`
          - : 告诉 ICE 代理仅收集 RTP 的 ICE 候选，并在它们之上多路复用 RTCP。如果远程对等点不支持 RTCP 多路复用，则会话协商失败。这是默认值。

### 返回值

一个新建的 {{domxref("RTCPeerConnection")}} 对象，如果指定了配置信息（`configuration`），它按照指定配置进行配置，否则，它将按照基本配置进行配置。

### 使用证书

当你希望为一个 {{domxref("RTCPeerConnection")}} 使用自己的证书，而不是让 `RTCPeerConnection` 自动生成，你可以通过调用静态函数 {{domxref("RTCPeerConnection.generateCertificate()")}} 来实现。

`certificates` 属性值在首次指定后便无法更改。如果在传递到调用的 {{domxref("RTCPeerConnection.setConfiguration", "setConfiguration()")}} 函数的配置信息中包含了该属性，则该属性会被忽略。

该属性支持提供多个证书，因为即使给定的 DTLS 连接仅使用一个证书，提供多个证书也可以支持多种加密算法。`RTCPeerConnection` 的实现会根据其和远程的对等点支持的算法来选择要使用的证书，这在 DTLS 握手期间确定。

如果你不提供证书，则会自动生成新的证书。提供你自己的证书有一个明显的好处：身份密钥的连续性——如果你对后续的调用使用相同的证书，则远程对等点可以告诉你是同一个调用者。这也避免生成新密钥的成本。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [信令和视频通话](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC 架构概述](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC 会话的生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
