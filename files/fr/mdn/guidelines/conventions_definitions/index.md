---
title: Conventions et définitions relatives à MDN
slug: MDN/Guidelines/Conventions_definitions
translation_of: MDN/Guidelines/Conventions_definitions
---
{{MDNSidebar}}

Cet article définit certaines conventions et définitions couramment utilisées sur MDN et qui pourraient ne pas être évidentes au sein de la documentation.

## Définitions

### Déprécié et obsolète

Les adjectifs **déprécié** et **obsolète** sont souvent associés à des technologies ou à des spécifications&nbsp;: qu'est-ce que cela signifie&nbsp;?

- Déprécié (<i lang="en">deprecated</i> en anglais)
  - : Sur MDN, le terme **déprécié** est utilisé afin d'indiquer qu'une API ou une technologie n'est plus recommandée bien qu'elle soit toujours implémentée et qu'elle puisse encore fonctionner. Nous avons mis à jour la définition utilisée [pour le projet browser-compat-data](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md#status-information) qui indique «&nbsp;cette fonctionnalité n'est désormais plus recommandée. Elle pourra être supprimée à l'avenir ou être conservée uniquement à des fins de compatibilité. Veuillez éviter d'utiliser cette fonctionnalité.&nbsp;»
- Obsolète
  - : Sur MDN, le terme **obsolète** était utilisé afin d'indiquer une API ou une technologie qui n'est plus recommandée et qui n'est plus implémentée dans les navigateurs. Cette nuance avec la dépréciation pouvait être source de confusion et peu utile (dans les deux cas, on doit éviter d'utiliser une telle fonctionnalité pour un site ou une application en production). Nous n'utilisons plus cette notion désormais et toute occurrence devrait être retirée/remplacée par «&nbsp;déprécié&nbsp;».

### Expérimental

**Expérimental** peut avoir différentes significations en fonction du contexte. Lorsqu'on décrit une technologie comme expérimentale sur MDN, cela signifie qu'elle est en cours de conception/implémentation et en train d'être ajoutée à la plateforme web (ou que son ajout est envisagé).

Au moins un des deux points qui suivent sera vérifié&nbsp;:

- Elle est implémentée et activée par défaut dans moins de deux des navigateurs principaux.
- La spécification sous-jacente peut changer de façon significative et entraîner des ruptures de rétro-compatibilité (autrement dit, ces modifications peuvent casser le code qui exploite ces fonctionnalités).

Si l'une ou l'autre (ou les deux) de ces propositions est vraie, il est préférable de réfléchir avant d'ajouter cette technologique à un projet de production (qui n'est ni une démonstration ni une expérimentation). Voir aussi la définition d'«&nbsp;expérimental&nbsp;» dans [le projet browser-compat-data](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md#status-information).

À l'inverse, quelque chose n'est plus expérimental lorsque&nbsp;:

- C'est implémenté dans deux navigateurs principaux ou plus ou
- Que sa spécification risque peu d'évoluer d'une façon qui casserait la compatibilité avec le Web.

Le _ou_ a toute son importance ici. Généralement, si une technologie est implémentée sur différents navigateurs principaux, la spécification sera stable. Toutefois, ce n'est pas toujours le cas. On a aussi des technologies dont la spécification est stable mais qui ne sont pas implémentées nativement dans les navigateurs (voir [IMSC](/fr/docs/Related/IMSC), par exemple).

### Pages archivées

Les pages archivées sont des pages stockées dans [les archives MDN pour le contenu obsolète](/fr/docs/Archive). Ces pages contiennent des informations caduques qui ne sont plus directement utiles.

Pour la plupart, elles concernent des projets Mozilla qui ont été arrêtés et qu'on ne devrait plus utiliser. Elles ne sont cependant pas supprimées en raison de leur valeur historique et de certains concepts ou idées qui pourraient s'avérer utiles pour de futurs projets (un bon exemple est [le projet B2G (Firefox OS)](/fr/docs/Archive/B2G_OS)).

#### Comment décider de l'archivage d'une page&nbsp;?

Une page devrait être archivée si elle s'inscrit dans la description précédente. Pour archiver une page, voir [la documentation correspondante sur GitHub](https://github.com/mdn/content#archiving-and-unarchiving-pages).

### Pages supprimées

