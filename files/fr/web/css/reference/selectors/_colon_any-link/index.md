---
title: :any-link
slug: Web/CSS/Reference/Selectors/:any-link
original_slug: Web/CSS/:any-link
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:any-link`** permet de représenter un élément qui agit comme la source de l'ancre d'un hyperlien (qu'il ait été visité ou non). Elle permet donc de cibler les éléments {{HTMLElement("a")}}, {{HTMLElement("area")}} ou {{HTMLElement("link")}} avec un attribut `href`. Autrement dit, elle cible les éléments qui correspondent à {{cssxref(":link")}} ou à {{cssxref(":visited")}}.

{{InteractiveExample("Démontrastion CSS&nbsp;: :any-link", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:any-link {
  color: forestgreen;
  text-decoration-color: hotpink;
}
```

```html interactive-example
<p>Pages que vous avez peut-être consultées&nbsp;</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/fr/">MDN Web Docs</a>
  </li>
  <li>
    <a href="https://www.youtube.com/YouTube">YouTube</a>
  </li>
</ul>
<p>Pages peu susceptibles d'être dans votre historique&nbsp;:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/missing-3">Page MDN aléatoire</a>
  </li>
  <li>
    <a href="https://example.fr/missing-3">Page d'exemple aléatoire</a>
  </li>
</ul>
```

## Syntaxe

```css
:any-link {
  /* ... */
}
```

## Exemples

### HTML

```html
<a href="https://mozilla.org">Une page différente</a><br />
<a href="#">Une ancre interne</a><br />
<a>Un lien sans cible (n'est pas mis en forme)</a>
```

### CSS

```css
a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* Pour les navigateurs WebKit */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## See also

- [Création d'hyperliens](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links)
- Associé aux éléments HTML&nbsp;: {{HTMLElement("a")}} et {{HTMLElement("area")}} avec un attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href)
- Sélecteurs CSS associés&nbsp;:
  - {{cssxref(":visited")}}
  - {{cssxref(":link")}}
