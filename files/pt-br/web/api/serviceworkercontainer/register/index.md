---
title: ServiceWorkerContainer.register()
slug: Web/API/ServiceWorkerContainer/register
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

O método **`register()`**da interface {{domxref("ServiceWorkerContainer")}} cria ou atualiza um {{domxref("ServiceWorkerRegistration")}} passado em `scriptURL`.

Em caso de sucesso, um registro de service worker vincula o URL do script fornecido ao es*copo*, que é usado posteriormente para a navegação correspondente. Você pode chamar esse método incondicionalmente da página controlada. Ou seja, você não precisa primeiro verificar se há um registro ativo.

Há uma frequente confusão em relação ao significado e uso do escopo. Uma vez que um service worker não pode ter um escopo mais amplo do que sua própria localização, use apenas a opção `scope` quando precisar de um escopo mais limitado do que o padrão.

## Síntaxe

```
ServiceWorkerContainer.register(scriptURL, options)
  .then(function(ServiceWorkerRegistration) { ... });
```

### Parâmetros

- `scriptURL`
  - : A URL do script service worker.
- `options` {{optional_inline}}

  - : Um objeto contendo as opções do registro. Atualmente as opções disponíveis são:

    - `scope`: Uma {{domxref("USVString")}} representando uma URL que define o registro do escopo de um service worker's ; ou seja, o alcance das URLs que o service worker pode controlar. É geralmente uma URL relativa. O valor padrão é o URL que você obtém se você resolvesse './' usando a localização da página web como base. Não é, como customa-se acreditar, relativo à localização do service worker. Veja as seções de [Exemplos](#Example) para mais informações sobre como isso funciona.

### Valor retornado

Um {{domxref("Promise")}} que resolve com um objeto {{domxref("ServiceWorkerRegistration")}}.

## Exemplos

Os exemplos descritos escrito aqui deve ser tomado em conjunto para obter um melhor entendimento de como escopos do service workers são aplicados a uma página.

O exemplo a seguir usa o valor padrão de`scope` (ao omití-lo). O service worker neste caso irá controlar`example.com/index.html` bem como páginas abaixo, como `example.com/product/description.html`.

```js
if ("serviceWorker" in navigator) {
  // Registra um service worker hospeadado na raiz do
  // site usando o escopo padrão
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      console.log("Service worker  registrado com sucesso:", registration);
    })
    .catch(function (error) {
      console.log("Falha ao Registrar o Service Worker:", error);
    });
} else {
  console.log("Service workers não suportado!");
}
```

O código a seguir, se incluído em uma página na raiz de um site, seria aplicado exatamente às mesmas páginas, como no exemplo acima. Lembre-se de que o escopo, quando incluído, usa a localização da página como base. Alternativamente, se esse código foi incluído em uma página `example.com/product/description.html`, o escopo de`'./'` significa que o escopo que o service worker seria aplicado somente aos recursos de`example.com/product`. Se precisassemos de registrar um service worker em `example.com/product/description.html` aplicado a todoo `example.com`, deixaríamos o escopo acima.

```js
if ("serviceWorker" in navigator) {
  // Registre um service worker hospeado na raiz do
  // site usando um escopo mais restritivo.
  navigator.serviceWorker
    .register("/sw.js", { scope: "./" })
    .then(function (registration) {
      console.log("Service worker registrado com sucesso:", registration);
    })
    .catch(function (error) {
      console.log("Service worker falhou ao registrar:", error);
    });
} else {
  console.log("Service workers não é suportado pelo navegador!.");
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
