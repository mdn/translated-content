---
title: 'TypeError: can''t access dead object'
slug: Web/JavaScript/Reference/Errors/Dead_object
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Dead_object
original_slug: Web/JavaScript/Reference/Erreurs/Dead_object
---
{{JSSidebar("Errors")}}

## Message

```
TypeError: can't access dead object
```

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

Afin d'améliorer l'utilisation de la mémoire et de prévenir les fuites mémoire, Firefox empêche les modules complémentaires de conserver des références fortes vers les objets du DOM après que leur document parent a été détruit. Un objet mort (_dead_) est un objet qui contient une référence forte vers un éléments du DOM, même après que celui-ci a été détruit dans le DOM. Pour éviter ces problèmes, les références aux objets du DOM d'un document étranger devraient être enregistrées dans un objet spécifique à ce document et être nettoyées lors de la suppression du document. On peut également utiliser les objets qui permettent d'enregistrer [des références faibles](/fr/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getWeakReference).

## Vérifier si un objet est mort

[`Components.utils`](/fr/docs/Components.utils) fournit une méthode `isDeadWrapper()` qui peut être utilisée par du code privilégié :

```js
if (Components.utils.isDeadWrapper(window)) {
  // dead
}
```

Du code sans privilège ne pourra pas accéder à `Component.utils` et pourra simplement intercepter l'exception :

```js
try {
  String(window);
}
catch (e) {
  console.log("window est probablement mort ");
}
```

## Voir aussi

- [Que signifie “can’t access dead object” ? (en anglais)](https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/)
- [Les causes principales des fuites mémoire dans les extensions](/fr/docs/Extensions/Common_causes_of_memory_leaks_in_extensions)
- [`Components.utils`](/fr/docs/Components.utils)
- [Compartiments zombies](/en-US/docs/Mozilla/Zombie_compartments#Zombie_compartments)
