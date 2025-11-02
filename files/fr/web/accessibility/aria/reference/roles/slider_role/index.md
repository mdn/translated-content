---
title: "ARIA : rôle slider"
short-title: slider
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
original_slug: Web/Accessibility/ARIA/Roles/slider_role
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Le rôle `slider` définit un champ de saisie dans lequel l'utilisateur·ice sélectionne une valeur comprise dans une plage donnée.

## Description

Le rôle `slider` s'applique aux widgets de saisie de plage où l'utilisateur·ice sélectionne une valeur comprise entre des valeurs minimale et maximale définies.

### Le rôle `slider` comparé aux autres options de plage

ARIA propose aux développeur·euse·s six rôles de widget de plage différents&nbsp;: [rôles de widget](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#2._rôles_de_widgets), dont `progressbar`, `meter` et `slider`.

Le rôle [`progressbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role), similaire à l'élément HTML {{HTMLElement('progress')}}, est une plage en lecture seule indiquant la progression d'une tâche dans une seule direction, comme la barre de chargement d'un téléversement de fichier qui atteint 100&nbsp;% une fois le chargement terminé.

Le rôle [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), similaire à l'élément HTML {{HTMLElement('meter')}}, est une jauge en lecture seule indiquant la quantité de quelque chose dans une plage connue, comme l'indicateur de batterie d'un ordinateur ou la jauge d'essence d'une voiture.

Le rôle `slider`, similaire à l'élément HTML `input` de type `range` ([`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range)), est une plage de saisie en lecture et écriture. Les curseurs permettent à l'utilisateur·ice de sélectionner une valeur entre des valeurs minimale et maximale définies. La sélection s'effectue en déplaçant le curseur (<i lang="en">thumb</i> en anglais) le long d'un curseur horizontal ou vertical.

Bien que ces trois plages partagent les mêmes états et propriétés ARIA, le rôle `slider` est le seul à être en lecture et écriture&nbsp;: c'est le seul dont la valeur change par l'interaction de l'utilisateur·ice. Il doit donc pouvoir recevoir la sélection. De plus, la sélection au clavier, les clics de souris et l'interaction tactile doivent être pris en charge.

> [!WARNING]
> Pour modifier la valeur d'un curseur, les technologies d'assistance tactiles doivent répondre aux gestes utilisateur·ice pour augmenter ou diminuer la valeur en synthétisant des événements clavier.
> Testez entièrement les widgets curseur avec les technologies d'assistance sur les appareils où le tactile est le principal mode d'entrée avant d'utiliser le rôle `slider` (et tous les widgets de plage).

### Attributs communs

L'attribut [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) définit la valeur minimale. Si elle est omise ou n'est pas un nombre, la valeur par défaut est `0` (zéro).

L'attribut [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) définit la valeur maximale. Si elle est absente ou n'est pas un nombre, la valeur par défaut est 100.

La valeur de l'attribut [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) doit être comprise entre la valeur minimale et la valeur maximale incluses. Cet attribut est obligatoire pour `slider` et `meter`, et optionnel pour `progressbar`.

Pour le rôle `slider`, sauf si vous utilisez l'élément [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range), la valeur de `aria-valuenow` doit être mise à jour par programmation lorsque l'utilisateur·ice modifie la valeur.

L'attribut optionnel [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) est utilisé lorsque la valeur numérique de `aria-valuenow` ne reflète pas la valeur réelle du curseur. Comme les valeurs minimale, maximale et courante sont toutes numériques, lorsque la signification de ces nombres n'est pas numérique, il faut inclure l'attribut `aria-valuetext` avec une chaîne de caractères définissant la valeur. Par exemple, pour un curseur de tailles de t‑shirt, l'attribut `aria-valuetext` doit passer de très petit à très grand au fur et à mesure que la valeur de `aria-valuenow` augmente.

La valeur de `aria-valuetext` doit être mise à jour en même temps que la valeur ou `aria-valuenow`. Il n'existe pas d'attribut HTML équivalent pour `<input type="range">`, mais vous pouvez inclure `aria-valuetext` sur n'importe quel type {{htmlelement('input')}}. Les attributs ARIA sont pris en charge sur les éléments HTML sémantiques.

