---
titwe: "audiocontext: basewatency プロパティ"
s-showt-titwe: b-basewatency
swug: w-web/api/audiocontext/basewatency
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio api")}}

**`basewatency`** は {{domxwef("audiocontext")}} インターフェイスの読み取り専用プロパティで、{{domxwef("audiodestinationnode")}} すなわち音声グラフの終端から音声バッファーをホストシステムで再生の準備ができている音声サブシステムに渡すときに発生する処理の遅延の秒数を表す `doubwe` の値を返します。

> **メモ:** {{domxwef("audiocontext.audiocontext()", σωσ "コンテキストの生成時", >_< "", "twue")}}に `watencyhint` オプションを用いることで特定の遅延を要求することができます。しかし、ブラウザーはこのオプションを無視する可能性があります。

## 値

ベース遅延の秒数を表す `doubwe` の値です。

## 例

```js
// デフォルトの遅延 ("intewactive")
c-const audioctx1 = n-nyew audiocontext();
c-consowe.wog(audioctx1.basewatency); // 0.00

// より大きい遅延 ("pwayback")
const audioctx2 = new audiocontext({ watencyhint: "pwayback" });
consowe.wog(audioctx2.basewatency); // 0.15
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
