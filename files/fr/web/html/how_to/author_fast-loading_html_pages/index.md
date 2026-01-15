---
title: Rédiger des pages HTML à affichage rapide
slug: Web/HTML/How_to/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Une page web optimisée offre non seulement un site plus réactif pour vos visiteur·euse·s, mais réduit aussi la charge sur vos serveurs web et votre connexion internet. Cela peut être crucial pour les sites à fort trafic ou ceux qui subissent un pic de fréquentation en raison de circonstances inhabituelles, comme des actualités de dernière minute.
Cet article décrit comment améliorer les temps de chargement des pages en se basant sur des connaissances courantes et l'expérimentation.

L'optimisation des performances de chargement des pages ne concerne pas seulement le contenu consulté par des visiteur·euse·s en bas débit ou sur appareil mobile. Elle est tout aussi importante pour le contenu à large bande et peut apporter des améliorations spectaculaires même pour vos visiteur·euse·s disposant des connexions les plus rapides.

## Astuces

### Réduire le poids de la page

Le poids de la page est de loin le facteur le plus important dans les performances de chargement.

Réduire le poids de la page en éliminant les espaces et commentaires inutiles (ce qu'on appelle la minimisation), et en déplaçant les scripts en ligne et le CSS dans des fichiers externes, peut améliorer les performances de téléchargement sans nécessiter d'autres modifications majeures de la structure de la page.

Des outils comme [HTML Tidy <sup>(angl.)</sup>](https://www.html-tidy.org/) peuvent automatiquement supprimer les espaces en début de ligne et les lignes vides d'un code HTML valide. D'autres outils peuvent «&nbsp;compresser&nbsp;» le JavaScript en le reformattant ou en l'obfusquant, en remplaçant les identifiants longs par des versions plus courtes.

### Réduire le nombre de fichiers

Réduire le nombre de fichiers référencés dans une page web diminue le nombre de connexions [HTTP](/fr/docs/Web/HTTP) nécessaires pour télécharger une page, ce qui réduit le temps d'envoi de ces requêtes et de réception des réponses.

Selon la configuration du cache du navigateur, il peut envoyer une requête avec l'en-tête {{HTTPHeader("If-Modified-Since")}} pour chaque fichier référencé, afin de demander si le fichier a été modifié depuis le dernier téléchargement. Passer trop de temps à vérifier la date de dernière modification des fichiers référencés peut retarder l'affichage initial de la page web, car le navigateur doit vérifier la date de modification de chacun de ces fichiers avant d'afficher la page.

Si vous utilisez beaucoup d'images de fond dans votre CSS, vous pouvez réduire le nombre de requêtes HTTP nécessaires en combinant les images en une seule, appelée <i lang="en">sprite</i> d'images. Il suffit alors d'appliquer la même image à chaque fois que vous en avez besoin pour un fond et d'ajuster les coordonnées x/y en conséquence. Cette technique fonctionne mieux avec des éléments de dimensions limitées, et ne conviendra pas à tous les usages d'images de fond. Cependant, le fait de réduire le nombre de requêtes HTTP et de n'avoir qu'une seule image en cache peut aider à diminuer le temps de chargement de la page.

### Utiliser un réseau de diffusion de contenu (CDN)

Pour les besoins de cet article, un CDN est un moyen de réduire la distance physique entre votre serveur et votre visiteur·euse. Plus la distance entre l'origine de votre serveur et le·la visiteur·euse augmente, plus les temps de chargement augmentent. Supposons que votre serveur soit situé aux États-Unis et qu'il reçoive une visite depuis l'Inde&nbsp;; le temps de chargement sera bien plus élevé pour le·la visiteur·euse indien·ne que pour un·e des États-Unis.

Un CDN est un réseau de serveurs répartis géographiquement qui travaillent ensemble pour raccourcir la distance entre l'utilisateur·ice et votre site web. Les CDN stockent des versions en cache de votre site et les servent aux visiteur·euse·s via le nœud du réseau le plus proche, réduisant ainsi la [latence](/fr/docs/Web/Performance/Guides/Understanding_latency).

Pour aller plus loin&nbsp;:

- [Comprendre les CDN <sup>(angl.)</sup>](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Réduire les domaines des recherches

Comme chaque domaine distinct nécessite du temps pour une recherche DNS, le temps de chargement de la page augmentera avec le nombre de domaines distincts présents dans le(s) lien(s) CSS, JavaScript et source(s) d'image.

Cela n'est pas toujours pratique&nbsp;; cependant, vous devez toujours veiller à n'utiliser que le nombre minimum nécessaire de domaines différents dans vos pages.

### Réutiliser le contenu du cache

Assurez-vous que tout contenu pouvant être mis en cache l'est, avec des délais d'expiration appropriés.

En particulier, faites attention à l'en-tête `Last-Modified`. Il permet une mise en cache efficace des pages&nbsp;; grâce à cet en-tête, des informations sont transmises à l'agent utilisateur sur le fichier qu'il souhaite charger, comme la date de sa dernière modification. La plupart des serveurs web ajoutent automatiquement l'en-tête `Last-Modified` aux pages statiques (par exemple, `.html`, `.css`), en se basant sur la date de dernière modification stockée dans le système de fichiers. Avec les pages dynamiques (par exemple, `.php`, `.aspx`), cela, bien sûr, n'est pas possible, et l'en-tête n'est pas envoyé.

Aussi, pour les pages générées dynamiquement, il est utile de se renseigner sur ce sujet. Cela peut être un peu complexe, mais cela permet d'économiser beaucoup de requêtes sur des pages qui normalement ne seraient pas mises en cache.

Plus d'informations&nbsp;:

1. [Requête conditionnelle HTTP pour les flux RSS <sup>(angl.)</sup>](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304&nbsp;: Not Modified <sup>(angl.)</sup>](https://annevankesteren.nl/2005/05/http-304)
3. [ETag HTTP sur Wikipédia](https://fr.wikipedia.org/wiki/Balise-entit%C3%A9_ETag_HTTP)
4. [Mise en cache dans HTTP <sup>(angl.)</sup>](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Réduire le nombre de scripts en ligne

Les scripts en ligne peuvent être coûteux pour le chargement de la page, car l'analyseur doit supposer qu'un script en ligne pourrait modifier la structure de la page pendant l'analyse. Réduire l'utilisation des scripts en ligne en général, et réduire l'utilisation de `document.write()` pour générer du contenu en particulier, peut améliorer le chargement global de la page. Utilisez plutôt les [API DOM pour manipuler le contenu de la page](/fr/docs/Learn_web_development/Core/Scripting/DOM_scripting) que `document.write()`.

### Utiliser le CSS moderne et des balises valides

L'utilisation de CSS modernes réduit la quantité de balisage, peut réduire le besoin d'images (espacement) pour la mise en page, et peut très souvent remplacer des images de texte mis en forme — qui «&nbsp;coûtent&nbsp;» bien plus que l'équivalent texte et CSS.

L'utilisation d'un balisage valide a d'autres avantages. D'abord, les navigateurs n'ont pas besoin d'effectuer de correction d'erreurs lors de l'analyse du HTML (cela mis à part la question philosophique de savoir s'il faut autoriser la variation de format dans la saisie utilisateur et ensuite la «&nbsp;corriger&nbsp;» ou la normaliser par programme&nbsp;; ou s'il faut, au contraire, imposer un format strict et sans tolérance).

De plus, un balisage valide permet l'utilisation libre d'autres outils qui peuvent _prétraiter_ vos pages web. Par exemple, [HTML Tidy <sup>(angl.)</sup>](https://www.html-tidy.org/) peut supprimer les espaces blancs et les balises de fin optionnelles&nbsp;; cependant, il refusera de s'exécuter sur une page comportant des erreurs de balisage graves.

### Segmenter votre contenu

Les tableaux pour la mise en page sont une méthode héritée qui ne doit plus être utilisée. Il faut privilégier les mises en page utilisant les [flottants](/fr/docs/Learn_web_development/Core/CSS_layout/Floats), le [positionnement](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning), [flexbox](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox) ou [grille](/fr/docs/Learn_web_development/Core/CSS_layout/Grids).

Les tableaux sont toujours considérés comme un balisage valide mais doivent être utilisés pour afficher des données tabulaires. Pour aider le navigateur à afficher votre page plus rapidement, vous devez utiliser des méthodes CSS comme la [mise en page flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et la [mise en page en grille](/fr/docs/Web/CSS/Guides/Grid_layout) au lieu d'imbriquer des tableaux.

### Minimiser et compresser les ressources SVG

Les SVG produits par la plupart des applications de dessin contiennent souvent des métadonnées inutiles qui peuvent être supprimées. Configurez vos serveurs et appliquez la compression gzip pour les ressources SVG.

### Minimiser et compresser vos images

Les images volumineuses ralentissent le chargement de votre page. Pensez à compresser vos images avant de les ajouter à votre page, en utilisant les fonctions de compression intégrées aux outils de traitement d'image comme Photoshop, ou un outil spécialisé comme [Compress JPEG <sup>(angl.)</sup>](https://compressjpeg.com/) ou [Tiny PNG <sup>(angl.)</sup>](https://tinypng.com/).

### Préciser la taille des images et des tableaux

Si le navigateur peut immédiatement déterminer la hauteur et/ou la largeur de vos images et tableaux, il sera capable d'afficher une page web sans avoir à refondre le contenu. Cela accélère non seulement l'affichage de la page, mais évite aussi les changements gênants dans la disposition d'une page lors de la fin du chargement. Pour cette raison, il faut définir `height` et `width` pour les images, chaque fois que possible.

Les tableaux doivent utiliser une combinaison CSS `selector: property`&nbsp;:

```css
table-layout: fixed;
```

et doit spécifier la largeur des colonnes en utilisant les éléments HTML {{HTMLElement("col")}} et {{HTMLElement("colgroup")}}.

### Utiliser le chargement différé pour les images

Par défaut, les images sont chargées **de manière anticipée**&nbsp;; c'est-à-dire que l'image est récupérée et affichée dès qu'elle est traitée dans le HTML. Toutes les images chargées de manière anticipée sont affichées avant que l'évènement [`load`](/fr/docs/Web/API/Window/load_event) de la fenêtre ne soit envoyé. Passer au chargement différé des images indique au navigateur de retarder le chargement des images jusqu'à ce qu'elles soient sur le point d'être nécessaires pour dessiner la {{Glossary("visual viewport", "zone d'affichage")}}.

Pour marquer une image pour le chargement différé, définissez son attribut [`loading`](/fr/docs/Web/HTML/Reference/Elements/img#loading) avec la valeur `lazy`. Avec ce paramètre, l'image ne sera chargée que lorsqu'elle sera nécessaire.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Notez que les images chargées de manière différée peuvent ne pas être disponibles lorsque l'évènement `load` est déclenché. Vous pouvez déterminer si une image donnée est chargée en vérifiant si la valeur de sa propriété booléenne {{DOMxRef("HTMLImageElement.complete", "complete")}} est `true`.

### Choisissez les versions des navigateur ciblés

Pour obtenir les plus grandes améliorations dans la conception de la page, assurez-vous que des exigences raisonnables concernant l'agent utilisateur sont définies pour les projets. Ne demandez pas que votre contenu apparaisse parfaitement identique dans tous les navigateurs, surtout pas dans les navigateurs de version antérieure.

Idéalement, vos exigences minimales de base doivent être fondées sur la prise en compte des navigateurs modernes qui prennent en charge les normes pertinentes. Cela peut inclure les versions récentes de Firefox, Google Chrome, Opera et Safari.

Notez cependant que de nombreux conseils énumérés dans cet article sont des techniques de bon sens qui s'appliquent à tout agent utilisateur, et peuvent être appliquées à n'importe quelle page web, indépendamment des exigences de prise en charge des navigateurs.

### Utiliser `async` et `defer` si possible

Rendez vos scripts JavaScript compatibles avec les attributs [`async`](/fr/docs/Web/HTML/Reference/Elements/script#attributs) et [`defer`](/fr/docs/Web/HTML/Reference/Elements/script#attributs), et utilisez [`async`](/fr/docs/Web/HTML/Reference/Elements/script#attributs) dès que possible, surtout si vous avez plusieurs éléments script.

Ainsi, la page peut arrêter le rendu pendant que JavaScript se charge encore. Sinon, le navigateur n'affichera rien après les éléments script qui ne possèdent pas ces attributs.

Remarque&nbsp;: même si ces attributs aident beaucoup lors du premier chargement d'une page, vous devez les utiliser sans supposer qu'ils fonctionneront dans tous les navigateurs. Si vous suivez déjà toutes les bonnes pratiques JavaScript, il n'est pas nécessaire de modifier votre code.

## Exemple de structure de page

- {{HTMLElement('html')}}
  - {{HTMLElement('head')}}
    - {{HTMLElement('link')}}

      Fichiers CSS nécessaires à l'apparence de la page. Minimisez le nombre de fichiers pour la performance tout en gardant les CSS non liés dans des fichiers séparés pour la maintenance.

    - {{HTMLElement('script')}}

      Fichiers JavaScript pour les fonctions **requises** lors du chargement de la page, mais pas les scripts d'interaction qui ne peuvent s'exécuter qu'après le chargement de la page.

      Minimisez le nombre de fichiers pour la performance tout en gardant les JavaScript non liés dans des fichiers séparés pour la maintenance.

  - {{HTMLElement('body')}}

    Contenu visible par l'utilisateur·ice en petits blocs ({{HTMLElement('header')}}/ {{HTMLElement('main')}}/ {{HTMLElement('table')}}) qui peuvent être affichés sans attendre le téléchargement complet de la page.
    - {{HTMLElement('script')}}

      Scripts utilisés pour l'interactivité. Les scripts d'interaction ne peuvent généralement s'exécuter qu'après que la page a été complètement chargée et que tous les objets nécessaires ont été initialisés. Il n'est pas nécessaire de charger ces scripts avant le contenu de la page. Cela ne fait que ralentir l'apparition initiale du chargement de la page.

      Minimisez le nombre de fichiers pour la performance tout en gardant les JavaScript non liés dans des fichiers séparés pour la maintenance.

### Liens connexes

- Livre&nbsp;: ["Speed Up Your Site" par Andy King <sup>(angl.)</sup>](https://www.websiteoptimization.com/)
- [Apprendre la performance <sup>(angl.)</sup>](https://web.dev/learn/performance) sur web.dev (2023)
- Outils d'analyse et d'optimisation des performances&nbsp;: [Google PageSpeed Tools <sup>(angl.)</sup>](https://developers.google.com/speed) et [PageSpeed Insights <sup>(angl.)</sup>](https://pagespeed.web.dev/)
