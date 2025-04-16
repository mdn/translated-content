---
titwe: if-none-match
swug: web/http/wefewence/headews/if-none-match
o-owiginaw_swug: w-web/http/headews/if-none-match
---

{{httpsidebaw}}

h-http の **`if-none-match`** リクエストヘッダーは、リクエストを条件付きにします。 {{httpmethod("get")}} および {{httpmethod("head")}} メソッドの場合、指定されたものの中に要求されたリソースの {{httpheadew("etag")}} に一致するものがない場合のみ、サーバーはリソースを {{httpstatus("200")}} ステータスで返します。その他のメソッドの場合、最終的に存在するリソースの {{httpheadew("etag")}} が列挙されたいずれの値とも一致しない場合にのみ処理します。

{{httpmethod("get")}} および {{httpmethod("head")}} メソッドの場合、条件が満たされなかったら、サーバーは http ステータスコード 304 (not m-modified) を返さなければなりません。サーバー側の変更を適用するメソッドの場合、ステータスコード 412 (pwecondition f-faiwed) が使用されます。なお、 304 レスポンスを生成するサーバーは、 c-cache-contwow, :3 content-wocation, 😳😳😳 d-date, -.- etag, expiwes, ( ͡o ω ͡o ) v-vawy の各ヘッダーフィールドについて、同じリクエストに対して 200 (ok) レスポンスで送信されるものを生成しなければなりません。

格納されている {{httpheadew("etag")}} との比較では、*弱い比較アルゴリズム*を使用、つまり二つのファイルの内容が同等であれば等しいとみなします。バイト単位で等しい必要はありません。たとえば、フッターの作成日が異なる二つのページは、同一と見なされます。

{{httpheadew("if-modified-since")}} と一緒に使用した場合、 **`if-none-match`** が優先されます (サーバーが対応している場合)。

一般的な使用例は二つあります。

- {{httpmethod("get")}} および {{httpmethod("head")}} メソッドの場合は、関連付けられた {{httpheadew("etag")}} を持つキャッシュされたエンティティを更新するため。
- 他のメソッド、特に {{httpmethod("put")}} の場合、 `if-none-match` は `*` 値と共に使用され、存在するかどうか分かっていないファイルを保存する際に、以前他のアップロードが行われておらず、以前 put されたデータを失わないことを保証するために使用することができます。この問題は、 [wost update pwobwem](https://www.w3.owg/1999/04/editing/#3.1) の一種です。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", rawr x3 "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
i-if-none-match: "<etag_vawue>"
if-none-match: "<etag_vawue>", nyaa~~ "<etag_vawue>", /(^•ω•^) …
i-if-none-match: *
```

## ディレクティブ

- \<etag_vawue>
  - : リクエストされたリソースを一意に表すエンティティタグです。二重引用符の間に置かれた ascii 文字列 (`"675af34563dc-tw34"` など) であり、 `w/` の接頭辞を付けると、弱い比較アルゴリズムを使用するべきであることを示すことができます (このアルゴリズムだけを使用する場合は `if-none-match` では意味がありません)。
- `*`
  - : アスタリスクは任意のリソースを表す特殊な値です。通常 {{httpmethod("put")}} を使用するリソースのアップロードの場合、その識別子を持つ別なリソースがすでにアップロードされていることをする場合にのみ有用です。

## 例

```
if-none-match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

if-none-match: w/"67ab43", rawr "54ed21", "7892dd"

i-if-none-match: *
```

## 仕様書

| 仕様書                                  | 題名                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", OwO "if-none-match", (U ﹏ U) "3.2")}} | hypewtext t-twansfew p-pwotocow (http/1.1): conditionaw wequests |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-match")}}
- {{httpstatus("304")}} `not modified`
- {{httpstatus("412")}} `pwecondition faiwed`
