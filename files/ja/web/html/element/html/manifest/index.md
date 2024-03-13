---
title: manifest
slug: Web/HTML/Element/html/manifest
l10n:
  sourceCommit: 4a2b6cafbf9bc5b006eedbdf0e9fdf2c8626d5b6
---

{{securecontext_header}}{{Deprecated_Header}}{{Non-standard_Header}}

**`manifest`** は `<html>` 要素の属性で、ページ読み込みの初期段階でダウンロードされる、アプリケーションキャッシュマニフェストの URL を指定します。

> **メモ:** マニフェストベースのキャッシュ機構は非推奨です。代わりにサービスワーカークリプトを使用してください。

マニフェスト属性はページ読み込みの初期段階でのみ効果を発揮するため、通常の DOM インターフェイスで変更しても効果はなく、代わりに {{domxref("Window.applicationCache")}} インターフェイスを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.applicationCache")}}
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
