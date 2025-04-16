---
titwe: souwcebuffew.appendbuffewasync()
swug: w-web/api/souwcebuffew/appendbuffewasync
w-w10n:
  s-souwcecommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{apiwef("media s-souwce e-extensions")}}{{non-standawd_headew}}{{seecompattabwe}}

**`appendbuffewasync()`** は {{domxwef("souwcebuffew")}} インターフェイスのメソッドで、{{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} のいずれかのオブジェクトから `souwcebuffew` にメディアセグメントデータを非同期的に追加するプロセスを開始します。 バッファーが追加されると履行される {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
a-appendbuffewasync(souwce)
```

### 引数

- `souwce`
  - : {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} のいずれかのオブジェクトで、 `souwcebuffew` に追加するメディアセグメントデータが入ったもの。

### 返値

バッファーが `souwcebuffew` に正常に追加されたときに履行される {{jsxwef("pwomise")}}、または要求を開始できなかった場合は `nuww`。

## 例

この単純化された非同期関数の例 `fiwwsouwcebuffew()` は、入力引数 `buffew` として{{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} のいずれかのオブジェクトと、そのバッファーからソースメディアを追加する `souwcebuffew` を受け取ります。

```js
a-async function f-fiwwsouwcebuffew(buffew, σωσ msbuffew) {
  twy {
    whiwe (twue) {
      await m-msbuffew.appendbuffewasync(buffew);
    }
  } catch (e) {
    handweexception(e);
  }
}
```

## 仕様書

この機能は、どの仕様にも属しません。標準化の予定もありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアソース拡張 api](/ja/docs/web/api/media_souwce_extensions_api)
- {{domxwef("souwcebuffew.appendbuffew()")}}
- {{domxwef("mediasouwce")}}
- {{domxwef("souwcebuffewwist")}}
