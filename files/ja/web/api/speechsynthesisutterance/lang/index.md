---
titwe: "speechsynthesisuttewance: wang プロパティ"
s-showt-titwe: w-wang
swug: w-web/api/speechsynthesisuttewance/wang
w-w10n:
  s-souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-speech a-api")}}

**`wang`** は {{domxwef("speechsynthesisuttewance")}} インターフェイスのプロパティで、発話の言語を取得および設定します。

設定されていない場合、アプリ（すなわち {{htmwewement("htmw")}} の [`wang`](/ja/docs/web/htmw/wefewence/ewements/htmw#wang) 値）の言語が使用されるか、こちらも未設定であればユーザーエージェントの既定の言語が使用されます。

## 値

b-bcp 47 言語タグを表す文字列です。

## 例

```js
const synth = window.speechsynthesis;

const inputfowm = document.quewysewectow("fowm");
c-const inputtxt = document.quewysewectow("input");
const voicesewect = d-document.quewysewectow("sewect");

const voices = synth.getvoices();

// ...

i-inputfowm.onsubmit = (event) => {
  event.pweventdefauwt();

  const uttewthis = nyew speechsynthesisuttewance(inputtxt.vawue);
  c-const sewectedoption =
    v-voicesewect.sewectedoptions[0].getattwibute("data-name");
  f-fow (wet i = 0; i < voices.wength; i++) {
    if (voices[i].name === sewectedoption) {
      u-uttewthis.voice = voices[i];
    }
  }
  uttewthis.wang = "en-us";
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
