---
title: ::after
slug: Web/CSS/Reference/Selectors/::after
original_slug: Web/CSS/::after
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::after`** crée un pseudo-élément qui sera le dernier enfant de l'élément ciblé. Généralement utilisé pour ajouter du contenu esthétique à un élément via la propriété CSS {{cssxref("content")}}. Par défaut, l'élément créé est de type en-ligne (<i lang="en">inline</i> en anglais).

{{InteractiveExample("Démonstration CSS&nbsp;: ::after", "tabbed-standard")}}

```css interactive-example
a::after {
  content: " (" attr(href) ")";
}

.dead-link {
  text-decoration: line-through;
}

.dead-link::after {
  content: url("/shared-assets/images/examples/warning.svg");
  display: inline-block;
  width: 12px;
  height: 12px;
}
```

```html interactive-example
<p>
  Le voilier tire son nom de sa nageoire dorsale en forme de voile et est
  largement considéré comme le poisson le plus rapide de l'océan.
  <a href="https://fr.wikipedia.org/wiki/Istiophorus"
    >Vous pouvez en lire plus à ce sujet ici</a
  >.
</p>

<p>
  Le poisson-lion rouge est un poisson scorpion prédateur qui vit sur les récifs
  coralliens de l'océan Indo-Pacifique et plus récemment dans l'Atlantique
  occidental.
  <a href="" class="dead-link">Vous pouvez en lire plus à ce sujet ici</a>.
</p>
```

> [!NOTE]
> Les pseudo-éléments générés par `::before` et `::after` sont [contenus dans la boîte de mise en forme de l'élément](https://www.w3.org/TR/CSS2/generate.html#before-after-content). Aussi, [`::before`](/fr/docs/Web/CSS/Reference/Selectors/::before) et `::after` ne s'appliquent pas aux _[éléments remplacés](/fr/docs/Web/CSS/Guides/Images/Replaced_element_properties)_ tels que les éléments [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img) ou [`<br>`](/fr/docs/Web/HTML/Reference/Elements/br).

## Syntaxe

```css-nolint
::after {
  content: /* valeur */;
  /* propriétés */
}
```

## Description

Le pseudo-élément `::after` est un bloc en ligne (<i lang="en">inline box</i> en anglais) générée en tant qu'enfant immédiat de l'élément auquel il est associé, ou l'«&nbsp;élément d'origine&nbsp;». Il est souvent utilisé pour ajouter du contenu esthétique à un élément via la propriété {{CSSxRef("content")}}, comme des icônes, des guillemets ou d'autres décorations.

Les pseudo-éléments `::after` ne peuvent pas être appliqués aux _{{ glossary("replaced elements", "éléments remplacés")}}_ tels que {{htmlelement("img")}}, dont le contenu est déterminé par des ressources externes et n'est pas affecté par les styles du document actuel.

Un pseudo-élément `::after` avec une valeur {{cssxref("display")}} de `list-item` se comporte comme un élément de liste et peut donc générer un pseudo-élément {{cssxref("::marker")}}, tout comme un élément {{htmlelement("li")}} le fait.

Si la propriété {{CSSxRef("content")}} n'est pas indiquée, contient une valeur invalide, vaut `normal`, ou vaut `none`, le pseudo-élément `::after` ne sera pas rendu à l'écran. Il se comportera comme si `display: none` avait été appliqué.

> [!NOTE]
> CSS a introduit la notation `::after` (avec deux deux-points) pour distinguer les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) des [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements). Les navigateurs acceptent aussi la notation `:after`, introduite précédemment, à des fins de rétro-compatibilité.

Par défaut, les pseudo-éléments `::before` et `::after` partagent le même contexte d'empilement que leur parent. Si aucun {{cssxref("z-index")}} n'est explicitement défini, le contenu généré par le pseudo-élément `::after` apparaîtra au-dessus du contenu généré par le pseudo-élément `::before` parce que `::after` est rendu plus tard dans le flux DOM.

## Accessibilité

Utiliser un pseudo-élément `::after` afin d'ajouter du contenu est déconseillé, car ce dernier n'est pas accessible de façon fiable pour les lecteurs d'écrans.

## Exemples

### Utilisation simple

Nous allons ici créer deux classes&nbsp;: une pour les paragraphes ennuyeux et une pour les intéressants. Nous marquerons ensuite chacun de ces paragraphes en ajoutant un pseudo-élément après chacun d'eux.

#### HTML

```html
<p class="texte-ennuyeux">Voici un peu de vieux texte ennuyeux ordinaire.</p>

