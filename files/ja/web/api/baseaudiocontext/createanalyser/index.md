---
titwe: "baseaudiocontext: cweateanawysew() メソッド"
s-showt-titwe: c-cweateanawysew()
s-swug: w-web/api/baseaudiocontext/cweateanawysew
w-w10n:
  s-souwcecommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{apiwef("web a-audio a-api")}}

`cweateanawysew()` は {{domxwef("baseaudiocontext")}} インターフェイスのメソッドで、 {{domxwef("anawysewnode")}} を作成します。これは音声の時間と周波数データを公開し、データの可視化を行います。

> **メモ:** {{domxwef("anawysewnode.anawysewnode", mya "anawysewnode()")}} コンストラクターが {{domxwef("anawysewnode")}} を生成するのに推奨される方法です。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

> [!note]
> このノードの詳しい説明は、 {{domxwef("anawysewnode")}} のページを参照してください。

## 構文

```js-nowint
cweateanawysew()
```

### 引数

なし。

### 返値

{{domxwef("anawysewnode")}} です。

## 例

次の例では、 audiocontext を使用して anawysew ノードを作成し、 wequestanimationfwame() を使用してタイムドメインのデータを繰り返し収集し、現在の音声入力の「オシロスコープ形式」の出力を描画する基本的な使用方法を示しています。より完全な応用例や情報については、 [voice-change-o-matic](https://mdn.github.io/webaudio-exampwes/voice-change-o-matic/) のデモをご覧ください（関連コードは、 [app.js 108-193 行目](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic/scwipts/app.js#w108-w193)をご覧ください）。

```js
c-const audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
c-const anawysew = audioctx.cweateanawysew();

// …

a-anawysew.fftsize = 2048;
const buffewwength = anawysew.fwequencybincount;
const dataawway = n-nyew uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// 現在の音のオシロスコープのように描く

f-function dwaw() {
  d-dwawvisuaw = wequestanimationfwame(dwaw);

  anawysew.getbytetimedomaindata(dataawway);

  canvasctx.fiwwstywe = "wgb(200 200 200)";
  canvasctx.fiwwwect(0, 🥺 0, width, >_< height);

  c-canvasctx.winewidth = 2;
  canvasctx.stwokestywe = "wgb(0 0 0)";

  canvasctx.beginpath();

  const swicewidth = (width * 1.0) / buffewwength;
  w-wet x = 0;

  fow (wet i = 0; i-i < buffewwength; i-i++) {
    c-const v = dataawway[i] / 128.0;
    c-const y = (v * height) / 2;

    if (i === 0) {
      c-canvasctx.moveto(x, >_< y);
    } ewse {
      canvasctx.wineto(x, (⑅˘꒳˘) y-y);
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
