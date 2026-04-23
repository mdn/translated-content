---
title: Opérations de glissement
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Au cœur de l'API Glisser-déposer se trouvent les différents [évènements de déplacement](/fr/docs/Web/API/HTML_Drag_and_Drop_API#évènements_de_déplacement) qui se déclenchent dans un ordre précis et doivent être gérés d'une manière spécifique. Ce document décrit les étapes qui se déroulent au cours d'une opération de glisser-déposer, ainsi que ce que l'application est censée faire dans chaque gestionnaire.

À un niveau élevé, voici les étapes possibles dans une opération de glisser-déposer&nbsp;:

- L'utilisateur·ice [commence le glissement](#commencer_le_glissement) sur le nœud source&nbsp;; l'évènement {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}} est déclenché sur le nœud source. Dans cet évènement, le nœud source prépare le contexte pour l'opération de glissement, y compris les données de glissement, l'image de réaction et les effets de dépôt autorisés.
- L'utilisateur·ice [déplace l'élément](#déplacer_des_éléments_et_définir_des_cibles_de_dépôt)&nbsp;: chaque fois qu'un nouvel élément est atteint, l'évènement {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}} est déclenché sur cet élément, et l'évènement {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}} est déclenché sur l'élément précédent. Toutes les quelques centaines de millisecondes, un évènement {{DOMxRef("HTMLElement/dragover_event", "dragover")}} est déclenché sur l'élément dans lequel le glissement se trouve actuellement, et l'évènement {{DOMxRef("HTMLElement/drag_event", "drag")}} est déclenché sur le nœud source.
- Le glissement entre dans une cible de dépôt valide&nbsp;: la cible de dépôt annule son évènement `dragover` pour indiquer qu'elle est une cible de dépôt valide. Une forme de [réaction au dépôt](#réaction_personnalisée_au_dépôt) indique à l'utilisateur·ice l'effet de dépôt attendu.
- L'utilisateur·ice [effectue le dépôt](#effectuer_le_dépôt)&nbsp;: l'évènement {{DOMxRef("HTMLElement/drop_event", "drop")}} est déclenché sur la cible de dépôt. Dans cet évènement, le nœud cible lit les données de glissement.
- [L'opération de glissement se termine](#terminer_le_glissement)&nbsp;: l'évènement {{DOMxRef("HTMLElement/dragend_event", "dragend")}} est déclenché sur le nœud source. Cet évènement est déclenché que le dépôt ait réussi ou non.

## Commencer le glissement

Le glissement commence sur un [élément déplaçable](/fr/docs/Web/API/HTML_Drag_and_Drop_API#éléments_déplaçables), qui peut être une sélection, un élément déplaçable (y compris des liens, des images et tout élément avec `draggable="true"`), un fichier provenant de l'explorateur de fichiers du système d'exploitation, etc. Tout d'abord, l'évènement {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}} est déclenché sur le _nœud source_, qui est l'élément déplaçable ou, pour les sélections, le nœud de texte sur lequel le glissement a commencé. Si cet évènement est annulé, l'opération de glissement est interrompue. Sinon, l'évènement {{DOMxRef("Element/pointercancel_event", "pointercancel")}} est également déclenché sur le nœud source.

L'évènement `dragstart` est le seul moment où vous pouvez modifier le {{DOMxRef("DragEvent.dataTransfer", "dataTransfer")}}. Pour un élément déplaçable personnalisé, vous voudrez presque toujours modifier les données de glissement, ce qui est couvert en détail dans [Modifier le stockage des données de glissement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifier_le_stockage_des_données_de_glissement). Il y a deux autres choses que vous pouvez changer&nbsp;: [l'image de réaction](#définir_limage_de_réaction_au_glissement) et les [effets de dépôt autorisés](#effets_de_dépôt).

Dans cet exemple, nous ajoutons un écouteur pour l'évènement {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}} en utilisant la méthode `addEventListener()`.

```html
<p draggable="true">Ce texte <strong>peut</strong> être déplacé.</p>
```

```js
const elementDeplacable = document.querySelector('p[draggable="true"]');
elementDeplacable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "Ce texte peut être déplacé");
});
```

Vous pouvez également écouter un ancêtre plus élevé, car les évènements de glissement se propagent comme la plupart des autres évènements. Pour cette raison, il est courant de vérifier également la cible de l'évènement, afin que le glissement d'une sélection contenue dans cet élément ne déclenche pas le `setData` (bien que sélectionner du texte à l'intérieur de l'élément soit difficile, ce n'est pas impossible)&nbsp;:

```js
elementDeplacable.addEventListener("dragstart", (event) => {
  if (event.target === elementDeplacable) {
    event.dataTransfer.setData("text/plain", "Ce texte peut être déplacé");
  }
});
```

### Définir l'image de réaction au glissement

Lorsque le glissement se produit, une image translucide est générée à partir du nœud source et suit le pointeur de l'utilisateur·ice pendant le glissement. Cette image est créée automatiquement, vous n'avez donc pas besoin de la créer vous-même. Cependant, vous pouvez utiliser {{DOMxRef("DataTransfer.setDragImage", "setDragImage()")}} pour définir une image personnalisée de réaction au glissement.

```js
elementDeplacable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setDragImage(image, xOffset, yOffset);
});
```

Trois arguments sont nécessaires. Le premier est une référence à une image. Cette référence sera généralement un élément `<img>`, mais elle peut également être un `<canvas>` ou tout autre élément. L'image de réaction sera générée à partir de l'apparence de l'image à l'écran, bien que pour les images, elles seront dessinées à leur taille originale. Les deuxième et troisième arguments de la méthode {{DOMxRef("DataTransfer.setDragImage", "setDragImage()")}} sont des décalages où l'image doit apparaître par rapport au pointeur de la souris.

Vous pouvez également utiliser des images et des canevas qui ne sont pas dans un document. Cette technique est utile lors de la création d'images de glissement personnalisées à l'aide de l'élément canvas, comme dans l'exemple suivant&nbsp;:

```js
elementDeplacable.addEventListener("dragstart", (event) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 50;

  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();

  event.dataTransfer.setDragImage(canvas, 25, 25);
});
```

Dans cet exemple, nous utilisons un canevas comme image de glissement. Comme le canevas fait 50×50 pixels, nous utilisons des décalages de la moitié de cette taille (`25`) afin que l'image apparaisse centrée sur le pointeur de la souris.

## Déplacer des éléments et définir des cibles de dépôt

Pendant toute la durée de l'opération de glissement, tous les évènements d'entrée des périphériques (comme la souris ou le clavier) sont supprimés. Les données déplacées peuvent être déplacées sur différents éléments du document, voire sur des éléments d'autres documents. Chaque fois qu'un nouvel élément est atteint, un évènement {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}} est déclenché sur cet élément, et un évènement {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}} est déclenché sur l'élément précédent.

> [!NOTE]
> `dragleave` se déclenche toujours _après_ `dragenter`, donc conceptuellement, entre ces deux évènements, la cible est entrée dans un nouvel élément mais n'a pas encore quitté le précédent.

Toutes les quelques centaines de millisecondes, deux évènements se déclenchent&nbsp;: un évènement {{DOMxRef("HTMLElement/drag_event", "drag")}} sur le nœud source, et un évènement {{DOMxRef("HTMLElement/dragover_event", "dragover")}} sur l'élément dans lequel le glissement se trouve actuellement. La plupart des zones d'une page web ou d'une application ne sont pas des endroits valides pour déposer des données, donc les éléments ignorent par défaut tout dépôt qui s'y produit. L'élément peut se déclarer comme une cible de dépôt valide en annulant l'évènement `dragover`. Si l'élément est un champ de texte éditable, comme un {{HTMLElement("textarea")}} ou `{{HTMLElement("input/text", "&lt;input type=\"text\"&gt;")}}`, et que le magasin de données contient un élément `text/plain`, alors l'élément est une cible de dépôt valide par défaut sans annuler `dragover`.

```html
<div id="cible-depot">
  Vous pouvez faire glisser et déposer un élément déplaçable ici
</div>
```

```js
const elementDepot = document.getElementById("cible-depot");

elementDepot.addEventListener("dragover", (event) => {
  event.preventDefault();
});
```

> [!NOTE]
> La spécification exige que l'évènement `dragenter` soit également annulé pour une cible de dépôt, sinon les évènements `dragover` ou `dragleave` ne commenceront même pas à se déclencher sur cet élément&nbsp;; en pratique, aucun navigateur n'implémente cela, et «&nbsp;l'élément actuel&nbsp;» change chaque fois qu'un nouvel élément est atteint.

> [!NOTE]
> La spécification exige que l'annulation de l'évènement `drag` [interrompe](#un_dépôt_échoué) le glissement&nbsp;; en pratique, aucun navigateur n'implémente cela. Voir l'exemple ci-dessous&nbsp;:
>
> {{EmbedLiveSample("cancel_drag", "", 100)}}

```html hidden live-sample___cancel_drag
<p draggable="true" id="deplacable">Déplacez-moi pendant 1 seconde&nbsp;!</p>
<p id="output"></p>
```

```js hidden live-sample___cancel_drag
const elementDeplacable = document.getElementById("deplacable");
const output = document.getElementById("output");
let time = null;
elementDeplacable.addEventListener("dragstart", (event) => {
  time = Date.now();
  output.textContent = "";
});
elementDeplacable.addEventListener("drag", (event) => {
  if (time !== null && Date.now() - time > 1000) {
    event.preventDefault();
    output.textContent =
      "Opération de glissement annulée ; si vous êtes toujours en train de déplacer le nœud, alors votre navigateur ne prend pas en charge l'annulation du glissement de manière programmatique.";
    time = null;
  }
});
```

### Cibles de dépôt conditionnelles

Vous souhaitez généralement que la cible de dépôt n'accepte les dépôts que dans certaines situations (par exemple, uniquement si un lien est en cours de glissement). Pour ce faire, vérifiez une condition et n'annulez l'évènement que lorsque la condition est remplie. Par exemple, vous pouvez vérifier si les données déplacées contiennent des liens&nbsp;:

```js
elementDepot.addEventListener("dragover", (event) => {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
});
```

Dans cet exemple, nous utilisons la méthode `includes` pour vérifier si le type [`text/uri-list`](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#glisser_des_liens) est présent dans la liste des types. Si c'est le cas, nous annulerons l'évènement afin qu'un dépôt puisse être autorisé. Si les données déplacées ne contiennent pas de lien, l'évènement ne sera pas annulé et un dépôt ne pourra pas se produire à cet endroit.

## Réaction au dépôt

L'utilisateur·ice est en train de faire glisser un élément vers une zone de dépôt valide. Il existe plusieurs façons d'indiquer à l'utilisateur·ice qu'un dépôt est autorisé à cet endroit, et ce qui pourrait se passer si le dépôt a lieu. En général, le pointeur de la souris s'adapte en fonction de la valeur de la propriété {{DOMxRef("DataTransfer.dropEffect", "dropEffect")}}. Bien que l'apparence exacte dépende de la plateforme de l'utilisateur·ice, généralement une icône de signe plus apparaîtra pour un `copy`, par exemple, et une icône «&nbsp;ne peut pas déposer ici&nbsp;» apparaîtra lorsqu'un dépôt n'est pas autorisé. Ce retour visuel du pointeur de la souris est suffisant dans de nombreux cas.

### Effets de dépôt

Lors du dépôt, plusieurs opérations peuvent être effectuées&nbsp;:

- `copy`
  - : Les données seront simultanément présentes à l'emplacement source et à l'emplacement cible après le dépôt.
- `move`
  - : Les données ne seront présentes qu'à l'emplacement cible et seront supprimées de l'emplacement source.
- `link`
  - : Une forme de lien sera créée entre les emplacements source et de dépôt&nbsp;; il n'y a qu'une seule instance des données à l'emplacement source.
- `none`
  - : Rien ne se passe&nbsp;; le dépôt a échoué.

Avec les évènements {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}} et {{DOMxRef("HTMLElement/dragover_event", "dragover")}}, la propriété {{DOMxRef("DataTransfer.dropEffect", "dropEffect")}} est initialisée à l'effet demandé par l'utilisateur·ice. L'utilisateur·ice peut modifier l'effet souhaité en appuyant sur des touches de modification. Bien que les touches exactes varient selon la plateforme, généralement les touches <kbd>Maj</kbd> et <kbd>Ctrl</kbd> sont utilisées pour passer entre la copie, le glissement et le lien. Le pointeur de la souris changera pour indiquer quelle opération est souhaitée. Par exemple, pour un `copy`, le curseur peut apparaître avec un signe plus à côté.

Vous pouvez modifier la propriété {{DOMxRef("DataTransfer.dropEffect","dropEffect")}} lors des évènements {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}} ou {{DOMxRef("HTMLElement/dragover_event", "dragover")}}, par exemple si une zone de dépôt particulière ne prend en charge que certaines opérations. Vous pouvez modifier la propriété {{DOMxRef("DataTransfer.dropEffect", "dropEffect")}} pour remplacer l'effet de l'utilisateur·ice et imposer qu'une opération de dépôt spécifique se produise.

```js
cible.addEventListener("dragover", (event) => {
  event.dataTransfer.dropEffect = "move";
});
```

Dans cet exemple, le glissement est l'effet qui est effectué.

Vous pouvez utiliser la valeur `none` pour indiquer qu'aucun dépôt n'est autorisé à cet emplacement. Vous devriez généralement faire cela si l'élément n'accepte temporairement pas les dépôts&nbsp;; s'il n'est pas destiné à être une cible de dépôt, vous ne devriez tout simplement pas annuler l'évènement.

Notez que la définition de `dropEffect` n'indique que l'effet souhaité _à cet instant précis_&nbsp;; un envoi ultérieur de `dragover` peut le modifier. Pour persister le choix, vous devez le définir dans chaque évènement `dragover`. De plus, cet effet est uniquement _informatif_, et les effets réellement mis en œuvre dépendent à la fois des nœuds source et cible (par exemple, si le nœud source ne peut pas être modifié, alors même si un effet `"move"` est demandé, il peut ne pas être possible).

Pour les gestes de l'utilisateur·ice et la définition programmatique de `dropEffect`, par défaut, les trois effets de dépôt sont disponibles. L'élément draggable peut se restreindre à n'autoriser que certains effets en définissant la propriété {{DOMxRef("DataTransfer.effectAllowed", "effectAllowed")}} dans un écouteur d'évènement {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}.

```js
elementDeplacable.addEventListener("dragstart", (event) => {
  event.dataTransfer.effectAllowed = "copyLink";
});
```

Dans cet exemple, seule une opération de copie ou de lien est autorisée, mais une opération de glissement ne peut pas être sélectionnée ni par le script ni par les gestes de l'utilisateur·ice.

Les valeurs de `effectAllowed` sont des combinaisons de `dropEffect`&nbsp;:

| Valeur          | Description                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `none`          | Aucune opération n'est autorisée                                                                                                                                       |
| `copy`          | `copy` uniquement                                                                                                                                                      |
| `move`          | `move` uniquement                                                                                                                                                      |
| `link`          | `link` uniquement                                                                                                                                                      |
| `copyMove`      | `copy` ou `move` uniquement                                                                                                                                            |
| `copyLink`      | `copy` ou `link` uniquement                                                                                                                                            |
| `linkMove`      | `link` ou `move` uniquement                                                                                                                                            |
| `all`           | `copy`, `move` ou `link`                                                                                                                                               |
| `uninitialized` | La valeur par défaut lorsque l'effet n'a pas été défini&nbsp;; généralement équivalente à `all`, sauf que le `dropEffect` par défaut peut ne pas toujours être `copy`. |

Par défaut, le `dropEffect` est initialisé en fonction de `effectAllowed`, dans l'ordre de `copy`, `link`, `move`, en sélectionnant le premier effet autorisé. Les effets non sélectionnés mais autorisés peuvent également être choisis par défaut si approprié&nbsp;; par exemple, sous Windows, maintenir la touche <kbd>Alt</kbd> enfoncée fait que `link` est utilisé en priorité. Si `effectAllowed` est `uninitialized` et que l'élément déplacé est un lien `<a>`, le `dropEffect` par défaut est `link`&nbsp;; si `effectAllowed` est `uninitialized` et que l'élément déplacé est une sélection d'un champ de texte éditable, le `dropEffect` par défaut est `move`.

```html hidden live-sample___drop_effects
<div class="conteneur-sources">
  Ce sont les sources avec différents <code>allowedEffect</code>
  <div id="sources"></div>
</div>
<div class="conteneur-cibles">
  Ce sont les cibles avec différents <code>dropEffect</code>
  <div id="cibles"></div>
</div>
```

```css hidden live-sample___drop_effects
.conteneur-sources,
.conteneur-cibles {
  width: calc(100% - 2rem);
  border: 2px dashed gray;
  padding: 0.5rem;
  margin: 1rem 0;
}

#sources,
#cibles {
  display: grid;
  gap: 0.5rem;
  width: 100%;
}

#sources {
  grid-template-columns: 1fr 1fr 1fr;
}

#cibles {
  grid-template-columns: 1fr 1fr;
}

#sources div,
#cibles div {
  border: 2px solid black;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

#sources div {
  height: 50px;
}

#cibles div {
  height: 75px;
}
```

```js hidden live-sample___drop_effects
for (const allowedEffect of [
  "none",
  "copy",
  "move",
  "link",
  "copyMove",
  "copyLink",
  "linkMove",
  "all",
  "uninitialized",
]) {
  const div = document.createElement("div");
  div.textContent = allowedEffect;
  div.draggable = true;
  div.addEventListener("dragstart", (event) => {
    event.dataTransfer.effectAllowed = allowedEffect;
  });
  document.getElementById("sources").appendChild(div);
}

for (const effetDepot of ["none", "copy", "move", "link"]) {
  const div = document.createElement("div");
  div.textContent = effetDepot;
  div.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = effetDepot;
  });
  document.getElementById("cibles").appendChild(div);
}
```

{{EmbedLiveSample("drop_effects", "", 500)}}

### Réaction personnalisée au dépôt

Pour des effets visuels plus avancés, vous pouvez effectuer d'autres opérations pendant l'évènement {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}, par exemple en insérant un élément à l'endroit où le dépôt aura lieu. Il peut s'agir d'un marqueur d'insertion ou d'un élément représentant l'élément déplacé dans sa nouvelle position. Pour ce faire, vous pouvez créer un élément HTML {{HTMLElement("img")}} et l'insérer dans le document pendant l'évènement {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}.

L'évènement {{DOMxRef("HTMLElement/dragover_event", "dragover")}} se déclenche sur l'élément que la souris pointe. Naturellement, vous devrez peut-être déplacer le marqueur d'insertion à l'intérieur du gestionnaire d'évènements {{DOMxRef("HTMLElement/dragover_event", "dragover")}} également. Vous pouvez utiliser les propriétés {{DOMxRef("MouseEvent.clientX", "clientX")}} et {{DOMxRef("MouseEvent.clientY", "clientY")}} de l'évènement, comme pour les autres évènements de souris, pour déterminer la position du pointeur de la souris.

Enfin, l'évènement {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}} se déclenche sur un élément lorsque le glissement quitte l'élément. C'est le moment où vous devez supprimer tout marqueur d'insertion ou surlignage. Vous n'avez pas besoin d'annuler cet évènement. L'évènement {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}} se déclenchera toujours, même si le glissement est annulé, vous pouvez donc toujours vous assurer que tout nettoyage du point d'insertion peut être effectué pendant cet évènement.

Pour un exemple pratique de l'utilisation de ces évènements, consultez notre [exemple de tableau Kanban](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board#insérer_à_un_emplacement_particulier).

## Effectuer un dépôt

Lorsque l'utilisateur·ice relâche la souris, l'opération de glisser-déposer se termine.

Pour qu'un dépôt soit _potentiellement réussi_, il doit se produire sur une [cible de dépôt](#déplacer_des_éléments_et_définir_des_cibles_de_dépôt) valide, et la propriété `dropEffect` ne doit pas être `none` au moment du relâchement de la souris. Sinon, l'opération de dépôt est considérée comme [échouée](#un_dépôt_échoué).

Si le dépôt est potentiellement réussi, un évènement {{DOMxRef("HTMLElement/drop_event", "drop")}} est déclenché sur la cible de dépôt. Vous devez annuler cet évènement en utilisant `preventDefault()` afin que le dépôt soit considéré comme réellement réussi. Sinon, le dépôt est également considéré comme réussi si le dépôt consistait à déposer du texte (les données contiennent un élément `text/plain`) dans un champ de texte éditable. Dans ce cas, le texte est inséré dans le champ (soit à la position du curseur, soit à la fin, selon les conventions de la plateforme) et, si le `dropEffect` est `move` alors que la source est une sélection dans une zone éditable, la source est supprimée. Sinon, pour toutes les autres données de glissement et cibles de dépôt, le dépôt est considéré comme échoué.

Lors de l'évènement {{DOMxRef("HTMLElement/drop_event", "drop")}}, vous devez récupérer les données souhaitées dans le stockage de données de glisser-déposer à l'aide de {{DOMxRef("DataTransfer.getData()")}}, et les insérer à l'endroit du dépôt. Vous pouvez utiliser la propriété {{DOMxRef("DataTransfer.dropEffect", "dropEffect")}} pour déterminer quelle opération de glissement était souhaitée. L'évènement `drop` est le seul moment où vous pouvez lire le stockage de données de glissement, en dehors de `dragstart`.

```js
cible.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  cible.textContent = data;
});
```

Dans l'exemple ci-dessus, une fois les données récupérées, nous insérons la chaîne de caractères en tant que contenu textuel de la cible. Cela a pour effet d'insérer le texte déplacé à l'endroit où il a été déposé, en supposant que la cible de dépôt est une zone de texte telle qu'un élément `p` ou `div`.

La méthode `getData()` retourne une chaîne de caractères vide si le stockage de données ne contient pas de données du type défini. Si vous avez implémenté des [cibles de dépôt conditionnelles](#cibles_de_dépôt_conditionnelles), cette situation ne devrait pas se produire, car la cible de dépôt ne devrait accepter les dépôts que lorsque les données souhaitées sont présentes.

Vous pouvez également récupérer d'autres types de données. Si les données sont un lien, elles doivent avoir le type [`text/uri-list`](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#glisser_des_liens). Vous pouvez alors insérer un lien dans le contenu.

```js
cible.addEventListener("drop", (event) => {
  event.preventDefault();
  const lignes = event.dataTransfer.getData("text/uri-list").split("\r\n");
  lignes
    .filter((ligne) => !ligne.startsWith("#"))
    .forEach((ligne) => {
      const lien = document.createElement("a");
      lien.href = ligne;
      lien.textContent = ligne;
      cible.appendChild(lien);
    });
});
```

Pour plus d'informations sur la lecture des données de glissement, consultez [Travailler avec le stockage des données de glissement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#lire_le_stockage_des_données_du_glissement).

Il incombe également aux éléments source et cible de collaborer pour mettre en œuvre le `dropEffect` — la source écoute l'évènement `dragend` et la cible écoute l'évènement `drop`. Par exemple, si le `dropEffect` est `move`, alors l'un de ces éléments doit supprimer l'élément déplacé de son ancien emplacement (généralement l'élément source lui-même, car l'élément cible ne connaît pas nécessairement ou n'a pas le contrôle sur la source).

## Un dépôt échoué

L'opération de glisser-déposer est considérée comme échouée si l'une des conditions suivantes est remplie&nbsp;:

1. L'utilisateur·ice a appuyé sur la touche <kbd>Échap</kbd>
2. Le dépôt a eu lieu en dehors d'une [cible de dépôt](#déplacer_des_éléments_et_définir_des_cibles_de_dépôt) valide
3. L'effet de dépôt vaut `none` au moment du relâchement de la souris
4. L'évènement `drop` n'a pas été annulé et le dépôt ne consistait pas à déposer du texte (contenant des données `text/plain`) dans un champ de texte éditable (voir [effectuer un dépôt](#effectuer_le_dépôt))

Dans les cas 1 et 3, si l'annulation survient alors que le curseur survole une cible de dépôt valide, celle-ci reçoit un évènement {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}, comme si le dépôt n'avait finalement pas lieu sur elle, afin qu'elle puisse effacer toute [réaction au dépôt](#réaction_personnalisée_au_dépôt). Dans tous les cas, la propriété `dropEffect` est définie sur `none` pour les évènements suivants.

Ensuite, un évènement {{DOMxRef("HTMLElement/dragend_event", "dragend")}} est déclenché à la source. Le navigateur peut afficher une animation de la sélection déplacée revenant à la source de l'opération de glisser-déposer.

## Terminer le glissement

Une fois le glissement terminé, un évènement {{DOMxRef("HTMLElement/dragend_event", "dragend")}} est déclenché à la source du glissement (le même élément qui a reçu l'évènement {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}). Cet évènement sera déclenché indépendamment du succès du glissement.

Si la propriété {{DOMxRef("DataTransfer.dropEffect","dropEffect")}} a la valeur `none` pendant un évènement {{DOMxRef("HTMLElement/dragend_event", "dragend")}}, alors le glissement a été annulé. Sinon, l'effet définit quelle opération a été effectuée. La source peut utiliser cette information après une opération de `move` pour supprimer l'élément déplacé de son ancien emplacement.

Un dépôt peut se produire à l'intérieur de la même fenêtre ou sur une autre application. L'évènement {{DOMxRef("HTMLElement/dragend_event", "dragend")}} sera toujours déclenché. Les propriétés {{DOMxRef("MouseEvent.screenX", "screenX")}} et {{DOMxRef("MouseEvent.screenY", "screenY")}} de l'évènement seront définies aux coordonnées de l'écran où le dépôt a eu lieu.

Après la propagation de l'évènement {{DOMxRef("HTMLElement/dragend_event", "dragend")}}, l'opération de glisser-déposer est terminée.

## Voir aussi

- [API HTML Drag and Drop (Aperçu)](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
- [Travailler avec le stockage de données de glissement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
