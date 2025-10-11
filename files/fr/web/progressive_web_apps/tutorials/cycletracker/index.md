---
title: CycleTracker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker
l10n:
  sourceCommit: 251eb2f8a9132e73e647b9b7ae987ea6e2b45edc
---

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}

{{PWASidebar}}

Dans ce tutoriel introductif, nous aborderons les différentes étapes pour construire une application web progressive (<i lang="en">PWA</i> pour <i lang="en">Progressive Web App</i> en anglais). Nous utiliserons ici les technologies web&nbsp;: HTML, CSS et JavaScript, afin de construire une application de suivi menstruel, appelée «&nbsp;CycleTracker&nbsp;». Comme toutes les applications web, CycleTracker sera conçue pour fonctionner sur l'ensemble des navigateurs et l'ensemble des appareils qui accèdent au Web.

Nous commencerons par les étapes pour construire une application web complètement fonctionnelle, puis nous améliorerons CycleTracker afin qu'elle soit installable, et qu'elle fonctionne même lorsque la personne est hors-ligne.

Par défaut, les applications web progressives sont des sites web normaux, construits avec les mêmes technologies. À l'instar des sites normaux, on peut avoir des liens entre les PWA, les découvrir via des moteurs de recherche, les consulter dans un navigateur. En ajoutant un fichier de manifeste, un <i lang="en">service worker</i> et en servant le site en HTTPS grâce à TLS, n'importe quel site peut devenir une application web progressive.

## Avantage des PWA

En utilisant les langages du Web, nous pouvons créer une application pleinement fonctionnelle, qu'on soit connecté·e ou non, qui fonctionne dans le navigateur ou sur le système d'exploitation. À l'instar d'un site classique, CycleTracker est hébergée et téléchargeable depuis un serveur web. Pour l'implémenter, il nous faut uniquement un éditeur de texte. Comme toutes les PWA, il n'est pas nécessaire d'avoir des compétences dans d'autres langages de programmation, d'installer des SDK propriétaires ou d'outils d'empaquetage. De même, CycleTracker pourra être installé sur n'importe quel système d'exploitation, sans avoir à passer par un magasin d'application (sans contrôle ni frais donc).

- Elles utilisent les technologies ouvertes et standard du Web
  - : Par le passé, pour installer une application sur un système d'exploitation comme Windows, iOS, macOS, Linux ou Android, cette application devait être implémentée dans un langage pris en charge par le système d'exploitation, comme C#, .NET, Objective-C, Swift, Kotlin, Java, ou Python. Les PWA fonctionnent sur un modèle différent&nbsp;: il n'y a qu'une seule base de code commune, écrite à l'aide des technologies standard et ouvertes du Web (HTML, CSS, et JavaScript) qui fonctionnent sur l'ensemble des systèmes d'exploitation.

- Elles n'ont pas besoin d'être compilées
  - : Pour la plupart des langages utilisés pour le développement d'applications Android (Java, C/C++, et Kotlin) ou iOS (Objective-C et Swift), le code doit être compilé et empaqueté dans un format installable, que ce soit `.exe`, `.dmg`, `.elf`, `.apk`, ou tout autre type de fichier installable pour le système d'exploitation correspondant. Selon le langage de programmation, la compilation et l'empaquetage peuvent nécessiter l'utilisation du [SDK](/fr/docs/Glossary/SDK) pour le système d'exploitation cible. Les applications web progressives utilisent les technologies web qui sont prises en charge par l'ensemble des systèmes d'exploitation et n'ont pas besoin d'être empaquetées ou compilées. Il est tout à fait possible d'utiliser des systèmes complexes de compilation, mais nous verrons en construisant cette application que les PWA peuvent parfaitement être bâties à l'aide de HTML, JavaScript et CSS (même si la mise en forme n'est pas strictement nécessaire pour une PWA).

- Elles sont disponibles pour toutes les plateformes, sans intermédiaire
  - : Les applications spécifiques à certains systèmes d'exploitation sont distribuées par du téléchargement, généralement en passant par un magasin d'application propriétaire. Ces applications peuvent être disponibles via les magasins des éditeurs du système d'exploitation comme [Apple App Store](https://www.apple.com/app-store/), [Google Play](https://play.google.com/store/apps), ou [Microsoft Store](https://apps.microsoft.com/store/apps). Il n'est pas nécessaire de passer par un intermédiaire pour distribuer une PWA. Toute personne pourra accéder à l'application en visitant la version en ligne. Vous pouvez aussi tout à fait distribuer votre PWA sur le Play Store et l'App Store, parmi les applications iOS et Android.

- Elles sont faciles à installer
  - : Par le passé, les applications propres à un système d'exploitation devaient être installées manuellement par la personne. Selon le système d'exploitation, le format d'installation et la source de téléchargement, cela pouvait représenter plusieurs étapes pour l'installation. Le processus d'installation des PWA est plus fluide&nbsp;: elles peuvent être consultées et utilisées depuis n'importe quel navigateur qui les prend en charge, et sont [installables](/fr/docs/Web/Progressive_web_apps/Guides/Installing) en quelques clics.

### Comparaison avec les applications natives

Une fois installées, les applications web progressives auront la même apparence et un fonctionnement similaire aux autres applications installées sur le système d'exploitation&nbsp;:

- Fenêtre pour l'application
  - : En paramétrant [le manifeste](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_presentation), CycleTracker pourra s'ouvrir dans sa propre fenêtre, comme les autres applications installées.

