---
title: "HTMLImageElement : propriété naturalWidth"
short-title: naturalWidth
slug: Web/API/HTMLImageElement/naturalWidth
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`naturalWidth`** de l'interface {{domxref("HTMLImageElement")}} retourne la largeur intrinsèque (naturelle), corrigée de la densité, de l'image en {{Glossary("CSS pixel", "pixels CSS")}}.

Il s'agit de la largeur de l'image lorsqu'aucune contrainte n'est appliquée&nbsp;: si vous ne spécifiez pas de largeur pour l'image, ou si l'image est placée dans un conteneur qui limite ou définit explicitement la largeur, c'est le nombre de pixels CSS de large que l'image aura.

La propriété correspondante {{domxref("HTMLImageElement.naturalHeight", "naturalHeight")}} retourne la hauteur naturelle de l'image.

> [!NOTE]
> La plupart du temps, la largeur naturelle correspond à la largeur réelle de l'image envoyée par le serveur.
> Cependant, les navigateurs peuvent modifier une image avant de l'afficher. Par exemple, Chrome [réduit la résolution des images sur les appareils d'entrée de gamme <sup>(angl.)</sup>](https://crbug.com/1187043#c7). Dans ce cas, `naturalWidth` considère la largeur de l'image modifiée par ce type d'intervention du navigateur comme la largeur naturelle, et retourne cette valeur.

## Valeur

Un entier indiquant la largeur intrinsèque de l'image, en pixels CSS. Il s'agit de la largeur à laquelle l'image est affichée naturellement lorsqu'aucune contrainte ou valeur spécifique n'est définie pour l'image. Cette largeur naturelle est corrigée en fonction de la densité de pixels de l'appareil sur lequel elle est affichée, contrairement à la valeur de {{domxref("HTMLImageElement.width", "width")}}.

Si la largeur intrinsèque n'est pas disponible — soit parce que l'image ne la spécifie pas, soit parce que les données de l'image ne sont pas accessibles pour obtenir cette information — `naturalWidth` retourne 0.

## Exemples

Voir [`HTMLImageElement.naturalHeight`](/fr/docs/Web/API/HTMLImageElement/naturalHeight#exemples) pour un exemple de code qui affiche une image à la fois dans sa taille naturelle «&nbsp;corrigée de la densité&nbsp;» et dans sa taille rendue, modifiée par le CSS de la page et d'autres facteurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
