---
title: Comprendre les URL et leur structure
slug: Learn/Common_questions/What_is_a_URL
tags:
  - Beginner
  - Infrastructure
  - Learn
  - NeedsActiveLearning
  - URL
translation_of: Learn/Common_questions/What_is_a_URL
original_slug: Apprendre/Comprendre_les_URL
---
Cet article aborde les _Uniform Resource Locators_ (URL) en expliquant leur rôle et leur structure.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Vous devez au préalable savoir
        <a href="/fr/Apprendre/Fonctionnement_Internet"
          >comment fonctionne Internet</a
        >,
        <a href="/fr/Apprendre/Qu_est-ce_qu_un_serveur_web"
          >ce qu'est une serveur web</a
        >
        et
        <a href="/fr/Apprendre/Le_fonctionnement_des_liens_sur_le_Web"
          >les concepts sous-jacents aux liens sur le Web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>Savoir ce qu'est une URL et comprendre son rôle sur le Web.</td>
    </tr>
  </tbody>
</table>

Avec les concepts d'{{Glossary("hypertexte")}} et de {{Glossary("HTTP")}}, les **_URL_** sont une autre pierre angulaire du Web.  Celles-ci sont utilisées par les navigateurs pour accéder aux différentes ressources publiées sur le Web.

**URL** signifie _Uniform Resource Locator_ (ou, en français, « localisateur uniforme de ressource »). Une URL est simplement l'adresse d'une ressource donnée, unique sur le Web. En théorie, chaque URL valide pointe vers une ressource unique. Ces ressources peuvent être des pages HTML, des documents CSS, des images, etc. En pratique, il y a quelques exceptions : les URL peuvent pointer vers une ressource qui n'existe plus ou qui a été déplacée. La ressource représentée par l'URL et l'URL elle-même sont gérées par le serveur web. C'est donc au gestionnaire de ce serveur que de gérer soigneusement la ressource et l'URL associée.

## Pédagogie active

_Il n'y a pour le moment pas d'élément de pédagogie active. [N'hésitez pas à contribuer](/fr/docs/MDN/Débuter_sur_MDN)._

## Aller plus loin

### Les bases : l'anatomie d'une URL

Voici quelques exemples d'URL :

    https://developer.mozilla.org
    https://developer.mozilla.org/fr/docs/Apprendre/
    https://developer.mozilla.org/fr/search?q=URL

Vous pouvez saisir chacune de ces URL dans la barre d'adresse de votre navigateur afin que celui chaque la ressource associée (ici des pages HTML).

Une URL se compose de différents fragments dont certains sont obligatoires et d'autres optionnels. Pour commencer, voyons les parties les plus importantes d'une URL :

    http://www.exemple.com:80/chemin/vers/monfichier.html?clé1=valeur1&clé2=valeur2#QuelquePartDansLeDocument

- ![Protocol](protocole_1.png)
  - : `http://` correspond au protocole. Ce fragment indique au navigateur le protocole qui doit être utilisé pour récupérer le contenu. Généralement, ce protocole sera HTTP ou sa version sécurisée : HTTPS. Le « Web » fonctionne autour de ces deux protocoles mais le navigateur peut parfois gérer d'autres protocoles comme `mailto:` (qui permet d'ouvrir un client de messagerie électronique) ou `ftp:` qui permet de transférer des fichiers. Ne soyez pas surpris donc si vous rencontrez ces autres protocoles.
- ![Domaine Name](nom_de_domaine2.png)
  - : `www.exemple.com` correspond au nom de domaine. Il indique le serveur web auquel le navigateur s'adresse pour échanger le contenu. À la place du nom de domaine, on peut utiliser une {{Glossary("adresse IP")}}, ce qui sera moins pratique (et qui est donc moins utilisé sur le Web).
- ![Port](port_3.png)
  - : `:80` correspond au port utilisé sur le serveur web. Il indique la « porte » technique à utiliser pour accéder aux ressources du serveur. Généralement, ce fragment est absent car le navigateur utilise les ports standards associés aux protocoles (80 pour HTTP, 443 pour HTTPS). Si le port utilisé par le serveur n'est pas celui par défaut, il faudra l'indiquer.
