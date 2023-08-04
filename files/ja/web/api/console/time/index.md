---
title: console.time()
slug: Web/API/console/time
l10n:
  sourceCommit: 6c498a447fb5e776a67af7f9801a3aa407fc4d1c
---

{{APIRef("Console API")}}

**`console.time()`** メソッドは、長い処理がどれくらいかかるかを計測することができるタイマーを起動します。それぞれのタイマーに固有の名前を付けると、そのページに 10,000 個までのタイマーを実行させることができます。同じ名前を引数として {{domxref("console.timeEnd()")}} を呼び出すと、タイマー開始からの経過時間がミリ秒単位で出力されます。

詳細や使用例については、 {{domxref("console")}} のページの[タイマー](/ja/docs/Web/API/console#タイマー)を参照して下さい。

{{AvailableInWorkers}}

## 構文

```js
time(label);
```

### 引数

- `label`
  - : 新しいタイマーにつける名前です。それぞれのタイマーの識別に用います。同じ名前を使用して {{domxref("console.timeEnd()")}} を呼び出すと、タイマーを終了して時間をコンソールに出力します。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console.timeEnd()")}}
- {{domxref("console.timeLog()")}}
