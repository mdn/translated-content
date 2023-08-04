---
title: ":in-range"
slug: Web/CSS/:in-range
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:in-range`** cible un élément {{htmlelement("input")}} lorsque sa valeur courante est comprise dans l'intervalle défini par les attributs [`min`](/fr/docs/Web/HTML/Element/input#min) et [max](/fr/docs/Web/HTML/Element/input#max).

```css
/* Cible n'importe quel élément <input>   */
/* qui possède un intervalle et pour le-  */
/* quel la valeur est dans cet intervalle */
input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}
```

Cette pseudo-classe s'avère utile lorsqu'on souhaite fournir une indication visuelle quand la valeur est en dehors de la fourchette autorisée.

> **Note :** Cette pseudo-classe ne s'applique qu'aux éléments qui ont des limites de valeurs (autrement dit la valeur doit être comprise dans un intervalle donné). Sans ces limitations, l'élément ne pourra pas être vu comme _dans l'intervalle_ ou _en dehors de l'intervalle_.

## Syntaxe

{{csssyntax}}

## Exemples

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
  content: " non autorisée !";
}
```

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

### Résultat

{{EmbedLiveSample('Exemples',600,140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":out-of-range")}}
- [Guide de validation pour les données de formulaire](/fr/docs/Learn/Forms/Form_validation)
