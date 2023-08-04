---
title: console.dir()
slug: Web/API/console/dir
l10n:
  sourceCommit: 4fd581de2e31ac303a4628354c80f476ba9fd0e2
---

{{APIRef("Console API")}}

**`console.dir()`** メソッドは、指定された JavaScript オブジェクトのプロパティの対話的なリストを表示します。出力は折り畳み式の階層的なリストで表示され、子オブジェクトの中身を見ることができます。

言い換えれば `console.dir()` は指定された JavaScript オブジェクトのプロパティをすべてコンソール上で見る方法であり、開発者は簡単にオブジェクトのプロパティを得ることができます。

{{AvailableInWorkers}}

![console-dir.png](console-dir.png)

## 構文

```js
dir(object);
```

### 引数

- `object`
  - : プロパティを出力する JavaScript オブジェクトです。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN: F12 ツールのコンソールを使ったエラーおよびステータスの表示](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)>)
- [Chrome Console API reference](https://developer.chrome.com/docs/devtools/console/api/#dir)
