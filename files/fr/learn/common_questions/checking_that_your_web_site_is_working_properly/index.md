---
title: Tester le bon fonctionnement de votre site web
slug: Learn/Common_questions/Checking_that_your_web_site_is_working_properly
tags:
  - Beginner
  - Document
  - Guide
  - NeedsActiveLearning
  - Web
  - Web Development
  - WebMechanics
translation_of: Learn/Common_questions/Checking_that_your_web_site_is_working_properly
original_slug: Apprendre/Tester_le_bon_fonctionnement_de_votre_site_web
---
Dans cet article, nous présenterons les différentes étapes permettant de diagnostiquer les problèmes d'un site web ainsi que les mesures à prendre pour corriger certains de ces problèmes.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Vous devez au préalable savoir
        <a href="/fr/Apprendre/Transférer_des_fichiers_vers_un_serveur_web"
          >comment transférer des fichiers vers un serveur web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>
        Apprendre à diagnostiquer et à résoudre certains problèmes simples qui
        peuvent se produire lors du développement ou de la maintenance d'un site
        web.
      </td>
    </tr>
  </tbody>
</table>

Vous avez donc publié votre site web en ligne. Bien. Mais êtes-vous sûr-e que celui-ci fonctionne correctement ?

Un serveur web distant se comportera différemment d'un serveur local. Mieux vaut donc tester le bon fonctionnement d'un site web une fois qu'il est en ligne. Des problèmes « étonnants » peuvent survenir : les images peuvent ne pas apparaître, des pages ne se chargeront pas ou se chargeront lentement, etc. La plupart du temps, ce n'est pas un problème critique : il s'agit de corriger une erreur ou de paramétrer correctement la configuration du serveur hébergé.

Voyons donc comment diagnostiquer et résoudre ces problèmes.

## Pédagogie active

_Il n'existe pas encore de matériau interactif pour cet article. [N'hésitez pas à contribuer !](/fr/docs/MDN/Débuter_sur_MDN)_

## Aller plus loin

### Tester avec votre navigateur

La première chose à faire pour tester une page donnée est d'ouvrir votre navigateur et d'aller sur cette page.

#### Où est passée l'image ?

Allons sur notre site web : `http://demozilla.hebergeurexemple.net/`. L'image n'apparaît pas alors qu'il y aurait du y en avoir une !

![Oops, the ‘unicorn’ image is missing](Capture%20du%202015-10-12%2017-21-20.png)

Ouvrons les outils de développement et plus particulièrement ceux qui portent sur le réseau (**Outils ➤ Développement Web ➤ Réseau**) puis rechargeons la page :

![The image has a 404 error](Capture%20du%202015-10-12%2018-21-23.png)

Le problème c'est ce 404 qu'on voit en bas. 404 signifie que la ressource n'a pas été trouvée et c'est pour ça que nous ne voyons pas l'image.

#### Les status HTTP

Le serveur répond avec une message de statut à chaque fois qu'il reçoit une requête. Voici les statuts les plus communs ainsi que leur code :

- **200 : OK**
  - : La ressource demandée a bien été transmise.
- **301 : Déplacée de façon permanente (_Moved permanently_)**
  - : La ressource a été déplacée à un nouvel emplacement. Vous ne verrez cette erreur que rarement mais elle est utile à connaître car les moteurs de recherchee utilise cette information pour mettre à jour leurs index.
- **304 : Non modifiée (_Not modified_)**
  - : La ressource n'a pas été modifiée depuis la dernière fois qu'elle a été demandée. Le navigateur affiche alors la version qu'il a dans son cache afin de répondre plus rapidement et d'économiser de la bande passante.
- **403 : Accès interdit (_Forbidden_)**
  - : Vous n'êtes pas autorisé-e à afficher cette ressource. Généralement, cela est dû à un problème de configuration (par exemple votre hébergeur ne vous a pas donné les droits sur un répertoire).
- **404 : Non trouvée (_Not found_)**
  - : Le message est plutôt explicite, nous en discuterons dans la suite de cet article.
- **500 : Erreur interne du serveur (_Internal server error_)**
  - : Une erreur s'est produite sur le serveur. Cela peut par exemple être dû à une erreur de langage côté serveur ({{Glossary("PHP")}}, .Net, etc.) ou à un problème de configuration. Généralement, mieux vaut voir avec l'équipe support de l'hébergeur.
- **503 : Service indisponible (_Service unavailable_)**
  - : Cela est généralement lié à une surcharge temporaire du serveur. Réessayez dans quelques temps.

<!---->

Lorsqu'on débute avec une site simple, on rencontre le plus souvent des codes 200, 304, 403, et 404.

#### Corriger l'erreur 404

Où est donc le problème ?

![Le list of images in our project](Capture%20du%202015-10-12%2018-45-07.png)

À premièrve vue, l'image semble être au bon endroit mais l'outil d'analyse réseau affiche un code 404 renvoyé par le serveur. Le problème ici est une coquille dans le code de la page HTML `licornes.png` plutôt que `licorne.png`. En corrigeant cette erreur avec l'attribut `src`

![Deleting the ‘s’](Capture%20du%202015-10-12%2018-50-56.png)

