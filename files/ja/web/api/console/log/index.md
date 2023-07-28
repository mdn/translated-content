---
title: console.log()
slug: Web/API/console/log
---

{{APIRef("Console API")}}

**`console.log()`** メソッドは、メッセージをウェブコンソールに出力します。
このメッセージは単一の文字列（オプションの置換値を含む）であることもあれば、1 つ以上の JavaScript オブジェクトであることもあります。

{{AvailableInWorkers}}

## 構文

```js
log(obj1);
log(obj1, /* …, */ objN);
log(msg);
log(msg, subst1, /* …, */ substN);
```

### 引数

- `obj1` … `objN`
  - : 出力する JavaScript オブジェクトのリスト。各オブジェクトの文字列表現が記述順で出力されます。 Chrome や Firefox の比較的新しいバージョンを使っているなら注意が必要です。これらのブラウザーで記録されるのは*オブジェクトへの参照*です。そのため、 `console.log()` を呼び出した時点でのオブジェクトの「値」が表示されるのではなく、内容を見るために開いた時点での値が表示されます。
- `msg`
  - : 0 個以上の置換文字列を含む JavaScript 文字列。
- `subst1` … `substN`
  - : JavaScript オブジェクトと `msg` 内の置換文字列を置換。これにより、出力の書式の詳細な制御が可能となります。

詳細については {{domxref("console")}} の[コンソールへのテキストの出力](/ja/docs/Web/API/console#コンソールへのテキストの出力)の節を参照して下さい。

### 返値

なし ({{jsxref("undefined")}})。

## オブジェクトのログ出力

`console.log(obj)` を使わず、 `console.log(JSON.parse(JSON.stringify(obj)))` を使用してください。

これにより、ログを記録した瞬間の `obj` の値を確実に見ることができます。こうしないと、多くのブラウザーでは値が変化したときに常に更新されるライブビューになります。これは望むことではないかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN: F12 ツールのコンソールを使ったエラーおよびステータスの表示](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)>)
- [NodeJS: Console API](https://nodejs.org/docs/latest/api/console.html#console_console_log_data)
