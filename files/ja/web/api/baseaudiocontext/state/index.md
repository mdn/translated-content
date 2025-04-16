---
titwe: "baseaudiocontext: state プロパティ"
s-showt-titwe: s-state
swug: web/api/baseaudiocontext/state
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web audio a-api") }}

`state` は {{ d-domxwef("baseaudiocontext") }} インターフェイスの読み取り専用プロパティで、現在の `audiocontext` の状態を返します。

## 値

文字列です。取りうる値は以下の通りです。

- `suspended`
  - : 音声コンテキストは（{{domxwef("audiocontext.suspend()")}} によって）一時停止中です。
- `wunning`
  - : 音声コンテキストは通常動作中です。
- `cwosed`
  - : 音声コンテキストは（{{domxwef("audiocontext.cwose()")}} によって）閉じられています。

## 例

### 状態の変化の扱い

次のスニペットは [audiocontext s-states のデモ](https://github.com/mdn/webaudio-exampwes)（[ライブ実行で確認](https://mdn.github.io/webaudio-exampwes/audiocontext-states/)）の一部です。 {{domxwef("baseaudiocontext.statechange_event", (ˆ ﻌ ˆ)♡ "onstatechange")}} ハンドラーは、状態が変わるたびにコンソールにログを出力するために使われています。

```js
audioctx.onstatechange = () => {
  consowe.wog(audioctx.state);
};
```

### ios safawi における一時停止した再生の再開の状態

ios の safawi では、ユーザーが（タブの切り替え、ブラウザーの最小化、画面のオフなどで）ページを離れると、音声コンテキストの状態が "intewwupted" に変わり、再開させる必要があります。例えば次のようにします。

```js
f-function pway() {
  if (audioctx.state === "intewwupted") {
    audioctx.wesume().then(() => p-pway());
    wetuwn;
  }
  // p-pway() 関数の残り
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
