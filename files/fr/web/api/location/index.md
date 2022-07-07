---
title: Location
slug: Web/API/Location
translation_of: Web/API/Location
---
{{APIRef("HTML DOM")}}

L'interface **`Location`** représente l'emplacement de l'objet auquel elle est liée. Les changements effectués dessus sont reflétés sur l'objet lié. Les deux interfaces {{domxref("Document")}} et {{domxref("Window")}} sont liées à une `Location`, accessible via {{domxref("Document.location")}} et {{domxref("Window.location")}} respectivement.

## Anatomie d'une Location

### HTML

```html
<span id="href" title="href"><span id="protocol" title="protocol">http:</span>//<span id="host" title="host"><span id="hostname" title="hostname">example.org</span>:<span id="port" title="port">8888</span></span><span id="pathname" title="pathname">/foo/bar</span><span id="search" title="search">?q=baz</span><span id="hash" title="hash">#bang</span></span>
```

### CSS

```css
html, body {height:100%;}
html {display:table; width:100%;}
body {display:table-cell; text-align:center; vertical-align:middle; font-family:georgia; font-size:230%; line-height:1em; white-space:nowrap;}

[title] {position:relative; display:inline-block; box-sizing:border-box; /*border-bottom:.5em solid;*/ line-height:2em; cursor:pointer;}

[title]:before {content:attr(title); font-family:monospace; position:absolute; top:100%; width:100%; left:50%; margin-left:-50%; font-size:40%; line-height:1.5; background:black;}
[title]:hover:before,
:target:before {background:black; color:yellow;}

[title] [title]:before {margin-top:1.5em;}
[title] [title] [title]:before {margin-top:3em;}

[title]:hover,
:target {position:relative; z-index:1; outline:50em solid rgba(255,255,255,.8);}
```

### JavaScript

```js
[].forEach.call(document.querySelectorAll('[title][id]'), function (node) {
  node.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    window.location.hash = '#' + $(this).attr('id');
  });
});
[].forEach.call(document.querySelectorAll('[title]'), function (node) {
  node.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    window.location.hash = '';
  });
});
```

### Result

{{EmbedLiveSample('Anatomie_d\'une_Location')}}

## Propriétés

_L'interface `Location` n'hérite d'aucune propriété, mais implémente celles de {{domxref("URLUtils")}}._

- {{domxref("Location.href")}}
  - : Une {{domxref("DOMString")}} contenant l'URL entière.
- {{domxref("Location.protocol")}}
  - : Une {{domxref("DOMString")}} contenant le schéma de protocole de l'URL, incluant le `':'` final.
- {{domxref("Location.host")}}
  - : Une {{domxref("DOMString")}} contenant l'hôte, c'est-à-dire le _domaine_, un `':'`, et le _numéro de port_ de l'URL.
- {{domxref("Location.hostname")}}
  - : Une {{domxref("DOMString")}} contenant le domaine de l'URL.
- {{domxref("Location.port")}}
  - : Une {{domxref("DOMString")}} contenant le numéro de port de l'URL.
- {{domxref("Location.pathname")}}
  - : Une {{domxref("DOMString")}} contenant un `'/'` initial suivi du chemin de l'URL.
- {{domxref("Location.search")}}
  - : Une {{domxref("DOMString")}} contenant un `'?'` suivi des paramètres de l'URL. Les navigateurs moderne fournissent [URLSearchParams](/en-US/docs/Web/API/URLSearchParams/get#Example) et [URL.searchParams](/en-US/docs/Web/API/URL/searchParams#Example) pour faciliter l'analyse des paramètres de la chaîne de requête (querystring).
- {{domxref("Location.hash")}}
  - : Une {{domxref("DOMString")}} contenant un `'#'` suivi de _l'identifiant de fragment_ de l'URL.
- {{domxref("Location.username")}} {{deprecated_inline}}
  - : Une {{domxref("DOMString")}} contenant le nom d'utilisateur spécifié avant le nom de domaine.
- {{domxref("Location.password")}} {{deprecated_inline}}
  - : Une {{domxref("DOMString")}} contenant le mot de passe spécifié avant le nom de domaine.
- {{domxref("Location.origin")}} {{readOnlyInline}}
  - : Retourne une {{domxref("DOMString")}} contenant la forme canonique de l'origine de la location.

## Méthodes

_L'interface `Location` n'hérite d'aucune méthode, mais implémente celles de {{domxref("URLUtils")}}._

- {{domxref("Location.assign()")}}
  - : Charge la ressource située à l'URL passée en paramètre.
- {{domxref("Location.reload()")}}
  - : Recharge la ressource depuis l'URL actuelle. Son unique paramètre facultatif est un [Boolean](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean), qui, s'il est `true`, implique que la page est toujours rechargée depuis le serveur. Si ce paramètre est `false` ou non spécifié, le navigateur peut éventuellement recharger la page depuis son cache.
- {{domxref("Location.replace()")}}
  - : Remplace la ressource actuelle par celle à l'URL passée en paramètre. la différence avec la méthode `assign()` est que, après avoir utilisé `replace()`, la page actuelle ne sera pas enregistrée dans l'historique de session {{domxref("History")}}, ce qui signifie que l'utilisateur ne pourra pas utiliser le bouton _précédent_ pour y revenir.
- {{domxref("Location.toString()")}}
  - : Retourne une {{domxref("DOMString")}} contenant l'URL entière. C'est un synonyme de {{domxref("URLUtils.href")}}, sauf que `toString()` ne peut être utilisée pour modifier la valeur.

## Exemples

```js
// Crée un élèment ancre et utilise la propriété href dans le but de cet exemple
// Une alternative plus correcte est de naviguer vers l'URL et d'utiliser document.location ou window.location
var url = document.createElement('a');
url.href = 'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container';
console.log(url.href);      // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(url.protocol);  // https:
console.log(url.host);      // developer.mozilla.org:8080
console.log(url.hostname);  // developer.mozilla.org
console.log(url.port);      // 8080
console.log(url.pathname);  // /en-US/search
console.log(url.search);    // ?q=URL
console.log(url.hash);      // #search-results-close-container
console.log(url.origin);    // https://developer.mozilla.org:8080
```

## Spécifications

| Spécification                                                                                            | Statut                           | Commentaires                                             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "history.html#the-location-interface", "Location")}} | {{Spec2('HTML WHATWG')}} | Pas de différence avec {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "browsers.html#the-location-interface", "Location")}} | {{Spec2('HTML5 W3C')}}     | Définition initiale.                                     |

## Compatibilité

{{Compat("api.Location")}}

## Voir aussi

- Deux méthodes qui créent un objet `location` : {{domxref("Window.location")}} et {{domxref("Document.location")}}.
- Interfaces liées aux URL: {{domxref("URL")}}, {{domxref("URLSearchParams")}} et {{domxref("HTMLHyperlinkElementUtils")}}.
