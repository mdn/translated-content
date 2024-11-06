---
title: document.open
slug: Web/API/Document/open
---

{{APIRef("DOM")}}

La méthode **`document.open()`** ouvre un document pour [l'écriture](/fr/docs/Web/API/Document/write).

## Syntaxe

```js
document.open();
```

## Exemple

```js
// Dans cet exemple, le contenu du document est
// écrasé au cours de la réinitialisation avec open()
document.write("<html><p>supprimez-moi</p></html>");
document.open();
// Le document est vide.
```

## Notes

Si un document existe dans la cible, cette méthode le supprime (voir l'exemple ci-dessus).

Par ailleurs, un appel automatique à `document.open()` est réalisé lorsque [document.write()](/fr/docs/Web/API/Document/write) est appelé après que la page ait été chargée, bien que ce ne soit pas défini dans la spécification du W3C. documenter les paramètres à document.open ne figurant pas dans la spécification

Cette méthode ne doit pas être confondue avec [window.open()](/fr/docs/Web/API/Window/open). `document.open` permet d'écrire par dessus le document courant ou d'y ajouter du contenu, alors que `window.open` fournit une manière d'ouvrir une nouvelle fenêtre laissant le document courant intact. Comme `window` est l'objet, si on appelle juste `open(...)`, il sera traité comme un appel à `window.open(...)`. Le document ouvert peut être fermé à l'aide de [document.close()](/fr/docs/Web/API/Document/close).

Voir [Security check basics](/fr/docs/Mozilla/Gecko/Script_security#Security_checks) pour plus d'informations sur les principaux.

Si vous ne voulez pas créer une entrée d'historique, remplacez `open()` par `open("text/html", "replace")`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Document")}}
- {{domxref("Window.open()")}}
