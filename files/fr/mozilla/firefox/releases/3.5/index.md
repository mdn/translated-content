---
title: Firefox 3.5 pour les développeurs
slug: Mozilla/Firefox/Releases/3.5
tags:
  - Firefox
  - Firefox 3.5
translation_of: Mozilla/Firefox/Releases/3.5
original_slug: Mozilla/Firefox/Versions/3.5
---
{{FirefoxSidebar}}

Firefox 3.5 introduit un certain nombre de nouvelles fonctionnalités, ainsi qu'une gestion améliorée d'une grande variété de standards du Web. Cet article en fournit une longue liste, avec des liens vers des articles décrivant les améliorations majeures.

## Nouvelles fonctionnalités pour les développeurs dans Firefox 3.5

### Pour les développeurs de sites et d'applications web

#### HTML5

- [Utilisation d'audio et video dans Firefox](/Fr/Utilisation_d'audio_et_video_dans_Firefox)
  - : Firefox 3.5 ajoute la gestion des éléments HTML5 [`audio`](/fr/HTML/Element/audio) et [`video`](/Fr/HTML/Element/Video).
- [Ressources hors ligne dans Firefox](/fr/Ressources_hors_ligne_dans_Firefox)
  - : Firefox 3.5 gère entièrement la spécification de ressources hors ligne d'HTML5.
- [Glisser et déposer](/Fr/GlisserDéposer/Glisser_et_déposer)
  - : L'API de glisser/déposer d'HTML5 permet de gérer le glisser/déposer d'éléments à l'intérieur et entre des sites web. Elle fournit également une API plus simple pour les extensions et applications basées sur Mozilla.

#### Nouvelles fonctionnalités CSS

- [Gestion des polices téléchargeables](/fr/CSS/@font-face)
  - : La nouvelle règle-@ `@font-face` permet aux pages web de fournir des polices téléchargeables, afin qu'elles puissent être affichées exactement telles que l'auteur de la page les attend.
- [Media queries](/Fr/CSS/Media_queries)
  - : Firefox 3.5 gère les requêtes de médias, qui améliorent le traitement des feuilles de style destinées à des médias particuliers.
- Mise à jour de {{ cssxref(":before") }} et {{ cssxref(":after") }} pour CSS 2.1
  - : Les pseudo-éléments `:before` et `:after` ont été mis à jour pour respecter complètement CSS 2.1, avec l'ajout des propriétés `position`, `float` et `list-style-*`, ainsi que de certaines valeurs de `display`.
- Unité de longueur `ch`
  - : L'unité `ch` peut à présent être utilisée à tout endroit où peut être indiquée une [unité de longueur](/fr/CSS/longueur#Unités). `1ch` est la largeur du caractère «&nbsp;0&nbsp;» (zéro).
- {{ cssxref("opacity") }}
  - : L'extension à CSS `-moz-opacity` de Mozilla a été supprimée en faveur de la propriété standard `opacity`.
- {{ cssxref("text-shadow") }}
  - : La propriété `text-shadow`, qui permet à du contenu web de spécifier des effets d'ombres sur le texte et les décorations de texte est à présent gérée.
- {{ cssxref("word-wrap") }}
  - : Cette nouvelle propriété permet au contenu d'indiquer si oui ou non les lignes de texte peuvent être coupées au milieu d'un mot afin d'empêcher un débordement lorsqu'une chaîne normalement insécable est trop longue pour rentrer dans une seule ligne.
- Valeur `pre-line` pour la propriété `white-space`
  - : La propriété {{ cssxref("white-space") }} accepte à présent la valeur `pre-line`.
- {{ cssxref("-moz-box-shadow") }}

  {{ cssxref("-moz-border-image") }}

  {{ cssxref("-moz-column-rule") }}

  {{ cssxref("-moz-column-rule-width") }}

  {{ cssxref("-moz-column-rule-style") }}

  {{ cssxref("-moz-column-rule-color") }}

  - : La gestion de ces extensions à CSS de Mozilla a été ajoutée dans Firefox 3.5.

- La {{ cssxref("valeur_de_couleur#Extensions_spécifiques_à_Mozilla","-moz-nativehyperlinktext") }}
  - : Cette nouvelle valeur de couleur représente la couleur de lien hypertexte par défaut de l'utilisateur du système.
