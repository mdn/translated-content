---
title: アクセシビリティ： より安全に閲覧するためにユーザーができること
slug: Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

この記事では、オペレーティングシステムに組み込まれている個人設定やアクセシビリティ設定を活用することで、前庭障害のある人やそれを支援する人がウェブコンテンツにアクセスしやすくすることについて説明します。個人設定を活用することで、発作や他にも身体的な反応につながるコンテンツへの接触を防ぐことができます。

## 個人設定とアクセシビリティ設定

"**[Understanding Success Criterion 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**" の記事によれば、

> 点滅は、ディスプレイ、画像をレンダリングしているコンピューター、またはレンダリングされているコンテンツによって発生させることができます。最初の2つは作者が制御することはできません。ディスプレイやコンピューターの設計や速度によって対処することができます。

### 多くのコンピューターに搭載されているハードウェアとオペレーティングシステムは、開発者たちには与えられない制御を提供している

ユーザーは、自分のオペレーティングシステム、その個人設定とアクセシビリティ設定を学ぶことによって、自分自身を守るために多くのことができます。特別な感受性を持つ人を受け入れなければならない公共部門の人は、少なくとも 1 つのワークステーションを確保し、その個人設定とアクセシビリティ設定を熟知することを検討すべきです。個人設定とアクセシビリティ設定を理解することは、実は経費削減につながります。個人設定とアクセシビリティ設定を調整することで、 1 つのワークステーションを弱視の人（高コントラストが必要）と光過敏症の人の両方に対応するように設定することができます。

### 現行のブラウザーを使用する。個人設定とアクセシビリティ設定を学ぶ

現行のブラウザーは CSS メディア特性 [`prefers-reduced-motion`](/ja/docs/Web/CSS/@media/prefers-reduced-motion) に対応しています。ブラウザーはユーザーが縮小モーションの操作をリクエストされたかどうかを検出することができます。ユーザーは下記のようなアクセシビリティインターフェイスからアクセスします。

![Windows 10でアニメーションをオフにする方法を示す画面。](android-remove-animations.png)

CSSのトランジションイベントに対応しています。例えば、次のようなものがあります。

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 以降（デスクトップ版）

自動再生を有効にしない (GIF には作用しません)

#### iOS Safari 10.3 以降（モバイルおよびタブレット）

Apple の OS アクセシビリティ設定で「動きを縮小するオプション」を選択します（画像は Thomas Steiner の記事 "Move Ya! Or maybe, don't, if the user prefers-reduced-motion!" からのものです）。これはアニメーション GIF には作用しません。アニメーションのソースは GIF の中で自己完結しており、これらがどのように動作するかには影響しません。![MAC OS 上で動きを縮小する方法を示す画面](macos-reduce-motion.png)

#### ブラウザーでリーダーモードを使用する

- コンテンツブロッカーを有効にする。広告を除去し、わずらわしいものを縮小または除去する
- 音声読み上げを有効にする
- 特定のブラウザーでは、選択したフォントを有効にする
- ページズームの有効化

#### ブラウザーでアニメーション GIF をオフにする

ブラウザーはユーザーに多くの力を与えます。 Firefox を例にすると、 **image.animation_mode** の値を "normal" から "none" に変更することで、アニメーション画像がすべてブロックされると説明されています。逆にするには、値を "normal" に戻す必要があります。

![Firefox で image.animation.mode を選択したスクリーンショット](image_animation_mode.png)

#### ブラウザー拡張機能の使用

- [Gif Blocker](https://chrome.google.com/webstore/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=en) Chrome の場合、 GIF Blocker はウェブストアで利用できる拡張機能です。
- [Gif Scrubber](https://chrome.google.com/webstore/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=en) Gif Scrubber は gif を動画プレイヤーのように制御する Chrome 拡張機能です。 GitHub のリポジトリーが **<https://github.com/0ui/gif-scrubber>** にあります。
- [Beeline Reader](https://www.beelinereader.com/) Beeline Reader にはブラウザー拡張機能があり、グレースケールや Dyslexi フォントなどを設定することができます。

![ユーザーがブラウザーで調整できる Beeline Reader のモードを示すスクリーンショット。](beelinereader.png)

### オペレーティングシステムのアクセシビリティ機能を活用

Windows 10 などのほとんどの OS には、驚くほど強力なアクセシビリティオプションがあります。通常、 OS の検索ファインダーで「アクセシビリティ」と入力する（または言う）と、簡単に探すことができます。

#### オペレーティングシステムのアニメーションをオフにする

Windows 10 オペレーティングシステムでは、ユーザーはアニメーションをオフにする機能があります。これはアニメーション GIF には作用しません。アニメーションのソースは GIF 内で自己完結しており、この設定には影響されません。

![Windows10 でアニメーションをオフにする方法を示す画面。](turnoffanimationsinwindows.png)

#### グレースケール

外傷性脳損傷 (TBI) を負った人は、色に対して非常に敏感であることがあります。色に対して非常に大きな「認知エネルギーの投資」を要求されることがあり、他の日常課題のためのエネルギーがなくなります。コンテンツのグレースケール表示を説明しています。他にも障碍を持つユーザーを支援するかもしれません。グレースケールを使用することの好ましいことに関するユーザーによる興味深い議論は、ディスカッションスレッド「[アクセシビリティオプションの「グレースケール」設定とは](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)」で得ることができます。具体的な関心事は、光刺激性てんかんのあるユーザーで、「発作的」と感じたときに使用しています。

ほとんどのオペレーティングシステムには、ユーザーがワークステーション上で調整できる方法があります。下記のスクリーンショットでは、 Windows 10 のアクセシビリティ設定で色フィルターを設定する例を示しています。色フィルターボタンを「オン」に切り替えると、グレースケールが有効になります。

![グレイスケールの Windows 10 アクセシビリティ設定を表示](colorfiltersgrayscaleinwindows.png)

## 関連情報

- [アクセシビリティ](/ja/docs/Web/Accessibility)
- [アクセシビリティ学習パス](/ja/docs/Learn/Accessibility)
- [発作と身体反応に関するウェブアクセシビリティ](/ja/docs/Web/Accessibility/Seizure_disorders)
- [Color vision simulation](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- 議論: "[What is the "grayscale" setting for in accessibility options?](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)"

### 謝辞

[Knowbility](https://knowbility.org/) の Eric Eggert 氏には、このトピックに関するディスカッションと多大な助力をいただきました。
