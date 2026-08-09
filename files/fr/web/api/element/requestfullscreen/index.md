---
title: "Element : méthode requestFullscreen()"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("Fullscreen API")}}

La méthode **`requestFullscreen()`** de l'interface {{DOMxRef("Element")}} envoie une requête asynchrone pour que l'élément soit affiché en plein écran.

## Syntaxe

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet qui contrôle le comportement de la transition vers le mode plein écran.
    Les options disponibles sont&nbsp;:
    - `keyboardLock` {{Optional_Inline}}
      - : Contrôle le mode de verrouillage du clavier sélectionné.
        - `"none"`
          - : Aucun verrouillage du clavier n'est appliqué.
            C'est le mode par défaut.
        - `"browser"`
          - : Le mode de verrouillage du clavier du navigateur est appliqué.
            Dans ce mode, le navigateur transmet les évènements clavier à l'application qui est normalement gérée par le code du navigateur ou du système.
            Les applications doivent intercepter les évènements pour les touches et combinaisons de touches qu'elles souhaitent utiliser, et appeler [`preventDefault()`](/fr/docs/Web/API/Event/preventDefault) pour annuler toute action par défaut.

            Notez que certains navigateurs peuvent désactiver l'action par défaut pour certaines touches, comme la touche normalement utilisée pour quitter le mode plein écran&nbsp;; ce n'est pas garanti, donc vous devez toujours appeler `preventDefault()`.
            Les navigateurs sont également encouragés à fournir un mécanisme pour quitter le mode plein écran avec le verrouillage du clavier.

            Pour plus d'informations, voir la section [Verrouillage du clavier](#verrouillage_du_clavier) ci-dessous.

    - `navigationUI` {{Optional_Inline}}
      - : Contrôle l'affichage ou non de l'interface de navigation lorsque l'élément est en mode plein écran.
        La valeur par défaut est `"auto"`, ce qui indique que le navigateur doit décider quoi faire.
        - `"hide"`
          - : L'interface de navigation du navigateur est masquée et l'ensemble des dimensions de l'écran est alloué à l'affichage de l'élément.
        - `"show"`
          - : Le navigateur affiche les contrôles de navigation de la page et éventuellement d'autres éléments de l'interface utilisateur&nbsp;; les dimensions de l'élément (et la taille perçue de l'écran) sont ajustées pour laisser de la place à cette interface utilisateur.
        - `"auto"`
          - : Le navigateur choisit quelle des options ci-dessus appliquer.
            C'est la valeur par défaut.
    - `screen` {{Optional_Inline}} {{Experimental_Inline}}
      - : Définit sur quel écran vous souhaitez mettre l'élément en mode plein écran.
        Cela prend un objet {{DOMxRef("ScreenDetailed")}} comme valeur, représentant l'écran choisi.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est résolue avec une valeur `undefined` lorsque la transition vers le mode plein écran est terminée, ou qui est rejetée avec une exception.

### Exceptions

En cas d'erreur, la promesse (`Promise`) retournée est rejetée avec l'une des valeurs suivantes&nbsp;:

- {{JSxRef("TypeError")}}
  - : L'exception `TypeError` peut être levée dans l'une des situations suivantes&nbsp;:
    - Le document contenant l'élément n'est pas entièrement actif&nbsp;; c'est-à-dire qu'il n'est pas le document actif actuel.
    - L'élément n'est pas contenu par un document.
    - L'élément n'est pas autorisé à utiliser la fonctionnalité `fullscreen`, soit en raison de la configuration de la [Politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) ou d'autres fonctionnalités de contrôle d'accès.
    - L'élément et son document sont le même nœud.
    - L'élément est une [fenêtre contextuelle](/fr/docs/Web/API/Popover_API) qui est déjà affichée avec {{DOMxRef("HTMLElement.showPopover()")}}.

- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Le paramètre `options.keyboardLock` passé n'est pas pris en charge par le navigateur.

## Description

La méthode **`requestFullscreen()`** envoie une requête asynchrone pour afficher l'élément en mode plein écran.

Cette méthode nécessite une autorisation.

