---
title: "Tutorial Django Parte 9: Trabalhando com formulários"
slug: Learn/Server-side/Django/Forms
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}

Neste tutorial, vamos te mostrar como trabalhar com formulários HTML no Django e, em particular, a maneira mais fácil de programar formulários para criar, alterar e excluir instâncias de modelos. Como parte desta demonstração, vamos estender o site da [BibliotecaLocal](/pt-BR/docs/Learn/Server-side/Django/Tutorial_website_biblioteca_local) para que bibliotecários possam renovar reservas e criar, alterar e excluir autores usando nossos próprios formulários em vez do "admin" do Django.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Completar todos os tópicos anteriores deste tutorial, incluindo
        <a
          href="/pt-BR/docs/Learn/Server-side/Django/authentication_and_sessions"
          >Django Tutorial Parte 8: Autenticação e Permissões de Usuário</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Entender como programar formulários para obter informações dos
          usuários e atualizar a base de dados. Entender como as
          <em>views</em> genéricas de edição de formulários baseadas em classes
          podem simplificar a criação de formulários para trabalhar com um único
          <em>model</em>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Visão Geral

Um [Formulário HTML](/pt-BR/docs/Web/Guide/HTML/Forms) é um grupo de um ou mais campos/_widgets_ em uma página web, que podem ser utilizados para coletar informações dos usuários para submetê-las a um servidor. Formulários são um mecanismo flexível para coletar input de usuário porque há _widgets_ adequados para entrada de variados tipos de dados, incluindo caixas de texto, caixas de seleção, botões radiais, seletores de data etc. Formulários são também um meio relativamente seguro de compartilhar dados com o servidor, pois nos permitem enviar dados em requisições `POST` com proteção contra ataques maliciosos **CSRF** (_**Cross-Site Request Forgery**_ - em inglês, falsificação de solicitação entre sites).

Apesar de ainda não termos criado formulários até o momento neste tutorial, já os encontramos na página do Django Admin — por exemplo, a captura de tela abaixo mostra um formulário para editar um dos nossos modelos de [Livros](/pt-BR/docs/Learn/Server-side/Django/Models), incluindo algumas listas de seleção e editores de texto.

![Admin Site - Book Add](admin_book_add.png)

Trabalhar com formulários pode ser complicado! Desenvolvedores precisam escrever HTML para o formulário, validar e limpar dados submetidos ao servidor (e possivelmente também ao navegador), programar mensagens de erro no formulário para informar o usuário de quaisquer preenchimentos inválidos, lidar com os dados quando enviados com sucesso e, finalmente, mostrar ao usuário algum indicativo de sucesso. Os _Django Forms_ adiantam boa parte desses passos disponibilizando uma estrutura que permite a você definir formulários e seus campos programaticamente, e então utilizar esses objetos tanto para gerar o código HTML do formulário como para cuidar de boa parte da validação e interação de usuário.

Neste tutorial, vamos te mostrar alguns dos métodos para se criar e trabalhar com formulários e, em particular, como as _views_ genéricas de edição de formulários podem reduzir significativamente o seu trabalho ao criar formulários para manipular seus _models_. Ao longo do caminho, vamos estender nossa aplicação _LocalLibrary_ adicionando um formulário que permita que bibliotecários renovem locações de livros, e vamos construir páginas para criar, alterar e excluir livros e autores (reproduzindo uma versão básica do formulário exibido acima para alterar livros).

## Formulários HTML

Antes de mais nada, um breve resumo de [Formulários HTML](/pt-BR/docs/Learn/HTML/Forms). Considere um formulário HTML simples, com um único campo de texto para entrada do nome de uma "equipe", e sua respectiva legenda:

![Simple name field example in HTML form](form_example_name_field.png)

O formulário é definido no HTML como uma coleção de elementos dentro das tags `<form>...</form>`, contendo ao menos um elemento `input` do tipo `type="submit"`.

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team." />
  <input type="submit" value="OK" />
