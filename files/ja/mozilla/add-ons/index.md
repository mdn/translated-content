---
title: アドオン
slug: Mozilla/Add-ons
---

{{AddonSidebarMain}}

開発者はアドオン (add-on) を作成して Firefox の機能を拡張したり変更したりすることができます。 アドオンは JavaScript、HTML、CSS といったウェブ標準技術と、幾つかの専用の JavaScript API を使って作成します。

中でも、以下のようなことがアドオンで実現できます。

- 特定のウェブサイトの見た目や内容を変更する
- Firefox のユーザーインターフェイスを変更する
- Firefox に新しい機能を追加する

アドオンには幾つかの種類がありますが、もっとも一般的なものは拡張機能 (extension) です。

## 拡張機能の開発

以前は Firefox の拡張機能を開発するためのツールセットが幾つかありましたが、 2017 年 11 月からは [WebExtensions API](/ja/docs/Mozilla/Add-ons/WebExtensions) を使って拡張機能を構築するようにしなければいけません。 それ以外のツールセット (例えば overlay add-on, bootstrapped add-on, add-on SDK) はサポートされなくなりました。

WebExtensions API を使って Firefox 向けに作った拡張機能は、ブラウザー間の互換性を持つように設計されています。大抵の場合、 Chrome、Edge、Opera でも必要に応じてわずかに修正するだけで動作します。マルチプロセスの Firefox とも完全な互換性があります。[Firefox とその他のブラウザーで現在対応している API](/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) はこちらです。

### 拡張機能ワークショップ

[Firefox Extension Workshop](https://extensionworkshop.com) は、 Firefox 用の拡張機能を開発し、ユーザーが閲覧の使い勝手をカスタマイズできるようにする、シンプルかつ強力な方法を提供するお手伝いをします。次のようなものがあります。

- [Firefox 拡張機能の概要](https://extensionworkshop.com/#about)
- [開発とテストのためのツールとプロセス](https://extensionworkshop.com/documentation/develop/)
- [拡張機能を addons.mozilla.org で公開する、または自分で配布する方法](https://extensionworkshop.com/documentation/publish/)
- [公開した拡張機能を管理する方法](https://extensionworkshop.com/documentation/manage/)
- [拡張機能の開発と使用のためのエンタープライズガイド](https://extensionworkshop.com/documentation/enterprise/)
- [Firefox のテーマを開発する方法](https://extensionworkshop.com/documentation/themes/)
- [Firefox 開発者コミュニティ](https://extensionworkshop.com/community/)

### Android 版 Firefox の拡張機能

2020 年に、 Mozilla は新しい Android 版 Firefox の操作形態をリリースします。この新しい高性能な Android 向けブラウザーは、Mozilla のモバイルブラウザーエンジンである GeckoView を使って作り直されています。現在、 GeckoView で WebExtensions API のサポートを構築中です。

### 既存の拡張機能の移行

XUL overlay、bootstrapped、add-on SDK などを使用した既存の拡張機能を保守している場合は、 WebExtension API を使って移植できます。 MDN の[関連記事](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/)をご覧ください。

移行全般のサポート情報は、 [Wiki ページ](https://wiki.mozilla.org/Add-ons/developer/communication)を参照してください。

## アドオンの公開

[Addons.mozilla.org](https://addons.mozilla.org) は、 "AMO" と呼ばれる Mozilla 公式サイトです。開発者はアドオンを掲載し、ユーザーはアドオンを探すことができます。アドオンを開発したら AMO にアップロードして、ユーザーやクリエイターのコミュニティに注目してもらいましょう。

開発したアドオンを AMO に掲載することは必須ではありませんが、 Mozilla が署名しない限り、ユーザーはインストールできません。

アドオンを公開する手順の概要については、[アドオンに署名して配布するには](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)をご覧ください。

## その他の種類のアドオン

拡張機能の他にも、ユーザーが Firefox をカスタマイズするためのアドオンが何種類かあります。

- [User dictionaries](/ja/docs/Mozilla/Creating_a_spell_check_dictionary_add-on) は、色々な言語のスペルチェックを可能にします。
- [Language packs](https://support.mozilla.org/kb/use-firefox-interface-other-languages-language-pack) は、 Firefox のユーザーインターフェイスで更に多くの言語に対応できるようにします。

## 連絡先

[連絡先](/ja/docs/Mozilla/Add-ons/Contact_us)ページでは、サポートを受ける方法、アドオンの最新情報を入手する方法、フィードバックを提供する方法などの詳細を確認できます。
