---
title: Le web et ses normes
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
---

{{learnsidebar}}

Cet article apporte des connaissances générales sur le Web — Comment il est né, quelles sont les technologies usuelles du web, comment interagissent-elles ensemble, pourquoi "développeur web" est un excellent choix de carrière, et quels types de bonnes pratiques pourrez-vous apprendrez au fil de ce cours.

## Une brève histoire du web

Nous allons passer très rapidement sur ce sujet puisqu'il existe de nombreux articles (plus) détaillés de l'histoire du web, vers lesquelles nous pourrons créer des liens un peu plus loin (si cela vous passionne, vous pouvez également rechercher "histoire du web" dans votre moteur de recherche favori et regarder ce que vous trouverez.)

À la fin des années 60, l'armée américaine a développé un réseau de communication nommé [ARPANET](/fr/docs/Glossary/Arpanet). On peut le considérer comme un précurseur du Web puisqu'il travaillait sur la [commutation de paquets](https://fr.wikipedia.org/wiki/Commutation_de_paquets) et constituait la première implémentation de la suite de protocoles [TCP/IP](https://fr.wikipedia.org/wiki/Suite_des_protocoles_Internet). Ces deux technologies forment la base de l'infrastructure sur laquelle est construit Internet

En 1980, Tim Berners-Lee (souvent abrégé TimBL) a écrit un programme nommé ENQUIRE, basé sur le concept de liens entre différents points. Cela vous dit quelque chose ?

Avance rapide jusqu'en 1989, où TimBL a écrit [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) et HyperText at CERN; Ces deux ouvrages fournissent tout le contexte du fonctionnement du Web. Ils ont bénéficié d'une renommé forte, suffisante pour convaincre les patrons de TimBL de le laisser aller de l'avant et de créer un système hypertexte global.

À la fin des années 90, TimBL avait créé tout le nécessaire pour faire fonctionner une première version du web — [HTTP](/fr/docs/Web/HTTP), [HTML](/fr/docs/Web/HTML), le premier navigateur, qui s'appelait [WorldWideWeb](<https://fr.wikipedia.org/wiki/WorldWideWeb_(navigateur)>), un serveur HTTP et quelques pages web à lire.

Les années suivantes ont vu l'explosion du web, avec la sortie de nombreux navigateurs, la mise en place de milliers de serveurs web et la création de millions de pages web. Ce résumé est très simpliste mais nous vous avions promis qu'il serait bref.

Un dernier point important à évoquer est la fondation en 1994 par TimBL du [World Wide Web Consortium](https://fr.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), une organisation rassemblant des représentants de plusieurs entreprises du numérique pour travailler ensemble à la définition de normes pour les technologies du web. D'autres technologies ont ensuite vu le jour comme le [CSS](/fr/docs/Web/CSS) et le [JavaScript](/fr/docs/Web/JavaScript), et le web a commencé à ressembler à ce que nous connaissons aujourd'hui.

## Les standards du Web

**Les normes Web sont les technologies que nous utilisons pour créer des sites Web. Ces normes existent sous forme de longs documents techniques appelés spécifications, qui détaillent exactement comment la technologie doit fonctionner. Ces documents ne sont pas très utiles pour apprendre à utiliser les technologies qu'ils décrivent (c'est pourquoi nous avons des sites comme MDN Web Docs), mais sont plutôt destinés à être utilisés par des ingénieurs logiciel pour implémenter ces technologies (généralement dans des navigateurs Web).**

Par exemple [HTML Living Standard](https://html.spec.whatwg.org/multipage/) décrit exactement comment le HTML (tous les éléments HTML ainsi que les APIs associées et d'autres technologies proches) devraient être implémentées.

Les standards Web sont définies par des organisations de normalisation — des institutions qui invite des groupes de personnes de différentes compagnies technologiques à se réunir et s'entendre sur la manière dont les technologies devraient fonctionner pour satisfaire au mieux tous les cas de figure. W3C est le plus connu des organismes de normalisation, même si d'autres existent également, comme le [WHATWG](https://whatwg.org/) (à l'origine de la modernisation du langage HTML), [ECMA](https://www.ecma-international.org/) (qui publie les normes ECMAScript, sur lesquelles est basé JavaScript), [Khronos](https://www.khronos.org/) (qui publie des standards pour les graphismes 3D, comme WebGL), et d'autres encore.

### Normes "ouvertes"

L'un des aspects clés des normes Web, sur lequel TimBL et le W3C se sont immédiatement mis d'accord, est que le Web (et les technologies Web) devraient être libres d'utilisation et de contribution, et non pas freinées par des brevets ou des licences. Par conséquent, n'importe qui peut écrire gratuitement du code pour créer un site Web, et n'importe qui peut contribuer au processus de création de normes et d'écriture de spécifications.

Le fait que les technologies Web soient créées librement, en collaboration entre de nombreuses entreprises différentes, signifie qu'aucune entreprise ne peut les contrôler, ce qui est une excellente chose. Vous ne voudriez pas qu'une seule entreprise décide soudainement de rendre payant l'intégralité du Web ou de publier une nouvelle version de HTML que tout le monde doive acheter pour continuer à créer des sites Web, ou pire encore, ne décide simplement qu'elle n'est plus intéressée par le Web et l'éteindre.

Cela permet au Web de rester une ressource publique librement accessible.

### Ne cassez pas le web

Une phrase qu'on entend souvent à propos des normes web ouvertes est "Ne cassez pas le web" ("_don't break the web_") — Cela signifie que toute nouvelle technologie Web introduite devrait être rétrocompatible avec ce qui l'a précédée (donc que les anciens sites Web continueront de fonctionner), et compatible avec l'avenir (les technologies futures seront à leur tour compatibles avec ce que nous avons actuellement). En parcourant les explications présentés ici, vous découvrirez comment un travail de conception et d'implémentation bien pensé rend cela possible.

## Être développeur web, c'est bien

L'industrie du Web est un secteur très attractif si vous êtes à la recherche d'un emploi. Les derniers chiffres publiés estiment le nombre actuel de développeurs Web dans le monde à environ 19 millions, un nombre qui devrait au moins doubler au cours de la prochaine décennie. Le secteur connaissant dans le même temps une pénurie de compétences, y a-t-il un meilleur moment pour apprendre le développement Web?

Ce n'est cependant pas juste des jeux et de l'amusement - la création de sites Web est une tâche qui se complexifie avec le temps, et vous devrez consacrer du temps à l'étude de plusieurs technologies différentes, de nombreuses méthodes et bonnes pratiques à connaître et tous les cas de figure classiques que vous serez appelé à mettre en œuvre. Vous aurez besoin de quelques mois pour vraiment entrer dans le sujet, puis vous devrez continuer à apprendre afin de maintenir vos connaissances à jour avec tous les nouveaux outils et fonctionnalités qui apparaissent sur le Web, et continuer à pratiquer afin de perfectionner votre travail.

_La seule constante est la variation._

Cela vous semble difficile ? Pas d'inquiétude, notre objectif est de vous donner toutes les bases pour débuter, ce qui vous facilitera la suite. Une fois que vous aurez accepté le changement permanent et l'inconstance du Web, vous commencerez à vous amuser. En tant que membre de la communauté Web, vous aurez tout un réseau de contacts et de ressources web pour vous aider, qui vous aideront à profiter des possibilités créatives du web.

Vous êtes désormais un créateur du numérique. Profitez de l'expérience et trouvez votre gagne-pain.

## Vue d'ensemble des outils Web modernes

Il existe plusieurs technologies à maîtriser si vous souhaitez devenir développeur Web front-end, que nous décrirons brièvement dans cette section. Pour une explication plus détaillée de la façon dont certains d'entre eux interagissent, lisez notre article [Le fonctionnement du web](/fr/docs/Learn/Getting_started_with_the_web/How_the_Web_works).

### Navigateurs web

Vous êtes probablement en train de lire ces mots à l'aide d'un navigateur web (à moins que vous ne l'ayez imprimé ou que vous utilisiez un outil d'accessibilité comme un lecteur d'écran). Les navigateurs web sont des logiciels que les gens utilisent pour naviguer sur le web, comme [Firefox](https://www.mozilla.org/fr/firefox/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Safari](https://www.apple.com/fr/safari/), [Edge](https://www.microsoft.com/fr-fr/windows/microsoft-edge).

### HTTP

Hypertext Transfer Protocol, ou [HTTP](/fr/docs/Web/HTTP/Basics_of_HTTP), est un protocole de communication permettant aux navigateurs web de communiquer avec des serveurs web (qui hébergent les sites web). Une conversation type ressemble à quelque chose comme

```
"Bonjour Serveur Web. Peux-tu me fournir les fichiers requis pour afficher bbc.co.uk"?

"Bien sûr Navigateur Web - Les voilà"

[Télécharge les fichiers et affiche la page]
```

La véritable syntaxe des messages HTTP (appelés requêtes et réponses) ne ressemble pas vraiment à une conversation humaine, mais cela permet d'en avoir un aperçu.

### HTML, CSS et JavaScript

[HTML](/fr/docs/Web/HTML), [CSS](/fr/docs/Web/CSS), et [JavaScript](/fr/docs/Web/JavaScript) sont les trois principales technologies utilisées pour créer un site web:

- Hypertext Markup Language, ou **HTML**, est un langage de balises consistant en un ensemble d'éléments qui permettent d'encapsuler (de baliser) du contenu pour lui donner du sens (sémantique) et le structurer. Un extrait simple ressemble à cela :

  ```html
  <h1>Ceci est un titre de haut niveau</h1>

  <p>Voilà un paragraphe de texte</p>

  <img src="chat.jpg" alt="Une image de mon chat" />
  ```

  Si nous faisions une analogie avec la construction d'une maison, le HTML serait les fondations et les murs de la maison, qui lui fournissent une architecture et maintien l'ensemble d'un bloc.

- Les Feuilles de Style en cascade (**CSS** - Cascading Style Sheets) est un langage basé sur un ensemble de règles et utilisé pour appliquer des styles à votre HTML, par exemple pour définir la couleur du texte et de l'arrière-plan, ajouter des bordures, animer des éléments, ou agencer les différentes parties d'une page. Par exemple, le code suivant rendrait notre paragraphe HTML rouge:

  ```css
  p {
    color: red;
  }
  ```

  Dans notre méthaphore domestique, le CSS serait la peinture, la tapisserie, les tapis et les tableaux que vous utiliseriez pour décorer votre maison.

- **JavaScript** est le langage de programmation que l'on utilise pour ajouter de l'interactivité aux sites webs, du changement de style dynamique à la récupération de mise à jour depuis le server, en passant par les animations visuelles complexes. Ce petit fragment de code JavaScript va stocker un lien vers notre paragraphe et en changer le contenu :

  ```js
  let pElem = document.querySelector('p');
  pElem.textContent =  'J'ai changé le texte!';
  ```

  Dans l'analogie de la maison, JavaScript serait le four, la télévision, le sèche-cheveux — Tout ce qui donne des fonctionnalités utiles à votre logement.

### Outils

Une fois que vous maîtriserez les technologies "brutes" qui permettent de construire des pages web (comme HTML, CSS, et JavaScript), vous rencontrerez rapidement divers outils permettant de faciliter ou d'accélerer votre travail. On peut citer comme exemples :

- Les [outils de développement](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools) des navigateurs modernes qui permettent de déboguer votre code.
- [Des outils de test](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing) pouvant être utilisés afin de vérifier si votre code se comporte comme vous l'aviez prévu.
- Des bibliothèques et des cadres de travail (frameworks) basés sur JavaScript qui permettent de créer certains types de sites web beaucoup plus rapidement et efficacement .
- Ce qu'on appelle les "Linters", des outils d'analyse qui prennent une liste de règles, parcourent votre code et listent les endroits où vous n'avez pas parfaitement suivi les règles.
- Des minificateurs, qui retirent tous les blancs de vos fichiers de code pour les rendre plus compacts et donc plus rapides à télécharger.

### Langages et frameworks « côté serveur »

HTML, CSS et JavaScript sont des langages "front-end" (ou « côté client »), ce qui signifie qu'ils sont exécutés par le navigateur pour produire un rendu visuel du site web à destination des utilisateurs.

Il existe une autre catégorie de langages appelés langages "back-end" (ou « côté serveur »), qui s'exécutent sur le serveur avant que le résultat ne soit envoyé au navigateur pour être affiché. Une utilisation typique d'un langage côté serveur consiste à extraire des données d'une base de données et à générer du HTML pour les contenir avant d'envoyer le résultat au navigateur pour que celui-ci l'affiche à l'utilisateur.

On peut citer comme exemples ASP.NET, Python, PHP, ou NodeJS.

## Les bonnes pratiques du web

Nous avons rapidement évoqué les technologies utilisées pour créer des sites web et nous allons désormais parler des bonnes pratiques à employer pour s'assurer que vous utilisez ces outils de la meilleure manière possible.

Lorsque l'on réalise du développement web, la principale cause d'incertitude provient du fait que l'on ne sache pas quelle combinaison de technologies va être utilisée par chacun des utilisateurs du site web:

- L'utilisateur 1 peut utiliser un iPhone avec un écran petit et étroit.
- L'utilisateur 2 peut se servir d'un ordinateur portable Windows avec un grand écran secondaire.
- L'utilisateur 3 peut être aveugle et utiliser un lecteur d'écran pour accéder au contenu de la page web.
- L'utilisateur 4 utilise peut-être un très vieil ordinateur de bureau incapable de faire fonctionner les navigateurs modernes.

Ne sachant pas comment vos utilisateurs vont interagir avec votre site, vous devez le concevoir de manière défensive — rendre votre site web aussi flexible que possible, de façon à ce que chacun des utilisateurs mentionnés puissent y accéder, même s'ils n'auront pas la même interaction. En bref, nous essayons de rendre le web accessible à tous, autant que possible.

Vous rencontrerez les concepts suivants à un moment donné de vos études.

- **La compatibilité entre navigateurs** consiste à essayer de garantir que votre page Web fonctionne sur autant d'appareils que possible. Cela inclut l'utilisation de technologies prises en charge par tous les navigateurs, l'offre de meilleures expériences aux navigateurs qui peuvent les gérer (amélioration progressive) et/ ou l'adaptation du code afin de revenir à une expérience plus simple mais fonctionnelle dans les navigateurs plus anciens (dégradation gracieuse). Cela implique notamment de nombreux tests pour vérifier le bon fonctionnement dans chaque navigateur, puis un travail supplémentaire pour résoudre ces problèmes.
- **La conception web réactive (responsive)** consiste à rendre vos fonctionnalités et mises en page flexibles afin qu'elles puissent s'adapter automatiquement à différents navigateurs. Un exemple immédiat est un site Web qui est présenté d'une certaine manière dans un navigateur grand écran, mais qui s'affiche en une colonne unique plus compacte sur les navigateurs de téléphone mobile. Essayez d'ajuster la largeur de la fenêtre de votre navigateur maintenant pour voir ce qui se passe.
- **La performance** signifie que les sites Web doivent se charger le plus rapidement possible, mais aussi qu'ils doivent être intuitifs et faciles à utiliser afin que les utilisateurs ne soient pas frustrés et ne partent pas ailleurs.
- **L'accessibilité** consiste à rendre vos sites web utilisables par le plus grand nombre de catégories de personnes possible (Un concept lié est la notion de conception inclusive). Cela inclut les individus avec des déficiences visuelles, auditives, cognitives ou physiques. Cela va même au-delà des personnes handicapées — Qu'en est-il des jeunes et des personnes agées, des personnes de cultures différentes, utilisant des appareils mobiles, disposant d'une connection lente ou peu fiable ?
- **L'internationalisation** signifie rendre les sites Web utilisables par des personnes de cultures différentes, qui parlent des langues différentes de la vôtre. cela inclut des considérations techniques (telles que la modification de votre mise en page pour qu'elle fonctionne également pour les langues se lisant de droite à gauche, ou même verticalement), et les considérations sociales (comme l'utilisation d'un langage simple et non argotique afin que les personnes pour qui votre langue est leur deuxième ou troisième langue soient plus susceptibles de comprendre votre texte).
- **Confidentialité et sécurité**. Ces deux concepts sont liés mais différents. La confidentialité consiste à permettre aux gens de vaquer à leurs occupations en privé et à ne pas les espionner ni ne collecter plus de données que ce dont vous avez absolument besoin. La sécurité fait référence à la conception sécurisée de votre site Web afin d'empêcher des utilisateurs malveillants de voler les informations qu'il contient, et ce qu'elle vous appartiennent ou à vos utilisateurs.

## Voir aussi

- [Histoire du World Wide Web](https://fr.wikipedia.org/wiki/World_Wide_Web#Histoire)
- [Le fonctionnement de l'Internet](/fr/docs/Learn/Common_questions/How_does_the_Internet_work)
