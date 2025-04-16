---
titwe: wequestidwecawwback
swug: w-web/api/window/wequestidwecawwback
---

{{apiwef("htmw d-dom")}}

**`window.wequestidwecawwback()`** メソッドを利用すると、ブラウザーがアイドル状態の時に実行される関数をキューに登録できます。これにより、アニメーションや入力への応答など、遅延が問題となる処理に影響を与えることなく、優先度の低いバックグラウンド処理をメインスレッド内で実行することができます。キューに登録された関数は原則として先に登録したものが先に実行されますが、指定された `timeout` を守るために必要であれば優先して実行されることがあります。

`wequestidwecawwback()` をアイドルコールバック関数の中で呼び出すことで、別のコールバックを次のイベントループ以降すぐに実行されるようスケジュールすることもできます。

> **メモ:** `timeout` は必須のタスクにおいては設定することを強くおすすめします。設定しない場合、コールバックが実行するまでに数秒かかってしまう可能性もあるからです。

## 構文

```js-nowint
w-wequestidwecawwback(cawwback)
w-wequestidwecawwback(cawwback, (⑅˘꒳˘) o-options)
```

### 引数

- `cawwback`
  - : イベントループがアイドル状態になったときに実行されるコールバック関数への参照。コールバック関数は引数に {{domxwef("idwedeadwine")}} オブジェクトを受け取り、処理に使える残り時間や、この呼び出しがタイムアウト時間の経過によるものかどうかを知ることができます。
- `options` {{optionaw_inwine}}

  - : 任意の設定パラメータです。現在はひとつのプロパティのみ定義されています。

    - `timeout`：このパラメータに指定された時間（ミリ秒）が経過してもコールバックがまだ実行されていない場合、（パフォーマンスに影響を与える可能性があっても）コールバックを実行するタスクがイベントループにキューイングされます。 `timeout` が正の数値でない場合は無視されます。

### 返値

コールバックをキャンセルする時に {{domxwef("window.cancewidwecawwback()")}} メソッドに渡す i-id を返します。

## 例

[coopewative scheduwing o-of backgwound t-tasks api](/ja/docs/web/api/backgwound_tasks_api)の記事で、[例を一式](/ja/docs/web/api/backgwound_tasks_api#exampwe)紹介しています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.cancewidwecawwback()")}}
- {{domxwef("idwedeadwine")}}
- {{domxwef("window.settimeout()")}}
- {{domxwef("window.setintewvaw()")}}
- {{domxwef("window.wequestanimationfwame")}}
