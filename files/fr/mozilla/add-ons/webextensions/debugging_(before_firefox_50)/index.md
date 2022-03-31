---
title: Débogage (avant Firefox 50)
slug: Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)
tags:
  - Debugging
  - Firefox
  - Guide
  - Mozilla
  - Obsolete
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)
original_slug: Mozilla/Add-ons/WebExtensions/Debogage_(avant_Firefox_50)
---
{{AddonSidebar}}

> **Note :** Cet article explique comment vous pouvez déboguer des extensions à l'aide des API WebExtension sur des versions de Firefox antérieures à la version 50.
>
> Si vous utilisez Firefox 50 ou version ultérieure, consultez l'[article principal sur les extensions de débogage](/fr/Add-ons/WebExtensions/Debugging).

Cet article explique comment utiliser les outils de développement Firefox intégrés pour déboguer les extensions développées avec les API WebExtension. Si vous essayez de déboguer un module développé avec le Kit de développement logiciel complémentaire, consultez le guide du [débogueur de module complémentaire](/fr/Add-ons/Add-on_Debugger).

## Un exemple simple : notify-link-clicks-i18n

Pour montrer comment connecter les outils de débogage, nous utiliserons une simple extension d'exemple appelée "notify-link-clicks-i18n". Le code est dans [dépôt d'exemples d'extensions sur GitHub](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n).

L'extension se compose de :

- un script de fond, "background-script.js"
- un script de contenu, "content-script.js", qui est injecté dans toutes les pages.

Le script de contenu écoute les clics sur les liens dans la page : lorsqu'un clic sur un lien se produit, le script de contenu envoie un message au script d'arrière-plan contenant la référence du lien.

Lorsque le script d'arrière-plan reçoit le message, il affiche une notification contenant la href.

Voici "content-script.js":

```js
/*
If the click was on a link, send a message to the background page.
The message contains the link's URL.
*/
function notifyExtension(e) {
  var target = e.target;
  while ((target.tagName != "A" || !target.href) && target.parentNode) {
    target = target.parentNode;
  }
  if (target.tagName != "A")
    return;

  console.log("content script sending message");
  chrome.runtime.sendMessage({"url": target.href});
}

/*
Add notifyExtension() as a listener to click events.
*/
window.addEventListener("click", notifyExtension);
```

Voici "background-script.js":

```js
/*
Log that we received the message.
Then display a notification. The notification contains the URL,
which we read from the message.
*/
function notify(message) {
  console.log("background script received message");
  var title = chrome.i18n.getMessage("notificationTitle");
  var content = chrome.i18n.getMessage("notificationContent", message.url);
  chrome.notifications.create({
    "type": "basic",
    "iconUrl": chrome.extension.getURL("icons/link-48.png"),
    "title": title,
    "message": content
  });
}

/*
Assign `notify()` as a listener to messages from the content script.
*/
chrome.runtime.onMessage.addListener(notify);
```

