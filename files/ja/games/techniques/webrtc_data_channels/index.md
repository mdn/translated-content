---
title: WebRTC データチャネル
slug: Games/Techniques/WebRTC_data_channels
tags:
  - API
  - Games
  - NeedsContent
  - Network
  - P2P
  - WebRTC
  - data channels
translation_of: Games/Techniques/WebRTC_data_channels
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

[WebRTC](/ja/docs/WebRTC "/en-US/docs/WebRTC") (Web Real-Time Communications; Web リアルタイム通信の略語) API は、第一にオーディオとビデオ通信のサポートによって知られています。しかしながら、ピア・ツー・ピアのデータチャネルもあります。この記事ではこれの詳細を説明し、ゲーム内にデータチャネルを実装するライブラリの使用方法を示します。

## データチャネルとは?

A WebRTC data channel lets you send text or binary data over an active connection to a peer. In the context of a game, this lets players send data to each other, whether text chat or game status information. Data channels come in two flavors.

**Reliable channels** guarantee that messages you send arrive at the other peer and in the same order in which they're sent. This is analogous to a TCP socket.

**Unreliable channels** make no such guarantees; messages aren't guaranteed to arrive in any particular order and, in fact, aren't guaranteed to arrive at all. This is analogous to a UDP socket.

We have [documentation for using WebRTC](/ja/docs/Web/Guide/API/WebRTC "/en-US/docs/WebRTC"). This article, however, will take advantage of some libraries that can help trivialize the work, and will demonstrate ways to use abstraction to work around implementation differences between browsers. Hopefully, of course, those differences will fade away in time.

## p2p ライブラリを使用する

One library you can use is the [p2p](https://github.com/js-platform/p2p) library. This library provides a simple API for creating peer connections and setting up streams and data channels. There's also a broker server component and a hosted broker you can use instead of having to set one up for yourself.

> **Note:** We will continue to add content here soon; there are some organizational issues to sort out.

## オリジナルの文書について

- 著者: Alan Kligman
- 元の記事: [WebRTC Data Channels for Great Multiplayer](https://hacks.mozilla.org/2013/03/webrtc-data-channels-for-great-multiplayer/)
- その他の貢献者: Robert Nyman
- 著作権: Alan Kligman, 2013
