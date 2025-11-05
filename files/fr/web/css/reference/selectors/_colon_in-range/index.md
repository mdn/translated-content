---
title: :in-range
slug: Web/CSS/Reference/Selectors/:in-range
original_slug: Web/CSS/:in-range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:in-range`** cible un élément {{htmlelement("input")}} lorsque sa valeur courante est comprise dans l'intervalle défini par les attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [max](/fr/docs/Web/HTML/Reference/Elements/input#max).

{{InteractiveExample("Démonstration CSS&nbsp;: :in-range", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:in-range {
  background-color: palegreen;
}
```

```html interactive-example
<form>
  <label for="amount"
    >Combien de billets ? (Vous pouvez acheter 2 à 6 billets)</label
  >
  <input id="amount" name="amount" type="number" min="2" max="6" value="4" />

  <label for="dep">Date de départ : (Toute l'année 2022 est acceptée)</label>
  <input
    id="dep"
    name="dep"
    type="date"
    min="2022-01-01"
    max="2022-12-31"
    value="2025-05-05" />

  <label for="ret">Date de retour : (Toute l'année 2022 est acceptée)</label>
  <input id="ret" name="ret" type="date" min="2022-01-01" max="2022-12-31" />
</form>
```

Cette pseudo-classe s'avère utile lorsqu'on souhaite fournir une indication visuelle quand la valeur est en dehors de la fourchette autorisée.

> [!NOTE]
> Cette pseudo-classe ne s'applique qu'aux éléments qui ont des limites de valeurs (autrement dit la valeur doit être comprise dans un intervalle donné). Sans ces limitations, l'élément ne pourra pas être vu comme _dans l'intervalle_ ou _en dehors de l'intervalle_.

## Syntaxe

```css
:in-range {
  /* ... */
}
```

## Exemples

### HTML

```html
<form action="" id="form1">
  <ul>
    Les valeurs entre 1 et 10 sont valides.
    <li>
      <input
        id="valeur1"
        name="valeur1"
        type="number"
        placeholder="de 1 à 10"
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

> [!NOTE]
> Un élément `<input>` vide n'est pas considéré comme en dehors de la plage et ne sera pas sélectionné à l'aide du sélecteur de pseudo-classe `:out-of-range`. La pseudo-classe [`:blank`](/fr/docs/Web/CSS/Reference/Selectors/:blank) existe pour sélectionner les entrées vides, bien qu'au moment de la rédaction de cet article, elle soit encore expérimentale et peu prise en charge. Vous pouvez également utiliser l'attribut `required` et la pseudo-classe [`:invalid`](/fr/docs/Web/CSS/Reference/Selectors/:invalid) pour fournir une logique et un style plus généraux afin de rendre les champs obligatoires (`:invalid` mettra en forme les champs vides _et_ hors limites).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":out-of-range")}}
- [Guide de validation pour les données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
