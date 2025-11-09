---
title: <script type="speculationrules">
short-title: speculationrules
slug: Web/HTML/Reference/Elements/script/type/speculationrules
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{SeeCompatTable}}

La valeur **`speculationrules`** de l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/script/type) de l'élément {{HTMLElement("script")}} indique que le contenu de l'élément contient des règles de spéculation.

Les règles de spéculation prennent la forme d'une structure JSON qui détermine quelles ressources doivent être préchargées (<i lang="en">prefetch</i>) ou pré-rendues (<i lang="en">prerender</i>) par le navigateur. Cela fait partie de {{DOMxRef("Speculation Rules API", "l'API Speculation Rules", "", "nocode")}}.

> [!NOTE]
> Les règles de spéculation peuvent être définies dans des fichiers texte externes référencés par l'en-tête HTTP {{HTTPHeader("Speculation-Rules")}}, en utilisant la même [représentation JSON décrite ci-dessous](#représentation_json_des_règles_de_spéculation). Définir un en-tête HTTP est utile lorsque les développeur·euse·s ne peuvent pas modifier directement le document.

## Syntaxe

```html
<script type="speculationrules">
  // Objet JSON définissant les règles
</script>
```

> [!NOTE]
> Les attributs `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` et `referrerpolicy` ne doivent pas être définis.

### Exceptions

- `TypeError`
  - : La définition des règles de spéculation n'est pas un objet JSON valide.

## Description

Un élément `<script type="speculationrules">` doit contenir une structure JSON valide qui définit les règles de spéculation. Les exemples suivants montrent des règles séparées pour le préchargement (<i lang="en">prefetch</i>) et le pré-rendu (<i lang="en">prerender</i>)&nbsp;:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "href_matches": "/next" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

### Représentation JSON des règles de spéculation

La structure JSON contient un ou plusieurs champs à la racine, chacun représentant une action pour laquelle définir des règles de spéculation. Actuellement, les actions prises en charge sont&nbsp;:

- `"prefetch"` {{Optional_Inline}} {{Experimental_Inline}}
  - : Règles pour les navigations potentielles futures dont le corps de la réponse du document doit être téléchargé, ce qui améliore significativement les performances lors de la navigation vers ces documents. Aucune sous-ressource référencée par la page n'est téléchargée.
- `"prerender"` {{Optional_Inline}} {{Experimental_Inline}}
  - : Règles pour les navigations potentielles futures dont les documents associés doivent être entièrement téléchargés, rendus et chargés dans un onglet invisible. Cela inclut le chargement de toutes les sous-ressources, l'exécution de tout le JavaScript, et même le chargement des sous-ressources et des requêtes de données lancées par JavaScript. Lorsqu'on navigue vers ces documents, la navigation est instantanée, ce qui améliore fortement les performances.

> [!NOTE]
> Consultez la page principale de la {{DOMxRef("Speculation Rules API", "l'API Speculation Rules", "", "nocode")}} pour tous les détails sur l'utilisation efficace de prefetch et prerender.

Chaque champ d'action contient un tableau, qui contient à son tour un ou plusieurs objets. Chaque objet contient une règle définissant un ensemble d'URL et de paramètres associés.

Chaque objet peut contenir les propriétés suivantes&nbsp;:

- `"source"` {{Experimental_Inline}}
  - : Une chaîne de caractères indiquant la source des URL auxquelles la règle s'applique. Cette propriété est optionnelle car la valeur peut toujours être déduite d'autres propriétés.

    Cela peut être&nbsp;:
    - `"document"`
      - : Indique que les URL seront extraites des liens de navigation du document associé (définis dans les éléments HTML {{HTMLElement("a")}} et {{HTMLElement("area")}}), selon les conditions décrites par la clé `"where"`. La présence d'une clé `"where"` implique `"source": "document"`, donc cette propriété est optionnelle.
    - `"list"`
      - : Indique que les URL proviennent d'une liste, définie dans la clé `"urls"`. La présence d'une clé `"urls"` implique `"source": "list"`, donc cette propriété est optionnelle.

