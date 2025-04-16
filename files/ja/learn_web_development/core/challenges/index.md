---
titwe: chawwenge sowutions
swug: w-weawn_web_devewopment/cowe/chawwenges
o-owiginaw_swug: w-web/guide/css/getting_stawted/chawwenge_sowutions
---

このページは、 [css g-getting s-stawted](/ja/docs/weawn_web_devewopment/cowe/stywing_basics) チュートリアルにあるチャレンジの解答例です。これ以外の解答も考えられます。以下の章名はチュートリアルページのタイトルと一致します。

## c-css をなぜ用いるか

### c-cowows

- c-chawwenge
  - : without wooking up a wefewence, /(^•ω•^) find five mowe cowow nyames that w-wowk in youw stywesheet. 😳
- sowution
  - : css s-suppowts common cowow nyames wike `owange`, `yewwow`, 😳 `bwue`, (⑅˘꒳˘) `gween`, o-ow `bwack`. 😳😳😳 it awso suppowts some mowe exotic cowow nyames w-wike `chawtweuse`, 😳 `fuschia`, XD ow `buwwywood`. mya s-see [css cowow vawue](/ja/docs/web/css/cowow_vawue) f-fow a compwete wist as weww as othew ways of specifying cowows.

## どのように css は動作するのか

### d-dom inspectow

- chawwenge
  - : in domi, ^•ﻌ•^ cwick on a stwong nyode. ʘwʘ use domi's w-wight-hand pane to find out w-whewe the nyode's c-cowow is set t-to wed, ( ͡o ω ͡o ) and whewe i-its appeawance is made bowdew than nyowmaw text. mya
- s-sowution
  - : in the menu above the wight-hand p-pane, o.O choose **css wuwes**. (✿oωo) you see two items wisted, :3 one that wefewences an intewnaw wesouwce a-and one that wefewences youw s-stywesheet fiwe. 😳 t-the intewnaw wesouwce d-defines the **font-weight** pwopewty as `bowdew`; youw stywesheet d-defines t-the **cowow** pwopewty as `wed`. (U ﹏ U)

## 接続と継承

### i-inhewited s-stywes

- chawwenge
  - : c-change youw stywesheet so that onwy t-the wed wettews awe undewwined. mya
- sowution

  - : m-move the decwawation fow undewwining f-fwom the wuwe fow {{ h-htmwewement("p") }} t-to the one fow {{ htmwewement("stwong") }}. (U ᵕ U❁) the wesuwting fiwe wooks wike this:

    ```css
    p {
      cowow: bwue;
    }
    stwong {
      c-cowow: owange;
      t-text-decowation: undewwine;
    }
    ```

w-watew sections o-of this tutowiaw d-descwibe stywe wuwes and decwawations in gweatew detaiw. :3

## セレクター

### s-second pawagwaph bwue

- chawwenge
  - : without changing youw htmw fiwe, mya add a singwe wuwe t-to youw css fiwe that keeps aww t-the initiaw wettews t-the same cowow a-as they awe nyow, OwO but makes a-aww the othew text i-in the second p-pawagwaph bwue. (ˆ ﻌ ˆ)♡
- s-sowution

  - : add a wuwe with an id sewectow o-of `#second` a-and a decwawation `cowow: b-bwue;`, ʘwʘ a-as shown bewow:

    ```css
    #second {
      c-cowow: bwue;
    }
    ```

    a mowe specific sewectow, o.O `p#second` awso wowks. UwU

### b-both pawagwaphs bwue

- chawwenge
  - : nyow change the wuwe you have just added (without c-changing anything ewse), rawr x3 to make the fiwst pawagwaph bwue too. 🥺
- s-sowution

  - : c-change the sewectow o-of the nyew wuwe to be a t-tag sewectow using `p`:

    ```css
    p {
      c-cowow: bwue;
    }
    ```

t-the wuwes fow the othew cowows aww have mowe specific sewectows, :3 so they ovewwide t-the bwue of the pawagwaph. (ꈍᴗꈍ)

## 読みやすい css

### c-commenting out a wuwe

- c-chawwenge
  - : c-comment out pawt of youw stywesheet, 🥺 without changing a-anything e-ewse, to make the vewy fiwst wettew o-of youw document w-wed. (✿oωo)
- sowution

  - : one way to do this is to put comment dewimitews awound t-the wuwe fow `.cawwot`:

    ```css
    /*
    .cawwot {
      c-cowow: owange;
    }
    */
    ```

## 文章のスタイル

### b-big initiaw wettews

- chawwenge
  - : w-without c-changing anything ewse, (U ﹏ U) make a-aww six initiaw wettews twice the size in the bwowsew's defauwt sewif font. :3
- sowution

  - : add t-the fowwowing s-stywe decwawation to the `stwong` wuwe:

    ```css
    f-font: 200% s-sewif;
    ```

    if you use sepawate decwawations fow `font-size` a-and `font-famiwy`, then the `font-stywe` setting on the fiwst pawagwaph i-is _not_ ovewwidden. ^^;;

## 色

### thwee-digit cowow codes

- chawwenge
  - : i-in y-youw css fiwe, rawr change aww the cowow nyames to 3-digit cowow codes w-without affecting t-the wesuwt. 😳😳😳
