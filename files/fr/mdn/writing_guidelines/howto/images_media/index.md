---
title: Contenu vidéo sur MDN
slug: MDN/Writing_guidelines/Howto/Images_media
---

{{MDNSidebar}}

MDN n'est pas un site contenant beaucoup de vidéos. Toutefois, certaines documentations sont propices à ce type de média. Dans cet article, nous verrons quand inclure des vidéos sur MDN et quelques conseils permettant de créer des vidéos simples et efficaces.

## Quand utiliser des vidéos sur MDN

L'utilisation de vidéo pour de la documentation technique n'est pas indiquée par défaut pour plusieurs raisons&nbsp;:

- Une vidéo est linéaire. Les personnes ne consultent pas la documentation de façon linéaire, du début à la fin&nbsp;: [ils scannent la documentation](https://www.sensible.com/chapter.html). Faire de même pour une vidéo est quasi impossible et cela force à visualiser le contenu de A à Z.
- Une vidéo possède une densité d'information plus faible que le texte. Il faut plus de temps pour regarder une vidéo expliquant une notion que de lire un article texte équivalent.
- Une vidéo a un poids numérique plus élevé et est donc plus coûteuse et moins performante que le texte.
- Une vidéo peut poser des problèmes d'accessibilité&nbsp;: elle est plus coûteuse à réaliser, à localiser ou à rendre accessible aux personnes qui utilisent des lecteurs d'écran.
- Enfin, une vidéo est beaucoup plus difficile à éditer/mettre à jour/maintenir que du texte.

> **Note :** Il est important de garder ces limitations en tête lorsqu'on réalise des vidéos afin de les minimiser autant que possible.

Il existe de nombreux sites populaires qui fournissent de nombreux tutoriels vidéo. MDN n'est pas un site dont la majorité du contenu est de la vidéo, toutefois, il est possible d'intégrer des vidéos dans certains articles MDN selon le contexte.

Sur MDN, les vidéos sont particulièrement utilisées lorsqu'on souhaite décrire une suite d'instruction ou un procédé en plusieurs étapes qu'il serait difficile d'exprimer de façon concise avec du texte. Cela s'avère notamment utile lorsqu'on tente de décrire des procédés qui utilisent plusieurs applications ou fenêtres et qui incluent des interactions avec l'interface graphique qui pourraient ne pas être simples à décrire : _«&nbsp;maintenant, cliquez sur le bouton situé en haut à gauche et qui ressemble à un canard&nbsp;»_.

Dans de telles situations, il est souvent plus pratique de **montrer** ce qu'on indique.

## À quoi doit ressembler une vidéo sur MDN&nbsp;?

Une vidéo à destination de MDN devrait être&nbsp;:

- **Courte**&nbsp;: On essaiera d'avoir des vidéos dont la durée est inférieure à 30 secondes, idéalement inférieure à 20 secondes. Elle sera ainsi suffisamment courte pour ne pas demander un temps d'attention trop long au spectateur ou à la spectatrice.
- **Simple**&nbsp;: On essaiera de garder un cheminement simple avec 2 à 4 fragments distincts pour que les étapes soient faciles à suivre.
- **Silencieuse**&nbsp;: Le son permet d'avoir des vidéos plus impactantes mais demande également plus de temps pour la réalisation et l'implication d'un spectateur ou d'une spectatrice qui peut ne pas pouvoir écouter au moment où il/elle regarde la vidéo. Cela peut également rallonger la vidéo et rajoute des coûts de maintenance et de localisation.

Pour expliquer quelque chose de complexes, on pourra utiliser un ensemble de vidéos courtes et de captures d'écran avec du texte. Le texte permettra ainsi d'insister sur les notions vues dans les vidéos et la personne qui consulte le contenu pourra alors choisir de suivre le texte et/ou la vidéo.

De plus, on fera attention aux conseils suivants&nbsp;:

- La vidéo sera uploadée sur YouTube avant d'être intégrée à la page MDN. On recommande un format 16:9 afin que tout le cadre soit rempli et qu'il n'y ait pas de barres noires. Voici quelques résolutions qui peuvent être utilisées&nbsp;: 1024×576, 1152×648 ou 1280×720.
- La vidéo devra être enregistrée en HD afin qu'elle ait le meilleur aspect possible lors de l'<i lang="en">upload</i>.
- Le curseur de la souris ne doit pas couvrir les éléments qu'on souhaite indiquer.
- Si c'est utile, on configurera l'outil d'enregistrement afin d'enregistrer les clics et/ou le pointeur de la souris.

## Outils

Il vous faudra un outil pour enregistrer la vidéo. Il en existe une variété allant d'outils gratuits à payants, de simples à complexes. Si vous avez déjà créé du contenu vidéo&nbsp;: parfait. Sinon, nous vous conseillons de commencer avec un outil simple puis de choisir ensuite quelque chose de plus complexe si besoin.

Le tableau qui suit fournit quelques recommandations d'outils pour commencer.

| Outil                     | Système d'exploitation | Coût          | Fonctionnalités de post-production&nbsp;? |
| ------------------------- | ---------------------- | ------------- | ----------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux  | Gratuit       | Oui                                       |
| CamStudio                 | Windows                | Gratuit       | Limitées                                  |
| Camtasia                  | Windows, macOS         | Élevé         | Oui                                       |
| QuickTime Player          | macOS                  | Gratuit       | Aucune                                    |
| ScreenFlow                | macOS                  | Intermédiaire | Oui                                       |
| Kazam                     | Linux                  | Gratuit       | Minimales                                 |

### Conseils pour QuickTime

Si vous utilisez macOS, Quicktime Player est disponible et dispose de quelques fonctionnalités pour l'enregistrement&nbsp;:

1. Choisissez _Fichier_ > _Nouvel enregistrement d'écran_ à partir du menu principal.
2. Dans la boîte _Enregistrement d'écran_, utilisez le bouton d'enregistrement (le bouton rouge).
3. Dessinez un rectangle sur la zone de l'écran que vous souhaitez enregistrer.
4. Appuyez sur le bouton _Démarrer l'enregistrement_.
5. Effectuez les actions que vous souhaitez enregistrer.
6. Appuyez sur le bouton _Stop_.
7. Choisissez _Fichier_ > _Exporter en tant que…_ > _1080p_ à partir du menu principal afin d'avoir une définition suffisamment élevée.

### Autres ressources

- [Comment ajouter des boîtes de légende personnalisées aux <i lang="en">screencasts</i> dans Screenflow (en anglais)](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Étapes de création d'une vidéo

Les sections qui suivent décrivent les étapes principales à suivre pour créer une vidéo et l'intégrer à une page MDN.

### Préparation

Tout d'abord, planifiez la suite d'actions que vous souhaitez enregistrer et choisissez les meilleures façons de commencer et de finir.

Assurez-vous que votre arrière-plan de bureau et votre profil de navigateur soient vierges. Planifier les tailles et le positionnement des fenêtres, notamment si vous utilisez plusieurs fenêtres.

Planifiez soigneusement les étapes que vous allez enregistrer et pratiquez cette séquence d'actions plusieurs fois avant d'enregistrer&nbsp;:

- Ne commencez pas une vidéo au milieu d'une suite d'étape. Veillez à ce que le spectateur ait suffisamment de contexte pour que les actions illustrées aient du sens.
- Pour chacune de vos actions, assurez-vous de les réaliser suffisamment lentement et de les mettre en évidence. Par exemple, lorsqu'on doit cliquer quelque part on pourra&nbsp;:

  1. Déplacer la souris sur l'icône
  2. Mettre en évidence ou zoomer (selon ce qui est le plus pertinent)
  3. Suspendre le mouvement pendant un instant
  4. Cliquer sur l'icône

- Planifiez les niveaux de zoom pour les portions de l'interface utilisateur que vous afficherez. Tout le monde ne pourra pas forcément consulter la vidéo en haute définition. Vous pourrez également zoomer sur certaines parties en post-production mais ça peut être une bonne idée de zoomer dès l'enregistrement.

> **Note :** Ne zoomez pas au point que les éléments d'interfaces soient déformés ou semblent étranges.

### Enregistrement

Lorsque vous enregistrez, avancez dans les étapes de façon calme et régulière. Effectuez des pauses d'une seconde ou deux aux moments importants (lorsqu'il faut cliquer sur un bouton par exemple) et assurez-vous que le pointeur de la souris n'occulte pas d'icône ou de texte important.

N'oubliez pas de faire une pause d'une ou deux secondes à la fin pour montrer le résultat final de la séquence d'actions.

> **Note :** Si vous utilisez un outil simple comme QuickTime Player ou que vous ne pouvez pas effectuer de post-production, veillez à ce que la fenêtre soit de la bonne taille pour ce que vous voulez montrer.

### Post-production

En post-production, vous pourrez mettre en avant certains éléments notamment grâce à&nbsp;:

- Du zoom sur certaines parties de l'écran.
- L'atténuation de l'arrière-plan.

Mettez en avant les moments clés et les détails difficiles à voir comme les clics sur une icône donnée ou la saisie d'une URL particulière. La mise en avant doit durer au moins 1 à 2 secondes et il sera généralement utile d'ajouter une courte transition (200 à 300 millisecondes) au début et à la fin de la mise en évidence.

Attention à ne pas abuser de ces effets, on ne veut pas que les spectateurs aient le mal de mer à force de voir des zooms/dézooms.

Si besoin, redimensionnez la vidéo aux proportions souhaitées.

### <i lang="en">Upload</i>

Actuellement, les vidéos doivent être uploadées sur YouTube afin d'être affichées sur MDN.

> **Note :** Marquez la vidéo en «&nbsp;non répertoriée&nbsp;» si celle-ci n'a pas de sens particulier en dehors du contexte de la page MDN.

### Intégration

Une fois la vidéo uploadée, vous pouvez intégrer la vidéo à la page avec la macro [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs). Elle permet d'insérer la vidéo à l'emplacement de la macro&nbsp;:

```
\{{EmbedYouTube("you-tube-url-slug")}}
```

Cette macro utilise un seul argument qui correspond à la fin de l'URL de la vidéo. Ainsi, pour afficher la vidéo disponible à l'URL `https://www.youtube.com/watch?v=ELS2OOUvxIw`, on appellera la macro ainsi&nbsp;:

```
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
