---
title: Compressão em HTTP
slug: Web/HTTP/Compression
tags:
  - Guía
  - HTTP
  - compressão
translation_of: Web/HTTP/Compression
original_slug: Web/HTTP/Compressão
---
<div>{{HTTPSidebar}}</div>

<p class="summary">A <strong>Compressão</strong> é uma forma importante de aumentar o desempenho de um Web site.<strong> </strong>Para alguns documentos, a redução de tamanho de até 70% diminui a necessidade de capacidade de largura de banda. Com o passar dos anos, os algoritmos também ficaram mais eficientes e novos têm recebido suporte por clientes e servidores.</p>

<p>Na prática, os desenvolvedores web não precisam implementar mecanismos de compressão de dados, pois ambos os navegadores e servidores já possuem tais mecanismos implementados. Porém, é preciso ter certeza de que o servidor esteja configurado adequadamente. A compressão acontece em três níveis distintos:</p>

<ul>
 <li>primeiramente, alguns formatos de arquivo são comprimidos com métodos otimizados específicos,</li>
 <li>então a criptografia ocorre no nível HTTP (o recurso é transmitido comprimido de ponta a ponta),</li>
 <li>e finalmente a compressão pode ser definida no nível da conexão, entre dois nós de uma conexão HTTP.</li>
</ul>

<h2 id="Compressão_de_formato_de_arquivo">Compressão de formato de arquivo</h2>

<p>Cada tipo de dado tem alguma redundância, ou seja, espaço desperdiçado. Se um texto pode geralmente apresentar até 60% de redundância, essa taxa pode ser muito maior para outras mídias, como áudio e vídeo. Ao contrário do texto, esses outros tipos de mídia ocupam muito espaço de armazenamento, sendo que a necessidade de recuperar esse espaço desperdiçado apareceu muito cedo. Engenheiros projetaram o algoritmo de compressão otimizada usada por formatos de arquivo para esse fim específico. Os algoritmos de compressão usados para arquivos podem ser agrupados em duas grandes categorias:</p>

<ul>
 <li>Compressão sem perdas (do inglês <em>Loss-less compression</em>), em que o ciclo de compressão-descompressão não altera os dados recuperados. Corresponde byte a byte com o original. Para imagens, <code>gif</code> e <code>png</code> usam a compressão sem perdas.</li>
 <li>Compressão com perdas (do inglês <em>Lossy compression</em>), onde o ciclo altera os dados originais, de forma imperceptível para o usuário.<br>
  Formatos de vídeo na Web utilizam compressão com perdas, assim como o formato  <code>jpeg</code> para imagens.</li>
</ul>

<p>Alguns formatos podem ser usados para a compressão com ou sem perdas, como o <code>webp</code>. Geralmente, o algoritmo de compressão com perdas pode ser configurado para comprimir mais ou menos, resultando em uma qualidade menor ou maior.</p>

<p>Para o melhor desempenho de um site, é ideal comprimir o máximo possível, mantendo um nível aceitável de qualidade. Para imagens, uma imagem gerada por uma ferramenta pode não ser otimizada o suficiente para a Web. Recomenda-se portanto o uso de ferramentas que comprimirão o máximo possível com uma certa qualidade exigida. Existem <a href="http://www.creativebloq.com/design/image-compression-tools-1132865">inúmeras ferramentas</a> especializadas para isso.</p>

<p>Algoritmos de compressão com perdas geralmente são mais eficientes que os sem perdas.</p>

<div class="note">
<p>Como a compressão funciona melhor em tipos específicos de arquivos, ela geralmente não fornece nada mais ao comprimir o mesmo arquivo uma segunda vez. Na verdade, isso geralmente é contraproducente, pois o custo da sobrecarga (algoritmos geralmente precisam de um dicionário que some ao tamanho inicial) pode ser maior do que o ganho extra na compressão, resultando em um arquivo maior. Não use as duas técnicas a seguir para arquivos em um formato comprimido.</p>
</div>

<h2 id="Compressão_de_ponta_a_ponta">Compressão de ponta a ponta</h2>

