---
title: "Window : évènement beforeinstallprompt"
short-title: beforeinstallprompt
slug: Web/API/Window/beforeinstallprompt_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

L'évènement **`beforeinstallprompt`** de l'interface {{DOMxRef("Window")}} se déclenche lorsque le navigateur a détecté qu'un site web peut être [installé en tant qu'application web progressive](/fr/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Il n'y a pas de moment garanti pour le déclenchement de cet évènement, mais il se produit généralement au chargement de la page.

L'utilisation typique de cet évènement est lorsqu'une application web souhaite fournir sa propre interface d'installation intégrée, invitant l'utilisateur·ice à installer l'application, plutôt que celle générique fournie par le navigateur. Cela permet à l'application de donner plus de contexte sur l'application, en expliquant à l'utilisateur·ice pourquoi il·elle pourrait vouloir l'installer.

Dans ce scénario, le gestionnaire de cet évènement va&nbsp;:

- Conserver une référence à l'objet {{DOMxRef("BeforeInstallPromptEvent")}} qui lui est transmis.
- Afficher son interface d'installation intégrée (celle-ci doit être cachée par défaut, car tous les navigateurs ne prennent pas en charge l'installation).

Lorsque l'utilisateur·ice utilise l'interface d'installation intégrée pour installer l'application, cette interface appelle la méthode {{DOMxRef("BeforeInstallPromptEvent.prompt()", "prompt()")}} de l'objet `BeforeInstallPromptEvent` conservé pour afficher la demande d'installation.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("beforeinstallprompt", (event) => { })

onbeforeinstallprompt = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("BeforeInstallPromptEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("BeforeInstallPromptEvent")}}

## Propriétés de l'évènement

_Hérite des propriétés de son parent, {{DOMxRef("Event")}}._

- {{DOMxRef("BeforeInstallPromptEvent.platforms")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Retourne un tableau de chaînes de caractères contenant les plateformes sur lesquelles l'évènement a été déclenché. Ceci est fourni pour les agents utilisateur qui souhaitent présenter un choix de versions à l'utilisateur·ice, comme par exemple «&nbsp;web&nbsp;» ou «&nbsp;play&nbsp;», ce qui permettrait à l'utilisateur·ice de choisir entre une version web ou une version Android.
- {{DOMxRef("BeforeInstallPromptEvent.userChoice")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Retourne une promesse ({{JSxRef("Promise")}}) qui se résout en un objet décrivant le choix de l'utilisateur·ice lorsqu'il·elle a été invité·e à installer l'application.

## Méthodes de l'évènement

- {{DOMxRef("BeforeInstallPromptEvent.prompt()")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Affiche une invite demandant à l'utilisateur·ice s'il·elle souhaite installer l'application. Cette méthode retourne une promesse ({{JSxRef("Promise")}}) qui se résout en un objet décrivant le choix de l'utilisateur·ice lorsqu'il·elle a été invité·e à installer l'application.

## Exemples

Dans l'exemple suivant, une application fournit son propre bouton d'installation, qui a un `id` de `"install"`. Initialement, le bouton est caché.

```html
<button id="install" hidden>Installer</button>
```

Le gestionnaire `beforeinstallprompt`&nbsp;:

- Annule l'évènement, ce qui empêche le navigateur d'afficher sa propre interface d'installation sur certaines plateformes.
- Assigne l'objet `BeforeInstallPromptEvent` à une variable, afin qu'il puisse être utilisé plus tard.
- Affiche le bouton d'installation de l'application.

```js
let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

Lorsque l'utilisateur·ice clique sur le bouton d'installation de l'application&nbsp;:

- Appelle la méthode {{DOMxRef("BeforeInstallPromptEvent.prompt()", "prompt()")}} de l'objet d'évènement stocké, pour déclencher l'invite d'installation.
- Réinitialise son état en effaçant la variable `installPrompt` et en se cachant à nouveau.

```js
installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Invite d'installation : ${result.outcome}`);
  installPrompt = null;
  installButton.setAttribute("hidden", "");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("BeforeInstallPromptEvent.prompt()")}}
- L'interface {{DOMxRef("BeforeInstallPromptEvent")}}
