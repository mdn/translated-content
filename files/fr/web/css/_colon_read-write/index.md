---
title: ':read-write'
slug: Web/CSS/:read-write
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:read-write
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

> **Note :** Ce sélecteur ne sélectionne pas que les champs de saisie textuels ({{HTMLElement("input")}} ou {{HTMLElement("textarea")}}). Il permet de sélectionner n'importe quel élément qui peut être édité par l'utilisateur (par exemple un élément {{htmlelement("p")}} avec un attribut {{htmlattrxref("contenteditable")}}).

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
input { min-width: 25em; }
input:-moz-read-write { background: cyan; }
input:read-write { background: cyan; }

p:-moz-read-write { background: lightgray; }
p:read-write { background: lightgray; }
p[contenteditable="true"] { color: blue; }
```

### HTML

```html
<input type="text" value="Un champ en lecture seule"/>
<p contenteditable>Essayez un peu d'éditer ce paragraphe.</p>
<p>Bonne chance pour celui-là !</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                            | État                                 | Commentaires                                                                  |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-read-write', ':read-write')}} | {{Spec2('HTML WHATWG')}}     | Aucune modification.                                                          |
| {{SpecName('HTML5 W3C', '#selector-read-write', ':read-write')}}     | {{Spec2('HTML5 W3C')}}         | Définition de la sémantique relative à HTML et aux contraintes de validation. |
| {{SpecName('CSS4 Selectors', '#rw-pseudos', ':read-write')}}         | {{Spec2('CSS4 Selectors')}} | Définition de la pseudo-classe mais pas de la sémantique associée.            |

## Compatibilité des navigateurs

{{Compat("css.selectors.read-write")}}

## Voir aussi

- {{cssxref(":read-only")}}
- L'attribut HTML {{htmlattrxref("contenteditable")}}
