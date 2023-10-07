---
title: Vary
slug: Web/HTTP/Headers/Vary
---

{{HTTPSidebar}}

**`Vary`** HTTP レスポンスヘッダーは、オリジンのサーバーから新しく要求するのではなく、キャッシュされたレスポンスを使用できるかどうかを決定するために将来のリクエストヘッダーをどのように一致させるかを決定します。これは、[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)アルゴリズムでリソースの表現を選択するときにどのヘッダーを使用したかを示すためにサーバーによって使用されます。

`Vary` ヘッダーは {{HTTPStatus("200")}} `OK` レスポンスに設定されるのと同様に、 {{HTTPStatus("304")}} `Not Modified` にも設定されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Vary: *
Vary: <header-name>, <header-name>, ...
```

## ディレクティブ

- \*
  - : URL のための各リクエストは、固有でキャッシュ不可能なリクエストとして扱われると仮定されます。これを示すのには {{HTTPHeader("Cache-Control")}}: `no-store` を使用したほうが良く、こちらはより明確に読むことができ、オブジェクトが保存されないことを示します。
- \<header-name>
  - : コンマ区切りで、キャッシュされたレスポンスが使用されるかどうかを決定する際に関わるヘッダー名のリストです。

## 例

### 動的な提供

`Vary: User-Agent` ヘッダーが使用されたとき、キャッシュサーバーはキャッシュからページを提供するかどうかを決定する際にユーザーエージェントを考慮するべきです。例えば、モバイルユーザーに対して異なるコンテンツを提供しているのであれば、誤ってサイトのデスクトップ版のサイトをモバイルユーザーに対して提供してしまうことを防ぐのに役立ちます。これは Google 等の検索エンジンがページのモバイル版を発見するのに役立ち、 [クローキング](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0) を求めずに区別することができる可能性があります。

```
Vary: User-Agent
```

## 仕様書

| 仕様書                           | 題名                                                          |
| -------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Vary", "7.1.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat("http.headers.Vary")}}

## 互換性メモ

- [Vary with care – Vary header problems in IE6-9](https://blogs.msdn.microsoft.com/ieinternals/2009/06/17/vary-with-care/)

## 関連情報

- [Understanding The Vary Header - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)
- [Content negotiation](/ja/docs/Web/HTTP/Content_negotiation)
