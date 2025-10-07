---
title: "HTMLImageElement : propriété useMap"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{APIRef("HTML DOM")}}

La propriété **`useMap`** de l'interface {{domxref("HTMLImageElement")}} reflète la valeur de l'attribut {{Glossary("HTML")}} [`usemap`](/fr/docs/Web/HTML/Reference/Elements/img#usemap), qui est une chaîne de caractères fournissant le nom de la carte d'image côté client à appliquer à l'image.

## Valeur

Une chaîne de caractères fournissant l'URL locale à la page (c'est-à-dire une URL qui commence par le symbole dièse, `#`) de l'élément HTML {{HTMLElement("map")}} qui définit la carte d'image à appliquer à l'image.

Vous pouvez en apprendre davantage sur les cartes d'image côté client dans notre article d'apprentissage [Ajouter une carte d'image sur une image](/fr/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Notes d'utilisation

La valeur de chaîne de caractères de `useMap` doit être une ancre valide pour un élément HTML {{HTMLElement("map")}}. En d'autres termes, cette chaîne doit être la valeur de l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/map#name) de l'élément `<map>` approprié, précédée du symbole dièse.

Considérez un élément `<map>` qui ressemble à ceci&nbsp;:

```html
<map name="mainmenu-map">
  <area
    shape="circle"
    coords="25, 25, 75"
    href="/index.html"
    alt="Retour à la page d'accueil" />
  <area
    shape="rect"
    coords="25, 25, 100, 150"
    href="/index.html"
    alt="Boutique" />
</map>
```

Étant donné la carte d'image nommée `mainmenu-map`, l'image qui l'utilise devrait ressembler à ceci&nbsp;:

```html
<img src="menubox.png" usemap="#mainmenu-map" />
```

Pour d'autres exemples (y compris interactifs), voir les articles sur les éléments {{HTMLElement("map")}} et {{HTMLElement("area")}}, ainsi que le [guide d'utilisation des cartes d'image](/fr/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Exemples

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="API Web" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="Infographie MDN" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
