---
title: "Navigator: storage プロパティ"
short-title: storage
slug: Web/API/Navigator/storage
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{securecontext_header}}{{APIRef("Storage")}}

**`Navigator.storage`** は読み取り専用プロパティで、現在のサイトまたはアプリケーションでブラウザーのストレージ機能全体にアクセスするために使用される単一の {{domxref("StorageManager")}} オブジェクトを返します。
返されたオブジェクトを使用すると、データストアの維持を調査および構成したり、ブラウザーがローカルストレージの利用に利用できるスペースのおおよその容量を確認したりすることができます。

## 値

{{domxref("StorageManager")}} オブジェクトは、格納されたデータの永続性を維持するために使用することができます。また、データが格納されるための大まかな容量を確認することもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("StorageManager")}}
- {{domxref("Navigator")}}
