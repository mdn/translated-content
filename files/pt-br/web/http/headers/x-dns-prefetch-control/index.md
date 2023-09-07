---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
---

{{HTTPSidebar}}O cabeçalho de resposta HTTP **`X-DNS-Prefetch-Control`** controla a pré-busca de DNS, um recurso pelo qual os navegadores realizam proativamente a resolução de nomes de domínio em ambos os links que o usuário pode escolher, além de URLs para itens referenciados pelo documento, incluindo imagens , CSS, JavaScript e assim por diante.

Essa pré-busca é realizada em segundo plano, de forma que o {{glossary ("DNS")}} provavelmente tenha sido resolvido quando os itens referenciados forem necessários. Isso reduz a latência quando o usuário clica em um link.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
X-DNS-Prefetch-Control: on
X-DNS-Prefetch-Control: off
```

### Diretrivas

- on
  - : Ativar pré-busca de DNS. Isso é o que os navegadores fazem, se eles suportam o recurso, quando esse cabeçalho não está presente.
- off
  - : Desativa a pré-busca de DNS. Isso é útil se você não controla o link nas páginas ou sabe que não deseja vazar informações para esses domínios.

## Descrição

As solicitações de DNS são muito pequenas em termos de largura de banda, mas a latência pode ser bastante alta, especialmente em redes móveis. Por meio da pré-busca especulativa de resultados de DNS, a latência pode ser reduzida significativamente em determinados momentos, como quando o usuário clica no link. Em alguns casos, a latência pode ser reduzida em um segundo.

A implementação desta pré-busca em alguns navegadores permite que a resolução de nomes de domínio ocorra em paralelo com (em vez de em série com) a busca do conteúdo real da página. Ao fazer isso, o processo de resolução de nome de domínio de alta latência não causa atrasos ao buscar conteúdo.

Os tempos de carregamento de páginas - especialmente em redes móveis - podem ser melhorados dessa maneira. Se os nomes de domínio para imagens puderem ser resolvidos antes das imagens serem solicitadas, as páginas que carregarem muitas imagens poderão ver uma melhoria de 5% ou mais no tempo de carregamento das imagens.

### Configurando a Pré-busca no Navegador

Em geral, você não precisa fazer nada para gerenciar a pré-busca. No entanto, o usuário pode querer desabilitar a pré-busca. No Firefox, isso pode ser feito configurando a preferência `network.dns.disablePrefetch` como `true`.

Além disso, por padrão, a pré-busca de nomes de host de link incorporado não é executada em documentos carregados em {{glossary ("HTTPS")}}. No Firefox, isso pode ser alterado configurando a preferência `network.dns.disablePrefetchFromHTTPS` como `false`.

## Exemplos

### Ativando e desativando a pré-busca

Você pode enviar o cabeçalho do lado do servidor X-DNS-Prefetch-Control ou de documentos individuais, usando o atributo [`http-equiv`](/pt-BR/docs/Web/HTML/Element/meta#http-equiv) no {{HTMLElement ("meta" )}} elemento, assim:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Você pode reverter essa configuração configurando o `content` como "`on`".

### Forçando a procura de nomes de host específicos

Você pode forçar a pesquisa de nomes de host específicos sem fornecer âncoras específicas usando esse nome de host com o uso de [`rel`](/pt-BR/docs/Web/HTML/Element/link#rel) no elemento {{HTMLElement ("link")}} com um tipo de link de `dns-prefetch`:

```html
<link rel="dns-prefetch" href="http://www.spreadfirefox.com/" />
```

Neste exemplo, o nome de domínio "[www.spreadfirefox.com](http://www.spreadfirefox.com/)" será pré-resolvido.

Da mesma forma, o elemento de link pode ser usado para resolver nomes de host sem fornecer uma URL completa, mas apenas, precedendo o nome do host com duas barras:

```html
<link rel="dns-prefetch" href="//www.spreadfirefox.com" />
```

Pré-busca forçada de nomes de host pode ser útil, por exemplo, na página inicial de um site para forçar a pré-resolução de nomes de domínio que são referenciados com frequência em todo o site, mesmo que eles não sejam usados na própria home page. Isso melhorará o desempenho geral do site, mesmo que o desempenho da página inicial não seja afetado.

## Compatibilidade com navegadores

{{Compat("http.headers.X-DNS-Prefetch-Control")}}

## Veja também

- [DNS Prefetching for Firefox (blog post)](http://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome handles DNS prefetching control](http://dev.chromium.org/developers/design-documents/dns-prefetching)
