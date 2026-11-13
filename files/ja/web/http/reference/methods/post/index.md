---
title: POST リクエストメソッド
short-title: POST
slug: Web/HTTP/Reference/Methods/POST
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**`POST`** は HTTP のメソッドで、サーバーにデータを送信します。リクエストの本体の型は {{HTTPHeader("Content-Type")}} ヘッダーで示されます。

{{HTTPMethod("PUT")}} と `POST` との違いは、 `PUT` が{{Glossary("idempotent", "べき等")}}であることです。一度呼び出しても複数回呼び出しても成功すれば同じ効果になります（副作用がありません）。
同一の `POST` リクエストを連続して送信すると、同じ注文を複数回作成するなど、追加の効果を持つことがあります。

[HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)は、ふつうデータを `POST` を用いて送信し、これがふつうサーバーに変化をもたらします。
HTML フォームにおいて、本体コンテンツの形式/エンコード方式は、{{HTMLElement("form")}} 要素の [`enctype`](/ja/docs/Web/HTML/Reference/Elements/form#enctype)属性または {{HTMLElement("input") }} または {{HTMLElement("button")}} 要素の[`formenctype`](/ja/docs/Web/HTML/Reference/Elements/input#formenctype)属性によって決定されます。
エンコードは次のいずれかになることがあります。

- `application/x-www-form-urlencoded`: キーと値は、アンパサンド（`&`）で別個のキーと値のペア（キー-値タプル）としてエンコードされ、キーと値の間には等号（`=`）がつけられます（例：`first-name=Frida&last-name=Kahlo`）。
  キーと値の両方にある英数字以外の文字は{{Glossary("Percent-encoding", "パーセントエンコード")}}されます。このため、この型はバイナリーデータには適しておらず、そのような用途に `multipart/form-data` を使用しましょう。
- `multipart/form-data`: それぞれの値はデータのブロック ("body part") として送信され、ユーザーエージェントが定義するデリミター（`boundary="delimiter12345"` など）がそれぞれの部分を区切ります。
  キーはそれぞれの部分の {{HTTPHeader("Content-Disposition")}} ヘッダーの中で与えられます。
- `text/plain`

`POST` リクエストが {{domxref("Window/fetch", "fetch()")}} など、HTML フォーム以外の方法で送信された場合は、本体はあらゆる型を使うことができます。HTTP 1.1 仕様書で記述されている通り、 `POST` は以下のような機能をカバーする統一的なメソッドになるよう設計されています。

- 既存のリソースの注釈
- 掲示板、ニュースグループ、メーリングリスト、又は同様の記事グループへの投稿
- サインアップモーダルからの新規ユーザーの追加
- フォームの送信結果などにおける、データを扱うプロセスへのデータブロックの受け渡し
- 追加操作によるデータベースの拡張

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本体</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本体</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
      <td>鮮度を表す情報が含まれている場合のみ可能</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Learn_web_development/Extensions/Forms">HTML フォーム</a>での利用
      </th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 構文

```http
POST <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : {{HTTPHeader("Host")}} ヘッダーで指定された情報と組み合わせて、リクエストの対象リソースを特定します。
    これはオリジンサーバーへのリクエストでは絶対パス（例: `/path/to/file.html`）であり、プロキシーへのリクエストでは絶対 URL（例: `http://www.example.com/path/to/file.html`）です。
- `<query>` {{optional_inline}}
  - : 疑問符 `?` で始まるオプションのクエリ成分。
    多くの場合、`key=value` という形で識別情報を伝達するために使用されます。

## 例

### URL エンコードされたフォーム送信

`application/x-www-form-urlencoded` コンテンツエンコーディング（デフォルト）を使用するフォームは、下記のように、`key=value` ペアで構成されるフォームデータを `&` 記号で区切って本体に含めたリクエストを送信します。

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### マルチパートのフォーム送信

`multipart/form-data` エンコーディングは、フォームにファイルや大量のデータが含まれる場合に使用されます。
このリクエスト本体は、境界文字列を使用してフォームのそれぞれの部分を区切ります。
この形式のリクエストの例を示します。

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: multipart/form-data;boundary="delimiter12345"

--delimiter12345
Content-Disposition: form-data; name="field1"

value1
--delimiter12345
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--delimiter12345--
```

{{HTTPHeader("Content-Disposition")}} ヘッダーは、フォームデータをどのように処理すべきかを示し、必要に応じて `name` や `filename` のフィールドを指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Content-Type")}} ヘッダー
- {{HTTPHeader("Content-Disposition")}} ヘッダー
- {{HTTPMethod("GET")}} メソッド