- La nouvelle propriété {{ cssxref("-moz-window-shadow") }} et la pseudo-classe {{ cssxref(":-moz-system-metric(mac-graphite-theme)") }}
  - : Ces nouvelles fonctionnalités CSS ont été ajoutées pour faciliter la mise en place de thèmes.
- Nouvelles valeurs pour {{ cssxref("-moz-appearance") }}
  - : Les valeurs `-moz-win-glass` et `-moz-mac-unified-toolbar` ont été ajoutées à `-moz-appearance`.
- [Utilisation des transformations CSS](/fr/CSS/Utilisation_des_transformations_CSS)
  - : Firefox 3.5 gère les transformations CSS. Consultez {{ cssxref("-moz-transform") }} et {{ cssxref("-moz-transform-origin") }} pour plus de détails.
- {{ cssxref(":nth-child") }}

  {{ cssxref(":nth-last-child") }}

  {{ cssxref(":nth-of-type") }}

  {{ cssxref(":nth-last-of-type") }}

  {{ cssxref(":first-of-type") }}

  {{ cssxref(":last-of-type") }}

  {{ cssxref(":only-of-type") }}

  - : Ces sélecteurs sont nouvellement gérés dans Firefox 3.5

#### Nouvelles fonctionnalités DOM

- [localStorage](/fr/DOM/Storage#localStorage)
  - : Firefox 3.5 ajoute la gestion de la propriété `localStorage` pour le stockage web, fournissant ainsi une manière pour les applications web de stocker des données localement sur l'ordinateur du client.
- [Utilisation de workers DOM](/fr/Utilisation_de_workers_web)
  - : Firefox 3.5 gère les workers DOM afin de permettre une gestion multithreadée dans les applications web.
- [Utilisation de la géolocalisation](/fr/Utilisation_de_la_géolocalisation)
  - : Firefox 3.5 gère l'API Geolocation, qui permet aux applications web d'obtenir des informations concernant l'emplacement actuel de l'utilisateur si cette information est fournie et activée dans le système.
- [Identification d'éléments DOM à l'aide de sélecteurs](/fr/DOM/Identification_d'éléments_DOM_à_l'aide_de_sélecteurs)
  - : L'API Selectors permet d'interroger un document afin d'identifier les éléments correspondant à une règle de sélection donnée.
- [Évènements de mouvement de souris](/fr/DOM/Évènements_de_mouvement_de_souris)
  - : Firefox 3.5 gère les évènements de mouvements de souris dont les glissades sur un trackpad.
- [L'objet `NodeIterator`](/fr/DOM/NodeIterator)
  - : L'objet `NodeIterator` permet de parcourir la liste de nœuds dans un sous-arbre DOM.
- [L'évènement MozAfterPaint](/fr/Évènements_DOM_spécifiques_à_Gecko#MozAfterPaint)
  - : Ce nouvel évènement DOM est envoyé après les mises à jour de l'affichage dans les fenêtres.
- [L'évènement MozMousePixelScroll](/fr/Évènements_DOM_spécifiques_à_Gecko#MozMousePixelScroll)
  - : Ce nouvel évènement DOM permet de détecter les évènements de défilement à la souris par pixels plutôt que par ligne.

#### Nouvelles fonctionnalités JavaScript

- [Nouveautés dans JavaScript 1.8.1](/fr/Nouveautés_dans_JavaScript_1.8.1)
  - : Un aperçu de tous les changements dans JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/fr/Référence_de_JavaScript_1.5_Core/Objets_globaux/Object/GetPrototypeOf)
  - : Cette nouvelle méthode renvoie le prototype d'un objet spécifié.
- [Utilisation de JSON dans Firefox](/fr/Utilisation_de_JSON_dans_Firefox)
  - : La gestion de [JSON](/fr/JSON) est à présent intégrée dans le DOM.
- Nouvelles méthodes de nettoyage des espaces sur l'objet String
  - : L'objet [`String`](/fr/Référence_de_JavaScript_1.5_Core/Objets_globaux/String) dispose à présent des méthodes [`trim()`](/fr/R%C3%A9f%C3%A9rence_de_JavaScript_1.5_Core/Objets_globaux/String/Trim), [`trimLeft()`](/fr/R%C3%A9f%C3%A9rence_de_JavaScript_1.5_Core/Objets_globaux/String/TrimLeft) et [`trimRight()`](/fr/R%C3%A9f%C3%A9rence_de_JavaScript_1.5_Core/Objets_globaux/String/TrimRight).

#### Réseau

- [Contrôle d'accès entre sites pour HTTP](/fr/Contrôle_d'accès_HTTP)
  - : Dans Firefox 3.5, il devient possible pour les requêtes HTTP, notamment celles faites au travers d'[`XMLHttpRequest`](/fr/XMLHttpRequest), de fonctionne entre différents domaines si le serveur le permet.
- [Évènements de progression pour `XMLHttpRequest`](/fr/Utilisation_de_XMLHttpRequest#Suivi_de_la_progression)
  - : Des évènements de progression sont à présent émis pour permettre aux extensions de surveiller l'état des requêtes.
- [Amélioration des appels `XMLHttpRequest` synchrones](/fr/Utilisation_de_XMLHttpRequest#Suivi_de_la_progression)
  - : Les [timeouts DOM](https://bugzilla.mozilla.org/show_bug.cgi?id=340345) et les [évènements d'entrée](https://bugzilla.mozilla.org/show_bug.cgi?id=333198) sont à présent supprimés pendant un appel `XMLHttpRequest` synchrone.
- [Contrôle du préchargement DNS](/fr/Contrôle_du_préchargement_DNS)
  - : Firefox 3.5 permet le préchargement DNS, par lequel il effectue la résolution des noms de domaines à l'avance pour les liens présents dans la page courante, afin de gagner du temps lorsque l'on clique effectivement sur ces liens. Cet article explique comment adapter votre site pour désactiver le préchargement, ou contrôler le comportement de ce préchargement.

#### Nouvelles fonctionnalités de Canvas

- [API HTML5 text pour les éléments `canvas`](/fr/Dessin_de_texte_avec_canvas)
  - : Les éléments canvas gèrent à présent l'API texte d'HTML5.
- [Effets d'ombres dans un `canvas`](/fr/Tutoriel_canvas/Ajout_de_styles_et_de_couleurs#Ombres)
  - : Les effets d'ombrages sont à présent gérés dans canvas.
- [`createImageData()`](/fr/HTML/Canvas/Manipulation_de_pixels_avec_canvas#Création_d'un_objet_ImageData)
  - : La méthode `createImageData()` de canvas est à présent gérée, ce qui permet à du code de créer spécifiquement un objet `ImageData` plutôt que demander que ce soit fait automatiquement. Les performances d'autres méthodes d'`ImageData` peuvent en être améliorées puisqu'elles n'ont pas à créer l'objet.
- Attribut `moz-opaque`
  - : L'attribut DOM `moz-opaque` a été ajouté, ce qui permet à canvas de savoir si oui ou non la transparence devra être prise en compte. Si le canvas sait qu'il n'y a pas de transparence, les performances de dessin peuvent être optimisées.

#### Nouvelles fonctionnalités SVG

- [Application d'effets SVG à du contenu HTML](/fr/Application_d'effets_SVG_à_du_contenu_HTML)
  - : Vous pouvez à présent appliquer des effets SVG à du contenu HTML et XHTML&nbsp;; cet article explique comment.

#### Autres nouvelles fonctionnalités

- [Correction de couleurs ICC dans Firefox](/fr/Correction_de_couleurs_ICC_dans_Firefox)
  - : Firefox 3.5 gère à présent la correction de couleurs ICC pour les images balisées.
- L'attribut `defer` est géré sur les éléments [`script`](/fr/HTML/Element/script)
  - : Cet attribut indique au navigateur qu'il _peut_ décider de continuer d'analyser et d'afficher la page sans attendre que le script ait terminé son exécution.

### Autres améliorations

- La propriété [`wholeText`](/fr/DOM/Text.wholeText) et la méthode [`replaceWholeText()`](/fr/DOM/Text.replaceWholeText) ont été ajoutées aux nœuds texte.
- La propriété [`element.children`](/fr/DOM/Element.children) a été ajoutée. Elle renvoie une _collection_ d'éléments enfants de l'élément donné.
- L'API Element Traversal est à présent gérée par l'objet DOM [Element](/fr/DOM/element).
- Les nœuds HTML document peuvent à présent être clonés à l'aide de [`cloneNode()`](/fr/DOM/Node.cloneNode).
- La méthode DOM non-standard `getBoxObjectFor()` a été supprimée. Utilisez plutôt [`getBoundingClientRect()`](/fr/DOM/element.getBoundingClientRect).
- Les éléments DOM dispatchés peuvent être redispatchés. Ceci permet à Firefox 3.5 de passer le test 30 d'Acid 3.
- Des améliorations ont été apportés à la gestion de DOM 2 Range.
- Dans un contexte non-chrome, les objets catchés dans les exceptions sont à présent les objets rejetés tels quels plutôt qu'une enveloppe [XPConnect](/fr/XPConnect) contenant ces objets.
- Les références ID dans SVG sont à présent directes.
- Les filtres SVG fonctionnent à présent avec `foreignObject`.
- La méthode `GetSVGDocument()` a été ajoutée aux éléments [`object`](/fr/HTML/Element/object) et [`iframe`](/fr/HTML/Element/iframe) pour assurer une meilleure compatibilité.
- La définition implicite de propriétés dans des initialiseurs d'objets et de tableaux n'exécute plus les mutateurs en JavaScript. Consultez le billet [Object and array initializers should not invoke setters when evaluated](/web-tech/2009/04/29/object-and-array-initializers-should-not-invoke-setters-when-evaluated) pour plus de détails.
- La variable `gDownloadLastDir.path` a été renommée en `gDownloadLastDir.file` étant donné qu'elle fait référence à un objet `nsIFile` et non à un chemin.
- La variable `gDownloadLastDirPath` a été renommée en `gDownloadLastDirFile` étant donné qu'elle fait référence à un objet `nsIFile` et non à un chemin.
- À partir de Firefox 3.5, il devient impossible d'utiliser des liaisons `data:` dans les paquets chrome qui bénéficient de l'automatisation `XPCNativeWrapper`.

## Pour les développeurs XUL et développeurs d'applications

Si vous développez des extensions, vous devriez tout d'abord lire [Mise à jour des extensions pour Firefox 3.5](/fr/Mise_à_jour_des_extensions_pour_Firefox_3.5) qui fournit un aperçu pratique des changements qui pourraient affecter vos extensions.

#### Nouveaux composants et nouvelles fonctionnalités

- [Gestion du mode de navigation privée](/fr/Gestion_du_mode_de_navigation_privée)
  - : Firefox 3.5 offre un mode de navigation privée, qui n'enregistre pas les activités de l'utilisateur. Les extensions peuvent gérer la navigation privée en suivant les conseils donnés dans cet article.
- [Changements liés à la sécurité dans Firefox 3.5](/fr/Changements_liés_à_la_sécurité_dans_Firefox_3.5)
  - : Cet article détaille les changements liés à la sécurité dans Firefox 3.5.
- [Changements dans les thèmes pour Firefox 3.5](/fr/Changements_dans_les_thèmes_pour_Firefox_3.5)
  - : Cet article détaille les changements liés aux thèmes dans Firefox 3.5.
- [Surveillance des points d'accès WiFi](/fr/Surveillance_des_points_d'accès_WiFi)
  - : Le code disposant des privilèges UniversalXPConnect peut à présent surveiller la liste des points d'accès disponibles, et obtenir des informations concernant leurs SSID, adresses MAC et force du signal. Ceci peut être utilisé couplé avec la géolocalisaiton pour fournir des services locaux basés sur la présence d'un WiFi.

#### Changements et améliorations notables

- Le widget XUL [`textbox`](/fr/XUL/textbox) offre à présent un type [`search`](/fr/XUL/Attribute/textbox.type), pour être utilisé en tant que champ de recherche.
- Afin de gérer le glisser et déposer d'onglets entre les fenêtres, le widget [`browser`](/fr/XUL/browser) dispose à présent d'une méthode [`swapDocShells()`](/fr/XUL/Méthodes/SwapDocShells).
- Ajout de l'attribut [`level`](/fr/XUL/Attributs/Panel.level) à l'élément [`panel`](/fr/XUL/panel)&nbsp;; celui-ci indique si le panel apparait par dessus les autres applications, ou uniquement au-dessus de la fenêtre contenant le panel.
- Les éléments XUL gèrent à présent les propriétés `clientHeight`, `clientWidth`, `scrollHeight` et `scrollWidth`.
- Les éléments [`keyset`](/fr/XUL/keyset) disposent à présent d'un attribut `disabled`.
- De plus, les `keyset`s peuvent être supprimés à l'aide de la méthode [`removeChild()`](/fr/DOM/Node.removeChild) du nœud.
- [`mozIStorageStatement`](/fr/mozIStorageStatement) a vu sa méthode `initialize()` supprimée&nbsp;; ses utilisateurs doivent utiliser la méthode [`createStatement()`](</fr/mozIStorageConnection#createStatement()>) à la place pour obtenir un nouvel objet statement.
- L'API [Storage](/fr/Storage) permet à présent d'effectuer des requêtes asynchrones.
- L'interface [`nsICookie2`](/fr/nsICookie2) expose à présent l'heure à laquelle les cookies ont été créés dans son nouvel attribut `creationTime`.
- Un flag a été ajouté à [`nsIProtocolHandler`](/fr/nsIProtocolHandler) (`URI_IS_LOCAL_RESOURCE`) qui est vérifié au cours d'un enregistrement chrome pour s'assurer qu'un protocole a le droit d'être enregistré.
- Firefox recherche à présent des plugins dans `/usr/lib/mozilla/plugins` sous Linux, outre les emplacements précédemment consultés.
- L'API des plugins a été mise à jour pour gérer le mode de navigation privée&nbsp;; vous pouvez à présent utiliser [`NPN_GetValue()`](/fr/NPN_GetValue) pour connaître l'état du mode de navigation privée à l'aide de la variable `NPNVprivateModeBool`.

## Nouvelles fonctionnalités pour les utilisateurs

### Interface

- Navigation en fonction de sa localisation
  - : Si vous le désirez, vous pouvez permettre à Firefox 3.5 de partager des informations concernant votre localisation géographique avec des sites web. Firefox 3.5 peut utiliser des informations sur le réseau auquel votre machine est connectée pour partager votre localisation. Bien évidemment, votre permission sera demandée au préalable afin de préserver votre vie privée.
- Gestion de la vidéo et de l'audio ouverts
  - : Firefox 3.5 gère l'intégration de vidéos et d'extraits audio à l'aide du format ouvert Ogg, ainsi qu'au format WAV pour l'audio. Aucun plugin nécessaire, pas de messages d'erreurs incompréhensibles vous demandant d'installer quelque chose qui n'est en fait pas disponible sur votre plateforme.
- Stockage local de données
  - : Les applications web peuvent à présent utiliser les possibilités de stockage local pour conserver des données sur votre ordinateur. Cela peut servir pour conserver des préférences ou d'autres données plus complexes.

### Sécurité et vie privée

- Navigation privée
  - : Besoin d'utiliser l'ordinateur de quelqu'un d'autre ? Activez la navigation privée et rien ne sera enregistré concernant votre session, ni cookies, ni historique, ni aucune autre information privée.
- Meilleurs contrôles sur la vie privée
  - : Le panneau de préférences Vie privée a été complètement revu pour disposer d'un meilleur contrôle sur vos informations privées. Les utilisateurs peuvent choisir de conserver ou d'effacer tout ce qui concerne l'historique, les cookies, les téléchargements et les informations de formulaire enregistrées. De plus, il est possible d'indiquer si l'historique et/ou les marque-pages doivent faire partie des suggestions automatiques de la Barre d'adresse, afin d'empêcher des adresses privées d'apparaître par inadvertance en saisissant des informations dans la Barre d'adresse.

### Performances

- Du JavaScript plus rapide
  - : Le code JavaScript est exécuté nettement plus rapidement dans Firefox 3.5 grâce à son nouveau moteur TraceMonkey. Les applications web sont ainsi beaucoup plus rapides que dans Firefox 3.
- Rendu plus rapide des pages
  - : Le contenu web est affiché plus rapidement dans Firefox 3.5, grâce à des technologies telles que l'« analyse spéculative ». Vos utilisateurs n'ont pas besoin de savoir de quoi il s'agit, simplement que ça rend les choses plus rapides.

## Voir également

{{Firefox_for_developers('3')}}
