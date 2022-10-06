---
title: Autenticação HTTP
slug: Web/HTTP/Authentication
tags:
  - Autenticação
  - Controle de Acesso
  - Guía
  - Segurança
translation_of: Web/HTTP/Authentication
---
<div>{{HTTPSidebar}}</div>

<p class="summary">O HTTP fornece uma estrutura geral para controle de acesso e autenticação. A autenticação HTTP mais comum é fundamentada no esquema "Basic". Esta página introduz a estrutura HTTP para autenticação e mostra como restringir acesso ao seu servidor usando o esquema "Basic".</p>

<h2 id="A_estrutura_geral_de_autenticação_HTTP">A estrutura geral de autenticação HTTP</h2>

<p>{{RFC("7235")}} define a estrutura de autenticação HTTP que pode ser usada por um servidor para definir uma solicitação ("{{glossary("challenge")}}") do cliente e para um cliente fornecer informações de autenticação. A pergunta e resposta segue um caminho como esse: O servidor responde ao cliente com uma mensagem do tipo {{HTTPStatus("401")}} (Não autorizado) e fornece informações de como autorizar com um cabeçalho de resposta {{HTTPHeader("WWW-Authenticate")}} contendo ao menos uma solicitação. Um cliente que deseja autenticar-se com um servidor pode fazer isso incluindo um campo de cabeçalho de solicitação {{HTTPHeader("WWW-Authenticate")}} com as credenciais. Usualmente um cliente apresentará uma solicitação de senha ao usuário e, em seguida, emitirá uma solicitação incluindo o cabeçalho <code>Authorization</code> correto.</p>

<p><img alt="A sequence diagram illustrating HTTP messages between a client and a server lifeline." src="https://mdn.mozillademos.org/files/14689/HTTPAuth.png" style="height: 335px; width: 710px;" title="Sequence Diagram of Client-server HTTP Authentication"></p>

<p>No caso de uma autorização "Basic" (como a mostrada na figura), a troca <strong>deve</strong> acontecer por meio de uma conexão HTTP (TLS) para ser segura.</p>

<h3 id="Autenticação_de_Proxy">Autenticação de Proxy</h3>

<p>O mesmo mecanismo de solicitação e resposta pode ser usado para uma <em>autenticação de proxy</em>. Neste caso, é um proxy intermediário que requer autenticação. Como ambas autenticação de recurso e autenticação de proxy podem coexistir, um conjunto diferente de códigos de cabeçalhos e status torna-se necessário. No caso de proxys, o código de status de solicitação é {{HTTPStatus("407")}} (Autenticação de Proxy necessária), o cabeçalho de resposta {{HTTPHeader("Proxy-Authenticate")}} contém ao menos uma solicitação aplicável para o proxy, e o cabeçalho de pedido {{HTTPHeader("Proxy-Authorization")}} é usado para fornecer as credenciais ao servidor proxy.</p>

<h3 id="Acesso_proibido">Acesso proibido</h3>

<p>Se um servidor proxy recebe credenciais válidas, mas que não são adequadas para ter acesso a um determinado recurso, o servidor responderá com o código de status <code>Forbidden</code> {{HTTPStatus("403")}}. Ao contrário de {{HTTPStatus("401")}} <code>Unauthorized</code> ou {{HTTPStatus("407")}} <code>Proxy Authentication Required</code>, a autenticação é impossível para este usuário.</p>

<h3 id="Autenticação_de_imagens_de_origem_cruzada">Autenticação de imagens de origem cruzada</h3>

<p>Um potencial buraco de segurança que foi corrigido recentemente pelos navegadores é a autenticação de imagens cross-site (origem cruzada). Do <a href="/en-US/docs/Mozilla/Firefox/Releases/59">Firefox 59</a> em diante, recursos de imagem carregados de diferentes origens não são mais capazes de adicionar diálogos de autenticação HTTP ({{bug(1423146)}}), impedindo que as credencias do usuário sejam roubadas se invasores conseguissem incorporar uma imagem arbitrária em uma página de terceiros.</p>

<h3 id="A_codificação_de_caracteres_da_autenticação_HTTP">A codificação de caracteres da autenticação HTTP</h3>

<p>Os navegadores usam a codificação <code>utf-8</code> para nomes de usuários e senhas. Firefox usava <code>ISO-8859-1</code>, mas alterou para <code>utf-8</code> por questões de compatiblidade com outros navegadores, assim como para evitar os potenciais problemas descritos em {{bug(1419658)}}.</p>

<p> </p>

<h3 id="Cabeçalhos_WWW-Authenticate_e_Proxy-Authenticate">Cabeçalhos <code>WWW-Authenticate</code> e <code>Proxy-Authenticate</code></h3>

<p>Os cabeçalhos de resposta {{HTTPHeader("WWW-Authenticate")}} e {{HTTPHeader("Proxy-Authenticate")}} definem o método de autenticação que deve ser usado para ganhar acesso a um recurso. Eles precisam especificar que esquema de autenticação é usado para que o cliente que deseja autorizar saiba como fornecer as credenciais. A sintaxe para esses cabeçalhos é a seguinte:</p>

<pre class="syntaxbox">WWW-Authenticate: &lt;type&gt; realm=&lt;realm&gt;
Proxy-Authenticate: &lt;type&gt; realm=&lt;realm&gt;
</pre>

<p><code>&lt;type&gt;</code> é o esquema de autenticação ("Basic" é o esquema mais comum e será introduzido abaixo). O <em>realm</em> é usado para indicar a área protegida ou o escopo de proteção. Poderia ser uma mensagem parecida com "Access to the staging site" (Acesso ao site de teste), portanto o usuário saberá qual área ele está tentando acessar.</p>

