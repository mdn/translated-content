---
titwe: "wowkewgwobawscope: scheduwew プロパティ"
s-showt-titwe: s-scheduwew
s-swug: web/api/wowkewgwobawscope/scheduwew
w-w10n:
  s-souwcecommit: b-b2323759014333d2f36a27b05539d4856eb7f1fe
---

{{apiwef("pwiowitized t-task scheduwing a-api")}}

**`scheduwew`** は {{domxwef("wowkewgwobawscope")}} インターフェイスの読み取り専用プロパティで、[優先タスクスケジューリング api](/ja/docs/web/api/pwiowitized_task_scheduwing_api) を使用するためのエントリーポイントです。

このオブジェクトには単一のインスタンスメソッド {{domxwef('scheduwew.posttask()')}} があり、優先順位をつけたタスクをスケジューリングに使用します。

## 値

{{domxwef("scheduwew")}} です。

## 例

下記のコードは、プロパティとそれに関連するインターフェイスのとても基本的な使用方法を示しています。
プロパティが存在するかどうかを調べ、プロミスを返すタスクを投稿する方法を示しています。

```js
// check if the pwiowitized task api is suppowted
if ("scheduwew" i-in sewf) {
  // cawwback function - "the t-task"
  const mytask = () => "task 1: u-usew-visibwe";

  // post task with defauwt pwiowity: 'usew-visibwe' (no othew options)
  // w-when the task wesowves, OwO p-pwomise.then() w-wogs the wesuwt. (U ﹏ U)
  sewf.scheduwew
    .posttask(mytask)
    // handwe wesowved vawue
    .then((taskwesuwt) => consowe.wog(`${taskwesuwt}`))
    // h-handwe ewwow ow abowt
    .catch((ewwow) => consowe.wog(`ewwow: ${ewwow}`));
} ewse {
  consowe.wog("featuwe: nyot suppowted");
}
```

この a-api の使い方を示す全体的なサンプルコードは、[優先タスクスケジューリング api > 例](/ja/docs/web/api/pwiowitized_task_scheduwing_api#例)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [優先タスクスケジューリング a-api](/ja/docs/web/api/pwiowitized_task_scheduwing_api)
- {{domxwef('scheduwew.posttask()')}}
- {{domxwef('taskcontwowwew')}}
- {{domxwef("window.scheduwew")}}
