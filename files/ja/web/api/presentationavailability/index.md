---
title: PresentationAvailability
slug: Web/API/PresentationAvailability
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

**`PresentationAvailability`** オブジェクトは利用可能な[プレゼンテーション用の画面](https://www.w3.org/TR/presentation-api/#dfn-presentation-display)に紐付けられ、プレゼンテーションの要求に対する _プレゼンテーション用の画面の利用可能性_ を表します。[操作を行うユーザーエージェント](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent)が (`start()` の保留中の要求が無くても) バックグラウンドで[利用可能なプレゼンテーション用の画面のリストを監視](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays)できる場合、`PresentationAvailability` オブジェクトは[操作を行う閲覧コンテキスト](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context)で実装され _**なければなりません**_。

`value` 属性は設定された最新の値を返さ _**なければなりません**_。この値は[利用可能なプレゼンテーション用画面のリストを監視する](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays)アルゴリズムにより更新されます。

`onchange` 属性は[イベントハンドラー](https://www.w3.org/TR/presentation-api/#dfn-event-handler)であり、対応する[イベントハンドラーのイベントの種類](https://www.w3.org/TR/presentation-api/#dfn-event-handler-event-type)は `change` です。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("PresentationAvailability.value")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 指定のプレゼンテーション用の画面が利用可能かを表す論理値です。`value` 属性は、設定された最新の値を返さ _**なければなりません**_。

### イベント

- {{domxref("PresentationAvailability.change_event", "change")}} {{Experimental_Inline}}
  - : プレゼンテーション用の画面の利用可能性が変化したことを示します。

## インスタンスメソッド

なし

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
