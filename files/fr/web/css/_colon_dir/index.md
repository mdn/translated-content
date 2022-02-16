---
title: ':dir'
slug: Web/CSS/:dir
tags:
  - CSS
  - Experimental
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:dir
---
{{CSSRef}}{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:dir`** permet de cibler un élément selon la direction du texte qu'il contient. En HTML, la direction est définie grâce à l'attribut {{htmlattrxref("dir", "html")}}. Pour les autres types de document, cela peut être déterminé autrement.

```css
/* Cible le contenu avec du texte */
/* écrit de droite à gauche */
:dir(rtl) {
  background-color: red;
}
```

On notera que la pseudo-classe `:dir()` ne fonctionne pas de la même façon que le sélecteur d'attribut `[dir=…]`. Ce dernier utilise la valeur de l'attribut {{htmlattrxref("dir", "html")}} et il n'y a aucune correspondance lorsque l'attribut n'est pas défini (même si l'élément HTML hérite de la valeur de son élément parent). De la même façon `[dir=rtl]` ou `[dir=ltr]` ne pourront pas correspondre à la valeur `auto` qui peut être utilisée sur l'attribut `dir`. Au contraire, `:dir()` calculera la correspondance en fonction de la valeur utilisée par l'agent utilisateur (qu'elle soit héritée ou qu'elle vaille `auto`).

`:dir()` ne prend en compte que la valeur _sémantique_ de la direction, celle qui est définie par le document (la plupart du temps un document HTML). Elle ne tiendra pas compte de la direction liée à la mise en forme, purement stylistique, modifiée par des propriétés telles que {{cssxref("direction")}}.

## Syntaxe

La pseudo-classe `:dir()` nécessite un paramètre qui indique la direction du texte qu'on souhaite cibler

### Paramètres

- `direction`
  - : La direction du texte pour les éléments qu'on souhaite sélectionner. La valeur peut être `ltr` (texte écrit de gauche à droite) ou `rtl` (texte écrit de droite à gauche).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
:-moz-dir(rtl) {
  color: lime;
}

:dir(rtl) {
  color: lime;
}

:-moz-dir(ltr) {
  color: black;
}

:dir(ltr) {
  color: black;
}
```

### HTML

```html
<div dir="rtl">
  <span>test1</span>
  <div dir="ltr">test2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 70)}}

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('HTML WHATWG', 'scripting.html#selector-ltr', ':dir(ltr)')}} | {{Spec2('HTML WHATWG')}}     | Aucune modification. |
| {{SpecName('CSS4 Selectors', '#the-dir-pseudo', ':dir()')}}                 | {{Spec2('CSS4 Selectors')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.dir")}}

## Voir aussi

- {{cssxref(":lang")}}
- {{cssxref(":dir")}}
