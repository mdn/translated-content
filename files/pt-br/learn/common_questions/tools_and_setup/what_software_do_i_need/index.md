---
title: Que software eu preciso para construir um site?
slug: Learn/Common_questions/Tools_and_setup/What_software_do_I_need
---

Neste artigo nós destacamos quais _softwares_ você precisa para editar, fazer _upload_ ou visualizar um _site_.

| Pré requisitos: | Você deve saber [a diferença entre páginas _web_, _sites web_, servidores*web*, e mecanismos de busca.](/pt-BR/docs/Learn/page_vs_site_vs_server_vs_search_engine) |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Objetivo:       | Aprender quais _softwares_ você precisa se quiser editar, fazer _upload_, ou visualizar um _site_.                                                                 |

## Sumário

Você pode baixar a maioria dos programas que precisa para desenvolvimento _web_ gratuitamente. Nós disponibilizamos alguns links neste artigo.

Você precisa de ferramentas para:

- Criar e editar páginas _web_
- Fazer _upload_ de arquivos para o seu servidor web
- Visualizar seu _site_

Quase todos os sistemas operacionais incluem por padrão um editor de texto e um navegador de internet que você pode usar para visualizar sites. Como resultado, normalmente você só precisa obter um _software_ para transferir arquivos para o seu servidor _web_.

## Práticas

Ainda não existem práticas disponíveis. [Por favor, considere contribuir](/pt-BR/docs/MDN/Getting_started).

## Aprofundando

### Criando e editando páginas _web_

Para criar e editar um _site_, você precisa de um editor de texto. Editores de texto criam e modificam arquivos de texto não formatados. Outros formatos, como **{{Glossary("RTF")}}**, permitem que você adicione formatação, como negrito ou sublinhado. Esses formatos não são adequados para escrever em páginas _web._ Você deve pensar bem em qual editor de texto vai usar, considerando que você trabalhará por bastante tempo nele enquanto estiver construíndo seu _site_.

Todos os sistemas operacionais _desktop_ possuem um editor de texto básico. Todos esses editores são diretos em sua função, mas não possuem os recursos especiais para codificar uma página _web_. Se você quiser algo um pouco mais sofisticado, existem muitas ferramentas de terceiros disponíveis. Editores de terceiros possuem funções extras, como coloração de sintaxe, autocompletação, separadores de seção, e busca de código. Aqui está uma pequena lista de editores:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Sistema Operacional</th>
      <th scope="col">Editores Padrão</th>
      <th scope="col">Editores de Terceiros</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li>
            <a
              href="http://en.wikipedia.org/wiki/Notepad_%28software%29"
              rel="external"
              >Notepad</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="http://notepad-plus-plus.org/">Notepad++</a></li>
          <li>
            <a href="https://www.visualstudio.com/">Visual Studio Code</a>
          </li>
          <li><a href="https://www.jetbrains.com/webstorm/">Web Storm</a></li>
          <li><a href="http://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li>
            <a href="http://en.wikipedia.org/wiki/TextEdit" rel="external"
              >TextEdit</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <a href="http://www.barebones.com/products/textwrangler/"
              >TextWrangler</a
            >
          </li>
          <li>
            <a href="https://www.visualstudio.com/">Visual Studio Code</a>
          </li>
          <li><a href="http://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a href="http://en.wikipedia.org/wiki/Vi" rel="external">Vi</a> (All
            UNIX)
          </li>
          <li>
            <a href="http://en.wikipedia.org/wiki/Gedit" rel="external"
              >GEdit</a
            >
            (Gnome)
          </li>
          <li>
            <a
              href="http://en.wikipedia.org/wiki/Kate_%28text_editor%29"
              rel="external"
              >Kate</a
            >
            (KDE)
          </li>
          <li>
            <a href="http://en.wikipedia.org/wiki/Leafpad" rel="external"
              >LeafPad</a
            >
            (Xfce)
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="http://www.gnu.org/software/emacs/">Emacs</a></li>
          <li><a href="http://www.vim.org/" rel="external">Vim</a></li>
          <li>
            <a href="https://www.visualstudio.com/">Visual Studio Code</a>
          </li>
          <li><a href="http://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Chrome OS</td>
      <td></td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Aqui está uma captura de tela de um editor de texto avançado:

![Screenshot of Notepad++.](notepadplusplus.png)

Aqui está uma captura de tela de um editor de texto online:

![Screenshot of ShiftEdit](shiftedit.png)

### Fazendo _upload_ de arquivos na _web_

