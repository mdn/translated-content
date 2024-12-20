---
title: Plugin
slug: Web/API/Plugin
---

{{ApiRef("HTML DOM")}}{{deprecated_header}}

Plugin` インターフェイスは、 ブラウザーのプラグインに関する情報を提供します。

> [!NOTE]
> 最新のブラウザーでは、 `Plugin` オブジェクトのプロパティを列挙することができなくなりました。

## プロパティ

- {{domxref("Plugin.description")}} {{readonlyinline}}
  - : 人間の読みやすい形式の、プラグインに関する説明。
- {{domxref("Plugin.filename")}} {{readonlyinline}}
  - : プラグインのファイルのファイル名。
- {{domxref("Plugin.name")}} {{readonlyinline}}
  - : プラグインの名称。
- {{domxref("Plugin.version")}} {{readonlyinline}}
  - : プラグインのバージョン番号文字列。

## メソッド

- {{domxref("Plugin.item")}}
  - : 対応するコンテンツ型の MIME タイプを返します。対応する型のリストへのインデックス番号を指定します。
- {{domxref("Plugin.namedItem")}}
  - : 対応している項目の MIME タイプを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
