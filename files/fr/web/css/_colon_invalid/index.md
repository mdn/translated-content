---
title: ':invalid'
slug: Web/CSS/:invalid
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:invalid
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:invalid`** cible tout élément {{HTMLElement("input")}} pour lequel [la validation](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation "en/HTML/HTML5/Constraint_validation") du contenu échoue par rapport au type de donnée attendu. Ceci permet de mettre en forme les champs non valides pour aider l'utilisateur à identifier et à corriger les erreurs.

```css
/* Cible n'importe quel élément input  */
/* dont la valeur ne satisfait pas aux */
/* critères de validation */
input:invalid {
  background-color: pink;
}
```

## Syntaxe

{{csssyntax}}

## Exemple

Cet exemple présente un formulaire simple dont les éléments sont verts lors qu'ils sont valides et rouges lorsqu'ils ne le sont pas.

### CSS

```css
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

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

input:required:invalid {
  border-color: #c00000;
}
```

### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Veuillez saisir une URL :</label>
    <input type="url" id="url_input">
  </div>

  <div class="field">
    <label for="email_input">Veuillez saisir une adresse électronique :</label>
    <input type="email" id="email_input" required>
  </div>
</form>
```

### Résultat

{{EmbedLiveSample('Exemple','600',120)}}

## Accessibilité

La couleur rouge est généralement utilisée afin d'indiquer une valeur invalide. Les personnes ayant du mal à différencier les couleurs ne seront pas capables de déterminer la validité du champ si celui-ci n'est pas accompagné d'un indicateur qui n'est pas basé sur une couleur. Pour résoudre ce problème, on pourra utiliser un texte indicatif et/ou une icône.

- [Explications des recommendations WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Notes

### Boutons radio

Si un quelconque bouton radio dans un groupe (c'est-à-dire, avec la même valeur pour leur attribut `name`) possède l'attribut `required` , la pseudo-classe `:invalid` est appliquée à tous les boutons si aucun d'entre eux n'est sélectionné.

### Gestion dans Gecko

Par défaut, Gecko n'applique pas de style particulier à la pseudo-classe `:invalid` . Toutefois un style différent est appliqué (un halo rouge utilisant la propriété {{cssxref("box-shadow")}}) via la pseudo-classe {{cssxref(":-moz-ui-invalid")}}, qui s'applique dans un sous-ensemble des cas de `:invalid`.

Ce halo peut être désactivé avec les règles suivantes :

```css
:invalid {
  box-shadow: none;
}

:-moz-submit-invalid {
  box-shadow: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}
```

## Spécifications

| Spécification                                                                        | État                                 | Commentaire                                                                   |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-invalid', ':invalid')}}     | {{Spec2('HTML WHATWG')}}     | Aucune modification.                                                          |
| {{SpecName('HTML5 W3C', '#selector-invalid', ':invalid')}}         | {{Spec2('HTML5 W3C')}}         | Définition de la sémantique relative à HTML et aux contraintes de validation. |
| {{SpecName('CSS4 Selectors', '#validity-pseudos', ':invalid')}} | {{Spec2('CSS4 Selectors')}} | Définition initiale.                                                          |

## Compatibilité des navigateurs

{{Compat("css.selectors.invalid")}}

## Voir aussi

- {{cssxref(":valid")}}
- {{cssxref(":-moz-submit-invalid")}} et {{cssxref(":-moz-ui-invalid")}}
- {{cssxref(":required")}}
- {{cssxref(":optional")}}
- [La validation des données d'un formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire)
- [Accéder à l'état de validité en JavaScript](/fr/docs/Web/API/ValidityState)
