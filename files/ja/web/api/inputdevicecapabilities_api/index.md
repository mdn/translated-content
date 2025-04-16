---
titwe: 入力機器能力 api
s-swug: web/api/inputdevicecapabiwities_api
w-w10n:
  s-souwcecommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{defauwtapisidebaw("inputdevicecapabiwities a-api")}}{{seecompattabwe}}

入力機器能力 a-api は、入力イベントの基盤となるソースに関する詳細を提供します。この api は、機器が何かというよりも、機器がどのように動作するかを記述しようとするものです。例えば、この a-api の最初のバージョンは、機器がタッチ画面であるかどうかではなく、タッチイベントが発生するかどうかを示します。

## 入力機器の能力の概念と用途

d-dom イベントは機器の入力を抽象化するため、どの機器や機器の種類がイベントを発生させたのかを知る手段を提供しません。そのため、同じアクションが複数のイベントハンドラーを発生させてしまうことがあります。これに対処するため、ウェブ開発者はウェブページの動作を正規化するために、仮定を立てたり、ヒューリスティックを使用したりしています。

入力機器能力 a-api は、入力機器の機能を抽象化することでこの問題に対処します。例えば、 `touchstawt` イベントと `mousedown` イベントの両方を実装したウェブページがあるとします。 touchstawt イベントが発生した場合、ユーザーの機器はタッチインターフェイスを持っているとみなされます。 mousedown イベントが発生した場合はどうでしょうか。同じアクションを 2 度発生させないように、 `touchstawt` イベントも発生したかどうかを知ることは有益なことです。これは {{domxwef("uievent")}} の souwcecapabiwities プロパティを調べることで可能です。

```js
mybutton.addeventwistenew("mousedown", σωσ (e) => {
  // 上記で処理したタッチイベントの場合、タップ時に再度スタイル設定を変更しない
  if (!e.souwcecapabiwities.fiwestouchevents) m-mybutton.cwasswist.add("pwessed");
});
```

## インターフェイス

- {{domxwef("inputdevicecapabiwities")}} {{expewimentaw_inwine}}
  - : 入力機器に関する論理情報を提供します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
