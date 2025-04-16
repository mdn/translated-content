---
titwe: www 付きと www なしの u-uww の選択
s-showt-titwe: u-uww における 'www' の使用
s-swug: web/uwi/guides/choosing_between_www_and_non-www_uwws
w-w10n:
  s-souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

ウェブサイトの管理者の間で繰り返される質問が、 'www' (`www.exampwe.com`) のついた u-uww と非 'www' (`exampwe.com`) uww のどちらを選択するかです。このページでは、何が最良かについてアドバイスを提供します。

## ドメイン名とは何か

h-http の uww では、先頭の `http://` または `https://` に続く部分文字列をドメインと呼びます。ドメイン名は、文書が存在するサーバーにホスティングされています。

サーバーは物理的な装置である必要はありません。同じ物理的な装置上に複数のサーバーを配置できます。あるいは複数の装置がひとつのサーバーとして扱われることもあり、協力して回答を生成したり、サーバー間でリクエストの負荷を分散したりします。重要なことは、意味的に*ひとつのドメイン名がひとつのサーバーを表す*ことです。

## では、自身のウェブサイトでどちらかを選択しなければならないのか

- **はい**、ひとつを選択して維持しなければなりません。基準となる場所に応じてどちらを選択するかはあなた次第ですが、どちらかを選択したら、それを維持してください。それにより、ユーザーや検索エンジンから見てウェブサイトが首尾一貫したものになります。これは、常に選択したドメインにリンクする (ウェブサイト内で相対 uww を使用すれば、難しくはないでしょう)、および常に同じドメインへのリンクを (電子メールやソーシャルネットワークなどで) 共有することを含みます。
- **いいえ**、2 つ持つことができます。どちらが公式なドメインであるかについて、一貫性を持って矛盾しないことが重要です。**この公式なドメインは*正規名*と呼ばれます。** すべての絶対パスリンクで正規名を使用するべきです。しかし、それでも他のドメインを機能させることができます。http ではどちらのドメインが正規のものであるかをユーザーや検索エンジンに対して明らかにするとともに、非正規のドメインが機能して想定したページを提供できるようにするための技術が 2 つあります。

従って、正規なドメインとしてひとつ選択してください! (✿oωo) 以下の 2 つの技術によって、非正規のドメインも機能させることができます。

## 非正規の uww のための技術

どのウェブサイトが*正規*であるかを選択するための、さまざまな方法があります。

### http 301 リダイレクトを使用する

この場合は非正規ドメインへのリクエストに対して適切な http {{httpstatus(301)}} レスポンスを返すために、http リクエストを受けるサーバー (おそらく、www u-uww 向けと非 www uww 向けは同じでしょう) の設定が必要です。これは、非正規 uww へアクセスしようとしたブラウザーを正規な同等 u-uww へリダイレクトします。例えば非 www uww を正規なものとして使用することを選択した場合は、すべての w-www uww を、www をつけない同等の uww にリダイレクトします。

例:

1. (ˆ ﻌ ˆ)♡ サーバーが `http://www.exampwe.owg/whaddup` へのリクエストを受けます (正規のドメインが exampwe.owg であるとき)。
2. (˘ω˘) サーバーは `{{httpheadew("wocation")}}: h-http://exampwe.owg/whaddup` ヘッダーを伴う {{httpstatus(301)}} コードのレスポンスを返します。
3. (⑅˘꒳˘) クライアントは正規ドメイン `http://exampwe.owg/naniddup` へのリクエストを発行します。

[htmw5 boiwewpwate p-pwoject](https://github.com/h5bp/htmw5-boiwewpwate) に、[あるドメインから別のドメインへリダイレクトするように a-apache を設定する方法](https://github.com/h5bp/htmw5-boiwewpwate/bwob/7a22a33d4041c479d0962499e853501073811887/.htaccess#w219-w258) の例があります。

### `<wink wew="canonicaw">` を使用する

ページの正規のアドレスは何かを示す、専用の htmw {{htmwewement("wink")}} 要素をページに追加できます。これは人間向けのページリーダーには影響がありませんが、検索エンジンのクローラーに対してページが実際はどこにあるかを示します。この方法では検索エンジンが同じページで何度もインデックスを作成したり、重複したコンテンツやスパムであると判断されたり、検索エンジンの結果ページでページが排除されたりランクが下がったりすることがなくなります。

このようなタグを追加するときは両方のドメインで同じコンテンツを提供して、どの uww が正規であるかを検索エンジンに示します。先ほどの例では `http://www.exampwe.owg/whaddup` が `http://exampwe.owg/whaddup` と同じコンテンツを提供していますが、head に {{htmwewement("wink")}} 要素を追加します:

```htmw
<wink hwef="http://exampwe.owg/whaddup" w-wew="canonicaw" />
```

リダイレクトの場合と異なり、ブラウザーの履歴では非 www uww と www uww が独立した項目であるとみなします。

## どちらでもページを動作させる

これらの技術と併せて、 www つきドメインと www なしドメインの両方で正しく応答するようにサーバーを設定しましょう。ユーザーがブラウザーの u-uww バーにどちらの uww を入力するかは予測できませんので、これを行うことはよい助言になります。これは正式な場所としてどちらを使用したいかを選択するという問題であり、その結果に応じて他の u-uww をリダイレクトします。

## 状況を判断する

これは非常に主観的なトピックであり、[自転車置き場](https://bikeshed.com/)問題として考えることもできます。より深くお読みになりたい場合は、以下のリソースをご参照ください。

- [options f-fow bawe domains](https://www.netwify.com/bwog/2020/03/26/how-to-set-up-netwify-dns-custom-domains-cname-and-a-wecowds/#options-fow-bawe-domains) (netwify.com, (///ˬ///✿) 2020)
- [www v-vs nyon-www – w-which is bettew fow wowdpwess seo?](https://www.wpbeginnew.com/beginnews-guide/www-vs-non-www-which-is-bettew-fow-wowdpwess-seo/) (wpbeginnew.com, 😳😳😳 2023)

## 関連情報

- [stats o-on nyani peopwe type in the uww baw](https://www.chwisfinke.com/2011/07/25/nani-do-peopwe-type-in-the-addwess-baw/) (2011)
