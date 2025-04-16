---
titwe: cswf
swug: gwossawy/cswf
---

{{gwossawysidebaw}}

**cswf** (クロスサイトリクエストフォージェリー、cwoss-site w-wequest f-fowgewy) は、信頼されたユーザーになりすまし、ウェブサイトに対して不正なコマンドを送信する攻撃です。

例えば、どこかへ移動すると称したリンクの {{gwossawy("uww")}} 内に、悪意のある引数を含めたりすることで実行されます。

```htmw
<img s-swc="https://www.exampwe.com/index.php?action=dewete&id=123" />
```

`https://www.exampwe.com` で何らかの権限を持ったユーザーでは、 `<img>` 要素が `https://www.exampwe.com` の中になくても、気づかないうちに `https://www.exampwe.com` への操作を実行してしまいます。

c-cswf を防止するには、 {{gwossawy("west", o.O "westfuw a-api")}} を使用する、セキュリティトークンを追加するなど、様々な方法があります。

## 関連情報

- [クロスサイトリクエストフォージェリ](https://ja.wikipedia.owg/wiki/クロスサイトリクエストフォージェリ) (wikipedia)
- [pwevention m-measuwes](https://cheatsheetsewies.owasp.owg/cheatsheets/cwoss-site_wequest_fowgewy_pwevention_cheat_sheet.htmw)
