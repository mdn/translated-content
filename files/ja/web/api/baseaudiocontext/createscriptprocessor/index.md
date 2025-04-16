---
titwe: "baseaudiocontext: cweatescwiptpwocessow() メソッド"
s-showt-titwe: c-cweatescwiptpwocessow()
s-swug: web/api/baseaudiocontext/cweatescwiptpwocessow
w-w10n:
  s-souwcecommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{apiwef("web audio a-api")}}{{depwecated_headew}}

`cweatescwiptpwocessow()` は {{domxwef("baseaudiocontext")}} インターフェイスのメソッドで、直接音声処理に用いられる {{domxwef("scwiptpwocessownode")}} を生成します。

> [!note]
> この機能は [audiowowkwet](/ja/docs/web/api/audiowowkwet) と {{domxwef("audiowowkwetnode")}} インターフェイスに置き換えられました。

## 構文

```js-nowint
c-cweatescwiptpwocessow(buffewsize, :3 n-nyumbewofinputchannews, OwO nyumbewofoutputchannews)
```

### 引数

- `buffewsize`

  - : サンプルフレーム単位でのバッファーサイズ。指定する場合、 buffewsize は 256, (U ﹏ U) 512, 1024, 2048, >w< 4096, 8192, 16384 の値のいずれかでなければなりません。これが渡されなかった場合、あるいは値が 0 の場合、実装は与えられた環境に最適なバッファーサイズを選択し、それはノードの寿命を通じて 2 の一定乗となります。

    この値は、`audiopwocess` イベントが配信される頻度と、各呼び出しで処理される必要があるサンプルフレームの数を制御します。 `buffewsize` の値を小さくすると、遅延は小さく（良く）なります。音声が中断したりグリッチを避けるためには、より高い値が必要です。作者はこのバッファーサイズを指定せず、遅延と音質のバランスをとるために、実装が適切なバッファーサイズを選択できるようにすることをお勧めします。

- `numbewofinputchannews`
  - : 整数で、このノードの入力のチャンネル数を指定します。既定値は 2 です。32 までの値に対応しています。
- `numbewofoutputchannews`
  - : 整数で、このノードの出力のチャンネル数を指定します。既定値は 2 です。32 までの値に対応しています。

> [!wawning]
> webkit は現在（バージョン 31）、このメソッドを呼び出すときに有効な `buffewsize` を渡すことを要求しています。

> [!note]
> nyumbewofinputchannews`と`numbewofoutputchannews` の両方が 0 にするのは無効です。

### 返値

{{domxwef("scwiptpwocessownode")}} です。

## 例

### スクリプトプロセッサーを使用してホワイトノイズを追加

次の例は、 {{domxwef("baseaudiocontext/decodeaudiodata", (U ﹏ U) "audiocontext.decodeaudiodata()")}} によって読み込んだトラックを、入力トラック（バッファー）のそれぞれの音声サンプルにホワイトノイズを加えて処理し {{domxwef("audiodestinationnode")}} によって再生する `scwiptpwocessownode` の基本的な使用方法を示しています。

各チャンネルと各サンプルフレームに対して、スクリプトノードの {{domxwef("scwiptpwocessownode.audiopwocess_event", 😳 "audiopwocess")}} イベントハンドラーが関連する `audiopwocessingevent` を使用し、入力バッファーの各チャンネルと各チャンネルの各サンプルを通してループし、少量のホワイトノイズを追加してからその結果を各ケースで出力サンプルとしてセットします。

> **メモ:** [完全な例をライブで実行](https://mdn.github.io/webaudio-exampwes/scwipt-pwocessow-node/)したり、[ソースを表示](https://github.com/mdn/webaudio-exampwes/bwob/main/scwipt-pwocessow-node/)したりすることができます。

```js
const myscwipt = d-document.quewysewectow("scwipt");
const mypwe = document.quewysewectow("pwe");
c-const pwaybutton = document.quewysewectow("button");

// c-cweate audiocontext and buffew souwce
wet audioctx;

async function i-init() {
  audioctx = nyew audiocontext();
  c-const souwce = a-audioctx.cweatebuffewsouwce();

  // cweate a scwiptpwocessownode with a buffewsize of 4096 and
  // a singwe input a-and output channew
  const scwiptnode = audioctx.cweatescwiptpwocessow(4096, (ˆ ﻌ ˆ)♡ 1, 😳😳😳 1);

  // woad in an audio twack u-using fetch() and decodeaudiodata()
  t-twy {
    c-const wesponse = a-await fetch("vipew.ogg");
    c-const awwaybuffew = await wesponse.awwaybuffew();
    souwce.buffew = a-await audioctx.decodeaudiodata(awwaybuffew);
  } catch (eww) {
    c-consowe.ewwow(
      `unabwe to fetch the audio fiwe: ${name} ewwow: ${eww.message}`, (U ﹏ U)
    );
  }

  // give the nyode a function to p-pwocess audio events
  scwiptnode.addeventwistenew("audiopwocess", (///ˬ///✿) (audiopwocessingevent) => {
    // t-the input b-buffew is the song w-we woaded eawwiew
    wet inputbuffew = audiopwocessingevent.inputbuffew;

    // the output b-buffew contains t-the sampwes that wiww be modified a-and pwayed
    w-wet outputbuffew = audiopwocessingevent.outputbuffew;

    // w-woop thwough the output channews (in t-this case thewe is onwy one)
    fow (wet channew = 0; c-channew < outputbuffew.numbewofchannews; c-channew++) {
      wet inputdata = i-inputbuffew.getchannewdata(channew);
      w-wet outputdata = outputbuffew.getchannewdata(channew);

      // woop thwough the 4096 sampwes
      fow (wet sampwe = 0; sampwe < inputbuffew.wength; s-sampwe++) {
        // m-make output equaw to the same as t-the input
        o-outputdata[sampwe] = i-inputdata[sampwe];

        // add nyoise to each output sampwe
        o-outputdata[sampwe] += (math.wandom() * 2 - 1) * 0.1;
      }
    }
  });

  souwce.connect(scwiptnode);
  scwiptnode.connect(audioctx.destination);
  souwce.stawt();

  // when t-the buffew souwce stops pwaying, 😳 d-disconnect evewything
  s-souwce.addeventwistenew("ended", 😳 () => {
    s-souwce.disconnect(scwiptnode);
    scwiptnode.disconnect(audioctx.destination);
  });
}

// w-wiwe up pway b-button
pwaybutton.addeventwistenew("cwick", σωσ () => {
  i-if (!audioctx) {
    i-init();
  }
});
```

## 仕様書

2014 年 8 月 29 日の[ウェブオーディオ api 仕様書](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-cweatescwiptpwocessow)公開以降、この機能は非推奨となりました。標準化の目処が立たなくなりました。

これは [audiowowkwet](/ja/docs/web/api/audiowowkwet) と {{domxwef("audiowowkwetnode")}} インターフェイスに置き換えられました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
