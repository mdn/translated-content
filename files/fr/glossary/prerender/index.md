---
title: Pré-rendu
slug: Glossary/Prerender
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le pré-rendu désigne la pratique consistant à {{Glossary("prefetch", "précharger")}} de manière spéculative et à _rendre_ des pages que l'utilisateur·ice est susceptible de consulter prochainement (le navigateur rend la page en arrière-plan dans ce qui est en réalité un onglet séparé et invisible). Le pré-rendu inclut le téléchargement des sous-ressources d'un document et l'exécution du JavaScript associé.

Si l'utilisateur·ice choisit ensuite de naviguer vers la page, l'affichage de son contenu peut être quasi instantané.

Le pré-rendu peut par exemple être utilisé pour récupérer les ressources de la page liée par un bouton «&nbsp;Suivant&nbsp;», une info-bulle de lien survolée par un·e utilisateur·ice, ou la page cible probable de l'URL saisie dans la barre d'adresse. Les [règles de spéculation](/fr/docs/Web/API/Speculation_Rules_API) suivantes peuvent être incluses dans l'en-tête d'un document pour indiquer au navigateur qu'il doit pré-rendre `next.html` et `next2.html`, car l'une ou l'autre pourrait raisonnablement être la cible de la prochaine navigation&nbsp;:

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

Le pré-rendu permet un affichage plus rapide que le préchargement et donc une meilleure expérience utilisateur, au prix d'une consommation de ressources plus importante.

## Voir aussi

- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Prefetch", "Préchargement")}}
- [Pré-rendu de pages dans Chrome pour des navigations instantanées](https://developer.chrome.com/docs/web-platform/prerender-pages?hl=fr#prerendering-from-the-address-bar) sur developer.chrome.com
- L'[API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API)