<h3 id="Cabeçalhos_Authorization_e_Proxy-Authorization">Cabeçalhos <code>Authorization</code> e <code>Proxy-Authorization</code></h3>

<p>Os cabeçalhos de solicitação {{HTTPHeader("Authorization")}} e {{HTTPHeader("Proxy-Authorization")}} contém as credenciais para autenticar um agente de usuário com um servidor proxy. Aqui o tipo é novamente necessário, seguido pelas credenciais, que podem ser codificadas ou criptografadas dependendo do esquema de autenticação usado.</p>

<pre class="syntaxbox">Authorization: &lt;type&gt; &lt;credentials&gt;
Proxy-Authorization: &lt;type&gt; &lt;credentials&gt;
</pre>

<h3 id="Esquemas_de_autenticação">Esquemas de autenticação</h3>

<p>A estrutura geral de autenticação HTTP é usado por vários esquemas de autenticação. Os esquemas podem divergir na força da segurança e na disponibilidade do software cliente ou servidor.</p>

<p>O esquema mais comum de autenticação é o "Basic", que é introduzido com mais detalhes abaixo. IANA mantém uma <a class="external external-icon" href="https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml">lista de esquemas de autenticação</a>, mas existem outros esquemas oferecidos por serviços de hospedagem, como Amazon AWS. Os esquemas de autenticação comuns incluem:</p>

<ul>
 <li><strong>Basic</strong> (veja {{rfc(7617)}}, credenciais codificadas em base64. Veja abaixo mais informações.),</li>
 <li><strong>Bearer</strong> (veja {{rfc(6750)}}, tokens bearer (de portador) para acessar recursos protegidos por OAuth 2.0),</li>
 <li><strong>Digest</strong> (veja {{rfc(7616)}}, apenas hash md5 é suportado no Firefox, veja {{bug(472823)}} para o suporte de encriptação SHA),</li>
 <li><strong>HOBA</strong> (veja {{rfc(7486)}} (esboço), <strong>H</strong>TTP <strong>O</strong>rigin-<strong>B</strong>ound <strong>A</strong>uthentication (Autenticação Vinculada à Origem HTTP), baseado em assinatura digital),</li>
 <li><strong>Mutual</strong> (veja <a href="https://tools.ietf.org/html/draft-ietf-httpauth-mutual-11">draft-ietf-httpauth-mutual</a>),</li>
 <li>
  <p><strong>AWS4-HMAC-SHA256</strong> (veja <a href="http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html">Documentação AWS</a>).</p>
 </li>
</ul>

<h2 id="Esquema_Basic_de_autenticação">Esquema Basic de autenticação</h2>

<p>O esquema "Basic" de autenticação HTTP é definido em {{rfc(7617)}}, transmitindo credenciais como pares de ID/senhas de usuários, codificadas usando base64.</p>

<h3 id="Segurança_da_autenticação_básica">Segurança da autenticação básica</h3>

<p>Como o ID e senha do usuário são transmitidos através da rede como texto claro (é codificado em base64, mas base64 é uma codificação reversível), o esquema básico de autenticação não é seguro. HTTPS / TLS devem ser usados em conjunto com autenticação básica. Sem esses aprimoramentos de segurança adicionais, a autenticação básica não deve ser usada para proteger informação sensível ou valiosa.</p>

<h3 id="Restringindo_acesso_no_Apache_e_autorização_básica">Restringindo acesso no Apache e autorização básica</h3>

<p>Para proteger com senha um diretório em um servidor Apache, você precisará de um arquivo <code>.htaccess</code> e um <code>.htpasswd</code>.</p>

<p>O arquivo <code>.htaccess</code> normalmente parece com isso:</p>

<pre>AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user</pre>

<p>O arquivo <code>.htaccess</code> referencia um arquivo <code>.htpasswd</code> em que cada linha contém um nome de usuário e senha separados por dois pontos (":"). Você não pode ver as senhas reais porque foram <a href="https://httpd.apache.org/docs/2.4/misc/password_encryptions.html">criptografadas</a> (em md5, neste caso). Note que você pode renomear seu arquivo <code>.htpasswd</code> caso queira, mas tenha em mente que este arquivo não deve ser acessado por ninguém. (Apache normalmente é configurado para previnir acesso aos arquivos <code>.ht*</code>).</p>

<pre>aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
</pre>

<h3 id="Restringindo_acesso_no_nginx_e_autenticação_básica">Restringindo acesso no nginx e autenticação básica</h3>

<p>No nginx, você precisará especificar uma área que que você protegerá e a diretiva <code>auth_basic</code> que fornece o nome para a área protegida por senha. A diretiva <code>auth_basic_user_file</code> aponta para um arquivo .htpasswd contentdo as credenciais do usuário criptografadas, assim como no exemplo Apache acima.</p>

<pre>location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}</pre>

<h3 id="Acesso_usando_as_credenciais_na_URL">Acesso usando as credenciais na URL</h3>

<p>Vários clientes também permitem que você evite o prompt de login usando uma URL codificada contendo o nome de usuário e senha como esta:</p>

<pre class="example-bad">https://username:password@www.example.com/</pre>

<p><strong>O uso destas URLs está obsoleto</strong>. No Chrome, a parte <code>username:password@</code> nas URLs é <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7">retirada</a> por razões de segurança. No Firefox, é verificado se o site realmente Airequer autenticação e, se não, Firefox alertará o usuário com uma mensagem "Você está prestes a logar no site “www.example.com” com seu nome de usuário "username", mas o website não requer autenticação. Isso pode ser uma tentativa de enganá-lo".</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("WWW-Authenticate")}}</li>
 <li>{{HTTPHeader("Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
 <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}</li>
</ul>
