---
title: オーディオとビデオのストリーミングガイド
slug: Web/Media/Streaming
tags:
  - Audio
  - Guide
  - Media
  - Networking
  - Video
  - streaming
translation_of: Web/Media/Streaming
---
<p>{{QuickLinksWithSubpages("/ja/docs/Web/Media")}}</p>

<p>このガイドでは、Web 上のオーディオあるいはビデオメディアをストリーミングするために使用されるテクニックと、可能な限り最高の品質とパフォーマンスを引き出すためにストリーミングを実行する際に使用するコード、メディア、サーバー、およびオプションをどのように最適化するかを検討します。</p>

<p><strong>&lt;&lt;&lt;...XXXXXX...&gt;&gt;&gt;</strong></p>

<h2 id="プロトコル">プロトコル</h2>

<p>サーバとストリーミングコードの設定に加えて、パフォーマンスを最適化するために使用できる特別なプロトコルが存在することがあります。</p>

<h3 id="HTTPS_Live_Streaming">HTTPS Live Streaming</h3>

<p><strong>HTTPS Live Streaming</strong> (<strong>HLS</strong>) は、Apple が開発したプロトコルで、Safari はそのすべてのプラットフォームでサポートしています。HLS は他の環境でもサポートされている場合がありますが、条件付きでサポートされている場合もあります。</p>

<p>例えば、多くの Web サイトのモバイル専用コンテンツでは、モバイルブラウザが HLS に対応していることを前提としているため、この前提が間違っているために変な互換性エラーが発生することを避けるために、Android 版の Firefox も同様に対応しています。ただし、Android のデスクトップ版は HLS をサポートしていません。</p>

<p>HLS ではプレイリストを利用して、ストリーミングするメディアを選択するだけでなく、同じメディアのバージョンや形式を選択することができます。例えば、HLS では、ユーザーが自分の言語を聞くために、複数の音声ストリームを含むビデオをストリーミングすることができます。さらに、異なるネットワーク条件に最適化されたストリームの形式を提供することもできます。このようにして、ライブストリームを柔軟かつ高パフォーマンスにすることができます。</p>

<p>2017年半ば現在、HLS は {{RFC(8216)}} として標準化されています。</p>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li><a href="/ja/docs/Web/Media">Web メディア技術</a></li>
 <li><a href="/ja/docs/Web/Media/Formats">Web 上のメディアタイプとフォーマットのガイド</a></li>
 <li>{{HTMLElement("audio")}} と {{HTMLElement("video")}}</li>
</ul>
