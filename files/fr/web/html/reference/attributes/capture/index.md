---
title: "Attribut HTML : capture"
short-title: capture
slug: Web/HTML/Reference/Attributes/capture
original_slug: Web/HTML/Attributes/capture
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`capture`** indique, de façon optionnelle, qu'un nouveau fichier doit être capturé et quel appareil doit être utilisé pour capturer ce nouveau média, dont le type est défini par l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Attributes/accept).

Les valeurs possibles sont `user` et `environment`. L'attribut capture est pris en charge sur le type d'entrée {{HTMLElement("input/file", "file")}}.

L'attribut `capture` prend comme valeur une chaîne qui spécifie quelle caméra utiliser pour la capture d'image ou de vidéo, si l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Attributes/accept) indique que l'entrée doit être de l'un de ces types.

| Valeur        | Description                                                                         |
| ------------- | ----------------------------------------------------------------------------------- |
| `user`        | La caméra et/ou le microphone faisant face à l'utilisateur devraient être utilisés. |
| `environment` | La caméra et/ou le microphone orientés vers l'extérieur devraient être utilisés.    |

> [!NOTE]
> Capture était auparavant un attribut booléen qui, lorsqu'il était présent, indiqué que les périphériques de capture de l'appareil (comme la caméra ou le micro) devaient être utilisés plutôt que de demander à l'utilisateur de sélectionner un fichier.

{{InteractiveExample("Démonstration HTML&nbsp;: capture", "tabbed-standard")}}

```html interactive-example
<label for="selfie">Prenez une photo de votre visage&nbsp;:</label>

<input type="file" id="selfie" name="selfie" accept="image/*" capture="user" />

<label for="picture">Prenez une photo avec la caméra arrière&nbsp;:</label>

<input
  type="file"
  id="picture"
  name="picture"
  accept="image/*"
  capture="environment" />
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}

input {
  margin-bottom: 1rem;
}
```

## Exemples

Lorsqu'ils sont définis sur un type d'entrée de fichier, les systèmes d'exploitation dotés de microphones et de caméras affichent une interface utilisateur permettant la sélection à partir d'un fichier existant ou la création d'un nouveau fichier.

```html
<p>
  <label for="soundFile">Quel est le son de votre voix ?</label>
  <input type="file" id="soundFile" capture="user" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Téléchargez une vidéo :</label>
  <input type="file" id="videoFile" capture="environment" accept="video/*" />
</p>
<p>
  <label for="imageFile">Téléchargez une photo de vous :</label>
  <input type="file" id="imageFile" capture="user" accept="image/*" />
</p>
```

{{EmbedLiveSample('Exemples', '100%', 200)}}

Notez que ceux-ci fonctionnent mieux sur les appareils mobiles ; si votre appareil est un ordinateur de bureau, vous obtiendrez probablement un sélecteur de fichiers classique.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de fichiers à partir d'applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/fr/docs/Web/API/File)
- La propriété {{DOMxRef('HTMLInputElement.files')}}
