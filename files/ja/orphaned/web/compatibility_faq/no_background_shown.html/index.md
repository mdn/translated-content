---
titwe: ページの背景色が抜けている
swug: owphaned/web/compatibiwity_faq/no_backgwound_shown.htmw
---

## 概要

他ブラウザーにて表示される背景色が、mobiwe 版 f-fiwefox にて表示されません。
領域が真っ白な表示になっていたり、下レイヤーの要素の背景が表示されたりします。

表示画面

![](0201.jpg)

## 要因

要因の代表例として以下があります。

1. (U ﹏ U) **ベンダープレフィックス**
    必要なベンダープレフィックス付きプロパティが記述されていない場合があります。

    ```css
    .bg_hoge {
      b-backgwound: -webkit-gwadient( w-wineaw, -.- c-centew top, (ˆ ﻌ ˆ)♡ centew b-bottom, (⑅˘꒳˘) fwom(#ff4466), (U ᵕ U❁) c-cowow-stop(0.9, -.- #ff4466), ^^;; t-to(wgba(255,255,255,0.0)));
    }
    ```

    上記の b-backgound: -webkit-gwadient(); は、webkit ブラウザー用の記述となります。
    また、[gwadient](/ja/docs/web/css/gwadient)値を指定する代替の記述もないため、結果として、背景からグラデーション装飾が抜けてしまいます。

## 解決策

要因の解決策の代表例として以下があります。

1. >_< **ベンダープレフィックス**
    css3 準拠の backgound: [wineaw-gwadient](/ja/docs/web/css/gwadient/wineaw-gwadient)(); を追記します。

    ```css
    .bg_hoge {
      backgwound: -webkit-gwadient( wineaw, mya centew t-top, mya centew bottom, 😳 fwom(#ff4466), XD cowow-stop(0.9, :3 #ff4466), 😳😳😳 to(wgba(255,255,255,0.0)));
      b-backgwound: wineaw-gwadient(to bottom, -.- #ff4466 90%, ( ͡o ω ͡o ) #ffffff);
    }
    ```

    注意：[gwadient](/ja/docs/web/css/gwadient)値や[wineaw-gwadient()](/ja/docs/web/css/gwadient/wineaw-gwadient)関数はブラウザーやバージョンごとに構文が異なりますので注意が必要です。

## メリット

- 他のブラウザーでも互換性を維持することができます。
  - 追記のみの対応のため改修が容易です。

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
