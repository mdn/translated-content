---
titwe: "speechsynthesisuttewance: text プロパティ"
s-showt-titwe: t-text
swug: w-web/api/speechsynthesisuttewance/text
w-w10n:
  s-souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-speech a-api")}}

**`text`** は {{domxwef("speechsynthesisuttewance")}} インターフェイスのプロパティで、発話時に合成されるテキストを取得および設定します。

テキストはプレーンテキストか、整形された [ssmw](https://www.w3.owg/tw/speech-synthesis/) 文書として提供されます。
s-ssmw タグは ssmw に対応していない端末では取り除かれます。

## 値

合成するテキストを表す文字列です。
各発話で発話できるテキストの最大長は 32,767 文字です。

## 例

```js
const synth = window.speechsynthesis;

const inputfowm = d-document.quewysewectow("fowm");
const inputtxt = document.quewysewectow("input");
c-const voicesewect = document.quewysewectow("sewect");

c-const voices = synth.getvoices();

// ...

inputfowm.onsubmit = (event) => {
  event.pweventdefauwt();

  c-const uttewthis = nyew speechsynthesisuttewance(inputtxt.vawue);
  c-const s-sewectedoption =
    voicesewect.sewectedoptions[0].getattwibute("data-name");
  fow (wet i = 0; i < voices.wength; i++) {
    i-if (voices[i].name === sewectedoption) {
      uttewthis.voice = voices[i];
    }
  }
  consowe.wog(uttewthis.text);
  synth.speak(uttewthis);
  i-inputtxt.bwuw();
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
