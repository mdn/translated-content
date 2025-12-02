---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLAreaElement`** fournit des propriétés et méthodes spécifiques (en plus de celles de l'interface {{DOMxRef("HTMLElement")}} héritée) pour manipuler la disposition et la présentation des éléments HTML {{HTMLElement("area")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLAreaElement.alt")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`alt`](/fr/docs/Web/HTML/Reference/Elements/area#alt), contenant le texte alternatif de l'élément.
- {{DOMxRef("HTMLAreaElement.coords")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`coords`](/fr/docs/Web/HTML/Reference/Elements/area#coords), contenant les coordonnées définissant la zone réactive.
- {{DOMxRef("HTMLAreaElement.download")}}
  - : Une chaîne de caractères indiquant que la ressource liée doit être téléchargée plutôt qu'affichée dans le navigateur. La valeur représente le nom proposé du fichier. Si ce nom n'est pas valide pour le système d'exploitation, le navigateur l'ajustera.
- {{DOMxRef("HTMLAreaElement.hash")}}
  - : Une chaîne de caractères contenant l'identifiant de fragment (y compris le dièse `#`), s'il existe, dans l'URL référencée.
- {{DOMxRef("HTMLAreaElement.host")}}
  - : Une chaîne de caractères contenant le nom d'hôte et le port (si ce n'est pas le port par défaut) dans l'URL référencée.
- {{DOMxRef("HTMLAreaElement.hostname")}}
  - : Une chaîne de caractères contenant le nom d'hôte dans l'URL référencée.
- {{DOMxRef("HTMLAreaElement.href")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`href`](/fr/docs/Web/HTML/Reference/Elements/area#href), contenant une URL valide de la ressource liée.
- {{DOMxRef("HTMLAreaElement.noHref")}} {{Deprecated_Inline}}
  - : Un booléen indiquant si la zone est inactive (`true`) ou active (`false`).
- {{DOMxRef("HTMLAreaElement.origin")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères contenant l'origine de l'URL, c'est-à-dire son schéma, son domaine et son port.
- {{DOMxRef("HTMLAreaElement.password")}}
  - : Une chaîne de caractères contenant le mot de passe placé avant le nom de domaine.
- {{DOMxRef("HTMLAreaElement.pathname")}}
  - : Une chaîne de caractères contenant le chemin, s'il existe, de l'URL référencée.
- {{DOMxRef("HTMLAreaElement.ping")}}
  - : Une liste d'URL séparées par des espaces. Lorsque le lien est suivi, le navigateur enverra des requêtes {{HTTPMethod("POST")}} avec le corps PING à ces URL.
- {{DOMxRef("HTMLAreaElement.port")}}
  - : Une chaîne de caractères contenant le port, s'il existe, de l'URL référencée.
- {{DOMxRef("HTMLAreaElement.protocol")}}
  - : Une chaîne de caractères contenant le protocole (y compris les deux-points `:`) de l'URL référencée.
- {{DOMxRef("HTMLAreaElement.referrerPolicy")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/area#referrerpolicy), indiquant le référent à utiliser lors de la récupération de la ressource liée.
- {{DOMxRef("HTMLAreaElement.rel")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Elements/area#rel), indiquant la relation du document courant avec la ressource liée.
- {{DOMxRef("HTMLAreaElement.relList")}} {{ReadOnlyInline}}
  - : Retourne un {{DOMxRef("DOMTokenList")}} qui reflète l'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Elements/area#rel), indiquant la relation du document courant avec la ressource liée, sous forme de liste de jetons.
- {{DOMxRef("HTMLAreaElement.search")}}
  - : Une chaîne de caractères contenant la partie recherche (y compris le point d'interrogation `'?'`), si elle existe, de l'URL référencée.
- {{DOMxRef("HTMLAreaElement.shape")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`shape`](/fr/docs/Web/HTML/Reference/Elements/area#shape), indiquant la forme de la zone réactive, limitée aux valeurs connues.
- {{DOMxRef("HTMLAreaElement.target")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`target`](/fr/docs/Web/HTML/Reference/Elements/area#target), indiquant le contexte de navigation dans lequel ouvrir la ressource liée.
- {{DOMxRef("HTMLAreaElement.username")}}
  - : Une chaîne de caractères contenant le nom d'utilisateur·ice défini avant le nom de domaine.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLAreaElement.toString()")}}
  - : Retourne une chaîne de caractères contenant l'URL complète. C'est un synonyme de {{DOMxRef("HTMLAreaElement.href")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("area")}}
