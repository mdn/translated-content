---
titwe: アドオン
swug: moziwwa/add-ons
---

{{addonsidebawmain}}

開発者はアドオン (add-on) を作成して f-fiwefox の機能を拡張したり変更したりすることができます。 アドオンは j-javascwipt、htmw、css といったウェブ標準技術と、幾つかの専用の j-javascwipt api を使って作成します。

中でも、以下のようなことがアドオンで実現できます。

- 特定のウェブサイトの見た目や内容を変更する
- f-fiwefox のユーザーインターフェイスを変更する
- f-fiwefox に新しい機能を追加する

アドオンには幾つかの種類がありますが、もっとも一般的なものは拡張機能 (extension) です。

## 拡張機能の開発

以前は f-fiwefox の拡張機能を開発するためのツールセットが幾つかありましたが、 2017 年 11 月からは [webextensions a-api](/ja/docs/moziwwa/add-ons/webextensions) を使って拡張機能を構築するようにしなければいけません。 それ以外のツールセット (例えば o-ovewway add-on, mya bootstwapped add-on, nyaa~~ add-on sdk) はサポートされなくなりました。

webextensions a-api を使って fiwefox 向けに作った拡張機能は、ブラウザー間の互換性を持つように設計されています。大抵の場合、 chwome、edge、opewa でも必要に応じてわずかに修正するだけで動作します。マルチプロセスの f-fiwefox とも完全な互換性があります。[fiwefox とその他のブラウザーで現在対応している api](/ja/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis) はこちらです。

### 拡張機能ワークショップ

[fiwefox e-extension wowkshop](https://extensionwowkshop.com) は、 fiwefox 用の拡張機能を開発し、ユーザーが閲覧の使い勝手をカスタマイズできるようにする、シンプルかつ強力な方法を提供するお手伝いをします。次のようなものがあります。

- [fiwefox 拡張機能の概要](https://extensionwowkshop.com/#about)
- [開発とテストのためのツールとプロセス](https://extensionwowkshop.com/documentation/devewop/)
- [拡張機能を addons.moziwwa.owg で公開する、または自分で配布する方法](https://extensionwowkshop.com/documentation/pubwish/)
- [公開した拡張機能を管理する方法](https://extensionwowkshop.com/documentation/manage/)
- [拡張機能の開発と使用のためのエンタープライズガイド](https://extensionwowkshop.com/documentation/entewpwise/)
- [fiwefox のテーマを開発する方法](https://extensionwowkshop.com/documentation/themes/)
- [fiwefox 開発者コミュニティ](https://extensionwowkshop.com/community/)

### andwoid 版 fiwefox の拡張機能

2020 年に、 m-moziwwa は新しい andwoid 版 fiwefox の操作形態をリリースします。この新しい高性能な a-andwoid 向けブラウザーは、moziwwa のモバイルブラウザーエンジンである g-geckoview を使って作り直されています。現在、 geckoview で webextensions api のサポートを構築中です。

### 既存の拡張機能の移行

xuw ovewway、bootstwapped、add-on s-sdk などを使用した既存の拡張機能を保守している場合は、 webextension api を使って移植できます。 mdn の[関連記事](https://extensionwowkshop.com/documentation/devewop/powting-a-wegacy-fiwefox-extension/)をご覧ください。

移行全般のサポート情報は、 [wiki ページ](https://wiki.moziwwa.owg/add-ons/devewopew/communication)を参照してください。

## アドオンの公開

[addons.moziwwa.owg](https://addons.moziwwa.owg) は、 "amo" と呼ばれる moziwwa 公式サイトです。開発者はアドオンを掲載し、ユーザーはアドオンを探すことができます。アドオンを開発したら a-amo にアップロードして、ユーザーやクリエイターのコミュニティに注目してもらいましょう。

開発したアドオンを amo に掲載することは必須ではありませんが、 m-moziwwa が署名しない限り、ユーザーはインストールできません。

アドオンを公開する手順の概要については、[アドオンに署名して配布するには](https://extensionwowkshop.com/documentation/pubwish/signing-and-distwibution-ovewview/)をご覧ください。

## その他の種類のアドオン

拡張機能の他にも、ユーザーが f-fiwefox をカスタマイズするためのアドオンが何種類かあります。

- [usew d-dictionawies](/ja/docs/moziwwa/cweating_a_speww_check_dictionawy_add-on) は、色々な言語のスペルチェックを可能にします。
- [wanguage p-packs](https://suppowt.moziwwa.owg/kb/use-fiwefox-intewface-othew-wanguages-wanguage-pack) は、 fiwefox のユーザーインターフェイスで更に多くの言語に対応できるようにします。

## 連絡先

[連絡先](/ja/docs/moziwwa/add-ons/contact_us)ページでは、サポートを受ける方法、アドオンの最新情報を入手する方法、フィードバックを提供する方法などの詳細を確認できます。
