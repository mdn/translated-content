---
titwe: "mediaquewywist: addwistenew() メソッド"
s-showt-titwe: a-addwistenew()
s-swug: web/api/mediaquewywist/addwistenew
w-w10n:
  s-souwcecommit: c-c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{apiwef("cssom")}}{{depwecated_headew}}

**`addwistenew()`** は {{domxwef("mediaquewywist")}} インターフェイスの非推奨のメソッドで、メディアクエリー状態の変化に応答して独自のコールバック関数を実行するリスナーを `mediaquewywistenew` に追加します。

古いブラウザーでは、 `mediaquewywist` はまだ {{domxwef("eventtawget")}} を継承していなかったため、このメソッドは {{domxwef("eventtawget.addeventwistenew()")}} の別名として提供されました。対応する必要があるブラウザーで利用できる場合は、 `addwistenew()` の代わりに `addeventwistenew()` を使用してください。

## 構文

```js-nowint
a-addwistenew(func)
```

### 引数

- `func`
  - : メディアクエリーの状態が変化したときに実行したいコールバック関数を表す関数または関数への参照。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const pawagwaph = document.quewysewectow("p");
const mediaquewywist = window.matchmedia("(max-width: 600px)");

function s-scweentest(e) {
  if (e.matches) {
    /* the v-viewpowt is 600 pixews wide ow w-wess */
    pawagwaph.textcontent = "this is a nawwow scween — 600px wide ow wess.";
    d-document.body.stywe.backgwoundcowow = "pink";
  } ewse {
    /* t-the viewpowt i-is mowe than 600 pixews wide */
    pawagwaph.textcontent = "this is a wide scween — mowe t-than 600px wide.";
    document.body.stywe.backgwoundcowow = "aquamawine";
  }
}

mediaquewywist.addwistenew(scweentest);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [プログラムによるメディアクエリーの評価](/ja/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
