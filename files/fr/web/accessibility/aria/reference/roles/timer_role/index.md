---
title: "ARIA : rôle timer"
short-title: timer
slug: Web/Accessibility/ARIA/Reference/Roles/timer_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle **`timer`** indique aux technologies d'assistance qu'un élément est un compteur numérique affichant le temps écoulé depuis un point de départ ou le temps restant jusqu'à un point d'arrivée. Les technologies d'assistance n'annoncent pas les mises à jour d'un timer, car il possède une valeur implicite [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) à `off`.

```html
<div role="timer" id="eggtimer">0</div>
```

Ceci définit cet élément `div` comme un minuteur sans temps restant.

## Description

Le rôle `timer` indique aux technologies d'assistance que cette partie du contenu web est une région dynamique contenant un minuteur affichant le temps restant ou le temps écoulé. Le texte interne d'un timer doit être une mesure du temps actuelle et mise à jour en continu. La valeur n'a pas besoin d'être lisible par une machine, mais elle doit se mettre à jour régulièrement, sauf si le minuteur est en pause ou a atteint sa fin.

Avec [`alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role), [`log`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/log_role), [`marquee`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role) et [`status`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/status_role), le rôle `timer` est une région dynamique et peut être modifié par les attributs de [région dynamique](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions).

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Certains lecteurs d'écran annoncent le nom d'un élément timer avant d'annoncer son contenu. Si un nom est visible, référencez-le avec `aria-labelledby`. L'ajout d'un `aria-label` permet d'introduire le contenu visible du timer par un texte non affiché lors de la lecture par un lecteur d'écran. Nommer un timer n'est pas obligatoire&nbsp;: si rien n'est pertinent, ces attributs peuvent être omis.

- [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : Les éléments avec le rôle `timer` ont une valeur implicite `aria-live` à `off`.

## Problèmes d'accessibilité

Si une limite de temps doit être imposée, par exemple pour des raisons de sécurité, l'utilisateur·ice doit avoir la possibilité de la désactiver ou de la prolonger. Cette restriction ne s'applique pas si la limite de temps est liée à un événement en direct, comme une vente aux enchères ou un jeu, ou si le temps pour remplir le formulaire est essentiel à la validité de la soumission.

## Exemples

### Un minuteur basique

Cet exemple propose un minuteur qui compte à rebours de 30 secondes à 0 seconde. Toute la zone d'affichage du temps possède `role="timer"` et aussi [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) pour indiquer que la région doit être annoncée dans son ensemble, et non seulement les parties modifiées. En raison de la valeur implicite `aria-live="off"`, les changements ne sont pas annoncés par défaut&nbsp;: on change manuellement le rôle en `"alert"` lorsque le minuteur atteint 10 secondes restantes pour qu'il soit annoncé une fois.

```html
<div id="countdown" role="timer" aria-atomic="true">
  <span id="number">30</span> secondes restantes&nbsp;!
</div>
```

```css
html {
  font-size: 50px;
  text-align: center;
  margin-top: 1em;
  font-family: sans-serif;
}

#number {
  font-family: monospace;
  color: #cc0000;
  font-weight: bold;
  font-size: 1.25em;
  vertical-align: middle;
}
```

```js
const numElement = document.getElementById("number");
const liveRegion = document.getElementById("countdown");
let startTime = new Date().getTime();

function decrement() {
  const timeNow = new Date().getTime();
  const elapsedTime = Math.floor((timeNow - startTime) / 1000);
  let newNumber = 30 - elapsedTime;

  if (newNumber >= 0) {
    numElement.textContent = newNumber;
  }

  if (newNumber === 10) {
    liveRegion.setAttribute("role", "alert");
    setTimeout(() => {
      liveRegion.setAttribute("role", "timer");
    }, 999);
  }
}

window.setInterval(() => {
  decrement();
}, 500);
```

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA&nbsp;: rôle `log`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA&nbsp;: rôle `marquee`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA&nbsp;: rôle `status`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [Régions dynamiques ARIA](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions)
