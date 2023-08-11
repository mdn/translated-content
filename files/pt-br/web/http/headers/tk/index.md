---
title: Tk
slug: Web/HTTP/Headers/Tk
---

{{HTTPSidebar}}

O cabeçalho de resposta **`Tk`** indica o status de rastreamento que foi aplicado à requisição correspondente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Tk: !  (em construção)
Tk: ?  (dinâmico)
Tk: G  (portão ou múltiplas partes)
Tk: N  (não está rastreando)
Tk: T  (rastreando)
Tk: C  (rastreando com consentimento)
Tk: P  (potencial consentimento)
Tk: D  (desconsiderando DNT)
Tk: U  (atualizado)
```

### Diretivas

- !
  - : Em construção. O servidor de origem está atualmente testando sua comunicação de status de rastreamento.
- ?
  - : Dinâmico. O servidor de origem precisa de mais informação para determinar o status de rastreamento.
- G
  - : Portão ou múltiplas partes. O servidor está agindo como um portão para uma troca envolvendo várias múltiplas partes.
- N
  - : Não está rastreando.
- T
  - : Rastreando.
- C
  - : Rastreamento com consentimento. O servidor de origem acredita que ele recebeu consentimento a priori para rastrear o usuário, agente de usuário ou dispositivo.
- P
  - : Potencial consentimento. O servidor origem não conhece, em tempo real, se ele recebeu consentimento a priori para rastrear o usuário, o agente de usuário ou dispositivo, mas promete não usar ou compartilhar qualquer dado `DNT:1` até que o consentimento seja determinado, e promete futuramente deletar ou permanentemente sumir com a identidade em até 48 horas para qualquer dado `DNT:1` recebido para qual o consentimento não tenha sido recebido.
- D
  - : Desconsiderando DNT. O servidor de origem está incapacitado ou relutante em respeitar uma preferência de rastreamento recebida do agente de usuário requisitante.
- U
  - : Atualizado. A requisição resultou em uma potencial mudança no status de rastreamento aplicado ao usuário, agente de usuário ou dispositivo.

## Exemplos

O cabeçalho `Tk` para um recurso que diz não querer ser rastreado se parece com isso:

```
Tk: N
```

## Especificações

| Especificação                                                 | Status                | Comentário         |
| ------------------------------------------------------------- | --------------------- | ------------------ |
| {{SpecName('Tracking','#Tk-header-defn', 'Tk header field')}} | {{Spec2("Tracking")}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("http.headers.Tk")}}

## Veja também

- Cabeçalho {{HTTPHeader("DNT")}}
- {{domxref("Navigator.doNotTrack")}}