Lorsque `aria-valuetext` est une fonctionnalité importante pour un curseur, envisagez d'utiliser {{HTMLElement('select')}} avec des éléments {{HTMLElement('option')}} à la place. Même si ce n'est pas visuellement une plage, chaque valeur d'option est plus accessible à tous·tes les utilisateur·ice·s, pas seulement à celles et ceux utilisant une technologie d'assistance.

Un nom accessible est **obligatoire**. Si le rôle de plage est appliqué à un élément HTML {{HTMLElement('input')}} (ou `<meter>` ou `<progress>`), le nom accessible peut provenir du {{HTMLElement('label')}} associé. Sinon, utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) si un libellé visible est présent ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) si aucun libellé visible n'est présent.

Si vous n'utilisez pas l'élément HTML {{HTMLElement('input')}} pour créer votre curseur, incluez l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour le rendre sélectionnable. Parmi les trois types de plage, seul `slider` est interactif pour l'utilisateur·ice, et donc le seul qui doit pouvoir recevoir la sélection. La sélection doit être placée sur le curseur (<i lang="en">thumb</i> en anglais).

Les curseurs ont une valeur implicite de [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) de `horizontal`. Cet attribut n'est pas pris en charge avec `meter` ou `progressbar`.

### Interactions utilisateur·ice·s

Contrairement aux rôles `meter` et `progressbar` en lecture seule, un `slider` est un champ de saisie qui accepte l'interaction utilisateur·ice. En plus d'inclure l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour rendre le curseur sélectionnable, il faut prendre en charge la sélection au clavier et aux dispositifs de pointage.

Le curseur représente la plage des valeurs possibles. La position du curseur (<i lang="en">thumb</i> en anglais) le long du curseur indique la valeur courante. Les actions utilisateur·ice·s à prendre en charge incluent le changement de valeur en faisant glisser le curseur ou en cliquant sur le curseur avec un dispositif de pointage, ainsi que l'utilisation des touches directionnelles telles que les flèches pour les utilisateur·ice·s de clavier. Voir [interactions au clavier](#interactions_au_clavier) ci‑dessous.

> [!NOTE]
> Il est recommandé d'utiliser l'élément natif [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range) plutôt que le rôle `slider`. Les agents utilisateur·ice·s fournissent un widget stylisé pour l'élément de saisie de plage, basé sur la valeur courante par rapport aux valeurs minimale et maximale. Lorsque vous utilisez des éléments non sémantiques, toutes les fonctionnalités de l'élément sémantique natif doivent être recréées avec des attributs ARIA, du JavaScript et du CSS.

### Plage avec plusieurs curseurs

Un curseur à plusieurs curseurs (<i lang="en">thumbs</i> en anglais) est un curseur comportant deux curseurs ou plus, chacun définissant une valeur dans un groupe de valeurs liées. Par exemple, lors d'une recherche de produit, un curseur à deux curseurs peut permettre à l'utilisateur·ice de définir les limites de prix minimale et maximale pour la recherche.

Dans de nombreux curseurs à deux curseurs, les curseurs ne peuvent pas se croiser, comme lorsque le curseur définit les valeurs minimale et maximale d'une plage. Par exemple, dans un sélecteur de plage de prix, la valeur maximale du curseur qui définit l'extrémité inférieure de la plage est limitée par la valeur courante du curseur qui définit l'extrémité supérieure de la plage. La valeur minimale du curseur supérieur est également limitée par la valeur courante du curseur inférieur.

Il n'est pas obligatoire que les curseurs d'un curseur à plusieurs curseurs soient dépendants des autres valeurs de curseur, mais une expérience utilisateur·ice intuitive est indispensable&nbsp;: il est donc recommandé d'éviter ce anti‑pattern.

### Tous les descendants sont des éléments de présentation

