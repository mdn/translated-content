---
title: "ARIA : rôle tooltip"
short-title: tooltip
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: e38b228782cf7911b269ae643364dbaccca32b65
---

Un `tooltip` («&nbsp;info-bulle&nbsp;») est une bulle de texte contextuelle qui affiche une description pour un élément, apparaissant au survol du pointeur ou lors de la sélection clavier.

## Description

Les info-bulles fournissent des informations contextuelles sur un élément lorsque celui-ci reçoit la sélection ou est survolé, mais sont sinon invisibles sur la page. L'info-bulle s'affiche automatiquement après un court délai&nbsp;: l'utilisateur·ice ne la demande pas. Bien qu'une info-bulle puisse être placée sur n'importe quel contenu, elles servent généralement à donner des indications sur des outils ou des contrôles, par exemple pour fournir un complément d'information à des icônes ayant des libellés courts (ou aucun libellé, ce qui n'est pas accessible&nbsp;!).

Une info-bulle devient généralement visible après un délai de une à cinq secondes, en réponse à un survol de la souris ou à la sélection clavier de l'élément associé. Elle s'ouvre automatiquement, sans action de l'utilisateur·ice, et se ferme automatiquement lorsque la sélection est perdue ou que la souris quitte l'élément ou l'info-bulle. Elle doit rester ouverte lorsque la souris survole l'info-bulle elle-même, et doit aussi se fermer lorsque l'utilisateur·ice appuie sur la touche <kbd>Échap</kbd>.

Comme l'info-bulle ne reçoit jamais la sélection et n'est pas dans l'ordre de tabulation, elle ne peut pas contenir d'éléments interactifs comme des liens, des champs de saisie ou des boutons.

Le rôle tooltip n'est pas adapté pour l'icône «&nbsp;i&nbsp;» d'information, ⓘ. Une info-bulle est directement associée à l'élément propriétaire. L'icône ⓘ n'est pas «&nbsp;décrite&nbsp;» par une information détaillée&nbsp;: c'est l'outil ou le contrôle qui l'est.

L'utilisation du rôle ARIA `tooltip` complète le comportement natif des info-bulles du navigateur. Un exemple d'info-bulle native est la façon dont certains navigateurs affichent la valeur de l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) lors d'un long survol de la souris. On ne peut pas activer cette fonctionnalité par la sélection clavier ou par interaction tactile, ce qui la rend inaccessible. Si l'information est suffisamment importante pour être dans une info-bulle ou un titre, envisagez de l'inclure dans un texte visible.

Les éléments avec le rôle `tooltip` doivent être référencés via [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) avant ou lors de l'affichage de l'info-bulle. L'attribut `aria-describedby` est sur l'élément propriétaire, pas sur l'info-bulle.

L'info-bulle n'est pas considérée comme un popup au sens de la propriété [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) sur l'élément propriétaire, d'où l'utilisation du terme «&nbsp;bulle de texte&nbsp;» dans la définition introductive.

Bien qu'une info-bulle puisse apparaître et disparaître, son apparition étant automatique et non contrôlée intentionnellement par l'utilisateur·ice, le rôle [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) n'est pas pris en charge.

Le nom accessible d'une info-bulle peut provenir de son contenu. En théorie, il pourrait provenir d'un [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), mais dans la plupart des cas, il n'est pas recommandé d'utiliser les propriétés ARIA pour fournir un nom accessible à une info-bulle.

Les info-bulles fournissent des informations supplémentaires, généralement sans interaction directe sur l'info-bulle elle-même. Elles sont généralement associées au contenu qu'elles définissent via un [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) avec l'id de l'élément principal. Ainsi, si l'info-bulle a un nom accessible explicitement défini, ce nom est exposé comme description de l'élément principal plutôt que comme contenu de l'info-bulle, ce qui signifie que le contenu de l'info-bulle peut ne jamais être découvert par un·e utilisateur·ice de lecteur d'écran.

### Propriétés, états et rôles WAI-ARIA associés

- L'élément qui sert de conteneur à l'info-bulle porte `role="tooltip"`.
- L'élément qui déclenche l'info-bulle référence l'élément info-bulle avec [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

### Interactions au clavier

- <kbd>Échap</kbd>
  - : Ferme l'info-bulle

