---
title: ':placeholder-shown'
slug: Web/CSS/:placeholder-shown
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:placeholder-shown
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:placeholder-shown`** permet de représenter n'importe quel élément {{htmlElement("input")}} ou {{htmlElement("textarea")}} affichant [un texte de substitution](/fr/docs/Web/Guide/HTML/Forms_in_HTML#The_placeholder_attribute).

```css
/* Cible tout élément <input> ou <textarea> avec un */
/* attribut placeholder actuellement affiché        */
:placeholder-shown {
  border: 2px solid silver;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

### Exemple simple

#### CSS

```css hidden
input:-ms-input-placeholder {
  border-color: silver;
}

input:-moz-placeholder {
  border-color: silver;
}
```

```css
input {
  border: 2px solid black;
  padding: 3px;
}

:placeholder-shown {
  border-color: silver;
}
```

#### HTML

```html
<input placeholder="Saisir quelque chose ici">
```

#### Résultat

{{EmbedLiveSample("Exemples", 200, 60)}}

### Dépassement du texte

Sur certains écrans plus étroits (tels que ceux des smartphones), la largeur des boîtes de recherche et celle des champs de formulaire peut être réduite fortement. Le texte de substitution peut donc être tronqué de façon indésirable. On peut alors utiliser {{cssxref("text-overflow")}} pour gérer cela gracieusement.

#### HTML

```html
<input placeholder="Veuillez saisir quelque chose dans ce champ s'il vous plaît !">
```

#### CSS

```css hidden
input:-ms-input-placeholder {
  text-overflow: ellipsis;
}

input:-moz-placeholder {
  text-overflow: ellipsis;
}
```

```css
input:placeholder-shown {
  text-overflow: ellipsis;
}
```

#### Résultat

{{EmbedLiveSample("Dépassement_du_texte", 200, 60)}}

### Texte coloré

#### HTML

```html
<input placeholder="Saisir quelque chose ici">
```

#### CSS

```css hidden
input:-ms-input-placeholder {
  color: red;
  font-style: italic;
}

input:-moz-placeholder {
  color: red;
  font-style: italic;
}
```

```css
input:placeholder-shown {
  color: red;
  font-style: italic;
}
```

#### Résultat

{{EmbedLiveSample("Texte_coloré")}}

### Champ de saisie personnalisé

#### HTML

```html
<form id="test">
  <p>
    <label for="name">Enter Student Name:</label>
    <input id="name" placeholder="Student Name"/>
  </p>
  <p>
    <label for="branch">Enter Student Branch:</label>
    <input id="branch" placeholder="Student Branch"/>
  </p>
  <p>
    <label for="sid">Enter Student ID:</label>
    <input type="number" pattern="[0-9]{8}" title="8 digit ID" id="sid" class="studentid" placeholder="8 digit id"/>
  </p>
  <input type="submit"/>
</form>
```

#### CSS

```css hidden
input.studentid:-ms-input-placeholder {
  background-color: yellow;
  color: red;
  font-style: italic;
}

input.studentid:-moz-placeholder {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

```css
input {
  background-color: #E8E8E8;
  color: black;
}

input.studentid:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

#### Résultat

{{EmbedLiveSample("Champ_de_saisie_personnalisé", 200, 180)}}

## Spécifications

| Spécification                                                                                | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS4 Selectors", "#placeholder", ":placeholder-shown")}} | {{Spec2("CSS4 Selectors")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.placeholder-shown")}}

## Voir aussi

- {{cssxref("::placeholder")}}
- {{cssxref("::-moz-placeholder")}}
- {{HTMLElement("input")}}
- {{HTMLElement("textarea")}}
- [Les formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires)
