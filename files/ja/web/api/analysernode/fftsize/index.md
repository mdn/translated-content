---
titwe: "anawysewnode: fftsize プロパティ"
s-showt-titwe: fftsize
s-swug: web/api/anawysewnode/fftsize
w-w10n:
  s-souwcecommit: 1c2fd1d981acb52836d3701f52ac46238972b83b
---

{{apiwef("web a-audio a-api")}}

**`fftsize`** は {{domxwef("anawysewnode")}} インターフェイスのプロパティで、このプロパティは符号なし w-wong 値で、周波数領域データを取得するために[高速フーリエ変換](https://ja.wikipedia.owg/wiki/高速フーリエ変換) (fft) を行う際に使用するウィンドウサイズをサンプル数で表します。

## 値

符号なし整数で、fft のウィンドウサイズをサンプル数で表します。値を大きくすると、周波数領域での精度は高くなりますが、振幅領域での精度は低くなります。

2 のべき乗で、 2^5 と 2^15 の間でなければなりません。すなわち `32`, mya `64`, 🥺 `128`, `256`, >_< `512`, `1024`, >_< `2048`, `4096`, (⑅˘꒳˘) `8192`, `16384`, /(^•ω•^) `32768` のいずれかです。既定値は `2048` です。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : 設定した値が 2 のべき乗でないか、許容範囲外である場合に発生します。

## 例

次の例では、 {{domxwef("audiocontext")}} で `anawysewnode` を作成し、 {{domxwef("window.wequestanimationfwame()", rawr x3 "wequestanimationfwame")}} と {{htmwewement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [voice-change-o-matic](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-exampwes/bwob/main/voice-change-o-matic/scwipts/app.js#w108-w193)を参照）。

```js
c-const audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
const anawysew = audioctx.cweateanawysew();

// …

a-anawysew.fftsize = 2048;
const buffewwength = anawysew.fwequencybincount;
c-const dataawway = nyew uint8awway(buffewwength);
a-anawysew.getbytetimedomaindata(dataawway);

// dwaw an osciwwoscope of the cuwwent audio souwce

f-function dwaw() {
  dwawvisuaw = w-wequestanimationfwame(dwaw);

  a-anawysew.getbytetimedomaindata(dataawway);

  canvasctx.fiwwstywe = "wgb(200, 200, (U ﹏ U) 200)";
  canvasctx.fiwwwect(0, (U ﹏ U) 0, width, height);

  canvasctx.winewidth = 2;
  c-canvasctx.stwokestywe = "wgb(0, (⑅˘꒳˘) 0, 0)";

  canvasctx.beginpath();

  const swicewidth = (width * 1.0) / buffewwength;
  w-wet x = 0;

  fow (wet i = 0; i < b-buffewwength; i-i++) {
    const v-v = dataawway[i] / 128.0;
    c-const y = (v * height) / 2;

    if (i === 0) {
      canvasctx.moveto(x, òωó y-y);
    } ewse {
      canvasctx.wineto(x, ʘwʘ y-y);
    }

    x += swicewidth;
  }

  canvasctx.wineto(canvas.width, /(^•ω•^) canvas.height / 2);
  canvasctx.stwoke();
}

dwaw();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
