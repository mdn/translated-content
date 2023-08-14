---
title: "Tutorial Django Parte 10: Testando uma aplicação web Django"
slug: Learn/Server-side/Django/Testing
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}

À medida que websites crescem, eles se tornam mais difíceis de testar manualmente. Não apenas mais para testar, mas, as interações entre componentes tornam-se mais complexas, uma pequena mudança em uma área pode impactar outras áreas, portanto mais mudanças serão necessárias para garantir que tudo permaneça funcionando e erros não sejam introduzidos à medida que mais alterações forem feitas. Uma maneira de mitigar esses problemas é escrever testes automatizados, que podem ser executados facilmente e confiavelmente toda vez que você faz uma alteração. Este tutorial mostra como automatizar testes unitários do seu website utilizando o _framework_ de testes do Django.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Complete todos os tópicos de tutoriais anteriores, incluindo
        <a href="/pt-BR/docs/Learn/Server-side/Django/Forms"
          >Tutorial Django Parte 9: Trabalhando com formulários</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender como escrever testes unitários para websites baseados em
        Django.
      </td>
    </tr>
  </tbody>
</table>

## Visão Geral

A [Local Library](/pt-BR/docs/Learn/Server-side/Django/Tutorial_local_library_website) atualmente tem páginas para mostrar listas de todos livros e autores, visualização detalhada para itens `Book` e `Author`, uma página para renovar `BookInstance`s, e páginas para criar, atualizar e excluir itens `Author` (e também registros de `Book`, se você completou o desafio no [forms tutorial](/pt-BR/docs/Learn/Server-side/Django/Forms)). Mesmo com este site relativamente pequeno, navegar manualmente por cada página e verificar superficialmente se tudo funciona como esperado pode levar vários minutos. À medida que fizemos mudanças e aumentamos o site, o tempo necessário para verificar manualmente se tudo funciona "devidamente" só aumentará. Se continuássemos como estamos, eventuamente estaríamos gastando a maior parte do tempo testando, e muito pouco tempo aprimorando nosso código.

Testes automatizados podem realmente ajudar com este problema! Os benefícios óbvios são que eles podem ser executados muito mais rápido que testes manuais, podem testar com um nível mais baixo de detalhes, e testa exatamente a mesma funcionalidade (testadores humanos não são nem de longe tão confiáveis!). Por serem rápidos, testes automatizados podem ser executados mais regularmente, e se um teste falhar, eles apontam exatamente para onde o código não está funcionando como esperado .

