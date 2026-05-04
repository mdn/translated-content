---
title: Tableau Kanban avec glisser-déposer
slug: Web/API/HTML_Drag_and_Drop_API/Kanban_board
l10n:
  sourceCommit: 8432c4ca716350c34d197c130e6fe93de5c8250c
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Comme mentionné sur [la page d'accueil](/fr/docs/Web/API/HTML_Drag_and_Drop_API#concepts_and_usage), l'API de glisser-déposer modélise simultanément trois cas d'utilisation&nbsp;: le glissement d'éléments au sein d'une page, le glissement de données hors d'une page et le glissement de données dans une page. Ce tutoriel démontre le premier cas d'utilisation&nbsp;: le glissement d'éléments au sein d'une page. Nous allons implémenter une application Kanban, similaire à la fonctionnalité fournie par [les projets GitHub](https://docs.github.com/fr/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) ou [Trello](https://trello.com/fr).

## Disposition de base de la page

Comme nous nous concentrons principalement sur la démonstration du glissement et du réarrangement des éléments, nous allons omettre certains aspects dynamiques d'un véritable tableau Kanban, tels que l'ajout et la suppression de tâches. À la place, toutes nos colonnes et tâches seront codées en dur dans le HTML.

```html live-sample___kanban
<div class="container">
  <div class="task-column">
    <h2>À faire</h2>
    <ul class="tasks">
      <li class="task" draggable="true">
        Découvrir où se trouve la Pierre de l'Âme
      </li>
    </ul>
  </div>
  <div class="task-column">
    <h2>En cours</h2>
    <ul class="tasks">
      <li class="task" draggable="true">
        Collecter la Pierre du Temps auprès du Dr. Strange
      </li>
      <li class="task" draggable="true">
        Collecter la Pierre de l'Esprit auprès de Vision
      </li>
      <li class="task" draggable="true">
        Collecter la Pierre de la Réalité auprès du Collectionneur
      </li>
    </ul>
  </div>
  <div class="task-column">
    <h2>Terminé</h2>
    <ul class="tasks">
      <li class="task" draggable="true">
        Collecter la Pierre de Pouvoir auprès de Xandar
      </li>
      <li class="task" draggable="true">
        Collecter la Pierre de l'Espace auprès d'Asgard
      </li>
    </ul>
  </div>
</div>
```

```css live-sample___kanban
body {
  font-family: "Arial", sans-serif;
}

.container {
  display: flex;
  gap: 0.5rem;
}

.task-column {
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  flex: 1;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

.task-column h2 {
  text-align: center;
}

.task {
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  padding: 8px;
  cursor: grab;
}

.task:active {
  cursor: grabbing;
}

@media (width < 600px) {
  .container {
    flex-direction: column;
  }
}
```

Cela définit la structure de base et les styles de notre application. Les tâches sont chacune rendues [déplaçables](/fr/docs/Web/API/HTML_Drag_and_Drop_API#éléments_déplaçables), mais elles ne font encore rien lorsqu'elles sont déplacées.

## Déclarer les cibles de dépôt

Nous voulons transformer les colonnes de tâches en [cibles de dépôt](/fr/docs/Web/API/HTML_Drag_and_Drop_API#cible_de_dépôt) valides pour les tâches déplacées. Comme base, nous devons écouter l'évènement {{DOMxRef("HTMLElement/dragover_event", "dragover")}} et l'annuler. Cependant, nous faisons attention et n'annulons l'évènement que si l'évènement de glissement concerne une tâche—si nous essayons de déposer autre chose, la colonne ne doit pas être une cible de dépôt.

Tout d'abord, enregistrons toutes les colonnes dans une variable globale.

```js live-sample___kanban
const colonnes = document.querySelectorAll(".task-column");
```

Ensuite, déclarons un gestionnaire d'évènement `dragover` pour chaque colonne — ce gestionnaire d'évènement sera développé plus tard.

```js
colonnes.forEach((colonne) => {
  colonne.addEventListener("dragover", (event) => {
    // Tester un type personnalisé que nous définirons plus tard
    if (event.dataTransfer.types.includes("task")) {
      event.preventDefault();
    }
  });
});
```

Maintenant, lorsque vous faites glisser une tâche sur une colonne, vous pouvez voir un [effet de curseur](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#effets_de_dépôt) tel qu'un signe plus indiquant que la tâche sera copiée lorsqu'elle sera déposée, car la copie est l'action par défaut. Plus tard, nous changerons cet indicateur car la tâche sera en fait déplacée.

## Déplacer des éléments

Nous allons maintenant implémenter la fonctionnalité principale&nbsp;: la possibilité de déplacer des tâches entre les colonnes. Cela consiste en deux étapes&nbsp;: ajouter l'élément déplacé à la colonne cible et le supprimer de la colonne source.

Nous suivons l'élément déplacé et la colonne source de cette manière&nbsp;: lors de l'évènement `dragstart`, nous marquons la tâche déplacée avec un `id`. Ensuite, lors de l'évènement `drop`, nous pouvons utiliser cet ID pour identifier la tâche et la supprimer de la colonne source. Enfin, nous nous souvenons de supprimer l'ID lors de l'évènement `dragend` afin de ne pas créer d'IDs en double lors d'un futur déplacement.

```js live-sample___kanban
const taches = document.querySelectorAll(".task");

taches.forEach((tache) => {
  tache.addEventListener("dragstart", (event) => {
    tache.id = "dragged-task";
    event.dataTransfer.effectAllowed = "move";
    // Type personnalisé pour identifier un glissement de tâche
    event.dataTransfer.setData("task", "");
  });

  tache.addEventListener("dragend", (event) => {
    tache.removeAttribute("id");
  });
});
```

Il existe d'autres options, comme donner à chaque élément un ID unique, puis stocker cet ID dans le [`dataTransfer`](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store), ou stocker une référence à l'élément DOM dans une variable globale. Toutes ces approches ont à peu près le même effet.

Parce que les tâches sont toujours censées être déplacées et jamais copiées ou liées, nous définissons également la propriété {{DOMxRef("DataTransfer.effectAllowed")}} sur `"move"` afin que ce soit le seul effet autorisé. Ce changement met à jour l'effet du curseur pour indiquer une opération de déplacement. De plus, nous définissons un élément `dataTransfer` de type `task` qui est utilisé pour identifier la tâche déplacée comme montré précédemment.

Comme mentionné dans [effets de dépôt](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#effets_de_dépôt), vous ne pouvez définir `effectAllowed` que dans le gestionnaire `dragstart` pour l'élément déplaçable.

Maintenant, nous pouvons réellement déclencher l'action de déplacement à l'intérieur du gestionnaire {{DOMxRef("HTMLElement/drop_event", "drop")}} sur la colonne cible. Nous pouvons identifier la tâche déplacée par son ID, la supprimer de l'arbre DOM en utilisant {{DOMxRef("Element.remove()")}}, puis la réinsérer dans la colonne cible. Comme nous n'autorisons le dépôt que si le glissement concerne réellement une tâche, nous pouvons procéder en toute confiance en sachant que `tacheGlissee` doit exister.

```js
colonnes.forEach((colonne) => {
  colonne.addEventListener("drop", (event) => {
    event.preventDefault();

    const tacheGlissee = document.getElementById("dragged-task");
    tacheGlissee.remove();
    colonne.children[1].appendChild(tacheGlissee);
  });
});
```

À ce stade, l'expérience utilisateur de base est déjà en place, et vous pouvez déplacer des tâches entre les colonnes.

## Insérer à un emplacement particulier

Actuellement, la tâche déposée est toujours insérée à la fin de la colonne, quel que soit l'endroit où nous l'avons déposée. Nous allons maintenant améliorer la logique de dépôt afin qu'elle soit insérée à l'emplacement du dépôt. Mais comment devons-nous cartographier l'emplacement du dépôt à un index d'insertion dans la colonne cible&nbsp;? C'est un choix de jugement, mais nous allons utiliser l'heuristique suivante (n'hésitez pas à choisir la vôtre)&nbsp;: l'élément sera inséré à l'index de l'élément sur lequel le curseur survole. Si le curseur est au-dessus du premier élément ou en dessous du dernier élément, il sera inséré au début ou à la fin de la colonne, respectivement. Si le curseur est entre deux éléments, il sera inséré à l'index de l'élément en dessous du curseur.

Pour rendre l'emplacement du dépôt évident, nous allons ajouter un [indicateur visuel](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#réaction_personnalisée_au_dépôt) pour l'emplacement du dépôt. Cela peut être fait en insérant un élément de remplacement à l'emplacement du dépôt, qui sera remplacé par la tâche déplacée lorsque le dépôt se produira. Tout d'abord, définissons la fonction de création pour le texte de remplacement&nbsp;:

```css live-sample___kanban
.placeholder {
  border: 1px solid #cccccc;
  border-radius: 3px;
}
```

```js live-sample___kanban
function faireTexteIndicatif(tacheGlissee) {
  const placeholder = document.createElement("li");
  placeholder.classList.add("placeholder");
  placeholder.style.height = `${tacheGlissee.offsetHeight}px`;
  return placeholder;
}
```

Cet indicateur sera déplacé lors de l'évènement {{DOMxRef("HTMLElement/dragover_event", "dragover")}}. C'est le plus complexe de tous, donc nous l'avons extrait dans une fonction séparée. Le code précédent pour l'évènement `dragover` a été déplacé dans cette fonction. Nous commençons par obtenir les éléments dont nous avons besoin, en abandonnant en toute sécurité si le glissement n'est pas une tâche&nbsp;:

```js live-sample___kanban
function deplacerIndicateur(event) {
  if (!event.dataTransfer.types.includes("task")) {
    return;
  }
  event.preventDefault();
  // Doit exister car l'ID est ajouté pour tous les événements de glissement avec une entrée de données "task"
  const tacheGlissee = document.getElementById("dragged-task");
  const colonne = event.currentTarget;
  const taches = colonne.children[1];
  const texteIndicatifExistant = colonne.querySelector(".placeholder");
```

S'il y a déjà un indicateur, et que le curseur est toujours à l'intérieur, nous n'avons rien besoin de changer. Notez que nous ne supprimons pas l'indicateur existant à ce stade, car cela changerait la mise en page de la page et pourrait provoquer un scintillement. Nous ne changeons la mise en page qu'une fois que nous avons pleinement déterminé la nouvelle position.

```js live-sample___kanban
if (texteIndicatifExistant) {
  const rectTexteIndicatif = texteIndicatifExistant.getBoundingClientRect();
  if (
    rectTexteIndicatif.top <= event.clientY &&
    rectTexteIndicatif.bottom >= event.clientY
  ) {
    return;
  }
}
```

Sinon, nous recherchons la première tâche qui n'est pas entièrement au-dessus du curseur. Cette tâche peut être soit la toute première tâche si le curseur est au-dessus de tous les éléments, la tâche qui contient le curseur, ou la tâche en dessous du curseur si le curseur est entre deux éléments. Notre indicateur doit être placé à l'emplacement de cette tâche. Notez que nous ne comparons que les coordonnées Y&nbsp;: même si le curseur est dans les marges gauche ou droite, il doit toujours être considéré comme étant au-dessus de la tâche. Après avoir trouvé le point d'insertion approprié, nous décidons de quelques choses&nbsp;:

- Si le point d'insertion est déjà l'indicateur, alors nous n'avons rien besoin de changer. Notez que ce n'est pas tout à fait la même chose que la condition ci-dessus&nbsp;: celle-ci pourrait être vraie si le curseur est immédiatement au-dessus de l'indicateur entre deux éléments.
- Si, lorsque le dépôt se produit, l'élément glissé sera placé exactement là où il a commencé, nous ne devrions pas indiquer d'indicateur du tout. Cela se produit lorsque l'indicateur doit être placé immédiatement à côté de la tâche glissée, donc nous vérifions si nous insérons immédiatement avant `tacheGlissee` (`tache === tacheGlissee`) ou après (`tache.previousElementSibling === tacheGlissee`). Dans ce cas, nous supprimons toujours l'indicateur existant, s'il y en a un.
- Enfin, nous insérons l'indicateur à la position déterminée.

```js live-sample___kanban
for (const tache of taches.children) {
  if (tache.getBoundingClientRect().bottom >= event.clientY) {
    if (tache === texteIndicatifExistant) return;
    texteIndicatifExistant?.remove();
    if (tache === tacheGlissee || tache.previousElementSibling === tacheGlissee)
      return;
    taches.insertBefore(
      texteIndicatifExistant ?? faireTexteIndicatif(tacheGlissee),
      tache,
    );
    return;
  }
}
```

Si la boucle ci-dessus n'a pas trouvé de tâche appropriée, cela signifie que toutes les tâches existantes sont au-dessus du curseur, et nous devons insérer l'indicateur à la fin. Encore une fois, nous n'ajoutons pas l'indicateur si la tâche glissée est déjà le dernier élément.

```js live-sample___kanban
  texteIndicatifExistant?.remove();
  if (taches.lastElementChild === tacheGlissee) return;
  taches.append(texteIndicatifExistant ?? faireTexteIndicatif(tacheGlissee));
}
```

Enfin, l'indicateur est supprimé lors des évènements {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}} ou {{DOMxRef("HTMLElement/drop_event", "drop")}}. Notez que le `dragleave` est déclenché lorsque le curseur quitte la colonne pour entrer dans son élément enfant. Comme nous voulons uniquement supprimer l'indicateur lorsque le curseur quitte entièrement la colonne, nous devons vérifier si le {{DOMxRef("MouseEvent/relatedTarget", "relatedTarget")}}, qui est l'élément dans lequel nous nous déplaçons, est un enfant de la colonne.

Le gestionnaire `drop` modifie ce que nous avons implémenté dans [Déplacer des éléments](#déplacer_des_éléments). Au lieu d'ajouter la tâche à la fin, nous devons l'insérer au milieu, et nous utilisons la position de l'indicateur pour le faire.

```js live-sample___kanban
colonnes.forEach((colonne) => {
  colonne.addEventListener("dragover", deplacerIndicateur);
  colonne.addEventListener("dragleave", (event) => {
    // Si nous nous déplaçons dans un élément enfant,
    // nous ne quittons pas réellement la colonne
    if (colonne.contains(event.relatedTarget)) return;
    const placeholder = colonne.querySelector(".placeholder");
    placeholder?.remove();
  });
  colonne.addEventListener("drop", (event) => {
    event.preventDefault();

    const tacheGlissee = document.getElementById("dragged-task");
    const placeholder = colonne.querySelector(".placeholder");
    if (!placeholder) return;
    tacheGlissee.remove();
    colonne.children[1].insertBefore(tacheGlissee, placeholder);
    placeholder.remove();
  });
});
```

## Assombrir la tâche originale

Pendant le déplacement, il peut sembler que la tâche originale est toujours à sa place. Pour donner une indication visuelle que la tâche est en cours de déplacement, nous pouvons appliquer un effet «&nbsp;assombri&nbsp;». Il est également courant de simplement la supprimer du DOM, mais cela pourrait perturber toute la logique de mesure du DOM que nous avons mise en place, nous pouvons donc utiliser le CSS pour obtenir l'effet souhaité. Cela est simple car nous avons déjà un ID stable pour la tâche glissée.

```css live-sample___kanban
#dragged-task {
  opacity: 0.2;
}
```

## Résultat

{{EmbedLiveSample("kanban", "", 400)}}

## Voir aussi

- [L'API HTML Drag and Drop](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
- [Opérations de glissement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
