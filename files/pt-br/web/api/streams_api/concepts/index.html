---
title: Conceitos da API Stream
slug: Web/API/Streams_API/Concepts
tags:
  - API
  - Streams
  - conceitos
translation_of: Web/API/Streams_API/Concepts
---
<div>{{apiref("Streams")}}</div>

<p class="summary">A <a href="/en-US/docs/Web/API/Streams_API">Streams API</a> adiciona conjunto muito útil de ferramentas à plataforma web, provendo objetos que permitem ao JavaScript acessar via programação dados de stream recebidos pela rede e processá-los conforme desejado pelo desenvolvedor. Alguns conceitos e terminologias associadas a streams podem ser novos pra você - este artigo explicará tudo o que você precisa saber.</p>

<h2 id="Readable_streams">Readable streams</h2>

<p>Um readable stream pode ser representado em JavaScript por um objeto {{domxref("ReadableStream")}} que flui de uma underlying source - é um recurso em algum lugar na rede ou outro lugar no domínio do qual deseja obter dados..</p>

<p>Há dois tipos de fontes subjacentes:</p>

<ul>
 <li><strong>Push sources</strong> constatemente envia dados enquanto os acessa, e você decide quando iniciar, pausar ou cancelar o acesso ao stream. Exemplos deste tipo incluem stream de vídeo e sockets TCP/<a href="/en-US/docs/Web/API/WebSockets_API">Web sockets</a>.</li>
 <li><strong>Pull sources</strong> requer que você requisite os dados explicitamente uma conectado. Exemplos deste tipo incluem operações de acesso a arquivos via chamada <a href="/en-US/docs/Web/API/Fetch_API">Fetch</a> ou <a href="/en-US/docs/Web/API/XMLHttpRequest/XMLHttpRequest">XHR</a>.</li>
</ul>

<p>O dado é lido sequencialmente em pequenos blocos de informação chamado chunks. Um chunk por ser um simples byte, ou, pode ser algo maior como um <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed array</a> de um certo tamanho.<br>
 Um simples stream pode conter chunks de diferentes tamanhos e tipos.<br>
 <img alt="" src="https://mdn.mozillademos.org/files/15819/Readable%20streams.png" style="height: 452px; width: 1000px;"></p>

<p>Os chunks alocados em um stream são ditos <strong>enqueued</strong> (enfileirados) — isto significa que eles estão aguardando em uma fila prontos para serem lidos. Uma <strong>internal queue </strong>rastreia os chunks que ainda não foram lidos (veja filas internas e estratégias de enfileiramento na sessão abaixo).</p>

<p>Os chunks dentro de um stream são lidos por um <strong>reader </strong>— este processa o dado de um chunk por vez, permitindo fazer qualquer tipo de operação que desejar .O reader com mais outro código de processamento junto é chamado <strong>consumer</strong>.</p>

<p>Há também uma construção que você usará chamada <strong>controller</strong> — cada reader tem um controller associado que lhe permite controlar o stream (por exemplo, cancelá-lo se desejar).</p>

<p>Apenas um reader pode ler um stream por vez; quando um reader é criado e inicia a leitura de um stream (um <strong>active reader</strong>), dizemos que ele está <strong>atrelado</strong> a ele. Se você deseja outro reader para iniciar a leitura de seu stream, você precisa tipicamente cancelar o primeiro reader antes de fazer qualquer coisa (embora você possa usar um stream <strong>tee</strong>, veja Teeing na sessão abaixo)</p>

<p>Observe que há dois tipos diferentes de readable streams. Assim como um readable stream convencional há um tipo chamado byte stream - este é uma versão extendida de um stream convencional para leitura de underlying byte sources (de outra forma conhecido como BYOB, ou "bring your own buffer"). Estes permitem que streams sejam lidos diretamente em um buffer fornecido pelo desenvolvedor, minimizando a cópia necessária. Tal underlying stream (e por extensão, reader e controller) seu código dependerá em primeiro lugar de como o stream foi criado (veja o {{domxref("ReadableStream.ReadableStream()")}} construtor de página).</p>

