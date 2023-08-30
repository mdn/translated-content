---
title: 罫線が表示されない
slug: orphaned/Web/Compatibility_FAQ/No_Border_Line_Shown.html
---

## 概要

他ブラウザで表示されている罫線が、Firefox で表示されない場合があります。

![](0302.jpg)

## 要因

要因の代表例として以下があります。

1. **他ブラウザで独自の CSS が適応されている**
    例えば、Chrome ではブラウザ独自の CSS にて、hr 要素に[background-color](/ja/docs/Web/CSS/background-color)プロパティを指定することができます。
    そのため、Firefox で表示されていない罫線が Chrome では表示されるということが起きてしまいます。
    特に、コンテンツの記述や Firefox の動作が問題になっているわけではありません。

## 解決策

要因の解決策の代表例として以下があります。

1. **他ブラウザで独自の CSS が適応されている**
    Firefox 側のコンテンツの記述、動作に問題はありませんが、下記の方法で統一することが可能です。
    まず、表示させたい要素のインラインに罫線([border-top](/ja/docs/Web/CSS/border-top): thin solid;)を指定します。
    そして、他ブラウザ(この場合は Chrome)で入っている指定をリセット記述([background-color](/ja/docs/Web/CSS/background-color)プロパティを利用)にて非表示にします。

    ```css
    インライン {
      border-top: thin solid;
    }

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #cccccc;
      margin: 1em 0;
      padding: 0;
      background-color: rgb(255,255,255);
    }
    ```

    上記の修正にて、他ブラウザとの互換がとれるようになります。

## メリット

- 他のブラウザでも互換性を維持することができます。
  - 作成者の把握できていないブラウザ独自の装飾をリセットすることで作成時の想定に近いコンテンツが作成できます。

[戻る](/ja/docs/Web/Compatibility_FAQ)
