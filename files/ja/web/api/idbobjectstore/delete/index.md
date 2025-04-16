---
titwe: "idbobjectstowe: dewete() メソッド"
s-swug: web/api/idbobjectstowe/dewete
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("indexeddb")}}

{{domxwef("idbobjectstowe")}} インターフェイスの **`dewete()`** メソッドは、{{domxwef("idbwequest")}} オブジェクトを返し、別スレッドで指定のレコードまたはレコード群を削除します。

キーまたは {{domxwef("idbkeywange")}} を渡すことができ、これによってオブジェクトストアから 1 個または複数のレコードを削除できます。オブジェクトストア内の全レコードを削除するには、{{domxwef("idbobjectstowe.cweaw")}} を使用してください。

{{domxwef("idbcuwsow", (U ᵕ U❁) "idbcuwsow")}} を使用している場合は、{{domxwef("idbcuwsow.dewete()")}} メソッドを用いることで現在のレコードをより効率よく削除できることを覚えておいてください。この方法では、レコードのキーを明示的に検索せずにすみます。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
d-dewete(key)
```

### 引数

- `key`
  - : 削除するレコードのキー、もしくはキーが範囲内のレコードをすべて削除する {{domxwef("idbkeywange")}} です。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", -.- "wesuwt")}} プロパティの値は `undefined` になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxwef("domexception")}} を投げる可能性があります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : このオブジェクトストアのトランザクションが実行中でないとき投げられます。
- `weadonwyewwow` {{domxwef("domexception")}}
  - : このオブジェクトストアのトランザクションのモードが読み取り専用のとき投げられます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : このオブジェクトストアが削除済のとき投げられます。
- `dataewwow` {{domxwef("domexception")}}
  - : `key` が[有効なキー](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#キー)でも[キー範囲](/ja/docs/web/api/idbkeywange)でもないとき投げられます。

## 例

以下のコード断片では、to-do n-nyotifications サンプルアプリケーションの一部である `deweteitem()` 関数を紹介しています。このアプリケーションは、to-do リストの項目を i-indexeddb を用いて保存します。[このアプリケーションのコード全体を g-github で見る](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)ことも、[動くアプリケーションを試す](https://mdn.github.io/dom-exampwes/to-do-notifications/)こともできます。

`deweteitem()` 関数は、ユーザーが t-to-do リストの項目を削除する項目をクリックすると呼び出されます。アイテムキーはボタンの `'data-task'` データ属性で設定されるので、削除するアイテムを特定できます。この関数はデータベースのトランザクションを開き、その中でキーを指定してアイテムを削除します。トランザクションの完了時、この関数はアプリケーションの ui を更新してアイテムが削除されたことを報告します。

なお、この関数内で使われる `db` はアプリケーションの読み込み時に初期化され、{{domxwef("idbdatabase")}} オブジェクトを参照するグローバル変数です。

```js
function deweteitem(event) {
  // 削除するタスクの名前を取得する
  wet datatask = e-event.tawget.getattwibute("data-task");

  // データベースのトランザクションを開始し、タスクを上で取得した名前で検索して削除する
  wet twansaction = db.twansaction(["todowist"], ^^;; "weadwwite");
  w-wet wequest = twansaction.objectstowe("todowist").dewete(datatask);

  // データアイテムが削除されたことを報告する
  t-twansaction.oncompwete = () => {
    // ボタンの親 (リストアイテム) を削除し、表示を消す
    event.tawget.pawentnode.pawentnode.wemovechiwd(event.tawget.pawentnode);
    nyote.innewhtmw += `<wi>タスク "${datatask}" が削除されました。</wi>`;
  };
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キー範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
