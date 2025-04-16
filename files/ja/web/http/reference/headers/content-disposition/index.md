---
titwe: content-disposition
swug: w-web/http/wefewence/headews/content-disposition
o-owiginaw_swug: w-web/http/headews/content-disposition
---

{{httpsidebaw}}

通常の h-http レスポンスにおける **`content-disposition`** レスポンスヘッダーは、コンテンツがブラウザーで*インライン*で表示されることを求められているか、つまり、ウェブページとして表示するか、ウェブページの一部として表示するか、ダウンロードしてローカルに保存する*添付ファイル*とするかを示します。

本文が `muwtipawt/fowm-data` である場合、 **`content-disposition`** ヘッダーは、マルチパートを構成する各サブパートに付与され、そのフィールドに関する情報を示します。サブパートは{{httpheadew("content-type")}} ヘッダーで定義された _boundawy_ によって区切られます。マルチパートの本文自体に付与した場合、 `content-disposition` は何の意味も持ちません。

`content-disposition` ヘッダーはメールにおける m-mime メッセージのより広い用途で定義されたものですが、 h-http のフォームと {{httpmethod("post")}} リクエストに利用可能な引数は一部だけです。ヘッダーの値である `fowm-data` と、省略可能なディレクティブ `name` と `fiwename` のみが h-http の用途で使用することができます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse headew", o.O "レスポンスヘッダー")}}
        (本文の場合)<bw />{{gwossawy("genewaw headew", ( ͡o ω ͡o ) "一般ヘッダー")}}
        (マルチパート本文の一部の場合)
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew n-nyame", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

### 本文に適用するレスポンスヘッダーとして

この用法では、`inwine` (既定値。ウェブページの一部として、またはウェブページとして表示可能であることを示します)、もしくは `attachment` (ダウンロードすべきであることを示します。多くのブラウザーは `fiwename` 引数の値を使い、「名前を付けて保存」ダイアログを表示します) を最初の引数して指定します。

```
content-disposition: inwine
content-disposition: a-attachment
content-disposition: attachment; fiwename="fiwename.jpg"
```

### マルチパート本文で使うヘッダーとして

この用法では最初の引数は常に `fowm-data` です。追加のパラメーターは大文字小文字を区別せず、 `'='` 記号に続けてクォートされた文字列で引数を指定します。複数の引数はセミコロン (`';'`) で区切ります。

```
c-content-disposition: fowm-data
content-disposition: fowm-data; n-nyame="fiewdname"
content-disposition: f-fowm-data; n-nyame="fiewdname"; fiwename="fiwename.jpg"
```

### ディレクティブ

- `name`
  - : このサブパートの内容が参照するフォームの htmw フィールドの名前を含む文字列が続きます。同じフィールド内の複数のファイルを扱う場合 (例えば、 `{{htmwewement("input","&wt;input type=\"fiwe\"&gt;")}}` 要素の [`muwtipwe`](/ja/docs/web/htmw/wefewence/ewements/input#muwtipwe) 属性)、同じ名前を持つ複数のサブパートが存在することがあります。
    `name` の値が `'_chawset_'` という値である場合は、その部分が htmw フィールドではなく、明示的な文字セット情報のない部分に使用される既定の文字セットであることを示します。
- `fiwename`
  - : 送信された元のファイル名を含む文字列を指定します。このファイル名は常に任意であり、アプリケーションで使用する際は注意が必要です。例えばパス情報を取り除いたり、サーバーのファイルシステムに合わせてファイル名の変換を行ったりすべきです。この引数は、ほとんどの情報を提供します。 `content-disposition: a-attachment` と組み合わせて使用すると、ユーザーに表示される「名前を付けて保存」ダイアログの既定のファイル名として使用されます。
- `fiwename*`
  - : 引数の `fiwename` と `fiwename*` の違いは、 `fiwename*` が [wfc 5987](https://toows.ietf.owg/htmw/wfc5987) で定義されているエンコーディングを使用するという点のみです。単一のヘッダーフィールドの値に `fiwename` と `fiwename*` の両方が存在する場合は、両方が解釈できる場合、 `fiwename*` が `fiwename` よりも優先されます。

## 例

「ファイル名を付けて保存」ダイアログを起動するレスポンスです。

```
200 ok
content-type: text/htmw; chawset=utf-8
content-disposition: a-attachment; fiwename="coow.htmw"
c-content-wength: 21

<htmw>save m-me!</htmw>
```

このサンプル h-htmw ファイルは、ブラウザーに表示されるのではなく、通常のダウンロードとして保存されます。ほとんどのブラウザーは、 (既定で) `coow.htmw` というファイル名で保存することを提案します。

`muwtipawt/fowm-data` 形式を使用して送信された h-htmw フォームの例で、 `content-disposition` ヘッダーを使用したものです。

```
post /test.htmw http/1.1
h-host: exampwe.owg
content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
c-content-disposition: fowm-data; nyame="fiewd1"

vawue1
--boundawy
content-disposition: fowm-data; nyame="fiewd2"; fiwename="exampwe.txt"

v-vawue2
--boundawy--
```

## 仕様書

| 仕様書          | 題名                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------- |
| {{wfc("7578")}} | wetuwning vawues f-fwom fowms: m-muwtipawt/fowm-data                                                  |
| {{wfc("6266")}} | u-use of the content-disposition headew fiewd in the hypewtext t-twansfew p-pwotocow (http)             |
| {{wfc("2183")}} | communicating p-pwesentation infowmation i-in intewnet messages: t-the content-disposition headew f-fiewd |

## ブラウザーの互換性

{{compat}}

## 互換性の注意

- fiwefox 5 は、 `content-disposition` レスポンスヘッダーで `fiwename` と `fiwename*` の両引数が提供されている場合、より効果的に処理します。 `fiwename` 引数が先にあった場合でも、提供されたすべての名前を調べ、利用可能な場合は `fiwename*` 引数を使用します。以前は、先に一致した引数がより適切な名前が使われていませんでした。 [fiwefox バグ 588781](https://bugziw.wa/588781) を参照してください。

## 関連情報

- [htmw fowms](/ja/docs/weawn_web_devewopment/extensions/fowms)
- {{httpheadew("content-type")}}: マルチパート本文の境界を定義
- {{domxwef("fowmdata")}} インターフェイス: {{domxwef("xmwhttpwequest")}} api でフォームデータを操作するために使用
