---
title: Propriété CSS `scroll-timeline-name`
short-title: scroll-timeline-name
slug: Web/CSS/Reference/Properties/scroll-timeline-name
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`scroll-timeline-name`** est utilisée pour définir le nom d'une _chronologie de progression de défilement nommée_, qui progresse en faisant défiler un élément défilable (_défileur_) entre le haut et le bas (ou la gauche et la droite). `scroll-timeline-name` est définie sur le défileur qui fournira la chronologie.

Le nom est ensuite référencé dans une déclaration {{CSSxRef("animation-timeline")}} pour indiquer l'élément conteneur utilisé pour piloter la progression de l'animation avec l'action de défilement.

> [!NOTE]
> Si l'élément ne déborde pas de son conteneur dans la dimension de l'axe ou si le débordement est masqué ou coupé, aucune chronologie ne sera créée.

Les propriétés {{CSSxRef("scroll-timeline-axis")}} et `scroll-timeline-name` peuvent également être définies en utilisant la propriété raccourcie {{CSSxRef("scroll-timeline")}}.

## Syntaxe

```css
scroll-timeline-name: none;
scroll-timeline-name: --custom_name_for_timeline;
```

### Valeurs

Les valeurs autorisées pour `scroll-timeline-name` sont&nbsp;:

- `none`
  - : La chronologie n'a pas de nom.
- `<dashed-ident>`
  - : Un identifiant personnalisé arbitraire définissant un nom pour une chronologie de progression de défilement, qui peut ensuite être référencé dans une propriété {{CSSxRef("animation-timeline")}}.

    > [!NOTE]
    > Les valeurs de type {{CSSxRef("&lt;dashed-ident&gt;")}} doivent commencer par `--`, ce qui aide à éviter les conflits de noms avec les mots-clés CSS standard.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer une animation de chronologie de progression de défilement nommée

Dans cet exemple, une chronologie de progression de défilement nommée `--chronologie-du-carre` est définie en utilisant la propriété `scroll-timeline-name` sur l'élément avec l'ID `container`.
Cette chronologie est ensuite appliquée à l'animation sur l'élément `#square` en utilisant `animation-timeline: --chronologie-du-carre`.

#### HTML

Le HTML pour l'exemple est montré ci-dessous.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Le CSS pour le conteneur le définit comme la source d'une chronologie de progression de défilement nommée `--chronologie-du-carre` en utilisant la propriété `scroll-timeline-name`. Aucun [axe de la barre de défilement](/fr/docs/Web/CSS/Reference/Properties/scroll-timeline-axis) n'est défini ici, car l'axe vertical sera utilisé par défaut.

La hauteur du conteneur est définie sur `300px`, et le conteneur est également configuré pour créer une barre de défilement verticale si son contenu déborde (la règle CSS `height` sur l'élément `stretcher` ci-dessous fait en sorte que le contenu déborde de son conteneur).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --chronologie-du-carre;
  position: relative;
}
```

Le CSS ci-dessous définit un carré qui tourne en fonction de la chronologie fournie par la propriété `animation-timeline`, qui est définie sur la chronologie nommée `--chronologie-du-carre` ci-dessus.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox nécessite cela pour appliquer l'animation */
  animation-timeline: --chronologie-du-carre;
  position: absolute;
  bottom: 0;
}

#stretcher {
  height: 600px;
  background: #dedede;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
```

La règle CSS `stretcher` définit la hauteur du bloc à `600px`, ce qui crée un contenu qui déborde de l'élément conteneur, créant ainsi des barres de défilement.
Sans cet élément, le contenu ne déborderait pas du conteneur, il n'y aurait pas de barre de défilement et donc aucune chronologie de défilement à associer à la chronologie d'animation.

#### Résultat

Faites défiler la barre verticale pour voir le carré s'animer au fur et à mesure du défilement.

{{EmbedLiveSample("Créer une animation de chronologie de progression de défilement nommée", "100%", 320)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- Les propriétés {{CSSxRef("scroll-timeline")}}, {{CSSxRef("scroll-timeline-axis")}}
- La propriété {{CSSxRef("timeline-scope")}}
- Le module [d'animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
