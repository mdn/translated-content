---
title: "ARIA : rôle alert"
slug: Web/Accessibility/ARIA/Roles/alert_role
l10n:
  sourceCommit: 39b6b6c400f4ea334fb347240aeb4cfea8cf38ce
---

Le rôle `alert` est utilisé pour les informations importantes et généralement urgentes. `alert` est un type de [`status`](/fr/docs/Web/Accessibility/ARIA/Roles/status_role) traité comme une région dynamique atomique.

## Description

Le rôle `alert` est utilisé pour communiquer un message important, et généralement urgent, à la personne. Lorsque ce rôle est ajouté à un élément, le navigateur enverra un évènement d'alerte accessible aux outils d'assistance qui pourront alors notifier la personne.

Le rôle `alert` doit uniquement être utilisé pour les informations qui nécessitent une attention immédiate, comme&nbsp;:

- Une valeur invalide a été saisie dans un champ d'un formulaire
- L'identifiant associé à la session va bientôt expirer
- La connexion au serveur a été rompue et les changements locaux ne seront pas enregistrés

Le rôle `alert` doit uniquement être utilisé pour le contenu texte et pas pour les éléments interactifs comme les liens ou les boutons. Il n'est pas nécessaire que les éléments avec le rôle `alert` puissent recevoir le focus, les outils d'assistance annonceront le contenu mis à jour lorsque le rôle est ajouté, quel que soit l'état du focus.

Le rôle `alert` est à ajouter au nœud contenant le message d'alerte, **il ne doit pas** être ajouté à l'élément qui a déclenché l'alerte. Les alertes sont [des régions dynamiques assertives](/fr/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Utiliser `role="alert"` sera équivalent à définir [`aria-live="assertive"`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-live) et [`aria-atomic="true"`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-atomic). Ces régions n'ayant pas besoin du focus, il n'a pas à être géré et aucune interaction utilisateur ne doit être requise.

> [!WARNING]
> Étant donné sa nature intrusive, le rôle `alert` doit être utilisé avec parcimonie et uniquement pour les situations où l'attention de la personne doit être sollicitée.

