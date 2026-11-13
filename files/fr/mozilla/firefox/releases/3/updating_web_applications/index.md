---
title: Mise à jour des applications Web pour Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Un certain nombre de changements présents dans Firefox 3 pourraient affecter votre site ou application Web. Vous pourriez en outre tirer parti de plusieurs de ses nouvelles fonctionnalités. Cet article sert de point de départ au fur et à mesure de la mise à jour de votre contenu pour bénéficier au maximum des possibilités de Firefox 3.

## Changements dans le DOM

Les nœuds provenant de documents externes doivent être clonés à l'aide de {{DOMxRef("document.importNode()")}} (ou adoptés avec
{{DOMxRef("document.adoptNode()")}}) avant de pouvoir être insérés dans le document courant. Pour en savoir plus sur les problèmes
de {{DOMxRef("Node.ownerDocument")}}, consultez la [FAQ DOM du W3C <sup>(angl.)</sup>](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox n'applique actuellement pas cette règle (elle l'a été pendant un certain temps lors du développement de Firefox 3, mais trop de sites se cassent lorsque cette règle est appliquée). Nous encourageons les développeur·euse·s web à corriger leur code pour suivre cette règle afin d'améliorer la compatibilité future.

## Changements liés à HTML

### Changements dans l'héritage des jeux de caractères

Firefox 3 corrige un bug de sécurité dans les éléments `frame` et `iframe` qui leur permettait d'hériter du jeu de caractères de leur parent. Cela pouvait poser des problèmes dans certains cas. À présent, les cadres ne peuvent hériter du jeu de caractère de leur parent que si tant le cadre que le parent sont chargés depuis le même serveur. Si vous avez des pages qui dépendent du fait que les cadres chargés depuis d'autres serveurs héritont du même jeu de caractères, leurs balisage HTML doit être mis à jour pour indiquer leur jeu de caractères plus précisément.

### Changements concernant l'élément SCRIPT

L'élément `<script>` dans les documents HTML servis en mode `text/html` doit à présent être obligatoirement accompagné d'une balise fermante `<script>`, même si aucun contenu n'est fourni entre les deux balises. Dans les versions précédentes de Firefox, il était possible de faire ceci&nbsp;:

```html
<script … />
```

