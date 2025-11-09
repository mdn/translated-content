---
title: "ARIA : attribut aria-brailleroledescription"
short-title: aria-brailleroledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut global `aria-brailleroledescription` définit une description abrégée, lisible par un·e humain·e et localisée par l'auteur·ice, du rôle d'un élément, destinée à être convertie en braille.

## Description

Le braille n'est pas une simple translittération lettre à lettre ou chiffre à chiffre&nbsp;: il utilise de nombreuses abréviations, contractions et caractères représentant des mots entiers (appelés logogrammes).

Au lieu de convertir de longues descriptions de rôle en braille, l'attribut `aria-brailleroledescription` permet de fournir une version abrégée de la valeur de [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription), qui est une description lisible par un·e humain·e et localisée par l'auteur·ice pour le rôle d'un élément, afin d'améliorer l'expérience utilisateur·ice avec les interfaces braille.

En résumé, la valeur de `aria-brailleroledescription` est une version abrégée de l'attribut `aria-roledescription` destinée à être convertie en braille.

```html
<article
  aria-roledescription="diapositive"
  aria-brailleroledescription="dps"
  aria-labelledby="titre1diapo">
  <h1 id="titre1diapo">Bienvenue à ma présentation</h1>
  <img alt="Moi" src="images/moi.jpg" />
</article>
```

La plupart des technologies d'assistance, comme les lecteurs d'écran, liront l'exemple ci-dessus comme «&nbsp;diapositive, bienvenue à ma présentation. Image, Moi.&nbsp;». Les technologies d'assistance braille présenteront «&nbsp;dps bienvenue à ma présentation gra moi&nbsp;» en braille. L'élément sémantique {{HTMLElement('article')}} reçoit le rôle «&nbsp;diapositive&nbsp;» via l'attribut `aria-roledescription`&nbsp;; «&nbsp;diapositive&nbsp;» n'est pas un rôle défini dans la spécification, mais c'est un rôle courant pour les diapositives d'une présentation. En braille, le rôle est présenté sous la forme abrégée «&nbsp;dps&nbsp;». «&nbsp;gra&nbsp;» est l'abréviation de «&nbsp;graphique&nbsp;», qui est la façon dont le rôle «&nbsp;image&nbsp;» est raccourci en braille.

L'attribut `aria-brailleroledescription` ne doit être utilisé que pour clarifier le but de rôles de conteneur non interactifs comme «&nbsp;groupe&nbsp;» ou «&nbsp;région&nbsp;», ou pour fournir une description plus précise d'un widget dans un contexte braille.

Comme l'attribut `aria-brailleroledescription` remplace la façon dont les technologies d'assistance localisent et expriment le nom d'un rôle en braille, des valeurs inappropriées empêcheront les utilisateur·ice·s de comprendre et d'interagir avec un élément sur les interfaces braille.

N'utilisez `aria-brailleroledescription` que si [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) est présent. Cependant, si la valeur de `aria-roledescription` fonctionne en braille, la version braille de l'attribut n'est pas nécessaire. En général, `aria-brailleroledescription` ne doit être utilisé que dans le cas rare où un `aria-roledescription` est trop verbeux pour le braille.

Quelques règles à retenir&nbsp;:

- N'appliquez `aria-brailleroledescription` qu'à des éléments ayant un rôle ARIA valide ou une sémantique de rôle implicite.
- Si présent, `aria-brailleroledescription` doit avoir une valeur non vide, différente de celle de `aria-roledescription`, qui elle-même doit être différente du rôle ARIA explicite ou implicite.
- Évitez d'utiliser les motifs Unicode du braille. Si vous devez les utiliser, assurez-vous que la valeur de `aria-brailleroledescription` contient autre chose que des motifs braille Unicode, des espaces ou le motif braille vide (dots-0).
- Assurez-vous que la valeur est toujours localisée dans la langue du document.

> [!WARNING]
> Si le contenu ne contient que des motifs Unicode du braille, la valeur ne sera pas traduite selon la table de traduction préférée de l'utilisateur·ice.

> [!NOTE]
> N'utilisez PAS `aria-brailleroledescription` pour dupliquer `aria-roledescription`. N'ajoutez cet attribut que lorsque `aria-roledescription` ne fournit pas une représentation braille adéquate.

La valeur de `aria-brailleroledescription` ne sera pas exposée à l'utilisateur·ice braille si&nbsp;:

- La valeur est vide ou ne contient que des espaces ou le motif braille vide&nbsp;: dots-0 (U+2800).
- L'élément auquel l'attribut est appliqué a un rôle WAI-ARIA explicite ou implicite pour lequel `aria-brailleroledescription` est interdit, y compris le rôle `generic`.
- L'élément auquel l'attribut est appliqué n'a pas de `aria-roledescription` valide.

> [!NOTE]
> Testez vos sites et applications avec des utilisateur·ice·s quotidiens·nes de technologies d'assistance, y compris des lecteur·ice·s braille, pour vous assurer que votre contenu a du sens en braille.

## Valeurs

- `<chaîne>`
  - : La valeur est une chaîne de caractères, de type non contraint, destinée à être convertie en braille.

## Rôles associés

Utilisé dans **TOUS** les rôles (sauf [`generic`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)).

## Spécifications

{{Specifications}}

## Voir aussi

- {{domxref("Element.ariaBrailleRoleDescription")}}
- L'attribut ARIA [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription).
- [`Element.ariaRoleDescription`](/fr/docs/Web/API/Element/ariaRoleDescription)
