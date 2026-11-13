---
title: Pseudo-classe CSS `:checked`
short-title: :checked
slug: Web/CSS/Reference/Selectors/:checked
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:checked`** représente n'importe quel **bouton radio** ([`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio)), **case à cocher** ([`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox)) ou **option** ({{HTMLElement("option")}} d'un élément {{HTMLElement("select")}}) qui est coché ou activé (`on`).

{{InteractiveExample("Démonstration CSS&nbsp;: :checked", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 0.5em;
}

fieldset {
  margin-top: 0.5em;
}

input:checked {
  border: none;
  outline: 2px solid deeppink;
}
```

```html interactive-example
<label for="name">Nom (requis)&nbsp;:</label>
<input id="name" name="name" type="text" required />

<label for="birth">Date de naissance&nbsp;:</label>
<input id="birth" name="birth" type="date" />

<label for="origin"
  >Comment avez-vous entendu parler de nous&nbsp;? (requis)</label
>
<select id="origin" name="origin" required>
  <option value="">Choisissez une option</option>
  <option value="google">Google</option>
  <option value="facebook">Facebook</option>
  <option value="advertisement">Publicité</option>
</select>

<fieldset>
  <legend>Méthode de contact privilégiée&nbsp;:</legend>
  <label>
    <input name="contact" type="radio" value="email" checked /> Courriel
  </label>
  <label><input name="contact" type="radio" value="phone" /> Téléphone</label>
</fieldset>

<label>
  <input name="newsletter" type="checkbox" checked /> Je souhaite m'abonner à
  une lettre d'information personnalisée.
</label>
<label>
  <input name="privacy" type="checkbox" required /> J'ai lu et j'accepte la
  Politique de confidentialité (obligatoire).
</label>
```

L'utilisateur·ice peut modifier cet état en cliquant sur l'élément ou en sélectionnant une valeur différente auquel cas la pseudo-classe `:checked` ne s'applique plus à l'élément en question.

> [!NOTE]
> Les navigateurs considèrent souvent les éléments `<option>` comme [des éléments remplacés](/fr/docs/Web/CSS/Guides/Images/Replaced_element_properties)et la possibilité de mise en forme avec `:checked` varie d'un navigateur à l'autre.

## Syntaxe

```css
:checked {
  /* … */
}
```

## Exemples

### Exemple simple

#### HTML

```html
<div>
  <input type="radio" name="my-input" id="yes" />
  <label for="yes">Oui</label>

  <input type="radio" name="my-input" id="no" />
  <label for="no">Non</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in" />
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

{{EmbedLiveSample("Exemple simple")}}

### Basculer des éléments à l'aide d'une case à cocher masquée

Cet exemple utilise la pseudo-classe `:checked` pour permettre à l'utilisateur·ice de basculer le contenu en fonction de l'état d'une case à cocher, le tout sans utiliser [JavaScript](/fr/docs/Web/JavaScript).

#### HTML

```html
<input type="checkbox" id="expand-toggle" />

<table>
  <thead>
    <tr>
      <th>Colonne #1</th>
      <th>Colonne #2</th>
      <th>Colonne #3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="expandable">
      <td>[plus de texte]</td>
      <td>[plus de texte]</td>
      <td>[plus de texte]</td>
    </tr>
    <tr>
      <td>[contenu de cellule]</td>
      <td>[contenu de cellule]</td>
      <td>[contenu de cellule]</td>
    </tr>
    <tr>
      <td>[contenu de cellule]</td>
      <td>[contenu de cellule]</td>
      <td>[contenu de cellule]</td>
    </tr>
    <tr class="expandable">
      <td>[plus de texte]</td>
      <td>[plus de texte]</td>
      <td>[plus de texte]</td>
    </tr>
    <tr class="expandable">
      <td>[plus de texte]</td>
      <td>[plus de texte]</td>
      <td>[plus de texte]</td>
    </tr>
  </tbody>
</table>

<label for="expand-toggle" id="expand-btn">Basculer les lignes masquées</label>
```

#### CSS

```css
/* Masquer la case à cocher de basculement */
#expand-toggle {
  display: none;
}

/* Masquer le contenu extensible par défaut */
.expandable {
  visibility: collapse;
  background: #dddddd;
}

/* Style du bouton */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ffff77;
  border: 1px solid;
  border-radius: 3px;
}

/* Afficher le contenu masqué lorsque la case à cocher est cochée */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* Style du bouton lorsque la case à cocher est cochée */
#expand-toggle:checked ~ #expand-btn {
  background-color: #cccccc;
}
```

#### Résultat

{{EmbedLiveSample("Basculer des éléments à l'aide d'une case à cocher masquée", "auto", 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Table de compatibilité des propriétés pour les composants de formulaire](/fr/docs/Learn_web_development/Extensions/Forms)
- [Mise en forme des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- Les éléments HTML associés&nbsp;: [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio), {{HTMLElement("select")}} et {{HTMLElement("option")}}
- L'entrée de glossaire {{Glossary("Replaced elements", "Éléments remplacés")}}
