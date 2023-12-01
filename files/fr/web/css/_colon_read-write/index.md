---
title: ":read-write"
slug: Web/CSS/:read-write
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:read-write`** permet de cibler un élément lorsque celui-ci peut être édité par l'utilisateur (par exemple les champs texte d'un formulaire ou les éléments {{HTMLElement("textarea")}}).

```css
/* Cible tout élément éditable */
/* Pris en charge dans Firefox avec un préfixe */
input:-moz-read-write {
  background-color: #ccc;
}

/* Pris en charge sans préfixe pour Blink/WebKit/Edge */
input:read-write {
  background-color: #ccc;
}
```

> **Note :** Ce sélecteur ne sélectionne pas que les champs de saisie textuels ({{HTMLElement("input")}} ou {{HTMLElement("textarea")}}). Il permet de sélectionner n'importe quel élément qui peut être édité par l'utilisateur (par exemple un élément {{htmlelement("p")}} avec un attribut [`contenteditable`](/fr/docs/Web/HTML/Global_attributes#contenteditable)).

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
input {
  min-width: 25em;
}
input:-moz-read-write {
  background: cyan;
}
input:read-write {
  background: cyan;
}

p:-moz-read-write {
  background: lightgray;
}
p:read-write {
  background: lightgray;
}
p[contenteditable="true"] {
  color: blue;
}
```

### HTML

```html
<input type="text" value="Un champ en lecture seule" />
<p contenteditable>Essayez un peu d'éditer ce paragraphe.</p>
<p>Bonne chance pour celui-là !</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":read-only")}}
- L'attribut HTML [`contenteditable`](/fr/docs/Web/HTML/Global_attributes#contenteditable)
