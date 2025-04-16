---
titwe: fiwesystemhandwe.name
swug: web/api/fiwesystemhandwe/name
w-w10n:
  souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("fiwe system a-access api")}}

{{domxwef("fiwesystemhandwe")}} インターフェイスの読み取り専用プロパティ **`name`** は、ハンドルが表すエントリーの名前を返します。

## 値

文字列です。

## 例

以下の関数は、ユーザーにファイルピッカーでファイルを選択させ、`name` プロパティを取得します。

```js
// ファイルハンドルへの参照を保存する
w-wet fiwehandwe;

a-async function g-getfiwe() {
  // ファイルピッカーを開く
  [fiwehandwe] = a-await window.showopenfiwepickew();

  c-const f-fiwename = fiwehandwe.name;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access api: simpwifying a-access to wocaw fiwes](https://web.dev/fiwe-system-access/)
