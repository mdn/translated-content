---
title: 'Tutorial Django Parte 9: Trabalhando com formulários'
slug: Learn/Server-side/Django/Forms
translation_of: Learn/Server-side/Django/Forms
---
<div> {{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}</div>

<p class="summary">Neste tutorial, vamos te mostrar como trabalhar com formulários HTML no Django e, em particular, a maneira mais fácil de programar formulários para criar, alterar e excluir instâncias de modelos. Como parte desta demonstração, vamos estender o site da <a href="/pt-BR/docs/Learn/Server-side/Django/Tutorial_website_biblioteca_local">BibliotecaLocal</a> para que bibliotecários possam renovar reservas e criar, alterar e excluir autores usando nossos próprios formulários em vez do "admin" do Django.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Completar todos os tópicos anteriores deste tutorial, incluindo <a href="/en-US/docs/Learn/Server-side/Django/authentication_and_sessions">Django Tutorial Parte 8: Autenticação e Permissões de Usuário</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>
    <p>Entender como programar formulários para obter informações dos usuários e atualizar a base de dados. Entender como as <em>views</em> genéricas de edição de formulários baseadas em classes podem simplificar a criação de formulários para trabalhar com um único <em>model</em>.</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Visão_Geral">Visão Geral</h2>

<p>Um <a href="/pt-BR/docs/Web/Guide/HTML/Forms">Formulário HTML</a> é um grupo de um ou mais campos/<em>widgets</em> em uma página web, que podem ser utilizados para coletar informações dos usuários para submetê-las a um servidor. Formulários são um mecanismo flexível para coletar input de usuário porque há <em>widgets</em> adequados para entrada de variados tipos de dados, incluindo caixas de texto, caixas de seleção, botões radiais, seletores de data etc. Formulários são também um meio relativamente seguro de compartilhar dados com o servidor, pois nos permitem enviar dados em requisições <code>POST</code> com proteção contra ataques maliciosos <strong>CSRF</strong> (<em><strong>Cross-Site Request Forgery</strong></em> - em inglês, falsificação de solicitação entre sites).</p>

<p>Apesar de ainda não termos criado formulários até o momento neste tutorial, já os encontramos na página do Django Admin — por exemplo, a captura de tela abaixo mostra um formulário para editar um dos nossos modelos de <a href="/pt-br/docs/Learn/Server-side/Django/Models">Livros</a>, incluindo algumas listas de seleção e editores de texto.</p>

<p><img alt="Admin Site - Book Add" src="https://mdn.mozillademos.org/files/13979/admin_book_add.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>Trabalhar com formulários pode ser complicado! Desenvolvedores precisam escrever HTML para o formulário, validar e limpar dados submetidos ao servidor (e possivelmente também ao navegador), programar mensagens de erro no formulário para informar o usuário de quaisquer preenchimentos inválidos, lidar com os dados quando enviados com sucesso e, finalmente, mostrar ao usuário algum indicativo de sucesso. Os <em>Django Forms </em>adiantam boa parte desses passos disponibilizando uma estrutura que permite a você definir formulários e seus campos programaticamente, e então utilizar esses objetos tanto para gerar o código HTML do formulário como para cuidar de boa parte da validação e interação de usuário.</p>

<p>Neste tutorial, vamos te mostrar alguns dos métodos para se criar e trabalhar com formulários e, em particular, como as <em>views</em> genéricas de edição de formulários podem reduzir significativamente o seu trabalho ao criar formulários para manipular seus <em>models</em>. Ao longo do caminho, vamos estender nossa aplicação <em>LocalLibrary </em>adicionando um formulário que permita que bibliotecários renovem locações de livros, e vamos construir páginas para criar, alterar e excluir livros e autores (reproduzindo uma versão básica do formulário exibido acima para alterar livros).</p>

<h2 id="Formulários_HTML">Formulários HTML</h2>

<p>Antes de mais nada, um breve resumo de <a href="/pt-br/docs/Learn/HTML/Forms">Formulários HTML</a>. Considere um formulário HTML simples, com um único campo de texto para entrada do nome de uma "equipe", e sua respectiva legenda:</p>

<p><img alt="Simple name field example in HTML form" src="https://mdn.mozillademos.org/files/14117/form_example_name_field.png" style="border-style: solid; border-width: 1px; display: block; height: 44px; margin: 0px auto; width: 399px;"></p>

<p>O formulário é definido no HTML como uma coleção de elementos dentro das tags <code>&lt;form&gt;...&lt;/form&gt;</code>, contendo ao menos um elemento <code>input</code> do tipo <code>type="submit"</code>.</p>

<pre class="brush: html">&lt;form action="/team_name_url/" method="post"&gt;
    &lt;label for="team_name"&gt;Enter name: &lt;/label&gt;
    &lt;input id="team_name" type="text" name="name_field" value="Default name for team."&gt;
    &lt;input type="submit" value="OK"&gt;
&lt;/form&gt;</pre>

<p>Apesar de aqui nós termos um único para inserir o nome da equipe, um formulário pode ter qualquer quantidade de outros elementos de entrada e suas respectivas legendas. O atributo <code>type</code> de um campo define que tipo de widget será exibido. O <code>name</code> e o <code>id</code> de cada campo são utilizados para identificá-lo no JavaScript/CSS/HTML, enquanto <code>value</code> define o valor preenchido inicialmente no campo quando ele é exibido pela primeira vez. A legenda da equipe é especificada usando a tag <code>label</code> (veja "Enter name" na imagem acima), com um atributo <code>for</code> contendo o valor de <code>id</code> do <code>input</code> a ele associado.</p>

<p>A entrada <code>submit</code> será exibida como um botão (por padrão) que pode ser pressionado pelo usuário para enviar ao servidor os dados preenchidos em todos os outros elementos de entrada naquele formulário (neste caso, apenas <code>team_name</code>). Os atributos do formulário definem o método HTTP (<code>method</code>) utilizado para enviar os dados e o destino para esses dados no servidor (<code>action</code>):</p>

<ul>
 <li><code>action</code>: O recurso/URL para onde os dados devem ser enviados para processamento quando o formulário é enviado. Se isso não estiver configurado (ou configurado para uma string vazia), o formulário será enviado de volta para URL da página atual.</li>
 <li><code>method</code>: O método HTTP method utilizado para enviar os dados: <em>post</em> or <em>get</em>.
  <ul>
   <li>O método <code>POST</code> deve sempre ser utilizado se os dados forem resultar em uma alteração no banco de dados do servidor, pois é mais resistente a ataques de falsificação de solicitação entre sites.</li>
   <li>O método <code>GET</code> deve ser utilizado somente para formulários que não alteram dados de usuário (um formulário de busca, por exemplo). Ele é recomendado para quando você quiser poder favoritar ou compartilhar a URL.</li>
  </ul>
 </li>
</ul>

<p>O papel do servidor é primeiramente carregar o estado inicial do formulário — seja contendo campos em branco ou preenchidos com valores iniciais. Após o usuário clicar no botão de envio, o servidor receberá do navegador os dados do formulário preenchido e deverá validar as informações. Se o formulário contiver dados inválidos, o servidor deverá exibir o formulário novamente, desta vez já com os valores enviados pelo usuário nos campos preenchidos corretamente, mais uma mensagem descrevendo o problema encontrado em cada campo considerado inválido. Uma vez que o servidor receber uma requisição do formulário com todos os dados válidos, poderá exercer a ação apropriada (por exemplo, salvar os dados, retornar o resultado de uma busca, subir um arquivo etc) e então notificar o usuário.</p>

<p>Como você pode imaginar, as ações de criar o HTML, validar os dados recebidos, re-exibir os dados enviados com mensagens de erro se necessário e realizar a operação desejada com os dados válidos podem todas tomar bastante tempo e esforço. O Django torna tudo isso muito mais fácil, adiantando parte do "trabalho braçal" e código repetitivo!</p>

<h2 id="Processo_de_manipulação_de_formulários_Django">Processo de manipulação de formulários Django</h2>

<p>O tratamento de formulários do Django usa todas as mesmas técnicas que aprendemos nos tutoriais anteriores (para exibir informações sobre nossos modelos): a view recebe uma solicitação, executa todas as ações necessárias, incluindo a leitura de dados dos modelos, gera e retorna uma página HTML ( de um modelo, no qual passamos um <em>contexto </em>que contém os dados a serem exibidos). O que torna as coisas mais complicadas é que o servidor também precisa processar dados fornecidos pelo usuário e exibir novamente a página se houver algum erro.</p>

<p>Um fluxograma do processo de como o Django lida com solicitações de formulário é mostrado abaixo, começando com uma solicitação para uma página contendo um formulário (mostrado em verde).</p>

<p><img alt="Updated form handling process doc." src="https://mdn.mozillademos.org/files/14205/Form%20Handling%20-%20Standard.png" style="display: block; height: 569px; margin: 0px auto; width: 800px;"></p>

<p>Com base no diagrama acima, as principais coisas que o manuseio de formulários do Django faz são:</p>

<ol>
 <li>Exiba o formulário padrão na primeira vez em que for solicitado pelo usuário
  <ul>
   <li>O formulário pode conter campos em branco (por exemplo, se você estiver criando um novo registro) ou pode ser preenchido previamente com valores iniciais (por exemplo, se você estiver alterando um registro ou tiver valores iniciais padrão úteis).</li>
   <li>O formulário é referido como <em>unbound</em> neste momento, porque não está associado a nenhum dado inserido pelo usuário (embora possa ter valores iniciais).</li>
  </ul>
 </li>
 <li>Receba dados de uma solicitação de envio e vincule-os ao formulário.
  <ul>
   <li>Vincular dados ao formulário significa que os dados inseridos pelo usuário e quaisquer erros estão disponíveis quando precisamos exibir novamente o formulário.</li>
  </ul>
 </li>
 <li>Limpe e valide os dados.
  <ul>
   <li>A limpeza dos dados executa a higienização da entrada (por exemplo, removendo caracteres inválidos que podem ser usados para enviar conteúdo malicioso ao servidor) e os converte em tipos consistentes de Python.</li>
   <li>A validação verifica se os valores são apropriados para o campo (por exemplo, estão no período certo, não são muito curtos ou muito longos etc.)</li>
  </ul>
 </li>
 <li>Se algum dado for inválido, exiba novamente o formulário, desta vez com valores preenchidos pelo usuário e mensagens de erro para os campos problemáticos.</li>
 <li>Se todos os dados forem válidos, execute as ações necessárias (por exemplo, salve os dados, envie e envie por e-mail, retorne o resultado de uma pesquisa, faça o upload de um arquivo etc.)</li>
 <li>Quando todas as ações estiverem concluídas, redirecione o usuário para outra página.</li>
</ol>

<p>O Django fornece várias ferramentas e abordagens para ajudá-lo nas tarefas detalhadas acima. O mais fundamental é a classe <code>Form</code>, o que simplifica a geração de HTML de formulário e a limpeza/validação de dados. Na próxima seção, descreveremos como os formulários funcionam usando o exemplo prático de uma página para permitir que os bibliotecários renovem os livros.</p>

<div class="note">
<p><strong>Nota:</strong> Entendendo como <code>Form</code> é usado para ajudá-lo quando discutirmos as classes de estrutura de formulário mais "de alto nível" do Django.</p>
</div>

<h2 id="Renew-book_form_usando_uma_function_view">Renew-book form usando uma function view</h2>

<p>Em seguida, adicionaremos uma página para permitir que os bibliotecários renovem os livros emprestados. Para fazer isso, criaremos um formulário que permita aos usuários inserir um valor de data. Preencheremos o campo com um valor inicial três semanas a partir da data atual (o período normal de empréstimo) e adicionaremos alguma validação para garantir que o bibliotecário não possa inserir uma data no passado ou uma data muito distante no futuro. Quando uma data válida for inserida, nós a escreveremos no registro atual no campo <code>BookInstance.due_back</code>.</p>

<p>O exemplo usará uma function-based view e uma classe <code>Form</code>. As seções a seguir explicam como os formulários funcionam e as alterações que você precisa fazer em nosso projeto <em>LocalLibrary</em>.</p>

<h3 id="Form">Form</h3>

<p>A classe <code>Form</code> é o coração do sistema de manipulação de formulários do Django. Ele especifica os campos no formulário, seu layout, exibe widgets, rótulos, valores iniciais, valores válidos e (uma vez validadas) as mensagens de erro associadas a campos inválidos. A classe também fornece métodos para renderizar-se em modelos usando formatos predefinidos (tabelas, listas etc.) ou para obter o valor de qualquer elemento (habilitando a renderização manual refinada).</p>

<h4 id="Declarando_um_Form">Declarando um Form</h4>

<p>A sintaxe da declaração para um <code>Form</code> é muito semelhante ao da declaração de um <code>Model</code>, e compartilha os mesmos tipos de campo (e alguns parâmetros semelhantes). Isso faz sentido porque, em ambos os casos, precisamos garantir que cada campo lide com os tipos corretos de dados, seja restrito a dados válidos e tenha uma descrição para exibição/documentação.</p>

<p>Os dados do formulário são armazenados no arquivo forms.py de um aplicativo, dentro do diretório do aplicativo. Crie e abra o arquivo <strong>locallibrary/catalog/forms.py</strong>. Para criar um <code>Form</code>, nós importamos a biblioteca <code>forms</code>, deriva da classe <code>Form</code>, e declarar os campos do formulário. Uma classe de formulário muito básica para nosso formulário de renovação de livros da biblioteca é mostrada abaixo - adicione-a ao seu novo arquivo:</p>

<pre class="brush: python">from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
</pre>

<h4 id="Campos_do_Form">Campos do Form</h4>

<p>Nesse caso, temos um único <code><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#datefield">DateField</a></code> para inserir a data de renovação que será renderizada em HTML com um valor em branco, o valor padrão da label "<em>Renewal date:</em>", e algum texto de ajuda: "<em>Enter a date between now and 4 weeks (default 3 weeks).</em>" Como nenhum dos outros argumentos opcionais é especificado, o campo aceita datas usando o <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#django.forms.DateField.input_formats">input_formats</a>: YYYY-MM-DD (2016-11-06), MM/DD/YYYY (02/26/2016), MM/DD/YY (10/25/16), e será renderizado usando o padrão <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#widget">widget</a>: <a href="https://docs.djangoproject.com/en/2.1/ref/forms/widgets/#django.forms.DateInput">DateInput</a>.</p>

<p>Existem muitos outros tipos de campos de formulário que você reconhecerá amplamente por sua semelhança com as classes de campo de modelo equivalentes: <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#booleanfield"><code>BooleanField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#charfield"><code>CharField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#choicefield"><code>ChoiceField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#typedchoicefield"><code>TypedChoiceField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#datefield"><code>DateField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#datetimefield"><code>DateTimeField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#decimalfield"><code>DecimalField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#durationfield"><code>DurationField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#emailfield"><code>EmailField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#filefield"><code>FileField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#filepathfield"><code>FilePathField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#floatfield"><code>FloatField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#imagefield"><code>ImageField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#integerfield"><code>IntegerField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#genericipaddressfield"><code>GenericIPAddressField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#multiplechoicefield"><code>MultipleChoiceField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#typedmultiplechoicefield"><code>TypedMultipleChoiceField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#nullbooleanfield"><code>NullBooleanField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#regexfield"><code>RegexField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#slugfield"><code>SlugField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#timefield"><code>TimeField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#urlfield"><code>URLField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#uuidfield"><code>UUIDField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#combofield"><code>ComboField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#multivaluefield"><code>MultiValueField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#splitdatetimefield"><code>SplitDateTimeField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#modelmultiplechoicefield"><code>ModelMultipleChoiceField</code></a>, <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#modelchoicefield"><code>ModelChoiceField</code></a>.</p>

<p>Os argumentos comuns à maioria dos campos estão listados abaixo (estes têm valores padrão sensíveis):</p>

<ul>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#required">required</a>: Se <code>True</code>, o campo não pode ser deixado em branco ou receber um valor <code>None</code>. Os campos são obrigatórios por padrão, então você deve definir <code>required=False</code> para permitir valores em branco no formulário.</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#label">label</a>: O label a ser usado ao renderizar o campo em HTML. Se um <a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#label">label</a> não for especificado, o Django criará um a partir do nome do campo colocando em maiúscula a primeira letra e substituindo sublinhados por espaços (e.g. <em>Renewal date</em>).</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#label-suffix">label_suffix</a>: Por padrão, dois pontos são exibidos após o rótulo (e.g. Renewal date<strong>:</strong>). Esse argumento permite especificar um sufixo diferente contendo outros caractere(s).</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#initial">initial</a>: O valor inicial para o campo quando o formulário é exibido.</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#widget">widget</a>: O widget de exibição a ser usado.</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#help-text">help_text</a> (como visto no exemplo acima): Texto adicional que pode ser exibido em formulários para explicar como usar o campo.</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#error-messages">error_messages</a>: Uma lista de mensagens de erro para o campo. Você pode substituí-los por suas próprias mensagens, se necessário.</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#validators">validators</a>: Uma lista de funções que serão chamadas no campo quando validadas.</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#localize">localize</a>:Permite a localização da entrada de dados do formulário (consulte o link para obter mais informações).</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/#disabled">disabled</a>: O campo é exibido, mas seu valor não pode ser editado se este for <code>True</code>. O padrão é <code>False</code>.</li>
</ul>

<h4 id="Validação">Validação</h4>

<p>O Django fornece vários locais onde você pode validar seus dados. A maneira mais fácil de validar um único campo é substituir o método <code>clean_<strong>&lt;fieldname&gt;</strong>()</code> para o campo que você deseja verificar. Por exemplo, podemos validar esse valor inserido <code>renewal_date</code> daqui a quatro semanas, implementando <code>clean_<strong>renewal_date</strong>()</code> como mostrado abaixo.</p>

<p>Atualize seu arquivo forms.py para ficar assim:</p>

<pre class="brush: python"><strong>import datetime</strong>

from django import forms
<strong>from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
</strong>
class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

<strong>    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Check if a date is not in the past.
        if data &lt; datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Check if a date is in the allowed range (+4 weeks from today).
        if data &gt; datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data</strong></pre>

<p>Há duas coisas importantes a serem observados. A primeira é que temos nossos dados usando <code>self.cleaned_data['renewal_date']</code> e que nós retornaremos esses dados ou não podemos alterá-lo no final da função. Este passo nos leva a dados "limpos" e higienizados de potencialmente inseguro usando os validadores de entrada padrão e convertidos para o tipo padrão correto para os dados (neste caso, um objeto Python <code>datetime.datetime</code>).</p>

<p>O segundo ponto é que, se um valor cai fora da nossa gama que levanta um <code>ValidationError</code>, especificando o texto de erro que deseja exibir no formulário se um valor inválido for inserido. Os exemplos acima também envolvem este texto em um dos <a href="https://docs.djangoproject.com/en/2.1/topics/i18n/translation/">Django's translation functions</a> <code>ugettext_lazy()</code> (importado como <code>_()</code>), que é uma boa prática se você quiser traduzir o seu site mais tarde.</p>

<div class="note">
<p><strong>Nota:</strong> Existem muitos outros exemplos e métodos para validar os forms <a href="https://docs.djangoproject.com/en/2.1/ref/forms/validation/">Form e field validation</a> (Django docs). Por exemplo, nos casos em que você tem vários campos que dependem uns dos outros, você pode substituir a função <a href="https://docs.djangoproject.com/en/2.1/ref/forms/api/#django.forms.Form.clean">Form.clean()</a> e novamente levantar uma <code>ValidationError</code>.</p>
</div>

<p>Isso é tudo que necessitamos para o form neste exemplo?</p>

<h3 id="Configuração_da_URL">Configuração da URL</h3>

<p>Antes de criar nossa view, vamos adicionar a configuração da URL para a pagina <em>renew-books</em>. Copie a seguinte configuração para o final do aquivo <strong>locallibrary/catalog/urls.py</strong>.</p>

<pre class="brush: python">urlpatterns += [
    path('book/&lt;uuid:pk&gt;/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]</pre>

<p>A configuração da URL irá redirecionar as URLs com o formato <strong>/catalog/book/<em>&lt;bookinstance id&gt;</em>/renew/</strong> para a função chamada <code>renew_book_librarian()</code> em <strong>views.py</strong>, e enviar o id  <code>BookInstance</code> como parâmetro nomeado <code>pk</code>. O padrão corresponde apenas se <code>pk</code> estiver com a formatação <code>uuid</code> correta.</p>

<div class="note">
<p><strong>Nota</strong>: Podemos citar nos nossos dados capturados na URL "<code>pk</code>" qualquer coisa que quisermos, porque nós temos o controle completo sobra a função view (nós não estamos usando uma view detail genérica, onde se espera os parâmetros com um certo nome). Contudo, a abreviação <code>pk</code> para "chave primária", é uma convenção razoável para uso!</p>
</div>

<h3 id="View">View</h3>

<p>Como discutido no <a href="#django_form_handling_process">processo de manipulação de formulários Django </a>acima, a view renderizará o formulário padrão chamado pela primeira vez e então retorná-lo com mensagens de erro se os dados forem inválidos, ou processar os dados e redirecioná-lo para uma nova página se os dados forem válidos.A fim de executar essas ações diferentes, a view deve ser capas de saber se está sendo chamada pela primeira vez para renderizar o form padrão ou um subsequente para a validação dos dados.</p>

<p>Para forms que usam uma solicitação <code>POST</code> para enviar informações para o servidor, o padrão mais comum para a view é testar se o tipo de solicitação é <code>POST</code> (<code>if request.method == 'POST':</code>) para identificar requisições válidas de formulário e <code>GET</code> (usando uma condição <code>else</code>) para identificar a requisição de criação do form inicial. Se você deseja enviar seus dados usando uma reuquisição <code>GET</code> uma abordagem típica para identificar se é a primeira ou subsequente requisição é ler os dados do formulário (por exemplo, ler um valor oculto no form).</p>

<p>O processo de renovação de livros será gravado em nosso banco de dados, portanto, por convenção, usamos a abordagem de requisição <code>POST</code>. O fragmento de código abaixo mostra o padrão (bem padrão) para esse tipo de exibição de função.</p>

<pre class="brush: python">import datetime

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

def renew_book_librarian(request, pk):
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
<strong>    if request.method == 'POST':</strong>

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        <strong>if form.is_valid():</strong>
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    # If this is a GET (or any other method) create the default form.
<strong>    else:</strong>
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)</pre>

<p>Primeiro, importamos nosso formulário (<code>RenewBookForm</code>) e outros objetos/métodos úteis usados no corpo da função <em>view</em>:</p>

<ul>
 <li><code><a href="https://docs.djangoproject.com/en/2.1/topics/http/shortcuts/#get-object-or-404">get_object_or_404()</a></code>: Retorna um objeto especificado de um modelo com base em seu valor de chave primária, e gera uma exceção <code>Http404</code> (não encontrada) se o registro não existir. </li>
 <li><code><a href="https://docs.djangoproject.com/en/2.1/ref/request-response/#django.http.HttpResponseRedirect">HttpResponseRedirect</a></code>: Isso cria um redirecionamento para uma URL especificada (código de status HTTP 302). </li>
 <li><code><a href="https://docs.djangoproject.com/en/2.1/ref/urlresolvers/#django.urls.reverse">reverse()</a></code>: Isso gera uma URL a partir de uma configuração de nome de URL e um conjunto de argumentos. É o equivalente em Python da tag <code>url</code> que usamos em nossos <em>templates</em>.</li>
 <li><code><a href="https://docs.python.org/3/library/datetime.html">datetime</a></code>: Uma biblioteca Python para a manipulação de dadas e tempo.</li>
</ul>

<p>Na <em>view</em>, primeiro usamos o argumento <code>pk</code> em <code>get_object_or_404()</code> para obter o <code>BookInstance</code> atual (se isso não existir, a <em>view</em> será imediatamente encerrada e a página exibirá um erro "não encontrada"). Se essa não for uma solicitação <code>POST</code> (manipulada pela cláusula <code>else</code>) criamos o formulário padrão passando o valor <code>initial</code> para o campo <code>renewal_date</code> (como mostrado abaixo em negrito, isso é, 3 semanas a partir da data atual). </p>

<pre class="brush: python">    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a GET (or any other method) create the default form
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(<strong>weeks=3</strong>)
        <strong>form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})</strong>

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)</pre>

