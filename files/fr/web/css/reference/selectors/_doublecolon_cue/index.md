---
title: ::cue
slug: Web/CSS/Reference/Selectors/::cue
original_slug: Web/CSS/::cue
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::cue`** permet de cibler les indications textuelles [WebVTT](/fr/docs/Web/API/WebVTT_API) d'un élément. Ce pseudo-élément peut être utilisé afin de mettre en forme [les légendes et autres indications textuelles](/fr/docs/Web/API/WebVTT_API#styling_webtt_cues) pour les médias avec des pistes VTT.

{{InteractiveExample("Démonstration CSS&nbsp;: ::cue", "tabbed-shorter")}}

```css interactive-example
video {
  width: 100%;
}

video::cue {
  font-size: 1rem;
  color: yellow;
}

::cue(u) {
  color: red;
}
```

```html interactive-example
<video controls src="/shared-assets/videos/friday.mp4">
  <track
    default
    kind="captions"
    srclang="en"
    src="/shared-assets/misc/friday.vtt" />
  Désolé, votre navigateur ne prend pas en charge les vidéos intégrées.
</video>
```

Les propriétés sont appliquées à l'ensemble des indications (comme si celles-ci formaient un seul ensemble). Seule `background` (ou les propriétés raccourcies associées) s'appliquent à chaque indication séparément (afin d'éviter de créer des boîtes qui masqueraient de grandes zones sur le média).

Dans l'exemple ci-dessus, le sélecteur `::cue(u)` sélectionne tous les éléments [`<u>`](/fr/docs/Web/HTML/Reference/Elements/u) à l'intérieur [du texte de l'indication](https://raw.githubusercontent.com/mdn/interactive-examples/main/live-examples/media/examples/friday.vtt).

## Syntaxe

```css-nolint
::cue | ::cue(<selector>) {
  /* ... */
}
```

## Propriétés autorisées

Les règles dont les sélecteurs incluent cet élément ne peuvent utiliser que les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("background")}}
- {{CSSxRef("background-attachment")}}
- {{CSSxRef("background-clip")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("background-image")}}
- {{CSSxRef("background-origin")}}
- {{CSSxRef("background-position")}}
- {{CSSxRef("background-repeat")}}
- {{CSSxRef("background-size")}}
- {{CSSxRef("color")}}
- {{CSSxRef("font")}}
- {{CSSxRef("font-family")}}
- {{CSSxRef("font-size")}}
- {{CSSxRef("font-stretch")}}
- {{CSSxRef("font-style")}}
- {{CSSxRef("font-variant")}}
- {{CSSxRef("font-weight")}}
- {{CSSxRef("line-height")}}
- {{CSSxRef("opacity")}}
- {{CSSxRef("outline")}}
- {{CSSxRef("outline-color")}}
- {{CSSxRef("outline-style")}}
- {{CSSxRef("outline-width")}}
- {{CSSxRef("ruby-position")}}
- {{CSSxRef("text-combine-upright")}}
- {{CSSxRef("text-decoration")}}
- {{CSSxRef("text-decoration-color")}}
- {{CSSxRef("text-decoration-line")}}
- {{CSSxRef("text-decoration-style")}}
- {{CSSxRef("text-decoration-thickness")}}
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("visibility")}}
- {{CSSxRef("white-space")}}

## Exemples

### Mettre en forme les repères WebVTT en blanc sur fond noir

Le CSS suivant définit le style de la repère afin que le texte soit blanc et que l'arrière-plan soit une boîte noire translucide.

```css
::cue {
  color: white;
  background-color: rgb(0 0 0 / 60%);
}
```

### Mettre en forme les objets de nœud internes WebVTT

Le texte des repères peut inclure des _objets de nœud internes_ sous forme de balises (similaires aux éléments HTML) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>`, et `<lang>`.
Le sélecteur `::cue()` peut être utilisé pour appliquer des styles au contenu à l'intérieur de ces balises afin de personnaliser l'affichage de la piste WebVTT.
Considérons le texte de repère suivant qui utilise la balise `<u>` pour souligner un texte :

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Dites-moi, le <u>seigneur de l'univers</u> est ici ?
```

La règle CSS suivante personnalise le texte à l'intérieur de la balise `<u>` avec une couleur et un {{CSSxRef("text-decoration")}}&nbsp;:

```css
::cue(u) {
  color: red;
  text-decoration: wavy overline lime;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Format des pistes vidéo Web (WebVTT)](/fr/docs/Web/API/WebVTT_API)
- Les éléments {{HTMLElement("track")}}, {{HTMLElement("video")}}
