---
title: FileSystemSync
slug: Web/API/FileSystemSync
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

[ファイルおよびディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction) では、 `FileSystemSync` オブジェクトはファイルシステムを表します。 2 つのプロパティがあります。

> [!NOTE]
> このインターフェイスは非推奨で、標準路線ではなくなりました。
> _もう使用しないでください。_ 代わりに[ファイルおよびディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)を使用してください。

## 基本コンセプト

`FileSystemSync` オブジェクトは API 全体へのゲートウェイであり、頻繁に使用します。したがって、参照を取得したら、オブジェクトをグローバル変数またはクラスプロパティにキャッシュします。

## インスタンスプロパティ

- `name` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 文字列で、ファイルシステムの名前を示します。名前は公開されたファイルシステムのリスト内で一意でなければなりません。
- `root` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : `DirectoryEntry` で、このファイルシステムのルートディレクトリーを表します。

## 仕様書

この機能はもうどの仕様にも含まれていません。標準化される予定もありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルおよびディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルおよびディレクトリー項目 API 入門](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
