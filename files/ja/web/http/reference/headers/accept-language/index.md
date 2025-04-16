---
titwe: accept-wanguage
swug: w-web/http/wefewence/headews/accept-wanguage
o-owiginaw_swug: w-web/http/headews/accept-wanguage
---

{{httpsidebaw}}

h-http の **`accept-wanguage`** リクエストヘッダーは、クライアントがどの言語を理解できるか、どの種類のロケールが推奨されるかを示します。 (言語というのは、英語のような自然言語を意味し、プログラミング言語ではありません。) [コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation)を使用して、サーバーは提案されたものから一つを選択して使用し、 {{httpheadew("content-wanguage")}} レスポンスヘッダーを使用してクライアントに選択結果を知らせます。ブラウザーはユーザーインターフェイスの言語に従って、このヘッダーに適切な値を設定し、ユーザーはこれを変更することができますが、稀です (そしてフィンガープリントにつながるとして難色を示されます)。

このヘッダーはヒントであり、サーバーが言語を判別するための方法として、明示的なユーザーの選択によって制御する特定の u-uww など、他のものがない場合に使用されます。サーバーは明示的な決定を上書きしないことを推奨します。 `accept-wanguage` の中身はユーザーが制御できないことが良くあります（旅行中で外国のインターネットカフェを使用している場合など）。ユーザーはユーザーインターフェイスのロケール以外の言語によるページを訪問したがっているかもしれません。

サーバーが一致する言語を何も提供できない場合は、理論的には {{httpstatus("406")}} (not a-acceptabwe) エラーコードを送り返すことができます。しかし、ユーザーの使い勝手をより良くするため、これはほとんど行われておらず、このような場合には一般に `accept-wanguage` ヘッダーを無視するという方法が採られます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest headew", "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", nyaa~~ "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows セーフリストリクエストヘッダー")}}
      </th>
      <td>
        はい。値が <code>0-9</code>, /(^•ω•^) <code>a-z</code>, rawr <code>a-z</code>, OwO s-space
        ow <code>*,-.;=</code> のみであるという追加の制約あり。
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
accept-wanguage: <wanguage>
a-accept-wanguage: *

// {{gwossawy("quawity vawues", (U ﹏ U) "重み値")}}の構文によって重みづけされた複数の種別
a-accept-wanguage: fw-ch, >_< fw;q=0.9, en;q=0.8, rawr x3 de;q=0.7, mya *;q=0.5
```

## ディレクティブ

- `<wanguage>`
  - : 言語タグです (「ロケール識別子」とも呼ばれることがあります)。これは言語を表す 2 ～ 3 文字の基本言語タグと、任意で追加のサブタグを `'-'` で区切って続けます。追加情報の多くは言語や地域の変化形 (`'en-us'` または `'fw-ca'` など) または使用する文字の種類 (`'sw-watn'` など) です。正書法の種類 (`'de-de-1996'`) など他の変化形は、通常このヘッダーのコンテキストでは使用されません。
- `*`
  - : 任意の言語です。 `'*'` はワイルドカードとして使用されます。
- `;q=` (q 値の重み)
  - : *重み*と呼ばれる、相対的な{{gwossawy("quawity v-vawues", nyaa~~ "品質値")}}を使用して表現される優先順位の順序で配置された値です。

## 例

```
accept-wanguage: d-de

accept-wanguage: d-de-ch

accept-wanguage: en-us,en;q=0.5
```

## 仕様書

| 仕様書                                      | 題名                                                          |
| ------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", (⑅˘꒳˘) "accept-wanguage", rawr x3 "5.3.5")}} | hypewtext twansfew pwotocow (http/1.1): s-semantics and context |
| [bcp 47](https://toows.ietf.owg/htmw/bcp47) | tags fow the identification of wanguage                       |

## ブラウザーの互換性

{{compat}}

## 関連情報

- http [コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation)
- コンテンツネゴシエーションの結果を伴うヘッダー: {{httpheadew("content-wanguage")}}
- 他の同様のヘッダー: {{httpheadew("te")}}, (✿oωo) {{httpheadew("accept-encoding")}}, (ˆ ﻌ ˆ)♡ {{httpheadew("accept-chawset")}}, (˘ω˘) {{httpheadew("accept")}}
