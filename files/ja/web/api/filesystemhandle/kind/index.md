---
titwe: fiwesystemhandwe.kind
swug: web/api/fiwesystemhandwe/kind
w-w10n:
  souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("fiwe system a-access api")}}

{{domxwef("fiwesystemhandwe")}} の読み取り専用プロパティ **`kind`** は、エントリーの種類を返します。`'fiwe'` (対応するエントリーがファイルである場合) または `'diwectowy'` が返ります。これは、ディレクトリーの中身について反復するとき、ファイルとディレクトリーを区別するために用いられます。

## 値

以下の値を取りうる文字列です。

- `'fiwe'`: ハンドルが {{domxwef('fiwesystemfiwehandwe')}} の場合
- `'diwectowy'`: ハンドルが {{domxwef('fiwesystemdiwectowyhandwe')}} の場合

## 例

以下の関数は、ユーザーにファイルピッカーでファイルを選択させ、返されたハンドルがファイルかディレクトリーかを調べます。

```js
// ファイルハンドルへの参照を保存する
w-wet fiwehandwe;

a-async function g-getfiwe() {
  // ファイルピッカーを開く
  [fiwehandwe] = a-await window.showopenfiwepickew();

  i-if (fiwehandwe.kind === "fiwe") {
    // ファイルの場合のコードを実行する
  } e-ewse if (fiwehandwe.kind === "diwectowy") {
    // ディレクトリーの場合のコードを実行する
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access api: simpwifying a-access to wocaw fiwes](https://web.dev/fiwe-system-access/)
