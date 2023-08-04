---
title: PAC
slug: Glossary/PAC
---

Un fichier Proxy Auto-Configuration (PAC) est un fichier qui contient une fonction `FindProxyForURL()` laquelle est utilisée par le navigateur pour déterminer si les requêtes (y compris HTTP, HTTPS et FTP) doivent être envoyées directement à la destination, ou si elles doivent être transmises via un serveur proxy Web.

```js
function FindProxyForURL(url, host) {
  /* ... */
}

ret = FindProxyForURL(url, host);
```

Voir [fichier Proxy Auto-Configuration (PAC)](</fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file>) pour plus de détails sur la façon de les utiliser et d'en créer de nouveaux.

## Voir aussi

### Culture générale

- [PAC](https://fr.wikipedia.org/wiki/Fichier_.PAC) sur Wikipédia

### Référence technique

- [Fichier d'auto-configuration du Proxy](</fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file>) sur MDN
