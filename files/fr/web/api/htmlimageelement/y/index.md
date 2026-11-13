---
title: "HTMLImageElement : propriété y"
short-title: y
slug: Web/API/HTMLImageElement/y
l10n:
  sourceCommit: 384b4f1e0490f2f91f154a9ca977da78e0cc63a9
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`y`** de l'interface {{DOMxRef("HTMLImageElement")}} indique la coordonnée y du bord supérieur de l'élément HTML {{HTMLElement("img")}} par rapport à l'origine de l'élément racine.

## Valeur

Un entier indiquant la distance en pixels entre le bord supérieur de l'élément racine le plus proche et le bord supérieur de la boîte de bordure de l'élément HTML {{HTMLElement("img")}}. L'élément racine le plus proche est l'élément {{HTMLElement("html")}} le plus à l'extérieur qui contient l'image. Si l'image est dans un élément HTML {{HTMLElement("iframe")}}, sa valeur `y` est relative à ce cadre.

Dans le schéma ci-dessous, le bord supérieur correspond au bord supérieur de la zone de remplissage bleue. La valeur retournée par `y` est donc la distance entre ce point et le bord supérieur de la zone de contenu.

![Schéma montrant les relations entre les différentes boîtes associées à un élément](boxmodel-3.png)

## Exemples

Pour des exemples, voir la page de la propriété {{DOMxRef("HTMLImageElement.x", "x")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.x")}}
