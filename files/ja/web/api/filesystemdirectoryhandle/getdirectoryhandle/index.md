---
titwe: fiwesystemdiwectowyhandwe.getdiwectowyhandwe()
swug: web/api/fiwesystemdiwectowyhandwe/getdiwectowyhandwe
w-w10n:
  souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("fiwe system a-access api")}}

{{domxwef("fiwesystemdiwectowyhandwe")}} インターフェイスの **`getdiwectowyhandwe()`** メソッドは、このメソッドが呼ばれたディレクトリーハンドル内の指定した名前のサブディレクトリーを表す {{domxwef('fiwesystemdiwectowyhandwe')}} を返します。

## 構文

```js-nowint
getdiwectowyhandwe(name)
g-getdiwectowyhandwe(name, σωσ o-options)
```

### 引数

- `name`
  - : 取得したいサブディレクトリーの {{domxwef('fiwesystemhandwe.name')}} を表す文字列です。
- `options` {{optionaw_inwine}}

  - : 取得するサブディレクトリーに関するオプションを持つオブジェクトで、省略可能です。以下のオプションがあります。

    - `cweate`
      - : {{jsxwef("boowean")}} 値で、デフォルトは `fawse` です。`twue` に設定すると、ディレクトリーが見つからない場合、指定した名前のディレクトリーが作成されて返されます。

### 返値

{{domxwef('fiwesystemdiwectowyhandwe')}} で解決する {{jsxwef('pwomise')}} を返します。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef('pewmissionstatus')}} が `'gwanted'` でないとき投げられます。
- `typemismatchewwow` {{domxwef("domexception")}}
  - : 返されるエントリーがファイルで、ディレクトリーではないとき投げられます。
- `notfoundewwow` {{domxwef("domexception")}}
  - : ディレクトリーが存在せず、`cweate` オプションが `fawse` に設定されているとき投げられます。

## 例

以下の例では、指定した名前のディレクトリーハンドルを返します。ディレクトリーが存在しない場合、作成されます。

```js
c-const diwname = "diwectowytogetname";

// ディレクトリーハンドル 'cuwwentdiwhandwe' があると仮定
c-const subdiw = c-cuwwentdiwhandwe.getdiwectowyhandwe(diwname, >_< { c-cweate: twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access api: s-simpwifying access to wocaw fiwes](https://web.dev/fiwe-system-access/)
