---
title: Cascade, spécificité et héritage
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
l10n:
  sourceCommit: 62681c2ef134407009c5c11fa679db1f485e016d
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}

L'objectif de ce chapitre est de mieux comprendre certains des concepts fondamentaux de CSS que sont la cascade, la spécificité et l'héritage. Tous les trois contrôlent la façon dont le CSS est appliqué au HTML et comment les éventuels conflits entre les déclarations de style sont résolus.

Bien que ce chapitre puisse sembler plus théorique voire académique que d'autres dans ce parcours, comprendre ces concepts vous facilitera la tâche par la suite&nbsp;! Nous vous recommandons de suivre ce chapitre avec attention et de vérifier que vous comprenez bien les concepts avant d'aller plus loin.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Notions élémentaires d'informatique, <a href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software">logiciels de base installés</a>, savoir comment <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files">travailler avec les fichiers</a>, connaître les bases de HTML (voir <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">Introduction à HTML</a>), et avoir une idée du fonctionnement de CSS (voir <a href="/fr/docs/Learn/CSS/First_steps">Premiers pas en CSS</a>).</td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>Apprendre le fonctionnement de la cascade, de la spécificité et de l'héritage en CSS.</td>
    </tr>
  </tbody>
</table>

## Règles conflictuelles

CSS est l'acronyme pour **<i lang="en">Cascading Style Sheets</i>** (soit «&nbsp;feuilles de style en cascade&nbsp;» en français). Comprendre cette notion de _cascade_, présente dans cet acronyme, est fondamental pour comprendre CSS.

Lorsque vous travaillerez sur un projet, vous rencontrerez peut-être une règle CSS dont vous pensez qu'elle devrait s'appliquer à un élément, mais qui ne fonctionne pas. Il arrive souvent que le problème vienne de deux règles qui appliquent différentes valeurs pour la même propriété sur le même élément. [**La cascade**](/fr/docs/Web/CSS/Cascade) et [**la spécificité**](/fr/docs/Web/CSS/Specificity) sont des mécanismes qui contrôlent quelle règle s'applique lorsqu'un tel conflit se produit. Autrement dit, la règle qui met en forme votre élément peut ne pas être celle à laquelle vous vous attendez et comprendre ces mécanismes vous aidera à diagnostiquer, corriger voire éviter ces problèmes.

