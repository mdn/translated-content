---
title: "Document : méthode statique parseHTML()"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("DOM")}}{{SeeCompatTable}}

La méthode statique **`parseHTML()`** de l'interface {{DOMxRef("Document")}} fournit une méthode sécurisée contre les XSS pour analyser et assainir une chaîne de caractères HTML afin de créer une nouvelle instance de {{DOMxRef("Document")}}.

## Syntaxe

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### Paramètres

- `input`
  - : Une chaîne de caractères définissant le HTML à analyser et à injecter dans la racine d'ombre.
- `options` {{Optional_Inline}}
  - : Un objet d'options avec les paramètres optionnels suivants&nbsp;:
    - `sanitizer`
      - : Un objet {{DOMxRef("Sanitizer")}} ou {{DOMxRef("SanitizerConfig")}} qui définit quels éléments de l'entrée seront autorisés ou supprimés, ou la chaîne de caractères `"default"` pour la configuration par défaut du nettoyeur.
        Notez que de manière générale, un `Sanitizer` est censé être plus efficace qu'un `SanitizerConfig` si la configuration doit être réutilisée.
        Si rien n'est défini, la configuration par défaut d'assainissement XSS est utilisée.

### Valeur de retour

Un objet {{DOMxRef("Document")}}.

### Exceptions

- `TypeError`
  - : Est levée si `options.sanitizer` reçoit&nbsp;:
    - {{DOMxRef("SanitizerConfig")}} qui n'est pas [valide](/fr/docs/Web/API/SanitizerConfig#configuration_valide).
      Par exemple, une configuration qui inclut à la fois les paramètres `"allowed"` et `"removed"`.
    - une chaîne de caractères qui n'a pas la valeur `"default"`.
    - une valeur qui n'est pas un {{DOMxRef("Sanitizer")}}, {{DOMxRef("SanitizerConfig")}}, ou une chaîne de caractères.

## Description

La méthode **`parseHTML()`** analyse et assainit une chaîne de caractères HTML afin de créer une nouvelle instance de {{DOMxRef("Document")}} sécurisée contre les XSS.
Le `Document` résultant aura un [type de contenu](/fr/docs/Web/API/Document/contentType) de `"text/html"`, un [encodage de caractères](/fr/docs/Web/API/Document/characterSet) UTF-8 et une URL «&nbsp;about:blank&nbsp;».

Si aucune configuration du nettoyeur n'est précisée dans le paramètre `options.sanitizer`, `parseHTML()` utilise la configuration par défaut de {{DOMxRef("Sanitizer")}}.
Cette configuration autorise tous les éléments et attributs considérés comme sûrs vis‑à‑vis des XSS, et refuse donc les entités considérées comme dangereuses.
Un assainisseur personnalisé ou une configuration d'assainissement peut être défini pour choisir quels éléments, attributs et commentaires sont autorisés ou supprimés.
Notez que même si des options non sécurisées sont autorisées par la configuration d'assainissement, elles seront néanmoins supprimées lors de l'utilisation de cette méthode (qui appelle implicitement {{DOMxRef('Sanitizer.removeUnsafe()')}}).

Le HTML d'entrée peut inclure des [racines d'ombre déclaratives](/fr/docs/Web/HTML/Reference/Elements/template#dom_dombre_déclaratif).
Si la chaîne HTML définit plus d'une [racine d'ombre déclarative](/fr/docs/Web/HTML/Reference/Elements/template#dom_dombre_déclaratif) dans un hôte d'ombre donné, seule la première {{DOMxRef("ShadowRoot")}} est créée — les déclarations suivantes sont analysées comme des éléments {{HTMLElement("template")}} à l'intérieur de cette racine d'ombre.

`parseHTML()` doit être utilisé plutôt que {{DOMxRef("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}, sauf s'il existe un besoin spécifique d'autoriser des éléments et attributs non sécurisés.
Si le HTML à analyser n'a pas besoin de contenir des entités HTML non sécurisées, vous devriez utiliser `Document.parseHTML()`.

Notez que, comme cette méthode assainit toujours les chaînes d'entrée contenant des entités non sécurisées au regard des XSS, elle n'est pas sécurisée ni validée à l'aide de [l'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{DOMxRef("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- Les méthodes {{DOMxRef("Element.setHTML()")}} et {{DOMxRef("Element.setHTMLUnsafe()")}}
- Les méthodes {{DOMxRef("ShadowRoot.setHTML()")}} et {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}
- La méthode {{DOMxRef("DOMParser.parseFromString()")}} pour analyser du HTML ou XML en un arbre DOM
- [L'API HTML Sanitizer](/fr/docs/Web/API/HTML_Sanitizer_API)
