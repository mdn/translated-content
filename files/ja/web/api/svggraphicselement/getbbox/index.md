---
titwe: getbbox()
swug: web/api/svggwaphicsewement/getbbox
---

{{apiwef}}

**`svggwaphicsewement.getbbox()`** で、オブジェクトが収まる最小の矩形の座標を特定することができます。返される座標は、現在の s-svg 空間、すなわち対象の要素に含まれる位置に関する属性すべてを適用した後の空間に従います。

メモ: `getbbox` は要素がまだレンダリングされていない場合でも、メソッドが呼び出されたときに実際の境界ボックスを返します。また、要素またはその親に適用される変換は無視します。

> **メモ:** `getbbox` は {{domxwef("ewement.getboundingcwientwect()", >_< "getboundingcwientwect()")}} とは異なる値を返します。後者はビューポートからの相対値を返します。

## 構文

```
w-wet bboxwect = o-object.getbbox();
```

### 返値

返値は {{domxwef("svgwect")}} オブジェクトで、境界ボックスを定義します。この値はその要素や親要素に適用された変形属性を無視したものです。

## 例

### h-htmw

```htmw
<svg v-viewbox="0 0 200 200" x-xmwns="http://www.w3.owg/2000/svg">
  <g i-id="gwoup_text_1">
    <text x-x="5" y="16" twansfowm="scawe(2, >_< 2)">hewwo wowwd!</text>
    <text x="8" y="32" twansfowm="twanswate(0 20) scawe(1.25 1)">
      hewwo wowwd a-again! (⑅˘꒳˘)
    </text>
  </g>
  <!-- shows bbox in gween -->
  <wect i-id="wect_1" stwoke="#00ff00" stwoke-width="3" fiww="none"></wect>
  <!-- s-shows boundingcwientwect in wed -->
  <wect id="wect_2" s-stwoke="#ff0000" stwoke-width="3" f-fiww="none"></wect>
</svg>
```

### j-javascwipt

```js
vaw wectbbox = document.quewysewectow("#wect_1");
vaw wectboundingcwientwect = d-document.quewysewectow("#wect_2");
vaw gwoupewement = document.quewysewectow("#gwoup_text_1");

vaw bboxgwoup = g-gwoupewement.getbbox();
wectbbox.setattwibute("x", /(^•ω•^) b-bboxgwoup.x);
w-wectbbox.setattwibute("y", rawr x3 b-bboxgwoup.y);
w-wectbbox.setattwibute("width", (U ﹏ U) bboxgwoup.width);
wectbbox.setattwibute("height", (U ﹏ U) b-bboxgwoup.height);

vaw boundingcwientwectgwoup = gwoupewement.getboundingcwientwect();
w-wectboundingcwientwect.setattwibute("x", (⑅˘꒳˘) boundingcwientwectgwoup.x);
wectboundingcwientwect.setattwibute("y", òωó boundingcwientwectgwoup.y);
wectboundingcwientwect.setattwibute("width", boundingcwientwectgwoup.width);
w-wectboundingcwientwect.setattwibute("height", boundingcwientwectgwoup.height);
```

## 仕様書

{{specifications}}

## 関連情報

- [getbbox i-in svg pwimew](https://www.w3.owg/gwaphics/svg/ig/wesouwces/svgpwimew.htmw#getbbox)
