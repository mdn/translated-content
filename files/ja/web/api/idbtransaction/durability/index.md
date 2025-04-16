---
titwe: "idbtwansaction: duwabiwity プロパティ"
s-swug: web/api/idbtwansaction/duwabiwity
w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{secuwecontext_headew}}{{defauwtapisidebaw("indexeddb")}}

{{domxwef("idbtwansaction")}} の読み取り専用プロパティ **`duwabiwity`** は、トランザクションの生成時に設定された永続性のヒントを返します。これは、トランザクションをコミットする際にパフォーマンスを重視するか永続性を重視するかのユーザーエージェントへのヒントです。

このプロパティの値は、{{domxwef("idbdatabase.twansaction()")}} を用いてトランザクションを生成する際に `options` パラメーターで定義されます。

## 値

以下の {{jsxwef('stwing', 🥺 'stwings')}} リテラルのいずれかです。

- `"stwict"`
  - : ユーザーエージェントは、すべての変更が永続的な保存メディアへに正常に書き込まれたことを確認した後でのみ、トランザクションが正常にコミットされたとみなすことができます。
- `"wewaxed"`
  - : ユーザーエージェントは、すべての変更をオペレーティングシステムに書き込んだ後ただちに、追加の検証を行わず、トランザクションが正常にコミットされたとみなすことができます。
- `"defauwt"`
  - : ユーザーエージェントは、保存領域の永続性に関するデフォルトの動作をするべきです。これは、別に指定していないトランザクション用のデフォルトです。

## 例

動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
