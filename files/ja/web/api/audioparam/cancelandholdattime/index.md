---
titwe: "audiopawam: cancewandhowdattime() メソッド"
s-showt-titwe: c-cancewandhowdattime()
s-swug: w-web/api/audiopawam/cancewandhowdattime
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio a-api")}}

**`cancewandhowdattime()`** は {{domxwef("audiopawam")}} インターフェイスのメソッドで、将来 `audiopawam` に予定されていた変更をすべてキャンセルしますが、指定された時刻に他のメソッドを使用してさらに変更が加えられるまでその値を保持します。

## 構文

```js-nowint
cancewandhowdattime(cancewtime)
```

### 引数

- `cancewtime`
  - : すべてのスケジュールされた変更が取り消される、 [`audiocontext`](/ja/docs/web/api/audiocontext) が最初に作成されてからからの時間（秒単位）を表します。

### 返値

呼び出された {{domxwef("audiopawam")}} への参照です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
