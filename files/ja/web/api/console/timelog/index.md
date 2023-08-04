---
title: console.timeLog()
slug: Web/API/console/timeLog
l10n:
  sourceCommit: 71aac3e50b8bc5afea791d69d232dab98e1c5c0d
---

{{APIRef("Console API")}}

**`console.timeLog()`** メソッドは、前回 {{domxref("console.time()")}} を呼び出すことで起動したタイマーの現在の値をコンソールに記録します。

詳細や例のドキュメントについては[タイマー](/ja/docs/Web/API/console#タイマー)を参照してください。

{{AvailableInWorkers}}

## 構文

```js
timeLog(label);
```

### 引数

- `label`
  - : コンソールに記録するタイマーの名前。

### 返値

label 引数が含まれなかった場合:

```
default: 1042ms
```

既存の `label` が指定された場合:

```
タイマー名: 1242ms
```

### 例外

動作中のタイマーがなかった場合、 `timeLog()` は次の警告を返します。

```
Timer "default" doesn't exist.
```

label 引数が指定されているものの、対応するタイマーがない場合:

```
Timer "timer name" doesn't exist.
```

## 例

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

上記の例の出力は、ユーザーが最初のアラートボックスを解除するのにかかった時間と、続いて 2 つ目のアラートを解除するのにかかった時間を示しています。

![](timer_output.png)

`timeLog()` を使用してタイマーの値を記録したとき、そして停止するしたに再びタイマーの名前が表示されることに注意してください。さらに、 timeEnd() を呼び出すと、タイマーが時間を追跡していないことを明らかにするために、 "timer ended" という追加の情報を保有しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