- `"urls"` {{Experimental_Inline}}
  - : Un tableau de chaînes de caractères représentant une liste d'URL auxquelles appliquer la règle. Ces URL peuvent être absolues ou relatives. Les URL relatives sont analysées par rapport à l'URL de base du document (si elles sont en ligne dans un document) ou par rapport à l'URL de la ressource externe (si elles sont récupérées de façon externe). `"urls"` et `"where"` ne peuvent pas être définis ensemble dans la même règle.

- `"where"` {{Experimental_Inline}}
  - : Objet représentant les conditions selon lesquelles la règle s'applique aux URL contenues dans le document associé. Concrètement, l'objet `"where"` représente un test effectué sur chaque lien de la page pour déterminer si la règle de spéculation s'applique. `"where"` et `"urls"` ne peuvent pas être définis ensemble dans la même règle.

    Cet objet peut contenir exactement une des propriétés suivantes&nbsp;:
    - `"href_matches"`
      - : Une chaîne de caractères contenant un motif d'URL, ou un tableau contenant plusieurs motifs d'URL, qui suivent la syntaxe standard de {{DOMxRef("URL_Pattern_API", "l'API URL Pattern", "", "nocode")}}. Les liens du document dont les URL correspondent au(x) motif(s) auront la règle appliquée.
    - `"relative_to"`
      - : Dans le cas d'une condition `"href_matches"`, ça permet de définir où cette condition doit être évaluée relativement. Fonctionne exactement comme la clé `"relative_to"` au niveau de la règle (voir plus bas), sauf qu'elle ne concerne qu'une seule condition `"href_matches"` à l'intérieur d'une clé `"where"`.
    - `"selector_matches"`
      - : Une chaîne de caractères contenant un [sélecteur CSS](/fr/docs/Web/CSS/Guides/Selectors), ou un tableau contenant plusieurs sélecteurs CSS. Les liens du document correspondant à ces sélecteurs auront la règle appliquée.
    - `"and"`
      - : Un tableau contenant un ou plusieurs objets de conditions (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` ou `"or"`), qui doivent tous être vérifiées pour que la règle s'applique.
    - `"not"`
      - : Un objet contenant une condition (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` ou `"or"`) qui, si elle correspond, n'aura _pas_ la règle appliquée. Tous les liens qui _ne_ correspondent _pas_ à la condition auront la règle appliquée.
    - `"or"`
      - : Un tableau contenant un ou plusieurs objets de conditions (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"` ou `"or"`), dont n'importe laquelle peut correspondre pour que la règle s'applique.

    Les conditions `"where"` peuvent être imbriquées sur plusieurs niveaux pour créer des conditions complexes, ou vous pouvez choisir de les séparer en plusieurs règles pour les garder simples. Voir [exemples de syntaxe pour where](#exemples_de_syntaxe_pour_where) pour plus d'explications et d'exemples d'utilisation.

- `"eagerness"` {{Experimental_Inline}}
  - : Une chaîne de caractères fournissant une indication au navigateur sur le degré d'empressement à précharger/prérendre les cibles de liens afin d'équilibrer les gains de performance et la consommation de ressources. Les valeurs possibles sont&nbsp;:
    - `"immediate"`
      - : L'auteur·ice pense que le lien a de fortes chances d'être suivi, et/ou que le document peut être long à récupérer. Le préchargement/prérendu doit commencer dès que possible, sous réserve des préférences utilisateur·ice et des limites de ressources.
    - `"eager"`
      - : L'auteur·ice souhaite précharger/prérendre un grand nombre de navigations, le plus tôt possible. Le préchargement/prérendu doit commencer au moindre signe qu'un lien pourrait être suivi. Par exemple, l'utilisateur·ice peut déplacer le curseur vers le lien, le survoler ou le mettre en sélection un instant, ou arrêter le défilement avec le lien en position visible.
    - `"moderate"`
      - : L'auteur·ice cherche un compromis entre `eager` et `conservative`. Le préchargement/prérendu doit commencer lorsqu'il y a une indication raisonnable que l'utilisateur·ice suivra le lien prochainement. Par exemple, l'utilisateur·ice fait défiler un lien dans la zone visible et le survole ou le met en sélection un instant.
    - `"conservative"`
      - : L'auteur·ice souhaite bénéficier du chargement spéculatif avec un compromis de ressources limité. Le préchargement/prérendu ne doit commencer que lorsque l'utilisateur·ice commence à cliquer sur le lien, par exemple lors de {{DOMxRef("Element.mousedown_event", "mousedown")}} ou {{DOMxRef("Element.pointerdown_event", "pointerdown")}}.

    Si `"eagerness"` n'est pas explicitement défini, les règles de type liste (`"urls"`) utilisent la valeur `immediate` par défaut et les règles de type document (`"where"`) utilisent `conservative` par défaut. Le navigateur prend cette indication en compte avec ses propres heuristiques, il peut donc choisir un lien moins prioritaire si cela est jugé préférable.

- `"expects_no_vary_search"` {{Experimental_Inline}}
  - : Une chaîne de caractères fournissant une indication au navigateur sur la valeur de l'en-tête {{HTTPHeader("No-Vary-Search")}} qui sera définie sur les réponses des documents pour lesquels il reçoit des requêtes de préchargement/prérendu. Le navigateur peut ainsi déterminer à l'avance s'il est plus utile d'attendre la fin d'un préchargement/prérendu existant ou de lancer une nouvelle requête lorsque la règle de spéculation est satisfaite. Voir l'[exemple "expects_no_vary_search"](#exemple_de_expects_no_vary_search) pour plus d'explications.

- `"referrer_policy"` {{Experimental_Inline}}
  - : Une chaîne de caractères représentant une politique de référent spécifique à utiliser lors de la requête des URL définies dans la règle — voir {{HTTPHeader("Referrer-Policy")}} pour les valeurs possibles. Cela permet à la page référente de définir une politique plus stricte spécifiquement pour la requête spéculative que la politique déjà en place (par défaut ou via `Referrer-Policy`).

    > [!NOTE]
    > Un préchargement intersite nécessite une politique de référent au moins aussi stricte que la valeur par défaut `"strict-origin-when-cross-origin"` — donc `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"` ou `"no-referrer"`. Une politique plus laxiste définie dans les règles de spéculation remplacera une politique plus stricte définie sur la page référente tant qu'elle reste suffisamment stricte pour le cas intersite.

    > [!NOTE]
    > Pour les règles de type document, la politique de référent définie sur le lien correspondant (par exemple via l'attribut [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/a#referrerpolicy)) sera utilisée, sauf si la règle en définit une qui la remplace.

- `"relative_to"` {{Experimental_Inline}}
  - : Une chaîne de caractères définissant où les liens doivent être évalués relativement. La valeur peut être&nbsp;:
    - `document`
      - : Les URL doivent être évaluées relativement au document sur lequel les règles de spéculation sont définies.
    - `ruleset`
      - : Les URL doivent être évaluées relativement au fichier dans lequel les règles sont définies. C'est la valeur par défaut.

    Ce paramètre n'est pertinent que pour les règles définies dans un fichier externe (via l'en-tête {{HTTPHeader("Speculation-Rules")}}). Lorsque les règles sont définies dans le même document (dans un élément `<script>` en ligne), cela n'a pas d'impact.

- `"requires"` {{Experimental_Inline}}
  - : Un tableau de chaînes de caractères représentant les capacités du navigateur qui analyse la règle, qui doivent être disponibles pour que la règle s'applique aux URL définies.

    > [!WARNING]
    > Les préchargements échoueront automatiquement dans les navigateurs qui ne peuvent pas satisfaire une exigence définie, même s'ils prennent en charge {{DOMxRef("Speculation Rules API", "l'API Speculation Rules", "", "nocode")}}.

    Valeurs possibles&nbsp;:
    - `"anonymous-client-ip-when-cross-origin"`
      - : (préchargement uniquement) Indique que la règle ne s'applique que si l'agent utilisateur peut empêcher l'adresse IP du client d'être visible par le serveur d'origine lors d'une requête de préchargement intersite. Le fonctionnement exact dépend de l'implémentation du navigateur. Par exemple&nbsp;:
        - L'implémentation de Chrome masque l'adresse IP via un proxy Google, donc cela ne fonctionne par défaut que pour les référents contrôlés par Google (puisque dans ce cas, envoyer les URL de destination à Google n'est pas une fuite de confidentialité supplémentaire). Sur un site non contrôlé par Google, les règles qui incluent cette exigence ne s'appliqueront qu'aux utilisateur·ice·s ayant activé «&nbsp;Préchargement amélioré&nbsp;» dans `chrome://settings/preloading`.
        - Les autres navigateurs basés sur Chromium devront fournir leur propre solution. Il est conseillé de tester soigneusement sur tous les navigateurs cibles.
        - Une future implémentation de Safari pourrait utiliser un mécanisme similaire à [iCloud Private Relay <sup>(angl.)</sup>](https://support.apple.com/fr-fr/102602).
        - Une future implémentation de Firefox pourrait utiliser un mécanisme basé sur le produit [Mozilla VPN](https://www.mozilla.org/fr/products/vpn/).

- `"tag"` {{Experimental_Inline}}
  - : Une chaîne de caractères utilisée pour identifier une règle ou un ensemble de règles. Elle sera incluse dans l'en-tête de requête {{HTTPHeader("Sec-Speculation-Tags")}} pour toute spéculation couverte par cette règle.

- `"target_hint"` {{Experimental_Inline}}
  - : Une chaîne de caractères indiquant où la page attend que le contenu prérendu soit activé.
    Cette directive n'est pas prise en charge pour les spéculations de type prefetch.
    Valeurs autorisées&nbsp;:
    - `"target_hint": "_blank"`
      - : Ouvre le contenu prérendu dans une nouvelle page.
    - `"target_hint": "_self"`
      - : Ouvre le contenu prérendu dans la page courante.
        C'est la valeur par défaut si non définie.

> [!NOTE]
> Comme les règles de spéculation utilisent un élément HTML `<script>`, elles doivent être explicitement autorisées dans la directive {{HTTPHeader("Content-Security-Policy")}} {{HTTPHeader("Content-Security-Policy/script-src", "script-src")}} si le site en inclut une. Cela se fait en ajoutant la valeur `"inline-speculation-rules"` avec une source de hachage ou de nonce.

## Exemples

### Préchargement et pré-rendu dans le même ensemble de règles

Les exemples de base présentés dans la section description incluent des règles de spéculation séparées pour prefetch et prerender. Il est possible de définir les deux dans un même ensemble de règles&nbsp;:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ],
    "prerender": [
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

> [!NOTE]
> Cet extrait de code fournit un exemple de règle de type liste (`"urls"`) et un exemple de règle de type document (`"where"`).

### Plusieurs ensembles de règles

Il est également possible d'inclure plusieurs ensembles de règles dans un même fichier HTML&nbsp;:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

Et plusieurs règles dans un même ensemble de résultats&nbsp;:

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "urls": ["one.html"]
      },
      {
        "urls": ["two.html"]
      }
    ]
  }
</script>
```

### Insertion dynamique de règles

Voici un exemple qui détecte la prise en charge des règles de spéculation et, si elle est disponible, ajoute dynamiquement une règle de pré-rendu via JavaScript&nbsp;:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    prerender: [
      {
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  console.log("règles de spéculation ajoutées à : next.html");
  document.body.append(specScript);
}
```

### Exemples de syntaxe pour `where`

Une règle de type document contient une propriété `"where"`, qui est un objet contenant les critères définissant quels liens du document sont concernés. Concrètement, l'objet `"where"` représente un test effectué sur chaque lien de la page pour déterminer si la règle de spéculation s'applique.

La version la plus simple correspondra à un motif d'URL ou à un sélecteur CSS unique&nbsp;:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` et `"selector_matches"` peuvent aussi être définis comme un tableau de valeurs, afin de faire correspondre plusieurs motifs d'URL ou sélecteurs CSS simultanément&nbsp;:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

Les motifs d'URL et les sélecteurs peuvent aussi contenir le caractère générique (`*`), permettant à une seule valeur de correspondre à plusieurs URL. Par exemple, l'objet ci-dessous pourrait correspondre à `user/`, `user/settings`, `user/stats`, etc.

```json
{ "where": { "href_matches": "/user/*" } }
```

Les [paramètres de recherche (ou chaînes de requête)](/fr/docs/Web/API/URL/search) peuvent aussi être ciblés dans `href_matches`. Par exemple, l'objet ci-dessous pourrait correspondre à toutes les URL de même origine ayant un paramètre de recherche `category` (en premier ou en paramètre suivant)&nbsp;:

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Toute condition peut être niée en la plaçant dans une condition `"not"` — cela signifie que, si elle correspond, un lien _n'aura pas_ la règle de spéculation appliquée, mais si elle _ne_ correspond _pas_, il _aura_ la règle appliquée. L'exemple suivant fera en sorte que tous les liens qui _ne_ correspondent _pas_ au motif d'URL `/logout` aient la règle appliquée, mais pas ceux qui correspondent à `/logout`&nbsp;:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Combiner plusieurs conditions `"where"` avec `"and"` ou `"or"`

Plusieurs conditions peuvent être combinées dans des conditions `"and"` ou `"or"` — celles-ci prennent la valeur de tableaux contenant plusieurs conditions, dont toutes ou n'importe laquelle (respectivement) doivent correspondre pour que les règles de spéculation s'appliquent à un lien. En utilisant `"and"` ou `"or"`, les conditions peuvent être imbriquées sur plusieurs niveaux — il n'y a pas de limite définie au niveau d'imbrication autorisé.

Il est utile de considérer l'objet `"where"` comme équivalent à une instruction `if`. Ainsi

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

est équivalent à

```plain
if (A && B && (C || !D)) {
  appliquer la règle de spéculation
}
```

Dans l'exemple complet de règle de spéculation suivant, toutes les pages de même origine sont marquées pour le préchargement sauf celles connues comme problématiques — la page `/logout` et tous les liens marqués avec la classe `.no-prerender`&nbsp;:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "where": {
          "and": [
            { "href_matches": "/*" },
            { "not": { "href_matches": "/logout" } },
            { "not": { "selector_matches": ".no-prerender" } }
          ]
        }
      }
    ]
  }
