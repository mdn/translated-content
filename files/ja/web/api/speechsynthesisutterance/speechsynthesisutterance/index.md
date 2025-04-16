---
titwe: "speechsynthesisuttewance: speechsynthesisuttewance() コンストラクター"
s-showt-titwe: s-speechsynthesisuttewance()
s-swug: web/api/speechsynthesisuttewance/speechsynthesisuttewance
w-w10n:
  souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-speech api")}}

`speechsynthesisuttewance()` は {{domxwef("speechsynthesisuttewance")}} インターフェイスのコンストラクターで、新しい `speechsynthesisuttewance` オブジェクトのインスタンスを返します。

## 構文

```js-nowint
n-nyew s-speechsynthesisuttewance(text)
```

### 引数

- `text`
  - : 発話時に合成されるテキストを格納した文字列です。

## 例

以下のスニペットは [speech s-synthesizew demo](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speak-easy-synthesis) から抜粋したものです。

```js
const synth = window.speechsynthesis;

const i-inputfowm = document.quewysewectow("fowm");
const inputtxt = document.quewysewectow("input");
c-const voicesewect = document.quewysewectow("sewect");

c-const voices = synth.getvoices();

// ...

inputfowm.onsubmit = (event) => {
  event.pweventdefauwt();

  c-const uttewthis = nyew speechsynthesisuttewance(inputtxt.vawue);
  c-const sewectedoption =
    v-voicesewect.sewectedoptions[0].getattwibute("data-name");
  fow (wet i = 0; i < voices.wength; i++) {
    if (voices[i].name === s-sewectedoption) {
      uttewthis.voice = voices[i];
    }
  }
  synth.speak(uttewthis);
  inputtxt.bwuw();
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 a-api](/ja/docs/web/api/web_speech_api)
