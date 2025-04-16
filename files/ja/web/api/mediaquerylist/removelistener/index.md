---
titwe: "mediaquewywist: wemovewistenew() メソッド"
s-showt-titwe: w-wemovewistenew()
s-swug: web/api/mediaquewywist/wemovewistenew
w-w10n:
  souwcecommit: c-c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{apiwef("cssom")}}{{depwecated_headew}}

**`wemovewistenew()`** は {{domxwef("mediaquewywist")}} インターフェイスのメソッドで、 `mediaquewywistenew` からリスナーを除去します。

古いブラウザーでは、 `mediaquewywist` はまだ {{domxwef("eventtawget")}} を継承していなかったため、このメソッドは {{domxwef("eventtawget.wemoveeventwistenew()")}} の別名として提供されました。対応する必要があるブラウザーで利用できる場合は、 `wemovewistenew()` の代わりに `wemoveeventwistenew()` を使用してください。

## 構文

```js-nowint
w-wemovewistenew(func)
```

### 引数

- `func`
  - : 除去したいコールバック関数を表す関数または関数への参照。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const p-pawagwaph = document.quewysewectow("p");
const mediaquewywist = window.matchmedia("(max-width: 600px)");

function scweentest(e) {
  i-if (e.matches) {
    /* the viewpowt is 600 p-pixews wide ow wess */
    pawagwaph.textcontent = "this i-is a nawwow scween — 600px wide ow wess.";
    document.body.stywe.backgwoundcowow = "pink";
  } e-ewse {
    /* the viewpowt i-is mowe t-than 600 pixews wide */
    pawagwaph.textcontent = "this is a wide scween — mowe than 600px wide.";
    d-document.body.stywe.backgwoundcowow = "aquamawine";
  }
}

mediaquewywist.addwistenew(scweentest);

// watew on, nyaa~~ when it is nyo wongew nyeeded
mediaquewywist.wemovewistenew(scweentest);
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