<p>Voici un peu de texte normal qui n'est ni ennuyeux, ni intéressant.</p>

<p class="texte-interessant">Contribuer à MDN est facile et amusant.</p>
```

#### CSS

```css
.texte-interessant::after {
  content: "<- cela est intéressant";
  color: darkgreen;
  font-weight: bolder;
}

.texte-ennuyeux::after {
  content: "<- un peu ennuyeux";
  color: darkviolet;
  font-weight: bolder;
}
```

#### Résultat

{{EmbedLiveSample('utilisation_simple', 500, 150)}}

### Exemple décoratif

On peut mettre en forme du texte ou des images avec la propriété {{CSSxRef("content")}} à peu près de quelque manière que nous le voulions&nbsp;:

#### HTML

```html
<span class="ruban">Observez où se trouve la boîte orange.</span>
```

#### CSS

```css
.ruban {
  background-color: #5bc8f7;
}

.ruban::after {
  content: "Voyez cette boîte orange.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Résultat

{{EmbedLiveSample('exemple_décoratif', 450, 20)}}

### Bulles d'information

Dans l'exemple suivant, on illustre le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::after` avec l'expression CSS [`attr()`](/fr/docs/Web/CSS/Reference/Values/attr) et un attribut de données personnalisé `data-descr` afin de créer une bulle d'information de type glossaire en CSS, sans JavaScript.

On peut également aider les personnes qui naviguent au clavier avec cette technique, en ajoutant un `tabindex` de `0` pour faire un `span` focusable, et en utilisant la sélection `:focus`. Cela montre à quel point les options [`::before`](/fr/docs/Web/CSS/Reference/Selectors/::before) and `::after` peuvent être flexibles, bien que, pour l'expérience la plus accessible, un widget de divulgation sémantique créé d'une autre manière serait probablement plus approprié.

#### HTML

```html
<p>
  Voici l'exemple en action du code ci-dessus.<br />
  Nous avons un peu de
  <span tabindex="0" data-description="collection de mots et de ponctuation"
    >texte</span
  >
  ici avec quelques
  <span
    tabindex="0"
    data-description="petites fenêtres surgissantes qui se cachent aussi"
    >bulles d'information</span
  >
  .
</p>
```

#### CSS

```css
span[data-description] {
  position: relative;
  text-decoration: underline;
  color: blue;
  cursor: help;
}

span[data-description]:hover::after,
span[data-description]:focus::after {
  content: attr(data-description);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: black;
  font-size: 14px;
  z-index: 1;
}
```

#### Résultat

{{EmbedLiveSample('bulles_dinformation', 450, 120)}}

### Les pseudo-éléments imbriqués `::after::marker`

Les [pseudo-éléments imbriqués](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) `::after::marker` sélectionnent la liste {{CSSxRef("::marker")}} d'un `::after` pseudo-élément qui est lui-même un élément de liste, c'est-à-dire qu'il a sa {{CSSxRef("display")}} propriété définie sur `list-item`.

Dans cette présentation, nous générons des éléments de liste supplémentaires avant et après un menu de navigation en liste à l'aide de `::before` et `::after` (en les définissant sur `display: list-item` afin qu'ils se comportent comme des éléments de liste). Nous utilisons ensuite `ul::before::marker` et `ul::after::marker` pour donner à leurs marqueurs de liste une couleur différente.

#### HTML

```html
<ul>
  <li><a href="#">Introduction</a></li>
  <li><a href="#">Débuter</a></li>
  <li><a href="#">Comprendre les bases</a></li>
</ul>
```

#### CSS

```css
ul {
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
}

ul::before,
ul::after {
  display: list-item;
  color: orange;
}

ul::before {
  content: "Début";
}

ul::after {
  content: "Fin";
}

ul::before::marker,
ul::after::marker {
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('les_pseudo-éléments_imbriqués_aftermarker', 450, 200)}}

Lorsqu'on utilise des pseudo-éléments imbriqués, les puces de liste des trois éléments de navigation sont générées car ce sont des éléments `<li>`, «&nbsp;Début&nbsp;» et «&nbsp;Fin&nbsp;» ont été insérés via des pseudo-éléments et `::marker` est utilisé pour styliser leurs puces.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
