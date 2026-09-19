---
title: Utiliser la syntaxe avec plusieurs mots-clés avec la disposition CSS
short-title: Utiliser la syntaxe avec plusieurs mots-clés
slug: Web/CSS/Guides/Display/Multi-keyword_syntax
l10n:
  sourceCommit: 3a69b74048ff2480c481ace3e689fbb4d510f3e5
---

Le [module de disposition CSS](/fr/docs/Web/CSS/Guides/Display) définit une syntaxe avec plusieurs mots-clés pour la propriété CSS {{CSSxRef("display")}}. Ce guide explique la syntaxe avec plusieurs mots-clés.

> [!NOTE]
> La syntaxe avec plusieurs mots-clés est également appelée «&nbsp;syntaxe à deux valeurs&nbsp;» ou «&nbsp;syntaxe à plusieurs valeurs&nbsp;».

## Que se passe-t-il lorsque nous changeons la valeur de la propriété `display` ?

L'une des premières choses que nous apprenons sur CSS est que certains éléments sont de niveau bloc et d'autres de niveau en incise. Ce sont leurs types d'affichage [externes](/fr/docs/Web/CSS/Reference/Values/display-outside). Par exemple, un `<h1>` ou un `<p>` sont de niveau bloc par défaut, et un `<span>` est de niveau en incise. En utilisant la propriété {{CSSxRef("display")}} nous pouvons passer de bloc à en incise. Par exemple, pour rendre un titre en incise, nous utiliserions le CSS suivant&nbsp;:

```css
h1 {
  display: inline;
}
```

La propriété `display` permet également d'utiliser la [disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) et la [disposition flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) lorsque `display: grid` ou `display: flex` est défini. Le concept important à comprendre est que la modification de la valeur `display` d'un élément peut modifier le contexte de mise en forme de ses enfants directs. Lorsque vous utilisez `display: flex` ou `display: grid`, les enfants de l'élément deviennent des éléments flexibles ou de grille et réagissent aux propriétés définies dans les spécifications des dispositions en grille et flexibles.

Les dispositions en grille et flexibles montrent toutefois qu'un élément possède à la fois un type d'affichage **externe** et un type d'affichage **interne**. Le type d'affichage externe indique si l'élément est de niveau bloc ou en incise. Le type d'affichage interne décrit le comportement des enfants de cette boîte.

Par exemple, lorsque nous utilisons `display: flex`, nous créons un conteneur de niveau bloc avec des enfants flexibles. Les enfants sont décrits comme participant à un contexte de mise en forme flexible. Vous pouvez le constater en prenant un `<span>` — normalement un élément de niveau en incise — et en lui appliquant `display: flex`. Le `<span>` devient un élément de niveau bloc. Il se comporte comme les éléments de niveau bloc par rapport aux autres boîtes de la disposition. C'est comme si vous aviez appliqué `display: block` à cet élément, mais nous obtenons également une modification du comportement des enfants.

L'exemple interactif ci-dessous contient un `<span>` auquel `display: flex` est appliqué. Il est devenu une boîte de niveau bloc qui occupe tout l'espace disponible dans la direction en incise. Vous pouvez maintenant utiliser `justify-content: space-between` pour répartir cet espace entre les deux éléments flexibles.

```html live-sample___span-flex
<span class="flex"> Du texte <em>mis en évidence</em> </span>
```

```css live-sample___span-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex {
  border: 5px solid #cccccc;
  display: flex;
  justify-content: space-between;
}
```

{{EmbedLiveSample("span-flex")}}

Il est également possible de créer des conteneurs flexibles en incise. Si vous utilisez la valeur unique `inline-flex`, vous obtenez une boîte de niveau en incise avec des enfants flexibles. Les enfants se comportent de la même manière que les enfants flexibles d'un conteneur de niveau bloc. La seule modification concerne le parent, qui est désormais une boîte de niveau en incise. Il se comporte donc comme les autres éléments de niveau en incise et n'occupe pas toute la largeur (ou toute la taille dans la dimension en incise) d'une boîte de niveau bloc. Du texte placé ensuite peut donc apparaître à côté du conteneur flexible.

