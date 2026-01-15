---
title: 安全でないパスワード
slug: Web/Security/Authentication/Passwords
original_slug: Web/Security/Insecure_passwords
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

HTTP を通じてログインフォームを提供することは、ユーザーのパスワードを暴くための広範にわたる攻撃に対して特に危険です。ネットワークの盗聴者は、ネットワークを覗き見たり、転送によって提供されたページを変更したりしてユーザーのパスワードを盗むことができます。

[HTTPS](/ja/docs/Glossary/HTTPS) プロトコルは、ネットワーク上での盗聴（機密性）や改ざん（完全性）といった脅威から、ユーザーのデータを保護できるように設計されています。ユーザーのデータを扱うウェブサイトは、ユーザーを攻撃者から守るために HTTPS を使用してください。 HTTPS を使わなければ、ユーザーの情報（ログインの資格情報など）が盗まれるのは当たり前になってしまいます。このことを [Firesheep](https://codebutler.github.io/firesheep/) が証明したのは有名です。

この問題を修正するためには、 [TLS](/ja/docs/Glossary/TLS) 証明書をサーバーにインストールし構成してください。様々なベンダーが無料または有料の証明書を提供しています。クラウドプラットフォームを使用しているのであれば、 HTTPS を有効にする方法を独自に持っているかもしれません。

## パスワードの使い回しに関するメモ

ウェブサイトがユーザー名とパスワードを求めても、実際には微妙なデータを保存しないことがあります。例えば、あるニュースサイトがユーザーが読み返したい記事を保存しても、ユーザーに関する他のデータを保存しない場合などです。ニュースサイトのウェブ開発者は、サイトやユーザーの資格情報を安全にする必要があるとはあまり考えないかもしれません。

残念ながら、[パスワードの使い回しは大きな問題](https://www.lightbluetouchpaper.org/2011/02/09/measuring-password-re-use-empirically/)です。ユーザーは複数のサイト (ニュースサイト、SNS、メールサービス、銀行) で同じパスワードを使用します。つまり、サイトが管理するユーザー名とパスワードに何者かがアクセスしたところで、自分たちに大きなリスクがあると思えなくとも、銀行のウェブサイトでも同じパスワードでログインしているユーザーにとっては非常に大きなリスクなのです。攻撃者はより賢くなっており、一つのサイトでユーザー名とパスワードの組を盗んだ後には、より金目のあるサイトに同じ組でログインできないか試しているのです。

## 関連情報

- [No More Passwords over HTTP, Please!](https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/) — detailed blog post with more information, and FAQ.
