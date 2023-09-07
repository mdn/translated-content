---
title: ":any-link"
slug: Web/CSS/:any-link
---

{{CSSRef}}

La pseudo-classe **`:any-link`** permet de représenter un élément qui agit comme la source de l'ancre d'un hyperlien (qu'il ait été visité ou non). Elle permet donc de cibler les éléments {{HTMLElement("a")}}, {{HTMLElement("area")}} ou {{HTMLElement("link")}} avec un attribut `href`. Autrement dit, elle cible les éléments qui correspondent à {{cssxref(":link")}} ou à {{cssxref(":visited")}}.

```css
/* cible tous les éléments qui seraient ciblés par */
/* :link ou :visited */
:any-link {
  color: green;
  font-weight: bold;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
:any-link {
  color: green;
  font-weight: bold;
}

/* Pour les navigateurs WebKit */
:-webkit-any-link {
  color: green;
  font-weight: bold;
}
```

### HTML

```html
<a href="https://mozilla.org">Une page différente</a><br />
<a href="#">Une ancre</a><br />
<a>Un lien sans cible (n'est pas mis en forme)</a>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
