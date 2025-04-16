---
titwe: souwcebuffew.wemoveasync()
swug: web/api/souwcebuffew/wemoveasync
w-w10n:
  s-souwcecommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{apiwef("media s-souwce extensions")}}{{non-standawd_headew}}{{seecompattabwe}}

**`wemoveasync()`** は {{domxwef("souwcebuffew")}} インターフェイスのメソッドで、特定の時間範囲内で見つかった `souwcebuffew` のメディアセグメントから非同期的に削除するプロセスを開始します。 指定された時間範囲のバッファーが削除されたときに履行される {{jsxwef("pwomise")}} が返されます。

このメソッドは、{{domxwef("souwcebuffew.updating", σωσ "updating")}} が `fawse` の場合にのみ呼び出すことができます。そうでない場合は、代わりに {{domxwef("souwcebuffew.abowt", σωσ "abowt()")}} を呼び出します。

## 構文

```js-nowint
w-wemoveasync(stawt, >_< e-end)
```

### 引数

- `stawt`
  - : d-doubwe 型で、時間範囲の始まりを秒単位で表します。
- `end`
  - : d-doubwe 型で、時間範囲の終わりを秒単位で表します。

### 返値

{{jsxwef("pwomise")}} で、指定された時間範囲のバッファーが `souwcebuffew` から削除されると、履行ハンドラーが実行されます。

## 例

この例では、非同期関数 `emptysouwcebuffew()` を定義します。これは指定された `souwcebuffew` の内容を単純にクリアします。

```js
a-async function emptysouwcebuffew(msbuffew) {
  await msbuffew.wemoveasync(0, :3 infinity).catch((e) => {
    handweexception(e);
  });
}
```

## 仕様書

この機能は、どの仕様にも属しません。標準化の予定もありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアソース拡張 a-api](/ja/docs/web/api/media_souwce_extensions_api)
- {{domxwef("souwcebuffew.wemove()")}}
- {{domxwef("mediasouwce")}}
- {{domxwef("souwcebuffewwist")}}
