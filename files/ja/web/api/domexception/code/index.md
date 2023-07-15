---
title: "DOMException: code プロパティ"
short-title: code
slug: Web/API/DOMException/code
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }} {{deprecated_header}}

**`code`** は {{domxref("DOMException")}} インターフェイスの読み取り専用プロパティで、古い[エラーコード定数](/ja/docs/Web/API/DOMException#エラー名)のいずれか、または一致するものがなければ `0` を返します。

このフィールドは歴史的な理由から使用されています。新しい DOM 例外はこれを使用しなくなっています。この情報は {{domxref("DOMException.name")}} 属性に格納するようになりました。

## 値

[エラーコード定数](/ja/docs/Web/API/DOMException#エラー名)のいずれか、または一致するものがなければ `0` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
