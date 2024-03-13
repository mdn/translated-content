---
title: Como eu faço o upload de arquivos para um servidor web ?
slug: Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server
---

Este artigo mostra como publicar seu site online usando ferramentas de transferência de arquivos.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos :</th>
      <td>
        Você deve saber
        <a href="https://developer.mozilla.org/en-US/Learn/What_is_a_web_server"
          >what a web server is</a
        >
        e
        <a
          href="https://developer.mozilla.org/en-US/Learn/Understanding_domain_names"
          >how domain names work</a
        >. Você também deve saber como
        <a href="/en-US/Learn/Set_up_a_basic_working_environment"
          >set up a basic environment</a
        >
        e como
        <a href="/en-US/Learn/HTML/Write_a_simple_page_in_HTML"
          >write a simple webpage</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender como enviar arquivos para um servidor usando as várias
        ferramentas de transferências de arquivos disponíveis.
      </td>
    </tr>
  </tbody>
</table>

## Resumo

Se você construiu uma página web básica (veja [HTML basics](/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics), por exemplo), provavelmente desejará colocá-la online, em um servidor da web. Neste artigo, discutiremos como fazer isso, usando várias opções disponíveis, como clientes SFTP, RSync e Github.

## SFTP

Existem vários clientes SFTP . Nossa demo cobre o FileZilla, já que é gratuito e está disponível para Windows, macOS e Linux. Para instalar o FileZilla, vá para a página de downloads do FileZilla, clique no botão Download grande e instale a partir do arquivo de instalação da maneira usual.

