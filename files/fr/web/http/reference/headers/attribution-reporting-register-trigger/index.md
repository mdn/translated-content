---
title: En-tête Attribution-Reporting-Register-Trigger
short-title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{Deprecated_Header}}

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Attribution-Reporting-Register-Trigger`** enregistre une fonctionnalité de page comme [déclencheur d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Cet en-tête est inclus dans la réponse à une requête contenant l'en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}}.

Voir l'[API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

> [!NOTE]
> Si le site appelant n'a pas inclus l'API Attribution Reporting dans un [processus d'inscription Privacy Sandbox](/fr/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) réussi, l'en-tête `Attribution-Reporting-Register-Trigger` est ignoré et les déclencheurs d'attribution ne sont pas enregistrés.

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
Attribution-Reporting-Register-Trigger: <json-string>
```

## Directives

- `<json-string>`
  - : Une chaîne de caractères JSON fournissant les données pouvant être incluses dans les rapports générés, telles que l'identifiant du déclencheur, la priorité et les valeurs de déduplication. Les champs disponibles sont les suivants&nbsp;:
    - `"aggregatable_trigger_data"`
      - : Un tableau d'objets, chacun définissant une clé d'agrégation à appliquer à différentes clés source. Chaque objet contient les propriétés suivantes&nbsp;:
        - `"key_piece"`
          - : Une valeur hexadécimale représentant une clé.
        - `"source_keys"`
          - : Un tableau contenant une ou plusieurs valeurs de clé pour les données.
    - `"aggregatable_values"`
      - : Un objet contenant des propriétés représentant une valeur pour chaque point de données défini dans `"aggregatable_trigger_data"`. Dans chaque cas, le nom de la propriété est égal au nom défini dans `"source_keys"`, et la valeur de la propriété est la valeur arbitraire que vous souhaitez.
    - `"debug_key"` {{Optional_Inline}}
      - : Un nombre représentant une clé de débogage. À définir si vous souhaitez générer un [rapport de débogage](/fr/docs/Web/API/Attribution_Reporting_API/Generating_reports#rapport_de_débogage) en plus du rapport d'attribution associé.
    - `"debug_reporting"` {{Optional_Inline}}
      - : Un booléen. Si une `debug_key` est définie, définissez ceci à `true` pour indiquer que le rapport de débogage généré doit être un rapport de débogage verbeux.
    - `"filters"` {{Optional_Inline}}
      - : Un objet contenant des données personnalisées pouvant être utilisées pour filtrer quels déclencheurs génèrent des rapports. Voir [Filtres](/fr/docs/Web/API/Attribution_Reporting_API/Generating_reports#filtres) pour plus de détails.
    - `"event_trigger_data"`
      - : Un objet représentant les données du déclencheur. Les sous-champs disponibles sont les suivants&nbsp;:
        - `"trigger_data"`
          - : Une chaîne de caractères représentant des données qui décrivent le déclencheur, généralement utilisée pour indiquer des évènements tels que «&nbsp;utilisateur·ice a ajouté un article au panier&nbsp;» ou «&nbsp;utilisateur·ice s'est inscrit·e à la liste de diffusion&nbsp;». Cette valeur sera incluse dans le rapport de niveau évènement généré, le cas échéant, bien qu'elle puisse être modifiée selon le champ [`"trigger_data_matching"`](/fr/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) de la source attribuée.

            > [!NOTE]
            > Les valeurs utilisées pour représenter chaque évènement, et le nombre d'éléments dans le tableau, sont totalement arbitraires et définis par vous en tant que développeur·euse. Le tableau peut contenir des valeurs non utilisées, mais des valeurs doivent être présentes pour être attribuées à la source par le navigateur lorsqu'un déclencheur est enregistré.

        - `"priority"` {{Optional_Inline}}
          - : Une chaîne de caractères représentant une valeur de priorité pour le déclencheur d'attribution. Par défaut, les déclencheurs sont attribués à la source correspondante la plus récente. Pour les rapports de niveau évènement et de synthèse, vous pouvez définir un nombre de priorité plus élevé pour faire correspondre le déclencheur à des sources plus anciennes. Par exemple, une valeur de `2` prend le pas sur la valeur par défaut de `1`. Voir [Priorités et limites des rapports](/fr/docs/Web/API/Attribution_Reporting_API/Generating_reports#propriétés_et_limites_des_rapports) pour plus d'informations.
        - `"deduplication_key"` {{Optional_Inline}}
          - : Une chaîne de caractères représentant une clé unique pouvant être utilisée pour éviter la duplication des attributions — par exemple si un·e utilisateur·ice ajoute plusieurs fois le même article au panier. Voir [Éviter la duplication dans les rapports <sup>(angl.)</sup>](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication) pour plus d'informations.
        - `"filters"` {{Optional_Inline}}
          - : Un objet contenant des filtres permettant d'appliquer un filtrage sélectif pour définir `"trigger_data"`, `"priority"` et `"deduplication_key"` selon le `filter_data` défini dans un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} correspondant. Voir [Filtres](/fr/docs/Web/API/Attribution_Reporting_API/Generating_reports#filtres) pour plus de détails.

## Exemples

### Enregistrer un déclencheur pour un rapport de niveau évènement

Un serveur Node.js peut définir l'en-tête de réponse `Attribution-Reporting-Register-Trigger` comme suit pour enregistrer un déclencheur destiné à correspondre à une source d'attribution de rapport de niveau évènement&nbsp;:

```js
res.set(
  "Attribution-Reporting-Register-Trigger",
  JSON.stringify({
    event_trigger_data: [
      {
        trigger_data: "4",
        priority: "1000000000000",
        deduplication_key: "2345698765",
      },
    ],
    debug_key: "1115698977",
  }),
);
```

### Enregistrer un déclencheur pour un rapport de synthèse

Lors de l'enregistrement d'un déclencheur destiné à correspondre à une source d'attribution de rapport de synthèse, vous devez inclure les champs suivants&nbsp;:

```js
res.set(
  "Attribution-Reporting-Register-Trigger",
  JSON.stringify({
    aggregatable_trigger_data: [
      {
        key_piece: "0x400",
        source_keys: ["campaignCounts"],
      },
      {
        key_piece: "0xA80",
        source_keys: ["geoValue", "nonMatchingKeyIdsAreIgnored"],
      },
    ],
    aggregatable_values: {
      campaignCounts: 32768,
      geoValue: 1664,
    },
    debug_key: "1115698977",
  }),
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'ent-ête HTTP {{HTTPHeader("Attribution-Reporting-Eligible")}}
- L'ent-ête HTTP {{HTTPHeader("Attribution-Reporting-Register-Source")}}
- [L'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API)
