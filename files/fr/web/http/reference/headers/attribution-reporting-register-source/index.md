---
title: En-tête Attribution-Reporting-Register-Source
short-title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{Deprecated_Header}}

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Attribution-Reporting-Register-Source`** enregistre une fonctionnalité de page comme [source d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources).
Cet en-tête est inclus dans la réponse à une requête contenant l'en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}}. Il fournit les informations que le navigateur doit stocker lorsqu'un·e utilisateur·ice interagit avec la source d'attribution. Les informations que vous incluez dans cet en-tête déterminent également les types de rapports que le navigateur peut générer.

Voir l'[API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

> [!NOTE]
> Si le site appelant n'a pas inclus l'API Attribution Reporting dans un [processus d'inscription Privacy Sandbox](/fr/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) réussi, l'en-tête `Attribution-Reporting-Register-Source` est ignoré et les sources d'attribution ne sont pas enregistrées.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse sûr pour le CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Attribution-Reporting-Register-Source: <json-string>
```

## Directives

- `<json-string>`
  - : Une chaîne de caractères JSON fournissant les informations que le navigateur doit stocker lorsqu'il y a interaction avec la source d'attribution. Les champs disponibles sont les suivants&nbsp;:
    - `"source_event_id"` {{Optional_Inline}}
      - : Une chaîne de caractères représentant un identifiant pour la source d'attribution, qui peut être utilisée pour la relier à d'autres informations lors d'une interaction avec la source, ou agréger des informations au point de terminaison de rapport. La chaîne de caractères doit uniquement contenir un entier non signé de 64 bits au format décimal.
    - `"destination"`
      - : Une chaîne de caractères unique ou un tableau de 1 à 3 chaînes de caractères. Ces chaînes de caractères doivent contenir une URL complète correspondant au site (schéma + [eTLD+1](/fr/docs/Glossary/eTLD)) sur lequel un déclencheur est attendu. Elles servent à faire correspondre le déclencheur d'attribution à la source lors d'une interaction avec un déclencheur.
    - `"aggregation_keys"` {{Optional_Inline}}
      - : Un objet contenant des clés fournies par l'utilisateur·ice représentant différents points de données pour agréger les valeurs de rapport.
    - `"aggregatable_report_window"` {{Optional_Inline}}
      - : Une chaîne de caractères représentant une durée en secondes après laquelle les données de déclencheur ne seront plus incluses dans les rapports agrégés générés (appelée **fenêtre de rapport**). Si ce champ n'est pas défini, la valeur par défaut est celle de `"expiry"`.
    - `"debug_key"` {{Optional_Inline}}
      - : Un entier non signé de 64 bits au format décimal représentant une clé de débogage. À définir si vous souhaitez générer un [rapport de débogage](/fr/docs/Web/API/Attribution_Reporting_API/Generating_reports#rapport_de_débogage) en plus du rapport d'attribution associé.
    - `"debug_reporting"` {{Optional_Inline}}
      - : Un booléen. Si une `debug_key` est définie, définissez ceci à `true` pour indiquer que le rapport de débogage généré doit être un rapport de débogage verbeux.
    - `"event_level_epsilon"` {{Optional_Inline}}
      - : Un nombre supérieur ou égal à `0`, qui contrôle la quantité de [bruit ajouté aux rapports](/fr/docs/Web/API/Attribution_Reporting_API/Generating_reports#bruit_ajouté_aux_rapports). Des valeurs plus faibles d'epsilon entraînent plus de bruit et donc une meilleure protection de la vie privée. Les valeurs maximales et par défaut varient selon les implémentations&nbsp;; Chrome, par exemple, a une valeur maximale et par défaut de `14`.
    - `"event_report_window"` {{Optional_Inline}}
      - : Une chaîne de caractères représentant une durée en secondes, après laquelle les déclencheurs suivants ne seront plus attribués à cette source pour la production de rapports de niveau évènement (appelée **fenêtre de rapport**). Si ce champ n'est pas défini, la fenêtre de rapport évènement revient à la valeur de `"expiry"`.
        > [!NOTE]
        > Si `"event_report_window"` est défini, `"event_report_windows"` ne peut pas l'être, sinon l'enregistrement de la source échouera.
    - `"event_report_windows"` {{Optional_Inline}}
      - : Un objet représentant une série de fenêtres de rapport, commençant à `"start_time"`, avec des rapports pour cette source délivrés après chaque heure de fin spécifiée dans `"end_times"`. Cela permet de varier le moment de la livraison des rapports sur plusieurs rapports. Si ce champ n'est pas défini, la fenêtre de rapport évènement revient à la valeur de `"expiry"`. Les propriétés sont les suivantes&nbsp;:
        - `"start_time"` {{Optional_Inline}}&nbsp;: Un nombre non négatif définissant l'heure de début des fenêtres de rapport. Si ce champ n'est pas défini, la valeur par défaut est `0`.
        - `"end_times"`&nbsp;: Un tableau de nombres positifs définissant les heures de fin des fenêtres de rapport suivantes. Les valeurs doivent être croissantes et supérieures à `"start_time"`.
          > [!NOTE]
          > Si `"event_report_windows"` est défini, `"event_report_window"` ne peut pas l'être, sinon l'enregistrement de la source échouera.
    - `"expiry"` {{Optional_Inline}}
      - : Une chaîne de caractères représentant une durée d'expiration en secondes pour la source d'attribution, après laquelle elle ne sera plus active (c'est-à-dire que les déclencheurs suivants ne seront plus attribués à cette source). La durée maximale autorisée est de 2592000 secondes (30 jours), qui est aussi la valeur par défaut si `"expiry"` n'est pas explicitement définie.
    - `"filter_data"` {{Optional_Inline}}
      - : Un objet définissant des données personnalisées pouvant être utilisées pour filtrer quelles conversions génèrent des rapports. Voir [Filtres](/fr/docs/Web/API/Attribution_Reporting_API/Generating_reports#filtres) pour plus de détails.
    - `"max_event_level_reports"` {{Optional_Inline}}
      - : Un nombre entre `0` et `20` inclus, qui définit le nombre total de rapports de niveau évènement que cette source peut générer. Une fois ce maximum atteint, la source ne peut plus produire de nouvelles données. Si ce champ n'est pas défini, `"max_event_level_reports"` vaut par défaut `3` pour les sources basées sur la navigation et `1` pour les sources basées sur un évènement (image ou script).
    - `"priority"` {{Optional_Inline}}
      - : Une chaîne représentant une valeur de priorité pour la source d'attribution. Par défaut, les conversions sont attribuées à la source correspondante la plus récente. Pour les rapports de niveau évènement et de synthèse, vous pouvez définir un nombre de priorité plus élevé pour prioriser des sources spécifiques. Par exemple, une valeur de `2` prend le pas sur la valeur par défaut de `1`. Voir [Priorités et limites des rapports](/fr/docs/Web/API/Attribution_Reporting_API/Generating_reports#propriétés_et_limites_des_rapports) pour plus d'informations.
    - `"trigger_data"` {{Optional_Inline}}
      - : Un tableau d'entiers non signés 32 bits représentant des données décrivant les différents évènements de déclenchement pouvant correspondre à cette source. Par exemple, «&nbsp;utilisateur·ice a ajouté un article au panier&nbsp;» ou «&nbsp;utilisateur·ice s'est inscrit·e à la liste de diffusion&nbsp;» peuvent être des actions se produisant sur le site déclencheur qui pourraient correspondre à cette source et indiquer une conversion que l'annonceur·euse cherche à mesurer. Ceux-ci doivent correspondre à `"trigger_data"` défini dans les [déclencheurs](/fr/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) pour qu'une attribution de niveau évènement ait lieu. Si omis, `"trigger_data"` vaut par défaut `[0, 1, 2, 3, 4, 5, 6, 7]` pour les sources basées sur la navigation et `[0, 1]` pour les sources basées sur un évènement (image ou script).

        > [!NOTE]
        > Les valeurs utilisées pour représenter chaque évènement, et le nombre d'éléments dans le tableau, sont totalement arbitraires et définis par vous en tant que développeur·euse. Le tableau peut contenir des valeurs non utilisées, mais des valeurs doivent être présentes pour être attribuées à la source par le navigateur lorsqu'un déclencheur est enregistré.

    - `"trigger_data_matching"` {{Optional_Inline}}
      - : Une chaîne de caractères qui définit comment le `"trigger_data"` du déclencheur est comparé à celui de la source. Les valeurs possibles sont&nbsp;:
        - `"exact"`&nbsp;: Le `"trigger_data"` du déclencheur doit correspondre exactement à une valeur contenue dans le `"trigger_data"` de la source&nbsp;; s'il n'y a pas de correspondance, aucune attribution de niveau évènement n'a lieu.
        - `"modulus"`&nbsp;: Dans ce cas, le calcul suivant est effectué — `d % allowedValues.size` — où `d` est le `"trigger_data"` du déclencheur, et `allowedValues` est la séquence de valeurs du tableau `"trigger_data"` de la source. Si le résultat de ce calcul correspond à une valeur du tableau `"trigger_data"` de la source, la correspondance est un succès. Dans ce cas, la valeur correspondra toujours, sauf si `allowedValues` est vide.

        Le mode `"modulus"` existe principalement pour la rétrocompatibilité avec le comportement de l'API avant l'introduction de `"exact"`, et il est donc peu probable que vous l'utilisiez. Il reste utile dans certains cas particuliers nécessitant une compression très spécifique aboutissant à des en-têtes d'enregistrement plus petits. Cela peut être requis lors de l'utilisation d'une logique de filtrage complexe qui doit définir différentes données de déclencheur selon le type de source et le nombre maximal d'éléments `"trigger_data"` de la source.

        > [!NOTE]
        > Si `"modulus"` est utilisé, le `"trigger_data"` de la source doit former une séquence contiguë d'entiers commençant à 0. Si les données de déclencheur ne forment pas une telle séquence, une erreur se produit.

        Si ce champ n'est pas défini, `"trigger_data_matching"` vaut par défaut `"modulus"`. Encore une fois, la raison est la rétrocompatibilité&nbsp;: omettre le champ `"trigger_data_matching"` doit aboutir au même comportement qu'avant l'introduction de ce champ.

## Exemples

### Enregistrer une source pour un rapport de niveau évènement

Un serveur Node.js peut définir l'en-tête de réponse `Attribution-Reporting-Register-Source` comme suit pour demander au navigateur de générer un rapport de niveau évènement lorsqu'un déclencheur correspond à une source&nbsp;:

```js
res.set(
  "Attribution-Reporting-Register-Source",
  JSON.stringify({
    source_event_id: "412444888111012",
    destination: "https://shop.example",
    trigger_data: [0, 1, 2, 3, 4],
    trigger_data_matching: "exact",
    expiry: "604800",
    priority: "100",
    debug_key: "122939999",
    event_report_window: "86400",
  }),
);
```

### Enregistrer une source pour un rapport de synthèse

Pour demander au navigateur de générer un rapport de synthèse lorsqu'un déclencheur correspond à une source, vous devez inclure des champs supplémentaires, _en plus_ de ceux requis pour la génération d'un rapport de niveau évènement.

```js
res.set(
  "Attribution-Reporting-Register-Source",
  JSON.stringify({
    source_event_id: "412444888111012",
    destination: "https://shop.example",
    trigger_data: [0, 1, 2, 3, 4],
    trigger_data_matching: "exact",
    expiry: "604800",
    priority: "100",
    debug_key: "122939999",
    event_report_window: "86400",

    aggregation_keys: {
      campaignCounts: "0x159",
      geoValue: "0x5",
    },
    aggregatable_report_window: "86400",
  }),
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Attribution-Reporting-Eligible")}}
- L'en-tête HTTP {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
- [L'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API)
