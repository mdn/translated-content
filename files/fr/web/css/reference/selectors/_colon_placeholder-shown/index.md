---
title: Pseudo-classe CSS `:placeholder-shown`
short-title: :placeholder-shown
slug: Web/CSS/Reference/Selectors/:placeholder-shown
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:placeholder-shown`** représente n'importe quel élément HTML {{HTMLElement("input")}} ou {{HTMLElement("textarea")}} affichant [un texte de substitution](/fr/docs/Web/HTML/Reference/Elements/input#placeholder).

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
<label for="name">Nom complet:</label>
<input id="name" name="name" type="text" />

<label for="email">Adresse e-mail:</label>
<input id="email" name="email" type="email" placeholder="name@example.com" />

<label for="age">Votre âge:</label>
<input
  id="age"
  name="age"
  type="number"
  value="18"
  placeholder="Vous devez avoir plus de 18 ans" />
```

## Syntaxe

```css
:placeholder-shown {
  /* … */
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

{{EmbedLiveSample("Exemple simple", 200, 80)}}

### Dépassement du texte

Sur certains écrans plus étroits (tels que ceux des smartphones), la largeur des boîtes de recherche et celle des champs de formulaire peut être réduite fortement. Le texte de substitution peut donc être tronqué de façon indésirable. On peut alors utiliser {{CSSxRef("text-overflow")}} pour gérer cela gracieusement.

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

{{EmbedLiveSample("Dépassement du texte", 200, 80)}}

### Champ de saisie personnalisé

#### HTML

```html
<p>
  <label for="nom">Nom d'un étudiant·e&nbsp;:</label>
  <input id="nom" placeholder="Nom de l'étudiant" />
</p>
<p>
  <label for="filiere">Filière de l'étudiant·e&nbsp;:</label>
  <input id="filiere" placeholder="Filière de l'étudiant" />
</p>
<p>
  <label for="sid">ID à 8 chiffres de l'étudiant·e&nbsp;:</label>
  <input
    type="number"
    pattern="[0-9]{8}"
    title="8 chiffres"
    id="sid"
    class="id-etudiant"
    placeholder="8 chiffres" />
</p>
```

#### CSS

```css
input {
  background-color: #e8e8e8;
  color: black;
}

input.id-etudiant:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

#### Résultat

{{EmbedLiveSample("Champ de saisie personnalisé", 200, 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le pseudo-élément {{CSSxRef("::placeholder")}} applique un style au placeholder _lui-même_.
- Les éléments HTML associés&nbsp;:
  - {{HTMLElement("input")}}
  - {{HTMLElement("textarea")}}
- [Les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
