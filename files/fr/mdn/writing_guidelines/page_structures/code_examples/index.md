---
title: Exemples de code sur MDN
short-title: Exemples de code
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: 74ab773eebccc1f7fe27c2c4abd4998cc074186b
---

Sur MDN, vous trouverez de nombreux exemples de code qui montrent comment utiliser les fonctionnalités de la plateforme Web que nous documentons.
Cet article décrit les différentes façons d'ajouter des exemples de code aux pages, ainsi que les types que vous pouvez utiliser et quand les utiliser.

> [!NOTE]
> Cette page décrit **comment** le code est inclus dans les pages MDN.
> Si vous souhaitez des conseils de style et de lint pour ajouter du code dans une page MDN, consultez notre [guide de style du code](/fr/docs/MDN/Writing_guidelines/Code_style_guide).

## Quels types d'exemples de code existe-t-il sur MDN ?

Il existe quatre types d'exemples de code&nbsp;:

- **Exemples statiques** — Blocs de code qui affichent le code source sur une page.
- **Exemples en direct** — Une macro prend les blocs de code d'une page, les combine dans un {{HTMLElement("iframe")}}, et intègre l'iframe dans la page pour afficher le résultat. La page publiée affiche les blocs de code source et les résultats côte à côte.
- **Exemples interactifs** — Une macro affiche le code source sur la page et affiche le résultat dans un panneau à côté du code. Les lecteur·ice·s peuvent modifier le code source et relancer l'exemple pour voir l'effet de leurs changements.
- **Intégrations GitHub** — Une macro prend un document dans un dépôt GitHub de l'organisation [MDN <sup>(angl.)</sup>](https://github.com/mdn/), le place dans un {{HTMLElement("iframe")}}, et l'intègre dans la page pour afficher le résultat.

## Quand utiliser chaque type&nbsp;?

Chaque type d'exemple de code a ses propres cas d'usage&nbsp;:

- **Exemples statiques**&nbsp;: utiles si vous devez montrer du code et qu'il n'est pas important de démontrer le résultat du code sur la page publiée, ou si vous montrez une étape intermédiaire dans un article. Les lecteur·ice·s recherchent souvent ce type de bloc de code pour voir comment utiliser une fonctionnalité et pouvoir copier-coller un exemple minimal dans leur projet. De plus, vous pouvez vouloir un bloc de code statique pour illustrer une API ou une fonctionnalité qui ne fonctionne pas bien en exemple en direct.
- **Exemples en direct**&nbsp;: utiles si vous souhaitez montrer le code source, puis le voir s'exécuter, sans que ce soit forcément un exemple autonome. Ils sont pratiques car il suffit de mettre à jour le code une seule fois pour mettre à jour à la fois les blocs de code sur la page et les résultats en direct côte à côte.
- **Exemples interactifs**&nbsp;: utilisés sur les pages de référence. Ils sont limités à une occurrence par page et doivent être placés à un endroit précis après l'introduction. Ils sont utiles pour montrer les usages courants ou pratiques d'une fonctionnalité.
- **Intégrations GitHub**&nbsp;: utiles si vous avez déjà un exemple que vous souhaitez intégrer, que vous ne voulez pas afficher le code source, et/ou que vous voulez vous assurer que l'exemple est disponible de façon autonome. Comme le code affiché et le code source sont à deux endroits différents, le coût de maintenance est plus élevé.

## Bonnes pratiques générales

Il y a des considérations de style et de contenu à garder à l'esprit lors de l'ajout ou de la mise à jour d'exemples sur MDN.

- Lorsque vous placez des exemples sur une page, essayez de couvrir toutes les fonctionnalités ou options de l'API ou du concept que vous documentez. Au minimum, les options ou propriétés les plus courantes doivent être illustrées.
- Faites précéder chaque exemple d'une explication de ce que fait l'exemple et pourquoi il est intéressant ou utile pour les lecteur·ice·s.
- Faites suivre chaque bloc de code d'une explication de ce qu'il fait pour les utilisateur·ice·s.
- Lorsque c'est possible, divisez les grands exemples en morceaux plus petits. Par exemple, le système d'«&nbsp;exemple en direct&nbsp;» concatène automatiquement tout votre code avant d'exécuter l'exemple, donc vous pouvez découper votre JavaScript, HTML et/ou CSS en petits morceaux avec du texte explicatif après chaque partie si vous le souhaitez. C'est un excellent moyen d'expliquer plus clairement des portions de code longues ou complexes.
- Allez au-delà de la simple démonstration de chaque partie de l'API ou de la technologie. Pensez à illustrer des cas d'usage réels pour les développeur·euse·s.