Le balisage doit à présent respecter les spécifications HTML (si c'est effectivement du HTML), il devient donc obligatoire de placer une balise de fermeture séparément, comme ceci&nbsp;:

```html
<script …></script>
```

Ce changement améliore tant la compatibilité que la sécurité.

## Changements liés à CSS

### Changements concernant les tailles de police basées sur les unités em et ex

Les valeurs de taille de police en unités `em` et `ex` étaient auparavant affectées par le paramètre de taille de police minimale de l'utilisateur·ice&nbsp;: si une police s'affichait plus grande à cause de cette taille minimale, les unités `em` et `ex` pour les réglages de taille de police basés sur celle-ci étaient agrandies en conséquence. Cela était incohérent avec le comportement des tailles de police exprimées en pourcentage.

Les valeurs de taille de police en unités `em` et `ex` sont désormais basées sur une «&nbsp;taille de police prévue&nbsp;» qui n'est pas affectée par la taille de police minimale de l'utilisateur·ice. Autrement dit, les tailles de police sont toujours calculées selon l'intention du concepteur et sont ensuite ajustées pour tenir compte de la taille de police minimale.

Voir [le bogue Firefox 434718 <sup>(angl.)</sup>](https://bugzil.la/434718), en particulier sa section PAS UN CAS POUR LE MODÈLE DE BUG — le lien suivant pointe vers une pièce jointe Bugzilla, pas vers un bug Bugzilla&nbsp;; si vous utilisez le numéro de la pièce jointe comme numéro de bug, cela n'a aucun sens comme [pièce jointe 322943 <sup>(angl.)</sup>](https://bug434718.bmoattachments.org/attachment.cgi?id=322943) qui n'est PAS UN CAS POUR LE MODÈLE DE BUG pour une démonstration (à afficher avec une taille de police minimale >= 6 pour voir la différence&nbsp;: les deux cascades de boîtes se comportent différemment dans Firefox 2, car la taille de police basée sur `em` «&nbsp;rebondit&nbsp;» sur la taille de police minimale).

## Changements concernant la sécurité

### Accès au chrome

Dans les versions précédentes de Firefox, toute page web pouvait charger des scripts ou des images depuis le chrome à l'aide du protocole `chrome://`. Cela permettait entre autres à des sites de détecter la présence de certains modules complémentaires — ce qui peut être utilisé pour compromettre la sécurité d'un·e utilisateur·ice en contournant des modules ajoutant des fonctionnalités de sécurité au navigateur.

Firefox 3 ne permet plus au contenu web que d'accéder aux éléments dans les espaces `chrome://browser/` et `chrome://toolkit/`. Ces fichiers sont prévus pour être accessibles au contenu web. Tous les autres contenus chrome y sont par contre à présent inaccessibles.

Une possibilité existe cependant pour les extensions désirant rendre le contenu accessible aux pages web. Ces extensions peuvent définir un paramètre spécial dans leur fichier `chrome.manifest` comme ceci&nbsp;:

```plain
content my-package location/ contentaccessible=yes
```

Cette manipulation ne doit pas être nécessaire la plupart du temps, mais elle existe toutefois pour les rares cas où elle reste indispensable. Notez qu'il n'est pas exclu que Firefox avertisse l'utilisateur·ice de cette utilisation du paramètre `contentaccessible`, étant donné qu'il constitue un risque potentiel de sécurité.

> [!NOTE]
> Firefox 2 ne gérant pas le paramètre contentaccessible (la ligne le contenant est entièrement ignorée), si vous voulez que votre module reste compatible avec Firefox 2 et Firefox 3, ajoutez plutôt quelque chose comme ceci&nbsp;:
>
> ```bash
> content my-package location/
> content my-package location/ contentaccessible=yes
> ```

### Champs d'envoi de fichiers (upload)

Dans les versions précédentes de Firefox, un certain nombre de cas existaient où le chemin entier du fichier envoyé par l'utilisateur·ice était lisible par une application web. Pour des raisons de confidentialité, ce n'est plus possible dans Firefox 3&nbsp;; à présent seul le nom du fichier lui-même est visible par l'application web.

### Utiliser des JAR distants dans des cadres

L'utilisation de code dans des fichiers JAR chargés depuis d'autres domaines n'est plus autorisée dans les cadres&nbsp;; cela permet de réduire un [vecteur d'attaque potentiel <sup>(angl.)</sup>](https://www.mozilla.org/en-US/security/advisories/mfsa2008-23/).

### Changer la politique de même origine pour les URI `file:`

La politique de même origine pour les URI `file:` a changé dans Firefox 3. Cela peut affecter votre contenu&nbsp;; veuillez consulter [Politique de même origine pour les URI `file:`](/fr/docs/Web/Security/Defenses/Same-origin_policy#origines_de_fichiers) pour plus de détails.

### Changements dans JavaScript

Firefox 3 intègre [JavaScript 1.8 <sup>(angl.)</sup>](https://web.archive.org/web/20210224081539/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8). Un changement important qui peur nécessiter une mise à jour de vos sites ou applications Web est que l'objet obsolète et non standard `Script` n'est plus géré. Il ne s'agit pas de la balise `<script>` mais d'un objet JavaScript qui n'avait jamais été standardisé. Il est finalement peu probable que vous l'ayez jamais utilisé, et vous n'avez sans doute aucun problème.

## Voir aussi

- [Firefox 3 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/3)
- [Nouveautés dans JavaScript 1.8 <sup>(angl.)</sup>](https://web.archive.org/web/20210224081539/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8)
- [Mise à jour des extensions pour Firefox 3](/fr/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