Les pages supprimées ont été explicitement supprimées de MDN. On aura par exemple l'interface [`SharedKeyframeList`](/fr/docs/Web/API/SharedKeyframeList) et le constructeur [`SharedKeyframeList()`](/fr/docs/Web/API/SharedKeyframeList/SharedKeyframeList). Ces pages contenaient des informations qui ne sont plus utiles à qui que ce soit et/ou qui sont incorrectes au point qu'elles peuvent être source de confusion ou d'interprétations erronées.

Il peut s'agir&nbsp;:

- De pages de référence pour les fonctionnalités d'API qui ont été retirées de la spécification avant toute implémentation dans les navigateurs.
- D'articles couvrant des techniques qui se sont avérés de mauvaises pratiques par la suite ou qui ont été remplacées par de meilleures pratiques.
- D'articles contenant des informations remplacés par d'autres articles, de meilleure qualité.
- D'articles contenant du contenu inapproprié pour MDN.
- De traductions obsolètes pour lesquelles la version anglaise est préférable en tout point et pour lesquelles il serait plus judicieux de démarrer une nouvelle traduction.

#### Comment décider de la suppression d'une page&nbsp;?

Une page devrait être supprimée si elle correspond à la description précédente. Pour supprimer une page, voir [la documentation sur GitHub](https://github.com/mdn/content#deleting-a-document).

### Quand documenter de nouvelles technologies

Sur MDN, nous cherchons continuellement à documenter les technologies web standard comme il se doit. Il faut donc trouver un équilibre entre une documentation publiée suffisamment tôt afin que les développeurs puissent découvrir les nouvelles fonctionnalités lorsqu'ils en ont besoin et une documentation publiée suffisamment tard afin que la technologie en question soit suffisamment mature et stable afin que la documentation n'ait pas à être réécrite constamment ou à être supprimée rapidement suite à des changements de rupture dans les spécifications.

En général, le seuil pour déclencher la documentation d'une nouvelle technologie web correspond au moment où&nbsp;:

_«&nbsp;La fonctionnalité est en voie de standardisation et implémentée quelque part.&nbsp;»_

Une nouvelle technologie mérite sans doute d'être documentée si&nbsp;:

- Elle est spécifiée dans une spécification publiée par une organisation de standardisation reconnue (tel que le W3C, le WHATWG, Khronos, l'IETF, etc.) et qu'elle a atteint un certain niveau de stabilité (pour le W3C, par exemple, il peut s'agir du statut «&nbsp;<i lang="en">working draft</i>&nbsp;» ou «&nbsp;<i lang="en">candidate recommendation</i>&nbsp;») qui peut également se traduire par le volume de tickets renseignés à son propos).
- Elle est implémentée par au moins un navigateur et que d'autres navigateurs témoignent d'un intérêt pour l'implémentation (par exemple avec un ticket «&nbsp;<i lang="en">intent to implement</i>&nbsp;»).

Il faut prendre ses précautions quant à la documentation d'une nouvelle technologie si&nbsp;:

- Elle ne dispose d'aucune spécification ou si cette spécification est une note/un brouillon sujet à changement.
- Un ou aucun navigateur ne l'implémente et que le reste des navigateurs ne témoigne pas d'intérêt pour son implémentation (ce qui peut être déterminé en demandant aux développeuses et développeurs de ces navigateurs ou en consultant les systèmes de ticket ou les listes de diffusion, etc.).

Une nouvelle technologie ne doit pas être documentée si&nbsp;:

- Il ne s'agit pas d'une technologie web et/ou qu'il s'agit d'une technologie propriétaire.
- Il existe déjà des signes de dépréciation ou de remplacement par une fonctionnalité similaire.

## Conventions

### Lors du retrait d'une fonctionnalité de la spécification

Il arrive parfois, pendant le développement d'une spécification et au fur à et mesure de l'évolution de standards évolutifs que de nouveaux éléments, de nouvelles méthodes ou propriétés ou autres soient ajoutés à la spécification, y restent pendant quelque temps avant d'être retirés. Cela arrive parfois rapidement et peut aussi prendre plusieurs mois ou années avant que la suppression soit effectuée. Gérer cette suppression dans la documentation peut alors s'avérer délicat. Voici quelques lignes directrices pour vous aider à décider de ce qu'il faut faire.

> **Note :** Pour la suite de cette discussion, le terme «&nbsp;élément&nbsp;» sera utilisé de façon générique pour indique n'importe quel objet qui peut faire partie d'une spécification&nbsp;: un élément, un attribut d'un élément, une interface, une méthode spécifique, une propriété, un membre d'une interface, etc.

- Si l'élément n'a _jamais_ été implémenté dans une version release d'_aucun_ navigateur (y compris derrière une préférence ou un marqueur/flag), on supprimera toute référence à cet élément de la documentation.

  - Si l'élément n'est décrit dans la documentation que par une ou des pages concernant uniquement cet élément (tel que [`RTCPeerConnection.close()`](/fr/docs/Web/API/RTCPeerConnection/close)), on supprimera cette page. Si l'élément à retirer est une interface, on retirera également toutes les sous-pages pour chacune des propriétés et des méthodes pour cette interface.
  - On supprimera l'élément de toute liste de propriétés, d'attributs, de méthodes, etc. Pour les méthodes d'une interface, cela signifie qu'on retirera le lien de la section «&nbsp;Méthodes&nbsp;» de la page générale sur l'interface.
  - On cherchera dans le texte de la page de l'interface toute mention à cet élément afin de les supprimer. Lors de cette suppression on fera attention à vérifier que la modification ne cause pas d'erreur de grammaire ou d'incohérence. Aussi, il faudra parfois reformuler une phrase ou un paragraphe lors de la suppression. On peut aussi avoir à supprimer des sections entières si la description de l'élément est verbeuse.
  - De même, on cherchera les références à cet élément dans les guides, les tutoriels et dans la documentation connexe. Là encore, on veillera à la cohérence et à la grammaire lors de la suppression, quitte à reformuler ce qui doit l'être.
  - On cherchera parmi le contenu de référence sur MDN pour vérifier qu'il n'y a pas d'autres mentions autre part (on les retirera également le cas échéant).
  - Si les fichiers JSON du [dépôt pour les données de compatibilité des navigateurs](https://github.com/mdn/browser-compat-data) contiennent des données relatives aux éléments supprimés, on les supprimera des fichiers et on fournira une PR expliquant la raison de cette suppression dans le message de commit et dans la description de la PR. Ce faisant, on veillera à ne pas casser la structure syntaxique du JSON.

- Si l'élément a été implémenté dans au moins une release d'au moins un des principaux navigateurs _mais uniquement derrière une préférence_ ou un marqueur, on ne supprimera pas immédiatement la documentation associée. À la place, on indiquera que l'élément est déprécié de la façon suivante&nbsp;:

  - Si la documentation possède des pages décrivant uniquement cet élément (tel que [`RTCPeerConnection.close()`](/fr/docs/Web/API/RTCPeerConnection/close)), on ajoutera la macro [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs) en haut de la page et on ajoutera la balise `Deprecated` à la liste des étiquettes de la page.
  - Sur la page de présentation de l'élément, de l'interface ou de l'API, on trouvera la liste des éléments qui incluent cet élément retiré et on ajoutera la macro [`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) après le nom de l'élément dans la liste.
  - On cherchera les mentions de cet élément parmi les textes d'informations sur la page générale de l'interface, de l'élément et on ajoutera des avertissements pertinents au sein de ces textes en indiquant «&nbsp;\[telle fonctionnalité] a été retirée de la spécification et sera prochainement retiré des navigateurs. Voir \[lien vers un autre article] pour une autre façon de procéder&nbsp;».
  - De même, on cherchera les mentions dans les guides ou tutoriels et on ajoutera des avertissements semblables.
  - On cherchera sur l'ensemble de MDN les différentes références à l'élément supprimé afin d'ajouter des avertissements.
  - Plus tard, une décision pourra être prise quant au retrait définitif de cet élément dans la spécification. Ce n'est pas la démarche normale mais si l'élément était particulièrement peu utilisé ou mineur, on pourra choisir cette voie.
  - On mettra à jour les données [du dépôt de données quant à la compatibilité des navigateurs](https://github.com/mdn/browser-compat-data) pour refléter cette obsolescence.

- Si l'élément a été implémenté dans au moins une release d'au moins un navigateur sans préférence ou marqueur nécessaire, on marquera la dépréciation de l'élément ainsi&nbsp;:

  - Si l'élément est documenté dans des pages de référence qui lui sont spécifiques (par exemple [`RTCPeerConnection.close()`](/fr/docs/Web/API/RTCPeerConnection/close)), on ajoutera [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs) en haut de la page et on ajoutera l'étiquette «&nbsp;<i lang="en">Deprecated</i>&nbsp;» aux méta-données de la page.
  - Sur la page qui présente l'élément, l'interface ou l'API, on ajoutera la macro [`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) pour les mentions de l'élément supprimé dans les différentes listes.
  - Pour tout texte d'information ou de description sur la page de présentation générale, on ajoutera des avertissements indiquant que l'élément a été supprimé de la spécification et qu'il est désormais déprécié et pourra être supprimé des navigateurs. On indiquera que son utilisation est déconseillée et on ajoutera des liens vers toute page qui documenterait des méthodes alternatives.
  - On fera de même pour toute mention dans les guides et tutoriels qui mentionnent cet élément.
  - On fera de même pour toute mention autre part sur MDN.
  - Il est très peu probable que ces mentions soient retirées de la documentation. Toutefois, il est possible que certaines de ces pages soient déplacées dans les [archives](/fr/docs/Archive).
  - On mettra à jour les éléments concernés [dans le dépôt de données de compatibilité des navigateurs](https://github.com/mdn/browser-compat-data) afin d'indiquer la dépréciation de l'élément.

Les formulations exactes des avertissements et autres messages doivent être adaptées si besoin. En cas de doute sur la formulation, n'hésitez pas à vous rendre sur [le canal MDN](https://chat.mozilla.org/#/room/#mdn:mozilla.org) sur [Matrix](https://wiki.mozilla.org/Matrix) ou sur le forum de discussion [Discourse](https://discourse.mozilla.org/c/mdn).

### Copier du contenu d'une source tierce sur MDN

Il existe souvent du contenu utile sur un sujet donné en dehors de MDN. Toutefois, copier ce contenu peut s'accompagner de pénalités légales ou techniques.

Sur le plan technique, les moteurs de recherche ont tendance à pénaliser le classement d'un site qui reproduit du contenu existant par ailleurs. Il est donc préférable d'avoir du contenu original sur MDN pour veiller au bon référencement. On peut tout à fait ajouter des liens vers du contenu externe.

Sur le plan légal, il faut être autorisé à contribuer au contenu et il doit être sous une licence et une attribution compatible avec [celle de MDN](/fr/docs/MDN/About#copyrights_and_licenses).

- **Si vous avez créé le contenu en question** (pour votre propre intérêt et en dehors de tout travail rémunéré) et que vous souhaitez contribuer à MDN sous la licence de MDN, c'est la situation la plus simple, n'hésitez pas à contribuer avec ce contenu.
- **Si les droits d'auteur du contenu appartiennent à quelqu'un d'autre**, il devra être sous une licence et attribué de façon compatible avec la licence de MDN. Il n'est souvent pas facile de déterminer la compatibilité entre deux licences sans bagage juridique. Pour ne pas prendre de risque inutile, vous pouvez contacter quelqu'un de l'équipe MDN sur [le canal MDN](https://chat.mozilla.org/#/room/#mdn:mozilla.org) sur [Matrix](https://wiki.mozilla.org/Matrix) ou sur le forum de discussion [Discourse](https://discourse.mozilla.org/c/mdn).

### Comment indiquer un conflit de spécification

Il arrive (rarement) qu'il y ait un conflit entre les différentes versions d'une spécification (généralement pour celles du W3C et du WHATWG). Par exemple, une des spécifications peut indiquer une fonctionnalité comme dépréciée tandis que l'autre n'indique pas cet état. Dans ces cas, on étudiera le comportement réel des navigateurs et on écrira une note afin d'indiquer cet état. Ainsi, en janvier 2019, l'attribut global [`inputmode`](/fr/docs/Web/HTML/Global_attributes/inputmode) était touché par un conflit de spécification qui était indiqué ainsi sur la page&nbsp;:

> **Attention :** Conflit de spécification&nbsp;: la [spécification WHATWG liste l'attribut `inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) et les navigateurs travaillent à son implémentation. La [spécification W3C HTML 5.2](https://www.w3.org/TR/html52/index.html#contents) ne le mentionne plus en revanche (ce qui indique qu'il est considéré comme obsolète). Jusqu'à ce qu'un consensus soit atteint, on pourra considérer que c'est la définition du WHATWG qui est correcte.