<div class="warning">
<p><strong>Importante</strong>: Bytes streams não estão implementados ainda em algum lugar, e foram levantadas questões sobre se os detalhes de especificação estão em condições para serem implementados. Isto pode mudar com o tempo.</p>
</div>

<p>Você pode fazer uso dos stream readers já implementados via mecanismos como {{domxref("Response.body")}} como uma requisição, ou com seus próprios streams usando o {{domxref("ReadableStream.ReadableStream()")}} como construtor.</p>

<h2 id="Teeing">Teeing</h2>

<p>Embora um único reader possa ler um stream por vez, é possível dividir um stream em duas cópias idênticas, que podem então serem lidas por dois readers distintos. Isto é chamado <strong>teeing.</strong> </p>

<p>Em JavaScript, isto pode ser alcançado pelo método {{domxref("ReadableStream.tee()")}} — ele retorna um array contendo duas cópias idêniticas o readable stream original, o qual pode então ser lido independentemente por dois readers separados.</p>

<p>Você deve fazê-lo por exemplo em um <a href="/en-US/docs/Web/API/Service_Worker_API">ServiceWorker</a> se deseja pegar a resposta de um servidor e disponibilizar via stream no navegador, mas, também disponibilizá-lo via cache do ServiceWorker. Uma vez que o corpo da resposta não pode ser consumido mais que uma vez, e um stream não pode ser lido por mais de um reader por vez, você precisaria de duas cópias para fazer isto.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15820/tee.png" style="height: 527px; width: 1000px;"></p>

<h2 id="Writable_streams">Writable streams</h2>

<p>Um <strong>writable stream</strong> é o destino o qual você pode escrever dados, representado em JavaScript pelo objeto {{domxref("WritableStream")}}. Ele serve como uma camada de abstração sobre um <strong>underlying sink</strong> — um I/O de baixo-nivel que sincroniza quais dados brutos são escritos.</p>

<p>O dado é escrito para o stream via um <strong>writer, </strong>um chunk por vez. Um chunk pode ter uma infinidade de formas, assim como os chunk em um reader. Você pode usar qualquer código que desejar para produzir chunks prontos para escrever, mais o código associado ao <strong>producer.</strong></p>

<p>Quando um writer é criado e inicia a escrita para um stream (um <strong>active writer</strong>), dizemos estar <strong>locked </strong>(atrelado) a este. Apenas um writer opde escrever em um writable stream por vez. Se deseja outro writer iniciar a escrita em seu stream, você deve tipicamente abortá-lo antes de anexar outro write à ele.</p>

<p>Uma <strong>internal queue</strong> mantém os chunks que foram escritos por um stream mas não foram ainda processados por underlying sink.</p>

<p>Há uma construção que você usará chamada controller — cada writer tem um controller associado que permite a você controlar o stream (por exemplo, abortá-lo se desejado).</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15821/writable%20streams.png" style="height: 452px; width: 1000px;"></p>

<p>Você pode fazer uso de writable streams usando o construtor </p>

<p>You can make use of writable streams using the {{domxref("WritableStream.WritableStream()")}}. Estes atualmente possuem uma disponibilidade limitada nos navegadores.</p>

<h2 id="Pipe_chains">Pipe chains</h2>

<p>A API de Streams torna possível encadear streams (ou pelo menos irá fazer quando os navegadores implementarem a funcionalidade relevante para tal) usando uma estrutura chamada <strong>pipe chain</strong>. Há dois métodos disponíveis na especificação para facilitá-lo:</p>

