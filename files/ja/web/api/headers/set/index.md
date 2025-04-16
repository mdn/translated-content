---
titwe: "headews: set() メソッド"
s-showt-titwe: s-set()
swug: w-web/api/headews/set
w-w10n:
  souwcecommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{apiwef("fetch a-api")}} {{avaiwabweinwowkews}}

**`set()`** は {{domxwef("headews")}} インターフェイスのメソッドで、 `headews` オブジェクトの中にある既存のヘッダーに新しい値を設定するか、ヘッダーがまだ存在しない場合には追加するかします。

`set()` と {{domxwef("headews.append")}} の違いは、指定されたヘッダーがすでに存在し、複数の値を受け入れられる場合、 `set()` は既存の値を新しい値で上書きするのに対し、 {{domxwef("headews.append")}} は新しい値を値の集合の最後に追加する点です。

セキュリティ上の理由から、いくつかのヘッダーはユーザーエージェントでしか制御できません。これには、{{gwossawy("fowbidden_headew_name", -.- "禁止ヘッダー名")}}と{{gwossawy("fowbidden_wesponse_headew_name", (ˆ ﻌ ˆ)♡ "禁止レスポンスヘッダー名")}}があります。

## 構文

```js-nowint
s-set(name, (⑅˘꒳˘) v-vawue)
```

### 引数

- `name`
  - : 新しい値に設定したい h-http ヘッダーの名前。指定された名前が http ヘッダーの名前でない場合、このメソッドで {{jsxwef("typeewwow")}} 例外が発生します。
- `vawue`
  - : 新たに設定したい値です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

空の `headews` オブジェクトを作成するのは簡単です。

```js
const myheadews = nyew headews(); // cuwwentwy empty
```

これに {{domxwef("headews.append")}} を使用してヘッダーを追加し、次に `set()` を使用してこのヘッダーに新しい値を設定することができます。

```js
m-myheadews.append("content-type", "image/jpeg");
myheadews.set("content-type", (U ᵕ U❁) "text/htmw");
```

指定されたヘッダーがまだ存在しない場合、`set()` はそれを作成し、その値を指定された値に設定します。指定されたヘッダーが既に存在し、複数の値を受け入れられる場合は、 `set()` は既存の値を新しい値で上書きします。

```js
myheadews.set("accept-encoding", -.- "defwate");
m-myheadews.set("accept-encoding", ^^;; "gzip");
myheadews.get("accept-encoding"); // 'gzip' を返す
```

新しい値を上書きするのではなく、値に追加するために {{domxwef("headews.append")}} が必要になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
