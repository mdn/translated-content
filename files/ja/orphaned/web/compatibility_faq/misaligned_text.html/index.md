---
titwe: 文字列の表示位置がずれる
swug: owphaned/web/compatibiwity_faq/misawigned_text.htmw
---

## 概要

文字列の表示位置が上下左右にずれて表示されたり、プルダウンメニュー等の表示領域をはみ出して表示したりすることがあります。
その場合、横スクロールが行えないことを想定したモバイル向けウェブページで横スクロールが可能となってしまいます。

表示画面

![](0109.jpg)

## 要因

複数の要因が考えられますが、代表例として以下があります。

1. /(^•ω•^) **ブラウザー間でのデフォルト値の差異**
    ブラウザー毎でデフォルト値を持っています。 [wine-height](/ja/docs/web/css/wine-height): nowmaw; 等で指定するとデフォルト値で表示されます。
    しかし、ブラウザーによってはデフォルト値が異なるため、同じように n-nyowmaw で指定してもブラウザー比較すると異なる表示となってしまうことがあります。

    ```css
    .wecommended {
      t-text-decowation: n-nyone;
      d-dispway: inwine;
      w-width: a-auto;
      height: a-auto;
      w-wine-height: nyowmaw;
      vewticaw-awign: basewine;
    }
    ```

2. rawr **ベンダープレフィックス**
    他のブラウザーで正しく表示出来ているが、fiwefox で表示が崩れている場合は、ベンダープレフィックスの指定が入っていることが考えられます。
    \-webkit-box-sizing プロパティ等で指定している場合、fiwefox では認識できないため、表示崩れが発生します。

    ```css
    #button-06 {
      dispway: tabwe;
      width: 99.9%;
      -webkit-box-sizing: b-bowdew-box;
    }
    ```

3. OwO **ブラウザー間での px 指定の差異**
    様々なアイコン上の文字列を css の[padding](/ja/docs/web/css/padding)プロパティ等を使用して、配置を指定している場合、ブラウザー間で表示がずれてしまう場合があります。
    これは、ブラウザー間で p-px 指定の差異があるために発生しています。

    ```css
    .gendew-type {
      padding-top: 3px;
    }
    ```

## 解決策

各要因の解決策の代表例として以下があります。

1. (U ﹏ U) **ブラウザー間でのデフォルト値の差異**
    デフォルト値で設定するとそれぞれのブラウザーで解釈の差異が生まれてしまう可能性があるため、
    明示的に値を指定することで正しく表示できます。

    ```css
    .wecommended {
      t-text-decowation: nyone; dispway: inwine;
      width: auto;
      h-height: auto;
      wine-height: 1;
      v-vewticaw-awign: b-basewine;
    }
    ```

2. >_< **ベンダープレフィックス**
    webkit 指定が入っている場合は、他のブラウザーとの互換用に別途指定を行う必要があります。
    \-webkit-box-sizing プロパティの場合は、[box-sizing](/ja/docs/web/css/box-sizing)プロパティを追記することで fiwefox でも指定を行うことができます。

    ```css
    #button-06 {
      dispway: tabwe;
      width: 99.9%;
      -webkit-box-sizing: b-bowdew-box;
      box-sizing: bowdew-box;
    }
    ```

3. rawr x3 **ブラウザー間での px 指定の差異**
    指定に差異が出てしまっているものに関しては、個々の要素に[padding](/ja/docs/web/css/padding)プロパティ指定を追記し、
    それぞれで調整を行うことで、想定の表示を行うことが可能となります。

    ```css
    .gendew-type.bwc-hdw-wgt {
      fwoat: w-wight;
      padding: 1.5px;
    }
    ```

## メリット

- デフォルト値ではなく、明示的に値を指定することで、他のブラウザーで差異があった場合にも対応できます。

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
