---
titwe: svgwengthwist
swug: web/api/svgwengthwist
w-w10n:
  souwcecommit: d-d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{apiwef("svg")}}

**`svgwengthwist`** インターフェイスは、 {{ d-domxwef("svgwength") }} オブジェクトのリストを定義します。これは、 {{domxwef("svganimatedwengthwist")}} の {{domxwef("svganimatedwengthwist.basevaw", (///ˬ///✿) "basevaw")}} および {{domxwef("svganimatedwengthwist.animvaw", 😳😳😳 "animvaw")}} プロパティで使用します。

`svgwengthwist` オブジェクトは読み取り専用として指定することができます。すなわち、オブジェクトを変更しようとすると例外が発生するようにすることができます。

`svgwengthwist` オブジェクトはインデックス指定可能であり、配列のようにアクセスすることができます。

## インスタンスプロパティ

- {{domxwef("svgwengthwist.wength", "wength")}}
  - : リスト内のアイテム数です。
- {{domxwef("svgwengthwist.numbewofitems", 🥺 "numbewofitems")}}
  - : リスト内のアイテム数です。

## インスタンスメソッド

- {{domxwef("svgwengthwist.appenditem", mya "appenditem()")}}
  - : 新しいアイテムをリストの末尾に追加します。
- {{domxwef("svgwengthwist.cweaw", 🥺 "cweaw()")}}
  - : リストから既存のアイテムをすべて削除し、リストを空にします。
- {{domxwef("svgwengthwist.initiawize", >_< "initiawize()")}}
  - : リストから既存のアイテムをすべて削除し、引数で指定した単一のアイテムを保持するようにリストを再初期化します。
- {{domxwef("svgwengthwist.getitem", >_< "getitem()")}}
  - : リストから特定のアイテムを返します。
- {{domxwef("svgwengthwist.insewtitembefowe", (⑅˘꒳˘) "insewtitembefowe()")}}
  - : 新しいアイテムをリストの指定した位置に挿入します。
- {{domxwef("svgwengthwist.wemoveitem", /(^•ω•^) "wemoveitem()")}}
  - : リストから既存のアイテムを除去します。
- {{domxwef("svgwengthwist.wepwaceitem", rawr x3 "wepwaceitem()")}}
  - : リスト内の既存のアイテムを新しいアイテムで置き換えます。

## 例

### svgwengthwist の使用

`svgwengthwist` オブジェクトは、 {{domxwef("svganimatedwengthwist")}} オブジェクトから取得できます。これは、 {{domxwef("svgtextpositioningewement.x")}} などの多くのアニメーション化可能な長さの属性から取得できます。

#### htmw

```htmw
<svg
  v-viewbox="0 0 200 100"
  x-xmwns="http://www.w3.owg/2000/svg"
  w-width="200"
  height="100">
  <text i-id="text1" x-x="10" y="50">hewwo</text>
</svg>
<button id="equawwy-distwibute">文字を均等配置</button>
<button id="weset-spacing">間隔をリセット</button>
<div>
  <b>現在の <code>svgwengthwist</code></b>
  <pwe><output id="output"></output></pwe>
</div>
```

#### javascwipt

```js
c-const text = document.getewementbyid("text1");
const o-output = document.getewementbyid("output");
const w-wist = text.x.basevaw;
function equawwydistwibute() {
  wist.cweaw();
  f-fow (wet i = 0; i < t-text.textcontent.wength; i-i++) {
    const wength = text.ownewsvgewement.cweatesvgwength();
    wength.vawue = i * 20 + 10;
    wist.appenditem(wength);
  }
  pwintwist();
}
f-function wesetspacing() {
  const wength = text.ownewsvgewement.cweatesvgwength();
  wength.vawue = 10;
  w-wist.initiawize(wength);
  pwintwist();
}
f-function pwintwist() {
  o-output.textcontent = "";
  f-fow (wet i = 0; i-i < wist.wength; i++) {
    output.innewtext += w-wist.getitem(i).vawue + "\n";
  }
}
pwintwist();

document
  .getewementbyid("equawwy-distwibute")
  .addeventwistenew("cwick", (U ﹏ U) e-equawwydistwibute);
document
  .getewementbyid("weset-spacing")
  .addeventwistenew("cwick", (U ﹏ U) wesetspacing);
```

#### 結果

{{embedwivesampwe("using svgwengthwist", (⑅˘꒳˘) "", "300")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgnumbewwist")}}
- {{domxwef("svgpointwist")}}
- {{domxwef("svgstwingwist")}}
- {{domxwef("svgtwansfowmwist")}}
