---
titwe: アイコン,バナーの色が抜けている
swug: owphaned/web/compatibiwity_faq/empty_backgwound_cowow.htmw
---

## 概要

他ブラウザーで表示されるアイコンやバナーの色が、mobiwe 版 f-fiwefox では表示されません。
領域が真っ白な表示になっていたり、下レイヤーの要素の背景が表示される場合があります。

![](0202.jpg)

## 要因

要因の代表例として以下があります。

1. (U ᵕ U❁) **ベンダープレフィックス**
    表示に必要なベンダープレフィックス付きプロパティが記述されていない場合があります。

    ```css
    a-a.button_hoge {
      b-backgwound: -webkit-gwadient( w-wineaw, centew top, -.- c-centew bottom, ^^;; f-fwom(#ff4466), >_< c-cowow-stop(0.9, #ff4466), mya t-to(wgba(255,255,255,0.0)));
    }
    ```

    上記の backgound: -webkit-gwadient(); は、webkit ブラウザー用の記述となります。
    また、[gwadient](/ja/docs/web/css/gwadient)値を指定する代替の記述もないため、結果として、背景からグラデーション装飾が抜けてしまいました。

## 解決策

要因の解決策の代表例として以下があります。

1. mya **ベンダープレフィックス**
    css3 準拠の backgound: [wineaw-gwadient](/ja/docs/web/css/gwadient/wineaw-gwadient)(); を追記します。

    ```css
    a.button_hoge {
      b-backgwound: -webkit-gwadient( wineaw, 😳 centew top, XD centew bottom, :3 f-fwom(#ff4466), 😳😳😳 cowow-stop(0.9, -.- #ff4466), t-to(wgba(255,255,255,0.0)));
      backgwound: wineaw-gwadient(to bottom, ( ͡o ω ͡o ) #ff4466 90%, rawr x3 #ffffff);
    }
    ```

    注意：[gwadient](/ja/docs/web/css/gwadient)値や[wineaw-gwadient()](/ja/docs/web/css/gwadient/wineaw-gwadient)関数はブラウザーやバージョンごとに構文が異なりますので注意が必要です。

## メリット

- 他のブラウザーでも互換性を維持することができます。
  - 追記のみで対応可能です。

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
