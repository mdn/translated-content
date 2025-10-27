---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Les éléments HTML {{HTMLElement("script")}} exposent l'interface **`HTMLScriptElement`**. Cette interface fournit des propriétés et des méthodes pour définir le comportement et l'exécution des éléments `<script>` (en plus de celles héritées de {{DOMxRef("HTMLElement")}}).

Les fichiers JavaScript doivent être servis avec le type [MIME](/fr/docs/Web/HTTP/Guides/MIME_types) `text/javascript`. Les navigateurs acceptent ce type et bloquent le script uniquement s'il est servi avec un type image (`image/*`), vidéo (`video/*`), audio (`audio/*`) ou `text/csv`. Si le script est bloqué, l'élément reçoit l'événement {{DOMxRef("HTMLElement/error_event", "error")}}&nbsp;; sinon, il reçoit l'événement {{DOMxRef("Window/load_event", "load")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLScriptElement.attributionSrc")}} {{SecureContext_Inline}} {{Experimental_Inline}}
  - : Obtient et définit l'attribut [`attributionsrc`](/fr/docs/Web/HTML/Reference/Elements/script#attributionsrc) sur un élément {{HTMLElement("script")}} par programmation, reflétant la valeur de cet attribut. `attributionsrc` indique que vous souhaitez que le navigateur envoie un en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} avec la requête de ressource du script. Côté serveur, cela sert à déclencher l'envoi d'un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} ou {{HTTPHeader("Attribution-Reporting-Register-Trigger")}} dans la réponse, afin d'enregistrer respectivement une [source d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#sources_dévénements_basées_sur_javascript) ou un [déclencheur d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers#déclencheurs_dattributions_basés_sur_javascript) basé sur JavaScript.
- {{DOMxRef("HTMLScriptElement.async")}}
  - : Un booléen qui définit la façon dont le script doit être exécuté. Pour les scripts classiques, si la propriété `async` est à `true`, le script externe est récupéré en parallèle de l'analyse et évalué dès qu'il est disponible. Pour les [modules](/fr/docs/Web/JavaScript/Guide/Modules), si la propriété `async` est à `true`, le script et toutes ses dépendances sont récupérés en parallèle de l'analyse et évalués dès qu'ils sont disponibles.
- {{DOMxRef("HTMLScriptElement.blocking")}}
  - : Une chaîne de caractères indiquant que certaines opérations doivent être bloquées lors de la récupération du script. Elle reflète l'attribut `blocking` de l'élément {{HTMLElement("script")}}.
- `HTMLScriptElement.charset` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant l'encodage du script externe. Elle reflète l'attribut [`charset`](/fr/docs/Web/HTML/Reference/Elements/script#charset).
- {{DOMxRef("HTMLScriptElement.crossOrigin")}}
  - : Une chaîne de caractères reflétant le [paramètre CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour l'élément script. Pour les scripts classiques provenant d'autres {{Glossary("Origin", "origines")}}, cela définit si les informations d'erreur seront exposées.
- {{DOMxRef("HTMLScriptElement.defer")}}
  - : Un booléen qui définit la façon dont le script doit être exécuté. Pour les scripts classiques, si la propriété `defer` est à `true`, le script externe est exécuté après l'analyse du document, mais avant le déclenchement de l'événement {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}. Pour les [modules](/fr/docs/Web/JavaScript/Guide/Modules), la propriété `defer` n'a aucun effet.
- `HTMLScriptElement.event` {{Deprecated_Inline}}
  - : Une chaîne de caractères ; méthode obsolète pour enregistrer des gestionnaires d'événements sur les éléments d'un document HTML.
- {{DOMxRef("HTMLScriptElement.fetchPriority")}}
  - : Une chaîne de caractères optionnelle représentant une indication donnée au navigateur sur la priorité de récupération d'un script externe par rapport aux autres scripts externes. Si cette valeur est fournie, elle doit être l'une des valeurs autorisées : `high` pour une priorité élevée, `low` pour une priorité faible, ou `auto` pour indiquer aucune préférence (valeur par défaut). Elle reflète l'attribut `fetchpriority` de l'élément {{HTMLElement("script")}}.
- {{DOMxRef("HTMLScriptElement.integrity")}}
  - : Une chaîne de caractères contenant des métadonnées intégrées que le navigateur peut utiliser pour vérifier qu'une ressource récupérée n'a pas été modifiée de façon inattendue. Elle reflète l'attribut `integrity` de l'élément {{HTMLElement("script")}}.
- {{DOMxRef("HTMLScriptElement.noModule")}}
  - : Un booléen qui, si elle est vraie, empêche l'exécution du script dans les navigateurs qui prennent en charge les [modules ES](/fr/docs/Web/JavaScript/Guide/Modules) — utilisé pour exécuter des scripts de secours dans les anciens navigateurs qui ne prennent _pas_ en charge les modules JavaScript.
- {{DOMxRef("HTMLScriptElement.referrerPolicy")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`referrerPolicy`](/fr/docs/Web/HTML/Reference/Elements/script#referrerpolicy) qui définit le référent à utiliser lors de la récupération du script et des requêtes effectuées par ce script.
- {{DOMxRef("HTMLScriptElement.src")}}
  - : Une chaîne de caractères représentant l'URL d'un script externe ; cela peut être utilisé comme alternative à l'intégration directe d'un script dans un document. Elle reflète l'attribut `src` de l'élément {{HTMLElement("script")}}.
- {{DOMxRef("HTMLScriptElement.text")}}
  - : Une chaîne de caractères qui concatène et retourne le contenu de tous les nœuds {{DOMxRef("Text")}} à l'intérieur de l'élément {{HTMLElement("script")}} (en ignorant les autres nœuds comme les commentaires) dans l'ordre de l'arbre. Lors de la définition, elle agit comme la propriété {{DOMxRef("Node.textContent")}}.

    > [!NOTE]
    > Lorsqu'ils sont insérés avec la méthode {{DOMxRef("Document.write()")}}, les éléments {{HTMLElement("script")}} s'exécutent (généralement de façon synchrone), mais lorsqu'ils sont insérés avec {{DOMxRef("Element.innerHTML")}} ou {{DOMxRef("Element.outerHTML")}}, ils ne s'exécutent pas du tout.

- {{DOMxRef("HTMLScriptElement.type")}}
  - : Une chaîne de caractères représentant le type du script. Elle reflète l'attribut `type` de l'élément {{HTMLElement("script")}}.

## Méthodes statiques

- {{DOMxRef("HTMLScriptElement.supports_static", "HTMLScriptElement.supports()")}}
  - : Retourne `true` si le navigateur prend en charge les scripts du type spécifié, et `false` sinon.
    Cette méthode fournit un moyen simple et unifié de détecter les fonctionnalités liées aux scripts.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Événements

_Aucun événement spécifique&nbsp;; hérite des événements de son parent, {{DOMxRef("HTMLElement")}}._

## Exemples

### Importation dynamique de scripts

Créons une fonction qui importe de nouveaux scripts dans un document en créant un nœud {{HTMLElement("script")}} _juste avant_ le {{HTMLElement("script")}} qui héberge le code suivant (via {{DOMxRef("document.currentScript")}}).
Ces scripts seront exécutés **de façon asynchrone**.
Pour plus de détails, voir les propriétés [`defer`](/fr/docs/Web/API/HTMLScriptElement/defer) et [`async`](/fr/docs/Web/API/HTMLScriptElement/async).

```js
function loadError(oError) {
  throw new URIError(
    `Le script ${oError.target.src} n'a pas pu être chargé correctement.`,
  );
}

function prefixScript(url, onloadFunction) {
  const newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.currentScript.parentNode.insertBefore(
    newScript,
    document.currentScript,
  );
  newScript.src = url;
}
```

La fonction suivante, au lieu d'insérer les nouveaux scripts juste avant l'élément {{DOMxRef("document.currentScript")}}, les ajoute comme enfants de la balise {{HTMLElement("head")}}.

```js
function loadError(oError) {
  throw new URIError(
    `Le script ${oError.target.src} n'a pas pu être chargé correctement.`,
  );
}

function affixScriptToHead(url, onloadFunction) {
  const newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.head.appendChild(newScript);
  newScript.src = url;
}
```

Exemple d'utilisation&nbsp;:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", () => {
  alert('Le script "myScript2.js" a été chargé correctement.');
});
```

### Vérification de la prise en charge d'un type de script

{{DOMxRef("HTMLScriptElement.supports_static", "HTMLScriptElement.supports()")}} fournit un mécanisme unifié pour vérifier si un navigateur prend en charge des types de scripts particuliers.

L'exemple ci-dessous montre comment vérifier la prise en charge des modules, en utilisant l'existence de l'attribut `noModule` comme solution de repli.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

On suppose que les scripts classiques sont pris en charge par tous les navigateurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("script")}}
- L'élément HTML {{HTMLElement("noscript")}}
- {{DOMxRef("document.currentScript")}}
- [Workers Web](/fr/docs/Web/API/Web_Workers_API/Using_web_workers) (extraits de code similaires aux scripts mais exécutés dans [un autre contexte global](/fr/docs/Web/API/DedicatedWorkerGlobalScope))
