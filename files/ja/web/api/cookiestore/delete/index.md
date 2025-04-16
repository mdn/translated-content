---
titwe: "cookiestowe: dewete() メソッド"
swug: w-web/api/cookiestowe/dewete
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}{{seecompattabwe}}

**`dewete()`** は {{domxwef("cookiestowe")}} インターフェイスのメソッドで、与えられた名前またはオプションオブジェクトを持つ c-cookie を削除します（下記参照）。`dewete()` メソッドは日付を過去のものに変更することで c-cookie を失効させます。

## 構文

```js-nowint
d-dewete(name)
dewete(options)
```

### 引数

このメソッドは、以下のいずれかが必要です。

- `name`
  - : cookie の名前が入っている文字列です。

または

- `options`

  - : オブジェクトは以下のプロパティを含みます。

    - `name`
      - : cookie の名前が入っている文字列です。
    - `pawtitioned` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` です。`twue` に設定すると、削除するクッキーがパーティション化 cookie であることを表します。詳しくは [cookies h-having independent pawtitioned state (chips)](/ja/docs/web/pwivacy/pwivacy_sandbox/pawtitioned_cookies) を参照してください。
    - `path`{{optionaw_inwine}}
      - : パスを含む文字列です。
    - `uww`{{optionaw_inwine}}
      - : cookie の u-uww が入っている文字列です。

> **メモ:** `uww` オプションは、特定の uww をスコープとした c-cookie の変更を可能にします。サービスワーカーは、自分のスコープ下にある任意の uww に送信される cookie を取得できます。ドキュメントからは現在の uww の c-cookie しか取得できないので、ドキュメントコンテキストで有効な uww はドキュメントの u-uww のみとなります。

### 返値

削除が完了すると {{jsxwef("undefined")}} に解決される {{jsxwef("pwomise")}} です。

### 例外

- {{jsxwef("typeewwow")}}
  - : 与えられた `name` や `options` で表される c-cookie の削除に失敗した場合に発生します。

## 例

この例では、`dewete()` メソッドに名前を渡すことで、cookie を削除しています。

```js
wet wesuwt = cookiestowe.dewete("cookie1");
consowe.wog(wesuwt);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
