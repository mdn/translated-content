---
title: Expérimental, déprécié et obsolète
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Ces termes sont couramment associés aux technologies et aux spécifications, et sont utilisés sur MDN Web Docs pour indiquer le statut d'une technologie. Pour leur définition, MDN Web Docs s'aligne sur le dépôt [Browser Compatibility Data (BCD) <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information).
Ces termes sont décrits ci-dessous dans le contexte de leur utilisation sur MDN Web Docs.

## Expérimental

Lorsqu'une technologie est qualifiée d'expérimentale sur MDN Web Docs, cela signifie qu'elle est nouvelle, immature et en cours d'intégration à la plateforme web (ou en cours d'évaluation pour une future intégration).
Qualifier une technologie d'expérimentale indique aux lecteur·ice·s qu'il faut réfléchir avant de l'utiliser dans un projet en production (c'est-à-dire autre qu'une simple démo ou expérimentation). Les utilisateur·ice·s sont [invité·e·s à tester les fonctionnalités expérimentales <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) et à faire des retours aux éditeur·ice·s de navigateurs et aux auteur·ice·s de standards.

Pour une technologie marquée **expérimentale**, une ou plusieurs des conditions suivantes s'appliquent&nbsp;:

- Elle est implémentée et activée par défaut uniquement dans la version stable d'un **seul** moteur de rendu de navigateur moderne.
- Elle n'est prise en charge qu'après modification de la configuration (préférences ou indicateurs), quel que soit le nombre de moteurs concernés.
- Sa spécification est susceptible d'évoluer de façon importante et non rétrocompatible (c'est-à-dire qu'elle peut casser du code existant qui s'appuie sur cette fonctionnalité).

> [!NOTE]
> Une fonctionnalité disponible uniquement sur un moteur de rendu est toujours considérée comme expérimentale, même si elle est accessible dans des versions de prévisualisation d'autres moteurs (ou via une préférence ou un indicateur).

Le statut **expérimental** d'une technologie peut expirer si une ou plusieurs des conditions suivantes sont réunies&nbsp;:

- Elle est prise en charge par défaut dans **au moins deux** moteurs de rendu de navigateurs majeurs.
- Elle est prise en charge par défaut par un seul moteur de rendu depuis deux ans ou plus, sans évolution majeure.
- Sa spécification n'est plus susceptible d'évoluer de façon à casser la compatibilité.

Pour des exemples de ces conditions, voir la documentation du [drapeau «&nbsp;experimental&nbsp;» <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-experimental) dans les BCD.

En général, si une technologie est prise en charge par plusieurs navigateurs majeurs, la spécification est stable, mais ce n'est pas toujours le cas.
À l'inverse, certaines technologies peuvent avoir une spécification stable sans être prises en charge nativement dans les navigateurs. [IMSC](/fr/docs/Related/IMSC) par exemple s'utilise via une prothèse d'émulation JavaScript.

Une fonctionnalité ou technologie faisant partie d'une spécification ou d'un processus de standardisation actif, et non marquée **dépréciée**, est dite «&nbsp;en cours de standardisation&nbsp;».

## Déprécié

Le terme **déprécié** sur MDN Web Docs sert à signaler une API ou une technologie qui n'est plus recommandée. Une API ou technologie dépréciée peut être supprimée à l'avenir ou conservée uniquement pour des raisons de compatibilité, et peut encore fonctionner. Il est conseillé d'éviter d'utiliser les fonctionnalités marquées comme dépréciées.

Pour plus d'informations sur la définition de **déprécié**, voir la documentation du [drapeau «&nbsp;deprecated&nbsp;» <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-deprecated) dans les BCD.

## Obsolète

Sur MDN Web Docs, le terme **obsolète** était historiquement utilisé pour désigner une API ou technologie non seulement déconseillée, mais aussi non implémentée dans les navigateurs.
La distinction entre **obsolète** et **déprécié** n'étant pas très utile, le terme **obsolète** n'est plus utilisé sur MDN Web Docs.

> [!NOTE]
> Si vous trouvez une occurrence de **obsolète**, elle doit être supprimée ou remplacée par le terme **déprécié**.

## Règles pour la suppression de contenu

Parfois, lors du développement d'une nouvelle spécification ou de l'évolution de standards vivants comme HTML, de nouveaux éléments, méthodes, propriétés, etc. sont ajoutés à la spécification, y restent un certain temps, puis sont retirés. Cela peut arriver très vite ou après plusieurs mois, voire années. Il peut donc être difficile de savoir comment gérer la suppression de ces éléments.

Voici quelques règles pour vous aider à décider quoi faire lorsqu'un élément est retiré d'une spécification.

> [!NOTE]
> Dans ce contexte, le mot «&nbsp;élément&nbsp;» désigne tout ce qui peut faire partie d'une spécification&nbsp;: un élément ou un attribut, une interface ou une méthode, une propriété ou tout autre membre d'une interface, etc.

### Si l'élément n'a jamais été implémenté

Si l'élément n'a _jamais_ été implémenté dans une version stable d'_aucun_ navigateur, même derrière une préférence ou un indicateur, supprimez toute référence à cet élément dans la documentation.

- Si l'élément possède une page de documentation dédiée (par exemple {{domxref("RTCPeerConnection.close()")}}), supprimez cette page.
  Si l'élément supprimé est une interface, cela implique de supprimer aussi les sous-pages décrivant ses propriétés et méthodes.
