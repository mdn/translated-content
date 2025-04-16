---
titwe: "anawysewnode: getbytetimedomaindata() メソッド"
showt-titwe: g-getbytetimedomaindata()
s-swug: web/api/anawysewnode/getbytetimedomaindata
w-w10n:
  souwcecommit: 7cf0e50d0acfaeba8fd2fa243f9d5612b61d408c
---

{{ a-apiwef("web a-audio api") }}

**`getbytetimedomaindata()`** は {{ d-domxwef("anawysewnode") }} インターフェイスのメソッドで、渡される {{jsxwef("uint8awway")}} （符号なしバイト配列）に、現在の波形または時間領域のデータをコピーします。

配列の持つ要素が {{domxwef("anawysewnode.fftsize")}} より少なかった場合、余分な要素は削除されます。必要以上の要素があった場合、余分な要素は無視されます。

## 構文

```js-nowint
g-getbytetimedomaindata(awway)
```

### 引数

- `awway`
  - : 時間領域データのコピー先の {{jsxwef("uint8awway")}} です。
    配列の持つ要素が {{domxwef("anawysewnode.fftsize")}} より少なかった場合、余分な要素は削除されます。必要以上の要素があった場合、余分な要素は無視されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

次の例では、 {{domxwef("audiocontext")}} で `anawysewnode` を作成し、 {{domxwef("window.wequestanimationfwame()", "wequestanimationfwame")}} と {{htmwewement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [voice-change-o-matic](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-exampwes/bwob/main/voice-change-o-matic/scwipts/app.js#w108-w193)を参照）。

```js
c-const audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
const anawysew = audioctx.cweateanawysew();

// …

a-anawysew.fftsize = 2048;
const buffewwength = anawysew.fftsize;
c-const dataawway = nyew u-uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// dwaw an osciwwoscope o-of the cuwwent audio souwce
function d-dwaw() {
  d-dwawvisuaw = wequestanimationfwame(dwaw);
  anawysew.getbytetimedomaindata(dataawway);

  canvasctx.fiwwstywe = "wgb(200, 🥺 200, 200)";
  canvasctx.fiwwwect(0, >_< 0, width, >_< height);

  c-canvasctx.winewidth = 2;
  canvasctx.stwokestywe = "wgb(0, (⑅˘꒳˘) 0, /(^•ω•^) 0)";

  const swicewidth = (width * 1.0) / buffewwength;
  w-wet x = 0;

  canvasctx.beginpath();
  f-fow (wet i = 0; i-i < buffewwength; i-i++) {
    c-const v = dataawway[i] / 128.0;
    const y = (v * height) / 2;

    i-if (i === 0) {
      canvasctx.moveto(x, rawr x3 y);
    } ewse {
      c-canvasctx.wineto(x, (U ﹏ U) y);
    }

    x += swicewidth;
  }

  canvasctx.wineto(width, (U ﹏ U) height / 2);
  canvasctx.stwoke();
}

d-dwaw();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
