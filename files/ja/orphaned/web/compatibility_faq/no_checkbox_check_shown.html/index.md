---
title: チェックボックスのレ点が表示されない
slug: orphaned/Web/Compatibility_FAQ/No_Checkbox_Check_Shown.html
---

## 概要

チェックボックスをタップし、チェックを入れる操作を行ってもレ点が表示されません。

![](0303.jpg)

## 要因

要因の代表例として以下があります。

1. **ベンダープレフィックス**
    チェックボックスの装飾を webkit 指定で行っている場合、Firefox では認識できないため、正しく表示が行えません。
    または、Firefox 用に[linear-gradient()](/ja/docs/Web/CSS/linear-gradient)関数を記述している場合は、引数の指定方法が-webkit-linear-gradient()関数と異なるため、注意が必要です。

    ```css
    input[type="checkbox"]:checked {
      background-image: url(../contents/bg_08.png), -webkit-linear-gradient(top, #00397b 0%, #01afeb 100%);
      background-image: url(../contents/bg_08.png), linear-gradient(top, #00397b 0%, #01afeb 100%);
    }
    ```

## 解決策

要因の解決策の代表例として以下があります。

1. **ベンダープレフィックス**
    \-webkit-linear-gradient()関数の第一引数に「top」が指定されている時に、他ブラウザとの互換性を維持するために[linear-gradient()](/ja/docs/Web/CSS/linear-gradient)関数を使用します。
    その場合、第一引数には例のように「to top」を指定することで正しく表示されます。

    ```css
    input[type="checkbox"]:checked  {
      background-image: url(../contents/bg_08.png), -webkit-linear-gradient(top, #00397b 0%, #01afeb 100%);
      background-image: url(../contents/bg_08.png), linear-gradient(to top, #00397b 0%, #01afeb 100%);
    }
    ```

## メリット

- プロパティを正しく使用することで各ブラウザでの表示差異がなくなります。

[戻る](/ja/docs/Web/Compatibility_FAQ)
