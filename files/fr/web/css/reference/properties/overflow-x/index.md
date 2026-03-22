---
title: overflow-x
slug: Web/CSS/Reference/Properties/overflow-x
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`overflow-x`** définit ce qui s'affiche lorsque le contenu dépasse les bords gauche et droit d'un élément de niveau bloc. Cela peut être rien, une barre de défilement ou le contenu débordant. Cette propriété peut également être définie en utilisant la propriété raccourcie {{CSSxRef("overflow")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: overflow-x")}}

```css interactive-example-choice
overflow-x: visible;
```

```css interactive-example-choice
overflow-x: hidden;
```

```css interactive-example-choice
overflow-x: clip;
```

```css interactive-example-choice
overflow-x: scroll;
```

```css interactive-example-choice
overflow-x: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    La valeur de Pi est 3,1415926535897932384626433832795029. La valeur de e est
    2,7182818284590452353602874713526625.
  </div>
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
overflow-x: visible;
overflow-x: hidden;
overflow-x: clip;
overflow-x: scroll;
overflow-x: auto;

/* Valeurs globales */
overflow-x: inherit;
overflow-x: initial;
overflow-x: revert;
overflow-x: revert-layer;
overflow-x: unset;
```

La propriété `overflow-x` est définie avec une seule valeur de mot-clé {{CSSxRef("overflow_value", "&lt;overflow&gt;")}}.

Si {{CSSxRef("overflow-y")}} est `hidden`, `scroll` ou `auto`, et que la propriété `overflow-x` est `visible` (par défaut), la valeur sera calculée implicitement comme `auto`.

### Valeurs

- `visible`
  - : Le contenu débordant n'est pas rogné et peut être visible en dehors du remplissage de la boîte de l'élément sur les bords gauche et droit. La boîte de l'élément n'est pas un {{Glossary("scroll container", "conteneur de défilement")}}.
- `hidden`
  - : Le contenu débordant est rogné si nécessaire pour tenir horizontalement dans le remplissage de la boîte de l'élément. Aucune barre de défilement n'est fournie.
- `clip`
  - : Le contenu débordant est rogné au niveau du _bord de rognage du dépassement_ qui est défini à l'aide de la propriété {{CSSxRef("overflow-clip-margin")}}. En conséquence, le contenu déborde du remplissage de la boîte de l'élément de la valeur {{CSSxRef("&lt;length&gt;")}} de `overflow-clip-margin` ou de `0px` si elle n'est pas définie. La différence entre `clip` et `hidden` est que le mot-clé `clip` interdit également tout défilement, y compris le défilement programmatique. Aucun nouveau contexte de formatage n'est créé. Pour établir un contexte de formatage, utilisez `overflow: clip` avec {{CSSxRef("display", "display: flow-root", "#flow-root")}}. La boîte de l'élément n'est pas un contenant de défilement.
- `scroll`
  - : Le contenu débordant est rogné si nécessaire pour tenir horizontalement dans le remplissage de la boîte de l'élément. Les navigateurs affichent des barres de défilement dans la direction horizontale, que du contenu soit effectivement rogné ou non. (Cela empêche les barres de défilement d'apparaître ou de disparaître lorsque le contenu change.) Les imprimantes peuvent tout de même imprimer le contenu débordant.
- `auto`
  - : Le contenu débordant est rogné au niveau du remplissage de la boîte de l'élément, et le contenu débordant peut être défilé pour être affiché. Contrairement à `scroll`, les agents utilisateurs affichent des barres de défilement _uniquement si_ le contenu déborde et masquent les barres de défilement par défaut. Si le contenu tient dans le remplissage de la boîte de l'élément, cela ressemble à `visible`, mais crée tout de même un nouveau contexte de formatage de bloc. Les navigateurs de bureau fournissent des barres de défilement si le contenu déborde.

> [!NOTE]
> La valeur de mot-clé `overlay` est une valeur d'alias héritée pour `auto`. Avec `overlay`, les barres de défilement sont dessinées au-dessus du contenu au lieu de prendre de la place.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<ul>
  <li>
    <code>overflow-x:hidden</code> — cache le texte en dehors de la boîte
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:scroll</code> — ajoute toujours un ascenseur
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:visible</code> — affiche le texte en dehors de la boîte si
    besoin
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:auto</code> — sur la plupart des navigateurs, cela sera
    équivalent à <code>scroll</code>
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>
</ul>
```

### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-x: hidden;
}
#div2 {
  overflow-x: scroll;
}
#div3 {
  overflow-x: visible;
}
#div4 {
  overflow-x: auto;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 270)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("clip")}}, {{CSSxRef("display")}}, {{CSSxRef("text-overflow")}}, {{CSSxRef("white-space")}}
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Apprendre&nbsp;: Contenu débordant](/fr/docs/Learn_web_development/Core/Styling_basics/Overflow)
