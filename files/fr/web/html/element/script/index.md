---
title: "<script> : l'élément de script"
slug: Web/HTML/Element/script
---

{{HTMLSidebar}}

L'élément HTML **`<script>`** est utilisé pour intégrer ou faire référence à un script exécutable. Cela fait généralement référence à du code JavaScript mais ce peut également être un autre type de script (par exemple [WebGL](/fr/docs/Apprendre/WebGL)).

Les scripts sans attribut `async` ou `defer` sont chargés et exécutés immédiatement avant que le navigateur continue l'analyse de la page.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `async`

  - : Cet attribut booléen indique si le navigateur doit, dans la mesure du possible, exécuter les scripts de manière asynchrone. **_Cet attribut ne doit pas être utilisé si l'attribut `src` est absent (c'est-à-dire pour les scripts « inline » déclarés dans les éléments), dans ce cas il n'aurait aucun effet._**

    Par défaut, les navigateurs prennent l'hypothèse la plus pessimiste et chargent les scripts de façon synchrone (autrement dit, le comportement par défaut est `async="false"`) lors de l'analyse du document HTML.

    Les scripts insérés dynamiquement (via {{domxref("document.createElement()")}}) sont exécutés de façon asynchrone par défaut. Pour activer le mode d'exécution synchrone, il faudra explicitement indiquer `async="false"`.

    Se référer au tableau de compatibilité ci-après pour les informations concernant la prise en charge par les navigateurs. Voir aussi la page sur [les scripts asynchrones avec asm.js](/fr/docs/Games/Techniques/Async_scripts).

- `crossorigin`
  - : Les balises de `script` classiques enverront un minimum d'informations à {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}} pour les scripts qui ne respectent pas les contrôles standard du [CORS](/fr/docs/HTTP/Access_control_CORS). Afin de disposer de plus de renseignements sur les erreurs pour les sites utilisant des domaines séparés pour des documents statiques, on pourra utiliser cet attribut. Voir [la page de réglages des attributs CORS](/fr/docs/Web/HTML/Reglages_des_attributs_CORS) pour plus d'explications quant aux valeurs valides.
