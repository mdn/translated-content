---
title: Controlando a verificação ortográfica em formulários HTML
slug: Web/HTML/Global_attributes/spellcheck
tags:
  - Gerenciamento de configuração
  - HTML
  - Intermediário
translation_of: Web/HTML/Global_attributes/spellcheck
translation_of_original: Web/HTML/Controlling_spell_checking_in_HTML_forms
original_slug: Web/HTML/Controlando_verificacao_ortografica_em_formularios_HTML
---
<p><span class="seoSummary">{{ gecko_minversion_header("1.8.1") }} Firefox 2 introduz suporte à verificação ortográfica  para áreas de texto e campos de texto em formulários web.</span> O usuário pode especificar usando a interface about:config se a verificação ortográfica é ou não habilitada e se checará áreas de texto e campos de texto ou somente áreas de texto.</p>

<p>Por padrão, áreas de texto e documentos  <code><a href="/pt-BR/docs/Web/API/Document/designMode">designMode</a></code> tem ortografia verificada e caixas de texto de uma única linha não tem. Isto é assim porque os usuários do Firefox podem se distrair ou se incomodar se o Firefox marcar coisas como IDs de usuários ou endereços de e-mail como erros de ortografia.</p>

<p>Porém, podem haver situações nas quais este comportamento não é necessariamente apropriado. Por exemplo, se uma área de texto tem o objetivo de ser usada para editar HTML ou servir de entrada para outro tipo de texto que não seja semântico, a verificação ortográfica seria um entrave em vez de uma ajuda. Da mesma forma, podem haver casos nos quais um site faça uma recomendação de que o Firefox habilite a verificação ortográfica para um campo de texto específico, como campos de busca ou assunto/título de e-mail, mesmo estes sendo geralmente campos de texto de uma única linha.</p>

<p>Se um site deseja recomendar o uso ou não de verificação ortográfica para um elemento<code> &lt;input&gt;</code> específico, ele pode usar o atributo <code>spellcheck</code>, espefcificando o valor <code>true</code> para recomendar o uso da verificação ortográfica ou <code>false</code> para recomendar o não uso.</p>

<p>Tenha em mente que a recomendação do site pode ser ignorada pelo usuário se o mesmo tiver desativado a verificação ortográfica setando a configuração <code>layout.spellcheckDefault</code> para 0. Se a configuração <code>layout.spellcheckDefault</code>  tiver qualquer outro valor, as recomendações serão consideradas.</p>

<p>Você pode codificar um campo de texto linha-única (elemento HTML <code>&lt;input&gt;</code>) habilitando a verificação ortográfica da seguinte forma:</p>

<pre class="eval"><span class="nowiki">&lt;input type="text" size="50" spellcheck="true"&gt;</span>
</pre>

<p>Da mesma forma, você pode desabilitar a verificação ortográfica em uma área de texto (elemento <code>&lt;textarea&gt;</code>) da seguinte forma:</p>

<pre class="eval"><span class="nowiki">&lt;textarea spellcheck="false"&gt;&lt;/textarea&gt;</span>
</pre>

<p>Você pode controlar um documento em seu <code>designMode</code> (tipicamente usado para implementar edição de texto rica) setando o atributo <code>spellcheck</code>  no elemento <code>&lt;body&gt;</code> de um documento.</p>

<p>Você também pode aplicar o atributo <code>spellcheck</code> em outros elementos, tais como os elementos <code>&lt;span&gt;</code> e <code>&lt;div&gt;</code>, e nesse caso todos os elementos <code>&lt;input&gt;</code> dentro dessas tags irão herdar esta configuração; elementos <code>&lt;input&gt;</code> que não tem um atributo <code>spellcheck</code> setado, irão herdar a configuração de verificação ortográfica de seu elemento pai. Se não houver nenhuma configuração setada na cadeia antecessora de elementos, a configuração padrão será usada.</p>

<p>Por exemplo:</p>

<pre class="brush: html">&lt;div spellcheck="true"&gt;
  &lt;label&gt;Escreva algo: &lt;/label&gt;&lt;input type="text" size="50"&gt;
  &lt;br&gt;
  &lt;label&gt;Escreva outra coisa: &lt;/label&gt;&lt;input type="text" size="50"&gt;
&lt;/div&gt;
&lt;br&gt;
&lt;label&gt;Mais alguma coisa: &lt;/label&gt;&lt;input type="text" size="50"&gt;
</pre>

<p>Neste exemplo HTML acima, os dois primeiros campos de texto terão a verificação ortográfica e o terceiro não terá.</p>

<p>Iniciando no Gecko 9.0 {{ geckoRelease("9.0") }}, a verificação ortográfica usa o atributo  {{ htmlattrxref("lang", "input") }} do elemento {{ HTMLElement("input") }}  para determinar o idioma padrão da verificação ortográfica. Se o {{ HTMLElement("input") }} não tiver o atributo <code>lang</code> setado, esse atributo é procurado em cada elemento pai superior até chegar ao elemento raiz do documento.</p>

<p>Fazendo assim, se o usuário tem os dicionários de Português e Inglês instalados, e um elemento editável tiver o atributo <code>lang="en"</code>, o dicionário inglês será automaticamente usado para este elemento.</p>

<p>Por exemplo:</p>

<pre class="brush: html">&lt;html lang="pt-BR"&gt;
&lt;body&gt;
  &lt;textarea&gt;&lt;/textarea&gt;
  &lt;textarea lang="en"&gt;&lt;/textarea&gt;
  &lt;div lang="ru"&gt;
    &lt;textarea&gt;&lt;/textarea&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>No exemplo HTML acima, o primeiro {{ HTMLElement("textarea") }} terá ortografia checada em Português, o segundo em Inglês e o terceiro em Russo.</p>

<p>Se um elemento especifica o idioma e o usuário não tem dicionário instalado para este idioma, a verificação ortográfica fica desabilitada por padrão, embora o usuário possa escolher por habilitá-la manualmente.</p>
