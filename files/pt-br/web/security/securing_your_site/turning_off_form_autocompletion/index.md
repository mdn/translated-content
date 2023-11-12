---
title: How to Turn Off Form Autocompletion
slug: Web/Security/Securing_your_site/Turning_off_form_autocompletion
---

Este artigo explica como um Site da Web pode desabilitar a função autocompletar de campos de formulário.

Por padrão, navegadores lembram da informação que o usuário envia através de campos de formulário em Sites da Web. Isto habilita o navegador a oferecer termos para autocompletar (ao usuário iniciar a digitação o navegador oferece sugestões para campos que o usuário tenha iniciado a digitação) ou auto preenchimento (o navegador pré popula os campos ao carregar a página.

Estas funcionalidades de autocompletar podem gerar para os usuários preocupações quanto à privacidade. Por isso os navegadores permitem aos usuários que desabilitem essas funcionalidades, embora, por padrão, elas estejam habilitadas. Entretanto, alguns dados enviados em formulários não serão úteis no futuro (um número PIN, por exemplo), ou mesmo contém informações sensíveis (um número de documento ou um código de segurança de cartão de crédito, por exemplo). Um website deverá preferir que o navegador não se lembre de valores para estes tipos de campos, mesmo que a funcionalidade de autocompletar dos navegadores esteja ativa.

## Desabilitando o auto completar

Para desabilitar o auto completar nos formulários, o Web Site precisa setar o atributo `autocomplete` para "off":

```html
autocomplete="off"
```

O site pode fazer isso para um formulário inteiro ou para elementos input especificos do formulário:

```html
<form method="post" action="/form" autocomplete="off">[...]</form>
```

```html
<form method="post" action="/form">
  [...]
  <div>
    <label for="cc">Credit card:</label>
    <input type="text" id="cc" name="cc" autocomplete="off" />
  </div>
</form>
```

O atributo `autocomplete="off"` tem dois efeitos:

- Dirá para o navegador parar de salvar dados inseridos pelo usuário em formulários para um futuro _autocomplete_ (Isso varia de navegador para navegador).
- Isso fará o navegador parar de fazer caching dos dados do formulário na _session history_ do navegador. Quando um dado é armazenado no _cache_ no _session history_, os dados preenchidos pelo usuário serão mostrados para ele no caso dele submeter o formulário e clicar no botão Voltar e retornar à página original do formulário.

## O atributo autocomplete e campos de login

Navegadores modernos implementam gerenciamento de senhas integrado: quando o usuário preenche um usuário e senha para um site, o navegador se oferece para lembrar dos dados para o usuário. Quando o usuário visita o site novamente, o navegador preenche os campos de login automaticamente conforme os valores salvos por ele..

Os navegadores também permitem ao usuário selecionar uma senha mestra para que os dados salvos sejam criptografados.

Mesmo sem uma senha mestra, o gerenciamento de senhas dentro do navegador é geralmente vista como um ganho de segurança. Como os usuários não precisam se lembrar das senhas que o navegador salva para eles, eles podem escolher senhas mais fortes do que geralmente escolheriam.

Por esta razão, muitos navegadores modernos não suportam `autocomplete="off"` para campos de login.

- se um site utiliza `autocomplete="off"` para um [`form`](/pt-BR/docs/Web/HTML/Element/form), e o formulário inclui campos de usuário e senha, então o navegador ainda assim se oferece para salvar os dados de login, e se o usuário aceitar, o navegador vai preencher estes dados automaticamente na próxima vez que o usuário visita a página.
- se um site utiliza `autocomplete="off"` para campos `input de usuário e senha` , então o navegador ainda assim se oferece para salvar os dados de login, e se o usuário aceitar, o navegador vai preencher estes dados automaticamente na próxima vez que o usuário visitar a página.

Este comportamento existe no Firefox (desde a versão 38), Google Chrome (desde a versão 34), e Internet Explorer (desde a versão 11).
