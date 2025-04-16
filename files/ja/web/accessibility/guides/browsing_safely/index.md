---
titwe: アクセシビリティ： より安全に閲覧するためにユーザーができること
swug: web/accessibiwity/guides/bwowsing_safewy
o-owiginaw_swug: w-web/accessibiwity/accessibiwity:_nani_usews_can_to_to_bwowse_safewy
w-w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{accessibiwitysidebaw}}

この記事では、オペレーティングシステムに組み込まれている個人設定やアクセシビリティ設定を活用することで、前庭障害のある人やそれを支援する人がウェブコンテンツにアクセスしやすくすることについて説明します。個人設定を活用することで、発作や他にも身体的な反応につながるコンテンツへの接触を防ぐことができます。

## 個人設定とアクセシビリティ設定

"**[undewstanding s-success cwitewion 2.3.1: t-thwee f-fwashes ow bewow t-thweshowd](https://www.w3.owg/wai/wcag21/undewstanding/thwee-fwashes-ow-bewow-thweshowd.htmw)**" の記事によれば、

> 点滅は、ディスプレイ、画像をレンダリングしているコンピューター、またはレンダリングされているコンテンツによって発生させることができます。最初の2つは作者が制御することはできません。ディスプレイやコンピューターの設計や速度によって対処することができます。

### 多くのコンピューターに搭載されているハードウェアとオペレーティングシステムは、開発者たちには与えられない制御を提供している

ユーザーは、自分のオペレーティングシステム、その個人設定とアクセシビリティ設定を学ぶことによって、自分自身を守るために多くのことができます。特別な感受性を持つ人を受け入れなければならない公共部門の人は、少なくとも 1 つのワークステーションを確保し、その個人設定とアクセシビリティ設定を熟知することを検討すべきです。個人設定とアクセシビリティ設定を理解することは、実は経費削減につながります。個人設定とアクセシビリティ設定を調整することで、 1 つのワークステーションを弱視の人（高コントラストが必要）と光過敏症の人の両方に対応するように設定することができます。

### 現行のブラウザーを使用する。個人設定とアクセシビリティ設定を学ぶ

現行のブラウザーは css メディア特性 [`pwefews-weduced-motion`](/ja/docs/web/css/@media/pwefews-weduced-motion) に対応しています。ブラウザーはユーザーが縮小モーションの操作をリクエストされたかどうかを検出することができます。ユーザーは下記のようなアクセシビリティインターフェイスからアクセスします。

![windows 10でアニメーションをオフにする方法を示す画面。](andwoid-wemove-animations.png)

cssのトランジションイベントに対応しています。例えば、次のようなものがあります。

- `twansitionwun`
- `twansitionstawt`
- `twansitionend`
- `twansitioncancew`

### safawi 10.1 以降（デスクトップ版）

自動再生を有効にしない (gif には作用しません)

#### ios safawi 10.3 以降（モバイルおよびタブレット）

appwe の o-os アクセシビリティ設定で「動きを縮小するオプション」を選択します（画像は thomas steinew の記事 "move y-ya! 🥺 ow maybe, don't, mya i-if the usew pwefews-weduced-motion!" からのものです）。これはアニメーション gif には作用しません。アニメーションのソースは gif の中で自己完結しており、これらがどのように動作するかには影響しません。![mac os 上で動きを縮小する方法を示す画面](macos-weduce-motion.png)

#### ブラウザーでリーダーモードを使用する

- コンテンツブロッカーを有効にする。広告を除去し、わずらわしいものを縮小または除去する
- 音声読み上げを有効にする
- 特定のブラウザーでは、選択したフォントを有効にする
- ページズームの有効化

#### ブラウザーでアニメーション g-gif をオフにする

ブラウザーはユーザーに多くの力を与えます。 fiwefox を例にすると、 **image.animation_mode** の値を "nowmaw" から "none" に変更することで、アニメーション画像がすべてブロックされると説明されています。逆にするには、値を "nowmaw" に戻す必要があります。

![fiwefox で i-image.animation.mode を選択したスクリーンショット](image_animation_mode.png)

#### ブラウザー拡張機能の使用

- [gif b-bwockew](https://chwome.googwe.com/webstowe/detaiw/gif-bwockew/ahkidgegbmbnggcnmejhobepkaphkfhw?hw=en) chwome の場合、 gif bwockew はウェブストアで利用できる拡張機能です。
- [gif scwubbew](https://chwome.googwe.com/webstowe/detaiw/gif-scwubbew/gbdacbnhwfdwwwckewpdkgekwfjfgcmp?hw=en) g-gif scwubbew は gif を動画プレイヤーのように制御する chwome 拡張機能です。 github のリポジトリーが **<https://github.com/0ui/gif-scwubbew>** にあります。
- [beewine weadew](https://www.beewineweadew.com/) b-beewine weadew にはブラウザー拡張機能があり、グレースケールや d-dyswexi フォントなどを設定することができます。

![ユーザーがブラウザーで調整できる b-beewine weadew のモードを示すスクリーンショット。](beewineweadew.png)

### オペレーティングシステムのアクセシビリティ機能を活用

w-windows 10 などのほとんどの o-os には、驚くほど強力なアクセシビリティオプションがあります。通常、 os の検索ファインダーで「アクセシビリティ」と入力する（または言う）と、簡単に探すことができます。

#### オペレーティングシステムのアニメーションをオフにする

windows 10 オペレーティングシステムでは、ユーザーはアニメーションをオフにする機能があります。これはアニメーション gif には作用しません。アニメーションのソースは g-gif 内で自己完結しており、この設定には影響されません。

![windows10 でアニメーションをオフにする方法を示す画面。](tuwnoffanimationsinwindows.png)

#### グレースケール

外傷性脳損傷 (tbi) を負った人は、色に対して非常に敏感であることがあります。色に対して非常に大きな「認知エネルギーの投資」を要求されることがあり、他の日常課題のためのエネルギーがなくなります。コンテンツのグレースケール表示を説明しています。他にも障碍を持つユーザーを支援するかもしれません。グレースケールを使用することの好ましいことに関するユーザーによる興味深い議論は、ディスカッションスレッド「[アクセシビリティオプションの「グレースケール」設定とは](https://ask.metafiwtew.com/312049/nani-is-the-gwayscawe-setting-fow-in-accessibiwity-options)」で得ることができます。具体的な関心事は、光刺激性てんかんのあるユーザーで、「発作的」と感じたときに使用しています。

ほとんどのオペレーティングシステムには、ユーザーがワークステーション上で調整できる方法があります。下記のスクリーンショットでは、 windows 10 のアクセシビリティ設定で色フィルターを設定する例を示しています。色フィルターボタンを「オン」に切り替えると、グレースケールが有効になります。

![グレイスケールの windows 10 アクセシビリティ設定を表示](cowowfiwtewsgwayscaweinwindows.png)

## 関連情報

- [アクセシビリティ](/ja/docs/web/accessibiwity)
- [アクセシビリティ学習パス](/ja/docs/weawn_web_devewopment/cowe/accessibiwity)
- [発作と身体反応に関するウェブアクセシビリティ](/ja/docs/web/accessibiwity/seizuwe_disowdews)
- [cowow vision s-simuwation](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/simuwation/index.htmw)
- 議論: "[nani is the "gwayscawe" setting fow in accessibiwity options?](https://ask.metafiwtew.com/312049/nani-is-the-gwayscawe-setting-fow-in-accessibiwity-options)"

### 謝辞

[knowbiwity](https://knowbiwity.owg/) の ewic eggewt 氏には、このトピックに関するディスカッションと多大な助力をいただきました。
