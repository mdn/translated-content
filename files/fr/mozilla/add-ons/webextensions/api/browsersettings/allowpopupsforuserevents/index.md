---
title: browserSettings.allowPopupsForUserEvents
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
---

{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui peut etre utilisé pour activer ou désactiver la capacité des pages web d'ouvrir des popups en réponse aux actions de l'utilisateur.

La valeur sous-jacente est un booléen.

Par défaut, les navigateurs permettent aux pages Web d'ouvrir des fenêtres contextuelles en réponse à un ensemble particulier d'événements : par exemple [click](/fr/docs/Web/Events/click), [mouseup](/fr/docs/Web/Events/mouseup), [submit](/fr/docs/Web/Events/submit). Si `allowPopupsForUserEvents` est défini sur `false`, aucun événement utilisateur ne pourra ouvrir des fenêtres contextuelles. Si elle est définie sur `true`, l'ensemble d'événements par défaut sera autorisé à ouvrir des fenêtres contextuelles.

Par exemple, supposons qu'une page web comporte un code comme celui-ci :

```js
window.addEventListener("click", (e) => {
  window.open("https://example.com", "myPopup", "height=400,width=400");
});
```

Par défaut, cela ouvrira une fenêtre contextuelle. Si vos extensions définient `allowPopupsForUserEvents` à `false`, cela n'ouvrira pas la fenêtre contextuelle, et l'utilisateur sera informé que le popup était bloqué.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Basculer le réglage :

```js
function toggleAllowPopup() {
  function toggle(current) {
    console.log(`Current value: ${current.value}`);
    browser.browserSettings.allowPopupsForUserEvents.set({
      value: !current.value,
    });
  }

  browser.browserSettings.allowPopupsForUserEvents.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() => {
  toggleAllowPopup();
});
```

{{WebExtExamples}}
