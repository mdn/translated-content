---
title: Background scripts
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
page-type: guide
sidebar: addonsidebar
---

Les scripts d'arrière-plan ou les pages d'arrière-plan vous permettent de surveiller et de réagir aux événements qui se produisent dans le navigateur, tels que la navigation vers une nouvelle page, la suppression d'un signet ou la fermeture d'un onglet.

Les scripts ou pages d'arrière-plan sont :

- Persistants : ils sont chargés au démarrage de l'extension et déchargés lorsque celle-ci est désactivée ou désinstallée.
- Non persistants (également appelés pages d'événements) : chargés uniquement lorsqu'ils sont nécessaires pour répondre à un événement et déchargés lorsqu'ils deviennent inactifs. Cependant, une page d'arrière-plan ne se décharge pas tant que toutes les vues visibles et tous les ports de messages ne sont pas fermés. L'ouverture d'une vue ne provoque pas le chargement de la page d'arrière-plan, mais l'empêche de se fermer.

> [!NOTE]
> Dans Firefox, si le processus d'extension plante :
>
> - les scripts d'arrière-plan persistants en cours d'exécution au moment du plantage sont rechargés automatiquement.
> - les scripts d'arrière-plan non persistants (également appelés « pages d'événements ») en cours d'exécution au moment du plantage ne sont pas rechargés. Cependant, ils sont redémarrés automatiquement lorsque Firefox appelle l'un de leurs écouteurs d'événements API WebExtensions.
> - les pages d'extension chargées dans les onglets au moment du plantage ne sont pas automatiquement restaurées. Un message d'avertissement dans chaque onglet informe l'utilisateur que la page a planté et lui permet de fermer ou de restaurer l'onglet.
> ![Fenêtre du navigateur affichant le message utilisateur indiquant qu'une page a planté avec les options de fermeture ou de redémarrage de l'onglet](your-tab-crashed-screenshot.png)
> Vous pouvez tester cette condition en ouvrant un nouvel onglet et en naviguant vers `about:crashextensions`, ce qui déclenche silencieusement un plantage du processus d'extension.

Dans Manifest V2, les scripts d'arrière-plan ou une page peuvent être persistants ou non persistants. Les scripts d'arrière-plan non persistants sont recommandés, car ils réduisent le coût en ressources de votre extension. Dans Manifest V3, seuls les scripts d'arrière-plan non persistants ou une page sont pris en charge.

Si vous avez des scripts d'arrière-plan persistants ou une page dans Manifest V2 et que vous souhaitez préparer votre extension à la migration vers Manifest V3, [Convertir en non persistant](#convert_to_non-persistent) fournit des conseils sur la transition des scripts ou de la page vers le modèle non persistant.

## Environnement des scripts d'arrière-plan

### API DOM

Les scripts d'arrière-plan s'exécutent dans le contexte d'une page spéciale appelée page d'arrière-plan. Cela leur donne accès à une [`Fenêtre`](/fr/docs/Web/API/Window) globale, ainsi qu'à toutes les API DOM standard fournies par cet objet.

> [!WARNING]
> Dans Firefox, les pages d'arrière-plan ne prennent pas en charge l'utilisation de [`alert()`](/fr/docs/Web/API/Window/alert), [`confirm()`](/fr/docs/Web/API/Window/confirm) ou [`prompt()`](/fr/docs/Web/API/Window/prompt).

### API WebExtension

Les scripts d'arrière-plan peuvent utiliser n'importe quelle [API WebExtension](/fr/docs/Mozilla/Add-ons/WebExtensions/API), à condition que leur extension dispose des [permissions](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) nécessaires.

### Accès Cross-origin

