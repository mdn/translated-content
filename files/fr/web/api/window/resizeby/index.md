---
title: Window.resizeBy()
slug: Web/API/Window/resizeBy
tags:
  - API
  - Window
translation_of: Web/API/Window/resizeBy
---
{{APIRef}}

La méthode **`Window.resizeBy()`** redimensionne la fenêtre actuelle d'une taille spécifié.

## Syntaxe

    window.resizeBy(xDelta, yDelta)

### Paramètres

- `xDelta` est le nombre de pixels pour agrandir la fenêtre horizontalement.
- `yDelta` est le nombre de pixels pour agrandir la fenêtre verticalement.

## Exemple

```js
// Réduit la fenêtre
window.resizeBy(-200, -200);
```

## Notes

Cette méthode redimensionne la fenêtre par rapport à sa taille actuelle. Pour redimensionner la fenêtre en termes absolus, utilisez {{domxref ("window.resizeTo ()")}}.

### Créer et redimensionner une fenêtre externe

Pour des raisons de sécurité, il n'est plus possible dans Firefox pour un site Web de modifier la taille par défaut d'une fenêtre dans un navigateur si la fenêtre n'a pas été créée par `window.open()` ou contient plusieurs onglets. Consultez le tableau de compatibilité pour plus de détails sur le changement.

Même si vous créez une fenêtre avec `window.open()` **elle n'est pas redimensionnable par défaut.** Pour rendre la fenêtre redimensionnable, vous devez l'ouvrir avec le paramètre `"resizable"` .

```js
// Créer une fenêtre redimensionnable
myExternalWindow = window.open("http://myurl.domain", "myWindowName", "resizable");

// Redimensionner la fenêtre à 500 x 500
myExternalWindow.resizeTo(500, 500);

// Rendre la fenêtre relativement plus petit à 400 x 400
myExternalWindow.resizeBy(-100, -100);
```

La fenêtre que vous créez doit respecter la politique de même origine. Si la fenêtre que vous ouvrez n'est pas dans la même origine que la fenêtre actuelle, vous ne pourrez pas redimensionner ni accéder aux informations sur cette fenêtre / cet onglet.

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaires |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{ SpecName('CSSOM View', '#dom-window-resizeby', 'window.resizeBy()') }} | {{ Spec2('CSSOM View') }} |              |

## Compatibilité des navigateurs

{{Compat("api.Window.resizeBy")}}
