---
title: "Window : propriété navigator"
short-title: navigator
slug: Web/API/Window/navigator
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef}}

La propriété en lecture seule **`navigator`** de l'interface {{DOMxRef("Window")}} retourne une référence à l'objet {{DOMxRef("Navigator")}}, qui possède des méthodes et des propriétés concernant l'application exécutant le script.

## Valeur

L'objet {{DOMxRef("navigator")}}.

## Exemples

### Détecter le navigateur et retourner la chaîne de caractères correspondante

```js
function obtenirNomNavigateur(agentUtilisateur) {
  // L'ordre est important ici, et cela peut donner des faux positifs pour les navigateurs non listés.

  if (agentUtilisateur.includes("Firefox")) {
    // "Mozilla/5.0 (X11; Linux i686; rv:104.0) Gecko/20100101 Firefox/104.0"
    return "Mozilla Firefox";
  } else if (agentUtilisateur.includes("SamsungBrowser")) {
    // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36"
    return "Samsung Internet";
  } else if (
    agentUtilisateur.includes("Opera") ||
    agentUtilisateur.includes("OPR")
  ) {
    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 OPR/90.0.4480.54"
    return "Opera";
  } else if (agentUtilisateur.includes("Edge")) {
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    return "Microsoft Edge (Legacy)";
  } else if (agentUtilisateur.includes("Edg")) {
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 Edg/104.0.1293.70"
    return "Microsoft Edge (Chromium)";
  } else if (agentUtilisateur.includes("Chrome")) {
    // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
    return "Google Chrome or Chromium";
  } else if (agentUtilisateur.includes("Safari")) {
    // "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
    return "Apple Safari";
  }
  return "unknown";
}

const nomNavigateur = obtenirNomNavigateur(navigator.agentUtilisateur);
console.log(`Vous utilisez : ${nomNavigateur}`);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
