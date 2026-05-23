---
title: Pseudo-élément CSS `::search-text`
short-title: ::search-text
slug: Web/CSS/Reference/Selectors/::search-text
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::search-text`** applique des styles aux résultats de recherche identifiés par la fonctionnalité de recherche de texte «&nbsp;Rechercher&nbsp;» ou «&nbsp;Rechercher dans la page&nbsp;» de l'agent utilisateur.

{{InteractiveExample("Démonstration CSS&nbsp;: ::search-text", "tabbed-shorter")}}

```css interactive-example
p::search-text {
  color: crimson;
  background-color: wheat;
}
```

```html interactive-example
<p>
  À l'aide de la fonctionnalité «&nbsp;Rechercher dans la page&nbsp;» du
  navigateur, recherchez un mot ou une expression qui apparaît dans cette phrase
  et notez comment, dans les navigateurs pris en charge, chaque résultat est mis
  en évidence à l'aide des styles personnalisés définis.
</p>
```

## Syntaxe

```css
::search-text {
  /* ... */
}
```

## Description

La plupart des navigateurs intègrent une fonctionnalité de recherche de texte dans la page, généralement intitulée «&nbsp;Rechercher&nbsp;» ou «&nbsp;Rechercher dans la page&nbsp;». Le pseudo-élément `::search-text`, l'un des [pseudo-éléments de mise en évidence](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#les_pseudo-éléments_de_mise_en_évidence), vous permet d'appliquer un [ensemble limité de styles](#propriétés_autorisées) aux résultats de recherche mis en évidence par la fonctionnalité de recherche du navigateur.

Tous les navigateurs et toutes les versions de navigateurs ne mettent pas en évidence les résultats de recherche à l'aide de surlignages dans la page qui peuvent être mis en forme avec CSS. Dans ces cas, `::search-text` peut ne pas être implémenté ou être simplement ignoré.

Utiliser `::search-text` comme sélecteur seul permet de mettre en forme les résultats de recherche du navigateur apparaissant _n'importe où_ sur une page. Si vous souhaitez uniquement mettre en forme les résultats de recherche du navigateur apparaissant à l'intérieur de certains éléments, vous pouvez combiner `::search-text` avec d'autres sélecteurs, par exemple `section::search-text`.

De plus, `::search-text` peut être combiné avec la [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{CSSxRef(":current")}} pour fournir des styles spécifiques au résultat de recherche actuellement sélectionné, par exemple&nbsp;:

```css
p::search-text {
  color: white;
  background-color: purple;
}

