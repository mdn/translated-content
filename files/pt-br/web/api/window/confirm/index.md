---
title: Window.confirm()
slug: Web/API/Window/confirm
---

{{ApiRef("Window")}}

O método **`Window.confirm()`** mostra uma janela modal com uma mensagem opcional e dois botões, OK e Cancelar.

## Sintaxe

```
resultado = window.confirm(mensagem);
```

- `mensagem` é a string opcional que será mostrada no diálogo.
- `resultado` é um booleano indicando se OK ou cancelar foram selecionados (`true` indicará OK).

## Exemplo

```
if (window.confirm("Você realmente quer sair?")) {
  window.open("sair.html", "Obrigado pela visita!");
}
```

Produzirá:

![firefox confirm](firefox_confirm_dialog.png)

## Notas

The following text is shared between this article, DOM:window\.prompt and DOM:window\.alert Caixas de diálogo são janelas modais - elas previnem o usuário de acessar o resto da interface da aplicação enquanto a caixa de diálogo não for fechada. Por esta razão, você não deve usar abusivamente nenhuma função que crie uma caixa de diálogo (ou uma janela modal). E independente disso, existem boas razões para [evitar o uso de caixas de diálogo para confirmações.](https://alistapart.com/article/neveruseawarning)

Usuários do [Mozilla Chrome](/pt-BR/Chrome) (Ex.: Extensões do Firefox) devem utilizar métodos de `nsIPromptService`.

O argumento é opcional e não é requerido por especificações.

## Especificação

Especificado em HTML5.

## Veja Também

- {{domxref("window.alert","alert")}}
- {{domxref("window.prompt","prompt")}}
