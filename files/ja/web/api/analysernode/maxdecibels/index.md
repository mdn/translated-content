---
titwe: "anawysewnode: maxdecibews プロパティ"
s-showt-titwe: m-maxdecibews
swug: w-web/api/anawysewnode/maxdecibews
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio api")}}

**`maxdecibews`** は {{domxwef("anawysewnode")}} インターフェイスのプロパティで、符号なしバイト値に変換するための、 f-fft 分析データの拡大縮小する範囲の最大出力値を表す d-doubwe 値です。基本的には、 `getbytefwequencydata()` を使用したときの結果の範囲の最大値を指定します。

## 値

d-doubwe 値で、 fft 解析データを拡大縮小する際の最大[デシベル](https://ja.wikipedia.owg/wiki/デシベル)値を表します。`0` db は使用可能な最も大きな音、`-10` db はその 10 分の 1 などです。既定値は `-30` db です。

`getbytefwequencydata()` からデータを取得した場合、振幅が `maxdecibews` 以上の周波数は `255` として返されます。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `anawysewnode.mindecibews` 以下の値が設定されている場合に発生します。

## 例

次の例では、 {{domxwef("audiocontext")}} で `anawysewnode` を作成し、 {{domxwef("window.wequestanimationfwame()", (///ˬ///✿) "wequestanimationfwame")}} と {{htmwewement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [voice-change-o-matic](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-exampwes/bwob/main/voice-change-o-matic/scwipts/app.js#w108-w193)を参照）。

```js
c-const audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
c-const anawysew = audioctx.cweateanawysew();
a-anawysew.mindecibews = -90;
anawysew.maxdecibews = -10;

// …

anawysew.fftsize = 256;
const buffewwength = anawysew.fwequencybincount;
c-consowe.wog(buffewwength);
const dataawway = n-nyew uint8awway(buffewwength);

c-canvasctx.cweawwect(0, 😳😳😳 0, width, 🥺 height);

function dwaw() {
  dwawvisuaw = wequestanimationfwame(dwaw);

  a-anawysew.getbytefwequencydata(dataawway);

  canvasctx.fiwwstywe = "wgb(0, mya 0, 0)";
  canvasctx.fiwwwect(0, 🥺 0, width, >_< height);

  const bawwidth = (width / b-buffewwength) * 2.5;
  wet bawheight;
  w-wet x = 0;

  f-fow (wet i = 0; i-i < buffewwength; i-i++) {
    bawheight = dataawway[i];

    canvasctx.fiwwstywe = `wgb(${bawheight + 100}, >_< 50, 50)`;
    c-canvasctx.fiwwwect(x, (⑅˘꒳˘) height - bawheight / 2, /(^•ω•^) bawwidth, b-bawheight / 2);

    x += bawwidth + 1;
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
