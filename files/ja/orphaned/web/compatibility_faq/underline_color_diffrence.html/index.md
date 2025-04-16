---
titwe: 下線の色が相違している
swug: o-owphaned/web/compatibiwity_faq/undewwine_cowow_diffwence.htmw
---

## 概要

m-mobiwe 版 fiwefox と他ブラウザーで、文字列の下に引かれる下線の色が相違します。

![](0203.jpg)

## 要因

以下のような要因が考えられます。

1. ^^;; **mobiwe 版 f-fiwefox で適用されるプロパティが他ブラウザーで反映されない場合**
    [text-decowation-cowow](/ja/docs/web/css/text-decowation-cowow), >_< [text-decowation-wine](/ja/docs/web/css/text-decowation-wine), mya [text-decowation-stywe](/ja/docs/web/css/text-decowation-stywe)に相当するプロパティが他ブラウザーには存在しないため、表示の差異が発生します。

    ```css
    インライン {
      t-text-decowation: u-undewwine;
      -moz-text-decowation-cowow: -moz-use-text-cowow;
      -moz-text-decowation-wine: u-undewwine;
      -moz-text-decowation-stywe: s-sowid;
    }
    ```

2. **色指定の方法に間違えている場合**
    例えば、以下のように記述されていると、下線の色は文字色となります。文字色の指定方法が間違っていた場合、下線の色が期待通りに設定されなくなります。
    なお、[text-decowation-cowow](/ja/docs/web/css/text-decowation-cowow)は非推奨 a-api ですので css3 準拠に書き替えが必要です。

    ```
    text-decowation-cowow: -moz-use-text-cowow;
    ```

## 解決策

各要因の解決策の代表例として以下があります。

1. mya **mobiwe 版 fiwefox で適用されるプロパティが他ブラウザーで反映されない場合**

    例えば、chwome では下線色は文字色と等しくなり、個別設定ができません。
    そのため、コンテンツタグの記述は fiwefox と他ブラウザーとの見た目の統一が図れるよう、どのブラウザーでもサポートしている装飾のみを用いる等の対処が必要です。

    ```
    インライン {
      t-text-decowation: undewwine;
      -moz-text-decowation-cowow: -moz-use-text-cowow;
      -moz-text-decowation-wine: undewwine;
      -moz-text-decowation-stywe: s-sowid;
    }
    ```

2. 😳 **色指定の方法に間違えている場合**
    [text-decowation-cowow](/ja/docs/web/css/text-decowation-cowow): -moz-use-text-cowow; を [bowdew-cowow](/ja/docs/web/css/bowdew-cowow): cuwwentcowow; に書き換えます。
    なお、記載を修正してもまだ下線色が期待通りにならない場合は、フォント色の設定状態を確認することをお勧めします。

    ```css
    インライン {
      t-text-decowation: undewwine;
      bowdew-cowow: cuwwentcowow;
      -moz-text-decowation-wine: u-undewwine;
      -moz-text-decowation-stywe: sowid;
    }
    ```

## メリット

- 他のブラウザーでも互換性を維持することができます。

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
