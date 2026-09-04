---
title: Utiliser les couleurs judicieusement
slug: Web/CSS/Guides/Colors/Using_color_wisely
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Choisir les bonnes couleurs pour un site web peut être délicat, surtout si vous n'avez pas de solides bases en art, en design ou au moins en théorie des couleurs. Un mauvais choix de couleur peut rendre votre site peu attrayant, ou pire, rendre le contenu illisible en raison de problèmes de contraste ou de couleurs conflictuelles. Utiliser les mauvaises couleurs peut rendre votre contenu totalement inutilisable pour les personnes ayant certains problèmes de vision, en particulier le daltonisme.

## Trouver les bonnes couleurs

Il existe des outils et des processus pour vous aider à choisir une bonne palette de couleurs. Bien qu'ils ne puissent pas remplacer un bon designer pour vous aider à prendre ces décisions, ils peuvent vous aider à démarrer.

### Couleur de base

La première étape consiste à choisir votre **couleur de base**. Cette couleur représente votre site web ou son sujet. Tout comme nous associons le vert à la boisson [Mountain Dew](<https://fr.wikipedia.org/wiki/Mountain_Dew_(marque_de_boisson)>) et le bleu au ciel ou à l'océan, choisir une couleur de base appropriée pour représenter votre site est un bon point de départ. Il existe de nombreuses façons de sélectionner une couleur de base&nbsp;; quelques idées incluent&nbsp;:

- Une couleur naturellement associée au sujet de votre contenu, comme la couleur existante identifiée avec un produit ou une idée, ou une couleur représentative de l'émotion que vous souhaitez transmettre.
- Une couleur provenant d'images associées à votre sujet. Si vous créez un site web sur un objet ou un produit donné, choisissez une couleur présente physiquement sur cet objet.
- Parcourir des sites web qui vous permettent de regarder de nombreuses palettes de couleurs et images existantes pour trouver de l'inspiration.

De nombreuses extensions de navigateur utiles peuvent vous aider à choisir des couleurs de base. Par exemple, l'extension de navigateur [ColorZilla <sup>(angl.)</sup>](https://www.colorzilla.com/) fournit un outil pipette pour choisir des couleurs à partir de n'importe quelle page web. Elle peut également calculer la moyenne des couleurs d'une zone d'une page.

Une «&nbsp;moyenne de couleur&nbsp;» est utile, car parfois ce qui peut sembler être un bloc de couleur uniforme peut en réalité être plusieurs couleurs liées, comme le bleu dans une photographie d'un océan ou du ciel. Un seul pixel de bleu sélectionné dans une photo peut donner une couleur qui semble déplacée.

### Enrichir la palette

Une fois que vous avez choisi votre couleur de base, l'étape suivante consiste à créer une palette de couleurs appropriées à associer à celle-ci. Plusieurs outils sont disponibles pour appliquer la théorie des couleurs à votre couleur de base et générer des couleurs complémentaires adaptées. Des outils en ligne, comme la [roue chromatique en ligne gratuite d'Adobe Color CC <sup>(angl.)</sup>](https://color.adobe.com/create/color-wheel), vous aident à choisir une palette de couleurs accessible.

Beaucoup de ces outils permettent également d'appliquer des filtres à votre palette afin de voir comment elle est perçue par des personnes atteintes de différentes formes de daltonisme. Consultez la section [Couleur et accessibilité](#couleur_et_accessibilité) pour une courte explication de l'importance de cette question.

Lors de la conception de votre palette, vous devez probablement la compléter avec quelques couleurs neutres de base telles que le blanc (ou presque blanc), le noir (ou presque noir) et une ou plusieurs nuances de gris.

> [!NOTE]
> En général, il est préférable d'utiliser le moins de couleurs possible. Utiliser la couleur pour mettre en valeur le contenu important plutôt que d'ajouter de la couleur partout a un plus grand impact et rend votre contenu plus lisible.

## Ressources sur la théorie des couleurs

Une présentation exhaustive de la théorie des couleurs dépasse le cadre de cet article, cependant, il existe de nombreux articles sur ce sujet. Nous avons trouvé les ressources suivantes particulièrement utiles&nbsp;:

- [Science des couleurs <sup>(angl.)</sup>](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy <sup>(angl.)</sup>](https://www.khanacademy.org/) en collaboration avec [Pixar <sup>(angl.)</sup>](https://www.pixar.com/))
  - : Un cours en ligne qui présente des concepts tels que la nature de la couleur, la façon dont elle est perçue et comment utiliser les couleurs pour exprimer des idées. Présenté par des artistes et des designers de Pixar.
- [Théorie des couleurs](https://fr.wikipedia.org/wiki/Th%C3%A9orie_de_la_couleur) sur Wikipedia
  - : L'article de Wikipedia sur la théorie des couleurs contient de nombreuses informations d'un point de vue technique. Il ne vous aide probablement pas dans votre processus de sélection des couleurs, mais il reste plein d'informations utiles.

## Couleur et accessibilité

Assurez-vous que votre contenu est [accessible](/fr/docs/Web/Accessibility). La couleur peut poser un problème {{Glossary("accessibility", "d'accessibilité")}} de plusieurs façons. Une utilisation inappropriée ou négligente de la couleur peut rendre un site web ou une application inutilisable pour une partie de votre public cible, ce qui entraîne une perte de trafic, une perte d'activité, voire un problème de relations publiques ou un procès. Il est donc important de réfléchir soigneusement à votre utilisation de la couleur.

Il est important de [comprendre la couleur et la luminance](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance) et de toujours prendre en compte le [daltonisme <sup>(angl.)</sup>](https://medlineplus.gov/colorblindness.html) et les [troubles vestibulaires](/fr/docs/Web/Accessibility/Guides/Seizure_disorders). Il en existe plusieurs types&nbsp;; le plus courant est le daltonisme rouge-vert, qui empêche les personnes de différencier les couleurs rouge et vert. Il en existe d'autres, allant de l'incapacité à distinguer certaines couleurs à l'incapacité totale de voir les couleurs. Il existe même des combinaisons de couleurs et d'animations qui peuvent provoquer des [crises](/fr/docs/Web/Accessibility/Guides/Seizure_disorders#couleurs) chez les utilisateur·ice·s photosensibles.

Un [contraste des couleurs <sup>(angl.)</sup>](https://digital.gov/guides/accessibility-for-teams/visual-design/#color-and-contrast) est souvent une bonne chose en matière d'accessibilité, lors de l'animation, en particulier rapide, [réduire le contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Seizure_disorders#réduire_le_constraste) sur les éléments animés réduit le risque de crise. Si vous incluez des animations, utilisez la fonctionnalité de requête {{CSSxRef("@media")}} [`prefers-reduced-motion`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) pour réduire les animations pour les utilisateur·ice·s ayant sélectionné cette préférence.

Cela dit, veillez à ce qu'il y ait un [contraste de couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) suffisant entre votre arrière-plan et le contenu au premier plan afin de garantir la lisibilité. De plus, n'utilisez jamais la couleur comme seul moyen de transmettre des informations. Si, par exemple, vous indiquez la réussite d'une opération par une bordure verte autour de l'élément d'interface utilisateur associé, et l'échec par une bordure rouge, les utilisateur·ice·s atteint·e·s de daltonisme rouge-vert ne peuvent pas utiliser votre site correctement. Utilisez plutôt à la fois du texte et des indicateurs de couleur pour inclure ces utilisateur·ice·s. Par exemple, une coche verte et une croix rouge sont préférables.

## Exemple de palette de design

Dans cet exemple, nous allons créer une palette de couleurs appropriée pour un site web d'un jeu se déroulant sur la planète Mars. Une [recherche Google de photos de Mars](https://www.google.com/search?q=Mars&tbm=isch) affiche plusieurs photos en couleur.

Utilisez un outil de sélection de couleurs pour choisir un échantillon de couleur pour la couleur de base. Pour cet exemple, nous avons sélectionné `#D79C7A`, qui est une couleur orange-rouge rouillée. Nous pouvons utiliser [Paletton <sup>(angl.)</sup>](https://www.paletton.com/) pour trouver les autres couleurs de notre palette. En ouvrant Paletton, nous voyons&nbsp;:

![Juste après le chargement de Paletton.](paletton1.png)

Ensuite, nous entrons le code hexadécimal de notre couleur (`D79C7A`) dans la case «&nbsp;Base RGB&nbsp;» en bas à gauche de l'outil&nbsp;:

![Après avoir entré la couleur de base](paletton2.png)

Nous voyons maintenant une palette monochromatique basée sur la couleur que nous avons choisie dans la photo de Mars. Si vous avez besoin de couleurs associées, celles-ci constituent probablement de bonnes options. Pour trouver une couleur d'accent qui ressort bien à côté de la couleur de base, nous cliquons sur le bouton «&nbsp;Ajouter une couleur complémentaire&nbsp;» situé sous le menu permettant de sélectionner le type de palette. La valeur par défaut était «&nbsp;Monochromatique&nbsp;». Paletton calcule une couleur d'accent appropriée&nbsp;; en cliquant sur la couleur d'accent dans le coin inférieur droit, on constate que cette couleur est `#508D7C`.

![Maintenant avec les couleurs complémentaires incluses.](paletton3.png)

Si la couleur proposée ne convient pas à vos besoins, vous pouvez changer le schéma de couleurs. Par exemple, si la couleur vert-bleu proposée ne convient pas, sélectionnez l'icône du schéma de couleurs Triade, ce qui donne le résultat suivant&nbsp;:

![Schéma de couleurs Triade sélectionné](paletton4.png)

Cliquez sur le bleu-gris en haut à droite. La couleur est `#556E8D`. Cela peut être utilisé comme couleur d'accent pour faire ressortir certains éléments, comme les titres, les onglets en surbrillance ou d'autres indicateurs sur le site&nbsp;:

![Détail de la couleur du schéma Triade](paletton-color-detail.png)

Nous avons maintenant notre couleur de base et notre couleur d'accent. Nous avons également quelques nuances complémentaires des deux, qui peuvent être utilisées pour créer des dégradés ou comme couleur d'accent pour indiquer le focus, par exemple pour les états de survol des liens. Les couleurs peuvent être exportées dans plusieurs formats pour que vous puissiez les utiliser.

Vous devriez également sélectionner des couleurs neutres. Trouvez une couleur qui offre suffisamment de contraste pour que votre texte soit net et lisible tout en veillant à ce qu'il ne soit pas agressif pour les yeux. Si le contraste est trop faible, votre texte est estompé par l'arrière-plan, le rendant illisible, mais si votre contraste est trop élevé, l'utilisateur·ice peut trouver votre site criard et désagréable à regarder.

## Couleur, arrière-plans, contraste et impression

Votre site peut apparaître très différemment à l'impression par rapport à l'affichage à l'écran. Lors de l'impression, l'utilisateur·ice peut choisir d'imprimer en noir et blanc uniquement. Par défaut, la plupart des navigateurs suppriment les couleurs d'arrière-plan et les images lors de l'impression.

Ce qui importe le plus est généralement le texte lui-même, mais si vos couleurs et images d'arrière-plan ont été choisies avec soin et sont essentielles à l'utilité du contenu, vous pouvez utiliser la propriété CSS {{CSSxRef("print-color-adjust")}} pour indiquer au navigateur de ne pas modifier l'apparence du contenu.

La valeur par défaut `print-color-adjust: economy` autorise le navigateur à effectuer des ajustements qu'il juge nécessaires pour optimiser la lisibilité ou l'économie d'encre selon le périphérique de sortie.

Vous pouvez définir `print-color-adjust: exact` pour indiquer que l'élément concerné est conçu pour fonctionner au mieux avec les couleurs et images telles quelles. Dans ce cas, le navigateur n'altère pas l'apparence de cet élément et l'affiche conformément à votre CSS.

> [!NOTE]
> Il n'existe toutefois aucune garantie que `print-color-adjust: exact` permette d'utiliser votre CSS exactement tel que fourni.
> Si le navigateur propose des préférences utilisateur pour modifier la sortie (par exemple une case à cocher «&nbsp;ne pas imprimer les arrière-plans&nbsp;» dans la boîte de dialogue d'impression), ces préférences priment sur la valeur de `print-color-adjust`.

## Voir aussi

- Le module [des couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- [Appliquer de la couleur aux éléments HTML en utilisant CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
- [Valeurs de couleur CSS](/fr/docs/Web/CSS/Guides/Colors/Color_values)
- [Utilisation des couleurs relatives](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Comprendre la couleur et la luminance](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1&nbsp;: Contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Paletton <sup>(angl.)</sup>](https://paletton.com/)
