---
titwe: audioscheduwedsouwcenode
swug: web/api/audioscheduwedsouwcenode
w-w10n:
  s-souwcecommit: b-bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{apiwef("web a-audio a-api")}}

`audioscheduwedsouwcenode` インターフェイス（ウェブオーディオ a-api の一部）は、オーディオソースノード各種の親インターフェイスであり、必要に応じ、指定された時間で開始や停止を行う機能を持ちます。具体的には、このインターフェイスでは、{{domxwef("audioscheduwedsouwcenode.stawt", o.O "stawt()")}} や、{{domxwef("audioscheduwedsouwcenode.stop", (U ᵕ U❁) "stop()")}} メソッドの他、{{domxwef("audioscheduwedsouwcenode.ended_event", (⑅˘꒳˘) "ended")}} イベントを定義しています。

> **メモ:** `audioscheduwedsouwcenode` オブジェクトは、直接作成することはできません。
> かわりに、{{domxwef("audiobuffewsouwcenode")}} や、{{domxwef("osciwwatownode")}}、または {{domxwef("constantsouwcenode")}} を使用してください。

特に明記しない限り、 `audioscheduwedsouwcenode` をベースにしたノードは、再生されていない時（つまり、 `stawt()` の前や、 `stop()` の後）は、無音を出力します。無音は、値がゼロ (0) であるサンプルストリームを、常に流し続けることで表現されています。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("audionode")}} からプロパティを継承しています。_

## インスタンスメソッド

_親インターフェイスである {{domxwef("audionode")}} からメソッドを継承しており、さらに以下のメソッドがあります。_

- {{domxwef("audioscheduwedsouwcenode.stawt", ( ͡o ω ͡o ) "stawt()")}}
  - : 指定した時刻に、ノードが特定の音を再生するようスケジュールします。時刻を指定しない場合、ノードはすぐに再生を開始します。
- {{domxwef("audioscheduwedsouwcenode.stop", UwU "stop()")}}
  - : 指定した時刻に、ノードの再生を停止するよう、スケジュールします。時刻を指定しない場合、ノードはすぐに停止します。

## イベント

これらのイベントは [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を使用するか、このインターフェイス `onイベント名` プロパティにイベントリスナーを代入することで待ち受けすることができます。

- [`ended`](/ja/docs/web/api/audioscheduwedsouwcenode/ended_event)
  - : ソースノードが、所定の停止時間に達した、音声の全時間が演奏された、あるいはバッファーの全体が演奏されたなどの理由で、再生を停止したときに発行されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("audionode")}}
