---
title: Utiliser le rôle slider
slug: Web/Accessibility/ARIA/Roles/slider_role
---

### Description

Cette technique présente l'utilisation du rôle [slider](http://www.w3.org/TR/wai-aria/roles#slider).

Le rôle `slider` est utilisé pour des balises qui permettent à l'utilisateur de sélectionner une valeur dans un intervalle donné. Le rôle `slider` est assigné à la «&nbsp;_molette_&nbsp;», le contrôle qui est ajusté pour modifier la valeur. Typiquement, un autre élément est stylé pour représenter visuellement l'intervalle de valeurs possibles, et le curseur est positionné visuellement pour représenter la valeur dans cet intervalle. Lorsque l'utilisateur interagit avec la molette, l'application doit programmatiquement ajuster l'attribut `aria-valuenow` du curseur de défilement (et si possible `aria-valuetext`) pour refléter la valeur courante. Voir la section [Exemples](#exemples) ci-dessous pour plus d'informations.

#### Clavier et focus

Le curseur doit pouvoir recevoir le focus et être manipulable au clavier. Lorsque l'utilisateur tabule pour amener le focus sur le curseur, il doit arriver sur la molette&nbsp;: le contrôle qu'un utilisateur de souris fera glisser. Les touches flèches doivent agir de la façon suivante (attention toutefois, dans les applications, aux directions de flèches pour les langues s'écrivant de droite à gauche)&nbsp;:

| Touche(s)              | Action                                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Flèches haut et droite | Augmente la valeur sélectionnée                                                                                             |
| Flèches bas et gauche  | Baisse la valeur sélectionnée                                                                                               |
| Page haut et Page bas  | Augmente ou baisse facultativement la valeur selon un pas prédéfini (par exemple de 10 en 10 dans un intervalle de 0 à 100) |

### Effets possibles sur les agents utilisateurs et les technologies d'assistance

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d'assistance devraient traiter cette technique. L'information fournie ci-dessus est l'une de ces opinions et n'est pas normative.

### Exemples

#### Exemple 1&nbsp;: Intervalle numérique simple

Dans l'exemple ci-dessous, un simple curseur est utilisé pour sélectionner une valeur entre 1 et 100. Le volume courant est 60. L'application actualisera programmatiquement la valeur de `aria-valuenow` en réponse à l'action de l'utilisateur.

```html
<div id="slider-label">Volume</div>

<div class="vol-slider">
  <a
    href="#"
    id="vol-handle"
    class="handle"
    role="slider"
    aria-labelledby="slider-label"
    aria-valuemin="1"
    aria-valuemax="100"
    aria-valuenow="60">
  </a>
</div>
```

#### Exemple 2&nbsp;: Valeurs texte

Parfois, un slider est utilisé pour choisir une valeur qui n'est pas, sémantiquement, un nombre. Dans ces cas là, l'attribut `aria-valuetext` est utilisé pour donner le texte approprié pour la valeur sélectionnée. Dans l'exemple ci-dessous, le slider est utilisé pour sélectionner un jour de la semaine .

```html
<div id="slider-label">Jour de la semaine&nbsp;:</div>

<div class="day-slider">
  <a
    href="#"
    id="day-handle"
    class="day-slider-handle"
    role="slider"
    aria-labelledby="slider-label"
    aria-valuemin="1"
    aria-valuemax="7"
    aria-valuenow="2"
    aria-valuetext="Lundi">
  </a>
</div>
```

L'extrait de code ci-dessous décrit une fonction qui répond à l'action de l'utilisateur et actualise les attributs `aria-valuenow` et `aria-valuetext`&nbsp;:

```js
var dayNames = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
var updateSlider = function (newValue) {
  var handle = document.getElementById("day-handle");
  handle.setAttribute("aria-valuenow", newValue.toString());
  handle.setAttribute("aria-valuetext", dayNames[newValue]);
};
```

### Notes

### Attributs ARIA utilisés

- [aria-valuemin](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuemin)&nbsp;;
- [aria-valuemax](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuemax)&nbsp;;
- [aria-valuenow](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow)&nbsp;;
- [aria-valuetext](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuetext)&nbsp;;
- [aria-orientation](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-orientation).

### Autres ressources

- [Spécifications WAI-ARIA pour le rôle `slider`](http://www.w3.org/TR/wai-aria/roles#slider)
