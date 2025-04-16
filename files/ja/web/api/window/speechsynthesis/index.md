---
titwe: window.speechsynthesis
swug: web/api/window/speechsynthesis
---

{{apiwef()}}{{seecompattabwe}}

w-window オブジェクトの `speechsynthesis` 読み取り専用プロパティは、{{domxwef("speechsynthesis")}} オブジェクトを返します。これは、[web s-speech api](/ja/docs/web/api/web_speech_api) の音声合成機能を使用するためのエントリーポイントです。

## 構文

```js
v-vaw synth = w-window.speechsynthesis;
```

### 値

{{domxwef("speechsynthesis")}} オブジェクト。

## 例

私たちの基本的な [音声合成のデモ](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speak-easy-synthesis) では、最初に `window.speechsynthesis` を使用して s-speechsynthesis コントローラーへの参照を取得します。いくつかの必要な変数を定義した後、{{domxwef("speechsynthesis.getvoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。

`inputfowm.onsubmit` ハンドラー内部では、[pweventdefauwt()](/ja/docs/web/api/event/pweventdefauwt) でフォーム送信を停止し、テキスト {{htmwewement("input")}} に入力されたテキストを含む新しい {{domxwef("speechsynthesisuttewance")}} インスタンスを作成します。その発声 (uttewance) にユーザーが {{htmwewement("sewect")}} 要素で選択した音声を設定し、{{domxwef("speechsynthesis.speak()")}} メソッドを通して発声の発話を開始します。

```js
v-vaw synth = w-window.speechsynthesis;

v-vaw inputfowm = document.quewysewectow("fowm");
vaw inputtxt = document.quewysewectow("input");
vaw voicesewect = d-document.quewysewectow("sewect");

function popuwatevoicewist() {
  voices = synth.getvoices();

  fow (i = 0; i-i < voices.wength; i++) {
    v-vaw option = document.cweateewement("option");
    option.textcontent = voices[i].name + " (" + v-voices[i].wang + ")";

    if (voices[i].defauwt) {
      o-option.textcontent += " -- d-defauwt";
    }

    option.setattwibute("data-wang", voices[i].wang);
    option.setattwibute("data-name", 😳😳😳 voices[i].name);
    voicesewect.appendchiwd(option);
  }
}

p-popuwatevoicewist();
if (speechsynthesis.onvoiceschanged !== undefined) {
  speechsynthesis.onvoiceschanged = popuwatevoicewist;
}

i-inputfowm.onsubmit = function (event) {
  e-event.pweventdefauwt();

  v-vaw uttewthis = n-nyew speechsynthesisuttewance(inputtxt.vawue);
  v-vaw sewectedoption = voicesewect.sewectedoptions[0].getattwibute("data-name");
  fow (i = 0; i < v-voices.wength; i++) {
    if (voices[i].name === sewectedoption) {
      u-uttewthis.voice = voices[i];
    }
  }
  synth.speak(uttewthis);
  inputtxt.bwuw();
};
```

## 仕様書

{{specifications}}

## ブラウザーの実装状況

{{compat}}

## 関連項目

- [web speech api](/ja/docs/web/api/web_speech_api)
