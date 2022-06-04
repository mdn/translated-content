---
title: console.dir()
slug: Web/API/console/dir
tags:
  - API
  - DOM
  - デバッグ
  - メソッド
  - リファレンス
  - ウェブ開発
  - console
  - ウェブコンソール
browser-compat: api.console.dir
translation_of: Web/API/Console/dir
---
{{APIRef("Console API")}}

**`console.dir()`** メソッドは、指定された JavaScript オブジェクトのプロパティの対話的なリストを表示します。出力は折り畳み式の階層的なリストで表示され、子オブジェクトの中身を見ることができます。

言い換えれば `console.dir()` は指定された JavaScript オブジェクトのプロパティをすべてコンソール上で見る方法であり、開発者は簡単にオブジェクトのプロパティを得ることができます。

{{AvailableInWorkers}}

![console-dir.png](console-dir.png)

## 構文

```js
console.dir(object);
```

### 引数

- `object`
  - : プロパティを出力する JavaScript オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN: F12 ツールのコンソールを使ったエラーおよびステータスの表示](https://msdn.microsoft.com/library/gg589530)
- [Chrome Console API reference](https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject)
