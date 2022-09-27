---
title: NavigatorStorage.storage
slug: orphaned/Web/API/NavigatorStorage/storage
original_slug: Web/API/NavigatorStorage/storage
---

{{securecontext_header}}{{APIRef("Storage")}}

**`NavigatorStorage.storage`** 読み取り専用プロパティは、現在のサイトまたはアプリのブラウザーの全体的なストレージ機能にアクセスするために使用するシングルトンの {{domxref("StorageManager")}} オブジェクトを返します。 返されたオブジェクトを使用すると、データストアの永続性を調べて設定し、ブラウザーがローカルストレージで使用するためのスペースがどれだけあるかを概算できます。

## 構文

```
var storageManager = navigator.storage;
```

### 値

格納されたデータの永続性を維持したり、データを格納するスペースの大まかな決定に使用できる {{domxref("StorageManager")}} オブジェクト。

## 仕様

| 仕様                                                                                     | 状態                         | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Storage', '#navigatorstorage', 'navigator.storage')}} | {{Spec2('Storage')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.NavigatorStorage.storage")}}

## 関連情報

- {{domxref("NavigatorStorage")}}
- {{domxref("StorageManager")}}
- {{domxref("Navigator")}}
- {{domxref("WorkerNavigator")}}
