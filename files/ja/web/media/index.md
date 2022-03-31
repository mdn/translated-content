---
title: ウェブメディア技術
slug: Web/Media
tags:
  - Audio
  - Landing
  - Media
  - Video
  - Web
translation_of: Web/Media
---
{{QuickLinksWithSubpages("/ja/docs/Web/Media")}}

長年に渡り、音声、動画、およびその他のメディアを表示、作成および、管理するためのウェブの能力は、ますます速度を上げて成長してきました。今日では数多くの API が利用可能であり、HTML 要素や DOM インターフェイスなどにより、これらの作業を行うだけでなく、メディアを他の技術と組み合わせて使用することで、本当に驚くべきことができるようになっています。この記事は、あなたがそれらを習得するために役立つであろう参考資料へのリンクを含む様々な API を列挙しています。

## 参考文献

### HTML

これらの記事は、メディア開発者向け HTML 機能について説明しています。

- {{HTMLElement("audio")}}
  - : `<audio>` 要素は、ウェブのコンテキストで音声を再生するために使用されます。これは、より複雑なメディアの設置先として目立たないように使用することもでき、また、オーディオファイルの再生をユーザーが制御するための可視のコントロールとともに使用することができます。JavaScript からは、{{domxref("HTMLAudioElement")}} オブジェクトとしてアクセスできます。
- {{HTMLElement("video")}}
  - : `<video>` 要素は、ウェブのコンテキストにおける動画コンテンツのエンドポイントです。単純に動画ファイルを表示するため、また、ストリーミング動画コンテンツの宛先として使用することができます。`<video>` は、メディア API を他の HTML および、DOM 技術とリンクさせるための手段としても、使用できます。例えば、{{HTMLElement("canvas")}} (フレームの取得と操作) です。JavaScript から {{domxref("HTMLVideoElement")}} オブジェクトとしてアクセスできます。
