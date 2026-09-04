---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

**`CustomElementRegistry`** インターフェイスは、カスタム要素の登録と、登録された要素を照会するためのメソッドを提供します。このインスタンスを取得するには、{{domxref("window.customElements")}} プロパティを使用してください。スコープ付きのレジストリーを作成する場合は、{{domxref("CustomElementRegistry.CustomElementRegistry()", "CustomElementRegistry()")}} コンストラクターを使用してください。

## コンストラクター

- {{domxref("CustomElementRegistry.CustomElementRegistry()", "CustomElementRegistry()")}}
  - : スコープ付きの用途で、新しい `CustomElementRegistry` オブジェクトを作成します。

## インスタンスメソッド

- {{domxref("CustomElementRegistry.define()")}}
  - : 新しい[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)を定義します。
- {{domxref("CustomElementRegistry.get()")}}
  - : 名前付きカスタム要素のコンストラクターを返します。カスタム要素が定義されていない場合は {{jsxref("undefined")}} を返します。
- {{domxref("CustomElementRegistry.getName()")}}
  - : すでに定義されているカスタム要素の名前を返します。カスタム要素が定義されていない場合が、`null` を返します。
- {{domxref("CustomElementRegistry.upgrade()")}}
  - : シャドウルートに接続する前であっても、直接カスタム要素をアップグレードします。
- {{domxref("CustomElementRegistry.initialize()")}}
  - : スコープ付きレジストリーを DOM サブツリーに関連付け、それぞれの子要素に対してカスタム要素レジストリーを設定し、カスタム要素をすべてアップグレードします。
- {{domxref("CustomElementRegistry.whenDefined()")}}
  - : 指定された名前でカスタム要素が定義されたときに解決する空の{{jsxref("Promise", "プロミス", "", 1)}}を返します。そのようなカスタム要素が既に定義されていた場合、返されたプロミスは即座に履行状態になります。

## 例

[カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)の[例](/ja/docs/Web/API/Web_components/Using_custom_elements#例)の節を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