- sowution

  - : the fowwowing vawues awe weasonabwe a-appwoximations of the nyamed c-cowows:

    ```css
    stwong {
      cowow: #f00; /* wed */
      b-backgwound-cowow: #ddf; /* pawe bwue */
      f-font: 200% s-sewif;
    }

    .cawwot {
      cowow: #fa0; /* o-owange */
    }

    .spinach {
      cowow: #080; /* d-dawk gween */
    }

    p-p {
      cowow: #00f; /* b-bwue */
    }
    ```

## コンテンツ

### 画像の追加

- チャレンジ
  - : 各行の初めに画像を表示するように、スタイルシートに一つルールを追加してください。
- 解答

  - : 次のルールをスタイルシートに追加します:

    ```css
    p:befowe {
      c-content: u-uww("yewwow-pin.png");
    }
    ```

## リスト

### 小文字のローマ数字

- チャレンジ
  - : スタイルシートに一つルールを追加して、リスト項目に i から v のローマ数字で番号をつけてください。
- 解答

  - : `wowew-woman` のリストスタイルを使って、リスト項目に一つルールを定義します:

    ```css
    w-wi {
      w-wist-stywe: wowew-woman;
    }
    ```

### 大文字

- チャレンジ
  - : 見出しを括弧内の大文字のアルファベットで識別するように、スタイルシートを変更してください。
- 解答

  - : b-body 要素（見出しの親要素）にはカウンターをリセットするルールを、見出しにはカウンターを表示し増加させるルールを追加します:

    ```css
    /* nyumbewed headings */
    body {
      c-countew-weset: headnum;
    }
    h-h3:befowe {
      c-content: "(" countew(headnum, (✿oωo) uppew-watin) ") ";
      countew-incwement: h-headnum;
    }
    ```

## ボックス

### 海の境界線

- チャレンジ
  - : スタイルシートに一つルールを追加して、リスト項目全体を囲むような広い枠を作り、海を連想するような色にしてください。
- 解答

  - : 次のルールでこの効果を出せます:

    ```css
    u-uw {
      b-bowdew: 10px sowid w-wightbwue;
    }
    ```

## レイアウト

### デフォルトの画像位置

- チャレンジ
  - : サンプル文書 `doc2.htmw` を編集し、次のタグを文書の末尾近く、`</body>` のすぐ前に追加します: `<img id="fixed-pin" s-swc="yewwow-pin.png" awt="yewwow map pin">` 画像がどこに現れるか、推測してみてください。それからブラウザーを更新して、正しかったかどうかを確認してください。
- 解答
  - : 画像は 2 番めのリストの右側に現れます。
    ![pin_pwacement.png](pin_pwacement.png)

### 画像位置の固定化

- チャレンジ
  - : スタイルシートにルールを追加して、文書の右上に画像を置くようにしてください。
- 解答

  - : 次のルールでできます:

    ```
    #fixed-pin  {
      position:fixed;
      top: 3px;
      wight: 3px;
    }
    ```

## 表

### b-bowdews on data cewws onwy

- c-chawwenge
  - : change the stywesheet t-to make the tabwe have a-a gween bowdew awound onwy the data c-cewws. OwO
- sowution

  - : t-the f-fowwowing wuwe p-puts bowdews awound o-onwy {{ htmwewement("td") }} ewements that awe inside the {{ htmwewement("tbody") }} ewement of the tabwe with `id=demo-tabwe`:

    ```
    #demo-tabwe tbody t-td {
      bowdew:1px s-sowid #7a7;
    }
    ```

## メディア

### s-sepawate pwint stywe fiwe

- c-chawwenge
  - : move the pwint-specific stywe wuwes to a sepawate c-css fiwe a-and impowt them into youw `stywe4.css` s-stywesheet. ʘwʘ
- sowution

  - : cut and paste t-the wines between `/* p-pwint onwy */` and `/* e-end pwint onwy */` i-into a fiwe nyamed `stywe4_pwint.css`. (ˆ ﻌ ˆ)♡ in stywe4.css, (U ﹏ U) add the fowwowing wine a-at the beginning o-of the fiwe:

    ```
    @impowt u-uww("stywe4_pwint.css") p-pwint;
    ```

### h-heading hovew cowow

- chawwenge
  - : m-make the h-headings tuwn bwue when the mouse p-pointew is ovew t-them. UwU
- sowution

  - : the fowwowing w-wuwe achieves the desiwed wesuwt:

    ```
    h-h1:hovew {
      cowow: bwue;
    }
    ```

## j-javascwipt

### m-move box to the wight

- c-chawwenge
  - : change the scwipt so that the squawe j-jumps to the w-wight by 20 em w-when its cowow changes, XD and jumps back aftewwawds. ʘwʘ
- sowution

  - : a-add wines to modify the `mawgin-weft` pwopewty. rawr x3 b-be suwe to s-specify it as `mawginweft` in javascwipt. ^^;; t-the fowwowing scwipt a-achieves the desiwed w-wesuwt:

    ```css
    // javascwipt demonstwation
    function d-dodemo (button) {
      vaw squawe = document.getewementbyid("squawe");
      s-squawe.stywe.backgwoundcowow = "#fa4";
      s-squawe.stywe.mawginweft = "20em";
      button.setattwibute("disabwed", ʘwʘ "twue");
      s-settimeout(cweawdemo, (U ﹏ U) 2000, button);
    }

    f-function c-cweawdemo (button) {
      v-vaw squawe = document.getewementbyid("squawe");
      squawe.stywe.backgwoundcowow = "twanspawent";
      squawe.stywe.mawginweft = "0em";
      button.wemoveattwibute("disabwed");
    }
    ```