</form>
```

Apesar de aqui nós termos um único para inserir o nome da equipe, um formulário pode ter qualquer quantidade de outros elementos de entrada e suas respectivas legendas. O atributo `type` de um campo define que tipo de widget será exibido. O `name` e o `id` de cada campo são utilizados para identificá-lo no JavaScript/CSS/HTML, enquanto `value` define o valor preenchido inicialmente no campo quando ele é exibido pela primeira vez. A legenda da equipe é especificada usando a tag `label` (veja "Enter name" na imagem acima), com um atributo `for` contendo o valor de `id` do `input` a ele associado.

A entrada `submit` será exibida como um botão (por padrão) que pode ser pressionado pelo usuário para enviar ao servidor os dados preenchidos em todos os outros elementos de entrada naquele formulário (neste caso, apenas `team_name`). Os atributos do formulário definem o método HTTP (`method`) utilizado para enviar os dados e o destino para esses dados no servidor (`action`):

- `action`: O recurso/URL para onde os dados devem ser enviados para processamento quando o formulário é enviado. Se isso não estiver configurado (ou configurado para uma string vazia), o formulário será enviado de volta para URL da página atual.
- `method`: O método HTTP method utilizado para enviar os dados: _post_ or _get_.

  - O método `POST` deve sempre ser utilizado se os dados forem resultar em uma alteração no banco de dados do servidor, pois é mais resistente a ataques de falsificação de solicitação entre sites.
  - O método `GET` deve ser utilizado somente para formulários que não alteram dados de usuário (um formulário de busca, por exemplo). Ele é recomendado para quando você quiser poder favoritar ou compartilhar a URL.

O papel do servidor é primeiramente carregar o estado inicial do formulário — seja contendo campos em branco ou preenchidos com valores iniciais. Após o usuário clicar no botão de envio, o servidor receberá do navegador os dados do formulário preenchido e deverá validar as informações. Se o formulário contiver dados inválidos, o servidor deverá exibir o formulário novamente, desta vez já com os valores enviados pelo usuário nos campos preenchidos corretamente, mais uma mensagem descrevendo o problema encontrado em cada campo considerado inválido. Uma vez que o servidor receber uma requisição do formulário com todos os dados válidos, poderá exercer a ação apropriada (por exemplo, salvar os dados, retornar o resultado de uma busca, subir um arquivo etc) e então notificar o usuário.

Como você pode imaginar, as ações de criar o HTML, validar os dados recebidos, re-exibir os dados enviados com mensagens de erro se necessário e realizar a operação desejada com os dados válidos podem todas tomar bastante tempo e esforço. O Django torna tudo isso muito mais fácil, adiantando parte do "trabalho braçal" e código repetitivo!

## Processo de manipulação de formulários Django

O tratamento de formulários do Django usa todas as mesmas técnicas que aprendemos nos tutoriais anteriores (para exibir informações sobre nossos modelos): a view recebe uma solicitação, executa todas as ações necessárias, incluindo a leitura de dados dos modelos, gera e retorna uma página HTML ( de um modelo, no qual passamos um _contexto_ que contém os dados a serem exibidos). O que torna as coisas mais complicadas é que o servidor também precisa processar dados fornecidos pelo usuário e exibir novamente a página se houver algum erro.

Um fluxograma do processo de como o Django lida com solicitações de formulário é mostrado abaixo, começando com uma solicitação para uma página contendo um formulário (mostrado em verde).

![Updated form handling process doc.](form_handling_-_standard.png)

Com base no diagrama acima, as principais coisas que o manuseio de formulários do Django faz são:

1. Exiba o formulário padrão na primeira vez em que for solicitado pelo usuário

   - O formulário pode conter campos em branco (por exemplo, se você estiver criando um novo registro) ou pode ser preenchido previamente com valores iniciais (por exemplo, se você estiver alterando um registro ou tiver valores iniciais padrão úteis).
   - O formulário é referido como _unbound_ neste momento, porque não está associado a nenhum dado inserido pelo usuário (embora possa ter valores iniciais).

2. Receba dados de uma solicitação de envio e vincule-os ao formulário.

   - Vincular dados ao formulário significa que os dados inseridos pelo usuário e quaisquer erros estão disponíveis quando precisamos exibir novamente o formulário.

3. Limpe e valide os dados.

   - A limpeza dos dados executa a higienização da entrada (por exemplo, removendo caracteres inválidos que podem ser usados para enviar conteúdo malicioso ao servidor) e os converte em tipos consistentes de Python.
   - A validação verifica se os valores são apropriados para o campo (por exemplo, estão no período certo, não são muito curtos ou muito longos etc.)

4. Se algum dado for inválido, exiba novamente o formulário, desta vez com valores preenchidos pelo usuário e mensagens de erro para os campos problemáticos.
5. Se todos os dados forem válidos, execute as ações necessárias (por exemplo, salve os dados, envie e envie por e-mail, retorne o resultado de uma pesquisa, faça o upload de um arquivo etc.)
6. Quando todas as ações estiverem concluídas, redirecione o usuário para outra página.

O Django fornece várias ferramentas e abordagens para ajudá-lo nas tarefas detalhadas acima. O mais fundamental é a classe `Form`, o que simplifica a geração de HTML de formulário e a limpeza/validação de dados. Na próxima seção, descreveremos como os formulários funcionam usando o exemplo prático de uma página para permitir que os bibliotecários renovem os livros.

> **Nota:** Entendendo como `Form` é usado para ajudá-lo quando discutirmos as classes de estrutura de formulário mais "de alto nível" do Django.

## Renew-book form usando uma function view

Em seguida, adicionaremos uma página para permitir que os bibliotecários renovem os livros emprestados. Para fazer isso, criaremos um formulário que permita aos usuários inserir um valor de data. Preencheremos o campo com um valor inicial três semanas a partir da data atual (o período normal de empréstimo) e adicionaremos alguma validação para garantir que o bibliotecário não possa inserir uma data no passado ou uma data muito distante no futuro. Quando uma data válida for inserida, nós a escreveremos no registro atual no campo `BookInstance.due_back`.

O exemplo usará uma function-based view e uma classe `Form`. As seções a seguir explicam como os formulários funcionam e as alterações que você precisa fazer em nosso projeto _LocalLibrary_.

### Form

A classe `Form` é o coração do sistema de manipulação de formulários do Django. Ele especifica os campos no formulário, seu layout, exibe widgets, rótulos, valores iniciais, valores válidos e (uma vez validadas) as mensagens de erro associadas a campos inválidos. A classe também fornece métodos para renderizar-se em modelos usando formatos predefinidos (tabelas, listas etc.) ou para obter o valor de qualquer elemento (habilitando a renderização manual refinada).

#### Declarando um Form

A sintaxe da declaração para um `Form` é muito semelhante ao da declaração de um `Model`, e compartilha os mesmos tipos de campo (e alguns parâmetros semelhantes). Isso faz sentido porque, em ambos os casos, precisamos garantir que cada campo lide com os tipos corretos de dados, seja restrito a dados válidos e tenha uma descrição para exibição/documentação.

Os dados do formulário são armazenados no arquivo forms.py de um aplicativo, dentro do diretório do aplicativo. Crie e abra o arquivo **locallibrary/catalog/forms.py**. Para criar um `Form`, nós importamos a biblioteca `forms`, deriva da classe `Form`, e declarar os campos do formulário. Uma classe de formulário muito básica para nosso formulário de renovação de livros da biblioteca é mostrada abaixo - adicione-a ao seu novo arquivo:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Campos do Form

Nesse caso, temos um único [`DateField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#datefield) para inserir a data de renovação que será renderizada em HTML com um valor em branco, o valor padrão da label "_Renewal date:_", e algum texto de ajuda: "_Enter a date between now and 4 weeks (default 3 weeks)._" Como nenhum dos outros argumentos opcionais é especificado, o campo aceita datas usando o [input_formats](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2016-11-06), MM/DD/YYYY (02/26/2016), MM/DD/YY (10/25/16), e será renderizado usando o padrão [widget](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#widget): [DateInput](https://docs.djangoproject.com/en/2.1/ref/forms/widgets/#django.forms.DateInput).

