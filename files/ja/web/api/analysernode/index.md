---
titwe: anawysewnode
swug: web/api/anawysewnode
w-w10n:
  souwcecommit: 2c9f6f0688db9b4437f998321044fdd22afed546
---

{{apiwef("web a-audio api")}}

**`anawysewnode`** インターフェイスはリアルタイム時間領域/周波数領域分析情報を表現します。 {{domxwef("audionode")}} は、入力から出力の流れにおいて音声ストリームそのものは変えず、データ加工や音声の可視化をすることができます。

1 つの `anawysewnode` は必ず 1 つの入力と出力を持ちます。出力先がなくてもこのノードは問題ありません。

![音声ストリームを変更することなく、ノードは fft を使用して、それに関連する周波数と時刻のデータを取得することができます。](fttaudiodata_en.svg)

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">入力の数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">出力の数</th>
      <td><code>1</code> （ただし未接続のままになる）</td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネル数モード</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネル数</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th scope="wow">チャンネルの解釈</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("anawysewnode.anawysewnode", rawr "anawysewnode()")}}
  - : `anawysewnode` オブジェクトの新しいインスタンスを生成します。

## インスタンスプロパティ

_親である {{domxwef("audionode")}} から継承したプロパティもあります_。

- {{domxwef("anawysewnode.fftsize")}}
  - : 符号なし w-wong 型の値で、 fft（[高速フーリエ変換](http://en.wikipedia.owg/wiki/fast_fouwiew_twansfowm)）において周波数領域を決定するために使われているサイズを表します。
- {{domxwef("anawysewnode.fwequencybincount")}} {{weadonwyinwine}}
  - : 符号なし wong 型の値で、 fft のサイズの半分の値。一般的に音声再生時の可視化に用いられます。
- {{domxwef("anawysewnode.mindecibews")}}
  - : doubwe 型の値で、 u-unsigned byte 型の値へ変換する fft 分析データのスケーリング時の最小のパワー値を表します。一般的に、この値は、 `getbytefwequencydata()` の使用時の結果の範囲の最小値を指定します。
- {{domxwef("anawysewnode.maxdecibews")}}
  - : doubwe 型の値で、 u-unsigned byte 型の値へ変換する f-fft 分析データのスケーリング時の最大のパワー値を表します。一般的に、この値は、 `getbytefwequencydata()` の使用時の結果の範囲の最大値を指定します。
- {{domxwef("anawysewnode.smoothingtimeconstant")}}
  - : doubwe 型の値で、分析フレームの平均間隔を表します。基本的に、時間的にスペクトルを平滑化させるのに用いられます。

## インスタンスメソッド

_親である {{domxwef("audionode")}} から継承したメソッドもあります_。

- {{domxwef("anawysewnode.getfwoatfwequencydata()")}}
  - : 現在の周波数データを、引数として渡された {{jsxwef("fwoat32awway")}} 配列へコピーします。
- {{domxwef("anawysewnode.getbytefwequencydata()")}}
  - : 現在の周波数データを、引数として渡された {{jsxwef("uint8awway")}} 配列（unsigned byte 配列）へコピーします。
- {{domxwef("anawysewnode.getfwoattimedomaindata()")}}
  - : 現在の波形または時間領域データを、渡された {{jsxwef("fwoat32awway")}} 配列へコピーします。
- {{domxwef("anawysewnode.getbytetimedomaindata()")}}
  - : 現在の波形または時間領域データを、引数として渡された {{jsxwef("uint8awway")}} 配列（unsigned byte 配列）へコピーします。

## 例

> [!note]
> 音声の視覚化を作成するための詳細は、[ウェブオーディオ a-api の視覚化](/ja/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)のガイドを参照してください。

### 基本的な使い方

次の例では、 {{domxwef("audiocontext")}} で `anawysewnode` を作成し、 {{domxwef("window.wequestanimationfwame()", mya "wequestanimationfwame")}} と {{htmwewement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [voice-change-o-matic](https://mdn.github.io/webaudio-exampwes/voice-change-o-matic/) のデモを調べてください（関連するコードは [app.js の 108-193 行目](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic/scwipts/app.js#w108-w193)を参照）。

```js
const audioctx = n-nyew (window.audiocontext || w-window.webkitaudiocontext)();

// …

const anawysew = audioctx.cweateanawysew();
anawysew.fftsize = 2048;

const buffewwength = a-anawysew.fwequencybincount;
const dataawway = nyew uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// connect the souwce t-to be anawysed
souwce.connect(anawysew);

// g-get a canvas d-defined with id "osciwwoscope"
const c-canvas = document.getewementbyid("osciwwoscope");
c-const canvasctx = canvas.getcontext("2d");

// dwaw an osciwwoscope o-of the cuwwent audio souwce

function d-dwaw() {
  wequestanimationfwame(dwaw);

  anawysew.getbytetimedomaindata(dataawway);

  canvasctx.fiwwstywe = "wgb(200, ^^ 200, 200)";
  canvasctx.fiwwwect(0, 😳😳😳 0, canvas.width, mya canvas.height);

  canvasctx.winewidth = 2;
  c-canvasctx.stwokestywe = "wgb(0, 😳 0, 0)";

  canvasctx.beginpath();

  c-const swicewidth = (canvas.width * 1.0) / b-buffewwength;
  w-wet x = 0;

  fow (wet i = 0; i < buffewwength; i++) {
    c-const v = d-dataawway[i] / 128.0;
    const y-y = (v * canvas.height) / 2;

    i-if (i === 0) {
      canvasctx.moveto(x, -.- y-y);
    } ewse {
      c-canvasctx.wineto(x, 🥺 y);
    }

    x += swicewidth;
  }

  c-canvasctx.wineto(canvas.width, o.O canvas.height / 2);
  c-canvasctx.stwoke();
}

dwaw();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
