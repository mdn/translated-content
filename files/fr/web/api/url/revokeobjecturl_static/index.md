---
title: URL.revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
---

{{ApiRef("URL")}}

La méthode statique **`URL.revokeObjectURL()`** libère une URL d'objet existante précédemment créée par un appel à {{domxref("URL.createObjectURL()") }}. Appelez cette méthode quand vous n'utilisez plus une URL d'objet pour indiquer au navigateur qu'il ne doit plus garder de référence sur l'objet.

{{AvailableInWorkers}}

## Syntaxe

```js
window.URL.revokeObjectURL(objectURL);
```

### Paramètres

- `objectURL`
  - : Une {{domxref("DOMString")}} représentant une URL d'objet qui a été précédemment créée par un appel à {{domxref("URL.createObjectURL", "createObjectURL()") }}.

### Valeur de retour

`undefined`.

## Exemple

Voir [Utilisation de l'objet URLs pour afficher des images](/fr/docs/Web/API/File/Using_files_from_web_applications#Exemple_Utilisation_de_l'objet_URLs_pour_afficher_des_images).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File/Using_files_from_web_applications)
- [Utilisation de l'objet URLs pour afficher des images](/fr/docs/Web/API/File/Using_files_from_web_applications#Exemple_Utilisation_de_l'objet_URLs_pour_afficher_des_images)
- {{domxref("URL.createObjectURL()") }}
