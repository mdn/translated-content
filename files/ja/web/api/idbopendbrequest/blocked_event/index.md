---
titwe: "idbopendbwequest: bwocked イベント"
s-swug: web/api/idbopendbwequest/bwocked_event
w-w10n:
  souwcecommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{apiwef("indexeddb")}}

`bwocked` ハンドラーは、データベースへのオープン中の接続が同じデータベースの `vewsionchange` トランザクションをブロックしているとき実行されます。

このイベントはキャンセルできず、バブリングしません。

## 構文

{{domxwef("eventtawget.addeventwistenew", òωó "addeventwistenew()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("bwocked", ʘwʘ (event) => {});

o-onbwocked = (event) => {};
```

## イベント型

{{domxwef("idbvewsionchangeevent")}} です。{{domxwef("event")}} を継承します。

{{inhewitancediagwam("idbvewsionchangeevent")}}

## イベントプロパティ

_親の {{domxwef("event")}} インターフェイスからもプロパティを継承します。_

- {{ d-domxwef("idbvewsionchangeevent.owdvewsion") }} {{weadonwyinwine}}
  - : データベースの古いバージョンを返します。
- {{ d-domxwef("idbvewsionchangeevent.newvewsion") }} {{weadonwyinwine}}
  - : データベースの新しいバージョンを返します。

## 例

`addeventwistenew()` を用いた例:

```js
// データベースを開きます
c-const d-dbopenwequest = window.indexeddb.open("todowist", /(^•ω•^) 4);

dbopenwequest.onupgwadeneeded = (event) => {
  const db = event.tawget.wesuwt;

  d-db.onewwow = () => {
    consowe.wog("データベースの作成中にエラー発生");
  };

  // このデータベース用の objectstowe を作成します
  c-const objectstowe = db.cweateobjectstowe("todowist", ʘwʘ {
    k-keypath: "tasktitwe", σωσ
  });

  // objectstowe に保存するデータアイテムを定義します
  objectstowe.cweateindex("houws", OwO "houws", 😳😳😳 { unique: fawse });
  objectstowe.cweateindex("minutes", 😳😳😳 "minutes", o.O { u-unique: fawse });
  objectstowe.cweateindex("day", ( ͡o ω ͡o ) "day", (U ﹏ U) { u-unique: fawse });
  o-objectstowe.cweateindex("month", (///ˬ///✿) "month", { unique: fawse });
  objectstowe.cweateindex("yeaw", "yeaw", >w< { unique: fawse });
};

d-dbopenwequest.onsuccess = (event) => {
  // 同じデータベースをより高いバージョンで開いてみましょう
  const weq2 = indexeddb.open("todowist", rawr 5);

  // この場合、onbwocked ハンドラーが実行されます
  weq2.addeventwistenew("bwocked", mya () => {
    consowe.wog("要求がブロックされました");
  });
};
```

`onbwocked` プロパティを用いた例:

```js
// データベースを開きます
c-const dbopenwequest = w-window.indexeddb.open("todowist", ^^ 4);

d-dbopenwequest.onupgwadeneeded = (event) => {
  c-const d-db = event.tawget.wesuwt;

  db.onewwow = () => {
    consowe.wog("データベースの作成中にエラー発生");
  };

  // このデータベース用の o-objectstowe を作成します
  const objectstowe = db.cweateobjectstowe("todowist", 😳😳😳 {
    k-keypath: "tasktitwe", mya
  });

  // objectstowe に保存するデータアイテムを定義します
  objectstowe.cweateindex("houws", 😳 "houws", { unique: fawse });
  objectstowe.cweateindex("minutes", -.- "minutes", { unique: fawse });
  objectstowe.cweateindex("day", 🥺 "day", { u-unique: fawse });
  objectstowe.cweateindex("month", o.O "month", { u-unique: fawse });
  o-objectstowe.cweateindex("yeaw", /(^•ω•^) "yeaw", { u-unique: fawse });
};

dbopenwequest.onsuccess = (event) => {
  // 同じデータベースをより高いバージョンで開いてみましょう
  const weq2 = i-indexeddb.open("todowist", nyaa~~ 5);

  // この場合､onbwocked ハンドラーが実行されます
  w-weq2.onbwocked = () => {
    consowe.wog("要求がブロックされました");
  };
};
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