<p>Depois de criar o <em>form</em>, chamamos <code>render()</code> para criar a página HTML, especificando o <em>template</em> e o <em>context</em> que contém o nosso <em>form</em>. Nesse caso, o <em>context</em> também contem nosso <code>BookInstance</code>, que usaremos no <em>template</em> para fornecer informações sobre o livro que estamos renovando.</p>

<p>No entenato, se essa for uma solicitação <code>POST</code> , criamos nosso objeto <code>form</code> e prenchemos com dados da requisição. Esse processo é chamado <em>"binding"</em> e permite validar o formulário. Em seguida, verificamos se o formulário é válido, que executa todo o código de validação em todos os campos — incluindo o código genérico para verificar se nosso campo de data é realmente uma data válida e a função específica <code>clean_renewal_date()</code> do nosso formulário para verificar se a data está na faixa certa. </p>

<pre class="brush: python">    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
<strong>        form = RenewBookForm(request.POST)</strong>

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)</pre>

<p>Se o formulário não é válido, chamamos <code>render()</code> novamente, mas dessa vez o valor passado de <em>form</em> no <em>context</em> incluirá mensagens de erro. </p>

<p>Se o formulário é válido, então podemos começar a utilizar os dados, acessando-o por meio do atributo<code>form.cleaned_data</code> (Ex. <code>data = form.cleaned_data['renewal_date']</code>). Aqui, apenas salvamos os dados no atributo <code>due_back</code> do objeto <code>BookInstance</code> associado.</p>

