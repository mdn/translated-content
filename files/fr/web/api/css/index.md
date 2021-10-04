---
title: CSS
slug: Web/API/CSS
translation_of: Web/API/CSS
---
{{APIRef("CSSOM")}}

L'interface CSS possède les méthodes utiles au CSS. Aucun objet de cette interface ne sont implémentés : il ne contient que des méthodes statiques et est donc une interface abstraite.

## Propriétés

L'interface CSS est une interface et aucun objet de ce type ne peut être créé: seules les méthodes statiques sont définies.

## Méthodes

L'interface CSS est une interface et aucun objet de ce type ne peut être créé: seules les méthodes statiques sont définies.

## Static methods

_Aucun héritage de méthode statique_.

- {{domxref("CSS.supports()")}}
  - : Retourne un {{domxref("Boolean")}} qui indique si la paire _propriété/valeur_, ou si la condition, passée en paramètre est supportée.

<!---->

- {{domxref("CSS.escape()")}} {{experimental_inline}}
  - : Utilisée pour protéger une chaine de caractère qui sera utiliser comme sélecteur CSS.

## Spécifications

| Spécification                                                                    | Status                                   | Commentaire                         |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------- |
| {{SpecName('CSSOM', '#the-css.escape%28%29-method', 'CSS')}} | {{Spec2('CSSOM')}}                 | Ajoute la méthode statique escape() |
| {{SpecName('CSS3 Conditional', '#the-css-interface', 'CSS')}} | {{Spec2('CSS3 Conditional')}} | Définition initiale                 |

## Compatibilité des navigateurs

{{Compat("api.CSS")}}

## Voir également

- [Components.utils.importGlobalProperties](/en-US/docs/Components.utils.importGlobalProperties)
