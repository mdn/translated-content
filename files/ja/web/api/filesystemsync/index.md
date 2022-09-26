---
title: FileSystemSync
slug: Web/API/FileSystemSync
---

{{APIRef("File System API")}} {{non-standard_header}}

[File System API](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction) では、 `FileSystemSync` オブジェクトはファイルシステムを表します。 それは 2 つの特性を有する。

## このドキュメントについて

このドキュメントは 2012 年 3 月 2 日に最後に更新され、2011 年 4 月 19 日に作成された [W3C の仕様 (作業中のドラフト)](http://www.w3.org/TR/file-system-api/) に準拠しています。

この仕様は現在放棄されており、大きな牽引力を得ることはできません。

## 基本のコンセプト

`FileSystemSync` オブジェクトは API 全体へのゲートウェイであり、頻繁に使用します。したがって、参照を取得したら、オブジェクトをグローバル変数またはクラスプロパティにキャッシュします。

## 属性

| 属性   | タイプ                    | 説明                                                                                       |
| ------ | ------------------------- | ------------------------------------------------------------------------------------------ |
| `name` | `readonly DOMString`      | ファイルシステムの名前。名前は公開ファイルシステムのリスト全体で一意でなければなりません。 |
| `root` | `readonly DirectoryEntry` | ファイルシステムのルートディレクトリ。                                                     |

## ブラウザの互換性

{{Compat("api.FileSystemSync")}}

## あわせて参照

仕様:{{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD") }}

リファレンス: [File System API](/ja/DOM/File_API/File_System_API)

イントロダクション: [Basic Concepts About the File System API](/ja/DOM/File_APIs/Filesystem/Basic_Concepts_About_the_Filesystem_API)
