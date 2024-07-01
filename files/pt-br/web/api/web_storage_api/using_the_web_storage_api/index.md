---
title: Usando a API Web Storage
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

A API Web Storage fornece mecanismos pelos quais os navegadores podem armazenar pares de chaves/valores de uma maneira muito mais segura e intuitiva do que usar cookies. Este artigo fornece um passo a passo sobre como usar essa tecnologia.

## Conceitos básicos

Objetos `Storage` são simples conjuntos contendo pares de chave/valor, de forma parecida com objetos, porém eles permanecem intactos mesmo após a página ser recarregada. As chaves e valores são sempre strings (note que chaves cujo nome seja um número inteiro serão automaticamente convertidas par strings, assim como acontece nos objetos). Você pode acessar esses valores como você faria com um objeto ou usando os métodos {{domxref("Storage.getItem()")}} e {{domxref("Storage.setItem()")}}. As três linhas seguintes definem o valor de `corDefinida` de maneiras diferentes, mas com o mesmo resultado:

```js
localStorage.corDefinida = "#a4509b";
localStorage["corDefinida"] = "#a4509b";
localStorage.setItem("corDefinida", "#a4509b");
```

> **Nota:** Recomendamos que você utilize a API Web Storage (`setItem`, `getItem`, `removeItem`, `key`, `length`) para evitar as [armadilhas](http://www.2ality.com/2012/01/objects-as-maps.html) associadas ao uso de objetos literais como mapas de chave-valor.

Os dois mecanismos presentes na Web Storage são os seguintes:

- O `sessionStorage` mantém uma área de armazenamento separada para cada origem diferente. Cada uma dessas áreas fica disponível durante a sessão da página (ou seja, enquanto a aba do navegador estiver aberta, incluindo recarregamentos e restaurações de páginas).
- O `localStorage` faz a mesma coisa, mas os dados armazenados aqui continuam existindo mesmo depois do navegador ser fechado e reaberto.

Esses mecanismos estão disponíveis através das propriedades {{domxref("Window.sessionStorage")}} e {{domxref("Window.localStorage")}} (de forma mais específica, em navegadores compatíveis, o objeto `Window` implementa os objetos `WindowLocalStorage` e `WindowSessionStorage`, aos quais as propriedades `localStorage` and `sessionStorage` pertencem, respectivamente) — invocar uma dessas propriedades irá criar uma instância do objeto {{domxref("Storage")}}, através do qual itens de dados podem ser definidos, acessados e removidos. Cada origem recebe objetos Storage diferentes para `sessionStorage` and `localStorage` — eles operam e são controlados separadamente.

Por exemplo, chamar `localStorage` pela primeira vez em um documento retornará um objeto {{domxref("Storage")}}; chamar `sessionStorage` em um documento retornará um outro objeto {{domxref("Storage")}}. Ambos podem ser manipulados da mesma maneira, mas de forma isolada.

## Detectando a disponibilidade do localStorage

Para poder usarmos o localStorage, devemos antes verificar se ele é compatível e está disponível na sessão atual de navegação.

### Testando a disponibilidade

Navegadores compatíveis com localStorage terão uma propriedade no objeto `window` chamada `localStorage`. Contudo, por várias razões, apenas verificar se essa propriedade existe pode gerar erros. Se ela existir, ainda não haverá garantias de que o localStorage está de fato disponível para uso, já que vários navegadores fornecem opções que desativam o localStorage. Dessa forma, um navegador pode ser _compatível_ com o localStorage, mas também pode não torná-lo _disponível_ para os scripts usarem. One example of that is Safari, which in Private Browsing mode gives us an empty localStorage object with a quota of zero, effectively making it unusable. However, we might still get a legitimate QuotaExceededError, which only means that we've used up all available storage space, but storage is actually _available_. Our feature detect should take these scenarios into account.

Here is a function that detects whether localStorage is both supported and available:

```js
function storageAvailable(type) {
  try {
    var storage = window[type],
      x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
    );
  }
}
```

And here is how you would use it:

```js
if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
} else {
  // Too bad, no localStorage for us
}
```

You can test for sessionStorage instead by calling `storageAvailable('sessionStorage')`.

See here for a [brief history of feature-detecting localStorage](https://gist.github.com/paulirish/5558557).

## Example

To illustrate some typical web storage usage, we have created a simple example, imaginatively called **Web Storage Demo**. The [landing page](https://mdn.github.io/dom-examples/web-storage/) provides controls that can be used to customize the color, font, and decorative image:

![](landing.png)When you choose different options, the page is instantly updated; in addition, your choices are stored in `localStorage`, so that when you leave the page and load it again, later on, your choices are remembered.

We have also provided an [event output page](https://mdn.github.io/dom-examples/web-storage/event.html) — if you load this page in another tab, then make changes to your choices in the landing page, you'll see the updated storage information outputted as a {{domxref("StorageEvent")}} is fired.

![](event-output.png)

> **Nota:** As well as viewing the example pages live using the above links, you can also [check out the source code](https://github.com/mdn/dom-examples/tree/master/web-storage).

### Testing whether your storage has been populated

To start with on [main.js](https://github.com/mdn/dom-examples/blob/master/web-storage/main.js), we will test whether the storage object has already been populated (i.e., the page was previously accessed):

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

The {{domxref("Storage.getItem()")}} method is used to get a data item from storage; in this case, we are testing to see whether the `bgcolor` item exists; if not, we run `populateStorage()` to add the existing customization values to the storage. If there are already values there, we run `setStyles()` to update the page styling with the stored values.

**Note**: You could also use {{domxref("Storage.length")}} to test whether the storage object is empty or not.

### Getting values from storage

As noted above, values can be retrieved from storage using {{domxref("Storage.getItem()")}}. This takes the key of the data item as an argument, and returns the data value. For example:

```js
function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

Here, the first three lines grab the values from local storage. Next, we set the values displayed in the form elements to those values, so that they keep in sync when you reload the page. Finally, we update the styles/decorative image on the page, so your customization options come up again on reload.

### Setting values in storage

{{domxref("Storage.setItem()")}} is used both to create new data items, and (if the data item already exists) update existing values. This takes two arguments — the key of the data item to create/modify, and the value to store in it.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

The `populateStorage()` function sets three items in local storage — the background color, font, and image path. It then runs the `setStyles()` function to update the page styles, etc.

We've also included an `onchange` handler on each form element so that the data and styling are updated whenever a form value is changed:

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

### Responding to storage changes with the StorageEvent

The {{domxref("StorageEvent")}} is fired whenever a change is made to the {{domxref("Storage")}} object (note that this event is not fired for sessionStorage changes). This won't work on the same page that is making the changes — it is really a way for other pages on the domain using the storage to sync any changes that are made. Pages on other domains can't access the same storage objects.

On the events page (see [events.js](https://github.com/mdn/dom-examples/blob/master/web-storage/event.js)) the only JavaScript is as follows:

```js
window.addEventListener("storage", function (e) {
  document.querySelector(".my-key").textContent = e.key;
  document.querySelector(".my-old").textContent = e.oldValue;
  document.querySelector(".my-new").textContent = e.newValue;
  document.querySelector(".my-url").textContent = e.url;
  document.querySelector(".my-storage").textContent = e.storageArea;
});
```

Here we add an event listener to the `window` object that fires when the {{domxref("Storage")}} object associated with the current origin is changed. As you can see above, the event object associated with this event has a number of properties containing useful information — the key of the data that changed, the old value before the change, the new value after that change, the URL of the document that changed the storage, and the storage object itself.

### Deleting data records

Web Storage also provides a couple of simple methods to remove data. We don't use these in our demo, but they are very simple to add to your project:

- {{domxref("Storage.removeItem()")}} takes a single argument — the key of the data item you want to remove — and removes it from the storage object for that domain.
- {{domxref("Storage.clear()")}} takes no arguments, and simply empties the entire storage object for that domain.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Web Storage API landing page](/pt-BR/docs/Web/API/Web_Storage_API)
