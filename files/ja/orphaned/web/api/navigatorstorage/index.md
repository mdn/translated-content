---
title: NavigatorStorage
slug: orphaned/Web/API/NavigatorStorage
original_slug: Web/API/NavigatorStorage
---

{{securecontext_header}}{{APIRef("Storage")}}

**`NavigatorStorage`** {{Glossary("mixin","ミックスイン")}}は、{{domxref("Navigator")}} および {{domxref("WorkerNavigator")}} インターフェース に {{domxref("Navigator.storage")}} プロパティを追加します。 これにより、データストアの永続性の制御と情報の取得に使用する {{domxref("StorageManager")}} シングルトンへのアクセスが提供されます。

{{AvailableInWorkers}}

{{Glossary("Cookie","クッキー")}}、Web Storage API（{{domxref("Window.localStorage")}} および {{domxref("Window.sessionStorage")}}）、[IndexedDB](/ja/docs/Web/API/IndexedDB_API) など、ウェブコンテンツがユーザーのコンピューターにデータを保存する方法を提供する API は数多くあります。 ストレージ標準は、それらすべての API とストレージテクノロジーを実装するための共通基盤として機能するように設計されているため、共通のメソッドとプロパティを使用してそれらの制約と構成を理解および制御できます。

## プロパティ

- {{domxref("NavigatorStorage.storage", "storage")}} {{readonlyinline}}{{securecontext_inline}}
  - : Storage Manager へのアクセスに使用する{{domxref("StorageManager")}} シングルトンオブジェクトを返します。 返されたオブジェクトを通じて、データストアの永続性を制御したり、サイトやアプリがデータを格納するために必要なスペースの量を見積もることができます。

## メソッド

_`NavigatorStorage` ミックスインにはメソッドがありません。_

## 仕様

| 仕様                             | 状態                         | コメント |
| -------------------------------- | ---------------------------- | -------- |
| {{SpecName('Storage')}} | {{Spec2('Storage')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.NavigatorStorage")}}

## 関連情報

- {{domxref("Navigator")}}
- {{domxref("navigator.storage")}}
- {{domxref("WorkerNavigator")}}
- {{domxref("StorageManager")}}
