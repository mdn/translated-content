---
title: "<script> : l'élément de script"
slug: Web/HTML/Reference/Elements/script
original_slug: Web/HTML/Element/script
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

L'élément [HTML](/fr/docs/Web/HTML) **`<script>`** est utilisé pour intégrer du code ou des données exécutables&nbsp;: il sert généralement à intégrer ou référencer du code JavaScript. L'élément `<script>` peut aussi être utilisé avec d'autres langages, comme le langage de programmation GLSL de [WebGL](/fr/docs/Web/API/WebGL_API) ou {{Glossary("JSON")}}.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `async`
  - : Pour les scripts classiques, si l'attribut `async` est présent, alors le script classique sera récupéré en parallèle de l'analyse et évalué dès qu'il sera disponible.

    Pour les [modules de script](/fr/docs/Web/JavaScript/Guide/Modules), si l'attribut `async` est présent, alors les scripts et toutes leurs dépendances seront récupérés en parallèle de l'analyse et évalués dès qu'ils seront disponibles.

    > [!WARNING]
    > Cet attribut ne doit pas être utilisé si l'attribut `src` est absent (c'est-à-dire pour les scripts «&nbsp;en ligne&nbsp;») pour les scripts classiques, dans ce cas il n'aurait aucun effet.

    Cet attribut permet d'éviter que le **JavaScript bloque l'analyse du document**&nbsp;: le navigateur n'a plus à charger et évaluer les scripts avant de poursuivre l'analyse. L'attribut `defer` produit un effet similaire.

    Si `async` et `defer` sont présents, seul `async` est pris en compte.

    C'est un attribut booléen&nbsp;: sa présence indique la valeur vraie, son absence la valeur fausse.

    Voir la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs) pour la prise en charge. Voir aussi [les scripts asynchrones avec asm.js](/fr/docs/Games/Techniques/Async_scripts).

- `attributionsrc` {{Experimental_Inline}}
  - : Indique que vous souhaitez que le navigateur envoie un en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} avec la requête de ressource du script. Côté serveur, cela sert à déclencher l'envoi d'un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} ou {{HTTPHeader("Attribution-Reporting-Register-Trigger")}} dans la réponse, pour enregistrer respectivement une [source d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#sources_dévénements_basées_sur_javascript) ou un [déclencheur d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers#déclencheurs_dattributions_basés_sur_javascript) basé sur JavaScript. L'en-tête de réponse à envoyer dépend de la valeur de l'en-tête `Attribution-Reporting-Eligible` qui a déclenché l'enregistrement.

    > [!NOTE]
    > Il est aussi possible d'enregistrer des sources ou déclencheurs d'attribution JavaScript en envoyant une requête {{DOMxRef("Window/fetch", "fetch()")}} contenant l'option `attributionReporting` (soit directement dans l'appel à `fetch()`, soit sur un objet {{DOMxRef("Request")}} passé à `fetch()`), ou en envoyant un {{DOMxRef("XMLHttpRequest")}} avec {{DOMxRef("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} invoqué sur l'objet requête.

    Il existe deux versions de cet attribut que vous pouvez définir&nbsp;:
    - Booléen, c'est-à-dire juste le nom `attributionsrc`. Cela indique que vous souhaitez que l'en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} soit envoyé au même serveur que celui indiqué par l'attribut `src`. Cela convient lorsque vous gérez l'enregistrement de la source ou du déclencheur d'attribution sur le même serveur. Lors de l'enregistrement d'un déclencheur d'attribution, cette propriété est optionnelle, et une valeur de chaîne de caractères vide sera utilisée si elle est omise.
    - Valeur contenant une ou plusieurs URL, par exemple&nbsp;:

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      Cela est utile dans les cas où la ressource demandée n'est pas sur un serveur que vous contrôlez, ou si vous souhaitez gérer l'enregistrement de la source d'attribution sur un autre serveur. Dans ce cas, une ou plusieurs URL peuvent être définies comme valeur de `attributionsrc`. Lors de la requête de ressource, l'en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} sera envoyé à l'(aux) URL(s) définie(s) dans `attributionsrc` en plus de l'origine de la ressource. Ces URL peuvent alors répondre avec un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} ou {{HTTPHeader("Attribution-Reporting-Register-Trigger")}} selon le cas pour compléter l'enregistrement.

      > [!NOTE]
      > Définir plusieurs URL permet d'enregistrer plusieurs sources d'attribution sur la même fonctionnalité. Par exemple, différentes campagnes peuvent être mesurées, ce qui implique de générer différents rapports sur différentes données.

    Voir l'[API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