Certaines catégories de composants d'interface utilisateur, lorsqu'elles sont représentées dans une API d'accessibilité de plate-forme, ne peuvent contenir que du texte. Les API d'accessibilité n'ont pas de moyen de représenter des éléments sémantiques contenus dans un `slider`. Pour contourner cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants d'un élément `slider`, car ce rôle ne prend pas en charge les enfants sémantiques.

Par exemple, considérez l'élément `slider` ci‑dessous qui contient un titre&nbsp;:

```html
<div role="slider"><h3>Température en degrés Celsius</h3></div>
```

Étant donné que les descendants d'un `slider` sont présentiels, le code suivant est équivalent&nbsp;:

```html
<div role="slider">
  <h3 role="presentation">Température en degrés Celsius</h3>
</div>
```

Du point de vue de l'utilisateur·ice de technologie d'assistance, le titre n'existe pas puisque les extraits précédents sont équivalents à ce qui suit dans l'[arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="slider">Température en degrés Celsius</div>
```

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (obligatoire)
  - : À définir sur une valeur décimale comprise entre `aria-valuemin` et `aria-valuemax`, indiquant la valeur courante du curseur.
- [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Les technologies d'assistance présentent souvent la valeur de `aria-valuenow` comme un nombre. Si cela n'est pas pertinent, utilisez `aria-valuetext` pour fournir au curseur une valeur plus compréhensible.
- [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : À définir sur une valeur décimale représentant la valeur minimale, et inférieure à `aria-valuemax`. Si absent, la valeur par défaut est 0.
- [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : À définir sur une valeur décimale représentant la valeur maximale, et supérieure à `aria-valuemin`. Si absent, la valeur par défaut est 100.
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Définit la chaîne de caractères ou identifie l'élément (ou les éléments) qui étiquettent le curseur et fournissent un nom accessible. Un nom accessible est obligatoire.
- [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Indique si l'orientation de l'élément est horizontale, verticale ou inconnue/ambiguë. Pour un curseur, la valeur implicite est `horizontal` mais peut être définie sur `vertical`. Comme la valeur est implicite, l'orientation du curseur n'est jamais ambiguë.

### Interactions au clavier

| Touche(s)                                                  | Action                                                          |
| ---------------------------------------------------------- | --------------------------------------------------------------- |
| <kbd>Flèche droite</kbd> et <kbd>Flèche vers le haut</kbd> | Augmente la valeur sélectionnée d'un cran                       |
| <kbd>Flèche gauche</kbd> et <kbd>Flèche vers le bas</kbd>  | Diminue la valeur sélectionnée d'un cran                        |
| <kbd>Page suivante</kbd>                                   | (Optionnel) augmente la valeur d'un montant supérieur à un cran |
| <kbd>Page précédente</kbd>                                 | (Optionnel) diminue la valeur d'un montant supérieur à un cran  |
| <kbd>Début</kbd>                                           | Définit le curseur sur la valeur minimale                       |
| <kbd>Fin</kbd>                                             | Définit le curseur sur la valeur maximale                       |

Pour les touches optionnelles <kbd>Page suivante</kbd> et <kbd>Page précédente</kbd>, le changement de valeur du curseur doit être supérieur à celui effectué par les flèches.

## Exemples

Dans l'exemple ci‑dessous, nous créons un thermomètre vertical permettant à l'utilisateur·ice de régler la température de la pièce&nbsp;:

```html
<div>
  <div id="temperatureLabel">Température</div>
  <div id="temperatureValue">20°C</div>
  <div id="temperatureSlider">
    <div
      id="temperatureSliderThumb"
      role="slider"
      aria-labelledby="temperatureLabel"
      aria-orientation="vertical"
      tabindex="0"
      aria-valuemin="15.0"
      aria-valuemax="25.0"
      aria-valuenow="20.0"
      aria-valuetext="20 degrés Celsius"
      style="top: calc((25 - 20)*2rem - 0.5rem)"></div>
  </div>
</div>
```

La position du curseur (<i lang="en">thumb</i> en anglais) est calculée comme la valeur maximale moins la valeur courante, multipliée par la hauteur d'un degré, moins la moitié de la hauteur du curseur pour le centrer. Le reste des styles est statique.

```css
[id="temperatureSlider"] {
  position: relative;
  height: 20rem;
  width: 1rem;
  outline: 1px solid;
  margin: 3rem;
}

[id="temperatureSliderThumb"] {
  position: absolute;
  height: 1rem;
  width: 2rem;
  background-color: currentColor;
  left: -0.5rem;
}
```

Pour que cet exemple fonctionne, il faut écrire un script pour gérer tous les événements clavier et pointeur, y compris les écouteurs d'événements pour `pointermove`, `pointerup`, `focus`, `blur` et `keydown`, et fournir des styles pour l'état par défaut et lorsque le curseur et le curseur reçoivent la sélection. La position du curseur, les valeurs de `aria-valuenow` et `aria-valuetext`, ainsi que le texte interne de l'élément avec l'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) "temperatureValue" doivent être mis à jour à chaque fois que les touches <kbd>Flèche gauche</kbd>, <kbd>Flèche vers le bas</kbd>, <kbd>Flèche droite</kbd>, <kbd>Flèche vers le haut</kbd>, <kbd>Début</kbd>, <kbd>Fin</kbd>, et, optionnellement, <kbd>Page précédente</kbd> et <kbd>Page suivante</kbd> sont relâchées et lorsque l'utilisateur·ice fait glisser le curseur ou clique sur le curseur de température.

En utilisant du HTML sémantique, cela pourrait s'écrire ainsi&nbsp;:

```html
<label for="temperature"> Température </label>
<output id="temperatureValue">20°C</output>
<input
  type="range"
  id="temperatureSlider"
  min="15"
  max="25"
  step="0.1"
  value="20"
  aria-valuetext="20 degrés Celsius" />
```

```css
#temperatureSlider {
  transform: rotate(-90deg);
}
```

En utilisant {{HTMLElement('input')}}, on obtient un widget de saisie de plage déjà stylisé, avec sélection clavier, styles de sélection, interactions clavier et mise à jour automatique de la valeur lors de l'interaction utilisateur·ice. Il reste à utiliser du JavaScript pour modifier `aria-valuetext` et la valeur de l'élément {{HTMLElement('output')}}.

Il existe plusieurs façons de rendre un champ de saisie de plage vertical. Dans cet exemple, nous avons utilisé les [transformations CSS](/fr/docs/Web/CSS/Reference/Properties/transform).

## Bonnes pratiques

Si le curseur décrit la progression de chargement d'une région particulière d'une page, incluez l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) pour référencer le statut du curseur, et définissez l'attribut [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) à `true` sur la région jusqu'à la fin du chargement.

L'élément HTML `<input type="range">` possède implicitement le rôle `slider`. N'utilisez pas les attributs `aria-valuemax` ou `aria-valuemin` sur les éléments `<input type="range">`&nbsp;: utilisez plutôt `min` et `max`. Les autres attributs globaux `aria-*` et tous les attributs `aria-*` applicables au rôle slider peuvent être utilisés.

### Préférer le HTML

Il est recommandé d'utiliser un élément natif {{HTMLElement("input")}} de type `range` ([`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range)) plutôt que le rôle `slider`.

## Spécifications

{{Specifications}}

## Voir aussi

- [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range)
- L'élément HTML {{HTMLElement('progress')}}
- L'élément HTML {{HTMLElement('meter')}}
- Autres widgets de plage&nbsp;:
  - [ARIA&nbsp;: rôle `meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [ARIA&nbsp;: rôle `scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [ARIA&nbsp;: rôle `separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (si sélectionnable)
  - [ARIA&nbsp;: rôle `progressbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [ARIA&nbsp;: rôle `spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- Exemples de bonnes pratiques W3C WAI-ARIA&nbsp;:
  - [Curseur multi‑curseurs horizontal <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Curseur de visualisation de couleur <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Curseur d'évaluation <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Curseur de recherche média <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Curseur vertical de température <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
