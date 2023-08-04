---
title: Fil d'Ariane (breadcrumb)
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
---

{{CSSRef}}

La navigation avec un fil d'Ariane (_breadcrumb_) permet à un utilisateur de comprendre l'emplacement auquel il se trouve au sein du site web en fournissant un fil d'Ariane permettant de revenir à la page de départ.

![Links displayed inline with separators](breadcrumb-navigation.png)

## Spécifications sommaires

Les différents éléments formant le chemin sont affichés sur une ligne avec un séparateur qui permet d'identifier la hiérarchie entre les pages.

## Exemple appliqué

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/breadcrumb-navigation--download.html)

## Choix effectués

L'ensemble est organisé dans un conteneur flexible. Les séparateurs sont générés à partir de pseudo-éléments et le séparateur choisi ici peut être modifié à votre convenance.

## Accessibilité

On utilise ici les attributs `aria-label` et `aria-current` afin d'aider les utilisateurs à comprendre cette navigation et l'emplacement de la page actuelle dans la structure. Pour plus d'informations, voir les liens ci-après.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les boîtes flexibles CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Fournir un fil d'Ariane](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Utiliser l'attribut `aria-current`](https://tink.uk/using-the-aria-current-attribute/)
