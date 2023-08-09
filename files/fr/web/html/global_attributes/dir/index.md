---
title: dir
slug: Web/HTML/Global_attributes/dir
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`dir`** est un attribut à valeur contrainte qui indique la direction du texte contenu dans l'élément.

{{EmbedInteractiveExample("pages/tabbed/attribute-dir.html","tabbed-standard")}}

Les valeurs autorisées pour cet attribut sont :

- `ltr` : qui signifie _left to right_ (gauche à droite), utilisé pour les langages écrits de gauche à droite (comme le français ou l'anglais par exemple)
- `rtl` : qui signifie _right to left_ (droite à gauche), utilisé pour les langages écrits de droite à gauche (comme l'arabe par exemple)
- `auto` : qui délègue la décision à l'agent utilisateur. L'algorithme utilisé est relativement simple : le contenu textuel est analysé et lorsque le premier caractère possédant une direction « forte » est rencontré, cette direction est prise pour l'ensemble de l'élément.

> **Note :** Cet attribut est obligatoire pour l'élément {{HTMLElement("bdo")}}, pour lequel l'attribut a une sémantique différente.
>
> - La valeur de l'attribut n'est pas héritée par l'élément {{HTMLElement("bdi")}}. S'il n'est pas défini, la valeur par défaut sera `auto`.
> - Cet attribut peut être surchargé par les propriétés CSS {{cssxref("direction")}} et {{cssxref("unicode-bidi")}}, (qui sont appliquées si une page CSS est active et que l'élément courant prend en charge ces propriétés).
> - La direction du texte est généralement liée à la sémantique du contenu et non à sa présentation. Il est donc recommandé d'utiliser cet attribut plutôt que des propriétés CSS quand la direction n'est pas lié à une quelconque mise en forme. Ainsi, le texte sera affiché correctement, y compris si le navigateur ne supporte pas ces propriétés CSS ou si CSS est désactivé.
> - La valeur `auto` doit être utilisée pour des données dont la direction est inconnue (comme par exemple des données provenant d'une saisie utilisateur).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- La propriété {{domxref("HTMLElement.dir")}} qui reflète cet attribut
