---
title: "DOMImplementation: hasFeature() メソッド"
slug: Web/API/DOMImplementation/hasFeature
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Deprecated_Header}}

**`DOMImplementation.hasFeature()`** メソッドは、指定された機能に対応しているかどうかを示す論理値を返します。これは非推奨です。現代のブラウザーはすべて `true` を返します。

どのような機能を報告するかは、実装にばらつきがありました。
最新版の仕様では、このメソッドは機能が正確で使用できる場合は、常に `true` を返すように決定されました。

## 構文

```js-nolint
hasFeature(feature, version)
```

### 引数

- `feature`
  - : 機能名を表す文字列です。
- `version`
  - : 機能を定義する仕様のバージョンを表す文字列です。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("DOMImplementation")}} インターフェイス