</script>
```

> [!NOTE]
> Le motif `where` ci-dessus n'inclut pas les liens intersites, qui sont pris en charge pour le préchargement (à condition que l'utilisateur·ice n'ait pas de cookies définis pour le site de destination, afin de protéger contre le pistage) mais pas pour le pré-rendu.

### Exemple de `"relative_to"`

Pour les ensembles de règles récupérés de façon externe (c'est-à-dire via l'en-tête de réponse {{HTTPHeader("Speculation-Rules")}}), les URL dans les règles de type liste et les motifs d'URL dans les règles de type document sont analysés par défaut relativement à l'URL du fichier texte externe contenant les règles. Pour analyser les URL d'une règle de liste relativement à l'URL de base du document, on utilise `"relative_to"` ainsi&nbsp;:

```json
{
  "urls": ["/accueil", "/a-propos"],
  "relative_to": "document"
}
```

Pour les règles de type document, `"relative_to"` peut être associé directement à `"href_matches"` et l'URL de base du document ne sera utilisée que pour les motifs de cette condition particulière&nbsp;:

```json
{
  "where": {
    "or": [
      { "href_matches": "/accueil", "relative_to": "document" },
      { "href_matches": "/a-propos" }
    ]
  }
}
```

Dans l'exemple ci-dessus, seul le premier `"href_matches"` sera évalué relativement à l'URL de base du document.

`relative_to` est surtout pertinent si le fichier JSON des règles de spéculation est sur une origine différente de celle du document auquel on souhaite les appliquer&nbsp;:

1. Si le document se trouve à `https://exemple.com/un-dossier/sous-page.html` et les règles à `https://exemple.com/resources/rules.json`, alors `/accueil` correspond toujours à `https://exemple.com/accueil` que `relative_to` soit défini à `document` ou `ruleset`.