Além disso, testes automatizados podem atuar como o primeiro "usuário" do mundo real do seu código, forçando você a ser rigoroso ao definir e documentar como seu website deve se comportar. Geralmente, eles são a base para seus exemplos de código e documentação. Por essas razões, alguns processos de desenvolvimento de código iniciam com definição e implementação de teste, o qual após o código é escrito para corresponder ao comportamento necessário (ex. [desenvolvimento guiado por testes](https://en.wikipedia.org/wiki/Test-driven_development) e [desenvolvimento guiado por comportamento](https://en.wikipedia.org/wiki/Behavior-driven_development)).

Este tutorial mostra como escrever testes automatizados para Django, adicionando um número de testes para o website _LocalLibrary_.

### Tipos de teste

Há inúmeros tipos, níveis, e classificações de testes e abordagens de testes. Os testes automatizados mais importantes são:

- Testes unitários
  - : Verifica o comportamento funcional de componentes individuais, geralmente ao nível de classe e função.
- Testes de regressão
  - : Testes que reproduzem erros históricos. Cada teste é executado inicialmente para verificar se o erro foi corrigido, e então executado novamente para garantir que não foi reintroduzido após alterações posteriores no código.
- Testes de integração
  - : Verifica como agrupamentos de componentes funcionam quando utilizados juntos. Testes de integração estão cientes das interações necessárias entre componentes, mas não necessariamente das operações internas de cada componente. Eles podem abranger agrupamentos simples de componentes através de todo website.

> **Nota:**Outros tipos de testes comuns incluem caixa preta (black box), caixa branca (white box), manual, automatizado, canário (canary), fumaça (smoke), conformidade (conformance), aceitação (acceptance), funcional (functional), sistema (system), _performance_, carga (load) e testes de _stress_. Procure-os para mais informaçãos.

### O que o Django fornece para testes?

Testar um website é uma tarefa complexa, porque isto é composto de várias camadas de lógica – do tratamento de requisições no nível HTTP, consultas de modelos, validação e processamento de formulários, e renderização de _template_.

Django fornece um _framework_ de teste com uma baixa hierarquia de classes construida na biblioteca padrão [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) de Python. Apesar do nome, este _framework_ de teste é adequado para testes unitários e de integração. O _framework_ Django adiciona métodos e ferramentas de API para ajudar a testar o comportamento web e específico do Django. Isso permite você simular requisições, inserir dados de teste e inspecionar as saídas do seu aplicativo. Django também fornece uma API ([LiveServerTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#liveservertestcase)) e ferramentas para [usar diferentes frameworks de teste](https://docs.djangoproject.com/en/2.1/topics/testing/advanced/#other-testing-frameworks), por exemplo, você pode integrar com o popular framework [Selenium](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) para simular um usuário interagindo com um navegador.

Para escrever um teste, você deriva de qualquer uma das classes base de teste de Django (ou _unittest_) ([SimpleTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#liveservertestcase)) e então escreve métodos separados para verificar se a funcionalidade específica funciona como esperado (testes usam métodos "_assert_" para testar se a expressão resulta em valores `True` ou `False`, ou se os dois valores são iguais, etc.). Quando você inicia a execução de um teste, o framework executa os métodos de teste escolhidos em suas classes derivadas. Os métodos de teste são executados independentemente, com configuração comum e/ou comportamento _tear-down_ definido na classe, como mostrado abaixo.

```python
class YourTestClass(TestCase):
    def setUp(self):
        # Setup run before every test method.
        pass

    def tearDown(self):
        # Clean up run after every test method.
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

    def test_something_that_will_fail(self):
        self.assertTrue(False)
```

A melhor classe base para maioria dos testes é [django.test.TestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#testcase). Esta classe de teste cria um banco de dados limpo antes dos testes serem executados, e executa todas as funções de teste em sua própria transação. A classe também possui um [Client](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#django.test.Client) de teste, que você pode utilizar para simular um usuário interagindo com o código no nível de _view_. Nas seções a seguir vamos nos concentrar nos testes unitários, criados utilizando a classe base [TestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#testcase).

> **Nota:** A classe [django.test.TestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#testcase) é muito conveniente, mas pode resultar em alguns testes mais lentos do que necessitam ser (nem todo teste necessita configurar seu próprio banco de dados ou simular interação de _view_). Uma vez que esteja familiar com o que você pode fazer com essa classe, você pode querer substituir alguns dos seus testes por classes de teste mais simples disponíveis.

### O que você deve testar?

Você deve testar todos aspectos do seu próprio código, mas nenhuma biblioteca ou funcionalidade oferecida como parte do Python ou Django.

Assim por exemplo, conseidere o _model_ `Author` definido abaixo. Você não precisa testar explicitamente se `first_name` e `last_name` foram armazenados corretamente como `CharField` no banco de dados, porque isso é algo definido pelo Django (embora, é claro, na prática você inevitávelmente testará esta funcionalidade durante o desenvolvimento). Você também não precisa testar se o `date_of_birth` foi validado para ser um campo de data, porque isso novamente é algo implementeado no Django.

No entanto, você deve verificar o texto utilizado para os _labels_ (_First name, Last name, Date of birth, Died_), e o tamanho do campo alocado para o texto (_100 caracteres_), porque isso faz parte do seu _design_ e algo que pode ser violado/alterado no futuro.

```python
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return '%s, %s' % (self.last_name, self.first_name)
```

Similarmente, você deve verificar se os métodos personalizados `get_absolute_url()` e `__str__()` se comportam como desejado, porque eles são sua lógica de código/negócios. No caso de `get_absolute_url()` você pode confiar que o método `reverse()` de Django, foi implementado corretamente, portanto, o que você esta testando é se a _view_ associada foi realmente definida.

> **Nota:** Leitores astutos podem notar que também gostariamos de restringir que a data de nascimento e morte como valores sensíveis, e verificar se a morte vem após o nascimento. Em Django, esta restrição seria adicionada a suas classes _form_ (Embora você possa definir validadores para campos do modelo e validadores de modelo, estes só serão usados no nível do formulário se forem chamdos pelo método clean() do model. Isso requer um ModelForm ou o método clean() do modelo precisa ser especificamente chamado).

Com isso em mente, vamos começar a ver como definir e executar testes.

## Visão geral da estrutura de teste

Antes de entrarmos nos detalhes de "o que testar", vamos primeiro examinar brevemente _onde_ e _como_ os testes são definidos.

Django usa o módulo _unittest_ com [descoberta de teste acoplada](https://docs.python.org/3/library/unittest.html#unittest-test-discovery), que descrobrirá testes no diretório de trabalho atual em qualquer arquivo nomeado com o padrão **test\*.py**. Fornecido o nome do arquivo adequadamente, você pode usar qualquer estrutura que desejar. Recomendamos que você crie um módulo para seu código de teste, e tenha arquivos separados para _models_, _views_, _forms_ e qualquer outro tipo de código que você precise testar. Por exemplo:

```
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Crie uma estrutura de arquivos como mostrado acima em seu projeto _LocalLibrary_. O **\_\_init\_\_.py** deve ser um arquivo vazio (isso informa ao Python que o diretório é um pacote). Você pode criar os três arquivos de teste copiando e renomeando o arquivo de teste do "esqueleto" **/catalog/tests.py**.

> **Nota:** O arquivo de teste **/catalog/tests.py** do "esqueleto", foi criado automaticamente quando nós [construimos o "esqueleto" do website Django](/pt-BR/docs/Learn/Server-side/Django/skeleton_website). É perfeitamente "legal" colocar todos seus testes dentro dele, mas se você testar devidamente, você acabará rapidamente com um arquivo de teste muito grande e incontrolável.
>
> Exclua o arquivo do "esqueleto", pois não precisamos dele.

Abra **/catalog/tests/test_models.py**. O arquivo deve importar `django.test.TestCase`, como mostrado:

```python
from django.test import TestCase

# Create your tests here.
```

Frequentemente, você adicionará uma classe de teste para cada _model/view/form_ que deseja testar, com métodos individuais para testar funcionalidades específicas. Em outros casos, você pode desejar ter uma classe separada para testar um caso de uso específico, com funções de teste individuais que testam aspectos desse caso de uso (por exemplo, uma classe para testar se um campo do _model_ é validado corretamente, com funções para testar cada um dos possíveis casos de falha). Novamente, a estrutura depende muito de você, mas é melhor se você for consistente.

Adicione a classe de teste abaixo na parte inferior do arquivo. A classe demonstra como construir uma classe de teste derivando de `TestCase`.

```python
class YourTestClass(TestCase):
    @classmethod
    def setUpTestData(cls):
        print("setUpTestData: Run once to set up non-modified data for all class methods.")
        pass

    def setUp(self):
        print("setUp: Run once for every test method to setup clean data.")
        pass

    def test_false_is_false(self):
        print("Method: test_false_is_false.")
        self.assertFalse(False)

    def test_false_is_true(self):
        print("Method: test_false_is_true.")
        self.assertTrue(False)

    def test_one_plus_one_equals_two(self):
        print("Method: test_one_plus_one_equals_two.")
        self.assertEqual(1 + 1, 2)
```

A nova classe define dois métodos que você pode utilizar para aconfiguração de pré-teste (por exemplo, para criar quaisquer modelos ou outros objetos que precisará para to teste):

- `setUpTestData()` é chamado uma vez no início da execução do teste para configuração em nível de classe. Você usaria isso para criar objetos que não serão modificados ou alterados em nenhum dos métodos de teste.
- `setUp()` é chamado antes de toda função de teste para configurar qualquer objeto que possa ser modificado pelo teste (toda função de teste receberá uma versão "nova" desses objetos).

> **Nota:** As classes de teste também têm um método `tearDown()`, que não usamos. Este método não é particularmente útil para testes de banco de dados, pois a classe base `TestCase` cuida da desmontagem do banco de dados para você.

Abaixo desses, temos vários métodos de teste, que usam funções `Assert` para testar se as condições são verdadeiras, falsas ou iguais (`AssertTrue`, `AssertFalse`, `AssertEqual`). Se a condição não for avaliada como esperado, então o teste falhará e reportará o erro ao seu console.

`AssertTrue`, `AssertFalse`, `AssertEqual` são assertivas padrão fornecidas pelo **unittest**. Existem outras assertivas padão no _framework_ e também [Django especifica assertivas](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#assertions) para testar se uma _view_ redireciona (`assertRedirects`), para testar se um template específico foi utilizado (`assertTemplateUsed`), etc.

> **Nota:** Você normalmente não deve incluir funções **print()** em seus testes como mostrado acima. Nós fizemos isso aqui apenas para que você posssa ver no console a ordem que as funções de configuração são chamadas (na seção a seguir).

## Como executar os testes

A maneira mais fácil para executar todos os testes é usar o comando:

```bash
python3 manage.py test
```

Isso descobrirá todos arquivos nomeados com o padrão **test\*.py** no diretório atual e executará todos testes definidos usando as classes base apropriadas (aqui temos vários arquivos de teste, mas, atualmente, apenas **/catalog/tests/test_models.py** contém testes). Por padrão, os testes irão reportar individualmente apenas falhas no teste, seguidos por um resumo do teste.

> **Nota:** Se você obter erros semelhantes a: `ValueError: Missing staticfiles manifest entry ...` isso pode ocorrer porque o teste não é executado como _collectstatic_ por padrão e seu _app_ está usando uma classe de armazenamento que exige isto (veja [manifest_strict](https://docs.djangoproject.com/en/2.1/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) para mais informações). Existem várias maneiras de solucionar esse problema - o mais fácil é simplesmente executar _collectstatic_ antes de executar os testes:
>
> ```bash
> python3 manage.py collectstatic
> ```

Execute os testes no diretório raiz de _LocalLibrary_. Você deve ver uma saída como a abaixo.

```bash
> python3 manage.py test

Creating test database for alias 'default'...
setUpTestData: Run once to set up non-modified data for all class methods.
setUp: Run once for every test method to setup clean data.
Method: test_false_is_false.
setUp: Run once for every test method to setup clean data.
Method: test_false_is_true.
setUp: Run once for every test method to setup clean data.
Method: test_one_plus_one_equals_two.
.
======================================================================
FAIL: test_false_is_true (catalog.tests.tests_models.YourTestClass)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\Github\django_tmp\library_w_t_2\locallibrary\catalog\tests\tests_models.py", line 22, in test_false_is_true
    self.assertTrue(False)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.075s

FAILED (failures=1)
Destroying test database for alias 'default'...
```

Aqui vemos que tivemos uma falha no teste e podemos ver exatamente qual função falhou e por quê (essa falha é esperada, porque `False` não é `True`!).

> **Nota:** **Dica:** A coisa mais importante para aprender com a saída do teste acima é que é muito mais valioso se você utilizar nomes descritivos/informativos para seus objetos e métodos.

O texto acima mostrado em **negrito** normalmente não apareceria na saída do teste (isso é gerado pelas funções `print()` em nossos teste). Isso mostra como o método `setUpTestData()` é chamdo uma vez para classe e `setUp()` é chamado antes de cada método.

As próximas seções mostram como você pode executar testes específicos e como controlar quanta infromação os testes exibem.

### Mostrando mais informações de teste

Se você deseja obter mais informação sobre a execução do teste, você pode mudar a verbosidade (_verbosity)_. Por exemplo, para listar os sucessos do teste, bem como as falhas (e um monte de informações sobre como o banco de dados de teste está configurado) vocêpode definir a _verbosity_ para "2" como mostrado:

```bash
python3 manage.py test --verbosity 2
```

Os níveis permitidos de _verbosity_ são 0, 1, 2, e 3, com o padrão sendo "1".

### Executando testes específicos

Se você desseja executar um subconjunto de seus testes, você pode fazer isso especificando o caminho completo para o(s) pacote(s), módulos, subclasse `TestCase` ou método:

```bash
# Run the specified module
python3 manage.py test catalog.tests

# Run the specified module
python3 manage.py test catalog.tests.test_models

# Run the specified class
python3 manage.py test catalog.tests.test_models.YourTestClass

# Run the specified method
python3 manage.py test catalog.tests.test_models.YourTestClass.test_one_plus_one_equals_two
```

## Testes da LocalLibrary

Agora que sabemos como executar nosso testes e que tipo de coisas precisams testar, vamos ver alguns exemplos práticos.

> **Nota:**Não escreveremos todos os testes possíveis, mas isso deve lhe dar uma ideia de como testes trabalham e o que mais você pode fazer.

### Models

Como discutido acima, devemos testar qualquer coisa que faça parte do nosso projeto ou que seja definido por código que escrevemos, mas não bibliotecas/códigos que já foram testados pelo Django ou pela equipe de desenvolvimento do Python.

Por exemplo, considere o _model_ `Author` abaixo. Aqui devemos testar os _labels_ para todos os campos, porque, embora não tenhamos específicado explicitamente a maioria deles, temos um projeto que diz quais devem ser esses valores. Se não testamos os valores, não sabemos se os _labels_ dos campos têm os valores pretendidos. Similarmente, enquanto confiamos que o Django criará um campo com o tamanho específicado, vale a pena específicar um teste para este tamanho, para garantir que ele foi implementado como planejado.

```python
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.last_name}, {self.first_name}'
```

Abra nosso **/catalog/tests/test_models.py**, e substitua qualquer código existente pelo seguinte código de teste para o _model_ `Author`.

Aqui você verá que primeiro importamos `TestCase` e derivamos nossa classe de teste (`AuthorModelTest`) a partir dela, usando um nome descritivo para que possamos identificar facilmente quaiquer testes com falha na saída do teste. Nós então chamamos `setUpTestData()` para criar um objeto autor que iremos usar mas não modificaremos em nenhum dos testes.

```python
from django.test import TestCase

from catalog.models import Author

class AuthorModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Author.objects.create(first_name='Big', last_name='Bob')

    def test_first_name_label(self):
        author = Author.objects.get(id=1)
        field_label = author._meta.get_field('first_name').verbose_name
        self.assertEquals(field_label, 'first name')

    def test_date_of_death_label(self):
        author=Author.objects.get(id=1)
        field_label = author._meta.get_field('date_of_death').verbose_name
        self.assertEquals(field_label, 'died')

    def test_first_name_max_length(self):
        author = Author.objects.get(id=1)
        max_length = author._meta.get_field('first_name').max_length
        self.assertEquals(max_length, 100)

    def test_object_name_is_last_name_comma_first_name(self):
        author = Author.objects.get(id=1)
        expected_object_name = f'{author.last_name}, {author.first_name}'
        self.assertEquals(expected_object_name, str(author))

    def test_get_absolute_url(self):
        author = Author.objects.get(id=1)
        # This will also fail if the urlconf is not defined.
        self.assertEquals(author.get_absolute_url(), '/catalog/author/1')
```

Os testes de campo verificam se os valores dos _labels_ dos campos (`verbose_name`) e se o tamanho dos campos de caracteres são como esperado. Todos esses métodos possuem nomes descritivos e seguem o mesmo padrão:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEquals(field_label, 'first name')
```

As coisas interessantes a serem observadas aqui:

- Não podemos obter `verbose_name` diretamente utilizando `author.first_name.verbose_name`, porque `author.first_name` é uma _string_ (não um identificador para o objeto `first_name` que podemos utilizar para acessar suas propriedades). Em vez disso, precisamos utilizar o atributo `_meta` de _author_ para obter uma instância do campo e usá-la para consultar informações adicionais.
- Optamos por utilizar `assertEquals(field_label,'first name')` em vez de `assertTrue(field_label == 'first name')`. A razão para isso é que, se o teste falhar a saída do primeiro informa o que realmente era o _label_, que torna a depuração do problema um pouco mais fácil.

> **Nota:** Testes para os rótulos `last_name` e `date_of_birth` e também para o teste para o tamanho do `last_name` field foram omitidos. Adicione suas próprias versões agora, seguindo as convenções de nomeclatura e abordagens mostradas acima.

Também precisamos testar nossos métodos personalizados. Eles, essencialmente, apenas verificam se o nome do objeto foi construido como esperamos, usando o formato "Last Name", "First Name", e se a URL que obtemos para um item de `Author` é o que esperávamos.

```python
def test_object_name_is_last_name_comma_first_name(self):
    author = Author.objects.get(id=1)
    expected_object_name = f'{author.last_name}, {author.first_name}'
    self.assertEquals(expected_object_name, str(author))

def test_get_absolute_url(self):
    author = Author.objects.get(id=1)
    # This will also fail if the urlconf is not defined.
    self.assertEquals(author.get_absolute_url(), '/catalog/author/1')
```

Execute os testes agora. Se você criou o modelo Author como descrevemos no tutorial de modelos, é bem provável que você obtenha um erro para o _label_ `date_of_death` como mostrado abaixo. O teste está falhando porque foi escrito esperando que a definição do _label_ siga a convenção do Django de não colocar em maíúscula a primeira letra do _label_ (Django faz isso por você).

```bash
======================================================================
FAIL: test_date_of_death_label (catalog.tests.test_models.AuthorModelTest)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\...\locallibrary\catalog\tests\test_models.py", line 32, in test_date_of_death_label
    self.assertEquals(field_label,'died')
AssertionError: 'Died' != 'died'
- Died
? ^
+ died
? ^
```

Este é um bug muito pequeno, mas destaca como a escrita de testes pode verificar mais minuciosamente quaislquer suposições que você tenha feito.

> **Nota:** Altere o _label_ para o campo date_of_death (/catalog/models.py) para "died" e re-executes os testes.

Os padrões para testar os outros modelos são semelhantes, portanto não continuaremos discutindo mais isso. Sinta-se livre para criar seus próprios testes para nossos outros modelos.

### Forms

A filosofia para testar seus _forms_ é a mesma que para testar seus _models_; você precisa testar qualquer coisa que tenha codificado ou seu projeto especifica, mas não o comportamento do framework subjacente e outras bibliotecas de terceiros

Geralmente, isso significa que você deve testar se os _forms_ têm os campos que você deseja e se esses são exibidos com os _labels_ e texto de ajuda apropriados. Você não precisa verificar se o Django o tipo de campo corretamente (a menos que você tenha criado seu próprio campo e validação personalizados) — ex. você não precisa testar se um campo de email aceita apenas email. No entanto, você precisaria testar qualquer validação adicional que você espera que seja executada nos campos e quaisquer mensagens que seu código irá gerar para erros.

Considere nosso _form_ para renovação de livros. Ele tem apenas um campo para data de renovação, que terá um _label_ e um texto de ajuda que precisaremos verificar.

```python
class RenewBookForm(forms.Form):
    """Form for a librarian to renew books."""
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Check if a date is not in the past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Check if date is in the allowed range (+4 weeks from today).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

Abra nosso arquivo **/catalog/tests/test_forms.py** e substitua qualquer código existente pelo seguinte código de teste para o _form_ `RenewBookForm`. Nós iniciamos importando nosso _form_ e algumas bibliotecas Python e Django para ajudar testar funcionalidades relacionadas ao tempo. Em seguida, declaramos nossa classe de teste do _form,_ da mesma maneira que fizemos para _models_, usando um nome descritivo para a classe de teste derivada de `TestCase`.

```python
import datetime

from django.test import TestCase
from django.utils import timezone

from catalog.forms import RenewBookForm

class RenewBookFormTest(TestCase):
    def test_renew_form_date_field_label(self):
        form = RenewBookForm()
        self.assertTrue(form.fields['renewal_date'].label == None or form.fields['renewal_date'].label == 'renewal date')

    def test_renew_form_date_field_help_text(self):
        form = RenewBookForm()
        self.assertEqual(form.fields['renewal_date'].help_text, 'Enter a date between now and 4 weeks (default 3).')

    def test_renew_form_date_in_past(self):
        date = datetime.date.today() - datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_too_far_in_future(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4) + datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_today(self):
        date = datetime.date.today()
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())

    def test_renew_form_date_max(self):
        date = timezone.localtime() + datetime.timedelta(weeks=4)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())
```

As primeiras duas funções testam se os campos `label` e `help_text` são como esperados. Temos que acessar o campo usando o dicionário de campos (ex. `form.fields['renewal_date']`). Observe aqui que também precisamos testar se o valor do _label_ é `None`, porque mesmo que o Django processe o _label_ correto, retornará `None` se o valor não estiver definido explicitamente.

O restante das funções testam se o form é valido para datas de renovação dentro do intervalo aceitável e inválido para os valores foram do intervalo. Observe como construimos os valores teste de data em torno de nossa data atual (`datetime.date.today()`) usando `datetime.timedelta()` (nesse caso, especificando um número de dias ou semanas). Então, apenas criamos o _form_, passando nossos dados e testando se é válido.

> **Nota:** Aqui, na realidade, não usamos o banco de dados ou cliente teste. Considere modificar essses testes para utilizar [SimpleTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#django.test.SimpleTestCase).
>
> Também precisamos validar que os erros corretos sejam gerados se o form é inválido, no entanto, isso geralmente é feito no processamento da view, portanto trataremos disso na próxima seção.

Isso é tudo para _forms_; nós temos alguns outros, mas eles são automaticamente criados pelas nossas _views_ de edição baseada na classe genérica, e devem ser testadas lá! Execute os testes e confirme se nosso código ainda passa!

### Views

Para validar o comportamento das nossas _views_, utilzamos [Client](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#django.test.Client) de teste do Django. Essa classe funciona como um navegador web fictício que podemos usar para simular requisições `GET` and `POST` em uma URL e observar a resposta. Podemos ver quase tudo sobre a resposta, desde HTTP de baixo nível (cabeçalhos de resultados e códigos de status) até o _template_ que estamos utilizando para renderizar o HTML e os dados de contexto que estamos passando para ele. Também podemos ver a cadeia de redirecionamentos (se houver) e verificar a URL e o código de status em cada etapa. Isso nos permite verificar se cada _view_ esta fazendo o que é esperado.

Vamos iniciar com uma de nossas _views_ mais simples, que fornece uma lista de todos Autores. Isso é exibido na URL **/catalog/authors/** (uma URL chamada 'authors' na configuração de URL).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Como esta é uma _list view_ genérica, quase tudo é feito para nós pelo Django. Provavelmente, se você confia no Django, então a única coisa que você precisa testar é se a _view_ é acessível na URL correta e pode ser acessada usando seu nome. No entanto, se você está usando um desenvolvimento orientado a testes, você iniciará escrevendo testes que confirmam que a _view_ exibe todos Autores, paginando-os em lotes de 10.

Abra o arquivo **/catalog/tests/test_views.py** e substitua qualquer texto existente pelo seguinte código de teste para `AuthorListView`. Como antes, importamos nosso _model_ e algumas classe úteis. No método `setUpTestData()` configuramos vários objetos `Author` para que possamos testar nossa paginação.

```python
from django.test import TestCase
from django.urls import reverse

from catalog.models import Author

class AuthorListViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Create 13 authors for pagination tests
        number_of_authors = 13

        for author_id in range(number_of_authors):
            Author.objects.create(
                first_name=f'Christian {author_id}',
                last_name=f'Surname {author_id}',
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/catalog/authors/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)

    def test_view_uses_correct_template(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'catalog/author_list.html')

    def test_pagination_is_ten(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertTrue(len(response.context['author_list']) == 10)

    def test_lists_all_authors(self):
        # Get second page and confirm it has (exactly) remaining 3 items
        response = self.client.get(reverse('authors')+'?page=2')
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertTrue(len(response.context['author_list']) == 3)
```

Todos os teste usam o cliente (pertenecente a nossa classe derivada `TestCase`'s) para simular uma requisição `GET` e obter uma resposta. A primeira versão verifica uma URL específica URL (observe, apenas o caminho específico, sem o domínio), enquanto a segunda gera a URL a partir do seu nome na configuração da URL.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Uma vez que temos a resposta, consultamos o seu código de status, o _template_ usado, se a resposta é paginada ou não, o número de itens retonado e o número total de itens.

> **Nota:** Nota: Se você definir a variável `paginate_by` em seu arquivo **/catalog/views.py** para um número diferente de 10, atualize as linhas que testam se o número correto de itens é exibido nos _templates_ paginados acima e nas seções seguintes. Por exemplo, se você definiu a variável para a lista de autor para 5, atualize a linha acima para:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

A variável mais importante que demonstramos acima é `response.context`, que é a variável de contexto passada para o _template_ pela _view_. Isso é incrivelmente útil para testes, porque permite confirmar que nosso template está obtendo todos os dados necessários. Em outras palavras, podemos verificar se estamos utilizando o _template_ pretendido e quais dados o _template_ está obtendo, o que ajuda bastante a verificar que alguns problemas de renderização são apenas devido ao _template_.

#### _Views_ restritas a usuários logados

Em alguns casos, você desejará testar uma _view_ que é restrita apenas aos usuários logados. Por exemplo, nossa `LoanedBooksByUserListView` é muito similar a nossa _view_ anterior, mas está disponível apenas para usuários logados e exibe apenas os registros `BookInstance` que são emprestados pelo usuário atual, têm o status 'emprestado' e são ordenados "mais antigos primeiro".

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin, generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')
```

Adicione o código seguinte ao **/catalog/tests/test_views.py**. Aqui, primeiro usamos `SetUp()` para criar alguma contas de login de usuário e objetos `BookInstance` (junto com seus livros associados e outros registros) que usaremos posteriormente nos testes. Metade dos livros são emprestados para cada usuário teste, mas inicialmente definimos o status de todos os livros como "manutenção". Usamos `SetUp()` em vez de `setUpTestData()` porque modificaremos alguns desses objetos depois.

> **Nota:** O código `setUp()` abaixo, cria um livro com uma `Language` especificada, mas seu código pode não incluir o _model_ `Language`, pois foi criado como um desafio. Se esse for o caso, simplesmente comente as partes do código que cria ou importa objetos _Language_. Você também deve fazer isso na seção `RenewBookInstancesViewTest` a seguir.

```python
import datetime

from django.utils import timezone
from django.contrib.auth.models import User # Required to assign User as a borrower

from catalog.models import BookInstance, Book, Genre, Language

class LoanedBookInstancesByUserListViewTest(TestCase):
    def setUp(self):
        # Create two users
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        # Create a book
        test_author = Author.objects.create(first_name='John', last_name='Smith')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(
            title='Book Title',
            summary='My book summary',
            isbn='ABCDEFG',
            author=test_author,
            language=test_language,
        )

        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direct assignment of many-to-many types not allowed.
        test_book.save()

        # Create 30 BookInstance objects
        number_of_book_copies = 30
        for book_copy in range(number_of_book_copies):
            return_date = timezone.localtime() + datetime.timedelta(days=book_copy%5)
            the_borrower = test_user1 if book_copy % 2 else test_user2
            status = 'm'
            BookInstance.objects.create(
                book=test_book,
                imprint='Unlikely Imprint, 2016',
                due_back=return_date,
                borrower=the_borrower,
                status=status,
            )

    def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('my-borrowed'))
        self.assertRedirects(response, '/accounts/login/?next=/catalog/mybooks/')

    def test_logged_in_uses_correct_template(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'catalog/bookinstance_list_borrowed_user.html')
```

Para verificar se a _view_ será redirecionada para uma página de login se o usuário não estiver logado, usamos `assertRedirects`, como demonstrado em `test_redirect_if_not_logged_in()`. Para verificar se a página é exibida para um usuário logado, primeiro logamos com nosso usuário teste e então acessamos a página novamente e verificamos se obtivemos um `status_code` de 200 (successo).

O restante dos testes verificam se nossa _view_ retorna apenas livros emprestados ao nosso usuário atual. Copie o código abaixo e cole no final da classe de teste acima.

```python
    def test_only_borrowed_books_in_list(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check that initially we don't have any books in list (none on loan)
        self.assertTrue('bookinstance_list' in response.context)
        self.assertEqual(len(response.context['bookinstance_list']), 0)

        # Now change all books to be on loan
        books = BookInstance.objects.all()[:10]

        for book in books:
            book.status = 'o'
            book.save()

        # Check that now we have borrowed books in the list
        response = self.client.get(reverse('my-borrowed'))
        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        self.assertTrue('bookinstance_list' in response.context)

        # Confirm all books belong to testuser1 and are on loan
        for bookitem in response.context['bookinstance_list']:
            self.assertEqual(response.context['user'], bookitem.borrower)
            self.assertEqual('o', bookitem.status)

    def test_pages_ordered_by_due_date(self):
        # Change all books to be on loan
        for book in BookInstance.objects.all():
            book.status='o'
            book.save()

        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Confirm that of the items, only 10 are displayed due to pagination.
        self.assertEqual(len(response.context['bookinstance_list']), 10)

        last_date = 0
        for book in response.context['bookinstance_list']:
            if last_date == 0:
                last_date = book.due_back
            else:
                self.assertTrue(last_date <= book.due_back)
                last_date = book.due_back
```

Você também pode adicionar testes de paginação, se desejar!

#### Testando _views_ com _forms_

Testar views com forms é um pouco mais complicado que nos casos acima, porque você precisa testar mais caminhos de código: exibição inicial, exibição após falha de validação de dados e exibição após validação com sucesso. A boa notícia é que usamos o cliente para testar quase exatamente da mesma maneira que fizemos para _views_ somente de exibição.

Para demonstrar, vamos escrever alguns testes para a _view_ usada para renovar livros (`renew_book_librarian()`):

```python
from catalog.forms import RenewBookForm

@permission_required('catalog.can_mark_returned')
def renew_book_librarian(request, pk):
    """View function for renewing a specific BookInstance by librarian."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        book_renewal_form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # If this is a GET (or any other method) create the default form
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        book_renewal_form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'book_renewal_form': book_renewal_form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Precisamos testar se a _view_ está disponível apenas para usuários que têm a permissão `can_mark_returned`, e se eles são direcionados para uma página de erro HTTP 404 se tentarem renovar um `BookInstance` que não existe. Devemos verificar se o valor inicial do form é propagado com uma data três semanas no futuro e se a validação for bem sucedida somos redirecionados para a _view_ "all-borrowed books". Como parte da verificação dos testes de falha de validação, também verificaremos se nosso _form_ está enviando mensagens de erro apropriadas.

Adicione a primeira parte da classe de teste (mostrada abaixo) na parte inferior de **/catalog/tests/test_views.py**. Isso cria dois usuários e duas instâncias de livro, mas apenas concede a um usuário a permissão necessária para acessar a _view_. O código para conceder permissões durante os testes é mostrado em negrito:

```python
import uuid

from django.contrib.auth.models import Permission # Required to grant the permission needed to set a book as returned.

class RenewBookInstancesViewTest(TestCase):
    def setUp(self):
        # Create a user
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        permission = Permission.objects.get(name='Set book as returned')
        test_user2.user_permissions.add(permission)
        test_user2.save()

        # Create a book
        test_author = Author.objects.create(first_name='John', last_name='Smith')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(
            title='Book Title',
            summary='My book summary',
            isbn='ABCDEFG',
            author=test_author,
            language=test_language,
        )

        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direct assignment of many-to-many types not allowed.
        test_book.save()

        # Create a BookInstance object for test_user1
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance1 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user1,
            status='o',
        )

        # Create a BookInstance object for test_user2
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance2 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user2,
            status='o',
        )
```

Adicione os seguintes testes na parte inferior da classe de teste. Eles verificam se apenas usuários com a permissão correta (testuser2) podem aceesar a _view_. Verificamos todos os casos: quando o usuários não está logado, quando um usuário está logado mas não tem as permissões corretas, quando o usuário possui permissões, mas não é o tomador do empréstimo (deve ter êxito), e o que acontece quando eles tentam acessar uma `BookInstance` que não existe. Também verificamos se o _template_ correto é utilizado.

```python
   def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        # Manually check redirect (Can't use assertRedirect, because the redirect URL is unpredictable)
        self.assertEqual(response.status_code, 302)
        self.assertTrue(response.url.startswith('/accounts/login/'))

    def test_redirect_if_logged_in_but_not_correct_permission(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 403)

    def test_logged_in_with_permission_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance2.pk}))

        # Check that it lets us login - this is our book and we have the right permissions.
        self.assertEqual(response.status_code, 200)

    def test_logged_in_with_permission_another_users_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))

        # Check that it lets us login. We're a librarian, so we can view any users book
        self.assertEqual(response.status_code, 200)

    def test_HTTP404_for_invalid_book_if_logged_in(self):
        # unlikely UID to match our bookinstance!
        test_uid = uuid.uuid4()
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk':test_uid}))
        self.assertEqual(response.status_code, 404)

    def test_uses_correct_template(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'catalog/book_renew_librarian.html')
