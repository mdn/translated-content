---
title: Qu'avez-vous dans la tête ? Métadonnées de la page web
short-title: Métadonnées de la page web
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 0d59135676db5a372b4dd692f0686e6bdfc13b51
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

{{Glossary("Head", "L'en-tête")}} d'un document HTML est la partie qui n'est pas affichée par le navigateur Web lorsque la page est chargée. Elle contient des informations de métadonnées telles que le {{HTMLElement("title")}} de la page, des liens vers le {{Glossary("CSS")}} (si vous choisissez de mettre en forme votre contenu HTML avec du CSS), des liens vers des favicons personnalisés, et d'autres métadonnées (des informations sur le HTML, comme l'auteur·ice, et des mots‑clés importants décrivant le document).

Les navigateurs Web utilisent les informations contenues dans {{Glossary("Head", "l'en-tête")}} pour rendre correctement le document HTML. Dans cet article, nous aborderons tout ce qui précède et bien d'autres points, afin de vous fournir une bonne base pour travailler avec le balisage.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaître les bases du HTML, telles qu'elles sont exposées dans l'article précédent.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>L'en-tête du HTML et son rôle comme conteneur de métadonnées pour le document.</li>
          <li>Définir l'encodage des caractères du document et son titre.</li>
          <li>Fournir des métadonnées pour les moteurs de recherche.</li>
          <li>Lier des icônes à utiliser dans les navigateurs et sur les plateformes mobiles.</li>
          <li>Lier des feuilles de style et des fichiers de script.</li>
          <li>La nécessité de définir la langue d'un document en utilisant l'attribut <code>lang</code> dans la balise ouvrante <code>&lt;html&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que l'en-tête de HTML ?

