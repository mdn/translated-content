---
title: Préchargement
slug: Glossary/Prefetch
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Le préchargement désigne la pratique consistant à récupérer de manière spéculative des documents ou des sous-ressources en arrière-plan pour des pages que l'utilisateur·ice est _susceptible_ de consulter prochainement.
Cela peut réduire considérablement le temps de chargement de la page préchargée si l'utilisateur·ice choisit effectivement d'y accéder.
Le préchargement peut par exemple être utilisé pour récupérer la page liée par un bouton «&nbsp;Suivant&nbsp;» ou ses sous-ressources, ou encore une info-bulle de lien survolée par un·e utilisateur·ice, ou des résultats de recherche.

## Préchargement de ressources

Les ressources doivent être préchargées en fonction de la probabilité qu'elles soient nécessaires lors d'une navigation future. Les navigateurs peuvent en déduire automatiquement certaines, comme l'URL actuelle dans la barre d'adresse.

Cela peut être réalisé à l'aide de [`<link rel="prefetch">`](/fr/docs/Web/HTML/Reference/Attributes/rel/prefetch) (l'[API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API) ne gère que le préchargement de documents pour les navigations)&nbsp;:

```html
<link rel="prefetch" href="next.html" />
```

## Préchargement de documents

Les développeur·euse·s peuvent fournir des indications au navigateur sur les navigations à précharger de plusieurs manières&nbsp;:

[`<link rel="prefetch">`](/fr/docs/Web/HTML/Reference/Attributes/rel/prefetch)&nbsp;:

```html
<link rel="prefetch" href="next.html" />
```

[Préchargement avec l'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API)&nbsp;:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html"]
      }
    ]
  }
</script>
```

L'API Speculation Rules gère le préchargement de documents pour les navigations bien mieux que `<link rel="prefetch">`&nbsp;; la première a été conçue spécifiquement à cet effet tandis que la seconde présente un certain nombre de limitations&nbsp;; voir [`<link rel="prefetch">`](/fr/docs/Web/HTML/Reference/Attributes/rel/prefetch) pour plus de détails.

## Préchargement DNS

Le [préchargement DNS](/fr/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) résout les noms de domaine à l'avance, accélérant ainsi les temps de chargement en réduisant le temps associé à la résolution du domaine lors de la requête.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## Voir aussi

- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Prerender", "Pré-rendu")}}
- [API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API)