```

Adicione o próximo método de teste, como mostrado abaixo. Isso verifica se a data inicial para o form é três semanas no futuro. Observe como podemos acessar o valor do valor inicial do campo do form (mostrado em negrito).

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

> **Aviso:** Se você usar a classe _form_ `RenewBookModelForm(forms.ModelForm)` em vez da classe `RenewBookForm(forms.Form)`, então o nome do campo do _form_ será **'due_back'** em vez de **'renewal_date'**.

O próximo teste (adicione isso a classe também) verifica se a _view_ redireciona para uma lista de todos livros emprestados, se a renovação for bem-sucedida. O que difere aqui é que pela primeira vez mostramos como você pode fazer `POST` de dados usando o cliente. Os dados do _post_ são o segundo argumento da função _post_, e são especificados como um dicionário de chave/valores.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> **Aviso:** A view _all-borrowed_ foi adicionada como um _desafio_, e seu código pode, em vez disso, direcionar para a página inicial '/'. Nesse caso, modifique as últimas duas linhas do código de teste para que sejam como o código abaixo. O `follow=True` na solicitação, garante que a solicitação retorna a URL final de destino (portanto verifique `/catalog/` em vez de `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True )
>  self.assertRedirects(response, '/catalog/')
> ```

Copie as última duas funções para a classe, como visto abaixo. Elas testam novamente as requisições `POST`, mas nesse caso, com datas inválidas de renovação. Utilizamos `assertFormError()` para verificar se as mensagens de erro são as esperadas.

```python
    def test_form_invalid_renewal_date_past(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        date_in_past = datetime.date.today() - datetime.timedelta(weeks=1)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}), {'renewal_date': date_in_past})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response, 'form', 'renewal_date', 'Invalid date - renewal in past')

    def test_form_invalid_renewal_date_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        invalid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=5)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}), {'renewal_date': invalid_date_in_future})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response, 'form', 'renewal_date', 'Invalid date - renewal more than 4 weeks ahead')
