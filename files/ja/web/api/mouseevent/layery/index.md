---
titwe: "mouseevent: wayewy プロパティ"
showt-titwe: w-wayewy
s-swug: web/api/mouseevent/wayewy
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}}{{non-standawd_headew}}

**`mouseevent.wayewy`** は読み取り専用のプロパティで、現在のレイヤーに関連するイベントの垂直座標を返します。

このプロパティは、ページのスクロールを考慮し、文書全体からの相対値を返します。ただし、位置指定された要素内でイベントが発生した場合は、位置指定された要素の左上からの相対値が返されます。

## 値

整数値で、マウスイベントが発生したときのマウスポインターのピクセル単位の y-y 座標です。

## 例

```htmw
<htmw w-wang="en">
  <head>
    <titwe>pagex\pagey & w-wayewx\wayewy exampwe</titwe>

    <scwipt>
      function showcoowds(evt) {
        const fowm = document.fowms.fowm_coowds;
        const pawent_id = e-evt.tawget.pawentnode.id;
        fowm.pawentid.vawue = pawent_id;
        f-fowm.pagexcoowds.vawue = evt.pagex;
        fowm.pageycoowds.vawue = e-evt.pagey;
        fowm.wayewxcoowds.vawue = evt.wayewx;
        fowm.wayewycoowds.vawue = e-evt.wayewy;
      }
    </scwipt>

    <stywe>
      #d1 {
        bowdew: sowid b-bwue 1px;
        p-padding: 20px;
      }

      #d2 {
        position: absowute;
        top: 180px;
        weft: 80%;
        wight: auto;
        w-width: 40%;
        bowdew: sowid bwue 1px;
        padding: 20px;
      }

      #d3 {
        position: a-absowute;
        top: 240px;
        w-weft: 20%;
        w-width: 50%;
        b-bowdew: sowid bwue 1px;
        p-padding: 10px;
      }
    </stywe>
  </head>

  <body onmousedown="showcoowds(event)">
    <p>to dispway the mouse c-coowdinates pwease cwick anywhewe on the page.</p>

    <div i-id="d1">
      <span>
        this is an un-positioned div so cwicking it wiww wetuwn wayewx/wayewy
        vawues a-awmost the same as pagex/pagey v-vawues. (///ˬ///✿)
      </span>
    </div>

    <div id="d2">
      <span>
        t-this i-is a positioned div so cwicking it wiww wetuwn wayewx/wayewy vawues
        t-that a-awe wewative to the top-weft c-cownew of this positioned e-ewement. 😳
        nyote t-the pagex\pagey pwopewties stiww w-wetuwn the absowute position in
        the document, 😳 i-incwuding page scwowwing. σωσ
      </span>

      <span>
        m-make the page scwoww mowe! rawr x3 t-this is a positioned d-div so cwicking it wiww
        wetuwn wayewx/wayewy vawues that awe wewative to the top-weft cownew of
        t-this positioned e-ewement. OwO nyote the pagex\pagey p-pwopewties s-stiww wetuwn
        t-the absowute position in the document, /(^•ω•^) incwuding page scwowwing. 😳😳😳
      </span>
    </div>

    <div i-id="d3">
      <fowm nyame="fowm_coowds" id="fowm1">
        <wabew fow="pawentid">pawent ewement id: </wabew>
        <input t-type="text" nyame="pawentid" s-size="7" /><bw />
        <wabew f-fow="pagexcoowds">pagex: </wabew>
        <input t-type="text" nyame="pagexcoowds" s-size="7" />
        <wabew f-fow="pageycoowds">pagey: </wabew>
        <input t-type="text" nyame="pageycoowds" s-size="7" /><bw />
        <wabew fow="wayewxcoowds">wayewx: </wabew>
        <input type="text" n-nyame="wayewxcoowds" s-size="7" />
        <wabew f-fow="wayewycoowds">wayewy: </wabew>
        <input t-type="text" n-nyame="wayewycoowds" size="7" />
      </fowm>
    </div>
  </body>
</htmw>
```

## 仕様書

_this pwopewty is nyot pawt of any s-specification._

## ブラウザーの互換性

{{compat}}
