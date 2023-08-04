---
title: Element.animate()
slug: Web/API/Element/animate
---

{{APIRef('Web Animations')}}

La méthode **`animate()`** de l'interface [`Element`](/fr/docs/Web/API/Element) est un raccourci permettant de créer un nouvel objet [`Animation`](/fr/docs/Web/API/Animation), de l'appliquer à un élément puis de la jouer. Elle retourne l'instance [`Animation`](/fr/docs/Web/API/Animation) alors créée.

> **Note :** Les éléments peuvent avoir plusieurs animations qui leur sont appliquées. Vous pouvez obtenir une liste des animations qui affectent un élément en appelant [`Element.getAnimations()`](/fr/docs/Web/API/Element/getAnimations).

## Syntaxe

```js
animate(keyframes, options);
```

### Paramètres

- `keyframes`
  - : Un tableau d'objets représentant les étapes **ou** un objet dont les propriétés sont les tableaux des valeurs sur lesquelles itérer. Voir [les formats de <i lang="en">keyframe</i>](/fr/docs/Web/API/Web_Animations_API/Keyframe_Formats) pour plus de détails.
- `options`

  - : Soit **un entier indiquant la durée de l'animation** en millisecondes, **ou** un objet qui contient une ou plusieurs propriétés de temporisation décrites dans [le paramètre `options` pour `KeyframeEffect()`](/fr/docs/Web/API/KeyframeEffect/KeyframeEffect#paramètres) et/ou les options suivantes&nbsp;:

    - `id` {{optional_inline}}
      - : Une propriété unique pour `animate()`&nbsp;: il s'agit d'une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) qu'on pourra utiliser pour faire référence à l'animation en question.

### Valeur de retour

Renvoie un objet [`Animation`](/fr/docs/Web/API/Animation).

## Exemples

Dans la démonstration [Dans le terrier du lapin (avec l'API <i lang="en">Web Animation</i>)](https://codepen.io/SphinxKnight/pen/NWwQbJz), on utilise la méthode `animate()` pour créer et immédiatement jouer une animation sur l'élément `#tunnel` afin que celui-ci défile vers le haut de façon infinie (voir les bords). Voyez ici les objets passés comme étapes et les options de temporisation.

```js
document.getElementById("tunnel").animate(
  [
    // étapes/keyframes
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // temporisation
    duration: 1000,
    iterations: Infinity,
  },
);
```

### Étapes initiales ou finales implicites

Pour les navigateurs récents, il est possible d'indiquer uniquement un état de début ou de fin pour une animation (c'est-à-dire une seule étape), c'est le navigateur qui déduira, si possible, l'autre étape (de début ou de fin donc). Prenons comme exemple [cette animation simple](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html), l'objet pour l'étape ressemble à&nbsp;:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

On a uniquement indiqué l'état final de l'animation, l'état initial est implicite.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API <i lang="en">Web Animations</i>](/fr/docs/Web/API/Web_Animations_API)
- [`Element.getAnimations()`](/fr/docs/Web/API/Element/getAnimations)
- [`Animation`](/fr/docs/Web/API/Animation)