2. Cependant, si le document se trouve à `https://exemple.com/un-dossier/sous-page.html` et les règles à `https://other.example/resources/rules.json` (par exemple, sur une ressource tierce ou sans cookie), alors&nbsp;:
   - `"relative_to": "document"` fera que `/accueil` correspondra à `https://exemple.com/accueil`.
   - `"relative_to": "ruleset"` fera que `/accueil` correspondra à `https://other.example/accueil`.

   C'est le cas d'utilisation typique de `"relative_to"`.

3. Un autre cas d'utilisation possible (mais plus rare) est lorsque vos URL sont définies sous la forme `accueil` au lieu de `/accueil`. Si le document se trouve à `https://exemple.com/un-dossier/sous-page.html` et les règles à `https://exemple.com/resources/rules.json`, alors&nbsp;:
   - `"relative_to": "document"` ferait que `accueil` correspondrait à `https://exemple.com/un-dossier/accueil`.
   - `"relative_to": "ruleset"` ferait que `accueil` correspondrait à `https://exemple.com/resources/accueil`.

### Exemple de `"expects_no_vary_search"`

Prenons le cas d'une page d'annuaire d'utilisateur·ice·s, `/users`, qui possède un paramètre `id` permettant d'afficher les informations d'un utilisateur·ice spécifique, par exemple `/users?id=345`. Le fait que cette URL doive être considérée comme identique pour la mise en cache dépend du comportement de l'application&nbsp;:

