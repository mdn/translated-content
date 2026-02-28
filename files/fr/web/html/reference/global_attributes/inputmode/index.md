---
title: "Attribut HTML universel : inputmode"
short-title: inputmode
slug: Web/HTML/Reference/Global_attributes/inputmode
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`inputmode`** est un attribut {{Glossary("Enumerated", "énuméré")}} qui suggère le type de données qui pourrait être saisi par l'utilisateur·ice lors de la modification de l'élément ou de son contenu.
Ceci permet au navigateur d'afficher un clavier virtuel approprié.

Il est principalement utilisé sur les éléments {{HTMLElement("input")}}, mais peut être utilisé sur tout élément en mode [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable).

Il est important de comprendre que l'attribut `inputmode` n'impose aucune contrainte de validité sur la saisie. Pour exiger qu'une saisie corresponde à un type de donnée particulier, choisissez un type d'élément [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input#les_différents_types_de_champs_input) approprié. Pour des conseils spécifiques sur le choix des types {{HTMLElement("input")}}, consultez la section [Valeur](#valeur).

## Valeur

L'attribut peut avoir l'une des valeurs suivantes&nbsp;:

- `none`
  - : Aucun clavier virtuel n'est affiché.
    À utiliser lorsque la page implémente son propre contrôle de saisie au clavier.
- `text` (valeur par défaut)
  - : Clavier de saisie standard pour la locale de l'utilisateur·ice.
- `decimal`
  - : Clavier numérique fractionnaire contenant les chiffres et le séparateur décimal de la locale de l'utilisateur·ice (généralement <kbd>.</kbd> ou <kbd>,</kbd>).
    Les appareils peuvent ou non afficher la touche moins (<kbd>-</kbd>).
- `numeric`
  - : Clavier numérique, mais qui ne nécessite que les chiffres de 0 à 9.
    Les appareils peuvent ou non afficher la touche moins.
- `tel`
  - : Clavier téléphonique, incluant les chiffres de 0 à 9, l'astérisque (<kbd>\*</kbd>) et la touche dièse (<kbd>#</kbd>).
    Pour les champs qui nécessitent un numéro de téléphone, il est recommandé d'utiliser `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` à la place.
- `search`
  - : Clavier virtuel optimisé pour la saisie de requêtes de recherche.
    Par exemple, la touche [retour/envoyer <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) peut être étiquetée "Rechercher", ainsi que d'autres optimisations possibles.
    Pour les champs qui nécessitent une requête de recherche, il est recommandé d'utiliser `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` à la place.
- `email`
  - : Clavier virtuel optimisé pour la saisie d'adresses électroniques.
    Inclut généralement le caractère <kbd>@</kbd> ainsi que d'autres optimisations.
    Pour les champs qui nécessitent une adresse électronique, il est recommandé d'utiliser `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` à la place.
- `url`
  - : Clavier virtuel optimisé pour la saisie d'URL.
    Cela peut inclure une mise en avant de la touche <kbd>/</kbd>, par exemple.
    D'autres fonctionnalités améliorées pourraient inclure l'accès à l'historique, etc.
    Pour les champs qui nécessitent une URL, il est recommandé d'utiliser `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` à la place.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- L'attribut universel [`enterkeyhint`](/fr/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
