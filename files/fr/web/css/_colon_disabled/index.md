---
title: ':disabled'
slug: Web/CSS/:disabled
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:disabled
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:disabled`** permet de cibler un élément désactivé. Un élément est désactivé s'il ne peut pas être activé (sélectionné, cliqué ou saisi) ou s'il ne peut pas recevoir le focus de l'utilisateur. L'élément possède également un état activé dans lequel il peut être sélectionné ou recevoir le focus.

```css
/* Cible tous les champs de saisie texte */
/* qui sont désactivés */
input[type="text"]:disabled {
  background: #ccc;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
input[type="text"]:disabled { background: #ccc; }
```

### HTML

```html
<form action="#">
  <fieldset>
    <legend>Adresse de livraison</legend>
    <input type="text" placeholder="Nom">
    <input type="text" placeholder="Adresse">
    <input type="text" placeholder="Code postal">
  </fieldset>
  <fieldset id="facturation">
    <legend>Adresse de facturation</legend>
    <label for="facturation_livraison">Identique à l'adresse de livraison</label>
    <input type="checkbox" id="facturation_livraison" onchange="javascript:toggleBilling()" checked>
    <br />
    <input type="text" placeholder="Nom" disabled>
    <input type="text" placeholder="Adresse" disabled>
    <input type="text" placeholder="Code postal" disabled>
  </fieldset>
</form>
```

### JavaScript

```js
function toggleBilling() {
  var billingItems = document.querySelectorAll('#facturation input[type="text"]');
  for (var i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}
```

### Résultat

{{EmbedLiveSample('Exemples', '300px', '250px')}}

## Spécifications

| Spécification                                                                        | État                                 | Commentaires                                                     |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ---------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-disabled', ':disabled')}} | {{Spec2('HTML WHATWG')}}     | Aucune modification.                                             |
| {{SpecName('HTML5 W3C', '#selector-disabled', ':disabled')}}     | {{Spec2('HTML5 W3C')}}         | Définition de la sémantique relative à HTML et aux formulaires.  |
| {{SpecName('CSS4 Selectors', '#enableddisabled', ':disabled')}} | {{Spec2('CSS4 Selectors')}} | Aucune modification.                                             |
| {{SpecName('CSS3 Basic UI', '#pseudo-classes', ':disabled')}}     | {{Spec2('CSS3 Basic UI')}} | Référence à la spécification de niveau 3 sur les sélecteurs.     |
| {{SpecName('CSS3 Selectors', '#enableddisabled', ':disabled')}} | {{Spec2('CSS3 Selectors')}} | Définition de la pseudo-classe mais sans la sémantique associée. |

## Compatibilité des navigateurs

{{Compat("css.selectors.disabled")}}

## Voir aussi

- {{cssxref(":enabled")}}
