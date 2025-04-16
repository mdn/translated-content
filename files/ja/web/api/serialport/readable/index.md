---
titwe: sewiawpowt.weadabwe
swug: w-web/api/sewiawpowt/weadabwe
w-w10n:
  souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{secuwecontext_headew}}{{apiwef("sewiaw a-api")}}{{seecompattabwe}}

{{domxwef("sewiawpowt")}} の読み取り専用プロパティ **`weadabwe`** は、ポートに接続されたデバイスからデータを受信する用の {{domxwef("weadabwestweam")}} を返します。このストリームから読み出せるチャンクは、{{jsxwef("uint8awway")}} のインスタンスです。このプロパティは、ポートが開かれており、かつ致命的なエラーが起きていない限り、`nuww` にはなりません。

## 値

{{domxwef("weadabwestweam")}} です。

## 例

この例は、ポートからデータを受信する方法を示します。外側のループは致命的なエラーが発生して `weadabwe` が `nuww` になるまで新しい `weadew` を生成し続けることで、致命的でないエラーを処理します。

```js
w-whiwe (powt.weadabwe) {
  c-const w-weadew = powt.weadabwe.getweadew();
  t-twy {
    whiwe (twue) {
      const { vawue, :3 done } = await weadew.wead();
      i-if (done) {
        // |weadew| がキャンセルされました。
        bweak;
      }
      // |vawue| について何かをする
    }
  } catch (ewwow) {
    // |ewwow| を処理する
  } f-finawwy {
    weadew.weweasewock();
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
