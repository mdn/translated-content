---
title: InputDeviceCapabilities
slug: Web/API/InputDeviceCapabilities
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("InputDeviceCapabilities API")}}{{SeeCompatTable}}

**`InputDeviceCapabilities`** は[入力機器能力 API](/ja/docs/Web/API/InputDeviceCapabilities_API) のインターフェイスは、入力イベントを発生させる物理機器または関連の機器グループに関する情報を提供します。同じ物理入力機器によって発生させられたイベントは、このオブジェクトの同じインスタンスを取得しますが、逆はそうとは限りません。例えば、システム内の同じ能力を持つ 2 つのマウスは、単一の `InputDeviceCapabilities` インスタンスとして現れるかもしれません。

場合によっては、 `InputDeviceCapabilities` は物理機器ではなく論理機器の能力を表します。この例では、例えば、タッチ画面のキーボードと物理的なキーボードが同じ入力をする場合、同じように表すことができます。

## コンストラクター

- {{domxref("InputDeviceCapabilities.InputDeviceCapabilities", "InputDeviceCapabilities()")}} {{Experimental_Inline}}
  - : `InputDeviceCapabilities` オブジェクトを生成します。

## インスタンスプロパティ

- {{DOMxRef("InputDeviceCapabilities.firesTouchEvents")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 機器がタッチイベントを配信されるかどうかを示す {{JSxRef("Boolean")}} です。

## インスタンスメソッド

なし。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
