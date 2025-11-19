---
title: :disabled
slug: Web/CSS/Reference/Selectors/:disabled
original_slug: Web/CSS/:disabled
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:disabled`** permet de cibler un élément désactivé. Un élément est désactivé s'il ne peut pas être activé (sélectionné, cliqué ou saisi) ou s'il ne peut pas recevoir le focus de l'utilisateur. L'élément possède également un état activé dans lequel il peut être sélectionné ou recevoir le focus.

{{InteractiveExample("Démonstration CSS&nbsp;: :disabled", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:disabled {
  background-color: dimgrey;
  color: linen;
  opacity: 1;
}
```

```html interactive-example
<form>
  <label for="name">Nom :</label>
  <input id="name" name="name" type="text" />

  <label for="emp">Employé :</label>
  <select id="emp" name="emp" disabled>
    <option>Non</option>
    <option>Oui</option>
  </select>

  <label for="empDate">Date d'embauche :</label>
  <input id="empDate" name="empDate" type="date" disabled />

  <label for="resume">CV :</label>
  <input id="resume" name="resume" type="file" />
</form>
```

## Syntaxe

```css
:disabled {
  /* ... */
}
```

## Exemples

Cet exemple montre un formulaire d'expédition basique. Il utilise l'événement [JavaScript](/fr/docs/Web/JavaScript) {{domxref("HTMLElement/change_event", "change")}} pour permettre à l'utilisateur·ice d'activer/désactiver les champs de facturation.

### HTML

```html
<form action="#">
  <fieldset>
    <legend>Adresse de livraison</legend>
    <input type="text" placeholder="Nom" />
    <input type="text" placeholder="Adresse" />
    <input type="text" placeholder="Code postal" />
  </fieldset>
  <br />
  <fieldset id="facturation">
    <legend>Adresse de facturation</legend>
    <label for="facturation-livraison"
      >Identique à l'adresse de livraison</label
    >
    <input type="checkbox" id="facturation-livraison" checked />
    <br />
    <input type="text" placeholder="Nom" disabled />
    <input type="text" placeholder="Adresse" disabled />
    <input type="text" placeholder="Code postal" disabled />
  </fieldset>
</form>
```

### CSS

```css
input[type="text"]:disabled {
  background: #cccccc;
}
```

### JavaScript

```js
const checkbox = document.querySelector("#facturation-livraison");
const billingItems = document.querySelectorAll(
  '#facturation input[type="text"]',
);

checkbox.addEventListener("change", () => {
  billingItems.forEach((item) => {
    item.disabled = !item.disabled;
  });
});
```

### Résultat

Cochez/décochez la case pour modifier le style des champs de facturation.

{{EmbedLiveSample('Exemples', '300px', '250px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":enabled")}}
