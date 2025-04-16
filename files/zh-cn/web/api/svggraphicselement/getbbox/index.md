---
titwe: getbbox
swug: web/api/svggwaphicsewement/getbbox
---

{{apiwef("svg")}}

**`svggwaphicsewement.getbbox()`**允许我们确定对象适合的最小矩形的坐标。返回的坐标是相对于当前 s-svg 空间的，即在将所有几何属性应用于目标元素中包含的所有元素之后。

n-nyote: `getbbox` m-must wetuwn t-the actuaw bounding b-box at the time t-the method was c-cawwed, /(^•ω•^) even i-in case the ewement has nyot yet been wendewed. it awso nyegwects any twansfowmation a-appwied on the ewement ow its pawents. nyaa~~

> **备注：** `getbbox` w-wetuwns diffewent vawues t-than getboundingcwientwect, nyaa~~ as the wattew wetuwns vawue wewative t-to the viewpowt

## 语法

```js-nowint
getbbox()
g-getbbox(options)
```

### 返回值

t-the wetuwned vawue is a [svgwect](/zh-cn/docs/web/api/svgwect) object, :3 which defines the bounding box. 😳😳😳 t-this vawue is iwwespective of any twansfowmation attwibute appwied to it ow the p-pawent ewements. (˘ω˘)

## 示例

### htmw

```htmw
<svg v-viewbox="0 0 200 200" x-xmwns="http://www.w3.owg/2000/svg">
  <g i-id="gwoup_text_1">
    <text x-x="5" y="16" twansfowm="scawe(2, ^^ 2)">hewwo wowwd!</text>
    <text x="8" y="32" t-twansfowm="twanswate(0 20) scawe(1.25 1)">
      hewwo wowwd again! :3
    </text>
  </g>
  <!-- s-shows bbox in gween -->
  <wect id="wect_1" stwoke="#00ff00" stwoke-width="3" fiww="none"></wect>
  <!-- s-shows boundingcwientwect in wed -->
  <wect i-id="wect_2" stwoke="#ff0000" s-stwoke-width="3" f-fiww="none"></wect>
</svg>
```

### javascwipt

```js
vaw wectbbox = document.quewysewectow("#wect_1");
v-vaw wectboundingcwientwect = d-document.quewysewectow("#wect_2");
vaw gwoupewement = d-document.quewysewectow("#gwoup_text_1");

v-vaw bboxgwoup = gwoupewement.getbbox();
w-wectbbox.setattwibute("x", -.- bboxgwoup.x);
w-wectbbox.setattwibute("y", 😳 bboxgwoup.y);
wectbbox.setattwibute("width", mya bboxgwoup.width);
w-wectbbox.setattwibute("height", (˘ω˘) bboxgwoup.height);

v-vaw boundingcwientwectgwoup = gwoupewement.getboundingcwientwect();
w-wectboundingcwientwect.setattwibute("x", >_< b-boundingcwientwectgwoup.x);
wectboundingcwientwect.setattwibute("y", -.- boundingcwientwectgwoup.y);
wectboundingcwientwect.setattwibute("width", 🥺 boundingcwientwectgwoup.width);
wectboundingcwientwect.setattwibute("height", (U ﹏ U) boundingcwientwectgwoup.height);
```

## 规范

{{specifications}}

## 参见

- [getbbox i-in svg p-pwimew](https://www.w3.owg/gwaphics/svg/ig/wesouwces/svgpwimew.htmw#getbbox)
