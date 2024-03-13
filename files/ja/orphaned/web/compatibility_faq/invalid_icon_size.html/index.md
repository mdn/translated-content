---
title: アイコン、画像が期待と異なるサイズで表示される
slug: orphaned/Web/Compatibility_FAQ/Invalid_Icon_Size.html
---

## 概要

アイコンや画像が期待と異なるサイズで表示されます。
他のブラウザと比較した場合や、同ページで複数使用されている同アイコンで比較した場合に、画像が小さく表示されたり、大きく表示されたりします。
結果、他の要素と並んだ場合に不自然な表示となってしまいます。

表示画面

![](0105.jpg)

## 要因

要因の代表例として以下があります。

1. **ベンダープレフィックス**
    他のブラウザで正しく表示出来ている場合でも Firefox で表示が崩れている場合は、ベンダープレフィックスの指定が入っていることがあります。
    \-webkit-linear-gradient()関数等の指定で表示領域を設定していると、Firefox では認識できず、指定されていない状態になっています。

    ```css
    input[type="submit"] {
      position: absolute;
      right: 15px;
      width: 40px;
      border-radius: 5px;
      padding: 6px 19px;
      margin-top: 10px;
      background: url(../images/icon_serach.png) no-repeat center center, -webkit-linear-gradient(top, #ffffff 1%, #e5c21f 2%, #e6a227 90%, #e6a026);
    }
    ```

2. **各アイコンの配置指定方法が統一されていない**
    各アイコンの配置指定方法が統一されていない為、各アイコンの表示状態が異なってしまう場合があります。
    インラインでの装飾指定とそれぞれのアイコンにおける%指定や float などの指定が統一していない場合に、ブラウザによっては、表示サイズや配置が異なってしまうことがあります。

    ```css
    インライン {background: url('/images/shared/arw_r_black_01.png') no-repeat scroll 97.5% 50% #EFEFEF !important;}
    インライン {float: right; clear: both;}
    ```

## 解決策

各要因の解決策の代表例として以下があります。

1. **ベンダープレフィックス**
    webkit 指定が入っている場合は、他ブラウザ互換用に別途指定を行う必要があります。
    \-webkit-linear-gradient()関数の場合は、[linear-gradient()](/ja/docs/Web/CSS/linear-gradient)関数を追記することで Firefox でも指定を行うことができます。
    ただし、-webkit-linear-gradient()関数と[linear-gradient()](/ja/docs/Web/CSS/linear-gradient)関数は、伴う引数が異なる為、例に従って記載してください。

    ```css
    input[type="submit"] {
      position: absolute;
      right: 15px;
      width: 40px;
      border-radius: 5px;
      padding: 6px 19px;
      margin-top: 10px;
      background: url(../images/icon_serach.png) no-repeat center center, -webkit-linear-gradient(top, #ffffff 1%, #e5c21f 2%, #e6a227 90%, #e6a026);
      background: url(../images/icon_serach.png) no-repeat center center, linear-gradient(to top, #ffffff 1%, #e5c21f 2%, #e6a227 90%, #e6a026);
    }
    ```

2. **各アイコンの配置指定方法が統一されていない**
    各アイコンの配置指定方法を統一することで解消されます。
    インラインで各アイコンの指定を行うと統一できていない場合があるので、別途 CSS ファイルを作成し、統一した指定を定義するとよいでしょう。

## メリット

- 他のブラウザでも互換性を維持することができます。
  - HTML 全体の指定を出来る限り統一し、CSS ファイルで定義することで変更修正が容易になります。

[戻る](/ja/docs/Web/Compatibility_FAQ)
