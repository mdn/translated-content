---
title: ::after
slug: Web/CSS/::after
l10n:
  sourceCommit: b7821748a66d5c581c17ddf62a74edf83638623e
---

{{CSSRef}}

En CSS, **`::after`** crée un [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) qui sera le dernier enfant de l'élément sélectionné. Il est souvent utilisé pour ajouter du contenu esthétique à un élément, en utilisant la propriété CSS [`content`](/fr/docs/Web/CSS/content). Par défaut, ce contenu est de type [en ligne (<i lang="en">inline</i> en anglais)](/fr/docs/Glossary/Inline-level_content).

{{InteractiveExample("CSS Demo: ::after", "tabbed-standard")}}

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
  The sailfish is named for its sail-like dorsal fin and is widely considered
  the fastest fish in the ocean.
  <a href="https://en.wikipedia.org/wiki/Sailfish"
    >You can read more about it here</a
  >.
</p>

<p>
  The red lionfish is a predatory scorpionfish that lives on coral reefs of the
  Indo-Pacific Ocean and more recently in the western Atlantic.
  <a href="" class="dead-link">You can read more about it here</a>.
</p>
```

> [!NOTE]
> Les pseudo-éléments générés par `::before` et `::after` sont [contenus dans la boîte de mise en forme de l'élément](https://www.w3.org/TR/CSS2/generate.html#before-after-content). Aussi, [`::before`](/fr/docs/Web/CSS/::before) et `::after` ne s'appliquent pas aux _[éléments remplacés](/fr/docs/Web/CSS/CSS_images/Replaced_element_properties)_ tels que les éléments [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img) ou [`<br>`](/fr/docs/Web/HTML/Reference/Elements/br).

## Syntaxe

```css-nolint
::after {
  content: /* valeur */;
  /* propriétés */
}
```

Si la propriété [`content`](/fr/docs/Web/CSS/content) n'est pas indiquée, contient une valeur invalide, vaut `normal`, ou vaut `none`, le pseudo-élément `::after` ne sera pas rendu à l'écran. Il se comportera comme si `display: none` avait été appliqué.

> [!NOTE]
> CSS a introduit la notation `::after` (avec deux deux-points) pour distinguer les [pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes) des [pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements). Les navigateurs acceptent aussi la notation `:after`, introduite précédemment, à des fins de rétro-compatibilité.

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
  color: green;
}

.texte-ennuyeux::after {
  content: "<- un peu ennuyeux";
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('', 500, 150)}}

### Exemple décoratif

On peut mettre en forme du texte ou des images avec la propriété [`content`](/fr/docs/Web/CSS/content) à peu près de quelque manière que nous le voulions&nbsp;:

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

{{EmbedLiveSample('', 450, 20)}}

### Bulles d'information

Dans l'exemple suivant, on illustre le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) `::after` avec l'expression CSS [`attr()`](/fr/docs/Web/CSS/attr) et un attribut de données personnalisé `data-descr` afin de créer une bulle d'information de type glossaire en CSS, sans JavaScript.

On peut également aider les personnes qui naviguent au clavier avec cette technique, en ajoutant un `tabindex` de `0` pour faire un `span` focusable, et en utilisant la sélection `:focus`. Cela montre à quel point les options [`::before`](/fr/docs/Web/CSS/::before) and `::after` peuvent être flexibles, bien que, pour l'expérience la plus accessible, un widget de divulgation sémantique créé d'une autre manière serait probablement plus approprié.

#### HTML

```html
<p>
  Voici l'exemple en action du code ci-dessus.<br />
  Nous avons un peu de
  <span data-descr="collection de mots et de ponctuation">texte</span>
  ici avec quelques
  <span data-descr="petites fenêtres surgissantes qui se cachent aussi"
    >bulles d'information</span
  >
  .
</p>
```

#### CSS

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after,
span[data-descr]:focus::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### Résultat

{{EmbedLiveSample('', 450, 120)}}

## Accessibilité

Utiliser un pseudo-élément `::after` afin d'ajouter du contenu est déconseillé, car ce dernier n'est pas accessible de façon fiable pour les lecteurs d'écrans.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`::before`](/fr/docs/Web/CSS/::before)
- [`content`](/fr/docs/Web/CSS/content)