<div class="warning">
<p><strong>Importante</strong>: Embora você também possa acessar os dados do formulário diretamente por meio do <em>request</em> (por exemplo, <code>request.POST['renewal_date']</code> ou <code>request.GET['renewal_date']</code> se utilizando requisição GET), isso NÃO é recomendado. O dado limpo é "higienizado", validado, e convertido em tipo compatível com Python.</p>
</div>

<p>A estapa final da manipulação de formulário na parte da <em>view</em> é redirecionar para outra página, geralmente uma página de "êxito". Nesse caso, usamos  <code>HttpResponseRedirect</code> e <code>reverse()</code> para redirecionar para a <em>view </em>chamada <code>'all-borrowed'</code> (isso foi criado como desafio em <a href="/en-US/docs/Learn/Server-side/Django/authentication_and_sessions#Challenge_yourself">Tutorial Django Parte 8: Autenticação de usuário e permissões</a>). Se você não criou está página considere redirecionar para a página principal na URL '/').</p>

<p>Isso é tudo que é necessário para a manipulação do formulario, mas ainda precisamo restringir o acesso a <em>view</em> aos bibliotecários. Provavelmente devemos criar uma nova permissão em <code>BookInstance</code> ("<code>can_renew</code>"), mas, para simplificar as coisa aqui, apenas usamos o <em>decorator </em>da função<em>,  </em><code>@permission_required</code> com nossa permissão existente  <code>can_mark_returned</code>.</p>

