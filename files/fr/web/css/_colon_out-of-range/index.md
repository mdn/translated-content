---
title: ":out-of-range"
slug: Web/CSS/:out-of-range
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:out-of-range`** cible un élément {{HTMLElement("input")}} lorsque la valeur de son attribut `value` est en dehors de l'intervalle autorisé par les attributs [`min`](/fr/docs/Web/HTML/Element/input#min) et [`max`](/fr/docs/Web/HTML/Element/input#max). Ceci permet d'informer l'utilisateur que la valeur actuellement renseignée dans l'élément est hors des limites acceptables.

```css
/* Cible n'importe quel élément <input> qui possède un */
/* attribut range et que la valeur associée est en     */
/* dehors de cet intervalle */
input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
}
```

> **Note :** Cette pseudo-classe s'applique seulement aux éléments qui ont des valeurs limites.

## Syntaxe

{{csssyntax}}

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
  background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
  border: 2px solid red;
}

input:in-range + label::after {
  content: " OK";
}

input:out-of-range + label::after {
  content: "hors des limites !";
}
```

### Résultat

{{EmbedLiveSample('Exemples',600,140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":in-range")}}
- [Le guide de validation des données de formulaire](/fr/docs/Learn/Forms/Form_validation)
