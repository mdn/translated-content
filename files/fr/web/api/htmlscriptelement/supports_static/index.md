---
title: "HTMLScriptElement : méthode statique supports()"
short-title: supports()
slug: Web/API/HTMLScriptElement/supports_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

La méthode statique **`supports()`** de l'interface {{DOMxRef("HTMLScriptElement")}} fournit un moyen simple et cohérent de détecter les types de scripts pris en charge par l'agent utilisateur.

La méthode doit retourner `true` pour les scripts classiques et les modules, qui sont pris en charge par la plupart des navigateurs modernes.

## Syntaxe

```js-nolint
HTMLScriptElement.supports(type)
```

### Paramètres

- `type`
  - : Une chaîne de caractères littérale qui indique le type de script dont on souhaite vérifier la prise en charge.
    Les valeurs prises en charge sont sensibles à la casse et incluent&nbsp;:
    - `"classic"`
      - : Teste si les _scripts classiques_ sont pris en charge.
        Les «&nbsp;scripts classiques&nbsp;» sont les fichiers JavaScript normaux/traditionnels qui précèdent les modules.
    - `"module"`
      - : Teste si les [modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules) sont pris en charge.
    - `"importmap"`
      - : Teste si les [cartes d'importation](/fr/docs/Web/HTML/Reference/Elements/script/type/importmap) (<i lang="en">import maps</i> en anglais) sont prises en charge.
    - `"speculationrules"`
      - : Teste si les [règles de spéculation](/fr/docs/Web/API/Speculation_Rules_API) sont prises en charge et activées.

    Toute autre valeur fera retourner `false` à la méthode.

### Valeur de retour

Retourne `true` si le type de script indiqué est pris en charge, sinon `false`.

## Exemples

Le code ci-dessous montre comment vérifier si `HTMLScriptElement.supports()` est défini, et le cas échéant, l'utiliser pour tester la prise en charge de différents types de scripts.

```js
const log = document.getElementById("log");

function checkSupport(type) {
  const result = HTMLScriptElement.supports(type) ? "true" : "false";
  log.textContent += `HTMLScriptElement.supports('${type}') est ${result}\n`;
}

if (typeof HTMLScriptElement.supports === "undefined") {
  log.textContent =
    "La méthode HTMLScriptElement.supports() n'est pas prise en charge";
} else {
  // Vérifier la prise en charge de différents types de scripts
  checkSupport("module");
  checkSupport("classic");
  checkSupport("importmap");
  checkSupport("speculationrules");
  // Toute autre valeur retourne false
  checkSupport("anything else");
}
```

```html hidden
<textarea id="log" rows="6" cols="80"></textarea>
```

{{ EmbedLiveSample('Examples') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLScriptElement")}}
- L'élément HTML {{HTMLElement("script")}}
- [Les modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules)
- Le constructeur {{DOMxRef("Worker/Worker","Worker")}}