## Exemples statiques

Les exemples statiques sont des blocs de code qui montrent à quoi ressemble une fonctionnalité dans le code source.
Ils sont ajoutés à une page à l'aide des «&nbsp;fences&nbsp;» Markdown, comme décrit dans [Blocs de code d'exemple](/fr/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#blocs_de_code_dexemple).
Dans les pages de documentation, ils ressemblent à ceci&nbsp;:

```js
// Ceci est un exemple JS
const test = "Hello";
console.log(test);
```

## Exemples interactifs

La macro [`InteractiveExample` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs) est utilisée pour intégrer des exemples interactifs en haut des pages de référence MDN.
Ils sont destinés aux lecteur·ice·s qui veulent essayer un exemple sans avoir à lire l'article complet sur un sujet ou une fonctionnalité.

La macro `InteractiveExample` accepte un titre pour l'exemple sous forme d'une chaîne de caractères, suivi d'un mot-clé pour spécifier la hauteur de l'exemple.
Les blocs de code à inclure dans l'exemple apparaissent après l'appel de la macro et contiennent le mot-clé `interactive-example` dans la chaîne d'information après le langage du bloc de code.
L'utilisation de [JavaScript `Array.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#exemple_interactif) est un bon exemple de cette macro, qui ressemble à ceci dans la source markdown&nbsp;:

````md
\{{InteractiveExample("JavaScript Demo: Array.concat()", "shorter")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Résultat attendu : Array ["a", "b", "c", "d", "e", "f"]
```
````

Il existe quelques limitations aux exemples interactifs&nbsp;:

- Ils sont spécialisés par technologie — l'interface pour JavaScript est différente de celle pour CSS, et ils illustrent uniquement une technologie à la fois.
  Ils ne conviennent pas si vous souhaitez montrer, par exemple, comment combiner une structure HTML/CSS/JS particulière.
- Ils ne sont pas destinés aux grands exemples de code — l'interface prend en charge une gamme de **hauteurs fixes**, qui ne fonctionnent vraiment que pour des exemples courts (disons, 10 à 15 lignes).
- Une page MDN ne peut avoir qu'un seul exemple interactif.

## Exemples en direct

Les exemples en direct sont insérés dans la page à l'aide de la macro [`EmbedLiveSample` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs).
Une macro \{{EmbedLiveSample}} prend des blocs de code d'une page, les combine dans un {{HTMLElement("iframe")}}, et insère le résultat dans la page.
Voir le [guide des exemples en direct](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples) pour plus d'informations.

## Exemples GitHub en direct

Les exemples GitHub en direct sont intégrés dans la page à l'aide de la macro [`EmbedGHLiveSample` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs).
Une \{{EmbedGHLiveSample}} prend le contenu à une URL spécifiée (qui doit être un dépôt GitHub **MDN**), et l'insère dans la page dans un {{HTMLElement("iframe")}}.

La macro a trois paramètres&nbsp;:

1. L'URL du document à intégrer — elle est relative à l'organisation MDN, dont le répertoire racine est à `https://mdn.github.io/`. Ce paramètre doit donc contenir la partie de l'URL après cela, par exemple `my-subdirectory/example.html`. Vous pouvez omettre le nom de fichier s'il s'appelle `index.html`.
2. La largeur de l'`<iframe>`, qui peut être exprimée en pourcentage ou en pixels.
3. La hauteur de l'`<iframe>`, qui peut être exprimée en pourcentage ou en pixels.

Prenons un exemple. Supposons que nous voulions intégrer le code à <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/>. Nous pourrions utiliser l'appel suivant&nbsp;:

\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Cela ressemble à ceci une fois affiché&nbsp;:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}
