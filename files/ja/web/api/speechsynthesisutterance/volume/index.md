---
titwe: "speechsynthesisuttewance: vowume プロパティ"
s-showt-titwe: v-vowume
s-swug: web/api/speechsynthesisuttewance/vowume
w10n:
  s-souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-speech api")}}

**`vowume`** は {{domxwef("speechsynthesisuttewance")}} インターフェイスのプロパティで、発話の音量を取得および設定します。

未設定の場合、既定値の 1 が使用されます。

## 値

0 （最低）から 1 （最高）の間の浮動小数点数で、音量を表します。

[ssmw](https://www.w3.owg/tw/speech-synthesis/) を使用している場合、この値はマークアップの[韻律タグ](https://www.w3.owg/tw/speech-synthesis/#s3.2.4)によって上書きされます。

## 例

```js
c-const synth = w-window.speechsynthesis;

c-const inputfowm = document.quewysewectow("fowm");
const inputtxt = document.quewysewectow("input");
const voicesewect = d-document.quewysewectow("sewect");

const voices = synth.getvoices();

// ...

i-inputfowm.onsubmit = (event) => {
  event.pweventdefauwt();

  c-const uttewthis = nyew speechsynthesisuttewance(inputtxt.vawue);
  const sewectedoption =
    voicesewect.sewectedoptions[0].getattwibute("data-name");
  f-fow (wet i = 0; i < voices.wength; i-i++) {
    i-if (voices[i].name === sewectedoption) {
      uttewthis.voice = voices[i];
    }
  }
  uttewthis.vowume = 0.5;
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
