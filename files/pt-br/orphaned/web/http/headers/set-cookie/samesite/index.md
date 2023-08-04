---
title: SameSite cookies
slug: orphaned/Web/HTTP/Headers/Set-Cookie/SameSite
---

O atributo **`SameSite`** do {{HTTPHeader("Set-Cookie")}} . O cabeçalho de resposta HTTP permite que você declare se o seu cookie deve ser restrito a um contexto de primeira ou mesma parte.

## Valores

O atributo `SameSite` aceita três valores:

### `Lax`

Os cookies podem ser enviados com navegação de alto nível e serão enviados juntamente com a solicitação GET iniciada pelo site de terceiros. Este é o valor padrão nos navegadores modernos.

### `Strict`

Os cookies serão enviados apenas em um contexto de primeira parte e não serão enviados juntamente com solicitações iniciadas por sites de terceiros.

### `None`

Cookies serão enviados em todos os contextos, ou seja, é permitido enviar origem cruzada.

`None` costumava ser o valor padrão, mas as versões recentes do navegador fizeram `Lax` o valor padrão para ter uma defesa razoavelmente robusta contra algumas classes de falsificação de solicitações entre sites ({{Glossary("CSRF")}}).

`None` requer o atributo [`Secure`](#Secure) nas versões mais recentes do navegador. Veja abaixo para mais informações.

## Fixação de avisos comuns

### `SameSite=None` requer `Secure`

O aviso a seguir pode aparecer no seu console:

> Alguns cookies estão usando mal o atributo "sameSite", então não funcionará como esperado.
> Cookie "myCookie" rejeitado porque tem o atributo "sameSite=none", mas está perdendo o atributo "seguro".

O aviso aparece porque qualquer cookie que solicitar `SameSite=None` mas não está marcado `Secure` será rejeitado.

```plain example-bad
Set-Cookie: flavor=choco; SameSite=None
```

Para corrigir isso, você terá que adicionar o atributo `Secure` aos seus cookies `SameSite=None`.

```plain example-good
Set-Cookie: flavor=choco; SameSite=None; Secure
```

Um cookie [`Secure`](#Secure) só é enviado ao servidor com uma solicitação criptografada sobre o protocolo HTTPS. Observe que sites inseguros (http:) não pode definir cookies com a diretiva `Secure`.

### Cookies sem padrão `SameSite` para `SameSite=Lax`

Versões recentes de navegadores modernos fornecem um padrão mais seguro para `SameSite` para seus cookies e assim a seguinte mensagem pode aparecer no seu console:

> Alguns cookies estão usando mal o atributo "sameSite", então não funcionará como esperado.
> Cookie "myCookie" tem a política "sameSite" definida como "frouxa" porque está faltando um atributo "sameSite" e "sameSite=lax" é o valor padrão para este atributo.

O aviso aparece porque a política `SameSite` para um cookie não especificou explicitamente:

```plain example-bad
Set-Cookie: flavor=choco
```

Embora você possa confiar em navegadores modernos para aplicar `SameSite=Lax` automaticamente, você deve sim especificá-lo explicitamente para comunicar claramente sua intenção que `SameSite` política se aplica ao seu cookie. Isso também melhorará a experiência entre os navegadores, pois nem todos eles são padrão para `Lax` ainda.

```plain example-good
Set-Cookie: flavor=choco; SameSite=Lax
```

## Exemplo:

```
RewriteEngine on
RewriteBase "/"
RewriteCond "%{HTTP_HOST}"       "^example\.org$" [NC]
RewriteRule "^(.*)"              "https://www.example.org/index.html" [R=301,L,QSA]
RewriteRule "^(.*)\.ht$"         "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:01:https://www.example.org:30/:SameSite=None:Secure]
RewriteRule "^(.*)\.htm$"        "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:02:https://www.example.org:30/:SameSite=None:Secure]
RewriteRule "^(.*)\.html$"       "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:03:https://www.example.org:30/:SameSite=None:Secure]
[...]
RewriteRule "^admin/(.*)\.html$" "admin/index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:09:https://www.example.org:30/:SameSite=Strict:Secure]
```

## Especificações

| Specification                                                                                    | Title                                                       |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| {{RFC("6265", "Set-Cookie", "4.1")}}                                                 | Mecanismo de gestão do estado HTTP                          |
| [draft-ietf-httpbis-rfc6265bis-05](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-05) | Cookie Prefixes, Same-Site Cookies, e Strict Secure Cookies |

## Compatibilidade com navegadores

{{Compat("http.headers.Set-Cookie", 5)}}

## Veja também:

- [HTTP cookies](/pt-BR/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
