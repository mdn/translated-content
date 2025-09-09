---
title: www 付きと www なしの URL の選択
short-title: URL における 'www' の使用
slug: Web/URI/Guides/Choosing_between_www_and_non-www_URLs
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

ウェブサイトの管理者の間で繰り返される質問が、 'www' (`www.example.com`) のついた URL と非 'www' (`example.com`) URL のどちらを選択するかです。このページでは、何が最良かについてアドバイスを提供します。

## ドメイン名とは何か

HTTP の URL では、先頭の `http://` または `https://` に続く部分文字列をドメインと呼びます。ドメイン名は、文書が存在するサーバーにホスティングされています。

サーバーは物理的な装置である必要はありません。同じ物理的な装置上に複数のサーバーを配置できます。あるいは複数の装置がひとつのサーバーとして扱われることもあり、協力して回答を生成したり、サーバー間でリクエストの負荷を分散したりします。重要なことは、意味的に*ひとつのドメイン名がひとつのサーバーを表す*ことです。

## では、自身のウェブサイトでどちらかを選択しなければならないのか

- **はい**、ひとつを選択して維持しなければなりません。基準となる場所に応じてどちらを選択するかはあなた次第ですが、どちらかを選択したら、それを維持してください。それにより、ユーザーや検索エンジンから見てウェブサイトが首尾一貫したものになります。これは、常に選択したドメインにリンクする (ウェブサイト内で相対 URL を使用すれば、難しくはないでしょう)、および常に同じドメインへのリンクを (電子メールやソーシャルネットワークなどで) 共有することを含みます。
- **いいえ**、2 つ持つことができます。どちらが公式なドメインであるかについて、一貫性を持って矛盾しないことが重要です。**この公式なドメインは*正規名*と呼ばれます。** すべての絶対パスリンクで正規名を使用するべきです。しかし、それでも他のドメインを機能させることができます。HTTP ではどちらのドメインが正規のものであるかをユーザーや検索エンジンに対して明らかにするとともに、非正規のドメインが機能して想定したページを提供できるようにするための技術が 2 つあります。

従って、正規なドメインとしてひとつ選択してください! 以下の 2 つの技術によって、非正規のドメインも機能させることができます。

## 非正規の URL のための技術

どのウェブサイトが*正規*であるかを選択するための、さまざまな方法があります。

### HTTP 301 リダイレクトを使用する

この場合は非正規ドメインへのリクエストに対して適切な HTTP {{HTTPStatus(301)}} レスポンスを返すために、HTTP リクエストを受けるサーバー (おそらく、www URL 向けと非 www URL 向けは同じでしょう) の設定が必要です。これは、非正規 URL へアクセスしようとしたブラウザーを正規な同等 URL へリダイレクトします。例えば非 www URL を正規なものとして使用することを選択した場合は、すべての www URL を、www をつけない同等の URL にリダイレクトします。

例:

1. サーバーが `http://www.example.org/whaddup` へのリクエストを受けます (正規のドメインが example.org であるとき)。
2. サーバーは `{{HTTPHeader("Location")}}: http://example.org/whaddup` ヘッダーを伴う {{HTTPStatus(301)}} コードのレスポンスを返します。
3. クライアントは正規ドメイン `http://example.org/whatddup` へのリクエストを発行します。

[HTML5 boilerplate project](https://github.com/h5bp/html5-boilerplate) に、[あるドメインから別のドメインへリダイレクトするように Apache を設定する方法](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258) の例があります。

### `<link rel="canonical">` を使用する

ページの正規のアドレスは何かを示す、専用の HTML {{HTMLElement("link")}} 要素をページに追加できます。これは人間向けのページリーダーには影響がありませんが、検索エンジンのクローラーに対してページが実際はどこにあるかを示します。この方法では検索エンジンが同じページで何度もインデックスを作成したり、重複したコンテンツやスパムであると判断されたり、検索エンジンの結果ページでページが排除されたりランクが下がったりすることがなくなります。

このようなタグを追加するときは両方のドメインで同じコンテンツを提供して、どの URL が正規であるかを検索エンジンに示します。先ほどの例では `http://www.example.org/whaddup` が `http://example.org/whaddup` と同じコンテンツを提供していますが、head に {{htmlelement("link")}} 要素を追加します:

```html
<link href="http://example.org/whaddup" rel="canonical" />
```

リダイレクトの場合と異なり、ブラウザーの履歴では非 www URL と www URL が独立した項目であるとみなします。

## どちらでもページを動作させる

これらの技術と併せて、 www つきドメインと www なしドメインの両方で正しく応答するようにサーバーを設定しましょう。ユーザーがブラウザーの URL バーにどちらの URL を入力するかは予測できませんので、これを行うことはよい助言になります。これは正式な場所としてどちらを使用したいかを選択するという問題であり、その結果に応じて他の URL をリダイレクトします。

## 状況を判断する

これは非常に主観的なトピックであり、[自転車置き場](https://bikeshed.com/)問題として考えることもできます。より深くお読みになりたい場合は、以下のリソースをご参照ください。

- [Options for bare domains](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-and-a-records/#options-for-bare-domains) (netlify.com, 2020)
- [WWW vs non-WWW – Which Is Better for WordPress SEO?](https://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/) (wpbeginner.com, 2023)

## 関連情報

- [Stats on what people type in the URL bar](https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/) (2011)
