---
title: console.profileEnd()
slug: Web/API/console/profileEnd
l10n:
  sourceCommit: 6c498a447fb5e776a67af7f9801a3aa407fc4d1c
---

{{APIRef("Console API")}}{{Non-standard_header}}

> **警告:** console.profile() の直後に本 API を呼び出すと、本 API が動作しないことがあります。これを回避するには、 setTimeout の中で 5ms 以上遅延させて呼び出してください。 [Firefox バグ 1240249](https://bugzil.la/1240249) を参照してください。

**`console.profileEnd()`** メソッドは、 {{DOMxRef("console.profile()")}} で開始したプロファイルの記録を終了します。

任意で引数にプロファイル名を与えることができます。引数を与えると、複数のプロファイルを記録している場合に特定のプロファイルのみ停止することができます。

- `console.profileEnd()` に記録中のプロファイル名に一致する名称を渡すと、そのプロファイルを終了します。
- `console.profileEnd()` に記録中のプロファイル名に一致しない名称を渡すと、何も行いません。
- `console.profileEnd()` にプロファイル名を渡さない場合は、直近に開始したプロファイルを終了します。

{{AvailableInWorkers}}

## 構文

```js
profileEnd(profileName);
```

### 引数

- `profileName`
  - : プロファイルにつける名前。この引数は省略可能です。

### 返値

なし ({{jsxref("undefined")}})。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("console.profile()")}}
