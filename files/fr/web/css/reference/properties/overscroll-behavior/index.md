---
title: overscroll-behavior
slug: Web/CSS/Reference/Properties/overscroll-behavior
l10n:
  sourceCommit: 12e3ce1c71f6f04ecf6689a62a02382ad47fd52e
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`overscroll-behavior`** définit le comportement d'un navigateur lorsqu'il atteint la limite d'une zone de défilement.

{{InteractiveExample("Démonstration CSS&nbsp;: overscroll-behavior")}}

```css interactive-example-choice
overscroll-behavior: auto;
```

```css interactive-example-choice
overscroll-behavior: contain;
```

```css interactive-example-choice
overscroll-behavior: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="box">
      Ceci est un conteneur défilable. Le trimestre de Michaelmas est terminé,
      et le Lord Chancelier est assis dans le hall de Lincoln's Inn. Temps de
      novembre implacable. Autant de boue dans les rues que si les eaux venaient
      de se retirer de la surface de la terre.
      <br /><br />
      Lorem Ipsum a été le texte factice standard de l'industrie depuis les
      années 1500, lorsqu'un imprimeur inconnu a pris une galère de caractères
      et l'a brouillée pour créer un livre d'échantillons de caractères. Il a
      survécu non seulement à cinq siècles, mais aussi au passage à la
      composition électronique, restant essentiellement inchangé.
    </div>
    <div id="example-element">
      Ceci est le conteneur interne. Concentrez-vous sur ce conteneur, faites
      défiler jusqu'en bas et lorsque vous atteignez le bas, continuez à faire
      défiler.
      <p>
        Si vous avez sélectionné
        <code class="language-css">overscroll-behavior: auto;</code>, le
        conteneur externe commencera à défiler.
      </p>
      Si vous avez sélectionné
      <code class="language-css">overscroll-behavior: contain;</code>, le
      conteneur externe ne défilera pas à moins que vous ne déplaciez votre
      curseur en dehors du conteneur interne et que vous essayiez de faire
      défiler le conteneur externe.
    </div>
  </div>
</section>
```

```css interactive-example
.example-container {
  width: 35em;
  height: 18em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
  overflow: auto;
  display: flex;
}

.box {
  width: 50%;
}

#example-element {
  width: 50%;
  height: 12em;
  border: medium dotted #1b76c4;
  padding: 0.3em;
  margin: 0 0.3em;
  text-align: left;
  overflow: auto;
  overscroll-behavior: contain;
}
```

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

## Syntaxe

```css
/* Valeurs avec un mot-clés */
overscroll-behavior: auto; /* Par défaut */
overscroll-behavior: contain;
overscroll-behavior: none;

/* Valeurs avec deux mots-clés */
overscroll-behavior: auto contain;

/* Valeurs globales */
overscroll-behavior: inherit;
overscroll-behavior: initial;
overscroll-behavior: revert;
overscroll-behavior: revert-layer;
overscroll-behavior: unset;
```

La propriété `overscroll-behavior` est définie avec un ou deux mots-clés parmi ceux de la liste ci-après.

Deux mots-clés définissent la valeur de `overscroll-behavior` sur les axes `x` et `y` respectivement. Si une seule valeur est spécifiée, les axes x et y sont supposés avoir la même valeur.

### Valeurs

- `auto`
  - : Le comportement de dépassement de défilement par défaut se produit normalement.
- `contain`
  - : Le comportement de dépassement de défilement par défaut (par exemple, les effets de «&nbsp;rebondissement&nbsp;») est observé à l'intérieur de l'élément où cette valeur est définie. Cependant, aucun enchaînement de défilement ne se produit sur les zones de défilement voisines&nbsp;; les éléments sous-jacents ne défileront pas. La valeur `contain` désactive la navigation native du navigateur, y compris le geste de «&nbsp;tirer pour actualiser&nbsp;» vertical et la navigation par balayage horizontal.
- `none`
  - : Aucun enchaînement de défilement ne se produit vers les zones de défilement voisines, et le comportement de dépassement de défilement par défaut est empêché.