- ![Path to the file](chemin_4.png)
  - : `/chemin/vers/monfichier.html` est le chemin, sur le serveur web, vers la ressource. Aux débuts du Web, ce chemin correspondait souvent à un chemin « physique » existant sur le serveur. De nos jours, ce chemin n'est qu'une abstraction qui est gérée par le serveur web, il ne correspond plus à une réalité « physique ».
- ![Parameters](parametres_5.png)
  - : `?clé1=valeur1&clé2=valeur2` sont des paramètres supplémentaires fournis au serveur web. Ces paramètres sont construits sous la forme d'une liste de paires de clé/valeur dont chaque élément est séparé par une esperluette (&). Le serveur web pourra utiliser ces paramètres pour effectuer des actions supplémentaires avant d'envoyer la ressource. Chaque serveur web possède ses propres règles quant aux paramètres. Afin de les connaître, le mieux est de demander au propriétaire du serveur.
- ![Anchor](ancre_6.png)
  - : `#QuelquePartDansLeDocument` correspond à une ancre, celle-ci désigne un endroit donné de la ressource. Une ancre représente, en quelque sorte, un marque-page à l'intérieur de la ressource. Ajouter une ancre à une URL permet au navigateur d'afficher la ressource à l'endroit de ce marque page. Pour un document HTML, par exemple, le navigateur défilera la page jusqu'au niveau de l'ancre. Pour un document audio ou vidéo, le navigateur ira se placer à l'instant représenté par l'ancre. On notera également que la partie de l'URL située après le # n'est jamais envoyée au serveur avec la requête.

