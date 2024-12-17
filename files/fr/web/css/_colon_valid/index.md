---
title: ":valid"
slug: Web/CSS/:valid
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:valid`** permet de cibler tout élément {{HTMLElement("input")}} ou {{HTMLElement("form")}} dont la [validation](/fr/docs/Web/HTML/Constraint_validation) du contenu s'effectue correctement par rapport au type de donnée attendu. On peut ainsi facilement mettre en forme les champs correctement remplis par l'utilisateur.

```css
input:valid {
  background-color: #ddffdd;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

Cet exemple présente un formulaire dont les éléments se colorent en vert lorsqu'ils sont valides et en rouge lorsqu'ils sont invalides.

### CSS

```css
input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:valid {
  border-color: #008000;
}
```

### HTML

```html
<form>
  <label>Veuillez saisir une URL :</label>
  <input type="url" />
  <br />
  <br />
  <label>Veuillez saisir une adresse électronique :</label>
  <input type="email" required />
</form>
```

### Résultat

{{EmbedLiveSample('Exemples',600,150)}}

## Accessibilité

La couleur rouge est généralement utilisée afin d'indiquer une valeur invalide. Les personnes ayant du mal à différencier les couleurs ne seront pas capables de déterminer la validité du champ si celui-ci n'est pas accompagné d'un indicateur qui n'est pas basé sur une couleur. Pour résoudre ce problème, on pourra utiliser un texte indicatif et/ou une icône.

- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":invalid")}}
- {{cssxref(":required")}}
- {{cssxref(":optional")}}
- [La validation des données d'un formulaire](/fr/docs/Learn/Forms/Form_validation)
- [Accéder à l'état de validité en JavaScript](/fr/docs/Web/API/ValidityState)
