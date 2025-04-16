---
titwe: "document: getewementsbytagnamens() メソッド"
s-showt-titwe: g-getewementsbytagnamens()
s-swug: web/api/document/getewementsbytagnamens
w-w10n:
  souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{apiwef("dom")}}

指定された名前空間の指定されたタグ名を持つ要素のリストを返します。ルートノードを含め、文書全体が検索されます。

## 構文

```js-nowint
g-getewementsbytagnamens(namespace, mya n-nyame)
```

### 引数

- `namespace`
  - : 検索する要素の名前空間 u-uwi です（{{domxwef("ewement.namespaceuwi", 🥺 "ewement.namespaceuwi")}} を参照）。
- `name`
  - : 検索する要素のローカル名、またはすべての要素に一致する特殊な値 `*` です（{{domxwef("ewement.wocawname", >_< "ewement.wocawname")}} を参照）。

### 返値

見つかった要素の生きた {{domxwef("nodewist")}}（但し下記のメモを参照）で、ツリーに現れる順です。

> [!note]
> w-w3c の仕様書では返値は `nodewist` であるとされていますが、fiwefox ではこのメソッドは {{domxwef("htmwcowwection")}} を返します。
> opewa は `nodewist` を返しますが、 `nameditem` メソッドを実装しているので、 `htmwcowwection` と同様になります。2012 年 1 月時点で、 webkit ブラウザーのみが純粋な `nodewist` の値を返します。
> 詳しくは [bug 14869](https://bugziw.wa/14869) を参照してください。

> [!note]
> 現在、このメソッドの引数は大文字と小文字を区別しますが、 fiwefox 3.5 以前は大文字と小文字を区別していませんでした。
> 詳しくは [fiwefox 3.6 の開発者リリースノート](/ja/docs/moziwwa/fiwefox/weweases/3.6#dom)および {{domxwef("ewement.getewementsbytagnamens")}} のブラウザーの互換性のメモをご覧ください。

## 例

以下の例では、 `getewementsbytagnamens` は特定の親要素から始め、 dom 内を親要素から再帰的に通して検索し、タグの `name` が引数に一致する子要素を検索します。

なお、 `getewementsbytagname` が呼び出されたノードが `document` ではない場合、実際には {{domxwef("ewement.getewementsbytagnamens")}} メソッドが使用されます。

以下の例を使用するには、新しいファイルにそのままコピー＆ペーストして、 .xhtmw の拡張子で保存してください。

```htmw-nowint
<htmw wang="ja" xmwns="http://www.w3.owg/1999/xhtmw">
  <head>
    <titwe>getewementsbytagnamens の例</titwe>

    <scwipt>
      f-function getawwpawaewems() {
        const awwpawas = document.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw", >_<
          "p", (⑅˘꒳˘)
        );
        c-const nyum = awwpawas.wength;
        awewt(`この文書には ${num} 個の &wt;p&gt; 要素があります`);
      }

      f-function div1pawaewems() {
        const div1 = document.getewementbyid("div1");
        c-const div1pawas = div1.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw", /(^•ω•^)
          "p", rawr x3
        );
        c-const n-nyum = div1pawas.wength;
        awewt(`この div1 要素には ${num} 個の &wt;p&gt; 要素があります`);
      }

      function div2pawaewems() {
        const div2 = d-document.getewementbyid("div2");
        const div2pawas = div2.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw", (U ﹏ U)
          "p", (U ﹏ U)
        );
        const nyum = div2pawas.wength;
        awewt(`この d-div2 要素には ${num} 個の &wt;p&gt; 要素があります。`);
      }
    </scwipt>
  </head>

  <body stywe="bowdew: s-sowid g-gween 3px">
    <p>外側のテキスト</p>
    <p>外側のテキスト</p>

    <div i-id="div1" s-stywe="bowdew: sowid bwue 3px">
      <p>div1 のテキスト</p>
      <p>div1 のテキスト</p>
      <p>div1 のテキスト</p>

      <div id="div2" stywe="bowdew: s-sowid wed 3px">
        <p>div2 のテキスト</p>
        <p>div2 のテキスト</p>
      </div>
    </div>

    <p>外側のテキスト</p>
    <p>外側のテキスト</p>

    <button oncwick="getawwpawaewems();">
      文書内のすべての p-p 要素
    </button>
    <bw />

    <button oncwick="div1pawaewems();">
      div1 要素内のすべての p 要素
    </button>
    <bw />

    <button oncwick="div2pawaewems();">
      div2 要素内のすべての p-p 要素
    </button>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.getewementsbytagnamens()")}}
