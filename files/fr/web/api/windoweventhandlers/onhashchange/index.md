---
title: WindowEventHandlers.onhashchange
slug: Web/API/WindowEventHandlers/onhashchange
translation_of: Web/API/WindowEventHandlers/onhashchange
---
{{APIRef("HTML DOM")}}L'événement **hashchange** est déclenché lorsque le hash de l'url change (cf. {{domxref("Window.location", "location.hash")}}).

## Syntaxe

    window.onhashchange = funcRef;

**ou**

    <body onhashchange="funcRef();">

**ou**

    window.addEventListener("hashchange", funcRef, false);

### Paramètres

- `funcRef`
  - : Une référence à une fonction.

## Exemples

```js
if ("onhashchange" in window) {
    alert("Le navigateur prend en charge l'événement hashchange!");
}

function locationHashChanged() {
    if (location.hash === "#somecoolfeature") {
        somecoolfeature();
    }
}

window.onhashchange = locationHashChanged;
```

## L'événement hashchange

Lorsque l'observateur d'événement déclenche l'événement hashchange il passe en paramêtres les arguments suivante:

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Paramêtre</td>
      <td class="header">Type</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>newURL</code> {{gecko_minversion_inline("6.0")}}</td>
      <td><code>DOMString</code></td>
      <td>Le nouvel URL où le navigateur est.</td>
    </tr>
    <tr>
      <td><code>oldURL</code> {{gecko_minversion_inline("6.0")}}</td>
      <td><code>DOMString</code></td>
      <td>L'ancien URL où le navigateur se trouvait.</td>
    </tr>
  </tbody>
</table>

### Une solution autour de event.newURL et event.oldURL

```js
//insérez ce bout de code au début de votre code pour observer les changements de hash dans l'URL
if(!window.HashChangeEvent)(function(){
	var lastURL=document.URL;
	window.addEventListener("hashchange",function(event){
		Object.defineProperty(event,"oldURL",{enumerable:true,configurable:true,value:lastURL});
		Object.defineProperty(event,"newURL",{enumerable:true,configurable:true,value:document.URL});
		lastURL=document.URL;
	});
}());
```

###  

## Spécifications 

| Spécifications                                                                                       | Statut                           | Commentaires |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', '#windoweventhandlers', 'GlobalEventHandlers')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}         | {{Spec2('HTML5.1')}}     |              |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}     | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("api.WindowEventHandlers.onhashchange")}}

## Voir aussi

- [Manipuler l'historique du navigateur](/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur)
- Méthodes [history.pushState() et history.replaceState()](/fr/docs/Web/API/Window/history)
- L'événement [popstate](/fr/docs/Web/API/WindowEventHandlers/onpopstate)
