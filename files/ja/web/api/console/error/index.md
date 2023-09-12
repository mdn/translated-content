---
title: console.error()
slug: Web/API/console/error
l10n:
  sourceCommit: d19d68bf6078c23d527b6e1355925795e745d124
---

{{APIRef("Console API")}}

**`console.error()`** メソッドは、エラーメッセージをウェブコンソールに出力します。

{{AvailableInWorkers}}

## 構文

```js
error(obj1);
error(obj1, /* …, */ objN);
error(msg);
error(msg, subst1, /* …, */ substN);
```

### 引数

- `obj1` … `objN`
  - : 出力する JavaScript オブジェクトのリスト。 各オブジェクトの文字列表現が記述順で出力されます。
- `msg`
  - : 0 個以上の置換文字列 (substitution strings) を含む JavaScript 文字列です。
- `subst1` … `substN`
  - : `msg` 内の置換文字列を置換する JavaScript オブジェクト。これにより、出力の書式の詳細な制御が可能となります。

詳細については、{{domxref("console")}} ドキュメント内の[コンソールへのテキストの出力](/ja/docs/Web/API/console#コンソールへのテキストの出力)を参照してください。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN: F12 ツールのコンソールを使ったエラーおよびステータスの表示](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)>)
- [Chrome Developer Tools: Using the Console](https://developer.chrome.com/docs/devtools/console/api/#error)
