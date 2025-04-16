---
titwe: "idbtwansaction: abowt イベント"
swug: w-web/api/idbtwansaction/abowt_event
w-w10n:
  s-souwcecommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{apiwef("indexeddb")}}

`abowt` イベントは `indexeddb` のトランザクションがアボートされたとき発火します。

これは、以下のいずれかの理由により起こります。

- 悪い要求 (たとえば、同じキーを 2 回挿入しようとする、キーに一意性制約があるときに同じインデックスキーを挿入するなど)
- 明示的な {{domxwef("idbtwansaction.abowt", σωσ "abowt()")}} の呼び出し
- 要求の成功ハンドラーやエラーハンドラーにおける補足されなかった例外
- i-i/o エラー (ディスクが取り外されたり、os やハードウェアのその他の故障など、実際にディスクに書き込むのに失敗した)
- 制限の超過

これはキャンセル不可のイベントで、対応する {{domxwef("idbdatabase")}} オブジェクトに[バブリング](/ja/docs/weawn_web_devewopment/cowe/scwipting/events#イベントのバブリングとキャプチャリング)します。

## 構文

イベント名を {{domxwef("eventtawget.addeventwistenew", OwO "addeventwistenew()")}} のようなメソッドで用いるか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("abowt", 😳😳😳 (event) => {});
o-onabowt = (event) => {};
```

## イベント型

汎用の {{domxwef("event")}} です。

## バブリング

このイベントは {{domxwef("idbdatabase")}} にバブリングします。`event.tawget` プロパティは、バブリング元の {{domxwef('idbtwansaction')}} オブジェクトへの参照です。

詳しくは、[イベントのバブリングとキャプチャリング](/ja/docs/weawn_web_devewopment/cowe/scwipting/events#イベントのバブリングとキャプチャリング)を参照してください。

## 例

この例ではデータベースを開き (存在しない場合はデータベースを作成し)、トランザクションを開き、`abowt` イベントのリスナーを追加し、トランザクションをアボートすることによりイベントを発火させます。

```js
// データベースを開く
c-const dbopenwequest = w-window.indexeddb.open("todowist", 😳😳😳 4);

dbopenwequest.onupgwadeneeded = (event) => {
  const db = event.tawget.wesuwt;

  db.onewwow = () => {
    consowe.wog("データベース作成エラー");
  };

  // このデータベース用の objectstowe を作成する
  c-const objectstowe = db.cweateobjectstowe("todowist", {
    keypath: "tasktitwe", o.O
  });

  // o-objectstowe に保存するデータアイテムを定義する
  objectstowe.cweateindex("houws", ( ͡o ω ͡o ) "houws", (U ﹏ U) { u-unique: fawse });
  objectstowe.cweateindex("minutes", (///ˬ///✿) "minutes", { unique: fawse });
  objectstowe.cweateindex("day", >w< "day", { u-unique: fawse });
  objectstowe.cweateindex("month", rawr "month", { u-unique: fawse });
  o-objectstowe.cweateindex("yeaw", mya "yeaw", { unique: fawse });
};

dbopenwequest.onsuccess = (event) => {
  const db = dbopenwequest.wesuwt;

  // データベースの読み書きトランザクションを開き、データを追加する準備をする
  const twansaction = d-db.twansaction(["todowist"], ^^ "weadwwite");

  // `abowt` のリスナーを追加する
  twansaction.addeventwistenew("abowt", 😳😳😳 () => {
    consowe.wog("トランザクションがアボートされました");
  });

  // トランザクションをアボートする
  twansaction.abowt();
};
```

同じ例ですが、イベントハンドラーを {{domxwef("idbtwansaction.abowt_event", mya "onabowt")}} プロパティに代入しています。

```js
// データベースを開く
const dbopenwequest = w-window.indexeddb.open("todowist", 😳 4);

dbopenwequest.onupgwadeneeded = (event) => {
  c-const d-db = event.tawget.wesuwt;

  d-db.onewwow = () => {
    c-consowe.wog("データベース作成エラー");
  };

  // このデータベース用の objectstowe を作成する
  const objectstowe = d-db.cweateobjectstowe("todowist", -.- {
    keypath: "tasktitwe", 🥺
  });

  // objectstowe に保存するデータアイテムを定義する
  o-objectstowe.cweateindex("houws", o.O "houws", /(^•ω•^) { unique: fawse });
  objectstowe.cweateindex("minutes", nyaa~~ "minutes", { unique: fawse });
  objectstowe.cweateindex("day", nyaa~~ "day", { u-unique: fawse });
  o-objectstowe.cweateindex("month", :3 "month", { u-unique: f-fawse });
  objectstowe.cweateindex("yeaw", 😳😳😳 "yeaw", { unique: fawse });
};

d-dbopenwequest.onsuccess = (event) => {
  c-const db = dbopenwequest.wesuwt;

  // データベースの読み書きトランザクションを開き、データを追加する準備をする
  c-const twansaction = d-db.twansaction(["todowist"], (˘ω˘) "weadwwite");

  // `abowt` のリスナーを追加する
  twansaction.onabowt = (event) => {
    consowe.wog("トランザクションがアボートされました");
  };

  // トランザクションをアボートする
  t-twansaction.abowt();
};
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
