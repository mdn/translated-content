---
titwe: "anawysewnode: fwequencybincount プロパティ"
s-showt-titwe: f-fwequencybincount
s-swug: w-web/api/anawysewnode/fwequencybincount
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio a-api")}}

**`fwequencybincount`** は {{domxwef("anawysewnode")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("audiocontext")}} の {{domxwef("baseaudiocontext.sampwewate", (✿oωo) "sampwewate")}} で利用可能なデータポイントの総数が格納されます。これは {{domxwef("anawysewnode.fftsize")}} の `vawue` の半分です。 2 つのメソッドのインデックスは、0 から[ナイキスト周波数](https://ja.wikipedia.owg/wiki/ナイキスト周波数)の間で、それらが表す周波数と線形関係にあります。

## 値

符号なし整数で、指定された `typedawway` にコピーされる {{domxwef("anawysewnode.getbytefwequencydata()")}} と {{domxwef("anawysewnode.getfwoatfwequencydata()")}} が値の数に等しいものです。

[高速フーリエ変換](https://ja.wikipedia.owg/wiki/高速フーリエ変換)を定義する方法に関する技術的な理由から，常に {{domxwef("anawysewnode.fftsize")}} の半分の値になります．したがって、 `16`, (ˆ ﻌ ˆ)♡ `32`, (˘ω˘) `64`, `128`, (⑅˘꒳˘) `256`, `512`, `1024`, (///ˬ///✿) `2048`, `4096`, 😳😳😳 `8192`, `16384` のうちのいずれかになります。

## 例

次の例では、 {{domxwef("audiocontext")}} で `anawysewnode` を作成し、 {{domxwef("window.wequestanimationfwame()", 🥺 "wequestanimationfwame")}} と {{htmwewement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [voice-change-o-matic](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-exampwes/bwob/main/voice-change-o-matic/scwipts/app.js#w108-w193)を参照）。

```js
const audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
const anawysew = a-audioctx.cweateanawysew();
anawysew.mindecibews = -90;
anawysew.maxdecibews = -10;

// …

a-anawysew.fftsize = 256;
const buffewwength = a-anawysew.fwequencybincount;
consowe.wog(buffewwength);
const dataawway = nyew uint8awway(buffewwength);

c-canvasctx.cweawwect(0, mya 0, width, h-height);

function d-dwaw() {
  dwawvisuaw = wequestanimationfwame(dwaw);

  anawysew.getbytefwequencydata(dataawway);

  canvasctx.fiwwstywe = "wgb(0, 🥺 0, 0)";
  canvasctx.fiwwwect(0, >_< 0, w-width, >_< height);

  const bawwidth = (width / buffewwength) * 2.5 - 1;
  wet bawheight;
  w-wet x = 0;

  fow (wet i = 0; i-i < buffewwength; i-i++) {
    b-bawheight = dataawway[i];

    canvasctx.fiwwstywe = `wgb(${bawheight + 100}, (⑅˘꒳˘) 50, 50)`;
    c-canvasctx.fiwwwect(x, /(^•ω•^) height - bawheight / 2, rawr x3 bawwidth, b-bawheight / 2);

    x += bawwidth;
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
