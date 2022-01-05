---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - download
  - downloads
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/download
---
{{AddonSidebar()}}

La fonction **`download()`** de l'API {{WebExtAPIRef("downloads")}} télécharge le fichier, compte tenu de son URL et d'autres préférences optionnelles.

- Si l'`url` spécifiée utilise le protocole HTTP ou HTTPS, la requête inclura tous les cookies actuellement définis pour son nom d'hôte.
- Si à la fois le  `nom de fichier` et `saveAs` sont spécifiés, la boîte de dialogue Enregistrer sous s'affiche, pré-remplie avec le `nom du fichier` spécifié.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var downloading = browser.downloads.download(
  options                   // object
)
```

### Paramètres

- `options`

  - : Un `object` spécifiant le fichier que vous souhaitez télécharger et toutes les autres préférences que vous souhaitez définir concernant le téléchargement. Il peut contenir les propriétés suivantes :

    - `allowHttpErrors`{{optional_inline}}

      - : Un tag `booléen` qui permet de poursuivre les téléchargements même s'ils rencontrent des erreurs HTTP. L'utilisation de ce drapeau, par exemple, permet le téléchargement des pages d'erreur du serveur. La valeur par défaut est `false`. Lorsqu'il est défini à :

        - `false`, le téléchargement est annulé lorsqu'il rencontre une erreur HTTP.
        - `true`, le téléchargement se poursuit lorsqu'une erreur HTTP est rencontrée et que l'erreur du serveur HTTP n'est pas signalée. Toutefois, si le téléchargement échoue en raison d'une erreur liée au fichier, au réseau, à l'utilisateur ou autre, cette erreur est signalée.

    - `body`{{optional_inline}}
      - : Un `string` représentant le corps du message de la requête.
    - `conflictAction`{{optional_inline}}
      - : Une chaîne représentant l'action que vous voulez effectuer s'il y a un conflit de nom de fichier, tel que défini dans le  {{WebExtAPIRef('downloads.FilenameConflictAction')}} type (par défaut "uniquify" quand il n'est pas spécifié).
    - `filename`{{optional_inline}}
      - : Un `string` eprésentant un chemin d'accès au fichier par rapport au répertoire de téléchargement par défaut,  qui indique l'emplacement où vous souhaitez enregistrer le fichier et le nom de fichier que vous souhaitez utiliser. Les chemins absolus, les chemins vides et les chemins contenant des références arrières  (`../`) provoqueront une erreur. Si elle est omise, cette valeur sera par défaut le nom de fichier déjà donné au fichier de téléchargement, et un emplacement immédiatement dans le répertoire de téléchargement.
    - `headers`{{optional_inline}}
      - : Si l'URL utilise les protocoles HTTP ou HTTPS, un `array` d'`objects` représentant des en-têtes HTTP supplémentaires à envoyer avec la requête. Chaque en-tête est représenté sous la forme d'un objet dictionnaire contenant le `name` des clés et soit la `value`, soit la valeur `binaryValue`. Les en-têtes interdits par `XMLHttpRequest` et `fetch` ne peuvent pas être spécifiés, cependant, Firefox 70 et les versions ultérieures permettent d'utiliser l'en-tête `Referer`. Tenter d'utiliser un en-tête interdit provoque une erreur.
    - `incognito`{{optional_inline}}
      - : Un `boolean`: s'il est présent et défini sur true, associez ce téléchargement à une session de navigation privée. Cela signifie qu'il n'apparaîtra dans le gestionnaire de téléchargement que pour les fenêtres privées actuellement ouvertes.
    - `method`{{optional_inline}}
      - : Un `string` représentant la méthode HTTP à utiliser si l'`url` utilise le protocole HTTP\[S]. Cela peut être "GET" ou "POST".
    - `saveAs`{{optional_inline}}

      - : Un `boolean` qui spécifie s'il faut fournir une boîte de dialogue de sélection de fichier pour permettre à l'utilisateur de sélectionner un nom de fichier (`true`), ou non (`false`).

        Si cette option est omise, le navigateur affichera le sélecteur de fichier ou non en fonction de la préférence générale de l'utilisateur pour ce comportement (dans Firefox cette préférence est intitulée "Toujours vous demander où enregistrer les fichiers" dans about:preferences, ou `browser.download.useDownloadDir` dans about:config).

        > **Note :** Firefox pour Android provoque une erreur si `saveAs` est à  `true`. Le paramètre est ignoré lorsque `saveAs` est `false` ou non inclus.

    - `url`
      - : Un `string` représentant l'URL à télécharger.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si le téléchargement a démarré avec succès, la promesse sera remplie avec l'`id` de la nouvelle {{WebExtAPIRef("downloads.DownloadItem")}}. Sinon, la promesse sera rejetée avec un message d'erreur venant de  {{WebExtAPIRef("downloads.InterruptReason")}}.

Si vous utilisez [URL.createObjectURL()](/fr/docs/Web/API/URL/createObjectURL) pour télécharger des données créées en JavaScript et que vous voulez révoquer l'URL de l'objet (avec [revokeObjectURL](/fr/docs/Web/API/URL/revokeObjectURL)) plus tard (comme il est fortement recommandé), vous devez le faire après le téléchargement. Pour ce faire, écoutez l'événement [downloads.onChanged](/fr/Add-ons/WebExtensions/API/downloads/onChanged).

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.download")}}

## Examples

Le fragment suivant tente de télécharger un exemple de fichier, en spécifiant également un nom de fichier et un emplacement pour l'enregistrer, ainsi que l'option `uniquify` `conflictAction`.

```js
function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}

