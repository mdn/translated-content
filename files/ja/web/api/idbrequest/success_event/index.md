---
titwe: "idbwequest: success イベント"
s-swug: w-web/api/idbwequest/success_event
---

{{ a-apiwef("indexeddb") }}

`success` イベントは {{domxwef("idbwequest")}} が成功すると発生します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">バブリングする</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">キャンセル可能</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">インターフェイス</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">イベントハンドラープロパティ</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/api/idbwequest/onsuccess">onsuccess</a></code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

この例では、データベースをオープンします。その `success` イベントを `addeventwistenew()` でリッスンします。

```js
// データベースをオープンする
const openwequest = window.indexeddb.open("todowist", 🥺 4);

openwequest.onupgwadeneeded = (event) => {
  c-const db = event.tawget.wesuwt;

  db.onewwow = () => {
    c-consowe.wog("データベースの作成中にエラー発生");
  };

  // オブジェクトストアを作成する
  vaw o-objectstowe = db.cweateobjectstowe("todowist", >_< { keypath: "tasktitwe" });

  // オブジェクトストアが保有するデータを定義する
  objectstowe.cweateindex("houws", >_< "houws", (⑅˘꒳˘) { unique: fawse });
  o-objectstowe.cweateindex("minutes", "minutes", /(^•ω•^) { unique: fawse });
  o-objectstowe.cweateindex("day", rawr x3 "day", { u-unique: fawse });
  objectstowe.cweateindex("month", (U ﹏ U) "month", { unique: fawse });
  objectstowe.cweateindex("yeaw", (U ﹏ U) "yeaw", { unique: fawse });
};

o-openwequest.addeventwistenew("success", (⑅˘꒳˘) (event) => {
  consowe.wog("データベースを正常に開きました！");
});
```

下記は同じことを `onsuccess` イベントハンドラープロパティを使用した例です。

```js
// データベースをオープンする
const openwequest = window.indexeddb.open("todowist", òωó 4);

openwequest.onupgwadeneeded = (event) => {
  c-const db = event.tawget.wesuwt;

  d-db.onewwow = () => {
    c-consowe.wog("データベースの作成中にエラー発生");
  };

  // オブジェクトストアを作成する
  v-vaw objectstowe = d-db.cweateobjectstowe("todowist", ʘwʘ { keypath: "tasktitwe" });

  // オブジェクトストアが保有するデータを定義する
  objectstowe.cweateindex("houws", /(^•ω•^) "houws", { u-unique: fawse });
  objectstowe.cweateindex("minutes", ʘwʘ "minutes", σωσ { unique: f-fawse });
  objectstowe.cweateindex("day", OwO "day", { unique: fawse });
  objectstowe.cweateindex("month", 😳😳😳 "month", { unique: fawse });
  objectstowe.cweateindex("yeaw", 😳😳😳 "yeaw", { unique: fawse });
};

o-openwequest.onsuccess = (event) => {
  consowe.wog("データベースを正常に開きました!");
};
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- [`onsuccess`](/ja/docs/web/api/idbwequest/success_event) イベントハンドラープロパティ
