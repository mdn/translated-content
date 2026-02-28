---
title: Syntaxe de base du HTML
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: d63fef1845615e13132bbbebb8723785eace208d
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

Dans cet article, nous abordons les fondamentaux du HTML, y compris la terminologie, la syntaxe et la structure. Au fil de votre lecture, vous réaliserez quelques défis interactifs pour vous familiariser avec l'écriture du HTML de base.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <a href="/fr/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Avoir installé les logiciels de base</a>, et avoir des notions sur <a href="/fr/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">la gestion des fichiers</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>L'anatomie d'un élément HTML — élément, balise ouvrante, contenu, balise fermante, attributs.</li>
          <li>Le corps HTML et son rôle en tant que conteneur du contenu de la page.</li>
          <li>Ce que sont les éléments vides, et en quoi ils diffèrent des autres éléments.</li>
          <li>La nécessité d'un doctype en haut des documents HTML, y compris son objectif initial, et le fait qu'il soit désormais un vestige historique.</li>
          <li>Comprendre que le HTML doit être correctement imbriqué.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que le HTML ?

Le {{Glossary("HTML")}} (pour <i lang="en">HyperText Markup Language</i> en anglais) est un _langage de balisage_ qui indique aux navigateurs web comment structurer les pages web que vous visitez. Le HTML se compose d'une série {{Glossary("Element", "d'éléments")}}, que vous utilisez pour encadrer, envelopper ou _baliser_ différentes parties du contenu afin de les faire apparaître ou agir d'une certaine manière. Les {{Glossary("Tag", "balises")}} encadrantes peuvent transformer du contenu en hyperlien vers une autre page, mettre des mots en italique, etc. Par exemple, considérez la ligne de texte suivante&nbsp;:

```plain
Mon chat est très grincheux
```

Nous pourrions indiquer que ce texte est un paragraphe en l'encadrant avec des balises paragraphe ({{HTMLElement("p")}})&nbsp;:

```html
<p>Mon chat est très grincheux</p>
```

Ou, nous pourrions indiquer que ce texte est un titre de niveau supérieur en l'encadrant avec des balises `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}`&nbsp;:

```html
<h1>Mon chat est très grincheux</h1>
```

Le HTML se trouve dans des fichiers texte appelés **documents HTML**, ou simplement **documents**, avec une extension de fichier `.html`. Là où nous avons précédemment parlé de pages web, un document HTML contient le contenu de la page web et en définit la structure.

Le fichier HTML le plus courant que vous rencontrerez est `index.html`, qui est généralement utilisé pour contenir le contenu de la page d'accueil d'un site web. Il est également fréquent de voir des sous-dossiers contenant leur propre fichier `index.html`, de sorte qu'un site web peut avoir plusieurs fichiers index à différents endroits.

> [!NOTE]
> Les balises en HTML ne sont pas sensibles à la casse. Cela signifie qu'elles peuvent être écrites en majuscules ou en minuscules. Par exemple, une balise {{HTMLElement("title")}} peut être écrite `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, etc., et cela fonctionnera. Cependant, il est recommandé d'écrire toutes les balises en minuscules pour des raisons de cohérence et de lisibilité.

## Anatomie d'un élément HTML

Regardons notre élément paragraphe d'un peu plus près&nbsp;:

