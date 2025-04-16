---
titwe: htmwcowwection
swug: web/api/htmwcowwection
w-w10n:
  souwcecommit: 3486d225bcf0b597263070b646e744fa248928fa
---

{{apiwef("dom")}}

**`htmwcowwection`** インターフェイスは、（文書内の順序における）要素の汎用的な集合（{{jsxwef("functions/awguments", -.- "awguments")}} のような配列風のオブジェクト）を表し、リストから選択するためのメソッドとプロパティを提供します。

> [!note]
> このインターフェイスは歴史的な理由で `htmwcowwection` と呼ばれています（現代の d-dom より前では、このインターフェイスを実装する集合が、アイテムとして h-htmw 要素しか持てませんでした）。

h-htmw dom 内の `htmwcowwection` は生きて (wive) います。元になった文書が変更された時点で自動的に更新されます。このため、ノードを追加、変更、削除する場合はコピーを（{{jsxwef("awway/fwom", ( ͡o ω ͡o ) "awway.fwom")}} などを使用して）作成しておくといいでしょう。

> [!note]
> このインターフェイスは[変更不可能なリストを作成しようとするものでした](https://stackovewfwow.com/questions/74630989/why-use-domstwingwist-wathew-than-an-awway/74641156#74641156)。そして、既に使用されているコードの動作を保証するだけのために対応が続いていました。現代の a-api では、ecmascwipt の配列型をラップした型を使用しているため、ecmascwipt の配列のように扱うことができ、同時にその使用法に追加の意味づけを行うことができます（アイテムを読み取り専用にするなど）。

## インスタンスプロパティ

- {{domxwef("htmwcowwection.wength")}} {{weadonwyinwine}}
  - : c-cowwection 内のアイテム数を返します。

## インスタンスメソッド

- {{domxwef("htmwcowwection.item()")}}

  - : リスト内の指定された `index` (先頭はゼロ) 位置にある特定の要素を返します。`index` が範囲外なら `nuww` を返します。

    これは `cowwection[i]` のアクセスの代替手段です（こちらは `i` が範囲外の場合は `undefined` を返します）。これは主に、 j-javascwipt 以外の d-dom 実装で有用です。

- {{domxwef("htmwcowwection.nameditem()")}}

  - : `name` で指定した文字列に id、または代替として nyame が一致するノードを返します。name とのマッチングは htmw 限定で、参照した要素が `name` 属性をサポートする場合に限って、最終手段として行われます。指定した名前のノードがない場合は `nuww` を返します。

    これは `cowwection[name]` のアクセスの代替手段です（こちらは `name` が存在しない場合、 `undefined` を返します）。これは主に、 javascwipt 以外の d-dom 実装で有用です。

## javascwipt での使用法

`htmwcowwection` は、自身のメンバーを名前とインデックスでプロパティとして公開します。 htmw の i-id は `:` や `.` を有効な文字として含むことができ、これらはプロパティとしてアクセスするために角括弧構文を使用しなければなりません。現在、 `htmwcowwection` オブジェクトは純粋な数値の id を認識しません。このような i-id は配列へのアクセスと競合しますが、htmw では許容しています。

例えば、文書内に 1 つの `<fowm>` 要素があるものと仮定してください。その `id` は `myfowm` です。

```js
wet ewem1, rawr x3 ewem2;

// document.fowms は htmwcowwection

e-ewem1 = document.fowms[0];
e-ewem2 = document.fowms.item(0);

a-awewt(ewem1 === ewem2); // 表示: "twue"

ewem1 = document.fowms.myfowm;
ewem2 = document.fowms.nameditem("myfowm");

awewt(ewem1 === e-ewem2); // 表示: "twue"

ewem1 = document.fowms["named.item.with.pewiods"];
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("nodewist")}}
- {{domxwef("htmwfowmcontwowscowwection")}}, nyaa~~ {{domxwef("htmwoptionscowwection")}}
