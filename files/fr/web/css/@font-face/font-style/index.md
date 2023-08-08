---
title: font-style
slug: Web/CSS/@font-face/font-style
---

{{CSSRef}}

Le descripteur **`font-style`**, associé à [la règle @](/fr/docs/Web/CSS/At-rule) {{cssxref("@font-face")}}, permet d'indiquer le style de police pour la police définie via la règle.

Pour une police donnée (un ensemble de fontes), les auteurs peuvent télécharger plusieurs fichiers correspondant à la même police mais pour différents styles. Le descripteur `font-style` peut alors être utilisé afin d'indiquer explicitement le style associé à la fonte. La valeur du descripteur correspond à la propriété de la fonte.

## Syntaxe

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 30deg;
font-style: oblique 30deg 50deg;
```

### Valeurs

- `normal`
  - : C'est la fonte « normale » de la police qui est choisie.
- `italic`
  - : C'est la fonte italique de la police qui est choisie.
- `oblique`
  - : C'est la fonte, artificiellement penchée à partir de la police normale, de la police qui est choisie.
- `oblique` avec un angle
  - : C'est la fonte oblique (c'est-à-dire une version artificiellement penchée, obtenue à partir de la police normale) de la police qui est choisie. L'angle indiqué correspond à la pente du texte.
- `oblique` avec un intervalle d'angle
  - : Utilise une fonte comme `oblique` et indique un intervalle d'angles possibles pour la pente du texte. On notera que l'intervalle est uniquement pris en compte pour la valeur `oblique`, aucune autre valeur n'est autorisée après `normal` ou `italic`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans les exemples qui suivent, on utilisera les différentes formes liées à la police Garamond :

```css
@font-face {
  font-family: garamond;
  src: url("garamond.ttf");
}
```

![unstyled Garamond](garamondunstyled.jpg)

La version en italique du texte utilisera les mêmes glyphes que la version normale, artificiellement penchés de quelques degrés.

![artificially sloped garamond](garamondartificialstyle.jpg)

En revanche, si on dispose d'une vraie version italique, on peut l'indiquer via le descripteur `src` et indiquer que c'est une police italique via `font-style`. Une « vraie » police italique utilisera des glyphes différents et la qualité calligraphique obtenue sera meilleure qu'avec les glyphes normaux penchés artificiellement.

```css
@font-face {
  font-family: garamond;
  src: url("garamond-italic.ttf");
  /* On indique ici que la police est italique */
  font-style: italic;
}
```

![italic garamond](garamonditalic.jpg)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
