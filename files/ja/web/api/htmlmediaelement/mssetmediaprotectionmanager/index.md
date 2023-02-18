---
title: HTMLMediaElement.msSetMediaProtectionManager()
slug: Web/API/HTMLMediaElement/msSetMediaProtectionManager
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef("HTML DOM")}}

{{Non-standard_header}}

**`msSetMediaProtectionManager()`** メソッドは、指定されたメディアパイプラインのメディア保護マネージャーを指定します。

この独自メソッドは、 Internet Explorer と Microsoft Edge に固有のものです。

## 構文

```js-nolint
msSetMediaProtectionManager()
msSetMediaProtectionManager(mediaProtectionManager)
```

### 引数

- `mediaProtectionManager` {{optional_inline}}
  - : `MediaProtectionManager` です。
    （デジタル著作権管理 (DRM) メディアコンテンツを管理するための詳細情報は、 [Windows.Media.Protection](https://docs.microsoft.com/uwp/api/windows.media.protection?view=winrt-22000) を参照してください）。あらゆる型をとることができます。

### 返値

なし ({{jsxref("undefined")}})。