<ul>
 <li>{{domxref("ReadableStream.pipeThrough()")}} — pipes de stream através do <strong>transform stream</strong>, que é um par compreendido do writable stream que possui dados escritos, e readable stream que então tem os dados lidos dele — ele atua como um tipo de esteira que constantemente pega a entrada de dados e os transforma em um outro estado. Efetivamente o mesmo stream é escrito para então os mesmos valores serem lidos. Um simples exemplo é um decodificador de texto, onde bytes brutos são escritos, e então strings são lidas. Você pode encontrar mais ideias úteis e exemplos na especificação — leia <a href="https://streams.spec.whatwg.org/#ts-model">Transform streams</a> para ideias e <a href="https://streams.spec.whatwg.org/#example-both">this web sockets example</a>.</li>
 <li>{{domxref("ReadableStream.pipeTo()")}} — pipes para um writable stream que atua como um ponto final para a pipe chain.</li>
</ul>

<p>Para iniciar um pipe chain é chamado o <strong>original source</strong>, e no final é chamado <strong>ultimate sink</strong>.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15818/PipeChain.png" style="height: 382px; width: 1000px;"></p>

<div class="note">
<p><strong>Nota</strong>: Esta funcionalidade não está totalmente pensada ainda, embora disponível em muitos navegadores. Até certo ponto espero que a especificação dos writers pode contribuir para algo como uma clase <code>TransformStream</code> para criar facilmente transform stream.</p>
</div>

<h2 id="Backpressure">Backpressure</h2>

<p>Um importante conceito sobre streams é <strong>backpressure</strong> — é um processo pelo qual um stream simples ou uma pipe chain ajusta a velocidade de leitura/escrita. Quando um stream mais tarde na conrrente continua ocupado e não está ainda pronto para aceitar mais chunks, ele envia um sinal de volta através da corrente informar mais tarde o transform stream (ou a fonte original) para diminuir a velocidade de entrega conforme apropriado tal que você não precise terminar com um gargalo em algum lugar.</p>

<p>Para usar backpressure em um ReadableStream, podemos perguntar ao controller pelo tamanho do chunk desejado pelo consumer consultando o atributo {{domxref("ReadableStreamDefaultController.desiredSize")}} no controller. Se estiver muito baixo, nosso ReadableStream pode informar sua underlying source de dados e o backpressure junto a cadeira de stream.</p>

<p>Se mais tarde o consumer novamente deseja receber dados, podemos usar o método pull no stream para informar nossa underlying source para alimentar nosso stream com dados.</p>

<h2 id="Internal_queues_and_queuing_strategies">Internal queues and queuing strategies</h2>

<p>Como mencionado antes, os chunks de um stream que não foram ainda processados e finalizados são mantidos por uma internal queue (fila interna).</p>

<ul>
 <li>No caso de readable stream, esses chunks foram enfileirados mas ainda não lidos.</li>
 <li>No caso do writable stream, esses chunks que foram escritos mas ainda não processados pela underlying sink.</li>
</ul>

<p>Filas internas trabalham com uma <strong>queuing strategy</strong>, o qual dita informar a backpressure baseado na <strong>internal queue state.</strong></p>

<p>Em geral, a estratégia compara o tamanho dos chunks na fila com o valor chamado no <strong>high water mark</strong>, o qual é o total do maior valor de chunk que a fila pode gerenciar de modo realista.</p>

<p>O cálculo realizado é</p>

<pre>high water mark - total size of chunks in queue = desired size</pre>

<p>O <strong>desired size</strong> é o tamanho de chunks que um stream ainda pode aceitar para manter o fluxo do stream menor que o high water mark. Após o cálculo ser efetuado, a geração de chunks terá sua velocidade reduzida ou aumentada conforme apropriado para manter o fluxo do stream o mais rápido possível enquanto mantém o tamanho desejado acima de zero. Se o valor cair para zero (ou menor no caso de writable streams), significa que os chunks estão sendo gerados mais rápido que o stream pode lidar, o qual resulta em problemas.</p>

<div class="note">
<p><strong>Nota</strong>: O que ocorre no caso em que valor desejado for zero ou negativo não foi definido na especificação até o momento. Paciência é uma virtude. </p>
</div>

<p>Como um exemplo, vamos pegar um chunk de tamanho 1, e uma high water mark de 3. Isto significa que até 3 chunks podem ser enfileirados antes que a high water mark seja alcançada e o  backpressure aplicado.</p>
