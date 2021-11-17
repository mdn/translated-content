---
title: Utilisation du cache de Firefox 1.5
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
tags:
  - DOM
  - Développement_Web
  - Extensions
  - HTML
  - JavaScript
translation_of: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
original_slug: Utilisation_du_cache_de_Firefox_1.5
---
{{FirefoxSidebar}}



### Introduction

[Firefox 1.5](/fr/Firefox_1.5_pour_les_développeurs) met en mémoire cache des pages Web entières, avec leurs états JavaScript, pour une même session de navigation. Revenir ou avancer entre des pages déjà visitées ne nécessite aucun chargement de page et les états JavaScript sont préservés. Cette fonctionnalité parfois appelée **bfcache** (pour « Back-Forward Cache ») rend la navigation très rapide. Ce cache est préservé en mémoire jusqu'à ce que l'utilisateur ferme le navigateur.

Il existe des cas où Firefox ne met pas en cache les pages. Vous trouverez ci-dessous certaines raisons classiques de programmation faisant qu'une page n'est pas mise en cache :

- La page utilise un gestionnaire `unload`
- La page définit « cache-control: no-store »
- La page définit « cache-control: no-cache » et le site est sécurisé par HTTPS
- La page n'est pas complètement chargée quand l'utilisateur la quitte pour en charger une autre
- La page de niveau supérieur de la page contient des cadres qui ne peuvent pas être mis en cache
- La page est dans un cadre et l'utilisateur charge une nouvelle page dans ce cadre (dans ce cas, lorsque l'utilisateur navigue vers une autre page, le dernier contenu chargé dans les cadres est celui mis en cache)

Cette nouvelle fonctionnalité de mise en cache modifie le comportement du chargement des pages, et les webmestres peuvent désirer :

