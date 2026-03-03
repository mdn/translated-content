---
title: "console: profileEnd() 静的メソッド"
short-title: profileEnd()
slug: Web/API/console/profileEnd_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

**`console.profileEnd()`** 静的メソッドは、以前 {{domxref("console/profile_static", "console.profile()")}} で開始したプロファイルの記録を終了します。

任意で引数にプロファイル名を与えることができます。引数を与えると、複数のプロファイルを記録している場合に特定のプロファイルのみ停止することができます。

- `console.profileEnd()` に記録中のプロファイル名に一致する名称を渡すと、そのプロファイルを終了します。
- `console.profileEnd()` に記録中のプロファイル名に一致しない名称を渡すと、何も行いません。
- `console.profileEnd()` にプロファイル名を渡さない場合は、直近に開始したプロファイルを終了します。

## 構文

```js-nolint
console.profileEnd(profileName)
```

### 引数

- `profileName` {{Optional_Inline}}
  - : プロファイルにつける名前です。

### 返値

なし ({{jsxref("undefined")}})。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console/profile_static", "console.profile()")}}