Les scripts d'arrière-plan peuvent envoyer des requêtes XHR aux hôtes pour lesquels ils disposent des [permissions d'hôte](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

### Contenu Web

Les scripts d'arrière-plan n'ont pas directement accès aux pages Web. Cependant, ils peuvent charger des [scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) dans les pages Web et [communiquer avec ces scripts de contenu à l'aide d'une API de transmission de messages](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Politique de sécurité du contenu

Les scripts d'arrière-plan sont soumis à certaines restrictions concernant certaines opérations potentiellement dangereuses, telles que l'utilisation de [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval), par le biais d'une politique de sécurité du contenu.

Pour plus d'informations, consultez la section [Politique de sécurité du contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Implémentation de scripts en arrière-plan

Cette section décrit comment implémenter un script en arrière-plan non persistant.

### Spécifiez les scripts d'arrière-plan

Dans votre extension, vous incluez un ou plusieurs scripts d'arrière-plan, si vous en avez besoin, en utilisant la clé [`"background"`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) dans `manifest.json`. Pour les extensions Manifest V2, la propriété `persistent` doit être définie sur `false` pour créer un script non persistant. Elle peut être omise pour les extensions Manifest V3 ou doit être définie sur `false`, car les scripts sont toujours non persistants dans Manifest V3. L'inclusion de `"type": "module"` charge les scripts d'arrière-plan en tant que modules ES.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false,
  "type": "module"
}
```

Ces scripts s'exécutent dans la page d'arrière-plan de l'extension, donc dans le même contexte que les scripts chargés dans une page Web.

Toutefois, si vous avez besoin d'un contenu particulier dans la page d'arrière-plan, vous pouvez en spécifier un. Vous spécifiez ensuite votre script à partir de la page plutôt que d'utiliser la propriété `"scripts"`. Avant l'introduction de la propriété `"type"` dans la clé `"background"`, c'était la seule option permettant d'inclure des modules ES. Vous spécifiez une page d'arrière-plan comme suit :

- manifest.json

  ```json
  "background": {
    "page": "background-page.html",
    "persistent": false
  }
  ```

- background-page.html

  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <script type="module" src="background-script.js"></script>
    </head>
  </html>
  ```

Vous ne pouvez pas spécifier de scripts d'arrière-plan ni de page d'arrière-plan.

### Initialiser l'extension

Écoutez {{WebExtAPIRef("runtime.onInstalled")}} pour initialiser une extension lors de l'installation. Utilisez cet événement pour définir un état ou pour une initialisation unique.

Pour les extensions avec des pages d'événements, c'est ici que les API avec état, telles que le menu contextuel créé à l'aide de {{WebExtAPIRef("menus.create")}}, doivent être utilisées. En effet, les API avec état n'ont pas besoin d'être exécutées à chaque rechargement de la page d'événements ; elles ne doivent être exécutées que lorsque l'extension est installée.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"],
  });
});
```

### Ajouter des écouteurs

Structurez les scripts d'arrière-plan autour des événements dont dépend l'extension. La définition d'événements pertinents permet aux scripts d'arrière-plan de rester inactifs jusqu'à ce que ces événements se produisent et empêche l'extension de manquer des déclencheurs essentiels.

Les écouteurs doivent être enregistrés de manière synchrone dès le début de la page.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"],
  });
});

// This will run when a bookmark is created.
browser.bookmarks.onCreated.addListener(() => {
  // do something
});
```

N'enregistrez pas les écouteurs de manière asynchrone, car ils ne seront pas déclenchés correctement. Donc, plutôt que :

```js example-bad
window.onload = () => {
  // WARNING! This event is not persisted, and will not restart the event page.
  browser.bookmarks.onCreated.addListener(() => {
    // do something
  });
};
```

Procédez comme suit :

```js
browser.tabs.onUpdated.addListener(() => {
  // This event is run in the top level scope of the event page, and will persist, allowing
  // it to restart the event page if necessary.
});
```

Extensions can remove listeners from their background scripts by calling `removeListener`, such as with {{WebExtAPIRef("runtime.onMessage")}} `removeListener`. If all listeners for an event are removed, the browser no longer loads the extension's background script for that event.

```js
browser.runtime.onMessage.addListener(
  function messageListener(message, sender, sendResponse) {
    browser.runtime.onMessage.removeListener(messageListener);
  },
);
```

### Filtrer les événements

Utilisez des API qui prennent en charge les filtres d'événements pour limiter les écouteurs aux cas qui intéressent l'extension. Si une extension écoute {{WebExtAPIRef("tabs.onUpdated")}}, utilisez plutôt l'événement {{WebExtAPIRef("webNavigation.onCompleted")}} avec des filtres, car l'API des onglets ne prend pas en charge les filtres.

