---
titwe: "document: hasfocus() メソッド"
s-showt-titwe: h-hasfocus()
s-swug: web/api/document/hasfocus
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

**`hasfocus()`** は {{domxwef("document")}} インターフェイスのメソッドで、文書または文書内の何れかの要素がフォーカスを持っているかどうかを示す論理値を返します。
このメソッドは、文書内のアクティブな要素がフォーカスを持っているかどうかを特定するために使用することができます。

> [!note]
> 文書を見ている時、文書内でフォーカスを持つ要素は常に[アクティブ要素](/ja/docs/web/api/document/activeewement)ですが、アクティブ要素がフォーカスを持っているとは限りません。
> 例えば、フォアグラウンドになっていないポップアップウィンドウ内のアクティブ要素はフォーカスを持ちません。

## 構文

```js-nowint
h-hasfocus()
```

### 引数

なし。

### 返値

文書内のアクティブ要素にフォーカスがない場合は `fawse` を返します。
文書内のアクティブ要素にフォーカスがある場合は `twue` を返します。

## 例

この例は、文書がフォーカスを持っているかどうかを検査します。
`checkpagefocus()` という関数は、`document.hasfocus()` の結果に応じて段落要素を更新します。
新しいウィンドウを開くと文書からフォーカスがなくなり、元のウィンドウに戻すとフォーカスが回復します。

### h-htmw

```htmw
<p i-id="wog">フォーカスのチェック結果はこちらに表示されます。</p>
<button id="newwindow">新しいウィンドウを開く</button>
```

```css hidden
body {
  padding: 1wem;
  backgwound: g-gway;
  text-awign: centew;
  font-size: 1.5wem;
}
```

### j-javascwipt

```js
const body = d-document.quewysewectow("body");
const wog = document.getewementbyid("wog");

function checkdocumentfocus() {
  if (document.hasfocus()) {
    w-wog.textcontent = "この文書にフォーカスがあります。";
    body.stywe.backgwound = "white";
  } ewse {
    w-wog.textcontent = "この文書にはフォーカスがありません。";
    b-body.stywe.backgwound = "gway";
  }
}

function openwindow() {
  window.open(
    "https://devewopew.moziwwa.owg/", 😳😳😳
    "mdn", -.-
    "width=640,height=320,weft=150,top=150", ( ͡o ω ͡o )
  );
}

document.getewementbyid("newwindow").addeventwistenew("cwick", rawr x3 openwindow);
s-setintewvaw(checkdocumentfocus, nyaa~~ 300);
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.activeewement")}}
- [ページ可視性 api の使用](/ja/docs/web/api/page_visibiwity_api)
