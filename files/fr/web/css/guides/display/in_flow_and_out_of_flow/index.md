---
title: Être ou ne pas être dans le flux
slug: Web/CSS/Guides/Display/In_flow_and_out_of_flow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dans [le précédent guide](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout), nous avons vu le fonctionnement de la disposition en incise et en bloc dans le flux normal. Tous les éléments qui sont dans le flux sont disposés grâce à cette méthode.

## Exemple d'éléments dans le flux

Dans l'exemple qui suit, on a un titre, un paragraphe, une liste puis un paragraphe final qui contient un élément `strong`. Le titre et les paragraphes sont des éléments de blocs et l'élément `strong` est un élément en incise. La liste est affichée en utilisant les boîtes flexibles afin d'avoir les éléments de la liste sur une même ligne mais cette liste contribue bien à la disposition en incise et en bloc, car le conteneur a un type `display` externe qui vaut `block`.

```html live-sample___in-flow
<div class="boite">
  <h1>Un titre</h1>
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    observant les volutes de fumée s'élevant de leur foyer jusqu'à la large
    cheminée.
  </p>

  <ul>
    <li>Un</li>
    <li>Deux</li>
    <li>Trois</li>
  </ul>
  <p>
    Leurs noms étaient <strong>Stephen et Joseph Montgolfier</strong>, ils
    étaient papetiers de métier, et étaient connus pour posséder des esprits
    réfléchis et un grand intérêt pour toutes les connaissances scientifiques et
    les nouvelles découvertes.
  </p>
</div>
```

```css live-sample___in-flow
body {
  font: 1.2em sans-serif;
}
.boite > * {
  border: 1px solid green;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
}
```

{{EmbedLiveSample("in-flow", "", 360)}}

Dans ce cas, on peut dire que tous les éléments sont «&nbsp;dans le flux&nbsp;»&nbsp;; ils apparaissent sur la page selon le même ordre que le document source.

## Retirer un élément du flux

Tous les éléments d'un document sont dans le flux à l'exception&nbsp;:

- des éléments flottants
- des éléments avec `position: absolute` (y compris `position: fixed` qui agit de la même manière)
- de l'élément racine (`html`)

Les éléments hors du flux créent un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC), et par conséquent, tout ce qu'ils contiennent peut être considéré comme une mini-disposition, distincte du reste de la page. L'élément racine est donc hors flux, en tant que conteneur de tout le contenu de notre document, et établit le contexte de formatage de bloc pour le document.

### Les éléments flottants

Dans cet exemple, on a un élément `div` puis deux paragraphes. On a ajouté une couleur d'arrière-plan sur les paragraphes puis on a appliqué un flottement à gauche pour l'élément `div`. L'élément `div` est désormais en dehors du flux.

En tant qu'élément flottant, il est d'abord positionné selon l'emplacement qu'il occupe dans le flux normal, puis retiré du flux et déplacé aussi loin que possible vers la gauche.

```html live-sample___float
<div class="boite">
  <div class="float">Je suis une boîte flottante&nbsp;!</div>
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    observant les volutes de fumée s'élevant de leur foyer jusqu'à la large
    cheminée. Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient
    papetiers de métier, et étaient connus pour posséder des esprits réfléchis
    et un grand intérêt pour toutes les connaissances scientifiques et les
    nouvelles découvertes.
  </p>
  <p>
    Avant cette nuit — une nuit mémorable, comme elle allait le prouver — des
    centaines de millions de personnes avaient observé les volutes de fumée
    s'élevant de leurs feux sans en tirer une inspiration particulière.
  </p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}
p {
  background-color: #cccccc;
}

.float {
  float: left;
  font-weight: bold;
  width: 200px;
  border: 2px dotted black;
  padding: 10px;
}
```

{{EmbedLiveSample("float", "", 300)}}

Vous pouvez voir la couleur d'arrière-plan du paragraphe suivant qui apparaît en dessous, ce sont uniquement les boîtes de incise de ce paragraphe qui ont été raccourcies pour créer l'effet d'enveloppement du contenu autour de l'élément flottant. La boîte de notre paragraphe s'affiche toujours selon les règles du flux normal. C'est pourquoi, pour créer un espace autour d'un élément flottant, vous devez ajouter une marge à cet élément, afin d'éloigner les boîtes de incise de celui-ci. Vous ne pouvez rien appliquer au contenu en flux suivant pour obtenir ce résultat.

