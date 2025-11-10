---
title: orientation
slug: Web/CSS/Reference/At-rules/@media/orientation
original_slug: Web/CSS/@media/orientation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`orientation`** permet de tester l'orientation de la {{glossary("viewport", "zone d'affichage")}} (ou de la boîte de page, pour les [médias paginés](/fr/docs/Web/CSS/Guides/Paged_media)).

> [!NOTE]
> Cette caractéristique ne correspond pas à l'orientation _de l'appareil_. Ouvrir le clavier virtuel sur de nombreux appareils en mode portrait peut rendre la zone d'affichage plus large que haute, ce qui amènera le navigateur à utiliser les styles paysage au lieu de portrait.

## Syntaxe

La caractéristique `orientation` se définit grâce à l'un des mots-clés suivants.

### Mots-clés

- `portrait`
  - : La zone d'affichage est en mode portrait (la hauteur est la plus grande dimension).
- `landscape`
  - : La zone d'affichage est en mode paysage (la largeur est la plus grande dimension).

## Exemples

### Orientation portrait

Dans cet exemple, nous avons trois boîtes dans le HTML, et nous utilisons la caractéristique média `orientation` pour passer d'une disposition en ligne (en paysage) à une disposition en colonne (en portrait).

La sortie de l'exemple est intégrée dans un {{HTMLElement("iframe")}} dont la hauteur est supérieure à sa largeur, de sorte que les boîtes obtiennent une disposition en colonne.

#### HTML

```html
<div>Boîte 1</div>
<div>Boîte 2</div>
<div>Boîte 3</div>
```

#### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

#### Résultat

{{EmbedLiveSample("orientation_portrait", "", "800")}}

### Orientation paysage

Cet exemple utilise exactement le même code que l'exemple précédent&nbsp;: il y a trois boîtes dans le HTML, et la caractéristique média `orientation` permet de passer d'une disposition en ligne (en paysage) à une disposition en colonne (en portrait).

Cependant, ici, la sortie de l'exemple est intégrée dans un {{HTMLElement("iframe")}} dont la hauteur est inférieure à la largeur, de sorte que les boîtes sont disposées en ligne.

#### HTML

```html
<div>Boîte 1</div>
<div>Boîte 2</div>
<div>Boîte 3</div>
```

#### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  padding: 0.5rem;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

{{EmbedLiveSample("orientation_paysage", "", "300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
