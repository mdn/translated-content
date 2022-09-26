---
title: O que é um nome de domínio?
slug: Learn/Common_questions/What_is_a_domain_name
translation_of: Learn/Common_questions/What_is_a_domain_name
---
<div class="summary">
<p>Nesse artigo examinaremos nomes de domínios: o que são, como são estruturados, e como conseguir um.</p>
</div>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Primeiro você precisa conhecer <strong><a href="https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Como_a_internet_funciona">como a Internet funciona</a></strong> e entender <strong><a href="/en-US/Learn/Understanding_URLs">what URLs are</a>.</strong></td>
  </tr>
  <tr>
   <th scope="row">Objetivos:</th>
   <td>Aprender o que são <strong>"nomes de domínios"</strong>, como funcionam, e porquê são importantes.</td>
  </tr>
 </tbody>
</table>

<h2 id="Sumário">Sumário</h2>

<p><span class="seoSummary">"Nomes de Domínios" são uma parte fundamental da infraestrutura da Internet.  Eles provêm um endereço legível para qualquer  servidor web disponível na Internet.</span></p>

<p>Qualquer computador conectado na Internet pode ser alcançado através de um endereço {{Glossary("IP")}} público, consistido de 32 bits para IPv4 (eles são, normalmente, escritos com quatro grupos de três números entre 0 e 255, separados por pontos (p.e., <code>173.194.121.32</code>) ou consistidos de 128 bits para IPv6 (eles são normalmente escritos com oito grupos de 4 números hexadecimais, separados por dois pontos (p.e., <code>2027:0da8:8b73:0000:0000:8a2e:0370:1337</code>). Computadores podem manipular esses endereços facilmente, mas as pessoas tem dificuldade em descobrir quem está executando o servidor ou que serviço o site oferece. Endereços de IP são difíceis de lembrar e podem mudar com o tempo. Para resolver todos esses problemas nós usamos endereços legíveis chamados domain names (nomes de domínio).</p>

<h2 id="Active_Learning">Active Learning</h2>

<p><em>There is no active learning available yet. <a href="/en-US/docs/MDN/Getting_started">Please, consider contributing</a>.</em></p>

<h2 id="Deeper_dive">Deeper dive</h2>

<h3 id="Estrutura_dos_domain_names">Estrutura dos domain names</h3>

<p>Um "nome de domínio" tem uma estrutura simples feita de várias partes (pode ser apenas uma parte, duas, três...), separados por pontos e<strong> lidos da direita para a esquerda</strong>:</p>

<p><img alt="Anatomy of the MDN domain name" src="https://mdn.mozillademos.org/files/11229/structure.png" style="height: 76px; width: 252px;"></p>

<p>Cada uma dessas partes fornece informações específicas sobre todo o domain name.</p>

<dl>
 <dt>{{Glossary("TLD")}} (Top-Level Domain).</dt>
 <dd>O TLD fornece as informações mais genéricas. TLDs informa aos usuários o propósito geral do serviço por trás do nome de domínio. Os TLDs mais genéricos (.com, .org, .net) não requer web services para atender a critérios rigorosos, mas alguns TLDs impõem políticas mais rigorosas. Por exemplo, TLDs locais tais como .us, .fr, or .sh podem exigir que o serviço seja fornecido em um determinado idioma ou hospedado em um determinado país.</dd>
 <dt>Label (ou componente)</dt>
 <dd>Os labels são os que seguem o TLD. Um label pode ser qualquer coisa, de uma letra a uma frase completa. O label localizado a direita antes do TLD pode também ser referido como um <em>Domínio de Nível Secundário</em> (SLD). Um <em>nome de domínio</em> pode ter muitos labels, não é obrigatório nem necessário ter 3 labels para formar um nome de domínio. Por exemplo, www.inf.ed.ac.uk é um nome de domínio correto. Ao controlar a parte "superior" de um nome de domínio (p.e. <a href="https://mozilla.org">mozilla.org</a>), pode-se criar outros nomes de domínios (às vezes chamados de "subdomínios") (p.e. <a href="https://developer.mozilla.org">developer.mozilla.org</a>).</dd>
</dl>

<h3 id="Comprando_um_nome_de_domínio">Comprando um nome de domínio</h3>

<h4 id="Quem_possui_um_nome_de_domínio">Quem possui um nome de domínio?</h4>

<p>Você não pode “comprar um nome de domínio”. Você paga pelo direito de usar um nome de domínio por um ano ou mais. Você pode renovar seu direito, e sua renovação tem prioridade sobre as aplicações de outras pessoas. Mas você nunca possui o nome de domínio.</p>

<p>As empresas chamadas registradoras usam registros de nome de domínio para acompanhar as informações técnicas e administrativas que conectam você a seu nome de domínio.</p>

<div class="note">
<p><strong>Nota : </strong>Alguns nomes de domínios podem não ter um registrador encarregado de acompanhar. Por exemplo, todo o nome sob o domínio .fire é gerenciado pela Amazon.</p>
</div>

<h4 id="Encontrando_um_nome_de_domínio_disponível">Encontrando um nome de domínio disponível</h4>

<p>Para descobrir se um determinado domain name está disponível,</p>

<ul>
 <li>Ir até um site registrador de nome de domínio. A maioria deles fornece um serviço “whois” que diz se seu nome de domínio está disponível.</li>
 <li>Alternativamente, se você usa um sistema com shell embutido nele, digite um comnaod <code>whois</code> nele, como mostrado aqui para <code>mozilla.org</code>:</li>
</ul>

<pre>$ whois mozilla.org
Domain Name:MOZILLA.ORG
Domain ID: D1409563-LROR
Creation Date: 1998-01-24T05:00:00Z
Updated Date: 2013-12-08T01:16:57Z
Registry Expiry Date: 2015-01-23T05:00:00Z
Sponsoring Registrar:MarkMonitor Inc. (R37-LROR)
Sponsoring Registrar IANA ID: 292
WHOIS Server:
Referral URL:
Domain Status: clientDeleteProhibited
Domain Status: clientTransferProhibited
Domain Status: clientUpdateProhibited
Registrant ID:mmr-33684
Registrant Name:DNS Admin
Registrant Organization:Mozilla Foundation
Registrant Street: 650 Castro St Ste 300
Registrant City:Mountain View
Registrant State/Province:CA
Registrant Postal Code:94041
Registrant Country:US
Registrant Phone:+1.6509030800
</pre>

<p>Como você pode ver, eu não posso registrar <code>mozilla.org</code> porque a Mozilla Foundation já registrou.</p>

<p>Por outro lado, vamos ver se eu poderia registrar <code>afunkydomainname.org</code>:</p>

<pre>$ whois afunkydomainname.org
NOT FOUND
</pre>

<p>Como você pode ver, o domínio não existe no banco de dados <code>whois</code> (neste momento em que escrevo), então poderíamos pedir para registrá-lo. Bom saber!</p>

<h4 id="Obtendo_um_nome_de_domínio">Obtendo um nome de domínio</h4>

<p>O processo é bastante simples:</p>

<ol>
 <li>Ir para o site de um registrador.</li>
 <li>Geralmente há um apelo chamativo “Obeter um domain name” call to action. Clique nele.</li>
 <li>Preencher o formulário com todos os detalhes requeridos. Certifique-se especialmente de que você não digitou incorretamente o domain name desejado. Uma vez pago, é tarde demais!</li>
 <li>O registrador informará quando o domain name estiver registrado corretamente. Dentro de algumas horas, todos os servidores de DNS receberão suas informações de DNS.</li>
</ol>

<div class="note">
<p><strong>Nota:</strong> Este tempo é frequentemente chamado de <strong>tempo de propagação.</strong> No entanto, este termo não é preciso, pois a atualização não está se propagando (top → down). Os servidores DNS consultados pelo seu computador (abaixo) são aqueles que buscam as informações do servidor autoritativo (superior) quando precisam.</p>
</div>

<h4 id="Atualização_de_DNS">Atualização de DNS</h4>

<p>Bancos de dados DNS são armazenados em todos os servidores DNS em todo o mundo, e todos esses servidores referem-se a alguns chamados "servidores de nome autoritativo" ou "servidores DNS de  nível superior". Sempre que seu registrador cria ou atualiza qualquer informação para um determinado domínio, a informação deve ser atualizada em todo banco de dados DNS. Cada servidor DNS que conhece um determinado domínio armazena as informações por algum tempo antes de serem automaticamente invalidadas e atualizadas (o servidor DNS cosulta novamente um servidor autoritativo). Assim, leva algum tempo para que os servidores DNS que conhecem esse nome de domínio obtenham as informações atualizadas.</p>

<div class="note">
<p><strong>Note :</strong> This time is often called <strong>propagation time</strong>. However this term is not precise since the update is not propagating itself (top → down). DNS servers queried by your computer (down) are the ones that fetch the information from the authoritative server (top) when they need it.</p>
</div>

<h3 id="Como_funciona_uma_solicitação_de_DNS">Como funciona uma solicitação de DNS?</h3>

<p> </p>

<p>Como já vimos, quando você deseja exibir uma página da Web em seu navegador, é mais fácil digitar um nome de domínio do que um endereço IP. Vamos dar uma olhada no processo:</p>

<ol>
 <li>Digite mozilla.org na barra de localização do seu navegador.</li>
 <li>Seu navegador pergunta ao seu computador se ele já reconhece o endereço IP identificado por esse nome de domínio (usando um cache DNS local). Em caso afirmativo, o nome é traduzido para o endereço IP e o navegador negocia o conteúdo com o servidor da Web. Fim da história.</li>
 <li>Se o seu computador não sabe qual IP está por trás do nome mozilla.org, ele vai perguntar a um servidor DNS, cujo trabalho é precisamente informar ao seu computador qual endereço IP corresponde a cada nome de domínio registrado.</li>
 <li>Agora que o computador conhece o endereço IP solicitado, seu navegador pode negociar o conteúdo com o servidor da web.</li>
</ol>

<p><img alt="Explanation of the steps needed to obtain the result to a DNS request" src="https://mdn.mozillademos.org/files/8961/2014-10-dns-request2.png" style="height: 702px; width: 544px;"></p>

<h2 id="Próximos_passos">Próximos passos</h2>

<p>Ok, conversamos muito sobre processos e arquitetura. Hora de seguir em frente.</p>

<ul>
 <li>Se você quer se envolver, é um bom momento para começar a investigar o design e explorar a <a href="/en-US/Learn/Anatomy_of_a_web_page">anatomia de uma página da web.</a></li>
 <li>É importante notar também que alguns aspectos da construção de um site custam dinheiro. Por favor, <a href="/en-US/docs/Learn/How_much_does_it_cost">consulte quanto custa construir um site</a>.</li>
 <li>Ou leia mais sobre o <a href="http://en.wikipedia.org/wiki/Domain_name">nome de domínio</a> na Wikipedia.</li>
 <li>Você também pode encontrar <a href="https://howdns.works/">aqui </a>uma explicação divertida e colorida de como o DNS funciona.</li>
</ul>
