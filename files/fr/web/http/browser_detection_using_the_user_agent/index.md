---
title: Détection du navigateur à l'aide du User-Agent
slug: Web/HTTP/Browser_detection_using_the_user_agent
tags:
  - Compatibilité
  - Développement Web
translation_of: Web/HTTP/Browser_detection_using_the_user_agent
original_slug: Web/HTTP/Detection_du_navigateur_en_utilisant_le_user_agent
---
{{HTTPSidebar}}

Afficher des pages web ou des services en fonction du navigateur est généralement une mauvaise idée. Le Web se doit d'être accessible à tout le monde, sans prendre en compte le navigateur ou l'appareil utilisé. Il existe différentes façons de développer votre site web afin de l'améliorer progressivement en se basant sur des fonctionnalités standard plutôt qu'en traitant chaque navigateur de manière spécifique.

Les navigateurs et les standards ne sont cependant pas parfaits, il reste certains cas limites pour lesquels connaître le navigateur utilisé peut s'avérer utile. Utiliser le User-Agent dans ce but paraît simple mais le faire de manière fiable est en réalité très difficile. Ce document va vous guider pour lire le User-Agent aussi précisément que possible.

> **Note :** Il est important de rappeler que contrôler le contenu du User-Agent est rarement une bonne idée. Il est presque toujours possible de trouver une solution plus générique et compatible avec un plus grand nombre de navigateurs et d'appareils !

## A prendre en compte avant d'identifier le navigateur

Lorsque vous cherchez à contrôler le contenu de la chaîne de caractères User-Agent pour détecter le navigateur utilisé, la première étape consiste à éviter cette méthode autant que possible. Commencez par identifier **pourquoi** vous souhaitez le faire.

