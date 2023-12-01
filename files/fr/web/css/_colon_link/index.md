---
title: ":link"
slug: Web/CSS/:link
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:link`** permet de sélectionner les liens à l'intérieur d'éléments. Elle sélectionnera tout lien n'ayant pas été visité, même ceux qui seraient déjà mis en forme via des sélecteurs utilisant d'autres pseudo-classes comme {{cssxref(":hover")}}, {{cssxref(":active")}} ou {{cssxref(":visited")}}.

```css
/* Cible les liens qui n'ont pas encore */
/* été visités */
a:link {
  color: red;
}
```

Afin que la mise en forme s'applique au mieux, la règle `:link` doit être placée avant les autres : `:link` — `:visited` — `:hover` — `:active`. La pseudo-classe {{cssxref(":focus")}} est habituellement placée juste avant ou juste après `:hover`, en fonction de l'effet désiré.

> **Note :** On utilisera {{cssxref(":any-link")}} pour sélectionner un élément qu'il ait été visité ou non.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
a:link {
  color: red;
}

.external:link {
  background-color: lightblue;
}
```

### HTML

```html
<p>
  Et si on allait voir
  <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/">
    un peu de JavaScript ?
  </a>
</p>
<p>
  Sinon, on peut continuer à se cultiver sur CSS autre part
  <a class="external" href="https://css-tricks.com/"> comme CSS Tricks. </a>
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":link")}}
- {{cssxref(":visited")}}
- {{cssxref(":hover")}}
- {{cssxref(":active")}}.
