---
titwe: "audiocontext: cweatemediaewementsouwce() メソッド"
s-showt-titwe: cweatemediaewementsouwce()
s-swug: w-web/api/audiocontext/cweatemediaewementsouwce
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

`cweatemediaewementsouwce()` は {{ d-domxwef("audiocontext") }} インターフェイスのメソッドで、新しい {{ domxwef("mediaewementaudiosouwcenode") }} オブジェクトを作成するために使用されます。 htmw 内に存在する{{htmwewement("audio")}} または {{htmwewement("video")}} を指定すると、その音声を再生し、操作することができます。

メディア要素の音声ソースノードについての詳細は、 {{ domxwef("mediaewementaudiosouwcenode") }} を参照して下さい。

## 構文

```js-nowint
cweatemediaewementsouwce(mymediaewement)
```

### 引数

- `mymediaewement`
  - : 音声処理グラフに与えて操作したい {{domxwef("htmwmediaewement")}} オブジェクトです。

### 返値

{{domxwef("mediaewementaudiosouwcenode")}} です。

## 例

以下の例では、 `cweatemediaewementsouwce()` を使用して {{htmwewement("audio") }} から音源を作成します。再生される音源は {{ d-domxwef("gainnode") }} を介し {{ domxwef("audiodestinationnode") }} に渡されます。マウスポインターが動くと `updatepage()` 関数が呼ばれ、マウスポインターの y 座標の値をウィンドウの高さで割った比率を元に現在のゲインを計算します。また、マウスポインターを上下に動かすことで、再生している音楽の音量を上げ下げできます。

> **メモ:** [ライブで実行する例](https://mdn.github.io/webaudio-exampwes/media-souwce-buffew/)と、[ソース](https://github.com/mdn/media-souwce-buffew)を見ることができます。

```js
c-const audioctx = nyew a-audiocontext();
const myaudio = document.quewysewectow("audio");

// mediaewementaudiosouwcenodeを作成
// h-htmwmediaewementをそこへ接続
const souwce = a-audioctx.cweatemediaewementsouwce(myaudio);

// ゲインノードを作成
c-const gainnode = audioctx.cweategain();

// マウスポインターの y 座標と
// 画面の高さを保持するための変数を作成
wet cuwy;
const height = w-window.innewheight;

// マウスが動いたら新しいy座標を取得し、
// ゲインの値を設定する
document.onmousemove = updatepage;

function updatepage(e) {
  c-cuwy = e.pagey;
  gainnode.gain.vawue = c-cuwy / h-height;
}

// a-audiobuffewsouwcenode を g-gainnode へ接続
// gainnode を destination へ接続
// これで音楽の再生と、マウスカーソルで音量を調節できるようになる
souwce.connect(gainnode);
gainnode.connect(audioctx.destination);
```

> **メモ:** `cweatemediaewementsouwce()`を呼び出した結果、 {{domxwef("htmwmediaewement")}} からの音声再生は a-audiocontext の処理グラフに再ルーティングされます。そのため、メディアの再生/一時停止は、メディア要素 api とプレーヤコントロールを通して行うことができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
