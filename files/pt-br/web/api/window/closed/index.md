---
title: Window.closed
slug: Web/API/Window/closed
---

{{APIRef}}

## Sumário

Essa propriedade (read-only) indica se a janela referenciada está ou não fechada.

## Sintaxe

```
isClosed = windowRef.closed;
```

- `isClosed`

  - : Um booleano. Valores possíveis:

    - `true`: A janela foi fechada.
    - `false`: A janela está aberta.

## Exemplos

### Mudar a URL de uma janela a partir de um popup

O seguinte exemplo demonstra com uma janela de popup pode alterar a URL da janela que abriu ela. Antes de tentarmos mudar a URL da janela que a abriu, verificamos se a janela atual tem uma janela pai que a abriu usando a propriedade [window.opener](/pt-BR/docs/DOM/window.opener) e que esta não está fechada:

```js
// Verifique se o opener existe e não está fechado
if (window.opener && !window.opener.closed) {
  window.opener.location.href = "http://www.mozilla.org";
}
```

Note que popups podem somente acessar a janela que os abriu.

### Atualizando um popup anteriormente aberto

Neste exemplo, a função `refreshPopupWindow()` chama o método `reload` do objeto `location` do popup para atualizar seus dados. Se o popup não foi aberto ainda ou o usuário o fechou, uma nova janela é aberta.

```js
var popupWindow = null;

function refreshPopupWindow() {
  if (popupWindow && !popupWindow.closed) {
    // popupWindow está aberto, atualize-o
    popupWindow.location.reload(true);
  } else {
    // Abra uma nova janela de popup
    popupWindow = window.open("popup.html", "dataWindow");
  }
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