```html live-sample___inline-flex
<div class="flex">
  <div>Un</div>
  <div>Deux</div>
</div>
Texte suivant le conteneur flexible.
```

```css live-sample___inline-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex > div {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.flex {
  border: 5px solid #cccccc;
  display: inline-flex;
}
```

{{EmbedLiveSample("inline-flex")}}

Il en va de même avec une disposition en grille. Utiliser `display: grid` fournit une boîte de niveau bloc qui crée un contexte de mise en forme en grille pour les enfants directs. Utiliser `display: inline-grid` crée une boîte de niveau en incise qui crée un contexte de mise en forme en grille pour les enfants.

## Utiliser la syntaxe avec plusieurs mots-clés

Comme l'explication précédente le montre, la propriété `display` possède des capacités importantes. En plus d'indiquer si quelque chose est de niveau bloc ou de niveau en incise par rapport aux autres boîtes de la page, elle indique également le contexte de mise en forme à l'intérieur de la boîte à laquelle elle s'applique. Pour mieux décrire ce comportement, la propriété `display` accepte deux valeurs — une valeur externe et une valeur interne — la syntaxe originale à valeur unique reste également valide.

Ainsi, au lieu de définir `display: flex` pour créer une boîte de niveau bloc avec des enfants flexibles, nous utilisons `display: block flex`. Au lieu d'utiliser `display: inline-flex` pour créer une boîte de niveau en incise avec des enfants flexibles, nous utilisons `display: inline flex`. L'exemple ci-dessous illustre ces valeurs.

```html live-sample___multi-keyword-flex
<h1>Plusieurs valeurs pour display</h1>

<div class="flex flex1">
  <div>Élément un</div>
  <div>Élément deux</div>
  <div>Élément trois</div>
</div>

<p>
  Le premier exemple est un élément de niveau bloc avec des enfants flexibles.
</p>

<div class="flex flex2">
  <div>Élément un</div>
  <div>Élément deux</div>
  <div>Élément trois</div>
</div>
Le deuxième exemple est un élément de niveau en incise avec des enfants
flexibles.
```

```css live-sample___multi-keyword-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex {
  border: 5px solid #cccccc;
  gap: 10px;
}

.flex > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.flex1 {
  display: block flex;
}

.flex2 {
  display: inline flex;
}
```

{{EmbedLiveSample("multi-keyword-flex", "", 300)}}

