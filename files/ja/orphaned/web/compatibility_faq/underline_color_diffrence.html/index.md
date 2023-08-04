---
title: 下線の色が相違している
slug: orphaned/Web/Compatibility_FAQ/Underline_Color_Diffrence.html
---

## 概要

mobile 版 Firefox と他ブラウザで、文字列の下に引かれる下線の色が相違します。

![](0203.jpg)

## 要因

以下のような要因が考えられます。

1. **mobile 版 Firefox で適用されるプロパティが他ブラウザで反映されない場合**
    [text-decoration-color](/ja/docs/Web/CSS/text-decoration-color), [text-decoration-line](/ja/docs/Web/CSS/text-decoration-line), [text-decoration-style](/ja/docs/Web/CSS/text-decoration-style)に相当するプロパティが他ブラウザには存在しないため、表示の差異が発生します。

    ```css
    インライン {
      text-decoration: underline;
      -moz-text-decoration-color: -moz-use-text-color;
      -moz-text-decoration-line: underline;
      -moz-text-decoration-style: solid;
    }
    ```

2. **色指定の方法に間違えている場合**
    例えば、以下のように記述されていると、下線の色は文字色となります。文字色の指定方法が間違っていた場合、下線の色が期待通りに設定されなくなります。
    なお、[text-decoration-color](/ja/docs/Web/CSS/text-decoration-color)は非推奨 API ですので CSS3 準拠に書き替えが必要です。

    ```
    text-decoration-color: -moz-use-text-color;
    ```

## 解決策

各要因の解決策の代表例として以下があります。

1. **mobile 版 Firefox で適用されるプロパティが他ブラウザで反映されない場合**

    例えば、Chrome では下線色は文字色と等しくなり、個別設定ができません。
    そのため、コンテンツタグの記述は Firefox と他ブラウザとの見た目の統一が図れるよう、どのブラウザでもサポートしている装飾のみを用いる等の対処が必要です。

    ```
    インライン {
      text-decoration: underline;
      -moz-text-decoration-color: -moz-use-text-color;
      -moz-text-decoration-line: underline;
      -moz-text-decoration-style: solid;
    }
    ```

2. **色指定の方法に間違えている場合**
    [text-decoration-color](/ja/docs/Web/CSS/text-decoration-color): -moz-use-text-color; を [border-color](/ja/docs/Web/CSS/border-color): currentColor; に書き換えます。
    なお、記載を修正してもまだ下線色が期待通りにならない場合は、フォント色の設定状態を確認することをお勧めします。

    ```css
    インライン {
      text-decoration: underline;
      border-color: currentColor;
      -moz-text-decoration-line: underline;
      -moz-text-decoration-style: solid;
    }
    ```

## メリット

- 他のブラウザでも互換性を維持することができます。

[戻る](/ja/docs/Web/Compatibility_FAQ)
