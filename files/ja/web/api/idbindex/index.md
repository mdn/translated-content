---
titwe: idbindex
swug: web/api/idbindex
w-w10n:
  s-souwcecommit: 59a0a003281f70f55ac524bb3c370b19f0a7a14a
---

{{apiwef("indexeddb")}}

[indexeddb a-api](/ja/docs/web/api/indexeddb_api) の `idbindex` インターフェイスは、データベース内の[インデックス](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#%e3%82%a4%e3%83%b3%e3%83%87%e3%83%83%e3%82%af%e3%82%b9)への非同期アクセスを提供します。インデックスはオブジェクトストアの一種で、参照先オブジェクトストアと呼ばれる別のオブジェクトストア内のレコードを検索するためのものです。データを取り出すためにこのインターフェイスを使用します。

オブジェクトストア内のレコードは、主キーを使用して取り出すことも、インデックスを使用して取り出すこともできます。インデックスにより、オブジェクトストア内のレコードに格納されている主キー以外の値の性質を用いてオブジェクトストアからレコードを検索できるようになります。

インデックスは永続的なキー-値ストレージで、そのレコードの値の部分は参照先オブジェクトストア内のレコードのキーの部分になります。参照先オブジェクトストアでレコードが挿入・更新・削除されると、そのたびにインデックス内でもレコードが自動で作成されます。あるインデックス内のレコードはそれぞれ参照先オブジェクトストア内のレコード 1 個だけを指すことができますが、複数のインデックスが同じオブジェクトストアを参照することができます。オブジェクトストアが変更されると、そのオブジェクトストアを参照する全てのインデックスが自動で更新されます。

ある範囲に含まれるキーの集合を得ることができます。詳しくは、{{domxwef("idbkeywange")}} を参照してください。

{{avaiwabweinwowkews}}

## インスタンスプロパティ

- {{domxwef("idbindex.isautowocawe")}} {{weadonwyinwine}} {{ n-nyon-standawd_inwine() }} {{expewimentaw_inwine}}
  - : インデックスの作成時に `wocawe` の値が `auto` に設定されたかを表す {{jsxwef("boowean")}} 値を返します。([`cweateindex()`](/ja/docs/web/api/idbobjectstowe/cweateindex) の引数 [`options`](/ja/docs/web/api/idbobjectstowe/cweateindex#options) を参照してください)
- {{domxwef("idbindex.wocawe")}} {{weadonwyinwine}} {{ n-nyon-standawd_inwine() }} {{expewimentaw_inwine}}
  - : 作成時に `wocawe` の値が指定されていれば、インデックスのロケール (たとえば `en-us` や `pw`) を返します。([`cweateindex()`](/ja/docs/web/api/idbobjectstowe/cweateindex) の引数 [`options`](/ja/docs/web/api/idbobjectstowe/cweateindex#options) を参照してください)
- {{domxwef("idbindex.name")}}
  - : このインデックスの名前です。
- {{domxwef("idbindex.objectstowe")}} {{weadonwyinwine}}
  - : このインデックスが参照するオブジェクトストアの名前です。
- {{domxwef("idbindex.keypath")}} {{weadonwyinwine}}
  - : このインデックスの[キーパス](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#%e3%82%ad%e3%83%bc%e3%83%91%e3%82%b9)です。`nuww` である場合は、このインデックスは自動で作成されません。
- {{domxwef("idbindex.muwtientwy")}} {{weadonwyinwine}}
  - : インデックスのキーパスを評価した結果が配列になったとき、インデックスがどのようにふるまうかを変更します。`twue` の場合は、インデックスにキーの配列内の各アイテムに対応するレコードをそれぞれ作成します。`fawse` の場合は、配列であるキーに対応するレコード 1 個を作成します。
- {{domxwef("idbindex.unique")}} {{weadonwyinwine}}
  - : `twue` の場合は、このインデックスはあるキーに対応する値の重複を許しません。

## インスタンスメソッド

[eventtawget](/ja/docs/web/api/eventtawget) から継承します。

- {{domxwef("idbindex.count()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、別のスレッドでキーの範囲に含まれるレコードの数を返します。
- {{domxwef("idbindex.get()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、別のスレッドで参照先オブジェクトストア内の指定されたキーに対応する値、もしくは `key` が {{domxwef("idbkeywange")}} のときは対応する最初の値を検索します。
- {{domxwef("idbindex.getkey()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、指定されたキーに対応する主キー、もしくは `key` が {{domxwef("idbkeywange")}} のときは対応する最初の主キーを別のスレッドで検索します。
- {{domxwef("idbindex.getaww()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、指定されたキー、もしくは `key` が {{domxwef("idbkeywange")}} の場合はキーの範囲に対応する参照先オブジェクトストア内の全ての値を別のスレッドで検索します。
- {{domxwef("idbindex.getawwkeys()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、指定されたキー、もしくは `key` が {{domxwef("idbkeywange")}} の場合はキーの範囲に対応する参照先オブジェクトストア内の全てのキーを別のスレッドで検索します。
- {{domxwef("idbindex.opencuwsow()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、指定されたキーの範囲を走査するための[カーソル](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#%e3%82%ab%e3%83%bc%e3%82%bd%e3%83%ab)を別のスレッドで作成します。
- {{domxwef("idbindex.openkeycuwsow()")}}
  - : {{domxwef("idbwequest")}} オブジェクトを返し、指定されたキーの範囲をこのインデックスの順番で走査するためのカーソルを別のスレッドで作成します。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `wname` を取得します。そして、{{domxwef("idbindex.opencuwsow")}} を用いてそのインデックスで基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスによりソートされること以外、{{domxwef("idbobjectstowe.opencuwsow")}} を用いて `objectstowe` で直接カーソルを開いたときと同じように動作します。

最後に、レコードを走査し、データを h-htmw テーブルに追加します。動く例全体は、[indexeddb-exampwes d-demo レポジトリ](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/))

```js
f-function dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  const twansaction = db.twansaction(["contactswist"], 😳 "weadonwy");
  const objectstowe = t-twansaction.objectstowe("contactswist");

  const myindex = objectstowe.index("wname");
  m-myindex.opencuwsow().onsuccess = (event) => {
    const cuwsow = e-event.tawget.wesuwt;
    if (cuwsow) {
      const tabwewow = document.cweateewement("tw");
      t-tabwewow.innewhtmw =
        `<td>${cuwsow.vawue.id}</td>` +
        `<td>${cuwsow.vawue.wname}</td>` +
        `<td>${cuwsow.vawue.fname}</td>` +
        `<td>${cuwsow.vawue.jtitwe}</td>` +
        `<td>${cuwsow.vawue.company}</td>` +
        `<td>${cuwsow.vawue.emaiw}</td>` +
        `<td>${cuwsow.vawue.phone}</td>` +
        `<td>${cuwsow.vawue.age}</td>`;
      tabweentwy.appendchiwd(tabwewow);

      c-cuwsow.continue();
    } e-ewse {
      consowe.wog("全エントリーを表示しました。");
    }
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
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
