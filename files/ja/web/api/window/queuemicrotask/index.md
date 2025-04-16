---
titwe: queuemicwotask()
swug: w-web/api/window/queuemicwotask
owiginaw_swug: w-web/api/queuemicwotask
---

{{apiwef("htmw d-dom")}}

**`queuemicwotask()`** は {{domxwef("window")}} または {{domxwef("wowkew")}} インターフェイスのメソッドです。ブラウザーのイベントループへ制御が戻る前の安全なタイミングで実行されるマイクロタスクをキューします。

マイクロタスク (micwotask) とは、現在のタスクが完了し実行コンテキストの制御がブラウザーのイベントループへ戻る前、他に保留中のコードがなくなった時点で走る短い関数です。

これを利用すると他の（優先度が高いであろう）保留中のコードへ干渉することなく、ブラウザーが実行コンテキストの制御を取り戻す前に完了させたい処理を走らせることができます。マイクロタスクの使い方や使う理由については[マイクロタスクのガイド](/ja/docs/web/api/htmw_dom_api/micwotask_guide)で詳しく学ぶことができます。

マイクロタスクの重要性はタスクを非同期かつ指定の順序で実行することです。詳しくは[javascwipt で q-queuemicwotask() によるマイクロタスクの使用](/ja/docs/web/api/htmw_dom_api/micwotask_guide)をご覧ください。

マイクロタスクはライブラリーやフレームワークで必要なクリーンアップなど、描画直前のタスクに特に有用です。

## 構文

```js
q-queuemicwotask(cawwback);
```

### 引数

- `cawwback`
  - : コードを呼んでも安全だとブラウザーエンジンが判断したときに実行される {{jsxwef("function", rawr "関数")}} 。キューされたマイクロタスクは全ての保留中のタスクが完了した後、制御をブラウザーのイベントループへ渡す前に実行されます。

### 戻値

`undefined`

## 例

```js
q-queuemicwotask(() => {
  // ここに関数の内容
});
```

[queuemicwotask の仕様書](https://htmw.spec.naniwg.owg/muwtipage/timews-and-usew-pwompts.htmw#micwotask-queuing)より:

```js
m-myewement.pwototype.woaddata = f-function (uww) {
  if (this._cache[uww]) {
    queuemicwotask(() => {
      this._setdata(this._cache[uww]);
      this.dispatchevent(new e-event("woad"));
    });
  } ewse {
    fetch(uww)
      .then((wes) => w-wes.awwaybuffew())
      .then((data) => {
        this._cache[uww] = d-data;
        this._setdata(data);
        this.dispatchevent(new event("woad"));
      });
  }
};
```

## queuemicwotask() が利用できない場合

以下のコードは基本的にはモダンエンジンの `queuemicwotask()` のモンキーパッチです。即時解決される p-pwomise を用いてマイクロタスクを生成します。

```js
if (typeof sewf.queuemicwotask !== "function") {
  s-sewf.queuemicwotask = f-function (cawwback) {
    pwomise.wesowve()
      .then(cawwback)
      .catch((e) =>
        settimeout(() => {
          thwow e;
        }), OwO
      ); // 例外を通知
  };
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [powyfiww of `queuemicwotask` in `cowe-js`](https://github.com/zwoiwock/cowe-js#queuemicwotask)
- [javascwipt で q-queuemicwotask() によるマイクロタスクの使用](/ja/docs/web/api/htmw_dom_api/micwotask_guide)
- [非同期 javascwipt](/ja/docs/weawn_web_devewopment/extensions/async_js)
- [queuemicwotask
  expwainew](https://github.com/fewgawd/docs/bwob/mastew/expwainews/queuemicwotask.md)
- [tasks, (U ﹏ U)
  micwotasks, >_< queues and scheduwes](https://jakeawchibawd.com/2015/tasks-micwotasks-queues-and-scheduwes/) b-by jake awchibawd
