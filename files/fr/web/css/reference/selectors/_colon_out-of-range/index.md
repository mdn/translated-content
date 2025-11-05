---
title: :out-of-range
slug: Web/CSS/Reference/Selectors/:out-of-range
original_slug: Web/CSS/:out-of-range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:out-of-range`** cible un élément {{HTMLElement("input")}} lorsque la valeur de son attribut `value` est en dehors de l'intervalle autorisé par les attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max). Ceci permet d'informer l'utilisateur·ice que la valeur actuellement renseignée dans l'élément est hors des limites acceptables.

{{InteractiveExample("Démonstration CSS&nbsp;: :out-of-range", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:out-of-range {
  background-color: orangered;
}
```

```html interactive-example
<form>
  <label for="amount"
    >Combien de billets&nbsp;? (Vous pouvez acheter 2 à 6 billets)</label
  >
  <input id="amount" name="amount" type="number" min="2" max="6" value="4" />

  <label for="dep"
    >Date de départ&nbsp;: (Toute l'année 2022 est acceptée)</label
  >
  <input
    id="dep"
    name="dep"
    type="date"
    min="2022-01-01"
    max="2022-12-31"
    value="2025-05-05" />

  <label for="ret"
    >Date de retour&nbsp;: (Toute l'année 2022 est acceptée)</label
  >
  <input id="ret" name="ret" type="date" min="2022-01-01" max="2022-12-31" />
</form>
```

La pseudo-classe `:out-of-range` est utile pour donner à l'utilisateur·ice une indication visuelle qu'une valeur de champ est en dehors des limites autorisées.

> [!NOTE]
> Cette pseudo-classe s'applique seulement aux éléments qui ont (et peuvent avoir) une limitation de plage. En l'absence d'une telle limitation, l'élément ne peut être ni "dans la plage" ni "hors de la plage".

## Syntaxe

```css
:out-of-range {
  /* ... */
}
```

## Exemples

### HTML

```html
<form action="" id="form1">
  <ul>
    Les valeurs entre 1 et 10 sont autorisées.
    <li>
      <input
        id="valeur1"
        name="valeur1"
        type="number"
        placeholder="1 à 10"
        min="1"
        max="10"
        value="12" />
      <label for="valeur1">Votre valeur est </label>
    </li>
  </ul>
</form>
```

### CSS

```css
li {
  list-style: none;
  margin-bottom: 1em;
}

input {
  border: 1px solid black;
}

input:in-range {
  background-color: rgb(0 255 0 / 25%);
}

input:out-of-range {
  background-color: rgb(255 0 0 / 25%);
  border: 2px solid red;
}

input:in-range + label::after {
  content: "valide.";
}

input:out-of-range + label::after {
  content: "hors de portée !";
}
```

### Résultat

{{EmbedLiveSample('Exemples', 600, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":in-range")}}
- [Le guide de validation des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
