---
title: ":disabled"
slug: Web/CSS/:disabled
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
input[type="text"]:disabled {
  background: #ccc;
}
```

### HTML

```html
<form action="#">
  <fieldset>
    <legend>Adresse de livraison</legend>
    <input type="text" placeholder="Nom" />
    <input type="text" placeholder="Adresse" />
    <input type="text" placeholder="Code postal" />
  </fieldset>
  <fieldset id="facturation">
    <legend>Adresse de facturation</legend>
    <label for="facturation_livraison"
      >Identique à l'adresse de livraison</label
    >
    <input
      type="checkbox"
      id="facturation_livraison"
      onchange="javascript:toggleBilling()"
      checked />
    <br />
    <input type="text" placeholder="Nom" disabled />
    <input type="text" placeholder="Adresse" disabled />
    <input type="text" placeholder="Code postal" disabled />
  </fieldset>
</form>
```

### JavaScript

```js
function toggleBilling() {
  var billingItems = document.querySelectorAll(
    '#facturation input[type="text"]',
  );
  for (var i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}
```

### Résultat

{{EmbedLiveSample('Exemples', '300px', '250px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":enabled")}}
