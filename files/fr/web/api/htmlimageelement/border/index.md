---
title: "HTMLImageElement : propriété border"
slug: Web/API/HTMLImageElement/border
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

La propriété **`border`** (obsolète) de {{domxref("HTMLImageElement")}} définit le nombre de pixels d'épaisseur de la bordure entourant l'image. Une valeur de 0, qui est la valeur par défaut, indique qu'aucune bordure ne doit être dessinée.

Vous ne devez _pas_ utiliser cette propriété&nbsp;! Utilisez plutôt CSS pour styliser la bordure. La propriété {{cssxref("border")}} ou ses propriétés détaillées permettent non seulement de définir l'épaisseur de la bordure, mais aussi d'appliquer de nombreuses autres options de présentation.

L'épaisseur, en particulier, se contrôle avec les propriétés sensibles à l'orientation d'écriture&nbsp;: {{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-end-width")}}.

Pour des raisons de compatibilité (ou autres), vous pouvez utiliser les anciennes propriétés à la place (ou en complément)&nbsp;: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, {{cssxref("border-left-width")}}.

## Valeur

Une chaîne de caractères contenant une valeur entière qui définit l'épaisseur de la bordure entourant l'image, en pixels CSS. Une valeur de `0` ou une chaîne vide indique qu'aucune bordure ne doit être dessinée. La valeur par défaut de `border` est `0`.

Si on assigne la valeur `null`, celle-ci est convertie en chaîne vide (`""`), donc `elt.border = null` est équivalent à `elt.border = ""`.

## Notes d'utilisation

N'utilisez pas `border`. Cette propriété est obsolète. Utilisez plutôt la propriété CSS {{cssxref("border")}} et ses propriétés détaillées pour définir les bordures autour des images.

Par exemple, si vous avez le HTML suivant&nbsp;:

```html
<img src="image.png" border="2" />
```

Le code suivant produira le même rendu en utilisant CSS à la place de cette propriété obsolète&nbsp;:

```html
<img src="image.png" style="border: 2px;" />
```

Vous pouvez également préciser la couleur et d'autres caractéristiques de la bordure&nbsp;:

```html
<img src="image.png" style="border: dashed 2px #333388;" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