<p>Para compressão, a compressão de ponta a ponta é onde residem as maiores melhorias de desempenho dos sites. Compressão de ponta a ponta refere-se a uma compressão do corpo de uma mensagem que é realizada pelo servidor e permanecerá inalterada até atingir o cliente. Quaisquer que sejam os nós intermediários, eles deixam o corpo intacto.</p>

<p> </p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13801/HTTPEnco1.png" style="height: 307px; width: 955px;"></p>

<p>Todos os navegadores e servidores modernos suportam a compressão, bastante somente negociar o algoritmo a ser usado. Esses algoritmos são otimizados para texto. Nos anos 90, a tecnologia de compressão avançava a um ritmo acelerado e numerosos algoritmos sucessivos foram adicionados ao conjunto de escolhas possíveis. Hoje em dia, apenas dois são relevantes: o <code>gzip</code>, o mais comum, e <code>br</code> o novo desafiante.</p>

<p>Para selecionar o algoritmo a ser usado, os navegadores e servidores usam a <a href="/en-US/docs/Web/HTTP/Content_negotiation">negociação proativa de conteúdo</a>. O navegador envia um cabeçalho {{HTTPHeader("Accept-Encoding")}} com o algoritmo que ele suporta e sua ordem de precedência. O servidor escolhe um, usa-o para comprimir o corpo da resposta e usa o {{HTTPHeader("Content-Encoding")}} para informar ao navegador o algoritmo escolhido. Como a negociação de conteúdo foi usada para escolher uma representação baseada em sua codificação, o servidor deve enviar um cabeçalho {{HTTPHeader("Vary")}} contendo pelo menos {{HTTPHeader("Accept-Encoding")}} ao lado do cabeçalho na resposta. Dessa forma, os caches poderão armazenar em cache as diferentes representações do recurso.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13811/HTTPCompression1.png" style="height: 307px; width: 771px;"></p>

<p>Como a copressão de dados traz melhorias significativas no desempenho, recomenda-se ativá-la para todos os arquivos, com exceção daqueles já comprimidos, como imagens, arquivos de áudio e vídeos.</p>

<p>Apache suporta compressão e usa <a href="http://httpd.apache.org/docs/current/mod/mod_deflate.html">mod_deflate</a>; para nginx existe <a href="http://nginx.org/en/docs/http/ngx_http_gzip_module.html">ngx_http_gzip_module</a>; para IIS, o elemento <code><a href="https://www.iis.net/configreference/system.webserver/httpcompression">&lt;httpCompression&gt;</a></code>.</p>

<h2 id="Compressão_de_nó_a_nó_(Hop-by-hop)">Compressão de nó a nó (<em>Hop-by-hop</em>)</h2>

<p>A compressão de nó a nó (do inglês <em>Hop-by-hop compression</em>), embora semelhante à compresão de ponta a ponta, difere em um elemento fundamental: a compressão não acontece no recurso no servidor, criando uma representação específica que é então transmitida, mas sim no corpo da mensagem entre dois nós no caminho entre o cliente e o servidor. Conexões entre nós intermediários sucessivos podem aplicar uma compressão diferente.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13807/HTTPTE1.png"></p>

<p>Para fazer isso, o HTTP usa um mecanismo semelhante à negociação de conteúdo para a compressão ponta a ponta: o nó que transmite a solicitação anuncia sua vontade usando o cabeçalho {{HTTPHeader ("TE")}}, sendo que o outro nó escolhe o método adequado, aplica-o e indica a sua escolha com o cabeçalho {{HTTPHeader("Transfer-Encoding")}}.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13809/HTTPComp2.png"></p>

<p>Na prática, a compressão de nó a nó é transparente para o servidor e o cliente, sendo raramente usada. {{HTTPHeader ("TE")}} e {{HTTPHeader ("Transfer-Encoding")}} são usados principalmente para enviar uma resposta por partes, permitindo iniciar a transmissão de um recurso sem conhecer seu tamanho.</p>

<p>Observe que usar {{HTTPHeader("Transfer-Encoding")}} e compressão a nível de salto entre nós é tão raro que a maioria dos servidores, como Apache, nginx ou IIS, não apresentam uma maneira fácil de configurá-lo. Tal configuração geralmente acontece no nível do proxy.</p>
