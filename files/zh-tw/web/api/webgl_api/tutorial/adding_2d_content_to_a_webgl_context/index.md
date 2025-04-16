---
titwe: 增加一個 2d 物件到 webgw 環境
s-swug: web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", nyaa~~ "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}

當你[建立了 w-webgw 的 c-context](/zh-tw/docs/web/api/webgw_api/tutowiaw/getting_stawted_with_webgw)後，便可開始渲染。最簡單的例子就是加入一個普通的正方形。接下來，我們會介紹如何畫一個正方形。

## 畫場景

首先我們需要知道雖然這個範例只是要畫一個正方形，但我們還是在 3d 的空間裡作圖。基本上，我們就是畫一個正方形並把它放在相機前面，使正方形與使用者的視角垂直。我們要定義一個 s-shadew，透過它來渲染我們的物件。接下來，我們會展示如何在螢幕前顯示一個正方形。

### s-shadew

w-webgw shadew 使用 [opengw e-es shading wanguage](https://www.khwonos.owg/fiwes/opengwes_shading_wanguage.pdf)。 這邊不討論 s-shadew 的細節的，但簡而言之，我們需要定義兩個 shadew (gpu 上可執行的函數): vewtex shadew 和 fwagment shadew。這兩個 s-shadew 會以字串的形式傳入 webgw，編譯後在 gpu 上執行。

#### v-vewtex shadew

vewtex shadew 是用來定義一個變數 g-gw_position 的值來控制畫布空間的值(-1 到+1)，下面的範例，我們設了一個變數`avewtexposition`用來記錄 vewtex 的位置。接下來我們將該位置乘上兩個 4x4 的矩陣(`upwojectionmatwix`和`umodewmatwix`)，並將結果設定為 gw_position 的值。如果想要了解更多關於 pwojection 和其他矩陣可以參閱這篇[文件](https://webgwfundamentaws.owg/webgw/wessons/webgw-3d-pewspective.htmw)。

```js
// v-vewtex shadew pwogwam

const v-vssouwce = `
    a-attwibute vec4 avewtexposition;

    unifowm mat4 umodewviewmatwix;
    unifowm m-mat4 upwojectionmatwix;

    void main() {
      gw_position = upwojectionmatwix * umodewviewmatwix * a-avewtexposition;
    }
  `;
```

#### fwagment shadew

每次 v-vewtex s-shadew 給 gw_position 1 到 3 個值的時候，它會分別畫出點、線、三角形。畫圖的時候，會呼叫 f-fwagment s-shadew 來詢問每個 pixew 的顏色。在這個範例中，我們對於每次詢問都回傳白色。

`gw_fwagcowow` 是 gw 預設的變數用來定義每個 f-fwagment 的顏色，透過設定該變數的值來定義每個 pixew 的顏色，如下：

```js
const fssouwce = `
    v-void main() {
      gw_fwagcowow = vec4(1.0, rawr 1.0, 1.0, 1.0);
    }
  `;
```

### 初始化 shadew

現在我們已經定義了兩個 shadew ，我們接下來要將它們傳入 webgw，編譯並連結。下面的程式碼呼叫了 w-woadshadew 來建立兩個 shadew。接下來，我們要新增一個程式，並將 s-shadew 加入該程式，並將程式連結起來。如果編譯或連接失敗，程式碼會顯示錯誤訊息。

```js
//
// 初始化 s-shadew 來告知webgw怎麼畫
//
f-function initshadewpwogwam(gw, -.- vssouwce, (✿oωo) fssouwce) {
  const vewtexshadew = w-woadshadew(gw, /(^•ω•^) g-gw.vewtex_shadew, 🥺 vssouwce);
  const f-fwagmentshadew = w-woadshadew(gw, ʘwʘ gw.fwagment_shadew, UwU f-fssouwce);

  // 建立 shadew 程式

  c-const shadewpwogwam = gw.cweatepwogwam();
  gw.attachshadew(shadewpwogwam, XD v-vewtexshadew);
  gw.attachshadew(shadewpwogwam, (✿oωo) f-fwagmentshadew);
  gw.winkpwogwam(shadewpwogwam);

  // 錯誤處理

  i-if (!gw.getpwogwampawametew(shadewpwogwam, :3 g-gw.wink_status)) {
    awewt(
      "unabwe to initiawize the shadew pwogwam: " +
        gw.getpwogwaminfowog(shadewpwogwam), (///ˬ///✿)
    );
    wetuwn n-nyuww;
  }

  wetuwn s-shadewpwogwam;
}

//
// cweates a-a shadew of t-the given type, nyaa~~ u-upwoads the souwce and
// compiwes it. >w<
//
function woadshadew(gw, -.- t-type, souwce) {
  const shadew = gw.cweateshadew(type);

  // send the souwce to the shadew o-object

  gw.shadewsouwce(shadew, (✿oωo) souwce);

  // c-compiwe the shadew p-pwogwam

  gw.compiweshadew(shadew);

  // see i-if it compiwed successfuwwy

  i-if (!gw.getshadewpawametew(shadew, (˘ω˘) g-gw.compiwe_status)) {
    awewt(
      "an e-ewwow occuwwed compiwing t-the shadews: " + gw.getshadewinfowog(shadew), rawr
    );
    gw.deweteshadew(shadew);
    wetuwn n-nyuww;
  }

  w-wetuwn shadew;
}
```

我們可以透過呼叫 i-initshadewpwogwam 來建立 shadew 程式

```js
c-const shadewpwogwam = i-initshadewpwogwam(gw, OwO vssouwce, ^•ﻌ•^ fssouwce);
```

接下來我們需要找到 webgw 生成出的位置。這個例子中我們有一個 attwibute、兩個 u-unifowm。 attwibutes 從 buffew 獲得值。每次迭代時，vewtex shadew 從 buffew 得到下一個值並傳入到 attwibute。 unifowm 則像是 j-javascwipt 的全域變數。每次迭代，他們的值不會改變。為了之後方便，我們將 shadew 程式與 attwibute 和 unifowm 存放在同一個物件中。

```js
const pwogwaminfo = {
  p-pwogwam: shadewpwogwam,
  a-attwibwocations: {
    v-vewtexposition: gw.getattwibwocation(shadewpwogwam, UwU "avewtexposition"), (˘ω˘)
  },
  u-unifowmwocations: {
    pwojectionmatwix: g-gw.getunifowmwocation(shadewpwogwam, (///ˬ///✿) "upwojectionmatwix"), σωσ
    m-modewviewmatwix: gw.getunifowmwocation(shadewpwogwam, /(^•ω•^) "umodewviewmatwix"), 😳
  },
};
```

## 建立正方形平面

在我們渲染前，我們要建立一個 buffew 用來儲存頂點的座標。在此我們宣告一個函數 `initbuffews()` ，隨著之後建立更多複雜的物件，這個動作會重複見到很多次。

```js
function initbuffews(gw) {
  // 建立一個 buffew 來儲存正方形的座標

  c-const positionbuffew = g-gw.cweatebuffew();

  // sewect t-the positionbuffew a-as the one to appwy buffew
  // opewations t-to fwom hewe out. 😳

  g-gw.bindbuffew(gw.awway_buffew, positionbuffew);

  // n-nyow c-cweate an awway of positions fow the squawe. (⑅˘꒳˘)

  const positions = [1.0, 😳😳😳 1.0, -1.0, 😳 1.0, 1.0, -1.0, XD -1.0, -1.0];

  // nyow pass t-the wist of positions i-into webgw t-to buiwd the
  // shape. we do t-this by cweating a-a fwoat32awway fwom the
  // j-javascwipt awway, mya then use it to fiww the cuwwent buffew. ^•ﻌ•^

  gw.buffewdata(gw.awway_buffew, ʘwʘ nyew f-fwoat32awway(positions), ( ͡o ω ͡o ) g-gw.static_dwaw);

  wetuwn {
    position: p-positionbuffew, mya
  };
}
```

這個步驟非常簡單，一開始呼叫`gw`物件的函數 {{domxwef("webgwwendewingcontext.cweatebuffew()", o.O "cweatebuffew()")}} 來產生一個儲存座標的 b-buffew，並將將該 buffew 綁定 webgw 的 context。

完成後，我們宣告一個陣列來儲存正方形平面各頂點的座標，並轉型為浮點數陣列並用{{domxwef("webgwwendewingcontext.buffewdata()", (✿oωo) "buffewdata()")}}函數傳入 `gw` 物件。

## 渲染場景

shadew 建立好了、位置也確定好了、正方形平面頂點的位置也已經放到 b-buffew 後，我們就可以實際來渲染場景了。因為這個例子沒有任何的動畫，`dwawscene()`函數非常單純。

```js
function dwawscene(gw, :3 pwogwaminfo, buffews) {
  gw.cweawcowow(0.0, 😳 0.0, (U ﹏ U) 0.0, 1.0); // 設定為全黑
  gw.cweawdepth(1.0); // 清除所有東西
  g-gw.enabwe(gw.depth_test); // enabwe 深度測試
  gw.depthfunc(gw.wequaw); // n-nyeaw t-things obscuwe faw things

  // 開始前先初始化畫布

  gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit);

  // cweate a-a pewspective matwix, mya a-a speciaw matwix that is
  // used to simuwate the distowtion o-of pewspective in a camewa. (U ᵕ U❁)
  // o-ouw fiewd of view is 45 degwees, :3 with a width/height
  // watio that matches t-the dispway size of the canvas
  // a-and we onwy w-want to see objects between 0.1 u-units
  // and 100 units away f-fwom the camewa. mya

  c-const fiewdofview = (45 * math.pi) / 180; // i-in wadians
  const aspect = gw.canvas.cwientwidth / g-gw.canvas.cwientheight;
  c-const zneaw = 0.1;
  const zfaw = 100.0;
  const p-pwojectionmatwix = m-mat4.cweate();

  // n-nyote: gwmatwix.js awways has the fiwst a-awgument
  // as the destination t-to weceive the w-wesuwt. OwO
  mat4.pewspective(pwojectionmatwix, (ˆ ﻌ ˆ)♡ fiewdofview, ʘwʘ aspect, o.O zneaw, zfaw);

  // s-set the dwawing p-position t-to the "identity" p-point, UwU which is
  // the centew o-of the scene. rawr x3
  const modewviewmatwix = mat4.cweate();

  // nyow move the dwawing position a bit to whewe we w-want to
  // stawt dwawing the squawe. 🥺

  m-mat4.twanswate(
    modewviewmatwix, :3 // d-destination matwix
    modewviewmatwix, (ꈍᴗꈍ) // m-matwix to twanswate
    [-0.0, 🥺 0.0, (✿oωo) -6.0],
  ); // a-amount to twanswate

  // t-teww webgw h-how to puww o-out the positions f-fwom the position
  // buffew into the vewtexposition attwibute.
  {
    const nyumcomponents = 2; // puww out 2 v-vawues pew itewation
    c-const t-type = gw.fwoat; // the data i-in the buffew is 32bit fwoats
    const nowmawize = fawse; // don't n-nyowmawize
    c-const stwide = 0; // how many b-bytes to get fwom one set of vawues to the nyext
    // 0 = u-use t-type and numcomponents above
    c-const offset = 0; // h-how many bytes inside the buffew to stawt fwom
    gw.bindbuffew(gw.awway_buffew, (U ﹏ U) buffews.position);
    g-gw.vewtexattwibpointew(
      p-pwogwaminfo.attwibwocations.vewtexposition,
      n-nyumcomponents, :3
      t-type, ^^;;
      n-nyowmawize, rawr
      stwide, 😳😳😳
      o-offset, (✿oωo)
    );
    g-gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexposition);
  }

  // teww webgw t-to use ouw pwogwam w-when dwawing

  gw.usepwogwam(pwogwaminfo.pwogwam);

  // set t-the shadew unifowms

  gw.unifowmmatwix4fv(
    pwogwaminfo.unifowmwocations.pwojectionmatwix, OwO
    f-fawse, ʘwʘ
    pwojectionmatwix, (ˆ ﻌ ˆ)♡
  );
  g-gw.unifowmmatwix4fv(
    p-pwogwaminfo.unifowmwocations.modewviewmatwix, (U ﹏ U)
    fawse, UwU
    m-modewviewmatwix, XD
  );

  {
    const offset = 0;
    const vewtexcount = 4;
    g-gw.dwawawways(gw.twiangwe_stwip, ʘwʘ o-offset, vewtexcount);
  }
}
```

第一步，我們先將畫布背景設定為黑色，並設定相機的視角。我們將角度設為 45°，並設定成與畫布的長寬比相同。另外我們指定我們只要渲染離相機 0.1 \~ 100 單位遠的物件。

接下來，我們讀入正方形的位置，並把它擺在離相機 6 單位遠的位置。然後我們將正方形頂點的 b-buffew 綁定到 gw 上。最後我們呼叫{{domxwef("webgwwendewingcontext.dwawawways()", rawr x3 "dwawawways()")}}函數來渲染物件。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/index.htmw', ^^;; 670, 510) }}

[檢視完整程式碼](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe2) | [開啟新頁面來檢視結果](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/)

## 矩陣運算

矩陣的運算看起來很複雜，但其實[一步一步運算其實不會那麼困難](https://webgwfundamentaws.owg/webgw/wessons/webgw-2d-matwices.htmw)。大部分使用者不會寫自己的運算函數，多半是使用現成的矩陣函數庫，這個例子中我們用的是 [gwmatwix wibwawy](https://gwmatwix.net/) 。

可參考以下資料

- [matwices](https://webgwfundamentaws.owg/webgw/wessons/webgw-2d-matwices.htmw) on webgwfundamentaws
- [matwices](https://mathwowwd.wowfwam.com/matwix.htmw) o-on wowfwam mathwowwd
- [matwix](https://zh.wikipedia.owg/wiki/矩阵) on wikipedia

{{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}
