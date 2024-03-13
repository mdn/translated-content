---
title: ":not"
slug: Web/CSS/:not
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) de négation, **`:not()`**, est une notation fonctionnelle qui prend un sélecteur comme argument. Elle permet de cibler les éléments qui ne sont pas représentés par cet argument. Le sélecteur passé en argument ne doit pas contenir d'autre sélecteur de négation et ne doit pas cibler de pseudo-élément.

```css
/* Sélectionne n'importe quel élément qui n'est */
/* pas un paragraphe */
:not(p) {
  color: blue;
}
```

La [spécificité](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) de la pseudo-classe `:not` est la spécificité de son argument. La pseudo-classe de négation n'ajoute pas de spécificité, contrairement aux autres pseudo-classes.

> **Note :**
>
> - Attention à ne pas écrire de sélecteurs inutiles à l'aide de cette pseudo-classe. Ainsi, `:not(*)` va exclure tous les éléments et ne sera jamais appliqué.
> - À l'inverse, il est possible d'augmenter la [spécificitié](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) d'un sélecteur. Ainsi. `toto:not(truc)` ciblera les mêmes éléments que `toto`, mais avec une spécificité plus forte.
> - `:not(toto){}` ciblera tout élément qui n'est pas `toto`, **notamment {{HTMLElement("html")}} et {{HTMLElement("body")}}**.
> - Ce sélecteur ne s'applique qu'à un seul élément. Il ne peut pas être utilisé afin d'exclure tous les ancêtres. Ainsi, `body :not(table) a` s'appliquera aux liens contenus dans un tableau car {{HTMLElement("tr")}} ne sera pas ciblé par la partie `:not()` du sélecteur.

## Syntaxe

La pseudo-classe `:not()` prend en argument une liste d'un ou plusieurs sélecteurs séparés par des virgules. Cette liste ne doit pas contenir d'autre sélecteur de négation ou [de pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements).

> **Attention :** la possibilité d'avoir plusieurs sélecteurs est expérimentale et n'est pas encore largement prise en charge.

{{csssyntax}}

## Exemples

### CSS

```css
/* Contient tous les paragraphes (p) sauf
   ceux avec le sélecteur de class "classy" */
p:not(.classy) {
  color: red;
}

/* Les balises p sont exclues */
/* Attention, il est nécessaire d'avoir un      */
/* combinateur. On ne peut pas écrire ':not(p)' */
*:not(p) {
  color: green;
}

/* Les éléments qui ne sont pas des paragraphes */
/* et qui n'ont pas la classe "classy" */
/* Note : cette syntaxe n'est pas bien supportée */
body :not(.classy, p) {
  font-family: sans-serif;
}
```

### HTML

```html
<p>Un peu de texte.</p>
<p class="classy">Encore du texte.</p>
<span> Et toujours du texte. </span>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
