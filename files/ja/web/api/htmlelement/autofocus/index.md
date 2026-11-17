---
title: "HTMLElement: autofocus プロパティ"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
l10n:
  sourceCommit: 01d5901fdbad83033fe1f86486f652d07db7ce2a
---

{{APIRef("HTML DOM")}}

**`autofocus`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、HTML の [`autofocus`](/ja/docs/Web/HTML/Reference/Global_attributes/autofocus) グローバル属性を反映する論理値です。
これは、ページの読み込み時に要素にフォーカスを設定するか、要素が {{htmlelement("dialog")}} または [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 要素内に含まれている場合は、`<dialog>` またはポップオーバーの表示時にフォーカスを設定するかを示します。

この属性を指定できる要素は、文書内、`<dialog>` 要素内、またはポップオーバー内でそれぞれ 1 つだけです。複数の要素に指定した場合、そのうち最初のフォーカス可能な要素がフォーカスを得ます。

> [!NOTE]
> このプロパティを設定しても、関連付けられた要素へフォーカスは設定されません。単純に文書へ*要素が挿入された*ときにブラウザーへフォーカスを移動するよう指示するだけです。挿入後に設定した場合、すなわち文書が読み込まれた後のほとんどの場合では、目に見える効果はありません。

## 値

論理値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
