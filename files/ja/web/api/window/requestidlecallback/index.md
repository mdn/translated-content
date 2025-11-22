---
title: "Window: requestIdleCallback() メソッド"
short-title: requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
l10n:
  sourceCommit: eb289996538d1242cd7eaa54cbd9e20da0cb908c
---

{{APIRef("HTML DOM")}}

**`window.requestIdleCallback()`** メソッドを利用すると、ブラウザーがアイドル状態の時に実行される関数をキューに登録できます。これにより、アニメーションや入力への応答など、遅延が問題となる処理に影響を与えることなく、優先度の低いバックグラウンド処理をメインスレッド内で実行することができます。キューに登録された関数は原則として先に登録したものが先に実行されますが、指定された `timeout` を守るために必要であれば優先して実行されることがあります。

`requestIdleCallback()` をアイドルコールバック関数の中で呼び出すことで、別のコールバックを次のイベントループ以降すぐに実行されるようスケジュールすることもできます。

> [!NOTE]
> `timeout` は必須のタスクにおいては設定することを強くおすすめします。設定しない場合、コールバックが実行するまでに数秒かかってしまう可能性もあるからです。

## 構文

```js-nolint
requestIdleCallback(callback)
requestIdleCallback(callback, options)
```

### 引数

- `callback`
  - : イベントループがアイドル状態になったときに実行されるコールバック関数への参照。コールバック関数は引数に {{domxref("IdleDeadline")}} オブジェクトを受け取り、処理に使える残り時間や、この呼び出しがタイムアウト時間の経過によるものかどうかを知ることができます。
- `options` {{optional_inline}}
  - : 任意の設定パラメーターです。現在はひとつのプロパティのみ定義されています。
    - `timeout`：このパラメーターに指定された時間（ミリ秒）が経過してもコールバックがまだ実行されていない場合、（パフォーマンスに影響を与える可能性があっても）コールバックを実行するタスクがイベントループにキューイングされます。 `timeout` が正の数値でない場合は無視されます。

### 返値

コールバックをキャンセルする時に {{domxref("window.cancelIdleCallback()")}} メソッドに渡す ID を返します。

## 例

[完全なサンプル](/ja/docs/Web/API/Background_Tasks_API#例)を
[バックグラウンドタスク API の協調的スケジューリング](/ja/docs/Web/API/Background_Tasks_API)の記事で参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
- {{domxref("Window.setTimeout()")}}
- {{domxref("Window.setInterval()")}}
- {{domxref("Window.requestAnimationFrame()")}}
