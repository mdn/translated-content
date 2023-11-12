---
title: MIME types
slug: Web/HTTP/Basics_of_HTTP/MIME_types
---

{{HTTPSidebar}}

O **MIME type** é o mecanismo para dizer ao cliente a variedade de documentos transmitidos: a extensão de um nome de arquivo não tem significado na web. Portanto, é importante que o servidor esteja configurado corretamente, de modo que o _MIME-type_ correto seja transmitido com cada documento. Os navegadores costumam usar o _MIME-type_ para determinar qual ação usar como padrão para fazer quando um recurso é obtido.

Existem muitos tipos de documentos, por isso há muitos _MIME-types_. Neste artigo, listaremos os mais importantes para o desenvolvimento da Web, mas você pode encontrá-los para os tipos de documento aplicáveis neste artigo dedicado: [Lista completa de _MIME types_](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)_._

_MIME types_ não são a única maneira de transmitir as informações do tipo de documento:

- Os sufixos de nome são usados às vezes, especialmente em sistemas Microsoft Windows. Nem todos os sistemas operacionais consideram esses sufixos significativos (especialmente Linux e Mac OS), e como um tipo MIME externo, não há garantia de que eles estejam corretos.
- Números mágicos. A sintaxe dos diferentes tipos de arquivos permite a inferência de tipo de arquivo, olhando para a estrutura. Por exemplo. Cada arquivo GIF começa com o valor hexadecimal 47 49 46 38 \[GIF89] ou arquivos PNG com 89 50 4E 47 \[.PNG]. Nem todos os tipos de arquivos têm números mágicos, portanto este não é um sistema 100% confiável.

Na Web, apenas o _MIME type_ é relevante e deve ser definido com cuidado. Navegadores e servidores usavam frequentemente heurísticas baseadas em sufixos ou números mágicos para definir o tipo MIME, verificar a coerência ou encontrar o tipo MIME correto quando apenas um tipo genérico foi fornecido.

## Sintaxe

### Estrutura geral

```
tipo/subtipo
```

A estrutura de um _MIME type_ é muito simples; Consiste de um tipo e um subtipo, duas strings, separados por um '/'. Nenhum espaço é permitido. O tipo representa a categoria e pode ser um tipo _discreto_ ou _multipart_. O subtipo é específico para cada tipo.

Um _MIME type_ é case-insensitive mas tradicionalmente é escrito tudo em minúsculas.

### Tipos discretos

```
text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/octet-stream
…
```

Tipos _discretos_ indicam a categoria do documento, ele pode ser um dos seguintes:

| Tipo          | Descrição                                                                                                                                             | Exemplos de subtipos típicos                                                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`        | Representa qualquer documento que contenha texto e é teoricamente legivel para o ser humano.                                                          | `text/plain`, `text/html`, `text/css, text/javascript`                                                                                          |
| `image`       | Representa qualquer tipo de imagens. Os vídeos não estão incluídos, embora imagens animadas (como gif animado) sejam descritas com um tipo de imagem. | `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`                                                                               |
| `audio`       | Representa qualquer tipo de arquivo de audio                                                                                                          | `audio/midi`, `audio/mpeg, audio/webm, audio/ogg, audio/wav`                                                                                    |
| `video`       | Representa qualquer tipo de arquivo de video                                                                                                          | `video/webm`, `video/ogg`                                                                                                                       |
| `application` | Representa qualquer tipo de dados binários.                                                                                                           | `application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf` |

Para documentos de texto sem um subtipo especifico, **`text/plain`** deverá ser usado. Assim como, para documentos binários sem subtipo especifico ou conhecido, **`application/octet-stream`** deverá ser usado.

### Tipos de multipart

```
multipart/form-data
multipart/byteranges
```

_Multipart types_ indicam uma categoria de documento que são quebrados em partes distintas, muitas vezes com diferentes tipos MIME. É uma maneira de representar um documento composto. Com exceção de `multipart/form-data`, que são usados em relação de [formularios HTML](/pt-BR/docs/Web/Guide/HTML/Forms) e metodo {{HTTPMethod("POST")}}, e `multipart/byteranges` que são usados em conjunto com {{HTTPStatus("206")}} `Mensagem de status de conteúdo parcial para enviar apenas um subconjunto de um documento inteiro, o HTTP não manipula documentos de várias partes de uma maneira específica: a mensagem é simplesmente transmitida ao navegador (o que provavelmente irá propor uma janela Salvar como, sem saber como exibir o documento).`

## Importantes _MIME types_ para desenvolvedores Web

### `application/octet-stream`

Este é o valor padrão para um arquivo binario. Como é um arquivo binário desconhecido, os navegadores geralmente não irá executá-lo automaticamente, ou irá perguntar se ele deve ser executado. Eles tratam-na como se o cabeçalho {{HTTPHeader("Content-Disposition")}} fosse definido com o anexo de valor e propusessem um "Salvar como".

### `text/plain`

Este é o valor padrão para arquivos de texto. Mesmo se realmente significa arquivo textual desconhecido, os navegadores assumem que eles podem exibi-lo.

> **Nota:** Note que `text/plain` não significa qualquer tipo de dados textuais. Se eles esperam um tipo específico de dados textuais, eles provavelmente não consideram uma correspondência. Especificamente se eles baixarem um arquivo `text/plain` de um elemento {{HTMLElement ("link")}} declarando arquivos CSS, eles não o reconhecerão como arquivos CSS válidos se forem apresentados com `text/plain`.
> O CSS mime tipo `text/css` deve ser usado.

### `text/css`

Quaisquer arquivos CSS que têm de ser interpretados como tal em uma página da Web devem ser dos arquivos de `text/css`. Muitas vezes os servidores não reconhecem arquivos com o sufixo .css como arquivos CSS, em vez disso, enviam-nos com o tipo MIME de `text/plain` ou `application/octet-stream`: nesses casos, eles não serão reconhecidos como arquivos CSS pela maioria dos navegadores e serão silenciosamente ignorados.
Atenção especial tem de ser paga para servir arquivos CSS com o tipo correto.

### `text/html`

Todo o conteúdo HTML deve ser exibido com este tipo. Tipos MIME alternativos para XHTML (como `application/xml+html)` são em sua maioria inúteis hoje em dia (HTML5 unificou esses formatos).

### Images types

Apenas um punhado de tipos de imagem são amplamente reconhecidos e são considerados seguros na Web, prontos para uso em uma página da Web:

| MIME type       | Image type                                              |
| --------------- | ------------------------------------------------------- |
| `image/gif`     | GIF images (Compressão sem perdas, substituído por PNG) |
| `image/jpeg`    | JPEG images                                             |
| `image/png`     | PNG images                                              |
| `image/svg+xml` | SVG images (vector images)                              |

Há uma discussão para adicionar WebP (image / webp) a esta lista, mas como cada novo tipo de imagem irá aumentar o tamanho de um codebase, isso pode introduzir novos problemas de segurança, então os fornecedores de navegador são cautelosos em aceitá-lo.

Outros tipos de imagens podem ser encontrados em documentos da Web. Por exemplo, muitos navegadores suportam tipos de imagem de ícones para favicons ou similares.
Em particular, as imagens do ICO são suportadas neste contexto com o tipo MIME `image/x-icon`.

### Audio and video types

Como as imagens, o HTML não define um conjunto de tipos suportados para usar com os elementos {{HTMLElement("audio")}} e {{HTMLElement("video")}} , de modo que apenas um grupo relativamente pequeno deles pode ser Usado na Web. Os [formatos de mídia suportados pelos elementos de áudio e vídeo em HTML](/pt-BR/docs/Web/HTML/Supported_media_formats) explicam os codecs e formatos de contêiner que podem ser usados.

O tipo MIME de tais arquivos principalmente representam os formatos de contêiner e os mais comuns em um contexto da Web são:

| MIME type                                               | Audio or video type                                                                                                                                                                        |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `audio/wave` `audio/wav` `audio/x-wav` `audio/x-pn-wav` | Um arquivo de áudio no formato de recipiente WAVE. O codec de áudio PCM (WAVE codec "1") é freqüentemente suportado, mas outros codecs têm suporte mais limitado (se houver).              |
| `audio/webm`                                            | Um arquivo de áudio no formato de contêiner WebM. Vorbis e Opus são os codecs de áudio mais comuns.                                                                                        |
| `video/webm`                                            | Um arquivo de vídeo, possivelmente com áudio, no formato de contêiner WebM. VP8 e VP9 são os codecs video os mais comuns usados dentro dele; Vorbis e Opus os codecs de áudio mais comuns. |
| `audio/ogg`                                             | Um arquivo de áudio no formato de contêiner OGG. Vorbis é o codec de áudio mais comum usado em tal recipiente.                                                                             |
| `video/ogg`                                             | Um arquivo de vídeo, possivelmente com áudio, no formato de contêiner OGG. Theora é o codec video usual usado dentro dele; Vorbis é o codec de áudio usual.                                |
| `application/ogg`                                       | Um arquivo de áudio ou vídeo usando o formato de contêiner OGG. Theora é o codec video usual usado dentro dele; Vorbis é o codec de áudio usual.                                           |

### `multipart/form-data`

O tipo `multipart/form-data` pode ser usado ao enviar o conteúdo de um [formulario HTML](/pt-BR/docs/Web/Guide/HTML/Forms) preenchido do navegador para o servidor. Como um documento multipart formal, consiste em partes diferentes, delimitado por um limite (uma seqüência de caracteres começando com um traço duplo '--'). Cada parte é uma entidade por si só, com seus próprios cabeçalhos HTTP, {{HTTPHeader("Content-Disposition")}}, e {{HTTPHeader("Content-Type")}} Para os campos de upload de arquivos, e os mais comuns ({{HTTPHeader("Content-Length")}} É ignorada como a linha de limite é usada como o delimitador).

```
Content-Type: multipart/form-data; boundary=aBoundaryString
(Outros cabeçalhos associados ao documento em várias partes como um todo)

--aBoundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(dados)
--aBoundaryString
Content-Disposition: form-data; name="myField"

(dados)
--aBoundaryString
(mais subpartes)
--aBoundaryString--
```

O seguinte formulario:

```html
<form action="http://localhost:8000/" method="post" enctype="multipart/form-data">
  <input type="text" name="myTextField">
  <input type="checkbox" name="myCheckBox">Check</input>
  <input type="file" name="myFile">
  <button>Send the file</button>
</form>
```

Enviará esta mensagem:

```
POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myTextField"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myCheckBox"

on
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myFile"; filename="test.txt"
Content-Type: text/plain

Simple file.
-----------------------------8721656041911415653955004498--
```

### `multipart/byteranges`

O tipo MIME `multipart/byteranges` é usado no contexto de enviar respostas parciais para o navegador. Quando o código de status de conteúdo parcial {{HTTPStatus("206")}} é enviado, este tipo MIME é usado para indicar que o documento é composto de várias partes, uma para cada um do intervalo solicitado. Como outros tipos de multipart, o {{HTTPHeader("Content-Type")}} usa a diretiva de limite para definir a seqüência de limites. Cada uma das diferentes partes tem um cabeçalho {{HTTPHeader("Content-Type")}} com o tipo real do documento e um {{HTTPHeader("Content-Range")}} com o intervalo que representam.

```
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="vieport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--
```

## Importância de definir o `MIME type` correto

A maioria dos servidores web envia recursos de tipo desconhecido usando o tipo MIME de application/octet-stream padrão. Por razões de segurança, a maioria dos navegadores não permite definir uma ação padrão personalizada para esses recursos, forçando o usuário a armazená-lo no disco para usá-lo. Algumas configurações de servidor incorretamente exibidas ocorrem com os seguintes tipos de arquivo:

- Arquivos RAR-codificados. Neste caso, o ideal seria definir o verdadeiro tipo de arquivos codificados; Isso muitas vezes não é possível (como pode não ser conhecido para o servidor e esses arquivos podem conter vários recursos de tipos diferentes). Nesse caso, configure o servidor para enviar o tipo MIME `application/x-rar-compressed`.
- Arquivos de áudio e vídeo. Somente recursos com o Tipo MIME correto serão reconhecidos e reproduzidos em elementos {{HTMLElement("video")}} ou {{HTMLElement("áudio")}}. Certifique-se [de usar o tipo correto para áudio e vídeo](/En/Media_formats_supported_by_the_audio_and_video_elements).
- Tipos de arquivos proprietários. Preste especial atenção ao servir um tipo de arquivo proprietário. Evite usar o `application/octet-stream` como manipulação especial não será possível: a maioria dos navegadores não permitem definir um comportamento padrão (como "Abertura no Word") para este tipo MIME genérico.

## MIME sniffing

Na ausência de um tipo MIME, ou em alguns outros casos em que um cliente acredita que estão incorrectamente definidos, os navegadores podem conduzir MIME sniffing, que está adivinhando o tipo MIME correto, olhando para o recurso. Cada navegador executa isso de forma diferente e em circunstâncias diferentes. Existem algumas preocupações de segurança com esta prática,
Como alguns tipos MIME representam conteúdo executável e outros não. Os servidores podem bloquear MIME sniffing enviando o {{HTTPHeader("X-Content-Type-Options")}} ao longo do {{HTTPHeader("Content-Type")}}.

## See also

- [Properly configuring server MIME types](/pt-BR/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types)
- [Media formats supported by the HTML audio and video elements](/pt-BR/docs/Web/HTML/Supported_media_formats)
