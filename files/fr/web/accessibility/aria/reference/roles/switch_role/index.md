---
title: "ARIA : rôle switch"
short-title: switch
slug: Web/Accessibility/ARIA/Reference/Roles/switch_role
original_slug: Web/Accessibility/ARIA/Roles/switch_role
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Le rôle **`switch`** est fonctionnellement identique au rôle [checkbox](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), sauf qu'au lieu de représenter les états «&nbsp;coché&nbsp;» et «&nbsp;non coché&nbsp;», qui sont assez génériques, le rôle `switch` représente les états «&nbsp;activé&nbsp;» et «&nbsp;désactivé&nbsp;».

Cet exemple crée un widget et lui attribue le rôle ARIA `switch`.

```html
<button
  type="button"
  role="switch"
  aria-checked="true"
  id="speakerPower"
  class="switch">
  <span aria-hidden="true">éteint</span>
  <span aria-hidden="true">allumé</span>
</button>
<label for="speakerPower" class="switch">Alimentation du haut-parleur</label>
```

## Description

Le rôle **`switch`** est identique au rôle [checkbox](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), sauf qu'au lieu d'être «&nbsp;coché&nbsp;» ou «&nbsp;non coché&nbsp;», il est soit «&nbsp;activé&nbsp;», soit «&nbsp;désactivé&nbsp;». Comme pour le rôle [checkbox](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), l'attribut [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) est obligatoire. Les deux valeurs possibles sont `true` et `false`. Contrairement à `<input type="checkbox">` ou `role="checkbox"`, il n'existe pas d'état `indeterminate` ou `mixed`. Le rôle `switch` ne prend pas en charge la valeur `mixed` pour l'attribut `aria-checked`&nbsp;: lui attribuer la valeur `mixed` revient à la définir sur `false`.

Les technologies d'assistance peuvent choisir de représenter les widgets `switch` avec une présentation spécialisée pour refléter la notion d'interrupteur activé/désactivé.

Puisqu'un switch est un contrôle interactif, il doit être sélectionnable et accessible au clavier. Si le rôle est appliqué à un élément non sélectionnable, utilisez l'attribut `tabindex` pour le rendre sélectionnable. Le raccourci clavier attendu pour basculer la valeur d'un switch est la touche <kbd>Espace</kbd>. Le·la développeur·euse doit modifier dynamiquement la valeur de l'attribut `aria-checked` lorsque le switch est basculé.

### Tous les descendants sont des éléments de présentation

Certains composants d'interface utilisateur, lorsqu'ils sont représentés dans une API d'accessibilité de plate-forme, ne peuvent contenir que du texte. Les API d'accessibilité n'ont pas de moyen de représenter des éléments sémantiques contenus dans un `switch`. Pour contourner cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants d'un élément `switch`, car ce rôle ne prend pas en charge les enfants sémantiques.

Par exemple, considérez l'élément `switch` ci‑dessous qui contient un titre&nbsp;:

```html
<div role="switch"><h3>Titre de mon interrupteur</h3></div>
```

Étant donné que les descendants d'un `switch` sont présentiels, le code suivant est équivalent&nbsp;:

```html
<div role="switch"><h3 role="presentation">Titre de mon interrupteur</h3></div>
```

