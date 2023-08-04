---
title: Contrôles DHTML personnalisés navigables au clavier
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
---

### Le problème&nbsp;: les pages DHTML actuelles ne sont pas accessibles au clavier

Un nombre croissant d'applications Web utilise [JavaScript](/fr/JavaScript) pour imiter des contrôles (
_widgets_
) applicatifs comme des menus, des vues arborescentes, des champs de texte enrichis et des panneaux à onglets. Les développeurs Web innovent constamment et les applications futures contiendront des éléments complexes et interactifs comme des feuilles de calcul, des calendriers, des graphes organisationnels et plus encore. Jusqu'à présent, les développeurs désirant rendre leurs contrôles basés sur des `<div>` et autres `<span>` stylés ne disposaient pas des techniques nécessaires. Pourtant, l'accessibilité au clavier fait partie des nécessités dont tout développeur Web devrait tenir compte.

Prenons un exemple concret&nbsp;: la plupart des menus [DHTML](/fr/DHTML) ne se comportent pas comme des menus normaux en ce qui concerne l'accès au clavier. Même s'il y a moyen d'accéder au menu avec le clavier, une erreur courante est de placer chaque élément du menu dans l'ordre de tabulation (souvent réalisé implicitement en faisant de chaque choix du menu un élément `<a>`). En réalité, le comportement correct d'un menu est que le menu entier doit figurer une seule fois dans l'ordre de tabulation, et les flèches doivent être utilisées pour se déplacer de choix en choix au sein du menu. Ceci vaut également pour les autres contrôles de «&nbsp;navigation groupée&nbsp;» comme les vues arborescentes, tableaux et panneaux à onglets.

Il est à présent possible pour les auteurs HTML de faire les choses correctement. La manière de rendre ces contrôles compatibles avec les technologies d'assistance est détaillée dans&nbsp;: [ARIA : Applications riches Internet accessibles](/fr/ARIA/Applications_riches_Internet_accessibles).

### La solution&nbsp;: modifier le comportement standard de `tabindex`

Firefox 1.5 suit l'exemple de Microsoft Internet Explorer en étendant l'attribut `tabindex` pour permettre à n'importe quel élément d'obtenir ou non le focus. En suivant le [système d'IE pour `tabindex`](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/tabindex.asp), il devient possible de permettre aux contrôles [DHTML](/fr/DHTML), déjà accessibles au clavier dans IE, de l'être également dans Firefox 1.5. Les règles doivent subir quelques petites entorses afin de permettre aux auteurs de rendre leurs contrôles personnalisés accessibles.

Le tableau qui suit décrit le nouveau comportement de `tabindex`&nbsp;:

| Attribut `tabindex`                   | Focus disponible à la souris ou par JavaScript via `element.focus()`                                  | Navigable avec tabulation                                                                                                                                                                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| non présent                           | Suit le comportement par défaut de l'élément (oui pour les contrôles de formulaires, les liens, etc). | Suit le comportement par défaut de l'élément.                                                                                                                                                                                                       |
| Négatif (par exemple `tabindex="-1"`) | Oui                                                                                                   | Non, l'auteur doit donner le focus avec `element.focus()` suite à l'utilisation des flèches ou d'autres touches.                                                                                                                                    |
| Zéro (par exemple `tabindex="0"`)     | Oui                                                                                                   | Dans l'ordre de tabulation relativement à la position de l'élément dans le document.                                                                                                                                                                |
| Positif (par exemple `tabindex="33"`) | Oui                                                                                                   | La valeur `tabindex` change manuellement lorsque cet élément est positionné dans l'ordre de tabulation. Ces éléments seront positionnés dans l'ordre de tabulation avant les éléments ayant `tabindex="0"` ou qui sont naturellement _tabulables_ . |

### Utilisation du nouveau système

Pour rendre un contrôle simple navigable avec tabulation, la solution est d'utiliser `tabindex="0"` sur l'élément `<div>>` ou `<span>` le représentant. Vous pouvez consulter un exemple d'une [case à cocher basée sur un `<span>`](http://www.mozilla.org/access/dhtml/class/checkbox) accessible au clavier tant dans Firefox 1.5 que dans IE (bien que la règle `:before` pour l'image de la case à cocher ne fonctionne pas dans IE).

Pour les contrôles de groupe (comme les menus, les panneaux à onglets, grilles ou vues arborescentes) l'élément parent doit avoir `tabindex="0"`, et chaque choix descendant (onglet/cellule/ligne) doit avoir `tabindex="-1"`. Un évènement `keydown` surveillant les flèches directionnelles peut ensuite utiliser `element.focus()` pour donner le focus au contrôle descendant approprié et lui donner un style lui donnant un aspect particulier montrant qu'il a le focus. Vous pouvez consulter un exemple d'une [vue arborescente DHTML](http://www.mozilla.org/access/dhtml/class/tree) accessible au clavier et aux lecteurs d'écran dans Firefox (
_nightlies_
). Le travail pour le faire fonctionner dans IE est encore en cours.

N'oubliez pas que ceci ne fait pas encore partie d'un standard W3C ou autre organisme officiel. Pour l'instant, il est nécessaire de faire quelques entorses aux règles afin d'obtenir une pleine accessibilité au clavier.

