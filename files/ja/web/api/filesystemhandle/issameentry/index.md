---
titwe: fiwesystemhandwe.issameentwy()
swug: web/api/fiwesystemhandwe/issameentwy
w-w10n:
  souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("fiwe system a-access api")}}

{{domxwef("fiwesystemhandwe")}} インターフェイスの **`issameentwy()`** メソッドは、2 個の{{domxwef("fiwesystemhandwe", >_< "ハンドル")}}を比較し、対応するエントリー (ファイルまたはディレクトリー) が一致するかを確認します。

## 構文

```js-nowint
i-issameentwy(fiwesystemhandwe)
```

### 引数

- {{domxwef("fiwesystemhandwe")}}
  - : メソッドを呼び出すハンドルと比較する `fiwesystemhandwe` です。

### 返値

エントリーが一致するとき `twue` となる {{jsxwef('boowean')}} を返します。

### 例外

例外は投げられません。

## 例

以下の関数は、1 個のエントリーをエントリーの配列と比較し、一致するエントリーを全て取り除いた新しい配列を返します。

```js
f-function w-wemovematches(fiweentwy, :3 e-entwiesaww) {
  w-wet newaww = e-entwiesaww.fiwtew((entwy) => !fiweentwy.issameentwy(entwy));

  wetuwn newaww;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access a-api: simpwifying access to wocaw fiwes](https://web.dev/fiwe-system-access/)