- Êtes-vous en train d'essayer de corriger un bug pour une version spécifique d'un navigateur ?
  - : Recherchez ou demandez sur les forums spécialisés : vous n'êtes certainement pas le premier à rencontrer le problème. Des experts ou d'autres personnes avec un point de vue différent peuvent vous donner des idées pour contourner le problème. Si le bug n'est pas fréquent, il peut être utile de vérifier s'il a déjà été signalé au fournisseur du navigateur dans son système de suivi des bugs ([Mozilla](https://bugzilla.mozilla.org/), [WebKit](https://bugs.webkit.org/), [Opera](https://bugs.opera.com)). Les fournisseurs sont attentifs aux bugs signalés, leur analyse du problème peut apporter un éclairage nouveau permettant de contourner le bug.
- Cherchez-vous à vérifier l'existence d'une fonctionnalité particulière ?
  - : Votre site a besoin d'une fonctionnalité qui n'est pas encore supportée par certains navigateurs et vous souhaitez servir à leurs utilisateurs une version plus ancienne du site, avec moins de fonctionnalités mais dont vous êtes certain qu'elle va fonctionner. Il s'agit de la pire raison de détecter le User-Agent car il y a de grandes chances que ces navigateurs finissent par rattraper leur retard. Dans ce cas, le mieux est d'éviter de recourir au User-Agent et de détecter les fonctionnalités disponibles.

<!---->

- Voulez-vous servir un code HTML différent selon le navigateur utilisé ?
  - : Il s'agit généralement d'une mauvaise pratique mais nécessaire dans certains cas. Vous devez alors analyser la situation pour vous assurer que c'est absolument nécessaire. Pouvez-vous l'éviter en ajoutant des éléments non sémantiques tels que {{ HTMLElement("div") }} ou {{ HTMLElement("span") }} ? La difficulté à détecter le User-Agent justifie des exceptions à la pureté du code HTML. Vous pouvez aussi repenser le design : pouvez-vous plutôt utiliser l'amélioration progressives ou utiliser une grille fluide pour éviter d'avoir recours au User-Agent ?

## Éviter de détecter l'agent utilisateur

Il existe des options possibles à considérer pour éviter d'avoir à détecter l'agent utilisateur.

- Détection de fonctionnalités
  - : La détection de fonctionnalités consiste à ne pas détecter quel navigateur affiche la page mais plutôt à vérifier qu'une fonctionnalité est disponible. Dans le cas contraire vous pouvez utiliser une solution de contournement. Cependant, n'utilisez pas la détection de fonctionnalité dans les rares cas où la détection de l'agent utilisateur est utile car les autres navigateurs pourraient dans le futur implémenter la fonctionnalité manquante d'une manière différente. Il pourrait en résulter des bugs particulièrement difficiles à détecter et à corriger.
- Amélioration progressive
  - : Cette technique de design signifie séparer la page web en couches, en utilisant une approche ascendante (ou bottom-up), en commençant par une couche simple (avec peu ou pas de fonctionnalités) puis en améliorant les capacités par couches successives, chacune comportant plus de fonctionnalités.
- Dégradation élégante
  - : Il s'agit d'une approche descendante (ou top-down), avec laquelle on construit le site avec toutes les fonctionalités souhaitées, pour ensuite le faire fonctionner sur des navigateurs plus anciens. Cette technique est plus difficile et moins efficace que l'amélioration progressive mais s'avère utile dans certains cas.

## Où se trouve l'information recherchée dans le User-Agent

C'est la partie difficile, puisque les différentes sections de la chaîne User-Agent ne sont pas standardisées.

### Nom du navigateur

Souvent ceux qui disent vouloir détecter le navigateur veulent en fait détecter le moteur de rendu. Souhaitez-vous détecter Firefox et non Seamonkey, ou Chrome et non Chromium&nbsp;? Ou seulement savoir si le navigateur utilise le moteur de rendu Gecko ou Webkit&nbsp;? Dans ce dernier cas, réferrez vous plus bas dans cette page.

La plupart des navigateurs notent leur nom et version suivant le format _NomDuNavigateur/NuméroDeVersion_, à l'exception notable d'Internet Explorer. Le nom n'est cependant pas la seule information du User-Agent qui respecte ce format, il n'est donc pas possible d'y trouver directement le nom du navigateur, seulement de vérifier si le nom recherché est présent ou non. Attention certains navigateurs mentent&nbsp;: par exemple, Chrome mentionne à la fois Chrome et Safari dans le User-Agent. Pour détecter Safari il faut donc vérifier que la chaîne "Safari" est présente et "Chrome" est absent. De la même façon, Chromium se présente souvent comme Chrome et Seamonkey comme Firefox.

Faites aussi attention à ne pas utiliser une expression régulière trop simple sur le nom du navigateur car le User-Agent contient d'autres chaînes de caractères ne respectant pas le format clé/valeur. Par exemple, le User-Agent de Safari et Chrome contient une chaîne "like Gecko".

<table>
  <thead>
    <tr>
      <th scope="col">Moteur</th>
      <th scope="col">Doit contenir</th>
      <th scope="col">Ne doit pas contenir</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Firefox</td>
      <td>Firefox/xyz</td>
      <td>Seamonkey/xyz</td>
      <td></td>
    </tr>
    <tr>
      <td>Seamonkey</td>
      <td>Seamonkey/xyz</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Chrome</td>
      <td>Chrome/xyz</td>
      <td>Chromium/xyz</td>
      <td></td>
    </tr>
    <tr>
      <td>Chromium</td>
      <td>Chromium/xyz</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Safari</td>
      <td>Safari/xyz</td>
      <td>Chrome/xyz ou Chromium/xyz</td>
      <td>
        Safari donne deux numéros de version, l'un technique au format
        Safari/xyz, l'autre plus convivial su format Version/xyz
      </td>
    </tr>
    <tr>
      <td>Opera</td>
      <td>
        <p>OPR/xyz></p>
        <p>Opera/xyz</p>
      </td>
      <td></td>
      <td>
        <p>Opera 15+ (moteur de rendu Blink)</p>
        <p>Opera 12- (moteur de rendu Presto)</p>
      </td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>;MSIE xyz;</td>
      <td></td>
      <td>
        Internet Explorer n'utilise pas le format
        <em>NomDuNavigateur/NuméroDeVersion</em>
      </td>
    </tr>
  </tbody>
</table>

Il n'y a évidemment aucune garantie qu'aucun autre navigateur ne va utiliser ces notations (comme Chrome qui mentionne "Safari" dans son User-Agent). C'est pourquoi la détection du navigateur par ce moyen n'est pas fiable et ne doit être fait qu'en vérifiant aussi le numéro de version (il est peu probable qu'un navigateur mentionne dans son User-Agent le nom d'un autre navigateur dans une version plus ancienne).

### Version du navigateur

La version du navigateur est souvent, mais pas toujours, écrite dans la valeur d'un ensemble clé/valeur _NomDuNavigateur/NuméroDeVersion_ dans la chaîne de caractères du User-Agent. Ce n'est pas le cas d'Internet Explorer (qui écrit son numéro de version juste après la chaîne "MSIE"), et d'Opera après la version 10, qui ajoute une section _Version/NuméroDeVersion_.

Encore une fois, assurez vous de regarder au bon endroit selon le navigateur visé car il n'y a aucune garantie de trouver un numéro de version valide dans le reste du User-Agent.

### Moteur de rendu

Comme indiqué plus haut, chercher le nom du moteur de recherche est la plupart du temps la meilleure solution. Cela permet de ne pas exclure des navigateurs peu connus basés sur le même moteur de rendu qu'un autre plus connu. Les navigateurs qui utilisent le même moteur de rendu affichent les pages de la même façon&nbsp;: on peut partir du principe que ce qui va fonctionner avec l'un fonctionnera avec l'autre.

Il y a cinq principaux moteurs de rendu&nbsp;: Trident, Gecko, Presto, Blink et Webkit. Puisque détecter le nom du moteur de rendu est courant, d'autres noms sont ajoutés dans beaucoup d'autres User-Agents. Il est donc important de faire attention aux faux positifs lorsqu'on cherche à détecter le moteur de rendu.

| Moteur  | Doit contenir   | Ne doit pas contenir                                                                                            |
| ------- | --------------- | --------------------------------------------------------------------------------------------------------------- |
| Gecko   | Gecko/xyz       |                                                                                                                 |
| WebKit  | AppleWebKit/xyz | Attention&nbsp;: les navigateurs qui utilisent Webkit ajoutent "like Gecko", ce qui peut déclencher de faux positifs |
| Presto  | Opera/xyz       | **Note&nbsp;:** Presto n'est plus utilisé par Opera pour les versions >= 15 (voir "Blink")                           |
| Trident | Trident/xyz     | Internet Explorer place cette chaîne dans la partie _commentaire_ du User-Agent                                 |
| Blink   | Chrome/xyz      |                                                                                                                 |

## Version du moteur de rendu

La plupart des moteurs de rendu placent leur numéro de version dans la section _MoteurDeRendu/NuméroDeVersion_, à l'exception notable de Gecko. Gecko place le numéro de version dans la partie commentaire après la chaîne `rv:`. Depuis la version 14 pour mobile et 17 pour les ordinateurs, il pace aussi cette valeur dans la section `Gecko/version` (les versions précédentes y plaçaient la date de compilation, puis une date fixe appelée "Gecko Trail").

## Système d'Exploitation

Le système d'exploitation est dans la plupart des cas donné dans le User-Agent (il n'est pas donné dans des systèmes orientés web tels que Firefox OS) mais sous un format très variable. C'est une chaîne encadrée par des point-virgules, dans la partie commentaire du User-Agent. Cette chaîne est spécifique à chaque navigateur. Elle indique le nom du système d'exploitation et souvent sa version et des informations sur le matériel (32 ou 64 bits, ou Intel/PPC pour Mac).

Comme pour le reste, ces chaînes peuvent changer dans le futur, elles doivent seulement être utilisées en conjonction avec la détection de navigateurs existants. Une veille technologique doit s'effectuer pour adapter le script de détection lorsque de nouvelles versions des navigateurs sortent.

### Mobile, tablette ou ordinateur

La raison la plus courante de détecter le User-Agent et de déterminer sur quel type d'appareil fonctionne le navigateur. Le but est de servir un code HTML différent selon le type d'appareil.

- Ne partez jamais du principe qu'un navigateur ne fonctionne que sur un seul type d'appareil. En particulier, ne pas définir de paramètre par défaut selon le navigateur.
- N'utilisez jamais la chaîne dédiée au système d'exploitation pour déterminer si le navigateur est sur un mobile, une tablette ou un ordinateur. Le même système d'exploitation peut fonctionner sur plusieurs types d'appareil (par exemple, Android fonctionne aussi bien sur des tablettes que sur des téléphones).

Le tableau suivant résume de quelle façon les principaux navigateurs indiquent qu'ils fonctionnent sur un appareil mobile&nbsp;:

<table>
  <caption>
    User Agent des navigateurs courants
  </caption>
  <thead>
    <tr>
      <th scope="col">Navigateur</th>
      <th scope="col">Règle</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mozilla (Gecko, Firefox)</td>
      <td>
        <a href="/en-US/docs/Gecko_user_agent_string_reference"
          >Chaîne <strong>Mobile</strong> ou <strong>Tablet</strong></a
        >
        dans le commentaire
      </td>
      <td>Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0</td>
    </tr>
    <tr>
      <td>Basé sur WebKit (Android, Safari)</td>
      <td>
        <a
          href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/OptimizingforSafarioniPhone/OptimizingforSafarioniPhone.html#//apple_ref/doc/uid/TP40006517-SW3"
          >Chaîne <strong>Mobile Safari</strong></a
        >
        hors du commentaire
      </td>
      <td>
        Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K)
        AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
      </td>
    </tr>
    <tr>
      <td>Basé sur Blink (Chromium, Google Chrome, Opera 15+)</td>
      <td>
        <a href="https://developers.google.com/chrome/mobile/docs/user-agent"
          >Chaîne <strong>Mobile Safari</strong> token</a
        >
        hors du commentaire
      </td>
      <td>
        Mozilla/5.0 (Linux; Android 4.4.2); Nexus 5 Build/KOT49H)
        AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile
        Safari/537.36 OPR/20.0.1396.72047
      </td>
    </tr>
    <tr>
      <td>Basé sur Presto (Opera 12-)</td>
      <td>
        <p>
          <a href="http://my.opera.com/community/openweb/idopera/"
            >Chaîne <strong>Opera Mobi/xyz</strong></a
          >
          dans le commentaire (Opera 12-)
        </p>
      </td>
      <td>
        <p>
          Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES)
          Presto/2.9.201 Version/11.50
        </p>
      </td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>Chaîne <strong>IEMobile/xyz</strong> dans le commentaire</td>
      <td>
        Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0;
        IEMobile/9.0)
      </td>
    </tr>
  </tbody>
</table>

En résumé, nous recommandons de chercher la chaîne "Mobi" dans le User-Agent pour détecter un appareil mobile.

{{note("Si l'appareil est suffisamment grand pour ne pas être indiqué “Mobi“, il est préférable de servir la version du site pour ordinateur. De toute manière, supporter les interactions tactiles pour un site “pour ordinateur“ est une bonne pratique. En effet, de plus en plus d'ordinateurs sont équipés d'écrans tactiles.")}}
