---
title: "HTMLAnchorElement : propriété attributionSrc"
short-title: attributionSrc
slug: Web/API/HTMLAnchorElement/attributionSrc
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

La propriété **`attributionSrc`** de l'interface {{domxref("HTMLAnchorElement")}} permet d'obtenir et de définir l'attribut [`attributionsrc`](/fr/docs/Web/HTML/Reference/Elements/a#attributionsrc) sur un élément HTML {{htmlelement("a")}} de façon programmatique, reflétant la valeur de cet attribut. `attributionsrc` indique que vous souhaitez que le navigateur envoie un en-tête {{httpheader("Attribution-Reporting-Eligible")}}. Côté serveur, cela sert à déclencher l'envoi d'un en-tête {{httpheader("Attribution-Reporting-Register-Source")}} dans la réponse, afin d'enregistrer une [source d'attribution basée sur la navigation](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources).

Le navigateur stocke les données de la source associée à la source d'attribution basée sur la navigation (telles que fournies dans l'en-tête de réponse {{httpheader("Attribution-Reporting-Register-Source")}}) lorsqu'il reçoit la réponse de navigation.

Voir l'[API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

> [!NOTE]
> Les éléments `<a>` ne peuvent pas être utilisés comme déclencheurs d'attribution, uniquement comme sources.

## Valeur

Une chaîne de caractères. Il existe deux versions de cette propriété que vous pouvez obtenir et définir&nbsp;:

- Chaîne vide, c'est-à-dire `aElem.attributionSrc=""`. Cela indique que vous souhaitez que l'en-tête {{httpheader("Attribution-Reporting-Eligible")}} soit envoyé au même serveur que celui indiqué par l'attribut `href`. Cela convient lorsque vous gérez l'enregistrement de la source d'attribution sur le même serveur.
- Valeur contenant une ou plusieurs URL, par exemple&nbsp;:

  ```js
  aElem.attributionSrc =
    "https://a.exemple/register-source https://b.exemple/register-source";
  ```

  Ceci est utile dans les cas où la ressource demandée n'est pas sur un serveur que vous contrôlez, ou si vous souhaitez simplement gérer l'enregistrement de la source d'attribution sur un autre serveur. Dans ce cas, vous pouvez définir une ou plusieurs URL comme valeur de `attributionSrc`. Lorsque la requête de ressource a lieu, l'en-tête {{httpheader("Attribution-Reporting-Eligible")}} sera envoyé à l'(aux) URL(s) spécifiée(s) dans `attributionSrc` en plus de l'origine de la ressource. Ces URL peuvent alors répondre avec {{httpheader("Attribution-Reporting-Register-Source")}} pour compléter l'enregistrement.

  > [!NOTE]
  > Définir plusieurs URL signifie que plusieurs sources d'attribution peuvent être enregistrées sur la même fonctionnalité. Par exemple, vous pouvez avoir différentes campagnes dont vous souhaitez mesurer le succès, ce qui implique de générer différents rapports sur différentes données.

## Exemples

### Définir un attribut `attributionSrc` vide

```html
<a href="https://shop.example">Cliquez pour visiter notre boutique</a>
```

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

### Définir un attribut `attributionSrc` contenant des URL

```html
<a href="https://ourshop.example">Cliquez pour visiter notre boutique</a>
```

```js
// encoder les URL au cas où elles contiendraient des caractères spéciaux
// comme '=' qui seraient mal interprétés.
const encodedUrlA = encodeURIComponent("https://a.exemple/register-source");
const encodedUrlB = encodeURIComponent("https://b.exemple/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API).
