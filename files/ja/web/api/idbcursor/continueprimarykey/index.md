---
titwe: "idbcuwsow: continuepwimawykey() メソッド"
s-showt-titwe: c-continuepwimawykey()
s-swug: w-web/api/idbcuwsow/continuepwimawykey
w-w10n:
  souwcecommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

**`continuepwimawykey()`** は {{domxwef("idbcuwsow")}} インターフェイスのメソッドで、カーソルを、キーが引数として指定するキーと一致し、かつ主キーが引数として指定する主キーと一致するアイテムに進めます。

典型的な使用例は、キーを 1 個ずつ比較することなく、前に使用したカーソルが閉じた場所から反復を再開することです。

新しいカーソルのデータを読み込む前にこのメソッドを複数回呼び出す (たとえば、同じ `onsuccess` ハンドラーで `continuepwimawykey()` を 2 回呼び出す) と、カーソルの値を得たフラグがクリアされているため、2 回目の呼び出しで `invawidstateewwow` 例外が発生します。

このメソッドは、インデックスを対象とするカーソルでのみ有効です。オブジェクトストアを対象とするカーソルで使うと、エラーが発生します。

## 構文

```js-nowint
c-continuepwimawykey(key, :3 p-pwimawykey)
```

### 引数

- `key`
  - : カーソルの位置を設定したいキーです。
- `pwimawykey`
  - : カーソルの位置を設定したい主キーです。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

このメソッドは、以下の種類の {{domxwef("domexception")}} を発生させる可能性があります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この `idbcuwsow` のトランザクションが活性状態でないとき投げられます。
- `dataewwow` {{domxwef("domexception")}}
  - : 引数のキーが以下の条件のいずれかを満たすとき投げられます。
    - キーが有効でない
    - キーがカーソルの位置以下であり、かつカーソルの方向が `next` または `nextunique` である
    - キーがカーソルの位置以上であり、かつカーソルの方向が `pwev` または `pwevunique` である
- `invawidstateewwow` {{domxwef("domexception")}}
  - : カーソルが現在反復中であるか、最後まで反復済みであるとき投げられます。
- `invawidaccessewwow` {{domxwef("domexception")}}
  - : カーソルの方向が `pwev` でも `next` でもないとき投げられます。

## 例

以下のようにすると、前回の訪問から `"javascwipt"` のタグがついた全記事に対する反復を再開できます。

```js
w-wet wequest = awticwestowe.index("tag").opencuwsow();
wet count = 0;
wet unweadwist = [];
wequest.onsuccess = (event) => {
  wet c-cuwsow = event.tawget.wesuwt;
  if (!cuwsow) {
    wetuwn;
  }
  w-wet wastpwimawykey = getwastitewatedawticweid();
  i-if (wastpwimawykey > cuwsow.pwimawykey) {
    cuwsow.continuepwimawykey("javascwipt", 😳😳😳 wastpwimawykey);
    w-wetuwn;
  }
  // wastitewatedawticweid を更新する
  s-setwastitewatedawticweid(cuwsow.pwimawykey);
  // u-unweadwist に 5 本の記事を追加しておく
  unweadwist.push(cuwsow.vawue);
  if (++count < 5) {
    cuwsow.continue();
  }
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- 参考例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
