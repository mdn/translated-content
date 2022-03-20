---
title: console.profileEnd()
slug: Web/API/console/profileEnd
tags:
  - API
  - DOM
  - デバッグ
  - メソッド
  - 標準外
  - リファレンス
  - ウェブ開発
  - profileEnd
  - ウェブコンソール
browser-compat: api.console.profileEnd
translation_of: Web/API/Console/profileEnd
---
{{APIRef("Console API")}}{{Non-standard_header}}

> **Warning:** console.profile() の直後に本 API を呼び出すと、本 API が動作しないことがあります。これを回避するには、 setTimeout の中で 5ms 以上遅延させて呼び出してください。 {{bug(1240249)}} を参照してください。

**`console.profileEnd()`** メソッドは、 {{DOMxRef("console.profile()")}} で開始したプロファイルの記録を終了します。

任意で引数にプロファイル名を与えることができます。引数を与えると、複数のプロファイルを記録している場合に特定のプロファイルのみ停止することができます。

- `console.profileEnd()` に記録中のプロファイル名に一致する名称を渡すと、そのプロファイルを終了します。
- `console.profileEnd()` に記録中のプロファイル名に一致しない名称を渡すと、何も行いません。
- `console.profileEnd()` にプロファイル名を渡さない場合は、直近に開始したプロファイルを終了します。

{{AvailableInWorkers}}

## 構文

```js
console.profileEnd(profileName);
```

## 引数

- `profileName`
  - : プロファイルにつける名前。この引数は省略可能です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("console.profile()")}}
