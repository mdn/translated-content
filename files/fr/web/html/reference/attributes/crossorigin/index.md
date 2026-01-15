---
title: "Attribut HTML : crossorigin"
short-title: crossorigin
slug: Web/HTML/Reference/Attributes/crossorigin
original_slug: Web/HTML/Attributes/crossorigin
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`crossorigin`** est valide sur les éléments HTML {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}} et {{HTMLElement("video")}}. Il permet de gérer le [CORS](/fr/docs/Web/HTTP/Guides/CORS), c'est-à-dire la façon dont l'élément traite les requêtes inter-origines, et donc de configurer les requêtes CORS pour les données récupérées par l'élément. Selon l'élément, l'attribut peut être un attribut de configuration CORS.

L'attribut de contenu `crossorigin` sur les éléments média est un attribut de configuration CORS.

Ces attributs sont {{Glossary("Enumerated", "énumérés")}} et acceptent les valeurs suivantes&nbsp;:

- `anonymous`
  - : La requête utilise les en-têtes CORS et le drapeau credentials est positionné à `'same-origin'`. Il n'y a aucun échange de **données d'identification utilisateur** via les cookies, certificats TLS côté client ou authentification HTTP, sauf si la destination est la même origine.
- `use-credentials`
  - : La requête utilise les en-têtes CORS, le drapeau credentials est positionné à `'include'` et les **données d'identification utilisateur** sont toujours incluses.
- `""`
  - : Définir l'attribut sans valeur ou avec une valeur vide, comme `crossorigin` ou `crossorigin=""`, revient à utiliser `anonymous`.

Un mot-clé invalide ou une chaîne vide sera traité comme le mot-clé `anonymous`.

Par défaut (c'est-à-dire si l'attribut n'est pas défini), CORS n'est pas utilisé. L'agent utilisateur ne demandera pas d'accès complet à la ressource et, en cas de requête inter-origine, certaines limitations s'appliqueront selon le type d'élément concerné&nbsp;:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Élément</td>
      <td class="header">Restrictions</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        Si la ressource est placée dans un {{HTMLElement("canvas")}}, l'élément est marqué comme <a href="/fr/docs/Web/HTML/How_to/CORS_enabled_image#canevas_corrompu_et_sécurité"><em>pollué</em></a>.
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        L'accès à la journalisation des erreurs via {{DOMxRef('Window.error_event', 'window.onerror')}} sera limité.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        Une requête sans en-tête <code>crossorigin</code> approprié peut être ignorée.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> L'attribut `crossorigin` n'est pas pris en charge pour [`rel="icon"`](/fr/docs/Web/HTML/Reference/Attributes/rel#icon) dans les navigateurs basés sur Chromium. Voir le [ticket Chromium ouvert <sup>(angl.)</sup>](https://crbug.com/1121645).

## Exemples

### Utiliser `crossorigin` avec l'élément `script`

On peut utiliser l'élément [`<script>`](/fr/docs/Web/HTML/Reference/Elements/script) afin d'indiquer au navigateur d'exécuter un script (ici, `https://exemple.fr/framework-exemple.js`) sans envoyer les informations d'authentification de l'utilisateur.

```html
<script
  src="https://exemple.fr/framework-exemple.js"
  crossorigin="anonymous"></script>
```

### Utiliser des informations d'authentification avec un manifeste

La valeur `use-credentials` doit être utilisée lorsqu'on récupère un [manifeste](/fr/docs/Web/Progressive_web_apps/Manifest) nécessitant des informations d'authentification, y compris lorsque le fichier provient de la même origine :

```html
<link rel="manifest" href="/app.manifest" crossorigin="use-credentials" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- L'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel)
