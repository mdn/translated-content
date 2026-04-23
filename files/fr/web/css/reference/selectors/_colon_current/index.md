---
title: Pseudo-classe CSS `:current`
short-title: :current
slug: Web/CSS/Reference/Selectors/:current
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

Le sélecteur de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:current`** représente un élément ou l'ancêtre d'un élément qui est actuellement affiché ou mis en surbrillance.

## Syntaxe

```css-nolint
:current {
  /* ... */
}

:current(<compound-selector-list>) {
  /* ... */
}
```

## Description

La pseudo-classe `:current` est utilisée pour représenter l'élément «&nbsp;actuellement affiché&nbsp;» parmi une série d'éléments.

Cela peut signifier «&nbsp;actuel&nbsp;» en termes de temps&nbsp;: `:current` peut être utilisé pour cibler les sous-titres ou légendes actuellement affichés (représentés avec [WebVTT](/fr/docs/Web/API/WebVTT_API)) qui sont associés à une vidéo en cours de lecture.

Cela peut aussi faire référence à l'élément actuellement mis en surbrillance dans une série. Par exemple, `:current` peut être combiné avec le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::search-text` pour appliquer des styles spécifiques au résultat de recherche actuellement sélectionné par la fonction de recherche de texte «&nbsp;Trouver dans la page&nbsp;» du navigateur.

Par exemple&nbsp;:

```css
p::search-text {
  color: white;
  background-color: purple;
}

p::search-text:current {
  background-color: crimson;
}
```

## Exemples

### Styles personnalisés pour les résultats de recherche de texte

Cet exemple montre comment utiliser `::search-text` et `:current` pour créer des styles personnalisés pour les résultats de recherche «&nbsp;Trouver dans la page&nbsp;» de votre navigateur.

#### HTML

Le HTML consiste en un paragraphe de texte basique. Nous ne montrons pas le code source HTML, à la fois par souci de concision et pour faciliter la navigation dans les résultats de recherche de l'exemple rendu.

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

Dans notre CSS, nous commençons par mettre en forme le pseudo-élément `::search-text`. Nous lui donnons des styles personnalisés {{CSSxRef("background-color")}}, {{CSSxRef("color")}} et {{CSSxRef("text-shadow")}}.

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
  @supports not selector(::search-text) {
    body::before {
      content: "Votre navigateur ne prend pas en charge le pseudo-élément ::search-text.";
    }
  }
  @supports not selector(:current) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la pseudo-classe :current.";
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

Enfin, nous stylons le résultat de recherche actuellement sélectionné via `::search-text:current`, en lui fournissant une `background-color` différente et quelques styles de {{CSSxRef("text-decoration")}} afin qu'il soit distinct des autres résultats.

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

Essayez d'utiliser l'interface de recherche dans la page du navigateur pour trouver un mot qui apparaît plusieurs fois dans le texte de l'exemple, comme «&nbsp;aliquam&nbsp;», «&nbsp;amet&nbsp;» ou «&nbsp;tortor&nbsp;». Déplacez-vous entre les résultats précédents et suivants pour observer la mise en forme de `:current`.

### Mettre en forme les sous-titres WebVTT actuellement affichés

#### CSS

```css
:current(p, span) {
  background-color: yellow;
}
```

#### HTML

```html
<video controls preload="metadata">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track
    label="Français"
    kind="subtitles"
    srclang="fr"
    src="subtitles.vtt"
    default />
</video>
```

#### WebVTT

```plain
FICHIER WEBVTT

1
00:00:03.500 --> 00:00:05.000
Voici le premier sous-titre

2
00:00:06.000 --> 00:00:09.000
Voici le second sous-titre

3
00:00:11.000 --> 00:00:19.000
Voici le troisième sous-titre
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Format Web Video Text Tracks (WebVTT)](/fr/docs/Web/API/WebVTT_API)
- La pseudo-classe {{CSSxRef(":past")}}
- La pseudo-classe {{CSSxRef(":future")}}
- Le module des [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
