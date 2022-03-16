---
title: Astuces de création de pages HTML à affichage rapide
slug: Learn/HTML/Howto/Author_fast-loading_HTML_pages
tags:
  - HTML
  - Performance
translation_of: Learn/HTML/Howto/Author_fast-loading_HTML_pages
original_slug: Web/Guide/HTML/Astuces_de_création_de_pages_HTML_à_affichage_rapide
---
C'est connu, les internautes sont de grands impatients, ils veulent des résultats immédiats, avec des gros titres et des réponses courtes et efficaces.
Une page web optimisé prévoit non seulement un site plus réactif, mais aussi de réduire la charge sur vos serveurs Web et votre connexion Internet. Cela peut être crucial pour les gros sites ou des sites qui ont un pic de trafic dans des circonstances exceptionnelles (telles que les Unes des journaux fracassantes). De plus, Google en tient compte pour son classement.

### Réduire le poids de la page

Le poids de la page est de loin le facteur le plus important dans les performances de chargement de votre page. Pour les améliorer, on peut procéder de diverses manières:

- Eliminer les espaces et les commentaires inutile.
- Déplacer le script intégré (ou "inline scripts") et le code CSS dans des fichiers externes (un pour JavaScript, un pour CSS,...). Des outils tels que [HTML Tidy](http://www.html-tidy.org) peuvent automatiquement enlever les espaces de trop et les lignes vides à partir d'une source HTML valide. D'autres outils peuvent "compresser" JavaScript comme le libre [YUIcompressor](http://yuilibrary.com/projects/yuicompressor/).
- Verifiez que votre site ne contient pas de code inutile ou de tags superflus.

Téléchargez le html d'abords, puis le CSS et le JavaScript nécessaires à son affichage, de sorte que l'utilisateur obtienne rapidement une réponse apparente au cours du chargement de la paget. Ce contenu est généralement du texte, et peuvent donc bénéficier de la compression de texte dans le modem, fournissant ainsi une réponse encore plus rapide à l'utilisateur.

### Réduisez le nombre de fichiers

Réduire le nombre de fichiers référencés dans une page web diminue le nombre de connexions [HTTP](/en/HTTP "https://developer.mozilla.org/en/HTTP") nécessaire pour télécharger une page.

- Utilisez le moins d'images possible sur votre site (et de gif animés ofc). Preferez des [boutons graphiques en CSS](http://css-tricks.com/examples/ButtonMaker/).
- Compressez vos images (éviter les .png). Vous pouvez pour cela utiliser [Gimp](http://www.gimp.org/) ou [Imagemagik](http://www.imagemagick.org/script/index.php).
- Preferez le CSS ou le JavaScript au flash: il ralenti le navigateur.

Les videos sont diffusées progressivement depuis le serveur, elles ne ralentisseent donc pas le chargement de votre page.

### Réduire les domaines des recherches

Étant donné que chaque requete DNS demande du temps, le temps de chargement de la page va augmenter avec l'augmentation du nombre de domaines séparés figurant dans le lien CSS, JavaScript et image (src). Vous devez toujours prendre soin de n'utiliser que le nombre minimum nécessaire de différents domaines dans vos pages.

### Réutiliser le contenu du cache

Assurez-vous que tout contenu qui peut être mis en cache, est mis en cache, et avec un temps d'expiration appropriée.
En particulier, attention à l'en-tête "Last-Modified". Elle permet la mise en cache de la page; grâce à cette en-tête, l'information est transmise au navigateur (ou "user agent") sur le fichier qu'il veut charger, comme lors de sa dernière modification. La plupart des serveurs web ajoute automatiquement l'en-tête "Last-Modified" aux pages statiques (par exemple. html,. css), basé sur la date de la dernière modification stockées dans le système de fichiers. Avec des pages dynamiques (p. ex. Php,. Aspx), ceci, bien sûr, ne peut pas être fait, et l'en-tête n'est pas envoyé.
En particulier pour les pages qui sont générées dynamiquement, une petite recherche sur ce sujet est bénéfique. Il peut être quelque peu complexe, mais il permettra d'économiser beaucoup de demandes de page sur des pages qui ne devraient normalement pas être mis en cache.

Plus d'informations:

1. [HTTP Conditional Get for RSS Hackers](http://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
   2. [HTTP 304: Not Modified](http://annevankesteren.nl/archives/2005/05/http-304)
   3. [On HTTP Last-Modified and ETag](http://www.cmlenz.net/blog/2005/05/on_http_lastmod.html)

### Réduire le nombre de scripts en ligne

Les scripts intégrés peut être coûteux pour le chargement de la page, puisque l'analyseur (ou parser) doit supposer qu'un script intégré pourrait modifier la structure de la page quand le "parsing" est en cours. Il est donc préférable, en général, de réduire l'utilisation des scripts intégrés et l'utilisation de document.write(), en particulier au contenu de sortie. Ces manipulations peuvent améliorer chargement globale de la page. Utilisez des méthodes modernes de W3C-DOM pour manipuler le contenu de la page pour les navigateurs modernes, plutôt que des approches plus fondées sur document.write ().

### Utilisez le CSS moderne et des balises valides

L'utilisation de CSS modernes réduit la quantité de balisage, et peut réduire la nécessité de "spacer" les images, en termes de disposition, et peut très souvent remplacer des images de texte stylisé - qui "coutent" beaucoup plus que l'équivalent texte-et-CSS.
Utiliser des balises valides a d'autres avantages. Tout d'abord, les navigateurs n'ont pas besoin d'effectuer de corrections d'erreurs lors de l'analyse du code HTML.
En outre, la validité du balisage permet la libre utilisation d'autres outils qui peuvent pré-traiter vos pages web. Par exemple, [HTML Tidy](http://tidy.sourceforge.net/) peut supprimer des espaces blancs et des balises facultatives, mais il refusera de s'exécuter sur une page avec des erreurs de balisage graves.

### Segmentez votre contenu

Remplacer la mise en page basé sur des \<table> par des blocs \<div>, plutôt que des \<table> très imbriquée comme dans l'exemple suivant:

    <TABLE>
      <TABLE>
        <TABLE>
              ...
        </TABLE>
      </TABLE>
    </TABLE>

Préferez des \<table> non-imbriquées ou \<div> comme dans l'exemple suivant:

    > TABLE <TABLE> ...</
    > TABLE <TABLE> ...</
    > TABLE <TABLE> ...</

### Préciser la taille des images et des tableaux

Si le navigateur peut immédiatement déterminer la hauteur et/ou la largeur de vos images et tableaux, il sera capable d'afficher une page web sans avoir à refondre le contenu. Cela n'augmente pas seulement la vitesse d'affichage de la page, mais aussi à empêcher les changements gênants dans la disposition d'une page lors du chargement. Pour cette raison, la hauteur et la largeur doit être spécifié pour les images, chaque fois que possible.
Les tableaux doivent utiliser le sélecteur CSS selector:property combination:

      table-layout: fixed;

et doit spécifier la largeur des colonnes en utilisant le COL et les balises html COLGROUP.

### Choisissez les versions des navigateur ciblés

Pour atteindre les plus grandes améliorations dans la conception de la page, assurez-vous que des exigences raisonnables de l'agent utilisateur (user-agent) soit définies pour les projets. Cela ne nécessite pas que votre contenu apparaisse parfaitement sur tous les navigateurs, et surtout pas dans les navigateurs d'une version anterieure.

Idéalement, vous devriez vous concentrez sur l'examen des navigateurs modernes qui prennent en charge des normes pertinentes. Il peut s'agir de: Firefox 5, Internet Explorer 9 sur Windows, Opera 11 sous Windows et Safari 5 sur Mac OS X.

Notez, cependant, que beaucoup de conseils énumérés dans cette page sont des techniques de bon sens qui s'applique à tous, et peuvent être appliquées à n'importe quelle page web, indépendamment des exigences relatives des navigateurs.

### Liens connexes

- [Optimisez vos pages avec Yslow](http://www.alsacreations.com/astuce/lire/527-optimisez-vos-pages-avec-yslow.html)
- [Livre&nbsp;: "Speed Up Your Site" par Andy King](http://www.websiteoptimization.com/)
- [Site Optimization Tutorial (WebMonkey)](http://webmonkey.wired.com/webmonkey/design/site_building/tutorials/tutorial2.html) (en anglais)
- [Best Practices for Speeding Up Your Web Site](https://developer.yahoo.com/performance/rules.html) (en anglais)

**Document d'information d'origine**

- https\://developer.mozilla.org/en/Tips_for_Authoring_Fast-loading_HTML_Pages
