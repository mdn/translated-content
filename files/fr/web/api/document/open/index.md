---
title: "Document : méthode open()"
short-title: open()
slug: Web/API/Document/open
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("DOM")}}

La méthode **`open()`** de l'interface {{DOMxRef("Document")}} ouvre un document pour {{DOMxRef("Document.write", "l'écriture", "", "1")}}.

Cela entraîne certains effets de bord. Par exemple&nbsp;:

- Tous les écouteurs d'évènements actuellement enregistrés sur le document, les nœuds à l'intérieur du document ou la fenêtre du document sont supprimés.
- Tous les nœuds existants sont supprimés du document.

## Syntaxe

```js-nolint
open()
```

### Paramètres

Aucun.

### Valeur de retour

Une instance de l'objet `Document`.

## Exemples

Le code simple suivant ouvre le document et remplace son contenu par un certain nombre de fragments HTML différents, avant de le refermer.

```js
document.open();
document.write("<p>Bonjour le monde !</p>");
document.write("<p>Je suis un poisson</p>");
document.write("<p>Le nombre est 42</p>");
document.close();
```

## Notes

Cette méthode est soumise à la même [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy) que les autres propriétés, et ne fonctionne pas si cela devait changer l'origine du document.

## La méthode `open()` avec trois arguments

Il existe une version moins connue et peu utilisée de `document.open()` avec trois arguments, qui est un alias de {{DOMxRef("Window.open()")}} (voir sa page pour plus de détails).

Cet appel, par exemple, ouvre github.com dans une nouvelle fenêtre, avec son ouvreur défini sur `null`&nbsp;:

```js
document.open("https://www.github.com", "", "noopener=true");
```

## La méthode `open()` avec deux arguments

Les navigateurs prenaient autrefois en charge une version à deux arguments de `document.open()`, avec la signature suivante&nbsp;:

```js
document.open(type, replace);
```

Où `type` définit le type MIME des données que vous écrivez (par exemple `text/html`) et `replace`, si défini (c'est-à-dire une chaîne de caractères `"replace"`), il définit que l'entrée d'historique pour le nouveau document remplacerait l'entrée d'historique actuelle du document en cours d'écriture.

Cette forme est maintenant obsolète&nbsp;; elle ne générera pas d'erreur, mais se contentera de rediriger vers `document.open()` (c'est-à-dire qu'elle est équivalente à l'exécution de `document.open()` sans arguments). Le comportement de remplacement de l'historique se produit désormais toujours.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Document")}}
- La méthode {{DOMxRef("Window.open()")}}