Si vous voulez suivre, clonez le référentiel [webextensions-examples](https://github.com/mdn/webextensions-examples), puis [package et installez](/fr/Add-ons/WebExtensions/Packaging_and_installation) "notify-link-clicks-i18n".

## La boite à outils du navigateur

Nous utiliserons la boîte à outils du navigateur pour déboguer l'extension.

### Conditions préalables

Avant de pouvoir utiliser la boîte à outils du navigateur, vous devez être configuré.

- ouvrir les outils de développement Firefox
- ouvrir les [paramètres](/fr/docs/Tools/Settings) des outils
- sous Paramètres avancés, assurez-vous que les deux paramètres suivants sont vérifiés :

  - _Activer le chrome du navigateur et les boîtes à outils de débogage supplémentaires_
  - _Activer le débogage à distance_

{{EmbedYouTube("LJAM2vXJ790")}}

### Ouverture de la boîte à outils du navigateur

Ensuite, nous ouvrirons la boîte à outils du navigateur..

- ouvrez le menu Web Developer dans Firefox, et sélectionnez "Browser Toolbox" (note : _pas_ "Browser Console").
- une boîte de dialogue d'avertissement s'affiche : cliquez sur OK.

La boîte à outils du navigateur s'ouvrira alors dans une nouvelle fenêtre. La fenêtre principale de Firefox passera au premier plan, vous devrez donc cliquer sur la boîte à outils du navigateur pour la ramener devant vous :

{{EmbedYouTube("fZ492zAAy3o")}}

Dans Firefox, une "Toolbox" est le nom d'une fenêtre séparée contenant un ensemble d'outils dans une interface à onglets, comme ceci :

![](browser-toolbox.png)La boîte à outils ci-dessus contient cinq outils, que vous pouvez commuter entre les onglets en haut de la fenêtre : "Inspecteur", "Console", "Debugger", "Style Editor" et "Scratchpad". Nous n'utiliserons que deux de ces outils : "Console" et "Debugger".

### Affichage de la sortie du journal

Nous pouvons utiliser la console pour voir la sortie des journaux : Cela inclus les messages de :

- scripts d'arrière plan
- scripts s'exécutant dans des popups
- les scripts de contenu.

Il inclut les messages de vos journaux de code à l'aide de l'[API de console](/fr/docs/Web/API/Console) que les messages d'erreur enregistrés par le moteur JavaScript lors de l'exécution de votre code.

Essayons avec l'exemple ci-dessus : sélectionnez l'onglet Console dans la boîte à outils du navigateur, ouvrez une page Web et cliquez sur un lien pour voir les messages enregistrés à partir du script de contenu et du script d'arrière-plan :

{{EmbedYouTube("Qpx0n8gP3Qw")}}

Un problème ici est que la console vous montre les messages de l'ensemble du navigateur, donc il peut y avoir beaucoup de bruit. Lisez  [comment filtrer les messages de journal](/fr/docs/Tools/Web_Console/Console_messages#Filtering_and_searching) pour obtenir de l'aide à ce sujet.

### Débogage JavaScript

Avec la Toolbox du navigateur, vous pouvez utiliser le débogueur JavaScript pour définir des points d'arrêt dans les scripts d'arrière-plan et les scripts s'exécutant dans le navigateur ou les fenêtres contextuelles d'action de page.

Les scripts en arrière-plan sont toujours disponibles dans le débogueur si l'extension est installée et activée. Les scripts popup ne deviennent visibles que lorsque le popup est ouvert. Si vous avez besoin d'accéder aux scripts popup dès qu'ils se chargent, essayez d'ajouter un [`debogueur`](/fr/docs/Web/JavaScript/Reference/Statements/debugger) ; instruction au début du script.

Pour utiliser le débogueur JavaScript, sélectionnez l'onglet Débogueur dans la boîte à outils du navigateur. Le travail suivant est donc de trouver le code de votre extension  : pour ce faire [cliquez dans la boite de recherche et tapez le nom de la source](/fr/docs/Tools/Debugger/How_to/Search_and_filter).

Une fois que vous avez trouvé votre source, vous pouvez définir des points d'arrêt, passer en revue le code et faire [tout ce que vous vous attendez à pouvoir faire dans un débogueur](/fr/docs/Tools/Debugger).

{{EmbedYouTube("3edeJiG38ZA")}}

### Interpréteur en ligne de commande JavaScript

La console comprend un [interpréteur de ligne de commande](/fr/docs/Tools/Web_Console/The_command_line_interpreter) que vous pouvez utiliser pour interroger et manipuler l'état d'un programme en cours d'exécution. Cette fonctionnalité est couramment utilisée lorsque la console est attachée à une page Web, mais elle est généralement difficile à utiliser avec la Toolbox du navigateur, parce que la portée de cette console est le navigateur entier plutôt que l'extension spécifique que vous essayez de déboguer.

Cependant, il y a un truc qui peut vous aider : pendant que le débogueur soit mis en pause à un point d'arrêt, la portée de la Console est la portée au point du programme dans lequel le débogueur est mis en pause. Ainsi, si vous avez atteint un point d'arrêt dans le code de votre extension, vous pouvez interagir directement avec votre extension : vous pouvez appeler des fonctions d'extension, réassigner des valeurs de variables, etc.

Cette fonction est particulièrement utile en combinaison avec une autre fonction : la [console split](/fr/docs/Tools/Web_Console/Split_console). Cela vous permet de diviser la boîte à outils en deux : une moitié contient la console et l'autre moitié contient un outil différent (dans ce cas, le débogueur JavaScript) :

{{EmbedYouTube("xprf58qOtLY")}}

### Débogage des scripts de contenus

Une grande limitation de la Browser Toolbox est la suivante : si vous développez avec [firefox multiprocessus](/fr/docs/Mozilla/Firefox/Multiprocess_Firefox), vous ne pouvez pas utiliser la Toolbox du navigateur pour attacher le débogueur JavaScript aux scripts de contenu.

Dans Firefox multiprocessus, le navigateur est divisé en (au moins) deux processus : un pour exécuter l'interface utilisateur et le code système du navigateur, et un (ou plusieurs) processus de contenu, qui exécutent des scripts chargés à partir de pages Web. La ToolBox du navigateur s'attache au premier de ces processus : mais les scripts de contenu s'exécutent dans les processus de contenu, de sorte qu'ils n'apparaissent pas dans la liste des sources de la ToolBox du navigateur.

Pour déboguer les scripts de contenu dans Firefox multiprocessus, vous devrez utiliser le contenu de la boite à outils du navigateur. Le contenu de la boite à outils du navigateur est tout comme la Toolbox de navigateur, sauf qu'elle attache les outils de développement au processus de contenu du navigateur, de sorte que les scripts de contenu sont visibles..

Notez que les scripts de contenu n'apparaîtront pas dans la liste des sources jusqu'à ce qu'ils soient chargés. Si vous avez besoin d'y accéder dès qu'ils se chargent, essayez d'ajouter un [`debuggueur`](/fr/docs/Web/JavaScript/Reference/Statements/debugger) ; instruction au début de votre script.

> **Note :** vous n'avez besoin et ne pouvez accéder à la Browser Content Toolbox que si vous développez contre Firefox multiprocessus.

> **Attention :** L'activation du débogage des travailleurs dans les Options de la boîte à outils désactivera le débogage de la boîte à outils du contenu du navigateur, le [Bug 1236892](https://bugzilla.mozilla.org/show_bug.cgi?id=1236892) devrait régler ce problème..

{{EmbedYouTube("xAt3Q0PgJP4")}}

### Débogage des fenêtres contextuelles

A partir de Firefox 47, vous pouvez utiliser la Browser Toolbox pour déboguer le contenu des popups. Il s'agit d'un processus en trois étapes :

- désactiver l'autohide pour les panneaux
- ouvrir la fenêtre contextuelle
- sélectionner le document contenant le popup

{{EmbedYouTube("EEU4NeAS1s4")}}

#### Désactiver l'autohide

Le problème avec les panneaux de débogage en général est qu'ils sont cachés lorsque vous cliquez en dehors d'eux. La première étape consiste donc à désactiver ce comportement. Dans la boîte à outils du navigateur, cliquez sur l'icône qui ressemble à quatre petits carrés :

![](disable-autohide.png)Maintenant, lorsque vous ouvrez un panneau dans Firefox, il restera ouvert jusqu'à ce que vous appuyiez sur Escape.

> **Note :** Que ce changement s'applique aux [fenêtre contextuelles intégrés au navigateur](/fr/docs/Tools/Browser_Toolbox#Debugging_popups), comme le menu Hamburger, ainsi qu'aux fenêtres contextuelles d'extension.
>
> Notez également que le changement est persistant, même si le navigateur redémarre. Nous travaillons à résoudre ce problème dans le [bug 1251658](https://bugzilla.mozilla.org/show_bug.cgi?id=1251658), mais d'ici là, vous préférerez peut-être réactiver la fonction Autohide en cliquant à nouveau sur le bouton avant de fermer la boîte à outils du navigateur.
>
> En interne, ce bouton bascule juste la préférence  `ui.popup.disable_autohide` que vous pouvez basculer manuellement en utilisant using about:config.

#### Ouvrir la fenêtre contextuelle

Ensuite, ouvrez le popup. Vous pouvez ensuite revenir à la boîte à outils du navigateur, et le panneau restera ouvert.

#### Sélectionner le cadre de la fenêtre popup

Le popup est chargé dans son propre cadre. Ensuite, sélectionnez le document de votre popup à l'aide du [bouton sélection de cadre ](/fr/docs/Tools/Browser_Toolbox#Targeting_a_document)boîte à outils du navigateur :![](frame-selection.png)Le document s'appellera quelque chose comme

    moz-extension://<some-uuid>/path/to/your-popup.html

{{EmbedYouTube("/9jdHDCKIN-U")}}

Maintenant, le champ d'application de la boîte à outils est le popup. Dans l'Inspecteur, vous pouvez examiner et modifier le HTML et le CSS du popup. Dans le Debugger, vous pouvez rechercher tous les scripts chargés dans le popup et définir des points d'arrêt.

## Qu'en est-il de l'Add-on Deboguer ?

Le [deboguer des modules complémentaires](/fr/Add-ons/Add-on_Debugger) est destiné à être l'évanir du débogage des add-on dans Firefox.

Son grand avantage par rapport à la Browser Toolbox est qu'il ne montre que les fichiers de votre extension, donc il est beaucoup plus facile de trouver votre code. Cependant, pour le moment, vous ne pouvez pas voir les messages de console de votre extension dans l'Add-on Debugger, donc la Browser Toolbox est plus fonctionnelle.
