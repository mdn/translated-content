---
title: WorkerNavigator.storage
slug: Web/API/WorkerNavigator/storage
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{securecontext_header}}{{APIRef("Storage")}}

**`WorkerNavigator.storage`** は読み取り専用のプロパティで、現在のサイトまたはアプリのブラウザーの全体的なストレージ機能にアクセスするために使用されるシングルトンの {{domxref("StorageManager")}} オブジェクトを返します。
返されたオブジェクトにより、データストアの持続性を調べたり、設定したり、ブラウザーがローカルストレージを使用するために利用できる空間があとどのくらいあるのかをおおよそ知ることができます。

## 値

格納されたデータの永続性を維持するために使用できる {{domxref("StorageManager")}} オブジェクトで、格納するデータの空き容量を大まかに判断することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("StorageManager")}}
- {{domxref("WorkerNavigator")}}
