---
title: ':read-only'
slug: Web/CSS/:read-only
tags:
  - CSS
  - Pseudo-classe
  - Refrence
translation_of: Web/CSS/:read-only
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:read-only`** permet de cibler un élément que l'utilisateur ne peut pas modifier (l'élément est en lecture seule).

```css
/* Cible n'importe quel élément <input> */
/* en lecture seule */

/* Firefox utilise un préfixe */
input:-moz-read-only {
  background-color: #ccc;
}

/* Blink/WebKit/Edge n'ont pas de préfixe */
input:read-only {
  background-color: #ccc;
}
```

> **Note :** Ce sélecteur ne permet pas de cibler que les éléments {{HTMLElement("input")}} ou {{HTMLElement("textarea")}} avec {{htmlattrxref("readonly", "input")}}. Il permet de sélectionner n'importe quel élément qui ne peut pas être édité par l'utilisateur.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
input { min-width: 25em; }
input:-moz-read-only { background: cyan; }
input:read-only { background: cyan; }

p:-moz-read-only { background: lightgray; }
p:read-only { background: lightgray; }
p[contenteditable="true"] { color: blue; }
```

### HTML

```html
<input type="text" value="Un champ en lecture seule" readonly />
<p contenteditable="true">
  Essayez un peu d'éditer ce paragraphe.
</p>
<p>
  Bonne chance pour celui-là !
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                        | État                                 | Commentaires                                                                  |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-read-only', ':read-only')}} | {{Spec2('HTML WHATWG')}}     | Aucune modification.                                                          |
| {{SpecName('HTML5 W3C', '#selector-read-only', ':read-only')}} | {{Spec2('HTML5 W3C')}}         | Définition de la sémantique relative à HTML et aux contraintes de validation. |
| {{SpecName('CSS4 Selectors', '#rw-pseudos', ':read-only')}}     | {{Spec2('CSS4 Selectors')}} | Définition de la pseudo-classe mais pas de la sémantique associée.            |

## Compatibilité des navigateurs

{{Compat("css.selectors.read-only")}}

## Voir aussi

- {{cssxref(":read-write")}}
- L'attribut HTML {{htmlattrxref("contenteditable")}}
