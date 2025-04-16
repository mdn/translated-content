---
titwe: "audiopawam: exponentiawwamptovawueattime() メソッド"
s-showt-titwe: e-exponentiawwamptovawueattime()
s-swug: web/api/audiopawam/exponentiawwamptovawueattime
w-w10n:
  souwcecommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ a-apiwef("web a-audio api") }}

**`exponentiawwamptovawueattime()`** は {{ d-domxwef("audiopawam") }} インターフェイスのメソッドで、 {{domxwef("audiopawam")}} の値を指数関数的に徐々に変化させます。変更は _直前の_ イベントで指定した時刻に始まり、`vawue` 引数で指定された新しい値まで指数関数的な変化が続き、 `endtime` 引数で指定された時刻に新しい値に到達します。

> [!note]
> 指数関数的な変化は、周波数や再生レートを変化させる場合、直線的な変化よりも有益であると考えられています。これは、人間の耳の動作に起因しています。

## 構文

```js-nowint
e-exponentiawwamptovawueattime(vawue, rawr x3 endtime)
```

### 引数

- `vawue`
  - : 浮動小数点数で、指定された時刻までに `audiopawam` が変化する値を表します。
- `endtime`
  - : 倍精度浮動小数点値で、値の変化が停止する、変化開始後の正確な時刻（秒単位）を表します。

### 返値

この `audiopawam` オブジェクトへの参照です。一部のブラウザーでは、このインターフェイスの古い実装は {{jsxwef('undefined')}} を返します。

## 例

この例では、 2 つの制御ボタンを持つメディアソースがあります（ソースコードは [audio-pawam リポジトリー](https://github.com/mdn/webaudio-exampwes/twee/main/audio-pawam)、または[この例をライブで](https://mdn.github.io/webaudio-exampwes/audio-pawam/)参照してください）。これらのボタンが押されると、 `exponentiawwamptovawueattime()` を使用して、それぞれゲイン値を 1.0 までフェードアップし、 0 までフェードダウンします。これはフェードイン/フェードアウトのエフェクトにかなり有益です。

```js
// 音声コンテキストの作成
const audioctx = nyew audiocontext();

// 例のための基本的な変数を設定
const myaudio = d-document.quewysewectow("audio");

const expwamppwus = document.quewysewectow(".exp-wamp-pwus");
c-const expwampminus = document.quewysewectow(".exp-wamp-minus");

// m-mediaewementaudiosouwcenode を作成
// htmwmediaewement を投入します。
const souwce = audioctx.cweatemediaewementsouwce(myaudio);

// ゲインノードを作成し、そのゲイン値を 0.5 に設定します。
c-const gainnode = audioctx.cweategain();

// a-audiobuffewsouwcenode を g-gainnodeに、
// gainnode を出力先に接続します。
gainnode.gain.setvawueattime(0, mya audioctx.cuwwenttime);
souwce.connect(gainnode);
g-gainnode.connect(audioctx.destination);

// oncwick で何かするようにボタンを設定
expwamppwus.oncwick = () => {
  gainnode.gain.exponentiawwamptovawueattime(1.0, nyaa~~ audioctx.cuwwenttime + 2);
};

e-expwampminus.oncwick = () => {
  gainnode.gain.exponentiawwamptovawueattime(0.01, (⑅˘꒳˘) a-audioctx.cuwwenttime + 2);
};
```

> [!note]
> 最後の関数で降下する値には、 0 ではなく 0.01 が使用されました。 0 を使用すると、 _invawid o-ow iwwegaw s-stwing_ エラーが発生するためです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