> **Nota:** Claro que existem outras opções. Consulte [Publishing tools](/en-US/Learn/How_much_does_it_cost#Publishing_tools.3A_FTP_client) para mais informações.

Abra o FileZilla, você verá algo semelhante a isso:

![](filezilla-ui.png)

### Logging in

Para este exemplo, vamos supor que nosso provedor de hospedagem (o serviço que hospedará nosso servidor web HTTP) seja uma empresa fictícia ,"Example hosting provider" , cujos URLs são semelhantes a este: `mypersonalwebsite.examplehostingprovider.net`.

Acabamos de abrir uma conta e receber estas informações :

> Parabéns por abrir uma conta no Example Hosting Provider.
>
> Sua conta: `demozilla`
>
> Seu site estará disponível em : `demozilla.examplehostingprovider.net`
>
> Para publicar nessa conta, conecte-se por meio do SFTP com as seguintes credenciais :
>
> - Servidor SFTP: `sftp://demozilla.examplehostingprovider.net`
> - Usuário: `demozilla`
> - Senha: `quickbrownfox`
> - Porta: `5548`
> - Para publicar na web, coloque seus arquivos no diretório `Public/htdocs` .

Primeiramente, olhe em `http://demozilla.examplehostingprovider.net/` — como você pode ver até o momento, não há nada lá :

![Our demozilla personal website, seen in a browser: it's empty](demozilla-empty.png)

> **Nota:** Dependendo do seu provedor de hospedagem, na maioria das vezes você verá uma página dizendo algo como como "Este site é hospedado por \[serviço de hospedagem]".Isso é claro, quando você acessa seu endereço da web pela primeira vez.

Para conectar seu cliente SFTP ao servidor, siga estas etapas:

1. Escolha o arquivo _> Site Manager(Gerenciador de sites)..._ no menu principal.
2. Na janela do gerenciador de site, vá em novo site e preencha o nome do site como **demozilla** no espaço fornecido.
3. Preencha o servidor SFTP que seu host forneceu no campo _Host:_ field.
4. Em _Logon Type(tipo de LogOn):_ Escolha normal e ,em seguida , preencha com o nome de usuário e a senha fornecida nos campos relevantes.
5. Preencha a porta correta e outras informações.

Sua janela estará semelhante a esta:

![](site-manager.png)

Agora pressione _Connect_ para conectar ao servidor SFTP.

Nota: Atenção, certifique-se de que seu provedor de hospedagem oferece conexão SFTP (FTP seguro) ao seu espaço de hospedagem. O FTP é inerentemente inseguro e você não deve usá-lo.

### Visão local e remota

Depois de conectada, sua tela deve ser semelhante a esta (conectamos a um exemplo nosso para lhe dar uma ideia):

![](connected.png)

Vamos analisar o que você está vendo:

- No painel esquerdo central, você vê seus arquivos locais. Navegue até o diretório onde você armazena seu site (e.g. `mdn`).
- No painel direito central, você vê arquivos remotos.Estamos conectados em nossa raiz FTP distante(Nesse caso, `users/demozilla`)
- No momento, você pode ignorar os painéis inferiores e superiores.Respectivamente, trata-se de um log de mensagens que mostra o status de conexão entre seu computador e o servidor SFTP e um log em tempo real de cada interação entre seu cliente SFTP e o servidor.

### Enviando para o servidor

Nossas instruções de host de exemplo nos disseram "Para publicar na web, coloque seus arquivos no diretório `Public/htdocs` " Você precisa navegar até o diretório especificado no painel direito. Este diretório é efetivamente a raiz do seu site — onde seu arquivo `index.html` e outros irão.

Depois de encontrar o diretório remoto correto para colocar seus arquivos, para carregá-los no servidor, você precisa arrastá-los e soltá-los do painel esquerdo para o painel direito.

### Eles estão realmente online ?

Até agora, tudo bem , mas os arquivos estão realmente online ? Você pode verificar novamente voltando ao seu site (e.g. `http://demozilla.examplehostingprovider.net/`) no seu navegador:

![Here we go: our website is live!](here-we-go.png)

E _voilà_! Nosso website está vivo!

## Rsync

{{Glossary("Rsync")}} é uma ferramenta de sincronização de arquivos local para remoto, que geralmente está disponível na maioria dos sistemas baseados em Unix (como macOS e Linux), mas também existem versões do Windows.

É visto como uma ferramenta mais avançada do que o SFTP, porque por padrão é usado na linha de comando. Um comando básico se parece com isto:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` é um travessão seguido por uma ou mais letras, por exemplo -v para mensagens de erros detalhadas e -b para fazer backups. Você pode ver a lista completa em [rsync man page](https://linux.die.net/man/1/rsync) (Pesquise por "Options summary").
- `SOURCE` é o caminho para o arquivo ou diretório local do qual você deseja copiar os arquivos.
- `user@` são as credenciais de usuário no servidor remoto para o qual você deseja copiar os arquivos.
- `x.x.x.x` é o endereço de IP do servidor remoto.
- `DESTINATION` é o caminho para o local que você deseja copiar seu diretório ou arquivos no servidor remoto.

Você precisa obter esses detalhes do seu provedor de hospedagem.

Para mais informações, veja [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/hipaa-compliant-cloud-hosting-services/how-to-use-rsync-copy-sync-files-servers/).

Obviamente, é uma boa ideia usar uma conexão segura, como no FTP. No caso do Rsync, você especifica os detalhes do SSH para fazer a conexão por SSH, usando a opção -e. Por exemplo:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Você pode encontrar mais detalhes sobre o assunto em [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Ferramentas Rsync GUI

Ferramentas GUI estão disponíveis para Rsync (para aqueles que não se sentem tão confortáveis com o uso da linha de comando). [Acrosync](https://acrosync.com/mac.html) é uma dessas ferramentas e está disponível para Windows e macOS

Novamente, você teria que obter as credenciais de conexão do seu provedor de hospedagem, mas desta forma você teria uma GUI para inseri-lás.

## GitHub

Github permite você publicar páginas por meio do [GitHub pages](https://pages.github.com/) (gh-pages).

Cobrimos o básico de como usar isso no [Publishing your website](/en-US/Learn/Getting_started_with_the_web/Publishing_your_website) artigo do guia [Getting started with the Web](/en-US/Learn/Getting_started_with_the_web) , então não vamos repetir tudo aqui.

No entanto, é importante saber que você também pode hospedar um site no GitHub, mas usar um domínio personalizado com ele. Para obter um guia detalhado, consulte [Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) .

## Outros métodos para enviar arquivos

O protocolo FTP é um método conhecido de publicação de um site, mas não o único. Aqui estão algumas outras possibilidades:

- **Web interfaces(Interfaces Web)**. Uma interface HTML que atua como front-end para um serviço de envio de arquivo remoto. Fornecido pelo seu serviço de hospedagem.
- **{{Glossary("WebDAV")}}**. Uma extensão do protocolo {{Glossary("HTTP")}} para permitir um gerenciamento de arquivos mais avançado.