var downloadUrl = "https://example.org/image.png";

var downloading = browser.downloads.download({
  url : downloadUrl,
  filename : 'my-image-again.png',
  conflictAction : 'uniquify'
});

downloading.then(onStartedDownload, onFailed);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.downloads`](https://developer.chrome.com/extensions/downloads).

<div class="hidden"><pre> // Copyright 2015 Les auteurs de chrome. Tous les droits sont réservés.
//
// Redistribution et utilisation sous forme source et binaire, avec ou sans
// modification, sont autorisées à condition que les conditions suivantes soient
// rencontré:
//
// * Les redistributions de code source doivent conserver le copyright ci-dessus
// remarque, cette liste de conditions et la clause de non-responsabilité suivante.
// * Les redistributions sous forme binaire doivent reproduire ce qui précède
// avis de droit d'auteur, cette liste de conditions et la clause de non-responsabilité suivante // dans la documentation et / ou les autres éléments fournis avec le
// Distribution.
// * Ni le nom de Google Inc. ni les noms de ses
// les contributeurs peuvent être utilisés pour approuver ou promouvoir des produits dérivés de
// ce logiciel sans autorisation écrite préalable spécifique.
//
// CE LOGICIEL EST FOURNI PAR LES TITULAIRES DE COPYRIGHT ET LES CONTRIBUTEURS
// "EN L'ETAT" ET TOUTE GARANTIE EXPRESSE OU IMPLICITE, Y COMPRIS MAIS NON
// LIMITE AUX GARANTIES IMPLICITES DE QUALITÉ MARCHANDE ET D'ADÉQUATION À
// UN OBJECTIF PARTICULIER EST REFUSÉ. EN AUCUN CAS, LE COPYRIGHT
// LE PROPRIÉTAIRE OU LES CONTRIBUTEURS SONT RESPONSABLES DE TOUT ASSISTANCE DIRECTE, INDIRECTE, ACCESSOIRE,
// DOMMAGES PARTICULIERS, EXEMPLAIRES OU CONSÉCUTIFS (Y COMPRIS, MAIS NON
// LIMITÉE À L'ACQUISITION DE MARCHANDISES OU DE SERVICES DE SUBSTITUTION; PERTE D'USAGE,
// DATA, OR PROFITS; OU INTERRUPTION COMMERCIALE) TOUTEFOIS CAUSÉE ET SUR TOUTE
// THÉORIE DE LA RESPONSABILITÉ, QU'IL SOIT UN CONTRAT, UNE RESPONSABILITÉ STRICTE OU UN TORT
// (INCLUANT LA NÉGLIGENCE OU AUTREMENT) SURVENANT DE TOUTE MANIÈRE DE L'UTILISER
// DE CE LOGICIEL, MÊME SI AVISÉ DE LA POSSIBILITÉ D'UN TEL DOMMAGE.
</pre></div>
