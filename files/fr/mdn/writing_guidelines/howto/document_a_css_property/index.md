---
title: Comment documenter une propriété CSS
slug: MDN/Writing_guidelines/Howto/Document_a_CSS_property
---

{{MDNSidebar}}

Au fur et à mesure que les normes [CSS](/fr/docs/Web/CSS) évoluent, de nouvelles propriétés sont ajoutées. La [référence CSS](/fr/docs/Web/CSS/Reference) sur MDN Web Docs doit être maintenue à jour avec ces développements. Cet article fournit des instructions pas à pas pour créer une page de référence des propriétés CSS.

Chaque page de référence des propriétés CSS suit la même structure. Cela permet au lectorat de trouver plus facilement les informations, surtout lorsqu'il est familiarisé avec le format standard des pages de référence.

## Étape 1 - Déterminer la propriété à documenter

Tout d'abord, vous devez déterminer la propriété CSS que vous souhaitez documenter. Vous avez peut-être remarqué qu'une page est manquante, ou vous avez peut-être vu des contenus manquants signalés dans notre [liste de problèmes](https://github.com/mdn/translated-content/issues). Pour obtenir des détails sur la propriété CSS, vous devrez trouver une spécification pertinente (par exemple, une [spécification du W3C](https://www.w3.org/Style/CSS/) ou un rapport de bogue concernant une propriété non standard utilisée dans des moteurs de rendu tels que Gecko ou Blink).

> **Note:** Lorsque vous utilisez une spécification du W3C, utilisez toujours le **projet de l'éditeur** (notez la bannière rouge sur le côté gauche) et non une version publiée (par exemple, Working Draft). Le projet de l'éditeur est toujours plus proche de la version finale !

Si l'implémentation et la spécification divergent, n'hésitez pas à le mentionner dans le bug d'implémentation. L'une des situations suivantes est possible :

- Il peut s'agir d'un bogue dans l'implémentation (et un bogue de suivi sera déposé).
- Cela peut être dû à un retard dans la publication d'une nouvelle spécification.
- Il peut s'agir d'une erreur dans la spécification (dans ce cas, un bogue de spécification mérite d'être déposé).

## Étape 2 - Vérifier la base de données des propriétés CSS

Plusieurs caractéristiques d'une propriété CSS, comme sa syntaxe ou le fait qu'elle puisse être animée, sont mentionnées dans plusieurs pages et sont donc stockées dans une base de données ad hoc. Les macros que vous utiliserez sur la page ont besoin d'informations sur la propriété qui y est stockée, commencez donc par [vérifier que ces informations s'y trouvent](https://github.com/mdn/data/blob/main/docs/updating_css_json.md).

## Étape 3 - Créer la page de propriétés CSS

Les préparatifs sont terminés ! Nous pouvons maintenant ajouter la page de propriété CSS proprement dite. La manière la plus simple de créer une nouvelle page de propriété CSS est de copier le contenu d'une page de propriété CSS existante et de l'éditer pour la nouvelle propriété. Pour créer une nouvelle page, reportez-vous aux instructions de notre [guide de création de pages](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

Lorsque vous créez une page de référence, vous devez ajouter des exemples. Pour ce faire, [suivez ce tutoriel sur les exemples réels](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples). N'oubliez pas que la page de propriétés que vous créez concerne une seule propriété, de sorte que les exemples que vous ajoutez doivent montrer comment cette propriété fonctionne de manière isolée, et non comment l'ensemble de la spécification est utilisé. Par conséquent, les exemples pour la propriété `list-style-type` doivent montrer les résultats obtenus en utilisant différentes valeurs pour la propriété, et non la façon de la combiner avec d'autres propriétés, pseudo-classes ou pseudo-éléments pour obtenir des effets intéressants. Des tutoriels et des guides peuvent être rédigés pour en savoir plus.

## Étape 4 - Faire réviser le contenu

Après avoir créé la page de la propriété, soumettez-la en tant que [<i lang="en">Pull Request</i>](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). Un membre de notre équipe de révision sera automatiquement désigné pour réviser votre page.
