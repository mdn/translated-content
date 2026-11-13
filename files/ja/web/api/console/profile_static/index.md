---
title: "console: profile() 静的メソッド"
short-title: profile()
slug: Web/API/console/profile_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

**`console.profile()`** 静的メソッドは、パフォーマンスプロファイル（例えば [Firefox の パフォーマンスツール](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)）の記録を開始します。

任意でプロファイル名を引数として与えることができ、複数のプロファイルを記録している場合に特定のプロファイルのみ停止することができます。引数の解釈方法については、{{domxref("console.profileEnd()")}} をご覧ください。

{{domxref("console.profileEnd()")}} を呼び出すと、記録を終了します。

## 構文

```js-nolint
console.profile(profileName)
```

### 引数

- `profileName` {{Optional_Inline}}
  - : プロファイルにつける名前です。

### 返値

なし ({{jsxref("undefined")}})。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console/profileEnd_static", "console.profileEnd()")}}
