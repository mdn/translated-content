---
title: PluginArray
slug: Web/API/PluginArray
---

{{ApiRef}} {{non-standard_header}}

`PluginArray` インターフェースには使用可能なプラグインのリストが格納されています。 {{domxref("window.navigator.plugins")}} プロパティによって返されます。

## プロパティ

| プロパティ名                                 | 説明                                                 | 戻り値の型    | 可用性 |
| -------------------------------------------- | ---------------------------------------------------- | ------------- | ------ |
| {{domxref("PluginArray.length")}} | プラグインリスト配列中のプラグイン数。**読取専用**。 | unsigned long | DOM 0  |

## メソッド

- {{domxref("PluginArray.item")}}
  - : プラグインリスト配列中の指定したインデックスにある {{domxref("Plugin")}} を返す
- {{domxref("PluginArray.namedItem")}}
  - : プラグインリスト配列中の指定した名称の {{domxref("Plugin")}} を返す
- {{domxref("PluginArray.refresh")}}
  - : 現在のページの全てのプラグインを更新。必要に応じて文書を再読み込みします。
