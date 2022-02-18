---
title: Exemples live
slug: MDN/Structures/Live_samples
tags:
  - Guide
  - Intermediate
  - MDN Meta
  - Structures
translation_of: MDN/Structures/Live_samples
original_slug: MDN/Structures/Exemples_live
---
{{MDNSidebar}}

MDN permet de transformer les exemples présentés dans les articles en exemples dit « live » qui permettent aux lecteurs de les voir en action. Les exemples live peuvent inclure du HTML, CSS et JavaScript. A noter, les exemples lives _ne sont pas interactifs_ ; néanmoins, ils assurent que le code de sortie affiché pour un exemple est bien le même que défini par l'exemple, parce que la sortie est générée par le code d'exemple.

## Comment le système d'exemples lives fonctionne-t-il ?

Le système d'exemple live rassemble tout le code existant et le fusionne dans un fichier HTML, puis affiche ce fichier dans une [`<iframe>`](/fr/docs/Web/HTML/Element/iframe). Un exemple live est composé de deux parties :

- Un groupe qui comporte tout le code de l'exemple
- La macro (crée l'_iframe_ ou le lien qui) affiche le résultat du bloc de code

Dans ce contexte, un « groupe » de blocs de code est identifié par l'ID d'un titre ou d'un élément de bloc (tel qu'un [`<div>`](/fr/docs/Web/HTML/Element/div)).

- Si l'ID appartient à un élément de bloc, le groupe comprend tous les blocs de code de l'élément de bloc englobant dont l'ID est utilisé.
- Si l'ID appartient à une rubrique, le groupe inclut tous les blocs de code qui se trouvent après cette rubrique et avant la rubrique suivante du même niveau de rubrique. Notez que les blocs de code sous les sous-titres de la rubrique spécifiée sont tous utilisés ; si ce n'est pas l'effet que vous souhaitez, utilisez plutôt un ID sur un élément de bloc.

La macro utilise une URL spéciale pour récupérer l'échantillon de code pour un groupe donné, par exemple `https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/animation/_samples_/Cylon_Eye`. La structure générale est `https://url-of-page_samples_/group-id`, où `group-id` est l'ID de la rubrique ou du bloc où se trouve le code.

Le cadre (ou la page) qui en résulte est protégé par un bac à sable, sécurisé, et peut techniquement faire tout ce qui fonctionne sur le Web. Bien sûr, d'un point de vue pratique, le code doit contribuer à l'intérêt de la page qui le contient ; les trucs aléatoires qui tournent sur MDN seront supprimés par la communauté des éditeurs.

> **Note :** Vous **devez** utiliser la macro pour présenter la sortie de l'échantillon en direct.

Chaque bloc [`<pre>`](/fr/docs/Web/HTML/Element/pre) contenant du code pour l'échantillon est doté d'une classe qui indique s'il s'agit de code HTML, CSS ou JavaScript ; ces classes sont « brush : html », « brush : css » et « brush : js ». Ces classes doivent se trouver sur les blocs de code correspondants.

Le système d'échantillonnage en direct offre de nombreuses options, et nous allons essayer de les décomposer pour les examiner un par un.

### Exemples de macros en direct

Il existe deux macros que vous pouvez utiliser pour afficher des échantillons en direct :

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/master/kumascript/macros/EmbedLiveSample.ejs) embarque un échantillon vivant dans une page
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/master/kumascript/macros/LiveSampleLink.ejs) crée un lien qui ouvre l'échantillon en direct dans une nouvelle page.

Dans de nombreux cas, vous pouvez être en mesure d'ajouter la macro `EmbedLiveSample` ou `LiveSampleLink` aux pages avec peu ou pas de travail supplémentaire ! Tant que l'échantillon peut être identifié par l'ID d'un titre ou se trouve dans un bloc avec un ID que vous pouvez utiliser, l'ajout de la macro devrait faire l'affaire.

#### La macro EmbedLiveSample

```js
\{{EmbedLiveSample(<em>block_ID</em>, <em>width</em>, <em>height</em>, <em>screenshot_URL</em>, <em>page_slug</em>)}}
```

- block_ID
  - : Requis : L'ID de l'en-tête ou du bloc qui l'entoure d'où le code doit être tiré. La meilleure façon de s'assurer que l'ID est correct est de regarder l'URL de la section dans la table des matières de la page ; vous pouvez également le vérifier en consultant le source de la page.
