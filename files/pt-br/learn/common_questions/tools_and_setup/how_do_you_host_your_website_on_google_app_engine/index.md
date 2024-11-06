---
title: Como você hospeda seu site no Google App Engine?
slug: Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
---

[Google App Engine](https://cloud.google.com/appengine/) é uma plataforma poderosa que lhe permite construir e rodar aplicações na infraestrutura do Google — se você precisa criar um aplicativo da web de várias camadas do zero ou hospedar um site estático. Aqui está um guia passo a passo para hospedar seu site no Google App Engine.

## Criando um projeto na plataforma do Google Cloud

Para usar as ferramentas do Google em seu próprio site ou aplicativo, você precisa criar um novo projeto no Google Cloud Platform. Isso requer ter uma conta do Google.

1. Vá para o [App Engine dashboard](https://console.cloud.google.com/projectselector/appengine) no Google Cloud Platform e apert o botão _Create_ (Criar).
2. Se você não criou um projeto antes, precisará selecionar se deseja receber atualizações por email ou não, concordar com os Termos de Serviço e, em seguida, poderá continuar.
3. Digite um nome para o projeto, edite a ID do seu projeto e anote-a. Para este tutorial, os seguintes valores são usados

   - Nome do projeto: _GAE Sample Site_
   - ID do Projeto: _gaesamplesite_

4. Clique no botão _Create_ para criar o seu projeto.

## Criando uma aplicação

Cada projeto do Cloud Platform pode conter um aplicativo do App Engine. Vamos preparar um aplicativo para o nosso projeto.

1. Precisamos de um aplicativo de amostra para publicar. Se você não tiver um para usar, faça o download e descompacte este [aplicativo de exemplo](http://gaesamplesite.appspot.com/downloads.html).
2. Dê uma olhada na estrutura da aplicação padrão — A pasta `website` contem o conteúdo do seu website e `app.yaml` é o seu arquivo de configuração da aplicação.

   - O conteúdo do seu website deve ser posto dentro da pasta `website`, e sua página de destino deve ser denominada `index.html`, mas fora isso ela pode conter qualquer coisa que você desejar.
   - O arquivo `app.yaml` é um arquivo de configuração que fala ao App Engine como mapear URLs para os seus arquivos estáticos. Você não precisa editá-lo.

## Puplicando sua aplicação

Agora que nós temos o nosso projeto pronto e arquivos padrões de aplicativo colocados juntos, vamos publicar nosso app.

1. Abra o [Google Cloud Shell](https://console.cloud.google.com/cloudshell/editor).
2. Arraste e solte a pasta `sample-app` dentro do painel esquerdo do editor de código.
3. Rode a seguinte linha de comando dentro para selecionar seu projeto:

   ```bash
   gcloud config set project gaesamplesite
   ```

4. Logo após rode o seguinte comando para ir ao diretório do seu app:

   ```bash
   cd sample-app
   ```

5. Você agora está pronto para armazenar sua aplicação, i.e. fazer o upload para o App Engine:

   ```bash
   gcloud app deploy
   ```

6. Digite um número para escolher a região onde você quer que sua aplicação se localize.
7. Digite `Y` para confirmar.
8. Agora navegue no seu navegador para _your-project-id_.appspot.com to para ver seu website online. Por exemplo, para a ID do projeto _gaesamplesite_, vá para [_gaesamplesite_.appspot.com](http://gaesamplesite.appspot.com/).

## Veja também

Para aprender mais, veja [Google App Engine Documentation](https://cloud.google.com/appengine/docs/).
