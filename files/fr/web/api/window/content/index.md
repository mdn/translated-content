---
title: window.content
slug: Web/API/Window/content
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/Window/content
---
{{ ApiRef() }}

### Résumé

Renvoie un objet [Window](fr/DOM/window) pour la fenêtre de contenu principale. C'est utile pour les fenêtres XUL qui ont un `<browser>` (ou `tabbrowser` ou `<iframe>`) avec l'attribut `type="content-primary"` défini - l'exemple le plus célèbre étant la fenêtre principale de Firefox, `browser.xul`. Dans de tels cas, `content` renvoie une référence à l'objet `Window` pour le document actuellement affiché dans le navigateur. Il s'agit d'un raccourci pour `browserRef.contentWindow`.

Dans du contenu non privilégié (des pages Web), `content` est normalement équivalent à [top](fr/DOM/window.top) (sauf dans le cas d'une page chargée dans un panneau latéral, où `content` se réfère à l'objet `Window` de l'onglet sélectionné).

Certains exemples utilisent `_content` à la place de `content`. Cette forme est dépréciée depuis un long moment, et vous devriez toujours utiliser `content` dans du nouveau code.

### Syntaxe

    var windowObject = window.content;

### Exemple

L'exécution du code suivant dans une fenêtre chrome XUL contenant un élement `<browser type="content-primary"/>` dessine une bordure rouge autour du premier élément div de la page actuellement affichée dans le navigateur :

    content.document.getElementsByTagName("div")[0].style.border = "solid red 1px";

### Spécification

Ne fait partie d'aucune spécification du W3C.

### Voir aussi

- [Travailler avec des fenêtres dans le chrome](fr/Travailler_avec_des_fen%c3%aatres_dans_le_chrome)
- Lorsque vous accédez à des documents depuis du code privilégié, faites attention aux [XPCNativeWrapper](fr/XPCNativeWrapper).
