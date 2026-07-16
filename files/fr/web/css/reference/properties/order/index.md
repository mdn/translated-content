---
title: Propriété CSS `order`
short-title: order
slug: Web/CSS/Reference/Properties/order
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`order`** définit l'ordre dans lequel un élément est disposé dans un conteneur flexible ou une grille. Les éléments d'un conteneur sont triés par valeur croissante de `order`, puis par leur ordre dans le code source. Les éléments auxquels aucune valeur explicite de `order` n'est attribuée reçoivent la valeur par défaut de `0`.

{{InteractiveExample("Démonstration CSS&nbsp;: order")}}

```css interactive-example-choice
order: 0;
```

```css interactive-example-choice
order: 3;
```

```css interactive-example-choice
order: -1;
```

```css interactive-example-choice
order: 2;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Boîte 1&nbsp;:</div>
  <div style="order: 1">Boîte 2&nbsp;: <code>order: 1;</code></div>
  <div style="order: 2">Boîte 3&nbsp;: <code>order: 2;</code></div>
  <div style="order: 2">Boîte 4&nbsp;: <code>order: 2;</code></div>
  <div style="order: 3">Boîte 5&nbsp;: <code>order: 3;</code></div>
</section>
```

```css interactive-example
.default-example {
  max-height: 300px;
  display: flex;
  flex-flow: column;
}

.default-example > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 0.5rem;
  padding: 0.5rem;
  flex: 1;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}

#example-element::after {
  content: attr(style);
  outline: 2px dashed;
  font-family: monospace;
}
```

Dans la démonstration ci-dessus, sélectionnez les options sur le côté gauche pour changer la valeur de la propriété `order` de la boîte rose. Les boîtes bleu clair ont des valeurs `order` fixes.

Gardez à l'esprit l'effet de l'ordre dans le code source. Par exemple, lorsque `order: 2;` est sélectionné, la boîte rose est placée avant les deux boîtes bleues avec `order: 2;`. Cela est dû au fait que la boîte rose apparaît avant les boîtes bleues dans le code source.

## Syntaxe

```css
/* Valeurs de type <integer> */
order: 5;
order: -5;

/* Valeurs globales */
order: inherit;
order: initial;
order: revert;
order: revert-layer;
order: unset;
```

Puisque `order` est uniquement destiné à affecter _l'ordre visuel_ des éléments et non leur ordre logique ou de tabulation, il ne doit pas être utilisé sur des médias non visuels tels que la [voix <sup>(angl.)</sup>](https://drafts.csswg.org/css-speech/).

Défini dans le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display), cette propriété n'affecte que les éléments de grille et flexible. Lorsque `order` est défini sur un élément dont la propriété {{CSSxRef("display")}} du parent ne crée pas un conteneur flex ou grille, il n'a aucun effet.

### Valeurs

- {{CSSxRef("&lt;integer&gt;")}}
  - : Représente le groupe d'ordres à utiliser pour l'élément.

## Accessibilité

L'utilisation de la propriété `order` crée une déconnexion entre la présentation visuelle du contenu et l'ordre du DOM. Cela affectera négativement les utilisateur·ice·s malvoyant·e·s naviguant à l'aide de technologies d'assistance telles qu'un lecteur d'écran. Si l'ordre visuel diffère de l'ordre du DOM, vos utilisateur·ice·s auront des expériences différentes en fonction de la manière dont ils accèdent à votre contenu.

- [Les boîtes flexibles & la déconnexion de la navigation au clavier <sup>(angl.)</sup>](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) sur Tink (2016)
- [L'ordre du code source importe <sup>(angl.)</sup>](https://adrianroselli.com/2015/09/source-order-matters.html) par Adrian Roselli (2015)
- [Comprendre le WCAG, explications de la règle 1.3](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.3_—_créer_du_contenu_pouvant_être_présenté_de_différentes_façons)
- [Comprendre le critère de succès 1.3.2 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ordonner les éléments dans un conteneur flexible

Dans cet exemple, nous créons une disposition classique à deux barres latérales.

#### HTML

Nous incluons un en-tête, un pied de page et une zone de contenu principale. La zone de contenu principale comprend un article et deux barres latérales. Notez leur ordre&nbsp;! Nous utiliserons la propriété CSS `order` pour modifier leur ordre visuel.

```html
<header>En-tête</header>
<main>
  <article>Article</article>
  <nav>Navigation</nav>
  <aside>Barre latérale</aside>
</main>
<footer>Pied de page</footer>
```

#### CSS

Nous mettons en forme la zone principale en utilisant les fonctionnalités du module [de mise en page flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout)&nbsp;; en définissant {{CSSxRef("display")}} sur `flex`, l'élément HTML {{HTMLElement("main")}} devient un conteneur flex. Par défaut, cela crée des éléments flex de taille verticale égale. Les barres latérales reçoivent toutes deux une {{CSSxRef("width")}} absolue, tandis que l'élément HTML {{HTMLElement("article")}} consommera tout [l'espace libre positif](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#espace_libre_positif_et_négatif) avec un facteur {{CSSxRef("flex-grow")}} défini via le raccourci {{CSSxRef("flex")}}.

Nous définissons ensuite différentes valeurs de la propriété `order` sur chacun des trois enfants du conteneur flex&nbsp;; cela signifie que le CSS définit l'ordre visuel de ce composant plutôt que l'ordre dans lequel il apparaît dans le HTML.

```css
main {
  display: flex;
  text-align: center;
}
main > article {
  flex: 1;
  order: 2;
}
main > nav {
  width: 200px;
  order: 1;
}
main > aside {
  width: 200px;
  order: 3;
}
```

#### Résultat

{{EmbedLiveSample("Ordonner les éléments dans un conteneur flexible")}}

L'élément `<article>` apparaît en premier dans l'ordre source mais est visuellement rendu au centre.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [La disposition en grille et l'accessibilité](/fr/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)
- L'entrée de glossaire {{Glossary("Reading order", "Ordre de lecture")}}
