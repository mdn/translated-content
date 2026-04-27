# Participação na tradução do MDN em português do Brasil

Guia para colaborar traduzindo e mantendo o conteúdo do MDN Web Docs em português do Brasil.

> Antes de começar, leia o [guia oficial de contribuição][https://github.com/mdn/translated-content/blob/main/CONTRIBUTING.md].

## Índice

- [Por onde começar?](#por-onde-começar)
- [Tipos de contribuição que preferimos](#tipos-de-contribuição-que-preferimos)
- [Abrir um Pull Request](#abrir-um-pull-request)
  - [Opção A: Pelo GitHub (sem instalar nada)](#opção-a-pelo-github-sem-instalar-nada)
  - [Opção B: Pelo seu computador (recomendada para mudanças grandes)](#opção-b-pelo-seu-computador-recomendada-para-mudanças-grandes)
- [Traduzir um documento](#traduzir-um-documento)
- [Manter o `l10n.sourceCommit` atualizado](#manter-o-l10nsourcecommit-atualizado)
- [Convenções de tradução](#convenções-de-tradução)
- [Corrigir "flaws" (defeitos)](#corrigir-flaws-defeitos)
- [Fale conosco](#fale-conosco)
- [Links relevantes](#links-relevantes)

---

## Por onde começar?

Se você não sabe por onde começar, confira as [issues com a etiqueta `l10n-pt-br`](https://github.com/mdn/translated-content/issues?q=is%3Aissue+is%3Aopen+label%3Al10n-pt-br). Lá publicamos documentos que precisam de nova tradução, atualização ou revisão. Comente na issue de seu interesse para evitar trabalho duplicado.

---

## Tipos de contribuição que preferimos

Nem toda contribuição agrega o mesmo valor ao leitor. Estas são nossas preferências para que você planeje seu PR:

### 🥇 Preferido: atualização completa de um documento

Um PR que traduz ou atualiza uma página inteira para que corresponda à fonte em inglês mais recente (incluindo o [`l10n.sourceCommit`](#manter-o-l10nsourcecommit-atualizado)). Esse tipo de mudança fecha issues listadas em [`l10n-pt-br`](https://github.com/mdn/translated-content/issues?q=is%3Aissue+is%3Aopen+label%3Al10n-pt-br) e reduz a dívida de tradução.

### ✅ Também bem-vindo: correções pequenas

Corrigir acentos, erros de digitação ou uma frase mal traduzida é uma excelente porta de entrada para quem está conhecendo o projeto. Esses PRs são aceitos e revisados com o mesmo cuidado.

Se é a sua primeira contribuição, sinta-se à vontade para começar com uma mudança pequena: importa mais que você se integre à comunidade do que o tamanho do PR. Só evite abrir vários PRs minúsculos sobre o mesmo arquivo em dias consecutivos; se você identificar vários problemas em uma mesma página, agrupe-os em um único PR.

---

## Abrir um Pull Request

Você tem duas formas de contribuir. Escolha a que for mais confortável para você.

### Opção A: Pelo GitHub (sem instalar nada)

Ideal para erros de digitação, traduções curtas ou mudanças em um único arquivo. Todo o fluxo acontece no navegador, sem necessidade de clonar o repositório.

1. Acesse o arquivo que deseja modificar dentro de [`files/pt-br/`](https://github.com/mdn/translated-content/tree/main/files/pt-br).
2. Clique no ícone de lápis (**Edit this file**) no canto superior direito. O GitHub vai oferecer criar um _fork_ automaticamente, aceite.
3. Edite o conteúdo diretamente no navegador.
4. Ao terminar, preencha a mensagem de commit na parte inferior (adicione o sufixo `[pt-br]`) e clique em **Propose changes**.
5. O GitHub abrirá a tela de **Compare & pull request**. Preencha o título e a descrição e envie o PR para `mdn/translated-content:main`.

### Opção B: Pelo seu computador (recomendada para mudanças grandes)

Necessária se você vai traduzir páginas extensas, atualizar vários arquivos ou executar os linters localmente.

#### Requisitos

- **Node.js** >= 24 (veja [`.nvmrc`](https://github.com/mdn/translated-content/blob/main/.nvmrc) e [`.tool-versions`](https://github.com/mdn/translated-content/blob/main/.tool-versions)).
- **npm** (a versão exata está definida no campo `packageManager` do [`package.json`](https://github.com/mdn/translated-content/blob/main/package.json); o `npm install` a respeita automaticamente com o `corepack` habilitado).
- Recomendamos um gerenciador de versões do Node: [mise](https://mise.jdx.dev/), [fnm](https://github.com/Schniz/fnm) ou [nvm](https://github.com/nvm-sh/nvm). Qualquer um deles lerá o `.nvmrc` ou `.tool-versions` automaticamente.

Você não precisa subir um servidor local para traduzir: o bot gera uma URL de pré-visualização em cada PR. O `npm install` só é necessário se você quiser rodar os linters (`npm run lint:md`, `npm run fix:md`) antes de enviar a mudança.

#### Passos

1. Faça _fork_ de <https://github.com/mdn/translated-content> para a sua conta no GitHub.
2. Clone o seu _fork_:

   ```bash
   git clone git@github.com:SEU_USUARIO/translated-content.git
   cd translated-content
   ```

   > ⏳ O repositório é grande (vários GB de histórico). O primeiro `clone` pode demorar vários minutos dependendo da sua conexão. Tenha paciência, só é preciso fazer isso uma vez.

3. Crie uma branch descritiva:

   ```bash
   git switch -c fix-issue-123
   ```

4. Realize as mudanças necessárias.
5. Adicione e confirme os arquivos:

   ```bash
   git add files/pt-br/caminho/para/arquivo.md
   git rm  files/pt-br/arquivo-obsoleto.html   # se necessário
   git commit -m "Corrige erro 123 [pt-br]"
   ```

   > O sufixo `[pt-br]` na mensagem ajuda a identificar PRs em português do Brasil.

6. Publique a branch e abra o Pull Request:

   ```bash
   git push -u origin fix-issue-123
   ```

7. Acesse <https://github.com/SEU_USUARIO/translated-content> e crie o PR para `mdn/translated-content:main`.

---

## Traduzir um documento

1. Localize a versão em inglês dentro de [`mdn/content/files/en-us/`](https://github.com/mdn/content/tree/main/files/en-us).
   Exemplo: [`files/en-us/web/javascript/reference/global_objects/array/index.md`](https://github.com/mdn/content/blob/main/files/en-us/web/javascript/reference/global_objects/array/index.md).

2. Procure a versão em português do Brasil em [`mdn/translated-content/files/pt-br/`](https://github.com/mdn/translated-content/tree/main/files/pt-br).
   - Se **não existir**, crie o arquivo em formato Markdown respeitando o mesmo caminho do original.
   - Se o arquivo existir em formato `HTML`, converta-o para Markdown.

3. Traduza mantendo intactos os seguintes elementos:
   - Identificadores de código (APIs, propriedades, métodos, variáveis, funções).
   - Macros do Kumascript como `{{domxref(...)}}`, `{{jsxref(...)}}`, `{{Glossary(...)}}`.
   - Blocos de código: traduza apenas comentários e strings voltadas ao usuário final.
   - Links externos (GitHub, web.dev, etc.).

4. Altere os links internos de `/en-US/` para `/pt-BR/`.

5. Revise o _front-matter_ YAML (`title`, `slug`, `l10n.sourceCommit`) conforme descrito na próxima seção.

---

## Manter o `l10n.sourceCommit` atualizado

Cada arquivo traduzido deve incluir um _front-matter_ YAML como este:

```yaml
---
title: Título traduzido
slug: Caminho/Original/Em/Ingles
l10n:
  sourceCommit: <SHA do commit em mdn/content>
---
```

### O que é `l10n.sourceCommit`

É o SHA do commit de `mdn/content` cujo conteúdo em inglês reflete exatamente o que foi traduzido. Ele serve para detectar quais mudanças na fonte ainda não foram incorporadas ao português do Brasil.

### Regras do _front-matter_

- Devem aparecer apenas: `title`, `short-title` (se existir no inglês), `slug` e `l10n.sourceCommit`.
- **Não** inclua `page-type`, `browser-compat`, `tags`, `sidebar` nem `original_slug`.
- O `slug` deve ser idêntico ao do arquivo em inglês.

### Como obter o SHA correto

Use o SHA do último commit que modificou o arquivo em inglês:

```bash
# Dentro do seu clone atualizado de mdn/content, na branch main
git log -n 1 --format=%H -- files/en-us/caminho/para/arquivo.md
```

Ou com a API do GitHub:

```bash
gh api "repos/mdn/content/commits?path=files/en-us/caminho/para/arquivo.md&per_page=1" --jq '.[0].sha'
```

Copie o SHA completo (40 caracteres) e cole no campo `sourceCommit`.

### Quando atualizá-lo

- Ao criar uma nova tradução, aponte para o SHA mais recente da página em inglês.
- Ao sincronizar com mudanças posteriores do inglês, atualize o SHA para o do commit que você acabou de incorporar.
- Se você não incorporou todas as mudanças, **mantenha o SHA anterior** até concluir a sincronização.

---

## Convenções de tradução

A comunidade de português do Brasil sugere as seguintes convenções.

### Termos técnicos

| Termo em inglês       | Tradução em português do Brasil        |
| --------------------- | -------------------------------------- |
| Event listener        | Ouvinte de eventos                     |
| Event handler         | Manipulador de eventos                 |
| See also              | Veja também                            |
| Specifications        | Especificações                         |
| Browser compatibility | Compatibilidade com navegadores        |
| Warning               | Aviso                                  |
| Note                  | Nota                                   |
| Callout               | Observação                             |
| Examples              | Exemplos                               |
| Syntax                | Sintaxe                                |
| Parameters            | Parâmetros                             |
| Return value          | Valor de retorno                       |
| Exceptions            | Exceções                               |
| Instance properties   | Propriedades de instância              |
| Instance methods      | Métodos de instância                   |
| Static properties     | Propriedades estáticas                 |
| Static methods        | Métodos estáticos                      |
| Events                | Eventos                                |
| Value                 | Valor                                  |
| Event type            | Tipo de evento                         |
| Description           | Descrição                              |
| Constructor           | Construtor                             |
| HTML                  | HTML (sem tradução)                    |
| JavaScript            | JavaScript (sem tradução)              |
| Framework             | Framework (sem tradução)               |

### Marcadores em linha

| Inglês         | Português do Brasil  |
| -------------- | -------------------- |
| `**Note:**`    | `**Nota:**`          |
| `**Warning:**` | `**Aviso:**`         |
| `**Callout:**` | `**Observação:**`    |

### Formato matemático

| Expressão     | Como escrever |
| ------------- | ------------- |
| 2<sup>5</sup> | `2^5`         |

### Macros de glossário

Quando em inglês aparece `{{Glossary("TLD")}}` e o termo natural em português não coincide, adicione o segundo argumento traduzido:

```text
{{Glossary("TLD", "Domínio de nível superior")}}
```

> Exceção: se a frase em português já explica o termo logo após o macro (por exemplo, `{{Glossary("TLD")}} (Top-Level Domain) Domínio de nível superior`), deixe o macro com um único argumento para evitar duplicar o texto renderizado.

---

## Corrigir "flaws" (defeitos)

Ao executar `npm start` no seu clone de `mdn/content` você pode pré-visualizar as mudanças localmente. A mesma pré-visualização está disponível na URL gerada pelo bot ao abrir um PR. Em ambas as visualizações, a parte superior do documento mostra os _flaws_ detectados automaticamente (links quebrados, macros mal usadas, etc.). Muitos podem ser corrigidos com um clique ou aplicando uma sugestão.

---

## Fale conosco

- **MDN Discord**, canal `#portuguese`: <https://discord.gg/aZqEtMrbr7>

---

## Links relevantes

<details>
  <summary>Expandir para ver recursos adicionais</summary>

- Documentação por prioridade: <https://developer.mozilla.org/en-US/docs/MDN/Contribute/Documentation_priorities>
- Os `tags` não são usados nas traduções ([contexto](https://github.com/mdn/translated-content/pull/4058#discussion_r802298455)).
- Guia de Markdown no MDN: <https://developer.mozilla.org/en-US/docs/MDN/Contribute/Markdown_in_MDN>

</details>

Mais informações na [discussão geral da comunidade](https://github.com/mdn/translated-content/discussions).

[guia-contribuicao]: https://developer.mozilla.org/pt-BR/docs/MDN/Contribute