### Le positionnement absolu

Attribuer à un élément la propriété `position: absolute` ou `position: fixed` le retire du flux, et l'espace qu'il occupait est supprimé. Dans l'exemple suivant, nous avons trois éléments de paragraphe, le deuxième élément ayant la propriété `position: absolute`, avec des valeurs de décalage de `top: 30px` et `right: 30px`. Il a été retiré du flux du document.

```html live-sample___abspos
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée s'élevant de leur feu sans en tirer une
    inspiration particulière.
  </p>
  <p class="abspos">
    Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient papetiers de
    métier, et étaient connus pour posséder des esprits réfléchis et un grand
    intérêt pour toutes les connaissances scientifiques et les nouvelles
    découvertes.
  </p>
  <p>
    Avant cette nuit — une nuit mémorable, comme elle allait le prouver — des
    centaines de millions de personnes avaient observé les volutes de fumée
    s'élevant de leurs feux sans en tirer une inspiration particulière.
  </p>
</div>
```

```css live-sample___abspos
body {
  font: 1.2em sans-serif;
}
.boite {
  width: 70%;
}
p {
  border: 2px solid green;
}

.abspos {
  position: absolute;
  background-color: green;
  color: white;
  top: 30px;
  right: 30px;
  width: 400px;
}
```

{{EmbedLiveSample("abspos", "", 280)}}

Utiliser `position: fixed` supprime également un objet du flux. Dans ce cas, les décalages sont calculés relativement à la zone d'affichage plutôt que par rapport au bloc englobant.

Lorsqu'on retire un élément du flux grâce au positionnement, il faut également gérer les cas où le contenu peut se superposer. Être en dehors du flux signifie essentiellement que les autres éléments de votre page ne savent plus que cet élément existe et ne réagissent donc pas à sa présence.

### Le positionnement relatif et le flux

Si on fournit un positionnement relatif en appliquant `position: relative` à un élément, celui-ci reste dans le flux mais on peut alors utiliser des décalages pour le déplacer. Toutefois, l'espace initialement occupé par l'élément est toujours réservé, comme on peut le voir dans l'exemple qui suit.

```html live-sample___relative
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée s'élevant de leur feu sans en tirer une
    inspiration particulière.
  </p>
  <p class="relative">
    Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient papetiers de
    métier, et étaient connus pour posséder des esprits réfléchis et un grand
    intérêt pour toutes les connaissances scientifiques et les nouvelles
    découvertes.
  </p>
  <p>
    Avant cette nuit — une nuit mémorable, comme elle allait le prouver — des
    centaines de millions de personnes avaient observé les volutes de fumée
    s'élevant de leurs feux sans en tirer une inspiration particulière.
  </p>
</div>
```

```css live-sample___relative
body {
  font: 1.2em sans-serif;
}
.boite {
  width: 70%;
}
p {
  border: 2px solid green;
}

.relative {
  position: relative;
  background-color: green;
  color: white;
  bottom: 50px;
  left: 50px;
  width: 400px;
}
```

{{EmbedLiveSample("relative", "", 440)}}

Lorsque vous effectuez une opération visant à supprimer ou à déplacer un élément de l'emplacement qui lui revient dans le flux normal, vous devez vous attendre à devoir gérer ce contenu et celui qui l'entoure afin d'éviter tout chevauchement. Qu'il s'agisse de vider les éléments flottants ou de s'assurer qu'un élément avec `position: absolute` ne recouvre pas un autre contenu. C'est pourquoi les méthodes qui retirent des éléments du flux doivent être utilisées en pleine connaissance de leurs effets.

## Résumé

Dans ce guide, nous avons vu les différentes façons qui permettent de retirer un élément du flux afin d'obtenir certains positionnements spécifiques. Dans le prochain guide, nous voyons un concept similaire, celui du [Contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context), dans [Introduction aux contextes de formatage](/fr/docs/Web/CSS/Guides/Display/Formatting_contexts).

## Voir aussi

- [Apprendre&nbsp;: le positionnement](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning)
