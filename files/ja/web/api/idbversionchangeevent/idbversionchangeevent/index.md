---
title: IDBVersionChangeEvent()
slug: Web/API/IDBVersionChangeEvent/IDBVersionChangeEvent
l10n:
  sourceCommit: d42b609444efb915ab46117f59985d67dda21eb6
---

{{securecontext_header}}{{DefaultAPISidebar("IndexedDB")}}

**`IDBVersionChangeEvent()`** コンストラクターは、{{domxref('IDBOpenDBRequest.upgradeneeded_event', 'onupgradeneeded')}} イベントハンドラーを実行した結果データベースのバージョンが変更されたことを表す、新しい {{domxref("IDBVersionChangeEvent")}} オブジェクトを作成します。

## 構文

```js-nolint
new IDBVersionChangeEvent(type)
new IDBVersionChangeEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。大文字と小文字は区別され、ブラウザーは `versionchange`、`success`、`blocked` のいずれかに設定します。
- `options` {{optional_inline}}
  - : オブジェクトです。_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `oldVersion` {{optional_inline}}
      - : データベースの更新前のバージョンを表す数値です。デフォルト値は `0` です。
    - `newVersion` {{optional_inline}}
      - : データベースの新しいバージョンを表す `unsigned long` 値、もしくはデータベースが削除される場合は `null` です。デフォルト値は `null` です。

### 返値

新しい {{domxref("IDBVersionChangeEvent")}} オブジェクトを返します。

## 例

動作する例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
