---
title: "IDBTransaction: durability プロパティ"
slug: Web/API/IDBTransaction/durability
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{securecontext_header}}{{DefaultAPISidebar("IndexedDB")}}

{{domxref("IDBTransaction")}} の読み取り専用プロパティ **`durability`** は、トランザクションの生成時に設定された永続性のヒントを返します。これは、トランザクションをコミットする際にパフォーマンスを重視するか永続性を重視するかのユーザーエージェントへのヒントです。

このプロパティの値は、{{domxref("IDBDatabase.transaction()")}} を用いてトランザクションを生成する際に `options` パラメーターで定義されます。

## 値

以下の {{jsxref('String', 'strings')}} リテラルのいずれかです。

- `"strict"`
  - : ユーザーエージェントは、すべての変更が永続的な保存メディアへに正常に書き込まれたことを確認した後でのみ、トランザクションが正常にコミットされたとみなすことができます。
- `"relaxed"`
  - : ユーザーエージェントは、すべての変更をオペレーティングシステムに書き込んだ後ただちに、追加の検証を行わず、トランザクションが正常にコミットされたとみなすことができます。
- `"default"`
  - : ユーザーエージェントは、保存領域の永続性に関するデフォルトの動作をするべきです。これは、別に指定していないトランザクション用のデフォルトです。

## 例

動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
