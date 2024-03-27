---
title: Comment s'informer sur une technologie
slug: MDN/Writing_guidelines/Howto/Research_technology
---

{{MDNSidebar}}

Cet article vous fournit des informations pratiques sur la manière d'aborder la documentation des technologies.

## Travail préparatoire

Avant de commencer à documenter ou à mettre à jour quelque chose sur MDN Web Docs, il y a certaines choses que vous devriez préparer et planifier avant de commencer à écrire.

On suppose qu'avant de lire ce guide, vous avez une connaissance raisonnable de ce qui suit :

- Technologies web telles que HTML, CSS et JavaScript.
- Lecture des spécifications des technologies web. Vous les consulterez souvent lorsque vous documenterez les API.

Tout le reste peut être appris en cours de route.

### Vérifier les ressources

Les ressources utiles pour rédiger toute documentation comprennent :

1. **Les [guides des bonnes pratiques](/fr/docs/MDN/Writing_guidelines/Howto) pour MDN Web Docs :** Vous êtes déjà ici, mais il est bon de parcourir tous les articles et de vous familiariser avec notre style d'écriture, les différents types de pages et les sections qu'elles incluent, ainsi que les différentes manières dont nous intégrons différentes parties de la page (comme les spécifications et la compatibilité des navigateurs).
2. **La spécification la plus récente :** Différents organismes de normalisation créent des spécifications pour les technologies documentées sur MDN Web Docs. Par exemple, [TC39](https://tc39.es/fr/) pour JavaScript, [WHATWG <sup>(en-US)</sup>](https://whatwg.org/) pour HTML, et le [W3C <sup>(en-US)</sup>](https://www.w3.org/) pour CSS, XML, et certaines Web APIs. Les spécifications sont liées aux pages de référence sur MDN Web Docs (consultez la section "Spécifications"). Alternativement, vous pouvez généralement effectuer une recherche sur le web. Travaillez toujours à partir de la spécification la plus récente et la plus à jour.
3. **Les navigateurs web modernes les plus récents :** Il s'agit généralement de versions expérimentales/alpha telles que [Firefox Nightly](https://www.mozilla.org/fr/firefox/channel/desktop/#nightly), [Chrome Canary](https://www.google.com/intl/fr/chrome/canary/) ou [Safari Technology Preview <sup>(en-US)</sup>](https://webkit.org/downloads/), qui sont plus susceptibles de prendre en charge les fonctionnalités que vous documentez. Ceci est particulièrement pertinent si vous documentez une fonctionnalité "à venir"..
4. **Démos/articles de blog/autres infos :** Trouvez autant d'informations que possible. Si vous mettez à jour une technologie parce qu'elle a changé, assurez-vous que les ressources que vous utilisez pour apprendre ne sont pas obsolètes. C'est pourquoi les deux premiers points ci-dessus sont importants.

### Lire des spécifications

Cela peut sembler un peu étranger au début, mais plus vous le faites, plus vous vous y habituez. Voici quelques liens utiles pour vous aider à démarrer :

- [Comment lire une spécification du W3C](https://www.pompage.net/traduction/lirespec) par J. David Eisenberg traduit depuis A List Apart
- [Comprendre les spécifications CSS](https://www.w3.org/Style/CSS/read.fr.html) du W3C
- [How to read web specs part I – or: WebVR, how do you work? <sup>(en-US)</sup>](https://surma.dev/things/reading-specs/) explique comment lire la spécification WebVR en particulier, mais c'est une excellente introduction à la lecture des spécifications des API Web.
- [How to read web specs part IIa – or: ECMAScript Symbols <sup>(en-US)</sup>](https://surma.dev/things/reading-specs-2/) deuxième partie du lien ci-dessus, contient des informations sur la compréhension de la spécification ECMAScript qui définit le langage JavaScript

De plus, nous disposons du guide sur [les informations contenues dans un fichier WebIDL](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file), qui peut vraiment aider lors de la lecture des spécifications des Web API.

## Exploration de la fonctionnalité

Vous reviendrez souvent à l'écriture d'exemples de code ou à la création de démonstrations au cours de la documentation d'une technologie, mais il est très utile de commencer par se familiariser avec le fonctionnement de la technologie. C'est un exercice très utile car il vous permet de bien comprendre les cas d'utilisation (_pourquoi_ un développeur utiliserait cette technologie) et vous aide à créer des exemples de code en même temps.

> **Note:** Si la spécification a été récemment mise à jour et que, par exemple, une méthode est désormais définie différemment, mais que l'ancienne méthode fonctionne toujours dans les navigateurs, vous devrez souvent documenter les deux au même endroit afin que l'ancienne et la nouvelle méthode soient couvertes.
> Si vous avez besoin d'aide, référez-vous aux démonstrations que vous avez trouvées ou demandez à un ingénieur.

## Création de la liste des pages à écrire ou à mettre à jour

Les différentes pages que vous devez rédiger à partir de zéro ou mettre à jour varient en fonction de la technologie sur laquelle vous écrivez. Consultez les [types de pages](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types) et la section correspondante à la technologie que vous documentez. Vous devrez probablement aussi mettre à jour la documentation existante, alors cherchez dans MDN Web Docs les pages qui sont liées à ce que vous écrivez.

### Encadrés

Il est possible que l'encadré des pages que vous écrivez doive également être défini ou mis à jour. Pour savoir si cela est nécessaire et comment le faire, consultez le guide sur [les encadrés](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Sidebars).

### Exemples de code

Certains des exemples de code pour MDN Web Docs sont conservés dans des dépôts séparés. Il s'agit notamment des exemples interactifs qui apparaissent dans la section "Essayer" des pages de référence et du code de démonstration plus volumineux nécessaire pour les guides. Si vous devez ajouter ou modifier l'un de ces dépôts, il est bon de le noter dans votre liste.

L'article sur les [exemples de code](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples) décrit les différents types d'exemples de code que nous utilisons sur MDN Web Docs.

### Exemple

Si vous documentez une nouvelle Web API, votre liste initiale de sections à documenter pourrait ressembler à ceci :

1. Page de vue d'ensemble
2. Pages d'interfaces
3. Pages de constructeurs
4. Pages de méthodes
5. Pages de propriétés
6. Pages d'événements
7. Pages de concepts/guides
8. Exemples de code
9. Encadrés

Vous pouvez ensuite l'enrichir avec plus de détails, en ajoutant chaque interface et ses membres. Par exemple, si vous documentiez l'API Web Audio, votre liste pourrait ressembler à ceci :

- Web_Audio_API
- AudioContext

  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - ...
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - ...

- AudioNode

  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - ...
  - AudioNode.connect(Param)
  - ...

- AudioParam
- Events (update list)

  - start
  - end
  - …

## Ouvrir un ticket

À ce stade, il est conseillé d'ouvrir un [ticket](https://github.com/mdn/content/issues) sur le dépôt `mdn/content` avec les pages listées comme à faire (case à cocher). Cela vous permet, ainsi qu'aux autres personnes travaillant sur la documentation, de suivre publiquement l'état d'avancement. Vous pouvez également lier vos [<i lang="en">Pull Request</i>](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) à ce ticket pour donner plus de contexte à tout le monde.

Si vous travaillez sur la traduction de pages, il vous faudra ouvrir vos [tickets](https://github.com/mdn/translated-content/issues) sur le dépôt `mdn/translated-content`. Un membre de notre équipe de révision sera automatiquement désigné pour réviser vos modifications.

## Créer les pages

Maintenant, créez les pages dont vous avez besoin. Pour créer une nouvelle page, consultez les instructions dans notre guide [Créer et modifier des pages](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting). Consultez également notre guide sur les [types de pages](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types) pour des modèles de pages qui pourraient être utiles.
