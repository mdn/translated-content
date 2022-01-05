---
title: <display-box>
slug: Web/CSS/display-box
translation_of: Web/CSS/display-box
---
{{CSSRef}}

Ces mots-clés définissent si un élément génère des boîtes d'affichage ou aucune.

## Syntaxe

- `contents` {{Experimental_Inline}}

  - : L'élément ne produit pas de boîte qui lui soit spécifique. Il est remplacé par sa pseudo-boîte et les boîtes de ses enfants. On notera que le module de spécification CSS Display de niveau 3 définit la façon dont la valeur `contents` affecte les éléments « inhabituels » tels que les éléments remplacés. Voir [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) pour plus de détails.

    À l'heure actuelle, en raison d'un bug, les éléments ciblés par une règle avec `display: contents` sont retirés de l'arbre d'accessibilité et ne sont donc pas parcourus par les lecteurs d'écran*.*

- `none`
  - : Désactive l'affichage d'un élément afin que celui-ci n'ait aucun effet sur la disposition du document (le document est affiché comme si l'élément n'existait pas). Tous les éléments descendants voient également leur affichage désactivé.
    Si on souhaite que l'élément ne soit pas affiché mais occupe néanmoins un espace, il faudra utiliser la propriété {{CSSxRef("visibility")}}.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### `display: none`

#### CSS

```css
p.secret {
  display: none;
}
```

#### HTML

```html
<p>Texte visible</p>
<p class="secret">Texte invisible</p>
```

#### Résultat

{{EmbedLiveSample("display_none", "100%", 60)}}

### `display: contents`

Dans cet exemple, l'élément {{htmlelement("div")}} externe a une bordure rouge sur 2 pixels et mesure 300 pixels de large. Toutefois, cet élément est ciblé avec `display: contents` et l'élément `<div>` ne sera pas affiché tel quel : la bordure et la largeur ne s'appliqueront pas et l'élément fils sera affiché comme si le parent n'avait pas existé.

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

#### HTML

```html
<div class="outer">
  <div>Inner div.</div>
</div>
```

#### Résultat

{{EmbedLiveSample("display_contents", 300, 60)}}

## Accessibilité

Via leur implémentation, la plupart des navigation retireront un élément de [l'arbre d'accessibilité](/fr/docs/Apprendre/a11y/What_is_accessibility) si celui-ci reçoit `display: contents`. Cet élément (ainsi que ses descendants pour certains navigateurs) ne sera plus annoncé par les outils de lecture d'écran. Ce comportement est incorrect selon [la spécification CSSWG](https://drafts.csswg.org/css-display/#the-display-properties).

- [Améliorer l'accessibilité du contenu avec `display: contents`, par Hidde de Vries (en anglais)](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [`display: contents` n'est pas un outil de réinitialisation CSS, par Adrian Roselli (en anglais)](http://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Compatibilité des navigateurs

### Prise en charge `contents`

{{Compat("css.properties.display.contents", 10)}}

## Voir aussi

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [`display: contents` n'est pas un outil de réinitialisation CSS (en anglais)](http://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [Un balisage plus accessible avec `display: contents` (en anglais)](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
