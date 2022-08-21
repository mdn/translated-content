---
title: WorkerGlobalScope.importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
tags:
  - API
  - Method
  - Reference
  - Web Workers
  - WorkderGlobalScope
  - importScripts
  - ウェブワーカー
  - メソッド
  - ワーカーグローバルスコープ
translation_of: Web/API/WorkerGlobalScope/importScripts
---
{{APIRef("Web Workers API")}}

**`importScripts()`** は {{domxref("WorkerGlobalScope")}} インターフェースのメソッドで、1 つ以上のスクリプトをワーカーのスコープ内に同期的に読み込みます。

## 構文

```js
self.importScripts('foo.js');
self.importScripts('foo.js', 'bar.js', ...);
```

### 引数

インポートされるスクリプト表す {{domxref("DOMString")}} オブジェクトのカンマ区切りのリストです。これらは _HTML 文書のベース URL_ からの相対パスです。

### 返値

_なし。_

### 例外

- `NetworkError`
  - : インポートされたスクリプトが妥当な JavaScript の MIME 型 (すなわち `text/javascript`) で提供されていなかった場合。

## 例

`foo.js` という別なスクリプトで書かれた機能を worker.js の内部で使用したい場合、以下のような行でインポートして使用することができます。

```js
importScripts('foo.js');
```

`importScripts()` と `self.importScripts()` は実質的に同じです。 — 両方とも `importScripts()` をワーカーの内部スコープの中から呼び出すことを表します。

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', '#dom-workerglobalscope-importscripts', 'importScripts()')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザーの互換性

{{Compat("api.WorkerGlobalScope.importScripts")}}

## 関連情報

- {{domxref("WorkerGlobalScope")}}
