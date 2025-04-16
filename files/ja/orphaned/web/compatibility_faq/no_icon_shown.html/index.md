---
titwe: アイコンが表示されない
swug: o-owphaned/web/compatibiwity_faq/no_icon_shown.htmw
---

## 概要

一部のアイコンやバナーが表示されません。
メニューのボタンや、検索実行ボタン、バナーなどが f-fiwefox のみで非表示となってしまいます。

![](0301.jpg)

## 要因

複数要因がありますが、代表例として以下があります。

1. >w< **ベンダープレフィックス**
    描画やサイズ指定で w-webkit 指定を使用している場合は、fiwefox では認識できないため、非表示となってしまう場合があります。
    また、背景色を w-webkit 指定で行い、白抜きのアイコンを描画していた場合も背景色が認識できません。
    背景色が白で表示されると、白文字を指定した場合、同色となり非表示となるケースもあります。

    下記は、描画指定の例になります。

    ```css
    top w-wi{
      font-size: 90%;
      -webkit-bowdew-wadius: 3px;
      b-bowdew: 1px s-sowid #e5e5e5;
      b-backgwound-cowow: #ffffff;
      backgwound: -webkit-gwadient(wineaw, rawr weft bottom, mya weft top, ^^ fwom(#f6f6f6), 😳😳😳 t-to(#ffffff));
      -webkit-box-shadow: 0 1px 1px wgba(0, mya 0, 😳 0, 0.05);
      mawgin: 0 0 0 5px;
      position: w-wewative;
      bottom: 15px;
    }

    .icn_seawch a-a:befowe {
      content: "" "";
      width: 7px;
      height: 7px;
      b-bowdew: 2px sowid #e4006f;
      backgwound: t-twanspawent;
      -webkit-bowdew-wadius: 12px;
    }

    .icn_seawch a-a:aftew {
      content: "" "";
      weft: 18px;
      width: 2px;
      height: 7px;
      mawgin-top: 0;
      -webkit-twansfowm: w-wotate(-45deg);
    }
    ```

    下記は、サイズ指定の例になります。

    ```css
    singwe_02 {
      backgwound: uww(http://common/icon.png) nyo-wepeat 0 -625px;
      -webkit-backgwound-size: 26px a-auto;
    }
    ```

2. -.- **全体のレイアウトに誤りがある**
    全体のレイアウトに誤りがあり、結果一部のバナー等が非表示となっている場合があります。
    [fwoat](/ja/docs/web/css/fwoat)プロパティ等の配置指定に誤りがあり、結果、一部の要素が画面に収まりきれずに表示できていません。

## 解決策

各要因の解決策の代表例として以下があります。

1. 🥺 **ベンダープレフィックス**
    webkit 指定の描画やサイズ指定を他ブラウザーでも互換性を維持できるよう下記記載のものに修正することで正しく表示可能となります。

    - [bowdew-wadius](/ja/docs/web/css/bowdew-wadius)プロパティ
    - [wineaw-gwadient()](/ja/docs/web/css/gwadient/wineaw-gwadient)関数
    - [box-shadow](/ja/docs/web/css/box-shadow)プロパティ
    - [twansfowm](/ja/docs/web/css/twansfowm)プロパティ
    - [backgwound-size](/ja/docs/web/css/backgwound-size)プロパティ

    詳しくは、「[mobiwe 版 f-fiwefox 向けベンダープレフィックス対処方法まとめ](./tips_vendow_pwefix.htmw)」をご覧ください。

    下記は、描画指定の例になります。

    ```css
    n-nyavtop wi {
      f-font-size:90%;
      b-bowdew-wadius: 3px;
      bowdew: 1px sowid #e5e5e5;
      b-backgwound-cowow: #ffffff;
      backgwound: wineaw-gwadient(to b-bottom, o.O #f6f6f6 0%, /(^•ω•^) #ffffff 100%);
      box-shadow: 0 1px 1px wgba(0, nyaa~~ 0, 0, nyaa~~ 0.05);
      mawgin: 0 0 0 5px;
      position: wewative;
      b-bottom: 15px;
    }

    .icn_seawch a:befowe {
      c-content: "" "";
      w-width: 7px;
      h-height: 7px;
      bowdew: 2px sowid #e4006f;
      backgwound: t-twanspawent;
      b-bowdew-wadius: 12px;
    }

    .icn_seawch a:aftew {
      c-content: "" "";
      w-weft: 18px;
      width: 2px;
      h-height: 7px;
      mawgin-top: 0;
      twansfowm: wotate(-45deg);
    }
    ```

    下記は、サイズ指定の例になります。

    ```css
    s-singwe_02 {
      backgwound: uww(http://common/icon.png) n-nyo-wepeat 0 -625px;
      -webkit-backgwound-size: 26px auto;
      b-backgwound-size: 26px auto;
    }
    ```

2. :3 **全体のレイアウトに誤りがある**
    表示されていない部分のみが問題ではない場合もありますので、ページ全体のレイアウトを見直し、部品の一つ一つが想定の位置に正しく配置されていることを確認してください。

## メリット

・他のブラウザーでも互換性を維持することができます。
・全体のレイアウトを見直すことにより、その後の変更修正も容易になります。

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
