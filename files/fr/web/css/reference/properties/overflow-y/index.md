---
title: Propriété CSS `overflow-y`
short-title: overflow-y
slug: Web/CSS/Reference/Properties/overflow-y
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`overflow-y`** définit ce qui s'affiche lorsque le contenu dépasse les bords supérieur et inférieur d'un élément de niveau bloc. Cela peut être rien, une barre de défilement ou le contenu débordant. Cette propriété peut également être définie en utilisant la propriété raccourcie {{CSSxRef("overflow")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: overflow-y")}}

```css interactive-example-choice
overflow-y: visible;
```

```css interactive-example-choice
overflow-y: hidden;
```

```css interactive-example-choice
overflow-y: clip;
```

```css interactive-example-choice
overflow-y: scroll;
```

```css interactive-example-choice
overflow-y: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    Le trimestre de la Saint-Michel vient de s'achever, et le Lord Chancelier
    siège à Lincoln's Inn Hall. Le temps de novembre est implacable. Il y a
    autant de boue dans les rues que si les eaux venaient à peine de se retirer
    de la surface de la terre.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 15em;
  height: 9em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow-y: visible;
overflow-y: hidden;
overflow-y: clip;
overflow-y: scroll;
overflow-y: auto;

/* Valeurs globales */
overflow-y: inherit;
overflow-y: initial;
overflow-y: revert;
overflow-y: revert-layer;
overflow-y: unset;
```

La propriété `overflow-y` est définie avec une seule valeur de mot-clé {{CSSxRef("overflow_value", "&lt;overflow&gt;")}}.

Si {{CSSxRef("overflow-x")}} est `hidden`, `scroll` ou `auto`, et que la propriété `overflow-y` est `visible` (par défaut), la valeur sera calculée implicitement comme `auto`.

### Valeurs

- `visible`
  - : Le contenu débordant n'est pas rogné et peut être visible en dehors du remplissage de la boîte de l'élément sur les bords supérieur et inférieur. La boîte de l'élément n'est pas un {{Glossary("scroll container", "conteneur de défilement")}}.
- `hidden`
  - : Le contenu débordant est rogné si nécessaire pour tenir verticalement dans le remplissage de la boîte de l'élément. Aucune barre de défilement n'est fournie.
- `clip`
  - : Le contenu débordant est rogné au niveau du _bord de rognage du dépassement_ qui est défini à l'aide de la propriété {{CSSxRef("overflow-clip-margin")}}. En conséquence, le contenu déborde du remplissage de la boîte de l'élément de la valeur {{CSSxRef("&lt;length&gt;")}} de `overflow-clip-margin` ou de `0px` si elle n'est pas définie. La différence entre `clip` et `hidden` est que le mot-clé `clip` interdit également tout défilement, y compris le défilement programmatique. Aucun nouveau contexte de formatage n'est créé. Pour établir un contexte de formatage, utilisez `overflow: clip` avec {{CSSxRef("display", "display: flow-root", "#flow-root")}}. La boîte de l'élément n'est pas un contenant de défilement.
- `scroll`
  - : Le contenu débordant est rogné si nécessaire pour tenir verticalement dans le remplissage de la boîte de l'élément. Les navigateurs affichent des barres de défilement dans la direction verticale, que du contenu soit effectivement rogné ou non. (Cela empêche les barres de défilement d'apparaître ou de disparaître lorsque le contenu change.) Les imprimantes peuvent tout de même imprimer le contenu débordant.
- `auto`
  - : Le contenu débordant est rogné au niveau du remplissage de la boîte de l'élément, et le contenu débordant peut être défilé pour être affiché. Contrairement à `scroll`, les agents utilisateurs affichent des barres de défilement _uniquement si_ le contenu déborde et masquent les barres de défilement par défaut. Si le contenu tient dans le remplissage de la boîte de l'élément, cela ressemble à `visible`, mais crée tout de même un nouveau contexte de formatage de bloc.

> [!NOTE]
> La valeur de mot-clé `overlay` est une valeur d'alias héritée pour `auto`. Avec `overlay`, les barres de défilement sont dessinées au-dessus du contenu au lieu de prendre de la place.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le comportement de `overflow-y`

#### HTML

```html
<ul>
  <li>
    <code>overflow-y: hidden</code> — cache le texte en dehors de la boîte
    <div id="div1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y: scroll</code> — ajoute toujours un ascenseur
    <div id="div2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y: visible</code> — affiche le texte en dehors de la boîte si
    besoin
    <div id="div3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y: auto</code> — sur la plupart des navigateurs, cela sera
    équivalent à <code>scroll</code>
    <div id="div4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

#### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  height: 100px;
}

#div1 {
  overflow-y: hidden;
  margin-bottom: 12px;
}
#div2 {
  overflow-y: scroll;
  margin-bottom: 12px;
}
#div3 {
  overflow-y: visible;
  margin-bottom: 120px;
}
#div4 {
  overflow-y: auto;
  margin-bottom: 120px;
}
```

#### Résultat

{{EmbedLiveSample("Définir le comportement de `overflow-y`", "100%", 780)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("clip")}}, {{CSSxRef("display")}}, {{CSSxRef("text-overflow")}}, {{CSSxRef("white-space")}}
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Apprendre&nbsp;: Contenu débordant](/fr/docs/Learn_web_development/Core/Styling_basics/Overflow)
