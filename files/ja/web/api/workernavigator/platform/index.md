---
title: WorkerNavigator.platform
slug: Web/API/WorkerNavigator/platform
l10n:
  sourceCommit: 7993e46a20267e041a259e8bd2d788d3f6a211d5
---

{{ APIRef("HTML DOM") }} {{Deprecated_Header}}

ブラウザーのプラットフォームを表す文字列を返します。仕様では、ブラウザーは常に空文字列を返すようになっているので、このプロパティに頼らずに確実な答えを取得するようにしてください。

## 値

ブラウザーが動作しているプラットフォームを表す文字列、またはブラウザーがプラットフォームの特定を拒否した（あるいはできない）場合は空文字列を指定します。platform`は空文字列か、ブラウザーが実行されているプラットフォームを表す文字列である必要があります。

例: "`MacIntel`", "`Win32`", "`FreeBSD i386`", "`WebTV OS`".

## 例

```js
console.log(navigator.platform);
```

## 使用上の注意

Chrome、Edge、Firefox 63 以降を含むほとんどのブラウザーは、 64 ビット版の Windows で実行した場合でも、 `"Win32"` を返します。 Internet Explorer と Firefox のバージョン 63 より前のバージョンは、まだ `"Win64"` を報告します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