<p>A <em>view</em> final, é portanto, como mostrado abaixo. Por favor, copie isso na parte inferior de <strong>locallibrary/catalog/views.py</strong>.</p>

<pre><strong>import datetime

from django.contrib.auth.decorators import permission_required</strong>
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

<strong>@permission_required('catalog.can_mark_returned')</strong>
def renew_book_librarian(request, pk):
    """View function for renewing a specific BookInstance by librarian."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
</pre>

<h3 id="O_template">O <em>template</em></h3>

<p>Crie o <em>template</em> mencionado na <em>view</em> (<strong>/catalog/templates/catalog/book_renew_librarian.html</strong>) e copie o código abaixo nele:</p>

<pre class="brush: html">{% extends "base_generic.html" %}

{% block content %}
  &lt;h1&gt;Renew: \{{ book_instance.book.title }}&lt;/h1&gt;
  &lt;p&gt;Borrower: \{{ book_instance.borrower }}&lt;/p&gt;
  &lt;p{% if book_instance.is_overdue %} class="text-danger"{% endif %}&gt;Due date: \{{ book_instance.due_back }}&lt;/p&gt;

<strong>  &lt;form action="" method="post"&gt;
    {% csrf_token %}
    &lt;table&gt;
    \{{ form.as_table }}
    &lt;/table&gt;
    &lt;input type="submit" value="Submit"&gt;
  &lt;/form&gt;</strong>
{% endblock %}</pre>

<p>A maior parte disso será totalmente familiar dos tutoriais anteriores. Estendemos o <em>template</em> base e então redefinimos o bloco <em>content</em>. Somos capazes de referenciar  <code>\{{ book_instance }}</code> (e suas variáveis) porque foi passado no objeto <em>context</em> na função <code>render()</code>, e nós as usamos para listar o título do livro, tomador do empréstimo, e a data de devolução original.</p>

<p>O código do formulário é relativamente simples. Primeiro, declaramos a tag <code>form</code>, especificando onde o formulário deve ser submetido (<code>action</code>) e o <code>method</code> para submeter os dados (nesse caso, um "HTTP POST") — se você lembrar da visão geral de <a href="#HTML_forms">Formulários HTML</a> na parte superior da página, uma <code>action</code> vazia, como mostrada, significa que os dados do formulário serão postados de volta para a URL atual da página (que é o que queremos!). Dentro das tags, definimos a entrada <code>submit</code>, que um usuário pode apertar para submeter os dados. O <code>{% csrf_token %}</code> adicionado apenas dentro das tags do formulário é parte da proteção de falsificação ente sites (cross-site forgery protection) do  Django.</p>

<div class="note">
<p><strong>Nota:</strong> Adicione o <code>{% csrf_token %}</code> para todos os <em>templates </em>Django que você cria que utiliza <code>POST</code> para submeter dados. Isso reduzirá a chance de que os formulários sejam invadidos por usuários maliciosos.</p>
</div>

<p>Tudo que resta é  a variável <code>\{{ form }}</code> do <em>template</em>, que passamos para o <em>template</em> no dicionário <em>context</em>. Talvez, sem supresa, quando usado como mostrado, isto fornece a renderização padrão de todos os campos do formulário, incluindo seus <em>labels</em>, <em>widgets</em> e texto de ajuda —  a renderização é como mostrado abaixo:</p>

<pre class="brush: html">&lt;tr&gt;
  &lt;th&gt;&lt;label for="id_renewal_date"&gt;Renewal date:&lt;/label&gt;&lt;/th&gt;
  &lt;td&gt;
    &lt;input id="id_renewal_date" name="renewal_date" type="text" value="2016-11-08" required&gt;
    &lt;br&gt;
    &lt;span class="helptext"&gt;Enter date between now and 4 weeks (default 3 weeks).&lt;/span&gt;
  &lt;/td&gt;
&lt;/tr&gt;
</pre>

<div class="note">
<p><strong>Nota:</strong> Talvez não seja óbvio porque temos apenas um campo, mas, por padrão, todo campo é definido em sua própria linha de tabela. Essa mesma renderização é fornecida se você referenciar a váriavel de <em>template</em> <code>\{{ form.as_table }}</code>.</p>
</div>

<p>Se você fosse inserir uama data inválida, você também obteria uma lista dos erros renderizados na página (mostrado em negrito abaixo).</p>

<pre class="brush: html">&lt;tr&gt;
  &lt;th&gt;&lt;label for="id_renewal_date"&gt;Renewal date:&lt;/label&gt;&lt;/th&gt;
    &lt;td&gt;
<strong>      &lt;ul class="errorlist"&gt;
        &lt;li&gt;Invalid date - renewal in past&lt;/li&gt;
      &lt;/ul&gt;</strong>
      &lt;input id="id_renewal_date" name="renewal_date" type="text" value="2015-11-08" required&gt;
      &lt;br&gt;
      &lt;span class="helptext"&gt;Enter date between now and 4 weeks (default 3 weeks).&lt;/span&gt;
    &lt;/td&gt;
&lt;/tr&gt;</pre>

<h4 id="Outras_maneiras_de_usar_variável_de_formulário_de_template">Outras maneiras de usar variável de formulário de <em>template</em></h4>

<p>Usando <code>\{{ form.as_table }}</code> como mostrado acima, cada campo é renderizado como uma linha da tabela. Você também pode renderizar cada campo como um item da lista (usando <code>\{{ form.as_ul }}</code> ) como um parágrafo (usando <code>\{{ form.as_p }}</code>).</p>

<p>Também é possível ter controle completo sobre a renderização de cada parte do formulário, indexando suas propriedades usando notação de ponto. Assim, por exemplo, podemos acessar vários itens separados pelo nosso campo <code>renewal_date</code>:</p>

<ul>
 <li><code>\{{ form.renewal_date }}:</code> O campo todo.</li>
 <li><code>\{{ form.renewal_date.errors }}</code>: A lista de erros.</li>
 <li><code>\{{ form.renewal_date.id_for_label }}</code>: O id do <em>label</em>.</li>
 <li><code>\{{ form.renewal_date.help_text }}</code>: O texto de ajuda do campo.</li>
</ul>

<p>Para mais exemplos de como renderizar formulários manualmente em <em>templates </em>e fazer loop nos campos de <em>templates</em>, veja <a href="https://docs.djangoproject.com/en/2.1/topics/forms/#rendering-fields-manually">Trabalhando com formulários &gt; Renderizando campos manualmente</a> (Django docs).</p>

<h3 id="Testando_a_página">Testando a página</h3>

<p>Se você aceitou o "desafio" em <a href="/en-US/docs/Learn/Server-side/Django/authentication_and_sessions#Challenge_yourself">Tutorial Django Parte 8: Autenticação de usuário e permissões</a> você terá uma lista de todos os livros emprestados na biblioteca, que é visível apenas aos funcionários da biblioteca. Podemos adicionar um <em>link</em> para nossa página de renovação ao lado de cada item, usando o código de modelo abaixo.</p>

<pre class="brush: html">{% if perms.catalog.can_mark_returned %}- &lt;a href="{% url 'renew-book-librarian' bookinst.id %}"&gt;Renew&lt;/a&gt;  {% endif %}</pre>

<div class="note">
<p><strong>Nota</strong>: Lembre que seu login de teste precisará ter a permissão  "<code>catalog.can_mark_returned</code>" para acessar a página de renovação de livro (talvez use sua conta de superusuário).</p>
</div>

<p>Você pode, alternativamente, construir manualmente uma URL de teste como esta — <a href="http://127.0.0.1:8000/catalog/book/&lt;bookinstance id>/renew/">http://127.0.0.1:8000/catalog/book/<em>&lt;bookinstance_id&gt;</em>/renew/</a> (um id válido de <em>bookinstance</em> pode ser obtido navegando para a página de detalhes de um livro em sua biblioteca, e copiando o campo<code>id</code>).</p>

<h3 id="Com_o_que_se_parece">Com o que se parece?</h3>

<p>Se você tiver sucesso, o formulário padrão será semelhante a este:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14209/forms_example_renew_default.png" style="border-style: solid; border-width: 1px; display: block; height: 292px; margin: 0px auto; width: 680px;"></p>

<p>O formulário com um valor inválido inserido terá a seguinte aparência:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14211/forms_example_renew_invalid.png" style="border-style: solid; border-width: 1px; display: block; height: 290px; margin: 0px auto; width: 658px;"></p>

<p>A lista de todos os livros com o link de renovação será assim:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14207/forms_example_renew_allbooks.png" style="border-style: solid; border-width: 1px; display: block; height: 256px; margin: 0px auto; width: 613px;"></p>

<h2 id="ModelForms">ModelForms</h2>

<p>Criar uma classe<code>Form</code> usando a abordagem descrita acima é muito flexível, permitindo criar qualquer tipo de página de formulário que você desejar e associá-la a qualquer modelo ou modelos.</p>

<p>Contudo, se você só precisa de um formulário para mapear os campos de um único modelo, então seu modelo já definirá a maioria das informações que vocÊ precisa em seu formulário: campos, rótulos, texto de ajuda, etc. Em vez de recriar as definições do modelo em seu formulário, é mais fácil usar a classe auxiliar <a href="https://docs.djangoproject.com/en/2.1/topics/forms/modelforms/">ModelForm</a> para criar o formulário a partir do seu modelo. Esse <code>ModelForm</code> pode ser usado em suas <em>views</em> exatamente da mesma maneira como um <code>Form</code> comum.</p>

<p>Uma <code>ModelForm</code> contém o mesmo campo que nossa <code>RenewBookForm</code> original, como mostrado abaixo. Tudo que você precisa fazer para criar o formulário é adicionar <code>class Meta</code> com o <code>model</code> (<code>BookInstance</code>) associado e uma lista dos <code>fields</code> do modelo a serem incluídos no formulário (você pode incluir todos os campos usando <code>fields = '__all__'</code>, ou pode usar <code>exclude</code> (em vez de <code>fields</code>) para especificar os campos do modelo a não incluir).</p>

<pre class="brush: python">from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
<strong>    class Meta:
        model = BookInstance
        fields = ['due_back']</strong>
</pre>

<div class="note">
<p><strong>Nota</strong>: Isso pode não parecer muito mais simples do que apenas usar um <code>Form</code> (e não é nesse caso, porque temos apenas um campo). No entanto, se você tiver muitos campos, isso pode reduzir a quantidade de código significativamente!</p>
</div>

<p>O restante das informações vem das definições de campo do modelo (ex. rótulos, <em>widgets</em>, texdo de ajuda, mensagens de erro). Se isso não for suficiente, então podemos substituí-los em nossa <code>class Meta</code>, especificando um dicionário contendo o campo para mudar e seu novo valor. Por exemplo, neste formulário podemos querer um rótulo para nosso campo de "<em>Renewal date</em>" (em vez do padrão baseado no padrão com base no nome do campo: <em>Due Back</em>), e também queremos que nosso campo de ajuda seja específico para esse caso de uso. A <code>Meta</code> abaixo mostra como substituir esses campos, e você pode definir <code>widgets</code> and <code>error_messages</code> da mesma forma, se os padrões não forem suficientes.</p>

<pre class="brush: python">class Meta:
    model = BookInstance
    fields = ['due_back']
<strong>    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back</strong><strong>': _('Enter a date between now and 4 weeks (default 3).')} </strong>
</pre>

<p>Para adicionar validação você pode usar  a mesma abordagem como uma <code>Form</code> normal — você define uma função chamada <code>clean_<em>field_name</em>()</code> e <em>raise</em> a exceção <code>ValidationError</code> para valores inválidos. A única diferença em relação ao nosso <em>form </em>original é que o campo do modelo é chamdo <code>due_back</code> e não "<code>renewal_date</code>". Essa mudança é necessária pois o campo correspondente em <code>BookInstance</code> é chamado <code>due_back</code>. </p>

<pre class="brush: python">from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
<strong>    def clean_due_back(self):
       data = self.cleaned_data['due_back</strong><strong>']

       # Check if a date is not in the past.
       if data &lt; datetime.date.today():
           raise ValidationError(_('Invalid date - renewal in past'))

       <strong># Check if a date is in the allowed range (+4 weeks from today).</strong>
       if data &gt; datetime.date.today() + datetime.timedelta(weeks=4):
           raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

       # Remember to always return the cleaned data.
       return data
</strong>
    class Meta:
        model = BookInstance
        fields = ['due_back']
        labels = {'due_back': _('Renewal date')}
        help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
</pre>

<p>A classe <code>RenewBookModelForm</code> acima agora é funcionalmente equivalente a nossa original <code>RenewBookForm</code>. Você poderia importar e usar onde quer que você use <code>RenewBookForm</code> desde que você também atualize o nome da variável do formulário correspondente de <code>renewal_date</code> para <code>due_back</code> como na segunda declaração do formulário: <code>RenewBookModelForm(initial={'due_back': proposed_renewal_date}</code>.</p>

<h2 id="Views_genéricas_de_edição">Views genéricas de edição</h2>

<p>O algoritmo de manipulação de formulários que usamos em nosso exemplo de função <em>view</em> acima, representa um padrão extremamente comum nas <em>views</em> de edição de formulário. Django abstrai grande parte desse "<em>boilerplate</em>" (trabalho repetitivo) para você, criando <a href="https://docs.djangoproject.com/en/2.1/ref/class-based-views/generic-editing/">views genéricas de edição</a> para views de criação, edição e exclusão baseadas em modelos. Não apenas lidam com o comportamento de visualização, mas também criam automaticamente para você a classe de formulário (uma <code>ModelForm</code>) a partir do modelo.</p>

<div class="note">
<p><strong>Nota: </strong>Além das <em>views</em> de edição descritas aqui, há também uma classe <a href="https://docs.djangoproject.com/en/2.1/ref/class-based-views/generic-editing/#formview">FormView</a>, que fica em algum lugar entre nossa função <em>view</em> e outra <em>view</em> genérica em termos de "flexibilidade" vs "esforço de codificação". Usando <code>FormView</code>, você ainda precisa criar seu <code>Form</code>, mas não precisa implementar todos os padrões de manipulação de formulário. Em vez disso, você tem apenas que fornecer uma implementação da função que será chamada assim que o envio for válido.</p>
</div>

<p>Nessa seção vamos usar <em>views</em> genericas de edição para criar páginas para adicionar funcionalidades para criar, editar e excluir registros de <code>Author</code> da nossa biblioteca — fornecendo efetivamente uma reimplementação básica de parte do site <em>Admin</em> (isso poderá ser útil se você precisa oferecer funcionalidades de administrador de uma maneira mais flexível que possa ser fornecida pelo dite <em>Admin</em>).</p>

<h3 id="Views"><em>Views</em></h3>

<p>Abra o arquivo das <em>views</em> (<strong>locallibrary/catalog/views.py</strong>) e acrescente o seguinte bloco de código na parte inferior:</p>

<pre class="brush: python">from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from catalog.models import Author

class AuthorCreate(CreateView):
    model = Author
    fields = '__all__'
    initial = {'date_of_death': '05/01/2018'}

class AuthorUpdate(UpdateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']

class AuthorDelete(DeleteView):
    model = Author
    success_url = reverse_lazy('authors')</pre>

<p>Como você pode ver, para criar, atualizar e excluir as <em>views</em>, você precisa derivar de <code>CreateView</code>, <code>UpdateView</code>, e <code>DeleteView</code> (respectivamente) e então definir o modelo associado.</p>

<p>Para os casos "criar" e "atualizar" você também precisa especificar os campos para mostrar no formulário (usando a mesma sintaxe que para <code>ModelForm</code>). Nesse caso, nós mostramos ambas as sintaxes para mostrar todos (<em>"all"</em>) campos e como você pode listar eles individualmente. Você também pode especificar valores iniciais para cada campo usando um dicionário com pares nome_campo/valor (aqui, arbitrariamente, definimos a data de morte para fins de demonstração — talvez você queira remover isso!). Por padrão, essas <em>views</em> irão redirecionar, se houver sucesso, para uma página mostrando o item do modelo recentemente criado/editado, que no nosso caso será a página de visualização de detalhes do autor que criamos em um tutorial anterior. Você pode especificar ums local de redirecionamento alternativo, declarando explicitamente o parâmetro <code>success_url</code> (como feito na classe <code>AuthorDelete</code>).</p>

<p>A classe <code>AuthorDelete</code>  não precisa mostrar nenhum dos campos, então eles não precisam ser especificados. No entanto, você precisa especificar a  <code>success_url</code>, porque  não há um valor padrão óbvio para o Django usar. Nesse caso, usamos a função <code><a href="https://docs.djangoproject.com/en/2.1/ref/urlresolvers/#reverse-lazy">reverse_lazy()</a></code> para redirecioanr para nossa lista de autores depois que um autor é excluido — <code>reverse_lazy()</code> é uma versão executada "preguiçosamente" de <code>reverse()</code>, usada aqui porque estamos fornecendo uma URL para um atributo baseado em classe de <em>view</em>.</p>

<h3 id="Templates"><em>Templates</em></h3>

<p>As <em>views</em> "<em>create</em>" e "<em>update</em>"  usam o mesmo <em>template</em> por padrão, que serão nomeadas seguindo o modelo: <em>model_name</em><strong>_form.html</strong> (você pode mudar o sufixo para algo diferente de <strong>_form</strong> usando o campo <code>template_name_suffix</code> em sua <em>view</em>, ex. <code>template_name_suffix = '_other_suffix'</code>)</p>

<p>Crie o arquivo de <em>template  </em><strong>locallibrary/catalog/templates/catalog/author_form.html</strong> e copie o texto abaixo.</p>

<pre class="brush: html">{% extends "base_generic.html" %}

{% block content %}
  &lt;form action="" method="post"&gt;
    {% csrf_token %}
    &lt;table&gt;
    \{{ form.as_table }}
    &lt;/table&gt;
    &lt;input type="submit" value="Submit"&gt;
  &lt;/form&gt;
{% endblock %}</pre>

<p>Isso é semelhante aos nossos formulários anteriores e renderiza os campos usando uma tabela. Note também como novamente declaramos o <code>{% csrf_token %}</code> para garantir que nossos formulários são resistentes a ataques CSRF.</p>

<p>A <em>view</em> "delete" espera encontrar um <em>template</em> nomeado com o formato  <em>model_name</em><strong>_confirm_delete.html</strong> (novamente, você pode mudar o sufixo usando <code>template_name_suffix</code> em sua <em>view</em>). Crie o arquivo de <em>template</em> <strong>locallibrary/catalog/templates/catalog/author_confirm_delete</strong><strong>.html</strong> e copie o texto abaixo.</p>

<pre class="brush: html">{% extends "base_generic.html" %}

{% block content %}

&lt;h1&gt;Delete Author&lt;/h1&gt;

&lt;p&gt;Are you sure you want to delete the author: \{{ author }}?&lt;/p&gt;

&lt;form action="" method="POST"&gt;
  {% csrf_token %}
  &lt;input type="submit" value="Yes, delete."&gt;
&lt;/form&gt;

{% endblock %}
</pre>

<h3 id="URL_configurations">URL configurations</h3>

<p>Abra seu arquivo de configuração de URL (<strong>locallibrary/catalog/urls.py</strong>)  e adicione a seguinte configuração no final do arquivo:</p>

<pre class="brush: python">urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author_create'),
    path('author/&lt;int:pk&gt;/update/', views.AuthorUpdate.as_view(), name='author_update'),
    path('author/&lt;int:pk&gt;/delete/', views.AuthorDelete.as_view(), name='author_delete'),
]</pre>

<p>Não há nada particularmente novo aqui! Você pode ver que  as <em>views</em> são classes, e portanto devem ser chamadas via <code>.as_view()</code>, e você deve poder reconhecer os padrões URL em cada caso. Devemos usar <code>pk</code> como o nome para nosso valor capturado de chave primária (<em>primary key</em>), como esse é o nome do parâmetro esperado pelas classes <em>view</em>.</p>

<p>As páginas de criação, atualização e remoção de autor agora estão prontas para teste (neste caso, não nos incomodaremos em conectá-las a barra lateral do site, embora você possa fazer se desejar).</p>

<div class="note">
<p><strong>Nota</strong>: Usuários observadores devem ter notado que não fizemos nada para previnir que usuários não autorizadosde acessem as páginas! Deixamos isso como um exercício para você (dica: você pode usar  <code>PermissionRequiredMixin</code> e criar uma nova permissão ou reutilizar nossa permissão <code>can_mark_returned</code>).</p>
</div>

<h3 id="Testando_a_página_2">Testando a página</h3>

<p>Primeiro, efetue login no site com uma conta que possua as permissões que você decidiu que são necessárias para acessar a página de edição de autor.</p>

<p>Então navegue para a página de criação de autor: <a href="http://127.0.0.1:8000/catalog/author/create/">http://127.0.0.1:8000/catalog/author/create/</a>, que deve parecer como a captura de tela abaixo.</p>

<p><img alt="Form Example: Create Author" src="https://mdn.mozillademos.org/files/14223/forms_example_create_author.png" style="border-style: solid; border-width: 1px; display: block; height: 184px; margin: 0px auto; width: 645px;"></p>

<p>Entre com valores para os campos e então pressione <strong>Submit</strong> para dalvar o registro de autor. Você agora deve ser direcionado para uma visualização detalhada para o seu novo autor, com uma URL de algo como <em>http://127.0.0.1:8000/catalog/author/10</em>.</p>

<p>Você pode testar edição de registros enexando <em>/update/</em> ao final da URL da página de detalhe (ex. <em>http://127.0.0.1:8000/catalog/author/10/update/</em>) — não mostramos uma captura de tela, porque se parace com a página de criação</p>

<p>Finalmente, podemos excluir a página anexando <em>delete</em> ao final da URL da visualização detalhada do autor  (ex. <em>http://127.0.0.1:8000/catalog/author/10/delete/</em>). Django deve exibir a página de exclusão mostrada abaixo. Pressione <strong>Yes, delete.</strong> para remover o registro e ser levado para a lista de todos os autores.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14221/forms_example_delete_author.png" style="border-style: solid; border-width: 1px; display: block; height: 194px; margin: 0px auto; width: 561px;"></p>

<h2 id="Desafie-se">Desafie-se</h2>

<p>Crie alguns <em>forms</em> para criar, editar e excluir registros de <code>Book</code>. Você pode utilizar exatamente a mesma estrutura que a de  <code>Authors</code>. Se seu <em>template</em> <strong>book_form.html</strong> é apenas uma cópia renomeada de   <strong>author_form.html</strong> , então a nova página "criar livro" será semelhante a captura de tela abaixo:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14225/forms_example_create_book.png" style="border-style: solid; border-width: 1px; display: block; height: 521px; margin: 0px auto; width: 595px;"></p>

<ul>
</ul>

<h2 id="Resumo">Resumo</h2>

<p>Criar e manipular formulários pode ser um processo complicado! Django torna muito mais fácil fornecendo mecanismos programáticos para declarar, renderizar e validar formulários. Além disso, Django fornece <em>views</em> genéricas de edição de formulário, isso pode fazes quase todo trabalho para definir páginas que podem criar, editar e excluir registros associados com uma única instância de <em>model.</em></p>

<p>Há muito mais que pode ser feito com formulários (confira abaixo nossa lista Veja também), mas agora você deve entender como adicionar formulários básicos e o código de manipulação de formulários para seus próprios websites.</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="https://docs.djangoproject.com/en/2.1/topics/forms/">Trabalhando com formulários</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/intro/tutorial04/#write-a-simple-form">Escrevendo seu primeiro <em>app</em> Django, parte 4 &gt; Escrevendo um formulário simples</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/api/">A API <em>Forms</em></a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/fields/">Form fields</a> (Django docs) </li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/forms/validation/">Formulários e validação de campos</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/topics/class-based-views/generic-editing/">Manipulação de formulários com <em>views</em> baseadas em classe</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/topics/forms/modelforms/">Criando formulários com <em>models</em></a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/class-based-views/generic-editing/">Views genéricas de edição</a> (Django docs)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}</p>

<h2 id="Neste_módulo">Neste módulo</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Introduction">Introdução ao Django</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/development_environment">Configurando um ambiente de desenvolvimento Django</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial Django: </a><a rel="nofollow" title="A página ainda não foi criada.">Website de uma Biblioteca Local</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial</a> <a href="/en-US/docs/Learn/Server-side/Django/skeleton_website">Django Parte 2: </a><a href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/skeleton_website">Criando a base do website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial</a> <a href="/en-US/docs/Learn/Server-side/Django/Models">Django Parte 3: Usando <em>models</em></a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial</a> <a href="/en-US/docs/Learn/Server-side/Django/Admin_site">Django Parte 4: Django admin site</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial</a> <a href="/en-US/docs/Learn/Server-side/Django/Home_page">Django Parte 5: Criando nossa página principal</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial</a> <a href="/en-US/docs/Learn/Server-side/Django/Generic_views">Django Parte 6: </a><a href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Generic_views">Lista genérica e <em>detail views</em></a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial</a> <a href="/en-US/docs/Learn/Server-side/Django/Sessions">Django Parte 7: </a><a rel="nofollow" title="A página ainda não foi criada.">Framework de Sessões</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial</a> <a href="/en-US/docs/Learn/Server-side/Django/Authentication">Django Parte 8: </a><a href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Authentication">Autenticação de Usuário e permissões</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial</a> <a href="/en-US/docs/Learn/Server-side/Django/Forms">Django Parte 9: </a><a href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Forms">Trabalhando com formulários</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial</a> <a href="/en-US/docs/Learn/Server-side/Django/Testing">Django Parte 10: </a><a rel="nofollow" title="A página ainda não foi criada.">Testando uma aplicação web Django</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial</a> <a href="/en-US/docs/Learn/Server-side/Django/Deployment">Django Parte 11: </a><a rel="nofollow" title="A página ainda não foi criada.">Implantando Django em produção</a></li>
 <li><a rel="nofollow" title="A página ainda não foi criada.">Segurança de aplicações web Django</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/django_assessment_blog">DIY Django mini blog</a></li>
</ul>
