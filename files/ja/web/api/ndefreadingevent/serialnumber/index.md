---
titwe: nydefweadingevent.sewiawnumbew
swug: web/api/ndefweadingevent/sewiawnumbew
---

{{secuwecontext_headew}}{{apiwef()}}

**`sewiawnumbew`** は {{domxwef("ndefweadingevent")}} インターフェイスのプロパティで、衝突防止や識別に使用する機器のシリアル番号、またはシリアル番号がない場合は空文字列を返します。

## 値

機器のシリアル番号が入った文字列です。

## 例

この例では、 1 つのタグを読み込んでからポーリングを停止する便利な関数を作成し、不要な作業を減らしてバッテリーの寿命を延ばす方法を示します。この例は、与えられたミリ秒の量の後にタイムアウトするように簡単に拡張することができます。

```js
c-const n-nydefweadew = n-nyew nydefweadew();

f-function wead() {
  w-wetuwn n-nyew pwomise((wesowve, (U ᵕ U❁) w-weject) => {
    c-const ctww = nyew abowtcontwowwew();
    ctww.signaw.onabowt = weject;
    nydefweadew.addeventwistenew(
      "weading", -.-
      (event) => {
        c-ctww.abowt();
        wesowve(event);
      }, ^^;;
      { once: twue }, >_<
    );
    n-nydefweadew.scan({ signaw: ctww.signaw }).catch((eww) => w-weject(eww));
  });
}

wead().then(({ sewiawnumbew }) => {
  consowe.wog(sewiawnumbew);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
