---
title: URL.createObjectURL
slug: Web/API/URL/createObjectURL
translation_of: Web/API/URL/createObjectURL
---
{{APIRef("URL")}}
La méthode statique **URL.createObjectURL()** crée une chaîne contenant une URL représentant l’objet passé en paramètre. La durée de vie de l’URL est liée au {{domxref("document")}} de la fenêtre depuis laquelle elle a été créée. La nouvelle URL d’objet représente l’objet {{domxref("File")}} ou {{domxref("Blob")}} spécifié.

Pour libérer une URL d’objet, il faut appeler {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}}

{{AvailableInWorkers}}

> **Note :** Cette fonctionnalité n'est pas disponible dans les [Service Workers](/fr/docs/Web/API/ServiceWorker) à cause de possible fuite mémoire.

## Syntaxe

    objectURL = URL.createObjectURL(object);

### Paramètres

- `object`
  - : Un objet {{domxref("File")}}, {{domxref("Blob")}} ou {{domxref("MediaSource")}} pour lequel créer une URL d’objet.

### Valeur de retour

Une {{domxref("DOMString")}} contenant une URL d’objet, pouvant être utilisée comme une référence vers l’objet source `object` spécifié.

## Exemple

Voir [Utilisation de l’objet URLs pour afficher des images](/fr/docs/Web/API/File/Using_files_from_web_applications#Exemple_Utilisation_de_l'objet_URLs_pour_afficher_des_images).

## Notes d’utilisation

### Gestion de la mémoire

À chaque fois que vous appelez `createObjectURL()`, une nouvelle URL d’objet est créée, même si vous en avez déjà créée une pour le même objet. Chacune d’elles doit être libérée en appelant {{domxref("URL.revokeObjectURL()")}} lorsque vous n’en avez plus besoin.

Les navigateurs libèrent automatiquement les URL d’objet lorsque le document est déchargé (_unload_)&nbsp;; cependant, pour une performance et une utilisation de la mémoire optimales, si vous avez la possiblité de les libérer explictement sans danger, vous devriez le faire.

### Utiliser les URL d’objet pour les flux de média

Dans d’anciennes versions de la spécification de Media Source, attacher un flux à un élément {{HTMLElement("video")}} requérait de créer une URL d’objet pour le {{domxref("MediaStream")}}. Cela n’est plus nécessaire, et les navigateurs cessent progressivement de supporter cette pratique.

> **Attention :** si vous avez toujours du code qui repose sur {{domxref("URL.createObjectURL")}} pour attacher des flux à des éléments média, vous devez mettre à jour votre code pour attacher simplement {{domxref("HTMLMediaElement.srcObject", "srcObject")}} directement au `MediaStream`.

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
    <tr>
      <td>
        {{SpecName("File API", "#dfn-createObjectURL", "createObjectURL()")}}
      </td>
      <td>{{Spec2("File API")}}</td>
      <td>Définition initiale.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("Media Source Extensions", "#dom-url-createobjecturl", "URL")}}
      </td>
      <td>{{Spec2("Media Source Extensions")}}</td>
      <td>
        <p>
          Extension MediaSource.<br />Les anciennes versions de cette
          spécification utilisaient <code>createObjectURL()</code> pour les
          objets {{domxref("MediaStream")}}&nbsp;; ce n’est plus supporté.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.URL.createObjectURL")}}

## Voir aussi

- [Utiliser des fichiers à partir d’applications web](/fr/docs/Web/API/File/Using_files_from_web_applications)
- [Utilisation de l’objet URLs pour afficher des images](/fr/docs/Web/API/File/Using_files_from_web_applications#Exemple_Utilisation_de_l'objet_URLs_pour_afficher_des_images)
- {{domxref("URL.revokeObjectURL()")}}
- {{domxref("HTMLMediaElement.srcObject")}}
- {{domxref("FileReader.readAsDataURL()")}}