- `defer`

  - : Cet attribut booléen permet d'indiquer au navigateur que le script doit être exécuté après l'analyse du document et avant l'évènement [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event). **_Cet attribut ne doit pas être utilisé si l'attribut `src` est absent (c'est-à-dire pour les scripts contenus déclarés dans les éléments), dans ce cas il n'aurait aucun effet._** Pour obtenir un effet similaire avec les scripts insérés de façon dynamique, on utilisera explicitement `async=false`. Les scripts qui possèdent un attribut `defer` seront exécutés dans l'ordre dans lequel ils apparaissent dans le document.

    Les scripts qui utilisent l'attribut `defer` empêche le déclenchement de l'évènement `DOMContentLoaded` tant que le script n'a pas été chargé et que son évaluation n'est pas terminée.

- `integrity`
  - : Cet attribut contient des métadonnées que l'agent utilisateur peut vérifier afin de contrôler qu'une ressource téléchargée n'a pas été modifiée de façon frauduleuse. Pour plus d'informations, consulter [la page relative à l'intégrité des sous-ressources](/fr/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : Cet attribut booléen indique que le script ne doit pas être exécuté dans le navigateur si celui prend en charge [les modules ES6](https://tech.mozfr.org/post/2015/08/21/ES6-en-details-%3A-les-modules). En pratique, de tels scripts seront utilisés pour couvrir les cas où le navigateur ne prend pas en charge les modules JavaScript.
- `nonce`
  - : Un _nonce_ cryptographique utilisé pour inscrire les scripts en ligne sur une liste blanche pour la règle `script-src` de la CSP (_Content Security Policy_). Le serveur doit générer un nonce unique chaque fois qu'il transmet une règle de sécurité. Ce nonce ne doit pas pouvoir être deviné car sinon, il devient trivial d'outrepasser la règle de sécurité.
- `referrerpolicy`

  - : Une chaîne de caractères qui indique le référent (_referrer_) à utiliser lors de la récupération du script :

    - `no-referrer` signifie que l'en-tête {{HTTPHeader("Referer")}} ne sera pas envoyé.
    - `no-referrer-when-downgrade` signifie qu'aucune en-tête `Referrer` ne sera envoyé lorsqu'on navigue vers une origine qui n'utilise pas TLS (HTTPS). C'est le comportement par défaut de l'agent utilisateur.
    - `origin` signifie que le référent sera l'origine de la page (c'est-à-dire son schéma, son hôte et le port utilisé).
    - `origin-when-cross-origin` signifie que les navigations vers d'autres origines seront limitées aux schémas, hôtes et ports. Les navigations sur la même origine inclueront le chemin explicite du référent.
    - `same-origin` un référent sera envoyé pour [les origines du même site](/fr/docs/Web/JavaScript/Same_origin_policy_for_JavaScript) mais les requêtes multi-origines ne contiendront pas d'informations de référent.
    - `strict-origin` seule l'origine du document est envoyée comme référent lorsque le protocole de sécurité est le même (HTTPS→HTTPS). L'origine n'est pas envoyée lorsque la destination est moins sécurisée (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` : l'URL complète est envoyée pour les requêtes de même origine, seule l'origine est envoyée lorsque le protocole de sécurité est le même (HTTPS→HTTPS) et aucun en-tête n'est envoyé pour une destination moins sécurisée (HTTPS→HTTP).
    - `unsafe-url` signifie que le référent incluera l'origine et le chemin (mais pas le fragment, le mot de passe ou le nom utilisateur). Cette valeur n'est pas sûre car elle peut entraîner des fuites d'origine ou de chemin provenant de ressources sécurisées avec TLS vers des origines insécures.

    Utiliser une chaîne vide (`""`) correspond à la valeur par défaut et à la valeur utilisée si `referrerpolicy` n'est pas pris en charge. Si cet attribut n'est pas explicitement défini sur l'élément `<script>`, ce dernier respectera la politique défine à un niveau supérieur (sur le document ou sur le domaine). Si une telle politique n'est pas disponible, la chaîne vide sera considérée comme équivalente à `no-referrer-when-downgrade`.

- `src`
  - : Cet attribut définit l'URI d'un script externe. Cela peut être utilisé pour insérer des scripts autrement qu'en les insérant à même le document. **_Les éléments `script` avec un attribut `src` défini ne doivent pas avoir de script compris dans leurs balises. Cela peut causer un comportement inattendu où le contenu du fichier référencé est chargé mais où le contenu de l'élément est ignoré._**
- `type`

  - : Cet attribut indique le type de script. La valeur de cet attribut peut appartenir à l'une de ces catégories :

    - **Correspondant à un type MIME JavaScript ou absent :** Cela indique que le script est en JavaScript. La spécification HTML5 conseille aux auteurs d'omettre cet attribut plutôt que de fournir un type MIME redondant. Pour les navigateurs plus anciens, cela indiquait le langage de script du code embarqué. Les types MIME correspondant à JavaScript sont [énumérés dans la spécification](/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types).
    - **`module` :** Le code sera traité comme un module JavaScript. Le traitement du script n'est pas affecté par les attributs `charset` et `defer`. Pour plus d'informations sur l'utilisation des modules, voir le guide sur [les modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules).
    - **Toute autre valeur :** Le contenu embarqué est considéré comm un bloc de donnée et ne sera pas traité par le navigateur. Les développeurs doivent utiliser un type MIME valide qui n'est pas un type MIME JavaScript afin d'indiquer de tels blocs de donnée. Dans ce cas, l'attribut `src` sera ignoré.

    > **Note :** Avec Firefox, on pouvait indiquer la version JavaScript d'un élément `<script>` en incluant un paramètre non-standard `version` à l'intérieur de `type` (ex. `type="text/javascript;version=1.8"`). Cette spécificité a été retirée avec Firefox 59 (cf. [bug Firefox 1428745](https://bugzil.la/1428745)).

### Attributs dépréciés

- `charset` {{Deprecated_inline}}
  - : Si cet attribut est présent, sa valeur doit correspondre (quelle que soit la casse) à "`utf-8"`. Cet attribut est superflu car les documents doivent utiliser UTF-8 et car les éléments `script` héritent de l'encodage du document.
- `language` {{Deprecated_inline}}
  - : Comme l'attribut `type`, cet attribut spécifie le langage de script utilisé. Cependant, contrairement à l'attribut `type` les valeurs possibles de cet attribut n'ont jamais été normalisées. Il est recommandé d'utiliser l'attribut `type` plutôt que celui-là.

## Notes

Le script doit être servi avec le type MIME `text/javascript`. Cependant, les navigateurs appliquent cette règle avec une certaine flexibilité et ne bloquent que si le script est servi avec un type image (`image/*`), vidéo (`video/*`) ou audio (`audio/*`) ou CSV (`text/csv`). Si le script est bloqué, un évènement [`error`](/fr/docs/Web/API/Element/error_event) sera déclenché sur l'élément, sinon, l'évènement [`load`](/fr//docs/Web/API/Window/load_event) sera envoyé.

## Exemples

### Exemple simple

```html
<!-- HTML4 et (x)HTML -->
<script type="text/javascript" src="javascript.js"></script>

<!-- HTML5 -->
<script src="javascript.js"></script>
```

### Utilisation des modules et d'une alternative

Les navigateurs qui prennent en charge le type `module` prennent également en charge un attribut `nomodule` qui permet aux navigateurs qui ne gèrent pas les modules d'utiliser un autre script.

```html
<script type="module" src="main.mjs"></script>
<script nomodule src="fallback.js"></script>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_m.C3.A9ta-donn.C3.A9es"
          >contenu de méta-données</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Script dynamique tel que <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_m.C3.A9ta-donn.C3.A9es"
          >contenu de méta-données</a
        >
        ou tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLScriptElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("document.currentScript")}}
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Formats_date_heure_HTML)
- [Guide sur les modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules)
- [Tableau de compatibilité de Ryan Grove pour les évènements liés aux éléments `<script>` et `<link>`](https://pie.gd/test/script-link-events/)
- [Un article de Flavio Copes sur le chargement de ressources JavaScript et les différences entre `async` et `defer` (en anglais)](https://flaviocopes.com/javascript-async-defer/)
