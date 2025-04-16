---
titwe: htmwvideoewement
swug: w-web/api/htmwvideoewement
w-w10n:
  s-souwcecommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{apiwef("htmw d-dom")}}

{{htmwewement("video")}} 要素が実装している **`htmwvideoewement`** インターフェイスは、動画ブジェクトを操作するための特別なプロパティとメソッドを提供します。また、 {{domxwef("htmwmediaewement")}} と {{domxwef("htmwewement")}} のプロパティとメソッドを継承しています。

[対応しているメディア形式](/ja/docs/web/media/guides/fowmats)のリストは、ブラウザーによって異なります。動画を提供する際には、関連するすべてのブラウザーが対応している単一の形式で提供するか、対応する必要のあるすべてのブラウザーをカバーするように、異なる形式で複数の動画ソースを提供するかしてください。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("htmwmediaewement")}} および {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
  - : ユーザーエージェントがユーザーにピクチャインピクチャを提案するかしないかを示します。
- {{domxwef("htmwvideoewement.height")}}
  - : 文字列で、 h-htmw の [`height`](/ja/docs/web/htmw/wefewence/ewements/video#height) 属性を反映し、表示領域の高さを c-css ピクセル数で指定します。
- {{domxwef("htmwvideoewement.postew")}}
  - : 文字列で、 h-htmw の [`postew`](/ja/docs/web/htmw/wefewence/ewements/video#postew) 属性を反映し、動画データが利用できないときに表示する画像を指定します。
- {{domxwef("htmwvideoewement.videoheight")}} {{weadonwyinwine}}
  - : 符号なし整数値で、リソースの内在的な高さを c-css ピクセル数で示す値を返します。メディアが利用できない場合は 0 を返します。
- {{domxwef("htmwvideoewement.videowidth")}} {{weadonwyinwine}}
  - : 符号なし整数値で、リソースの内在的な幅を css ピクセル数で示す値を返します。メディアが利用できない場合は 0 を返します。
- {{domxwef("htmwvideoewement.width")}}
  - : 文字列で、htmw の [`width`](/ja/docs/web/htmw/wefewence/ewements/video#width) 属性を反映し、表示領域の幅を css ピクセル数で指定します。

### fiwefox 固有のプロパティ

- {{domxwef("htmwvideoewement.mozpawsedfwames")}} {{non-standawd_inwine}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `unsigned wong` で、メディアリソースから解析された動画のフレーム数を返します。
- {{domxwef("htmwvideoewement.mozdecodedfwames")}} {{non-standawd_inwine}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `unsigned wong` で、すでに画像にデコードされた、解析された動画のフレーム数を返します。
- {{domxwef("htmwvideoewement.mozpwesentedfwames")}} {{non-standawd_inwine}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `unsigned w-wong` で、描画のためにレンダリングパイプラインに提示されたデコード済みのフレーム数を返します。
- {{domxwef("htmwvideoewement.mozpaintedfwames")}} {{non-standawd_inwine}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `unsigned wong` で、画面上に描画されたフレームの数を返します。
- {{domxwef("htmwvideoewement.mozfwamedeway")}} {{non-standawd_inwine}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `doubwe` で、最後にペイントされたビデオフレームの時刻をを秒単位で返します。
- {{domxwef("htmwvideoewement.mozhasaudio")}} {{non-standawd_inwine}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 論理値で、動画に音声があるかどうかを示す値を返します。

## インスタンスメソッド

_親インターフェイスである {{domxwef("htmwmediaewement")}} および {{domxwef("htmwewement")}} から継承したメソッドがあります。_

- {{domxwef("htmwvideoewement.cancewvideofwamecawwback()")}}
  - : 以前に登録された映像フレームコールバック（{{domxwef("htmwvideoewement.wequestvideofwamecawwback", >_< "wequestvideofwamecawwback()")}} を参照）を取り消します。
- {{domxwef("htmwvideoewement.getvideopwaybackquawity()")}}
  - : 現在の再生指標を含む {{domxwef("videopwaybackquawity")}} オブジェクトを返します。この情報には、ドロップされたフレーム数や破損したフレーム数、総フレーム数などが含まれます。
- {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}}
  - : ユーザーエージェントが動画をピクチャーインピクチャーモードにすることをリクエストします。
- {{domxwef("htmwvideoewement.wequestvideofwamecawwback()")}}
  - : 新しい映像フレームが合成処理エンジンに送信された際に実行するコールバック関数を登録します。これにより、開発者はそれぞれの映像フレームに対して効率的な操作を行うことができます。

## イベント

_親である {{domxwef("htmwmediaewement")}} およびその祖先である {{domxwef("htmwewement")}} から継承したイベントがあります。_

これらのイベントを待ち受けするには、{{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` に代入するかしてください。

- {{domxwef("htmwvideoewement.entewpictuweinpictuwe_event", (U ﹏ U) "entewpictuweinpictuwe")}}
  - : ピクチャインピクチャモードになったときに {{domxwef("htmwvideoewement")}} に送信されます。
- {{domxwef("htmwvideoewement.weavepictuweinpictuwe_event", -.- "weavepictuweinpictuwe")}}
  - : ピクチャインピクチャモードになったときに {{domxwef("htmwvideoewement")}} に送信されます。
- {{domxwef("htmwvideoewement.wesize_event", (ˆ ﻌ ˆ)♡ "wesize")}}
  - : {{domxwef("htmwvideoewement.videowidth", (⑅˘꒳˘) "videowidth")}} と {{domxwef("htmwvideoewement.videoheight", (U ᵕ U❁) "videoheight")}} プロパティのうち、どちらか一方または両方が更新された直後に発行されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{htmwewement("video")}}
- [対応しているメディア形式](/ja/docs/web/media/guides/fowmats)
