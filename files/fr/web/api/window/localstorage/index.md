---
title: "Window : propriété localStorage"
short-title: localStorage
slug: Web/API/Window/localStorage
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Web Storage API")}}

La propriété en lecture seule **`localStorage`** de l'interface {{DOMxRef("window")}} permet d'accéder à l'objet {{DOMxRef("Storage")}} du {{DOMxRef("Document")}} {{Glossary("origin", "d'origine")}}&nbsp;; les données stockées sont conservées entre les sessions du navigateur.

`localStorage` est similaire à {{DOMxRef("Window.sessionStorage", "sessionStorage")}}, sauf que les données de `localStorage` n'ont pas de date d'expiration, tandis que les données de `sessionStorage` sont effacées lorsque la session de la page se termine — c'est-à-dire lorsque la page est fermée. (Les données de `localStorage` pour un document chargé dans une session de «&nbsp;navigation privée&nbsp;» ou «&nbsp;incognito&nbsp;» sont effacées lorsque le dernier onglet «&nbsp;privé&nbsp;» est fermé.)

## Valeur

Un objet {{DOMxRef("Storage")}} qui peut être utilisé pour accéder à l'espace de stockage local de l'origine actuelle.

### Exceptions

- `SecurityError`
  - : Levée dans l'un des cas suivants&nbsp;:
    - L'origine n'est pas [un schéma/hôte/port valide](/fr/docs/Web/Security/Defenses/Same-origin_policy#définition_de_lorigine). Cela peut se produire si l'origine utilise les schémas `file:` ou `data:`, par exemple.
    - La requête viole une décision de politique. Par exemple, l'utilisateur·ice a configuré le navigateur pour empêcher la page de conserver des données.

    Notez que si l'utilisateur·ice bloque les cookies, les navigateurs interpréteront probablement cela comme une instruction pour empêcher la page de conserver des données.

## Description

Les clés et les valeurs stockées avec `localStorage` sont au format de chaîne de caractères {{Glossary("UTF-16")}}. Comme pour les objets, les clés entières sont automatiquement converties en chaînes de caractères.

Les données de `localStorage` **sont spécifiques au protocole du document**. En particulier, pour un site chargé avec HTTP (par exemple, `http://example.com`), `localStorage` retourne un objet différent de celui de `localStorage` pour le site correspondant chargé avec HTTPS (par exemple, `https://example.com`).

Pour les documents chargés à partir d'URL `file:` (c'est-à-dire des fichiers ouverts dans le navigateur directement depuis le système de fichiers local de l'utilisateur·ice, plutôt que servis par un serveur web), les exigences pour le comportement de `localStorage` ne sont pas définies et peuvent varier selon les navigateurs.

Dans tous les navigateurs actuels, `localStorage` semble retourner un objet différent pour chaque URL `file:`. En d'autres termes, chaque URL `file:` semble avoir sa propre zone de stockage local unique. Mais il n'y a aucune garantie à ce sujet, donc vous ne devriez pas vous y fier, car, comme mentionné ci-dessus, les exigences pour les URL `file:` restent indéfinies. Il est donc possible que les navigateurs modifient leur gestion des URL `file:` pour `localStorage` à tout moment. En fait, certains navigateurs _ont_ modifié leur gestion à ce sujet au fil du temps.

## Exemples

L'extrait de code suivant accède à l'objet local {{DOMxRef("Storage")}} du domaine courant et lui ajoute une entrée en utilisant {{DOMxRef("Storage.setItem()")}}.

```js
localStorage.setItem("monChat", "Tom");
```

La syntaxe pour la lecture de l'article `localStorage` est la suivante&nbsp;:

```js
const monChat = localStorage.getItem("monChat");
```

La syntaxe pour la suppression de l'élément `localStorage` est la suivante&nbsp;:

```js
localStorage.removeItem("monChat");
```

La syntaxe pour supprimer tous les éléments de `localStorage` est la suivante&nbsp;:

```js
localStorage.clear();
```

> [!NOTE]
> Se référer à l'article [Utiliser l'API Web Storage](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) pour voir un exemple complet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API Web Storage](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- La propriété {{DOMxRef("Window.sessionStorage")}}
