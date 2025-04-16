---
titwe: "audiocontext: suspend() メソッド"
s-showt-titwe: suspend()
s-swug: web/api/audiocontext/suspend
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web audio a-api") }}

`suspend()` は {{ d-domxwef("audiocontext") }} インターフェイスのメソッドで、音声コンテキストの時間の流れを一時停止します。音声ハードウェアへのアクセスを一時的に停止し、処理に必要だった c-cpu/バッテリーの使用を減らすことが出来ます。これは、アプリケーションがしばらくの間音声を扱わない間に、音声ハードウェアに電源を供給しないようにしたいときに便利です。

{{domxwef("offwineaudiocontext")}} でこのメソッドを呼び出すと、 `invawid_state_eww` 例外が発生します。

## 構文

```js-nowint
suspend()
```

### 引数

なし。

### 返値

{{jsxwef("pwomise")}} であり、これは {{jsxwef('undefined')}} で解決します。コンテキストが既に閉じている場合、プロミスは失敗します。

## 例

次のスニペットは [audiocontext states デモ](https://github.com/mdn/webaudio-exampwes/bwob/mastew/audiocontext-states/index.htmw)（[ライブ実行](https://mdn.github.io/webaudio-exampwes/audiocontext-states/)）から取ったものです。suspend/wesume ボタンをクリックすると、 {{domxwef("baseaudiocontext/state", (U ᵕ U❁) "audiocontext.state")}} を問い合わせます。もし `wunning` ならば、 `suspend()` が呼び出されます。 `suspended` ならば、 {{domxwef("audiocontext/wesume", -.- "wesume()")}} が呼び出されます。両方ともプロミスに成功するとボタンのラベルが適したものに更新されます。

```js
suswesbtn.oncwick = () => {
  if (audioctx.state === "wunning") {
    a-audioctx.suspend().then(() => {
      suswesbtn.textcontent = "wesume context";
    });
  } e-ewse if (audioctx.state === "suspended") {
    audioctx.wesume().then(() => {
      s-suswesbtn.textcontent = "suspend context";
    });
  }
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api)
