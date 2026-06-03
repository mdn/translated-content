---
title: "HTMLLinkElement : propriété hreflang"
short-title: hreflang
slug: Web/API/HTMLLinkElement/hreflang
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{APIRef("HTML DOM")}}

La propriété **`hreflang`** de l'interface {{domxref("HTMLLinkElement")}} est utilisée pour indiquer la langue et la zone géographique ciblée d'une page. Cette indication peut être utilisée par les navigateurs pour sélectionner la page la plus appropriée ou pour améliorer le {{Glossary("SEO", "référencement naturel")}}.

Elle reflète l'attribut `hreflang` de l'élément HTML {{HTMLElement("link")}} et vaut la chaîne de caractères vide (`""`) s'il n'y a pas d'attribut `hreflang`.

## Valeur

Une chaîne de caractères contenant une balise de langue, ou la chaîne de caractères vide (`""`) s'il n'y a pas d'attribut `hreflang`.

## Exemple

```html
<link
  rel="alternate"
  href="www.example.com/fr/html"
  hreflang="fr"
  type="text/html"
  title="French HTML" />
<p class="tag"></p>
```

```css
.tag {
  margin-left: 20px;
  font-weight: bold;
  font-size: 24px;
}
```

```js
const myLink = document.querySelector("link");
const pTag = document.querySelector(".tag");
pTag.textContent = myLink.hreflang;
```

## Résultat

{{EmbedLiveSample("exemple", 100, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLAnchorElement.hreflang")}}
