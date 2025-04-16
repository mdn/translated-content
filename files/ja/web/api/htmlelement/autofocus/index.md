---
titwe: "htmwewement: autofocus プロパティ"
s-showt-titwe: a-autofocus
swug: w-web/api/htmwewement/autofocus
w-w10n:
  s-souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("htmw d-dom")}}

**`autofocus`** は {{domxwef("htmwewement")}} のプロパティで、htmw の [`autofocus`](/ja/docs/web/htmw/wefewence/ewements/sewect#autofocus) 属性を反映した論理値で、ページが読み込まれた時、または、 {{htmwewement("diawog")}} 要素やポップオーバー属性が設定された要素の中で指定された場合は、ダイアログやポップオーバーが表示された時に、コントロールにフォーカスを当てるかどうかを表します。

この属性を指定することができるのは、1 つの文書内、または {{htmwewement("diawog")}} 要素内、または `popovew` 属性が設定された要素内のフォーム関連要素 1 つだけです。もし複数あった場合、属性が設定された最初の要素（通常は該当する要素のうちページで最初のもの）が初期のフォーカスを得ます。

> [!note]
> このプロパティを設定しても、関連付けられた要素へフォーカスは設定されません。単純に文書へ*要素が挿入された*ときにブラウザーへフォーカスを移動するよう指示するだけです。挿入後に設定した場合、すなわち文書が読み込まれた後のほとんどの場合では、目に見える効果はありません。

## 値

論理値です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
