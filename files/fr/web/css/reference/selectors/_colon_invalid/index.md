---
title: :invalid
slug: Web/CSS/Reference/Selectors/:invalid
original_slug: Web/CSS/:invalid
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:invalid`** cible tout élément {{HTMLElement("input")}} pour lequel [la validation](/fr/docs/Web/HTML/Guides/Constraint_validation) du contenu échoue par rapport au type de donnée attendu. Ceci permet de mettre en forme les champs non valides pour aider l'utilisateur·ice à identifier et à corriger les erreurs.

{{InteractiveExample("Démonstration CSS&nbsp;: :invalid", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:invalid {
  background-color: ivory;
  border: none;
  outline: 2px solid red;
  border-radius: 5px;
}
```

```html interactive-example
<form>
  <label for="email">Adresse e-mail :</label>
  <input id="email" name="email" type="email" value="na@me@example.com" />

  <label for="secret">Code secret : (lettres minuscules)</label>
  <input id="secret" name="secret" type="text" value="test" pattern="[a-z]+" />

  <label for="age">Votre âge : (18+)</label>
  <input id="age" name="age" type="number" value="5" min="18" />

  <label
    ><input name="tos" type="checkbox" required checked /> - Acceptez-vous les
    CGU ?</label
  >
</form>
```

Cette pseudo-classe est utile pour mettre en évidence les erreurs de champ pour l'utilisateur·ice.

## Syntaxe

```css
:invalid {
  /* ... */
}
```

## Accessibilité

La couleur rouge est généralement utilisée afin d'indiquer une valeur invalide. Les personnes ayant du mal à différencier les couleurs ne seront pas capables de déterminer la validité du champ si celui-ci n'est pas accompagné d'un indicateur qui n'est pas basé sur une couleur. Pour résoudre ce problème, on pourra utiliser un texte indicatif et/ou une icône.

- [Explications des recommendations WCAG 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Exemple

### Colorer les éléments pour indiquer la validation

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Veuillez saisir une URL :</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">Veuillez saisir une adresse électronique :</label>
    <input type="email" id="email_input" required />
  </div>
</form>
```

#### CSS

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
  border-color: maroon;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

### Résultat

{{EmbedLiveSample('colorer_les_elements_pour_indiquer_la_validation', 600, 200)}}

## Notes

### Boutons radio

Si un quelconque bouton radio dans un groupe (c'est-à-dire, avec la même valeur pour leur attribut `name`) possède l'attribut `required` , la pseudo-classe `:invalid` est appliquée à tous les boutons si aucun d'entre eux n'est sélectionné.

### Gestion dans Gecko

Par défaut, Gecko n'applique pas de style particulier à la pseudo-classe `:invalid` . Toutefois un style différent est appliqué (un halo rouge utilisant la propriété {{cssxref("box-shadow")}}) via la pseudo-classe {{cssxref(":user-invalid")}}, qui s'applique dans un sous-ensemble des cas de `:invalid`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres pseudo-classes liées à la validation&nbsp;:
  - {{ cssxref(":required") }}
  - {{ cssxref(":optional") }}
  - {{ cssxref(":valid") }}
- Pseudo-classes Mozilla liées&nbsp;:
  - {{cssxref(":user-invalid")}}
  - {{cssxref(":-moz-submit-invalid")}}
- [Validation des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Accéder à l'[état de validité](/fr/docs/Web/API/ValidityState) depuis JavaScript
