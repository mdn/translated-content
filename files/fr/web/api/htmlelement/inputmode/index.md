---
title: "HTMLElement : propriété inputMode"
short-title: inputMode
slug: Web/API/HTMLElement/inputMode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`inputMode`** de l'interface {{DOMxRef("HTMLElement")}} reflète la valeur de l'attribut [`inputmode`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode) de l'élément.

Elle fournit une indication sur le type de données que l'utilisateur·ice pourrait saisir lors de l'édition de l'élément ou de son contenu. Cela permet au navigateur d'afficher un clavier virtuel adapté.

Elle est principalement utilisée sur les éléments {{HTMLElement("input")}}, mais peut être utilisée sur tout élément en mode [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable).

## Valeur

Cet attribut peut avoir l'une des valeurs suivantes&nbsp;:

- `decimal`
  - : Clavier numérique fractionnaire qui contient les chiffres et le séparateur décimal pour la langue de l'utilisateur·ice (généralement <kbd>.</kbd> ou <kbd>,</kbd>).
- `email`
  - : Clavier virtuel optimisé pour la saisie d'adresses e-mail.
    Inclut généralement le caractère <kbd>@</kbd> ainsi que d'autres optimisations.
- `none`
  - : Aucun clavier virtuel. À utiliser lorsque la page implémente son propre contrôle de saisie clavier.
- `numeric`
  - : Clavier numérique qui ne nécessite que les chiffres 0 à 9.
    Les appareils peuvent ou non afficher une touche moins.
- `search`
  - : Clavier virtuel optimisé pour la saisie de recherche.
    Par exemple, la [touche de validation/soumission <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) peut être étiquetée «&nbsp;Recherche&nbsp;».
- `tel`
  - : Clavier téléphonique comprenant les chiffres 0 à 9, l'astérisque (<kbd>\*</kbd>) et la touche dièse (<kbd>#</kbd>).
- `text`
  - : Clavier standard pour la langue courante de l'utilisateur·ice.
- `url`
  - : Clavier optimisé pour la saisie d'URL.
    Peut par exemple rendre la touche <kbd>/</kbd> plus visible.

Pour plus de détails sur l'utilisation de cet attribut, voir la page de l'attribut HTML [`inputmode`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode) auquel cette propriété fait référence.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`inputmode`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode)
