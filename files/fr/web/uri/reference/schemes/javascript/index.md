---
title: URLs JavaScript
short-title: "javascript:"
slug: Web/URI/Reference/Schemes/javascript
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

> [!WARNING]
> L'utilisation d'URLs `javascript:` sur le Web est déconseillée car elle peut entraîner l'exécution de code arbitraire, de façon similaire à l'utilisation de [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval). Cela peut aussi réduire {{Glossary("accessibility", "l'accessibilité")}} car cela s'écarte du comportement normal des liens.

Les **URLs JavaScript**, URLs préfixées par le schéma `javascript:`, sont utilisées comme fausses cibles de navigation qui exécutent du JavaScript lorsque le navigateur tente de naviguer. Si l'URL évalue à une chaîne de caractères, elle est traitée comme du HTML et affichée par le navigateur.

## Syntaxe

```url
javascript:<script>
```

- `javascript:`
  - : Le schéma de l'URL.
- `<script>`
  - : Le code JavaScript à exécuter. Le code sera analysé comme un script.

## Description

Les URLs `javascript:` peuvent être utilisées partout où une URL est une cible de navigation. Cela inclut, sans s'y limiter&nbsp;:

- L'attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href) d'un élément HTML `<a>` ou `<area>`.
- L'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) d'un élément HTML `<form>`.
- L'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/iframe#src) d'un élément HTML `<iframe>`.
- La propriété JavaScript [`window.location`](/fr/docs/Web/API/Window/location).
- La barre d'adresse du navigateur elle-même.

> [!NOTE]
> Certains autres contextes qui utilisent des URLs, comme l'attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/link#href) des éléments `<link>`, n'autorisent pas les URLs `javascript:`, car il s'agit d'emplacements de ressources et non de cibles de navigation. Pour ces cas, si vous souhaitez écrire du JavaScript en ligne, utilisez des URLs [`data:`](/fr/docs/Web/URI/Reference/Schemes/data) avec le type MIME `text/javascript`.

Lorsque le navigateur tente de naviguer vers un tel emplacement, il analyse et exécute le corps du script. Le script peut avoir une _valeur de complétion_ (et non une valeur de retour), qui est la même que si le script était exécuté avec [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval). Si la dernière instruction est une [expression](/fr/docs/Web/JavaScript/Reference/Statements/Expression_statement), la valeur de complétion est la valeur de cette expression. Si cette valeur de complétion est une chaîne de caractères, cette chaîne est traitée comme un document HTML et le navigateur navigue vers un nouveau document avec ce contenu, en utilisant la même URL que la page courante. Aucune entrée d'historique n'est créée. Si la valeur de complétion n'est pas une chaîne, le navigateur exécute simplement le code sans naviguer. Il est donc souvent recommandé, si le script se termine par un appel de fonction comme `javascript:foo()`, de le préfixer par {{JSxRef("Operators/void", "void")}} pour éviter une navigation accidentelle si la fonction retourne une chaîne.

La navigation `javascript:` peut être bloquée par les paramètres de [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP), en particulier {{CSP("script-src")}}.

## Exemples

### Utiliser des URLs `javascript:` comme cibles `href`

Dans cet exemple, l'attribut `href` d'un élément `<a>` est défini sur une URL `javascript:` qui affiche une alerte lors du clic&nbsp;:

```html example-bad
<a href="javascript:alert('Bonjour, le monde !')">Cliquez sur moi</a>
```

Comme {{DOMxRef("Window/alert", "alert()")}} retourne `undefined`, le navigateur ne navigue pas vers une nouvelle page. C'est une mauvaise pratique car le lien n'est en réalité pas un hyperlien. Il vaut mieux en faire un bouton&nbsp;:

```html example-good
<button id="btn">Cliquez sur moi</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Bonjour, le monde !");
  });
</script>
```

Dans cet exemple, l'attribut `href` d'un élément `<a>` est défini sur une URL `javascript:` qui navigue vers une nouvelle page avec le contenu «&nbsp;Bonjour, le monde !&nbsp;»&nbsp;:

```html example-bad
<a href="javascript:pageContent">Cliquez sur moi</a>
<script>
  // Utilisez var pour qu'elle devienne une variable globale et puisse être lue ailleurs
  var pageContent = "Bonjour, le monde !";
</script>
```

Notez que les URLs `javascript:` ne créent pas d'entrée d'historique, il n'est donc pas possible de revenir à la page précédente sans rafraîchir.

### Utiliser des URLs `javascript:` comme actions de formulaire

Dans cet exemple, l'attribut `action` d'un élément `<form>` est défini sur une URL `javascript:` qui affiche une alerte lors de la soumission&nbsp;:

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Envoyer" />
</form>
```

Au lieu de faire cela, il vaut mieux écouter l'évènement `submit` du formulaire et le gérer en JavaScript&nbsp;:

```html example-good
<form id="myForm">
  <input id="myInput" />
  <input type="submit" value="Envoyer" />
</form>
<script>
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert(document.getElementById("myInput").value);
  });
</script>
```

### Utiliser des URLs `javascript:` comme sources d'un `iframe`

Dans cet exemple, l'attribut `src` d'un élément `<iframe>` est défini sur une URL `javascript:` qui navigue vers une nouvelle page avec le contenu «&nbsp;Bonjour, le monde !&nbsp;»&nbsp;:

```html example-bad
<iframe src="javascript:pageContent"></iframe>
<script>
  // Utilisez var pour qu'elle devienne une variable globale et puisse être lue ailleurs
  var pageContent = "Bonjour, le monde !";
</script>
```

Au lieu de faire cela, il vaut mieux utiliser l'attribut `srcdoc`&nbsp;:

```html example-good
<iframe id="myFrame"></iframe>
<script>
  document.getElementById("myFrame").srcdoc = "Bonjour, le monde !";
</script>
```

### Utiliser des URLs `javascript:` avec `window.location`

Dans cet exemple, la propriété `window.location` est définie sur une URL `javascript:` qui navigue vers une nouvelle page avec le contenu «&nbsp;Bonjour, le monde !&nbsp;»&nbsp;:

```js example-bad
window.location = "javascript:'Bonjour, le monde !'";
```

Au lieu de faire cela, il vaut mieux utiliser les [APIs DOM](/fr/docs/Web/API/HTML_DOM_API) pour modifier le contenu de la page. Par exemple&nbsp;:

```js example-good
document.body.textContent = "Bonjour, le monde !";
```

## Spécifications

{{Specifications}}

## Voir aussi

- [URIs](/fr/docs/Web/URI)
- [Content Security Policy (CSP)](/fr/docs/Web/HTTP/Guide/CSP)
- [Liste IANA des schémas URI <sup>(angl.)</sup>](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
