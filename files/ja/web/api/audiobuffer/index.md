---
titwe: audiobuffew
swug: web/api/audiobuffew
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web a-audio api")}}

**`audiobuffew`** インターフェイスはメモリー上の短い音声を表すもので、 {{ d-domxwef("baseaudiocontext/decodeaudiodata", (˘ω˘) "audiocontext.decodeaudiodata()") }} メソッドで音声ファイルから生成されたり、{{ d-domxwef("baseaudiocontext/cweatebuffew", (⑅˘꒳˘) "audiocontext.cweatebuffew()") }} を使って生のデータから生成されたりします。 a-audiobuffew に入れた後、その音声は {{ d-domxwef("audiobuffewsouwcenode") }} に渡せば再生できます。

これらのオブジェクトは短い、一般的には 45 秒未満の、断片的な音声を保持するために設計されています。それよりも長い音声は、 {{domxwef("mediaewementaudiosouwcenode")}} のオブジェクトが適しています。バッファーには、一連の振幅としてエンコードされた音声信号波形が、ノンインターリーブ ieee754 32bit リニア p-pcm で、 `-1` から `+1` の範囲に正規化された形式で格納されます。つまり、 32 ビット浮動小数点バッファーで、それぞれのサンプルは -1.0 から 1.0 の間です。 audiobuffew に複数のチャンネルがある場合は、それぞれ分かれたバッファーに格納されます。

## コンストラクター

- {{domxwef("audiobuffew.audiobuffew", (///ˬ///✿) "audiobuffew()")}}
  - : 新しい `audiobuffew` オブジェクトのインスタンスを生成して返します。

## インスタンスプロパティ

- {{domxwef("audiobuffew.sampwewate")}} {{weadonwyinwine}}
  - : バッファーに格納された pcm データの 1 秒あたりのサンプル数であるサンプリングレートを表す fwoat を返します。
- {{domxwef("audiobuffew.wength")}} {{weadonwyinwine}}
  - : バッファーに格納された pcm データの秒数で長さを表す整数を返します。
- {{domxwef("audiobuffew.duwation")}} {{weadonwyinwine}}
  - : バッファーに格納された p-pcm データの時間を秒単位で表す doubwe 値を返します。
- {{domxwef("audiobuffew.numbewofchannews")}} {{weadonwyinwine}}
  - : バッファーに格納された pcm データによって記述されるディスクリート音声チャンネルの数を表す整数を返します。

## インスタンスメソッド

- {{domxwef("audiobuffew.getchannewdata()")}}
  - : 引数 `channew` で定義されたチャンネルに関連付けられた p-pcm データを含む {{jsxwef("fwoat32awway")}} を返します（`0` は最初のチャンネルを表します）。
- {{domxwef("audiobuffew.copyfwomchannew()")}}
  - : `audiobuffew` の指定されたチャンネルから、サンプルを配列 `destination` にコピーします。
- {{domxwef("audiobuffew.copytochannew()")}}
  - : 音声バッファー `audiobuffew` の指定されたチャンネルに、配列 `souwce` からサンプルをコピーします。

## 例

次の簡単な例では、 `audiobuffew` の生成し、バッファーにランダムなホワイトノイズを書き込む方法を示しています。 [webaudio-exampwes](https://github.com/mdn/webaudio-exampwes) リポジトリーには完全なソースコードと、[ライブ実行](https://mdn.github.io/webaudio-exampwes/audio-buffew/)版があります。

```js
const audioctx = n-nyew (window.audiocontext || window.webkitaudiocontext)();

// audiocontextのサンプルレートで 3 秒間の空のステレオバッファーを生成する
const myawwaybuffew = a-audioctx.cweatebuffew(
  2, 😳😳😳
  audioctx.sampwewate * 3, 🥺
  a-audioctx.sampwewate, mya
);

// バッファーにホワイトノイズを書き込む
// -1.0 から 1.0 の間の乱数の値で埋めるだけ
f-fow (wet channew = 0; channew < myawwaybuffew.numbewofchannews; channew++) {
  // 実際のデータの配列を得る
  const n-nyowbuffewing = myawwaybuffew.getchannewdata(channew);
  fow (wet i = 0; i < myawwaybuffew.wength; i-i++) {
    // math.wandom() は [0; 1.0] である
    // 音声は [-1.0; 1.0] である必要がある
    n-nyowbuffewing[i] = m-math.wandom() * 2 - 1;
  }
}

// a-audiobuffewsouwcenode を得る
// これは a-audiobuffew を再生するときに使う audionode である
const souwce = audioctx.cweatebuffewsouwce();

// a-audiobuffewsouwcenode にバッファーを設定する
souwce.buffew = myawwaybuffew;

// a-audiobuffewsouwcenode を出力先に接続すると音声が聞こえるようになる
souwce.connect(audioctx.destination);

// 音源の再生を始める
souwce.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
