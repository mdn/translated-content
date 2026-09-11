---
title: "NavigateEvent : propriété userInitiated"
short-title: userInitiated
slug: Web/API/NavigateEvent/userInitiated
l10n:
  sourceCommit: 06ab986fc58ffb4e12b9f9962ee3c2783ce1290b
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`userInitiated`** de l'interface {{DOMxRef("NavigateEvent")}} retourne `true` si la navigation a été initiée par l'utilisateur·ice (par exemple, en cliquant sur un lien, en envoyant un formulaire ou en appuyant sur les boutons «&nbsp;Précédent&nbsp;»/«&nbsp;Suivant&nbsp;» du navigateur), ou sinon `false`.

> [!NOTE]
> Le tableau trouvé à [Annexe&nbsp;: types de navigations <sup>(angl.)</sup>](https://github.com/WICG/navigation-api#appendix-types-of-navigations) montre quels types de navigation sont initiés par l'utilisateur·ice.

## Valeur

Une valeur booléenne — `true` si la navigation a été initiée par l'utilisateur·ice, sinon `false`.

## Exemples

### Obtenir `userInitiated` pour un évènement

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.userInitiated);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
