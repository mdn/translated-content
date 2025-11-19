---
title: "HTMLScriptElement : propriété attributionSrc"
short-title: attributionSrc
slug: Web/API/HTMLScriptElement/attributionSrc
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{APIRef("Attribution Reporting API")}}{{SecureContext_Header}}{{SeeCompatTable}}

La propriété **`attributionSrc`** de l'interface {{DOMxRef("HTMLScriptElement")}} permet d'obtenir et de définir l'attribut [`attributionsrc`](/fr/docs/Web/HTML/Reference/Elements/script#attributionsrc) sur un élément {{HTMLElement("script")}} par le biais du code, reflétant la valeur de cet attribut. `attributionsrc` spécifie que vous souhaitez que le navigateur envoie un en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} lors de la requête de la ressource du script.

Côté serveur, cela permet de déclencher l'envoi d'un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} ou {{HTTPHeader("Attribution-Reporting-Register-Trigger")}} dans la réponse, afin d'enregistrer respectivement une [source d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#sources_dévénements_basées_sur_javascript) ou un [déclencheur d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers#déclencheurs_dattributions_basés_sur_javascript) basé sur JavaScript. L'en-tête de réponse à envoyer dépend de la valeur de l'en-tête `Attribution-Reporting-Eligible` qui a déclenché l'enregistrement.

> [!NOTE]
> Il est également possible d'enregistrer des sources ou déclencheurs d'attribution JavaScript en envoyant une requête {{DOMxRef("Window/fetch", "fetch()")}} contenant l'option `attributionReporting` (soit directement dans l'appel à `fetch()`, soit sur un objet {{DOMxRef("Request")}} passé à `fetch()`), ou en envoyant un {{DOMxRef("XMLHttpRequest")}} avec {{DOMxRef("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} invoqué sur l'objet requête.

Pour plus de détails, consultez la page [Attribution Reporting API](/fr/docs/Web/API/Attribution_Reporting_API).

## Valeur

Une chaîne de caractères. Il existe deux versions de cette propriété que vous pouvez obtenir ou définir&nbsp;:

- Une chaîne de caractères vide, c'est-à-dire `scriptElem.attributionSrc=""`. Cela indique que vous souhaitez que l'en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} soit envoyé au même serveur que celui indiqué par l'attribut `src`. Cela convient lorsque vous gérez l'enregistrement de la source ou du déclencheur d'attribution sur le même serveur. Lors de l'enregistrement d'un déclencheur d'attribution, cette propriété est optionnelle et une valeur vide sera utilisée si elle est omise.
- Valeur contenant une ou plusieurs URL, par exemple&nbsp;:

  ```js
  scriptElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Ceci est utile lorsque la ressource demandée n'est pas sur un serveur que vous contrôlez, ou si vous souhaitez gérer l'enregistrement de la source d'attribution sur un autre serveur. Dans ce cas, vous pouvez spécifier une ou plusieurs URL comme valeur de `attributionSrc`. Lors de la requête de la ressource, l'en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} sera envoyé aux URL spécifiées dans `attributionSrc` en plus de l'origine de la ressource. Ces URL peuvent alors répondre avec un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} ou {{HTTPHeader("Attribution-Reporting-Register-Trigger")}} selon le cas pour compléter l'enregistrement.

  > [!NOTE]
  > Définir plusieurs URL signifie que plusieurs sources d'attribution peuvent être enregistrées sur une même fonctionnalité. Par exemple, vous pouvez avoir différentes campagnes dont vous souhaitez mesurer le succès, ce qui implique de générer différents rapports sur différentes données.

## Exemples

### Définir une valeur `attributionSrc` vide

```html
<script src="advertising-script.js"></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

### Définir une valeur `attributionSrc` contenant des URL

```html
<script src="advertising-script.js"></script>
```

```js
// Encoder les URL au cas où elles contiendraient des caractères spéciaux
// comme '=' qui seraient mal interprétés.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'API [Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API).