p::search-text:current {
  background-color: crimson;
}
```

### Modèle d'héritage

Le pseudo-élément `::search-text` suit un modèle d'héritage spécial commun à tous les pseudo-éléments de mise en évidence, dans lequel les styles sont hérités à la fois des éléments parents et des pseudo-éléments de leurs parents. Pour plus de détails sur le fonctionnement de cet héritage, consultez la section [Héritage des pseudo-éléments de mise en évidence](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#héritage_des_pseudo-éléments_de_mise_en_évidence).

### Propriétés autorisées

Un sous-ensemble limité de propriétés CSS peut être utilisé avec `::search-text`&nbsp;:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- Les propriétés raccourcies {{CSSxRef("text-decoration")}} et leurs propriétés longues associées&nbsp;:
  - {{CSSxRef("text-decoration-line")}}&nbsp;: les valeurs `grammar-error`, `spelling-error`, `line-through`, `none` et `underline` uniquement.
  - {{CSSxRef("text-decoration-color")}}
  - {{CSSxRef("text-decoration-style")}}
  - {{CSSxRef("text-decoration-thickness")}}
  - {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-underline-offset")}}
- {{CSSxRef("text-shadow")}}

## Accessibilité

**Modifier les styles des résultats de recherche de texte avec parcimonie**, en particulier lorsque cela est fait pour des raisons purement esthétiques. Pour les personnes ayant des difficultés cognitives ou qui sont moins à l'aise avec la technologie, des changements inattendus de ces styles peuvent nuire à leur compréhension de la fonctionnalité.

L'un des principaux cas d'utilisation de `::search-text` est d'augmenter le contraste des couleurs par rapport à la mise en forme par défaut du navigateur. Lorsque vous personnalisez le texte mis en évidence, il est important de veiller à ce que [le rapport de contraste entre les couleurs de premier plan et d'arrière-plan](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan) soit suffisamment élevé pour que les utilisateur·ice·s puissent percevoir le contenu du texte mis en évidence.

## Exemples

### Styles personnalisés pour les résultats de recherche de texte

Cet exemple montre comment utiliser `::search-text` et `:current` pour créer des styles personnalisés pour les résultats de recherche «&nbsp;Rechercher dans la page&nbsp;» de votre navigateur.

#### HTML

Le code HTML se compose d'un paragraphe de texte basique. Nous ne montrerons pas le code source HTML, à la fois pour des raisons de brièveté et pour faciliter la navigation dans les résultats de recherche dans l'exemple rendu.

```html hidden live-sample___custom-search-results
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus est
  eget eros congue pellentesque. Etiam a augue accumsan, scelerisque nisl sit
  amet, lobortis nulla. Aliquam condimentum eu orci eu elementum. Donec
  porttitor quam et posuere commodo. Mauris rhoncus diam a scelerisque molestie.
  Integer sollicitudin risus dui, ut sagittis lorem laoreet eget. Duis eget
  pretium enim. Morbi tristique, diam sit amet gravida finibus, metus ex
  tincidunt nibh, ac volutpat urna purus et arcu. Donec risus risus, semper vel
  purus sit amet, gravida vestibulum est. Sed et tristique urna. Nam vel mi eget
  nisi consectetur elementum. Aenean faucibus aliquam cursus. Morbi posuere
  tincidunt velit, et sagittis quam sagittis in. Nam eget ante ultrices, auctor
  dui vel, euismod lacus. Vivamus tincidunt, sem ac sodales aliquet, tortor
  tortor consequat diam, nec tempor mi dui vel eros. Aliquam ac erat et metus
  egestas scelerisque.
</p>
```

#### CSS

Dans notre CSS, nous commençons par mettre en forme le pseudo-élément `::search-text`. Nous lui attribuons les styles personnalisés {{CSSxRef("background-color")}}, {{CSSxRef("color")}} et {{CSSxRef("text-shadow")}}.

```css hidden live-sample___custom-search-results
html {
  font-family: "Helvetica", "Arial";
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
  width: 90%;
  margin: 0 auto;
}
@layer no-support {
  body::before {
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em 0;
  }
  @supports not selector(:current) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la pseudo-classe :current.";
    }
  }
  @supports not selector(::search-text) {
    body::before {
      content: "Votre navigateur ne prend pas en charge le pseudo-élément ::search-text.";
    }
  }
}
```

```css live-sample___custom-search-results
::search-text {
  background-color: purple;
  color: white;
  text-shadow: 1px 1px 1px black;
}
```

Enfin, nous stylisons le résultat de recherche actuellement sélectionné avec `::search-text:current`, en lui fournissant une `background-color` différente et quelques styles {{CSSxRef("text-decoration")}} afin qu'il soit distinct des autres résultats.

```css live-sample___custom-search-results
::search-text:current {
  background-color: crimson;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 3px;
}
```

#### Résultat

L'exemple s'affiche comme suit&nbsp;:

{{EmbedLiveSample("live-sample___custom-search-results", "100%", 300)}}

Essayez d'utiliser la recherche dans la page de votre navigateur pour trouver un mot qui apparaît plusieurs fois dans le texte de l'exemple, comme «&nbsp;aliquam&nbsp;», «&nbsp;amet&nbsp;» ou «&nbsp;tortor&nbsp;». Déplacez-vous entre les résultats précédents et suivants pour voir le style `:current`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":current")}}
- [Les pseudo-éléments de mise en évidence](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#les_pseudo-éléments_de_mise_en_évidence)
- Le module [des pseudo-éléments CSS](/fr/docs/Web/CSS/Guides/Pseudo-elements)