## Description

Par défaut, les navigateurs mobiles ont tendance à fournir un effet de «&nbsp;rebondissement&nbsp;» ou même un rafraîchissement de la page lorsque le haut ou le bas d'une page (ou d'une autre zone de défilement) est atteint. Vous avez peut-être également remarqué que lorsque vous avez une boîte de dialogue avec du contenu défilant en haut d'une page qui a également du contenu défilant, une fois que la {{Glossary("Scroll_boundary", "limite de défilement")}} de la boîte de dialogue est atteinte, la page sous-jacente commence alors à défiler — cela s'appelle {{Glossary("Scroll_chaining", "enchaînement de défilement")}}.

Dans certains cas, ces comportements ne sont pas souhaitables. Vous pouvez utiliser `overscroll-behavior` pour vous débarrasser de l'enchaînement de défilement indésirable et du comportement de type «&nbsp;tirer pour actualiser&nbsp;» inspiré des applications Facebook/Twitter.

Notez que cette propriété s'applique uniquement aux {{Glossary("Scroll_container", "conteneurs de défilement")}}. En particulier, comme un {{HTMLElement("iframe")}} n'est pas un conteneur de défilement, définir cette propriété sur un cadre intégré n'a aucun effet. Pour contrôler l'enchaînement de défilement depuis un cadre intégré, définissez `overscroll-behavior` à la fois sur les éléments {{HTMLElement("html")}} et {{HTMLElement("body")}} du document du cadre intégré.

Un {{Glossary("Scroll_container", "conteneur de défilement")}} qui n'a pas de débordement défilable, comme un élément avec `overflow: hidden`, est toujours considéré comme étant à sa {{Glossary("Scroll_boundary", "limite de défilement")}}. Ainsi, définir un `overscroll-behavior` différent de la valeur par défaut, tel que `contain` ou `none`, sur celui-ci empêchera l'enchaînement de défilement vers les conteneurs de défilement ancêtres. Cela peut être utilisé pour empêcher le défilement de l'arrière-plan lorsqu'une boîte de dialogue ou une superposition est ouverte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Prévenir le défilement d'un élément sous-jacent

Dans notre [exemple sur `overscroll-behavior` <sup>(angl.)</sup>](https://mdn.github.io/css-examples/overscroll-behavior/) (voir également le [code source <sup>(angl.)</sup>](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)), nous présentons une liste de contacts factices sur toute la page et une boîte de dialogue contenant une fenêtre de discussion.

![Une fenêtre de discussion contextuelle intitulée 'Active chat', montrant une conversation entre Chris et Bob. Derrière la fenêtre de discussion se trouve une liste de contacts intitulée 'overscroll-behavior demo'.](example.png)

Les deux zones peuvent défiler&nbsp;; normalement, si vous faites défiler la fenêtre de discussion jusqu'à atteindre une limite de défilement, la fenêtre de contacts sous-jacente commencerait également à défiler, ce qui n'est pas souhaitable. Cela peut être empêché en utilisant `overscroll-behavior-y` (`overscroll-behavior` fonctionnerait également) sur la fenêtre de discussion, comme ceci&nbsp;:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Nous voulions également nous débarrasser des effets de dépassement de défilement standard lorsque les contacts sont défilés jusqu'en haut ou en bas (par exemple, Chrome sur Android actualise la page lorsque vous dépassez la limite supérieure). Cela peut être empêché en définissant `overscroll-behavior: none` sur l'élément {{HTMLElement("html")}}&nbsp;:

```css
html {
  margin: 0;
  overscroll-behavior: none;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [du comportement de dépassement de défilement CSS](/fr/docs/Web/CSS/Guides/Overscroll_behavior)
- Le module [d'ancrage de défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_anchoring)
- [Prenez le contrôle de votre défilement&nbsp;: personnalisation des effets de tirage pour actualiser et de dépassement <sup>(angl.)</sup>](https://developer.chrome.com/blog/overscroll-behavior) sur developer.chrome.com (2017)
