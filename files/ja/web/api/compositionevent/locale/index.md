---
title: CompositionEvent.locale
slug: Web/API/CompositionEvent/locale
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{deprecated_header}}{{APIRef("UI Events")}}{{Non-standard_header}}

**`locale`** は {{domxref("CompositionEvent")}} インターフェイスの読み取り専用のプロパティで、現在の入力システムのロケール（例えば、結合操作が IME に関連付けられているならばキーボードレイアウトのロケール）を返します。

> **警告:** 対応しているブラウザーでも、このプロパティに含まれる値は信用しないでください。
> 技術的にはアクセス可能であるとしても、 {{domxref("CompositionEvent")}} を作成する際の設定方法が一貫している保証はありません。

## 値

文字列で、現在の入力システムのロケールを表します。

## 仕様書

このプロパティは、異なる仕様の早期のバージョンにありました。現在では互換性のためだけに残されており、 {{domxref("CompositionEvent")}} を作成するときにその値を設定する方法は[よく定義されていません](https://github.com/w3c/uievents/issues/48)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CompositionEvent")}}