- `blocking`
  - : Cet attribut indique explicitement que certaines opérations doivent être bloquées jusqu'à l'exécution du script. Les opérations à bloquer doivent être une liste d'identifiants séparés par des espaces. Actuellement, un seul identifiant existe&nbsp;:
    - `render`&nbsp;: Le rendu du contenu à l'écran est bloqué.

    > [!NOTE]
    > Seuls les éléments HTML `script` présents dans l'en-tête du document (`<head>`) peuvent bloquer le rendu. Les scripts ne bloquent pas le rendu par défaut&nbsp;: si un élément `script` n'inclut pas `type="module"`, `async` ou `defer`, il bloque l'analyse, pas le rendu. Si un tel élément est ajouté dynamiquement, il faut définir `blocking = "render"` pour bloquer le rendu.

- [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Les balises de `script` classiques enverront un minimum d'informations à {{DOMxRef('Window.error_event', 'window.onerror')}} pour les scripts qui ne respectent pas les contrôles standard du {{Glossary("CORS")}}. Afin de disposer de plus de renseignements sur les erreurs pour les sites utilisant des domaines séparés pour des documents statiques, on pourra utiliser cet attribut. Voir [la page de réglages des attributs CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour plus d'explications quant aux valeurs valides.
- `defer`
  - : Cet attribut booléen permet d'indiquer au navigateur que le script doit être exécuté après l'analyse du document et avant l'évènement {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}.

    Les scripts qui utilisent l'attribut `defer` empêche le déclenchement de l'évènement `DOMContentLoaded` tant que le script n'a pas été chargé et que son évaluation n'est pas terminée.

    > [!WARNING]
    > Cet attribut ne doit pas être utilisé si l'attribut `src` est absent (c'est-à-dire pour les scripts «&nbsp;en ligne&nbsp;»), dans ce cas il n'aurait aucun effet.
    >
    > L'attribut `defer` n'a aucun effet sur les [modules de script](/fr/docs/Web/JavaScript/Guide/Modules)&nbsp;: ils sont différés par défaut.

    Les scripts qui utilisent l'attribut `defer` seront exécutés dans l'ordre dans lequel ils apparaissent dans le document.

    Cet attribut permet d'éliminer le **JavaScript bloquant l'analyse** où le navigateur devrait charger et évaluer les scripts avant de poursuivre l'analyse. `async` a un effet similaire dans ce cas.

    Si l'attribut est défini avec l'attribut `async`, l'élément se comporte comme si seul l'attribut `async` est défini.

- `fetchpriority`
  - : Indique une suggestion de priorité relative à utiliser lors de la récupération d'un script externe.
    Valeurs autorisées&nbsp;:
    - `high`
      - : Récupère le script externe avec une priorité élevée par rapport aux autres scripts externes.
    - `low`
      - : Récupère le script externe avec une priorité faible par rapport aux autres scripts externes.
    - `auto`
      - : Ne pas définir de préférence pour la priorité de récupération.
        Il s'agit de la valeur par défaut.
        Elle est utilisée si aucune valeur n'est définie ou si la valeur définie est incorrecte.

    Voir {{DOMxRef("HTMLScriptElement.fetchPriority")}} pour plus d'informations.

