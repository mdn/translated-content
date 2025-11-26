---
title: Comment ajouter des images et des médias
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{MDNSidebar}}

## Ajouter des images

Pour ajouter une image à un document, ajoutez le fichier image dans le dossier du document puis référencez l'image dans le fichier `index.md` du document en utilisant un élément `<img>` ou [la syntaxe Markdown équivalente](https://github.github.com/gfm/#images).

Prenons un exemple&nbsp;:

1. Commencez avec une branche de travail fraîche avec le contenu le plus récent de la branche `main` du dépôt distant du `translated-content`.

   ```bash
   cd ~/chemin/vers/mdn/translated-content
   git checkout main
   git pull translated-content main
   # Exécutez "yarn" à nouveau pour vous assurer
   # que vous avez installé la dernière dépendance Yari.
   yarn
   git checkout -b mes-images
   ```

2. Ajoutez votre image au dossier du document. Pour cet exemple, supposons que nous ajoutons une nouvelle image au document `files/fr/web/css`.

   ```bash
   cd ~/chemin/vers/mdn/translated-content
   cp ../un/chemin/vers/ma-superbe-image.png files/fr/web/css/
   ```

3. **Dans le répertoire de votre copie locale de `mdn/content`**, exécutez `filecheck` sur chaque image, ce dernier vous alerte si quelque chose ne va pas. Pour plus de détails, consultez la section [Compression des images](#compression-des-images).

   ```bash
   yarn filecheck /chemin/vers/translated-content/files/fr/web/css/ma-superbe-image.png
   ```

4. Référencez votre image dans le document avec un élément `<img>` et un attribut `alt` dans `files/fr/web/css/index.md`&nbsp;:

   ```html
   <img src="ma-superbe-image.png" alt="Ma superbe image" />
   ```

5. Ajoutez et livrez (<i lang="en">commit</i> en anglais) tous les fichiers supprimés, créés et modifiés, puis poussez votre branche vers votre fork&nbsp;:

   ```bash
   git add files/fr/web/css/ma-superbe-image.png files/fr/web/css/index.html
   git commit
   git push -u origin mes-images
   ```

6. Vous êtes maintenant prêt à créer votre [requête de tirage (<i lang="en">pull request</i> en anglais)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

## Ajouter les textes alternatifs aux images

Chaque image, `![]` et `<img>`, doit inclure un texte alternatif. Les attributs `alt` doivent être courts et fournir toutes les informations pertinentes que l'image transmet. Lorsque vous écrivez la description de l'image, réfléchissez aux informations précieuses de l'image et à la façon dont vous les transmettriez à quelqu'un qui peut lire le contenu de la page mais ne peut pas charger les images.

> [!NOTE]
> Voir [la documentation sur l'attribut `alt` de `<img>` et notamment la façon d'écrire des textes alternatifs pertinents](/fr/docs/Web/HTML/Reference/Elements/img#écrire_des_descriptions_alternatives_significatives).

Soyez sûr que le texte alternatif de l'image est basé sur son contexte. Si la photo de Fluffy le chien est un avatar à côté d'un avis pour la nourriture pour chien Yuckymeat, `alt="Fluffy"` est approprié. Si la même photo fait partie de la page d'adoption de Fluffy, les informations transmises dans l'image sont pertinentes pour les futurs parents de chiens, telles que `alt="Fluffy, un terrier tricolore à poil très court, avec une balle de tennis dans la bouche."`. Le texte environnant indique probablement la taille et la race de Fluffy, il serait donc redondant de l'inclure. Évitez de décrire l'image avec trop de détails&nbsp;: le futur parent n'a pas besoin de savoir si le chien est à l'intérieur ou à l'extérieur, ou s'il a un collier rouge et une laisse bleue.

Avec les captures d'écran, écrivez ce que vous apprenez de l'image, ne détaillez pas le contenu de la capture d'écran et omettez les informations dont les lecteurs n'ont pas besoin ou qu'ils connaissent déjà. Par exemple, si vous êtes sur une page expliquant comment modifier les paramètres de Bing, si vous avez une capture d'écran d'un résultat de recherche Bing, n'incluez pas le terme de recherche ou le nombre de résultats, etc., car ce ne sont pas le but de l'image. Limitez l'attribut `alt` au sujet en question&nbsp;: comment modifier les paramètres dans Bing. L'attribut `alt` pourrait être `alt="L'icône des paramètres se trouve dans la barre de navigation sous le champ de recherche."`. N'incluez pas «&nbsp;capture d'écran&nbsp;» ou «&nbsp;Bing&nbsp;» car l'utilisateur n'a pas besoin de savoir qu'il s'agit d'une capture d'écran et il sait déjà que c'est Bing, car il est sur une page expliquant comment modifier les paramètres de Bing.

La syntaxe en markdown et HTML&nbsp;:

```html-nolint
![<texte-alternatif>](<url-de-l-image>)
<img alt="<texte-alternatif>" src="<url-de-l-image>">
```

Exemples&nbsp;:

```html
![Logo OpenWebDocs : Carle la chenille](carle.png)
<img alt="Logo OpenWebDocs : Carle la chenille" src="carle.png" />
```

Alors que les images purement décoratives doivent avoir un attribut `alt` vide, les images ajoutées à la documentation MDN doivent avoir une raison d'être, et nécessitent donc une description sous forme de chaîne non vide.

## Compression des images

Lorsque vous ajoutez des images à une page du MDN Web Docs, vous devez vous assurer qu'elles sont compressées autant que possible (sans dégradation de la qualité) afin de réduire la taille du téléchargement pour nos lectrices et lecteurs. L'absence de compression entraînera l'échec de l'intégration continue, qui vous avertira que certaines de vos images sont trop volumineuses.

La meilleure façon de compresser les images est d'utiliser l'outil de compression intégré. Vous pouvez compresser une image de manière appropriée en utilisant la commande `filecheck` avec l'option `--save-compression`. Cette option compresse l'image autant que possible et remplace l'original par la version compressée. Par exemple, **depuis le répertoire de votre copie locale de `mdn/content`**&nbsp;:

```bash
yarn filecheck /chemin/vers/translated-content/files/fr/web/css/ma-superbe-image.png --save-compression
```

## Ajouter des vidéos

MDN Web Docs n'est pas un site très riche en vidéos, mais il y a certains endroits où il est judicieux d'utiliser du contenu vidéo dans un article. Cet article examine les cas où il est approprié d'inclure des vidéos dans les articles et donne des conseils sur la façon de créer des vidéos simples mais efficaces avec un budget limité.

Plusieurs arguments s'opposent à l'utilisation de vidéos dans la documentation technique, en particulier dans les documents de référence et les guides de niveau avancé. Certains d'entre eux sont énumérés ci-dessous&nbsp;:

- La vidéo est linéaire. Les gens n'ont pas tendance à lire la documentation en ligne de manière linéaire, en commençant par le début et en lisant jusqu'à la fin. _Ils scannent_. La vidéo est vraiment difficile à scanner ainsi&nbsp;: elle oblige la personne à consommer le contenu du début à la fin.
- La vidéo est moins dense en informations que le texte. Il faut plus de temps pour consommer une vidéo expliquant quelque chose que pour lire les instructions équivalentes.
- La vidéo est volumineuse en termes de taille de fichier et, par conséquent, plus coûteuse et moins performante que le texte.
- La vidéo pose des problèmes d'accessibilité&nbsp;: elle est généralement plus coûteuse à produire que le texte, mais surtout à traduire ou à rendre utilisable par les utilisateurs de lecteurs d'écran.
- Dans le prolongement du dernier point, la vidéo est beaucoup plus difficile à éditer/mettre à jour/maintenir que le contenu textuel.

> [!NOTE]
> Il est utile de garder à l'esprit cette problématique, même lorsque vous réalisez des vidéos, afin d'essayer d'en atténuer certains aspects.

Il existe de nombreux sites populaires qui fournissent de nombreux tutoriels vidéo. MDN n'est pas un site dont la majorité du contenu est de la vidéo, toutefois, il est possible d'intégrer des vidéos dans certains articles MDN selon le contexte.

Sur MDN, les vidéos sont particulièrement utilisées lorsqu'on souhaite décrire une suite d'instruction ou un procédé en plusieurs étapes qu'il serait difficile d'exprimer de façon concise avec du texte. Cela s'avère notamment utile lorsqu'on tente de décrire des procédés qui utilisent plusieurs applications ou fenêtres et qui incluent des interactions avec l'interface graphique qui pourraient ne pas être simples à décrire : _«&nbsp;maintenant, cliquez sur le bouton situé en haut à gauche et qui ressemble à un canard&nbsp;»_.

Dans de telles situations, il est souvent plus pratique de **montrer** ce qu'on indique.

### Lignes de conduite pour les vidéos

Une vidéo à destination de MDN devrait être&nbsp;:

- Courte
  - : On essaiera d'avoir des vidéos dont la durée est inférieure à 30 secondes, idéalement inférieure à 20 secondes. Elle sera ainsi suffisamment courte pour ne pas demander un temps d'attention trop long au spectateur ou à la spectatrice.
- Simple
  - : On essaiera de garder un cheminement simple avec 2 à 4 fragments distincts pour que les étapes soient faciles à suivre.
- Silencieuse
  - : Le son permet d'avoir des vidéos plus impactantes mais demande également plus de temps pour la réalisation et l'implication d'un spectateur ou d'une spectatrice qui peut ne pas pouvoir écouter au moment où il/elle regarde la vidéo. Cela peut également rallonger la vidéo et rajoute des coûts de maintenance et de localisation.

Pour expliquer quelque chose de complexe, on pourra utiliser un ensemble de vidéos courtes et de captures d'écran avec du texte. Le texte permettra ainsi d'insister sur les notions vues dans les vidéos et la personne qui consulte le contenu pourra alors choisir de suivre le texte et/ou la vidéo.

De plus, on fera attention aux conseils suivants&nbsp;:

- La vidéo sera uploadée sur YouTube avant d'être intégrée à la page MDN. On recommande un format 16:9 afin que tout le cadre soit rempli et qu'il n'y ait pas de barres noires. Voici quelques résolutions qui peuvent être utilisées&nbsp;: 1024×576, 1152×648 ou 1280×720.
- La vidéo devra être enregistrée en HD afin qu'elle ait le meilleur aspect possible lors de l'<i lang="en">upload</i>.
- Le curseur de la souris ne doit pas couvrir les éléments qu'on souhaite indiquer.
- Si c'est utile, on configurera l'outil d'enregistrement afin d'enregistrer les clics et/ou le pointeur de la souris.

### Lignes de conduite pour les outils de vidéo

Il vous faudra un outil pour enregistrer la vidéo. Il en existe une variété allant d'outils gratuits à payants, de simples à complexes. Si vous avez déjà créé du contenu vidéo&nbsp;: parfait. Sinon, nous vous conseillons de commencer avec un outil simple, puis de choisir ensuite quelque chose de plus complexe si besoin.

Le tableau qui suit fournit quelques recommandations d'outils pour commencer.

| Outil                     | Système d'exploitation | Coût          | Fonctionnalités de post-production&nbsp;? |
| ------------------------- | ---------------------- | ------------- | ----------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux  | Gratuit       | Oui                                       |
| CamStudio                 | Windows                | Gratuit       | Limitées                                  |
| Camtasia                  | Windows, macOS         | Élevé         | Oui                                       |
| QuickTime Player          | macOS                  | Gratuit       | Aucune                                    |
| ScreenFlow                | macOS                  | Intermédiaire | Oui                                       |
| Kazam                     | Linux                  | Gratuit       | Minimales                                 |

#### Conseils pour QuickTime

Si vous utilisez macOS, Quicktime Player est disponible et dispose de quelques fonctionnalités pour l'enregistrement&nbsp;:

1. Choisissez _Fichier_ > _Nouvel enregistrement d'écran_ à partir du menu principal.
2. Dans la boîte _Enregistrement d'écran_, utilisez le bouton d'enregistrement (le bouton rouge).
3. Dessinez un rectangle sur la zone de l'écran que vous souhaitez enregistrer.
4. Appuyez sur le bouton _Démarrer l'enregistrement_.
5. Effectuez les actions que vous souhaitez enregistrer.
6. Appuyez sur le bouton _Stop_.
7. Choisissez _Fichier_ > _Exporter en tant que…_ > _1080p_ à partir du menu principal afin d'avoir une définition suffisamment élevée.

#### Autres ressources

- [Comment ajouter des boîtes de légende personnalisées aux <i lang="en">screencasts</i> dans Screenflow (en anglais)](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

### Étapes de création d'une vidéo

Les sections qui suivent décrivent les étapes principales à suivre pour créer une vidéo et l'intégrer à une page MDN.

#### Préparation

Tout d'abord, planifiez la suite d'actions que vous souhaitez enregistrer et choisissez les meilleures façons de commencer et de finir.

Assurez-vous que votre arrière-plan de bureau et votre profil de navigateur soient vierges. Planifier les tailles et le positionnement des fenêtres, notamment si vous utilisez plusieurs fenêtres.

Planifiez soigneusement les étapes que vous allez enregistrer et pratiquez cette séquence d'actions plusieurs fois avant d'enregistrer&nbsp;:

- Ne commencez pas une vidéo au milieu d'une suite d'étape. Veillez à ce qu'il y ait suffisamment de contexte pour que les actions illustrées aient du sens.
- Pour chacune de vos actions, assurez-vous de les réaliser suffisamment lentement et de les mettre en évidence. Par exemple, lorsqu'on doit cliquer quelque part on pourra&nbsp;:
  - Déplacer la souris sur l'icône
  - Mettre en évidence ou zoomer (selon ce qui est le plus pertinent)
  - Suspendre le mouvement pendant un instant
  - Cliquer sur l'icône

- Planifiez les niveaux de zoom pour les portions de l'interface utilisateur que vous afficherez. Tout le monde ne pourra pas forcément consulter la vidéo en haute définition. Vous pourrez également zoomer sur certaines parties en post-production mais ça peut être une bonne idée de zoomer dès l'enregistrement.

> [!NOTE]
> Ne zoomez pas au point que les éléments d'interfaces soient déformés ou semblent étranges.

#### Enregistrement

Lorsque vous enregistrez, avancez dans les étapes de façon calme et régulière. Effectuez des pauses d'une seconde ou deux aux moments importants (lorsqu'il faut cliquer sur un bouton par exemple) et assurez-vous que le pointeur de la souris n'occulte pas d'icône ou de texte important.

N'oubliez pas de faire une pause d'une ou deux secondes à la fin pour montrer le résultat final de la séquence d'actions.

> [!NOTE]
> Si vous utilisez un outil simple comme QuickTime Player ou que vous ne pouvez pas effectuer de post-production, veillez à ce que la fenêtre soit de la bonne taille pour ce que vous voulez montrer.

#### Post-production

En post-production, vous pourrez mettre en avant certains éléments notamment grâce à&nbsp;:

- Du zoom sur certaines parties de l'écran.
- L'atténuation de l'arrière-plan.

Mettez en avant les moments clés et les détails difficiles à voir comme les clics sur une icône donnée ou la saisie d'une URL particulière. La mise en avant doit durer au moins 1 à 2 secondes et il sera généralement utile d'ajouter une courte transition (200 à 300 millisecondes) au début et à la fin de la mise en évidence.

Attention à ne pas abuser de ces effets, on ne veut pas que les spectateurs aient le mal de mer à force de voir des zooms/dézooms.

Si besoin, redimensionnez la vidéo aux proportions souhaitées.

#### <i lang="en">Upload</i>

Actuellement, les vidéos doivent être uploadées sur YouTube afin d'être affichées sur MDN, par exemple sur la chaîne [mozhacks](https://www.youtube.com/user/mozhacks/videos). Demandez à un membre de l'équipe MDN de téléverser la vidéo si vous n'avez pas un meilleur endroit où la stocker.

> [!NOTE]
> Marquez la vidéo en «&nbsp;non répertoriée&nbsp;» si celle-ci n'a pas de sens particulier en dehors du contexte de la page MDN.

#### Intégration

Une fois la vidéo uploadée, vous pouvez intégrer la vidéo à la page avec la macro [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs). Elle permet d'insérer la vidéo à l'emplacement de la macro&nbsp;:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Cette macro utilise un seul argument qui correspond à la fin de l'URL de la vidéo. Ainsi, pour afficher la vidéo disponible à l'URL `https://www.youtube.com/watch?v=ELS2OOUvxIw`, on appellera la macro ainsi&nbsp;:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
