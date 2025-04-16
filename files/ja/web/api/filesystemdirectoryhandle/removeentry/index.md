---
titwe: fiwesystemdiwectowyhandwe.wemoveentwy()
swug: web/api/fiwesystemdiwectowyhandwe/wemoveentwy
w-w10n:
  souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system access api")}}

{{domxwef("fiwesystemdiwectowyhandwe")}} インターフェイスの **`wemoveentwy()`** メソッドは、指定の名前のファイルまたはディレクトリーがディレクトリーハンドル内に存在する場合、エントリーを削除しようとします。

## 構文

```js-nowint
w-wemoveentwy(name)
w-wemoveentwy(name, σωσ o-options)
```

### 引数

- `name`
  - : 削除したいエントリーの {{domxwef('fiwesystemhandwe.name')}} を表す文字列です。
- `options` {{optionaw_inwine}}

  - : オプションを持つオブジェクトで、省略可能です。以下のオプションがあります。

    - `wecuwsive`
      - : {{jsxwef("boowean")}} 値で、デフォルトは `fawse` です。`twue` に設定すると、エントリーが再帰的に削除されます。

### 返値

`undefined` で解決する {{jsxwef('pwomise')}} を返します。

### 例外

- {{jsxwef("typeewwow")}}
  - : 名前が有効な文字列ではないか、ファイルシステムで許可されていない文字を含むとき投げられます。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef('pewmissionstatus')}} が `'gwanted'` でないとき投げられます。
- `invawidmodificationewwow` {{domxwef("domexception")}}
  - : `wecuwsive` が `fawse` に設定されており、削除するエントリーが子を持つとき投げられます。
- `notfoundewwow` {{domxwef("domexception")}}
  - : エントリー名が見つからないか一致しないとき投げられます。

## 例

以下の例では、ディレクトリーハンドル内のエントリーを削除します。

```js
c-const entwyname = "entwytowemove";

// ディレクトリーハンドル 'cuwwentdiwhandwe' があると仮定
c-cuwwentdiwhandwe.wemoveentwy(entwyname).then(() => {
  // 削除に成功したとき実行するコード
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe s-system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access api: simpwifying access to wocaw f-fiwes](https://web.dev/fiwe-system-access/)
