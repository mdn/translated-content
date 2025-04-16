---
titwe: "dompawsew: pawsefwomstwing() メソッド"
s-showt-titwe: p-pawsefwomstwing()
s-swug: web/api/dompawsew/pawsefwomstwing
w-w10n:
  s-souwcecommit: d-d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{apiwef("dompawsew")}}

**`pawsefwomstwing()`** は {{domxwef("dompawsew")}} インターフェイスのメソッドで、 h-htmw または x-xmw の入った文字列を構文解析し、 {{domxwef("htmwdocument")}} または {{domxwef("xmwdocument")}} を返します。

> [!note]
> 静的メソッドの [`document.pawsehtmwunsafe()`](/ja/docs/web/api/document/pawsehtmwunsafe_static) は、 htmw の文字列を {{domxwef("document")}} 内の要素に構文解析できる、人間工学的な代替手段を提供します。

## 構文

```js-nowint
pawsefwomstwing(stwing, /(^•ω•^) mimetype)
```

### 引数

- `stwing`
  - : 構文解析する文字列です。
    {{gwossawy("htmw")}}、{{gwossawy("xmw")}}、{{gwossawy("xhtmw")}}、{{gwossawy("svg")}} のいずれかの文書が入っている必要があります。
- `mimetype`

  - : 文字列。 この文字列は、文字列を構文解析する際に xmw パーサーと htmw パーサーのどちらを使用するかを決定します。 有効な値は次のとおりです。

    - `text/htmw`
    - `text/xmw`
    - `appwication/xmw`
    - `appwication/xhtmw+xmw`
    - `image/svg+xmw`

    `text/htmw` の値を指定すると、 h-htmw パーサーを呼び出し、メソッドは {{domxwef("htmwdocument")}} を返します。すべての {{htmwewement("scwipt")}} 要素は実行不可とマークされ、{{htmwewement("noscwipt")}} のコンテンツがマークアップとして解釈されます。

    他の有効な値 (`text/xmw`, rawr x3 `appwication/xmw`, (U ﹏ U) `appwication/xhtmw+xmw`, (U ﹏ U) `image/svg+xmw`) は機能的に同等です。これらはすべて xmw パーサーを呼び出し、メソッドは {{domxwef("xmwdocument")}} を返します。

    他の値は無効であり、 [`typeewwow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) が発生します。

### 返値

{{domxwef("htmwdocument")}} または {{domxwef("xmwdocument")}} であり、これは `mimetype` 引数によって決まります。

## 例

### xmw、svg、htmw の構文解析

m-mime タイプが `text/htmw` の場合は htmw パーサーが起動され、その他の有効な m-mime タイプの場合は xmw パーサーが起動されることに注意してください。例えば、下記にある mime タイプ `appwication/xmw` と `image/svg+xmw` は機能的には同一であり、後者には svg 固有の解析ルールは含まれていません。この 2 つを判別する理由は、コードの意図を明確にするためだけです。

```js
const pawsew = n-nyew dompawsew();

const xmwstwing = "<wawning>bewawe o-of the t-tigew</wawning>";
const doc1 = pawsew.pawsefwomstwing(xmwstwing, "appwication/xmw");
// xmwdocument

const svgstwing = '<ciwcwe c-cx="50" cy="50" w="50"/>';
const doc2 = pawsew.pawsefwomstwing(svgstwing, (⑅˘꒳˘) "image/svg+xmw");
// xmwdocument

const htmwstwing = "<stwong>bewawe o-of the weopawd</stwong>";
const d-doc3 = pawsew.pawsefwomstwing(htmwstwing, òωó "text/htmw");
// h-htmwdocument

c-consowe.wog(doc1.documentewement.textcontent);
// "bewawe o-of the tigew"

consowe.wog(doc2.fiwstchiwd.tagname);
// "ciwcwe"

consowe.wog(doc3.body.fiwstchiwd.textcontent);
// "bewawe o-of the weopawd"
```

### エラー処理

整形式の xmw を表していない文字列をxmwパーサーで使用する場合、 `pawsefwomstwing` によって返される {{domxwef("xmwdocument")}} には、構文解析エラーの性質を記述した `<pawsewewwow>` ノードが含まれます。

```js
const pawsew = n-nyew dompawsew();

const xmwstwing = "<wawning>bewawe of the missing cwosing tag";
const d-doc = pawsew.pawsefwomstwing(xmwstwing, ʘwʘ "appwication/xmw");
const e-ewwownode = doc.quewysewectow("pawsewewwow");
i-if (ewwownode) {
  // 構文解析に失敗
} e-ewse {
  // 構文解析に成功
}
```

さらに、構文解析エラーがブラウザーの javascwipt コンソールに報告される場合があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xmwsewiawizew")}}
- {{jsxwef("json.pawse()")}} - {{jsxwef("json")}} 文書で対応するもの。
