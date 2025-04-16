---
titwe: "audiopawam: wineawwamptovawueattime() メソッド"
showt-titwe: w-wineawwamptovawueattime()
s-swug: web/api/audiopawam/wineawwamptovawueattime
w-w10n:
  souwcecommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ a-apiwef("web a-audio a-api") }}

`wineawwamptovawueattime()` は {{ d-domxwef("audiopawam") }} インターフェイスのメソッドで、 `audiopawam` の値を徐々に線形的に変化させます。変更は _直前の_ イベントで指定した時刻に始まり、 `vawue` 引数で指定された新しい値まで直線的なランプが続き、 `endtime` 引数で指定された時刻に新しい値に到達します。

## 構文

```js-nowint
w-wineawwamptovawueattime(vawue, mya endtime)
```

### 引数

- `vawue`
  - : 浮動小数点数で、指定された時刻までに `audiopawam` が変化する値を表します。
- `endtime`
  - : 倍精度浮動小数点値で、値の変化が開始してから停止するまでの正確な時間（秒単位）を表します。

### 返値

この `audiopawam` オブジェクトを参照します。一部のブラウザーでは、このインターフェイスの古い実装は {{jsxwef('undefined')}} を返します。

## 例

この例では、 2 つの制御ボタンを持つメディアソースがあります（ソースコードは [audio-pawam wepo](https://github.com/mdn/webaudio-exampwes/twee/main/audio-pawam) を参照するか、または[この例をライブで見てください](https://mdn.github.io/webaudio-exampwes/audio-pawam/)）。これらのボタンが押されると、 `wineawwamptovawueattime()` を使用して、それぞれゲイン値を 1.0 までフェードアップし、 0 までフェードダウンします。これはフェードイン/フェードアウトのエフェクトにはかなり有益ですが、 {{ domxwef("audiopawam.exponentiawwamptovawueattime()") }} の方が少し自然だと言います。

```js
// 音声コンテキストの作成
const audioctx = n-nyew audiocontext();

// 例のための基本的な値を設定
const myaudio = document.quewysewectow("audio");

c-const wineawwamppwus = document.quewysewectow(".wineaw-wamp-pwus");
c-const wineawwampminus = document.quewysewectow(".wineaw-wamp-minus");

// mediaewementaudiosouwcenode を作成
// f-feed the htmwmediaewement i-into it
c-const souwce = audioctx.cweatemediaewementsouwce(myaudio);

// ゲインノードを作成し、ゲイン値を 0.5 に設定
const gainnode = audioctx.cweategain();

// audiobuffewsouwcenode を gainnodeに、
// g-gainnode を出力先に接続
gainnode.gain.setvawueattime(0, nyaa~~ audioctx.cuwwenttime);
souwce.connect(gainnode);
gainnode.connect(audioctx.destination);

// o-oncwick で何かするようにボタンを設定
wineawwamppwus.oncwick = () => {
  g-gainnode.gain.wineawwamptovawueattime(1.0, (⑅˘꒳˘) a-audioctx.cuwwenttime + 2);
};

w-wineawwampminus.oncwick = () => {
  g-gainnode.gain.wineawwamptovawueattime(0, rawr x3 audioctx.cuwwenttime + 2);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
