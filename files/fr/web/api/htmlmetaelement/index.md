---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLMetaElement`** contient les métadonnées descriptives d'un document fournies en HTML via les éléments {{HTMLElement("meta")}}.
Cette interface hérite de toutes les propriétés et méthodes décrites dans l'interface {{DOMxRef("HTMLElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{HTMLElement("meta#charset")}}
  - : L'encodage de caractères pour un document HTML.
- {{DOMxRef("HTMLMetaElement.content")}}
  - : La partie «&nbsp;valeur&nbsp;» des paires nom-valeur des métadonnées du document.
- {{DOMxRef("HTMLMetaElement.httpEquiv")}}
  - : Le nom de la directive pragma, l'en-tête de réponse HTTP, pour un document.
- {{DOMxRef("HTMLMetaElement.media")}}
  - : Le contexte média pour une propriété de métadonnée `theme-color`.
- {{DOMxRef("HTMLMetaElement.name")}}
  - : La partie «&nbsp;nom&nbsp;» des paires nom-valeur définissant les métadonnées nommées d'un document.
- {{DOMxRef("HTMLMetaElement.scheme")}} {{Deprecated_Inline}}
  - : Définit le schéma de la valeur dans l'attribut {{DOMxRef("HTMLMetaElement.content")}}.
    Cet attribut est obsolète et ne doit pas être utilisé sur de nouvelles pages web.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Exemples

Les deux exemples suivants montrent une approche générale pour utiliser l'interface `HTMLMetaElement`.
Pour des exemples spécifiques, consultez les pages des propriétés individuelles comme décrit dans la section [Propriétés d'instance](#propriétés_dinstance) ci-dessus.

### Définir la métadonnée de description de la page

L'exemple suivant crée un nouvel élément `<meta>` avec un attribut `name` défini sur [`description`](/fr/docs/Web/HTML/Reference/Elements/meta/name#noms_de_méta_définis_dans_la_spécification_html).
L'attribut `content` définit une description du document et est ajouté à l'élément `<head>` du document&nbsp;:

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "L'élément <meta> peut être utilisé pour fournir des métadonnées de document sous forme de paires nom-valeur, l'attribut name donnant le nom de la métadonnée et l'attribut content la valeur.";
document.head.appendChild(meta);
```

### Définir la métadonnée `viewport`

L'exemple suivant montre comment créer un nouvel élément `<meta>` avec un attribut `name` défini sur [`viewport`](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport).
L'attribut `content` définit la taille de la zone d'affichage et est ajouté à l'élément `<head>` du document&nbsp;:

```js
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);
```

Pour plus d'informations sur la définition de la zone d'affichage, voir [`<meta name="viewport">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML implémentant cette interface&nbsp;: {{HTMLElement("meta")}}
