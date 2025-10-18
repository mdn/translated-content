---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

L'interface **`HTMLLinkElement`** représente les informations de référence pour les ressources externes et la relation de ces ressources avec un document et inversement (correspond à l'élément {{htmlelement("link")}}&nbsp;; à ne pas confondre avec {{htmlelement("a")}}, qui est représenté par [`HTMLAnchorElement`](/fr/docs/Web/API/HTMLAnchorElement)). Cet objet hérite de toutes les propriétés et méthodes de l'interface {{domxref("HTMLElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLLinkElement.as")}}
  - : Une chaîne de caractères représentant le type de contenu chargé par le lien HTML lorsque [`rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) ou [`rel="modulepreload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/modulepreload) est utilisé.
- {{domxref("HTMLLinkElement.blocking")}}
  - : Une chaîne de caractères indiquant que certaines opérations doivent être bloquées lors de la récupération d'une ressource externe. Cela reflète l'attribut `blocking` de l'élément {{HTMLElement("link")}}.
- {{domxref("HTMLLinkElement.crossOrigin")}}
  - : Une chaîne de caractères correspondant au paramètre CORS pour cet élément `link`. Voir [attributs de configuration CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour plus de détails.
- {{domxref("HTMLLinkElement.disabled")}}
  - : Un booléen qui indique si le lien est désactivé&nbsp;; actuellement utilisé uniquement avec les liens de feuilles de style.
- {{domxref("HTMLLinkElement.fetchPriority")}}
  - : Une chaîne de caractères optionnelle représentant une indication donnée au navigateur sur la priorité à accorder au chargement d'un preload par rapport à d'autres ressources du même type. Si cette valeur est fournie, elle doit être l'une des valeurs permises&nbsp;: `high` pour une priorité élevée, `low` pour une priorité faible, ou `auto` pour indiquer aucune préférence (valeur par défaut).
- {{domxref("HTMLLinkElement.href")}}
  - : Une chaîne de caractères représentant l'URI de la ressource cible.
- {{domxref("HTMLLinkElement.hreflang")}}
  - : Une chaîne de caractères représentant le code de langue de la ressource liée.
- {{domxref("HTMLLinkElement.imageSizes")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`imagesizes`](/fr/docs/Web/HTML/Reference/Elements/link#imagesizes)&nbsp;: une liste de conditions et tailles d'image séparées par des virgules.
- {{domxref("HTMLLinkElement.imageSrcset")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`imagesrcset`](/fr/docs/Web/HTML/Reference/Elements/link#imagesrcset)&nbsp;: une liste de candidats images séparés par des virgules.
- {{domxref("HTMLLinkElement.integrity")}}
  - : Une chaîne de caractères contenant des métadonnées en ligne que le navigateur peut utiliser pour vérifier qu'une ressource récupérée n'a pas été modifiée de façon inattendue. Cela reflète l'attribut `integrity` de l'élément {{HTMLElement("link")}}.
- {{domxref("HTMLLinkElement.media")}}
  - : Une chaîne de caractères représentant une liste d'un ou plusieurs formats média auxquels la ressource s'applique. Cela reflète l'attribut `media` de l'élément {{HTMLElement("link")}}.
- {{domxref("HTMLLinkElement.referrerPolicy")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/link#referrerpolicy) indiquant quel référent utiliser.
- {{domxref("HTMLLinkElement.rel")}}
  - : Une chaîne de caractères représentant la relation directe de la ressource liée du document vers la ressource.
- {{domxref("HTMLLinkElement.relList")}} {{ReadOnlyInline}}
  - : Un {{domxref("DOMTokenList")}} qui reflète l'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Elements/link#rel), sous forme de liste de jetons.
- {{domxref("HTMLLinkElement.sizes")}} {{ReadOnlyInline}}
  - : Un {{domxref("DOMTokenList")}} qui reflète l'attribut HTML [`sizes`](/fr/docs/Web/HTML/Reference/Elements/link#sizes), sous forme de liste de jetons.
- {{domxref("HTMLLinkElement.sheet")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{domxref("StyleSheet")}} associé à l'élément donné, ou `null` s'il n'y en a pas.
- {{domxref("HTMLLinkElement.type")}}
  - : Une chaîne de caractères représentant le type MIME de la ressource liée.

### Propriétés obsolètes

- `HTMLLinkElement.charset` {{deprecated_inline}}
  - : Une chaîne de caractères représentant l'encodage de caractères pour la ressource cible.
- `HTMLLinkElement.rev` {{deprecated_inline}}
  - : Une chaîne de caractères représentant la relation réciproque de la ressource liée de la ressource vers le document.

    > [!NOTE]
    > Actuellement, la spécification W3C HTML 5.2 indique que `rev` n'est plus obsolète, tandis que la norme vivante WHATWG le considère toujours comme obsolète. Tant que cette incohérence n'est pas résolue, il faut toujours considérer cet attribut comme obsolète.

- `HTMLLinkElement.target` {{deprecated_inline}}
  - : Une chaîne de caractères représentant le nom de la frame cible à laquelle la ressource s'applique.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{domxref("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("link")}}.