- Retirez l'élément de toutes les listes de propriétés, attributs, méthodes, etc. Pour les méthodes d'une interface, cela signifie le retirer de la section «&nbsp;Méthodes&nbsp;» de la page d'ensemble de l'interface.
- Recherchez dans le texte de la page d'ensemble de l'interface, de l'élément, etc., toute référence à l'élément supprimé. Supprimez ces références, en veillant à ne pas laisser de problèmes de grammaire ou de sens. Cela peut nécessiter de réécrire une phrase ou un paragraphe, voire de supprimer une section entière si la description est longue.
- Faites de même dans les guides et tutoriels sur l'API ou la technologie concernée. Supprimez les références, en veillant à la cohérence du texte.
- Recherchez sur MDN Web Docs d'autres mentions de l'élément supprimé, au cas où il serait évoqué ailleurs. Supprimez-les également.
- Si les fichiers JSON du [dépôt Browser Compatibility Data <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data) contiennent des données sur l'élément supprimé, supprimez ces objets du code JSON et soumettez une pull request, en expliquant la raison dans le message de commit et la description de la PR. Vérifiez bien de ne pas casser la syntaxe JSON.

### Si l'élément a été implémenté dans un navigateur derrière un indicateur

Si l'élément a été implémenté dans une version stable d'un ou plusieurs navigateurs, mais _uniquement_ derrière une préférence ou un indicateur, ne le supprimez pas immédiatement de la documentation. Marquez-le plutôt comme **déprécié** de la façon suivante&nbsp;:

- Mettez à jour le statut de l'élément dans le dépôt browser-compat-data en [soumettant une requête de tirage <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Recherchez dans le texte informatif de la page d'ensemble de l'interface, de l'élément, etc., toute référence à l'élément supprimé. Ajoutez des encadrés d'avertissement du type «&nbsp;[élément] a été retiré de la spécification et sera bientôt supprimé des navigateurs. Voir [lien vers la page] pour la nouvelle méthode.&nbsp;»
- Faites de même dans les guides et tutoriels sur l'API ou la technologie concernée.
- Recherchez sur MDN Web Docs d'autres mentions de l'élément supprimé, et ajoutez-y aussi des avertissements.
- Il pourra être décidé ultérieurement de supprimer l'élément de la documentation, notamment s'il était très peu utilisé ou peu pertinent.
- Mettez à jour les entrées concernées dans le [dépôt Browser Compatibility Data <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data) pour refléter l'obsolescence de l'élément.

### Si l'élément a été implémenté dans un navigateur sans indicateur

Si l'élément a été implémenté dans une ou plusieurs versions stables de navigateurs sans nécessiter de préférence ou d'indicateur, marquez-le comme **déprécié** de la façon suivante&nbsp;:

- Mettez à jour le statut de l'élément dans le dépôt browser-compat-data en [soumettant une requête de tirage <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Recherchez dans le texte informatif de la page d'ensemble de l'interface, de l'élément, etc., toute référence à l'élément supprimé. Ajoutez des encadrés d'avertissement du type «&nbsp;[élément] a été retiré de la spécification et est déprécié. Il pourra être supprimé des navigateurs à l'avenir, il est donc déconseillé de l'utiliser. Voir [lien vers la page] pour la nouvelle méthode.&nbsp;»
- Faites de même dans les guides et tutoriels sur l'API ou la technologie concernée.
- Recherchez sur MDN Web Docs d'autres mentions de l'élément supprimé, et ajoutez-y aussi des avertissements.
- Il est peu probable que ces éléments soient supprimés de la documentation prochainement, voire jamais.
- Mettez à jour les entrées concernées dans le [dépôt Browser Compatibility Data <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data) pour refléter la dépréciation de l'élément.

Merci de faire preuve de bon sens dans la formulation des messages d'avertissement et des modifications suggérées ci-dessus.
Chaque cas peut nécessiter une formulation ou un traitement particulier.
En cas de doute, n'hésitez pas à demander conseil sur les [salons de discussion MDN Web Docs](/fr/docs/MDN/Community/Communication_channels#salles_de_discussion).

## Règles pour documenter un conflit de spécification

Il arrive, rarement, qu'il y ait un conflit entre différentes versions de spécifications (généralement W3C contre WHATWG). Par exemple, une version peut indiquer qu'une fonctionnalité est dépréciée, alors qu'une autre non.
Dans ce cas, il faut tenir compte de la réalité, c'est-à-dire de ce que font réellement les navigateurs, et rédiger une note «&nbsp;important&nbsp;» pour résumer la situation la plus récente.
Par exemple, en janvier 2019, l'attribut global [`inputmode`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode) était en conflit, résumé ainsi&nbsp;:

> [!WARNING]
> Conflit de spécification&nbsp;: la spécification WHATWG liste [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) et les navigateurs modernes tendent à la prendre en charge.
> La [spécification W3C HTML 5.2 <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/index.html#contents), en revanche, ne la liste plus (c'est-à-dire la considère comme obsolète).
> Vous devez considérer la définition WHATWG comme correcte, jusqu'à ce qu'un consensus soit trouvé.

## Voir aussi

- Les [macros de statut de fonctionnalité](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