Existem muitos outros tipos de campos de formulário que você reconhecerá amplamente por sua semelhança com as classes de campo de modelo equivalentes: [`BooleanField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#booleanfield), [`CharField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#charfield), [`ChoiceField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#choicefield), [`TypedChoiceField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#typedchoicefield), [`DateField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#datefield), [`DateTimeField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#datetimefield), [`DecimalField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#decimalfield), [`DurationField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#durationfield), [`EmailField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#emailfield), [`FileField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#filefield), [`FilePathField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#filepathfield), [`FloatField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#floatfield), [`ImageField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#imagefield), [`IntegerField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#integerfield), [`GenericIPAddressField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#genericipaddressfield), [`MultipleChoiceField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#multiplechoicefield), [`TypedMultipleChoiceField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#typedmultiplechoicefield), [`NullBooleanField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#nullbooleanfield), [`RegexField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#regexfield), [`SlugField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#slugfield), [`TimeField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#timefield), [`URLField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#urlfield), [`UUIDField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#uuidfield), [`ComboField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#combofield), [`MultiValueField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#multivaluefield), [`SplitDateTimeField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#splitdatetimefield), [`ModelMultipleChoiceField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#modelmultiplechoicefield), [`ModelChoiceField`](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#modelchoicefield).

Os argumentos comuns à maioria dos campos estão listados abaixo (estes têm valores padrão sensíveis):

- [required](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#required): Se `True`, o campo não pode ser deixado em branco ou receber um valor `None`. Os campos são obrigatórios por padrão, então você deve definir `required=False` para permitir valores em branco no formulário.
- [label](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#label): O label a ser usado ao renderizar o campo em HTML. Se um [label](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#label) não for especificado, o Django criará um a partir do nome do campo colocando em maiúscula a primeira letra e substituindo sublinhados por espaços (e.g. _Renewal date_).
- [label_suffix](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#label-suffix): Por padrão, dois pontos são exibidos após o rótulo (e.g. Renewal date**:**). Esse argumento permite especificar um sufixo diferente contendo outros caractere(s).
- [initial](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#initial): O valor inicial para o campo quando o formulário é exibido.
- [widget](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#widget): O widget de exibição a ser usado.
- [help_text](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#help-text) (como visto no exemplo acima): Texto adicional que pode ser exibido em formulários para explicar como usar o campo.
- [error_messages](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#error-messages): Uma lista de mensagens de erro para o campo. Você pode substituí-los por suas próprias mensagens, se necessário.
- [validators](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#validators): Uma lista de funções que serão chamadas no campo quando validadas.
- [localize](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#localize):Permite a localização da entrada de dados do formulário (consulte o link para obter mais informações).
- [disabled](https://docs.djangoproject.com/en/2.1/ref/forms/fields/#disabled): O campo é exibido, mas seu valor não pode ser editado se este for `True`. O padrão é `False`.

#### Validação

O Django fornece vários locais onde você pode validar seus dados. A maneira mais fácil de validar um único campo é substituir o método `clean_<fieldname>()` para o campo que você deseja verificar. Por exemplo, podemos validar esse valor inserido `renewal_date` daqui a quatro semanas, implementando `clean_renewal_date()` como mostrado abaixo.

Atualize seu arquivo forms.py para ficar assim:

```python
import datetime

from django import forms
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Check if a date is not in the past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Check if a date is in the allowed range (+4 weeks from today).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

Há duas coisas importantes a serem observados. A primeira é que temos nossos dados usando `self.cleaned_data['renewal_date']` e que nós retornaremos esses dados ou não podemos alterá-lo no final da função. Este passo nos leva a dados "limpos" e higienizados de potencialmente inseguro usando os validadores de entrada padrão e convertidos para o tipo padrão correto para os dados (neste caso, um objeto Python `datetime.datetime`).

O segundo ponto é que, se um valor cai fora da nossa gama que levanta um `ValidationError`, especificando o texto de erro que deseja exibir no formulário se um valor inválido for inserido. Os exemplos acima também envolvem este texto em um dos [Django's translation functions](https://docs.djangoproject.com/en/2.1/topics/i18n/translation/) `ugettext_lazy()` (importado como `_()`), que é uma boa prática se você quiser traduzir o seu site mais tarde.

> **Nota:** Existem muitos outros exemplos e métodos para validar os forms [Form e field validation](https://docs.djangoproject.com/en/2.1/ref/forms/validation/) (Django docs). Por exemplo, nos casos em que você tem vários campos que dependem uns dos outros, você pode substituir a função [Form.clean()](https://docs.djangoproject.com/en/2.1/ref/forms/api/#django.forms.Form.clean) e novamente levantar uma `ValidationError`.

Isso é tudo que necessitamos para o form neste exemplo?

### Configuração da URL

Antes de criar nossa view, vamos adicionar a configuração da URL para a pagina _renew-books_. Copie a seguinte configuração para o final do aquivo **locallibrary/catalog/urls.py**.

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

A configuração da URL irá redirecionar as URLs com o formato **/catalog/book/_\<bookinstance id>_/renew/** para a função chamada `renew_book_librarian()` em **views.py**, e enviar o id `BookInstance` como parâmetro nomeado `pk`. O padrão corresponde apenas se `pk` estiver com a formatação `uuid` correta.

> **Nota:** Podemos citar nos nossos dados capturados na URL "`pk`" qualquer coisa que quisermos, porque nós temos o controle completo sobra a função view (nós não estamos usando uma view detail genérica, onde se espera os parâmetros com um certo nome). Contudo, a abreviação `pk` para "chave primária", é uma convenção razoável para uso!

### View

Como discutido no [processo de manipulação de formulários Django](#django_form_handling_process) acima, a view renderizará o formulário padrão chamado pela primeira vez e então retorná-lo com mensagens de erro se os dados forem inválidos, ou processar os dados e redirecioná-lo para uma nova página se os dados forem válidos.A fim de executar essas ações diferentes, a view deve ser capas de saber se está sendo chamada pela primeira vez para renderizar o form padrão ou um subsequente para a validação dos dados.

Para forms que usam uma solicitação `POST` para enviar informações para o servidor, o padrão mais comum para a view é testar se o tipo de solicitação é `POST` (`if request.method == 'POST':`) para identificar requisições válidas de formulário e `GET` (usando uma condição `else`) para identificar a requisição de criação do form inicial. Se você deseja enviar seus dados usando uma reuquisição `GET` uma abordagem típica para identificar se é a primeira ou subsequente requisição é ler os dados do formulário (por exemplo, ler um valor oculto no form).

O processo de renovação de livros será gravado em nosso banco de dados, portanto, por convenção, usamos a abordagem de requisição `POST`. O fragmento de código abaixo mostra o padrão (bem padrão) para esse tipo de exibição de função.

```python
import datetime

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

def renew_book_librarian(request, pk):
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
```

Primeiro, importamos nosso formulário (`RenewBookForm`) e outros objetos/métodos úteis usados no corpo da função _view_:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/2.1/topics/http/shortcuts/#get-object-or-404): Retorna um objeto especificado de um modelo com base em seu valor de chave primária, e gera uma exceção `Http404` (não encontrada) se o registro não existir.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/2.1/ref/request-response/#django.http.HttpResponseRedirect): Isso cria um redirecionamento para uma URL especificada (código de status HTTP 302).
- [`reverse()`](https://docs.djangoproject.com/en/2.1/ref/urlresolvers/#django.urls.reverse): Isso gera uma URL a partir de uma configuração de nome de URL e um conjunto de argumentos. É o equivalente em Python da tag `url` que usamos em nossos _templates_.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Uma biblioteca Python para a manipulação de dadas e tempo.

Na _view_, primeiro usamos o argumento `pk` em `get_object_or_404()` para obter o `BookInstance` atual (se isso não existir, a _view_ será imediatamente encerrada e a página exibirá um erro "não encontrada"). Se essa não for uma solicitação `POST` (manipulada pela cláusula `else`) criamos o formulário padrão passando o valor `initial` para o campo `renewal_date` (como mostrado abaixo em negrito, isso é, 3 semanas a partir da data atual).

```python
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a GET (or any other method) create the default form
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Depois de criar o _form_, chamamos `render()` para criar a página HTML, especificando o _template_ e o _context_ que contém o nosso _form_. Nesse caso, o _context_ também contem nosso `BookInstance`, que usaremos no _template_ para fornecer informações sobre o livro que estamos renovando.

No entenato, se essa for uma solicitação `POST` , criamos nosso objeto `form` e prenchemos com dados da requisição. Esse processo é chamado _"binding"_ e permite validar o formulário. Em seguida, verificamos se o formulário é válido, que executa todo o código de validação em todos os campos — incluindo o código genérico para verificar se nosso campo de data é realmente uma data válida e a função específica `clean_renewal_date()` do nosso formulário para verificar se a data está na faixa certa.

```python
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

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Se o formulário não é válido, chamamos `render()` novamente, mas dessa vez o valor passado de _form_ no _context_ incluirá mensagens de erro.

Se o formulário é válido, então podemos começar a utilizar os dados, acessando-o por meio do atributo`form.cleaned_data` (Ex. `data = form.cleaned_data['renewal_date']`). Aqui, apenas salvamos os dados no atributo `due_back` do objeto `BookInstance` associado.

> **Aviso:** **Importante**: Embora você também possa acessar os dados do formulário diretamente por meio do _request_ (por exemplo, `request.POST['renewal_date']` ou `request.GET['renewal_date']` se utilizando requisição GET), isso NÃO é recomendado. O dado limpo é "higienizado", validado, e convertido em tipo compatível com Python.

A estapa final da manipulação de formulário na parte da _view_ é redirecionar para outra página, geralmente uma página de "êxito". Nesse caso, usamos `HttpResponseRedirect` e `reverse()` para redirecionar para a _view_ chamada `'all-borrowed'` (isso foi criado como desafio em [Tutorial Django Parte 8: Autenticação de usuário e permissões](/pt-BR/docs/Learn/Server-side/Django/authentication_and_sessions#Challenge_yourself)). Se você não criou está página considere redirecionar para a página principal na URL '/').

Isso é tudo que é necessário para a manipulação do formulario, mas ainda precisamo restringir o acesso a _view_ aos bibliotecários. Provavelmente devemos criar uma nova permissão em `BookInstance` ("`can_renew`"), mas, para simplificar as coisa aqui, apenas usamos o _decorator_ da função*,* `@permission_required` com nossa permissão existente `can_mark_returned`.

A _view_ final, é portanto, como mostrado abaixo. Por favor, copie isso na parte inferior de **locallibrary/catalog/views.py**.

```
import datetime

from django.contrib.auth.decorators import permission_required
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

@permission_required('catalog.can_mark_returned')
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
```

### O _template_

Crie o _template_ mencionado na _view_ (**/catalog/templates/catalog/book_renew_librarian.html**) e copie o código abaixo nele:

```html
{% extends "base_generic.html" %}

{% block content %}
  <h1>Renew: \{{ book_instance.book.title }}</h1>
  <p>Borrower: \{{ book_instance.borrower }}</p>
  <p{% if book_instance.is_overdue %} class="text-danger"{% endif %}>Due date: \{{ book_instance.due_back }}</p>

  <form action="" method="post">
    {% csrf_token %}
    <table>
    \{{ form.as_table }}
    </table>
    <input type="submit" value="Submit">
  </form>
{% endblock %}
```

A maior parte disso será totalmente familiar dos tutoriais anteriores. Estendemos o _template_ base e então redefinimos o bloco _content_. Somos capazes de referenciar `\{{ book_instance }}` (e suas variáveis) porque foi passado no objeto _context_ na função `render()`, e nós as usamos para listar o título do livro, tomador do empréstimo, e a data de devolução original.

O código do formulário é relativamente simples. Primeiro, declaramos a tag `form`, especificando onde o formulário deve ser submetido (`action`) e o `method` para submeter os dados (nesse caso, um "HTTP POST") — se você lembrar da visão geral de [Formulários HTML](#HTML_forms) na parte superior da página, uma `action` vazia, como mostrada, significa que os dados do formulário serão postados de volta para a URL atual da página (que é o que queremos!). Dentro das tags, definimos a entrada `submit`, que um usuário pode apertar para submeter os dados. O `{% csrf_token %}` adicionado apenas dentro das tags do formulário é parte da proteção de falsificação ente sites (cross-site forgery protection) do Django.

> **Nota:** Adicione o `{% csrf_token %}` para todos os _templates_ Django que você cria que utiliza `POST` para submeter dados. Isso reduzirá a chance de que os formulários sejam invadidos por usuários maliciosos.

Tudo que resta é a variável `\{{ form }}` do _template_, que passamos para o _template_ no dicionário _context_. Talvez, sem supresa, quando usado como mostrado, isto fornece a renderização padrão de todos os campos do formulário, incluindo seus _labels_, _widgets_ e texto de ajuda — a renderização é como mostrado abaixo:

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2016-11-08"
      required />
    <br />
    <span class="helptext"
      >Enter date between now and 4 weeks (default 3 weeks).</span
    >
  </td>
</tr>
```

> **Nota:** Talvez não seja óbvio porque temos apenas um campo, mas, por padrão, todo campo é definido em sua própria linha de tabela. Essa mesma renderização é fornecida se você referenciar a váriavel de _template_ `\{{ form.as_table }}`.

Se você fosse inserir uama data inválida, você também obteria uma lista dos erros renderizados na página (mostrado em negrito abaixo).

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <ul class="errorlist">
      <li>Invalid date - renewal in past</li>
    </ul>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2015-11-08"
      required />
    <br />
    <span class="helptext"
      >Enter date between now and 4 weeks (default 3 weeks).</span
    >
  </td>
</tr>
```

#### Outras maneiras de usar variável de formulário de _template_

Usando `\{{ form.as_table }}` como mostrado acima, cada campo é renderizado como uma linha da tabela. Você também pode renderizar cada campo como um item da lista (usando `\{{ form.as_ul }}` ) como um parágrafo (usando `\{{ form.as_p }}`).

Também é possível ter controle completo sobre a renderização de cada parte do formulário, indexando suas propriedades usando notação de ponto. Assim, por exemplo, podemos acessar vários itens separados pelo nosso campo `renewal_date`:

- `\{{ form.renewal_date }}:` O campo todo.
- `\{{ form.renewal_date.errors }}`: A lista de erros.
- `\{{ form.renewal_date.id_for_label }}`: O id do _label_.
- `\{{ form.renewal_date.help_text }}`: O texto de ajuda do campo.

Para mais exemplos de como renderizar formulários manualmente em _templates_ e fazer loop nos campos de _templates_, veja [Trabalhando com formulários > Renderizando campos manualmente](https://docs.djangoproject.com/en/2.1/topics/forms/#rendering-fields-manually) (Django docs).

### Testando a página

Se você aceitou o "desafio" em [Tutorial Django Parte 8: Autenticação de usuário e permissões](/pt-BR/docs/Learn/Server-side/Django/authentication_and_sessions#Challenge_yourself) você terá uma lista de todos os livros emprestados na biblioteca, que é visível apenas aos funcionários da biblioteca. Podemos adicionar um _link_ para nossa página de renovação ao lado de cada item, usando o código de modelo abaixo.

```django
{% if perms.catalog.can_mark_returned %}-
  <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>
{% endif %}
```

> **Nota:** Lembre que seu login de teste precisará ter a permissão "`catalog.can_mark_returned`" para acessar a página de renovação de livro (talvez use sua conta de superusuário).

Você pode, alternativamente, construir manualmente uma URL de teste como esta — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/`) (um id válido de _bookinstance_ pode ser obtido navegando para a página de detalhes de um livro em sua biblioteca, e copiando o campo`id`).

### Com o que se parece?

Se você tiver sucesso, o formulário padrão será semelhante a este:

![](forms_example_renew_default.png)

O formulário com um valor inválido inserido terá a seguinte aparência:

![](forms_example_renew_invalid.png)

A lista de todos os livros com o link de renovação será assim:

![](forms_example_renew_allbooks.png)

## ModelForms

Criar uma classe`Form` usando a abordagem descrita acima é muito flexível, permitindo criar qualquer tipo de página de formulário que você desejar e associá-la a qualquer modelo ou modelos.

Contudo, se você só precisa de um formulário para mapear os campos de um único modelo, então seu modelo já definirá a maioria das informações que vocÊ precisa em seu formulário: campos, rótulos, texto de ajuda, etc. Em vez de recriar as definições do modelo em seu formulário, é mais fácil usar a classe auxiliar [ModelForm](https://docs.djangoproject.com/en/2.1/topics/forms/modelforms/) para criar o formulário a partir do seu modelo. Esse `ModelForm` pode ser usado em suas _views_ exatamente da mesma maneira como um `Form` comum.

Uma `ModelForm` contém o mesmo campo que nossa `RenewBookForm` original, como mostrado abaixo. Tudo que você precisa fazer para criar o formulário é adicionar `class Meta` com o `model` (`BookInstance`) associado e uma lista dos `fields` do modelo a serem incluídos no formulário (você pode incluir todos os campos usando `fields = '__all__'`, ou pode usar `exclude` (em vez de `fields`) para especificar os campos do modelo a não incluir).

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> **Nota:** Isso pode não parecer muito mais simples do que apenas usar um `Form` (e não é nesse caso, porque temos apenas um campo). No entanto, se você tiver muitos campos, isso pode reduzir a quantidade de código significativamente!

O restante das informações vem das definições de campo do modelo (ex. rótulos, _widgets_, texdo de ajuda, mensagens de erro). Se isso não for suficiente, então podemos substituí-los em nossa `class Meta`, especificando um dicionário contendo o campo para mudar e seu novo valor. Por exemplo, neste formulário podemos querer um rótulo para nosso campo de "_Renewal date_" (em vez do padrão baseado no padrão com base no nome do campo: _Due Back_), e também queremos que nosso campo de ajuda seja específico para esse caso de uso. A `Meta` abaixo mostra como substituir esses campos, e você pode definir `widgets` and `error_messages` da mesma forma, se os padrões não forem suficientes.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Para adicionar validação você pode usar a mesma abordagem como uma `Form` normal — você define uma função chamada `clean_field_name()` e _raise_ a exceção `ValidationError` para valores inválidos. A única diferença em relação ao nosso _form_ original é que o campo do modelo é chamdo `due_back` e não "`renewal_date`". Essa mudança é necessária pois o campo correspondente em `BookInstance` é chamado `due_back`.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    def clean_due_back(self):
       data = self.cleaned_data['due_back']

       # Check if a date is not in the past.
       if data < datetime.date.today():
           raise ValidationError(_('Invalid date - renewal in past'))

       # Check if a date is in the allowed range (+4 weeks from today).
       if data > datetime.date.today() + datetime.timedelta(weeks=4):
           raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

       # Remember to always return the cleaned data.
       return data

    class Meta:
        model = BookInstance
        fields = ['due_back']
        labels = {'due_back': _('Renewal date')}
        help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

A classe `RenewBookModelForm` acima agora é funcionalmente equivalente a nossa original `RenewBookForm`. Você poderia importar e usar onde quer que você use `RenewBookForm` desde que você também atualize o nome da variável do formulário correspondente de `renewal_date` para `due_back` como na segunda declaração do formulário: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Views genéricas de edição

O algoritmo de manipulação de formulários que usamos em nosso exemplo de função _view_ acima, representa um padrão extremamente comum nas _views_ de edição de formulário. Django abstrai grande parte desse "_boilerplate_" (trabalho repetitivo) para você, criando [views genéricas de edição](https://docs.djangoproject.com/en/2.1/ref/class-based-views/generic-editing/) para views de criação, edição e exclusão baseadas em modelos. Não apenas lidam com o comportamento de visualização, mas também criam automaticamente para você a classe de formulário (uma `ModelForm`) a partir do modelo.

> **Nota:**Além das _views_ de edição descritas aqui, há também uma classe [FormView](https://docs.djangoproject.com/en/2.1/ref/class-based-views/generic-editing/#formview), que fica em algum lugar entre nossa função _view_ e outra _view_ genérica em termos de "flexibilidade" vs "esforço de codificação". Usando `FormView`, você ainda precisa criar seu `Form`, mas não precisa implementar todos os padrões de manipulação de formulário. Em vez disso, você tem apenas que fornecer uma implementação da função que será chamada assim que o envio for válido.

Nessa seção vamos usar _views_ genericas de edição para criar páginas para adicionar funcionalidades para criar, editar e excluir registros de `Author` da nossa biblioteca — fornecendo efetivamente uma reimplementação básica de parte do site _Admin_ (isso poderá ser útil se você precisa oferecer funcionalidades de administrador de uma maneira mais flexível que possa ser fornecida pelo dite _Admin_).

### _Views_

Abra o arquivo das _views_ (**locallibrary/catalog/views.py**) e acrescente o seguinte bloco de código na parte inferior:

```python
from django.views.generic.edit import CreateView, UpdateView, DeleteView
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
    success_url = reverse_lazy('authors')
```

Como você pode ver, para criar, atualizar e excluir as _views_, você precisa derivar de `CreateView`, `UpdateView`, e `DeleteView` (respectivamente) e então definir o modelo associado.

Para os casos "criar" e "atualizar" você também precisa especificar os campos para mostrar no formulário (usando a mesma sintaxe que para `ModelForm`). Nesse caso, nós mostramos ambas as sintaxes para mostrar todos (_"all"_) campos e como você pode listar eles individualmente. Você também pode especificar valores iniciais para cada campo usando um dicionário com pares nome_campo/valor (aqui, arbitrariamente, definimos a data de morte para fins de demonstração — talvez você queira remover isso!). Por padrão, essas _views_ irão redirecionar, se houver sucesso, para uma página mostrando o item do modelo recentemente criado/editado, que no nosso caso será a página de visualização de detalhes do autor que criamos em um tutorial anterior. Você pode especificar ums local de redirecionamento alternativo, declarando explicitamente o parâmetro `success_url` (como feito na classe `AuthorDelete`).

A classe `AuthorDelete` não precisa mostrar nenhum dos campos, então eles não precisam ser especificados. No entanto, você precisa especificar a `success_url`, porque não há um valor padrão óbvio para o Django usar. Nesse caso, usamos a função [`reverse_lazy()`](https://docs.djangoproject.com/en/2.1/ref/urlresolvers/#reverse-lazy) para redirecioanr para nossa lista de autores depois que um autor é excluido — `reverse_lazy()` é uma versão executada "preguiçosamente" de `reverse()`, usada aqui porque estamos fornecendo uma URL para um atributo baseado em classe de _view_.

### Templates

As views "create" e "update" usam o mesmo template por padrão, que serão nomeadas seguindo o modelo: `model_name_form.html` (você pode mudar o sufixo para algo diferente de **\_form** usando o campo `template_name_suffix` em sua view, ex. `template_name_suffix = '_other_suffix'`)

Crie o arquivo de _template_ **locallibrary/catalog/templates/catalog/author_form.html** e copie o texto abaixo.

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
    {% csrf_token %}
    <table>
    \{{ form.as_table }}
    </table>
    <input type="submit" value="Submit">
  </form>
{% endblock %}
```

Isso é semelhante aos nossos formulários anteriores e renderiza os campos usando uma tabela. Note também como novamente declaramos o `{% csrf_token %}` para garantir que nossos formulários são resistentes a ataques CSRF.

A _view_ "delete" espera encontrar um _template_ nomeado com o formato `model_name_confirm_delete.html` (novamente, você pode mudar o sufixo usando `template_name_suffix` em sua _view_). Crie o arquivo de _template_ `locallibrary/catalog/templates/catalog/author_confirm_delete.html` e copie o texto abaixo.

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Delete Author</h1>

  <p>Are you sure you want to delete the author: \{{ author }}?</p>

  <form action="" method="POST">
    {% csrf_token %}
    <input type="submit" value="Yes, delete." />
  </form>
{% endblock %}
```

### URL configurations

Abra seu arquivo de configuração de URL (**locallibrary/catalog/urls.py**) e adicione a seguinte configuração no final do arquivo:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author_create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author_update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author_delete'),
]
```

Não há nada particularmente novo aqui! Você pode ver que as _views_ são classes, e portanto devem ser chamadas via `.as_view()`, e você deve poder reconhecer os padrões URL em cada caso. Devemos usar `pk` como o nome para nosso valor capturado de chave primária (_primary key_), como esse é o nome do parâmetro esperado pelas classes _view_.

As páginas de criação, atualização e remoção de autor agora estão prontas para teste (neste caso, não nos incomodaremos em conectá-las a barra lateral do site, embora você possa fazer se desejar).

> **Nota:** Usuários observadores devem ter notado que não fizemos nada para previnir que usuários não autorizadosde acessem as páginas! Deixamos isso como um exercício para você (dica: você pode usar `PermissionRequiredMixin` e criar uma nova permissão ou reutilizar nossa permissão `can_mark_returned`).

### Testando a página

Primeiro, efetue login no site com uma conta que possua as permissões que você decidiu que são necessárias para acessar a página de edição de autor.

Então navegue para a página de criação de autor: `http://127.0.0.1:8000/catalog/author/create/`, que deve parecer como a captura de tela abaixo.

![Form Example: Create Author](forms_example_create_author.png)

Entre com valores para os campos e então pressione **Submit** para dalvar o registro de autor. Você agora deve ser direcionado para uma visualização detalhada para o seu novo autor, com uma URL de algo como `http://127.0.0.1:8000/catalog/author/10`.

Você pode testar edição de registros enexando _/update/_ ao final da URL da página de detalhe (ex. `http://127.0.0.1:8000/catalog/author/10/update/`) — não mostramos uma captura de tela, porque se parace com a página de criação

Finalmente, podemos excluir a página anexando _delete_ ao final da URL da visualização detalhada do autor (ex. `http://127.0.0.1:8000/catalog/author/10/delete/`). Django deve exibir a página de exclusão mostrada abaixo. Pressione **Yes, delete.** para remover o registro e ser levado para a lista de todos os autores.

![](forms_example_delete_author.png)

## Desafie-se

Crie alguns _forms_ para criar, editar e excluir registros de `Book`. Você pode utilizar exatamente a mesma estrutura que a de `Authors`. Se seu _template_ **book_form.html** é apenas uma cópia renomeada de **author_form.html** , então a nova página "criar livro" será semelhante a captura de tela abaixo:

![](forms_example_create_book.png)

## Resumo

Criar e manipular formulários pode ser um processo complicado! Django torna muito mais fácil fornecendo mecanismos programáticos para declarar, renderizar e validar formulários. Além disso, Django fornece _views_ genéricas de edição de formulário, isso pode fazes quase todo trabalho para definir páginas que podem criar, editar e excluir registros associados com uma única instância de _model._

Há muito mais que pode ser feito com formulários (confira abaixo nossa lista Veja também), mas agora você deve entender como adicionar formulários básicos e o código de manipulação de formulários para seus próprios websites.

## Veja também

- [Trabalhando com formulários](https://docs.djangoproject.com/en/2.1/topics/forms/) (Django docs)
- [Escrevendo seu primeiro _app_ Django, parte 4 > Escrevendo um formulário simples](https://docs.djangoproject.com/en/2.1/intro/tutorial04/#write-a-simple-form) (Django docs)
- [A API _Forms_](https://docs.djangoproject.com/en/2.1/ref/forms/api/) (Django docs)
- [Form fields](https://docs.djangoproject.com/en/2.1/ref/forms/fields/) (Django docs)
- [Formulários e validação de campos](https://docs.djangoproject.com/en/2.1/ref/forms/validation/) (Django docs)
- [Manipulação de formulários com _views_ baseadas em classe](https://docs.djangoproject.com/en/2.1/topics/class-based-views/generic-editing/) (Django docs)
- [Criando formulários com _models_](https://docs.djangoproject.com/en/2.1/topics/forms/modelforms/) (Django docs)
- [Views genéricas de edição](https://docs.djangoproject.com/en/2.1/ref/class-based-views/generic-editing/) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}
