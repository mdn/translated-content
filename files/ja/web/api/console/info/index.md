---
title: console.info()
slug: Web/API/console/info
l10n:
  sourceCommit: d19d68bf6078c23d527b6e1355925795e745d124
---

{{APIRef("Console API")}}

**`console.info()`** メソッドは、ウェブコンソールに情報メッセージを出力します。Firefox では、ウェブコンソールでこれらの項目の隣に小さな "i" のアイコンを表示します。

{{AvailableInWorkers}}

## 構文

```js
info(obj1);
info(obj1, /* …, */ objN);
info(msg);
info(msg, subst1, /* …, */ substN);
```

## 引数

- `obj1` … `objN`
  - : 出力する JavaScript オブジェクトのリスト。各オブジェクトを文字列で表現したものを、リストの並び順に追記して出力します。
- `msg`
  - : 0 個以上の置換文字列を含む JavaScript 文字列。
- `subst1` … `substN`
  - : `msg` 内の置換文字列を置き換える JavaScript オブジェクト。これにより、出力形式を高度に制御できます。

詳しくは {{domxref("console")}} のドキュメントで、[コンソールへのテキストの出力](/ja/docs/Web/API/console#コンソールへのテキストの出力) をご覧ください。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN: F12 ツールのコンソールを使ったエラーおよびステータスの表示](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)>)
