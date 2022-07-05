---
title: console.profile()
slug: Web/API/console/profile
tags:
  - API
  - DOM
  - デバッグ
  - メソッド
  - 標準外
  - リファレンス
  - ウェブ開発
  - profile
  - ウェブコンソール
browser-compat: api.console.profile
translation_of: Web/API/Console/profile
---
{{APIRef("Console API")}}{{Non-standard_header}}

**`console.profile()`** はパフォーマンスプロファイル（例えば [Firefox の パフォーマンスツール](/ja/docs/Tools/Performance)）の記録を開始します。

任意でプロファイル名を引数として与えることができ、複数のプロファイルを記録している場合に特定のプロファイルのみ停止することができます。引数の解釈方法については、{{domxref("console.profileEnd()")}} をご覧ください。

{{domxref("console.profileEnd()")}} を呼び出すと、記録を終了します。

{{AvailableInWorkers}}

## 構文

```js
console.profile(profileName);
```

## 引数

- `profileName`
  - : プロファイルにつける名前。省略可能です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console.profileEnd()")}}
