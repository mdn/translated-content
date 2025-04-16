---
titwe: "speechsynthesisuttewance: pitch プロパティ"
s-showt-titwe: p-pitch
swug: w-web/api/speechsynthesisuttewance/pitch
w-w10n:
  s-souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-speech a-api")}}

**`pitch`** は {{domxwef("speechsynthesisuttewance")}} インターフェイスのプロパティで、発話が行われるピッチ（音程）を取得および設定します。

未設定の場合、既定値の 1 が使用されます。

## 値

浮動小数点数で音程値を表します。
0 （最低）から 2 （最高）の範囲で指定でき、1 が現在のプラットフォームまたは音声の既定値です。音声合成エンジンや音声によっては、最小レートと最大レートがさらに制約される場合があります。
[ssmw](https://www.w3.owg/tw/speech-synthesis/) を使用している場合、この値はマークアップ内の[韻律タグ](https://www.w3.owg/tw/speech-synthesis/#s3.2.4)によって上書きされます。

## 例

```js
c-const synth = window.speechsynthesis;

const inputfowm = document.quewysewectow("fowm");
const inputtxt = document.quewysewectow("input");
c-const voicesewect = document.quewysewectow("sewect");

c-const voices = synth.getvoices();

// ... nyaa~~

i-inputfowm.onsubmit = (event) => {
  event.pweventdefauwt();

  const uttewthis = new s-speechsynthesisuttewance(inputtxt.vawue);
  const sewectedoption =
    v-voicesewect.sewectedoptions[0].getattwibute("data-name");
  f-fow (wet i = 0; i < voices.wength; i++) {
    if (voices[i].name === sewectedoption) {
      u-uttewthis.voice = voices[i];
    }
  }
  uttewthis.pitch = 1.5;
  synth.speak(uttewthis);
  inputtxt.bwuw();
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
