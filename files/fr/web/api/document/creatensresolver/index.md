---
title: Document.createNSResolver()
slug: Web/API/Document/createNSResolver
---

{{ ApiRef("DOM") }}

Crée un `XPathNSResolver` qui résout les espaces de noms en respectant les définitions dans la portée pour un noeud spécifié.

## Syntaxe

```js
nsResolver = document.createNSResolver(node);
```

### Paramètres

- `node` est un noeud à utiliser comme contexte pour la résolution de l'espace de noms.

### Valeur retournée

- `nsResolver` est un objet XPathNSResolver.

## Notes

Adapte n'importe quel noeud DOM pour résoudre les espaces de noms afin qu'une expression [XPath](/fr/docs/XPath) puisse être facilement évaluée par rapport au contexte du nœud et son emplacement dans le document. Cet adaptateur fonctionne comme la méthode `lookupNamespaceURI` du DOM de niveau 3 sur les noeuds lors de la résolution de `namespaceURI` à partir d'un préfixe donné en utilisant l'information disponible dans la hiérarchie des noeuds au moment de l'appel de `lookupNamespaceURI`. Résout aussi correctement le préfixe implicite `xml`.

Notez que XPath définit QNames sans préfixe pour correspondre uniquement aux éléments d'un espace de noms null. XPath n'a aucun moyen de récupérer l'espace de noms par défaut tel qu'il est appliqué à une référence d'élément régulier (par exemple, `p[@id='_myid'`] pour `xmlns='http://www.w3.org/1999/xhtml'`). Pour faire correspondre les éléments par défaut dans un espace de noms non nul, vous devez soit faire référence à un élément particulier en utilisant un format tel que `*namespace-uri()=http://www.w3.org/1999/xhtml and name()=p[@id='_myid']` ([cette approche](/fr/docs/Web/JavaScript/Introduction_à_l_utilisation_de_XPath_avec_JavaScript#Using_XPath_functions_to_reference_elements_with_its_default_namespace) fonctionne bien pour les expressions XPath dynamiques dans lesquelles les espaces de noms pourraient ne pas être connus), soit utiliser des tests de noms préfixés et créer un résolveur d'espace de nom mappant le préfixe à l'espace de nom. Pour en savoir plus sur [comment créer un résolveur d'espace de nom défini par l'utilisateur](/fr/docs/Web/JavaScript/Introduction_à_l_utilisation_de_XPath_avec_JavaScript#Implémentation_d%27un_résolveur) si vous souhaitez adopter cette dernière approche.

`createNSResolver` a été introduit dans DOM Niveau 3.

## Voir aussi

- [`Document.evaluate()`](/fr/docs/Web/API/Document/evaluate)
- [Introduction à l'utilisation de XPath avec JavaScript](/fr/docs/Web/JavaScript/Introduction_à_l_utilisation_de_XPath_avec_JavaScript)

## Spécifications

[DOM Level 3 XPath Specification : createNSResolver](http://www.w3.org/TR/DOM-Level-3-XPath/xpath.html#XPathEvaluator-createNSResolver)
