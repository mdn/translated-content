---
title: display-outside
slug: Web/CSS/display-outside
---

{{CSSRef}}

Les mots-clés de type `<display-outside>` définissent le mode de disposition extérieure de l'élément. Autrement dit, ces mots-clés précisent le rôle de l'élément dans le flux. Ces valeurs peuvent être utilisées pour la propriété `display`. La syntaxe historique (avant CSS 3) prendra une seule valeur et la nouvelle syntaxe combinera cette valeur avec une valeur {{CSSxRef("&lt;display-inside&gt;")}}.

## Syntaxe

Une valeur `<display-outside>` peut être l'un des mots-clés suivants.

### Valeurs

- `block`
  - : L'élément génère une boîte de bloc ce qui ajoute des passages à la ligne avant et après l'élément dans le flux normal.
- `inline`
  - : L'élément génère une ou plusieurs boîtes en lignes qui n'ajoutent pas de passages à la ligne avant ou après. Dans un flux normal, le prochain élément sera sur la même ligne si l'espace le permet.
- `run-in` {{Experimental_Inline}}

  - : L'élément génère une boîte « _run-in_ ». Si le voisin adjacent à l'élément est une boîte de bloc, la boîte `run-in` devient la première boîte en ligne qui suit cette boîte de bloc.

    Les éléments _run-in_ se comportent comme des éléments de bloc ou en ligne selon les éléments environnants. Autrement dit, si la boîte _run-in_ contient une boîte de bloc, l'élément se comportera comme un bloc. Si la boîte de bloc suit une boîte _run-in_, la boîte _run-in_ deviendra la première boîte en ligne de la boîte de bloc. Si une boîte en ligne succède à l'élément, la boîte _run-in_ deviendra une boîte de bloc.

> **Note :** Browsers that support the two value syntax, on finding the outer value only, such as when `display: block` or `display: inline` is specified, will set the inner value to `flow`. This will result in expected behavior; for example if you specify an element to be block, you would expect that the children of that element would participate in block and inline normal flow layout.
>
> **Note :** Les navigateurs qui prennent en charge la syntaxe avec deux valeurs utiliseront la valeur par défaut `flow` pour le mode intérieur si `display: block` ou `display: inline`. On a ainsi le résultat attendu (si on souhaite qu'un élément se comporte comme un bloc, on s'attend à ce que les éléments fils de cet élément contribuent à la disposition normale en bloc et en ligne).

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans l'exemple suivant, les éléments {{HTMLElement("span")}}, normalement affichés comme des éléments en ligne, sont paramétrés avec `display: block` et passent à la ligne en étendant leur conteneur selon l'axe en ligne.

### CSS

```css
span {
  display: block;
  border: 1px solid rebeccapurple;
}
```

### HTML

```html
<span>span 1</span> <span>span 2</span>
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 60)}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Block and Inline layout in Normal Flow](/fr/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Formatting Contexts explained](/fr/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
