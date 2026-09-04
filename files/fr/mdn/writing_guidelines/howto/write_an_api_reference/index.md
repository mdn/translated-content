---
title: Comment rédiger une référence API
short-title: Rédiger une référence API
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

Ce guide vous explique tout ce que vous devez savoir pour rédiger une référence API sur MDN.

## Se préparer

Avant de commencer à documenter une API, il y a certaines choses que vous devez préparer et planifier avant de commencer à écrire réellement.

### Connaissances préalables

Il est supposé qu'avant de lire ce guide, vous avez une connaissance raisonnable de&nbsp;:

- Les technologies Web comme HTML, CSS et JavaScript. JavaScript est le plus important.
- La lecture des spécifications des technologies Web. Vous les consultez souvent lors de la documentation des API.

Tout le reste peut être appris en cours de route.

### Ressources préalables

Avant de commencer à documenter une API, vous devez avoir à disposition&nbsp;:

1. La dernière spécification&nbsp;:
   Qu'il s'agisse d'une recommandation du W3C ou d'un brouillon préliminaire, vous devez vous référer au dernier brouillon disponible de la spécification qui couvre (ou aux spécifications qui couvrent) cette API.
   Pour le trouver, vous pouvez généralement effectuer une recherche sur le Web. La dernière version est souvent liée à partir de toutes les versions de la spécification, listée sous «&nbsp;dernier brouillon&nbsp;» ou similaire.
2. Les navigateurs Web modernes les plus récents&nbsp;:
   Il s'agit généralement de versions expérimentales/alpha telles que [Firefox Nightly](https://www.firefox.com/fr/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/fr/chrome/canary/) qui sont plus susceptibles de prendre en charge les fonctionnalités que vous documentez.
   C'est particulièrement pertinent si vous documentez une API naissante/expérimentale.
