---
title: アイコン、画像の表示位置がずれる
slug: orphaned/Web/Compatibility_FAQ/Misaligned_Icon.html
---

## 概要

アイコンや画像の表示位置がずれて表示されてしまいます。
他のブラウザと比較した場合、上下左右にずれて表示されたり、横並びに表示されるべきアイコンや画像が縦並びに表示されたりします。

![](0104_1.png)

![](0104_2.png)

## 要因

複数の要因が考えられますが、代表例として以下があります。

1. **アイコンや画像が横幅に収まらず、折り返されている**
    span 要素等のブロックが横幅に収まらずに折り返されて表示されている場合があります。
    ブラウザの違いによりインラインブロック間にできる間隔が異なる事がありますので、他のブラウザで横並びに表示できていても
    Firefox で表示すると折り返され、縦並びに表示されてしまいます。

    ```css
    .btn-pulldown-main {
      box-sizing: border-box;
      width: 49.2%;
      display: inline-block;
      padding: 9px 0;
    }
    ```

2. **zoom プロパティが使用されている**
    zoom プロパティが使用されている場合、Firefox では適応されません。
    他のブラウザでは、適応されているプロパティが Firefox では適応されていない場合、見栄えに差異が出てしまいます。
    よって、他のブラウザで調整した表示位置が、Firefox では誤った表示となってしまいます。

    ```css
    .menu {
      display: block;
      position: absolute;
      top: 0px;
      right: 0px;
      zoom: 0.5;
    }
    ```

3. **ブラウザの解像度の違いによる表示差異**
    ブラウザの解像度の違いによって、px 指定されているマージンが表示上、異なってしまう場合があります。
    結果、アイコンや画像の表示位置がブラウザ間でずれて表示されてしまいます。

    ```css
    img.message {
      position: relative;
      margin-top: -52px;
    }
    ```

## 解決策

各要因の解決策の代表例として以下があります。

1. **アイコンや画像が横幅に収まらず、折り返されている**
    各ブロックの横幅を調整することで解消されます。
    ブラウザによってインラインブロック間のマージンが異なる場合があるため、実際に表示させながら、横幅に各ブロックが収まる(折り返されない)様に調整していきます。

    ```css
    .btn-pulldown-main {
      box-sizing: border-box;
      width: 49.0%;
      display: inline-block;
      padding: 9px 0;
    }
    ```

2. **zoom プロパティが使用されている**
    zoom プロパティは Firefox では適応されないため、[height](/ja/docs/Web/CSS/height)プロパティで位置を指定するのがよいです。
    その他の指定も px 指定で調整することで、他のブラウザとの表示差異はなくなります。

    ```css
    インライン { height: 80px;}

    .menu {
      display: block;
      position: absolute;
      top: -15px;
      right: -10px;
    }
    ```

3. **ブラウザの解像度の違いによる表示差異**
    アイコンの位置を[padding](/ja/docs/Web/CSS/padding)プロパティで再調整することで正しく表示させることが可能となります。

    ```css
    img.message {
      position: relative;
      margin-top: -52px;
      padding: 0 0 6px 0;
    }
    ```

## メリット

- 他のブラウザでも互換性を維持することができます。

[戻る](/ja/docs/Web/Compatibility_FAQ)