1. Si ce paramètre a pour effet de charger une page complètement nouvelle contenant les informations de l'utilisateur·ice défini, alors l'URL doit être mise en cache séparément.
2. Si ce paramètre a pour effet de mettre en surbrillance l'utilisateur·ice défini sur la même page, et peut-être d'afficher un panneau latéral avec ses données, alors l'URL doit être considérée comme identique pour la mise en cache. Cela peut améliorer les performances de chargement des pages utilisateur·ice et peut être obtenu via un en-tête {{HTTPHeader("No-Vary-Search")}} avec la valeur `params=("id")`.

Comment cela affecte-t-il les règles de spéculation&nbsp;? Considérons le code suivant&nbsp;:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["/users"]
      }
    ]
  }
</script>
<a href="/users?id=345">Utilisateur Bob</a>
```

Que se passe-t-il dans ce cas lorsque l'utilisateur·ice commence une navigation vers `/users?id=345` alors que les en-têtes du préchargement de `/users` n'ont pas encore été reçus&nbsp;? À ce stade, le navigateur ne sait pas encore quelle sera la valeur de `No-Vary-Search`, le cas échéant. S'il n'y avait pas de valeur `No-Vary-Search` définie, et que le comportement de l'application correspondait à l'option 1 ci-dessus, le préchargement serait inutile et le navigateur devrait aller chercher la page `/users?id=345` séparément.

Pour résoudre ce problème, on peut fournir une indication sur la valeur attendue de `No-Vary-Search` par l'auteur·ice de la page. Une règle de spéculation peut avoir un champ `"expects_no_vary_search"`, qui contient une chaîne représentant la valeur d'en-tête attendue&nbsp;:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["/users"],
        "expects_no_vary_search": "params=(\"id\")"
      }
    ]
  }
</script>
<a href="/users?id=345">Utilisateur Bob</a>
```

