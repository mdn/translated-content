---
title: Firefox 3.5 note de version pour les développeurs
short-title: Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[Firefox 3.5 <sup>(angl.)</sup>](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) introduit un certain nombre de nouvelles fonctionnalités, ainsi qu'une gestion améliorée d'une grande variété de standards du Web. Cet article en fournit une longue liste, avec des liens vers des articles décrivant les améliorations majeures.

## Nouvelles fonctionnalités pour les développeur·euse·s dans Firefox 3.5

### Pour les développeur·euse·s de sites web et d'applications

#### Support HTML 5

- [Audio et vidéo HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 intègre la prise en charge des éléments HTML 5 [`audio`](/fr/docs/Web/HTML/Reference/Elements/audio) et [`video`](/fr/docs/Web/HTML/Reference/Elements/video).
- Ressources hors ligne dans Firefox
  - : Firefox 3.5 prend désormais en charge entièrement la spécification des ressources hors ligne d'HTML 5.
- [Glisser et déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
  - : L'API de glisser/déposer d'HTML 5 permet de gérer le glisser/déposer d'éléments à l'intérieur et entre des sites web. Elle fournit également une API plus simple pour les extensions et applications basées sur Mozilla.

#### Nouvelles fonctionnalités CSS

- [Prise en charge des polices téléchargeables](/fr/docs/Web/CSS/Reference/At-rules/@font-face)
  - : La nouvelle règle {{CSSxRef("@font-face")}} permet aux pages web de fournir des polices téléchargeables, afin que les sites puissent être rendus exactement comme l'auteur·ice de la page l'a prévu.
- [Requêtes de média CSS](/fr/docs/Web/CSS/Guides/Media_queries/Using)
  - : Firefox 3.5 prend désormais en charge les requêtes de média CSS, ce qui améliore la prise en charge des feuilles de style dépendantes du média.
- {{CSSxRef("::before")}} et {{CSSxRef("::after")}} mis à jour vers CSS 2.1
  - : Les pseudo-éléments `::before` et `::after` ont été mis à jour pour une prise en charge complète de CSS 2.1, ajoutant la prise en charge des propriétés `position`, `float`, `list-style-*` et certaines propriétés `display`.
- Unités `ch` pour les longueurs
  - : L'unité `ch` peut désormais être utilisée partout où une [longueur](/fr/docs/Web/CSS/Reference/Values/length) est acceptée. `1ch` correspond à la largeur du caractère "0" (zéro).
- {{CSSxRef("opacity")}}
  - : L'extension Mozilla `-moz-opacity` a été supprimée au profit de la propriété standard `opacity`.
- {{CSSxRef("text-shadow")}}
  - : La propriété `text-shadow`, qui permet au contenu web de définir des effets d'ombre à appliquer au texte et aux décorations de texte, est désormais prise en charge.
- {{CSSxRef("overflow-wrap")}}
  - : Cette propriété nouvellement prise en charge permet au contenu de définir si les lignes peuvent être coupées à l'intérieur des mots afin d'éviter le débordement lorsqu'une chaîne de caractères autrement insécable est trop longue pour tenir sur une seule ligne.
- La propriété `white-space` prend en charge la valeur `pre-line`
  - : La propriété {{CSSxRef("white-space")}} accepte désormais la valeur `pre-line`.
- `-moz-box-shadow`, `-moz-border-image`, `-moz-column-rule`, `-moz-column-rule-width`, `-moz-column-rule-style`, `-moz-column-rule-color`
  - : Firefox 3.5 intègre la prise en charge de ces extensions Mozilla pour CSS.
- La valeur de couleur `-moz-nativehyperlinktext`
  - : Cette nouvelle valeur de couleur représente la couleur de lien par défaut du système de l'utilisateur·ice.
- La propriété `-moz-window-shadow` et la pseudo-classe `:-moz-system-metric(mac-graphite-theme)`
  - : Ces nouvelles fonctionnalités CSS ont été ajoutées pour faciliter la personnalisation des thèmes.
- Nouvelles valeurs pour `-moz-appearance`
  - : Les valeurs `-moz-win-glass` et `-moz-mac-unified-toolbar` sont ajoutées à `-moz-appearance`.
- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
  - : Firefox 3.5 prend en charge les transformations CSS. Voir {{CSSxRef("transform", "-moz-transform")}} et {{CSSxRef("transform-origin", "-moz-transform-origin")}} pour plus de détails.
- {{CSSxRef(":nth-child")}}, {{CSSxRef(":nth-last-child")}}, {{CSSxRef(":nth-of-type")}}, {{CSSxRef(":nth-last-of-type")}}, {{CSSxRef(":first-of-type")}}, {{CSSxRef(":last-of-type")}}, {{CSSxRef(":only-of-type")}}
  - : Ces sélecteurs sont tous nouvellement pris en charge dans Firefox 3.5.

#### Nouvelles fonctionnalités DOM

- [localStorage](/fr/docs/Web/API/Window/localStorage)
  - : Firefox 3.5 ajoute la gestion de la propriété `localStorage` pour le stockage web, fournissant ainsi une manière pour les applications web de stocker des données localement sur l'ordinateur du client.
- [Utilisation de web workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 gère les web workers afin de permettre une gestion multithreadée dans les applications web.
- [Utilisation de la géolocalisation](/fr/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 gère l'API Geolocation, qui permet aux applications web d'obtenir des informations concernant l'emplacement actuel de l'utilisateur·ice si cette information est fournie et activée dans le système.
- [Identification d'éléments DOM à l'aide de sélecteurs](/fr/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - : L'API Selectors permet d'interroger un document afin d'identifier les éléments correspondant à une règle de sélection donnée.
- [Évènements de mouvement de souris <sup>(angl.)</sup>](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/en-US/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 gère les évènements de mouvements de souris dont les glissades sur un trackpad.
- [L'objet `NodeIterator`](/fr/docs/Web/API/NodeIterator)
  - : L'objet `NodeIterator` permet de parcourir la liste de nœuds dans un sous-arbre DOM.
- L'évènement `MozAfterPaint`
  - : Ce nouvel évènement DOM est envoyé après les mises à jour de l'affichage dans les fenêtres.
- L'évènement `MozMousePixelScroll`
  - : Ce nouvel évènement DOM permet de détecter les évènements de défilement à la souris par pixels plutôt que par ligne.

#### Nouvelles fonctionnalités JavaScript

- [Nouveautés dans JavaScript 1.8.1 <sup>(angl.)</sup>](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Un aperçu de tous les changements dans JavaScript 1.8.1.
- {{JSxRef("Object.getPrototypeOf()")}}
  - : Cette nouvelle méthode retourne le prototype d'un objet défini.
- Utilisation native de JSON
  - : Firefox 3.5 prend en charge nativement {{Glossary("JSON")}}.
- Nouvelles méthodes de suppression des espaces sur l'objet String
  - : L'objet {{JSxRef("String")}} dispose désormais des méthodes {{JSxRef("String.trim", "trim()")}}, {{JSxRef("String.trimStart", "trimStart()")}} et {{JSxRef("String.trimEnd", "trimEnd()")}}.

#### Réseau

- Contrôle d'accès entre site pour HTTP
  - : Dans Firefox 3.5, il devient possible pour les requêtes HTTP, notamment celles faites au travers de {{DOMxRef("XMLHttpRequest")}}, de fonctionner entre différents domaines si le serveur le permet.
- [Évènements de progression pour `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#connaître_lavancement)
  - : Des évènements de progression sont à présent émis pour permettre aux extensions de surveiller l'état des requêtes.
- Amélioration des appels `XMLHttpRequest` synchrones
  - : [Expiration des délais DOM <sup>(angl.)</sup>](https://bugzil.la/340345) et [évènements de saisie <sup>(angl.)</sup>](https://bugzil.la/333198) sont à présent supprimés pendant un appel `XMLHttpRequest` synchrone.
- Contrôle du préchargement DNS
  - : Firefox 3.5 fournit le préchargement DNS, ce qui permet de résoudre les noms de domaine à l'avance pour les liens inclus dans la page actuelle, afin de gagner du temps lorsque les liens sont réellement cliqués. Cet article décrit comment vous pouvez configurer votre site Web pour désactiver le préchargement ou ajuster son fonctionnement.

#### Nouvelles fonctionnalités de Canvas

- [L'API HTML 5 de texte pour les éléments `canvas`](/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Les éléments canvas prennent désormais en charge l'API texte d'HTML 5.
- [Effets d'ombre dans un `canvas`](/fr/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#ombres)
  - : Les effets d'ombre dans un canvas sont désormais pris en charge.
- [`createImageData()`](/fr/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#créer_un_objet_imagedata)
  - : La méthode `createImageData()` de canvas est désormais prise en charge, permettant au code de créer spécifiquement un objet `ImageData` au lieu de le faire automatiquement. Cela peut améliorer les performances des autres méthodes d'`ImageData` en évitant qu'elles aient à créer l'objet.
- L'attribut `moz-opaque`
  - : Ajout de l'attribut [`moz-opaque`](/fr/docs/Web/HTML/Reference/Elements/canvas#moz-opaque), qui permet au canvas de savoir si la translucidité est un facteur. Si le canvas sait qu'il n'y a pas de translucidité, les performances de peinture peuvent être optimisées. Voir également {{DOMxRef("HTMLCanvasElement.mozOpaque")}}.

#### Nouvelles fonctionnalités SVG

- [Application d'effets SVG à du contenu HTML](/fr/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Vous pouvez à présent appliquer des effets SVG à du contenu HTML et XHTML&nbsp;; cet article explique comment.

#### Autres nouvelles fonctionnalités

- [Correction de couleurs ICC dans Firefox](/fr/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 gère à présent la correction de couleurs ICC pour les images balisées.
- L'attribut `defer` est géré sur les éléments HTML {{HTMLElement("script")}}
  - : Cet attribut indique au navigateur qu'il _peut_ décider de continuer d'analyser et d'afficher la page sans attendre que le script ait terminé son exécution.

### Autres améliorations

- La propriété {{DOMxRef("Text.wholeText", "wholeText")}} et la méthode {{DOMxRef("Text", "replaceWholeText()")}} ont été ajoutées aux nœuds texte.
- La propriété {{DOMxRef("Element.children")}} a été ajoutée. Elle retourne une _collection_ d'éléments enfants de l'élément donné.
- L'API Element Traversal est à présent gérée par l'objet {{DOMxRef("Element")}} du DOM.
- Les nœuds HTML document peuvent à présent être clonés à l'aide de {{DOMxRef("Node.cloneNode", "cloneNode()")}}.
- La méthode DOM non-standard `getBoxObjectFor()` a été supprimée. Utilisez plutôt {{DOMxRef("Element.getBoundingClientRect", "getBoundingClientRect()")}}.
- Les éléments DOM dispatchés peuvent être redispatchés. Ceci permet à Firefox 3.5 de passer le test 30 d'Acid 3.
- Des améliorations ont été apportés à la gestion de DOM 2 Range.
- Dans un contexte non-chrome, les objets catchés dans les exceptions sont à présent les objets rejetés tels quels plutôt qu'une enveloppe [XPConnect <sup>(angl.)</sup>](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect) contenant ces objets.
- Les références ID dans SVG sont à présent directes.
- Les filtres SVG fonctionnent à présent avec `foreignObject`.
- La méthode `GetSVGDocument()` a été ajoutée aux éléments HTML {{HTMLElement("object")}} et {{HTMLElement("iframe")}} pour assurer une meilleure compatibilité.
- La définition implicite de propriétés dans des initialiseurs d'objets et de tableaux n'exécute plus les mutateurs en JavaScript.
- La variable `gDownloadLastDir.path` a été renommée en `gDownloadLastDir.file` étant donné qu'elle fait référence à un objet `nsIFile` et non à un chemin.
- La variable `gDownloadLastDirPath` a été renommée en `gDownloadLastDirFile` étant donné qu'elle fait référence à un objet `nsIFile` et non à un chemin.
- À partir de Firefox 3.5, il devient impossible d'utiliser des liaisons `data:` dans les paquets chrome qui bénéficient de l'automatisation `XPCNativeWrapper`.

## Pour les développeur·euse·s XUL et d'applications

Si vous développez des extensions, vous devriez tout d'abord lire [Mise à jour des extensions pour Firefox 3.5](/fr/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) qui fournit un aperçu pratique des changements qui pourraient affecter vos extensions.

#### Nouveaux composants et nouvelles fonctionnalités

- [Prise en charge du mode de navigation privée <sup>(angl.)</sup>](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 propose le mode de navigation privée, qui n'enregistre pas les activités de l'utilisateur·ice. Les extensions peuvent prendre en charge la navigation privée en suivant les consignes présentées dans cet article.
- [Modifications de sécurité dans Firefox 3.5](/fr/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Cet article couvre les changements liés à la sécurité dans Firefox 3.5.
- [Modifications de thème dans Firefox 3.5 <sup>(angl.)</sup>](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/en-US/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Cet article couvre les changements relatifs aux thèmes dans Firefox 3.5.
- Surveillance des points d'accès Wi-Fi
  - : Du code disposant des privilèges UniversalXPConnect peut désormais surveiller la liste des points d'accès disponibles, récupérer leurs SSID, adresses MAC et la puissance du signal. Cela peut être utilisé avec la géolocalisation pour proposer un service de localisation par Wi‑Fi.

#### Changements et améliorations notables

- Le composant XUL `textbox` offre à présent un type `search`, pour être utilisé en tant que champ de recherche.
- Afin de gérer le glisser et déposer d'onglets entre les fenêtres, le widget `browser` dispose à présent d'une méthode `swapDocShells()`.
- Ajout de l'attribut `level` à l'élément `panel`&nbsp;; celui-ci indique si le panneau apparait par dessus les autres applications, ou uniquement au-dessus de la fenêtre contenant le panneau.
- Les éléments XUL gèrent à présent les propriétés `clientHeight`, `clientWidth`, `scrollHeight` et `scrollWidth`.
- Les éléments `keyset` disposent à présent d'un attribut `disabled`.
- De plus, les `keyset`s peuvent être supprimés à l'aide de la méthode `removeChild()` du nœud.
- La méthode `initialize()` de `mozIStorageStatement` a été supprimée&nbsp;; les consommateurs doivent utiliser la méthode `createStatement()` pour obtenir un nouvel objet statement.
- L'API de stockage offre désormais un support pour les requêtes asynchrones.
- L'interface `nsICookie2` expose désormais l'heure à laquelle les cookies ont été créés dans son nouvel attribut `creationTime`.
- Un drapeau a été ajouté à `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`), qui est vérifié lors de l'enregistrement du chrome pour s'assurer qu'un protocole est autorisé à être enregistré.
- Firefox recherche désormais les plugins dans `/usr/lib/mozilla/plugins` sur Linux, ainsi que dans les emplacements précédemment pris en charge.
- L'API des plugins a été mise à jour pour inclure le support du mode de navigation privée&nbsp;; vous pouvez désormais utiliser `NPN_GetValue()` pour interroger l'état du mode de navigation privée en utilisant la variable `NPNVprivateModeBool`.

## Nouvelles fonctionnalités pour les utilisateur·ice·s

### Expérience utilisateur

- Navigation en fonction de sa localisation
  - : Si vous le désirez, vous pouvez permettre à Firefox 3.5 de partager des informations concernant votre localisation géographique avec des sites web. Firefox 3.5 peut utiliser des informations sur le réseau auquel votre machine est connectée pour partager votre localisation. Bien évidemment, votre permission est demandée au préalable afin de préserver votre vie privée.
- Gestion de la vidéo et de l'audio ouverts
  - : Firefox 3.5 gère l'intégration de vidéos et d'extraits audio à l'aide du format ouvert Ogg, ainsi qu'au format WAV pour l'audio. Aucun plugin nécessaire, pas de messages d'erreurs incompréhensibles vous demandant d'installer quelque chose qui n'est en fait pas disponible sur votre plateforme.
- Stockage local de données
  - : Les applications web peuvent à présent utiliser les possibilités de stockage local pour conserver des données sur votre ordinateur. Cela peut servir pour conserver des préférences ou d'autres données plus complexes.

### Sécurité et vie privée

- Navigation privée
  - : Besoin d'utiliser l'ordinateur de quelqu'un d'autre&nbsp;? Activez la navigation privée et rien n'est enregistré concernant votre session, ni cookies, ni historique, ni aucune autre information privée.
- Meilleurs contrôles sur la vie privée
  - : Le panneau de préférences Vie privée a été complètement revu pour disposer d'un meilleur contrôle sur vos informations privées. Les utilisateur·ice·s peuvent choisir de conserver ou d'effacer tout ce qui concerne l'historique, les cookies, les téléchargements et les informations de formulaire enregistrées. De plus, il est possible d'indiquer si l'historique et/ou les marque-pages doivent faire partie des suggestions automatiques de la Barre d'adresse, afin d'empêcher des adresses privées d'apparaître par inadvertance en saisissant des informations dans la Barre d'adresse.

### Performances

- Performances JavaScript améliorées
  - : JavaScript, le «&nbsp;J&nbsp;» de «&nbsp;AJAX&nbsp;», est considérablement accéléré dans Firefox 3.5 grâce au nouveau moteur JavaScript TraceMonkey. Les applications Web sont bien plus rapides que dans Firefox 3.
- Affichage plus rapide des pages
  - : Le contenu Web s'affiche plus rapidement dans Firefox 3.5, grâce à des technologies telles que «&nbsp;l'analyse spéculative&nbsp;». Vos utilisateur·ice·s n'ont pas besoin de savoir ce que cela signifie, si ce n'est que «&nbsp;cela accélère l'affichage&nbsp;».
