---
title: <display-box>
slug: Web/CSS/Reference/Values/display-box
original_slug: Web/CSS/display-box
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<display-box>`** définit si un élément génère des boîtes d'affichage ou aucune.

## Syntaxe

Valeurs valides pour `<display-box>`&nbsp;:

- `contents`
  - : Ces éléments ne produisent pas de boîte spécifique par eux-mêmes. Ils sont remplacés par leur pseudo-boîte et les boîtes de leurs enfants. Veuillez noter que la spécification CSS Display Level 3 définit comment la valeur `contents` doit affecter les «&nbsp;éléments inhabituels&nbsp;» — des éléments qui ne sont pas rendus uniquement selon les concepts de boîte CSS, comme les éléments remplacés. Voir [Appendice B&nbsp;: Effets de `display: contents` sur les éléments inhabituels <sup>(angl.)</sup>](https://drafts.csswg.org/css-display/#unbox) pour plus de détails.

    _En raison d'un bogue dans les navigateurs, cela retire actuellement l'élément de l'arbre d'accessibilité&nbsp;: les lecteurs d'écran n'annonceront pas ce qu'il contient. Voir la section [Accessibilité](#accessibilité) ci-dessous pour plus de détails._

- `none`
  - : Désactive l'affichage d'un élément de sorte qu'il n'ait aucun effet sur la mise en page (le document est rendu comme si l'élément n'existait pas). Tous les éléments descendants voient aussi leur affichage désactivé.
    Pour qu'un élément occupe l'espace qu'il prendrait normalement sans rien afficher, utilisez plutôt la propriété {{CSSxRef("visibility")}}.

## Accessibilité

Via leur implémentation, la plupart des navigation retireront un élément de [l'arbre d'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility) si celui-ci reçoit `display: contents`. Cet élément (ainsi que ses descendants pour certains navigateurs) ne sera plus annoncé par les outils de lecture d'écran. Ce comportement est incorrect selon [la spécification CSSWG](https://drafts.csswg.org/css-display/#the-display-properties).

- [Améliorer l'accessibilité du contenu avec `display: contents`, par Hidde de Vries <sup>(angl.)</sup>](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [`display: contents` n'est pas un outil de réinitialisation CSS, par Adrian Roselli <sup>(angl.)</sup>](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### `display: none`

#### HTML

```html
<p>Texte visible</p>
<p class="secret">Texte invisible</p>
```

#### CSS

```css
p.secret {
  display: none;
}
```

#### Résultat

{{EmbedLiveSample("`display: none`", "100%", 60)}}

### `display: contents`

Dans cet exemple, l'élément {{HTMLElement("div")}} externe a une bordure rouge sur 2 pixels et mesure 300 pixels de large. Toutefois, cet élément est ciblé avec `display: contents` et l'élément `<div>` ne sera pas affiché tel quel : la bordure et la largeur ne s'appliqueront pas et l'élément fils sera affiché comme si le parent n'avait pas existé.

#### HTML

```html
<div class="outer">
  <div>div intérieur.</div>
</div>
```

#### CSS

```css
.outer {
  border: 2px solid red;
  width: 300px;
  display: contents;
}

.outer > div {
  border: 1px solid green;
}
```

#### Résultat

{{EmbedLiveSample("`display: contents`", 300, 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les types de données de la propriété {{CSSxRef("display")}}&nbsp;:
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [`display: contents` n'est pas un outil de réinitialisation CSS <sup>(angl.)</sup>](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [Un balisage plus accessible avec `display: contents` <sup>(angl.)</sup>](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents) par Hidde de Vries (2018)
