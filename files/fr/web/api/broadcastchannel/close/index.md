---
title: BroadcastChannel.close()
slug: Web/API/BroadcastChannel/close
l10n:
  sourceCommit: c80b15ae2fe8b65c1a68264df72323986b2750b2
---

{{APIRef("BroadCastChannel API")}}

La méthode **`BroadcastChannel.close()`** ferme la connexion au canal sous-jacent, permettant à l'objet d'être libéré par le ramasse-miettes. Cette tâche est obligatoire puisqu'il n'y a aucun autre moyen pour le navigateur de savoir si ce canal est encore nécessaire.

{{AvailableInWorkers}}

## Syntaxe

```js
canal.close();
```

## Exemple

```js
// Connexion au canal
const bc = new BroadcastChannel("canal_test");

// Autres opérations (tel que postMessage, …)

// Lorsque les traitements sont terminés, déconnexion du canal
bc.close();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`BroadcastChannel`](/fr/docs/Web/API/BroadcastChannel), l'interface à laquelle elle se rapporte.