Quando seu _site_ está pronto para visualização pública, você precisa fazer _upload_ de suas páginas _web_ para o seu servidor*web.* Você precisa comprar espaço em um servidor, entre vários provedores (veja [Quanto custa fazer algo na _web_](/pt-BR/docs/Learn/Common_questions/How_much_does_it_cost)). Após você decidir qual provedor usar, o provador te enviará um _e-mail_ com suas informações de acesso, normalmente em forma de uma SFTP URL, nome de usuário, senha, e outra informação necessária para conectar no servidor. Tenha em mente que (S)FTP está um tanto quanto antiquado, e outros sistemas de _upload_ de arquivos estão se tornando populares, como [RSync](https://en.wikipedia.org/wiki/Rsync) e [Git/GitHub](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).

> **Nota:**FTP é inerentemente inseguro. Você precisa se certificar que seu provedor permite o uso de uma conexão segura, por exemplo o SFTP ou RSync com SSH.

Fazer _upload_ de arquivos para um servidor _web_ é um importante passo durante a criação de um _site_, por isso cobrimos isso detalhadamente em um [artigo separado](/pt-BR/docs/Learn/Upload_files_to_a_web_server). Agora, aqui está uma pequena lista de clientes (S)FTP básicos e gratuítos:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Sistema Operacional</th>
      <th colspan="2" rowspan="1" scope="col" style="text-align: center">
        Cliente FTP
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li><a href="http://winscp.net" rel="external">WinSCP</a></li>
          <li><a href="http://mobaxterm.mobatek.net/">Moba Xterm</a></li>
        </ul>
      </td>
      <td colspan="1" rowspan="3">
        <ul>
          <li>
            <a href="https://filezilla-project.org/">FileZilla</a> (Qualquer
            Sistema Operacional)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a
              href="https://wiki.gnome.org/action/show/Apps/Files?action=show&#x26;redirect=Apps%2FNautilus"
              rel="external"
              >Nautilus/Files</a
            >
            (Gnome)
          </li>
          <li>
            <a href="http://dolphin.com/" rel="external">Dolphin</a> (KDE)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li><a href="http://cyberduck.de/">Cyberduck</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Chrome OS</td>
      <td>
        <ul>
          <li>
            <a href="https://shiftedit.net/">ShiftEdit</a> (Qualquer Sistema
            Operacional)
          </li>
        </ul>
      </td>
      <td colspan="1"></td>
    </tr>
  </tbody>
</table>

### Navegando em _sites_

Como você já sabe, é necessário um navegador _web_ para visualizar _sites_. Existem dezenas de opções de navegadores _web_ para seu uso pessoal, mas quando você está desenvolvendo um _site_, deve testá-lo ao menos nestes navegadores principais, para garantir que seu _site_ funcionará para a maior parte das pessoas:

- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Google Chrome](https://www.google.com/chrome/)
- [Microsoft Internet Explorer](http://windows.microsoft.com/en-US/internet-explorer/download-ie)
- [Apple Safari](http://www.apple.com/safari/)

Se você estiver buscando um grupo espécífico (como usuários de uma plataforma ou de algum país), deve testar seu _site_ em navegadores adicionais, como [Opera](http://www.opera.com/), [Konqueror](http://www.konqueror.org/), ou [UC Browser](http://www.ucweb.com/ucbrowser/).

Mas testar é complicado, pois alguns navegadores apenas funcionam em determinados sistemas operacionais. O _Apple Safari_ funciona no _iOS_ e no _Mac OS_, enquanto o _Internet Explorer_ funciona apenas no _Windows_. É melhor se valer dos benefícios de serviços como o [Browsershots](http://browsershots.org/) ou [Browserstack](http://www.browserstack.com/). O _Browsershots_ fornece capturas de tela de como seu _site_ é visto por vários navegadores. O _Browserstack_ atualmente concede a você total acesso remoto à máquinas virtuais de forma que você pode testar seu site nos ambientes mais comuns. Alternativamente você pode configurar sua própria máquina virtual, mas isso demanda certos conhecimentos específicos. (Se você quiser seguir esse caminho, a _Microsoft_ possui algumas ferramentas para desenvoledores, incluíndo uma máquina virtual pronta para o uso, chamada [modern.ie](https://modern.ie).).

Por todos os meios possíveis, execute testes em dispositivos reais, especialmente em dispositivos móveis reais. Simulação de dispositivos móveis é uma nova tecnologia, está em evolução e é menos confiável que a simulação de computadores. Dispositivos móveis custam dinheiro, é claro, portanto sugerimos que se veja a [Open Device Lab initiative](http://opendevicelab.com/). Você também pode compartilhar dispositivos se quiser testar em várias plataformas sem gastar muito.

## Próximos passos

- Alguns desses _software_ são gratis, mas não todos eles. [Descubra quanto custa fazer algo na _web_](/pt-BR/docs/Learn/Common_questions/How_much_does_it_cost)[.](/pt-BR/docs/Learn/How_much_does_it_cost)
- Se você deseja aprender mais sobre editores de texto, leia nosso artigo sobre [como escolher e instalar um editor de texto.](/pt-BR/docs/Learn/Choose,_Install_and_set_up_a_text_editor)
- Se você está se perguntando como publicar seu*site* na*web*, veja ["Como fazer _upload_ para um servidor*web*"](/pt-BR/docs/Learn/Upload_files_to_a_web_server).
