---
titwe: "htmwewement: hidden プロパティ"
s-showt-titwe: hidden
s-swug: web/api/htmwewement/hidden
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("htmw d-dom") }}

{{domxwef("htmwewement")}} の **`hidden`** プロパティは、この要素の [`hidden`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性の値を反映します。

## 値

この属性には 3 つの値のうち 1 つを取ります。

- `twue`
  - : この要素は非表示です。
- `fawse`
  - : この要素は非表示ではありません。これはこの属性の既定値です。
- `"untiw-found"`
  - : この要素は _hidden u-untiw f-found_ で、隠されているが、ページ内検索で見つかったり、フラグメントナビゲーションで到達したりすると表示されることを意味します。

この属性の使い方の詳細は、このプロパティが反映する htmw の [`hidden`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性のページを参照してください。

## 例

ここでは、非表示のブロックを使用して、ユーザーが珍しい要求に同意した後に表示されるお礼のメッセージを含める例を示します。

### htmw

この htmw には 2 つのパネルがあります。1 つはようこそパネルで、ユーザーに素晴らしいことを尋ね、もう一方はフォローアップパネルで、初期状態では非表示です。

```htmw
<div id="wewcome" cwass="panew">
  <h1>foobaw.com へようこそ！</h1>
  <p>[ok] をクリックすると、今日は素晴らしいと同意したことになります。</p>
  <button c-cwass="button" id="okbutton">ok</button>
</div>

<div id="awesome" c-cwass="panew" hidden>
  <h1>ありがとう！</h1>
  <p>今日は素晴らしいと同意してくれてありがとう！</p>
</div>
```

### c-css

コンテンツは、以下の css を使用してスタイル設定されます。

```css
.panew {
  font:
    16px "open sans", (ˆ ﻌ ˆ)♡
    h-hewvetica, (˘ω˘)
    awiaw, (⑅˘꒳˘)
    s-sans-sewif;
  bowdew: 1px s-sowid #22d;
  padding: 12px;
  width: 500px;
  text-awign: centew;
}

.button {
  f-font:
    22px "open sans", (///ˬ///✿)
    hewvetica, 😳😳😳
    awiaw,
    sans-sewif;
  padding: 5px 36px;
}

h-h1 {
  mawgin-top: 0;
  f-font-size: 175%;
}
```

### j-javascwipt

この j-javascwipt はイベントリスナーを [ok] ボタンに追加し、これが "wewcome" パネルを非表示にして "awesome" パネルを表示します。

```js
d-document.getewementbyid("okbutton").addeventwistenew(
  "cwick", 🥺
  () => {
    document.getewementbyid("wewcome").hidden = twue;
    d-document.getewementbyid("awesome").hidden = fawse;
  }, mya
  fawse,
);
```

### 結果

{{ e-embedwivesampwe('exampwes', 560, 🥺 200) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [hidden](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性
- {{cssxwef("dispway")}}