- width
  - : La largeur de l'[`<iframe>`](/fr/docs/Web/HTML/Element/iframe) à créer, spécifiée en `px`. Ce paramètre est facultatif ; une largeur par défaut raisonnable sera utilisée si vous l'omettez. Notez que si vous voulez utiliser une largeur spécifique, vous _devez_ également spécifier le paramètre height.
- height
  - : La hauteur de l'[`<iframe>`](/fr/docs/Web/HTML/Element/iframe) à créer, spécifiée en `px`. Ce paramètre est facultatif ; une hauteur par défaut raisonnable sera utilisée si vous l'omettez. Notez que si vous voulez utiliser une hauteur spécifique, vous _devez_ également spécifier le paramètre width. Si vous n'utilisez qu'un seul d'entre eux, la taille de cadre par défaut est utilisée.
- screenshot_URL
  - : L'URL d'une capture d'écran qui montre à quoi devrait ressembler l'échantillon en direct. Ce paramètre est facultatif, mais il peut être utile pour les nouvelles technologies qui ne fonctionnent peut-être pas dans le navigateur de l'utilisateur, afin qu'il puisse voir à quoi ressemblerait l'échantillon s'il était pris en charge par son navigateur. Si vous incluez ce paramètre, la capture d'écran est affichée à côté de l'échantillon en direct, avec les titres appropriés.