```

Os mesmos tipos de técnicas podem ser usadas para testar a outra _view_.

### _Templates_

Django fornece APIs de teste para verificar se o template correto esta sendo chamado por suas views, e para permitir que você verifique se a informação correta está sendo enviada. Entretanto, não há suporte específico à API para testar no Django que sua saída HTML seja renderizada conforme esperado.

## Outras ferramentas de teste recomendadas

O framework de teste do Django pode ajudar você a escrever eficazes testes unitários e de integração — nós apenas arranhamos a superfície do que o framework **unittest** pode fazer, muito menos as adições de Django (por exemplo, confira como você pode usar [unittest.mock](https://docs.python.org/3.5/library/unittest.mock-examples.html) para corrigir bibliotecas de terceiros para que você possa testar mais detalhadamente seu próprio código).

Embora existam inúmeras outras ferramentas de teste que você pode utilizar, destacaremos apenas duas:

- [Coverage](http://coverage.readthedocs.io/en/latest/): Essa ferramenta Python reporta quando do seu código é realmente executado pelos seus testes. É particularmente útil quando você começando e está tentando descobrir o que exatamente deve testar.
- [Selenium](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) é um framework para automatizar testes em um navegador real. Ele permite simular um usuário real interagindo com o site e fornece uma excelente estrutura para o sistema testar seu site (a próxima etapa do teste de integração).

## Desafie-se

Existem muito mais _models_ e _views_ que podemos testar. Como uma tarefa simples, tente criar um caso de teste para a _view_ `AuthorCreate`.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = '__all__'
    initial = {'date_of_death':'12/10/2016'}
    permission_required = 'catalog.can_mark_returned'
```

