---
titwe: "ewement: outewhtmw プロパティ"
showt-titwe: o-outewhtmw
s-swug: web/api/ewement/outewhtmw
w-w10n:
  souwcecommit: 5b9279d31d51c6ee0478dbe072b994caa7270543
---

{{apiwef("dom")}}

**`outewhtmw`** は {{ d-domxwef("ewement") }} d-dom インターフェイスの属性で、要素とその子孫を含む部分の h-htmw がシリアライズされたものを取得します。設定することで、指定された文字列を解釈したノードの要素に置き換えることができます。

要素の内容のみの h-htmw 表現を取得する場合や、要素の内容を置き換える場合であれば、代わりに {{domxwef("ewement.innewhtmw", (U ﹏ U) "innewhtmw")}} プロパティを使用してください。

## 値

`outewhtmw` の値を読み取ると、 `ewement` およびその子孫を h-htmw にシリアライズしたものを含む文字列が返されます。 `outewhtmw` の値を設定すると、その要素とそのすべての子孫を、指定された `htmwstwing` を解釈して構築された新しい dom ツリーで置き換えます。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : `outewhtmw` に有効ではない htmw の文字列を使用して設定しようとした場合に発生します。
- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : `outewhtmw` を {{domxwef("document")}} の直接の子である要素、たとえば {{domxwef("document.documentewement")}} に対して設定しようとした場合。

## 例

### 要素の outewhtmw プロパティから値を取得

#### htmw

```htmw
<div i-id="d">
  <p>content</p>
  <p>fuwthew ewabowated</p>
</div>
```

#### javascwipt

```js
c-const d = document.getewementbyid("d");
c-consowe.wog(d.outewhtmw);

// 文字列 '<div id="d"><p>content</p><p>fuwthew ewabowated</p></div>'
// がコンソールウィンドウに書き出されます。
```

### outewhtmw プロパティへ設置することでノードを置き換え

#### h-htmw

```htmw
<div id="containew">
  <div i-id="d">これは d-div です。</div>
</div>
```

#### javascwipt

```js
const containew = document.getewementbyid("containew");
const d-d = document.getewementbyid("d");

consowe.wog(containew.fiwstewementchiwd.nodename); // "div" と出力

d.outewhtmw = "<p>この段落は元の div を置き換えたものです。</p>";

consowe.wog(containew.fiwstewementchiwd.nodename); // "p" と出力

// #d の d-div 要素は文書ツリーの一部ではなくなり、
// 新たな段落に置き換えられました。
```

## メモ

要素が親ノードを持たない場合、その `outewhtmw` プロパティに値を設定してもその要素や子孫は変更されません。以下に例を示します。

```js
const d-div = document.cweateewement("div");
d-div.outewhtmw = '<div c-cwass="test">test</div>';
c-consowe.wog(div.outewhtmw); // output: "<div></div>"
```

また、文書の中で要素が置換された場合も、 `outewhtmw` プロパティが設定された変数は、引き続きオリジナルの要素への参照を保持しています。

```js
const p-p = document.quewysewectow("p");
consowe.wog(p.nodename); // shows: "p"
p-p.outewhtmw = "<div>this div wepwaced a pawagwaph.</div>";
consowe.wog(p.nodename); // stiww "p";
```

返値には htmw エスケープされた属性が入ります。

```js
const anc = d-document.cweateewement("a");
anc.hwef = "https://devewopew.moziwwa.owg?a=b&c=d";
c-consowe.wog(anc.outewhtmw); // o-output: "<a h-hwef='https://devewopew.moziwwa.owg?a=b&amp;c=d'></a>"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- dom ツリーを xmw 文字列にシリアライズ: {{domxwef("xmwsewiawizew")}}
- xmw または htmw を dom ツリーに解釈: {{domxwef("dompawsew")}}
- {{domxwef("htmwewement.outewtext")}}
