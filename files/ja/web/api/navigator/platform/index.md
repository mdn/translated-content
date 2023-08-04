---
title: Navigator.platform
slug: Web/API/Navigator/platform
---

{{ APIRef("HTML DOM") }} {{Deprecated_Header}}

ブラウザーのプラットフォームを表す文字列を返します。仕様書ではブラウザーが常に空文字列を返すことを許可していますので、信頼できる答えを得るためにこのプロパティを頼らないようにしてください。

## 構文

```js
platform = navigator.platform
```

### 値

ブラウザーを実行しているプラットフォームを識別する {{domxref("DOMString")}}、あるいはブラウザーがプラットフォームの識別を断わった (または識別できない) 場合は空文字列になります。`platform` は空文字列か、ブラウザーを実行しているプラットフォームを表す文字列でなければなりません。

例: "`MacIntel`", "`Win32`", "`FreeBSD i386`", "`WebTV OS`"

## 例

```js
console.log(navigator.platform);
```

## 使用上のメモ

Chrome、Edge、Firefox 63 以降を含むほとんどのブラウザーは、64 ビット版の Windows で実行していても `"Win32"` を返します。 Internet Explorer やバージョン 63 より前の Firefox は `"Win64"` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
