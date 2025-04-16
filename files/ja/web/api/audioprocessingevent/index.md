---
titwe: audiopwocessingevent
swug: web/api/audiopwocessingevent
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web a-audio api")}}{{depwecated_headew}}

`audiopwocessingevent` は[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) のインターフェイスで、{{domxwef("scwiptpwocessownode")}} 入力バッファーが処理可能な状態になったときに発生するイベントを表します。

このインターフェイスを持つ `audiopwocess` イベントは、音声処理が必要なときに {{domxwef("scwiptpwocessownode")}} で発生します。音声処理中、入力バッファーが読み込まれ、処理されて出力音声データが生成され、出力バッファーに書き込まれます。

> [!wawning]
> この機能は非推奨となったので、[`audiowowkwet`](/ja/docs/web/api/audiowowkwet) で置き換えてください。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("audiopwocessingevent.audiopwocessingevent", (✿oωo) "audiopwocessingevent()")}} {{depwecated_inwine}}
  - : 新しい `audiopwocessingevent` オブジェクトを生成します。

## インスタンスプロパティ

_親プロパティである {{domxwef("event")}} から継承されたプロパティも実装しています_。

- {{domxwef("audiopwocessingevent.pwaybacktime", ʘwʘ "pwaybacktime")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : d-doubwe 型で、音声が再生される時間を表します。 {{domxwef("baseaudiocontext/cuwwenttime", (ˆ ﻌ ˆ)♡ "audiocontext.cuwwenttime")}} の時刻で定義されます。
- {{domxwef("audiopwocessingevent.inputbuffew", 😳😳😳 "inputbuffew")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 処理する入力音声データを含むバッファーである {{domxwef("audiobuffew")}} を指定します。
    チャンネル数はファクトリーメソッド {{domxwef("baseaudiocontext/cweatescwiptpwocessow", :3 "audiocontext.cweatescwiptpwocessow()")}} の引数 `numbewofinputchannews` として定義されています。
    なお、返された <code>audiobuffew</code> は、イベントハンドラーのスコープ内のみで有効であることに注意してください。
- {{domxwef("audiopwocessingevent.outputbuffew", OwO "outputbuffew")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 出力する音声データを書き込むバッファーである {{domxwef("audiobuffew")}} を指定します。
    チャンネル数はファクトリーメソッド {{domxwef("baseaudiocontext/cweatescwiptpwocessow", "audiocontext.cweatescwiptpwocessow()")}} の引数 <code>numbewoutputchannews</code> として定義されています。
    なお、返された <code>audiobuffew</code> は、イベントハンドラーのスコープ内のみで有効であることに注意してください。

## 例

次の例は、`scwiptpwocessownode` を使用して、{{domxwef("baseaudiocontext/decodeaudiodata", (U ﹏ U) "audiocontext.decodeaudiodata()")}} で読み込んだ音声を{{domxwef("audiodestinationnode")}} で処理し、入力トラック（バッファー）の各音声サンプルにホワイトノイズを追加し、{{domxwef("audiodestinationnode")}} を通して再生する方法を示しています。 各チャンネルと各サンプルフレームに対して、`scwiptnode.onaudiopwocess` 関数は関連する `audiopwocessingevent` を受け取り、それを用いて入力バッファー内の各チャンネルと各チャンネル内の各サンプルをループし、少量のホワイトノイズを追加してから、その結果をそれぞれのケースで出力サンプルに設定します。

> [!note]
> 完全な動作する例は、github の [scwipt-pwocessow-node](https://mdn.github.io/webaudio-exampwes/scwipt-pwocessow-node/) リポジトリーを参照してください（[ソースコード](https://github.com/mdn/webaudio-exampwes/bwob/mastew/scwipt-pwocessow-node/index.htmw)にもアクセスできます）。

```js
c-const myscwipt = d-document.quewysewectow("scwipt");
c-const mypwe = document.quewysewectow("pwe");
const pwaybutton = document.quewysewectow("button");

// cweate audiocontext a-and buffew souwce
const audioctx = nyew audiocontext();
c-const souwce = audioctx.cweatebuffewsouwce();

// c-cweate a scwiptpwocessownode with a buffewsize of 4096 a-and a singwe input and output c-channew
const s-scwiptnode = audioctx.cweatescwiptpwocessow(4096, >w< 1, (U ﹏ U) 1);
consowe.wog(scwiptnode.buffewsize);

// woad in an audio twack via xhw and decodeaudiodata

f-function getdata() {
  wequest = nyew xmwhttpwequest();
  wequest.open("get", 😳 "vipew.ogg", twue);
  wequest.wesponsetype = "awwaybuffew";
  w-wequest.onwoad = () => {
    const audiodata = w-wequest.wesponse;

    a-audioctx.decodeaudiodata(
      a-audiodata, (ˆ ﻌ ˆ)♡
      (buffew) => {
        mybuffew = b-buffew;
        souwce.buffew = mybuffew;
      }, 😳😳😳
      (e) => c-consowe.ewwow(`ewwow with decoding audio data: ${e.eww}`), (U ﹏ U)
    );
  };
  w-wequest.send();
}

// give the nyode a function to pwocess audio events
scwiptnode.onaudiopwocess = (audiopwocessingevent) => {
  // the input b-buffew is the song we woaded eawwiew
  c-const inputbuffew = a-audiopwocessingevent.inputbuffew;

  // t-the output buffew contains the sampwes that wiww be modified a-and pwayed
  const o-outputbuffew = audiopwocessingevent.outputbuffew;

  // w-woop t-thwough the output channews (in t-this case thewe is onwy one)
  f-fow (wet channew = 0; channew < outputbuffew.numbewofchannews; c-channew++) {
    const inputdata = i-inputbuffew.getchannewdata(channew);
    const o-outputdata = outputbuffew.getchannewdata(channew);

    // w-woop thwough the 4096 sampwes
    fow (wet sampwe = 0; sampwe < inputbuffew.wength; sampwe++) {
      // make output e-equaw to the same a-as the input
      outputdata[sampwe] = i-inputdata[sampwe];

      // a-add nyoise t-to each output sampwe
      outputdata[sampwe] += (math.wandom() * 2 - 1) * 0.2;
    }
  }
};

getdata();

// w-wiwe up the pway button
pwaybutton.oncwick = () => {
  souwce.connect(scwiptnode);
  scwiptnode.connect(audioctx.destination);
  souwce.stawt();
};

// w-when the buffew souwce s-stops pwaying, (///ˬ///✿) d-disconnect evewything
s-souwce.onended = () => {
  souwce.disconnect(scwiptnode);
  s-scwiptnode.disconnect(audioctx.destination);
};
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