![Un exemple de code montrant la structure d'un élément html.<p> Mon chat est très grincheux </p>.](grumpy-cat-small.svg)

Notre élément complet se compose de&nbsp;:

- **La balise ouvrante&nbsp;:** il s'agit du nom de l'élément (dans cet exemple, _p_ pour paragraphe), encadré par des chevrons ouvrant et fermant. Cette balise ouvrante indique où l'élément commence ou commence à prendre effet. Dans cet exemple, elle précède le début du texte du paragraphe.
- **Le contenu&nbsp;:** il s'agit du contenu de l'élément. Dans cet exemple, c'est le texte du paragraphe&nbsp;: «&nbsp;Mon chat est très grincheux&nbsp;».
- **La balise fermante&nbsp;:** c'est la même que la balise ouvrante, sauf qu'elle comprend une barre oblique avant le nom de l'élément. Elle indique où l'élément se termine. Oublier d'inclure une balise fermante est une erreur fréquente chez les débutant·e·s qui peut produire des résultats étranges.

> [!NOTE]
> Rendez-vous chez notre partenaire d'apprentissage Scrimba pour les [Balises HTML <sup>(angl.)</sup>](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup> pour une explication interactive des balises HTML.

### Créer votre premier élément HTML

Nous allons vous donner un peu de pratique pour écrire vos propres éléments HTML&nbsp;:

1. Cliquez sur **«&nbsp;Exécuter&nbsp;»** dans le bloc de code ci-dessous pour éditer l'exemple dans le MDN Playground.
2. Encadrez la ligne de texte avec les balises `<em>` et `</em>`. Pour _ouvrir l'élément_, placez la balise ouvrante (`<em>`) au début de la ligne. Pour _fermer l'élément_, placez la balise fermante (`</em>`) à la fin de la ligne. Cette opération doit mettre en forme le texte rendu en italique.
3. Si vous vous sentez aventureux·se, essayez de rechercher [d'autres éléments HTML](/fr/docs/Web/HTML/Reference/Elements) et de les appliquer à l'exemple de texte.

Si vous faites une erreur, vous pouvez effacer votre travail avec le bouton _Réinitialiser_ dans le MDN Playground. Si vous êtes vraiment coincé·e, vous pouvez voir la solution sous le bloc de code.

```html live-sample___basic_html_1
Ceci est mon texte
```

{{EmbedLiveSample('basic_html_1', "100%", 60)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre ligne HTML finale devrait ressembler à ceci&nbsp;:

```html
<em>Ceci est mon texte</em>
```

</details>

### Éléments imbriqués

Il est possible de placer des éléments à l'intérieur d'autres éléments. Cela s'appelle l'_imbrication_. Si nous voulions affirmer que notre chat est **très** grincheux, nous pourrions encadrer le mot _très_ avec un élément HTML {{HTMLElement("strong")}}, ce qui donne au mot une mise en forme de texte plus marquée&nbsp;:

```html
<p>Mon chat est <strong>très</strong> grincheux.</p>
```

Dans ce bloc de code, le texte «&nbsp;Mon chat est très grincheux&nbsp;» est entièrement défini comme un paragraphe. Le mot «&nbsp;très&nbsp;» est en plus défini comme ayant une importance forte.

Il existe une bonne et une mauvaise façon d'imbriquer les éléments. Dans le bloc de code ci-dessus, nous ouvrons d'abord l'élément `<p>`, puis l'élément `<strong>`. Pour une imbrication correcte, nous fermons d'abord l'élément `<strong>`, puis l'élément `<p>`.

Voici un exemple de la _mauvaise_ façon d'imbriquer les éléments&nbsp;:

```html-nolint example-bad
<p>Mon chat est <strong>très grincheux.</p></strong>
```

Les **balises doivent être ouvertes et fermées de façon à être clairement à l'intérieur ou à l'extérieur l'une de l'autre**. Comme les éléments se chevauchent dans le bloc de code précédent, le navigateur doit deviner votre intention. Ce type de supposition peut produire des résultats inattendus.

### Éléments vides

Tous les éléments ne suivent pas le modèle d'une balise ouvrante, du contenu, puis d'une balise fermante. Certains éléments se composent d'une seule balise, qui est généralement utilisée pour insérer ou intégrer quelque chose dans le document. Ces éléments sont appelés des {{Glossary("void element", "éléments vides")}}, ce qui signifie «&nbsp;éléments qui ne peuvent pas contenir d'autre contenu HTML&nbsp;».

Par exemple, l'élément HTML {{HTMLElement("br")}} insère un saut de ligne dans une ligne de texte, ce qui la fait passer sur plusieurs lignes&nbsp;:

```html live-sample___void-example
<p>
  Ceci est un paragraphe unique, mais nous allons le<br />passer sur deux
  lignes.
</p>
```

Ceci s'affiche comme suit&nbsp;:

{{EmbedLiveSample('void-example', "100%", 100)}}

> [!NOTE]
> Dans certains exemples HTML, vous verrez un `/` ajouté à la fin de la balise d'un élément vide, par exemple `<br />`. Il s'agit d'un style différent de syntaxe de balisage, qui n'est pas incorrect, mais cette «&nbsp;barre oblique de fermeture&nbsp;» n'est pas nécessaire.

## Attributs

Les éléments peuvent aussi avoir des attributs, qui comme suit&nbsp;:

![balise paragraphe avec l'attribut 'class="note-editeur"' mis en évidence](grumpy-cat-attribute-small.svg)

Les attributs contiennent des informations supplémentaires sur l'élément qui ne font pas partie de son contenu. L'attribut **`class`** fournit un nom d'identification qui peut être utilisé pour cibler l'élément avec des styles (CSS) ou des informations de script (JavaScript).

Un attribut doit avoir&nbsp;:

- Un espace entre lui et le nom de l'élément. Quand un élément possède plusieurs attributs, les attributs doivent aussi être séparés par des espaces.
- Le nom de l'attribut, suivi d'un signe égal (`=`).
- Une valeur d'attribut, entourée par des guillemets d'ouverture et de fermeture.

### Ajouter des attributs à un élément

À vous de jouer à nouveau. Dans cette section, vous allez explorer l'élément HTML {{HTMLElement("img")}}, qui sert à afficher une image sur la page. L'élément `<img>` peut recevoir plusieurs attributs, dont&nbsp;:

- `src`&nbsp;: un attribut **obligatoire** qui définit l'{{Glossary("URL")}} de l'image. Par exemple&nbsp;: `src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"`.
- `alt`&nbsp;: définit une description textuelle pour décrire l'image aux personnes qui ne peuvent pas la voir. Par exemple&nbsp;: `alt="Icône Firefox Nightly"`. Cet attribut n'est pas techniquement obligatoire, mais vous devriez toujours fournir une description textuelle pour toutes les images qui véhiculent un sens (et non pour celles purement décoratives).
- `width`&nbsp;: définit la largeur de l'image en pixels. Par exemple&nbsp;: `width="300"`.
- `height`&nbsp;: définit la hauteur de l'image en pixels. Par exemple&nbsp;: `height="300"`.

Suivez les étapes ci-dessous pour réaliser la tâche&nbsp;:

1. Cliquez sur **«&nbsp;Exécuter&nbsp;»** dans le bloc de code ci-dessous pour éditer l'exemple dans le MDN Playground.
2. Trouvez votre image préférée en ligne, faites un clic droit dessus et pressez _Copier le lien/l'adresse de l'image_. Vous pouvez aussi copier l'URL de l'image ci-dessus.
3. De retour dans le MDN Playground, ajoutez l'attribut `src` à l'élément `<img>` et définissez sa valeur avec l'URL de l'étape 2.
4. Définissez l'attribut `alt` avec une description adaptée de l'image.
5. Définissez l'attribut `width` avec une valeur, par exemple `300`, pour mieux voir l'image dans le panneau de sortie. Ajustez la valeur si besoin.

Si vous faites une erreur, vous pouvez effacer votre travail avec le bouton _Réinitialiser_ dans le MDN Playground. Si vous êtes vraiment coincé·e, vous pouvez voir la solution sous le bloc de code.

```html live-sample___basic_html_2
<img />
```

{{EmbedLiveSample('basic_html_2', "100%", 60)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre élément HTML final devrait ressembler à ceci&nbsp;:

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"
  alt="Une description de l'image"
  width="300" />
```

</details>

### Les attributs booléens

Il arrive que vous voyiez des attributs HTML écrits sans valeur. Ce sont des {{Glossary("Boolean/HTML", "attributs booléens")}}. Quand un attribut booléen est ajouté, sa valeur est définie à `true`, peu importe la valeur qui lui est assignée (même sans valeur). Si un attribut n'est pas inclus dans une balise HTML, sa valeur est définie à `false`.

Par exemple, prenez l'attribut [`disabled`](/fr/docs/Web/HTML/Reference/Elements/input#disabled), que vous pouvez affecter aux éléments de formulaire ({{HTMLElement("input")}}) pour empêcher l'utilisateur·ice d'y saisir des données. Par exemple&nbsp;:

```html live-sample___boolean-example
<label for="premier-champ">Ce champ est désactivé</label>
<input id="premier-champ" type="text" disabled="disabled" />
<br />
```

Pour aller plus vite, il est parfaitement possible d'écrire l'attribut `disabled` sans valeur&nbsp;:

```html live-sample___boolean-example
<label for="deuxieme-champ">Ce champ est également désactivé</label>
<input id="deuxieme-champ" type="text" disabled />
<br />
```

Pour référence, ajoutons également un élément `<input>` non désactivé afin que vous puissiez comparer (notez que les champs désactivés sont légèrement grisés dans le rendu ci-dessous)&nbsp;:

```html live-sample___boolean-example
<label for="troisième-champ"
  >Ce champ n'est pas désactivé&nbsp;; vous pouvez y saisir du texte</label
>
<input id="troisième-champ" type="text" />
```

L'exemple HTML ci-dessus s'affiche comme suit&nbsp;:

{{EmbedLiveSample('boolean-example', "100%", 100)}}

> [!NOTE]
> Les éléments HTML {{HTMLElement("label")}} inclus dans le code ci-dessus permettent d'associer des libellés descriptifs aux éléments de formulaire. Nous les avons inclus car c'est une bonne pratique, et pour apporter une séparation entre les champs de formulaire.

### Omettre des guillemets autour des valeurs d'attribut

Il est possible d'omettre les guillemets autour des valeurs d'attribut dans certaines circonstances. Mais comme cela peut casser votre balisage dans d'autres cas, nous vous conseillons de **toujours** inclure les guillemets. Voyons pourquoi.

L'élément dans l'extrait de code ci-dessous, {{HTMLElement("a")}}, s'appelle une **ancre**. Les ancres entourent du texte et le transforment en liens. L'attribut `href` définit l'URL vers laquelle le lien pointe. Vous pouvez omettre les guillemets autour de la valeur de l'attribut `href` ci-dessous sans conséquence négative, car elle ne contient pas d'espaces&nbsp;:

```html
<a href=https://www.mozilla.org>mon site web favori</a>
```

Cependant, vous rencontrerez rapidement des problèmes si vous omettez les guillemets autour des valeurs d'attribut _contenant_ des espaces. Prenons l'attribut `title` ci-dessous, qui fournit une description de la page liée («&nbsp;La page d'accueil Mozilla&nbsp;») devant apparaître comme info-bulle lorsque le lien est survolé par le pointeur de la souris.

```html-nolint example-bad live-sample___bad-no-quotes
<a href=https://www.mozilla.org/ title=La page d'accueil Mozilla>mon site web favori</a>
```

Parce que les guillemets ne sont pas inclus autour de la valeur de l'attribut `title`, le navigateur l'interprète comme trois attributs&nbsp;: un attribut `title` avec la valeur `La`, et deux attributs booléens — `page` et `d'accueil Mozilla`. Évidemment, ce n'est pas ce que nous voulions&nbsp;! Si vous utilisez un appareil avec un pointeur de souris, vous pouvez essayer de survoler le lien pour voir l'infobulle du titre (elle affichera «&nbsp;La&nbsp;» au lieu de «&nbsp;La page d'accueil Mozilla&nbsp;»).

{{EmbedLiveSample('bad-no-quotes', 700, 100)}}

Incluez toujours des guillemets autour des valeurs d'attribut. Cela évite les erreurs et les comportements inattendus, et rend le code plus lisible.

### Guillemets simples ou doubles ?

Dans cet article, nous avons entouré toutes les valeurs d'attribut de guillemets doubles (`"`). Cependant, vous pouvez voir des guillemets simples (`'`) utilisés dans certains codes HTML. C'est une question de style. Vous pouvez choisir librement ce que vous préférez. Les deux lignes suivantes sont équivalentes&nbsp;:

```html-nolint
<a href='http://www.exemple.com'>Un lien vers mon exemple.</a>

<a href="http://www.example.com">Un lien vers mon exemple</a>
```

Assurez-vous de ne pas mélanger les guillemets simples et doubles. L'exemple ci-dessous mélange les guillemets, ce qui entraînera des erreurs car, pour le navigateur, la valeur de l'attribut `href` n'est pas terminée&nbsp;:

```html example-bad
<a href="http://www.exemple.com'>Un lien vers mon exemple.</a>
```

Si vous utilisez un type de guillemet, vous pouvez inclure l'autre type de guillemet _à l'intérieur_ de vos valeurs d'attribut. Cela fonctionne très bien&nbsp;:

```html
<a href="http://www.exemple.com" title="N'est-ce pas drôle ?"
  >Un lien vers mon exemple.</a
>
```

Pour utiliser des guillemets à l'intérieur d'autres guillemets du même type (guillemet simple ou double), vous pouvez utiliser [des références de caractères](#références_dentités_inclure_les_caractères_spéciaux_en_html). Par exemple, ceci ne fonctionnera pas&nbsp;:

```html-nolint example-bad
<a href='http://www.exemple.com' title='N'est-ce pas drôle ?'>Un lien vers mon exemple.</a>
```

Faites plutôt ceci&nbsp;:

```html-nolint
<a href="http://www.exemple.com" title="N'est-ce pas drôle ?"
  >Un lien vers mon exemple.</a
>
```

## Anatomie d'un document HTML

Les éléments HTML individuels ne sont pas très utiles pris isolément. Examinons maintenant comment des éléments individuels se combinent pour former une page HTML complète.

L'exemple suivant est une page web complète très simple&nbsp;:

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

Les parties de cet exemple sont les suivantes&nbsp;:

1. `<!doctype html>`&nbsp;: le doctype. Quand HTML était jeune (1991-1992), les doctypes étaient censés agir comme des liens vers un ensemble de règles que la page HTML devait suivre pour être considérée comme un bon HTML. Les doctypes ressemblaient à ceci&nbsp;:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

De nos jours, le doctype est un artefact historique qui doit être inclus pour que tout fonctionne correctement. `<!doctype html>` est la chaîne de caractères la plus courte qui soit un doctype valide, et il doit être inclus en haut de toutes les pages web. C'est tout ce que vous avez besoin de savoir&nbsp;!

1. `<html></html>`&nbsp;: l'élément {{HTMLElement("html")}}. Cet élément englobe tout le contenu de la page. Il est parfois appelé l'élément racine.
2. `<head></head>`&nbsp;: l'élément {{HTMLElement("head")}}. Cet élément sert de conteneur pour les informations sur la page qui ne font _pas_ partie du contenu visible par les utilisateur·ice·s. Cela peut inclure des mots-clés et une description de la page à afficher dans les résultats de recherche, du CSS pour la mise en forme du contenu, des déclarations d'encodage de caractères, et plus encore. Vous en apprendrez davantage sur l'en-tête de la page dans l'article suivant.
3. `<meta charset="utf-8">`&nbsp;: un élément {{HTMLElement("meta")}}. Cet élément représente des métadonnées qui décrivent la page. L'attribut [`charset`](/fr/docs/Web/HTML/Reference/Elements/meta#charset) définit l'encodage des caractères utilisé par votre document. UTF-8 inclut la plupart des caractères de la grande majorité des langues écrites humaines, ce qui signifie que la page pourra afficher différentes langues sans problème. Il n'y a aucune raison de ne pas le définir, et cela peut éviter certains problèmes plus tard.
4. `<title></title>`&nbsp;: l'élément {{HTMLElement("title")}}. Il définit le titre de la page, c'est-à-dire le titre qui apparaît dans l'onglet du navigateur où la page est chargée. Le titre de la page est également utilisé pour décrire la page lorsqu'elle est ajoutée aux favoris.
5. `<body></body>`&nbsp;: l'élément {{HTMLElement("body")}}. Il contient _tout_ le contenu affiché sur la page, y compris le texte, les images, les vidéos, les jeux, les pistes audio lisibles, etc.

### Ajouter certaines fonctionnalités à un document HTML

À ce stade, nous voulons que vous vous exerciez à écrire un contenu HTML un peu plus conséquent. Pour cela, vous avez plusieurs options — vous pouvez créer le HTML sur votre ordinateur local, ou utiliser le MDN Playground comme dans les exemples précédents.

#### Mise en place de l'exemple

- Pour le faire sur votre ordinateur local&nbsp;:
  1. Copiez l'exemple de page HTML listé dans la section précédente et collez-le dans un nouveau fichier dans votre éditeur de code. Vous pouvez aussi trouver ce [modèle HTML de base <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) sur notre dépôt GitHub.
  2. Apportez les modifications à la page décrites dans les [instructions](#instructions_dexemple).
  3. Enregistrez le fichier sous `index.html` puis chargez-le dans un nouvel onglet de votre navigateur pour voir le résultat.
- Pour le faire dans le MDN Playground, cliquez sur **«&nbsp;Exécuter&nbsp;»** dans le panneau de sortie ci-dessous pour éditer l'exemple, puis suivez les [instructions](#instructions_dexemple). Si vous faites une erreur, vous pouvez effacer votre travail avec le bouton _Réinitialiser_ dans le MDN Playground.

```html hidden live-sample___basic_html_3
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

{{EmbedLiveSample("basic_html_3", "100%", 60)}}

#### Instructions d'exemple

Voici les instructions à suivre&nbsp;:

1. Juste en dessous de la balise d'ouverture de l'élément HTML {{HTMLElement("body")}}, ajoutez un titre principal pour le document. Celui-ci doit être encadré par les balises d'ouverture et de fermeture `<h1></h1>`.
2. Modifiez le contenu du paragraphe pour inclure un texte sur un sujet qui vous intéresse.
3. Faites ressortir les mots importants en gras en les encadrant avec un élément HTML {{HTMLElement("strong")}}.
4. Ajoutez deux liens à votre paragraphe. Cela se fait à l'aide de l'élément HTML {{HTMLElement("a")}}.
5. Ajoutez une image à votre document sous le paragraphe, comme [expliqué plus haut](#ajouter_des_attributs_à_un_élément). Si elle est trop grande pour être visible, ajoutez un attribut `width` pour la réduire.

Si vous êtes vraiment bloqué·e, vous pouvez consulter une solution possible ici&nbsp;:

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Le contenu final de l'élément HTML body devrait ressembler à ceci&nbsp;:

```html
<h1>Un peu de musique</h1>
<p>
  J'aime vraiment beaucoup <strong>jouer de la batterie</strong>. Un de mes
  batteurs préférés est Neal Peart, qui jouait dans le groupe
  <a href="https://fr.wikipedia.org/wiki/Rush_(groupe)">Rush</a>. Actuellement,
  mon album préféré de Rush est
  <a href="https://www.deezer.com/album/942295">Moving Pictures</a>.
</p>
<img
  src="https://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg"
  alt="Pochette de l'album Moving Pictures de Rush"
  width="300" />
```

</details>

## Espace vide en HTML

Dans les exemples précédents, vous avez peut-être remarqué que beaucoup d'espaces sont inclus dans le code — ce n'est pas nécessaire du tout. Les deux extraits de code suivants sont équivalents&nbsp;:

```html-nolint live-sample___whitespace-example
<p id="noWhitespace">Les chiens sont idiots.</p>

<p id="whitespace">Les chiens
    sont
        idiots.</p>
```

Les deux s'affichent exactement de la même façon&nbsp;:

{{EmbedLiveSample('whitespace-example', 700, 100)}}

Dans presque tous les éléments (il existe des exceptions comme {{HTMLElement("pre")}}), peu importe la quantité d'espace que vous utilisez à l'intérieur du contenu d'un élément HTML, l'analyseur HTML réduit chaque séquence d'espaces à un seul espace lors du rendu du code.

C'est à vous de choisir le style de formatage de code que vous préférez. Il est courant d'indenter chaque élément imbriqué de deux espaces de plus que celui qui le contient&nbsp;; c'est le style que nous utilisons sur MDN.

Par exemple&nbsp;:

```html
<section>
  <div>
    <p>Un paragraphe de contenu.</p>
  </div>
</section>
```

## Références d'entités : inclure les caractères spéciaux en HTML

En HTML, les caractères `<`, `>`, `"`, `'` et `&` sont des caractères spéciaux. Ils font partie de la syntaxe HTML elle-même. Alors, comment inclure ces caractères spéciaux dans votre texte&nbsp;? Par exemple, comment utiliser une esperluette ou un signe inférieur littéral dans votre contenu sans qu'il soit interprété comme du code&nbsp;?

Vous devez utiliser des {{Glossary("character reference", "références de caractères")}}. Ce sont des codes spéciaux qui représentent des caractères, à utiliser précisément dans ces circonstances. Chaque référence de caractère commence par une esperluette (`&`), et se termine par un point-virgule (`;`).

| Caractère littéral | Référence équivalent |
| ------------------ | -------------------- |
| <                  | `&lt;`               |
| >                  | `&gt;`               |
| "                  | `&quot;`             |
| '                  | `&apos;`             |
| &                  | `&amp;`              |

Les références de caractères sont assez faciles à mémoriser car le texte qu'elles utilisent est une abréviation du nom du caractère — par exemple «&nbsp;lt&nbsp;» = «&nbsp;<i lang="en">less than</i>&nbsp;» (inférieur à), «&nbsp;quot&nbsp;» = «&nbsp;<i lang="en">quotation</i>&nbsp;» (guillemet), et «&nbsp;amp&nbsp;» = «&nbsp;<i lang="en">ampersand</i>&nbsp;» (esperluette). Pour en savoir plus sur les références d'entités, consultez la [Liste des entités caractère de XML et HTML](https://fr.wikipedia.org/wiki/Liste_des_entit%C3%A9s_de_caract%C3%A8re_de_XML_et_HTML).

Dans l'exemple ci-dessous, il y a deux paragraphes&nbsp;:

```html-nolint live-sample___entity-ref-example
<p>En HTML, un paragraphe se définit avec l'élément <p>.</p>

<p>En HTML, un paragraphe se définit avec l'élément &lt;p&gt;.</p>
```

Le rendu est le suivant&nbsp;:

{{EmbedLiveSample("entity-ref-example", 700, 150)}}

Vous pouvez voir que le premier paragraphe n'est pas correctement affiché, car le navigateur a interprété la seconde occurrence de `<p>` comme le début d'un nouveau paragraphe. Le second paragraphe s'affiche correctement car les chevrons du contenu «&nbsp;&lt;p&gt;&nbsp;» sont représentés par des références de caractères.

> [!NOTE]
> Vous n'avez pas besoin d'utiliser des références d'entité pour d'autres symboles, car les navigateurs modernes les afficheront correctement tant que [l'encodage de caractères de votre HTML est défini sur UTF-8](/fr/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#définir_lencodage_des_caractères_du_document).

## Commentaires en HTML

En HTML, comme pour la plupart des langages de programmation, il existe un mécanisme permettant d'écrire des commentaires dans le code. Les commentaires sont ignorés par le navigateur et sont donc invisibles à l'utilisateur·ice. Leur but est de permettre d'inclure des notes dans le code pour expliquer son fonctionnement. Cela peut s'avérer très utile si vous revenez à une base de code après une longue absence et que vous ne vous en souvenez plus, ou si quelqu'un d'autre commence à travailler dessus sans l'avoir vue auparavant.

Pour écrire un commentaire HTML, entourez-le des marqueurs spéciaux `<!--` et `-->`, comme montré ci-dessous&nbsp;:

```html live-sample___comment-example
<p>Je ne suis pas dans un commentaire</p>

<!-- <p>Je suis dans un commmentaire!</p> -->
```

Le rendu est le suivant&nbsp;:

{{EmbedLiveSample('comment-example', 700, 100)}}

Seul le premier paragraphe s'affiche dans la sortie en direct&nbsp;; la seconde ligne n'est pas rendue car il s'agit d'un commentaire HTML.

## Résumé

Vous êtes arrivé·e au bout de l'article&nbsp;! Nous espérons que vous avez apprécié votre tour des bases du HTML.

À ce stade, vous devez comprendre à quoi ressemble le HTML et comment il fonctionne à un niveau de base. Vous devriez également être capable d'écrire quelques éléments et attributs. Les articles suivants de ce module approfondissent certains des sujets introduits ici et présentent d'autres sujets.

> [!NOTE]
> Lorsque vous commencez à en apprendre davantage sur le HTML, envisagez également d'apprendre les bases du [CSS](/fr/docs/Learn_web_development/Core/Styling_basics), le langage utilisé pour mettre en forme les pages Web (par exemple, changer les couleurs, les polices et les espacements). HTML et CSS sont utilisés ensemble sur la plupart des pages Web, et les apprendre simultanément peut être efficace.

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