Du point de vue de l'utilisateur·ice de technologie d'assistance, le titre n'existe pas puisque les extraits précédents sont équivalents à ce qui suit dans l'[arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="switch">Titre de mon interrupteur</div>
```

### Propriétés, états et rôles ARIA associés

- l'attribut [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : L'attribut `aria-checked` est **obligatoire** avec le rôle `switch`, car il représente l'état courant du widget auquel le rôle est appliqué. La valeur `true` représente l'état «&nbsp;activé&nbsp;»&nbsp;; `false` représente l'état «&nbsp;désactivé&nbsp;»&nbsp;; la valeur `mixed` n'est pas prise en charge par le rôle switch et est traitée comme `false`.
- l'attribut [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : L'attribut `aria-readonly` est pris en charge par le rôle `switch`. Il indique si l'état du widget est modifiable par l'utilisateur·ice. La valeur `false` signifie que l'utilisateur·ice _peut_ modifier l'état du widget&nbsp;; la valeur `true` signifie que l'utilisateur·ice _ne peut pas_ modifier l'état du widget. La valeur par défaut est `false`.

### Fonctionnalités JavaScript requises

- Gestionnaire d'événements de clic
  - : Lorsqu'un·e utilisateur·ice clique sur le widget switch, un [événement de clic](/fr/docs/Web/API/Element/click_event) est déclenché, qui doit être géré pour modifier l'état du widget.
- Modification de l'attribut `aria-checked`
  - : Lorsqu'un événement de clic est déclenché sur le widget switch, le gestionnaire doit modifier la valeur de l'attribut `aria-checked` de `true` à `false`, ou inversement.

## Effets possibles sur les agents utilisateur·ice·s et les technologies d'assistance

Lorsque le rôle `switch` est ajouté à un élément, l'{{Glossary("user agent", "agent utilisateur")}} le gère ainsi&nbsp;:

- L'élément est exposé à l'infrastructure d'accessibilité du système comme ayant le rôle `switch`.
- Lorsque la valeur de l'attribut `aria-checked` change, un événement d'accessibilité est déclenché via l'API d'accessibilité du système si elle existe et prend en charge le rôle `switch`.
- Tous les éléments descendants d'un élément auquel le rôle `switch` est appliqué reçoivent automatiquement le rôle `presentation`. Cela empêche les éléments utilisés pour construire le switch d'être interagis individuellement par les technologies d'assistance. Le texte de ces éléments reste visible pour l'agent utilisateur·ice et peut être lu ou transmis à l'utilisateur·ice, sauf s'il est explicitement masqué via {{cssxref("display", "display: none")}} ou `aria-hidden="true"`.

La technologie d'assistance, si elle prend en charge le rôle `switch`, réagit ainsi&nbsp;:

- Les lecteurs d'écran doivent annoncer l'élément comme un interrupteur, en fournissant éventuellement des instructions sur la façon d'activer le switch.

> [!NOTE]
> Les avis divergent sur la façon dont les technologies d'assistance doivent gérer ce rôle&nbsp;; ce qui précède est une pratique suggérée et peut différer d'autres sources.

## Exemples

Les exemples suivants vous aideront à comprendre comment appliquer et utiliser le rôle `switch`.

### Ajouter le rôle switch en ARIA

Cet exemple crée un widget et lui attribue le rôle ARIA `switch`. Le bouton est stylisé pour ressembler à un interrupteur marche/arrêt.

#### HTML

Un switch est implémenté comme un élément {{HTMLElement("button")}}, qui est initialement activé grâce à son attribut `aria-checked` défini sur `"true"`. Le switch possède deux éléments enfants contenant les libellés «&nbsp;éteint&nbsp;» et «&nbsp;allumé&nbsp;», et est suivi d'un élément {{HTMLElement("label")}} identifiant le switch.

```html
<button role="switch" aria-checked="true" id="speakerPower" class="switch">
  <span>éteint</span>
  <span>allumé</span>
</button>
<label for="speakerPower" class="switch">Alimentation du haut-parleur</label>
```

#### JavaScript

Ce code JavaScript définit et applique une fonction pour gérer les événements de clic sur les widgets switch. La fonction modifie l'attribut `aria-checked` de `true` à `false`, ou inversement.

```js
document.querySelectorAll(".switch").forEach((theSwitch) => {
  theSwitch.addEventListener("click", handleClickEvent);
});

function handleClickEvent(evt) {
  const el = evt.target;

  if (el.getAttribute("aria-checked") === "true") {
    el.setAttribute("aria-checked", "false");
  } else {
    el.setAttribute("aria-checked", "true");
  }
}
```

#### CSS

Le but du CSS est de donner au switch une apparence proche de celle d'un interrupteur d'alimentation.

```css
button.switch {
  margin: 0;
  padding: 0;
  width: 70px;
  height: 26px;
  border: 2px solid black;
  display: inline-block;
  margin-right: 0.25em;
  vertical-align: middle;
  text-align: center;
  font:
    12px / 20px "Open Sans",
    "Arial",
    serif;
}

button.switch span {
  padding: 0 4px;
  pointer-events: none;
}

[role="switch"][aria-checked="false"] :first-child,
[role="switch"][aria-checked="true"] :last-child {
  background: #226622;
  color: #eeeeff;
}

[role="switch"][aria-checked="false"] :last-child,
[role="switch"][aria-checked="true"] :first-child {
  color: #bbbbdd;
}

label.switch {
  font:
    16px "Open Sans",
    "Arial",
    sans-serif;
  line-height: 20px;
  vertical-align: middle;
  user-select: none;
}
```

La partie la plus intéressante est probablement l'utilisation des sélecteurs d'attributs et des pseudo-classes {{cssxref(":first-child")}} et {{cssxref(":last-child")}} pour modifier l'apparence du switch selon qu'il est activé ou désactivé.

#### Résultat

Le résultat ressemble à ceci&nbsp;:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle checkbox](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox)
- L'attribut ARIA [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