Revenons sur le [document HTML simple que nous avons étudié dans l'article précédent](/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document)&nbsp;:

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Ma page test</title>
  </head>
  <body>
    <p>Voici ma page web</p>
  </body>
</html>
```

Le contenu de l'en-tête HTML est le contenu de {{HTMLElement("head")}}. Contrairement au contenu de {{HTMLElement("body")}} (qui est affiché sur la page lorsqu'elle est chargée dans un navigateur), le contenu de l'en-tête n'est pas affiché sur la page. Le rôle de l'en-tête est de contenir des {{Glossary("Metadata", "métadonnées")}} à propos du document. Dans l'exemple ci-dessus, l'en-tête est plutôt petit&nbsp;:

```html
<head>
  <meta charset="utf-8" />
  <title>Ma page test</title>
</head>
```

Toutefois, dans les pages plus importantes, l'en-tête peut devenir assez volumineux. Essayez d'aller sur certains de vos sites web préférés et d'utiliser les [outils de développement](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) pour vérifier le contenu de leur en-tête. Notre objectif ici n'est pas de vous montrer comment utiliser absolument tout ce qui peut être placé dans l'en-tête, mais plutôt de vous apprendre à utiliser les principaux éléments que vous souhaiterez inclure dans l'en-tête et de vous en familiariser. Commençons.

## Ajouter un titre

Nous avons déjà vu l'élément HTML {{HTMLElement("title")}} en action — il peut être utilisé pour ajouter un intitulé au document. Il peut toutefois être confondu avec l'élément `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}`, qui est utilisé pour ajouter un en‑tête de niveau supérieur au contenu du corps de la page — cet élément est parfois aussi désigné comme le titre de la page. Mais ce sont des choses différentes&nbsp;!

- L'élément HTML `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}`apparaît dans la page lorsqu'elle est chargée dans le navigateur — en général, il devrait être utilisé une fois par page, pour marquer le titre du contenu de votre page (le titre d'une histoire, ou un titre d'actualité, ou ce qui convient à votre usage).
- L'élément HTML {{HTMLElement("title")}} est une métadonnée qui représente le titre du document HTML global (et non le contenu du document).

### Inspection d'un exemple

1. Dans cet exercice, nous vous invitons à commencer par vous rendre sur notre dépôt GitHub et à télécharger une copie de notre [page title-example.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html). Pour cela&nbsp;:
   1. Copiez et collez le code de la page dans un nouveau fichier texte dans votre éditeur de code, puis enregistrez-le à un endroit approprié.
   2. Appuyez sur le bouton «&nbsp;Raw&nbsp;» sur la page GitHub, ce qui fait apparaître le code brut (éventuellement dans un nouvel onglet du navigateur). Ensuite, choisissez le menu _Enregistrer la page sous…_ de votre navigateur et sélectionnez un emplacement approprié pour enregistrer le fichier.

2. Ouvrez maintenant le fichier dans votre navigateur. Vous devriez voir quelque chose comme ceci&nbsp;:

   ![Une page web avec le texte 'title' dans l'onglet du navigateur et le texte 'h1' comme en-tête de la page dans le corps du document.](title-example.png)

   Il devrait maintenant être tout à fait évident où le contenu de `<h1>` apparaît et où le contenu de `<title>` apparaît&nbsp;!

3. Essayez également d'ouvrir le code dans votre éditeur, de modifier le contenu de ces éléments, puis d'actualiser la page dans votre navigateur. Amusez-vous avec cela.

Le contenu de l'élément `<title>` est aussi utilisé d'autres façons. Par exemple, si vous essayez d'ajouter la page aux favoris (_Marque-pages > Marquer l'onglet courant_ ou l'icône en forme d'étoile dans la barre d'adresse de Firefox), vous verrez le contenu de `<title>` utilisé comme nom suggéré pour le marque-page.

![Une page web ajoutée aux marque-pages dans Firefox. Le nom du marque-page a été automatiquement rempli avec le contenu de l'élément 'title'](bookmark-example.png)

Le contenu de `<title>` est également utilisé dans les résultats de recherche, comme vous le verrez ci-dessous.

## Métadonnées : l'élément `<meta>`

Les métadonnées sont des données qui décrivent des données, et le langage HTML a une manière «&nbsp;officielle&nbsp;» d'ajouter des métadonnées à un document — l'élément HTML {{HTMLElement("meta")}}. Bien sûr, d'autres choses dont nous parlons dans cet article pourraient aussi être considérées comme des métadonnées. Il existe de nombreux types d'éléments `<meta>` que vous pouvez inclure dans l'en-tête de votre page, mais nous n'allons pas tous les expliquer à ce stade, car cela deviendrait trop confus. À la place, nous allons expliquer quelques éléments que vous pourriez rencontrer couramment, juste pour vous donner une idée.

### Définir l'encodage des caractères du document

Dans l'exemple que nous avons vu au-dessus, cette ligne était présente&nbsp;:

```html
<meta charset="utf-8" />
```

Cet élément définit l'encodage des caractères du document — le jeu de caractères que le document est autorisé à utiliser. `utf-8` est un jeu de caractères universel qui inclut pratiquement tous les caractères de toutes les langues humaines. Cela signifie que votre page web pourra afficher n'importe quelle langue&nbsp;; il est donc recommandé de le définir sur chaque page web que vous créez&nbsp;! Par exemple, votre page pourra afficher l'anglais et le japonais sans problème&nbsp;:

![Une page web contenant des caractères anglais et japonais, l'encodage des caractères étant universel ou utf-8. Les deux langues s'affichent correctement.](correct-encoding.png)

Si vous définissez votre encodage de caractères sur `ISO-8859-1`, par exemple (le jeu de caractères de l'alphabet latin), l'affichage de votre page sera totalement perturbé&nbsp;:

![Une page web contenant des caractères anglais et japonais, l'encodage des caractères étant réglé sur latin. Les caractères japonais ne s'affichent pas correctement.](bad-encoding.png)

> [!NOTE]
> Certains navigateurs (par ex. Chrome) corrigent automatiquement les encodages incorrects, ainsi selon le navigateur utilisé, ce problème pourrait vous passer totalement inaperçu. Vous devriez quand même définir un encodage `utf-8` sur votre page de toute façon pour éviter tout problème potentiel avec d'autres navigateurs.

### Expérience avec l'encodage des caractères

Pour essayer cela, reprenez le modèle HTML simple que vous avez obtenu dans la section précédente sur `<title>` (la [page title-example.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), essayez de changer la valeur de l'encodage des caractères en `ISO-8859-1`, et ajoutez le japonais à votre page. Voici le code que nous avons utilisé&nbsp;:

```html
<p>Japanese exemple&nbsp;: ご飯が熱い。</p>
```

### Ajouter le nom de l'auteur et une description

De nombreux éléments `<meta>` contiennent les attributs `name` et `content`&nbsp;:

- `name` définit le type d'élément meta&nbsp;; le type d'information qu'il contient.
- `content` définit le contenu réel de la métadonnée.

Deux de ces éléments meta, utiles à inclure dans votre page, permettent de définir l'auteur·ice de la page et de fournir une description concise de la page. Voyons un exemple&nbsp;:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="La Zone Apprentissage des documents web
du MDN a pour but de donner aux débutants du Web tout ce qu'ils doivent
savoir pour commencer le développement de pages webs et d'applications." />
```

