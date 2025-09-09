---
title: Qu'est-ce qu'une URL ?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
original_slug: Learn/Common_questions/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 803a7a460338dab4900fd44cf7ab569e3bf5799a
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Cet article aborde les <i lang="en">Uniform Resource Locators</i> (URL) (qu'on peut traduire en français par «&nbsp;localisateurs uniformes de ressources&nbsp;»), et explique leur rôle et leur structure.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Comprendre <a href="/fr/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work">le fonctionnement général d'Internet</a>, <a href="/fr/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server">ce qu'est un serveur web</a>, et <a href="/fr/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks">les concepts derrière les liens sur le Web</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>Apprendre ce qu'est une URL et comprendre son fonctionnement sur le Web.</td>
    </tr>
  </tbody>
</table>

## Résumé

Une **URL** (<i lang="en">Uniform Resource Locator</i>) correspond à l'adresse d'une ressource unique sur Internet. Il s'agit d'un des mécanismes principaux utilisés par [les navigateurs](/fr/docs/Glossary/Browser) pour récupérer des informations publiées, telles que des pages HTML, des documents CSS, des images, etc.

En théorie, chaque URL valide pointe vers une ressource unique. En pratique, il existe certaines exceptions, notamment quand une URL pointe vers une ressource qui n'existe plus ou qui a été déplacée. Comme une ressource représentée par une URL et l'URL même sont gérées par le serveur web, c'est au gestionnaire du serveur web de gérer correctement la ressource et l'URL correspondante.

## Fondamentaux&nbsp;: anatomie d'une URL

Voici quelques exemples d'URL&nbsp;:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/fr/docs/Learn/
https://developer.mozilla.org/fr/search?q=URL
```

Chacune de ces URL peut être saisie dans la barre d'adresse d'un navigateur pour lui indiquer de charger la ressource associée. Dans ces trois exemples, il s'agit d'une page web.

Une URL se compose de différentes parties, certaines sont obligatoires tandis que d'autres sont optionnelles. Les parties les plus importantes sont mises en évidence dans l'illustration suivante et les sections ci-après décrivent en détails ces composantes&nbsp;:

![Une URL complète](mdn-url-all.png)

> [!NOTE]
> On peut voir une analogie entre une URL et une adresse postale classique&nbsp;: _le schéma_ s'apparente le type de service postal à utiliser, _le nom de domaine_ s'apparente la ville, _le port_ s'apparente le code postal, et _le chemin_ le bâtiment où on souhaite envoyer le courrier. _Les paramètres_ représentent des informations complémentaires, comme le numéro d'appartement dans le bâtiment. Enfin, _l'ancre_ s'apparente à la personne à laquelle le courrier s'adresse.

> [!NOTE]
> Il existe [d'autres règles et composantes](https://fr.wikipedia.org/wiki/Uniform_Resource_Locator) pour les URL, mais qui ne concernent pas le Web. Ne vous en souciez pas pour le moment, vous n'en aurez pas besoin pour savoir comment construire et utiliser des URL fonctionnelles.

## Schéma

![Le schéma](mdn-url-protocol@x2_update.png)

_Le schéma_ est la première partie d'une URL et indique le protocole que le navigateur doit utiliser afin de demander la ressource (un [protocole](/fr/docs/Glossary/Protocol) est un ensemble de méthodes pour échanger ou transférer des données au sein d'un réseau d'ordinateurs. Pour les sites web, on utilise généralement le protocole HTTPS ou HTTP (une version non sécurisée). Pour accéder à une page web, il faut utiliser l'un de ces protocoles. Toutefois, les navigateurs gèrent également d'autres schémas comme `mailto:` (pour ouvrir un client de courrier électronique), ne soyez donc pas surpris de croiser d'autres protocoles.

## Autorité

![L'autorité](mdn-url-authority.png)

Ensuite, on trouve _l'autorité_, séparée du schéma par les caractères `://`. Si elle est présente, l'autorité inclut _le domaine_ (par exemple `www.example.com`) et _le port_ (`80`), séparés par un double-point&nbsp;:

- Le domaine indique le serveur web auquel s'adresse la requête. Il s'agit généralement [d'un nom de domaine](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), mais on peut aussi trouver [une adresse IP](/fr/docs/Glossary/IP_Address) (ce qui est plus rare, car moins pratique).
- Le port indique la «&nbsp;porte&nbsp;» technique utilisée pour accéder aux ressources sur le serveur web. Cette information est généralement omise si le serveur web utilise les ports standard du protocole HTTP (80 pour HTTP, et 443 pour HTTPS) pour permettre l'accès aux ressources. Si le port utilisé n'est pas standard, il doit nécessairement être précisé.

> [!NOTE]
> Le séparateur entre le schéma et l'autorité est `://`. Le double-point sépare le schéma de la partie suivante de l'URL, tandis que `//` indique que ce qui suit est l'autorité.
>
> Voici un exemple d'URL qui n'utilise pas d'autorité&nbsp;: `mailto:tototruc@example.com` pour le courrier électronique. Elle contient un schéma, mais pas d'autorité. Aussi, les deux-points ne sont pas suivis de deux barres obliques et servent uniquement de délimiteur entre le schéma et l'adresse électronique.

## Le chemin vers la ressource

![Le chemin vers le fichier](mdn-url-path@x2.png)

`/chemin/vers/le/fichier.html` est le chemin de la ressource vers le serveur web. Aux débuts du Web, un tel chemin correspondait généralement à l'emplacement physique du fichier sur le serveur web. De nos jours, il s'agit plutôt d'une abstraction gérée par les serveurs web et qui ne correspond pas nécessairement à un emplacement physique sur le système de fichiers du serveur.

## Les paramètres

![Les paramètres](mdn-url-parameters@x2.png)

`?clef1=valeur1&clef2=valeur2` sont des paramètres supplémentaires fournis au serveur web. Ces paramètres prennent la forme d'une liste de paires de clef/valeur, chacune séparée par une esperluette (`&`). Le serveur web peut utiliser ces paramètres pour effectuer des traitements supplémentaires avant de renvoyer la ressource. Chaque serveur web applique ses propres règles pour la gestion des paramètres, et la seule façon fiable de déterminer si un serveur web donné gère des paramètres consiste à demander au propriétaire du serveur.

## L'ancre

![L'ancre](mdn-url-anchor@x2.png)

`#QuelquePartDansLeDocument` est une ancre vers un emplacement au sein de la ressource. Une ancre représente en quelque sorte un marque-page au sein de la ressource, et qui indique au navigateur d'afficher le contenu de la ressource situé au niveau de ce marque-page. Pour un document HTML, par exemple, le navigateur fera défiler le document jusqu'à l'ancre. Pour un document vidéo ou audio, le navigateur tentera d'aller au moment précisé par l'ancre. Il faut noter que la partie située après le croisillon **#**, également appelée **identificateur de fragment**, n'est jamais envoyée au serveur avec la requête.

## Comment utiliser les URL

N'importe quelle URL peut être saisie dans la barre d'adresse du navigateur pour récupérer la ressource correspondante, mais ce n'est que la partie visible de l'iceberg&nbsp;!

Le langage [HTML](/fr/docs/Glossary/HTML) [que nous aborderons plus tard](/fr/docs/Learn_web_development/Core/Structuring_content) utilise énormément les URL&nbsp;:

- Pour créer des liens vers d'autres documents grâce aux éléments [`<a>`](/fr/docs/Web/HTML/Reference/Elements/a)&nbsp;;
- Pour rattacher un document aux ressources qui lui sont liées, par exemple grâce aux éléments [`<link>`](/fr/docs/Web/HTML/Reference/Elements/link) ou [`<script>`](/fr/docs/Web/HTML/Reference/Elements/script)&nbsp;;
- Pour afficher des médias comme des images (avec l'élément [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img)), des vidéos (grâce à l'élément [`<video>`](/fr/docs/Web/HTML/Reference/Elements/video)), des sons et de la musique (avec l'élément [`<audio>`](/fr/docs/Web/HTML/Reference/Elements/audio)), etc.&nbsp;;
- Pour afficher d'autres documents HTML à l'aide de l'élément [`<iframe>`](/fr/docs/Web/HTML/Reference/Elements/iframe).

> [!NOTE]
> Lorsqu'on fournit une URL pour charger des ressources au sein d'une page (par exemple en utilisant les éléments `<script>`, `<audio>`, `<img>`, `<video>` ou autre), on utilise généralement uniquement des URL HTTP et HTTPS, sauf exception (notamment pour les [URL de données](/fr/docs/Web/URI/Reference/Schemes/data) qui utilisent le protocole `data:`). Ainsi, le protocole FTP, par exemple, n'est pas sécurisé et n'est plus pris en charge par les navigateurs récents.

D'autres technologies comme [CSS](/fr/docs/Glossary/CSS) ou [JavaScript](/fr/docs/Glossary/JavaScript) utilisent également fréquemment les URL et constituent les briques de base du Web.

## URL absolues et URL relatives

L'exemple que nous avons étudié plus haut est une _URL absolue_. Il existe également des _URL relatives_. [Le standard qui spécifie les URL](https://url.spec.whatwg.org/#absolute-url-string) définit les deux types en utilisant respectivement les termes [_chaîne de caractères d'URL absolue_](https://url.spec.whatwg.org/#absolute-url-string) et [_chaîne de caractères d'URL relative_](https://url.spec.whatwg.org/#relative-url-string), pour les distinguer des [objets URL](https://url.spec.whatwg.org/#url) (qui correspondent à la représentation en mémoire des URL).

Voyons la distinction entre _absolue_ et _relative_ dans le contexte des URL.

Les composantes obligatoires d'une URL dépendent grandement du contexte dans lequel l'URL est utilisée. Dans la barre d'adresse du navigateur, une URL n'a pas de contexte particulier et il faut fournir une URL complète, une URL _absolue_, comme celle que nous avons vu précédemment. Il n'est pas strictement nécessaire d'inclure le protocole (le navigateur utilisera HTTP par défaut) ou le port (uniquement nécessaire si le serveur web cible utilise un port inhabituel), mais toutes les autres parties de l'URL sont nécessaires.

Lorsqu'on utilise une URL au sein d'un document, comme dans une page HTML, la situation est différente. En effet, le navigateur dispose déjà de l'URL du document et peut utiliser cette information pour déduire les parties manquantes des URL utilisées dans le document. On peut distinguer une _URL absolue_ d'une _URL relative_ en examinant le _chemin_. Si le chemin de l'URL commence par une barre oblique (`/`), le navigateur récupèrera la ressource à la racine du serveur, sans faire référence au contexte fourni par le document courant.

Prenons quelques exemples pour illustrer cela. Dans ces exemples, nous considèrerons que les URL sont écrites dans un document lui-même situé à l'URL&nbsp;: `https://developer.mozilla.org/fr/docs/Learn`.

`https://developer.mozilla.org/fr/docs/Learn` est une URL absolue. Elle contient toutes les composantes nécessaires à la localisation de la ressource.

Toutes les URL suivantes sont des URL relatives&nbsp;:

- URL relative par rapport au schéma&nbsp;: `//developer.mozilla.org/fr/docs/Learn`
  - : Ici, seul le protocole manque. Le navigateur utilisera alors le même protocole que celui utilisé pour charger le document contenant cette URL.
- URL relative par rapport au domaine&nbsp;: `/fr/docs/Learn`
  - : Le protocole et le nom de domaine sont manquants. Le navigateur utiliser le même protocole et le même nom de domaine que ceux utilisés pour charger le document contenant cette URL.
- Sous-ressources&nbsp;: `Common_questions/Web_mechanics/What_is_a_URL`
  - : Le protocole et le nom de domaine sont manquants, et le chemin ne commence pas par `/`. Le navigateur tentera de trouver le document dans un sous-répertoire de celui contenant la ressource courante. Dans ce cas, cette URL relative correspond à l'URL absolue `https://developer.mozilla.org/fr/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL`.
- Remonter dans l'arborescence&nbsp;: `../CSS/display`
  - : Le protocole et le nom de domaine sont manquants, et le chemin commence par `..`. Cette écriture suit celle du monde des systèmes de fichier UNIX qui indique de remonter d'un niveau dans l'arborescence. L'URL absolue correspondant à cet exemple est `https://developer.mozilla.org/fr/docs/Learn/../CSS/display`, qu'on peut simplifier en `https://developer.mozilla.org/fr/docs/CSS/display`.
- Ancre uniquement&nbsp;: `#url_sémantiques`
  - : Toutes les composantes sont absentes exceptée l'ancre. Le navigateur utilisera l'URL du document courant et remplacera ou ajoutera l'ancre à celle-ci. Cela s'avère utile quand on veut faire pointer un lien vers une partie spécifique du document courant.

## URL sémantiques

Malgré leur aspect technique, les URL représentent des points d'entrées censées être compréhensibles par les humains. On peut les mémoriser, et les saisir manuellement dans la barre d'adresse du navigateur. Le Web est au service des personnes, et c'est une bonne pratique que de construire ce qu'on appelle des _URL sémantiques_. Les URL sémantiques utilisent des mots clairs, pouvant être compris par chacune ou chacun, quel que soit son niveau de connaissance technique.

Les ordinateurs et serveurs se fichent bien des sémantiques linguistiques et vous avez sûrement déjà vu des URL qui ressemblent à du charabia de caractères. Toutefois, il y a de nombreux avantages à créer des URL compréhensibles par les humains&nbsp;:

- Il est plus facile de les manipuler.
- Cela clarifie les choses pour les utilisatrices et utilisateurs pour comprendre leur situation et leurs actions sur le Web.
- Certains moteurs de recherche peuvent utiliser cette sémantique afin d'améliorer la classification des pages correspondantes.

## Voir aussi

[Les URL de données](/fr/docs/Web/URI/Reference/Schemes/data) sont des URL préfixées par le schéma `data:` qui permettent d'embarquer de petits fichiers à même le document.
