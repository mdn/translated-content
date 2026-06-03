---
title: "Content-Security-Policy : directive block-all-mixed-content"
short-title: block-all-mixed-content
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{Deprecated_Header}}

> [!WARNING]
> Cette directive est marquée comme obsolète dans la spécification.
> Cette directive était auparavant utilisée pour empêcher le contenu mixte «&nbsp;optionnellement bloquable&nbsp;» d'être récupéré de manière non sécurisée et affiché.
> Le contenu qui n'est pas bloqué est désormais toujours mis à niveau vers une connexion sécurisée, donc cette directive n'est pas nécessaire.

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** bloque le chargement de ressources via HTTP lorsque la page utilise HTTPS.

Toutes les requêtes vers des [contenus mixtes](/fr/docs/Web/Security/Defenses/Mixed_content) sont alors bloquées, y compris les ressources actives et passives.
Cela s'applique aussi aux documents {{HTMLElement("iframe")}}, assurant que la page est complètement protégée contre les contenus mixtes.

> [!NOTE]
> La directive {{CSP("upgrade-insecure-requests")}} est évaluée avant `block-all-mixed-content`. Si elle est définie, alors `block-all-mixed-content` n'est pas nécessaire, à moins que vous souhaitiez forcer HTTPS sur les anciens navigateurs qui ne le font pas après une redirection vers HTTP.

## Syntaxe

```http
Content-Security-Policy: block-all-mixed-content;
```

## Exemples

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Pour interdire l'usage de HTTP de manière plus fine, vous pouvez aussi configurer individuellement chaque directive sur `https:`.
Par exemple, pour interdire les images HTTP non sécurisées&nbsp;:

```http
Content-Security-Policy: img-src https:
```

## Spécifications

Ne fait partie d'aucune spécification actuelle.
Était défini dans l'ancienne spécification [Mixed Content Level 1 <sup>(angl.)</sup>](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- La directive CSP {{CSP("upgrade-insecure-requests")}}
- [Contenu mixte](/fr/docs/Web/Security/Defenses/Mixed_content)
