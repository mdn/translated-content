---
title: "ARIA : rôle spinbutton"
short-title: spinbutton
slug: Web/Accessibility/ARIA/Reference/Roles/spinbutton_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `spinbutton` définit un type de plage où l'utilisateur·ice doit sélectionner une valeur parmi des choix discrets.

## Description

Le rôle `spinbutton` indique que l'élément est un widget de saisie dont la valeur est limitée à un ensemble ou une plage de valeurs discrètes. Ce rôle inclut aussi des fonctions d'incrémentation et de décrémentation. Par exemple, dans un widget permettant de choisir une mise dans un jeu de Texas Holdem, le rôle `spinbutton` peut permettre à l'utilisateur·ice de sélectionner un nombre compris entre les mises minimale et maximale, par paliers, selon les règles du jeu en cours.

Le spinbutton représente la plage des valeurs possibles. La valeur du champ de saisie spinbutton correspond à la valeur courante.

Les spinbuttons comportent souvent trois composants&nbsp;: un champ texte affichant la valeur courante, un bouton d'incrémentation et un bouton de décrémentation. Le champ texte est généralement le seul composant sélectionnable, car les fonctions d'incrémentation et de décrémentation sont accessibles au clavier via les flèches. En général, le champ texte permet aussi à l'utilisateur·ice de modifier directement la valeur.

En plus d'inclure l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour rendre le spinbutton sélectionnable, il faut prendre en charge la sélection au clavier et aux dispositifs de pointage. Les touches directionnelles telles que les flèches doivent être prises en charge pour les utilisateur·ice·s de clavier. Le changement de valeur lors du clic sur les boutons d'incrémentation et de décrémentation doit être pris en charge pour les dispositifs de pointage. Voir [interactions au clavier](#interactions_au_clavier) ci‑dessous.

> [!NOTE]
> Il est recommandé d'utiliser l'élément [`<input type="number">`](/fr/docs/Web/HTML/Reference/Elements/input/number), ou d'autres types de saisie pour les dates et heures qui possèdent aussi implicitement la sémantique `role="spinbutton"`, plutôt que le rôle `spinbutton`. Les agents utilisateurs fournissent un widget stylisé pour ces éléments de saisie, avec incrémentation, décrémentation et limitation native de la plage. Si vous utilisez des éléments non sémantiques, toutes les fonctionnalités de l'élément sémantique natif doivent être recréées avec des attributs ARIA, du JavaScript et du CSS.

### Options de widget de plage ARIA

ARIA propose aux développeur·euse·s six rôles de widget de plage différents&nbsp;: [rôles de widget](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#2._rôles_de_widgets), dont `progressbar`, `meter`, `slider` et `spinbutton`.

Le rôle [`progressbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role), similaire à l'élément HTML {{HTMLElement('progress')}}, est une plage en lecture seule. Il indique la progression d'une tâche dans une seule direction, comme la barre de chargement d'un téléversement de fichier qui atteint 100&nbsp;% une fois le chargement terminé.

Le rôle [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), similaire à l'élément HTML {{HTMLElement('meter')}}, est une jauge en lecture seule. Il indique la quantité de quelque chose dans une plage connue, comme l'indicateur de batterie d'un ordinateur ou la jauge d'essence d'une voiture.

Le rôle `slider`, similaire à l'élément HTML `input` de type `range` ([`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range)), est une plage de saisie en lecture et écriture. Les curseurs permettent à l'utilisateur·ice de sélectionner une valeur entre les valeurs minimale et maximale définies. La sélection s'effectue en déplaçant le curseur (<i lang="en">thumb</i> en anglais) le long d'un curseur horizontal ou vertical.

Bien que ces trois plages partagent les mêmes états et propriétés ARIA, le rôle `spinbutton` est le seul à être en lecture et écriture&nbsp;: c'est le seul dont la valeur change par l'interaction de l'utilisateur·ice. Il doit donc pouvoir recevoir la sélection. De plus, la sélection au clavier, les clics de souris et l'interaction tactile doivent être pris en charge.

> [!WARNING]
> Pour modifier la valeur d'un spinbutton, les technologies d'assistance tactiles doivent répondre aux gestes utilisateur·ice pour augmenter ou diminuer la valeur en synthétisant des événements clavier.
> Testez entièrement les widgets spinbutton avec les technologies d'assistance sur les appareils où le tactile est le principal mode d'entrée avant d'utiliser le rôle `spinbutton` (et tous les widgets de plage).

### Attributs communs

L'attribut [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) définit la valeur minimale. Si elle est omise ou n'est pas un nombre, la valeur par défaut est `0` (zéro).

L'attribut [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) définit la valeur maximale. Si elle est absente ou n'est pas un nombre, la valeur par défaut est `100`.

La valeur de l'attribut [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) doit être comprise entre la valeur minimale et la valeur maximale incluses. Cet attribut est obligatoire pour `spinbutton` et `meter`, et optionnel pour `progressbar`.

Pour le rôle `spinbutton`, sauf si vous utilisez des éléments HTML sémantiques comme [`<input type="number">`](/fr/docs/Web/HTML/Reference/Elements/input/number), la valeur de `aria-valuenow` doit être mise à jour par programmation lorsque la valeur change.

L'attribut optionnel [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) est utilisé lorsque la valeur numérique de `aria-valuenow` ne reflète pas la valeur réelle du spinbutton. Les valeurs minimale, maximale et courante doivent être numériques. Lorsque la signification de ces nombres n'est pas numérique, il faut inclure l'attribut `aria-valuetext` avec une chaîne de caractères définissant la valeur. Par exemple, pour un spinbutton de tailles de t‑shirt, l'attribut `aria-valuetext` doit passer de très petit à très grand au fur et à mesure que la valeur de `aria-valuenow` augmente.

La valeur de `aria-valuetext` doit être mise à jour en même temps que la valeur ou `aria-valuenow`. Les attributs ARIA sont pris en charge sur les éléments HTML sémantiques. Il n'existe pas d'attribut HTML équivalent pour `<input>`, mais vous pouvez inclure `aria-valuetext` sur n'importe quel type {{htmlelement('input')}}. Lorsque `aria-valuetext` est une fonctionnalité importante pour un spinbutton, envisagez d'utiliser {{HTMLElement('select')}} avec des éléments {{HTMLElement('option')}} à la place.

Un nom accessible est **obligatoire**. Si le rôle `spinbutton` est appliqué à un élément HTML {{HTMLElement('input')}}, le nom accessible peut provenir du {{HTMLElement('label')}} associé. Sinon, utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) si un libellé visible est présent ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) si aucun libellé visible n'est présent.

