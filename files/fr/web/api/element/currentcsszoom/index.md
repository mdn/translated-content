---
title: "Element : propriété currentCSSZoom"
short-title: currentCSSZoom
slug: Web/API/Element/currentCSSZoom
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

La propriété en lecture seule **`currentCSSZoom`** de l'interface {{DOMxRef("Element")}} fournit le [`zoom` CSS](/fr/docs/Web/CSS/Reference/Properties/zoom) «&nbsp;effectif&nbsp;» d'un élément, en tenant compte du zoom appliqué à l'élément et à tous ses éléments parents.

La valeur est calculée en multipliant les valeurs CSS `zoom` de l'élément et de tous ses éléments parents.
Par exemple, si trois éléments avec des valeurs de zoom de 2, 1,5 et 3 sont imbriqués les uns dans les autres, l'élément le plus profondément imbriqué a une valeur `currentCSSZoom` de 9.
Si l'élément n'a pas de boîte CSS, par exemple parce que `display: none` est appliqué à l'élément ou à l'un de ses parents, alors `currentCSSZoom` est défini sur 1.

Notez que certaines méthodes, telles que {{DOMxRef("Element.getBoundingClientRect()")}}, retournent des dimensions et des positions relatives à la fenêtre d'affichage, et incluent donc les effets du zoom CSS.
D'autres propriétés et méthodes retournent des valeurs relatives à l'élément lui-même, et n'incluent pas les effets du zoom.
Cela inclut, par exemple, les propriétés `client*` telles que {{DOMxRef("Element.clientHeight")}}, les méthodes `scroll*()` comme {{DOMxRef("Element.scroll()")}}, et les propriétés `offset*` telles que {{DOMxRef("HTMLElement.offsetHeight")}}.
La propriété `currentCSSZoom` peut être utilisée pour mettre à l'échelle ces valeurs afin de compenser les effets du zoom.

## Valeur

Un nombre indiquant le zoom CSS effectif sur l'élément, ou 1 si l'élément n'est pas rendu.

## Exemples

Cet exemple montre comment la propriété `currentCSSZoom` est calculée.

Tout d'abord, nous définissons une structure imbriquée d'éléments `<div>` où le `"parent"` n'a pas de zoom et contient un élément imbriqué `"enfant1"` auquel `zoom: 2` est appliqué, qui à son tour contient un élément imbriqué `"enfant2"` avec `zoom: 3` appliqué.
L'élément `"enfant2"` contient deux éléments imbriqués, dont l'un n'est pas rendu, et aucun des deux n'a la propriété de zoom appliquée.

```html
<div id="parent">
  parent
  <div style="zoom: 2" id="enfant1">
    enfant1 (zoom: 2)
    <div style="zoom: 3" id="enfant2">
      enfant2 (zoom: 3)
      <div id="enfant3-rendu">enfant3-rendu</div>
      <div style="display: none" id="enfant3-non-rendu">enfant3-non-rendu</div>
    </div>
  </div>
</div>
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 95px;
  overflow: scroll;
  margin: 10px;
  border: 1px solid black;
}
```

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

Le code JavaScript journalise la valeur de zoom appliquée à chaque niveau ainsi que sa valeur `currentCSSZoom`.

```js
if ("currentCSSZoom" in Element.prototype) {
  const parent = document.querySelector("#parent");
  journaliser(`parent (sans zoom). currentCSSZoom: ${parent.currentCSSZoom}`);
  const enfant1 = document.querySelector("#enfant1");
  journaliser(`enfant1 (zoom: 2). currentCSSZoom: ${enfant1.currentCSSZoom}`);
  const enfant2 = document.querySelector("#enfant2");
  journaliser(`enfant2 (zoom: 3). currentCSSZoom: ${enfant2.currentCSSZoom}`);
  const enfant3Rendu = document.querySelector("#enfant3-rendu");
  journaliser(
    `enfant3-rendu (sans zoom). currentCSSZoom: ${enfant3Rendu.currentCSSZoom}`,
  );
  const enfant3NonRendu = document.querySelector("#enfant3-non-rendu");
  journaliser(
    `enfant3-non-rendu (non rendu). currentCSSZoom: ${enfant3NonRendu.currentCSSZoom}`,
  );
} else {
  journaliser(
    "Element.currentCSSZoom n'est pas pris en charge dans ce navigateur.",
  );
}
```

La structure `<div>` rendue résultante et le journal sont affichés ci-dessous.
Notez d'abord que le parent, enfant1 et enfant2 ont des niveaux de zoom de 1, 2 et 3, respectivement, et se rendent à 1, 2 et 6 fois la taille du texte parent.
Ceci est reflété par les valeurs `currentCSSZoom` enregistrées.

Le `<div>` avec un id `enfant3-rendu` n'a pas de `zoom` défini mais hérite de la valeur `currentCSSZoom` de 6 comme indiqué dans le journal.
Le dernier `<div>` n'est pas rendu et a donc une valeur `currentCSSZoom` de 1.

{{EmbedLiveSample("Exemples", "100%", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le `zoom` CSS](/fr/docs/Web/CSS/Reference/Properties/zoom)
