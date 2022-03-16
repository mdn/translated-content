---
title: La sécurité d'un site Web
slug: Learn/Server-side/First_steps/Website_security
tags:
  - Débutant
  - Guide
  - Sécurité
  - Sécurité Web
translation_of: Learn/Server-side/First_steps/Website_security
original_slug: Learn/Server-side/Premiers_pas/Website_security
---
{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/Premiers_pas")}}

La sécurité d'un site web exige de la vigilance dans tous les aspects de sa conception et de son utilisation. Cet article d'introduction ne fera pas de vous un gourou de la sécurité des sites web, mais il vous aidera à comprendre d'où viennent les menaces et ce que vous pouvez faire pour renforcer votre application web contre les attaques les plus courantes.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requis :</th>
      <td>Connaissances de base en informatique.</td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Comprendre les menaces les plus courantes à la sécurité des applications
        web et ce que vous pouvez faire pour réduire le risque de piratage de
        votre site.
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que la sécurité d'un site web?

Internet est un endroit dangereux ! Fréquemment, nous entendons parler de sites web devenus indisponibles en raison d'attaques par déni de service, ou affichant des informations modifiées (et souvent préjudiciables) sur leurs pages d'accueil. Dans d'autres cas, très médiatisés, des millions de mots de passe, d'adresses électroniques et de détails sur des cartes de crédit sont divulgués au public, exposant les utilisateurs du site web à la fois à l'embarras personnel et au risque de pertes financières.

L'objectif de la sécurité des sites web est de prévenir ces types d'attaques. Plus formellement, la sécurité des sites web est l'acte de protéger les sites web contre l'accès, l'utilisation, la modification, la destruction ou la perturbation non autorisées.

La sécurité efficace d'un site web nécessite un effort de conception sur l'ensemble du site : dans votre application web, dans la configuration du serveur web, dans vos politiques de création et de renouvellement des mots de passe et dans le code côté-client. Bien que tout cela semble très inquiétant, la bonne nouvelle est que si vous utilisez un framework web côté serveur, il incluera certainement par défaut des mécanismes de défense solides et bien pensés contre un certain nombre des attaques les plus courantes. D'autres attaques peuvent être atténuées grâce à la configuration de votre serveur web, par exemple en activant HTTPS. Enfin, les outils d'analyse de vulnérabilité accessibles au public peuvent vous aider à découvrir d'éventuelles erreurs dans votre conception.

Le reste de cet article détaille les menaces les plus courantes qui pèsent sur les sites web et quelques étapes simples pour protèger votre site.

> **Note :** ceci est un article d'introduction, conçu pour vous aider à réflechir à la sécurité de votre site web. Il n'est en rien exhaustif.

## Menaces visant la sécurité des sites web

Cette section n'énumère que quelques-unes des menaces les plus courantes visant les sites web et la façon dont elles sont tenues à distance. À mesure que vous lisez, notez comment les menaces apparaissent lorsque l'application web fait confiance ou n'est pas assez méfiante vis-à-vis des données provenant du navigateur !

### Cross-Site Scripting (XSS)

XSS est un terme utilisé pour décrire une classe d'attaque qui permet à l'attaquant d'injecter des scripts, exécutés côté-client, _au travers_ du site web pour viser le navigateur web des autres utilisateurs. Comme le code injecté provient du site web le navigateur web le considère comme sûr, il peut de ce fait faire des choses comme transmettre le cookie d'authentification de l'utilisateur à l'attaquant. Une fois que l'attaquant obtient ce cookie il peut se connecter sur le site comme si il était l'utilisateur attaqué et peut faire tout ce que l'utilisateur pourrait faire. En fonction du site sur lequel l'attaque se produit, cela peut inclure l'accès aux détails de carte bancaire, les informations des contacts, la modification du mot de passe, etc.

> **Note :** les vulnérabilités XSS ont historiquement été les plus courantes.

Il y a deux manières principales pour demander au site de retourner un script injecté vers un navigateur web — elles sont désignées en tant que vulnérabilités XSS _réfléchie_ et _persistante_.

- Une vulnérabilité XSS réfléchie se produit quand le contenu de l'utilisateur transmis au serveur est immédiatement retourné, sans avoir été modifié, pour être affiché dans le navigateur — tout les scripts présents dans le contenu d'origine seront exécutés quand la nouvelle page sera chargée!
  On prendra par exemple une fonction de recherche dans un site où les termes recherchés sont encodés en tant que paramètres dans l'URL, et que ces termes sont affichés en permanence avec les résultats. Un attaquant peut construire un lien de recherche contenant un script malicieux en tant que paramètre (ex: `http://mysite.com?q=beer<script%20src="http://sitedangereux.com/malicieux.js"></script>`) et le transmettre par e-mail à un autre utilisateur. Si l'utilisateur ciblé clique sur ce "lien intéressant", le script sera exécuté quand les résultats de la recherche seront affichés. Comme vu auparavant, cela donne à l'attaquant toute les informations dont il a besoin pour se connecter sur le site avec le compte de la victime — potentiellement faire des achats en tant que cet utilisateur ou accèder à la liste de contacts..
- Une vulnérabilité XSS _persistante_ sera celle où le script malicieux est stocké sur le site web puis affiché, sans modification, un peu plus tard par les autres utilisateurs et exécuté à leur insu.
  Par exemple, un écran de discussion qui accepte les commentaires contenant du code HTML pur peuvent stocker le script malicieux de l'attaquant. Quand les commentaires sont affichés le script est exécuté et peut ensuite transmettre à l'attaquant les informations nécessaires pour accèder au compte de l'utilisateur. Cette méthode d'attaque est extrêmement courante et efficace, parce que l'attaquant n'a pas besoin d'avoir une relation directe avec les victimes.

  Alors que l'envoi de données avec `POST` ou `GET` est la source la plus commune de vulnérabilité XSS, toute donnée en provenance du navigateur web est potentiellement vulnérable (cela inclut l'affichage des données des cookies par le navigateur, ou les fichiers de l'utilisateur qui sont chargés et affichés).

La meilleur défense contre les vulnérabilités XSS est de supprimer ou désactiver toutes les balises qui peuvent potentiellement contenir des instructions pour exécuter du code. Pour HTML cela inclut les tags comme `<script>`, `<object>`, `<embed>`, et `<link>`.

Il est nécessaire de traiter les données saisies par l'utilisateur pour être sûr qu'il ne puisse ni exécuter de scripts ni pertuber le fonctionnement normal du site (ce procédé est appelé *input sanitization* en anglais). De nombreux frameworks proposent par défaut cette vérification sur les entrées des formulaires.

### Injection SQL

L'injection SQL est une vulnérabilité qui permet à un attaquant d'exécuter du code SQL frauduleux sur une base de données, permettant l'accès, la modification ou la suppression des données quelque soit le droit de l'utilisateur. Une attaque par injection réussie peut permettre l'usurpation d'un compte, la création d'un compte avec les droits administrateur, l'accès à toute les données du serveur, ou la modification / destruction des données pour le rendre inutilisable.

Cette vulnérabilité est présente quand la saisie de l'utilisateur est transmise à une requête SQL sous-jacente qui peut modifier le sens de la requête. Par exemple, dans le code ci-dessous qui devrait lister l'ensemble des utilisateurs avec un nom particulier (`userName`) et qui provient d'un formulaire HTML:

```sql
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

Si l'utilisateur entre un nom correct cela marchera comme voulu. Cependant un utilisateur malveillant peut changer complètement le sens de cette requête SQL pour obtenir la requête qui suit, simplement en ajoutant le texte, **en gras** ci dessous, en tant que nom, cette requête, modifiée, va créer une requête SQL valide qui va supprimer la table `users` et sélectionner toute les données de la table `userinfo` (révèlant les informations de chaque utilisateur). Tout cela est rendu possible à cause du début du texte injecté (`'a';`) qui va complèter la requête d'origine (`'` est le symbole pour délimiter une chaine de texte en SQL).

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Le moyen pour éviter ce type d'attaque est de s'assurer que toute saisie de l'utilisateur transmise à une requête SQL ne peut pas changer la nature de cette requête. Un moyen de faire cela est d'[échapper](https://fr.wikipedia.org/wiki/Caract%C3%A8re_d%27%C3%A9chappement) tous les caractères de la saisie utilisateur quand ils ont un sens particulier en SQL.

> **Note :** la requête SQL considère le symbole ' comme le début et la fin d'une chaine de texte. En ajoutant le caractère \ nous allons "échapper" ce symbole, et dire à SQL de le traiter comme une simple partie de la chaîne de caractères.

Dans la requête ci-dessous nous avons échappé le caractère '. Le SQL va donc interpréter la chaine complète (en gras) comme un nom (un nom étrange en effet, mais pas nuisible).

```sql
SELECT * FROM users WHERE name = 'a\';DROP TABLE users; SELECT * FROM userinfo WHERE \'t\' = \'t';
```

Les frameworks web se chargent bien souvent d'échapper ces caractères à votre place. Django, par exemple, s'assure que toute saisie d'un utilisateur transmise au modèle est bien échappée.

> **Note :** Cette section s'inspire beaucoup des informations de [Wikipedia ici](https://en.wikipedia.org/wiki/SQL_injection).

### Falsification de requête inter-sites (CSRF)

Les attaques CSRF permettent à un utilisateur malveillant d'éxécuter des actions à l'aide des identifiants d'un autre utilisateur sans que cet utilisateur ne soit informé ou consentant.

Ce type d'attaque s'explique mieux avec un exemple. John est l'utilisateur malveillant qui sait qu'un site particulier permet à des utilisateurs authentifiés d'envoyer de l'argent vers un compte particulier en utilisant des requêtes HTTP POST qui incluent le numéro de compte et le montant. John construit un formulaire qui inclut son numéro de compte et un montant dans des champs cachés (invisibles) et le transmet à un autre utilisateur du site (avec le bouton de validation déguisé en un lien vers un site "pour devenir riche".

Si un utilisateur clique sur le bouton de validation, une requête HTTP POST, contenant les informations de transaction, va être transmise au serveur ainsi que le cookie que le navigateur web associe au site (l'ajout à la requête du cookie associé au site est le comportement normal du navigateur). Le serveur va vérifier le cookie d'authentification, et l'utiliser pour déterminer si l'utilisateur est ou n'est pas connecté et donc permet ou non la transaction.

Au final tout utilisateur qui va cliquer sur le bouton de validation, alors qu'il sera connecté sur le site d'échange d'argent, va autoriser la transaction. John va devenir riche !

> **Note :** l'astuce ici est que John n'a pas besoin d'accéder aux cookies de l'utilisateur (ou à ses identifiants), le navigateur web stocke cette information et l'inclut automatiquement dans toute les requêtes destinées au serveur associé.

Un moyen de prévenir ce type d'attaque est que le serveur demande que chaque requête POST possède un secret généré par le serveur et spécifique à l'utilisateur (le secret serait transmis par le serveur lors de l'envoi du formulaire de transaction). Cette approche empêche John de créer son propre formulaire car il n'est pas capable de connaitre le secret que le serveur founit à l'utilisateur. Même si il venait à trouver ce secret et créer un formulaire pour un utilisateur particulier, il ne pourrait pas utiliser ce formulaire pour attaquer d'autres utilisateurs

Les framework web incluent souvent des mécanismes afin de prévenir les attaques CSRF.

### Autre menaces

Les autres attaques et vulnérabilités courantes incluent:

- [Clickjacking](https://www.owasp.org/index.php/Clickjacking). Dans cette attaque un utilisateur malveillant détourne les clics destinés à un site visible et les envoie dans une page cachée en dessous. Cette technique peut être utilisée, par exemple, pour afficher le site légitime d'une banque mais capturer les identifiants d'authentification dans une \<iframe> invisible controlée par l'attaquant. Sinon cela peut être utilisé pour obtenir de l'utilisateur qu'il clique sur le bouton visible d'un site, mais en le faisant il va en fait cliquer involontairement sur un bouton différent. Comme défense, votre site peut se prévenir d'être inclut dans une iframe d'un autre site en configurant les bonnes en-têtes HTTP.
- [Déni de Service](/fr/docs/Glossaire/Déni_de_service_distribué) (DoS). Le déni de service est souvent pratiqué en surchargeant de fausses requêtes un site cible avec afin que l'accès au site soit perturbé pour les usagers légitimes. Les requêtes peuvent simplement être nombreuses, ou elles peuvent individuellement nécessiter une grande quantité de ressource (ex: chargement de fichiers lourds, etc). La défense contre cette attaque se base souvent sur l'identification et le blocage du mauvais trafic tout en autorisant l'arrivée des messages légitimes. Ces défenses sont généralement intégrées ou en amont du serveur web (elle ne font pas partie de l'application web).
- [Découverte via la navigation dans les répertoires et fichiers](https://en.wikipedia.org/wiki/Directory_traversal_attack). Dans cette famille d'attaque un utilisateur malveillant va tenter d'accèder aux fichiers du serveur web auxquels il ne devrait pas avoir accès. Cette vulnérabilité se produit quand l'utilisateur peut transmettre le nom d'un fichier qui comprend les caractères de navigation dans le système de fichier (par exemple: `../../`). La solution est de désinfecter la saisie avant de l'utiliser.
- [Inclusion de fichiers](https://fr.wikipedia.org/wiki/Remote_File_Inclusion). Dans cette attaque un utilisateur est capable de spécifier un fichier "involontaire" pour être affiché ou exécuté dans les données transmises au serveur. Une fois chargé ce fichier peut être exécuté sur le serveur web ou du côté client (menant à une attaque XSS). La solution est de vérifier les saisies avant de les utiliser.
- [Injection de commandes](https://www.owasp.org/index.php/Command_Injection). Les attaques par injection de commande permettent à un utilisateur malveillant d'exécuter des commandes systèmes frauduleuses sur le système hôte. La solution est de vérifier chaque saisie des utilisateurs avant de les utiliser dans les appels systèmes.

Il y en a beaucoup d'autres. Pour une liste plus exhaustive vous pouvez consulter la catégorie [failles de sécurité Web](https://en.wikipedia.org/wiki/Category:Web_security_exploits) (Wikipedia) et [la catégorie Attaques](https://www.owasp.org/index.php/Category:Attack) (du projet OWASP).

## Quelques messages clés

La majorité des attaques citées précédement réusissent lorsque l'application web fait confiance aux données provenant du navigateur web. Quoique vous fassiez d'autre pour améliorer la sécurité de votre site web, vous devez désinfecter toutes les saisies des utilisateurs avant de les afficher, de les utiliser dans les requêtes SQL ou de les transmettre dans les appels du système ou du système de fichier.

> **Attention :** la leçon la plus importante à retenir concernant la sécurité d'un site web est de ne **jamais faire confiance aux données du navigateur web**. Cela comprend les requêtes `GET` avec la présence des paramètres dans l'URL, les données envoyées avec les `POST`, les en-têtes HTTP, les cookies, les fichiers chargés par l'utilisateur, etc. Il faut toujours vérifier et assainir les données. Il faut toujours s'attendre au pire.

Quelques autres points que vous pouvez mettre en place :

- Utilisez une politique de gestion des mots de passe efficace. Encouragez les mots de passe solides avec leur renouvellement fréquent. Prenez en compte une authentification à deux facteurs sur votre site (l'utilisateur, en plus du mot de passe, devra fournir un autre code d'authentification généralement fourni par un matériel physique, que seul l'utilisateur possède, comme un code envoyé sur le téléphone par SMS).
- Configurez vos serveurs web pour utiliser [HTTPS](/fr/docs/Glossary/https) et [HTTP Strict Transport Security](/fr/docs/Web/Security/HTTP_strict_transport_security) (HSTS). HTTPS chiffre les données transmises entre le client et le serveur. Cela garantit que les données d'authentification, les cookies, les données transistant avec `POST` et les informations d'en-têtes deviennent moins disponibles pour l'attaquant.
- Tenez vous informé des dernières menaces ([la liste actuelle d'OWASP est ici](/fr/docs/)) et préoccupez vous toujours des vulnerabilités les plus courantes en premier.
- Utilisez [des outils de recherche de vulnérabilités](https://www.owasp.org/index.php/Category:Vulnerability_Scanning_Tools) pour faire automatiquement des recherches de bug sur votre site (votre site pourra également proposer un programme de _buf bounty_ pour déceler des bugs, [comme le fait Mozilla ici](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/)).
- Ne stockez et n'affichez que les données nécessaires. Par exemple, si votre utilisateur doit stocker des données sensibles comme des informations bancaires, affichez seulement ce qui sera suffisant pour être identifié par l'utilisateur, mais pas suffisament pour être copié par un attaquant et être utilisé sur un autre site. La méthode la plus courante en ce moment est de n'afficher que les quatre derniers chiffres du numéro de carte bancaire.

Les frameworks web peuvent aider à atténuer beaucoup des vulnérabilités les plus courantes.

## Résumé

Cet article a présenté le concept de sécurité web et quelques-unes des menaces courantes vis-à-vis desquelles il faut se protéger. Le plus important à comprendre est qu'une application web ne peut pas faire confiance aux données provenant du navigateur ! Les données des utilisateurs doivent toutes être nettoyées avant d'être affichées ou utilisées dans les requêtes SQL ou dans les appels systèmes.

C'est la fin de [ce module](/fr/docs/Learn/Server-side/First_steps), couvrant vos premiers pas dans le développement d'un site web côté serveur. Nous espérons que vous avez apprécié apprendre les concepts fondamentaux. Vous êtes désormais apte à choisir un framework web et à commencer à programmer.

{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
