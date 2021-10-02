---
title: window.dump
slug: Web/API/Window/dump
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/Window/dump
---
{{ ApiRef() }}

### Résumé

Affiche des messages dans la console (native).

### Syntaxe

    dump(message);

- `message` est le message texte à afficher.

### Notes

`dump` est habituellement utilisé pour débogage du JavaScript. Du code avec permissions peut également utiliser [Components.utils.reportError](/fr/Components.utils.reportError) et [nsIConsoleService](/fr/nsIConsoleService) pour afficher des messages dans la [console JavaScript](/fr/Console_JavaScript).

Dans [Gecko](/fr/Gecko), `dump` est désactivé par défaut – il ne fait rien mais ne génère aucune erreur. Pour que `dump` écrive dans le flux standard de sortie, vous devez l'activer en mettant la préférence `browser.dom.window.dump.enabled` à `true`. Vous pouvez définir cette préférence dans [about:config](http://kb.mozillazine.org/About:config) ou dans un [fichier user.js](http://kb.mozillazine.org/User.js_file).

Vous aurez besoin d'une console pour voir quelque chose. Si vous n'en avez pas déjà une, fermez et réouvrez le programme en ajoutant le paramètre `-console` à la ligne de commande.

`dump` est également disponible au composants XPCOM implémentés en JavaScript, même si [window](/fr/DOM/window) n'est pas l'objet global dans ce contexte.

### Spécification

{{ DOM0() }}