3. Démonstrations/articles de blog/autres informations&nbsp;: Trouvez autant d'informations que possible.
4. Contacts techniques utiles&nbsp;:
   Il est vraiment utile de trouver un contact technique amical pour poser des questions sur la spécification, quelqu'un qui est impliqué dans la normalisation de l'API ou son implémentation dans un navigateur.
   Les bons endroits pour les trouver sont&nbsp;:
   - Votre carnet d'adresses interne, si vous travaillez pour une entreprise pertinente.
   - Une liste de diffusion publique impliquée dans la discussion de cette API, comme [dev-platform<sup>(angl.)</sup>](https://groups.google.com/a/mozilla.org/g/dev-platform/) de Mozilla ou une liste du W3C comme [public-webapps<sup>(angl.)</sup>](https://lists.w3.org/Archives/Public/public-webapps/).
   - La spécification elle-même. Par exemple, la [spécification de l'API Web Audio<sup>(angl.)</sup>](https://webaudio.github.io/web-audio-api/) liste les auteur·ice·s et leurs coordonnées en haut.

### Prenez le temps de jouer avec l'API

Vous viendrez construire des démonstrations de nombreuses fois au cours de la documentation d'une API, mais il est utile de commencer par passer du temps à se familiariser avec le fonctionnement de l'API — apprendre quelles sont les principales interfaces/propriétés/méthodes, quels sont les cas d'utilisation principaux et comment écrire des fonctionnalités simples avec elle.

Lorsque qu'une API a changé, vous devez faire attention à ce que les démonstrations existantes auxquelles vous vous référez ou que vous utilisez pour apprendre ne soient pas obsolètes. Vérifiez les principaux éléments utilisés dans la démonstration pour voir s'ils correspondent à la dernière spécification. Ils peuvent également ne pas fonctionner dans les navigateurs à jour, mais ce n'est pas un test très fiable, car souvent les anciennes fonctionnalités continuent d'être prises en charge pour la compatibilité ascendante.

> [!NOTE]
> Si la spécification a été récemment mise à jour de sorte qu'une méthode est maintenant définie différemment, mais que l'ancienne méthode fonctionne toujours dans les navigateurs, vous devez souvent documenter les deux au même endroit, afin que les anciennes et nouvelles méthodes soient couvertes.
> Si vous avez besoin d'aide, référez-vous aux démonstrations que vous avez trouvées ou demandez à un contact technique.

### Créez la liste des documents que vous devez rédiger ou mettre à jour

Une référence d'API contient généralement les pages suivantes.
Vous pouvez trouver plus de détails sur le contenu de chaque page, des exemples et des modèles, dans notre article [Types de pages](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types).
Avant de commencer, vous devez rédiger une liste de toutes les pages que vous devez créer.

1. Page d'aperçu
2. Pages d'interface
3. Pages de constructeur
4. Pages de méthode
5. Pages de propriété
6. Pages d'évènement
7. Pages de concept/guide
8. Pages d'exemples

> [!NOTE]
> Nous nous référons à [l'API Web Audio](/fr/docs/Web/API/Web_Audio_API) pour les exemples dans cet article.

#### Pages d'aperçu

Une seule page d'aperçu de l'API est utilisée pour décrire le rôle de l'API, ses interfaces de haut niveau, les fonctionnalités connexes contenues dans d'autres interfaces et d'autres détails de haut niveau.
Son nom et son identifiant doivent être le nom de l'API précédé de «&nbsp;API&nbsp;». Elle est placée au niveau supérieur de la référence de l'API, en tant qu'enfant de [https://developer.mozilla.org/fr/docs/Web/API](/fr/docs/Web/API).

Exemple&nbsp;:

- Titre&nbsp;: _API Web Audio_
- Chemin&nbsp;: _Web_Audio_API_
- URL&nbsp;: [https://developer.mozilla.org/fr/docs/Web/API/Web_Audio_API](/fr/docs/Web/API/Web_Audio_API)

#### Pages d'interface

Chaque interface a également sa propre page, décrivant le but de l'interface, listant tous les membres (constructeurs, méthodes, propriétés, etc.) qu'elle contient, et montrant avec quels navigateurs elle est compatible.
Le nom et l'identifiant d'une page doivent être le nom de l'interface, exactement comme écrit dans la spécification.
Chaque page est placée au niveau supérieur de la référence de l'API, en tant qu'enfant de [https://developer.mozilla.org/fr/docs/Web/API](/fr/docs/Web/API).

Exemples&nbsp;:

- Titre&nbsp;: _AudioContext_
- Chemin&nbsp;: _AudioContext_
- URL&nbsp;: [https://developer.mozilla.org/fr/docs/Web/API/AudioContext](/fr/docs/Web/API/AudioContext)

<!---->

- Titre&nbsp;: _AudioNode_
- Chemin&nbsp;: _AudioNode_
- URL&nbsp;: [https://developer.mozilla.org/fr/docs/Web/API/AudioNode](/fr/docs/Web/API/AudioNode)

> [!NOTE]
> Nous documentons chaque membre apparaissant dans l'interface. Vous devez garder à l'esprit les règles suivantes&nbsp;:

- Nous documentons les méthodes définies sur le prototype d'un objet implémentant cette interface (méthodes d'instance), et les méthodes définies sur la classe elle-même (méthodes statiques).
  Dans les rares occasions où elles existent toutes les deux sur la même interface, vous devez les lister dans des sections séparées sur la page (Méthodes statiques/Méthodes d'instance).
  En général, seules les méthodes d'instance existent, auquel cas vous pouvez les mettre sous le titre «&nbsp;Méthodes&nbsp;».
- Nous ne documentons pas les propriétés et méthodes héritées de l'interface&nbsp;: elles sont listées sur l'interface parente respective. Nous faisons cependant allusion à leur existence.
- Nous documentons les propriétés et méthodes définies dans les compositions. Veuillez consulter le [guide de contribution pour les compositions](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#compositions) pour plus de détails.
- Les méthodes spéciales comme la mise en chaîne de caractères (`toString()`) et la conversion en JSON (`toJSON()`) sont également listées si elles existent.
- Les constructeurs nommés (comme `Image()` pour {{DOMxRef("HTMLImageElement")}}) sont également listés, si pertinent.

#### Pages de constructeur

Chaque interface a zéro ou un constructeur, documenté sur une sous-page de la page de l'interface. Elle décrit le but du constructeur et montre à quoi ressemble sa syntaxe, des exemples d'utilisation, des informations sur la compatibilité des navigateurs, etc. Son identifiant est le nom du constructeur, qui est exactement le même que le nom de l'interface, et le titre est le nom de l'interface, point, nom du constructeur, puis parenthèses à la fin.

Exemple&nbsp;:

- Titre&nbsp;: _AudioContext : constructeur AudioContext()_
- Chemin&nbsp;: _AudioContext_
- URL&nbsp;: [https://developer.mozilla.org/fr/docs/Web/API/AudioContext/AudioContext](/fr/docs/Web/API/AudioContext/AudioContext)

#### Pages de propriété

Chaque interface a zéro ou plusieurs propriétés, documentées sur des sous-pages de la page de l'interface. Chaque page décrit le but de la propriété et montre à quoi ressemble sa syntaxe, des exemples d'utilisation, des informations sur la compatibilité des navigateurs, etc. Son identifiant est le nom de la propriété, et le titre est le nom de l'interface, point, puis le nom de la propriété.

Exemples&nbsp;:

- Titre&nbsp;: _AudioContext : propriété state_
- Chemin&nbsp;: _state_
- URL&nbsp;: [https://developer.mozilla.org/fr/docs/Web/API/AudioContext/state](/fr/docs/Web/API/BaseAudioContext/state)

<!---->

#### Pages de méthode

Chaque interface a zéro ou plusieurs méthodes, documentées sur des sous-pages de la page de l'interface. Chaque page décrit le but de la méthode et montre à quoi ressemble sa syntaxe, des exemples d'utilisation, des informations sur la compatibilité des navigateurs, etc. Son identifiant est le nom de la méthode, et le titre est le nom de l'interface, point, nom de la méthode, puis parenthèses.

Exemples&nbsp;:

- Titre&nbsp;: _AudioContext : méthode close()_
- Chemin&nbsp;: _close_
- URL&nbsp;: [https://developer.mozilla.org/fr/docs/Web/API/AudioContext/close](/fr/docs/Web/API/AudioContext/close)

<!---->

- Titre&nbsp;: _AudioContext : méthode createGain()_
- Chemin&nbsp;: _createGain_
- URL&nbsp;: [https://developer.mozilla.org/fr/docs/Web/API/AudioContext/createGain](/fr/docs/Web/API/BaseAudioContext/createGain)

#### Pages d'évènements

Documentez les évènements en tant que sous-pages de leurs interfaces cibles et utilisez le slug _eventname_\_event avec le titre défini sur `Interface: eventName event`.

Ne créez pas de pages pour les propriétés de gestionnaire d'évènements `on`. Mentionnez les deux façons d'accéder à l'évènement sur la page `eventName_event`.

Exemple&nbsp;:

- Titre&nbsp;: XRSession : évènement end
- Chemin&nbsp;: end_event
- URL&nbsp;: [https://developer.mozilla.org/fr/docs/Web/XRSession/end_event](/fr/docs/Web/API/XRSession/end_event)

#### Pages de concepts/guides

La plupart des références d'API ont au moins un guide et parfois aussi une page de concepts pour les accompagner. Au minimum, une référence d'API doit contenir un guide intitulé «&nbsp;Utiliser _nom-de-lapi_&nbsp;», qui fournit un guide de base sur la façon d'utiliser l'API. Les API plus complexes peuvent nécessiter plusieurs guides d'utilisation pour expliquer comment utiliser différents aspects de l'API.

Si nécessaire, vous pouvez également inclure un article de concepts intitulé «&nbsp;concepts de _nom-de-lapi_&nbsp;», qui fournit une explication de la théorie derrière les concepts liés à l'API que les développeur·euse·s doivent comprendre pour l'utiliser efficacement.

Ces articles doivent tous être créés en tant que sous-pages de la page de présentation de l'API. Par exemple, l'API Web Audio a quatre guides et un article de concepts&nbsp;:

- [https://developer.mozilla.org/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/fr/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/fr/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/fr/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/fr/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/fr/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/fr/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Exemples

Vous devez créer quelques exemples qui démontrent au moins les cas d'utilisation les plus courants de l'API. Vous pouvez les placer n'importe où de manière appropriée, bien que l'endroit recommandé soit le [dépôt GitHub de MDN <sup>(angl.)</sup>](https://github.com/mdn/).

#### Listez-les toutes

Créer une liste de toutes ces sous-pages est un bon moyen de les suivre. Par exemple&nbsp;:

- Web_Audio_API
- AudioContext
  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - …
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - …

- AudioNode
  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - …
  - AudioNode.connect(Param)
  - …

- AudioParam
- Évènements (mettre à jour la liste)
  - start
  - end
  - …

Chaque interface de la liste a une page distincte créée pour elle en tant que sous-page de `https://developer.mozilla.org/fr/docs/Web/API`&nbsp;; par exemple, le document pour {{DOMxRef("AudioContext")}} est situé à `https://developer.mozilla.org/fr/docs/Web/API/AudioContext`. Chaque [page d'interface](#interface_pages) explique ce que fait cette interface et fournit une liste des méthodes et propriétés qui la composent. Ensuite, chaque méthode et propriété est documentée sur sa propre page, qui est créée en tant que sous-page de l'interface dont elle est membre. Par exemple, {{DOMxRef("BaseAudioContext/currentTime")}} est documenté à `https://developer.mozilla.org/fr/docs/Web/API/AudioContext/currentTime`.

## Créer les pages

Créez maintenant les pages dont vous avez besoin, selon les structures ci-dessous. Notre [README du contenu MDN <sup>(angl.)</sup>](https://github.com/mdn/content#adding-a-new-document) contient des instructions sur la création d'un nouveau document, et notre guide [Types de pages](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types) contient d'autres exemples et modèles de pages qui pourraient être utiles.

### Structure d'une page de présentation

Les pages de destination des API varient considérablement en longueur, en fonction de la taille de l'API, mais elles ont toutes essentiellement les mêmes caractéristiques. Voir [https://developer.mozilla.org/fr/docs/Web/API/Web_Audio_API](/fr/docs/Web/API/Web_Audio_API) pour un exemple de grande page de destination.

Les caractéristiques d'une page de départ sont décrites ci-dessous&nbsp;:

1. **Description**&nbsp;: le premier paragraphe de la page de destination doit fournir une description courte et concise de l'objectif global de l'API.
2. **Section Concepts et utilisation**&nbsp;: La section suivante doit être intitulée «&nbsp;\[nom de l'API] concepts et utilisation&nbsp;» et fournir un aperçu de toutes les principales fonctionnalités que l'API offre, des problèmes qu'elle résout et de son fonctionnement — le tout à un niveau élevé. Cette section doit être assez courte et ne pas entrer dans le code ou les détails spécifiques de l'implémentation.
3. **Liste des interfaces**&nbsp;: Cette section doit être intitulée «&nbsp;\[nom de l'API] interfaces&nbsp;», et fournir des liens vers la page de référence pour chaque interface qui compose l'API, ainsi qu'une brève description de ce que chacune fait. Voir la section «&nbsp;Référencer d'autres fonctionnalités de l'API avec la macro \\{{DOMxRef}}&nbsp;» pour un moyen plus rapide de créer de nouvelles pages.
4. **Exemples**&nbsp;: Cette section doit montrer un ou deux cas d'utilisation de l'API.
5. **Tableau des spécifications**&nbsp;: À ce stade, vous devez inclure un tableau des spécifications — voir la section «&nbsp;Créer un tableau de référence des spécifications&nbsp;» pour plus de détails.
6. **Compatibilité des navigateurs**&nbsp;: Vous devez maintenant inclure un tableau de compatibilité des navigateurs. Voir [Tableaux de compatibilité](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) pour plus de détails.
7. **Voir aussi**&nbsp;: La section «&nbsp;Voir aussi&nbsp;» est un bon endroit pour inclure des liens supplémentaires qui peuvent être utiles lors de l'apprentissage de cette technologie, y compris des tutoriels MDN (et externes), des exemples, des bibliothèques, etc.

### Structure d'une page d'interface

Vous devez maintenant être prêt·e à commencer à rédiger vos pages d'interface. Chaque page de référence d'interface doit respecter la structure suivante&nbsp;:

1. **\\{{APIRef}}**&nbsp;: Incluez la macro \\{{APIRef}} dans la première ligne de chaque page d'interface, en incluant le nom de l'API comme argument, par exemple \\{{APIRef("Web Audio API")}}. Cette macro sert à construire un menu de référence sur le côté gauche de la page d'interface, incluant les propriétés et méthodes, ainsi que d'autres liens rapides tels que définis dans la macro [GroupData <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) (demandez à quelqu'un d'ajouter votre API à une entrée GroupData existante, ou d'en créer une nouvelle, si elle n'est pas déjà répertoriée). Le menu ressemble à quelque chose comme la capture d'écran ci-dessous.
   ![Cette capture d'écran montre un menu de navigation vertical pour l'interface OscillatorNode, avec plusieurs sous-listes pour les méthodes et les propriétés, tel que généré par la macro APIRef](apiref-links.png)
2. **Statut de la fonctionnalité**&nbsp;: Une [bannière indiquant le statut de la fonctionnalité](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#bannières_de_statut_en_haut_de_page) (comme obsolète, non standard ou expérimental) est ajoutée automatiquement, si nécessaire. Pour cela, vous devez [mettre à jour le statut dans le dépôt browser-compat-data](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
3. **Description**&nbsp;: le premier paragraphe de la page d'interface doit fournir une description courte et concise de l'objectif global de l'interface. Vous pouvez également inclure quelques paragraphes supplémentaires si une description supplémentaire est nécessaire. Si l'interface est en réalité un dictionnaire, vous devez utiliser ce terme au lieu de «&nbsp;interface&nbsp;».
4. **Diagramme d'héritage**&nbsp;: Utilisez la macro [`\{{InheritanceDiagram}}`<sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/inheritance_diagram.rs) pour intégrer un diagramme d'héritage SVG pour l'interface.
5. **Liste des propriétés, Liste des méthodes**&nbsp;: Ces sections doivent être intitulées «&nbsp;Propriétés&nbsp;» et «&nbsp;Méthodes&nbsp;», et fournir des liens (en utilisant la macro \\{{DOMxRef}}) vers une page de référence pour chaque propriété/méthode de cette interface, ainsi qu'une description de ce que chacune fait. Ces sections doivent être balisées en utilisant des [listes de description/définition](/fr/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#listes_de_définitions). Chaque description doit être courte et concise — une phrase si possible. Voir la section «&nbsp;Référencer d'autres fonctionnalités de l'API avec la macro \\{{DOMxRef}}&nbsp;» pour un moyen plus rapide de créer des liens vers d'autres pages.

   Au début des deux sections, avant le début de la liste des propriétés/méthodes, indiquez l'héritage en utilisant la phrase appropriée, en italique&nbsp;:
   - _Cette interface n'implémente pas de propriétés spécifiques, mais hérite des propriétés de \\{{DOMxRef("XYZ")}}, et \\{{DOMxRef("XYZ2")}}._
   - _Cette interface hérite également des propriétés de \\{{DOMxRef("XYZ")}}, et \\{{DOMxRef("XYZ2")}}._
   - _Cette interface n'implémente pas de méthodes spécifiques, mais hérite des méthodes de \\{{DOMxRef("XYZ")}}, et \\{{DOMxRef("XYZ2")}}._
   - _Cette interface hérite également des méthodes de \\{{DOMxRef("XYZ")}}, et \\{{DOMxRef("XYZ2")}}._

   > [!NOTE]
   > Les propriétés en lecture seule doivent utiliser la macro \\{{ReadOnlyInline}}, qui crée un petit badge «&nbsp;Lecture seule&nbsp;», inclus sur la même ligne que leurs liens \\{{DOMxRef}} (après l'utilisation des macros \\{{Experimental_Inline}}, \\{{Non-standard_Inline}} et \\{{Deprecated_Inline}}, si certaines de ces macros sont nécessaires).

6. **Exemples**&nbsp;: Incluez une liste de code pour montrer l'utilisation typique d'une fonctionnalité majeure de l'API. Plutôt que de lister TOUT le code, vous devez lister un sous-ensemble intéressant. Pour une liste complète de code, vous pouvez référencer un dépôt [GitHub <sup>(angl.)</sup>](https://github.com/) contenant l'exemple complet, et vous pouvez également créer un lien vers un exemple en direct utilisant la fonctionnalité [GitHub gh-pages <sup>(angl.)</sup>](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) (à condition qu'il utilise uniquement du code côté client, bien sûr). Si l'exemple est visuel, vous pouvez également utiliser la fonctionnalité MDN [Live Sample](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples) pour le rendre interactif et jouable dans la page.
7. **Tableau des spécifications**&nbsp;: À ce stade, vous devez inclure un tableau des spécifications — voir la section «&nbsp;Créer un tableau de référence des spécifications&nbsp;» pour plus de détails.
8. **Compatibilité des navigateurs**&nbsp;: Vous devez maintenant inclure un tableau de compatibilité des navigateurs. Voir [Tableaux de compatibilité](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) pour plus de détails.
9. **Prothèses d'émulation**&nbsp;: Le cas échéant, incluez cette section, en fournissant du code pour une prothèse d'émulation qui permet d'utiliser l'API même sur les navigateurs qui ne l'implémentent pas. Si aucune prothèse d'émulation n'existe ou n'est nécessaire, laissez cette section de côté.
10. **Voir aussi**&nbsp;: La section «&nbsp;Voir aussi&nbsp;» est un bon endroit pour inclure des liens supplémentaires qui peuvent être utiles pour apprendre cette technologie, y compris des tutoriels MDN (et externes), des exemples, des bibliothèques, etc. Nous avons une politique libérale pour les liens vers des sources externes, mais faites attention&nbsp;:
    - Ne pas inclure de pages contenant les mêmes informations qu'une autre page de MDN&nbsp;; liez plutôt cette page.
    - Ne pas mettre de noms d'auteur·ice·s — nous sommes un site de documentation neutre. Liez au document&nbsp;; le nom de l'auteur·ice y est affiché.
    - Faites particulièrement attention aux articles de blog&nbsp;: ils ont tendance à devenir obsolètes (ancienne syntaxe, informations de compatibilité incorrectes). Ne les liez que s'ils ont une valeur ajoutée claire qui ne peut pas être trouvée dans un document maintenu.
    - N'utilisez pas de verbes d'action comme «&nbsp;Voir … pour plus d'informations&nbsp;» ou «&nbsp;Cliquez pour…&nbsp;», vous ne savez pas si votre lecteur·ice est capable de voir ou de cliquer sur le lien (comme sur une version papier du document).

#### Exemples de pages d'interface

Les exemples suivants sont des exemples de pages d'interface&nbsp;:

- {{DOMxRef("Request")}} de [l'API Fetch](/fr/docs/Web/API/Fetch_API).
- {{DOMxRef("SpeechSynthesis")}} de [l'API Web Speech](/fr/docs/Web/API/Web_Speech_API).

### Structure d'une page de propriété

Créez vos pages de propriété en tant que sous-pages de l'interface sur laquelle elles sont implémentées. Copiez la structure d'une autre page de propriété pour servir de base à votre nouvelle page.

Modifiez le nom de la page de propriété pour suivre la convention `Interface.property_name`.

Les pages de propriété doivent comporter les sections suivantes&nbsp;:

1. **Titre**&nbsp;: le titre de la page doit être **InterfaceName : propriété propertyName**. Le nom de l'interface doit commencer par une majuscule. Bien qu'une interface soit implémentée en JavaScript sur le prototype des objets, nous n'incluons pas `.prototype.` dans le titre, comme nous le faisons dans la [référence JavaScript](/fr/docs/Web/JavaScript/Reference).
2. **\\{{APIRef}}**&nbsp;: Incluez la macro \\{{APIRef}} dans la première ligne de chaque page de propriété, en incluant le nom de l'API en argument, par exemple \\{{APIRef("Web Audio API")}}. Cette macro sert à construire un menu de référence sur le côté gauche de la page de l'interface, incluant les propriétés et méthodes, ainsi que d'autres liens rapides tels que définis dans la macro [GroupData <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) (demandez à quelqu'un d'ajouter votre API à une entrée GroupData existante, ou d'en créer une nouvelle, si elle n'est pas déjà répertoriée). Le menu ressemble à quelque chose comme la capture d'écran ci-dessous.
   ![Cette capture d'écran montre un menu de navigation vertical pour l'interface OscillatorNode, avec plusieurs sous-listes pour les méthodes et les propriétés, tel que généré par la macro APIRef](apiref-links.png)
3. **Statut de la fonctionnalité**&nbsp;: Une [bannière indiquant le statut de la fonctionnalité](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#bannières_de_statut_en_haut_de_page) (comme obsolète, non standard ou expérimental) est ajoutée automatiquement, si nécessaire. Pour cela, vous devez [mettre à jour le statut dans le dépôt browser-compat-data](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).

4. **Description**&nbsp;: le premier paragraphe de la page de propriété doit fournir une description courte et concise de l'objectif général de la propriété. Vous pouvez également inclure quelques paragraphes supplémentaires si une description supplémentaire est nécessaire. Les informations supplémentaires évidentes à inclure sont sa valeur par défaut/initiale et si elle est en lecture seule ou non. La structure de la première phrase doit être&nbsp;:
   - Pour les propriétés en lecture seule
     - : La propriété en lecture seule **`InterfaceName.property`** retourne un \\{{DOMxRef("type")}} qui…
   - Pour les autres propriétés
     - : La propriété **`InterfaceName.property`** est un \\{{DOMxRef("type")}} qui…

   > [!NOTE]
   > `InterfaceName.property` doit être en `<code>`, et doit également être en gras (`<strong>`) la première fois qu'il est utilisé.

5. **Valeur**&nbsp;: La section Valeur contient une description de la valeur de la propriété. Cela doit inclure le type de données de la propriété et ce qu'elle représente. Pour un exemple, voir {{DOMxRef("SpeechRecognition.grammars")}}

6. **Exemples**&nbsp;: Incluez une liste de code pour montrer l'utilisation typique de la propriété en question. Vous devez commencer par un exemple simple qui montre comment un objet du type est créé et comment accéder à la propriété. Des exemples plus complexes peuvent être ajoutés après un tel exemple. Dans ces exemples supplémentaires, plutôt que de lister tout le code, vous devez lister un sous-ensemble intéressant de celui-ci. Pour une liste complète de code, vous pouvez référencer un [dépôt GitHub <sup>(angl.)</sup>](https://github.com/) contenant l'exemple complet, et vous pouvez également créer un exemple en direct en utilisant la [fonction GitHub gh-pages <sup>(angl.)</sup>](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) (à condition qu'il utilise uniquement du code côté client bien sûr). Si l'exemple est visuel, vous pouvez également utiliser la fonctionnalité MDN [Live Sample](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples) pour le rendre interactif et jouable dans la page.
7. **Tableau des spécifications**&nbsp;: À ce stade, vous devez inclure un tableau des spécifications — voir la section «&nbsp;Créer un tableau de référence des spécifications&nbsp;» pour plus de détails.
8. **Compatibilité des navigateurs**&nbsp;: Vous devez maintenant inclure un tableau de compatibilité des navigateurs. Voir [Tableaux de compatibilité](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) pour plus de détails.
9. **Voir aussi**&nbsp;: La section «&nbsp;Voir aussi&nbsp;» est un bon endroit pour inclure des liens supplémentaires qui peuvent être utiles lors de l'utilisation de cette technologie&nbsp;: comme les méthodes et propriétés affectées par un changement de cette propriété ou les évènements déclenchés en relation avec celle-ci. D'autres liens utiles pour apprendre cette technologie, y compris des tutoriels MDN (et externes), des exemples, des bibliothèques,… peuvent être ajoutés, bien qu'il puisse être utile de les ajouter plutôt sur la page de référence de l'interface.

#### Exemples de pages de propriétés

Les exemples suivants sont des exemples de pages de propriétés&nbsp;:

- {{DOMxRef("Request.method")}} de [l'API Fetch](/fr/docs/Web/API/Fetch_API).
- {{DOMxRef("SpeechSynthesis.speaking")}} de [l'API Web Speech](/fr/docs/Web/API/Web_Speech_API).

### Structure d'une page de méthode

Créez vos pages de méthode en tant que sous-pages de l'interface sur laquelle elles sont implémentées. Copiez la structure d'une autre page de méthode pour servir de base à votre nouvelle page.

Les pages de méthode doivent inclure les sections suivantes&nbsp;:

1. **Titre**&nbsp;: le titre de la page doit être **InterfaceName : méthode method()** (avec les deux parenthèses terminales), mais le slug (la fin de l'URL de la page) ne doit pas inclure les parenthèses. De plus, le nom de l'interface doit commencer par une majuscule. Bien qu'une interface soit implémentée en JavaScript sur le prototype des objets, nous ne mettons pas `.prototype.` dans le titre, comme nous le faisons dans la [référence JavaScript](/fr/docs/Web/JavaScript/Reference).
2. **\\{{APIRef}}**&nbsp;: Incluez la macro \\{{APIRef}} dans la première ligne de chaque page de méthode, en incluant le nom de l'API en argument, par exemple \\{{APIRef("Web Audio API")}}. Cette macro sert à construire un menu de référence sur le côté gauche de la page de l'interface, incluant les propriétés et méthodes, ainsi que d'autres liens rapides tels que définis dans la macro [GroupData <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) (demandez à quelqu'un d'ajouter votre API à une entrée GroupData existante, ou d'en créer une nouvelle, si elle n'est pas déjà répertoriée). Le menu ressemble à quelque chose comme la capture d'écran ci-dessous.
   ![Cette capture d'écran montre un menu de navigation vertical pour l'interface OscillatorNode, avec plusieurs sous-listes pour les méthodes et les propriétés, tel que généré par la macro APIRef](apiref-links.png)
3. **Statut de la fonctionnalité**&nbsp;: Une [bannière indiquant le statut de la fonctionnalité](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#bannières_de_statut_en_haut_de_page) (comme obsolète, non standard ou expérimental) est ajoutée automatiquement, si nécessaire. Pour cela, vous devez [mettre à jour le statut dans le dépôt browser-compat-data](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).

4. **Description**&nbsp;: Le premier paragraphe de la page de méthode doit fournir une description courte et concise de l'objectif général de la méthode. Vous pouvez également inclure quelques paragraphes supplémentaires si une description supplémentaire est nécessaire. Les informations supplémentaires évidentes à inclure sont les valeurs par défaut des paramètres, toute théorie sur laquelle la méthode repose et ce que font les valeurs des paramètres.
   - Le début de la première phrase doit suivre la structure suivante&nbsp;:
     - : La méthode **`InterfaceName.method()`** …

   > [!NOTE]
   > `InterfaceName.method()` doit être en `<code>`, et doit également être en gras (`<strong>`) la première fois qu'il est utilisé.

5. **Syntaxe**&nbsp;: La section de syntaxe doit inclure un exemple de 2 à 3 lignes — généralement juste la construction de l'interface, puis l'appel de la méthode de l'interface.
   - La syntaxe doit être de la forme suivante&nbsp;:
     - : method(param1, param2, …)

   La section de syntaxe doit inclure trois sous-sections (voir {{DOMxRef("SubtleCrypto.sign()")}} pour un exemple)&nbsp;:
   - «&nbsp;Paramètres&nbsp;»&nbsp;: Elle doit contenir une liste de définition (ou une liste non ordonnée) qui nomme et décrit les différents paramètres que la méthode prend. Vous devez inclure la macro {{Optional_Inline}} à côté du nom du paramètre, dans le cas de paramètres optionnels. S'il n'y a pas de paramètres, cette section doit être omise.
   - «&nbsp;Valeur de retour&nbsp;»&nbsp;: Elle doit indiquer quelle valeur de retour la méthode a, qu'il s'agisse d'une valeur simple comme un double ou un booléen, ou d'une valeur plus complexe comme un autre objet d'interface, auquel cas vous pouvez utiliser la macro \\{{DOMxRef}} pour créer un lien vers la page MDN couvrant cette interface (si elle existe). Une méthode peut ne rien retourner, auquel cas la valeur de retour doit être écrite comme «&nbsp;\\{{JSxRef('undefined')}}&nbsp;» (ce qui apparaît ainsi dans la page rendue&nbsp;: {{JSxRef("undefined")}}).
   - «&nbsp;Exceptions&nbsp;»&nbsp;: Elle doit lister les différentes exceptions qui peuvent être levées lors de l'invocation de la méthode, et dans quelles circonstances elles se produisent. S'il n'y a pas d'exceptions, cette section doit être omise.

6. **Exemples**&nbsp;: Incluez une liste de code pour montrer l'utilisation typique de la méthode en question. Plutôt que de lister tout le code, vous devez lister un sous-ensemble intéressant. Pour une liste complète de code, vous devez référencer un dépôt [GitHub <sup>(angl.)</sup>](https://github.com/) contenant l'exemple complet, et vous pouvez également créer un lien vers un exemple en direct utilisant la [fonctionnalité GitHub gh-pages <sup>(angl.)</sup>](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) (à condition qu'il n'utilise que du code côté client bien sûr). Si l'exemple est visuel, vous pouvez également utiliser la fonctionnalité MDN [d'exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples) pour le rendre interactif et jouable dans la page.
7. **Tableau des spécifications**&nbsp;: À ce stade, vous devez inclure un tableau des spécifications — voir la section «&nbsp;Créer un tableau de référence des spécifications&nbsp;» pour plus de détails.
8. **Compatibilité des navigateurs**&nbsp;: Vous devez maintenant inclure un tableau de compatibilité des navigateurs. Voir [Tableaux de compatibilité](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) pour plus de détails.

#### Exemples de pages de méthodes

Les exemples suivants sont des exemples de pages de méthodes&nbsp;:

- {{DOMxRef("Document.getAnimations")}} de [l'API Web Animations](/fr/docs/Web/API/Web_Animations_API).
- {{DOMxRef("Window/fetch", "fetch()")}} de [l'API Fetch](/fr/docs/Web/API/Fetch_API).

## Barres latérales

Une fois que vous avez créé vos pages de référence API, vous devez insérer les barres latérales correctes pour les associer ensemble. Notre guide sur les [barres latérales de référence API](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) explique comment faire.