Un autre concept fondamental est [**l'héritage**](/fr/docs/Web/CSS/Inheritance). Celui-ci décrit comment certaines propriétés CSS héritent ou non par défaut des valeurs appliquées aux éléments parents. Là aussi, cela peut être une source de confusion si on ne comprend pas ce mécanisme alors qu'on observe un comportement inattendu.

Commençons par un aperçu rapide de ces notions avant de les détailler une à une puis d'étudier leurs interactions entre elles et avec votre code CSS. Cela peut sembler complexe de prime abord, mais au fur et à mesure que vous écrirez du CSS, ce fonctionnement deviendra plus naturel.

### Cascade

Les feuilles de style forment une [**cascade**](/fr/docs/Web/CSS/Cascade). Sous une forme très simple, cela signifie que l'origine, la couche de cascade et l'ordre des règles CSS comptent. Lorsque deux règles de la même couche de cascade s'appliquent et ont la même spécificité, c'est celle qui est définie dans la dernière feuille de style qui sera utilisée.

Dans l'exemple qui suit, il y a deux règles qui pourraient s'appliquer à l'élément `<h1>`. Le contenu de cet élément `<h1>` est, en fin de compte, coloré en bleu. Dans cet exemple, les deux règles proviennent de la même source et ont un sélecteur identique&nbsp;: elles ont donc la même spécificité et c'est alors la dernière règle, selon l'ordre du code source, qui l'emporte.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-simple.html", '100%', 500)}}

### Spécificité

[La spécificité](/fr/docs/Web/CSS/Specificity) est l'algorithme utilisé par le navigateur pour décider la valeur qui est appliquée à un élément pour une propriété donnée. Si plusieurs blocs de style utilisent différents sélecteurs qui configurent la même propriété avec différentes valeurs et qui ciblent le même élément, c'est la spécificité qui permet de décider la valeur de propriété qui est appliquée à l'élément. La spécificité est une mesure de la précision d'un sélecteur&nbsp;:

- Un sélecteur d'élément est peu spécifique&nbsp;: il sélectionnera tous les éléments d'un type donné sur la page. Il a donc moins de poids. Les sélecteurs de pseudo-éléments ont la même spécificité que les sélecteurs d'éléments.
- Un sélecteur de classe sera plus spécifique&nbsp;: il sélectionnera uniquement les éléments d'une page qui ont une valeur d'attribut `class` donnée. Il a donc un poids plus important. Les sélecteurs d'attributs et de pseudo-classes ont le même poids que les sélecteurs de classes.

Dans l'exemple qui suit, nous avons à nouveau deux règles qui pourraient s'appliquer à l'élément `<h1>`. Le contenu de cet élément est finalement coloré en rouge, car le sélecteur de classe `main-heading` donne une spécificité plus importante à la règle. Ainsi, même si la règle avec le sélecteur d'élément pour `<h1>` apparaît plus bas dans le code source, c'est la règle avec la spécificité la plus haute (celle utilisant le sélecteur de classe) qui est appliquée.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-simple.html", '100%', 600)}}

Nous reviendrons sur cet algorithme dans la suite du chapitre.

### Héritage

Certaines propriétés dont les valeurs sont définies sur des éléments parents sont héritées par leurs enfants, tandis que d'autres ne sont pas héritées.

Ainsi, si on définit des valeurs pour les propriétés `color` et `font-family` sur un élément, chaque élément enfant qu'il contient sera également mis en forme avec cette couleur et cette police, à moins qu'une couleur ou une police différente ait été appliquée directement sur ces éléments.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance-simple.html", '100%', 650)}}

L'héritage ne concerne pas toutes les propriétés. Ainsi, si on fixe [`width`](/fr/docs/Web/CSS/width) à `50%` sur un élément, cela ne signifie pas que tous ses descendants auront une largeur égale à 50% de celle de leur parent. Si c'était le cas, CSS serait inutilement complexe.

> **Note :** Sur chaque page MDN documentant une propriété CSS, vous pourrez voir un encart intitulé «&nbsp;Définition formelle&nbsp;» qui indique les caractéristiques de cette propriété et notamment son caractère hérité ou non. Voir [la section de la définition formelle pour la propriété `color`](/fr/docs/Web/CSS/color#définition_formelle) comme exemple.

## Comprendre l'héritage

Commençons par approfondir l'héritage. Dans l'exemple qui suit, nous avons un élément [`<ul>`](/fr/docs/Web/HTML/Element/ul) qui contient deux niveaux imbriqués de listes non ordonnées. Pour l'élément `<ul>` extérieur, nous avons indiqué une bordure, un remplissage (<i lang="en">padding</i>) et une couleur de police.

La propriété `color` est une propriété héritée. Aussi, la valeur de la propriété `color` s'appliquent aux enfants directs ainsi qu'aux enfants indirects. Dans notre exemple, la valeur s'applique donc pour les éléments `<li>` qui sont des enfants directs et pour les éléments de la première liste imbriquée. On a ajouté la classe `special` à la deuxième liste imbriquée pour y appliquer une autre couleur. Les enfants de celle-ci héritent donc de cette autre valeur.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance.html", '100%', 1100)}}

Les propriétés comme `width` (mentionnée avant), `margin`, `padding`, et `border` ne sont pas héritées. Dans notre exemple, si la bordure était héritée par les enfants, chaque liste et chaque élément de la liste recevrait une bordure, produisant un effet qui n'est sans doute pas celui recherché&nbsp;!

L'information sur l'héritage ou non de la propriété est présente sur les pages qui les documentent. En sachant l'aspect modifié par la propriété, on peut généralement deviner si la propriété est héritée.

### Contrôler l'héritage

CSS fournit 5 valeurs spéciales et universelles pour les propriétés afin de contrôler l'héritage. Ainsi, chaque propriété CSS acceptera ces valeurs&nbsp;:

- [`inherit`](/fr/docs/Web/CSS/inherit)
  - : Applique la valeur de l'élément parent sur l'élément ciblé. Cela «&nbsp;force&nbsp;» l'héritage.
- [`initial`](/fr/docs/Web/CSS/initial)
  - : Applique la [valeur initiale](/fr/docs/Web/CSS/initial_value) de la propriété sur l'élément ciblé.
- [`revert`](/fr/docs/Web/CSS/revert)
  - : Réinitialise la valeur de la propriété de l'élément ciblé avec la mise en forme par défaut du navigateur. Cette valeur agit comme [`unset`](/fr/docs/Web/CSS/unset) dans la plupart des cas.
- [`revert-layer`](/fr/docs/Web/CSS/revert-layer)
  - : Réinitialise la valeur de la propriété de l'élément ciblé avec celle établie dans une [couche de cascade](/fr/docs/Web/CSS/@layer) précédente.
- [`unset`](/fr/docs/Web/CSS/unset)
  - : Réinitialise la propriété avec sa valeur naturelle. Autrement dit, si la propriété est naturellement héritée, ce mot-clé sera synonyme de `inherit`, sinon, il sera synonyme de `initial`.

> **Note :** Voir [la section sur les types d'origine](/fr/docs/Web/CSS/Cascade#types_dorigine) pour plus d'informations sur ces valeurs et leur fonctionnement.

Utilisons un exemple avec une liste de liens pour observer comment ces valeurs fonctionnent. Dans l'éditeur qui suit, vous pouvez éditer le CSS et voir l'effet de vos changements. Utilisez cette interactivité pour mieux comprendre le comportement de HTML et de CSS.

Dans notre exemple&nbsp;:

1. Le deuxième élément de la liste a la classe `my-class-1`. La couleur de l'élément `<a>` qui y est imbriqué est donc fixée avec `inherit`. Si vous retirez la règle, quel effet cela a-t-il sur la couleur du lien&nbsp;?
2. Comprenez-vous pourquoi les troisième et quatrième liens ont cette couleur&nbsp;? Le troisième lien utilise la valeur `initial` et c'est donc la valeur initiale de la propriété (ici le noir) et non la valeur par défaut du navigateur (le bleu) qui est utilisée. Pour le quatrième, on utilise `unset`, ce qui signifie que le texte du lien utilise la couleur de l'élément parent&nbsp;: vert.
3. Lequel de ces liens changera de couleur si vous ciblez les liens pour y définir une couleur `a { color: red; }`&nbsp;?
4. Après avoir lu la section qui suit, revenez à cet exemple et renommez la propriété `color` en `all`. Voyez comment le deuxième lien passe à la ligne et est précédé d'une puce. D'après vous, quelles propriétés étaient héritées&nbsp;?

{{EmbedGHLiveSample("css-examples/learn/cascade/keywords.html", '100%', 800)}}

### Réinitialiser les valeurs de toutes les propriétés

La propriété CSS raccourcie [`all`](/fr/docs/Web/CSS/all) peut être utilisée afin d'appliquer une valeur d'héritage à (presque) toutes les propriétés. Cette propriété peut utiliser l'une des 5 valeurs d'héritage vues avant (`inherit`, `initial`, `revert`, `revert-layer`, ou `unset`). Il s'agit d'une méthode pratique pour annuler les modifications appliquées à des mises en forme et revenir à un point de départ connu avant d'appliquer d'autres modifications.

Dans l'exemple qui suit, on a deux blocs de citation. Le premier est mis en forme avec une règle qui cible l'élément. Le second est mis en forme via une classe appliquée à l'élément et qui définit la propriété `all` avec la valeur `unset`.

{{EmbedGHLiveSample("css-examples/learn/cascade/all.html", '100%', 800)}}

Essayez de changer la valeur de `all` en utilisant les autres valeurs d'héritage pour voir les différences.

## Comprendre la cascade

On comprend maintenant que l'héritage est ce qui propage la couleur du document à un paragraphe imbriqué profondément dans un document HTML. Avec les premiers articles d'introduction, nous comprenons comment modifier le CSS appliqué à un endroit du document, que ce soit en affectant des règles à un élément ou en passant par une classe. Nous allons désormais voir comment la cascade définit les règles CSS qui s'appliquent lorsque plusieurs blocs ciblent le même élément et paramètrent une même propriété, mais avec des valeurs différentes.

Il existe trois facteurs à prendre en compte, listés ici par ordre croissant d'importance (le dernier élément de la liste a plus d'importance que le deuxième, qui en a plus que le premier)&nbsp;:

1. **L'ordre des sources**
2. **La spécificité**
3. **L'importance**

Nous allons décrire chacun de ces facteurs pour voir comment les navigateurs déterminent la valeur à appliquer.

### Ordre du code source

Nous avons déjà vu comment l'ordre des sources importait pour la cascade. S'il y a plus d'une règle et que toutes ont le même poids, c'est celle qui arrive en dernier dans le code source qui l'emporte. On peut reformuler ceci de la façon suivante&nbsp;: c'est la règle qui est la plus proche de l'élément qui l'emporte et annule les précédentes.

L'ordre des sources n'a d'importance que lorsque le poids apporté par la spécificité est le même. Voyons donc comment celle-ci fonctionne.

### Comprendre la spécificité

Vous rencontrerez parfois une situation où ce n'est pas la dernière règle portant sur une propriété qui s'applique mais une règle conflictuelle et antérieure. Cela se produit, car la règle antérieure possède une **spécificité antérieure**&nbsp;: elle est plus spécifique et est donc choisie par le navigateur pour mettre en forme l'élément.

Comme vu plus tôt dans cet article, un sélecteur de classe a un poids supérieur à un sélecteur d'élément. Aussi, les propriétés définies dans un bloc ciblant une classe l'emporteront sur celles qui sont définies dans un bloc ciblant un élément.

On notera cependant que ce n'est pas la règle entière qui est remplacée mais bien uniquement les propriétés qui sont déclarées à plusieurs endroits.

Ce comportement permet d'éviter les répétitions dans les feuilles de style. La pratique usuelle consiste à définir des styles génériques pour les éléments de base, puis de créer des classes pour les éléments qui sont différents. Ainsi, dans la feuille de styles qui suit, on a défini des styles génériques pour les titres de niveau 2, puis créé des classes qui ne changent que certaines propriétés et valeurs. Les valeurs définies initialement sont appliquées pour tous les titres, puis les valeurs plus spécifiques sont appliquées aux titres avec les classes.

{{EmbedGHLiveSample("css-examples/learn/cascade/mixing-rules.html", '100%', 1000)}}

Voyons désormais comment le navigateur calcule la spécificité d'un sélecteur. Nous savons déjà qu'un sélecteur d'élément possède une spécificité inférieure à celle d'un sélecteur de classe. La spécificité est une valeur en points, associée à chaque type de sélecteur et la somme de ces poids fournit la spécificité d'un sélecteur composite donné. Cette mesure peut alors comparer aux autres.

La spécificité d'un sélecteur est mesurée selon 3 composantes différentes, qu'on peut voir comme des colonnes de centaines, dizaines et unités qui correspondent respectivement aux&nbsp;:

- Identifiant
  - : On marque un point dans cette colonne pour chaque sélecteur d'identifiant contenu dans le sélecteur composite.
- Classe
  - : On marque un point dans cette colonne pour chaque sélecteur de classe, d'attribut ou de pseudo-classe contenu dans le sélecteur composite.
- Élément
  - : On marque un point dans cette colonne pour chaque sélecteur d'élément ou de pseudo-élément contenu dans le sélecteur composite.

> **Note :** Le sélecteur universel ([`*`](/fr/docs/Web/CSS/Universal_selectors)), [les combinateurs](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators) (`+`, `>`, `~`, ' '), et le sélecteur d'ajustement de spécificité ([`:where()`](/fr/docs/Web/CSS/:where)) et ses paramètres n'ont pas d'effet sur la spécificité.

Les pseudo-classes de négation ([`:not()`](/fr/docs/Web/CSS/:not)), de sélection relationnelle ([`:has()`](/fr/docs/Web/CSS/:has)), et de correspondance ([`:is()`](/fr/docs/Web/CSS/:is)) n'ont pas d'effet par elles-mêmes sur la spécificité, ce sont leurs paramètres qui ont un impact. La contribution à la spécificité du sélecteur de chacune de ses pseudo-classes est égale à la spécificité la plus grande parmi les paramètres qui lui sont passés.

Le tableau qui suit illustre quelques exemples pour une approche plus concrète. N'hésitez pas à les décomposer et assurez vous de bien comprendre la spécificité obtenue. Nous n'avons pas encore abordé tous les sélecteurs en détails, mais vous pourrez trouver leurs documentations respectives sur MDN au sein de [la référence des sélecteurs](/fr/docs/Web/CSS/CSS_Selectors/Selectors_and_combinators).

| Sélecteur                                 | Identifiants | Classes | Éléments | Spécificité totale |
| ----------------------------------------- | ------------ | ------- | -------- | ------------------ |
| `h1`                                      | 0            | 0       | 1        | 0-0-1              |
| `h1 + p::first-letter`                    | 0            | 0       | 3        | 0-0-3              |
| `li > a[href*="en-US"] > .inline-warning` | 0            | 2       | 2        | 0-2-2              |
| `#identifier`                             | 1            | 0       | 0        | 1-0-0              |
| `button:not(#mainBtn, .cta`)              | 1            | 0       | 1        | 1-0-1              |

Avant d'aller plus loin, étudions un exemple.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-boxes.html", '100%', 800)}}

Que se passe-t-il ici&nbsp;? Pour commencer, nous ne nous intéressons qu'aux sept premières règles de l'exemple. Vous pouvez voir que nous avons inclus les valeurs des spécificités dans un commentaire avant chaque règle.

- Les deux premiers sélecteurs sont en compétition pour la couleur d'arrière-plan du lien. C'est le second qui l'emporte et qui donne la couleur bleue, car il possède un sélecteur d'identifiant supplémentaire. Sa spécificité vaut donc 2-0-1 alors que celle du premier sélecteur vaut 1-0-1.
- Les troisième et quatrième sélecteurs sont en compétition pour la couleur du texte du lien. C'est le quatrième qui l'emporte et qui donne un texte blanc. En effet, bien qu'il ait un sélecteur d'élément en moins, celui-ci est remplacé par un sélecteur de classe, qui possède une spécificité plus élevée que n'importe quelle combinaison de sélecteurs d'élément. La spécificité 1-1-3 l'emporte sur la spécificité 1-0-4.
- Les trois derniers sélecteurs portent sur la mise en forme de la bordure du lien au survol. Le sixième sélecteur cède la place au cinquième (avec des spécificités respectives de 0-2-3 et 0-2-4), car il a un sélecteur d'élément en moins. Le septième sélecteur l'emporte sur ces deux autres, car il a le même nombre de sous-sélecteurs que le cinquième et qu'un sélecteur d'élément a été remplacé par un sélecteur de classe. La spécificité 0-3-3 l'emporte donc sur les spécificités 0-2-3 et 0-2-4.

> **Note :** Chaque type de sélecteur possède son propre niveau de spécificité et il n'est pas possible de renverser cette hiérarchie de type. Par exemple, l'assemblage d'un _million_ de sélecteurs de **classe** ne l'emporterait toujours pas sur la spécificité d'_un seul_ sélecteur d'**identifiant**.
>
> La meilleure façon pour évaluer la spécificité est de calculer les scores des composantes individuelles en commençant par la catégorie la plus élevée et en allant vers les plus faibles si nécessaire. En effet, il est uniquement nécessaire de calculer la spécificité d'une catégorie inférieure lorsqu'il y a égalité au niveau supérieur.

### Styles en incise dans le document

Les styles en incise du document (c'est-à-dire les déclarations de style présentes dans les attributs [`style`](/fr/docs/Web/HTML/Global_attributes#style)) l'emportent sur toutes les règles déclarées dans les feuilles de style, quelle que soit leur spécificité. De telles déclarations n'utilisent pas de sélecteurs, mais on peut considérer leur spécificité comme 1-0-0-0, l'emportant ainsi toujours sur toute autre spécificité, quel que soit le nombre d'identifiants dans le sélecteur composite.

### `!important`

Il existe une méthode permettant de passer outre toutes ces règles, y compris les styles en incise&nbsp;: `!important`. Toutefois, il faut faire preuve de prudence en l'utilisant. Ce marqueur permet de rendre une paire de propriété/valeur la plus spécifique, outrepassant les règles normales de la cascade, y compris pour les styles indiqués dans le document.

> **Attention :** Il est utile de savoir que le marqueur `!important` existe afin de comprendre son effet lorsqu'on le voit dans des bases de code. **Toutefois, il est fortement recommandé de ne pas l'utiliser sauf en cas d'extrême nécessité.** Le marqueur `!important` change la façon dont la cascade fonctionne et peut largement complexifier le débogage de problèmes CSS, notamment pour les grandes feuilles de style.

Prenons un exemple où nous avons deux paragraphes, dont un qui porte un identifiant.

{{EmbedGHLiveSample("css-examples/learn/cascade/important.html", '100%', 800)}}

Voyons ce qui se passe ici (vous pouvez retirer certaines des propriétés et observer ce qui se produit si vous ne comprenez pas de prime abord)&nbsp;:

1. Vous pouvez voir que les valeurs de [`color`](/fr/docs/Web/CSS/color) et [`padding`](/fr/docs/Web/CSS/padding) ont été appliquées avec la troisième règle mais que ce n'est pas le cas de [`background-color`](/fr/docs/Web/CSS/background-color). Pourquoi ça&nbsp;? Les trois déclarations devraient s'appliquer, car elles arrivent après dans l'ordre du code source, l'emportant ainsi sur les règles précédentes.
2. Toutefois, ce sont les règles précédentes qui l'emportent avec les sélecteurs de classe qui ont une spécificité supérieure aux sélecteurs d'éléments.
3. Les deux éléments ont une [classe](/fr/docs/Web/HTML/Global_attributes#class) `better`, et le second porte en plus [l'identifiant](/fr/docs/Web/HTML/Global_attributes#id) `winning`. Comme les identifiants ont une spécificité _toujours supérieure_ à celle des classes (on peut uniquement avoir un seul élément avec un identifiant donné sur une page, mais de nombreux éléments peuvent se partager une même classe), l'arrière-plan rouge et la bordure noire de 1 pixel devraient s'appliquer au second élément et le premier devrait avoir un arrière-plan gris sans bordure, tel qu'indiqué par la classe.
4. En réalité, le second élément récupère bien l'arrière-plan rouge, mais pas la bordure&nbsp;? Pourquoi&nbsp;? C'est l'effet du marqueur `!important` dans la deuxième règle. Ajouter `!important` après `border: none` signifie que cette déclaration l'emportera sur toutes les valeurs de `border` des règles précédentes, même si le sélecteur d'identifiant possède une spécificité supérieure.

> **Note :** La seule façon de surcharger une déclaration importante est d'inclure une autre déclaration importante avec _la même spécificité_ plus tard dans le code source, ou d'en placer une avec une spécificité supérieure, ou d'inclure une déclaration importante dans une couche de cascade antérieure (nous n'avons pas encore abordé le sujet des couches de cascade).

Un scénario où on peut justifier l'utilisation du marqueur `!important` est le travail dans un outil de gestion de contenu où il n'est pas possible d'éditer le CSS sous-jacent et qu'on souhaite malgré tout surcharger la mise en forme avec un style en incise ou une déclaration importante et qu'on ne peut pas faire autrement. Ceci étant dit, il est toujours préférable d'éviter `!important` quand on peut.

## Impact de l'emplacement

Enfin, il faut noter que la précédence d'une déclaration CSS dépend de la feuille de styles et de la couche de cascade de laquelle elle provient.

Les personnes peuvent utiliser des feuilles de styles personnalisées qui l'emporteront sur les styles indiqués par le site. Ainsi, une personne avec un handicap visuel pourra utiliser une taille de caractère deux fois plus grande pour toutes les pages web qu'elle visite afin d'en faciliter la lecture.

Il est également possible de déclarer les styles d'un site dans des couches de cascades. Les styles qui ne sont pas dans des couches l'emporteront sur ceux qui sont déclarés dans des couches et les styles déclarés dans les couches ultérieures l'emporteront sur les styles des couches antérieures. Par exemple, lorsqu'on développe, on voudra éviter d'éditer une feuille de style tierce. Pour éviter cela, on pourra importer cette feuille de styles externe dans une couche de cascade afin que les styles qu'on gère l'emporte sur ceux qui sont importés, sans se soucier de la spécificité des sélecteurs tiers.

### Ordre des déclarations

Les déclarations conflictuelles seront appliquées dans l'ordre suivant. Celles qui arrivant après dans la liste l'emporteront sur les éléments antérieurs&nbsp;:

1. Les déclarations des feuilles de style du navigateur (c'est-à-dire la mise en forme par défaut du navigateur, en l'absence de toute autre mise en forme).
2. Les déclarations normales des feuilles de styles de l'utilisatrice ou de l'utilisateur (les styles personnalisés, propres à chaque personne).
3. Les déclarations normales des feuilles de styles du site (écrites par les équipes de développement web).
4. Les déclarations importantes des feuilles de styles du site.
5. Les déclarations importantes des feuilles de styles de l'utilisatrice ou de l'utilisateur.
6. Les déclarations importantes des feuilles de style du navigateur.

> **Note :** L'ordre de précédence est inversé pour les styles marqués avec `!important`. En effet, les équipes de développement web pourraient vouloir surcharger les feuilles de styles des personnes afin de s'assurer qu'un <i lang="en">design</i> fonctionne correctement. Toutefois, les personnes peuvent avoir de bonnes raisons de surcharger ces styles provenant du site et peuvent le faire à l'aide de `!important` dans leurs règles.

### Ordre des couches de cascade

[Les couches de cascade](/fr/docs/Web/CSS/@layer) constituent un sujet avancé qui ne vous sera peut-être pas utile immédiatement. Toutefois, il est important de comprendre comment les différentes couches forment une cascade.

Lorsqu'on déclare du CSS dans des couches de cascade, la précédence est déterminée par l'ordre de déclaration des couches. Les styles CSS déclarés en dehors des couches sont combinés ensemble, selon leur ordre de déclaration, dans une couche anonyme, agissant comme la dernière couche déclarée. Lorsqu'il y a conflit entre des styles normaux (et pas importants), ce sont les couches ultérieures qui l'emportent sur les couches antérieures. Pour les styles importants (marqués avec `!important`), cet ordre est inversé et ce sont les styles importants des couches antérieures qui l'emportent sur les styles importants des couches ultérieures ou des styles de la couche anonyme. Les styles en incise dans le document l'emportent sur n'importe quel style du site, quelle que soit la couche.

Lorsque plusieurs blocs de style, appartenant à différentes couches, sont en conflit pour définir la valeur d'une propriété pour un élément donné, c'est la couche où sont déclarés les styles qui détermine la précédence. La spécificité entre les couches n'a pas d'importance, seule la spécificité au sein de la couche utilisée aura un rôle à jouer.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-layers.html", '100%', 800)}}

Voyons quelques choses à propos de l'exemple qui précède. Deux couches ont été déclarées, `firstLayer` et `secondLayer`, dans cet ordre. Bien que la spécificité de `secondLayer` soit plus élevée, aucune propriété de cette déclaration n'est utilisée. En effet, les styles normaux qui ne sont pas dans des couches l'emportent sur les styles présents dans des couches, quelle que soit la spécificité. Les styles importants présents dans des couches l'emportent sur les styles importants des couches ultérieures, quelle que soit la spécificité.

Si vous changez la première ligne du CSS de cet exemple par `@layer secondLayer, firstLayer;`, cela changera l'ordre de déclaration des couches et les styles importants de `firstLayer` seront changés avec les valeurs respectives provenant de `secondLayer`.

## Évaluez vos compétences

Vous avez terminé l'article, mais avez-vous mémorisé les informations essentielles&nbsp;? Vous pouvez vérifier que c'est le cas en vous évaluant avec [l'évaluation sur la cascade](/fr/docs/Learn/CSS/Building_blocks/Cascade_tasks).

## Résumé

Si vous avez compris une bonne partie de cet article, vous êtes sur la bonne voie pour comprendre les mécaniques fondamentales de CSS. Dans le prochain module, nous verrons [le modèle de boîtes](/fr/docs/Learn/CSS/Building_blocks/The_box_model) en détails.

Si vous n'avez pas encore complètement compris la cascade, la spécificité et l'héritage, pas de souci&nbsp;! Il s'agit très certainement des notions les plus avancées parmi ces modules et qui restent délicates, même pour les personnes dont le développement web est le métier. Nous vous conseillons de revenir à cet article quelques fois au fur et à mesure du parcours pour réviser ces notions.

Si vous rencontrez des problèmes étranges où votre mise en forme ne s'applique pas ou de façon inattendue, revenez voir cette page, il se peut que ce soit un problème de spécificité.

{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}