- {{HTMLElement("track")}}
  - : HTML の `<track>` 要素は {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素内に配置して、メディア再生時に使用する [WebVTT](/ja/docs/Web/API/WebVTT_API) 形式の字幕または、キャプショントラックへの参照を提供することができます。JavaScript から {{domxref("HTMLTrackElement")}} オブジェクトとしてアクセスできます。
- {{HTMLElement("source")}}
  - : HTML の `<source>` 要素は、{{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素内で使用して、表示するソースメディアを指定します。さまざまな形式、大きさ、解像度による複数のソースを使用してメディアを提供することができます。JavaScript から {{domxref("HTMLSourceElement")}} オブジェクトとしてアクセスできます。

### API

- [Media Capabilities API](/ja/docs/Web/API/Media_Capabilities_API)
  - : Media Capabilities API を使用すると、アプリやサイトが実行されているデバイスのエンコーディングとデコーディングの能力を判断できます。これにより、どのフォーマットをいつ使用するかをリアルタイムで判断することができます。
- [メディアキャプチャと Streams API](/ja/docs/Web/API/Media_Streams_API)
  - : ローカルおよび、ネットワークを介したメディアのストリーミング、記録、操作を可能にする API のリファレンスです。これには、ビデオ、オーディオおよび、静止画をキャプチャするためのローカルカメラとマイクの使用が含まれます。
- [Media Session API](/en-US/docs/Web/API/Media_Session_API)
  - : Media Session API は、メディア通知をカスタマイズする方法を提供します。Media Session API は、ウェブアプリが再生しているメディアのユーザーエージェントが表示するためのメタデータを提供します。また、キーボード、ヘッドセット、リモコンなどにあるハードウェアキーや、モバイル機器の通知領域やロック画面にあるソフトウェアキーなどのプラットフォームメディアキーにアクセスするためのアクションハンドラーも提供しています。
- [MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API)
  - : MediaStream Recording API を使用すると、メディアストリームをキャプチャしてデータ処理または、フィルターリングを行ったり、ディスクに記録したりすることができます。
- [Web Audio API](/ja/docs/Web/API/Web_Audio_API)
  - : Web Audio API を使用すると、サウンドデータをリアルタイムおよび、録音済み素材の両方で生成、フィルターリングおよび、操作してからそのオーディオを `<audio>` 要素、メディアストリームまたは、ディスクなどへ送信できます。
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication、ウェブリアルタイム通信) を使用すると、直接インターネット上の 2 つのピア間で、ライブオーディオとビデオをストリーミングしたり、任意のデータを転送したりできます。

## ガイド

- [HTML での音声と動画の使用](/ja/docs/Web/Media/HTML_media)
  - : HTML の `<audio>` 要素と `<video>` 要素の使い方のガイドです。
- [アクセシビリティのあるマルチメディア](/ja/docs/Learn/Accessibility/Multimedia)
  - : このガイドでは、ウェブデザイナーと開発者が、さまざまな能力を持つ人々に対して、アクセスできるコンテンツを作成する方法について説明しています。これは単に、{{HTMLElement("img")}} 要素の {{htmlattrxref("alt", "img")}} 属性を使用することから、スクリーンリーダー用のメディアにタグを付けることまでの範囲に及びます。
- [ウェブ上のメディア種別と形式のガイド](/ja/docs/Web/Media/Formats)
  - : ウェブ上の画像、音声および、動画メディアに使用できる、ファイルタイプとコーデックのガイドです。これには、どの種類のコンテンツにどの形式を使用するのかということ、フォールバックの提供方法や、メディアタイプの優先順位付けなどのベストプラクティスおよび、各メディアコンテナーとコーデックの一般的なブラウザー対応情報が含まれます。
- [音声と動画のストリーミングガイド](/ja/docs/Web/Media/Streaming)
  - : 音声と動画のストリーミング方法、そしてストリームの最高の品質とパフォーマンスを確保するために活用できる技術と技術を網羅したガイドです。
- [メディアおよび Web Audio API の自動再生ガイド](/ja/docs/Web/Media/Autoplay_guide)
  - : メディアや音声の予期しない自動再生は、ユーザーにとってはうれしくない驚きです。自動再生はある目的を果たす一方で、慎重に使用する必要があります。ユーザーがこれを制御できるようにするために、現在多くのブラウザーで自動再生ブロック機能が提供されています。この記事は自動再生の手引きとして、いつ、どのように使用するのかそして、ブラウザーを使って自動再生ブロックを適切に処理する方法についてのヒントを提供します。
- [ウェブ音声の空間演出の基本](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : 画面に描画された 3D シーンや、ヘッドセットを使用して体験する複合現実感などの 3D 環境では、音声が音源の方向から聞こえてくるように演奏することが重要です。このガイドでは、その方法について説明します。

## その他

面白い方法でメディア API と並行して使用できるような、興味深いトピックもあります。

- [Canvas API](/ja/docs/Web/API/Canvas_API)
  - : Canvas API を使用すると、{{HTMLElement("canvas")}} に描画して、画像の内容を操作したり変更したりできます。これは、`<canvas>` 要素を動画の再生先または、カメラのキャプチャ先として設定して、ビデオフレームをキャプチャして操作できるようにするなど、さまざまな方法によるメディア使用を可能にします。
- [WebGL](/ja/docs/Web/API/WebGL_API)
  - : WebGL は、既存の Canvas API 上に OpenGL ES 互換の API を提供し、ウェブ上で強力な 3D グラフィックスを実行することを可能にします。キャンバスを通して、これはメディアコンテンツに 3D画像を追加するように使用できます。
- [WebXR](/ja/docs/Web/API/WebXR_API)
  - : WebXR は最終的に、WebVR に代わるもので、バーチャルリアリティ (VR) と拡張現実 (AR) コンテンツの作成をサポートする技術です。複合現実的なコンテンツはその後、デバイスの画面に表示されるか、ゴーグルやヘッドセットを使用して表示されます。
- [WebVR](/ja/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Web Virtual Reality API は、Oculus Rift や HTC Vive などのバーチャルリアリティ (VR) デバイスをサポートしているため、開発者はユーザーの位置や動きを 3D シーン内の動きに変換して、デバイスに表示することができます。WebVR は順次、WebXR に置き換えられることが望まれています。WebXR はより広範囲なユースケースをカバーします。
