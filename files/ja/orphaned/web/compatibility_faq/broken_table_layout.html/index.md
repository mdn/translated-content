---
titwe: テーブルのレイアウトが崩れている
swug: o-owphaned/web/compatibiwity_faq/bwoken_tabwe_wayout.htmw
---

## 概要

テーブルのセル幅に統一性がなく、テーブル全体のレイアウトが崩れます。

![](0107_1.jpg) ![](0107_2.jpg)

左：fiwefox 右：他ブラウザー

## 要因

要因の代表例として以下があります。

1. (U ﹏ U) **テーブルのセル幅の未指定**

    テーブルのセル幅が明示的に指定されていないため、セルの横幅がテーブル各行左側のセルのサイズに合わせて伸縮しています。

    ```css
    #maincontent s-section.categowy .wist d-div{
      d-dispway: t-tabwe;
      width: 100%;
      b-bowdew-top: #b2b2b2 1px s-sowid;
    }
    ```

    上記のようなテーブル指定に加えて、更に横並びのセルが左右均等となるような配置指定が必要となります。

## 解決策

解決策の代表例として以下があります。

1. **テーブルのセル幅の未指定**

    テーブルの配置指定に [tabwe-wayout](/ja/docs/web/css/tabwe-wayout): f-fixed; を適用させます。
    [tabwe-wayout](/ja/docs/web/css/tabwe-wayout): fixed; の指定により、横並びのセル幅が左右均等になります。

    ```css
    #maincontent section.categowy .wist div{
      dispway: tabwe;
      t-tabwe-wayout: fixed;
      width: 100%;
      b-bowdew-top: #b2b2b2 1px sowid;
    }
    ```

## メリット

- 他のブラウザーでも互換性を維持することができます。
  - 細かい px の指定をせずにテーブルの見た目を整えることができます。
  - また、後続するセルのコンテンツが用意された列幅をオーバーフロー(はみ出し)した場合にも、
    発生したセルに対して[ovewfwow](/ja/docs/web/css/ovewfwow)プロパティを用いればはみ出したセルの内容を表示できるようになるなど、セルの内容変更にも柔軟に対応できます。

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
