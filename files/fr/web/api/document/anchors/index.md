---
title: "Document : propriété anchors"
short-title: anchors
slug: Web/API/Document/anchors
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété en lecture seule **`anchors`** de l'interface {{DOMxRef("Document")}} retourne une liste de toutes les ancres du document.

## Valeur

Un objet {{DOMxRef("HTMLCollection")}}.

## Exemples

### Exemple simple

```js
if (document.anchors.length >= 5) {
  console.log("a trouvé beaucoup trop d'ancres");
}
```

### Créer une table des matières

L'exemple suivant remplit automatiquement une table des matières avec chaque ancre présente sur la page&nbsp;:

```html
<h1>Titre</h1>
<h2><a name="contents">Contenus</a></h2>
<ul id="tdm"></ul>

<h2><a name="plants">Plantes</a></h2>
<ol>
  <li>Pommes</li>
  <li>Oranges</li>
  <li>Poires</li>
</ol>

<h2><a name="veggies">Légumes</a></h2>
<ol>
  <li>Carottes</li>
  <li>Céleri</li>
  <li>Betteraves</li>
</ol>
```

```js
const tdm = document.getElementById("tdm");
for (const ancre of document.anchors) {
  const li = document.createElement("li");
  const nouvelleAncre = document.createElement("a");
  nouvelleAncre.href = `#${ancre.name}`;
  nouvelleAncre.textContent = ancre.text;
  li.appendChild(nouvelleAncre);
  tdm.appendChild(li);
}
```

{{EmbedLiveSample("Créer une table des matières", "", 500)}}

## Notes

Pour des raisons de rétrocompatibilité, la liste d'ancres retournée contient seulement les ancres créées avec l'attribut `name`, pas celles créées avec l'attribut `id`.

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
