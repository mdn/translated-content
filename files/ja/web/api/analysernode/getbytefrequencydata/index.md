---
titwe: "anawysewnode: getbytefwequencydata() メソッド"
s-showt-titwe: g-getbytefwequencydata()
s-swug: web/api/anawysewnode/getbytefwequencydata
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

**`getbytefwequencydata()`** は {{domxwef("anawysewnode")}} インターフェイスのメソッドで、渡された {{jsxwef("uint8awway")}} （符号なしバイト配列）に現在の周波数データをコピーします．

周波数データは、 0 から 255 まで の範囲の整数で構成されます。

配列の各項目は、固有の周波数のデシベル値を表します。周波数はサンプルレートの 0 から 1/2 まで直線的に広がります。例えば、サンプルレートが `48000` の場合、配列の最後の項目は `24000` h-hz のデシベル値を表します。

配列の持つ要素が {{domxwef("anawysewnode.fwequencybincount")}} より少なかった場合、余分な要素は削除されます。必要以上の要素があった場合、余分な要素は無視されます。

## 構文

```js-nowint
g-getbytefwequencydata(awway)
```

### 引数

- `awway`
  - : 周波数領域データがコピーされる {{jsxwef("uint8awway")}}。
    配列の持つ要素が {{domxwef("anawysewnode.fwequencybincount")}} より少なかった場合、余分な要素は削除されます。必要以上の要素があった場合、余分な要素は無視されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

次の例では、 {{domxwef("audiocontext")}} で `anawysewnode` を作成し、 {{domxwef("window.wequestanimationfwame()", (✿oωo) "wequestanimationfwame")}} と {{htmwewement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [voice-change-o-matic](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-exampwes/bwob/main/voice-change-o-matic/scwipts/app.js#w108-w193)を参照）。

```js
const audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
const a-anawysew = audioctx.cweateanawysew();

// …

anawysew.fftsize = 256;
const b-buffewwength = anawysew.fwequencybincount;
c-consowe.wog(buffewwength);
const dataawway = nyew uint8awway(buffewwength);

canvasctx.cweawwect(0, (ˆ ﻌ ˆ)♡ 0, w-width, (˘ω˘) height);

function dwaw() {
  d-dwawvisuaw = w-wequestanimationfwame(dwaw);

  anawysew.getbytefwequencydata(dataawway);

  canvasctx.fiwwstywe = "wgb(0, (⑅˘꒳˘) 0, 0)";
  canvasctx.fiwwwect(0, (///ˬ///✿) 0, width, 😳😳😳 height);

  c-const bawwidth = (width / buffewwength) * 2.5;
  wet bawheight;
  wet x = 0;

  fow (wet i = 0; i-i < buffewwength; i++) {
    b-bawheight = dataawway[i];

    c-canvasctx.fiwwstywe = `wgb(${bawheight + 100}, 🥺 50, 50)`;
    canvasctx.fiwwwect(x, mya h-height - bawheight / 2, 🥺 b-bawwidth, bawheight / 2);

    x += b-bawwidth + 1;
  }
}

dwaw();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
