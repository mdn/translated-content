---
title: Attr
slug: Web/API/Attr
---

{{APIRef("DOM")}}

Ce type représente un attribut d'un élément DOM comme un objet. Dans la plupart des méthodes DOM, vous auriez probablement récupéré l'attribut directement comme une chaîne (par exemple, {{domxref ("element.getAttribute()")}}, mais certaines fonctions (par exemple, {{domxref ("element.getAttributeNode()" )}}) ou des moyens d'itération donnent des types Attr.

> **Attention :** À partir de Gecko 7.0, ceux qui vont être retirés afficheront des messages d'avertissement dans la console. Vous devriez modifier votre code en conséquence. Voir [Propriétés et méthodes dépréciées](#propriétés_et_méthodes_dépréciées) pour une liste complète.

## Propriétés

- {{domxref("Attr.name", "name")}} {{readOnlyInline}}
  - : Le nom de l'attribut.
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{readOnlyInline}}
  - : Une {{domxref("DOMString","Chaîne de caractères")}} représentant l'URI de l'espace nom de l'attribut ou `null` s'il n'y a pas d'espace nom.
- {{domxref("Attr.localName", "localName")}} {{readOnlyInline}}
  - : Une {{domxref("DOMString","Chaîne de caractères")}} représentant la partie locale du nom qualifié de l'attribut.
- {{domxref("Attr.prefix", "prefix")}} {{readOnlyInline}}
  - : Une {{domxref("DOMString","Chaîne de caractères")}} représentant le préfixe de l'espace nom de l'attribut, ou `null` si aucun préfixe n'est spécifié.
- {{domxref("Attr.ownerElement", "ownerElement")}} {{readOnlyInline}}
  - : L'élément contenant l'attribut.

> **Note :** DOM Niveau 4 a supprimé cette propriété . L'hypothèse était que puisque nous obtenons un objet Attr d'un {{domxref("Element")}}, nous devrions déjà connaître les éléments associés.
> Comme cela n'est pas vrai quand les objets `Attr` sont retournés par {{domxref("Document.evaluate")}}, le DOM Living Standard a réintroduit la propriété.
>
> Gecko affiche une note de dépréciation à partir de Gecko 7.0. Cette note a été supprimée dans Gecko 49.0.

- {{domxref("Attr.specified", "specified")}} {{readOnlyInline}}
  - : Cette propriété renvoie toujours la valeur `true`. À l'origine, elle renvoyait true si l'attribut était explicitement spécifié dans le code source ou par un script, et `false` si sa valeur provenait de la valeur par défaut définie dans la DTD du document.
- {{domxref("Attr.value", "Value")}}
  - : La valeur de l'attribut.

> **Note :** DOM Niveau 3 a défini `namespaceURI`, `localName` et `prefix` sur l'interface {{domxref("Node")}}. Dans DOM4 ils ont été déplacés vers `Attr`.
>
> Cette modification est implémentée dans Chrome depuis la version 46.0 et Firefox à partir de la version 48.0.

## Propriétés et méthodes dépréciées

Les propriétés suivantes ont été dépréciées. Si elle est disponible, la méthode ou propriété de remplacement appropriée est fournie.

- `attributes`
  - : Cette propriété retourne désormais toujours `NULL`.
- `childNodes` {{deprecated_inline}}
  - : Cette propriété retourne désormais toujours `un` {{domxref("NodeList")}} vide.
- `firstChild` {{deprecated_inline}}
  - : Cette propriété retourne désormais toujours `NULL`.
- `isId` {{readOnlyInline}}
  - : Indique si l'attribut est un "attribut ID". Un "attribut ID" étant un attribut dont la valeur devrait être unique dans un document DOM. En HTML DOM, "id" est le seul attribut ID, mais les documents XML peuvent en définir d'autres. Qu'un attribut soit unique ou non est souvent déterminé par un {{Glossary("DTD")}} ou une autre description de schéma.
- `lastChild` {{deprecated_inline}}
  - : Cette propriété retourne désormais toujours `NULL`.
- `nextSibling`
  - : Cette propriété retourne désormais toujours `NULL`.
- `nodeName`
  - : Utilisez {{domxref("Attr.name")}} à la place.
- `nodeType`
  - : Cette propriété retourne toujours 2. (`ATTRIBUTE_NODE`).
- `nodeValue`
  - : Utilisez {{domxref("Attr.value")}} à la place.
- `ownerDocument`
  - : Vous n'auriez pas dû l'utiliser en premier lieu, donc cela ne devrait pas vous ennuyer qu'il soit retiré.
- `parentNode`
  - : Cette propriété retourne désormais toujours NULL.
- `previousSibling`
  - : Cette propriété retourne désormais toujours NULL.
- `schemaTypeInfo` {{deprecated_inline}} {{readOnlyInline}}
  - : Les informations de type associées à cet attribut. Bien que l'information de type contenue dans cet attribut soit garantie après le chargement du document ou l'appel de {{domxref("Document.normalizeDocument")}}, cette propriété peut ne pas être fiable si le nœud a été déplacé.
- `specified`
  - : Cette propriété retourne désormais toujours true.
- `textContent`
  - : Utilisez {{domxref ("Attr.value")}} à la place.

Les méthodes suivantes ont été dépréciées:

- `appendChild()` {{deprecated_inline}}
  - : Modifiez à la place la valeur de {{domxref ("Attr.value")}}.
- `cloneNode()`
  - : Vous n'auriez pas dû l'utiliser en premier lieu, donc cela ne devrait pas vous ennuyer qu'il soit retiré.
- `createAttribute()`
  - : Utilisez {{domxref("Attr.setAttribute()")}} à la place.
- `createAttributeNS()`
  - : Utilisez {{domxref("Attr.setAttributeNS()")}} à la place.
- `getAttributeNode()`
  - : Utilisez {{domxref("Attr.getAttribute()")}} à la place.
- `getAttributeNodeNS()`
  - : Utilisez {{domxref("Attr.getAttributeNS()")}} à la place.
- `hasAttributes()` {{deprecated_inline}}
  - : Cette méthode retourne désormais toujours false.
- `hasChildNodes()`
  - : Cette méthode retourne désormais toujours false.
- `insertBefore()`
  - : Modifiez à la place la valeur de {{domxref ("Attr.value")}}.
- `isSupported()`
  - : Vous n'auriez pas dû l'utiliser en premier lieu, donc cela ne devrait pas vous ennuyer qu'il soit retiré.
- `isEqualNode()`
  - : Vous n'auriez pas dû l'utiliser en premier lieu, donc cela ne devrait pas vous ennuyer qu'il soit retiré.
- `normalize()`
  - : Vous n'auriez pas dû l'utiliser en premier lieu, donc cela ne devrait pas vous ennuyer qu'il soit retiré.
- `removeAttributeNode()`
  - : Utilisez {{domxref("Attr.removeAttribute()")}} à la place.
- `removeChild()` {{deprecated_inline}}
  - : Modifiez à la place la valeur de {{domxref("Attr.value")}}.
- `replaceChild()` {{deprecated_inline}}
  - : Modifiez à la place la valeur de {{domxref("Attr.value")}}.
- `setAttributeNode()`
  - : Utilisez {{domxref("Attr.setAttribute()")}} à la place.
- `setAttributeNodeNS()`
  - : Utilisez {{domxref("Attr.setAttributeNS()")}} à la place.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
