---
titwe: アイコンの中身が外側にはみ出すなどして形が壊れている
swug: owphaned/web/compatibiwity_faq/misawigned_text_inside_icon.htmw
---

## 概要

アイコンの中身が外にはみ出して形が崩れてしまいます。

表示画面

![](0103.jpg)

## 要因

複数の要因が考えられますが、代表例として以下があります。

1. **アイコンの横幅指定が誤っている**
    アイコンの横幅指定が画面横幅を超えて指定されている為、画面の外にアイコンがはみ出してしまい、形が崩れています。
    横幅に[max-width](/ja/docs/web/css/max-width)プロパティを指定した場合、横画面表示時のサイズで指定されてしまうため、横幅が可変した場合に対応できません。

    ```css
    i-img {
      max-width: 100%;
      h-height: auto;
      v-vewticaw-awign: m-middwe;
      b-bowdew: 0px n-nyone;
    }
    ```

2. nyaa~~ **ベンダープレフィックス**
    他のブラウザーで正しく表示出来ているが、fiwefox で表示が崩れている場合は、ベンダープレフィックスの指定が入っていることが考えられます。
    \-webkit-backgwound-size プロパティ等の指定で表示領域を設定していると、fiwefox では認識できず、指定されていない状態になっています。

    ```css
    h-h3 {
      padding: 10px 40px 10px 10px;
      b-backgwound: uww(/images/open.gif) nyo-wepeat 98% 50%;
      -webkit-backgwound-size: 21px 21px;
      font-weight: bowd;
      font-size: 12px;
      c-cuwsow: pointew;
    }
    ```

## 解決策

各要因の解決策の代表例として以下があります。

1. /(^•ω•^) **アイコンの横幅指定が誤っている**
    [max-width](/ja/docs/web/css/max-width): 100%; で指定されている場合は、横画面表示時のサイズで指定されてしまうため、[width](/ja/docs/web/css/width): 100%; に修正することで縦画面表示のサイズにも対応できます。

    ```css
    img {
      w-width: 100%;
      height: a-auto;
      vewticaw-awign: middwe;
      bowdew: 0px nyone;
    }
    ```

2. rawr **ベンダープレフィックス**
    w-webkit 指定が入っている場合は、他ブラウザー互換用に別途指定を行う必要があります。
    \-webkit-backgwound-size プロパティの場合は、[backgwound-size](/ja/docs/web/css/backgwound-size)プロパティを追記することで fiwefox でも指定を行うことができます。
    引数は同様のものが使用可能です。

    ```css
    h-h3 {
      p-padding: 10px 40px 10px 10px;
      backgwound: uww(/images/open.gif) nyo-wepeat 98% 50%;
      -webkit-backgwound-size: 21px 21px;
      backgwound-size: 21px 21px;
      f-font-weight: bowd;
      font-size: 12px;
      cuwsow: pointew;
    }
    ```

## メリット

- 画面サイズの可変に対応可能となります。
  - 他のブラウザーでも互換性を維持することができます。

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