Préciser l'auteur·ice peut être intéressant dans de nombreux cas&nbsp;: il est utile de savoir qui a écrit la page pour le contacter et lui poser des questions à propos du contenu. Certains systèmes de gestion de contenu procèdent à l'extraction automatique des informations sur l'auteur·ice de la page et les rendent disponibles à cette fin.

Définir une description qui incorpore des mots-clés relatifs au contenu de la page est utile car cela peut permettre à votre page d'apparaître plus haut dans les recherches pertinentes effectuées dans les moteurs de recherche (ce type d'activité est appelé [optimisation pour les moteurs de recherche](/fr/docs/Glossary/SEO), ou {{Glossary("SEO")}}).

### Utilisation des descriptions dans les moteurs de recherche

La description est aussi utilisée dans les pages de résultats des moteurs de recherche. Faisons un exercice pour explorer cela&nbsp;:

1. Allez sur la [page d'accueil du Mozilla Developer Network](/fr/).
2. Affichez le code source de la page (clic droit sur la page, choisissez _Code source de la page_ dans le menu contextuel.)
3. Trouvez la balise meta description. Elle ressemblera à ceci (cela peut changer au fil du temps)&nbsp;:

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site provides information about Open Web
     technologies including HTML, CSS, and APIs for both Web sites and
     progressive web apps." />
   ```

4. Maintenant, cherchez «&nbsp;MDN Web Docs&nbsp;» sur votre moteur de recherche favori (nous avons utilisé Google.) Vous remarquerez que le contenu de la description `<meta>` et de l'élément `<title>` est utilisé dans le résultat de recherche — cela vaut vraiment la peine&nbsp;!

   ![Un résultat de recherche Yahoo pour « Mozilla Developer Network »](mdn-search-result.png)

> [!NOTE]
> Avec Google, vous verrez quelques sous-pages pertinentes de MDN listées sous le lien de la page d'accueil — ce sont des liens du site, ils sont configurables dans les outils de [Google Search Console](https://search.google.com/search-console/about?hl=fr) — ces outils sont donc un moyen de rendre les résultats de recherche de votre site meilleurs avec le moteur de recherche de Google.

> [!NOTE]
> Plusieurs fonctions `<meta>` ne sont plus utilisées. Par exemple, l'élément `<meta>` `keyword` (`<meta name="keywords" content="mettez, vos, mot-clés, ici">`) — qui est censé fournir des mots-clés pour les moteurs de recherche, afin de déterminer la pertinence de la page pour différents termes de recherche — est ignoré par les moteurs de recherche, car les polluposteurs remplissaient simplement la liste avec des centaines de mots-clés, biaisant les résultats.

### Autres types de métadonnées

En parcourant le web, vous trouverez d'autres types de métadonnées. Beaucoup de fonctionnalités que vous verrez sur les sites web sont des créations propriétaires, conçues pour être utilisées sur certains sites (comme les réseaux sociaux) avec des informations spécifiques qu'ils peuvent utiliser.

Par exemple, [Open Graph Data <sup>(angl.)</sup>](https://ogp.me/) est un protocole de métadonnées que Facebook a inventé pour fournir des métadonnées plus riches pour les sites web. Dans le code source de MDN Web Docs, vous trouverez ceci&nbsp;:

```html
<meta
  property="og:image"
  content="https://developer.mozilla.org/mdn-social-share.png" />
<meta
  property="og:description"
  content="MDN Web Docs fournit des
informations sur les technologies web ouvertes comme HTML, CSS et les API
utilisées pour les sites web et les applications web." />
<meta property="og:title" content="Mozilla Developer Network" />
```

L'un des effets de cela est que lorsque vous faites un lien vers MDN Web Docs sur Facebook, le lien apparaît avec une image et une description&nbsp;: une expérience plus riche pour les utilisateur·ice·s.

![Données du protocole Open Graph de la page d'accueil MDN affichées sur Facebook, montrant une image, un titre et une description.](facebook-output.png)

## Ajouter des icônes personnalisées à un site

Pour enrichir davantage le design de votre site, vous pouvez ajouter des références à des icônes personnalisées dans vos métadonnées et celles-ci seront affichées dans certains contextes. La plus couramment utilisée est la **favicône** (abréviation de «&nbsp;favorites icon&nbsp;», en référence à son utilisation dans les listes de favoris ou de signets des navigateurs).

La petite favicône existe depuis de nombreuses années. Il s'agit de la première icône de ce type&nbsp;: une icône carrée de 16 pixels utilisée à plusieurs endroits. Selon le navigateur, vous pouvez voir les favicônes affichées dans l'onglet du navigateur contenant chaque page ouverte, et à côté des pages marquées dans le panneau des signets.

Vous pouvez ajouter une favicône à votre page en&nbsp;:

1. L'enregistrant dans un format pris en charge comme `.ico`, `.gif` ou `.png` quelque part dans la structure de dossiers de votre site web.
2. Ajoutant un élément {{HTMLElement("link")}} dans le bloc {{HTMLElement("head")}} de votre HTML, qui référence le chemin vers le fichier de la favicône&nbsp;:

   ```html
   <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
   ```

> [!NOTE]
> Dans cet exemple, le chemin vers le fichier de la favicône commence par `/`, ce qui signifie «&nbsp;chercher le fichier dans le répertoire racine de votre site&nbsp;». Cela peut se trouver à un endroit différent dans le code source, selon le système que vous utilisez pour créer votre site&nbsp;: les frameworks web réservent généralement un dossier spécial pour les fichiers à la racine du site, comme `static` ou `public`.
>
> Ne vous inquiétez pas trop des subtilités des chemins de fichiers pour l'instant&nbsp;; vous en apprendrez plus à ce sujet plus tard (consultez [Introduction rapide aux URL et aux chemins](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links#une_brève_présentation_des_url_et_des_chemins) si vous êtes curieux·se).
>
> La plupart des navigateurs et applications utilisent aujourd'hui automatiquement un fichier `favicon.ico` trouvé à la racine du site comme favicône, donc beaucoup de sites n'incluent même pas l'élément `<link>`. Un élément explicite reste utile si vous souhaitez placer votre fichier de favicône ailleurs.

Voici un exemple de favicône dans un panneau de favoris&nbsp;:

![Le panneau de signets Firefox, montrant un exemple de signet avec une favicône affichée à côté.](bookmark-favicon.png)

Vous pouvez également vouloir inclure différentes icônes pour différents contextes. Par exemple&nbsp;:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Cela permet d'afficher une icône lorsque le site est enregistré sur l'écran d'accueil d'un appareil Apple. Vous pouvez même vouloir fournir différentes icônes pour différents appareils, afin de garantir que l'icône s'affiche correctement partout. Par exemple&nbsp;:

```html
<!-- iPad pro avec haute-résolution Retina display: -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- Résolution x3 iPhone: -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- iPad non-Retina, iPad mini, etc.: -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- Résolution 2x iPhone et autres appareils: -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- favicône de base -->
<link rel="shortcut icon" href="favicon32.png" />
```

Les commentaires expliquent à quoi sert chaque icône — ces éléments couvrent par exemple la fourniture d'une icône haute résolution à utiliser lorsque le site est enregistré sur l'écran d'accueil d'un iPad.

Ne vous préoccupez pas de la mise en œuvre de tous ces types d'icônes maintenant — il s'agit d'une fonctionnalité assez avancée, et vous n'aurez pas besoin de la connaître pour progresser dans le cours. Le but principal ici est de vous faire savoir ce que sont ces éléments, au cas où vous les croiseriez en parcourant le code source d'autres sites web. Si vous souhaitez en savoir plus sur toutes ces valeurs et comment les choisir, lisez la page de référence de l'élément HTML {{HTMLElement("link")}}.

## Application des CSS et JavaScript au HTML

À peu près tous les sites web que vous utiliserez aujourd'hui emploient le {{Glossary("CSS")}} pour leur donner un bel aspect, et le {{Glossary("JavaScript")}} pour assurer des fonctionnalités interactives, comme des lecteurs vidéo, des cartes, des jeux, et plus encore. Ceux-ci sont le plus souvent appliqués à une page web en utilisant respectivement l'élément HTML {{HTMLElement("link")}} et l'élément HTML {{HTMLElement("script")}}.

- L'élément HTML {{HTMLElement("link")}} doit toujours se trouver dans l'en-tête de votre document. Il prend deux attributs, `rel="stylesheet"`, qui indique qu'il s'agit de la feuille de style du document, et `href`, qui contient le chemin vers le fichier de la feuille de style&nbsp;:

  ```html
  <link rel="stylesheet" href="mon-fichier-css.css" />
  ```

- L'élément HTML {{HTMLElement("script")}} doit également aller dans l'en-tête et inclure un attribut `src` contenant le chemin vers le JavaScript à charger, ainsi que `defer` (un [attribut booléen](/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#les_attributs_booléens)), qui indique au navigateur de charger le JavaScript après que la page a fini d'analyser le HTML. L'attribut `defer` est utile car il garantit que tout le HTML est chargé avant l'exécution du JavaScript, évitant ainsi les erreurs dues à l'accès à un élément HTML qui n'existe pas encore sur la page. Il existe [plusieurs façons](/fr/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#stratégies_de_chargement_de_script) de gérer le chargement du JavaScript sur votre page, mais celle-ci est la plus fiable pour les navigateurs modernes.

  ```html
  <script src="mon-fichier-js.js"></script>
  ```

  > [!NOTE]
  > L'élément `<script>` peut ressembler à un {{Glossary("void element", "élément vide")}}, mais ce n'est pas le cas, il nécessite donc une balise de fermeture. Au lieu de pointer vers un fichier de script externe, vous pouvez aussi choisir de placer votre script à l'intérieur de l'élément `<script>`.

### À votre tour : Appliquer des CSS et du JavaScript à une page

1. Pour commencer cet exercice, récupérez une copie de nos fichiers [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) et [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css), et enregistrez-les sur votre ordinateur dans le même dossier. Assurez-vous qu'ils sont enregistrés avec les bons noms et extensions.
2. Ouvrez le fichier HTML à la fois dans votre navigateur et dans votre éditeur de texte.
3. En suivant les informations données ci-dessus, ajoutez les éléments HTML {{HTMLElement("link")}} et {{HTMLElement("script")}} à votre HTML, afin que vos CSS et JavaScript soient appliqués à votre page HTML.

Si cela a été fait correctement, lorsque vous enregistrez votre HTML et actualisez votre navigateur, vous devriez voir que les choses ont changé&nbsp;:

![Exemple montrant une page sur laquelle on a appliqué du CSS et du JavaScript. Le CSS a rendu la page verte, alors que le JavaScript a ajouté une liste dynamique à la page.](js-and-css.png)

- Le JavaScript a ajouté une liste vide à la page. Maintenant, lorsque vous cliquez n'importe où sur la liste, une boîte de dialogue s'ouvre pour vous permettre de saisir un texte. Lorsque vous appuyez sur le bouton OK, un nouvel élément de la liste est ajouté contenant le texte saisi. Lorsque vous cliquez sur un élément de liste existant, la boîte de dialogue affiche son contenu pour vous permettre de le modifier.
- Le CSS a rendu l'arrière-plan vert et le texte plus grand. Il a également décrit le contenu que le JavaScript a ajouté à la page (la barre rouge avec la bordure noire est le style que le CSS a ajouté à la liste générée par JS).

> [!NOTE]
> Si vous êtes coincé dans cet exercice et que vous ne pouvez pas obtenir le CSS / JS à appliquer, essayez de vérifier notre exemple de page [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) .

## Définition de la langue principale du document

Enfin, il convient de mentionner que vous pouvez (et devrez vraiment) définir la langue de votre page. Cela peut être fait en ajoutant [l'attribut `lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) à la balise ouvrante HTML (voir [meta-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/meta-example.html).)

