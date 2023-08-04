---
title: NavigatorID.userAgent
slug: orphaned/Web/API/NavigatorID/userAgent
---

{{ApiRef("HTML DOM")}}

A propriedade read-only (apenas leitura) **`NavigatorID.userAgent`** retorna a string do agente do usuário (user agent) para o browser atual.

> **Nota:** A especifícação demanda que os navegadores forneçam, nessa propriedade, a menor quantidade de informações posssível. Nunca assuma que o valor dessa propriedade permanecerá o mesmo em verções futuras de um mesmo navegador. Tente não utiliza-la, ou ultileze-a somente para verções presentes ou passadas de um navegador. Novos navegadores podem utilizar-se do mesmo agente do usuário, ou parte dele, que navegadores mais aintigos: não existe qualquer garantia de que o agente do navegador é de fato o enunciado por essa propriedade.
>
> Além disso, tenha em mente que os usuários do navegador podem manipular o valor dessa propriedade caso queiram (UA spoofing).

A idenficação de browsers baseada na detecção de sua string de agente de usuário **não é confiável** e **não é recomendável**, pois a string de agente de usuário pode ser configurada pelo usuário. Por exemplo:

- No Firefox, você pode alterar a preferência `general.useragent.override` em `about:config`. Algumas extenções do Firefox fazem isso. No entanto, isso altera somente o header HTTP que é enviado ao servidor, não afetando a detecção de browser efetuada por código JavaScript.
- O Opera 6+ permite aos usuários configurar a string de identificação do browser através de um menu.
- O Microsoft Internet Explorer faz uso de registros do Windows.
- O Safari e o iCab permitem aos usuários alterar, através de um menu, a string de agente do usuário para os valores predefinidos do Internet Explorer ou Netscape.

## Sintaxe

```
var au = window.navigator.userAgent;
```

### Valor

`au` guarda o valor da string de agente de usuário do browser atual.

A string de agente de usuário é contruida em uma estrutura formal que pode ser decomposta em diferentes informações. Cada uma dessas informações é provinda de outras propriedades de `window.navigator`, que também podem ser configuradas pelo usuário. Navegadores baseados na engine Gecko seguem a seguinte estrutura:

```
ageteDeUsuário = códigoDoNomeDoAplicativo/versãoDoAplicativo número (Plataforma; Segurança; OS-ou-CPU;
Localização; rv: número-da-verção-de-revisão) produto/produtoSub
Nome-do-Aplicativo versão-do-Nome-do-Aplicativo
```

## Exemplo

```js
alert(window.navigator.userAgent)
// alerta "Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1"
```

## Especificações

| Especificação                                                                                                | Status                           | Comentário         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#dom-navigator-useragent', 'NavigatorID.userAgent')}} | {{Spec2('HTML WHATWG')}} | Definição inicial. |

## Compatibilidade

{{Compat("api.NavigatorID.userAgent")}}

## Veja também

- [Referência da string de agente usuário no Gecko](/pt-BR/docs/Gecko_user_agent_string_reference)
- [Browser identification (aka "browser sniffing"): not best, not reliable approach](/pt-BR/docs/Using_Web_Standards_in_your_Web_Pages/Developing_cross-browser_and_cross-platform_pages "Using_Web_Standards_in_your_Web_Pages/Developing_cross-browser_and_cross-platform_pages")
- [Limit the use of User Agent String based Detection](/pt-BR/docs/Browser_Detection_and_Cross_Browser_Support#Limit_the_use_of_User_Agent_String_based_Detection "Browser_Detection_and_Cross_Browser_Support#Limit_the_use_of_User_Agent_String_based_Detection")
- [Use feature oriented object detection](/pt-BR/docs/Browser_Detection_and_Cross_Browser_Support#Use_feature_oriented_object_detection "Browser_Detection_and_Cross_Browser_Support#Use_feature_oriented_object_detection")
- [Demo interativa das probriadades do navegador](http://www.gtalbot.org/DHTMLSection/ListAllAttributesAndMethodsOfObjects.html)