- Si l'autorisation d'entrer en mode plein écran est accordée, la promesse ({{JSxRef("Promise")}}) retournée est résolue et l'élément reçoit un évènement {{DOMxRef("Element/fullscreenchange_event", "fullscreenchange")}} pour l'informer qu'il est maintenant en mode plein écran.
- Si l'autorisation est refusée, la promesse est rejetée et l'élément reçoit à la place un évènement {{DOMxRef("Element/fullscreenerror_event", "fullscreenerror")}}.

- Si l'élément a été détaché du document d'origine, alors c'est le document qui reçoit ces évènements à la place.

### Éléments compatibles

- Un élément que vous souhaitez afficher en mode plein écran doit répondre à un petit nombre d'exigences simples&nbsp;:

- Il doit s'agir de l'un des éléments HTML standard ou de {{SVGElement("svg")}} ou de {{MathMLElement("math")}}.
- Il _ne_ doit _pas_ s'agir d'un élément HTML {{HTMLElement("dialog")}}.
- Il doit être soit situé dans le document de niveau supérieur, soit dans un {{HTMLElement("iframe")}} auquel l'attribut [`allowfullscreen`](/fr/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) est appliqué.

De plus, toutes politiques de permissions ({{HTTPHeader("Permissions-Policy")}}) définies doivent permettre l'utilisation de la fonctionnalité `fullscreen`.

### Détecter l'activation du mode plein écran