Si vous n'utilisez pas l'élément HTML {{HTMLElement('input')}} pour créer votre spinbutton, incluez l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour le rendre sélectionnable. Le rôle `spinbutton` est interactif pour l'utilisateur·ice, et doit donc pouvoir recevoir la sélection. La sélection doit être placée sur le champ de saisie spinbutton et non sur les boutons associés d'incrémentation et de décrémentation.

### Descendants limités aux boutons ou au texte

Certaines catégories de composants d'interface utilisateur, lorsqu'elles sont représentées dans une API d'accessibilité de plate-forme, ne peuvent contenir que certains contenus. Les enfants ou éléments possédés d'un `spinbutton` sont limités à un champ texte et deux boutons. Alternativement, le rôle `spinbutton` peut être appliqué à un champ de saisie texte et des boutons frères peuvent être utilisés pour l'incrémentation et la décrémentation.

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (obligatoire)
  - : À définir sur une valeur décimale comprise entre `aria-valuemin` et `aria-valuemax`, indiquant la valeur courante du spinbutton. Si absent, il n'y a pas de valeur par défaut.

- [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Les technologies d'assistance présentent souvent la valeur de `aria-valuenow` comme un nombre. Si `aria-valuenow` n'est pas pertinent, utilisez `aria-valuetext` pour fournir au spinbutton une valeur plus compréhensible.

- [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : À définir sur une valeur décimale représentant la valeur minimale et inférieure à `aria-valuemax`. Si absent, il n'y a pas de valeur par défaut.

- [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : À définir sur une valeur décimale représentant la valeur maximale et supérieure à `aria-valuemin`. Si absent, il n'y a pas de valeur par défaut.

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Définit la chaîne de caractères ou identifie l'élément (ou les éléments) qui étiquettent le spinbutton et fournissent un nom accessible. Un nom accessible est obligatoire.
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Définit une chaîne de caractères qui étiquette le spinbutton. Cela fournit un nom accessible à l'élément lorsqu'aucun libellé visible n'est disponible via {{HTMLElement('label')}} ou `aria-labelledby`.

### Interactions au clavier

| Touche(s)                                                  | Action                                                                  |
| ---------------------------------------------------------- | ----------------------------------------------------------------------- |
| <kbd>Flèche droite</kbd> et <kbd>Flèche vers le haut</kbd> | Augmente la valeur sélectionnée d'un cran                               |
| <kbd>Flèche gauche</kbd> et <kbd>Flèche vers le bas</kbd>  | Diminue la valeur sélectionnée d'un cran                                |
| <kbd>Page suivante</kbd>                                   | (Optionnel) augmente la valeur d'un montant supérieur ou égal à un cran |
| <kbd>Page précédente</kbd>                                 | (Optionnel) diminue la valeur d'un montant supérieur ou égal à un cran  |
| <kbd>Début</kbd>                                           | Définit le spinbutton sur la valeur minimale                            |
| <kbd>Fin</kbd>                                             | Définit le spinbutton sur la valeur maximale                            |

Pour les touches optionnelles <kbd>Page suivante</kbd> et <kbd>Page précédente</kbd>, le changement de valeur du spinbutton doit de préférence être supérieur à celui effectué par les flèches.

## Exemples

Dans l'exemple ci‑dessous, le rôle `spinbutton` est défini pour permettre à l'utilisateur·ice de sélectionner un jour du mois&nbsp;:

```html
<p id="day">Saisissez le jour du mois</p>
<button type="button" tabindex="-1" aria-label="jour précédent">˱</button>
<div
  role="spinbutton"
  tabindex="0"
  aria-valuenow="1"
  aria-valuetext="premier"
  aria-valuemin="1"
  aria-valuemax="31"
  aria-labelledby="jour">
  1
</div>
<button type="button" tabindex="-1" aria-label="jour suivant">˲</button>
```

Dans cet exemple, un `tabindex` négatif est utilisé pour retirer les boutons de l'ordre de tabulation par défaut. On ajoute aussi `tabindex` à un {{HTMLElement('div')}} normalement non interactif pour inclure le spinbutton dans l'ordre de tabulation. Cet exemple nécessite du JavaScript pour gérer les actions clavier lorsque le spinbutton a la sélection et lorsque l'utilisateur·ice clique sur les boutons.

### Avec du HTML sémantique

Cela pourrait aussi s'écrire en HTML sémantique, sans CSS ni JavaScript, et sans avoir à inclure ou gérer des boutons d'incrémentation et de décrémentation supplémentaires. Le code ci‑dessous montre l'exemple précédent sans le rôle `spinbutton` et en utilisant du HTML sémantique.

```html
<label for="day">Saisissez le jour du mois</label>
<input
  type="number"
  value="1"
  aria-valuetext="premier"
  min="1"
  max="31"
  id="day" />
```

{{EmbedLiveSample("avec_du_html_sémantique", 50, 50)}}

Dans ce cas, le seul JavaScript nécessaire serait de mettre à jour `aria-valuetext` lorsque la valeur du champ change, ce qui est vraiment une fonctionnalité optionnelle ici.

## Bonnes pratiques

L'élément HTML `<input type="number">` possède implicitement le rôle `spinbutton`. L'élément HTML `<input type="date">` possède trois spinbuttons imbriqués, un pour le mois, un pour le jour et un pour l'année. Lorsque vous utilisez des éléments de formulaire HTML sémantiques pour leur usage prévu, n'utilisez pas les attributs `aria-valuemax` ou `aria-valuemin`&nbsp;: utilisez plutôt `min` et `max`. Les autres attributs globaux `aria-*` et tous les attributs `aria-*` applicables au rôle spinbutton peuvent être utilisés.

### Préférer le HTML sémantique

Il est recommandé d'utiliser l'élément natif {{HTMLElement("input")}} de type `number` ([`<input type="number">`](/fr/docs/Web/HTML/Reference/Elements/input/number)) plutôt que le rôle `spinbutton`.

## Spécifications

{{Specifications}}

## Voir aussi

- [`<input type="number">`](/fr/docs/Web/HTML/Reference/Elements/input/number)
- [`<input type="date">`](/fr/docs/Web/HTML/Reference/Elements/input/date)
- [`<input type="time">`](/fr/docs/Web/HTML/Reference/Elements/input/time)
- Autres widgets de plage&nbsp;:
  - [ARIA&nbsp;: rôle `meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [ARIA&nbsp;: rôle `scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [ARIA&nbsp;: rôle `separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (si sélectionnable)
  - [ARIA&nbsp;: rôle `progressbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [ARIA&nbsp;: rôle `slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- Exemples fonctionnels&nbsp;:
  - [Exemple de spinbutton pour sélection de date <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Exemple de barre d'outils&nbsp;: sélecteur de taille de police <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
