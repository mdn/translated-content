---
title: Glisser et déposer des fichiers
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Comme mentionné sur [la page d'accueil](/fr/docs/Web/API/HTML_Drag_and_Drop_API#concepts_et_utilisation), l'API de glisser-déposer modélise simultanément trois cas d'utilisation&nbsp;: le glissement d'éléments au sein d'une page, le glissement de données hors d'une page et le glissement de données dans une page. Ce tutoriel démontre le troisième cas d'utilisation&nbsp;: le glissement de données dans une page. Nous allons implémenter une zone de dépôt de base qui permet à l'utilisateur·ice de déposer des fichiers image depuis l'explorateur de fichiers du système d'exploitation de l'utilisateur·ice et de les afficher sur la page. Pour les utilisateur·ice·s qui ne peuvent pas ou ne veulent pas utiliser le glisser-déposer, nous proposons également la fonctionnalité alternative de sélection de fichiers par un élément `<input>`.

## Disposition de base de la page

Parce que nous voulons également permettre la sélection normale de fichiers par `<input>`, il est logique que la zone de dépôt soit soutenue par un élément `<input>` afin que nous puissions à la fois y glisser des fichiers et cliquer dessus. Nous profitons d'une astuce courante, qui consiste à rendre l'élément `<input>` invisible, et à utiliser son {{HTMLElement("label")}} associé pour interagir avec l'utilisateur·ice à la place, car les éléments `<label>` sont beaucoup plus faciles à styliser. Nous ajoutons également les éléments pour prévisualiser les images déposées.

```html live-sample___file-dnd
<label id="drop-zone">
  Déposez des images ici, ou cliquez pour les télécharger.
  <input type="file" id="file-input" multiple accept="image/*" />
</label>
<ul id="preview"></ul>
<button id="clear-btn">Effacer</button>
```

Nous mettons en forme l'élément `<label>` pour indiquer visuellement qu'il s'agit d'une zone de dépôt, et nous cachons l'élément `<input>`.

```css live-sample___file-dnd
body {
  font-family: "Arial", sans-serif;
}

#drop-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  max-width: 100%;
  height: 200px;
  padding: 1em;
  border: 1px solid #cccccc;
  border-radius: 4px;
  color: slategray;
  cursor: pointer;
}

#file-input {
  display: none;
}

#preview {
  width: 500px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  list-style: none;
  padding: 0;
}

#preview li {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0;
  width: 100%;
  height: 100px;
}

#preview img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
```

Grâce à l'utilisation des éléments `<label>` et `<input>`, aucun JavaScript supplémentaire n'est nécessaire pour implémenter l'expérience utilisateur (UX) de sélection de fichiers. Nous nous concentrons maintenant sur le dépôt de fichiers et le traitement ultérieur des fichiers déposés.

## Déclarer la zone de dépôt

Notre zone de dépôt est l'élément `<label>`. En tant _qu'élément cible_, il écoute l'évènement {{DOMxRef("HTMLElement/drop_event", "drop")}} pour traiter le fichier déposé.

```js live-sample___file-dnd
const zoneDeDepot = document.getElementById("drop-zone");

zoneDeDepot.addEventListener("drop", gererDepot);
```

Le dépôt de fichiers peut être traité par le navigateur par défaut (comme l'ouverture ou le téléchargement du fichier) même lorsque le fichier n'est pas déposé dans une zone de dépôt valide. Pour éviter ce comportement, nous devons également écouter l'évènement `drop` sur `window` et l'annuler. Nous veillons à ne gérer l'évènement que si un fichier est en cours de glissement&nbsp;; si c'est autre chose, comme un lien, nous utilisons toujours le comportement par défaut. Si l'élément glissé est un fichier non image, nous gérons toujours l'évènement, mais fournissons un retour à l'utilisateur·ice indiquant que ce n'est pas autorisé.

```js live-sample___file-dnd
window.addEventListener("drop", (e) => {
  if ([...e.dataTransfer.items].some((item) => item.kind === "file")) {
    e.preventDefault();
  }
});
```

Afin que l'évènement `drop` se déclenche, l'élément doit également annuler l'évènement {{DOMxRef("HTMLElement/dragover_event", "dragover")}}. Comme nous écoutons `drop` sur `window`, nous devons annuler l'évènement `dragover` pour l'ensemble de la fenêtre également. Nous définissons également {{DOMxRef("DataTransfer.dropEffect")}} sur `none` si le fichier n'est pas une image ou n'est pas glissé au bon endroit.

```js live-sample___file-dnd
zoneDeDepot.addEventListener("dragover", (e) => {
  const fileItems = [...e.dataTransfer.items].filter(
    (item) => item.kind === "file",
  );
  if (fileItems.length > 0) {
    e.preventDefault();
    if (fileItems.some((item) => item.type.startsWith("image/"))) {
      e.dataTransfer.dropEffect = "copy";
    } else {
      e.dataTransfer.dropEffect = "none";
    }
  }
});

window.addEventListener("dragover", (e) => {
  const fileItems = [...e.dataTransfer.items].filter(
    (item) => item.kind === "file",
  );
  if (fileItems.length > 0) {
    e.preventDefault();
    if (!zoneDeDepot.contains(e.target)) {
      e.dataTransfer.dropEffect = "none";
    }
  }
});
```

> [!NOTE]
> Les évènements {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}} et {{DOMxRef("HTMLElement/dragend_event", "dragend")}} ne sont pas déclenchés lorsque l'on fait glisser un fichier depuis le système d'exploitation vers le navigateur. Pour détecter lorsque des fichiers du système d'exploitation sont glissés dans le navigateur, utilisez {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}} et {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}.
> Cela signifie qu'il n'est pas possible d'utiliser {{DOMxRef("DataTransfer.setDragImage","setDragImage()")}} pour appliquer une image de glissement/curseur personnalisée lors du glissement de fichiers depuis le système d'exploitation — car le magasin de données de glissement ne peut être modifié que dans l'évènement {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}. Cela s'applique également à {{DOMxRef("DataTransfer.setData","setData()")}}.

## Traiter le dépôt

Maintenant, nous implémentons le `gererDepot` en utilisant la méthode {{DOMxRef("DataTransferItem.getAsFile","getAsFile()")}} pour accéder à chaque fichier. Ensuite, votre application peut décider comment traiter ce fichier en utilisant [l'API File](/fr/docs/Web/API/File_API). Ici, nous les affichons simplement sur la page&nbsp;; en pratique, vous voudrez probablement les télécharger éventuellement sur le serveur également.

```js live-sample___file-dnd
const apercu = document.getElementById("preview");

function afficherImages(fichiers) {
  for (const fichier of fichiers) {
    if (fichier.type.startsWith("image/")) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = URL.createObjectURL(fichier);
      img.alt = fichier.name;
      li.appendChild(img);
      li.appendChild(document.createTextNode(fichier.name));
      apercu.appendChild(li);
    }
  }
}

function gererDepot(ev) {
  ev.preventDefault();
  const fichiers = [...ev.dataTransfer.items]
    .map((objet) => objet.getAsFile())
    .filter((fichier) => fichier);
  afficherImages(fichiers);
}
```

## Ajouter le même comportement au champ de formulaire

Voici l'ensemble du flux de données pour le glisser-déposer&nbsp;; il nous faut maintenant relier la fonction `afficherImages()` à l'entrée de fichier également.

```js live-sample___file-dnd
const entreeFichier = document.getElementById("file-input");
entreeFichier.addEventListener("change", (e) => {
  afficherImages(e.target.files);
});
```

## Bouton de réinitialisation

Enfin, nous ajoutons un moyen de vider la zone d'aperçu. Nous utilisons {{DOMxRef("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} pour libérer la mémoire utilisée par les objets image.

```js live-sample___file-dnd
const boutonReinitialisation = document.getElementById("clear-btn");
boutonReinitialisation.addEventListener("click", () => {
  for (const img of apercu.querySelectorAll("img")) {
    URL.revokeObjectURL(img.src);
  }
  apercu.textContent = "";
});
```

## Résultat

{{EmbedLiveSample("file-dnd", "", 500)}}

## Voir aussi

- [L'API HTML Drag and Drop](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
- [Opérations de glissement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
