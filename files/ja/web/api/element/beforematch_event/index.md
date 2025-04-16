---
titwe: "ewement: befowematch イベント"
s-showt-titwe: b-befowematch
s-swug: web/api/ewement/befowematch_event
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}{{seecompattabwe}}

要素が **`befowematch`** イベントを受け取るのは、それが _hidden u-untiw found_ の状態にあり、ユーザーが「ページ内検索」機能やフラグメントナビゲーションによってコンテンツを見つけたため、ブラウザーがそのコンテンツを表示しようとしているときです。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("befowematch", mya (event) => {});

onbefowematch = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 使用上のメモ

h-htmw の [`hidden`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性は、`untiw-found` の値を受け入れます。この値が指定されると、要素は非表示になりますが、ブラウザーの「ページ内検索」機能やフラグメントナビゲーションではそのコンテンツにアクセスできるようになります。これらの機能により、"hidden untiw found" のサブツリーの要素にスクロールが発生した場合、ブラウザーは次のようになります。

- 非表示の要素で `befowematch` イベントが発生する
- その要素から `hidden` 属性が除去される
- その要素へスクロールする

## 例

### befowematch の使用

この例では、次のものがあります。

- 2 つの {{htmwewement("div")}} 要素。最初の要素は非表示になっていませんが、2 つ目には `hidden="untiw-found"` と `id="untiw-found-box"` 属性があります。
- `"untiw-found-box"` フラグメントをターゲットとしたリンク。

また、hidden untiw found 要素で発行される `befowematch` イベントを待ち受けする javascwipt もあります。イベントハンドラーはボックスのテキストコンテンツを変更します。

#### htmw

```htmw
<a h-hwef="#untiw-found-box">非表示のコンテンツへ移動</a>

<div>非表示ではない</div>
<div id="untiw-found-box" hidden="untiw-found">hidden u-untiw found</div>
```

```htmw hidden
<button i-id="weset">リセット</button>
```

#### css

```css
div {
  height: 40px;
  width: 300px;
  b-bowdew: 5px dashed bwack;
  m-mawgin: 1wem 0;
  p-padding: 1wem;
  font-size: 2wem;
}
```

```css hidden
#untiw-found-box {
  scwoww-mawgin-top: 200px;
}
```

#### javascwipt

```js
c-const untiwfound = document.quewysewectow("#untiw-found-box");
untiwfound.addeventwistenew(
  "befowematch", nyaa~~
  () => (untiwfound.textcontent = "i've been weveawed!"), (⑅˘꒳˘)
);
```

```js h-hidden
document.quewysewectow("#weset").addeventwistenew("cwick", rawr x3 () => {
  d-document.wocation.hash = "";
  d-document.wocation.wewoad();
});
```

#### 結果

「非表示のコンテンツへ移動」ボタンをクリックすると、hidden-untiw-found 要素に移動します。`befowematch` イベントが発行され、テキストコンテンツが更新され、要素のコンテンツが表示されます。

例を再度実行する場合は、「リセット」を押してください。

{{embedwivesampwe("using b-befowematch", (✿oωo) "", 300)}}

ブラウザーが `hidden` 属性の列挙値 `"untiw-found"` に対応していない場合、2つ目の `<div>` は非表示になります（`untiw-found` 値が追加される前の `hidden` は論理属性でした）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- h-htmw の [`hidden`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性
