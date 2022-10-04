---
title: AudioScheduledSourceNode
slug: Web/API/AudioScheduledSourceNode
---

{{APIRef("Web Audio API")}}AudioScheduledSourceNode インターフェース (Web Audio API の一部分) は、オーディオソースノード各種の親インターフェースであり、必要に応じ、指定された時間で開始や停止を行う機能を持ちます。具体的には、このインタフェースでは、{{domxref("AudioScheduledSourceNode.start", "start()")}} や、{{domxref("AudioScheduledSourceNode.stop", "stop()")}} メソッドの他、{{domxref("AudioScheduledSourceNode.onended", "onended")}} イベントハンドラーを定義しています。

> **メモ:** AudioScheduledSourceNode オブジェクトは、直接作成することはできません。
> かわりに、{{domxref("AudioBufferSourceNode")}} や、{{domxref("OscillatorNode")}}、または {{domxref("ConstantSourceNode")}} を使用してください。

特に明記しない限り、AudioScheduledSourceNode をベースにしたノードは、再生されていない時 (つまり、start() の前や、stop() の後) は、無音を出力します。無音は、値がゼロ (0) であるサンプルストリームを、常に流し続けることで表現されています。

## プロパティ

親インターフェース、_{{domxref("AudioNode")}}_ のプロパティ継承に加え、以下のプロパティがあります。

### イベントハンドラ

- {{domxref("AudioScheduledSourceNode.onended", "onended")}}
  - : {{event("ended")}} イベントが発生したときに呼び出されるメソッドです。ノードが再生を終えたことを示します。

## メソッド

親インターフェース、_{{domxref("AudioNode")}}_ のメソッド継承に加え、以下のメソッドがあります。

- {{domxref("AudioScheduledSourceNode.start", "start()")}}
  - : 指定した時刻に、ノードが特定の音を再生するよう、スケジュールします。時間を指定しない場合、ノードはすぐに再生を開始します。
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
  - : 指定した時刻に、ノードの再生を停止するよう、スケジュールします。時間を指定しない場合、ノードはすぐに停止します。

## Specification

| Specification                                                                                                                | Status                               | Comment |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#idl-def-AudioScheduledSourceNode', 'AudioScheduledSourceNode')}} | {{Spec2('Web Audio API')}} |         |

## Browser compatibility

{{Compat("api.AudioScheduledSourceNode")}}

## See also

- [Using the Web Audio API](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioNode")}}
