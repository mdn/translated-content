---
title: Element.animate()
slug: Web/API/Element/animate
tags:
  - API
translation_of: Web/API/Element/animate
---
{{APIRef('Web Animations')}} {{SeeCompatTable}}

La méthode **`Element.animate()`** est un raccourci permettant de créer et jouer une animation sur un élément. Elle retourne l'instance de type {{domxref("Animation")}} alors créée.

> **Note :** Les éléments peuvent avoir plusieurs animations. Vous pouvez obtenir une liste des animations qui affectent un élément en appelant {{domxref("Element.getAnimations()")}}.

## Syntaxe

```js
element.animate(keyframes, options); 
```

### Paramèters

- `keyframes`
  - : Un [objet formatté représentant un ensemble de keyframes](/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats).
- `options`

  - : Un nombre entier (_Integer_) **représentant la durée de l'animation** (en millisecondes), ou un objet (_Object_) **contenant une ou plusieurs propriétés de timing**:

    - `id {{optional_inline}}`
      - : Une propriété unique pour `animate()`: une [`DOMString`](/en-US/docs/Web/API/DOMString) qui permet de référencer l'animation.

{{Page("/en-US/docs/Web/API/Web_Animations_API/Animation_timing_properties", "Properties")}}

#### Options à venir

Les options suivantes n'ont pas encore été implémentées, mais seront ajoutées dans un futur proche.

- `composite {{optional_inline}}`

  - : Détermine comment sont combinées les valeurs de cette animation avec d'autres animations qui ne spécifient pas leur propre opération composite. La valeur par défaut est `replace`.

    - `add` induit un effet d'ajout, dans lequel chaque itération successive se construit sur la précédente. Par exemple pour `transform`, une valeur `translateX(-200px)` n'annulerait pas une précédente valeur `rotate(20deg)` mais s'y ajouterait, pour donner `translateX(-200px) rotate(20deg)`.
    - `accumulate` est similaire mais un peu plus intéressant: `blur(2)` et `blur(5)` deviennent `blur(7) et non` `blur(2) blur(5)`.
    - `replace`, quand à elle, remplace la précédente valeur par la nouvelle.

- `iterationComposite {{optional_inline}}`
  - : Détermine comment les valeurs se construisent, d'itération en itération, **dans une même animation**. Peut être définie par `accumulate` ou `replace` (voir ci-dessus). La valeur par défaut est `replace`.
- `spacing {{optional_inline}}`

  - : Détermine comment les keyframes sans offset temporel devraient être réparties sur la durée de l'animation. La valeur par défaut est `distribute`.

    - `distribute` positionne les keyframes de façon à ce que les différences entre deux offsets de keyframes successifs soient égaux, c'est-à-dire que, sans aucun offset, les keyframes seront distribuées régulièrement / également sur toute la durée de l'animation.
    - `paced` positionne les keyframes de façon à ce que les distances entre deux valeurs successives d'une propriété spécifiée par "paced" soient égales, c'est-à-dire que plus la différence entre les valeurs de ces propriétés successives est grande, plus les keyframes seront éloignées les unes des autres.

### Valeur de retour

Retourne un objet de type {{domxref("Animation")}}.

## Exemple

Dans la démo [Down the Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010), la méthode `animate()` est utilisée pour immédiatement créer et jouer une animation sur l'élément `#tunnel,` pour le faire défiler vers le haut, indéfiniment. Remarquez le tableau d'objets définissant les keyframes et le bloc contenant les options de timing de l'animation.

```js
document.getElementById("tunnel").animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});
```

## Spécifications

| Spécification                                                                                    | Statut                               | Commentaire        |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------ |
| {{SpecName('Web Animations', '#the-animatable-interface', 'animate()' )}} | {{Spec2('Web Animations')}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("api.Element.animate")}}

## Voir aussi

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Element.getAnimations()")}}
- {{domxref("Animation")}}
