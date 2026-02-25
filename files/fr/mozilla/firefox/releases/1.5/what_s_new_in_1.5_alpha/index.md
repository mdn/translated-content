---
title: Quoi de neuf dans Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
---

Cette page est basée en grande partie sur [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (merci Jesse).

## Nouvelles fonctionnalités pour les développeur·euse·s web

### HTML

- Les éléments avec `tabindex="-1"` doivent pouvoir recevoir la sélection
  - : Les éléments ayant un attribut tabIndex négatif peuvent désormais recevoir la sélection, même s'ils ne sont pas dans l'ordre de tabulation.
- L'objet doit être soumis
  - : Conformément à la spécification HTML4, les éléments `<object>` peuvent désormais être soumis dans un formulaire.

### CSS

- Imbrication des guillemets CSS2
  - : À partir de cette version, la propriété CSS2 [`quotes`](/fr/docs/Web/CSS/Reference/Properties/quotes) est entièrement prise en charge, avec le bon guillemet (selon le niveau d'imbrication) utilisé pour `open-quote` et `close-quote`.
- CSS3 {{CSSxRef(":only-child")}}
  - : Ce sélecteur CSS3 permet de sélectionner un élément qui n'a pas d'autres éléments comme frères ou sœurs dans l'arbre DOM.
- Colonnes CSS3
  - : Une implémentation expérimentale du projet de [mise en page multicolonne CSS3](https://drafts.csswg.org/css-multicol/) est proposée. Cela permet de réaliser facilement une présentation en colonnes de type journal.
- Propriétés CSS3 `overflow-x` et `overflow-y`
  - : Ces propriétés peuvent être utilisées pour contrôler le comportement de dépassement dans les directions horizontale et verticale de manière relativement indépendante. Par exemple, le dépassement horizontal peut être masqué tandis que le dépassement vertical peut être défilé.
- Curseurs CSS3
  - : Davantage de [noms de curseurs de souris](/fr/docs/Web/CSS/Reference/Properties/cursor) sont désormais pris en charge.
- Valeurs URI sur les propriétés CSS `cursor`
  - : Sous Windows, OS/2 et Linux (Gtk+ 2.x), il est désormais possible d'utiliser une image arbitraire comme curseur de souris lors du survol d'un nœud DOM donné.
    Tout format d'image pris en charge par Gecko peut être utilisé pour l'image.
    (Les curseurs SVG, GIF animés et ANI ne sont pas pris en charge.)
    Voir {{CSSxRef("cursor")}} pour une description de la fonctionnalité.
- `-moz-outline-radius`
  - : Les contours CSS peuvent désormais avoir des coins arrondis.
- Propriété CSS `outline`
  - : [Les contours CSS](/fr/docs/Web/CSS/Reference/Properties/outline) peuvent désormais être utilisés. Ceux-ci diffèrent des bordures en ce qu'ils n'affectent pas la mise en page de la page.
- Compteurs dans le contenu généré par CSS
  - : [Les compteurs CSS2](/fr/docs/Web/CSS/Guides/Lists) sont désormais entièrement pris en charge (l'implémentation ne correspond pas à l'actuel brouillon CSS2.1, mais correspond au prochain). Cela permet la numérotation automatique des sections, titres, etc. à l'aide des feuilles de style.

### JavaScript et DOM

- Méthodes supplémentaires pour `Array`
  - : De nouvelles méthodes ont été ajoutées à l'objet `Array` pour faciliter les tâches courantes. Voir [Objet `Array` de JavaScript 1.5](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Le texte écrit dans les nouveaux documents créés avec `document.open("text/plain")` est désormais traité comme du texte et non comme du HTML, ainsi les sauts de ligne sont conservés et les balises ne sont pas analysées.
- Évènements XML
  - : «&nbsp;XML Events&nbsp;» est une spécification du W3C qui permet aux langages XML d'intégrer des gestionnaires d'évènements et des écouteurs déclaratifs.
- Annulation de `keydown`
  - : L'annulation de l'évènement `keydown` annule désormais correctement les évènements `keyup`/`keypress` correspondants, conformément à la spécification DOM.
- API d'accessibilité pour DHTML
  - : Mozilla permet désormais aux auteur·ice·s DHTML d'ajouter des rôles et des états sémantiques aux éléments personnalisés, et expose ces informations à travers MSAA et ATK.
- Améliorations des performances DHTML
  - : Plusieurs modifications ont été apportées pour améliorer significativement la rapidité et la fluidité de DHTML.

### Graphismes

- Prise en charge de SVG
  - : SVG est une spécification du W3C fournissant des graphiques vectoriels évolutifs indépendants de la résolution, ainsi qu'un DOM. Un aperçu technologique de la prise en charge native de SVG est inclus dans cette version. Actuellement, seul un sous-ensemble de SVG 1.1 Full est pris en charge, les fonctionnalités manquantes incluent les filtres, l'animation déclarative et les polices définies en SVG.
- Prise en charge de `<canvas>`
  - : `<canvas>` est une surface de dessin scriptable permettant de créer dynamiquement des graphiques bitmap. Pour une introduction plus approfondie, voir [Dessiner des graphiques avec Canvas](/fr/docs/Web/API/Canvas_API/Tutorial).

### Divers

- Prise en charge du code de réponse HTTP/1.1 {{HTTPStatus("408", "408 Request Timeout")}}
  - : Une connexion persistante est désormais correctement fermée lorsqu'un code de réponse 408 (délai d'attente de la requête) est reçu. La requête est réessayée sur une nouvelle connexion.
- Les URI sont toujours envoyées en UTF8
  - : Les URI sont désormais toujours envoyées au serveur en UTF8, quel que soit l'encodage de la page de liaison. Cela corrige les images et liens sur les sites avec des noms de fichiers non-ASCII.
- Prise en charge de XForms
  - : Le langage [XML Forms du W3C <sup>(angl.)</sup>](https://www.w3.org/MarkUp/Forms/) permet d'écrire des formulaires complexes en XML, et inclut des fonctionnalités que les formulaires HTML classiques n'ont pas, comme la validation côté client avec [XML Schema <sup>(angl.)</sup>](https://www.w3.org/XML/Schema) et la soumission/récupération XML. La prise en charge de XForms est disponible sous forme d'extension, voir [Page du projet Mozilla XForms <sup>(angl.)</sup>](https://www-archive.mozilla.org/projects/xforms/).

## Nouvelles fonctionnalités pour les développeur·euse·s d'extensions

- Colonne de référent masquée pour l'historique
  - : Les extensions peuvent désormais accéder à l'information de référent pour les pages stockées dans l'historique du navigateur. Cette fonctionnalité peut être utilisée pour fournir des vues alternatives de l'historique et d'autres fonctionnalités utiles. [bogue Firefox 128398 <sup>(angl.)</sup>](https://bugzil.la/128398)

- API de priorisation des connexions HTTP
  - : La bibliothèque réseau de Mozilla prend désormais en charge la priorisation des connexions à un serveur spécifique à l'aide de `nsISupportsPriority`. [bogue Firefox 278531 <sup>(angl.)</sup>](https://bugzil.la/278531)

- API de gestion des feuilles de style utilisateur·ice et d'agent utilisateur
  - : Les extensions peuvent désormais enregistrer des URI de feuilles de style comme feuilles de style utilisateur·ice et UA supplémentaires. Cela signifie que les extensions n'ont plus besoin de tenter de modifier `userContent.css` pour ajouter de la mise en forme (par exemple pour l'attachement XBL) aux pages web. Voir [Utiliser le service de feuilles de style <sup>(angl.)</sup>](https://web.archive.org/web/20210413211020/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API de configuration des proxies
  - : Il est désormais possible pour les extensions de remplacer facilement la configuration du proxy sans affecter les préférences visibles par l'utilisateur·ice. Voir `nsIProtocolProxyService`, `nsIProtocolProxyFilter` et `nsIProtocolProxyCallback`. [bogue Firefox 282442 <sup>(angl.)</sup>](https://bugzil.la/282442)

- Superpositions dynamiques
  - : Le chargement des superpositions XUL après l'affichage du document est désormais pris en charge. Voir `nsIDOMXULDocument`. [bogue Firefox 282103 <sup>(angl.)</sup>](https://bugzil.la/282103)

- ECMAScript pour XML (E4X)
  - : Le moteur JavaScript de Mozilla prend désormais en charge ECMAScript pour XML (E4X), un brouillon de la norme ECMA qui ajoute des types de données XML natifs au langage et fournit des opérateurs pour les opérations XML courantes. Voir [la spécification ECMA <sup>(angl.)</sup>](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [bogue Firefox 246441 <sup>(angl.)</sup>](https://bugzil.la/246441)

- Fenêtres translucides (Windows/Linux)
  - : Sous Windows et Linux, les fenêtres XUL avec un arrière-plan transparent sont désormais prises en charge. Cela permet de voir ce qui se trouve sous la fenêtre à travers l'arrière-plan de la fenêtre.

- Ajout de jetons à la chaîne User-Agent
  - : Il est désormais possible pour les applications, extensions et fournisseurs d'ajouter des jetons à la chaîne User-Agent (en utilisant les préférences par défaut) sans se remplacer mutuellement.
    Voir [documentation sur l'en-tête User-Agent](/fr/docs/Web/HTTP/Reference/Headers/User-Agent). [bogue Firefox 274928 <sup>(angl.)</sup>](https://bugzil.la/274928)

- Registre chrome de l'ensemble d'outils
  - : L'enregistrement du chrome a été considérablement amélioré pour utiliser de simples manifestes d'enregistrement chrome en texte brut, et ne conserve plus le cache chrome.rdf/overlayinfo.
    Voir [Enregistrement du chrome <sup>(angl.)</sup>](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/en-US/docs/Mozilla/Chrome_Registration).

- Gestionnaire d'extensions
  - : Les nouveautés sont les suivantes&nbsp;:
    - Il est désormais possible d'avoir des extensions en dehors des répertoires de profil et d'application.
    - L'installation d'extensions peut désormais se faire en déposant un XPI dans le répertoire d'extensions du profil ou de l'application.
    - La désinstallation d'une extension consiste désormais à supprimer son dossier du répertoire d'extensions du profil ou de l'application.

- Nouveaux liens de préférences
  - : Ces [nouveaux liens <sup>(angl.)</sup>](https://forums.mozillazine.org/viewtopic.php?t=263028) facilitent la création de fenêtres de préférences pour les extensions. Les nouvelles fenêtres de préférences prennent en charge le comportement d'application instantanée, activé par défaut sur Mac et Linux.

- API pour la gestion de nouveaux commutateurs en ligne de commande
  - : Une API a été introduite pour que les extensions puissent facilement gérer des indicateurs de ligne de commande complexes. Cette API sera stable et figée pour la version 1.1. Voir les interfaces `nsICommandLine` et `nsICommandLineHandler`.

- Prise en charge de XTF
  - : Le eXtensible Tag Framework permet d'ajouter la prise en charge de nouveaux espaces de noms à Mozilla à l'aide de composants XPCOM (écrits en JavaScript ou C++). Voir [Page d'accueil XTF <sup>(angl.)</sup>](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

## Nouvelles fonctionnalités du navigateur

### Préférences améliorées

- Comportement d'application instantanée sur Linux et Mac
  - : Les modifications apportées dans la fenêtre des préférences sont désormais appliquées immédiatement, conformément au comportement habituel des autres applications Mac OS X et GNOME. Ce changement est conforme aux Apple et GNOME Human Interface Guidelines.
- Gestionnaire d'actions de téléchargement avec recherche
  - : Il est possible de rechercher dans le gestionnaire d'actions de téléchargement par extension de fichier ou description.
- Gestionnaire de cookies avec recherche
  - : Les cookies peuvent être recherchés par nom d'hôte/domaine et nom de cookie, et sont organisés par nom d'hôte dans un format arborescent au lieu d'une liste plate.

### Déploiement

- Paquet MSI de Firefox
  - : Le nouveau paquet d'installation MSI facilite l'installation distribuée et offre une plus grande flexibilité aux administrateur·ice·s réseau souhaitant déployer Firefox dans un environnement d'entreprise.
- Prise en charge du répertoire «&nbsp;temp&nbsp;» du profil sur le système de fichiers local
  - : Il est désormais possible de stocker le cache réseau (copies des pages web visitées) et le cache XUL de préchargement rapide (code d'interface utilisateur précompilé) sur un disque local, tout en conservant le reste des données du profil sur un lecteur réseau. Cela augmente les performances et réduit le trafic réseau pour les utilisateur·ice·s en environnement réseau.

### Autres

- Fonction de confidentialité «&nbsp;Effacer&nbsp;»
  - : La fonctionnalité «&nbsp;Effacer&nbsp;» permet de supprimer rapidement l'historique de navigation, les cookies, le cache, les informations de formulaire enregistrées et d'autres données personnelles. Les éléments à supprimer peuvent être personnalisés, et la fonctionnalité peut être activée à l'aide d'un raccourci clavier ou d'un élément de menu.
- Miniatures d'images comme icônes d'onglet
  - : Lors de l'affichage d'images, les icônes d'onglet affichent désormais des miniatures de l'image affichée.
- Retour rapide (et avance rapide)
  - : Cette fonctionnalité très expérimentale permet une navigation beaucoup plus rapide dans l'historique de session. Elle est désactivée par défaut mais peut être activée à des fins de test en définissant la préférence `browser.sessionhistory.max_viewers` sur une valeur non nulle.
- Comportement en cas d'échec de connexion FTP anonyme
  - : Les utilisateur·ice·s FTP sont désormais invité·e·s à saisir un nom et un mot de passe si l'accès anonyme échoue.
- Règle @ CSS pour la correspondance sur l'URL du site/document
  - : La nouvelle règle `@-moz-document` permet aux utilisateur·ice·s de faire correspondre des objets de page par site, à l'aide de CSS. Cela permet d'inclure des règles spécifiques à un site dans les feuilles de style utilisateur·ice (userContent.css). [Message de David Baron sur `www-style` <sup>(angl.)</sup>](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) explique comment utiliser cette règle.
