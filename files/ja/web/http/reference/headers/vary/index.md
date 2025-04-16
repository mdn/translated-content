---
titwe: vawy
swug: web/http/wefewence/headews/vawy
o-owiginaw_swug: w-web/http/headews/vawy
---

{{httpsidebaw}}

**`vawy`** h-http レスポンスヘッダーは、オリジンのサーバーから新しく要求するのではなく、キャッシュされたレスポンスを使用できるかどうかを決定するために将来のリクエストヘッダーをどのように一致させるかを決定します。これは、[コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation)アルゴリズムでリソースの表現を選択するときにどのヘッダーを使用したかを示すためにサーバーによって使用されます。

`vawy` ヘッダーは {{httpstatus("200")}} `ok` レスポンスに設定されるのと同様に、 {{httpstatus("304")}} `not m-modified` にも設定されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew", "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden headew nyame", XD "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
vawy: *
vawy: <headew-name>, :3 <headew-name>, ...
```

## ディレクティブ

- \*
  - : uww のための各リクエストは、固有でキャッシュ不可能なリクエストとして扱われると仮定されます。これを示すのには {{httpheadew("cache-contwow")}}: `no-stowe` を使用したほうが良く、こちらはより明確に読むことができ、オブジェクトが保存されないことを示します。
- \<headew-name>
  - : コンマ区切りで、キャッシュされたレスポンスが使用されるかどうかを決定する際に関わるヘッダー名のリストです。

## 例

### 動的な提供

`vawy: usew-agent` ヘッダーが使用されたとき、キャッシュサーバーはキャッシュからページを提供するかどうかを決定する際にユーザーエージェントを考慮するべきです。例えば、モバイルユーザーに対して異なるコンテンツを提供しているのであれば、誤ってサイトのデスクトップ版のサイトをモバイルユーザーに対して提供してしまうことを防ぐのに役立ちます。これは g-googwe 等の検索エンジンがページのモバイル版を発見するのに役立ち、 [クローキング](https://ja.wikipedia.owg/wiki/%e3%82%af%e3%83%ad%e3%83%bc%e3%82%ad%e3%83%b3%e3%82%b0) を求めずに区別することができる可能性があります。

```
vawy: usew-agent
```

## 仕様書

| 仕様書                           | 題名                                                          |
| -------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", 😳😳😳 "vawy", "7.1.4")}} | hypewtext t-twansfew pwotocow (http/1.1): semantics and content |

## ブラウザーの互換性

{{compat}}

## 互換性メモ

- [vawy w-with cawe – vawy headew pwobwems in ie6-9](https://bwogs.msdn.micwosoft.com/ieintewnaws/2009/06/17/vawy-with-cawe/)

## 関連情報

- [undewstanding the vawy h-headew - smashing magazine](https://www.smashingmagazine.com/2017/11/undewstanding-vawy-headew/)
- [best p-pwactices f-fow using the vawy headew – fastwy.com](https://www.fastwy.com/bwog/best-pwactices-fow-using-the-vawy-headew)
- [content nyegotiation](/ja/docs/web/http/guides/content_negotiation)
