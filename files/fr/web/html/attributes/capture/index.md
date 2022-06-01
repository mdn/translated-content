---
title: 'Attribut HTML : capture'
slug: Web/HTML/Attributes/capture
tags:
  - API
  - Attribute
  - Attributes
  - Capture
  - Constraint validation
  - HTML
translation_of: Web/HTML/Attributes/capture
---
{{HTMLSidebar}}

L'attribut **`capture`** spécifie que, facultativement, un nouveau fichier doit être capturé, et le périphérique qui devrait être utilisé pour capturer ce nouveau média d'un type défini par l'attribut [`accept`](accept). Les valeurs comprennent `user` et `environment`. L'attribut capture est pris en charge sur les champs de formulaire de type [`file`](/fr/docs/Web/HTML/Element/Input/file).

L'attribut `capture` prend pour valeur une chaîne de caractères qui spécifie quelle caméra utiliser pour la capture des données d'image ou de vidéo, si l'attribut [`accept`](accept) indique que l'entrée doit être de l'un de ces types.

| Valeur        | Description                                                                         |
| ------------- | ----------------------------------------------------------------------------------- |
| `user`        | La caméra et/ou le microphone faisant face à l'utilisateur devraient être utilisés. |
| `environment` | La caméra et/ou le microphone orientés vers l'extérieur devraient être utilisés.    |

> **Note :** Capture était auparavant un attribut booléen qui, lorsqu'il était présent, indiqué que les périphériques de capture de l'appareil (comme la caméra ou le micro) devaient être utilisés plutôt que de demander à l'utilisateur de sélectionner un fichier.

## Exemples

Lorsqu'ils sont définis sur un type d'entrée de fichier, les systèmes d'exploitation dotés de microphones et de caméras affichent une interface utilisateur permettant la sélection à partir d'un fichier existant ou la création d'un nouveau fichier.

```html
<p>
  <label for="soundFile">Quel est le son de votre voix ?</label>
  <input type="file" id="soundFile" capture="user" accept="audio/*">
</p>
<p>
  <label for="videoFile">Téléchargez une vidéo :</label>
  <input type="file" id="videoFile" capture="environment" accept="video/*">
</p>
<p>
  <label for="imageFile">Téléchargez une photo de vous :</label>
  <input type="file" id="imageFile" capture="user" accept="image/*">
</p>
```

{{EmbedLiveSample('Exemples', '', 200)}}

Notez que ceux-ci fonctionnent mieux sur les appareils mobiles ; si votre appareil est un ordinateur de bureau, vous obtiendrez probablement un sélecteur de fichiers classique.

## Spécifications

| Spécification                                                                                                | Statut                                   |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| {{SpecName('HTML Media Capture', '#the-capture-attribute','capture attribute')}} | {{Spec2('HTML Media Capture')}} |

## Compatibilité des navigateurs

{{Compat("html.elements.attribute.capture")}}

## Voir aussi

- [Utilisation de fichiers à partir d'applications web](/fr/docs/Web/API/File/Using_files_from_web_applications)
- [File API](/fr/docs/Web/API/File)
- La propriété [`HTMLInputElement.files`](/fr/docs/Web/API/HTMLInputElement)