- Icône pour l'application
  - : Les PWA affichent une icône pour l'application comme les autres applications installées sur le système d'exploitation. Cela peut être une icône sur le bureau, dans la barre d'outils, dans un répertoire ou à tout autre endroit où l'appareil affiche les icônes des applications. Nous verrons comment [déclarer des icônes](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#iconographie_de_lapplication) pour CycleTracker, afin que son icône apparaisse à côté de celles des autres applications.

- Fonctionnement hors-ligne
  - : Un accès à Internet est nécessaire lors du téléchargement de l'application et lorsqu'il faut synchroniser les données avec le serveur ou les autres personnes. Cette nécessité s'applique également aux autres applications, pas uniquement aux PWA. Ici, nous ajouterons [un <i lang="en">service worker</i>](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) pour implémenter le fonctionnement déconnecté. Cela signifie que CycleTracker fonctionnera, même si l'accès à Internet est interrompu. Nous nous intéresserons principalement à la gestion du fonctionnement hors-ligne des PWA. Lorsque quelqu'un effectue une modification hors-ligne, les <i lang="en">service workers</i> permettent aux PWA de synchroniser les données lorsque la connectivité revient. Grâce aux <i lang="en">service workers</i>, l'utilisatrice ou l'utilisateur n'a pas besoin d'agir explicitement avec l'application, voire de l'avoir ouverte, pour que celle-ci envoie et récupère des données auprès du serveur.

## Chapitres pour la mise en place de CycleTracker

L'application web de base que nous utiliserons pour ce tutoriel sur les PWA est une application de suivi des règles, qu'une personne peut utiliser pour suivre le début et la fin de chaque cycle menstruel. Nous commencerons par créer un site web statique que nous mettrons en forme. Ensuite, nous verrons comment mettre en place une connexion sécurisée pour voir l'avancement de l'application. Nous ajouterons alors des fonctionnalités avec JavaScript afin que le squelette créé en HTML et CSS devienne une application pleinement fonctionnelle, enregistrant les données dans le stockage local. À partir de cette étape, nous améliorerons l'application progressivement afin qu'elle devienne une PWA pouvant fonctionner hors-ligne, avec un manifeste, l'iconographie associée et un <i lang="en">service worker</i>.

Les chapitres sont ainsi organisés&nbsp;:

- [HTML et CSS pour notre application](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS)
  - : Une explication ligne à ligne du HTML fournissant le contenu statique du site web pour CycleTracker, ainsi que le CSS utilisé pour mettre en forme ce contenu.

- [Environnement de développement local et connexion sécurisée](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)
  - : Tous les sites devraient idéalement être servis avec HTTPS. Pour les PWA, il s'agit d'un prérequis obligatoire. Les <i lang="en">service workers</i>, donc les PWA, ne peuvent s'exécuter qu'au sein de contextes sécurisés, c'est-à-dire servis avec le protocole `https://` ou localement via `127.0.0.1` et `localhost` (avec `http://` pour ces deux dernières origines). Nous verrons la page dans son état actuel lorsqu'elle est servie avec le protocole `file://`. Ensuite, nous verrons les options pour mettre en place une connexion locale sécurisée pour tester l'application au fur et à mesure du développement. Nous verrons également comment servir notre PWA à l'aide des pages GitHub.

- [JavaScript et `localStorage`](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)
  - : Cet article expliquera en profondeur les fonctionnalités JavaScript nécessaires au bon fonctionnement côté client de notre application de suivi des règles afin qu'elle puisse être améliorée progressivement en PWA grâce à [`localStorage`](/fr/docs/Web/API/Window/localStorage) pour le stockage local des données.

- [Manifeste&nbsp;: identité, apparence, et iconographie](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)
  - : Une PWA nécessite un manifeste. Il s'agit d'un fichier JSON qui décrit le nom, l'icône, la description, le fonctionnement de l'application sur le système d'exploitation hôte. Dans cet article, nous créerons un fichier de manifeste qui définit l'apparence de l'application une fois installée, notamment les icônes à utiliser selon l'appareil, et les paramètres pour la zone d'affichage de l'application. Nous verrons également comment déboguer ce manifeste à l'aide des outils de développement des navigateurs.

- [<i lang="en">Service workers</i>](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)
  - : Un <i lang="en">service worker</i> permet à l'application de fonctionner hors-ligne. Grâce à la connexion sécurisée établie précédemment, la première visite à la page fournit les fonctionnalités de bases, tandis que le <i lang="en">service worker</i> est téléchargé. Une fois le <i lang="en">service worker</i> installé et activé, il contrôle la page pour en améliorer la fiabilité et les performances.

Pour suivre ce tutoriel, il est utile d'avoir des notions de bases en HTML, CSS et JavaScript. Ce tutoriel contient des instructions sur la création d'un fichier de manifeste, l'initialisation d'un <i lang="en">service worker</i>, mais aussi la mise en place d'un environnement de développement local pour voir la progression au fur et à mesure.

Les seuls prérequis logiciels nécessaires au développement d'une PWA sont&nbsp;:

- Une connexion sécurisée
- Un éditeur de texte pour coder l'application
- Un navigateur pour visualiser le résultat.

Vous pouvez [essayer l'application aux différentes étapes du développement](https://mdn.github.io/pwa-examples/cycletracker/) et consulter [le code source de CycleTracker sur GitHub](https://github.com/mdn/pwa-examples/tree/master/cycletracker).

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}