```html
<html lang="fr">
  …
</html>
```

Cela est utile de plusieurs façons. Votre document HTML sera indexé plus efficacement par les moteurs de recherche si sa langue est définie (ce qui lui permet d'apparaître correctement dans les résultats spécifiques à la langue, par exemple), et c'est utile pour les personnes malvoyantes utilisant un lecteur d'écran (par exemple, le mot «&nbsp;six&nbsp;» existe en français et en anglais, mais se prononce différemment.)

Vous pouvez également définir des sous-sections de votre document pour qu'elles soient reconnues comme étant dans différentes langues. Par exemple, nous pourrions définir la section en japonais pour qu'elle soit reconnue comme telle, de cette façon&nbsp;:

```html
<p>Exemple en japonais&nbsp;: <span lang="ja">ご飯が熱い。</span>.</p>
```

Ces codes sont définis par la norme [ISO 639-1 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/ISO_639-1). Vous en trouverez plus sur [Étiquettes de langue en HTML et XML <sup>(angl.)</sup>](https://www.w3.org/International/articles/language-tags/).

## Résumé

Cela marque la fin de notre tour rapide de l'en-tête HTML — il y a beaucoup plus de possibilités ici, mais un panorama exhaustif serait ennuyeux et susceptible de vous embrouiller à ce stade, nous voulions simplement vous donner une idée des éléments les plus courants. Dans l'article suivant, nous allons étudier [les titres et paragraphes en HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs).

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