Cela indique que l'option 2 décrite ci-dessus est celle que le serveur est censé produire. Si une navigation commence alors qu'un préchargement de `/users` est en cours, cela informe le navigateur qu'il est approprié d'attendre le préchargement, au lieu de lancer immédiatement une nouvelle requête pour `/users?id=345`.

Les règles de type document peuvent aussi être utilisées avec `"expects_no_vary_search"`, selon le motif utilisé. Par exemple, dans le cas suivant&nbsp;:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        { "where": { "href_matches": "/users?id=*" } },
        "expects_no_vary_search": "params=(\"id\")"
      }
    ]
  }
</script>
<a href="/users?id=012">Utilisateur Bill</a>
<a href="/users?id=345">Utilisateur Bob</a>
<a href="/users?id=678">Utilisateur Ben</a>
```

Si un lien est survolé, le navigateur commencera à précharger ce lien spécifique.

Si l'utilisateur·ice survole un autre lien avant la fin du préchargement, le motif `expects_no_vary_search` indique au navigateur qu'il n'est pas nécessaire d'annuler le préchargement en cours, car toutes les URL `/users` avec un paramètre d'URL `id` pointent effectivement vers la même page dans ce contexte (et pour la mise en cache).

> [!WARNING]
> Une attention particulière doit être portée lors de l'utilisation de prerender avec `No-Vary-Search` car la page peut initialement être pré-rendue avec différents paramètres d'URL. `No-Vary-Search` est utilisé pour les paramètres d'URL qui livrent la même ressource depuis le serveur, mais sont utilisés côté client pour diverses raisons (rendu côté client, paramètres UTM pour la mesure analytique, etc.). Comme le pré-rendu initial peut concerner différents paramètres d'URL, tout code dépendant de ceux-ci ne doit s'exécuter qu'après l'activation du pré-rendu.

Plusieurs paramètres peuvent être fournis dans un tableau séparé par des espaces&nbsp;:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        { "where": { "href_matches": "/users?id=*" } },
        "expects_no_vary_search": "params=(\"id\" \"order\" \"lang\")"
      }
    ]
  }
</script>
```

