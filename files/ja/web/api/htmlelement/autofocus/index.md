---
title: "HTMLElement: autofocus プロパティ"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

**`autofocus`** は {{domxref("HTMLElement")}} のプロパティで、HTML の [`autofocus`](/ja/docs/Web/HTML/Element/select#autofocus) 属性を反映した論理値で、ページが読み込まれた時、または、 {{htmlelement("dialog")}} 要素やポップオーバー属性が設定された要素の中で指定された場合は、ダイアログやポップオーバーが表示された時に、コントロールにフォーカスを当てるかどうかを表します。

この属性を指定することができるのは、1 つの文書内、または {{htmlelement("dialog")}} 要素内、または `popover` 属性が設定された要素内のフォーム関連要素 1 つだけです。もし複数あった場合、属性が設定された最初の要素（通常は該当する要素のうちページで最初のもの）が初期のフォーカスを得ます。

> [!NOTE]
> このプロパティを設定しても、関連付けられた要素へフォーカスは設定されません。単純に文書へ*要素が挿入された*ときにブラウザーへフォーカスを移動するよう指示するだけです。挿入後に設定した場合、すなわち文書が読み込まれた後のほとんどの場合では、目に見える効果はありません。

## 値

論理値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