```js
browser.webNavigation.onCompleted.addListener(
  () => {
    console.log("This is my favorite website!");
  },
  { url: [{ urlMatches: "https://www.mozilla.org/" }] },
);
```

### Réagir aux écouteurs

Les écouteurs existent pour déclencher une fonctionnalité une fois qu'un événement s'est produit. Pour réagir à un événement, structurez la réaction souhaitée dans l'événement de l'écouteur.

Lorsque vous répondez à des événements dans le contexte d'un onglet ou d'un cadre spécifique, utilisez les identifiants `tabId` et `frameId` provenant des détails de l'événement au lieu de vous fier à l'"onglet actuel". En spécifiant la cible, vous vous assurez que votre extension n'appelle pas une API d'extension sur la mauvaise cible lorsque l'"onglet actuel" change pendant le réveil de la page d'événement.

Par exemple, {{WebExtAPIRef("runtime.onMessage")}} peut répondre aux appels {{WebExtAPIRef("runtime.sendMessage")}} comme suit :

```js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.data === "setAlarm") {
    browser.alarms.create({ delayInMinutes: 5 });
  } else if (message.data === "runLogic") {
    browser.scripting.executeScript({
      target: {
        tabId: sender.tab.id,
        frameIds: [sender.frameId],
      },
      files: ["logic.js"],
    });
  } else if (message.data === "changeColor") {
    browser.scripting.executeScript({
      target: {
        tabId: sender.tab.id,
        frameIds: [sender.frameId],
      },
      func: () => {
        document.body.style.backgroundColor = "orange";
      },
    });
  }
});
```

### Décharger les scripts d'arrière-plan

Les données doivent être sauvegardées régulièrement afin de ne pas perdre d'informations importantes si une extension plante sans recevoir {{WebExtAPIRef("runtime.onSuspend")}}. Utilisez l'API de stockage pour vous aider dans cette tâche.

```js
// Or storage.session if the variable does not need to persist pass browser shutdown.
browser.storage.local.set({ variable: variableInformation });
```

Les ports de message ne peuvent pas empêcher la fermeture d'une page d'événement. Si une extension utilise le passage de messages, les ports sont fermés lorsque la page d'événement est inactive. L'écoute de {{WebExtAPIRef("runtime.Port")}} `onDisconnect` vous permet de détecter la fermeture des ports ouverts, mais l'écouteur est soumis aux mêmes contraintes de temps que {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((message) => {
    if (message === "hello") {
      let response = { greeting: "welcome!" };
      port.postMessage(response);
    } else if (message === "goodbye") {
      console.log("Disconnecting port from this end");
      port.disconnect();
    }
  });
  port.onDisconnect.addListener(() => {
    console.log("Port was disconnected from the other end");
  });
});
```

Les scripts d'arrière-plan se déchargent après quelques secondes d'inactivité. Cependant, si pendant la suspension d'un script d'arrière-plan, un autre événement réveille le script d'arrière-plan, {{WebExtAPIRef("runtime.onSuspendCanceled")}} est appelé et le script d'arrière-plan continue à s'exécuter. Si un nettoyage est nécessaire, écoutez {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  browser.browserAction.setBadgeText({ text: "" });
});
```

Cependant, il est préférable d'utiliser des données persistantes plutôt que de se fier à {{WebExtAPIRef("runtime.onSuspend")}}. Cela ne permet pas d'effectuer autant de nettoyage que nécessaire et n'est d'aucune aide en cas de plantage.

## Conversion en non persistant

Si vous disposez d'un script d'arrière-plan persistant, cette section fournit des instructions pour le convertir en non persistant.

### Mettez à jour votre fichier manifest.json

Dans votre fichier de votre extension `manifest.json`, modifiez la propriété persistante de la clé [`"background"`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) et définissez-la sur `false` pour votre script ou votre page.


```json
"background": {
  …,
  "persistent": false
}
```

### Déplacer les écouteurs d'événements

