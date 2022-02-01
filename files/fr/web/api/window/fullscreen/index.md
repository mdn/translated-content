---
title: window.fullScreen
slug: Web/API/Window/fullScreen
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/Window/fullScreen
---
{{ ApiRef() }}

### Résumé

Cette propriété indique si la fenêtre est affichée en mode plein écran ou non. Elle n'est fiable qu'à partir de Gecko 1.9 (Firefox 3), voir les Notes plus bas.

### Syntaxe

    var isInFullScreen = windowRef.fullScreen;

Avec les privilèges chrome, la propriété est modifiable ; autrement elle est en lecture seule. Souvenez-vous que si vous essayez de définir cette propriété sans les privilèges chrome, aucune exception ne sera déclenchée et l'appel échouera juste silencieusement. Cela permet d'empêcher que des scripts conçus pour utiliser cette propriété dans Internet Explorer cessent de fonctionner.

### Valeur de retour

- `isInFullScreen`
  - : Une valeur booléenne. Signification des valeurs :

<!---->

- `true` : La fenêtre est en mode plein écran.
- `false` : La fenêtre n'est pas en mode plein écran.

### Exemples

### Spécification

{{ DOM0() }}

### Notes

Cette propriété n'est fiable qu'à partir de Mozilla 1.9 (Firefox 3). Mozilla 1.8 et les versions antérieures disposent de cette propriété, mais elle renvoie toujours `false`, même quand la fenêtre est en mode plein écran ({{ Bug(127013) }}).
