---
title: "Attribut HTML : form"
short-title: form
slug: Web/HTML/Reference/Attributes/form
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

L'attribut **`form`** associe un élément lié à un formulaire à un élément HTML {{HTMLElement("form")}} du même document. Cet attribut s'applique aux éléments HTML {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.

## Valeurs

L'`id` de l'élément `<form>` auquel l'élément doit être associé.

## Notes d'utilisation

Par défaut, les contrôles de formulaire sont associés à leur ancêtre {{HTMLElement("form")}} le plus proche, tandis que les contrôles de formulaire qui ne sont pas imbriqués dans un `<form>` ne sont associés à aucun formulaire. L'attribut `form` permet de remplacer ces comportements par défaut.

L'attribut `form` des éléments {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}} permet de spécifier explicitement le propriétaire du formulaire, ce qui permet d'associer des contrôles de formulaire situés n'importe où dans un document à n'importe quel élément `<form>` du même document.

Lorsqu'un formulaire est soumis, les noms et valeurs des contrôles associés à l'élément `<form>` sont envoyés, qu'ils soient ou non physiquement imbriqués dans ce `<form>`, et même s'ils sont imbriqués dans un autre `<form>`.

L'attribut `form` d'un contrôle prend comme valeur l'`id` de l'élément `<form>` avec lequel vous souhaitez associer le contrôle. Toutes les autres valeurs définies pour l'attribut `form` sont ignorées.

Bien qu'il ne soit pas nécessaire de définir la valeur de l'attribut sur l'`id` de l'ancêtre `<form>` le plus proche, définir explicitement l'association entre un contrôle de formulaire et son formulaire ancêtre le plus proche garantit que le contrôle ne sera pas dissocié de son formulaire si des scripts ou un HTML mal formé font que ce `<form>` n'est plus l'ancêtre le plus proche du contrôle.

### Associer à un formulaire non ancêtre

L'attribut `form` peut être utilisé pour associer un contrôle de formulaire imbriqué dans un `<form>` à un autre `<form>`.

Dans cet exemple, le champ `<input>` du nom d'utilisateur est imbriqué dans le `internalForm`, mais l'attribut `form` dissocie ce contrôle de son formulaire ancêtre et l'associe à `externalForm` à la place&nbsp;:

```html
<form id="externalForm"></form>
<form id="internalForm">
  <label for="username">Nom d'utilisateur&nbsp;:</label>
  <input form="externalForm" type="text" name="username" id="username" />
</form>
```

Dans ce cas, le nom d'utilisateur sera envoyé lors de la soumission de `externalForm`, tandis que `internalForm` n'aura aucun contrôle de formulaire associé.

### Non-héritage de l'attribut `form`

L'attribut `form` n'associe que l'élément sur lequel il est défini. Ce comportement n'est pas hérité. Par exemple, lorsque l'attribut `form` est défini sur un élément `<fieldset>`, il n'associe que le `<fieldset>`&nbsp;; il **n'associe pas** automatiquement les contrôles de formulaire imbriqués dans ce `<fieldset>`.

Dans cet exemple, le `<fieldset>` et le champ `<input>` du nom d'utilisateur sont associés à `exampleForm` et inclus dans la {{DOMxRef("HTMLFormControlsCollection")}} de la propriété {{DOMxRef("HTMLFormElement.elements")}}, mais le champ `password` ne l'est pas. Seul le champ `username` sera inclus lors de la soumission de `exampleForm`&nbsp;:

```html
<form id="exampleForm"></form>

<fieldset form="exampleForm">
  <legend>Informations de connexion</legend>
  <label
    >Nom d'utilisateur&nbsp;:
    <input form="exampleForm" type="text" name="username"
  /></label>
  <label>Mot de passe&nbsp;: <input type="password" name="password" /></label>
</fieldset>
```

Chaque élément imbriqué a besoin de son propre attribut `form` ou doit être imbriqué dans le formulaire. Vous pouvez vérifier quels éléments sont associés à un formulaire via JavaScript, en utilisant {{DOMxRef("HTMLFormElement.elements")}}.

### Soumission du formulaire

Inclure l'attribut `form` ne signifie pas que l'élément sera soumis avec le formulaire. Seuls les éléments pouvant être soumis, comme `<button>`, `<input>`, `<select>` et `<textarea>`, voient leur nom et leur valeur envoyés lors de la soumission du `<form>` associé.

Dans ce cas, même si l'élément `<output>` est implicitement puis explicitement associé à `calcForm`, le résultat n'est pas soumis avec `a` et `b` lors de la soumission de `calcForm`. Il fait cependant partie de la `HTMLFormControlsCollection` du formulaire.

```html
<form id="calcForm">
  <label>Premier nombre&nbsp;: <input id="a" value="2" type="number" /></label>
  <label>Deuxième nombre&nbsp;: <input id="b" value="3" type="number" /></label>
  <label
    >Somme&nbsp;:
    <output name="result" for="a b" form="calcForm">5</output></label
  >
</form>
```

## Exemples

### Exemple de base

Cet exemple montre comment des éléments liés à un formulaire peuvent être associés à un élément `<form>` à l'aide de l'attribut `form`, même s'ils ne sont pas explicitement imbriqués à l'intérieur. Tous les éléments liés au formulaire dans cet exemple sont associés à `loginForm` soit implicitement (en étant directement imbriqués dans le formulaire), soit explicitement via l'attribut `form`. Lors de la soumission du formulaire, les noms et valeurs de chaque élément pouvant être soumis seront inclus.

```html
<form id="loginForm">
  <label>Nom d'utilisateur&nbsp;: <input type="text" name="username" /></label>
</form>

<label
  >Mot de passe&nbsp;: <input form="loginForm" type="password" name="password"
/></label>
<label>
  Choisissez une option&nbsp;:
  <select form="loginForm" name="options">
    <option value="A">A</option>
    <option value="B">B</option>
  </select>
</label>
<label
  >Description&nbsp;:
  <textarea form="loginForm" rows="4" name="description">
Bonjour le monde&nbsp;!</textarea
  >
</label>
<button form="loginForm" type="submit" name="submitLogin" value="Login">
  Envoyer
</button>
```

### Élément associé à un autre formulaire

Dans cet exemple, il y a deux éléments `<form>`&nbsp;: `parentForm` et `targetForm`. Le bouton `<button>` à l'intérieur de `parentForm` a son attribut `form` défini sur `targetForm`, ce qui le dissocie de son ancêtre le plus proche `parentForm` et l'associe à `targetForm`. Lorsque le bouton de soumission est activé, il soumet `targetForm` et non son ancêtre `parentForm`.

```html
<form id="targetForm">
  <input type="text" name="targetInput" />
</form>
<form id="parentForm">
  <button form="targetForm" type="submit" name="submitTarget" value="Target">
    Envoyer le formulaire cible
  </button>
</form>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Surcharger les comportements par défaut de formulaire](/fr/docs/Web/HTML/Reference/Elements/input/image#surcharger_le_comportement_par_défaut_du_formulaire)
