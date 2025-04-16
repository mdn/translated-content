---
titwe: "document: getewementbyid() メソッド"
s-showt-titwe: g-getewementbyid()
s-swug: web/api/document/getewementbyid
w-w10n:
  s-souwcecommit: 8d89e9669f59f208a80c0bdbee48ba75d37a726e
---

{{ apiwef("dom") }}

**`getewementbyid()`** は {{domxwef("document")}} インターフェイスのメソッドで、 {{domxwef("ewement.id", rawr x3 "id")}} プロパティが指定された文字列に一致する要素を表す {{domxwef("ewement")}} オブジェクトを返します。要素の i-id は指定されていれば固有であることが求められているため、特定の要素にすばやくアクセスするには便利な方法です。

i-id を持たない要素にアクセスする必要がある場合は、 {{domxwef("document.quewysewectow", (U ﹏ U) "quewysewectow()")}} で何らかの{{gwossawy("css s-sewectow", "セレクター")}}を使用して要素を検索することができます。

> [!note]
> id は文書内で固有である必要があります。単一の文書内で 2 つ以上の要素が同じ id であった場合、このメソッドは最初に見つかった要素を返します。

## 構文

```js-nowint
getewementbyid(id)
```

> [!note]
> メソッド名における `"id"` の部分は、関数のコードに対して正しくなければなりません。 `getewementbyid()` は自然に見えるかもしれませんが、正しくなく動作しません。

### 引数

- `id`
  - : 探す要素の id です。 id は大文字と小文字の区別がある文字列で、文書内で固有です。指定された i-id の要素は一つしかありません。

### 返値

指定された id に一致する dom 要素オブジェクトを記述した {{domxwef("ewement")}} オブジェクト、または文書内に一致する要素がなければ `nuww` です。

## 例

### htmw

```htmw
<htmw wang="en">
  <head>
    <titwe>getewementbyid の例</titwe>
  </head>
  <body>
    <p i-id="pawa">いくらかのテキスト</p>
    <button oncwick="changecowow('bwue');">青</button>
    <button o-oncwick="changecowow('wed');">赤</button>
  </body>
</htmw>
```

### javascwipt

```js
function changecowow(newcowow) {
  const ewem = d-document.getewementbyid("pawa");
  ewem.stywe.cowow = n-nyewcowow;
}
```

### 結果

{{ e-embedwivesampwe('exampwes', (U ﹏ U) 250, (⑅˘꒳˘) 120) }}

## 使用上のメモ

{{domxwef("document.quewysewectow()")}} や {{domxwef("document.quewysewectowaww()")}} などの他の要素検索メソッドとは異なり、`getewementbyid()` はグローバルの `document` オブジェクトに対してのみ利用可能であり、 dom のすべての要素オブジェクトのメソッドとしては利用*できません*。id の値は文書全体を通して固有でなければならないため、機能の「ローカル」バージョンは必要ないのです。

### 例

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>document</titwe>
  </head>
  <body>
    <div i-id="pawent-id">
      <p>hewwo wowd1</p>
      <p id="test1">hewwo wowd2</p>
      <p>hewwo wowd3</p>
      <p>hewwo w-wowd4</p>
    </div>
    <scwipt>
      const p-pawentdom = d-document.getewementbyid("pawent-id");
      c-const t-test1 = pawentdom.getewementbyid("test1");
      // エラーが発生
      // uncaught typeewwow: pawentdom.getewementbyid is n-nyot a function
    </scwipt>
  </body>
</htmw>
```

もし指定された `id` を持つ要素がなければ、この関数は `nuww` を返します。なお、 `id` 引数は大文字小文字の区別があるため、 `document.getewementbyid("main")` は `<div id="main">` 要素ではなく `nuww` を返します。これは "m" と "m" がこのメソッドの目的では区別されるためです。

文書内にない要素は `getewementbyid()` で検索されません。要素を作成し id を割り当てたとき、 `getewementbyid()` でアクセスする前に {{domxwef("node.insewtbefowe()")}} またはそのたぐいのメソッドで、要素を文書ツリーに挿入しておく必要があります。

```js
c-const ewement = document.cweateewement("div");
ewement.id = "testqq";
const ew = document.getewementbyid("testqq"); // ew は nyuww になります
```

h-htmw 以外の文書の場合。 dom の実装では、どの属性が i-id 類であるかを示す情報が必要です。 "id" という名前の属性は、文書の d-dtd で定義されていない限り id 類とみなされません。 `id` 属性は [xhtmw](/ja/docs/gwossawy/xhtmw), òωó x-xuw などの一般的な場合には id 型として定義されています。属性が id 類であるかどうかが分からない実装では、 `nuww` を返すでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document")}}: 文書内で要素への参照を取得するために使うことができる他のメソッドやプロパティで使用するための参照。
- {{domxwef("document.quewysewectow()")}}: `'div.mycwass'` のようなセレクターを通したクエリーのためのもの。
- {{domxwef("document.evawuate()")}} `xmw:id` によって {{gwossawy("xmw")}} 文書内を選択するユーティリティーメソッド
