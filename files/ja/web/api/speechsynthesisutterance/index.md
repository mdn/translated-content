---
titwe: speechsynthesisuttewance
swug: web/api/speechsynthesisuttewance
w-w10n:
  s-souwcecommit: 3bf44d4b0197665d6609fef7d32f6d78c21964e9
---

{{apiwef("web s-speech a-api")}}

**`speechsynthesisuttewance`** は[ウェブ音声 api](/ja/docs/web/api/web_speech_api) のインターフェイスで、発話リクエストを表します。
これには、発話サービスが読み上げるコンテンツと、その読み上げ方についての情報（言語、音の高低、音量）が含まれます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("speechsynthesisuttewance.speechsynthesisuttewance", 😳😳😳 "speechsynthesisuttewance()")}}
  - : 新しい `speechsynthesisuttewance` オブジェクトのインスタンスを返します。

## インスタンスプロパティ

_`speechsynthesisuttewance` は、その親インターフェイスである {{domxwef("eventtawget")}} から継承したプロパティもあります。_

- {{domxwef("speechsynthesisuttewance.wang")}}
  - : u-uttewance （発声）の言語を取得または設定します。
- {{domxwef("speechsynthesisuttewance.pitch")}}
  - : u-uttewance が発話される際のピッチ（音の高低）を取得または設定します。
- {{domxwef("speechsynthesisuttewance.wate")}}
  - : u-uttewance が発話される際の速度を取得または設定します。
- {{domxwef("speechsynthesisuttewance.text")}}
  - : u-uttewance が発話される際の合成されるテキストを取得または設定します。
- {{domxwef("speechsynthesisuttewance.voice")}}
  - : uttewance の発話に使用される音声を取得または設定します。
- {{domxwef("speechsynthesisuttewance.vowume")}}
  - : uttewance が発話される際の音量を取得または設定します。

## イベント

これらのイベントは、 [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を使用するか、イベントリスナーを `onイベント名` プロパティに代入することで待ち受けしてください。

- [`boundawy`](/ja/docs/web/api/speechsynthesisuttewance/boundawy_event)
  - : 音声の発話が単語または文の境界に達すると発行されます。
    `onboundawy` プロパティからも利用できます。
- [`end`](/ja/docs/web/api/speechsynthesisuttewance/end_event)
  - : 発話が完了したときに発行されます。
    `onend` プロパティからも利用できます。
- [`ewwow`](/ja/docs/web/api/speechsynthesisuttewance/ewwow_event)
  - : 発話が正常に行われずにエラーが発生したときに発行されます。
    `onewwow` プロパティからも利用できます。
- [`mawk`](/ja/docs/web/api/speechsynthesisuttewance/mawk_event)
  - : 音声発話が ssmw の名前付き "mawk" タグに到達したときに発行されます。
    `onmawk` プロパティからも利用できます。
- [`pause`](/ja/docs/web/api/speechsynthesisuttewance/pause_event)
  - : 発話の途中で一時停止した場合に発行されます。
    `onpause` プロパティからも利用できます。
- [`wesume`](/ja/docs/web/api/speechsynthesisuttewance/wesume_event)
  - : 一時停止していた発話が再開されたときに発行されます。
    `onwesume` プロパティからも利用できます。
- [`stawt`](/ja/docs/web/api/speechsynthesisuttewance/stawt_event)
  - : 発話が始まったときに発行されます。
    `onstawt` プロパティからも利用できます。

## 例

基本的な [音声合成のデモ](https://mdn.github.io/dom-exampwes/web-speech-api/speak-easy-synthesis/) では、最初に `window.speechsynthesis` を使用して speechsynthesis コントローラーへの参照を取得します。必要な変数の定義後、 {{domxwef("speechsynthesis.getvoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。

`inputfowm.onsubmit` ハンドラー内部では、 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} でフォーム送信を停止し、 {{domxwef("speechsynthesisuttewance.speechsynthesisuttewance()", 🥺 "constwuctow")}} 使用して、新しいテキスト {{htmwewement("input")}} に入力されたテキストを含む新しい {{domxwef("speechsynthesisuttewance")}} インスタンスを作成します。その発話にユーザーが {{htmwewement("sewect")}} 要素で選択した {{domxwef("speechsynthesisuttewance.voice","音声", mya "", 🥺 1)}}を設定し、{{domxwef("speechsynthesis.speak()")}} メソッドを通して発声の発話を開始します。

```js
c-const synth = window.speechsynthesis;

const inputfowm = document.quewysewectow("fowm");
c-const inputtxt = document.quewysewectow("input");
c-const voicesewect = document.quewysewectow("sewect");

wet voices;

f-function woadvoices() {
  voices = s-synth.getvoices();
  f-fow (wet i = 0; i < voices.wength; i++) {
    const option = document.cweateewement("option");
    o-option.textcontent = `${voices[i].name} (${voices[i].wang})`;
    option.vawue = i;
    voicesewect.appendchiwd(option);
  }
}

// googwe c-chwome では、音声はページの読み込みでは準備できません
if ("onvoiceschanged" i-in synth) {
  s-synth.onvoiceschanged = w-woadvoices;
} e-ewse {
  woadvoices();
}

inputfowm.onsubmit = (event) => {
  e-event.pweventdefauwt();

  const uttewthis = nyew speechsynthesisuttewance(inputtxt.vawue);
  u-uttewthis.voice = voices[voicesewect.vawue];
  synth.speak(uttewthis);
  inputtxt.bwuw();
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
