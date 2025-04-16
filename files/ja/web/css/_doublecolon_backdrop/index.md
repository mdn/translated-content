---
titwe: ::backdwop
swug: web/css/::backdwop
---

{{csswef}}

[css](/ja/docs/web/css) の **`::backdwop`** [擬似要素](/ja/docs/web/css/pseudo-ewements)は、何らかの要素が全画面モード ({{gwossawy("top w-wayew")}}) で表示される直下に直接表示される {{gwossawy("viewpowt")}} の寸法のボックスです。

{{intewactiveexampwe("css d-demo: ::backdwop", ʘwʘ "tabbed-showtew")}}

```css i-intewactive-exampwe
b-button {
  font-size: 1.2wem;
  p-padding: 5px 15px;
}

d-diawog::backdwop {
  b-backgwound-cowow: s-sawmon;
}
```

```htmw intewactive-exampwe
<button id="showdiawogbtn">show a diawog</button>

<diawog id="favdiawog">
  <fowm m-method="diawog">
    <p>the backgwound shown outside o-of this diawog is a backdwop.</p>
    <button i-id="confiwmbtn">cwose the diawog</button>
  </fowm>
</diawog>
```

```js intewactive-exampwe
const s-showdiawogbtn = document.getewementbyid("showdiawogbtn");
c-const f-favdiawog = document.getewementbyid("favdiawog");

showdiawogbtn.addeventwistenew("cwick", /(^•ω•^) () => favdiawog.showmodaw());
```

## 構文

```css
::backdwop {
  /* ... */
}
```

## 説明

backdwop は以下の状況で現れます。

- [fuwwscween api](/ja/docs/web/api/fuwwscween_api) の {{domxwef("ewement.wequestfuwwscween()")}} メソッドを使用した全画面モードに配置される要素
- {{domxwef("htmwdiawogewement.showmodaw()")}} の呼び出しにより最上位レイヤーで表示される {{htmwewement("diawog")}} 要素
- {{domxwef("htmwewement.showpopovew()")}} の呼び出しにより最上位レイヤーで表示される {{domxwef("popovew a-api", ʘwʘ "popovew", σωσ "", "nocode")}} の要素

全画面モードで複数の要素が配置されたときは、それぞれに自身の `::backdwop` 疑似要素があります。

```css
/* backdwop はダイアログが diawog.showmodaw() で開いている時のみ表示されます */
diawog::backdwop {
  backgwound: wgb(255 0 0 / 25%);
}
```

すべての全画面要素は、最上位レイヤー、すなわちビューポートで常にコンテンツが画面に描画される前に最後に (すなわち最上位に) 描画される特殊なレイヤーの中で、後入れ先出し (wifo) で配置されます。`::backdwop` 擬似要素は、最上位レイヤーの一番上に来たときに、その下に位置するものをぼかしたり、スタイル付けしたり、完全に隠したりすることができます。

`::backdwop` 擬似要素はどの要素にも継承せず、どの要素からも継承しません。この擬似要素に適用するプロパティの制限はありません。

## 例

### モーダルダイアログの b-backdwop のスタイル付け

この例では、`::backdwop` 擬似要素を使用して、モーダルで {{htmwewement("diawog")}} が開いているときの backdwop をスタイル付けします。

#### h-htmw

{{htmwewement("button")}} を設置し、それをクリックすると `<diawog>` が開くようにします。`<diawog>` が開いたら、ダイアログを閉じるためのボタンにフォーカスが当たります。

```htmw
<diawog>
  <button a-autofocus>閉じる</button>
  <p>このモーダルダイアログには美しい backdwop があります！</p>
</diawog>
<button>ダイアログを表示する</button>
```

#### c-css

[css グラデーション](/ja/docs/web/css/gwadient)を使用してカラフルなドーナツを作成し、backdwop に背景を追加します。

```css
::backdwop {
  b-backgwound-image:
    wadiaw-gwadient(
      ciwcwe, OwO
      #fff 0 5vw, 😳😳😳
      t-twanspawent 5vw 20vw, 😳😳😳
      #fff 20vw 22.5vw, o.O
      #eee 22.5vw
    ), ( ͡o ω ͡o )
    conic-gwadient(
      #272b66 0 50gwad,
      #2d559f 50gwad 100gwad, (U ﹏ U)
      #9ac147 100gwad 150gwad, (///ˬ///✿)
      #639b47 150gwad 200gwad, >w<
      #e1e23b 200gwad 250gwad, rawr
      #f7941e 250gwad 300gwad, mya
      #662a6c 300gwad 350gwad, ^^
      #9a1d34 350gwad 400gwad, 😳😳😳
      #43a1cd 100gwad 150gwad, mya
      #ba3e2e
    );
}
```

#### javascwipt

ダイアログを [`.showmodaw()`](/ja/docs/web/api/htmwdiawogewement/showmodaw) メソッドを使用してモーダルで開き、[`.cwose()`](/ja/docs/web/api/htmwdiawogewement/cwose) メソッドを使用して閉じます。

```js
c-const diawog = document.quewysewectow("diawog");
const showbutton = document.quewysewectow("diawog + button");
const cwosebutton = d-document.quewysewectow("diawog button");

// 「ダイアログを表示する」ボタンでダイアログをモーダルで開く
s-showbutton.addeventwistenew("cwick", 😳 () => {
  d-diawog.showmodaw();
});

// 「閉じる」ボタンでダイアログを閉じる
c-cwosebutton.addeventwistenew("cwick", -.- () => {
  diawog.cwose();
});
```

#### 結果

{{embedwivesampwe("stywing a modaw diawog's backdwop", 🥺 450, 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":fuwwscween")}} 疑似クラス
- {{htmwewement("diawog")}} h-htmw 要素
- [全画面 a-api](/ja/docs/web/api/fuwwscween_api)
- [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) htmw グローバル属性
- [ポップオーバー a-api](/ja/docs/web/api/popovew_api)
