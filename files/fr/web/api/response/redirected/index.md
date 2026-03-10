---
title: "Response : propriété redirected"
short-title: redirected
slug: Web/API/Response/redirected
l10n:
  sourceCommit: 31a80a3156d2e93145ae172fdc97a82f6782de48
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`redirected`** de l'interface {{DOMxRef("Response")}} indique si la réponse résulte d'une requête qui a été redirigée.

> [!NOTE]
> Il n'est pas recommandé de vérifier `redirected` pour empêcher les redirections, car au moment où une réponse est reçue, la redirection a déjà eu lieu et vous avez peut-être envoyé la requête vers une destination non souhaitée, potentiellement en transmettant des informations sensibles.
> Il est préférable de filtrer lors de l'appel à {{DOMxRef("Window/fetch", "fetch()")}}.
> Voir l'exemple [Refuser les redirections](#refuser_les_redirections) qui montre comment procéder.

## Valeur

Une valeur booléenne qui vaut `true` si la réponse indique que la requête a été redirigée.

## Exemples

### Détecter les redirections

Pour savoir si la réponse provient d'une requête redirigée, il suffit de vérifier cet indicateur sur l'objet {{DOMxRef("Response")}}.
Dans le code ci-dessous, un message textuel est inséré dans un élément lorsqu'une redirection a eu lieu lors de l'opération fetch.
Notez cependant que ce n'est pas aussi sûr que de refuser explicitement les redirections si elles ne sont pas attendues, comme décrit dans [Refuser les redirections](#refuser_les_redirections) ci-dessous.

La propriété {{DOMxRef("Response.url", "url")}} retourne l'URL finale après redirections.

```js
fetch("super-image.jpg")
  .then((reponse) => {
    const elem = document.getElementById("warning-message-box");
    elem.textContent = reponse.redirected ? "Redirection inattendue" : "";
    // url finale obtenue après redirections
    console.log(reponse.url);
    return reponse.blob();
  })
  .then((imageBlob) => {
    const imgObjectURL = URL.createObjectURL(imageBlob);
    document.getElementById("img-element-id").src = imgObjectURL;
  });
```

### Refuser les redirections

Vérifier `redirected` n'est pas une bonne méthode pour empêcher les redirections, car la redirection a déjà eu lieu. Il est préférable de définir le mode de redirection à `"error"` dans le paramètre `options` lors de l'appel à {{DOMxRef("Window/fetch", "fetch()")}}, comme ceci&nbsp;:

```js
fetch("super-image.jpg", { redirect: "error" })
  .then((reponse) => reponse.blob())
  .then((imageBlob) => {
    const imgObjectURL = URL.createObjectURL(imageBlob);
    document.getElementById("img-element-id").src = imgObjectURL;
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
