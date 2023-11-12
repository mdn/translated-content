---
title: Document.getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
l10n:
  sourceCommit: c3a0924949863b43957b4ba2ad5e64558165672d
---

{{APIRef("DOM")}}

Cette méthode, rattachée à l'interface [`Document`](/fr/docs/Web/API/Document), renvoie une liste d'éléments dont la balise correspond à l'espace de noms indiqué.

La recherche effectuée pour obtenir cette liste porte sur l'ensemble du document, y compris sa racine.

## Syntaxe

```js-nolint
getElementsByTagNameNS(namespace, name)
```

### Paramètres

- `namespace`
  - : L'URI de l'espace de noms des éléments à rechercher (voir [`element.namespaceURI`](/fr/docs/Web/API/Element/namespaceURI)).
- `name`
  - : Le nom local des éléments à rechercher ou la valeur spéciale `*`, qui cible tous les éléments (voir [`element.localName`](/fr/docs/Web/API/Element/localName)).

### Valeur de retour

Une liste [`NodeList`](/fr/docs/Web/API/NodeList) dynamique (voir la note qui suit) qui contient les éléments trouvés, dans l'ordre selon lequel ils apparaissent dans l'arbre.

> **Note :** Bien que la spécification W3C indique que la valeur renvoyée est de type `NodeList`, Firefox renvoie un objet [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection). Opera renvoie un objet `NodeList` qui implémente une méthode `namedItem`, le rendant ainsi semblable à un objet `HTMLCollection`. À partir de janvier 2012, seuls les navigateurs WebKit renvoient un vrai objet `NodeList`. Voir [le bogue 14869](https://bugzilla.mozilla.org/show_bug.cgi?id=14869) pour plus de détails.

> **Note :** Les valeurs des paramètres de cette méthode sont sensibles à la casse (alors qu'elles ne l'étaient pas pour Firefox 3.5 et les versions antérieures, voir [les notes de version de Firefox 3.6](/fr/docs/Mozilla/Firefox/Releases/3.6#dom) et la note présente dans [le tableau de compatibilité de `Element.getElementsByTagNameNS()`](/fr/docs/Web/API/Element/getElementsByTagNameNS#compatibilité_des_navigateurs) pour plus de détails).

## Exemples

Dans l'exemple qui suit, on utilise `getElementsByTagNameNS()` à partir d'un élément parent donné puis on recherche récursivement dans le DOM les éléments enfants dont la balise correspond au paramètre `name`.

On notera que lorsque `getElementsByTagName()` est appelée sur un nœud qui n'est pas `document`, c'est en réalité la méthode [`Element.getElementsByTagNameNS()`](/fr/docs/Web/API/Element/getElementsByTagNameNS) qui est utilisée.

Vous pouvez enregistrer le code qui suit dans un fichier avec l'extension `.xhtml` afin d'essayer l'exemple.

```html
<html lang="fr" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Exemple <code>getElementsByTagNameNS()</code></title>

    <script>
      function getAllParaElems() {
        const allParas = document.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = allParas.length;
        alert(`Il y a ${num} éléments &lt;p&gt; dans ce document`);
      }

      function div1ParaElems() {
        const div1 = document.getElementById("div1");
        const div1Paras = div1.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = div1Paras.length;
        alert(`Il y a ${num} éléments &lt;p&gt; dans l'élément div1`);
      }

      function div2ParaElems() {
        const div2 = document.getElementById("div2");
        const div2Paras = div2.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = div2Paras.length;
        alert(`Il y a ${num} éléments &lt;p&gt; dans l'élément div2`);
      }
    </script>
  </head>

  <body style="border: solid green 3px">
    <p>Un peu de texte externe</p>
    <p>Un peu de texte externe</p>

    <div id="div1" style="border: solid blue 3px">
      <p>Du texte pour div1</p>
      <p>Du texte pour div1</p>
      <p>Du texte pour div1</p>

      <div id="div2" style="border: solid red 3px">
        <p>Du texte pour div2</p>
        <p>Du texte pour div2</p>
      </div>
    </div>

    <p>Un peu de texte externe</p>
    <p>Un peu de texte externe</p>

    <button onclick="getAllParaElems();">
      Afficher tous les éléments <code>&lt;p&gt;</code> dans le document
    </button>
    <br />

    <button onclick="div1ParaElems();">
      Afficher tous les éléments <code>&lt;p&gt;</code> dans l'élément
      <code>&lt;div1&gt;</code>
    </button>
    <br />

    <button onclick="div2ParaElems();">
      Afficher tous les éléments <code>&lt;p&gt;</code> dans l'élément
      <code>&lt;div2&gt;</code>
    </button>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.getElementsByTagNameNS()`](/fr/docs/Web/API/Element/getElementsByTagNameNS)