Vous pouvez déterminer si votre tentative de passage en mode plein écran a réussi ou non en utilisant la promesse ({{JSxRef("Promise")}}) retournée par `requestFullscreen()`, comme le montre les [exemples](#exemples) ci-dessous.

Pour savoir quand un autre code a activé ou désactivé le mode plein écran, vous devez établir des écouteurs pour l'évènement {{DOMxRef("Document/fullscreenchange_event", "fullscreenchange")}} sur le {{DOMxRef("Document")}}.
Il est également important d'écouter `fullscreenchange` pour savoir, par exemple, quand l'utilisateur·ice active manuellement le mode plein écran, ou quand l'utilisateur·ice change d'application, ce qui entraîne la sortie temporaire de votre application du mode plein écran.

### Verrouillage du clavier

Le verrouillage du clavier permet à une application en plein écran d'intercepter et de gérer certaines touches et combinaisons de touches qui sont autrement exclusivement gérées par le navigateur ou le système d'exploitation sous-jacent.
Cela peut améliorer l'expérience utilisateur pour les jeux, par exemple, en permettant à la touche <kbd>Esc</kbd> d'être utilisée comme touche de menu au lieu de quitter le mode plein écran.
Cela peut également être utile pour des applications telles que le contrôle à distance d'un ordinateur, où vous souhaitez que presque tous les évènements clavier soient transmis à l'ordinateur distant.

Le verrouillage du clavier est activé en passant une valeur de mode de verrouillage du clavier de `"browser"` au paramètre [`options.keyboardLock`](#keyboardlock) lors de l'activation du mode plein écran.
Lorsque le verrouillage du clavier est actif en mode plein écran, le navigateur redirige «&nbsp;beaucoup plus&nbsp;» d'évènements clavier vers l'application — l'ensemble précis des touches dépend du navigateur.
L'application web doit gérer l'évènement en appelant d'abord [`preventDefault()`](/fr/docs/Web/API/Event/preventDefault) pour annuler son action par défaut.
Certaines combinaisons de touches sont utilisées pour le contrôle du système ou présentent des risques pour la vie privée, et ne peuvent donc pas être interceptées et désactivées à l'aide de ce mécanisme (par exemple, <kbd>Ctrl+Alt+Suppr</kbd> sous Windows).

Notez que certains navigateurs désactivent toujours l'action par défaut pour la touche <kbd>Esc</kbd> lorsque le verrouillage du clavier est actif, de sorte que l'appui sur cette touche ne quitte pas automatiquement le mode plein écran.
Cependant, comme cela n'est pas garanti, vous devez toujours appeler `preventDefault()` pour empêcher les pressions sur la touche <kbd>Esc</kbd> de quitter le mode plein écran.
De manière générale, vous ne pouvez pas supposer que l'action par défaut pour un évènement clavier quelconque est désactivée par défaut.

Les navigateurs sont censés fournir un mécanisme alternatif pour quitter le mode plein écran lorsque le verrouillage du clavier est activé.
La plupart des navigateurs utilisent la touche <kbd>Esc</kbd> pour quitter le mode plein écran normal, et un appui long sur la touche <kbd>Esc</kbd> pour quitter le verrouillage du clavier.
Le verrouillage du clavier est désactivé lorsque le navigateur quitte le mode plein écran.

### Considérations de sécurité

Une [activation utilisateur transitoire](/fr/docs/Web/Security/Defenses/User_activation) est requise.
L'utilisateur·ice doit interagir avec la page ou un élément de l'interface utilisateur pour que cette fonctionnalité fonctionne.

Le mode plein écran est contrôlé par la directive [Politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/fullscreen","fullscreen")}}.

La liste blanche par défaut pour `screen-wake-lock` est `self`.
Ceci permet l'utilisation du mode plein écran dans des frames imbriquées de même origine mais l'empêche dans le contenu tiers.
L'utilisation par des tiers peut être activée par le serveur en définissant d'abord l'en-tête `Permissions-Policy` pour accorder l'autorisation à une origine tierce particulière.

```http
Permissions-Policy: fullscreen=(self b.example.com)
```

Ensuite, l'attribut `allow="fullscreen"` doit être ajouté à l'élément conteneur de la frame pour les sources provenant de cette origine&nbsp;:

```html
<iframe src="https://b.example.com" allow="fullscreen"></iframe>
```

La permission `fullscreen` de [l'API Permissions](/fr/docs/Web/API/Permissions_API) peut être utilisée pour tester si l'accès à l'utilisation du mode plein écran est `granted`, `denied` ou `prompt` (nécessite la reconnaissance d'une invite par l'utilisateur·ice).

## Exemples

### Demander le mode plein écran

Cet exemple bascule l'élément {{HTMLElement("video")}} en mode plein écran et en sort lorsque les touches <kbd>Enter</kbd> ou <kbd>Shift</kbd> + <kbd>F</kbd> sont enfoncées.
Le script vérifie si le document est actuellement en mode plein écran à l'aide de {{DOMxRef("document.fullscreenElement")}}.
Si le document est en mode plein écran, il appelle {{DOMxRef("document.exitFullscreen()")}} pour en sortir.
Sinon, il appelle `requestFullscreen()` sur l'élément `<video>`&nbsp;:

```js
const video = document.querySelector("video");

document.addEventListener("keydown", (event) => {
  // Notez que "F" est sensible à la casse (majuscule) :
  if (event.key === "Enter" || event.key === "F") {
    // Vérifie si nous sommes en mode plein écran
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    // Sinon, entrer en mode plein écran
    video.requestFullscreen().catch((err) => {
      console.error(
        `Erreur lors de l'activation du mode plein écran : ${err.message}`,
      );
    });
  }
});
```

```html
<p>
  L'élément vidéo ci-dessous montre un accéléré d'une fleur en train d'éclore.
  Vous pouvez basculer le mode plein écran en utilisant
  <kbd>Enter</kbd> ou <kbd>Shift</kbd> + <kbd>F</kbd> («&nbsp;F&nbsp;»
  majuscule). Le document intégré doit avoir
  <a href="https://developer.mozilla.org/fr/docs/Web/API/Element/focus_event">
    la sélection
  </a>
  pour que l'exemple fonctionne.
</p>

<video controls loop src="/shared-assets/videos/flower.mp4" width="420"></video>
```

```css hidden
body {
  font-family:
    "Benton Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 2em;
}

