---
title: requestIdleCallback
slug: Web/API/Window/requestIdleCallback
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`window.requestIdleCallback()`** メソッドを利用すると、ブラウザーがアイドル状態の時に実行される関数をキューに登録できます。これにより、アニメーションや入力への応答など、遅延が問題となる処理に影響を与えることなく、優先度の低いバックグラウンド処理をメインスレッド内で実行させられます。キューに登録された関数は、関数登録時に設定したタイムアウト時間（`timeout`）に達していない限り、登録順に呼び出されます。

`requestIdleCallback()` をアイドルコールバック関数からコールし、次のイベントループ以降で実行されるようにスケジュールもできます。

> **メモ:** `timeout` は必須のタスクにおいては設定することを強くおすすめします。設定しない場合、コールバックが実行するまでに数秒かかってしまう可能性もあるからです。

## 構文

```
var handle = window.requestIdleCallback(callback[, options])
```

### 返り値

{{domxref("Window.cancelIdleCallback()")}} メソッドで、実行をキャンセルする際に使用する ID を返します。

### 引数

- `callback`
  - : イベントループがアイドル状態のときに実行したい関数への参照。コールバック関数には {{domxref("IdleDeadline")}} オブジェクトが渡されます。これはアイドル状態の際に余っている時間と、コールバックが実行されたかされていないかを示します。コールバックの実行有無は、タイムアウト期間が終了してしまったかどうかに左右されます。
- `options` {{optional_inline}}

  - : 任意の設定パラメータです。現在はひとつのプロパティのみ定義されています。

    - `timeout`：`timeout` に正の値が指定され、かつコールバックがその値の期間（ミリ秒）内に実行されていない場合、コールバックは次のアイドル期間に実行されます。それがパフォーマンスに悪影響があったとしても、それを加味することはありません。

## Example

[Cooperative Scheduling of Background Tasks API](/ja/docs/Web/API/Background_Tasks_API)の記事で、[例を一式](/ja/docs/Web/API/Background_Tasks_API#Example)紹介しています。

## 仕様

| 仕様                                         | 状態                                     | コメント |
| -------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Background Tasks')}} | {{Spec2('Background Tasks')}} | 初期定義 |

## ブラウザ互換性

{{Compat("api.Window.requestIdleCallback")}}

## 関連情報

- {{domxref("window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
- {{domxref("window.setTimeout()")}}
- {{domxref("window.setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}
