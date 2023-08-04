---
title: document.write
slug: Web/API/Document/write
---

{{ ApiRef("DOM") }}

Écrit une chaîne de texte dans un document ouvert par [document.open()](/fr/docs/Web/API/Document/open).

> **Note :** comme `document.write` écrit dans le flux de documents, appeler `document.write` sur un document fermé (chargé) appelle automatiquement `document.open`, ce qui efface le document.

## Syntaxe

```js
document.write(balisage);
```

### Paramètres

- `markup`
  - : est une chaîne de caractères contenant le texte à écrire dans le document.

### Exemple

```html
<html>
  <head>
    <title>Exemple de document.write</title>

    <script type="text/javascript">
      function nouveauContenu() {
        alert("chargement du nouveau contenu");
        document.open();
        document.write(
          "<h1>Assez de l'ancien contenu, passons au nouveau&nbsp;!</h1>",
        );
        document.close();
      }
    </script>
  </head>

  <body onload="nouveauContenu();">
    <p>Ceci est le contenu original du document.</p>
  </body>
</html>
```

## Notes

Écrire dans un document qui a déjà été chargé sans appeler [document.open()](/fr/docs/Web/API/Document/open) provoquera un appel automatique à `document.open`. Une fois l'écriture terminée, il est recommandé d'appeler [document.close()](/fr/docs/Web/API/Document/close) pour indiquer au navigateur qu'il peut terminer de charger la page. Le texte fourni est analysé et intégré à la structure du modèle de document. Dans l'exemple ci-dessus, l'élément `h1` devient un nœud dans le document.

Si l'appel à `document.write()` est intégré directement dans le code HTML, il n'appellera pas `document.open()`. Par exemple&nbsp;:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

> **Note :** `document.write` et [`document.writeln`](/fr/docs/Web/API/Document/writeln) ne fonctionnent pas dans les documents XHTML (vous obtiendrez une erreur «&nbsp;Operation is not supported \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`]&nbsp;» dans la console d'erreurs). Cela arrive lors de l'ouverture d'un fichier local avec l'extension de fichier `.xhtm` ou pour tout document servi avec une `application/xhtml+xml` de [type MIME](/fr/docs/Glossary/MIME_type). Plus d'informations disponibles dans la [foire aux questions W3C XHTML (en anglais)](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

> **Note :** `document.write` dans les scripts [deferred (_différé_)](/fr/docs/Web/HTML/Element/script#attr-defer) ou [asynchronous (_asynchrone_)](/fr/docs/Web/HTML/Element/script#attr-async) sera ignoré et vous recevrez un message comme "A call to `document.write()` from an asynchronously-loaded external script was ignored" dans la console d'erreurs.

> **Note :** Dans Edge seulement, appeler plusieurs fois `document.write` dans un "iframe" déclenche une erreur "SCRIPT70: Permission denied." _(autorisation refusée)_.

> **Note :** À partir de la version 55, Chrome n'exécute pas les éléments `<script>` injectés via `document.write()` en cas d'échec de cache HTTP pour les utilisateurs sur une connexion 2G.

## Spécification

- [DOM Level 2 HTML: `write()` Method](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75233634)
- [Dynamic markup insertion in HTML](http://www.w3.org/TR/2011/WD-html5-author-20110705/apis-in-html-documents.html#dynamic-markup-insertion)

## Voir aussi

- {{ domxref("element.innerHTML") }}
- {{ domxref("document.createElement()") }}
