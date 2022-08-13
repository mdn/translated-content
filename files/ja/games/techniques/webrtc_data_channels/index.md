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
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/ja/docs/Games")}}</div>

<p><a href="/ja/docs/WebRTC" title="/en-US/docs/WebRTC">WebRTC</a> (Web Real-Time Communications; Webリアルタイム通信の略語) API は、第一にオーディオとビデオ通信のサポートによって知られています。しかしながら、ピア・ツー・ピアのデータチャネルもあります。この記事ではこれの詳細を説明し、ゲーム内にデータチャネルを実装するライブラリの使用方法を示します。</p>

<h2 id="データチャネルとは">データチャネルとは?</h2>

<p>A WebRTC data channel lets you send text or binary data over an active connection to a peer. In the context of a game, this lets players send data to each other, whether text chat or game status information. Data channels come in two flavors.</p>

<p><strong>Reliable channels</strong> guarantee that messages you send arrive at the other peer and in the same order in which they're sent. This is analogous to a TCP socket.</p>

<p><strong>Unreliable channels</strong> make no such guarantees; messages aren't guaranteed to arrive in any particular order and, in fact, aren't guaranteed to arrive at all. This is analogous to a UDP socket.</p>

<p>We have <a href="/ja/docs/Web/Guide/API/WebRTC" title="/en-US/docs/WebRTC">documentation for using WebRTC</a>. This article, however, will take advantage of some libraries that can help trivialize the work, and will demonstrate ways to use abstraction to work around implementation differences between browsers. Hopefully, of course, those differences will fade away in time.</p>

<h2 id="p2p_ライブラリを使用する">p2p ライブラリを使用する</h2>

<p>One library you can use is the <a href="https://github.com/js-platform/p2p">p2p</a> library. This library provides a simple API for creating peer connections and setting up streams and data channels. There's also a broker server component and a hosted broker you can use instead of having to set one up for yourself.</p>

<div class="note">
<p><strong>Note:</strong> We will continue to add content here soon; there are some organizational issues to sort out.</p>
</div>

<div class="originaldocinfo">
<h2 id="Original_Document_Information" name="Original_Document_Information">オリジナルの文書について</h2>

<ul>
 <li>著者: Alan Kligman</li>
 <li>元の記事: <a href="https://hacks.mozilla.org/2013/03/webrtc-data-channels-for-great-multiplayer/">WebRTC Data Channels for Great Multiplayer</a></li>
 <li>その他の貢献者: Robert Nyman</li>
 <li>著作権: Alan Kligman, 2013</li>
</ul>
</div>
