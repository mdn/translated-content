---
title: "Window : propriété crypto"
short-title: crypto
slug: Web/API/Window/crypto
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("Web Crypto API")}}

La propriété en lecture seule **`crypto`** de l'interface {{DOMxRef("Window")}} retourne l'objet {{DOMxRef("Crypto")}} pour la portée de cette fenêtre. Cet objet donne accès à certains services liés à la cryptographie pour les pages web.

Bien que la propriété elle-même soit en lecture seule, toutes ses méthodes (et celles de son objet enfant, {{DOMxRef("SubtleCrypto")}}) ne le sont pas, et sont donc vulnérables à une attaque par {{Glossary("polyfill", "prothèse d'émulation")}}.

Bien que `crypto` soit disponible sur toutes les fenêtres, l'objet `Crypto` retourné ne possède qu'une seule fonctionnalité utilisable dans les contextes non sécurisés&nbsp;: la méthode {{DOMxRef("Crypto.getRandomValues", "getRandomValues()")}}. En général, il faut utiliser cette API uniquement dans des contextes sécurisés.

## Valeur

Une instance de l'interface {{DOMxRef("Crypto")}}, donnant accès à la cryptographie d'usage général et à un générateur de nombres aléatoires robuste.

## Exemples

Cet exemple utilise la propriété `crypto` pour accéder à la méthode {{DOMxRef("Crypto.getRandomValues", "getRandomValues()")}}.

### HTML

```html
<p id="myRandText">Les nombres aléatoires sont&nbsp;:</p>
<button type="button">Générer 10 nombres aléatoires</button>
```

### JavaScript

```js
function genererNombresAleatoires() {
  const tableau = new Uint32Array(10);
  globalThis.crypto.getRandomValues(tableau);

  const texteAleatoire = document.getElementById("myRandText");
  texteAleatoire.textContent = `Les nombres aléatoires sont : ${tableau.join(" ")}`;
}

document
  .querySelector("button")
  .addEventListener("click", genererNombresAleatoires);
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Window")}}
- La propriété {{DOMxRef("WorkerGlobalScope.crypto")}}
