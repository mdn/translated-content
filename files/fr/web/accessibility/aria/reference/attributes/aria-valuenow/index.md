---
title: "ARIA : attribut aria-valuenow"
short-title: aria-valuenow
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-valuenow` définit la valeur actuelle pour un composant de type plage (`range`).

## Description

L'attribut `aria-valuenow` définit la valeur actuelle pour les composants de type plage. Il est similaire à l'attribut `value` des éléments HTML {{HTMLElement('progress')}}, {{HTMLElement('meter')}} et {{HTMLElement('input')}} de type [`range`](/fr/docs/Web/HTML/Reference/Elements/input/range), [`number`](/fr/docs/Web/HTML/Reference/Elements/input/number) et tous les types date et heure.

Lors de la création d'un rôle de type plage, y compris [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) et [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) sur un élément non sémantique, `aria-valuenow` permet de définir une valeur numérique actuelle comprise entre la valeur minimale et la valeur maximale. Les valeurs minimale et maximale sont définies avec [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) et [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax).

> [!WARNING]
> Le rôle [`range`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) ne doit **PAS** être utilisé car il est [«&nbsp;abstrait&nbsp;»](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). L'attribut `aria-valuenow` est utilisé sur tous les sous-types de rôles de plage.

```html
<p id="birthyearLabel">Quelle est votre année de naissance&nbsp;?</p>
<div
  role="spinbutton"
  tabindex="-1"
  aria-valuenow="1984"
  aria-valuemin="1900"
  aria-valuemax="2021"
  aria-labelledby="birthyearLabel">
  <span class="value"> 1984 </span>
  <span role="button">
    <span aria-hidden="true">+</span>
    Incrémenter l'année de 1
  </span>
  <span role="button">
    <span aria-hidden="true">-</span>
    Décrémenter l'année de 1
  </span>
</div>
```

Utilisez des éléments HTML sémantiques lorsque c'est possible&nbsp;:

```html
<label for="birthyear">Quelle est votre année de naissance&nbsp;?</label>
<input type="number" id="birthyear" value="1984" min="1900" max="2021" />
```

Si aucune valeur n'est connue, comme lorsqu'une barre de progression est dans un état indéterminé, il ne faut pas définir d'attribut `aria-valuenow`.

Lorsqu'aucun `aria-valuenow` n'est défini, aucune information n'est transmise concernant la valeur actuelle.

Lorsqu'il est utilisé avec des curseurs (<i lang="en">sliders</i> en anglais) et des boutons rotatifs (<i lang="en">spinbuttons</i> en anglais), les technologies d'assistance annoncent la valeur réelle aux utilisateur·ice·s.

Lorsqu'il est utilisé avec une barre de progression (<i lang="en">progressbar</i> en anglais) ou une barre de défilement (<i lang="en">scrollbar</i> en anglais), les technologies d'assistance annoncent la valeur comme un pourcentage. Lorsque `aria-valuemin` et `aria-valuemax` sont tous deux définis, la valeur en pourcentage est calculée comme une position sur la plage. Sinon, la valeur réelle est annoncée comme un pourcentage.

Lorsque la valeur à annoncer, qu'il s'agisse de la valeur réelle ou de la valeur en pourcentage, peut ne pas être claire pour les utilisateur·ice·s, l'attribut [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) doit être utilisé pour fournir une représentation compréhensible de la valeur. Lorsqu'elle est définie, la chaîne `valuetext` est annoncée à la place de la valeur numérique `valuenow`. Par exemple, si un curseur représente les jours de la semaine, donc que le `aria-valuenow` du jour de la semaine est un nombre, la propriété `aria-valuetext` doit être définie sur une chaîne qui rend la valeur du curseur compréhensible, comme «&nbsp;lundi&nbsp;».

## Exemples

```html
<p id="temperatureLabel">Température du four</p>
<div
  role="meter"
  id="temperature"
  aria-valuenow="205"
  aria-valuemin="70"
  aria-valuemax="250"
  aria-labelledby="temperatureLabel">
  <div class="meter-color" aria-hidden="true"></div>
</div>
```

La première règle de l'utilisation d'ARIA est&nbsp;: «&nbsp;si vous pouvez utiliser une fonctionnalité native avec la sémantique et le comportement requis déjà intégrés, au lieu de détourner un élément et d'**ajouter** un rôle, un état ou une propriété ARIA pour le rendre accessible, alors faites-le.&nbsp;»

```html
<label for="temperature">Température du four</label>
<input type="range" id="temperature" value="205" min="70" max="250" step="5" />
```

Si l'on utilise la sémantique HTML native avec un {{HTMLElement('input')}}, on bénéficie gratuitement du style et de la sémantique.

## Valeurs

- `<number>`
  - : Un nombre décimal, compris entre la valeur minimale et la valeur maximale.

## Interfaces associées

- {{DOMxRef("Element.ariaValueNow")}}
  - : La propriété {{DOMxRef("Element.ariaValueNow", "ariaValueNow")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-valuenow`.
- {{DOMxRef("ElementInternals.ariaValueNow")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaValueNow", "ariaValueNow")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-valuenow`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

Hérité dans les rôles&nbsp;:

- [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## Spécifications

{{Specifications}}

## Voir aussi

- Le rôle ARIA [`range`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- Attribut `value` de l'élément [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range#value)
- L'attribut ARIA [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
- L'attribut ARIA [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- L'attribut ARIA [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
