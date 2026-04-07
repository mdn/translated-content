---
title: page
slug: Web/CSS/Reference/Properties/page
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`page`** est utilisée pour définir la page nommée, un type spécifique de page défini par la [règle](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@page")}}.

Si plusieurs sélecteurs utilisent une page nommée consécutivement, un saut de page forcé à l'aide de {{CSSxRef("break-after")}} peut être nécessaire.

## Syntaxe

```css
/* définir une page nommée */
page: nomExemple;
page: chapitreIntroduction;

/* Utiliser les pages nommées des ancêtres */
page: auto; /* valeur par défaut */

/* Valeurs globales */
page: inherit;
page: initial;
page: revert;
page: revert-layer;
page: unset;
```

### Valeurs

- `auto`
  - : La valeur par défaut. Utilise la valeur de l'ancêtre le plus proche avec une valeur différente de `auto`. Si aucun ancêtre n'a de valeur de page nommée définie, la valeur utilisée pour `auto` est la chaîne vide.
- {{CSSxRef("custom-ident")}}
  - : Un nom sensible à la casse défini dans une règle {{CSSxRef("@page")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple de page nommée

Dans cet exemple, il y a deux parties dans ce HTML&nbsp;; les contrôles d'impression et le contenu à imprimer.
Les contrôles d'impression permettent à l'utilisateur·ice de sélectionner comment les `section` dans un `article` seront imprimées.

```html live-sample___page-property
<!-- options d'impression dans une collection de champs -->
<fieldset id="printStyle">
  <legend>Comment souhaitez-vous imprimer</legend>
  <label for="single">
    <input type="radio" id="single" name="type" value="single" checked />
    Pas de pages
  </label>
  <label for="grouped">
    <input type="radio" id="grouped" name="type" value="grouped" />Pages avec
    des Chapitres groupés
  </label>
  <label for="paged">
    <input type="radio" id="paged" name="type" value="paged" />
    Chapitres paginés
  </label>
  <button id="print">Imprimer</button>
</fieldset>

<!-- Contenu à imprimer -->
<article id="print-area" data-print="single">
  <section id="toc">
    <h2>Table des matières</h2>
    <ul>
      <li>Avant-propos</li>
      <li>Introduction</li>
      <li>Chapitre Un - pages nommées</li>
      <li>Chapitre Deux - orientation de la page</li>
      <li>Chapitre Trois - marges de la page</li>
      <li>Conclusion</li>
    </ul>
  </section>
  <section id="foreword">
    <h2>Avant-propos</h2>
    <p>
      Ce livre explique comment la règle CSS <code>@page</code> peut aider à
      imprimer des livres HTML.
    </p>
  </section>
  <section id="introduction">
    <h2>Introduction</h2>
    <p>
      Ce livre est un concept pour montrer comment un document
      <em>HTML</em> peut être facilement imprimé en pages.
    </p>
  </section>
  <section id="chapter1" class="chapter">
    <h2>Pages nommées</h2>
    <p>Lorem ipsum</p>
  </section>
  <section id="chapter2" class="chapter">
    <h2>Orientation de la page</h2>
    <p>Lorem ipsum</p>
  </section>
  <section id="chapter3" class="chapter">
    <h2>Marges de la page</h2>
    <p>Il y a 16 marges de page qui peuvent être définies&nbsp;:</p>
    <ul>
      <li>@top-left-corner</li>
      <li>@top-left</li>
      <li>@top-center</li>
      <li>@top-right</li>
      <li>@top-right-corner</li>
      <li>@left-top</li>
      <li>@left-middle</li>
      <li>@left-bottom</li>
      <li>@right-top</li>
      <li>@right-middle</li>
      <li>@right-bottom</li>
      <li>@bottom-left-corner</li>
      <li>@bottom-left</li>
      <li>@bottom-center</li>
      <li>@bottom-right</li>
      <li>@bottom-right-corner</li>
    </ul>
    <p>
      Ils peuvent être utilisés pour afficher ce qui apparaît dans ces parties
      de la marge
    </p>
  </section>
  <section id="conclusion">
    <h2>Conclusion</h2>
    <p>Maintenant, allez-y et écrivez des livres.</p>
  </section>
</article>
```

La première partie du CSS configure les **pages nommées**, celles-ci incluent la taille et l'orientation ainsi que du contenu à placer dans la [marge `@top-center`](/fr/docs/Web/CSS/Reference/At-rules/@page#règles_de_marge) des pages imprimées.

```css live-sample___page-property
@page toc {
  size: a4 portrait;
  @top-center {
    content: "Table des matières";
  }
}

@page foreword {
  size: a4 portrait;
  @top-center {
    content: "Avant-propos";
  }
}

@page introduction {
  size: a4 portrait;
  @top-center {
    content: "Introduction";
  }
}

@page conclusion {
  size: a4 portrait;
  @top-center {
    content: "Conclusion";
  }
}

@page chapter {
  size: a4 landscape;
  @top-center {
    content: "Chapitre";
  }
}
```

```css hidden live-sample___page-property
fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
}
body {
  font: 1.1em sans-serif;
}
```

La partie suivante du CSS utilise des [sélecteurs d'attributs](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) pour appliquer les dimensions d'impression, l'orientation et les marges définies dans les règles `@page` nommées définies dans la section CSS précédente aux éléments utilisant la propriété `page`.
Les sections avec `class="chapter"` sont concurrentes et apparaissent comme une seule page.
La propriété `break-after: page;` est utilisée pour les séparer, ce qui divise chaque chapitre en une page imprimée distincte.

```css live-sample___page-property
@media print {
  fieldset {
    display: none;
  }
  section {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
  }
  .chapter {
    border: tomato 2px solid;
  }
  [data-print="grouped"] > #toc,
  [data-print="paged"] > #toc {
    page: toc;
    font-family: "Courier New";
  }
  [data-print="grouped"] > #foreword,
  [data-print="paged"] > #foreword {
    page: foreword;
    font-family: "Courier New";
  }
  [data-print="grouped"] > #introduction,
  [data-print="paged"] > #introduction {
    page: introduction;
    font-family: "Courier New";
  }
  [data-print="grouped"] > #conclusion,
  [data-print="paged"] > #conclusion {
    page: conclusion;
    font-family: "Courier New";
  }
  [data-print="grouped"] > .chapter,
  [data-print="paged"] > .chapter {
    page: chapter;
  }
  [data-print="paged"] > .chapter {
    border: none;
    break-after: page;
  }
  .chapter > ul {
    columns: 2;
  }
}
```

Le JavaScript met à jour la valeur de l'attribut `data-print`, qui est l'attribut sur lequel la page nommée est appliquée, lorsque vous sélectionnez une option d'impression différente&nbsp;:

```js live-sample___page-property
const zoneImpression = document.querySelector("#print-area");
const boutonImprimer = document.querySelector("#print");
const optionsImpression = document.querySelector("#printStyle");

optionsImpression.addEventListener("change", (event) => {
  if (event.target.value === "single") {
    zoneImpression.dataset.print = "single";
  } else if (event.target.value === "grouped") {
    zoneImpression.dataset.print = "grouped";
  } else {
    zoneImpression.dataset.print = "paged";
  }
});

boutonImprimer.addEventListener("click", () => {
  window.print();
});
```

Ce qui est imprimé et ce qui est affiché dans la boîte de dialogue d'aperçu avant impression changera en fonction du bouton radio de style d'impression sélectionné&nbsp;:

{{EmbedLiveSample("page-property", "100%", 540, , , , , "allow-modals")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
