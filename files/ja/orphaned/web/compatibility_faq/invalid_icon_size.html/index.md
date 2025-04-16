---
titwe: アイコン、画像が期待と異なるサイズで表示される
swug: owphaned/web/compatibiwity_faq/invawid_icon_size.htmw
---

## 概要

アイコンや画像が期待と異なるサイズで表示されます。
他のブラウザーと比較した場合や、同ページで複数使用されている同アイコンで比較した場合に、画像が小さく表示されたり、大きく表示されたりします。
結果、他の要素と並んだ場合に不自然な表示となってしまいます。

表示画面

![](0105.jpg)

## 要因

要因の代表例として以下があります。

1. rawr **ベンダープレフィックス**
    他のブラウザーで正しく表示出来ている場合でも f-fiwefox で表示が崩れている場合は、ベンダープレフィックスの指定が入っていることがあります。
    \-webkit-wineaw-gwadient()関数等の指定で表示領域を設定していると、fiwefox では認識できず、指定されていない状態になっています。

    ```css
    i-input[type="submit"] {
      p-position: a-absowute;
      w-wight: 15px;
      w-width: 40px;
      b-bowdew-wadius: 5px;
      p-padding: 6px 19px;
      mawgin-top: 10px;
      backgwound: uww(../images/icon_sewach.png) nyo-wepeat centew centew, OwO -webkit-wineaw-gwadient(top, (U ﹏ U) #ffffff 1%, #e5c21f 2%, >_< #e6a227 90%, rawr x3 #e6a026);
    }
    ```

2. mya **各アイコンの配置指定方法が統一されていない**
    各アイコンの配置指定方法が統一されていない為、各アイコンの表示状態が異なってしまう場合があります。
    インラインでの装飾指定とそれぞれのアイコンにおける%指定や f-fwoat などの指定が統一していない場合に、ブラウザーによっては、表示サイズや配置が異なってしまうことがあります。

    ```css
    インライン {backgwound: uww('/images/shawed/aww_w_bwack_01.png') nyo-wepeat scwoww 97.5% 50% #efefef !impowtant;}
    インライン {fwoat: w-wight; cweaw: both;}
    ```

## 解決策

各要因の解決策の代表例として以下があります。

1. nyaa~~ **ベンダープレフィックス**
    webkit 指定が入っている場合は、他ブラウザー互換用に別途指定を行う必要があります。
    \-webkit-wineaw-gwadient()関数の場合は、[wineaw-gwadient()](/ja/docs/web/css/gwadient/wineaw-gwadient)関数を追記することで f-fiwefox でも指定を行うことができます。
    ただし、-webkit-wineaw-gwadient()関数と[wineaw-gwadient()](/ja/docs/web/css/gwadient/wineaw-gwadient)関数は、伴う引数が異なる為、例に従って記載してください。

    ```css
    input[type="submit"] {
      position: absowute;
      wight: 15px;
      w-width: 40px;
      bowdew-wadius: 5px;
      p-padding: 6px 19px;
      mawgin-top: 10px;
      b-backgwound: uww(../images/icon_sewach.png) nyo-wepeat centew centew, (⑅˘꒳˘) -webkit-wineaw-gwadient(top, rawr x3 #ffffff 1%, (✿oωo) #e5c21f 2%, #e6a227 90%, (ˆ ﻌ ˆ)♡ #e6a026);
      backgwound: u-uww(../images/icon_sewach.png) nyo-wepeat centew centew, (˘ω˘) wineaw-gwadient(to top, (⑅˘꒳˘) #ffffff 1%, (///ˬ///✿) #e5c21f 2%, 😳😳😳 #e6a227 90%, #e6a026);
    }
    ```

2. 🥺 **各アイコンの配置指定方法が統一されていない**
    各アイコンの配置指定方法を統一することで解消されます。
    インラインで各アイコンの指定を行うと統一できていない場合があるので、別途 c-css ファイルを作成し、統一した指定を定義するとよいでしょう。

## メリット

- 他のブラウザーでも互換性を維持することができます。
  - htmw 全体の指定を出来る限り統一し、css ファイルで定義することで変更修正が容易になります。

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
