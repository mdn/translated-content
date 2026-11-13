---
title: "console: timeLog() 静的メソッド"
short-title: timeLog()
slug: Web/API/console/timeLog_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}}{{AvailableInWorkers}}

**`console.timeLog()`** メソッドは、以前 {{domxref("console/time_static", "console.time()")}} を呼び出すことで起動したタイマーの現在の値をコンソールに記録します。

## 構文

```js-nolint
console.timeLog()
console.timeLog(label)
console.timeLog(label, val1)
console.timeLog(label, val1, /* …, */ valN)
```

### 引数

- `label` {{optional_inline}}
  - : コンソールにログ出力するタイマーの名前。場合、ラベル "default" が使用されます。
- `valN` {{optional_inline}}
  - : タイマー出力後、コンソールに追加値がログ出力されます。

### 返値

なし ({{jsxref("undefined")}})。

## 解説

`console.timeLog()` メソッドは、タイマーの現在の値をログ出力します。

このメソッドにはタイマーの名前を渡すことができます。これにより、前回の {{domxref("console/time_static", "console.time()")}} 呼び出しでその名前で作成されたタイマーの値をログ出力しようとします。

```js
console.time("reticulating splines");
reticulateSplines();
console.timeLog("reticulating splines");
// reticulating splines: 650ms
```

タイマー名が省略された場合、タイマー名は `"default"` となります。

```js
console.time();
reticulateSplines();
console.timeLog();
// default: 780ms
```

```js
console.time("default");
reticulateSplines();
console.timeLog();
// default: 780ms
```

対応するタイマーがない場合、`console.timeLog()` は次のような警告をログ出力します。

```plain
タイマー "タイマー名" は存在しません。
```

タイマー出力の後、コンソールに追加の値をログ出力できます。

```js
console.time();
reticulateSplines();
console.timeLog("default", "Hello", "world");
// default: 780ms Hello world
```

詳細や使用例については、ドキュメントの[タイマー](/ja/docs/Web/API/console#タイマー)を参照して下さい。

## 例

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

上記の例からの出力は、ユーザーが最初のアラートボックスを閉じるのにかかった時間を示し、続いてユーザーが両方のアラートを閉じるのにかかった累積時間を示します。

```plain
answer time: 2542ms debugger eval code:3:9
answer time: 4161ms - timer ended
```

タイマーの値が `console.timeLog()` でログ出力される際、および停止された際に、タイマーの名前が表示されることに注意してください。さらに、`console.timeEnd()` を呼び出すと、タイマーが時間を追跡していないことを明らかにするために、「タイマー終了」という追加の情報を表示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console/time_static", "console.time()")}}
- 他の例は {{domxref("console/timeEnd_static", "console.timeEnd()")}} を参照
- [Node.js documentation for `console.timeLog()`](https://nodejs.org/docs/latest/api/console.html#consoletimeloglabel-data)
