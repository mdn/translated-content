---
title: element.getAttribute
slug: Web/API/Element/getAttribute
tags:
  - API
  - DOM
  - Element
  - Method
  - Méthode
  - Reference
translation_of: Web/API/Element/getAttribute
---
{{APIRef("DOM")}}

`getAttribute` renvoie la valeur d'un attribut donné de l'élément spécifié. Si l'attribut n'existe pas, la valeur renvoyée sera soit `null` soit `""` (une chaine vide)&nbsp;; voir la section [Attributs inexistants](#attributs_inexistants) pour plus de détails.

## Syntaxe

    let attribut = element.getAttribute(nom_attribut)

où

- `attribut` est une chaine contenant la valeur de l'attribut `nom_attribut`.
- `nom_attribut` est le nom de l'attribut dont on désire connaitre la valeur.

## Exemple

Soit l'HTML :

    const div1 = document.getElementById("div1");

Exemple de JavaScript :

    const div1 = document.getElementById("div1");
    //=> <div id="div1">Hi Champ!</div>

    const attributID = div1.getAttribute("id");
    //=> "div1"

    const alignement = div1.getAttribute("align");
    //=> null

## Description

### Sensibilité à la casse

Le paramètre `nom_attribut` est généralement sensible à la casse, mais ne l'est pas lorsqu'il est utilisé sur des éléments HTML.

### Attributs inexistants

À peu près tous les navigateurs (Firefox, Internet Explorer, Opera, Safari, Konqueror et iCab, sans que cette liste soit exhaustive) renvoient `null` lorsque l'attribut demandé n'existe pas sur l'élément spécifié. La spécification DOM indique cependant que la valeur de retour correcte dans ce cas est en fait la chaine vide `""`, et certaines implémentation DOM auront ce comportement. Par conséquent, vous devriez utiliser {{domxref("element.hasAttribute()")}} pour vérifier l'existence d'un attribut avant d'appeler `getAttribute()` s'il est possible que l'attribut n'existe pas sur l'élément spécifié.

### Récupération de nonces

Pour des raisons de sécurité, les _nonces_ [CSP](/fr/docs/Web/HTTP/CSP) des sources autres que des scripts, telles que les feuilles de style CSS, et les appels `.getAttribute("nonce")` sont interdits.

```js example-bad
let nonce = script.getAttribute("nonce");
// renvoie une chaine vide
```

Plutôt que de tenter de lire le _nonce_ via l’attribut, utilisez la propriété {{domxref("HTMLOrForeignElement/nonce", "nonce")}} :

```js
let nonce = script.nonce;
```

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <td><strong>Spécification</strong></td>
      <td><strong>État</strong></td>
    </tr>
    <tr>
      <td>
        {{SpecName('DOM WHATWG','#dom-element-getattribute','getAttribute()')}}
      </td>
      <td>{{Spec2('DOM WHATWG')}}</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.Element.getAttribute")}}