Le rôle [`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert) est l'un des cinq rôles associés aux [régions dynamiques](/fr/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Les modifications dynamiques moins urgentes doivent utiliser une méthode moins agressive, par exemple en incluant `aria-live="polite"` ou en utilisant un autre rôle de région dynamique comme [`status`](/fr/docs/Web/Accessibility/ARIA/Roles/status_role). Si la personne doit pouvoir fermer l'alerte, on utilisera plutôt le rôle [`alertdialog`](/fr/docs/Web/Accessibility/ARIA/Roles/alertdialog_role).

Le rôle `alert` est destiné au contenu affiché dynamiquement, pas pour le contenu qui apparaît au chargement initial de la page. Ce rôle est idéal pour les scénarios où une personne remplit un formulaire et où JavaScript est utilisé afin d'ajouter un message d'erreur&nbsp;: l'alerte serait alors immédiatement énoncée. `alert` ne doit pas être utilisé pour des éléments HTML avec lesquels la personne n'a pas interagi. Ainsi, si une page est affichée et contient dès le début plusieurs alertes dans son contenu, le rôle `alert` ne doit pas être utilisé, car les messages n'ont pas été déclenchés dynamiquement.

À l'instar des autres [régions dynamiques](/fr/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), les alertes doivent uniquement être annoncées lorsque le contenu de l'élément ayant `role="alert"` est _mis à jour_. Assurez-vous que l'élément avec le rôle est initialement présent dans le balisage de la page, cela permettra d'amorcer le navigateur et le lecteur d'écran qui surveilleront alors les changements sur l'élément. Une fois que ce cadre initial est mis en place, tout changement apporté au contenu sera annoncé. Il faut éviter de générer ou d'ajouter de façon dynamique des éléments `role="alert"` contenant déjà le message d'alerte voulu, cela _n'entraînera pas_ d'annonce et ne correspond à pas un changement de contenu.

Lorsque le rôle `alert` est présent, chaque changement apporté au contenu est annoncé, et il faut donc l'utiliser avec parcimonie. Par définition, les alertes sont perturbantes. S'il y a plusieurs alertes simultanées ou des alertes inutiles, l'ergonomie sera médiocre.

## Exemples

Nous allons voir ici des exemples de scénarios usuels d'utilisation `alert` et comment les implémenter.

### Rendre visible un élément préparé et avec le rôle `alert`

Si le contenu situé _à l'intérieur_ de l'élément doté de `role="alert"` est initialement masqué à l'aide de CSS, le rendre visible déclenchera l'alerte. Cela signifie qu'on peut réutiliser à plusieurs reprises un élément qui agit comme un conteneur d'alerte existant.

```css
.hidden {
  display: none;
}
```

```html
<div id="expirationWarning" role="alert">
  <span class="hidden">Votre session va expirer dans 2 minutes.</span>
</div>
```

```js
// En retirant la classe 'hidden', le contenu à l'intérieur de l'élément devient
// visible et le lecteur d'écran annoncera l'alerte.
document
  .getElementById("expirationWarning")
  .firstChild.classList.remove("hidden");
```

### Changer dynamiquement le contenu d'un élément doté du rôle `alert`

À l'aide de JavaScript, on peut modifier dynamiquement le contenu _à l'intérieur_ de l'élément ayant `role="alert"`. Attention, si vous devez déclencher la même alerte à plusieurs reprises (autrement dit, si le contenu inséré dynamiquement est le même d'une fois à l'autre), cela ne sera pas perçu comme un changement et ne déclenchera _pas_ d'annonce. Pour éviter ce problème, mieux vaudra réinitialiser le contenu du conteneur avant d'insérer le message d'alerte.

```html
<div id="alertContainer" role="alert"></div>
```

```js
// On vide le contenu
document.getElementById("alertContainer").innerHTML = "";
// Puis on injecte le nouveau message d'alerte
document.getElementById("alertContainer").innerHTML =
  "Votre session expirera dans " + expiration + " minutes";
```

### Un conteneur d'alerte masqué, destiné aux notifications pour les lecteurs d'écran

Il est possible de masquer le conteneur d'alerte et de l'utiliser pour fournir des mises à jour/notifications qui seront explicitement destinées aux lecteurs d'écran. Cela peut s'avérer utile lorsque du contenu important de la page a été mis à jour et où la modification ne serait pas nécessairement flagrante pour une personne utilisant un lecteur d'écran.

Dans ces cas, il faut s'assurer que le conteneur n'est pas masqué à l'aide de `display:none` (qui le masquerait même des outils d'assistance et empêcherait toute notification). À la place, on pourra utiliser [un style `.visually-hidden`](https://www.a11yproject.com/posts/how-to-hide-content/).

```html
<div id="hiddenAlertContainer" role="alert" class="visually-hidden"></div>
```

```css
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

```js
// On vide le contenu
document.getElementById("hiddenAlertContainer").innerHTML = "";
// Puis on injecte le nouveau message d'alerte
document.getElementById("hiddenAlertContainer").innerHTML =
  "Tous les objets ont été retirés du panier.";
```

## Spécifications

{{Specifications}}

## Voir aussi

- [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [Rôle ARIA `log`](/fr/docs/Web/Accessibility/ARIA/Roles/log_role)
- [Rôle ARIA `marquee`](/fr/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [Rôle ARIA `status`](/fr/docs/Web/Accessibility/ARIA/Roles/status_role)
- [Rôle ARIA `timer`](/fr/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [Rôle ARIA `alertdialog`](/fr/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [Régions dynamiques ARIA](/fr/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [Prise en charge du rôle ARIA `alert`, The Paciello Group (en anglais)](https://www.tpgi.com/aria-alert-support/)
- [Exemple d'utilisation d'`alert` (en anglais)](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)

<section id="Quick_links">

1. [**Rôle WAI-ARIA**](/fr/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
