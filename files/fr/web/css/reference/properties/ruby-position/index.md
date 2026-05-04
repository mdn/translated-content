---
title: Propriété CSS `ruby-position`
short-title: ruby-position
slug: Web/CSS/Reference/Properties/ruby-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`ruby-position`** définit la position d'un élément ruby par rapport à son élément de base. L'élément ruby peut ainsi être positionné au-dessus de l'élément (`over`), en-dessous (`under`) ou entre les caractères, sur leur droite (`inter-character`).

{{InteractiveExample("Démonstration CSS&nbsp;: ruby-position")}}

```css interactive-example-choice
ruby-position: over;
```

```css interactive-example-choice
ruby-position: under;
```

```html interactive-example
<section id="default-example">
  <ruby id="example-element"> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
</section>
```

```css interactive-example
#example-element {
  font-size: 2em;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
ruby-position: over;
ruby-position: under;
ruby-position: alternate;
ruby-position: alternate over;
ruby-position: alternate under;
ruby-position: inter-character;

/* Valeurs globales */
ruby-position: inherit;
ruby-position: initial;
ruby-position: revert;
ruby-position: revert-layer;
ruby-position: unset;
```

### Valeurs

- `over`
  - : ![Exemple au-dessus](screen_shot_2015-03-04_at_13.02.20.png)
    Est un mot-clé indiquant que le ruby doit être placé au-dessus du texte principal pour les scripts horizontaux et à droite pour les scripts verticaux.
- `under`
  - : ![Exemple en-dessous](screen_shot_2015-03-04_at_13.02.07.png)
    Est un mot-clé indiquant que le ruby doit être placé sous le texte principal pour les scripts horizontaux et à gauche pour les scripts verticaux.
- `alternate` {{Experimental_Inline}}
  - : Est un mot-clé indiquant que le ruby alterne entre au-dessus et en-dessous, lorsqu'il y a plusieurs niveaux d'annotation.
- `inter-character`
  - : Lorsqu'il est défini, il se comporte comme `over` dans les modes d'écriture verticale. Sinon, il indique que le ruby doit être placé entre les différents caractères, apparaissant à droite de la base dans le texte horizontal et forçant les enfants du conteneur d'annotation ruby à avoir un mode d'écriture `vertical-rl`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ruby positionné au-dessus du texte

#### HTML

```html
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-position: over;
}
```

#### Résultat

{{EmbedLiveSample("Ruby positionné au-dessus du texte", 100, 40)}}

### Ruby positionné en-dessous du texte

#### HTML

```html
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-position: under;
}
```

#### Résultat

{{EmbedLiveSample("Ruby positionné en-dessous du texte", 100, 40)}}

### Ruby alterné

#### HTML

```html
<ruby>
  <rb>A</rb><rb>B</rb><rb>C</rb>
  <rtc>Above</rtc>
  <rtc>Below</rtc>
</ruby>
```

#### CSS

```css
ruby {
  ruby-position: alternate; /* ceci est également la valeur initiale */
}
```

#### Résultat

{{EmbedLiveSample("Ruby alterné", 100, 40)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}} et {{HTMLElement("rtc")}}
- La propriété {{CSSxRef("ruby-align")}}
- Le module [de disposition ruby CSS](/fr/docs/Web/CSS/Guides/Ruby_layout)
