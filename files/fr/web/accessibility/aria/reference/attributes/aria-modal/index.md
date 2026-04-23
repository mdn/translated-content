---
title: "ARIA : attribut aria-modal"
short-title: aria-modal
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-modal
l10n:
  sourceCommit: 2d5e220cf073e783d053f0ea8470d042b02dc3f3
---

L'attribut `aria-modal` indique si un élément est modal lorsqu'il est affiché.

## Description

Qu'une section de contenu soit «&nbsp;modale&nbsp;» signifie que la navigation est limitée à cette zone et que l'arrière-plan (les éléments parents et adjacents du modal) est masqué. Ajouter `aria-modal="true"` sur des conteneurs [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) et [`alertdialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) signale la présence d'un élément «&nbsp;modal&nbsp;» aux technologies d'assistance, mais ne rend pas réellement l'élément modal. Les fonctionnalités qui rendent l'élément réellement modal doivent être implémentées par le·la développeur·euse.

> [!NOTE]
> ARIA ne modifie que l'arbre d'accessibilité, c'est‑à‑dire la façon dont les technologies d'assistance présentent le contenu à vos utilisateur·ice·s. ARIA ne change rien au fonctionnement ou au comportement d'un élément. Pour créer un effet modal, vous devez utiliser JavaScript pour gérer le comportement, la sélection et les états ARIA.

Applicable uniquement aux conteneurs `dialog` et `alertdialog`, définir `aria-modal="true"` indique aux technologies d'assistance que pour interagir avec d'autres contenus de la page, il faut fermer le dialogue modal ou lui retirer la sélection.

Un dialogue modal correspond à l'affichage d'un contenu dont l'interaction de l'utilisateur·ice est limitée à cette section jusqu'à ce qu'elle soit fermée.

Lors de la création de dialogues modaux, `aria-modal="true"` indique aux technologies d'assistance que les fenêtres situées sous le dialogue courant ne font pas partie du contenu modal.

Lorsqu'un élément modal est affiché, la sélection devrait être placée dans le modal. La sélection doit être «&nbsp;capturée&nbsp;» à l'intérieur du modal tant qu'il est visible, jusqu'à sa fermeture. Les technologies d'assistance peuvent alors naviguer dans le contenu du modal et comprendre sa portée. L'attribut `aria-modal` aide les technologies d'assistance à communiquer les limites du modal et à le distinguer du reste du contenu de la page. Lors de la fermeture, la sélection doit revenir à l'élément qui a déclenché le modal.

Assurez-vous que le modal soit contrôlable uniquement via ses éléments descendants. Si un dialogue modal dispose d'un bouton de fermeture, le bouton doit être un descendant contenu dans le conteneur modal au niveau du DOM.

Quand un élément modal est affiché, les auteur·ice·s **doivent** marquer tout autre contenu comme inerte (par exemple «&nbsp;sous-arbres inertes&nbsp;» en HTML). Le contenu désactivé n'est pas du contenu inerte. Le contenu inerte ne peut pas être interagi avec en modes de navigation normaux ou spécialisés comme la navigation au clavier (<i lang="en">caret browsing</i>), qui permet à un·e utilisateur·ice de technologies d'assistance d'explorer la page en détail. Cela inclut le contenu désactivé, dont le contenu peut pourtant avoir du sens.

L'attribut [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert) est un attribut booléen qui indique, par sa présence, que l'élément et tous ses descendants (y compris le DOM d'ombre (<i lang="en">shadow DOM</i>)) doivent être rendus inertes.

Inclure `aria-modal="true"` sur un [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) ou un [`alertdialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) supprime l'obligation d'ajouter [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) sur le contenu d'arrière-plan, puisque `aria-modal` informe les technologies d'assistance que le contenu en dehors d'un dialogue est inerte. Notez que, bien que la prise en charge de l'élément {{HTMLElement("dialog")}} soit correcte, tester soigneusement votre implémentation reste vital.

Si un dialogue n'est pas modal — il n'y a pas d'arrière-plan inerte et la sélection n'est pas confinée au dialogue — indiquez `aria-modal="false"` ou omettez simplement l'attribut.

## Exemple

```html
<div id="backdrop" class="no-scroll">
  <div
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="dialog_label"
    aria-describedby="dialog_desc">
    <h2 id="dialog_label">Confirmation</h2>
    <div id="dialog_desc">
      <p>Voulez-vous vraiment supprimer ce fichier&nbsp;?</p>
    </div>
    <button id="close-btn" type="button">Non. Fermer cette fenêtre.</button>
    <button id="confirm-btn" type="button">Oui. Supprimer le fichier.</button>
  </div>
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

Cet exemple partiel inclut un `alertdialog` imbriqué dans un arrière-plan plein écran et non défilable.

L'attribut [`role="alertdialog"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) identifie l'élément qui sert de conteneur du dialogue d'alerte. L'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) fournit au dialogue d'alerte un nom accessible en se référant à l'élément qui contient le titre du dialogue. L'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) donne au dialogue d'alerte une {{Glossary("accessible description", "description accessible")}} en se référant au contenu du dialogue d'alerte qui décrit le message principal ou l'objet du dialogue.

L'attribut `aria-modal="true"` informe l'utilisateur·ice d'une technologie d'assistance que le contenu situé sous le dialogue n'est pas interactif tant que l'élément déclaré avec `role="alertdialog"` retient la sélection.

L'attribut `aria-modal` rend l'existence du modal visible aux technologies d'assistance afin que la désactivation du contenu derrière le modal puisse être communiquée aux utilisateur·ice·s de technologies d'assistance. Comme tous les attributs ARIA, `aria-modal` n'a aucun effet sur la fonctionnalité de la page&nbsp;; la gestion de la sélection, la désactivation, l'interactivité des éléments d'arrière-plan et la possibilité de retirer la sélection de l'alertdialog doivent toutes être gérées avec JavaScript.

## Valeurs

- `false` (par défaut)
  - : L'élément n'est pas modal.
- `true`
  - : L'élément est modal.

## Interfaces associées

- {{DOMxRef("Element.ariaModal")}}
  - : La propriété [`ariaModal`](/fr/docs/Web/API/Element/ariaModal), faisant partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-modal`.
- {{DOMxRef("ElementInternals.ariaModal")}}
  - : La propriété [`ariaModal`](/fr/docs/Web/API/ElementInternals/ariaModal), faisant partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-modal`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`window`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/window_role)

Hérité par les rôles&nbsp;:

- [`alertdialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
- La rôle ARIA [`alertdialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- La rôle ARIA [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- L'attribut global HTML [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert)
- La propriété API {{DOMxRef("HTMLElement.inert", "inert")}} de l'interface {{DOMxRef("HTMLElement")}}
