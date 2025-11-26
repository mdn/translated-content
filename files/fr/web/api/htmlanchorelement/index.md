---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLAnchorElement`** représente les éléments d'hyperlien et fournit des propriétés et méthodes spécifiques (en plus de celles de l'interface objet {{domxref("HTMLElement")}} dont elle hérite) pour manipuler la présentation et la mise en page de ces éléments. Cette interface correspond à l'élément HTML {{HTMLElement("a")}}&nbsp;; à ne pas confondre avec {{HTMLElement("link")}}, qui est représenté par l'interface {{domxref("HTMLLinkElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLAnchorElement.attributionSrc")}} {{securecontext_inline}} {{experimental_inline}}
  - : Obtient et définit l'attribut [`attributionsrc`](/fr/docs/Web/HTML/Reference/Elements/a#attributionsrc) sur un élément {{htmlelement("a")}} de façon programmatique, reflétant la valeur de cet attribut. `attributionsrc` indique que vous souhaitez que le navigateur envoie un en-tête {{httpheader("Attribution-Reporting-Eligible")}}. Côté serveur, cela sert à déclencher l'envoi d'un en-tête {{httpheader("Attribution-Reporting-Register-Source")}} dans la réponse, afin d'enregistrer une source d'attribution basée sur la navigation.
- {{domxref("HTMLAnchorElement.download")}}
  - : Une chaîne de caractères indiquant que la ressource liée doit être téléchargée plutôt qu'affichée dans le navigateur. La valeur représente le nom de fichier proposé. Si ce nom n'est pas valide pour le système d'exploitation sous-jacent, le navigateur l'adaptera.
- {{domxref("HTMLAnchorElement.hash")}}
  - : Une chaîne de caractères représentant l'identifiant de fragment, y compris le dièse (`#`) initial, le cas échéant, dans l'URL référencée.
- {{domxref("HTMLAnchorElement.host")}}
  - : Une chaîne de caractères représentant le nom d'hôte et le port (si ce n'est pas le port par défaut) dans l'URL référencée.
- {{domxref("HTMLAnchorElement.hostname")}}
  - : Une chaîne de caractères représentant le nom d'hôte dans l'URL référencée.
- {{domxref("HTMLAnchorElement.href")}}
  - : Une chaîne de caractères résultant de l'analyse de l'attribut HTML [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href) relativement au document, contenant une URL valide de la ressource liée.
- {{domxref("HTMLAnchorElement.hreflang")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`hreflang`](/fr/docs/Web/HTML/Reference/Elements/a#hreflang), indiquant la langue de la ressource liée.
- {{domxref("HTMLAnchorElement.origin")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères contenant l'origine de l'URL, c'est-à-dire son schéma, son domaine et son port.
- {{domxref("HTMLAnchorElement.password")}}
  - : Une chaîne de caractères contenant le mot de passe spécifié avant le nom de domaine.
- {{domxref("HTMLAnchorElement.pathname")}}
  - : Une chaîne de caractères contenant un `/` initial suivi du chemin de l'URL, sans inclure la chaîne de requête ni le fragment.
- {{domxref("HTMLAnchorElement.ping")}}
  - : Une liste d'URL séparées par des espaces. Lorsque le lien est suivi, le navigateur enverra des requêtes {{HTTPMethod("POST")}} avec le corps PING à ces URL.
- {{domxref("HTMLAnchorElement.port")}}
  - : Une chaîne de caractères représentant la partie port, le cas échéant, de l'URL référencée.
- {{domxref("HTMLAnchorElement.protocol")}}
  - : Une chaîne de caractères représentant la partie protocole, y compris les deux-points finaux (`:`), de l'URL référencée.
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/a#referrerpolicy) indiquant quel référent utiliser.
- {{domxref("HTMLAnchorElement.rel")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Elements/a#rel), spécifiant la relation entre l'objet cible et l'objet lié.
- {{domxref("HTMLAnchorElement.relList")}} {{ReadOnlyInline}}
  - : Retourne un {{domxref("DOMTokenList")}} qui reflète l'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Elements/a#rel), sous forme de liste de jetons.
- {{domxref("HTMLAnchorElement.search")}}
  - : Une chaîne de caractères représentant la partie recherche, y compris le point d'interrogation initial (`?`), le cas échéant, de l'URL référencée.
- {{domxref("HTMLAnchorElement.target")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`target`](/fr/docs/Web/HTML/Reference/Elements/a#target), indiquant où afficher la ressource liée.
- {{domxref("HTMLAnchorElement.text")}}
  - : Une chaîne de caractères équivalente à la propriété {{domxref("Node.textContent")}}.
- {{domxref("HTMLAnchorElement.type")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`type`](/fr/docs/Web/HTML/Reference/Elements/a#type), indiquant le type MIME de la ressource liée.
- {{domxref("HTMLAnchorElement.username")}}
  - : Une chaîne de caractères contenant le nom d'utilisateur spécifié avant le nom de domaine.

### Propriétés obsolètes

- `HTMLAnchorElement.charset` {{deprecated_inline}}
  - : Une chaîne de caractères représentant l'encodage des caractères de la ressource liée.
- `HTMLAnchorElement.coords` {{deprecated_inline}}
  - : Une chaîne de caractères représentant une liste de coordonnées séparées par des virgules.
- `HTMLAnchorElement.name` {{deprecated_inline}}
  - : Une chaîne de caractères représentant le nom de l'ancre.
- `HTMLAnchorElement.rev` {{deprecated_inline}}
  - : Une chaîne de caractères représentant l'attribut HTML [`rev`](/fr/docs/Web/HTML/Reference/Elements/a#rev), spécifiant la relation de l'objet lien avec l'objet cible.
- `HTMLAnchorElement.shape` {{deprecated_inline}}
  - : Une chaîne de caractères représentant la forme de la zone active.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLAnchorElement.toString()")}}
  - : Retourne une chaîne de caractères contenant l'URL complète. C'est un synonyme de {{domxref("HTMLAnchorElement.href")}}, mais il ne peut pas être utilisé pour modifier la valeur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML implémentant cette interface&nbsp;: {{HTMLElement("a")}}
