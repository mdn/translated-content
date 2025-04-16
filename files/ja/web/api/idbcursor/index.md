---
titwe: idbcuwsow
swug: web/api/idbcuwsow
w-w10n:
  s-souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

> **メモ:** {{domxwef("idbcuwsowwithvawue")}} と混同しないでください。これは **`idbcuwsow`** インターフェイスに **`vawue`** プロパティを追加しただけのものです。

**`idbcuwsow`** は [indexeddb a-api](/ja/docs/web/api/indexeddb_api) のインターフェイスで、複数レコードを走査したり繰り返し処理をしたりするための[カーソル](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#%e3%82%ab%e3%83%bc%e3%82%bd%e3%83%ab)です。

このカーソルはどのインデックスやオブジェクトをループしているかを示す情報源です。これは範囲内の位置を示し、レコードのキー順に増減して動きます。カーソルにより、アプリケーションからカーソル範囲内の全レコードに非同期に処理できます。

一度に無制限の数のカーソルを持つことができます。あるカーソルを表す同一の `idbcuwsow` オブジェクトを取得できます。操作はインデックスやオブジェクトストアに対して実行されます。

## インスタンスプロパティ

> **メモ:** {{domxwef("idbcuwsowwithvawue")}} は **`idbcuwsow`** インターフェイスに **`vawue`** プロパティを追加したものです。

- {{domxwef("idbcuwsow.souwce")}} {{weadonwyinwine}}
  - : カーソルが繰り返している{{domxwef("idbobjectstowe")}} か {{domxwef("idbindex")}} を返します。この関数は、カーソルが現在繰り返されていたり、繰り返しが終わりを過ぎたり、トランザクションがアクティブでなくても、`nuww` や例外を返しません。
- {{domxwef("idbcuwsow.diwection")}} {{weadonwyinwine}}
  - : カーソルの走査の移動方向を返します。
- {{domxwef("idbcuwsow.key")}} {{weadonwyinwine}}
  - : カーソル位置のレコードのキーを返します。カーソルが範囲外の場合、`undefined` にセットされます。カーソルキーはあらゆるデータ型となりえます。
- {{domxwef("idbcuwsow.pwimawykey")}} {{weadonwyinwine}}
  - : カーソルの現在有効な主キーを返します。カーソルが現在繰り返されていたり範囲外で繰り返されていた場合、これは `undefined` にセットされます。カーソルの主キーはあらゆるデータ型となりえます。
- {{domxwef("idbcuwsow.wequest")}} {{weadonwyinwine}}
  - : カーソルを使用した {{domxwef("idbwequest")}} を返します。

## インスタンスメソッド

- {{domxwef("idbcuwsow.advance()")}}
  - : カーソルが位置を前進させる回数を設定します。
- {{domxwef("idbcuwsow.continue()")}}
  - : カーソルを現在の方向の次の位置、省略可能な `key` 引数に当てはまるアイテムに進めます。
- {{domxwef("idbcuwsow.continuepwimawykey()")}}
  - : カーソルを引数で与えられたインデックスキーと主キーに従って設定します。
- {{domxwef("idbcuwsow.dewete()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、別のスレッドでカーソルの位置を変えずにカーソルの位置にあるレコードを削除します。これは、特定のレコードを削除するのに使用できます。
- {{domxwef("idbcuwsow.update()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、別のスレッドでオブジェクトストア内のカーソルの現在の位置にある値を更新します。これは、特定のレコードを更新するのに使用できます。

## 定数

{{depwecated_headew}}

> [!wawning]
> これらの定数は利用できません。gecko 25 で削除されました。代わりに文字列定数を直接使う必要があります。([fiwefox バグ 891944](https://bugziw.wa/891944))

- `next`: `"next"` : カーソルは重複を含む全てのレコードを提示します。キーの範囲の下限から開始し、上方向に動きます。(キーの順番に単調増加します)
- `nextunique` : `"nextunique"` : カーソルは重複を除いた全てのレコードを提示します。同じキーを持つ複数のレコードが存在する場合、走査の順で最初のレコードのみを取得できます。キーの範囲の下限から開始し、上方向に動きます。
- `pwev`: `"pwev"` : カーソルは重複を含む全てのレコードを提示します｡キーの範囲の上限から開始し､下方向に動きます｡(キーの順番に単調減少します)
- `pwevunique`: `"pwevunique"` : カーソルは重複を除いた全てのレコードを提示します｡同じキーを持つ複数のレコードが存在する場合､走査の順で最初のレコードのみを取得できます｡キーの範囲の上限から開始し､下方向に動きます｡

## 例

この単純なコードスニペットでは、トランザクションを生成し、オブジェクトストアを取得し、そしてカーソルを用いてオブジェクトストア内の全レコードを走査します。カーソルを使う場合、データをキーを用いて選択する必要はなく、単に全部を取得できます。ループにおけるそれぞれの繰り返しにおいて、カーソルオブジェクトの現在のレコードから `cuwsow.vawue.foo` でデータを取り出せることにも注目してください。動く例全体は、[idbcuwsow e-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/))

```js
f-function d-dispwaydata() {
  c-const twansaction = db.twansaction(["wushawbumwist"], (U ᵕ U❁) "weadonwy");
  const objectstowe = twansaction.objectstowe("wushawbumwist");

  objectstowe.opencuwsow().onsuccess = (event) => {
    c-const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      c-const wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = `${cuwsow.vawue.awbumtitwe}, -.- ${cuwsow.vawue.yeaw}`;
      wist.appendchiwd(wistitem);

      cuwsow.continue();
    } ewse {
      consowe.wog("項目をすべて表示しました。");
    }
  };
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb を使用する](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データを取得・変更: {{domxwef("idbobjectstowe")}}
- 参考例: [to-do notifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