- savoir qu'une page a été accédée (lorsqu'elle est chargée depuis le cache de l'utilisateur)
- définir le comportement d'une page lorsque l'utilisateur la quitte (tout en lui permettant d'être mise en cache)

Le navigateur offre aux webmestres deux nouveaux évènements pour cela.

### Nouveaux évènements du navigateur

Si vous utilisez ces nouveaux évènements, vos pages continueront à s'afficher correctement dans les autres navigateurs (nous avons testé des versions antérieures de Firefox, Internet Explorer, Opera et Safari), et elles utiliseront ces nouvelles fonctionnalités de mise en cache lors de leur chargement dans Firefox 1.5.

Le comportement standard des pages Web est :

1.  L'utilisateur accède à une page.
2.  Au cours du chargement de la page, les scripts contenus dans la page (_inline_) s'exécutent.
3.  Dès que la page est chargée, le gestionnaire `onload` est invoqué.

Certaines pages comprennent une quatrième étape. Ce sont celles qui utilisent un gestionnaire `unload` se déclenchant lorsque l'utilisateur quitte la page pour en charger une autre. Si un gestionnaire `unload` est présent, la page ne sera pas mise en cache.

Lorsqu'un utilisateur navigue vers une page mise en cache, les scripts en-ligne et le gestionnaire `onload` ne sont pas exécutés (étape 2 et 3) puisque dans la plupart des cas les effets de ces scripts ont été préservés.

Si la page contient des scripts ou d'autres actions déclenchées au chargement qui doivent continuer à s'exécuter lorsque l'utilisateur affiche la page, ou si vous voulez savoir si un utilisateur a consulté une page en cache, utilisez le nouvel évènement `pageshow`.

Si vous avez des actions devant s'exécuter lorsque l'utilisateur quitte une page, mais désirez profiter de la nouvelle fonctionnalité de mise en cache, donc sans pouvoir employer le gestionnaire `unload`, utilisez le nouvel évènement `pagehide`.

#### L'évènement pageshow

Cet évènement fonctionne comme l'évènement `load`, sauf qu'il se déclenche à chaque fois que la page est chargée (tandis que l'évènement `load` ne se déclenche pas avec Firefox 1.5 pour une page chargée depuis le cache). La première fois qu'une page se charge, l'évènement `pageshow` se déclenche juste après l'évènement `load`. L'évènement `pageshow` utilise une propriété booléenne `persisted` définie à `false` lors du chargement initial. Elle est définie à `true` s'il ne s'agit pas du chargement initial de la page (en d'autres termes, elle est définie à `true` pour une page chargée depuis le cache).

Définissez tous vos scripts JavaScript que vous voulez voir exécutés à chaque fois qu'une page se charge grâce à l'évènement `pageshow`.

Si vous appelez des fonctions JavaScript comme faisant partie de l'évènement `pageshow`, vous pouvez vous assurer qu'elles soient appelées lorsque la page est chargée dans d'autres navigateurs que Firefox 1.5 en appelant l'évènement `pageshow` depuis l'évènement `load`, comme indiqué dans l'exemple plus bas dans cet article.

#### L'évènement pagehide

Si vous désirez définir un comportement se produisant lorsque l'utilisateur quitte la page, mais ne voulez pas utiliser l'évènement `unload` (ce qui empêcherait la page d'être mise en cache), vous pouvez utiliser le nouvel évènement `pagehide`. Comme `pageshow`, l'évènement `pagehide` utilise une propriété booléenne appelée `persisted`. Cette propriété est définie à `true` si la page est mise en cache par le navigateur. Lorsque cette propriété est définie à `false`, le gestionnaire `unload`, s'il existe, se déclenche immédiatement après l'évènement `pagehide`.

Firefox 1.5 essaie de simuler les évènements de chargement dans le même ordre de déroulement que lorsque la page est chargée initialement. Les cadres sont traités de la même façon que le document principal. Si la page contient des cadres, cela signifie que lorsque la page mise en cache est chargée :

- les évènements `pageshow` de chaque cadre se déclenchent avant l'évènement `pageshow` du document principal.
- lorsque l'utilisateur quitte la page mise en cache, l'évènement `pagehide` de chaque cadre se déclenche avant l'évènement `pagehide` du document principal.
- pour la navigation se déroulant à l'intérieur d'un seul cadre, les évènements se déclenchent uniquement dans le cadre affecté.

### Exemple de code

L'exemple ci-dessous illustre une page utilisant à la fois les évènements `load` et `pageshow`. La page se comporte de la façon suivante :

- Dans les autres navigateurs que Firefox 1.5, voici ce qui se produit à chaque chargement de la page : l'évènement `load` déclenche la fonction `onLoad`, qui appelle la fonction `onPageShow` (ainsi qu'une autre fonction).

<!---->

- Dans Firefox 1.5, la première fois que la page est chargée, l'évènement `load` s'opère de la même façon que dans les autres navigateurs. De plus l'évènement `pageshow` se déclenche, et comme `persisted` est égal à `false`, rien d'autre ne se produit.

<!---->

- Dans Firefox 1.5, lorsque la page est chargée depuis le cache, seul l'évènement `pageshow` se déclenche. Comme `persisted` est égal à `true`, seules les actions JavaScript de la fonction `onPageShow` sont effectuées.

Dans cet exemple :

- La page calcule et affiche la date et l'heure courantes à chaque chargement de la page. Ce calcul prend en compte les secondes et millisecondes afin que la fonctionnalité puisse être testée facilement.
- Le curseur est placé dans le champ Nom du formulaire au premier chargement de la page. Dans Firefox 1.5, lorsque l'utilisateur revient sur la page, le curseur reste dans le champ dans lequel il se trouvait lorsqu'il l'a quittée. Dans les autres navigateurs, le curseur retourne dans le champ Nom.

<!---->

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
       "http://www.w3.org/TR/html4/loose.dtd">
    <HTML>
    <head>
    <title>Commande : Exemple de Firefox 1.5</title>
    <style type="text/css">
    body, p {
    	font-family: Verdana, sans-serif;
    	font-size: 12px;
       	}
    </style>
    <script type="text/javascript">
    function onLoad() {
    	loadOnlyFirst();
    	onPageShow();
    }

    function onPageShow() {
    // calcule la date et l'heure courantes
    	var currentTime = new Date();
    	var year = currentTime.getFullYear();
    	var month = currentTime.getMonth()+1;
    	var day = currentTime.getDate();
    	var hour = currentTime.getHours();
    	var min = currentTime.getMinutes();
    	var sec = currentTime.getSeconds();
    	var mil = currentTime.getMilliseconds();
    	var displayTime = (day + "/" + month + "/" + year + " " +
    		hour + ":" + min + ":" + sec + ":" + mil);
    	document.getElementById("timefield").value = displayTime;
    }

    function loadOnlyFirst() {
    	document.zipForm.name.focus();
    }
    </script>
    </head>
    <body onload="onLoad();" onpageshow="if (event.persisted) onPageShow();">
    <h2>Commande</h2>

    <form name="zipForm" action="http://www.example.com/formresult.html" method="get">
    <label for="timefield">Date et heure :</label>
    <input type="text" id="timefield"><br>
    <label for="name">Nom :</label>
    <input type="text" id="name"><br>
    <label for="address">Adresse e-mail :</label>
    <input type="text" id="address"><br>
    <label for="order">Numéro de commande :</label>
    <input type="text" id="order"><br>
    <input type="submit" name="submit" value="Soumettre la requête">
    </form>
    </body>
    </html>

En revanche, si la page ci-dessus n'avait pas écouté l'évènement `pageshow` et gérait tous les calculs au sein de l'évènement `load` (et était codée à la place comme dans l'exemple de code ci-dessous), la position du curseur et l'heure auraient été mis en cache par Firefox 1.5 lorsque l'utilisateur aurait quitté la page. Lors de son retour, ce seraient la date et l'heure mises en cache qui auraient été affichées.

    <script>
    function onLoad() {
    	loadOnlyFirst();

    // calcule la date et l'heure courante
    	var currentTime = new Date();
    	var year = currentTime.getFullYear();
    	var month = currentTime.getMonth()+1;
    	var day = currentTime.getDate();
    	var hour = currentTime.getHours();
    	var min = currentTime.getMinutes();
    	var sec = currentTime.getSeconds();
    	var mil = currentTime.getMilliseconds();
    	var displayTime = (day + "/" + month + "/" + year + " " +
    		hour + ":" + min + ":" + sec + ":" + mil);
    	document.getElementById("timefield").value = displayTime;
    }

    function loadOnlyFirst() {
    	document.zipForm.name.focus();
    }
    </script>
    </head>

    <body onload="onLoad();">

### Développement d'extensions pour Firefox

Les [extensions](/fr/Construire_une_extension) pour Firefox 1.5 doivent prendre en compte cette fonctionnalité de mise en cache. Si vous développez une extension pour Firefox et que vous désirez qu'elle soit compatible à la fois avec la 1.5 et les versions antérieures, assurez-vous qu'elle écoute l'évènement `load` pour les déclencheurs qui peuvent être mis en cache et écoute l'évènement `pageshow` pour les déclencheurs qui ne doivent pas être mis en cache.

Par exemple, la Barre d'outils Google pour Firefox doit écouter l'évènement `load` pour la fonction de liens automatiques et l'évènement `pageshow` pour la fonction PageRank afin d'être compatible à la fois avec la version 1.5 et les versions antérieures.
