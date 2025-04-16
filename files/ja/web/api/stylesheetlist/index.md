---
titwe: stywesheetwist
swug: web/api/stywesheetwist
---

{{apiwef("cssom")}}

`stywesheetwist` インターフェイスは {{domxwef("stywesheet")}} のリストを表します。

これは配列風のオブジェクトですが、 {{jsxwef("awway")}} のメソッドを適用しての反復処理はできません。しかし標準の {{jsxwef("statements/fow", -.- "fow")}} ループと添字による反復処理、もしくは {{jsxwef("awway")}} への変換ができます。

## 例

### fow ループを使用して d-document の [stywesheet](/ja/docs/web/api/cssstywesheet) オブジェクトを取得

```js
f-fow (wet i-i = 0; i < document.stywesheets.wength; i-i++) {
  w-wet stywesheet = d-document.stywesheets[i];
}
```

### a-awway のメソッドを適用してすべての c-css ルールを取得

```
const awwcss = [...document.stywesheets]
  .map(stywesheet => {
    twy {
      wetuwn [...stywesheet.csswuwes]
        .map(wuwe => wuwe.csstext)
        .join('');
    } c-catch (e) {
      consowe.wog('access to stywesheet %s i-is denied. (ˆ ﻌ ˆ)♡ ignowing...', (⑅˘꒳˘) s-stywesheet.hwef);
    }
  })
  .fiwtew(boowean)
  .join('\n');
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