- `integrity`
  - : Cet attribut contient des métadonnées que l'agent utilisateur peut vérifier afin de contrôler qu'une ressource téléchargée n'a pas été modifiée de façon frauduleuse. Pour plus d'informations, consulter [la page relative à l'intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity).
- `nomodule`
  - : Cet attribut booléen indique que le script ne doit pas être exécuté dans les navigateurs qui prennent en charge les [modules EcmaScript](/fr/docs/Web/JavaScript/Guide/Modules). Il permet ainsi de fournir un script de repli aux anciens navigateurs qui ne gèrent pas le code JavaScript modulaire.
- `nonce`
  - : Un _nonce_ (pour <i lang="en">number used once</i> en anglais) cryptographique utilisé pour inscrire les scripts en ligne sur une liste blanche pour [la règle `script-src` Content-Security-Policy](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src). Le serveur doit générer un nonce unique chaque fois qu'il transmet une règle de sécurité. Ce nonce ne doit pas pouvoir être deviné car sinon, il devient trivial d'outrepasser la règle de sécurité.
- `referrerpolicy`
  - : Une chaîne de caractères qui indique le [référent (<i lang="en">referrer</i> en anglais)](/fr/docs/Web/API/Document/referrer) à utiliser lors de la récupération du script&nbsp;:
    - `no-referrer`&nbsp;: signifie que l'en-tête {{HTTPHeader("Referer")}} ne sera pas envoyé.
    - `no-referrer-when-downgrade`&nbsp;: signifie qu'aucune en-tête {{HTTPHeader("Referer")}} ne sera envoyé lorsqu'on navigue vers une {{Glossary("origin", "origine")}} qui n'utilise pas {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`&nbsp;: le référent envoyé sera limité à l'origine de la page référente&nbsp;: son [schéma](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, et {{Glossary("port")}}.
    - `origin-when-cross-origin`&nbsp;: signifie que les navigations vers d'autres origines seront limitées aux schémas, hôtes et ports. Les navigations sur la même origine inclueront le chemin explicite du référent.
    - `same-origin`&nbsp;: un référent sera envoyé pour {{Glossary("Same-origin policy", "les origines du même site")}} mais les requêtes multi-origines ne contiendront pas d'informations de référent.
    - `strict-origin`&nbsp;: seule l'origine du document est envoyée comme référent lorsque le protocole de sécurité est le même (HTTPS→HTTPS). L'origine n'est pas envoyée lorsque la destination est moins sécurisée (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (par défaut)&nbsp;: l'URL complète est envoyée pour les requêtes de même origine, seule l'origine est envoyée lorsque le protocole de sécurité est le même (HTTPS→HTTPS) et aucun en-tête n'est envoyé pour une destination moins sécurisée (HTTPS→HTTP).
    - `unsafe-url`&nbsp;: signifie que le référent incluera l'origine et le chemin (mais pas le [fragment](/fr/docs/Web/API/HTMLAnchorElement/hash), le [mot de passe](/fr/docs/Web/API/HTMLAnchorElement/password) ou le [nom utilisateur·ice](/fr/docs/Web/API/HTMLAnchorElement/username)). **Cette valeur n'est pas sûre** car elle peut entraîner des fuites d'origine ou de chemin provenant de ressources sécurisées avec TLS vers des origines insécures.

    > [!NOTE]
    > Utiliser une chaîne vide (`""`) correspond à la valeur par défaut et à la valeur utilisée si `referrerpolicy` n'est pas pris en charge. Si cet attribut n'est pas explicitement défini sur l'élément `<script>`, ce dernier respectera la politique défine à un niveau supérieur (sur le document ou sur le domaine). Si une telle politique n'est pas disponible, la chaîne vide sera considérée comme équivalente à `strict-origin-when-cross-origin`.

- `src`
  - : Cet attribut définit l'URI d'un script externe. Cela peut être utilisé pour insérer des scripts autrement qu'en les insérant à même le document.
- `type`
  - : Cet attribut indique le type de script représenté.
    La valeur de cet attribut sera l'une des suivantes&nbsp;:
    - **Attribut non défini (valeur par défaut), chaîne de caractères vide ou type MIME JavaScript**
      - : Indique que le script est un «&nbsp;script classique&nbsp;» contenant du code JavaScript.
        Il est recommandé d'omettre l'attribut si le script fait référence à du code JavaScript plutôt que de définir un type MIME.
        Les types MIME JavaScript sont [énumérés dans la spécification IANA des types de média](/fr/docs/Web/HTTP/Guides/MIME_types#textjavascript).
    - [`importmap`](/fr/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : Cette valeur indique que le contenu de l'élément contient une carte d'import.
        La carte d'import est un objet JSON que les développeur·euse·s peuvent utiliser pour contrôler la résolution des spécificateurs de module lors de l'importation de [modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules#importer_des_modules_avec_des_cartes_dimport).
    - `module`
      - : Cette valeur fait traiter le code comme un module JavaScript.
        Le traitement du contenu du script est différé.
        Les attributs `charset` et `defer` n'ont aucun effet.
        Pour plus d'informations sur l'utilisation de `module`, voir le guide sur [les modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules).
        Contrairement aux scripts classiques, les scripts modules nécessitent l'utilisation du protocole CORS pour les récupérations inter-origines.
    - [`speculationrules`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{Experimental_Inline}}
      - : Cette valeur indique que le contenu de l'élément contient des règles de spéculation.
        Les règles de spéculation prennent la forme d'un objet JSON qui détermine quelles ressources doivent être préchargées ou pré-rendues par le navigateur.
        Cela fait partie de la {{DOMxRef("Speculation Rules API", "", "", "nocode")}}.
    - **Toute autre valeur**
      - : Le contenu embarqué est traité comme un bloc de données et ne sera pas traité par le navigateur.
        Les développeur·euse·s doivent utiliser un type MIME valide qui n'est pas un type MIME JavaScript pour indiquer des blocs de données.
        Tous les autres attributs seront ignorés, y compris l'attribut `src`.

### Attributs dépréciés

- `charset` {{Deprecated_Inline}}
  - : Si présent, sa valeur doit correspondre (sans tenir compte de la casse) à `utf-8` selon {{Glossary("ASCII")}}. Il est inutile de définir l'attribut `charset`, car les documents doivent utiliser UTF-8 et l'élément `script` hérite de l'encodage du document.
- `language` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Comme l'attribut `type`, cet attribut spécifie le langage de script utilisé. Cependant, contrairement à l'attribut `type` les valeurs possibles de cet attribut n'ont jamais été normalisées. Il est recommandé d'utiliser l'attribut `type` plutôt que celui-là.

## Notes

Les scripts sans les attributs [`async`](#async), [`defer`](#defer) ou `type="module"`, ainsi que les scripts en ligne sans l'attribut `type="module"`, sont récupérés et exécutés immédiatement avant que le navigateur ne poursuive l'analyse de la page.

Le script doit être servi avec le type MIME `text/javascript`, mais les navigateurs sont tolérants et ne les bloquent que si le script est servi avec un type image (`image/*`), vidéo (`video/*`), audio (`audio/*`) ou `text/csv`.
Si le script est bloqué, un évènement {{DOMxRef("HTMLElement/error_event", "error")}} est envoyé à l'élément&nbsp;; sinon, un évènement {{DOMxRef("HTMLElement/load_event", "load")}} est envoyé.

## Exemples

### Exemple simple

Cet exemple montre comment importer un script (externe) à l'aide de l'élément `<script>`&nbsp;:

```html
<script src="javascript.js"></script>
```

L'exemple suivant montre comment placer un script (en ligne) à l'intérieur de l'élément `<script>`&nbsp;:

```html
<script>
  alert("Hello World!");
</script>
```

### `async` et `defer`

Les scripts chargés avec l'attribut `async` téléchargent le script sans bloquer la page pendant la récupération du script.
Cependant, une fois le téléchargement terminé, le script s'exécute, ce qui bloque l'affichage de la page. Cela signifie que le reste du contenu de la page web ne peut pas être traité ni affiché à l'utilisateur·ice tant que le script n'a pas fini de s'exécuter.
Il n'y a aucune garantie sur l'ordre d'exécution des scripts.
Il est préférable d'utiliser `async` lorsque les scripts de la page fonctionnent indépendamment les uns des autres et ne dépendent d'aucun autre script de la page.

Les scripts chargés avec l'attribut `defer` seront chargés dans l'ordre où ils apparaissent dans la page.
Ils ne s'exécutent qu'une fois que tout le contenu de la page a été chargé, ce qui est utile si vos scripts dépendent de la présence du DOM (par exemple, s'ils modifient un ou plusieurs éléments de la page).

Voici une représentation visuelle des différentes méthodes de chargement des scripts et ce que cela implique pour votre page&nbsp;:

![Comment fonctionnent les trois méthodes de chargement de script : par défaut, l'analyse est bloquée pendant que JavaScript est récupéré et exécuté. Avec async, l'analyse ne s'arrête que pour l'exécution. Avec defer, l'analyse n'est pas interrompue, mais l'exécution a lieu après que tout le reste a été analysé.](async-defer.jpg)

_Cette image provient de la [spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/images/asyncdefer.svg), copiée et recadrée dans une version réduite, sous licence [CC BY 4.0 <sup>(angl.)</sup>](https://creativecommons.org/licenses/by/4.0/)._

Par exemple, si vous avez les éléments de script suivants&nbsp;:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

Vous ne pouvez pas compter sur l'ordre dans lequel les scripts seront chargés.
`jquery.js` peut être chargé avant ou après `script2.js` et `script3.js` et, dans ce cas, toute fonction de ces scripts dépendant de `jquery` produira une erreur car `jquery` ne sera pas défini au moment de l'exécution du script.

`async` doit être utilisé lorsque vous avez plusieurs scripts d'arrière-plan à charger et que vous souhaitez simplement les mettre en place dès que possible.
Par exemple, vous pouvez avoir des fichiers de données de jeu à charger, qui seront nécessaires lorsque le jeu commencera réellement, mais pour l'instant vous souhaitez simplement afficher l'introduction, les titres et le hall du jeu, sans que le chargement des scripts ne bloque l'affichage.

Les scripts chargés avec l'attribut `defer` (voir ci-dessous) s'exécutent dans l'ordre où ils apparaissent dans la page et sont exécutés dès que le script et le contenu sont téléchargés&nbsp;:

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

Dans le second exemple, on peut être certain que `jquery.js` sera chargé avant `script2.js` et `script3.js` et que `script2.js` sera chargé avant `script3.js`.
Ils ne s'exécutent qu'une fois que tout le contenu de la page a été chargé, ce qui est utile si vos scripts dépendent de la présence du DOM (par exemple, s'ils modifient un ou plusieurs éléments de la page).

Pour résumer&nbsp;:

- `async` et `defer` demandent tous deux au navigateur de télécharger le ou les scripts dans un fil séparé, pendant que le reste de la page (le DOM, etc.) est téléchargé, de sorte que le chargement de la page n'est pas bloqué pendant la récupération.
- Les scripts avec un attribut `async` s'exécutent dès que le téléchargement est terminé.
  Cela bloque la page et ne garantit aucun ordre d'exécution spécifique.
- Les scripts avec un attribut `defer` sont chargés dans l'ordre et ne s'exécutent qu'une fois que tout a fini de se charger.
- Si vos scripts doivent être exécutés immédiatement et qu'ils n'ont aucune dépendance, utilisez `async`.
- Si vos scripts doivent attendre l'analyse et dépendent d'autres scripts et/ou de la présence du DOM, chargez-les avec `defer` et placez leurs éléments `<script>` dans l'ordre dans lequel vous souhaitez qu'ils soient exécutés par le navigateur.

### Repli pour les modules

Les navigateurs qui prennent en charge la valeur `module` pour l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/script/type) ignorent tout script avec un attribut `nomodule`. Cela permet d'utiliser des scripts modules tout en fournissant des scripts de repli marqués `nomodule` pour les navigateurs qui ne les prennent pas en charge.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Importation de modules avec importmap

Lors de l'importation de modules dans des scripts, si vous n'utilisez pas la fonctionnalité [`type=importmap`](/fr/docs/Web/HTML/Reference/Elements/script/type/importmap), chaque module doit être importé à l'aide d'un spécificateur de module qui est soit une URL absolue, soit une URL relative.
Dans l'exemple ci-dessous, le premier spécificateur de module est une URL absolue, tandis que le second (`"./shapes/square.js"`) est résolu par rapport à l'URL de base du document.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

Une carte d'importation (<i lang="en">import map</i>) permet de fournir une correspondance qui, si elle est trouvée, peut remplacer le texte dans le spécificateur de module.
La carte d'importation ci-dessous définit les clés `circle` et `square` qui peuvent être utilisées comme alias pour les spécificateurs de module ci-dessus.

```html
<script type="importmap">
  {
    "imports": {
      "circle": "https://example.com/shapes/circle.js",
      "square": "./shapes/square.js"
    }
  }
</script>
```

Cela permet d'importer des modules en utilisant des noms dans le spécificateur de module (plutôt que des URL absolues ou relatives).

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

Pour plus d'exemples sur ce que vous pouvez faire avec les import maps, voir la section [Importer des modules à l'aide des import maps](/fr/docs/Web/JavaScript/Guide/Modules#importer_des_modules_avec_des_cartes_dimport) du guide sur les modules JavaScript.

### Intégrer des données dans du HTML

Vous pouvez également utiliser l'élément `<script>` pour intégrer des données dans du HTML avec un rendu côté serveur en spécifiant un type MIME valide autre que JavaScript dans l'attribut `type`.

```html
<!-- Généré par le serveur -->
<script id="data" type="application/json">
  {
    "userId": 1234,
    "userName": "Maria Cruz",
    "memberSince": "2000-01-01T00:00:00.000Z"
  }
</script>

<!-- Statique -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("Informations utilisateur·ice : %o", userInfo);
</script>
```

### Bloquer le rendu jusqu'à ce qu'un script soit récupéré et exécuté

Vous pouvez inclure le jeton `render` dans un attribut `blocking`&nbsp;;
le rendu de la page sera bloqué jusqu'à ce que le script soit récupéré et exécuté. Dans l'exemple ci-dessous, on bloque le rendu sur un script asynchrone,
de sorte que le script ne bloque pas l'analyse mais soit garanti d'être évalué avant le début du rendu.

```html
<script blocking="render" async src="async-script.js"></script>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données"
          >Contenu de méta-données</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Script dynamique tel que <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données"
          >contenu de méta-données</a
        >
        ou tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Aucun rôle correspondant <sup>(angl.)</sup></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLScriptElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété JavaScript {{DOMxRef("document.currentScript")}}
- [Un article de Flavio Copes sur le chargement de ressources JavaScript et les différences entre `async` et `defer` <sup>(angl.)</sup>](https://flaviocopes.com/javascript-async-defer/)
- [Guide sur les modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules)