### Astuces d'écriture

#### Utilisation d'`onfocus` pour suivre le focus

Les attributs de gestion d'évènements `onfocus` et `onblur` peuvent à présent être utilisés sur tous les éléments. Il n'y a pas d'interface [DOM](/fr/DOM) standard pour obtenir l'élément ayant actuellement le focus dans le document, par conséquent il est nécessaire d'utiliser une variable [JavaScript](/fr/JavaScript) pour le suivre.

Ne supposez pas que tous les changements de focus viendront des évènements clavier ou souris, car les technologies d'assistance, comme les lecteurs d'écran, peuvent donner le focus à n'importe quel élément pouvant en disposer et cela doit être traité élégamment par le contrôle JavaScript.

#### Changement dynamique de la possibilité d'obtenir le focus à l'aide de la propriété `tabIndex`

Ceci peut être utile à réaliser si un contrôle personnalisé devient actif ou inactif. Les contrôles inactifs ne doivent pas être dans l'ordre de tabulation. Cependant, il est typiquement possible de les atteindre avec les flèches s'ils font partie d'un contrôle de navigation groupé.

#### Utilisation de `setTimeout` avec `element.focus()` pour donner le focus

N'utilisez pas `createEvent()`, `initEvent()` et `dispatchEvent()` pour donner le focus à un élément, parce que les évènements DOM `focus` sont seulement considérés comme informels — générés par le système après que quelque chose ait reçu le focus, mais pas réellement pour donner le focus. Le retardateur est nécessaire, tant dans IE que dans Firefox 1.5, pour empêcher les scripts de faire des choses étranges et inattendues si l'utilisateur clique sur des boutons ou d'autres contrôles. Concrètement, le code pour donner le focus à un élément ressemblera à quelque chose comme ceci&nbsp;:

```js
setTimeout("gFocusItem.focus();", 0); // gFocusItem doit être une variable globale
```

#### Ne pas utiliser `:focus` ou des sélecteurs d'attribut pour styler le focus

Il ne sera pas possible d'utiliser `:focus` ou des sélecteurs d'attribut pour styler l'élément ayant le focus, si vous voulez que cela apparaisse également dans IE. Changez plutôt le style dans un gestionnaire d'évènement `onfocus`. Par exemple, pour le traitement du focus d'un élément de menu, ajoutez `this.style.backgroundColor = "gray";`.

#### Toujours dessiner le focus pour les éléments avec `tabindex="-1"` et qui reçoivent le focus par programmation

IE ne dessinera pas automatiquement l'encadrement du focus pour les éléments qui reçoivent le focus de manière programmée. Choisissez entre changer la couleur de fond via quelque chose comme `this.style.backgroundColor = "gray";` ou ajoutez une bordure pointillée via `this.style.border = "1px dotted invert"`. Dans le cas d'une bordure pointillée, il sera nécessaire de s'assurer que ces éléments aient une bordure invisible de `1px` au départ, afin que l'élément ne change pas de taille lorsque le style de bordure est appliqué (les bordures prennent de la place et IE n'implémente pas les encadrements CSS).

#### Utilisation de `onkeydown` pour les évènements clavier, plutôt que `onkeypress`

IE ne déclenchera pas les évènements `keypress` pour les touches non alphanumériques.

#### Empêcher les évènements clavier d'effectuer des fonctions du navigateur

Si une touche comme une flèche directionnelle est utilisée, empêchez le navigateur d'utiliser cette touche pour faire quelque chose d'autre (comme faire défiler la page) en utilisant un code similaire à ce qui suit&nbsp;:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();"></span>
```

Si `handleKeyDown()` renvoie `false`, l'évènement sera consommé, empêchant le navigateur d'effectuer quelque action que ce soit, basée sur la touche pressée.

#### Utilisation d'évènements clavier pour permettre l'activation de l'élément

Pour chaque gestionnaire d'évènement lié à la souris, un évènement clavier correspondant est nécessaire. Par exemple, si vous avez `onclick="faireQuelqueChose()"` vous aurez aussi besoin de `onkeydown="return event.keyCode != 13 || faireQuelqueChose();"` afin de permettre à la touche Entrée d'activer cet élément.

#### Utilisation de try/catch pour éviter les erreurs JavaScript

Ce système n'est actuellement pas supporté par Opera, Safari et les versions anciennes de Mozilla (1.7 et précédentes). Comme certains navigateurs ne supportent pas les nouvelles possibilités comme la propriété `tabIndex` sur tous les éléments, utilisez try/catch aux endroits appropriés. Les contrôles doivent rester utilisables avec la souris sur les navigateurs ne supportant pas le système DHTML de navigation au clavier. Son support est déjà planifié pour Opera et Safari (via les spécifications du [WHATWG](http://whatwg.org/)).

#### Ne pas se baser sur un comportement cohérent de la répétition d'une touche, pour l'instant

Malheureusement, `onkeydown` peut ou non être répété suivant le système d'exploitation utilisé. Consultez le [bug Firefox 91592](https://bugzil.la/91592) dans la base de données Bugzilla.
