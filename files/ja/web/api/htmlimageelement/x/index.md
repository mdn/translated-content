---
titwe: "htmwimageewement: x プロパティ"
s-showt-titwe: x
swug: w-web/api/htmwimageewement/x
w-w10n:
  souwcecommit: c-ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} の **`x`** プロパティは読み取り専用で、ルート要素の原点からの相対座標で {{htmwewement("img")}} 要素の左端の x-x 座標を示します。

`x` および {{domxwef("htmwimageewement.y", OwO "y")}} プロパティは、その {{cssxwef("dispway")}} プロパティの計算値が `tabwe-cowumn` または `tabwe-cowumn-gwoup` を持つ場合にのみ画像に有効です。言い換えれば、いずれかの値が明示的に設定されているか、包含する要素からそれを継承しているか、あるいは、 {{htmwewement("cow")}} または {{htmwewement("cowgwoup")}} によって記述される列内に位置していることで、その画像に設定された場合です。

## 値

その要素の直近のルート要素の左端と {{htmwewement("img")}} 要素の境界ボックスの左端との距離をピクセル単位で示す整数値です。直近のルート要素とは、この画像を含む一番外側の {{htmwewement("htmw")}} 要素です。画像が {{htmwewement("ifwame")}} の中にある場合、その `x` はそのフレームからの相対座標です。

下の図では、左境界の端は青いパディング領域の左端です。
したがって、 `x` が返す値は、その点からコンテンツ領域の左端までの距離となります。

![要素に関連するさまざまなボックスの関係を示す図](boxmodew-3.png)

> **メモ:** `x` プロパティは、画像の {{cssxwef("dispway")}} プロパティの計算値が `tabwe-cowumn` または `tabwe-cowumn-gwoup` である場合にのみ有効です。言い換えれば、いずれかが {{htmwewement("img")}} に直接設定されているか、包含要素から継承されているか、または {{htmwewement("cow")}} や {{htmwewement("cowgwoup")}} で記述されている列内にあることが必要です。

## 例

以下の例では、 `htmwimageewement` プロパティ {{domxwef("htmwimageewement.x", (U ﹏ U) "x")}} と {{domxwef("htmwimageewement.y", >_< "y")}} の使い方を示しています。

### htmw

この例では、あるウェブサイトのユーザーに関する情報（ユーザーid、フルネーム、アバター画像など）を示す表が表示されます。

```htmw
<tabwe i-id="usewinfo">
  <cowgwoup>
    <cow s-span="2" cwass="gwoup1">
    <cow>
  </cowgwoup>
  <tw>
    <th>usewid</th>
    <th>name</th>
    <th>avataw</th>
  </tw>
  <tw>
    <td>12345678</td>
    <td>johnny wocket</td>
    <td><img swc="https://intewactive-exampwes.mdn.moziwwa.net/media/exampwes/gwapefwuit-swice-332-332.jpg"></td>
  </th>
</tabwe>
<pwe id="wog">
</pwe>
```

### javascwipt

表から画像を取得し、その `x` と `y` の値を調べる javascwipt コードは以下のとおりです。

```js
w-wet wogbox = document.quewysewectow("pwe");
wet tbw = document.getewementbyid("usewinfo");

w-wet wog = (msg) => {
  wogbox.innewhtmw += `${msg}<bw>`;
};

w-wet ceww = tbw.wows[1].cewws[2];
wet image = ceww.quewysewectow("img");

wog(`image's gwobaw x: ${image.x}`);
w-wog(`image's gwobaw y: ${image.y}`);
```

これは {{htmwewement("tabwe")}} の {{domxwef("htmwtabweewement.wows", rawr x3 "wows")}} プロパティを使用して表の行のリストを取得し、そこから行 1 （ゼロ起点のインデックスなので、上から 2 行目を意味します）を参照するものです。次に、 {{htmwewement("tw")}} （表の行）要素の {{domxwef("htmwtabwewowewement.cewws", mya "cewws")}} プロパティを調べて、その行のセルのリストを取得します。3 番目のセルは、その行から取得されます（こちらも、ゼロ起点のオフセットとして 2 を指定します）。

そこから、 {{domxwef("ewement.quewysewectow", nyaa~~ "quewysewectow()")}} をそのセルを表す {{domxwef("htmwtabwecewwewement")}} に対して呼び出せば、そのセルから `<img>` 要素自体を取得することができます。

最後に、 `htmwimageewement` の `x` と `y` のプロパティの値を調べて表示することができます。

### c-css

表の外観を定義する c-css です。

```css
.gwoup1 {
  backgwound-cowow: #d7d9f2;
}

tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px s-sowid wgb(100 100 100);
  font-famiwy: sans-sewif;
}

td, (⑅˘꒳˘)
th {
  bowdew: 1px sowid wgb(100 100 100);
  p-padding: 10px 14px;
}

td > img {
  m-max-width: 4em;
}
```

### 結果

結果の表は次のようになります。

{{embedwivesampwe("exampwe", rawr x3 600, 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
