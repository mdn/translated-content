---
title: "HTMLImageElement : propriété y"
short-title: y
slug: Web/API/HTMLImageElement/y
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`y`** de l'interface {{DOMxRef("HTMLImageElement")}} indique la coordonnée y du bord supérieur de l'élément HTML {{HTMLElement("img")}} par rapport à l'origine de l'élément racine.

Les propriétés {{DOMxRef("HTMLImageElement.x", "x")}} et `y` ne sont valides pour une image que si sa propriété {{CSSxRef("display")}} a pour valeur calculée `table-column` ou `table-column-group`. Cela signifie que l'une de ces valeurs est définie explicitement, héritée d'un élément parent, ou appliquée parce que l'image se trouve dans une colonne définie par {{HTMLElement("col")}} ou {{HTMLElement("colgroup")}}.

## Valeur

Un entier indiquant la distance en pixels entre le bord supérieur de l'élément racine le plus proche et le bord supérieur de la boîte de bordure de l'élément HTML {{HTMLElement("img")}}. L'élément racine le plus proche est l'élément {{HTMLElement("html")}} le plus à l'extérieur qui contient l'image. Si l'image est dans un élément HTML {{HTMLElement("iframe")}}, sa valeur `y` est relative à ce cadre.

Dans le schéma ci-dessous, le bord supérieur correspond au bord supérieur de la zone de remplissage bleue. La valeur retournée par `y` est donc la distance entre ce point et le bord supérieur de la zone de contenu.

![Schéma montrant les relations entre les différentes boîtes associées à un élément](boxmodel-3.png)

## Exemple

Voir [`HTMLImageElement.x`](/fr/docs/Web/API/HTMLImageElement/x#exemple) pour un exemple de code qui montre l'utilisation de `HTMLImageElement.y` (et `HTMLImageElement.x`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("display")}}
- L'élément HTML {{HTMLElement("col")}}
- L'élément HTML {{HTMLElement("colgroup")}}
- La propriété {{DOMxRef("HTMLImageElement.x")}}
