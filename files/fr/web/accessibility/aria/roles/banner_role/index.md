---
title: Utilisation du rôle banner
slug: Web/Accessibility/ARIA/Roles/banner_role
---

{{AccessibilitySidebar}}

### Description

Cette technique présente l'utilisation du rôle [`banner` (en)](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html).

La zone d'entête principale d'un site devrait être structurée avec `<header role="banner">`. Cette zone peut contenir le logo du site, sa description, le moteur de recherche.

Une page web ne doit pas contenir plus d'un rôle `banner`, mais il est tout à fait possible d'utiliser plusieurs éléments `<header>` dans une page.

### Effets possibles sur les agents utilisateurs et les technologies d'assistance

> [!NOTE]
> Il existe plusieurs points de vue sur la façon dont les technologies d'assistance devraient traiter cette technique. L'information fournie ci-dessus est l'une de ces opinions et n'est pas normative.

### Exemples

#### Une zone d'entête typique de site

```html
<header role="banner">
  <p><img src="logo.png" alt="Nom du site" /></p>
  <p>Description du site</p>
  <div role="search">...</div>
</header>
```

## Autres ressources

La [fiche accede-web](http://www.accede-web.com/notices/html-css-javascript/1-structure/1-1-header-role-banner/).