> [!NOTE]
> En tant que [champ structuré](https://www.rfc-editor.org/rfc/rfc8941), les paramètres doivent être des chaînes entre guillemets séparées par des espaces — comme ci-dessus — et non séparées par des virgules, ce à quoi les développeur·euse·s sont peut-être plus habitué·e·s.

### Exemple de `eagerness`

L'ensemble de règles de type document suivant montre comment `eagerness` peut être utilisé pour indiquer au navigateur avec quel empressement il doit pré-rendre chaque ensemble de liens correspondant.

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "href_matches": "/*" },
        "eagerness": "conservative"
      },
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

Ici, on indique que&nbsp;:

- Tous les liens de même site contenus dans le document doivent être pré-rendus de façon conservatrice (c'est-à-dire lorsque l'utilisateur·ice commence à les activer).
- Tous les liens produits (dans ce cas, ceux ayant une classe `.product-link`) du document doivent être pré-rendus de façon « eager » (c'est-à-dire si l'utilisateur·ice manifeste une intention de navigation vers eux).

> [!NOTE]
> Les effets des réglages d'empressement sont moins utiles pour les règles de type liste. Par défaut, les URL des règles de liste sont préchargées/pré-rendues immédiatement dès que les règles sont analysées, ce qui est attendu — elles servent à lister explicitement des URL prioritaires à rendre disponibles au plus vite. Pour cette raison, `eager` a le même effet que `immediate` dans les implémentations actuelles. Les réglages d'empressement plus faibles servent au préchargement/pré-rendu lors d'interactions avec les liens, et pour cela on utilisera plutôt des règles de type document pour les trouver sur la page.

### Exemple de `tag`

Un `tag` peut être inclus au niveau supérieur pour identifier l'ensemble de règles&nbsp;:

```html
<script type="speculationrules">
  {
    "tag": "mes-regles",
    "prerender": [
      {
        "where": { "href_matches": "/*" },
        "eagerness": "conservative"
      }
    ]
  }
</script>
```

Ou pour identifier des règles individuelles&nbsp;:

```html
<script type="speculationrules">
  {
    "prefetch": [
      "tag": "ma-regle-prefetch",
      "urls": ["next.html"]
    ],
    "prerender": [
      "tag": "ma-regle-prerender",
      "urls": ["next2.html"]
    ],
  }
</script>
```

Voir {{HTTPHeader("Sec-Speculation-Tags")}} pour plus d'exemples.

### Exemple de `target_hint`

Un `target_hint` peut être inclus pour indiquer la fenêtre cible dans laquelle les spéculations de pré-rendu correspondantes seront ouvertes&nbsp;:

```html
<script type="speculationrules">
  {
    "tag": "mes-règles",
    "prerender": [
      {
        "eagerness": "eager",
        "target_hint": "_blank",
        "urls": ["page2.html"]
      }
    ]
  }
</script>
```

Les règles ci-dessus permettent aux liens suivants d'être pré-rendus correctement dans les cibles appropriées&nbsp;:

```html
<a href="page1.html">Ouvrir le lien dans cette fenêtre</a>
<a target="_blank" href="page2.html"
  >Ouvrir le lien dans une nouvelle fenêtre</a
>
```

`target_hint` n'est nécessaire que pour les règles de type liste, qui utilisent `urls`.
Il n'est pas nécessaire pour les règles de type document (qui utilisent `where`), car dans ce cas la cible peut être connue à partir de l'attribut `target` de l'élément `<a>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prérendre des pages dans Chrome pour des navigations instantanées](https://developer.chrome.com/docs/web-platform/prerender-pages?hl=fr) sur developer.chrome.com
- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading)
- [API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API)
