---
title: Firefox 157 note de version pour les développeurs
short-title: Firefox 157
slug: Mozilla/Firefox/Releases/157
l10n:
  sourceCommit: bad5b95383526babb0d778fb6b693973d1790cfb
---

Cet article présente les informations concernant les changements de Firefox 157 qui concernent les développeur·euse·s.
Firefox 157 est sorti le [29 septembre 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=157).

## Changements pour les développeur·euse·s web

### CSS

- La fonction [`at-rule()`](/fr/docs/Web/CSS/Reference/At-rules/@supports#at-rule) dans la règle @supports de {{CSSxRef("@supports")}} permet de tester si le navigateur prend en charge une règle CSS donnée, par exemple `@supports at-rule(@scope)`. Elle fonctionne également dans la fonction [`supports()`](/fr/docs/Web/CSS/Reference/At-rules/@import#supports-condition) de la règle CSS {{CSSxRef("@import")}}. ([bogue Firefox 2060755 <sup>(angl.)</sup>](https://bugzil.la/2060755)).
- La propriété raccourcie {{CSSxRef("overscroll-behavior")}} et les propriété longues {{CSSxRef("overscroll-behavior-block")}}, {{CSSxRef("overscroll-behavior-inline")}}, {{CSSxRef("overscroll-behavior-x")}} et {{CSSxRef("overscroll-behavior-y")}} prennent désormais en charge la valeur [`chain`](/fr/docs/Web/CSS/Reference/Properties/overscroll-behavior#chain). La valeur `chain` permet au défilement de passer à une autre zone défilable, mais n'autorise pas le comportement par défaut du navigateur en cas de défilement excessif (tel que le «&nbsp;rebond&nbsp;») lorsque la limite est atteinte. ([bogue Firefox 2036966 <sup>(angl.)</sup>](https://bugzil.la/2036966)).

### APIs

- Le [type d'utilisation de texture](/fr/docs/Web/API/GPUTexture/usage#value) [WebGPU](/fr/docs/Web/API/WebGPU_API) `TRANSIENT_ATTACHMENT` est désormais pris en charge. Cela permet de créer des attachements économes en mémoire qui sont utilisés uniquement dans la passe de rendu actuelle. Les opérations de passe de rendu associées restent dans la mémoire de tuile, ce qui évite le trafic VRAM et peut éviter l'allocation de VRAM pour les textures. ([bogue Firefox 2005061 <sup>(angl.)</sup>](https://bugzil.la/2005061)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Dorénavant, les préférences recommandées sont restaurées à une étape différente afin d'éviter qu'elles ne soient restaurées dans le mauvais profil.
  ([bogue Firefox 2066531 <sup>(angl.)</sup>](https://bugzil.la/2066531)).

#### WebDriver BiDi

- La commande `browser.setDownloadBehavior` est mise à jour pour exiger le paramètre `destinationFolder` lors de l'appel de la commande avec `type="allowed"`, ce qui nous aligne avec la spécification. Afin de restaurer le comportement par défaut sans devoir définir un dossier, les clients doivent appeler `browser.setDownloadBehavior` avec `null` à la place. ([bogue Firefox 2069952 <sup>(angl.)</sup>](https://bugzil.la/2069952)).

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 157 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **`export * from "mod"` inclut l'exportation par défaut**&nbsp;: `javascript.options.experimental.export_star_default`

  La [proposition d'exportation par défaut `*` de TC39 <sup>(angl.)</sup>](https://tc39.es/proposal-export-star-default/) permet à [`export * from "mod"`](/fr/docs/Web/JavaScript/Reference/Statements/export#re-exporting__aggregating) de fournir également l'exportation par défaut du module, qu'elle omet actuellement.
  Notez que cette préférence peut uniquement être définie dans les compilations Nightly. ([bogue Firefox 2065611 <sup>(angl.)</sup>](https://bugzil.la/2065611)).
