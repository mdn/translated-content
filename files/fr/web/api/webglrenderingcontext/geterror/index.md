---
title: WebGLRenderingContext.getError()
slug: Web/API/WebGLRenderingContext/getError
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.getError()`** de l'[API WebGL](/fr/docs/Web/API/WebGL_API) retourne des informations d'erreur.

## Syntaxe

```js
GLenum gl.getError();
```

### Paramètres

Aucun.

### Valeur retournée

| Constante                          | Description                                                                                                                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gl.NO_ERROR`                      | Aucune erreur n'a été enregistrée. La valeur de cette constante est 0.                                                                                                              |
| `gl.INVALID_ENUM`                  | Une valeur non acceptable a été spécifiée pour un argument énuméré. La commande est ignorée et l'indicateur d'erreur est positionné.                                                |
| `gl.INVALID_VALUE`                 | Un argument numérique est hors de sa plage. La commande est ignorée et l'indicateur d'erreur est positionné.                                                                        |
| `gl.INVALID_OPERATION`             | La commande indiquée n'est pas permise dans l'état courant. La commande est ignorée et l'indicateur d'erreur est positionné.                                                        |
| `gl.INVALID_FRAMEBUFFER_OPERATION` | Le tampon d'images actuellement lié n'est pas complet lors d'une tentative de rendu ou de relecture.                                                                                |
| `gl.OUT_OF_MEMORY`                 | Plus assez de mémoire restante pour exécuter la commande.                                                                                                                           |
| `gl.CONTEXT_LOST_WEBGL`            | Si le contexte WebGL est perdu, cette erreur est retournée lors du premier appel à `getError`. Après cela et jusqu'à ce que le contexte soit restauré, elle retourne `gl.NO_ERROR`. |

## Exemples

```js
gl.getError(); // gl.NO_ERROR (0)

gl.enable(gl.MACHINTRUC);
gl.getError(); // gl.INVALID_ENUM;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext")}}
- {{domxref("WebGLContextEvent")}}
