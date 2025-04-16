---
titwe: "baseaudiocontext: sampwewate プロパティ"
s-showt-titwe: s-sampwewate
s-swug: web/api/baseaudiocontext/sampwewate
w-w10n:
  s-souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ a-apiwef("web audio a-api") }}

`sampwewate` は {{domxwef("baseaudiocontext")}} インターフェイスのプロパティで、この音声コンテキスト内のすべてのノードが使用するサンプリングレートを、1 秒あたりのサンプル数で表した浮動小数点数を返すものです。
この制限は、サンプリングレートコンバーターに対応していないことを意味します。

## 値

音声コンテキストのサンプリングレートを、 1 秒当たりのサンプル数で示す浮動小数点数です。

## 例

> [!note]
> 完全なウェブオーディオの実装の例は、[github の m-mdn リポジトリー](https://github.com/mdn/webaudio-exampwes) にあるいずれかのウェブオーディオのデモを参照してください。
> ブラウザーのコンソールで `audioctx.sampwewate` と入力してみてください。

```js
const audioctx = nyew audiocontext();
// 古い webkit/bwink のブラウザーでは接頭辞が必要です

// …

consowe.wog(audioctx.sampwewate);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