- page_slug

  - : Le slug de la page contenant l'échantillon ; ceci est facultatif, et s'il n'est pas fourni, l'échantillon est tiré de la même page sur laquelle la macro est utilisée.

    > **Attention :** Pour afficher un échantillon en direct d'une page contenant du code dans une page cible différente, la page contenant du code doit elle-même utiliser la macro [`EmbedLiveSample`](https://github.com/mdn/kumascript/blob/master/macros/EmbedLiveSample.ejs) pour intégrer un échantillon en direct dans sa propre page. Sinon, si la page contenant le code n'utilise pas elle-même la macro [`EmbedLiveSample`](https://github.com/mdn/kumascript/blob/master/macros/EmbedLiveSample.ejs) sa propre page, l'échantillon vivant ne s'affichera pas du tout sur la page cible. (Voir [Le ticket Yari #2243](https://github.com/mdn/yari/issues/2243).)

#### La macro LiveSampleLink

```js
\{{LiveSampleLink(<em>block_ID</em>, <em>link_text</em>)}}
```

- block_ID
  - : L'ID de l'en-tête ou du bloc qui l'entoure, d'où le code doit être tiré. La meilleure façon de s'assurer que l'ID est correct est de regarder l'URL de la section dans la table des matières de la page ; vous pouvez également le vérifier en consultant le source de la page.
- link_text
  - : Une chaîne de caractères à utiliser comme texte du lien.

## Utilisation du système d'échantillonnage en direct

Les sections ci-dessous décrivent quelques cas d'utilisation courants du système d'échantillons en direct.

### Transformer des extraits en échantillons vivants

Un cas d'utilisation courant consiste à prendre des extraits de code existants déjà présentés sur MDN et à les transformer en échantillons vivants.

#### Préparer les échantillons de code

La première étape consiste à ajouter des extraits de code ou à s'assurer que les extraits existants sont prêts à être utilisés comme échantillons en direct, tant au niveau du contenu que du balisage. Les extraits de code, pris dans leur ensemble, doivent constituer un exemple complet et exécutable. Par exemple, si l'extrait existant ne présente que du CSS, vous devrez peut-être ajouter un extrait de HTML sur lequel le CSS pourra opérer.

Chaque morceau de code doit se trouver dans un bloc [`<pre>`](/fr/docs/Web/HTML/Element/pre), avec un bloc distinct pour chaque langue, correctement marqué quant à sa langue. La plupart du temps, cela a déjà été fait, mais il est toujours utile de revérifier pour s'assurer que chaque morceau de code est configuré avec la bonne syntaxe. Ceci est fait avec une classe sur l'élément `<pre>` de `brush:language-type`, où _language-type_ est le type de langage que le bloc contient, par exemple `html`, `css`, ou `js`.

> **Note :** Vous pouvez avoir plus d'un bloc pour chaque langue ; ils sont tous concaténés ensemble. Vous pouvez ainsi avoir un morceau de code, suivi d'une explication de son fonctionnement, puis un autre morceau, et ainsi de suite. Il est ainsi encore plus facile de produire des didacticiels et autres qui utilisent des échantillons en direct entrecoupés de texte explicatif.

Assurez-vous donc que les blocs [`<pre>`](/fr/docs/Web/HTML/Element/pre) de votre code HTML, CSS et/ou JavaScript sont chacun configurés correctement pour la coloration syntaxique de ce langage, et vous êtes prêt à partir.

## Démonstration en direct

Cette section est le résultat de l'utilisation du bouton du modèle d'échantillon en direct pour créer non seulement le titre principal (« Démonstration d'échantillon en direct »), mais aussi des sous-titres pour notre contenu HTML, CSS et JavaScript. Vous n'êtes pas limité à un bloc de chacun d'entre eux ; en outre, ils ne doivent pas nécessairement être dans un ordre particulier. Mélangez et associez !

Vous pouvez choisir de supprimer tous ceux que vous souhaitez ; si vous n'avez pas besoin de script, supprimez simplement cette rubrique et son bloc [`<pre>`](/fr/docs/Web/HTML/Element/pre). Vous pouvez également supprimer l'intitulé d'un bloc de code (« HTML », « CSS » ou « JavaScript »), puisqu'il n'est pas utilisé par la macro d'échantillonnage en direct.

Maintenant que le modèle a été inséré, nous pouvons insérer du code, voire du texte explicatif.

### HTML

Ce HTML crée un paragraphe et quelques blocs pour nous aider à positionner et à styliser un message.

```html
<p>Un exemple simple du système d'échantillonnage en direct en action.</p>
<div class="box">
  <div id="item">Bonjour à tous ! Bienvenue sur MDN</div>
</div>
```

### CSS

Le code CSS donne un style à la boîte ainsi qu'au texte qu'elle contient.

```css
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

### JavaScript

Ce code est très simple. Tout ce qu'il fait est d'attacher un gestionnaire d'événement au texte « Bonjour à tous ! » qui fait apparaître une alerte lorsqu'il est cliqué.

```js
const el = document.getElementById('item');
el.onclick = function() {
  alert('Ohhh, arrête de m\'embêter !');
}
```

### Résultat

Voici le résultat de l'exécution des blocs de code ci-dessus via `\{{EmbedLiveSample('live_sample_demo')}}` :

{{EmbedLiveSample('Démonstration_en_direct')}}

Voici un lien qui résulte de l'appel de ces blocs de code via `\{{LiveSampleLink('live_sample_demo', 'Lien vers un échantillon de démonstration en direct')}}`:

{{LiveSampleLink('live_sample_demo', 'Lien vers un échantillon de démonstration en direct')}}

## Conventions relatives aux échantillons vivants

- Ordres des blocs de code
  - : Lors de l'ajout d'un échantillon vivant, les blocs de code doivent être triés de manière à ce que le premier corresponde à la langue principale de cet échantillon (s'il y en a une). Par exemple, lors de l'ajout d'un échantillon réel pour la référence HTML, le premier bloc doit être HTML, lors de l'ajout d'un échantillon réel pour la référence CSS, il doit être CSS et ainsi de suite.
- Nomenclature des rubriques
  - : Lorsqu'il n'y a pas d'ambiguïté (par exemple, l'échantillon se trouve dans une section « Exemples »), les titres doivent être simples avec le seul nom du langage correspondant : HTML, CSS, JavaScript, SVG, etc. (voir ci-dessus). Les titres tels que « Contenu HTML » ou « Contenu JavaScript » ne doivent pas être utilisés. Toutefois, si un titre aussi court rend le contenu peu clair, on peut utiliser un titre plus réfléchi.
- Utilisation d'un bloc « Résultat »
  - : Après les différents blocs de code, veuillez utiliser un dernier bloc « Résultat » avant d'utiliser la macro `EmbedLiveSample` (voir ci-dessus). De cette façon, la sémantique de l'exemple est rendue plus claire à la fois pour le lecteur et pour tout outil qui analyserait la page (par exemple, un lecteur d'écran, un crawler web).
