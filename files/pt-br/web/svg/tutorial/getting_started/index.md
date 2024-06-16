---
title: Primeiros passos
slug: Web/SVG/Tutorial/Getting_Started
---

{{SVGRef}}

{{ PreviousNext("SVG/Tutorial/Introduction", "SVG/Tutorial/Positions") }}

## Um Exemplo Simples

Vamos mergulhar direto com um exemplo simples. Dê uma olhada no código a seguir.

```xml
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Copie o código e salve-o como demo1.svg. Em seguida, abra-o no Firefox. Você o verá como visto na figura a seguir. (Usuários do Firefox: clique [aqui](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![Fundo vermelho composto por um círculo verde centralizado. O texto branco centralizado dentro do círculo é SVG.](svgdemo1.png)

O processo de renderização inclui o seguinte:

1. Começamos com o elemento raiz do `svg`:

   - A declaração doctype conhecida em (X)HTML deve ser deixada de lado porque a validação SVG baseada em DTD leva a mais problemas do que resolve.
   - Antes do SVG 2, para identificar a versão do SVG para outros tipos de validação, os atributos `version`e `baseProfile `deveriam sempre ser usados. Ambos os atributos `version`e `baseProfile`estão obsoletos no SVG 2.
   - Como um dialeto XML, o SVG deve sempre vincular os namespaces corretamente (no atributo xmlns). Consulte a página [Curso intensivo de namespaces](/pt-BR/docs/Web/SVG/Namespaces_Crash_Course) para obter mais informações.

2. O fundo é definido como vermelho desenhando um retângulo [`<rect>`](/pt-BR/docs/Web/SVG/Element/rect) que cobre toda a área da imagem.
3. Um círculo verde [`<circle>`](/pt-BR/docs/Web/SVG/Element/circle)com raio de 80px é desenhado no centro do retângulo vermelho (centro do círculo deslocado 150px para a direita e 100px para baixo a partir do canto superior esquerdo).
4. O texto "SVG" é desenhado. O interior de cada letra é preenchido com branco. O texto é posicionado definindo uma âncora onde queremos que fique o ponto médio: neste caso, o ponto médio deve corresponder ao centro do círculo verde. Ajustes finos podem ser feitos no tamanho da fonte e na posição vertical para garantir que o resultado final seja esteticamente agradável.

## Propriedades básicas de arquivos SVG

- A primeira coisa a levar em conta é a ordem de representação dos elementos. A regra globalmente válida para arquivos SVG é que os elementos subsequentes sejam renderizados sobre os anteriores. Quanto mais baixo for um elemento, mais visível ele será.
- Na web, os arquivos SVG podem ser exibidos diretamente no navegador ou incorporados em arquivos HTML usando vários métodos:

  - Se o HTML for XHTML e entregue como application/xhtml+xml, o SVG poderá ser incorporado diretamente na fonte XML.
  - O SVG também pode ser incorporado diretamente no HTML.
  - Pode ser usado com o elemento [`<img>`](/pt-BR/docs/Web/HTML/Element/img)
  - O arquivo SVG pode ser referenciado com um elemento `object`:

    ```html
    <object data="image.svg" type="image/svg+xml" />
    ```

  - Também podem ser usados ​​com um elemento `iframe`:

    ```html
    <iframe src="image.svg"></iframe>
    ```

  - Finalmente, o SVG pode ser criado dinamicamente com JavaScript e injetado no HTML DOM.

- O manuseio de tamanhos e unidades em SVG será explicado na próxima página

## Tipos de arquivo SVG

Os arquivos SVG são de dois tipos. Arquivos SVG regulares, que são arquivos de texto simples que contêm marcações SVG e têm a extensão recomendada ".svg" (todas em letras minúsculas).

Devido ao enorme tamanho que os arquivos SVG podem atingir quando usados ​​para algumas aplicações (por exemplo, aplicações geográficas), a especificação SVG também permite arquivos SVG compactados com gzip. A extensão recomendada para esses arquivos é ".svgz" (todas em letras minúsculas). Infelizmente, é muito problemático fazer com que arquivos SVG compactados funcionem de maneira confiável em todos os agentes de usuário habilitados para SVG quando servidos a partir de um servidor Microsoft IIS, e o Firefox não pode carregar SVGs compactados do computador local. Evite arquivos SVG compactados, exceto ao publicá-los em um servidor web que você sabe que os servirá corretamente (veja abaixo).

## Algumas palavras sobre servidores web para arquivos .svgz

Agora que sabemos como criar arquivos SVG básicos, o próximo passo é carregá-los em um servidor web. No entanto, existem alguns problemas nesta fase. Para arquivos SVG regulares, os servidores devem enviar o cabeçalho HTTP:

```http
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

Para arquivos SVG compactados, os servidores devem enviar cabeçalhos HTTP:

```http
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

Você pode verificar se o seu servidor está enviando os cabeçalhos HTTP corretos com seus arquivos SVG usando o [painel Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers) ou um site como [websniffer.com](https://websniffer.com/). Envie a URL dos seus dois arquivos SVG e observe os cabeçalhos de resposta HTTP. Se você descobrir que seu servidor não está enviando os cabeçotes de dados com os valores fornecidos acima, entre em contato com seu host. Se você estiver tendo problemas para convencê-los a configurar corretamente seus servidores para SVG, pode haver maneiras de fazer isso. Consulte a [página de configuração do servidor](https://www.w3.org/services/svg-server/) em w3.org para uma variedade de soluções simples.

A configuração incorreta do servidor é um motivo muito comum para o SVG não carregar, portanto, verifique a sua. Se o seu servidor não estiver configurado para enviar os cabeçalhos corretos com os arquivos SVG que está servindo, o Firefox provavelmente marcará os arquivos como texto ou lixo codificado, ou até mesmo pedirá ao usuário que escolha um aplicativo para abri-los.

{{ PreviousNext("SVG/Tutorial/Introduction", "SVG/Tutorial/Positions") }}
