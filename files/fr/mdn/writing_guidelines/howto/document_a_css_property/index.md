---
title: Comment documenter une propriété CSS
short-title: Documenter une propriété CSS
slug: MDN/Writing_guidelines/Howto/Document_a_CSS_property
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Au fur et à mesure que les normes [CSS](/fr/docs/Web/CSS) évoluent, de nouvelles propriétés sont ajoutées. La [référence CSS](/fr/docs/Web/CSS/Reference) sur MDN Web Docs doit être maintenue à jour avec ces développements. Cet article fournit des instructions pas à pas pour créer une page de référence des propriétés CSS.

Chaque page de référence des propriétés CSS suit la même structure. Cela permet au lectorat de trouver plus facilement les informations, surtout lorsqu'il est familiarisé avec le format standard des pages de référence.

> [!NOTE]
> La documentation de nouvelles propriétés CSS doit d'abord avoir lieu en anglais avant de pouvoir traduire le nouveau contenu en français. L'organisation du contenu de MDN ne permet pas de créer du contenu en français si celui-ci n'existe pas déjà en anglais.

## Étape 1 - Déterminer la propriété à documenter

Tout d'abord, vous devez déterminer la propriété CSS que vous souhaitez documenter. Vous avez peut-être remarqué qu'une page est manquante, ou vous avez peut-être vu des contenus manquants signalés dans notre [liste de problèmes du dépôt anglophone `mdn/content`](https://github.com/mdn/content/issues). Pour obtenir des détails sur la propriété CSS, vous devrez trouver une spécification pertinente (par exemple, une [spécification du W3C](https://www.w3.org/Style/CSS/) ou un rapport de bogue concernant une propriété non standard utilisée dans des moteurs de rendu tels que Gecko ou Blink).

> [!NOTE]
> Lorsque vous utilisez une spécification du W3C, utilisez toujours la version **brouillon d'éditeur** (<i lang="en">Editor's draft</i>) (notez la bannière rouge sur le côté gauche) et non une version publiée (par exemple, <i lang="en">Working Draft</i>). La version en <i lang="en">Editor's Draft</i> est toujours plus proche de la version finale&nbsp;!

Si l'implémentation et la spécification divergent, n'hésitez pas à le mentionner dans le bug d'implémentation. L'une des situations suivantes est possible&nbsp;:

- Il peut s'agir d'un bogue dans l'implémentation (et un bogue de suivi sera déposé).
- Cela peut être dû à un retard dans la publication d'une nouvelle spécification.
- Il peut s'agir d'une erreur dans la spécification (dans ce cas, un bogue de spécification mérite d'être déposé).

## Étape 2 - Vérifier la base de données des propriétés CSS dans `mdn/data`

Plusieurs caractéristiques d'une propriété CSS, comme sa syntaxe ou le fait qu'elle puisse être animée, sont mentionnées dans plusieurs pages et sont donc stockées dans une base de données ad hoc. Les macros que vous utiliserez sur la page ont besoin d'informations sur la propriété qui y est stockée, commencez donc par [vérifier que ces informations s'y trouvent](https://github.com/mdn/data/blob/main/docs/updating_css_json.md).

## Étape 3 - Créer la page de propriété CSS

Les préparatifs sont terminés&nbsp;! Nous pouvons maintenant ajouter la page de propriété CSS proprement dite. La manière la plus simple de créer une nouvelle page de propriété CSS est de copier le contenu d'une page de propriété CSS existante et de l'éditer pour la nouvelle propriété. Pour créer une nouvelle page, reportez-vous aux instructions de notre [guide de création de pages](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

Lorsque vous créez une page de référence, vous devez ajouter des exemples. Pour ce faire, [suivez ce tutoriel sur les exemples réels](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples). N'oubliez pas que la page de propriétés que vous créez concerne une seule propriété, de sorte que les exemples que vous ajoutez doivent montrer comment cette propriété fonctionne de manière isolée, et non comment l'ensemble de la spécification est utilisé. Par conséquent, les exemples pour la propriété `list-style-type` doivent montrer les résultats obtenus en utilisant différentes valeurs pour la propriété, et non la façon de la combiner avec d'autres propriétés, pseudo-classes ou pseudo-éléments pour obtenir des effets intéressants. Des tutoriels et des guides peuvent être rédigés par ailleurs pour en savoir plus.

## Étape 4 - Faire réviser le contenu

> [!NOTE]
> Si l'anglais n'est pas votre langue maternelle ou que vous ne l'utilisez pas couramment, n'hésitez pas à demander une relecture en français via le canal [#l10n-fr](https://chat.mozilla.org/#/room/#l10n-fr:mozilla.org) pour assurer la clarté de votre contribution.

Après avoir créé la page de la propriété, soumettez-la en tant que <i lang="en">Pull Request</i>. Un membre de notre équipe de révision sera automatiquement désigné pour réviser votre page.
