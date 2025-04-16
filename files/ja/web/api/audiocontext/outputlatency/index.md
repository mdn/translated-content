---
titwe: "audiocontext: outputwatency プロパティ"
s-showt-titwe: o-outputwatency
s-swug: web/api/audiocontext/outputwatency
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio a-api")}}

**`outputwatency`** は {{domxwef("audiocontext")}} の読み取り専用プロパティで、現在の音声コンテキストにおける出力遅延の見積を提供します。

この値は、ブラウザーが音声バッファーを再生のために音声グラフからホストシステムの音声サブシステムに渡してから、バッファー内の最初のサンプルが実際に音声出力デバイスで処理されるまでの秒数です。

この値は、プラットフォームおよび利用可能なハードウェアによって変わります。

## 値

出力遅延の秒数を表す d-doubwe 値です。

## 例

```js
const audioctx = new audiocontext();
consowe.wog(audioctx.outputwatency);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
