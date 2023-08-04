---
title: Sending form data
slug: Learn/Forms/Sending_and_retrieving_form_data
---

Em muitos casos, a finalidade de [HTML Form](/pt-BR/docs/HTML/Forms) Um é enviar dados para um servidor. O servidor processa os dados e envia uma resposta ao usuário. Isso parece simples, mas é importante manter algumas coisas em mente para garantir que os dados não danifiquem o servidor ou causem problemas para seus usuários.

## Para onde vão os dados?

Aqui nós discutiremos o que acontece com os dadosquando um formulário é enviado.

### Sobre a arquitetura cliente / servidor

A web é baseada em uma arquitetura cliente / servidor muito básica que pode ser resumida da seguinte forma: um cliente (normalmente um navegador da Web) envia um pedido a um servidor (na maioria das vezes um servidor web como [Apache](http://httpd.apache.org/), [Nginx](http://nginx.com/), [IIS](http://www.iis.net/), [Tomcat](http://tomcat.apache.org/), etc.), usando o [HTTP protocol](/pt-BR/docs/HTTP). O servidor responde a solicitação usando o mesmo protocolo.

![A basic schema of the Web client/server architecture](/files/4291/client-server.png)

No lado do cliente, um formulário HTML é nada mais do que uma maneira conveniente e amigável para configurar uma solicitação HTTP para enviar dados para um servidor. Isso permite que o usuário forneça informações a serem entregues na solicitação HTTP.

### No lado do cliente: definindo como enviar os dados

O elemento {{HTMLElement("form")}} define como os dados serão enviados. Todos os seus atributos são projetados para permitir que você configure o pedido a ser enviado quando um usuário acessa um botão de envio. Os dois atributos mais importantes são:[`action`](/pt-BR/docs/Web/HTML/Element/form#action) e [`method`](/pt-BR/docs/Web/HTML/Element/form#method).

#### o atributo [`action`](/pt-BR/docs/Web/HTML/Element/form#action)

Este atributo define para onde os dados são enviados. Seu valor deve ser um URL válido. Se esse atributo não for fornecido, os dados serão enviados para o URL da página que contém o formulário.

##### Exemplos

Neste exemplo, os dados são enviados para `http://foo.com`:

```html
<form action="http://foo.com"></form>
```

Aqui, os dados são enviados para o mesmo servidor que hospeda a página do formulário, mas para um URL diferente no servidor:

```html
<form action="/somewhere_else"></form>
```

Quando especificado sem atributos, como abaixo, o atributo {{HTMLElement("form")}} faz com que os dados sejam enviados para a página que inclui o formulário:

```html
<form></form>
```

Muitas páginas mais antigas usam a seguinte notação para indicar que os dados devem ser enviados para a mesma página que contém o formulário; Isso era necessário porque até HTML5, o atributo [`action`](/pt-BR/docs/Web/HTML/Element/form#action) era obrigatório. Isso não é mais necessário.

```html
<form action="#"></form>
```

> **Nota:** **Nota: É possível especificar um URL que use o protocolo HTTPS (HTTP seguro). Quando você fizer isso, os dados são criptografados junto com o resto da solicitação, mesmo se o formulário em si é hospedado em uma página insegura acessada usando HTTP. Por outro lado, se o formulário estiver hospedado na página segura, mas você especificar um URL HTTP inseguro com o atributo [`action`](/pt-BR/docs/Web/HTML/Element/form#action), todos os navegadores exibirão um aviso de segurança para o usuário cada vez que Tente enviar dados porque os dados não serão criptografados.**

#### o atributo [`method`](/pt-BR/docs/Web/HTML/Element/form#method)

Este atributo define como os dados são enviados. o [HTTP protocol](/pt-BR/docs/HTTP)

Fornece várias maneiras de executar um pedido; Os dados de formulários HTML podem ser enviados através de pelo menos dois deles: o método GET eo método POST.

Para entender a diferença entre esses dois métodos, vamos dar um passo atrás e examinar como funciona o HTTP. Cada vez que você deseja acessar um recurso na Web, o navegador envia uma solicitação para um URL. Uma solicitação HTTP consiste em duas partes: um cabeçalho que contém um conjunto de metadados globais sobre as capacidades do navegador e um corpo que pode conter informações necessárias ao servidor para processar a solicitação específica.

##### O método GET

O método GET é o método usado pelo navegador para pedir ao servidor para enviar de volta um determinado recurso: "Hey servidor, eu quero obter este recurso." Nesse caso, o navegador envia um corpo vazio. Como o corpo está vazio, se um formulário é enviado usando esse método, os dados enviados para o servidor são anexados ao URL.

###### Exemplo

Considere o seguinte formulário:

```html
<form action="http://foo.com" method="get">
  <input name="say" value="Hi" />
  <input name="to" value="Mom" />
  <button>Envie meus cumprimentos</button>
</form>
```

Com o método GET, a solicitação HTTP tem esta aparência:

```
GET /?say=Hi&to=Mom HTTP/1.1
Host: foo.com
```

##### O método POST

O método POST é um pouco diferente. É o método que o navegador envia ao servidor para pedir uma resposta que leva em conta os dados fornecidos no corpo da solicitação HTTP: "Hey servidor, dê uma olhada nesses dados e envie-me de volta um resultado apropriado". Se um formulário é enviado usando esse método, os dados são anexados ao corpo do pedido HTTP.

###### Exemplo

Considere esta forma (a mesma acima):

```html
<form action="http://foo.com" method="post">
  <input name="say" value="Hi" />
  <input name="to" value="Mom" />
  <button>Send my greetings</button>
</form>
```

Quando enviado usando o método POST, o pedido HTTP se parece com isto:

```
POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

O cabeçalho Content-Length indica o tamanho do corpo eo cabeçalho Content-Type indica o tipo de recurso enviado para o servidor. Vamos discutir esses cabeçalhos em um pouco.

Obviamente, as solicitações HTTP nunca são exibidas para o usuário (se você quiser vê-las, você precisa usar ferramentas como o Firefox [Web Console](/pt-BR/docs/Tools/Web_Console) ou o [Chrome Developer Tools](https://developers.google.com/chrome-developer-tools/)). A única coisa exibida para o usuário é o URL chamado. Assim, com uma solicitação GET, o usuário verá os dados em sua barra de URL, mas com uma solicitação POST, eles não. Isso pode ser muito importante por duas razões:

1. Se você precisar enviar uma senha (ou qualquer parte sensível de dados), nunca use o método GET ou corre o risco de exibi-lo na barra de URL.
2. Se você precisar enviar uma grande quantidade de dados, o método POST é preferido porque alguns navegadores limitam o tamanho dos URLs. Além disso, muitos servidores limitam o comprimento dos URLs que aceitam.

### No lado do servidor: recuperar os dados

Seja qual for o método HTTP escolhido, o servidor recebe uma string que será analisada para obter os dados como uma lista de pares chave / valor. A maneira como você acessa essa lista depende da plataforma de desenvolvimento que você usa e de quaisquer frameworks específicos que você possa usar com ele. A tecnologia que você usa também determina como as chaves duplicadas são manipuladas; Freqüentemente, o valor recebido mais recentemente para uma determinada chave recebe prioridade.

#### Exemplo: PHP Bruto

O PHP oferece alguns objetos globais para acessar os dados. Supondo que você tenha usado o método POST, o exemplo a seguir apenas leva os dados e exibe-o para o usuário. Claro, o que você faz com os dados depende de você. Você pode exibi-lo, armazená-lo em um banco de dados, enviá-los por e-mail, ou processá-lo de alguma outra maneira.

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
```

Este exemplo exibe uma página com os dados enviados. Em nosso exemplo de antes, a saída seria:

```
Oi Mãe
```

#### Example: Python Bruto

This example uses Python to do the same thing--display the provided data on a web page. It uses the [CGI Python package](http://docs.python.org/3/library/cgi.html) to access the form data.

```python
#!/usr/bin/env python
import html
import cgi
import cgitb; cgitb.enable()     # for troubleshooting

print("Content-Type: text/html") # HTTP header to say HTML is following
print()                          # blank line, end of headers

form = cgi.FieldStorage()
say  = html.escape(form["say"].value);
to   = html.escape(form["to"].value);

print(say, " ", to)
```

O resultado é o mesmo que com o PHP:

```
Oi Mãe
```

#### Outros idiomas e frameworks

Há muitas outras tecnologias do lado do servidor que você pode usar para o tratamento de formulários, incluindo [Perl](/pt-BR/docs/), [Java](/pt-BR/docs/), [.Net](http://www.microsoft.com/net), [Ruby](/pt-BR/docs/), etc. Basta escolher o que você mais gosta. Dito isto, é importante notar que é muito incomum usar essas tecnologias diretamente porque isso pode ser complicado. É mais comum usar um dos muitos frameworks agradáveis que facilitam o manuseio de formulários, como:

- [Symfony](http://symfony.com/) Para PHP
- [Django](https://www.djangoproject.com/) Para Python
- [Ruby On Rails](http://rubyonrails.org/) Para Ruby
- [Grails](http://grails.org/) Para Java
- etc.

Vale a pena notar que mesmo usando essas estruturas, trabalhar com formulários não é necessariamente fácil. Mas é muito melhor, e você vai economizar muito tempo.

## Um caso especial: enviar arquivos

Arquivos são um caso especial com formulários HTML. Eles são dados binários - ou considerados como tal - onde todos os outros dados são dados de texto. Porque HTTP é um protocolo de texto, há requisitos especiais para manipular dados binários.

### o [`enctype`](/pt-BR/docs/Web/HTML/Element/form#enctype) atributo

Esse atributo permite especificar o valor do cabeçalho HTTP Content-Type. Este cabeçalho é muito importante porque informa ao servidor que tipo de dados está sendo enviado. Por padrão, seu valor é application / x-www-form-urlencoded. Em termos humanos, isso significa: "Este é o formulário de dados que foi codificado em forma de URL."

Mas se você quiser enviar arquivos, você precisa fazer duas coisas:

- Colocou o [`method`](/pt-BR/docs/Web/HTML/Element/form#method) Atributo para POST porque o conteúdo do arquivo não pode ser colocado dentro de um parâmetro de URL usando um formulário.
- Defina o valor de [`enctype`](/pt-BR/docs/Web/HTML/Element/form#enctype) Para multipart / form-data porque os dados serão divididos em várias partes, uma para cada arquivo mais uma para o texto do corpo do formulário que pode ser enviado com eles.

Por exemplo:

```html
<form method="post" enctype="multipart/form-data">
  <input type="file" name="myFile" />
  <button>Send the file</button>
</form>
```

> **Nota:** **Nota: Alguns navegadores suportam**[`multiple`](/pt-BR/docs/Web/HTML/Element/input#multiple) Atributo no {{HTMLElement("input")}} Elemento para enviar mais de um arquivo com apenas um elemento de entrada. Como o servidor lida com esses arquivos realmente depende da tecnologia usada no servidor. Como mencionado anteriormente, usando um quadro fará sua vida muito mais fácil.

> **Aviso:** **Aviso: Muitos servidores são configurados com um limite de tamanho para arquivos e solicitações HTTP, a fim de evitar abusos. É importante verificar esse limite com o administrador do servidor antes de enviar um arquivo.**

## Preocupações com segurança

Cada vez que você envia dados para um servidor, você precisa considerar a segurança. Formulários HTML são um dos primeiros vetores de ataque contra servidores. Os problemas nunca vêm dos formulários HTML em si; Eles vêm de como o servidor manipula dados.

### Falhas de segurança comuns

Dependendo do que você está fazendo, existem alguns problemas de segurança muito conhecidos:

#### XSS e CSRF

Cross-Site Scripting (XSS) e Cross-Site Request Forgery (CSRF) são tipos comuns de ataques que ocorrem quando você exibe dados enviados por um usuário para o usuário ou para outro usuário.

O XSS permite que os invasores injetem scripts do lado do cliente em páginas da Web vistas por outros usuários. Uma vulnerabilidade de scripts entre sites pode ser usada por atacantes para ignorar controles de acesso, como o [same origin policy](/pt-BR/docs/JavaScript/Same_origin_policy_for_JavaScript). O efeito desses ataques pode variar de um pequeno incômodo a um risco de segurança significativo.

CSRF são semelhantes aos ataques XSS, já que eles começam da mesma maneira - injetando script do lado do cliente em páginas da Web - mas seu destino é diferente. Os invasores do CSRF tentam aumentar os privilégios para aqueles de um usuário com privilégios mais altos (como um administrador do site) para executar uma ação que não deve ser capaz de fazer (por exemplo, enviar dados para um usuário não confiável).

Os ataques XSS exploram a confiança que um usuário tem para um site, enquanto os ataques CSRF exploram a confiança que um site tem para seus usuários.

To prevent these attacks, you should always check the data a user sends to your server and (if you need to display it) try not to display the HTML content as provided by the user. Intead, you should process the user-provided data so you don't display it verbatim. Almost all frameworks on the market today implement a minimal filter that removes the HTML {{HTMLElement("script")}}, {{HTMLElement("iframe")}} and {{HTMLElement("object")}} elements from data sent by any user. This helps to mitigate the risk, but doesn't necessarily eradicate it.

#### SQL injection

SQL injection is a type of attack that tries to perform actions on a database used by the target web site. This typically involves sending an SQL request in the hope that the server will execute it (many times when the application server tries to store the data). This is actually [one of the main vector attacks against web sites](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project).

The consequences can be terrible, ranging from data loss to access to a whole infrastructure by using privilege escalation. This is a very serious threat and you should never store data sent by a user without performing some sanitization (for example, by using [`mysql_real_escape_string()`](http://www.php.net/manual/en/function.mysql-real-escape-string.php) on a PHP/MySQL infrastructure).

#### HTTP header injection and email injection

These kinds of attacks can occur when your application builds HTTP headers or emails based on the data input by a user on a form. These won't directly damage your server or affect your users, but they are an open door to deeper problems such as session hijacking or phishing attacks.

These attacks are mostly silent, and can turn your server into a [zombie](<http://en.wikipedia.org/wiki/Zombie_(computer_science)>).

### Be paranoid: Never trust your users

So, how do you fight these threats? This is a topic far beyond this guide, but there are a few rules to keep in mind. The most important rule is: never ever trust your users, including yourself; even a trusted user could have been hijacked.

All data that comes to your server must be checked and sanitized. Always. No exception.

- Escape potentially dangerous characters. The specific characters you should be cautious with vary depending on the context in which the data is used and the server platform you employ, but all server-side languages have functions for this.
- Limit the incoming amount of data to allow only what's necessary.
- Sandbox uploaded files (store them on a different server and allow access to the file only through a different subdomain or even better through a fully different domain name).

You should avoid many/most problems if you follow these three rules, but it's always a good idea to get a security review performed by a competent third party. Don't assume that you've seen all the possible problems.

## Conclusion

As you can see, sending form data is easy, but securing an application can be tricky. Just remember that a front-end developer is not the one who should define the security model of the data. Yes, as we'll see, it's possible to [perform client side data validation](/pt-BR/docs/HTML/Forms/Data_form_validation) but the server can't trust this validation because it has no way to truly know what really happens on the client side.

## See also

If you want to learn more about securing a web application, you can dig into these resources:

- [The Open Web Application Security Project (OWASP)](https://www.owasp.org/index.php/Main_Page)
- [Chris Shiflett's blog about PHP Security](http://shiflett.org/)
