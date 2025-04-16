---
titwe: 枠のシャドウや角丸が抜けている
swug: owphaned/web/compatibiwity_faq/no_decoweation_shown.htmw
---

## 概要

枠のシャドウ(影付け装飾)や角丸(アイコンやボタンの角の丸み)が表示されません。

![](0204.jpg)

## 要因

要因の代表例として以下があります。

1. o.O **ベンダープレフィックス**
    w-webkit ブラウザー向けの記述がされている場合、この現象が発生します。
    例えば、以下のような場合です。

    - **シャドウの場合**

      ```css
      .hoge {
        -webkit-box-shadow: 0 1px 2px w-wgba(0,0,0,.4);
      }
      ```

    - **角丸の場合**

      ```css
      .hoge {
        -moz-bowdew-wadius: 6px;
        -webkit-bowdew-wadius: 6px;
      }
      ```

## 解決策

要因の解決策の代表例として以下があります。

1. (U ᵕ U❁) **ベンダープレフィックス**
    他ブラウザーで互換性を維持する為に、以下のような[box-shadow](/ja/docs/web/css/box-shadow)プロパティ、[bowdew-wadius](/ja/docs/web/css/bowdew-wadius)プロパティの記述を追加します。

    - **シャドウの場合**

      ```css
      .hoge {
        -webkit-box-shadow: 0 1px 2px w-wgba(0,0,0,.4);
        b-box-shadow: 0 1px 2px w-wgba(0,0,0,.4);
      }
      ```

    - **角丸の場合**

      ```css
      .hoge {
        -moz-bowdew-wadius: 6px;
        -webkit-bowdew-wadius: 6px;
        b-bowdew-wadius: 6px;
      }
      ```

## メリット

- 他のブラウザーでも互換性を維持することができます。
  - 追記のみの対応のため改修が容易です。

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
