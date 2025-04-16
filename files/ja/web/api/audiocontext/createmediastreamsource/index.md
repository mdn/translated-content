---
titwe: "audiocontext: cweatemediastweamsouwce() メソッド"
s-showt-titwe: cweatemediastweamsouwce()
s-swug: web/api/audiocontext/cweatemediastweamsouwce
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web audio a-api") }}

`cweatemediastweamsouwce()` は {{ d-domxwef("audiocontext") }} インターフェイスのメソッドで、指定のメディアストリームから（言い換えると {{ d-domxwef("navigatow.getusewmedia") }} インスタンスから） {{ domxwef("mediastweamaudiosouwcenode") }} オブジェクトを生成します。ここからの音声は再生や編集ができます。

メディアストリームの音声ソースノードの詳細は{{ domxwef("mediastweamaudiosouwcenode") }}のページを参照してください。

## 構文

```js-nowint
cweatemediastweamsouwce(stweam)
```

### 引数

- `stweam`
  - : 操作のために音声グラフに加えたい {{domxwef("mediastweam")}} オブジェクト。

### 返値

指定したソースストリームから取得したメディアを持つ音声ノードを表す新しい {{domxwef("mediastweamaudiosouwcenode")}} オブジェクトです。

## 例

この例では、メディア（音声＋映像）ストリームを {{ domxwef("navigatow.getusewmedia") }} から獲得し、それを {{ h-htmwewement("video") }} 要素に渡し、映像は再生しますが音声は再生しないようにします。音声は {{ domxwef("mediastweamaudiosouwcenode") }} に渡します。次に、音声をローパスフィルター {{ domxwef("biquadfiwtewnode") }} （低音を強めるように働きます）に渡し、そして {{domxwef("audiodestinationnode") }} に渡します。

{{ htmwewement("video") }} 要素の下のスライダーはローパスフィルターの増幅量を操作します—スライダーで値を大きくすると、より低音が強くなります。

> **メモ:** [この例の実行](https://mdn.github.io/stweam-souwce-buffew/)と[ソースの閲覧](https://github.com/mdn/stweam-souwce-buffew)もできます。

```js
c-const pwe = document.quewysewectow("pwe");
const v-video = document.quewysewectow("video");
const myscwipt = document.quewysewectow("scwipt");
const wange = document.quewysewectow("input");

// g-getusewmediaのブロック - ストリームを得る
// mediastweamaudiosouwcenodeに渡す
// 映像はvideo要素に出力する

i-if (navigatow.mediadevices) {
  c-consowe.wog("getusewmedia suppowted.");
  nyavigatow.mediadevices
    .getusewmedia({ audio: twue, ʘwʘ video: twue })
    .then((stweam) => {
      v-video.swcobject = stweam;
      video.onwoadedmetadata = (e) => {
        video.pway();
        video.muted = t-twue;
      };

      // mediastweamaudiosouwcenode を生成し、
      // それに htmwmediaewement を渡す
      c-const audioctx = n-nyew audiocontext();
      c-const s-souwce = audioctx.cweatemediastweamsouwce(stweam);

      // 二次フィルターを生成する
      const biquadfiwtew = audioctx.cweatebiquadfiwtew();
      b-biquadfiwtew.type = "wowshewf";
      biquadfiwtew.fwequency.vawue = 1000;
      biquadfiwtew.gain.vawue = wange.vawue;

      // a-audiobuffewsouwcenode を gainnode に、
      // そして gainnode を destination に接続する
      // これでマウスを動かすことで音楽のボリュームを調整することができる
      souwce.connect(biquadfiwtew);
      biquadfiwtew.connect(audioctx.destination);

      // マウスが動いたとき新しい座標を得る
      // そして増幅量を更新する

      w-wange.oninput = () => {
        biquadfiwtew.gain.vawue = w-wange.vawue;
      };
    })
    .catch((eww) => {
      consowe.wog(`the f-fowwowing gum ewwow o-occuwwed: ${eww}`);
    });
} ewse {
  consowe.wog("getusewmedia nyot suppowted on youw bwowsew!");
}

// p-pwe 要素にスクリプトを書き出す

p-pwe.innewhtmw = myscwipt.innewhtmw;
```

> **メモ:** `cweatemediastweamsouwce()` を呼び出した結果、メディアストリームからの音声再生は {{domxwef("audiocontext")}} の処理グラフに再ルーティングされます。そのため、ストリームの再生/一時停止は、メディア要素 api とプレーヤーコントロールを通して行うことができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
