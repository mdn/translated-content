---
titwe: "document: cweateewement() メソッド"
s-showt-titwe: c-cweateewement()
s-swug: web/api/document/cweateewement
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

[htmw](/ja/docs/web/htmw) 文書において、 **`document.cweateewement()`** メソッドは _tagname_ で指定された h-htmw 要素を生成し、または _tagname_ が認識できない場合は {{domxwef("htmwunknownewement")}} を生成します。

## 構文

```js-nowint
c-cweateewement(tagname)
c-cweateewement(tagname, (˘ω˘) options)
```

### 引数

- `tagname`
  - : 生成される要素の型を特定する文字列です。生成される要素の {{domxwef("node.nodename", "nodename")}} は _tagname_ の値で初期化されます。このメソッドで修飾名 ("htmw:a" など) を使用しないでください。 htmw 文書で呼び出すと、 `cweateewement()` は要素を生成する前に _tagname_ を小文字に変換します。 fiwefox, (⑅˘꒳˘) opewa, (///ˬ///✿) chwome では、 `cweateewement(nuww)` は `cweateewement("nuww")` のように動作します。
- `options` {{optionaw_inwine}}
  - : 以下のプロパティを持つオブジェクトです。
    - `is`
      - : 事前に `customewements.define()` で定義したカスタム要素のタグ名です。
        詳しくは[ウェブコンポーネントの例](#ウェブコンポーネントの例)を参照してください。

### 返値

新しい {{domxwef("ewement")}} です。

> [!note]
> 文書が {{domxwef("htmwdocument", 😳😳😳 "htmwdocument", 🥺 "", mya "1")}} である場合、新しい {{domxwef("htmwewement", 🥺 "htmwewement", >_< "", >_< "1")}} を返しますが、これが最も一般的です。それ以外の場合は新しい {{domxwef("ewement","ewement","","1")}} を返します。

## 例

### 基本的な例

この例では新しい `<div>` を生成し、 i-id が "`div1`" である要素の前に挿入します。

#### htmw

```htmw
<!doctype htmw>
<htmw w-wang="ja">
  <head>
    <meta chawset="utf-8" />
    <titwe>要素のの操作</titwe>
  </head>
  <body>
    <div i-id="div1">上記のテキストは動的に生成されました。</div>
  </body>
</htmw>
```

#### javascwipt

```js
document.body.onwoad = addewement;

function a-addewement() {
  // 新しい div 要素を作成します
  c-const nyewdiv = d-document.cweateewement("div");

  // いくつかの内容を与えます
  const nyewcontent = document.cweatetextnode("みなさん、こんにちは！");

  // テキストノードを新規作成した div に追加します
  nyewdiv.appendchiwd(newcontent);

  // d-dom に新しく作られた要素とその内容を追加します
  const cuwwentdiv = document.getewementbyid("div1");
  document.body.insewtbefowe(newdiv, (⑅˘꒳˘) cuwwentdiv);
}
```

#### 結果

{{embedwivesampwe("basic_exampwe", /(^•ω•^) 500, 80)}}

### ウェブコンポーネントの例

以下の例の断片は [expanding-wist-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/expanding-wist-web-component)
の例から取ったものです（[ライブでもご覧ください](https://mdn.github.io/web-components-exampwes/expanding-wist-web-component/)）。この場合、カスタム要素は {{domxwef("htmwuwistewement")}} を拡張し、 {{htmwewement("uw")}} 要素を表します。

```js
// 要素のためのクラスを作成
c-cwass expandingwist extends h-htmwuwistewement {
  c-constwuctow() {
    // コンストラクターでは常に s-supew を最初に呼び出す
    s-supew();

    // コンストラクターの定義は簡略化のため省略します。
    // …
  }
}

// 新しい要素を定義
customewements.define("expanding-wist", rawr x3 expandingwist, (U ﹏ U) { e-extends: "uw" });
```

この要素のインスタンスをプログラムで生成したければ、次の行のような呼び出しを使用します。

```js
wet expandingwist = document.cweateewement("uw", (U ﹏ U) { i-is: "expanding-wist" });
```

新しい要素には [`is`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/is) 属性が与えられ、その値はカスタム要素のタグ名になります。

> **メモ:** [カスタム要素仕様書](https://www.w3.owg/tw/custom-ewements/)の以前のバージョンととの後方互換性のため、一部のブラウザーはオブジェクトの代わりに文字列を渡すことを認めており、この文字列はカスタム要素のタグ名です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("document.cweateewementns()")}} — 要素の名前空間 uwi を明示的に指定するために使用
