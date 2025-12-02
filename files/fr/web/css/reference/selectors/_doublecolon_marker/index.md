---
title: ::marker
slug: Web/CSS/Reference/Selectors/::marker
original_slug: Web/CSS/::marker
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::marker`** représente le marqueur d'un élément d'une liste à puces ou numérotée. Il fonctionne sur tout élément ou pseudo-élément défini avec [`display: list-item`](/fr/docs/Web/CSS/Reference/Properties/display), tel que les éléments {{htmlelement("li")}} et {{htmlelement("summary")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: ::marker", "tabbed-shorter")}}

```css interactive-example
li::marker {
  content: "✝ ";
  font-size: 1.2em;
}
```

```html interactive-example
<p>Groupe connu sous le nom de «&nbsp;Mercury Seven&nbsp;»&nbsp;:</p>
<ul>
  <li>Malcolm Scott Carpenter</li>
  <li>Leroy Gordon (Gordo) Cooper Jr.</li>
  <li>John Herschel Glenn Jr.</li>
  <li>Virgil Ivan (Gus) Grissom</li>
  <li>Walter Marty (Wally) Schirra Jr.</li>
  <li>Alan Bartlett Shepard Jr.</li>
  <li>Donald Kent (Deke) Slayton</li>
</ul>
```

## Propriétés autorisées

Seul un sous-ensemble de propriétés CSS peuvent être utilisées pour une règle qui utilise `::marker`&nbsp;:

- Toutes les [propriétés de police](/fr/docs/Web/CSS/Guides/Fonts)
- La propriété {{CSSxRef("white-space")}}
- {{CSSxRef("color")}}
- Les propriétés {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}} et {{CSSxRef("direction")}}
- La propriété {{CSSxRef("content")}}
- Toutes les propriétés d'[animation](/fr/docs/Web/CSS/Guides/Animations#propriétés_css) et de [transition](/fr/docs/Web/CSS/Guides/Transitions#propriétés_css)

> [!NOTE]
> La spécification indique que d'autres propriétés CSS pourraient être prises en charge à l'avenir.

## Syntaxe

```css
::marker {
  /* ... */
}
```

## Exemples

### HTML

```html
<ul>
  <li>Pêches</li>
  <li>Pommes</li>
  <li>Prunes</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### Résultat

{{EmbedLiveSample('exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML comportant un marqueur par défaut&nbsp;:
  - {{htmlelement("ol")}}
  - {{htmlelement("li")}}
  - {{htmlelement("summary")}}
- Le module [Contenu généré par CSS](/fr/docs/Web/CSS/Guides/Generated_content)
- Le module [Listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module [Styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
