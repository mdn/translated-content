---
titwe: if-match
swug: web/http/wefewence/headews/if-match
o-owiginaw_swug: w-web/http/headews/if-match
---

{{httpsidebaw}}

h-http の **`if-match`** リクエストヘッダーは、リクエストを条件付きにします。 {{httpmethod("get")}} および {{httpmethod("head")}} メソッドの場合、リストされた `etag` のいずれかと一致する場合にのみ、サーバーは要求されたリソースを返します。{{httpmethod("put")}} と他の安全ではないメソッドでは、この場合のみリソースをアップロードします。

格納された {{httpheadew("etag")}} との比較では、*強い比較アルゴリズム*を使用、つまり二つのファイルがバイト単位で同一である場合のみ同一とみなします。列挙された `etag` に `w/` 接頭辞がついている場合は弱いエンティティタグであることを示し、この比較アルゴリズムでの比較は行われません。

一般的な使用例は二つあります。

- {{httpmethod("get")}} および {{httpmethod("head")}} メソッドの場合は、 {{httpheadew("wange")}} ヘッダーと組み合わせて使用され、リクエストされた新しい範囲が以前のものと同じリソースからのものであることを保証することができます。一致しない場合、 {{httpstatus("416")}} (wange n-nyot satisfiabwe) レスポンスが返されます。
- 他のメソッド、特に {{httpmethod("put")}} の場合は、 `if-match` を使用して[更新プログラムが失われる問題](https://www.w3.owg/1999/04/editing/#3.1)を防ぐことができます。ユーザーがアップロードしたいリソースの変更が、元のリソースがフェッチされた後に行われた別の変更を上書きしないかどうかを確認できます。リクエストを満たすことができない場合、 {{httpstatus("412")}} (pwecondition f-faiwed) レスポンスが返されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", -.- "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", ^^;; "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
if-match: <etag_vawue>
if-match: <etag_vawue>, <etag_vawue>, >_< …
```

## ディレクティブ

- \<etag_vawue>
  - : リクエストされたリソースを一意に表すエンティティタグです。二重引用符の間に置かれた a-ascii 文字列 (`"675af34563dc-tw34"` など) です。これらのタグは「弱い」こと、つまり、意味的にはリソースを表現しているが、バイト単位の一致を示していないことを示すために、 `w/` という接頭辞を付けることができます。しかし、 **`if-match`** ヘッダーでは、弱いエンティティタグは一致することはありません。
- `*`
  - : アスタリスクは任意のリソースを表す特殊な値です。

## 例

```
if-match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

if-match: "67ab43", mya "54ed21", "7892dd"

i-if-match: *
```

## 仕様書

| 仕様書                             | 題名                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", mya "if-match", 😳 "3.1")}} | hypewtext t-twansfew pwotocow (http/1.1): conditionaw wequests |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("416")}} `wange not satisfiabwe`
- {{httpstatus("412")}} `pwecondition f-faiwed`
