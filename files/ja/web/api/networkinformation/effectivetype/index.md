---
title: NetworkInformation.effectiveType
slug: Web/API/NetworkInformation/effectiveType
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{SeeCompatTable}}{{APIRef("Network Information API")}}

**`effectiveType`** は {{domxref("NetworkInformation")}} インターフェイスの読み取り専用プロパティで、
このプロパティは、 'slow-2g', '2g', '3g', '4g' のいずれかを意味する接続の有効な種類を返します。この値は、最近観測された、ラウンドトリップ時間とダウンリンク値の組合せを使用して決定されます。

## 値

'slow-2g', '2g', '3g', '4g' の何れかの文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [有効接続種別](/ja/docs/Glossary/Effective_connection_type)
- {{HTTPHeader("ECT")}}