Il existe une correspondance pour toutes les valeurs existantes de `display`&nbsp;; les plus courantes sont listées dans le tableau ci-dessous. Pour consulter la liste complète, reportez-vous au tableau de la [spécification de la propriété `display` <sup>(angl.)</sup>](https://drafts.csswg.org/css-display/#display-value-summary).

| Valeur unique  | Valeur multiple    |
| -------------- | ------------------ |
| `block`        | `block flow`       |
| `flow-root`    | `block flow-root`  |
| `inline`       | `inline flow`      |
| `inline-block` | `inline flow-root` |
| `flex`         | `block flex`       |
| `inline-flex`  | `inline flex`      |
| `grid`         | `block grid`       |
| `inline-grid`  | `inline grid`      |

## Comprendre `display: block flow-root` et `display: inline flow-root`

Pour voir comment cette syntaxe à plusieurs valeurs clarifie la disposition CSS, examinons certaines valeurs du tableau ci-dessus qui vous sont peut-être moins familières. La syntaxe avec plusieurs mots-clés `display: block flow-root` correspond à une valeur unique&nbsp;; `display: flow-root`. Cette valeur sert uniquement à créer un nouveau [contexte de mise en forme des blocs](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC). Un BFC garantit que tout ce qui se trouve dans votre boîte y reste, et que les éléments extérieurs ne peuvent pas y pénétrer.

Dans l'exemple ci-dessous, deux éléments `<p>`, dont l'un se trouve dans un `<div>` montrent comment les valeurs d'affichage influencent les contextes de mise en forme.
Le premier élément `<div>` qui contient les commandes de démonstration est masqué afin que nous puissions nous concentrer sur les éléments suivants.
Les éléments sur lesquels nous devons nous concentrer sont les éléments `<div>` et `<p>` «&nbsp;parent&nbsp;», «&nbsp;enfant&nbsp;» et «&nbsp;voisin&nbsp;», que vous pouvez différencier grâce à leurs identifiants.

Ce qui est remarquable dans cette disposition, c'est qu'il n'y a pas de contenu entre les éléments parent et enfant, et que l'élément enfant possède une marge supérieure.
Vous pouvez vous attendre à ce que la marge supérieure repousse efficacement l'élément enfant vers le bas dans l'élément parent, mais ce qui se produit à la place est ce que l'on appelle la [_fusion des marges_](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing).
Dans ce cas, la marge de l'élément enfant s'étend bien au-dessus de la boîte englobante du parent et repousse l'élément parent plus bas dans la page.
Ce phénomène est plus facile à observer si vous examinez le modèle de boîte de l'élément enfant [dans les outils de développement de votre navigateur](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model#utiliser_les_outils_de_développement_pour_voir_le_modèle_de_boîte).

Modifiez l'option sélectionnée dans l'élément `<select>` pour observer l'effet des différentes valeurs `display`.
Vous pouvez utiliser n'importe quelle valeur avec `flow-root` pour créer un nouveau contexte de mise en forme pour le parent, rendre la marge de l'élément enfant relative au bord externe de son parent et éviter la fusion des marges.
Passer de `display: flow-root` à `display: block flow-root` produit le même effet que le mot-clé à valeur unique `flow-root`.

```js hidden live-sample___flow-root
const divParent = document.getElementById("parent");
const divVoisin = document.getElementById("voisin");
const selecteurTypeAffichage = document.getElementById("typeAffichage");

function modifierTypeAffichage() {
  divParent.style.display = selecteurTypeAffichage.value;
  divVoisin.style.display = selecteurTypeAffichage.value;
}

selecteurTypeAffichage.addEventListener("change", modifierTypeAffichage);
```

```css hidden live-sample___flow-root
#controls {
  padding: 1rem;
  outline: 2px dashed black;
}
body {
  margin: 10px;
  font-family: sans-serif;
}
```

```css live-sample___flow-root
div,
p {
  outline: 2px solid black;
  background-color: cornflowerblue;
  display: block;
  margin-bottom: 2rem;
}

#parent {
  background-color: oldlace;
  min-height: 2rem;
}

#enfant {
  margin-top: 4rem;
  outline: 2px dashed red;
}

#voisin {
  background-color: lavender;
}
```

```html hidden live-sample___flow-root
<div id="controls">
  <label for="typeAffichage">display:</label>
  <select id="typeAffichage">
    <option value="block">block</option>
    <option value="flow-root">flow-root</option>
    <option value="block flow-root">block flow-root</option>
    <option value="inline">inline</option>
    <option value="inline flow-root">inline flow-root</option>
  </select>
</div>
```

```html live-sample___flow-root
<div id="parent">
  <p id="enfant">Le paragraphe #enfant (imbriqué dans #parent).</p>
</div>
<p id="voisin">Le paragraphe #voisin (voisin de #parent).</p>
```

{{EmbedLiveSample("flow-root", "90%", 380)}}

La valeur `flow-root` prend tout son sens si vous pensez à la disposition en blocs et en incise, parfois appelée [flux normal](/fr/docs/Learn_web_development/Core/CSS_layout/Introduction#cours_normal). Notre page HTML crée un nouveau contexte de mise en forme (les éléments flottants et les marges ne peuvent pas dépasser ses limites) et notre contenu s'organise selon le flux normal, avec une disposition en blocs et en incise, sauf si nous modifions la valeur de `display` pour utiliser un autre contexte de mise en forme. La création d'un conteneur en grille ou flexible crée également un nouveau contexte de mise en forme (respectivement un contexte de mise en forme en grille ou flexible.) Ces contextes contiennent eux aussi tout ce qui se trouve à l'intérieur. Toutefois, si vous voulez contenir les éléments flottants et les marges tout en continuant à utiliser une disposition en blocs et en incise, vous pouvez créer une nouvelle racine de flux et recommencer avec cette disposition. À partir de là, tout est contenu dans la nouvelle racine de flux.

C'est pourquoi `display: flow-root` peut s'écrire avec la syntaxe à plusieurs mots-clés `display: block flow-root`. Vous créez un contexte de mise en forme des blocs, avec une boîte de niveau bloc et des enfants participant au flux normal. Qu'en est-il de la paire correspondante `display: inline flow-root`&nbsp;? C'est la manière actuelle de décrire `display: inline-block`.

La valeur `display: inline-block` existe depuis les débuts de CSS. Nous l'utilisons généralement pour permettre à la marge interne d'écarter les éléments en incise d'un élément, par exemple lors de la création d'éléments de navigation, ou pour ajouter un arrière-plan avec une marge interne à un élément en incise comme dans l'exemple ci-dessous.

```html live-sample___inline-block
<p>
  Ce paragraphe contient un élément en incise
  <span class="inline-block">avec une marge interne</span> qui est un élément en
  incise-bloc, si bien que la marge interne reste contenue et écarte les autres
  boîtes de ligne.
</p>
```

```css live-sample___inline-block
body {
  font: 1.2em / 1.5 sans-serif;
}
p {
  border: 2px dashed;
  width: 300px;
}
.inline-block {
  background-color: rgb(0 0 0 / 0.4);
  color: white;
  padding: 10px;
  display: inline-block;
}
```

{{EmbedLiveSample("inline-block", "", 260)}}

Un élément avec `display: inline-block` contient cependant aussi les éléments flottants. Il contient tout ce qui se trouve dans la boîte de niveau en incise. Ainsi, `display: inline-block` fait exactement ce que fait `display: flow-root`, mais avec une boîte de niveau en incise plutôt qu'une boîte de niveau bloc. La syntaxe à deux valeurs décrit précisément ce qui se produit avec cette valeur. Dans l'exemple ci-dessus, vous pouvez remplacer `display: inline-block` par `display: inline flow-root` et obtenir le même résultat.

## Qu'en est-il des anciennes valeurs de `display`&nbsp;?

Les valeurs uniques de `display` sont décrites dans la spécification comme des valeurs historiques, et actuellement vous ne tirez aucun avantage de l'utilisation des versions avec plusieurs mots-clés, car chaque version avec plusieurs mots-clés correspond directement à une version historique, comme le montre le tableau ci-dessus.

Pour gérer les valeurs uniques de `display`, [la spécification <sup>(angl.)</sup>](https://drafts.csswg.org/css-display/#outer-role) explique quoi faire si seule la valeur externe `block` ou `inline` est utilisée&nbsp;:

> «&nbsp;Si une valeur `<display-outside>` est définie, mais que `<display-inside>` est omise, le type d'affichage interne de l'élément vaut flux par défaut.&nbsp;»

Cela signifie que le comportement reste exactement le même qu'avec une valeur unique. Si vous définissez `display: block` ou `display: inline`, vous modifiez la valeur d'affichage externe de la boîte, mais les enfants continuent à suivre le flux normal.
Si seule une valeur interne `flex`, `grid` ou `flow-root` est définie, [la spécification <sup>(angl.)</sup>](https://drafts.csswg.org/css-display/#inner-model) explique que la valeur externe doit être définie à `block`&nbsp;:

> «&nbsp;Si une valeur `<display-inside>` est définie, mais que `<display-outside>` est omise, le type d'affichage externe de l'élément vaut bloc par défaut, sauf pour ruby, qui vaut en incise par défaut.&nbsp;»

Enfin, il existe des [valeurs historiques de niveau en incise précomposées <sup>(angl.)</sup>](https://drafts.csswg.org/css-display/#legacy-display)&nbsp;:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Lorsqu'un navigateur compatible rencontre ces valeurs uniques, il les traite comme les versions avec plusieurs mots-clés&nbsp;:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

Toutes les situations actuelles sont donc correctement couvertes. Nous conservons ainsi la compatibilité des sites existants et nouveaux qui utilisent les valeurs uniques, tout en permettant à la spécification d'évoluer.
