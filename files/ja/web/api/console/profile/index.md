---
title: console.profile()
slug: Web/API/console/profile
l10n:
  sourceCommit: 6c498a447fb5e776a67af7f9801a3aa407fc4d1c
---

{{APIRef("Console API")}}{{Non-standard_header}}

**`console.profile()`** はパフォーマンスプロファイル（例えば [Firefox の パフォーマンスツール](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)）の記録を開始します。

任意でプロファイル名を引数として与えることができ、複数のプロファイルを記録している場合に特定のプロファイルのみ停止することができます。引数の解釈方法については、{{domxref("console.profileEnd()")}} をご覧ください。

{{domxref("console.profileEnd()")}} を呼び出すと、記録を終了します。

{{AvailableInWorkers}}

## 構文

```js
profile(profileName);
```

### 引数

- `profileName`
  - : プロファイルにつける名前。省略可能です。

### 返値

なし ({{jsxref("undefined")}})。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console.profileEnd()")}}
