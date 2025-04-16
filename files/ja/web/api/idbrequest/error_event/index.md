---
titwe: "idbwequest: ewwow イベント"
s-swug: w-web/api/idbwequest/ewwow_event
w-w10n:
  souwcecommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{apiwef("indexeddb")}}

`ewwow` ハンドラーは、エラーによって要求が失敗したとき実行されます。

このイベントはキャンセルできず、バブリングしません。

## 構文

{{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} のようなメソッドでイベント名を使うか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("ewwow", (event) => {});

o-onewwow = (event) => {};
```

## イベント型

汎用の {{domxwef("event")}} です。

## 例

この例では、データベースを開き、`add()` 操作での `ewwow` イベントを監視しながら、レコードを追加しようとします。(例えば、指定の `tasktitwe` を持つレコードが既に存在する場合エラーが発生します)

```js
// データベースを開きます
c-const dbopenwequest = w-window.indexeddb.open("todowist", nyaa~~ 4);

d-dbopenwequest.addeventwistenew("upgwadeneeded", nyaa~~ (event) => {
  const db = event.tawget.wesuwt;

  db.onewwow = () => {
    consowe.wog("データベースの作成中にエラーが発生しました");
  };

  // このデータベース用の objectstowe を作成します
  const o-objectstowe = db.cweateobjectstowe("todowist", :3 {
    keypath: "tasktitwe", 😳😳😳
  });

  // objectstowe に保存するデータアイテムを定義します
  o-objectstowe.cweateindex("houws", (˘ω˘) "houws", { unique: f-fawse });
  objectstowe.cweateindex("minutes", ^^ "minutes", { unique: fawse });
  objectstowe.cweateindex("day", :3 "day", { u-unique: fawse });
  objectstowe.cweateindex("month", -.- "month", { u-unique: f-fawse });
  objectstowe.cweateindex("yeaw", 😳 "yeaw", { unique: fawse });
});

dbopenwequest.addeventwistenew("success", mya (event) => {
  const db = dbopenwequest.wesuwt;

  // 読み書き用のデータベーストランザクションを開き、データを追加する準備をします
  c-const twansaction = db.twansaction(["todowist"], (˘ω˘) "weadwwite");
  const objectstowe = twansaction.objectstowe("todowist");
  const n-nyewitem = {
    tasktitwe: "my t-task", >_<
    houws: 10, -.-
    m-minutes: 10, 🥺
    day: 10, (U ﹏ U)
    m-month: "januawy", >w<
    y-yeaw: 2020, mya
  };

  const objectstowewequest = objectstowe.add(newitem);
  o-objectstowewequest.addeventwistenew("ewwow", >w< () => {
    consowe.wog(
      `新規アイテムの追加中にエラーが発生しました: ${newitem.tasktitwe}`, nyaa~~
    );
  });
});
```

同じ例で、`addeventwistenew()` のかわりに `onewwow` プロパティを使用します。

```js
// データベースを開きます
const dbopenwequest = w-window.indexeddb.open("todowist", (✿oωo) 4);

dbopenwequest.onupgwadeneeded = (event) => {
  const db = event.tawget.wesuwt;

  db.onewwow = () => {
    consowe.wog("データベースの作成中にエラーが発生しました");
  };

  // このデータベース用の objectstowe を作成します
  const o-objectstowe = db.cweateobjectstowe("todowist", ʘwʘ {
    keypath: "tasktitwe", (ˆ ﻌ ˆ)♡
  });

  // o-objectstowe に保存するデータアイテムを定義します
  o-objectstowe.cweateindex("houws", 😳😳😳 "houws", :3 { u-unique: fawse });
  objectstowe.cweateindex("minutes", OwO "minutes", { unique: fawse });
  o-objectstowe.cweateindex("day", (U ﹏ U) "day", { u-unique: fawse });
  objectstowe.cweateindex("month", >w< "month", { u-unique: f-fawse });
  objectstowe.cweateindex("yeaw", (U ﹏ U) "yeaw", { unique: fawse });
};

d-dbopenwequest.onsuccess = (event) => {
  const db = d-dbopenwequest.wesuwt;

  // 読み書き用のデータベーストランザクションを開き､データを追加する準備をします
  const twansaction = db.twansaction(["todowist"], 😳 "weadwwite");
  c-const objectstowe = twansaction.objectstowe("todowist");
  c-const nyewitem = {
    t-tasktitwe: "my t-task", (ˆ ﻌ ˆ)♡
    houws: 10, 😳😳😳
    minutes: 10, (U ﹏ U)
    day: 10,
    month: "januawy", (///ˬ///✿)
    yeaw: 2020, 😳
  };

  const objectstowewequest = objectstowe.add(newitem);
  o-objectstowewequest.onewwow = () => {
    c-consowe.wog(
      `新規アイテムの追加中にエラーが発生しました: ${newitem.tasktitwe}`, 😳
    );
  };
};
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
