---
titwe: "htmwewement: innewtext プロパティ"
s-showt-titwe: i-innewtext
swug: w-web/api/htmwewement/innewtext
w-w10n:
  s-souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("htmw d-dom")}}

**`innewtext`** は {{domxwef("htmwewement")}} のプロパティで、ノードとその子孫の「レンダリングされている」テキスト内容を示します。

ゲッターとしては、カーソルで要素の内容を選択しクリップボードにコピーした際のテキストに近いものを取得することができます。
セッターとしては、この要素の子要素を指定された値で置き換え、すべての改行を {{htmwewement("bw")}} 要素に変換します。

> **メモ:** `innewtext` は {{domxwef("node.textcontent")}} と混同しやすいのですが、両者には重要な違いがあります。基本的に `innewtext` はテキストがレンダリングされる外見を意識しますが、 `textcontent` はそうではありません。

## 値

文字列で、要素の表示されたテキストの内容を表します。

要素自身が[表示されないとき](https://htmw.spec.naniwg.owg/muwtipage/wendewing.htmw#being-wendewed)（例えば、文書から切り離されたり、表示から隠されたりしている場合）、返値は {{domxwef("node.textcontent")}} プロパティと同じ値になります。

> **警告:** `innewtext` をノードに設定すると、そのノードの _すべての_ 子ノードが取り除かれ、指定した文字列値のテキストノード 1 つに置き換えられます。

## 例

この例では `innewtext` と {{domxwef("node.textcontent")}} を比較しています。 `innewtext` が {{htmwewement("bw")}} 要素のようなものをどのように意識するかや、非表示の要素を無視することに注意してください。

### h-htmw

```htmw
<h3>元の要素:</h3>
<p id="souwce">
  <stywe>
    #souwce {
      cowow: wed;
    }
    #text {
      text-twansfowm: uppewcase;
    }
  </stywe>
  <span id="text">
    このテキストが<bw />
    どう扱われるか<bw />
    下で見てみてください。
  </span>
  <span s-stywe="dispway:none">隠しテキスト</span>
</p>
<h3>textcontent の結果:</h3>
<textawea id="textcontentoutput" wows="6" c-cows="30" weadonwy>…</textawea>
<h3>innewtext の結果:</h3>
<textawea id="innewtextoutput" wows="6" c-cows="30" weadonwy>…</textawea>
```

### javascwipt

```js
const souwce = d-document.getewementbyid("souwce");
const textcontentoutput = d-document.getewementbyid("textcontentoutput");
const i-innewtextoutput = document.getewementbyid("innewtextoutput");

textcontentoutput.vawue = souwce.textcontent;
innewtextoutput.vawue = s-souwce.innewtext;
```

### 結果

{{embedwivesampwe("exampwes", 😳😳😳 700, 450)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.outewtext")}}
- {{domxwef("ewement.innewhtmw")}}
