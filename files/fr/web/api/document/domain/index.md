---
title: "Document : propriété domain"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété **`domain`** de l'interface {{DOMxRef("Document")}} obtient/définit la partie domaine de {{Glossary("origin", "l'origine")}} du document courant, telle qu'utilisée par la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy).

## Valeur

Une chaîne de caractères.

### Exceptions

- `SecurityError` {{DOMxRef("DOMException")}}
  - : Le document n'est pas autorisé à définir son domaine, par exemple s'il est en mode sandbox ou a une origine opaque. Voir la [section des échecs](#échecs) pour plus de détails.

## Exemples

### Obtenir le domaine

Pour le code s'exécutant à l'URL `https://developer.mozilla.org/en-US/docs/Web`, cet exemple définirait `currentDomain` sur la chaîne des caractères `"developer.mozilla.org"`.

```js
const currentDomain = document.domain;
```

L'accesseur de cette propriété retourne la partie domaine de l'origine du document courant. Dans la plupart des cas, il s'agira de la partie nom d'hôte de l'URL du document. Cependant, il existe quelques exceptions&nbsp;:

- Si la page a une {{Glossary("origin", "origine")}} opaque, par exemple pour une page avec une [URL de données](/fr/docs/Web/URI/Reference/Schemes/data), alors elle retournera la chaîne de caractères vide.
- Si le [mutateur](#définir_le_domaine) de `document.domain` a été utilisé, alors il retournera la valeur qui a été définie.

Bien que l'accesseur ne soit pas dangereux de la même manière que le mutateur, il est probablement plus simple et plus utile d'utiliser la propriété {{DOMxRef("Location.hostname")}} à la place.
Vous pouvez ainsi éviter `document.domain` entièrement.

```js
const currentHostname = location.hostname;
```

Pour l'URL `https://developer.mozilla.org/en-US/docs/Web`, `currentHostname` est également la chaîne de caractères `"developer.mozilla.org"`.
D'autres alternatives qui fournissent des informations légèrement différentes sont {{DOMxRef("Location.host")}}, qui inclut le port, et {{DOMxRef("Window.origin")}}, qui fournit l'origine complète.

### Définir le domaine

```js
document.domain = domainString;
```

Le mutateur de cette propriété peut être utilisé pour _changer_ {{Glossary("origin", "l'origine")}} d'une page, et ainsi modifier la manière dont certaines vérifications de sécurité sont effectuées. Il ne peut être défini que sur le même domaine ou un domaine parent. Par exemple, si `https://a.exemple.com` et `https://b.exemple.com` utilisent tous deux

```js
document.domain = "exemple.com";
```

alors ils ont tous deux modifié leur origine pour avoir le même domaine, et ils peuvent maintenant accéder directement au DOM de l'autre—malgré le fait qu'ils soient inter-origine, ce qui empêcherait normalement un tel accès.

On notera que définir `document.domain` sur sa valeur actuelle n'est pas une opération sans effet. Cela change toujours l'origine. Par exemple, si une page définit

```js
document.domain = document.domain;
```

alors elle sera considérée comme inter-origine et sera comptée comme inter-origine par rapport à toutes les autres pages normalement de même origine qui n'ont pas fait la même chose.

#### Obsolescence

Le mutateur `document.domain` est obsolète. Il compromet les protections de sécurité fournies par la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy) et complique le modèle d'origine dans les navigateurs, entraînant des problèmes d'interopérabilité et des bogues de sécurité.

Essayer de définir `document.domain` est dangereux. Cela ouvre un accès complet au DOM d'une page depuis _tous_ les sous-domaines, ce qui n'est probablement pas ce qui est prévu. Cela supprime également le composant de port de l'origine, de sorte que votre page peut maintenant être accessible par d'autres pages avec la même adresse IP ou le même composant d'hôte, même sur un port différent.

Cela est particulièrement dangereux sur un hébergement partagé. Par exemple, un autre client d'un hébergement partagé peut héberger un site à la même adresse IP mais sur un port différent, et définir `document.domain` supprimera la protection de même origine qui vous protège normalement contre l'accès aux données de votre site par le site de cet autre client.

Des problèmes similaires se produisent avec les sites d'hébergement partagé qui attribuent à chaque client un sous-domaine différent. Si un site définit `document.domain`, tout autre client sur un sous-domaine différent peut maintenant faire la même chose et commencer à accéder aux données du site original.

Au lieu d'utiliser `document.domain` pour faciliter la communication inter-origine, vous devriez utiliser {{DOMxRef("Window.postMessage")}} pour envoyer un message asynchrone à l'autre origine. Cet accès contrôlé via le passage de messages est beaucoup plus sûr que l'exposition générale de toutes les données causée par `document.domain`.

#### Échecs

Le mutateur lèvera une `SecurityError` de {{DOMxRef("DOMException")}} dans plusieurs cas&nbsp;:

- Le document est à l'intérieur d'un {{HTMLElement("iframe")}} en mode bac à sable.
- Le document n'a pas de {{Glossary("browsing context")}}.
- Le [domaine effectif <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) du document est `null`.
- La valeur donnée n'est ni la même que le nom d'hôte actuel de la page, ni un domaine parent du domaine actuel.

À titre d'exemple de ce dernier cas d'échec, essayer de définir `document.domain` sur `"exemple.org"` lorsque vous êtes sur `https://exemple.com/` générera une erreur.

De plus, dans le cadre de son obsolescence, il ne fera rien lorsqu'il est combiné avec certaines fonctionnalités d'isolation modernes&nbsp;:

- Si utilisé sur une page isolée inter-origine, c'est-à-dire une page qui utilise les valeurs appropriées
  pour les en-têtes HTTP {{HTTPHeader("Cross-Origin-Opener-Policy")}} et
  {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- Si utilisé sur une page isolée par origine, c'est-à-dire une page qui utilise l'en-tête HTTP
  {{HTTPHeader("Origin-Agent-Cluster")}} {{Experimental_Inline}}

Enfin, définir `document.domain` ne modifie pas l'origine utilisée pour les vérifications d'origine par certaines API Web, empêchant l'accès aux sous-domaines via ce mécanisme. Les API concernées incluent (mais ne sont pas limitées à)&nbsp;: {{DOMxRef("Window.localStorage")}}, [l'API IndexedDB](/fr/docs/Web/API/IndexedDB_API), {{DOMxRef("BroadcastChannel")}}, {{DOMxRef("SharedWorker")}}.

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)
- La propriété {{DOMxRef("Location.hostname")}}
- La propriété {{DOMxRef("Location.host")}}
- La propriété {{DOMxRef("Window.origin")}}
