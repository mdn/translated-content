---
title: Utiliser l'attribut aria-relevant
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute
tags:
  - ARIA
  - Accessibilité
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-relevant
---
L’attribut [aria-relevant](http://www.w3.org/TR/wai-aria/states_and_properties#aria-relevant) est une valeur optionnelle utilisée pour décrire quels types de modifications ont été apportés à une région [`aria-live`](/fr/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), ainsi que ceux qui sont pertinents et doivent être annoncés. Toute modification jugée comme non pertinente se comporte de la même manière que si l’attribut `aria-live` n’était pas activé.

L’attribut aria-relevant est habituellement utilisé lorsque le contenu d’une page web peut être mis à jour alors que la page est affichée.

### Valeurs

Une liste délimitée par des espaces avec une ou plusieurs des valeurs suivantes :

- « additions » L’insertion de noeuds au sein de la région live doit être considérée comme pertinente
- « removals » La suppression de noeuds doit être considérée comme pertinente
- « text » Des changements apportés au contenu texte de noeuds existants doivent être considérés comme pertinents
- « all » Equivalent à « additions removals text »

`aria-relevant="additions text"` est la valeur par défaut d’une région live.

### Autres ressources

- [Spécification WAI-ARIA pour aria-relevant](https://www.w3.org/TR/wai-aria/states_and_properties#aria-relevant)