Lembre-se de que você precisa verificar qualquer coisa que você especificar ou que faça parte do projeto. Isso incluirá quem tem acesso, a data inicial, o _template_ utilizado e para onde a view é redirecionada quando bem-sucedida.

## Resumo

Escrever código de teste não é divertido nem glamuroso, e é consequentemente muitas vezes deixado por último (ou nem isso) ao criar um site. No entanto, é uma parte essencial para garantir que seu código esteja seguro para _release_ após fazer alterações e de baixo custo de manutenção.

Neste tutorial, mostramos como escrever e executar testes para seus _models_, _forms_ e _views_. Mais importante ainda, fornecemos um breve resumo do que você deve testar, que geralmente é a coisa mais difícil de resolver quando você está iniciando. Há muito mais para conhecer, mas mesmo com o que você já aprendeu, poderá criar testes unitários eficazes para seus websites.

O próximo e último tutorial mostra como você pode implantar seu maravilhoso (e totalmente testado!) website Django.

## Veja também

- [Escrevendo e executando testes](https://docs.djangoproject.com/en/2.1/topics/testing/overview/) (Django docs)
- [Escrevendo seu primeiro app Django, parte 5 > Introduzindo testes automatizados](https://docs.djangoproject.com/en/2.1/intro/tutorial05/) (Django docs)
- [Refererências de ferramentas de teste](https://docs.djangoproject.com/en/2.1/topics/testing/tools/) (Django docs)
- [Tópicos avançados de testes](https://docs.djangoproject.com/en/2.1/topics/testing/advanced/) (Django docs)
- [Um Guia para testes no Django](http://toastdriven.com/blog/2011/apr/10/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Desenvolvimento web Orientado a Testes com Django](http://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testando no Django (Parte 1) - Melhores práticas e Exemplos](https://realpython.com/blog/python/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}
