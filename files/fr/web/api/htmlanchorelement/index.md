---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLAnchorElement`** représente les éléments d'hyperlien et fournit des propriétés et méthodes spécifiques (en plus de celles de l'interface objet {{DOMxRef("HTMLElement")}} dont elle hérite) pour manipuler la présentation et la mise en page de ces éléments. Cette interface correspond à l'élément HTML {{HTMLElement("a")}}&nbsp;; à ne pas confondre avec {{HTMLElement("link")}}, qui est représenté par l'interface {{DOMxRef("HTMLLinkElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLAnchorElement.attributionSrc")}} {{SecureContext_Inline}} {{Experimental_Inline}}
  - : Obtient et définit l'attribut [`attributionsrc`](/fr/docs/Web/HTML/Reference/Elements/a#attributionsrc) sur un élément {{HTMLElement("a")}} de façon programmatique, reflétant la valeur de cet attribut. `attributionsrc` indique que vous souhaitez que le navigateur envoie un en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}}. Côté serveur, cela sert à déclencher l'envoi d'un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} dans la réponse, afin d'enregistrer une source d'attribution basée sur la navigation.
- {{DOMxRef("HTMLAnchorElement.download")}}
  - : Une chaîne de caractères indiquant que la ressource liée doit être téléchargée plutôt qu'affichée dans le navigateur. La valeur représente le nom de fichier proposé. Si ce nom n'est pas valide pour le système d'exploitation sous-jacent, le navigateur l'adaptera.
- {{DOMxRef("HTMLAnchorElement.hash")}}
  - : Une chaîne de caractères représentant l'identifiant de fragment, y compris le dièse (`#`) initial, le cas échéant, dans l'URL référencée.
- {{DOMxRef("HTMLAnchorElement.host")}}
  - : Une chaîne de caractères représentant le nom d'hôte et le port (si ce n'est pas le port par défaut) dans l'URL référencée.
- {{DOMxRef("HTMLAnchorElement.hostname")}}
  - : Une chaîne de caractères représentant le nom d'hôte dans l'URL référencée.
- {{DOMxRef("HTMLAnchorElement.href")}}
  - : Une chaîne de caractères résultant de l'analyse de l'attribut HTML [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href) relativement au document, contenant une URL valide de la ressource liée.
- {{DOMxRef("HTMLAnchorElement.hreflang")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`hreflang`](/fr/docs/Web/HTML/Reference/Elements/a#hreflang), indiquant la langue de la ressource liée.
- {{DOMxRef("HTMLAnchorElement.interestForElement")}} {{Experimental_Inline}}
  - : Obtient ou définit l'élément cible d'un invocateur d'intérêt, dans les cas où l'élément HTML {{HTMLElement("a")}} associé est défini comme un [invocateur d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers#création_dun_invocateur_dinteret).
- {{DOMxRef("HTMLAnchorElement.origin")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères contenant l'origine de l'URL, c'est-à-dire son schéma, son domaine et son port.
- {{DOMxRef("HTMLAnchorElement.password")}}
  - : Une chaîne de caractères contenant le mot de passe spécifié avant le nom de domaine.
- {{DOMxRef("HTMLAnchorElement.pathname")}}
  - : Une chaîne de caractères contenant un `/` initial suivi du chemin de l'URL, sans inclure la chaîne de requête ni le fragment.
- {{DOMxRef("HTMLAnchorElement.ping")}}
  - : Une liste d'URL séparées par des espaces. Lorsque le lien est suivi, le navigateur enverra des requêtes {{HTTPMethod("POST")}} avec le corps PING à ces URL.
- {{DOMxRef("HTMLAnchorElement.port")}}
  - : Une chaîne de caractères représentant la partie port, le cas échéant, de l'URL référencée.
- {{DOMxRef("HTMLAnchorElement.protocol")}}
  - : Une chaîne de caractères représentant la partie protocole, y compris les deux-points finaux (`:`), de l'URL référencée.
- {{DOMxRef("HTMLAnchorElement.referrerPolicy")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/a#referrerpolicy) indiquant quel référent utiliser.
- {{DOMxRef("HTMLAnchorElement.rel")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Elements/a#rel), spécifiant la relation entre l'objet cible et l'objet lié.
- {{DOMxRef("HTMLAnchorElement.relList")}} {{ReadOnlyInline}}
  - : Retourne un {{DOMxRef("DOMTokenList")}} qui reflète l'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Elements/a#rel), sous forme de liste de jetons.
- {{DOMxRef("HTMLAnchorElement.search")}}
  - : Une chaîne de caractères représentant la partie recherche, y compris le point d'interrogation initial (`?`), le cas échéant, de l'URL référencée.
- {{DOMxRef("HTMLAnchorElement.target")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`target`](/fr/docs/Web/HTML/Reference/Elements/a#target), indiquant où afficher la ressource liée.
- {{DOMxRef("HTMLAnchorElement.text")}}
  - : Une chaîne de caractères équivalente à la propriété {{DOMxRef("Node.textContent")}}.
- {{DOMxRef("HTMLAnchorElement.type")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`type`](/fr/docs/Web/HTML/Reference/Elements/a#type), indiquant le type MIME de la ressource liée.
- {{DOMxRef("HTMLAnchorElement.username")}}
  - : Une chaîne de caractères contenant le nom d'utilisateur spécifié avant le nom de domaine.

### Propriétés obsolètes

- `HTMLAnchorElement.charset` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant l'encodage des caractères de la ressource liée.
- `HTMLAnchorElement.coords` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant une liste de coordonnées séparées par des virgules.
- `HTMLAnchorElement.name` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant le nom de l'ancre.
- `HTMLAnchorElement.rev` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant l'attribut HTML [`rev`](/fr/docs/Web/HTML/Reference/Elements/a#rev), spécifiant la relation de l'objet lien avec l'objet cible.
- `HTMLAnchorElement.shape` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant la forme de la zone active.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLAnchorElement.toString()")}}
  - : Retourne une chaîne de caractères contenant l'URL complète. C'est un synonyme de {{DOMxRef("HTMLAnchorElement.href")}}, mais il ne peut pas être utilisé pour modifier la valeur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("a")}}
