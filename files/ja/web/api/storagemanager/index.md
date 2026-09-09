---
title: StorageManager
slug: Web/API/StorageManager
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

**`StorageManager`** は[ストレージ API](/ja/docs/Web/API/Storage_API) のインターフェイスで、永続性のパーミッションの管理と、利用可能なストレージの見積もりのインターフェイスを提供します。{{domxref("navigator.storage")}} か {{domxref("WorkerNavigator.storage")}} のいずれかを使用して、このインターフェイスへの参照を取得できます。

## インスタンスメソッド

- {{domxref("StorageManager.estimate()")}}
  - : オリジンの使用量とクォータを含むオブジェクトで解決する {{jsxref('Promise')}} を返します。
- {{domxref("StorageManager.getDirectory()")}}
  - : {{domxref("FileSystemDirectoryHandle")}} オブジェクトへの参照を取得するために使用されます。このオブジェクトを使用すると、[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_API/Origin_private_file_system)に保存されているディレクトリーとそのコンテンツにアクセスできます。{{jsxref('Promise')}} を返し、そのプロミス履行時に {{domxref("FileSystemDirectoryHandle")}} オブジェクトが返されます。
- {{domxref("StorageManager.persist()")}}
  - : ユーザーエージェントがサイトのストレージを永続化できる場合に `true` に解決される {{jsxref('Promise')}} を返します。
- {{domxref("StorageManager.persisted()")}}
  - : サイトのストレージに永続性がすでに付与されている場合に `true` に解決される {{jsxref('Promise')}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
