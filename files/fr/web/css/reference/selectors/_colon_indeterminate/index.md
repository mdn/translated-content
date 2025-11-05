---
title: :indeterminate
slug: Web/CSS/Reference/Selectors/:indeterminate
original_slug: Web/CSS/:indeterminate
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:indeterminate`** permet de cibler un élément de formulaire dont l'état est indéterminé.

```css
/* Cible n'importe quel élément <input> */
/* dans un état indéterminé */
input:indeterminate {
  background: lime;
}
```

Cela inclut&nbsp;:

- un élément [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox) dont la propriété du DOM `indeterminate` est fixée à `true` via du code JavaScript
- des éléments [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio) dont tous les boutons radio du groupe sont décochés
- des éléments {{HTMLElement("progress")}} dans un état indéterminé.

## Syntaxe

```css
:indeterminate {
  /* ... */
}
```

## Exemples

### Case à cocher et bouton radio

Cet exemple applique des styles spéciaux aux étiquettes associées aux champs de formulaire indéterminés.

#### HTML

```html
<fieldset>
  <legend>Case à cocher</legend>
  <div>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox"
      >Cette case à cocher commence avec un fond vert.</label
    >
  </div>
</fieldset>

<fieldset>
  <legend>Radio</legend>
  <div>
    <input type="radio" id="radio1" name="radioButton" value="val1" />
    <label for="radio1"
      >Le premier label radio commence avec un fond vert.</label
    >
  </div>
  <div>
    <input type="radio" id="radio2" name="radioButton" value="val2" />
    <label for="radio2"
      >Le deuxième label radio commence également avec un fond vert.</label
    >
  </div>
</fieldset>
```

#### CSS

```css
input:indeterminate + label {
  background: lime;
}
```

```css hidden
fieldset {
  padding: 1em 0.75em;
}

fieldset:first-of-type {
  margin-bottom: 1.5rem;
}

fieldset:not(:first-of-type) > div:not(:last-child) {
  margin-bottom: 0.5rem;
}
```

#### JavaScript

```js
const inputs = document.getElementsByTagName("input");

for (const input of inputs) {
  input.indeterminate = true;
}
```

#### Résultat

{{EmbedLiveSample('Case_à_cocher_et_bouton_radio', 'auto', 230)}}

### Élément `progress`

#### HTML

```html
<progress></progress>
```

#### CSS

```css
progress {
  margin: 4px;
}

progress:indeterminate {
  width: 80vw;
  height: 20px;
}
```

#### Résultat

{{EmbedLiveSample('Élément_progress', 'auto', 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## See also

- [Table de compatibilité des propriétés pour les widgets de formulaire](/fr/docs/Learn_web_development/Extensions/Forms)
- [Mise en forme des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- La propriété [`indeterminate`](/fr/docs/Web/API/HTMLInputElement/indeterminate) de l'élément [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox)
- L'élément {{HTMLElement("input")}} et l'interface {{domxref("HTMLInputElement")}} qui l'implémente.
- Le sélecteur CSS {{cssxref(":checked")}} vous permet de mettre en forme les cases à cocher en fonction de leur état (coche ou non)
