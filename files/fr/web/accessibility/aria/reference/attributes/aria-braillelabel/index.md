---
title: "ARIA : attribut aria-braillelabel"
short-title: aria-braillelabel
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

La propriété globale `aria-braillelabel` définit une valeur de chaîne de caractères qui étiquette l'élément actuel, qui est destiné à être converti en braille.

## Description

L'attribut global `aria-braillelabel` est similaire à l'attribut global [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) en ce sens qu'il définit une valeur de chaîne de caractères qui étiquette l'élément actuel. Alors que `aria-label` est lu par le lecteur d'écran, le contenu de l'attribut `aria-braillelabel` est converti en braille&nbsp;; fournissant à l'utilisateur·ice un nom reconnaissable de l'objet en braille.

L'objectif de la propriété `aria-braillelabel` est de remplacer la façon dont les technologies d'assistance localisent et expriment le nom accessible d'un élément en braille. Elle ne doit être utilisée que lorsque, sans cet attribut, le nom accessible ne serait pas l'expérience utilisateur souhaitée lors de sa conversion en braille.

Lors de l'utilisation de `aria-braillelabel`, assurez-vous que&nbsp;:

- L'élément auquel `aria-braillelabel` est appliqué a un nom accessible valide.
- La valeur de `aria-braillelabel` a un contenu réel et n'est pas vide ou ne contient que des espaces en unicode ou en braille unicode.
- La valeur n'est _PAS_ la même que le nom accessible.
- Les valeurs de `aria-braillelabel` sont localisées pour s'aligner sur la langue du document.
- Informez l'utilisateur·ice que cet attribut est disponible, en particulier si le contenu contient des motifs braille unicode, afin que l'utilisateur·ice sache définir les paramètres pour appliquer des traductions braille spécifiques à l'utilisateur·ice.

> [!NOTE]
> Les technologies d'assistance avec support braille peuvent convertir les noms accessibles en braille.
> Par conséquent, n'utilisez `aria-braillelabel` que lorsque le nom accessible n'est pas l'expérience utilisateur souhaitée.

Utiliser uniquement un nom accessible, par exemple, à partir du contenu ou via `aria-label` est presque toujours la meilleure expérience utilisateur, donc n'utilisez pas aria-braillelabel pour reproduire aria-label. N'utilisez `aria-braillelabel` que si le nom accessible ne peut pas fournir une représentation braille adéquate.

```html
<button aria-braillelabel="***">
  <img alt="3 étoiles sur 5" src="trois_etoiles.png" />
</button>
```

Un affichage braille peut afficher «&nbsp;btn \*\*\*&nbsp;» en braille plutôt que le plus verbeux «&nbsp;btn gra 3 étoiles sur 5&nbsp;» («&nbsp;gra&nbsp;» représente le mot «&nbsp;graphique&nbsp;»).

## Valeurs

- `<string>`
  - : La valeur est une chaîne de caractères, un type de valeur non contraint, qui est destinée à être convertie en braille.

## Rôles associés

Utilisé dans **TOUS** les rôles.

## Spécifications

{{Specifications}}

## Voir aussi

- {{domxref("Element.ariaBrailleLabel")}}
- L'attribut ARIA [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- L'attribut ARIA [`aria-brailleroledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription)
