---
title: Mise à jour des applications Web pour Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
tags:
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3/Updating_web_applications
original_slug: Mise_à_jour_des_applications_Web_pour_Firefox_3
---
{{FirefoxSidebar}}

Un certain nombre de changements présents dans Firefox 3 pourraient affecter votre site ou application Web. Vous pourriez en outre tirer parti de plusieurs de ses nouvelles fonctionnalités. Cet article servira de point de départ au fur et à mesure de la mise à jour de votre contenu pour bénéficier au maximum des possibilités de Firefox 3.

### Changements dans le DOM

Les nœuds provenant de documents externes doivent être clonés à l'aide de [`document.importNode()`](/fr/docs/Web/API/Document/importNode) (ou adoptés avec
[`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode)) avant de pouvoir être insérés dans le document courant. Pour en savoir plus sur les problèmes
de [`Node.ownerDocument`](/fr/docs/Web/API/Node/ownerDocument), consultez la [FAQ DOM du W3C](http://www.w3.org/DOM/faq.html#ownerdoc) (en anglais).

Gecko n'obligeait pas à utiliser [`document.importNode()`](/fr/docs/Web/API/Document/importNode) et [`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode) avant sa version 1.9. Depuis les versions 1.9
alphas, si un nœud n'est pas adopté ou importé avant d'être utilisé dans un autre document, l'exception
`WRONG_DOCUMENT_ERR` est déclenchée (`NS_ERROR_DOM_WRONG_DOCUMENT_ERR`). implémentation dans le [bug 47903](https://bugzilla.mozilla.org/show_bug.cgi?id=47903).

### Changements liés à HTML

#### Changements dans l'héritage des jeux de caractères

Firefox 3 corrige un bug de sécurité dans les éléments `frame` et `iframe` qui leur permettait d'hériter du jeu de caractères de leur parent. Cela pouvait poser des problèmes dans certains cas. À présent, les cadres ne peuvent hériter du jeu de caractère de leur parent que si tant le cadre que le parent sont chargés depuis le même serveur. Si vous avez des pages qui dépendent du fait que les cadres chargés depuis d'autres serveurs hériteront du même jeu de caractères, leurs balisage HTML devra être mis à jour pour indiquer leur jeu de caractères plus précisément.

#### Changements concernant l'élément SCRIPT

L'élément \<script> dans les documents HTML servis en mode `text/html` doit à présent être obligatoirement accompagné d'une balise fermante \</script>, même si aucun contenu n'est fourni entre les deux balises. Dans les versions précédentes de Firefox, il était possible de faire ceci&nbsp;:

    <script ... />

Le balisage doit à présent respecter les spécifications HTML (si c'est effectivement du HTML), il devient donc obligatoire de placer une balise de fermeture séparément, comme ceci&nbsp;:

    <script ...></script>

Ce changement améliore tant la compatibilité que la sécurité.

### Changements liés à CSS

#### Changements concernant les tailles de police basées sur les unités em et ex

Les valeurs de taille de police (`font-size`) utilisant les unités em et ex étaient auparavant affectées selon la taille de police minimale spécifiée par l'utilisateur&nbsp;: si une police était affichée plus grande à cause de la taille de police minimale, les unités em et ex pour les tailles de police étaient adaptées en fonction. Ce comportement était incohérent avec la manière dont les tailles de police en pourcentage fonctionnaient.

Les valeurs de `font-size` sont à présent basées sur une «&nbsp;taille de police désirée&nbsp;» qui n'est pas affectée par la taille minimale de police de l'utilisateur. Autrement dit, les tailles de police sont toujours calculées selon l'intention du concepteur du site et ne sont ajustées selon la taille de police minimale qu'après coup.

Consultez le {{ Bug(322943) }} pour une démonstration (doit être visionnée avec une taille de police minimale supérieure ou égale à 6 pour voir la différence&nbsp;: les deux cascades de boîtes se comportent différemment dans Firefox 2, car la taille de police basée sur des unités em est décalée par la taille de police minimale).

### Changements concernant la sécurité

#### Accès au chrome

Dans les versions précédentes de Firefox, toute page web pouvait charger des scripts ou des images depuis le chrome à l'aide du protocole chrome://. Cela permettait entre autres à des sites de détecter la présence de certains modules complémentaires — ce qui pourrait être utilisé pour compromettre la sécurité d'un utilisateur en contournant des modules ajoutant des fonctionnalités de sécurité au navigateur.

Firefox 3 ne permet plus au contenu web que d'accéder aux éléments dans les espaces chrome://browser/ et chrome://toolkit/. Ces fichiers sont prévus pour être accessibles au contenu web. Tous les autres contenus chrome y sont par contre à présent inaccessibles.

Une possibilité existe cependant pour les extensions désirant rendre le contenu accessible aux pages web. Ces extensions peuvent spécifier un paramètre spécial dans leur fichier chrome.manifest comme ceci&nbsp;:

    content mypackage location/ contentaccessible=yes

Cette manipulation ne devrait pas être nécessaire la plupart du temps, mais elle existe toutefois pour les rares cas où elle reste indispensable. Notez qu'il n'est pas exclu que Firefox avertisse l'utilisateur de cette utilisation du paramètre `contentaccessible`, étant donné qu'il constitue un risque potentiel de sécurité.

> **Note :** Firefox 2 ne gérant pas le paramètre contentaccessible (la ligne le contenant sera entièrement ignorée), si vous voulez que votre module reste compatible avec Firefox 2 et Firefox 3, ajoutez plutôt quelque chose comme ceci&nbsp;:
>
>     content mypackage location/
>     content mypackage location/ contentaccessible=yes

#### Champs d'envoi de fichiers (upload)

Dans les versions précédentes de Firefox, un certain nombre de cas existaient où le chemin entier du fichier envoyé par l'utilisateur était lisible par une application web. Pour des raisons de confidentialité, ce n'est plus possible dans Firefox 3&nbsp;; à présent seul le nom du fichier lui-même est visible par l'application web.

### Changements dans JavaScript

Firefox 3 intègre [JavaScript 1.8](fr/Nouveaut%c3%a9s_dans_JavaScript_1.8). Un changement important qui pourrait nécessiter une mise à jour de vos sites ou applications Web est que l'objet obsolète et non standard `Script` n'est plus géré. Il ne s'agit pas de la balise `<script>` mais d'un objet JavaScript qui n'avait jamais été standardisé. Il est finalement peu probable que vous l'ayez jamais utilisé, et vous n'aurez sans doute aucun problème.

### Voir également

- [Firefox 3 pour les développeurs](fr/Firefox_3_pour_les_d%c3%a9veloppeurs)
- [Nouveautés dans JavaScript 1.8](fr/Nouveaut%c3%a9s_dans_JavaScript_1.8)
- [Mise à jour des extensions pour Firefox 3](fr/Mise_%c3%a0_jour_des_extensions_pour_Firefox_3)
