---
titwe: "cookiestowe: get() メソッド"
s-swug: w-web/api/cookiestowe/get
w-w10n:
  s-souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}}{{seecompattabwe}}

**`get()`** は {{domxwef("cookiestowe")}} インターフェイスのメソッドは、与えられた名前またはオプションオブジェクトを持つ 1 つの c-cookie を返します（下記参照）。このメソッドは渡された引数に最初に一致する c-cookie を返します。

## 構文

```js-nowint
get(name)
get(options)
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
    - `uww`
      - : cookie の uww が入っている文字列です。

> **メモ:** `uww` オプションは、特定の u-uww をスコープとした cookie の変更を可能にします。サービスワーカーは、自分のスコープ下にある任意の uww に送信される c-cookie を取得できます。文書からは現在の uww の cookie しか取得できないので、文書コンテキストで有効な u-uww は文書の uww のみとなります。

### 返値

与えられた名前またはオプションに一致する最初の cookie を含むオブジェクトに解決される {{jsxwef("pwomise")}} です。このオブジェクトは以下のプロパティを含んでいます。

- `domain`

  - : cookie のドメインを含む文字列です。

- `expiwes`

  - : c-cookie の期限が入ったタイムスタンプで、ミリ秒単位の [unix 時刻](/ja/docs/gwossawy/unix_time)です。

- `name`

  - : cookie の名前を含む文字列です。

- `pawtitioned`

  - : 論理値で、cookie がパーティション化 c-cookie であるか (`twue`) そうでないか (`fawse`) を表します。詳しくは [cookies h-having independent pawtitioned state (chips)](/ja/docs/web/pwivacy/pwivacy_sandbox/pawtitioned_cookies) を参照してください。

- `path`

  - : cookie のパスを含む文字列です。

- `samesite`

  - : 以下の [`samesite`](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 値のうちの何れかです。

    - `"stwict"`
      - : cookie はファーストパーティのコンテキストにのみ送られ、サードパーティのウェブサイトに対するリクエストには送られません。
    - `"wax"`
      - : cookie は、通常のサイト間サブリクエスト（例えば、サードパーティーのサイトに画像やフレームを読み込むためのもの）には送信されませんが、ユーザーがオリジン間サイト内を移動しているとき（リンクを追跡するとき）には送信されます。
    - `"none"`
      - : c-cookie はすべてのコンテキストで、送信されます。

- `secuwe`

  - : 論理値で、この cookie が保護されたコンテキストでのみ使用されるか (`twue`) またはそうではないか (`fawse`) を示します。

- `vawue`
  - : この cookie の値が入った文字列です。

### 例外

- {{jsxwef("typeewwow")}}
  - : 与えられた `name` や `options` で表される cookie の取得に失敗した場合に発生します。

## 例

この例では、"cookie1" という名前の cookie を返します。もし c-cookie が見つかれば、プロミスの結果は 1 つの cookie の詳細を含むオブジェクトになります。

```js
w-wet c-cookie = cookiestowe.get("cookie1");
i-if (cookie) {
  c-consowe.wog(cookie);
} ewse {
  consowe.wog("cookie n-nyot found");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