video::backdrop {
  background-color: #444488;
}
button {
  display: block;
}
kbd {
  border: 2px solid #cdcdcd;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 0 #cdcdcd;
  font-size: 0.825rem;
  padding: 0.25rem;
}
```

{{EmbedLiveSample("Demander le mode plein écran", , 400, "", "", "", "fullscreen")}}

### Utiliser le verrouillage du clavier

Cet exemple est presque identique à l'exemple précédent, sauf que nous demandons que le mode plein écran soit activé avec le verrouillage du clavier.

#### JavaScript

```js hidden
const video = document.querySelector("video");
```

Le code modifié de l'écouteur d'évènements clavier est montré ci-dessous.

La première différence est que nous gérons l'évènement pour la touche <kbd>Esc</kbd> en mode plein écran, en appelant `event.preventDefault()` pour désactiver l'action par défaut (qui est de quitter le mode plein écran).

Comme précédemment, nous appelons `requestFullscreen()` si <kbd>Enter</kbd> ou <kbd>Shift+F</kbd> sont enfoncées lorsque nous ne sommes pas en mode plein écran.
Cependant, dans ce cas, nous passons l'option `keyboardLock` avec la valeur `"browser"`.

```js
document.addEventListener("keydown", (event) => {
  // Vérifie si nous sommes en mode plein écran
  if (document.fullscreenElement) {
    // Annule la sortie avec la touche Échap
    if (event.key === "Escape") {
      event.preventDefault();
      // Faites ce que vous voulez lorsque la touche Échap est enfoncée
    }
  } else if (event.key === "Enter" || event.key === "F") {
    // Passe en mode plein écran si <kbd>Enter</kbd> ou <kbd>F</kbd> sont
    // enfoncées et que nous ne sommes pas déjà en mode plein écran.
    // Notez que "F" est sensible à la casse (majuscule).
    video.requestFullscreen({ keyboardLock: "browser" }).catch((err) => {
      console.error(
        `Erreur lors de l'activation du mode plein écran : ${err.message}`,
      );
    });
  }
});
```

```html hidden
<p>
  L'élément vidéo ci-dessous montre un accéléré d'une fleur en train d'éclore.
  Vous pouvez basculer le mode plein écran en utilisant
  <kbd>Enter</kbd> ou <kbd>Shift</kbd> + <kbd>F</kbd> («&nbsp;F&nbsp;»
  majuscule). Le document intégré doit avoir
  <a href="https://developer.mozilla.org/fr/docs/Web/API/Element/focus_event">
    la sélection
  </a>
  pour que l'exemple fonctionne.
</p>

<video controls loop src="/shared-assets/videos/flower.mp4" width="420"></video>
```

```css hidden
body {
  font-family:
    "Benton Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 2em;
}

video::backdrop {
  background-color: #444488;
}
button {
  display: block;
}
kbd {
  border: 2px solid #cdcdcd;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 0 #cdcdcd;
  font-size: 0.825rem;
  padding: 0.25rem;
}
```

#### Résultat

Sélectionnez le cadre et appuyez sur <kbd>Shift+F</kbd>.
Lorsque la page s'affiche en plein écran, notez la notification temporaire en haut de la page qui explique comment quitter le mode plein écran.

{{EmbedLiveSample("Utiliser le verrouillage du clavier", , 400, "", "", "", "fullscreen")}}

### Utiliser `navigationUI`

Dans cet exemple, l'ensemble du document est placé en mode plein écran en appelant `requestFullscreen()` sur le {{DOMxRef("Document.documentElement")}} du document, qui est l'élément racine {{HTMLElement("html")}} du document.

```js
let elem = document.documentElement;

elem
  .requestFullscreen({ navigationUI: "show" })
  .then(() => {})
  .catch((err) => {
    alert(
      `Une erreur s'est produite lors de la tentative de passage en mode plein écran : ${err.message} (${err.name})`,
    );
  });
```

Le gestionnaire de résolution de la promesse ne fait rien, mais si la promesse est rejetée, un message d'erreur est affiché en appelant {{DOMxRef("Window.alert", "alert()")}}.

### Utiliser l'option `screen`

Si vous souhaitez afficher l'élément en plein écran sur l'écran principal du système d'exploitation, vous pouvez utiliser un code comme celui-ci&nbsp;:

```js
try {
  const ecranPrincipal = (await getScreenDetails()).screens.find(
    (screen) => screen.isPrimary,
  );
  await document.body.requestFullscreen({ screen: ecranPrincipal });
} catch (err) {
  console.error(err.name, err.message);
}
```

La méthode {{DOMxRef("Window.getScreenDetails()")}} est utilisée pour récupérer l'objet {{DOMxRef("ScreenDetails")}} pour l'appareil actuel, qui contient des objets {{DOMxRef("ScreenDetailed")}} représentant les différents écrans disponibles.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- La méthode {{DOMxRef("Document.exitFullscreen()")}}
- La propriété {{DOMxRef("Document.fullscreen")}}
- La propriété {{DOMxRef("Document.fullscreenElement")}}
- La pseudo-classe CSS {{CSSxRef(":fullscreen")}}
- L'attribut `<iframe>` [`allowfullscreen`](/fr/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
