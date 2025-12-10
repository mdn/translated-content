---
title: "HTMLImageElement : propriété attributionSrc"
short-title: attributionSrc
slug: Web/API/HTMLImageElement/attributionSrc
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

La propriété **`attributionSrc`** de l'interface {{domxref("HTMLImageElement")}} permet d'obtenir et de définir l'attribut [`attributionsrc`](/fr/docs/Web/HTML/Reference/Elements/img#attributionsrc) sur un élément {{htmlelement("img")}} de façon programmatique, en reflétant la valeur de cet attribut. `attributionsrc` indique que vous souhaitez que le navigateur envoie un en-tête {{httpheader("Attribution-Reporting-Eligible")}} avec la requête de l'image.

Du côté serveur, cela sert à déclencher l'envoi d'un en-tête {{httpheader("Attribution-Reporting-Register-Source")}} ou {{httpheader("Attribution-Reporting-Register-Trigger")}} dans la réponse, afin d'enregistrer respectivement une [source d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#sources_dévénements_html) ou un [déclencheur d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers#déclencheurs_dattribution_html) basé·e sur une image. L'en-tête de réponse à envoyer dépend de la valeur de l'en-tête `Attribution-Reporting-Eligible` qui a déclenché l'enregistrement.

La source ou le déclencheur sont enregistrés une fois que le navigateur reçoit la réponse contenant le fichier image.

> [!NOTE]
> Gardez à l'esprit que les utilisateur·ice·s ne perçoivent pas forcément l'image — il peut s'agir d'un pixel de suivi transparent 1x1 utilisé uniquement pour le reporting d'attribution.

Voir l'[API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

## Valeur

Un chaîne de caractères. Il existe deux versions de cette propriété que vous pouvez obtenir et définir&nbsp;:

- Un chaîne de caractères vide, c'est-à-dire `imgElem.attributionSrc=""`. Cela indique que vous souhaitez que l'en-tête {{httpheader("Attribution-Reporting-Eligible")}} soit envoyé au même serveur que celui indiqué par l'attribut `src`. Cela convient lorsque vous gérez l'enregistrement de la source ou du déclencheur d'attribution sur le même serveur. Lors de l'enregistrement d'un déclencheur d'attribution, cette propriété est optionnelle, et une valeur vide sera utilisée si elle est omise.
- Valeur contenant une ou plusieurs URL, par exemple&nbsp;:

  ```js
  imgElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Cela est utile lorsque la ressource demandée n'est pas sur un serveur que vous contrôlez, ou si vous souhaitez gérer l'enregistrement de la source d'attribution sur un autre serveur. Dans ce cas, vous pouvez spécifier une ou plusieurs URL comme valeur de `attributionSrc`. Lors de la requête de la ressource, l'en-tête {{httpheader("Attribution-Reporting-Eligible")}} sera envoyé aux URL spécifiées dans `attributionSrc` en plus de l'origine de la ressource. Ces URL peuvent alors répondre avec un en-tête {{httpheader("Attribution-Reporting-Register-Source")}} ou {{httpheader("Attribution-Reporting-Register-Trigger")}} selon le cas pour compléter l'enregistrement.

  > [!NOTE]
  > Définir plusieurs URL permet d'enregistrer plusieurs sources d'attribution sur la même fonctionnalité. Par exemple, vous pouvez avoir différentes campagnes dont vous souhaitez mesurer le succès, ce qui implique de générer différents rapports sur différentes données.

## Exemples

### Définir un `attributionSrc` vide

```html
<img src="advertising-image.png" />
```

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

### Définir un `attributionSrc` contenant des URL

```html
<img src="advertising-image.png" />
```

```js
// Encoder les URL au cas où elles contiendraient des caractères spéciaux
// comme '=' qui seraient mal interprétés.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const imgElem = document.querySelector("img");
imgElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API).
