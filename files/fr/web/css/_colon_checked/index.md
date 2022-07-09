---
title: ':checked'
slug: Web/CSS/:checked
translation_of: Web/CSS/:checked
---
{{CSSRef}}

La pseudo-classe **`:checked`** représente n'importe quel **bouton radio** ([`<input type="radio">`](/fr/docs/Web/HTML/Element/Input/radio)), **case à cocher** ([`<input type="checkbox">`](/fr/docs/Web/HTML/Element/Input/checkbox)) ou **option** ({{HTMLElement("option")}} d'un élément {{HTMLElement("select")}}) qui est coché ou activé (`on`). L'utilisateur peut modifier cet état en cliquant sur l'élément ou en sélectionnant une valeur différente auquel cas la pseudo-classe `:checked` ne s'applique plus à l'élément en question.

```css
/* cible n'importe quel bouton radio sélectionné, case
/* à cocher cochée ou option sélectionnée */
input:checked {
  margin-left: 25px;
  border: 1px solid blue;
}
```

> **Note :** Les navigateurs considèrent souvent les éléments `<option>` comme [des éléments remplacés](/fr/docs/Web/CSS/%C3%89l%C3%A9ment_remplac%C3%A9)et la possibilité de mise en forme avec `:checked` varie d'un navigateur à l'autre.

## Syntaxe

{{csssyntax}}

## Exemples

### Exemple simple

#### HTML

```html
<div>
  <input type="radio" name="my-input" id="yes">
  <label for="yes">Oui</label>

  <input type="radio" name="my-input" id="no">
  <label for="no">Non</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in">
  <label for="opt-in">Cochez-moi !</label>
</div>

<select name="my-select" id="fruit">
  <option value="opt1">Pommes</option>
  <option value="opt2">Raisins</option>
  <option value="opt3">Poires</option>
</select>
```

#### CSS

```css
div,
select {
  margin: 8px;
}

/* Libellés pour les entrées cochées */
input:checked + label {
  color: red;
}

/* Éléments radio cochés */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Éléments cases à cocher cochés */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Éléments options sélectionnés */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_simple")}}

## Spécifications

| Spécification                                                                    | État                                 | Commentaires                                                       |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', '#selector-checked', ':checked')}} | {{Spec2('HTML WHATWG')}}     | Aucune modification.                                               |
| {{SpecName('HTML5 W3C', '#selector-checked', ':checked')}}     | {{Spec2('HTML5 W3C')}}         | La sémantique relative au HTML est définie.                        |
| {{SpecName('CSS4 Selectors', '#checked', ':checked')}}         | {{Spec2('CSS4 Selectors')}} | Aucune modification.                                               |
| {{SpecName('CSS3 Basic UI', '#pseudo-checked', ':checked')}} | {{Spec2('CSS3 Basic UI')}} | Lien avec la spécification de niveau 3 pour les sélecteurs.        |
| {{SpecName('CSS3 Selectors', '#checked', ':checked')}}         | {{Spec2('CSS3 Selectors')}} | Définition de la pseudo-classe mais pas de la sémantique associée. |

## Compatibilité des navigateurs

{{Compat("css.selectors.checked")}}