L'info-bulle doit apparaître à la sélection ou au survol de l'élément, sans interaction supplémentaire. Elle doit disparaître automatiquement lorsque la sélection de l'élément propriétaire est perdue ou que la souris quitte l'élément propriétaire et l'info-bulle. Bien que l'info-bulle ne reçoive pas la sélection, la touche <kbd>Échap</kbd> doit la fermer si elle est ouverte.

### Fonctionnalités JavaScript requises

- L'info-bulle s'affiche et disparaît via la sélection clavier et la perte de sélection, ainsi que par les événements souris&nbsp;: survol et sortie.
- L'info-bulle ne reçoit jamais la sélection. La sélection reste sur l'élément propriétaire.
- L'info-bulle peut être masquée avec la touche <kbd>Échap</kbd>.
- L'info-bulle reste ouverte au survol.
- L'info-bulle n'est masquée que via JavaScript et les sélecteurs CSS. Si JavaScript n'est pas disponible, l'info-bulle est affichée.

## Exemples

```html
<label for="password">Mot de passe&nbsp;:</label>
<input aria-describedby="passwordrules" id="password" type="password" />
<div role="tooltip" id="passwordrules">
  <p>Règles de mot de passe&nbsp;:</p>
  <ul>
    <li>8 caractères minimum</li>
    <li>
      Inclure au moins une lettre minuscule, une lettre majuscule, un chiffre et
      un caractère spécial
    </li>
    <li>Unique à ce site web</li>
  </ul>
</div>
```

L'info-bulle peut être instanciée avec du CSS. Changez le nom de la classe avec JavaScript pour masquer l'info-bulle si l'utilisateur·ice appuie sur la touche <kbd>Échap</kbd>.

```css
[role="tooltip"] {
  visibility: hidden;
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: black;
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  /* Laisser un délai avant de masquer pour que la souris puisse quitter le
  champ et entrer dans l'info-bulle */
  transition: visibility 0.5s;
}
[aria-describedby]:hover,
[aria-describedby]:focus {
  position: relative;
}
[aria-describedby]:hover + [role="tooltip"],
[aria-describedby]:focus + [role="tooltip"],
[role="tooltip"]:hover,
[role="tooltip"]:focus {
  visibility: visible;
}
```

{{EmbedLiveSample("exemples", "", 300)}}

Le code ci-dessus masque l'info-bulle avec du CSS à l'état par défaut ou si la classe `hide-tooltip` a été ajoutée avec JavaScript (lorsque l'utilisateur·ice appuie sur <kbd>Échap</kbd>), avec une spécificité élevée pour garantir que l'info-bulle ne s'affiche pas. Quand l'élément propriétaire reçoit la sélection, il est positionné relativement et l'info-bulle devient visible. On garde l'info-bulle visible au survol, conformément à [WCAG 1.4.13](#problèmes_daccessibilité). Ici, on permet au curseur de passer du champ à l'info-bulle sans que celle-ci disparaisse, en attendant 0,5&nbsp;s entre les deux&nbsp;; il existe d'autres moyens d'obtenir ce résultat, comme remplir l'espace avec un élément transparent qui garde l'info-bulle visible au survol.

## Problèmes d'accessibilité

Si l'information est suffisamment importante pour une info-bulle, n'est-elle pas suffisamment importante pour être toujours visible&nbsp;?

L'info-bulle doit rester ouverte au survol, même si cela signifie que la souris quitte techniquement l'élément propriétaire. Comme le contenu qui apparaît au survol peut être difficile, voire impossible à percevoir si l'utilisateur·ice doit garder le pointeur sur le déclencheur, [WCAG 1.4.13](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan) précise que le contenu rendu visible doit être persistant, c'est-à-dire qu'il ne doit pas disparaître sans action de l'utilisateur·ice.

## Bonnes pratiques

Plutôt que d'utiliser des info-bulles et de masquer des informations importantes, privilégiez des descriptions claires, concises et toujours visibles. Si l'espace le permet, n'utilisez pas d'info-bulles ni de toggletips. Fournissez simplement des libellés explicites et un texte suffisant.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [La pseudo-classe CSS `:focus`](/fr/docs/Web/CSS/Reference/Selectors/:focus)
- [Tooltips & Toggletips <sup>(angl.)</sup>](https://inclusive-components.design/tooltips-toggletips/) par Heydon Pickering
- [Comprendre SC 1.4.13&nbsp;: contenu au survol ou à la sélection (WCAG niveau AA) <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
