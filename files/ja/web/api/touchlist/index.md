---
title: TouchList
slug: Web/API/TouchList
---

{{APIRef("Touch Events")}}

**`TouchList`** インターフェイスは、タッチ面上の接触点のリストを表します。例えば、ユーザーがタッチ面 (画面やトラックパッドなど) を 3 本指で操作している場合、対応する `TouchList` オブジェクトは 1 本の指あたり 1 つの {{domxref("Touch")}} オブジェクトを持ち、全部で 3 要素になります。

## プロパティ

- {{domxref("TouchList.length")}} {{readonlyInline}}
  - : `TouchList` 中の {{domxref("Touch")}} オブジェクトの個数

## メソッド

- {{domxref("TouchList.identifiedTouch()")}}
  - : 識別子が指定された値と一致するリスト内の、最初の {{domxref("Touch")}} 要素を返す
- {{domxref("TouchList.item()")}}
  - : リスト内の指定した位置の {{domxref("Touch")}} オブジェクトを返します。

## 例

[タッチイベントのメイン記事にある例](/ja/docs/Web/API/Touch_events#Example)をご覧ください。

## 仕様書

| 仕様書                                                                   | 状態                                 | 備考                |
| ------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Touch Events 2','#touchlist-interface')}} | {{Spec2('Touch Events 2')}} | Non-stable version. |
| {{SpecName('Touch Events', '#touchlist-interface')}}     | {{Spec2('Touch Events')}}     | 初回定義            |

## ブラウザーの互換性

{{Compat("api.TouchList")}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{domxref("Document.createTouchList()")}}
