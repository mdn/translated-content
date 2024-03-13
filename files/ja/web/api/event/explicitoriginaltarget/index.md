---
title: "Event: explicitOriginalTarget プロパティ"
short-title: explicitOriginalTarget
slug: Web/API/Event/explicitOriginalTarget
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}{{Non-standard_Header}}

**`explicitOriginalTarget`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、このイベントの無名ではない元のターゲットを返します。

イベントが無名境界通過以外の何らかの理由で再ターゲットされた場合、再ターゲットが発生する前にターゲットに設定されます。

例えば、マウスイベントがテキストノードの上で発生した場合、その親ノードに再ターゲットされます（[Webkit バグ 185889](https://bugzil.la/185889) 参照）。この場合、 [`currentTarget`](/ja/docs/Web/API/Event/currentTarget) は親ノードを表示し、このプロパティはテキストノードを表示することになります。

このプロパティは [`originalTarget`](/ja/docs/Web/API/Event/originalTarget) とも異なり、無名のコンテンツを含むことはありません。

## 値

{{domxref("EventTarget")}} オブジェクトを返します。ない場合は null を返します。

## 例

このプロパティは `<command>` と共に使用すると、コマンドを呼び出した元のオブジェクトのイベントの詳細を取得することができます。

```js
function myCommand(ev) {
  alert(ev.explicitOriginalTarget.nodeName); // returns 'menuitem'
}
```

```xml
<xul:command id="my-cmd-anAction" oncommand="myCommand(event);"/>

<xul:menulist>
  <xul:menupopup>
    <xul:menuitem label="Get my element name!" command="my-cmd-anAction"/>
  </xul:menupopup>
</menulist>
```

## 仕様書

_これは Mozilla 固有のプロパティであり、現在のどの仕様にも含まれていません。標準化される予定もありません。_

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントターゲットの比較](/ja/docs/Web/API/Event/Comparison_of_Event_Targets)
