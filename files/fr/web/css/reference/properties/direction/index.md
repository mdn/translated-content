---
title: direction
slug: Web/CSS/Reference/Properties/direction
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

> [!WARNING]
> Dans la mesure du possible, il est recommandé aux autrices et auteurs d'éviter d'utiliser la propriété CSS `direction` et de préférer l'attribut global HTML [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir).

La propriété [CSS](/fr/docs/Web/CSS) **`direction`** définit le sens du texte, des colonnes de tableau et de grille, ainsi que du débordement horizontal. Utilisez `rtl` pour les langues écrites de droite à gauche (comme l'hébreu ou l'arabe), et `ltr` pour celles écrites de gauche à droite (comme l'anglais et la plupart des autres langues).

Notez que la direction du texte est généralement définie dans un document (par exemple, avec [l'attribut `dir` de HTML](/fr/docs/Web/HTML/Reference/Global_attributes/dir)) plutôt que par l'utilisation directe de la propriété `direction`.

{{InteractiveExample("Démonstration CSS&nbsp;: direction")}}

```css interactive-example-choice
direction: ltr;
```

```css interactive-example-choice
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}
```

## Syntaxe

```css
direction: ltr;
direction: rtl;

/* Valeurs globales */
direction: inherit;
direction: initial;
direction: revert;
direction: revert-layer;
direction: unset;
```

### Valeurs

- `ltr`
  - : La valeur par défaut qui correspond à une disposition de la gauche vers la droite pour le texte et les autres éléments.
- `rtl`
  - : Le texte et les autres éléments vont de la droite vers la gauche.

Afin que la propriété `direction` ait un effet sur les éléments en ligne, il faut que la valeur de la propriété {{CSSxRef("unicode-bidi")}} soit `embed` ou `override`.

## Description

La propriété définit la direction principale du texte des éléments de type bloc et celle des éléments incorporés créés par la propriété {{CSSxRef("unicode-bidi")}}. Elle définit également l'alignement par défaut du texte et des éléments de type bloc, ainsi que le sens de progression des cellules dans une ligne de tableau ou de grille.

Contrairement à l'attribut `dir` en HTML, la propriété `direction` n'est pas héritée des colonnes de tableau vers les cellules, car l'héritage CSS suit l'arborescence du document et les cellules sont à l'intérieur des lignes, mais pas à l'intérieur des colonnes.

Les propriétés `direction` et {{CSSxRef("unicode-bidi")}} sont les deux seules propriétés qui ne sont pas affectées par la propriété raccourcie {{CSSxRef("all")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la direction de droite à gauche

Dans l'exemple ci-dessous, deux chaînes de texte sont affichées avec `direction: rtl`. Le texte en arabe s'affiche correctement avec ce réglage, mais le texte en anglais affiche maintenant un point final à un emplacement inhabituel.

```css
blockquote {
  direction: rtl;
  width: 300px;
}
```

```html
<blockquote>
  <p>
    Ce paragraphe est en français mais s'affiche incorrectement de droite à
    gauche.
  </p>
  <p></p>
</blockquote>

<blockquote>
  <p>هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.</p>
  <p></p>
</blockquote>
```

{{EmbedLiveSample("Définir la direction de droite à gauche", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("unicode-bidi")}}
- La propriété {{CSSxRef("writing-mode")}}
- L'attribut SVG {{SVGAttr("direction")}}
- L'attribut universel HTML [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir)
- [Créer des contrôles de formulaire verticaux](/fr/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Gérer différentes directions de texte](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
