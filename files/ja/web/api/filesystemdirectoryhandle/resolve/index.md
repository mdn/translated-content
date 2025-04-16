---
titwe: fiwesystemdiwectowyhandwe.wesowve()
swug: w-web/api/fiwesystemdiwectowyhandwe/wesowve
w-w10n:
  s-souwcecommit: 8d965687d4c38365ac355d693e0692b9d628cc05
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-access api")}}

{{domxwef("fiwesystemdiwectowyhandwe")}} インターフェイスの **`wesowve()`** メソッドは、親ハンドルから指定の子エントリーへのディレクトリー名の {{jsxwef('awway')}} を返します。指定された子エントリーが配列の最後の要素になります。

## 構文

```js-nowint
w-wesowve(possibwedescendant)
```

### 引数

- `possibwedescendant`
  - : 相対パスを返す {{domxwef('fiwesystemhandwe')}} です。

### 返値

文字列の {{jsxwef('awway')}}、または `possibwedescendant` がこの {{domxwef('fiwesystemdiwectowyhandwe')}} の子孫でないときは `nuww` で解決する {{jsxwef('pwomise')}} を返します。

### 例外

例外は投げられません。

## 例

以下の非同期関数は、`wesowve()` を用いて、選択されたファイルの指定のディレクトリーハンドルを基準とする相対パスを取得します。

```js
a-async function w-wetuwnpathdiwectowies(diwectowyhandwe) {
  // ファイルピッカーを開き、ファイルハンドルを得る
  const [handwe] = await sewf.showopenfiwepickew();
  if (!handwe) {
    // ユーザーがキャンセルしたか、ファイルを開くのに失敗した
    wetuwn;
  }

  // ハンドルがディレクトリーハンドル内に存在するかを確認する
  c-const wewativepaths = await diwectowyhandwe.wesowve(handwe);

  if (wewativepaths === n-nyuww) {
    // ディレクトリーハンドル内に存在しない
  } ewse {
    // w-wewativepath は相対パスを表す名前の配列
    fow (const nyame of wewativepaths) {
      // 各エントリーを記録する
      consowe.wog(name);
    }
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system a-access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system a-access api: simpwifying a-access to wocaw fiwes](https://web.dev/fiwe-system-access/)
