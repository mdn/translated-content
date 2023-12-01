---
title: Location
slug: Web/API/Location
---

{{APIRef("HTML DOM")}}

## Resumo

A interface `Location` representa a localização do objeto a qual ele está associado. Mudanças feitas na interface serão refletidas nos objetos relacionados a ela. Tanto a interface {{domxref("Document")}}, como a interface {{domxref("Window")}} , têm este vínculo com a inteface Location, acessível via {{domxref("Document.location")}} e {{domxref("Window.location")}} respectivamente.

## Propriedades

_A inteface `Location` não herda nenhuma propriedade, mas implementa as propriedades de_ _{{domxref("URLUtils")}}._

- {{domxref("URLUtils.href")}}
  - : É uma {{domxref("DOMString")}} que contém toda URL.
- {{domxref("URLUtils.protocol")}}
  - : É uma {{domxref("DOMString")}} que contém o esquema de protocolo da URL, incluindo o final ':'.
- {{domxref("URLUtils.host")}}
  - : É uma {{domxref("DOMString")}} que contém o _host_, que é o _hostname_ seguido de ':' e a _port_ da URL.
- {{domxref("URLUtils.hostname")}}
  - : É uma {{domxref("DOMString")}} que contém o domínio da URL.
- {{domxref("URLUtils.port")}}
  - : É uma {{domxref("DOMString")}} que contém o número da porta da URL.
- {{domxref("URLUtils.pathname")}}
  - : É uma {{domxref("DOMString")}} que contém `'/'`, como caractere inicial, seguido do caminho da URL.
- {{domxref("URLUtils.search")}}
  - : É uma {{domxref("DOMString")}} que contém um `'?'` seguido dos parâmetros da URL.
- {{domxref("URLUtils.hash")}}
  - : É uma {{domxref("DOMString")}} que contém um `'#'` seguido do identificador de fragmento da URL.
- {{domxref("URLUtils.username")}}
  - : É uma {{domxref("DOMString")}} que contém o nome de usuário especificado antes do nome de domínio.
- {{domxref("URLUtils.password")}}
  - : É uma {{domxref("DOMString")}} que contém a senha especificada antes do nome de domínio.
- {{domxref("URLUtils.origin")}} {{readOnlyInline}}
  - : Retorna uma {{domxref("DOMString")}} que contém a forma canônica da origem do local especificado.

## Métodos

_A inteface `Location` não herda nenhum método, mas implementa os métodos de {{domxref("URLUtils")}}_

- {{domxref("Location.assign()")}}
  - : Carrega o recurso na URL fornecida como parâmetro.
- {{domxref("Location.reload()")}}
  - : Recarrega o recurso a partir da URL atual. Seu único parâmetro opcional é um {{domxref("Boolean")}}, que, quando verdadeiro (`true)`, faz com que a página sempre seja recarregada a partir do servidor. Se for falso (`false)` ou não especificado, o navegador pode recarregar a página a partir de seu cache.
- {{domxref("Location.replace()")}}
  - : Substitui o recurso atual pelo recurso presente na URL fornecida. A diferença entre o método `assign()` é que após usar `replace()` a página atual não será salva na sessão {{domxref("History")}}, ou seja, o usuário não será capaz de usar o botão _voltar_ para navegar até a página.
- {{domxref("URLUtils.toString()")}}
  - : Retorna uma {{domxref("DOMString")}} que contém toda URL. O método é um sinônimo para {{domxref("URLUtils.href")}}, embora não possa ser usado para modificar o valor.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Dois métodos que criam um objeto Location: {{domxref("Window.location")}} e {{domxref("Document.location")}}.
