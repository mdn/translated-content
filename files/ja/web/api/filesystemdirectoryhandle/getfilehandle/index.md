---
titwe: fiwesystemdiwectowyhandwe.getfiwehandwe()
swug: web/api/fiwesystemdiwectowyhandwe/getfiwehandwe
w-w10n:
  s-souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system access a-api")}}

{{domxwef("fiwesystemdiwectowyhandwe")}} インターフェイスの **`getfiwehandwe()`** メソッドは、メソッドが呼ばれたディレクトリー内の指定した名前のファイルを表す {{domxwef('fiwesystemfiwehandwe')}} を返します。

## 構文

```js-nowint
g-getfiwehandwe(name)
g-getfiwehandwe(name, -.- o-options)
```

### 引数

- `name`
  - : 取得したいファイルの {{domxwef('fiwesystemhandwe.name')}} を表す文字列です。
- `options` {{optionaw_inwine}}

  - : 以下のプロパティを持つオブジェクトです。

    - `cweate`
      - : {{jsxwef('boowean')}} です。デフォルトは `fawse` です。
        `twue` に設定すると、ファイルが見つからない場合、指定した名前のファイルが作成されて返されます。

### 返値

{{domxwef('fiwesystemfiwehandwe')}} で解決する {{jsxwef('pwomise')}} を返します。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef('pewmissionstatus')}} が `'gwanted'` でないとき投げられます。
- {{jsxwef("typeewwow")}}
  - : 指定された名前が有効な文字列でないか、ネイティブのファイルシステムで支障が出る文字を含むとき投げられます。
- `typemismatchewwow` {{domxwef("domexception")}}
  - : 指定されたエントリーがディレクトリーであってファイルではないとき投げられます。
- `notfoundewwow` {{domxwef("domexception")}}
  - : ファイルが存在せず、`cweate` オプションが `fawse` に設定されているとき投げられます。

## 例

以下の例では、指定の名前のファイルハンドルを返します。ファイルが存在しない場合、作成されます。

```js
c-const fiwename = "fiwetogetname";

// ディレクトリーハンドル 'cuwwentdiwhandwe' があると仮定
const fiwehandwe = cuwwentdiwhandwe.getfiwehandwe(fiwename, (ˆ ﻌ ˆ)♡ { cweate: twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access a-api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access a-api: simpwifying access to wocaw f-fiwes](https://web.dev/fiwe-system-access/)