Puis en sauvegardant et [en envoyant le fichier vers le serveur](/fr/Learn/Upload_files_to_a_web_server), on peut ensuite recharger la page dans le navigateur :

![The image loads corectly in the browser](Capture%20du%202015-10-12%2018-53-50.png)

Et voilà, revenons sur les status {{Glossary("HTTP")}} :

- **200** apparaît pour toutes les ressources ici `/`, `basics.css` et `licorne.png` : cela signifie que tous les éléments ont été rechargés.
- **304** : Vous pouvez obtenir un code pour `basic.css`, cela signifie que le fichier n'a pas été modifié depuis la dernière requête. Le navigateur utilise alors la version du fichier qu'il a en cache plutôt que d'en demander un nouvel exemplaire.

Nous avons donc corrigé l'erreur tout en en apprenant un peu plus sur les statuts HTTP !

### Les erreurs fréquentes

Les erreurs les plus fréquentes sont les suivantes.

#### Des coquilles dans l'adresse

Dans la capture suivante, nous avons voulu accéder à `http://demozilla.hebergeurexemple.net/` mais nous avons oublié un « m » :

![Address unreachable](Capture%20du%202015-10-12%2018-58-19.png)

L'adresse est introuvable… en effet.

#### Les erreurs 404

La plupart du temps, ces erreurs sont dues à des fautes d'orthographes mais parfois cela peut être la faute d'un fichier qui n'a pas été transféré ou d'une connexion réseau instable lors du transfert. Commencez par vérifier l'orthographe des noms et des chemins de fichiers. Si le problème persiste, transférez à nouveau vos fichiers.

#### Les erreurs JavaScript

Quelqu'un (peut-être vous) peut avoir ajouté un script à la page et avoir fait une erreur. Cela n'empêchera pas la page de charger mais cela pourra avoir des conséquences selon le rôle du script.

Pour voir ces erreurs, ouvrez la console (**Outils ➤ Développement web ➤ Console web**) and puis rechargez la page:

![A Javascript error is shown in the Console](Capture%20du%202015-10-12%2019-10-52.png)

Ici, nous voyons comment détecter une erreur, la console affiche sur quoi porte l'erreur et éventuellement comment la résoudre (nous verrons JavaScript dans [une autre série d'articles](/fr/Apprendre/JavaScript)).

### D'autres points de contrôles

Nous avons vu quelques points simples pour s'assurer qu'un site fonctionne correctement. Mais une page peut fonctionner correctement sans fonctionner « parfaitement ».

#### Qu'en est-il de la performance ?

Est-ce que la page charge suffisamment vite ? Pour le savoir, vous pouvez utiliser des outils comme [webpagetest.org](http://www.webpagetest.org/) ou des modules complémentaires comme [YSlow](https://addons.mozilla.org/en-US/firefox/addon/yslow/) qui peuvent fournir des indications intéressantes :

![Yslow diagnostics](yslow-diagnostics.png)

Les notes vont de A à F. La page actuelle est pluôt légère et respecte donc la plupart des critères. On voit ici qu'il aurait été préférable d'utiliser un {{Glossary("CDN")}}. Dans notre cas, cette remarque n'est pas très critique car notre site web n'est pas un site à forte audience qui sert des milliers d'images.

#### Est-ce que le serveur réagit suffisamment vite ?

`ping` est une commande plutôt utile pour tester si le serveur rattaché à votre nom de domaine répond correctement :

    $ ping mozilla.org
    PING mozilla.org (63.245.215.20): 56 data bytes
    64 bytes from 63.245.215.20: icmp_seq=0 ttl=44 time=148.741 ms
    64 bytes from 63.245.215.20: icmp_seq=1 ttl=44 time=148.541 ms
    64 bytes from 63.245.215.20: icmp_seq=2 ttl=44 time=148.734 ms
    64 bytes from 63.245.215.20: icmp_seq=3 ttl=44 time=147.857 ms
    ^C
    --- mozilla.org ping statistics ---
    4 packets transmitted, 4 packets received, 0.0% packet loss
    round-trip min/avg/max/stddev = 147.857/148.468/148.741/0.362 ms

Si vous utilisez Windows, le ping s'arrêtera après quelques envois mais si vous utilisez Mac ou Linux, mémorisez le raccourci **Ctrl+C** pour arrêter l'envoi des pings.  Ctrl+C envoie un signal d'interruption qui arrêtera l'exécution du programme. Si vous n'utilisez pas Ctrl+C, le programme `ping` contactera le serveur indéfiniment.

### Une _checklist_ de base

- Vérifier les erreurs 404
- S'assurer que chaque page web fonctionne comme attenu
- Vérifier le site web avec plusieurs navigateurs pour s'assurer qu'il s'affiche de façon cohérente sur ces différents navigateurs

## Prochaines étapes

Félicitations ! Votre site est en ligne, fonctionne correctement et tout le monde peut le visiter. C'est une belle réussite ! Vous pouvez maintenant approfondir d'autres sujets.

- De nombreuses personnes peuvent accéder à votre site, mieux vaut donc que celui-ci [soit le plus accessible possible](/fr/Apprendre/Accessibilité).
- Le site a l'air brut de décoffrage ? C'est le bon moment pour [apprendre un peu de CSS](/fr/Apprendre/CSS/Utiliser_CSS_dans_une_page_web).
