---
title: :placeholder-shown
slug: Web/CSS/Reference/Selectors/:placeholder-shown
original_slug: Web/CSS/:placeholder-shown
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:placeholder-shown`** représente n'importe quel élément {{htmlElement("input")}} ou {{htmlElement("textarea")}} affichant [un texte de substitution](/fr/docs/Web/HTML/Reference/Elements/input#placeholder).

{{InteractiveExample("Démonstration CSS&nbsp;: :placeholder-shown", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:placeholder-shown {
  background-color: ivory;
  border: 2px solid darkorange;
  border-radius: 5px;
}
```

```html interactive-example
<form>
  <label for="name">Nom complet&nbsp;:</label>
  <input id="name" name="name" type="text" />

  <label for="email">Adresse e-mail&nbsp;:</label>
  <input id="email" name="email" type="email" placeholder="name@example.com" />

  <label for="age">Votre âge&nbsp;:</label>
  <input
    id="age"
    name="age"
    type="number"
    value="18"
    placeholder="Vous devez avoir ples de 18 ans" />
</form>
```

## Syntaxe

```css
:placeholder-shown {
  /* ... */
}
```

## Exemples

### Exemple simple

Cet exemple applique des styles de police et de bordure spéciaux lorsque le texte de substitution est affiché.

#### HTML

```html
<input placeholder="Saisir quelque chose ici" />
```

#### CSS

```css
input {
  border: 1px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border-color: teal;
  color: purple;
  font-style: italic;
}
```

#### Résultat

{{EmbedLiveSample("exemple_simple", 200, 80)}}

### Dépassement du texte

Sur certains écrans plus étroits (tels que ceux des smartphones), la largeur des boîtes de recherche et celle des champs de formulaire peut être réduite fortement. Le texte de substitution peut donc être tronqué de façon indésirable. On peut alors utiliser {{cssxref("text-overflow")}} pour gérer cela gracieusement.

#### HTML

```html
<input
  id="input1"
  placeholder="Veuillez saisir quelque chose dans ce champ s'il vous plaît !" />
<br /><br />
<input
  id="input2"
  placeholder="Veuillez saisir quelque chose dans ce champ s'il vous plaît !" />
```

#### CSS

```css
#input2:placeholder-shown {
  text-overflow: ellipsis;
}
```

#### Résultat

{{EmbedLiveSample("dépassement_du_texte", 200, 80)}}

### Champ de saisie personnalisé

#### HTML

```html
<form id="test">
  <p>
    <label for="name">Entrer le nom d'un étudiant&nbsp;:</label>
    <input id="name" placeholder="Nom de l'étudiant" />
  </p>
  <p>
    <label for="branch">Entrer la filière de l'étudiant&nbsp;:</label>
    <input id="branch" placeholder="Filière de l'étudiant" />
  </p>
  <p>
    <label for="sid">Entrer l'ID de l'étudiant&nbsp;:</label>
    <input
      type="number"
      pattern="[0-9]{8}"
      title="8 chiffres"
      id="sid"
      class="student-id"
      placeholder="8 chiffres" />
  </p>
  <input type="submit" />
</form>
```

#### CSS

```css
input {
  background-color: #e8e8e8;
  color: black;
}

input.student-id:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

#### Résultat

{{EmbedLiveSample("champ_de_saisie_personnalisé", 200, 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le pseudo-élément {{cssxref("::placeholder")}} applique un style au placeholder _lui-même_.
- Les éléments HTML associés&nbsp;:
  - {{HTMLElement("input")}}
  - {{HTMLElement("textarea")}}
- [Les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
