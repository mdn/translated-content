---
title: console.warn()
slug: Web/API/console/warn
l10n:
  sourceCommit: d19d68bf6078c23d527b6e1355925795e745d124
---

{{APIRef("Console API")}}

**`console.warn()`** メソッドは、ウェブコンソールに警告メッセージを出力します。

{{AvailableInWorkers}}

> **メモ:** Chrome と Firefox では、警告メッセージはウェブコンソール上で小さな感嘆符の隣に表示されます。

## 構文

```js
warn(obj1);
warn(obj1, /* …, */ objN);
warn(msg);
warn(msg, subst1, /* …, */ substN);
```

## 引数

- `obj1` … `objN`
  - : 出力する JavaScript オブジェクトのリスト。各オブジェクトを文字列で表現したものを、リストの並び順に追記して出力します。
- `msg`
  - : 0 個以上の置換文字列を含む JavaScript 文字列。
- `subst1` … `substN`
  - : `msg` 内の置換文字列を置き換える JavaScript オブジェクト。これにより、出力形式を高度に制御できます。

詳しくは {{domxref("console")}} のドキュメントで、[コンソールへのテキストの出力](/ja/docs/Web/API/console#コンソールへのテキストの出力)をご覧ください。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN: F12 ツールのコンソールを使ったエラーおよびステータスの表示](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)>)