> **Note :** Il existe [d'autres fragments et d'autres règles](http://en.wikipedia.org/wiki/Uniform_Resource_Locator) pour les URL mais ceux-ci ne sont pas pertinent pour le développement web et ne sont pas nécessaires pour pouvoir construire des URL tout à fait fonctionnelles.

On peut comparer les URL avec les adresses postales : le _protocole_ représente le service postal qu'on souhaite utiliser, le _nom de domaine_ correspond à la ville et le _port_ au code postal, le _chemin_ indique le bâtiment où la lettre doit être acheminée et les _paramètres_ pourraient indique le numéro de l'appartement, enfin l'_ancre_ désigne la personne à laquelle la lettre est adressée.

### Comment utiliser les URL

N'importe quelle URL peut être saisie dans la barre d'adresse du navigateur afin d'accéder à la ressource correspondante mais ce n'est pas tout !

Le langage {{Glossary("HTML")}} — [que nous verrons par la suite](/fr/docs/Learn/HTML/HTML_tags) — permet de tirer parti des URL :

- en créant des liens vers d'autres documents grâce à l'élément {{HTMLElement("a")}} ;
- en lient des document avec les ressources associées grâce aux éléments {{HTMLElement("link")}} et {{HTMLElement("script")}} ;
- en affichant des médias comme des images (avec l'élément {{HTMLElement("img")}}), des vidéos (avec l'élément {{HTMLElement("video")}}), des sons ou de la musique (avec l'élément {{HTMLElement("audio")}}), etc. ;
- en affichant d'autres documents HTML grâce à l'élément {{HTMLElement("iframe")}}.

D'autres technologies web comme {{Glossary("CSS")}} ou {{Glossary("JavaScript")}}, utilisent les URL de façon intensive.

### Les URL absolues et les URL relatives

L'URL que nous avons disséquée avant est une URL _absolue_ et il existe également des URL _relatives_. Expliquons ici cette différence.

Les fragments nécessaires pour construire une URL fonctionnelle dépendent du contexte dans lequel l'URL est utilisée. Dans la barre d'adresse du navigateur, il n'y a aucun contexte et il faut donc fournir une URL complète (ou absolue) comme celles que nous avons vus avant. Il n'est pas nécessaire d'inclure le protocole (le navigateur utilisera HTTP par défaut) ou le port (qui est nécessaire uniquement si le serveur web utilise des ports non conventionnels), en revanche, les autres fragments seront nécessaires.

Lorsqu'une URL est utilisée dans un document (par exemple dans une page HTML), les choses sont différentes car le navigateur connaît déjà l'URL du document courant et pourra l'utiliser pour en déduire certaines informations afin de compléter les URL contenues dans le document. Une URL absolue se distingue d'une URL relative au niveau du chemin. Si le chemin de l'URL commence par le symbole `"/`", le navigateur ira cherche la ressource à la racine du serveur sans utiliser le contexte du document courant.

Prenons quelques exemples concrets pour illustrer le concept.

#### Exemples d'URL absolues

- URL complète

  - : Exemple :

        https://developer.mozilla.org/fr/docs/Apprendre

- Protocole implicite

  - : Exemple :

        //developer.mozilla.org/fr/docs/Apprendre

    Dans ce cas, le navigateur saura que l'URL utilise le même protocole que celui utilisé pour charger le document qui contient cette URL.

- Nom de domaine implicite

  - : Exemple :

        /fr/docs/Apprendre

    Voici le cas le plus fréquent d'une URL absolue dans un document HTML. Le navigateur utilisera alors le même protocole et le même nom de domaine que ceux utilisés pour charger le document qui contient l'URL.

    > **Note :** _Il n'est pas possible d'omettre le nom de domaine sans omettre le protocole_.

#### Exemples d'URL relatives

Pour mieux comprendre les exemples qui suivent, nous nous placerons dans le contexte où les URL suivantes sont appelées depuis un document situé à l'URL suivante  `https://developer.mozilla.org/fr/docs/Apprendre`

- Sous-ressources

  - : Exemple :

        Compétences/Infrastructure/Comprendre_les_URL

    L'URL ne commence pas pas `/`, le navigateur essaiera de trouver le document visé dans un sous-répertoire de la ressource actuelle. Dans cet exemple, l'URL absolue correspondante du document auquel on souhaite accéder est : `https://developer.mozilla.org/fr/docs/Apprendre/Compétences/Infrastructure/Comprendre_les_URL`

- Remonter dans l'arborescence des dossiers

  - : Exemple :

        ../CSS/display

    Dans ce cas, on utilise la convention, héritée du monde UNIX :  `../` indique au navigateur de remonter d'un répertoire dans l'arborescence. L'URL absolue correspodante à la ressource visée est ici `https://developer.mozilla.org/fr/docs/Apprendre/../CSS/display`, qui peut être simplifiée en : `https://developer.mozilla.org/fr/docs/CSS/display`

### Les URL sémantiques

Bien qu'utiles sur le plan technique, les URL représentent également un point d'entrée vers un site web, compréhensible par un lecteur humain. Une URL peut être mémorisée et n'importe qui peut en saisir une dans la barre d'adresse d'un navigateur. Une bonne pratique, préconisée par les concepteurs du web, est de construire des [_URL sémantiques_](http://en.wikipedia.org/wiki/Semantic_URL).  Les URL sémantiques utilisent des termes qui peuvent être compris par n'importe quel lecteur, quel que soit son niveau de connaissance.

Les ordinateurs n'ont pas strictement besoin d'utiliser des URL sémantiques et vous avez déjà sûrement rencontré des URL pleines de charabia et de caractères aléatoires, URL qui fonctionnaient parfaitement. Cela dit, il y a plusieurs avantages à créer des URL compréhensibles par les humains :

- Elles sont plus simples à manipuler
- Elles clarifient la situation pour le visiteur et indiquent où il est, ce qu'il fait et avec qui il intéragit sur le Web
- Elles peuvent être utilisées par certains moteurs de recherche pour améliorer le classement des pages associées à un terme donné.

## Prochaines étapes

- [Comprendre les noms de domaine](/fr/Apprendre/Comprendre_noms_de_domaine)
