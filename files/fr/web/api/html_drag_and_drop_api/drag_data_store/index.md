---
title: Travailler avec le stockage de données de glissement
slug: Web/API/HTML_Drag_and_Drop_API/Drag_data_store
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

L'interface {{DOMxRef("DragEvent")}} possède une propriété {{DOMxRef("DragEvent.dataTransfer", "dataTransfer")}}, qui est un objet {{DOMxRef("DataTransfer")}}. Les objets {{DOMxRef("DataTransfer")}} représentent le contexte principal de l'opération de glissement, et restent cohérents tout au long du déclenchement des différents évènements. Ils incluent les [données de glissement](/fr/docs/Web/API/HTML_Drag_and_Drop_API#stockage_des_données_déplacées), [l'image de glissement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#définir_limage_de_réaction_au_glissement), [l'effet de dépôt](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#effets_de_dépôt), etc. Cet article se concentre sur la partie _stockage des données_ du `dataTransfer`.

## Structure du stockage des données déplacées

Fondamentalement, le stockage des données de glissement est une liste d'éléments, représentée comme un {{DOMxRef("DataTransferItemList")}} d'objets {{DOMxRef("DataTransferItem")}}. Chaque élément peut être de l'un des deux [types](/fr/docs/Web/API/DataTransferItem/kind)&nbsp;:

- `string`&nbsp;: sa charge utile est une chaîne de caractères, récupérable avec {{DOMxRef("DataTransferItem.getAsString", "getAsString()")}}.
- `file`&nbsp;: sa charge utile est un objet de fichier, récupérable avec {{DOMxRef("DataTransferItem.getAsFile", "getAsFile()")}} (ou {{DOMxRef("DataTransferItem.getAsFileSystemHandle", "getAsFileSystemHandle()")}} ou {{DOMxRef("DataTransferItem.webkitGetAsEntry", "webkitGetAsEntry()")}}, si des opérations plus complexes sur le système de fichiers sont nécessaires).

De plus, l'élément est également identifié par un [type](/fr/docs/Web/API/DataTransferItem/type), qui par convention est sous la forme d'un [type MIME](/fr/docs/Web/HTTP/Guides/MIME_types). Ce type peut indiquer au consommateur comment la charge utile doit être analysée ou décodée. Pour tous les éléments de texte, la liste ne peut contenir qu'un seul élément de chaque type, donc la liste contient en effet deux collections disjointes&nbsp;: une liste de fichiers avec des types potentiellement dupliqués, et une {{JSxRef("Map")}} d'éléments de texte indexés par leur type. En général, la liste de fichiers représente plusieurs fichiers en cours de glissement. La carte de texte _ne_ représente _pas_ plusieurs ressources transférées, mais la même ressource encodée de différentes manières, afin que le destinataire puisse choisir l'interprétation la plus appropriée et prise en charge. Les éléments de texte sont destinés à être triés par ordre décroissant de préférence.

Cette liste est accessible par la propriété {{DOMxRef("DataTransfer.items")}}.

L'API HTML Glisser-déposer a traversé plusieurs itérations, ce qui a entraîné deux façons coexistantes de gérer le stockage des données. Avant les interfaces `DataTransferItemList` et `DataTransferItem`, «&nbsp;l'ancienne méthode&nbsp;» utilisait les propriétés suivantes sur `DataTransfer`&nbsp;:

- {{DOMxRef("DataTransfer.types", "types")}}&nbsp;: contient les propriétés `type` des _éléments de texte_ dans la liste, plus la valeur `"files"` s'il y a des _éléments de fichier_.
- {{DOMxRef("DataTransfer.setData", "setData()")}}, {{DOMxRef("DataTransfer.getData", "getData()")}}, {{DOMxRef("DataTransfer.clearData", "clearData()")}}&nbsp;: fournissent un accès aux _éléments de texte_ dans la liste en utilisant le modèle de «&nbsp;cartographie type-vers-charge utile&nbsp;».
- {{DOMxRef("DataTransfer.files", "files")}}&nbsp;: fournit un accès aux _éléments de fichier_ dans la liste en tant que {{DOMxRef("FileList")}}.

Vous pouvez constater que les types des _éléments de fichier_ ne sont pas directement exposés. Ils sont toujours accessibles, mais uniquement par la propriété {{DOMxRef("Blob.type", "type")}} de chaque objet {{DOMxRef("File")}} dans la liste `files`, donc si vous ne pouvez pas lire les fichiers, vous ne pouvez pas non plus connaître leurs types (voir [lecture du stockage des données de glissement](#lire_le_stockage_des_données_de_glissement) pour savoir quand le stockage est lisible).

Pour obtenir les fichiers et leurs types, nous recommandons d'utiliser la propriété `items` car elle fournit une interface plus flexible et cohérente. Pour les éléments de texte, vous devriez également préférer l'utilisation de la propriété `items` pour la cohérence, bien que la méthode `getData()` soit plus pratique pour accéder ou supprimer un type spécifique.

Une autre différence clé entre les interfaces {{DOMxRef("DataTransfer")}} et {{DOMxRef("DataTransferItem")}} est que la première utilise la méthode synchrone {{DOMxRef("DataTransfer.getData","getData()")}} pour accéder à la charge utile de texte, tandis que la seconde utilise la méthode asynchrone {{DOMxRef("DataTransferItem.getAsString","getAsString()")}}.

## Modifier le stockage des données de glissement

Pour les éléments déplaçables par défaut tels que les images, les liens et les sélections, les données de glissement sont déjà définies par le navigateur&nbsp;; pour les éléments déplaçables personnalisés définis à l'aide de l'attribut `draggable`, vous devez définir vous-même les données de glissement. Le seul moment pour apporter des modifications au stockage des données est dans le gestionnaire {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}} — pour le `dataTransfer` de tout autre évènement de glissement, le stockage des données est non modifiable.

Pour ajouter des données de texte au stockage des données de glissement, la «&nbsp;nouvelle méthode&nbsp;» utilise la méthode {{DOMxRef("DataTransferItemList.add()")}}, tandis que «&nbsp;l'ancienne méthode&nbsp;» utilise la méthode {{DOMxRef("DataTransfer.setData()")}}.

```js
function dragstartHandler(ev) {
  // Nouvelle méthode : add(data, type)
  ev.dataTransfer.items.add(ev.target.innerText, "text/plain");
  // Ancienne méthode : setData(type, data)
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

Pour les deux méthodes, si elles sont appelées lorsque le stockage des données est non modifiable, rien ne se passe. Si un élément de texte du même type existe déjà, `add()` génère une erreur tandis que `setData()` remplace l'élément existant.

Pour ajouter des données de fichier au stockage des données de glissement, la «&nbsp;nouvelle méthode&nbsp;» utilise toujours la méthode {{DOMxRef("DataTransferItemList.add()")}}. Comme «&nbsp;l'ancienne méthode&nbsp;» stocke les éléments de fichier dans la propriété {{DOMxRef("DataTransfer.files")}}, qui est une {{DOMxRef("FileList")}} en lecture seule, il n'y a pas d'équivalent direct.

```js
function dragstartHandler(ev) {
  // Nouvelle méthode : add(data)
  ev.dataTransfer.items.add(new File([blob], "image.png"));
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

On notera que lorsque l'on ajoute des données de fichier, `add()` ignore le paramètre `type` et utilise la propriété {{DOMxRef("Blob.type", "type")}} de l'objet `File`.

> [!NOTE]
> La protection de lecture/écriture est effectuée sur une base [par tâche](/fr/docs/Web/JavaScript/Reference/Execution_model#queue_de_tâches_et_boucle_dévènement), ce qui signifie que seul le _code synchrone_ à l'intérieur du gestionnaire `dragstart` peut modifier le stockage des données. Si vous essayez d'accéder au stockage des données après une opération asynchrone, vous n'aurez plus les permissions d'écriture. Par exemple, ceci ne fonctionne pas&nbsp;:
>
> ```js example-bad
> function dragstartHandler(ev) {
>   canvas.toBlob((blob) => {
>     ev.dataTransfer.items.add(new File([blob], "image.png"));
>   });
> }
> ```

La suppression des données est similaire, en utilisant les méthodes {{DOMxRef("DataTransferItemList.remove()")}}, {{DOMxRef("DataTransferItemList.clear()")}} ou {{DOMxRef("DataTransfer.clearData()")}}.

## Lire le stockage des données de glissement

Le seul moment où vous pouvez _lire_ à partir du stockage des données, en dehors de l'évènement `dragstart` lorsque vous avez un accès complet au stockage des données, est lors de l'évènement {{DOMxRef("HTMLElement/drop_event", "drop")}}, permettant à la cible de dépôt de récupérer les données.

Pour lire les données textuelles à partir du stockage des données de glissement, la «&nbsp;nouvelle méthode&nbsp;» utilise l'objet {{DOMxRef("DataTransferItemList")}}, tandis que «&nbsp;l'ancienne méthode&nbsp;» utilise la méthode {{DOMxRef("DataTransfer.getData()")}}. La nouvelle méthode est plus pratique pour parcourir tous les éléments, tandis que l'ancienne méthode est plus pratique pour accéder à un type spécifique.

```js
function dropHandler(ev) {
  // Nouvelle méthode : parcourir les éléments
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      item.getAsString((data) => {
        // Faire quelque chose avec les données
      });
    }
  }
  // Ancienne méthode : getData(type)
  const data = ev.dataTransfer.getData("text/plain");
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

Pour lire les données de fichier à partir du stockage des données de glissement, la «&nbsp;nouvelle méthode&nbsp;» utilise toujours l'objet {{DOMxRef("DataTransferItemList")}}, tandis que «&nbsp;l'ancienne méthode&nbsp;» utilise la propriété {{DOMxRef("DataTransfer.files")}}.

```js
function dropHandler(ev) {
  // Nouvelle méthode : parcourir les éléments
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "file") {
      const file = item.getAsFile(); // Un objet File
    }
  }
  // Ancienne méthode : parcourir les fichiers
  for (const file of ev.dataTransfer.files) {
    // Faire quelque chose avec le fichier
  }
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

### Mode protégé

En dehors des évènements `dragstart` et `drop`, le stockage des données est en _mode protégé_, empêchant le code d'accéder à toute charge utile. Notamment&nbsp;:

- Toutes les tentatives de [modification](#modifier_le_stockage_des_données_de_glissement) ne font rien silencieusement ou lèvent une `DOMException` (uniquement pour `items.add()` et `items.remove()`).
- `DataTransfer.getData()` retourne toujours une chaîne de caractères vide.
- `DataTransfer.files` retourne toujours une liste vide.
- `DataTransferItem.getAsString()` ne fait jamais appel à la fonction de rappel.
- `DataTransferItem.getAsFile()` retourne toujours `null`.

Encore une fois, la protection en lecture/écriture est effectuée sur une base [par tâche](/fr/docs/Web/JavaScript/Reference/Execution_model#queue_de_tâches_et_boucle_dévènement), ce qui signifie que seul le _code synchrone_ à l'intérieur du gestionnaire `drop` peut lire le stockage des données. Si vous essayez d'accéder au stockage des données après une opération asynchrone, vous n'aurez plus les permissions d'écriture. Par exemple, cela ne fonctionne pas&nbsp;:

```js example-bad
function getDataPromise(item) {
  return new Promise((resolve) => {
    item.getAsString((data) => {
      resolve(data);
    });
  });
}

async function dropHandler(ev) {
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      // Mauvais : la deuxième fois que cela s'exécute, nous ne sommes plus dans la même tâche
      const data = await getDataPromise(item);
    }
  }
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

Au lieu de cela, vous devez appeler toutes les méthodes d'accès de manière synchrone dès le départ, et attendre leurs résultats plus tard&nbsp;:

```js example-good
async function dropHandler(ev) {
  const promises = [];
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      // Mauvais : la deuxième fois que cela s'exécute, nous ne sommes plus dans la même tâche
      promises.push(getDataPromise(item));
    }
  }
  const results = await Promise.all(promises);
}
```

## Les types de données de glissement communes

La spécification ne définit le comportement que pour quelques types de données, mais les navigateurs prennent parfois en charge nativement d'autres types. En général, les types sont destinés à être un _protocole_ tout comme les types MIME, et vous pouvez utiliser n'importe quel type tant que le destinataire (une autre page web, une autre partie de la même page web, ou même quelque part en dehors du navigateur) le comprend. Cette section décrit certaines conventions courantes et les comportements par défaut des navigateurs.

Notez que les scénarios ci-dessous se réfèrent à _l'intention_ et non au _comportement_. Par exemple, lorsque nous disons «&nbsp;faire glisser un lien&nbsp;», l'utilisateur·ice peut ne pas faire glisser un élément `<a>` réel&nbsp;; il peut faire glisser un conteneur contenant un ou plusieurs liens, mais l'intention est de transférer le(s) lien(s) en tant que données, donc le stockage des données que vous préparez peut être le même que si l'utilisateur·ice faisait glisser un lien réel.

### Glisser du texte

Pour faire glisser du texte, utilisez le type `text/plain`, avec la chaîne de caractères à faire glisser comme valeur. Par exemple&nbsp;:

```js
event.dataTransfer.items.add("This is text to drag", "text/plain");
```

Vous devez toujours ajouter des données de type `text/plain` comme solution de repli pour les applications ou les cibles de dépôt qui ne prennent pas en charge d'autres types, sauf s'il n'y a pas d'alternative textuelle logique. Ajoutez toujours ce type `text/plain` en dernier, car il est le moins spécifique et ne doit pas être préféré.

Dans `getData()`, `setData()` et `clearData()`, le type `Text` (insensible à la casse) est traité comme `text/plain`.

Par défaut, lorsqu'une sélection est glissée, les éléments de données suivants sont créés&nbsp;:

- `text/plain`&nbsp;: contient le texte sélectionné. Firefox et Safari trient cet élément après `text/html`, bien que la spécification exige qu'il soit en premier.
- `text/html`&nbsp;: contient le code HTML complet des éléments sélectionnés (avec tous les styles en ligne).

La spécification exige également un autre élément de type `application/microdata+json`, contenant les [microdonnées](/fr/docs/Web/HTML/Guides/Microdata) extraites des éléments de la sélection glissée. Aucun navigateur n'implémente cet élément.

Lorsqu'un élément est déposé dans un champ de texte éditable, tel qu'un {{HTMLElement("textarea")}} ou un `{{HTMLElement("input/text", "&lt;input type=\"text\"&gt;")}}`, l'élément `text/plain` est copié dans le champ par défaut (sans aucun traitement d'évènement).

### Glisser des liens

Les hyperliens glissés doivent inclure des données de deux types&nbsp;: `text/uri-list` et `text/plain`. _Les deux_ types doivent utiliser l'URL du lien pour leurs données. Remarque&nbsp;: le type URL est `uri-list` avec un _I_, pas un _L_.

Comme d'habitude, définissez le type `text/plain` en dernier, comme solution de repli pour le type `text/uri-list`. Par exemple&nbsp;:

```js
event.dataTransfer.items.add("https://www.mozilla.org", "text/uri-list");
event.dataTransfer.items.add("https://www.mozilla.org", "text/plain");
```

Pour faire glisser plusieurs liens, séparez chaque lien dans les données `text/uri-list` avec un saut de ligne CRLF. Les lignes commençant par un dièse (`#`) sont des commentaires et ne doivent pas être considérées comme des URL. Vous pouvez utiliser des commentaires pour indiquer l'objectif d'une URL, le titre associé à une URL ou d'autres données.

> [!WARNING]
> La solution de repli `text/plain` pour plusieurs liens doit inclure toutes les URL, mais aucun commentaire.

Par exemple, cet exemple de données `text/uri-list` contient deux liens et un commentaire&nbsp;:

```plain
https://www.mozilla.org
#Un second lien
http://www.exemple.com
```

Lors de la récupération d'un lien déposé, assurez-vous de gérer le cas où plusieurs liens sont glissés, y compris les commentaires.

Dans `getData()`, `setData()` et `clearData()`, le type `URL` (insensible à la casse) est traité comme `text/uri-list`. Pour `getData()`, le résultat ne contient que la première URL de la liste.

Par défaut, lorsqu'un élément HTML {{HTMLElement("a")}} est glissé, les éléments de données suivants sont créés&nbsp;:

- `text/x-moz-url` (seulement Firefox)&nbsp;: contient à la fois l'attribut `href` et le texte du lien, séparés par un saut de ligne.
- `text/x-moz-url-data` (seulement Firefox)&nbsp;: contient uniquement l'attribut `href`.
- `text/x-moz-url-desc` (seulement Firefox)&nbsp;: contient uniquement le texte du lien.
- `text/uri-list`&nbsp;: contient l'attribut `href`.
- `text/html` (seulement Chrome et Firefox)&nbsp;: contient le code HTML complet de l'élément `<a>` (avec tous les styles en ligne).
- `text/plain`&nbsp;: contient également l'attribut `href`. Chrome trie cet élément avant `text/uri-list`.

### Glisser des images

Le déplacement direct d'images (c'est-à-dire que les données sont le contenu des pixels) n'est pas courant et peut ne pas être pris en charge sur certaines plateformes. À la place, les images sont généralement glissées uniquement par leurs URL. Pour ce faire, utilisez le type `text/uri-list` comme pour les autres URL. Les données doivent être l'URL de l'image, ou une [`data:` URL](/fr/docs/Web/URI/Reference/Schemes/data) si l'image n'est pas stockée sur un site Web ou un disque.

Comme pour les liens, les données pour le type `text/plain` doivent également contenir l'URL. Cependant, une URL `data:` n'est généralement pas utile dans un contexte texte, vous pouvez donc choisir d'exclure les données `text/plain` dans cette situation.

```js
event.dataTransfer.items.add(imageURL, "text/uri-list");
event.dataTransfer.items.add(imageURL, "text/plain");
```

Par défaut, lorsqu'un élément HTML {{HTMLElement("img")}} est glissé, les éléments de données suivants sont créés&nbsp;:

- `text/x-moz-url` (seulement Firefox)&nbsp;: contient à la fois l'attribut `src` et le texte alternatif (ou le `src` à nouveau si le texte alternatif est vide), séparés par un saut de ligne.
- `text/x-moz-url-data` (seulement Firefox)&nbsp;: contient uniquement l'attribut `src`.
- `text/x-moz-url-desc` (seulement Firefox)&nbsp;: contient uniquement le texte alternatif (ou le `src` si le texte alternatif est vide).
- `text/uri-list`&nbsp;: contient l'attribut `src`.
- `text/html`&nbsp;: contient le code HTML complet de l'élément `<img>` (avec tous les styles en ligne).
- `text/plain` (seulement Firefox)&nbsp;: contient l'attribut `src`.

Safari crée également un élément de fichier contenant les données de l'image, avec le type MIME approprié, tel que `image/png`.

### Glisser des éléments

Lorsque l'élément glissé est un élément arbitraire avec `draggable="true"`, les données à définir dépendent de ce que vous souhaitez transférer.

Une façon courante de transférer l'élément est d'utiliser le type `text/html` contenant le code source HTML sérialisé, que le destinataire peut ensuite analyser et insérer. Par exemple, il serait approprié de définir ses données sur la valeur de la propriété {{DOMxRef("Element/outerHTML", "outerHTML")}} d'un élément. `text/xml` peut également être utilisé, mais assurez-vous que les données sont bien formées en XML.

Vous pouvez également inclure une représentation en texte brut des données HTML ou XML en utilisant le type `text/plain`. Les données doivent être uniquement le texte sans aucune des balises ou attributs source. Par exemple&nbsp;:

```js
event.dataTransfer.items.add("text/html", element.outerHTML);
event.dataTransfer.items.add("text/plain", element.innerText);
```

Vous pouvez également utiliser d'autres types que vous inventez à des fins personnalisées. Efforcez-vous d'inclure toujours une alternative `text/plain`, sauf si l'objet glissé est spécifique à un site ou une application particulière. Dans ce cas, le type personnalisé garantit que les données ne peuvent pas être déposées ailleurs.

### Glisser des fichiers depuis un explorateur de fichiers du système d'exploitation

Lorsque l'élément glissé est un fichier, un élément de type `file` est ajouté aux données de glissement. Le `type` est défini sur le type MIME du fichier (tel que fourni par le système d'exploitation), ou `application/octet-stream` si le type est inconnu. Actuellement, les fichiers glissés ne peuvent provenir que de l'extérieur du navigateur, comme depuis un explorateur de fichiers.

Firefox ajoute également un élément de texte non standard de type `application/x-moz-file` contenant le chemin complet du fichier sur le système de fichiers de l'utilisateur·ice. Sauf dans le code privilégié (comme une extension), sa valeur est une chaîne de caractères vide.

### Glisser des fichiers vers un explorateur de fichiers du système d'exploitation

Ce qui peut être transféré hors du navigateur dépend principalement du navigateur et de l'endroit où il est glissé. [Glisser des images](#glisser_des_images) vers le système de fichiers local est couramment pris en charge et entraîne le téléchargement de l'image.

Chrome prend en charge le type non standard `DownloadURL`. La charge utile doit être du texte sous la forme `<MIME type>:<file name>:<file URL>`. Par exemple&nbsp;:

```js
event.dataTransfer.items.add(
  "DownloadURL",
  "image/png:example.png:data:image/png;base64,iVBORw0K...",
);
```

Cela permet de télécharger un fichier arbitraire lorsqu'il est glissé vers l'explorateur de fichiers, ou, lorsqu'il est déposé dans une autre fenêtre de navigateur, comme si un [fichier était en cours de dépôt](#glisser_des_fichiers_depuis_un_explorateur_de_fichiers_du_système_dexploitation) (bien que des restrictions CORS puissent s'appliquer). Voir [Glisser des fichiers comme Gmail <sup>(angl.)</sup>](https://ryanseddon.com/html5/gmail-dragout/) pour un cas d'utilisation pratique.

## Voir aussi

- [L'API HTML Drag and Drop (Aperçu)](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
- [Opérations de glissement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