Les écouteurs doivent se trouver au niveau supérieur pour activer le script d'arrière-plan si un événement est déclenché. Les écouteurs enregistrés peuvent devoir être restructurés selon le modèle synchrone et déplacés au niveau supérieur.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
});
```

### Enregistrer les changements d'état

Les scripts s'ouvrent et se ferment désormais selon les besoins. Ne vous fiez donc pas aux variables globales.

```js example-bad
var count = 101;
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "count") {
    ++count;
    sendResponse(count);
  }
});
```

Utilisez plutôt l'API de stockage pour définir et renvoyer les états et les valeurs :

- Utilisez {{WebExtAPIRef("storage.session")}} pour le stockage en mémoire qui est effacé lorsque l'extension ou le navigateur est fermé. Par défaut, `storage.session` n'est disponible que pour les contextes d'extension et non pour les scripts de contenu.
- Utilisez {{WebExtAPIRef("storage.local")}} pour une zone de stockage plus grande qui persiste après le redémarrage du navigateur et de l'extension.

```js
browser.runtime.onMessage.addListener(async (message, sender) => {
  if (message === "count") {
    let items = await browser.storage.session.get({ myStoredCount: 101 });
    let count = items.myStoredCount;
    ++count;
    await browser.storage.session.set({ myStoredCount: count });
    return count;
  }
});
```

L'exemple précédent [envoie une réponse asynchrone à l'aide d'une promesse](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise), qui n'est pas pris en charge dans Chrome tant que le [bug 1185241 de Chrome](https://crbug.com/1185241) n'est pas pris en charge dans Chrome.
Une alternative multi-navigateurs consiste à [renvoyer true et utiliser `sendResponse`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

```js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "count") {
    browser.storage.session.get({ myStoredCount: 101 }).then(async (items) => {
      let count = items.myStoredCount;
      ++count;
      await browser.storage.session.set({ myStoredCount: count });
      sendResponse(count);
    });
    return true;
  }
});
```

### Transformer les minuteries en alarmes

Les minuteries basées sur DOM, telles que {{domxref("Window.setTimeout", "setTimeout()")}}, ne restent pas actives après la mise en veille d'une page d'événement. Utilisez plutôt l'API {{WebExtAPIRef("alarms")}} si vous avez besoin d'une minuterie pour réactiver une page d'événement.

```js
browser.alarms.create({ delayInMinutes: 3.0 });
```

Then add a listener.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hello, world!");
});
```

### Mise à jour des appels aux fonctions du script d'arrière-plan

Les extensions hébergent généralement leurs fonctionnalités principales dans le script d'arrière-plan. Certaines extensions accèdent aux fonctions et variables définies dans la page d'arrière-plan via la variable `window` renvoyée par {{WebExtAPIRef("extension.getBackgroundPage")}}.
La méthode renvoie `null` lorsque :

- les pages d'extension sont isolées, comme les pages d'extension en mode de navigation privée ou les onglets conteneurs.
- la page d'arrière-plan n'est pas en cours d'exécution. Cela est rare avec les pages d'arrière-plan persistantes, mais très probable lors de l'utilisation d'une page d'événement, car une page d'événement peut être suspendue.

> [!NOTE]
> La méthode recommandée pour invoquer une fonctionnalité dans le script d'arrière-plan consiste à communiquer avec celui-ci via {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} ou {{WebExtAPIRef("runtime.connect","runtime.connect()")}}.
> Les méthodes `getBackgroundPage()` décrites dans cette section ne peuvent pas être utilisées dans une extension multi-navigateurs, car les extensions Manifest Version 3 dans Chrome ne peuvent pas utiliser les pages d'arrière-plan ou d'événement.

Si votre extension nécessite une référence à la fenêtre (`window`) de la page d'arrière-plan, utilisez {{WebExtAPIRef("runtime.getBackgroundPage")}} pour vous assurer que la page d'événement est en cours d'exécution.
Si l'appel est facultatif (c'est-à-dire nécessaire uniquement si la page d'événement est active), utilisez {{WebExtAPIRef("extension.getBackgroundPage")}}.

```js example-bad
document.getElementById("target").addEventListener("click", async () => {
  let backgroundPage = browser.extension.getBackgroundPage();
  // Warning: backgroundPage is likely null.
  backgroundPage.backgroundFunction();
});
```

```js
document.getElementById("target").addEventListener("click", async () => {
  // runtime.getBackgroundPage() wakes up the event page if it was not running.
  let backgroundPage = await browser.runtime.getBackgroundPage();
  backgroundPage.backgroundFunction();
});
```
