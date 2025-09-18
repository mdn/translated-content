---
title: "ARIA : rôle alertdialog"
short-title: alertdialog
slug: Web/Accessibility/ARIA/Reference/Roles/alertdialog_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle **alertdialog** est à utiliser sur les boîtes de dialogue d'alerte modales qui interrompent le flux de travail de l'utilisateur·ice afin de communiquer un message important et nécessitent une réponse.

## Description

Le rôle `alertdialog` sert à informer les utilisateur·ice·s d'informations urgentes qui exigent l'attention immédiate de l'utilisateur·ice. Ajouter `role="alertdialog"` sur l'élément contenant la boîte de dialogue aide la technologie d'assistance à identifier le contenu comme étant regroupé et séparé du reste du contenu de la page. Parmi les exemples figurent les messages d'erreur nécessitant une confirmation et d'autres invites de confirmation d'action.

Comme son nom l'indique, `alertdialog` est un mélange des rôles [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) et [`alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role). `alertdialog` est un type de `dialog` avec des cas d'utilisation similaires à ceux de `alert`, mais lorsqu'une réponse de l'utilisateur·ice est requise.

> [!NOTE]
> Le rôle `alertdialog` ne doit être utilisé que pour les messages d'alerte qui comportent des contrôles interactifs associés. Si une boîte de dialogue d'alerte ne contient que du contenu statique et aucun contrôle interactif, utilisez [`alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) à la place.

Étant donné qu'il s'agit d'un type de boîte de dialogue, les états, propriétés et exigences de focus clavier du rôle [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) s'appliquent également au rôle `alertdialog`.

En raison de sa nature urgente, il interrompant le flux de travail de l'utilisateur·ice, les boîtes de dialogue d'alerte doivent être [modales](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal).

La boîte de dialogue d'alerte doit comporter au moins un contrôle focusable — tel que Confirm, Close et Cancel — et le focus doit être déplacé vers ce contrôle lorsque la boîte de dialogue d'alerte apparaît. Les boîtes de dialogue d'alerte peuvent comporter des contrôles interactifs supplémentaires tels que des champs de texte et des cases à cocher.

Le rôle `alertdialog` ne doit pas être utilisé comme un substitut à d'autres boîtes de dialogue, y compris les boîtes de dialogue d'alerte sans confirmation requise ([`Window.alert()`](/fr/docs/Web/API/Window/alert)) et les invites ([`Window.prompt()`](/fr/docs/Web/API/Window/prompt)).

Ajouter `role="alertdialog"` seul ne suffit pas à rendre une boîte de dialogue d'alerte accessible. Il faut également :

- La boîte de dialogue d'alerte doit être correctement étiquetée
- Le focus clavier doit être géré correctement

La boîte de dialogue d'alerte doit avoir un nom accessible, défini avec [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Le texte de la boîte de dialogue d'alerte doit comporter une {{glossary("accessible description")}} utilisant [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

### Rôles, états et propriétés WAI‑ARIA associés

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Utilisez cet attribut pour étiqueter la boîte de dialogue d'alerte. L'attribut `aria-labelledby` est généralement l'ID de l'élément utilisé pour titrer la boîte de dialogue d'alerte.

- [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Utilisez cet attribut pour englober la description du contenu de la boîte de dialogue d'alerte. La valeur de l'attribut `aria-describedby` est généralement l'ID de l'élément contenant le message de la boîte de dialogue d'alerte, généralement placé juste après le titre.

## Exemples

### Exemple 1 : une boîte de dialogue d'alerte basique

```html
<div
  role="alertdialog"
  aria-labelledby="dialog1Titre"
  aria-describedby="dialog1Desc">
  <div role="document" tabindex="0">
    <h2 id="dialog1Titre">Votre session est sur le point d'expirer</h2>
    <p id="dialog1Desc">
      Pour prolonger votre session, cliquez sur le bouton OK
    </p>
    <button>OK</button>
  </div>
</div>
```

Le fragment de code ci‑dessus montre comment marquer une boîte de dialogue d'alerte qui ne fournit qu'un message et un bouton OK.

### Exemple 2 : boîte de dialogue de confirmation avec deux options

```html
<div
  id="alert_dialog"
  role="alertdialog"
  aria-modal="true"
  aria-labelledby="dialog_label"
  aria-describedby="dialog_desc">
  <h2 id="dialog_label">Confirmation</h2>
  <div id="dialog_desc">
    <p>Êtes‑vous sûr de vouloir supprimer cette image ?</p>
    <p>Cette modification ne peut pas être annulée.</p>
  </div>
  <ul>
    <li>
      <button id="close-btn" type="button">Non</button>
    </li>
    <li>
      <button id="confirm-btn" type="button" aria-controls="form">Oui</button>
    </li>
  </ul>
</div>
```

```js
document.getElementById("close-btn").addEventListener("click", () => {
  closeDialog();
});
document.getElementById("confirm-btn").addEventListener("click", (event) => {
  deleteFile();
});
```

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('dialog')}}
- [ARIA&nbsp;: rôle `dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [ARIA&nbsp;: rôle `alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- L'attribut ARIA [`aria-modal`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`Window.alert()`](/fr/docs/Web/API/Window/alert)
- [`Window.prompt()`](/fr/docs/Web/API/Window/prompt)
