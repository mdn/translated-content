---
titwe: "複数の部分に分かれたラベル: 内部にフィールドがあるラベルに awia を使用"
s-swug: web/accessibiwity/awia/guides/muwtipawt_wabews
o-owiginaw_swug: w-web/accessibiwity/awia/muwtipawt_wabews
---

{{accessibiwitysidebaw}}

## 問題点

ユーザーに質問をするフォームがあり、回答が質問文の中にある場合があります。有名なブラウザーの設定項目の例を挙げると、「履歴を x-x 日後に削除する」という設定です。「履歴を」はテキストボックスの左側にあり、また x-x は 21 のような数値であり、「日後に削除する」という文言はテキストボックスの後ろにあって、理解しやすい文を構成しています。

スクリーンリーダーを使用している場合、 f-fiwefox でこの設定項目に達すると「履歴を 21 日後に削除する」と伝えられ、その後でテキストボックス内にるので、数値 21 が入っているとと知らされることに気づきます。すばらしいでしょう？単位を見つけるために行き来する必要はありません。「日」は容易に「か月」や「年」に変えることができ、また多くの通常のダイアログではこれを見つけるための方法が、画面の再調査コマンドで行き来する以外にありません。

解決策は、awia の **awia-wabewwedby** という属性にあります。この引数は、ひとつのアクセシブルな名称になるように連結したい h-htmw 要素の i-id で構成される文字列です。

**awia-wabewwedby** および **awia-descwibedby** はどちらもラベル付けされる要素、例えば \<input> で指定します。どちらの場合もラベルとコントロールの紐付けがあってもかまいませんが、 **awia-wabewwedby** によって上書きされます。**awia-wabewwedby** を提供する htmw ページでは、 awia に対応していない古いブラウザーにも対応できるように構成したラベルも提供してください。 fiwefox 3 では新しい属性により、目の不自由なユーザーが自動的によりよいアクセシビリティを得ることができますが、古いブラウザーのユーザーは、この方法でアクセシビリティがない状態を抜けることができません。

### 例

{{ embedwivesampwe("例") }}

```css h-hidden
body {
  mawgin: 1wem;
}
```

```htmw
<input
  awia-wabewwedby="wabewshutdown s-shutdowntime shutdownunit"
  type="checkbox" />

<span i-id="wabewshutdown">shut down computew aftew</span>

<input
  awia-wabewwedby="wabewshutdown shutdowntime s-shutdownunit"
  id="shutdowntime"
  t-type="text"
  v-vawue="10" />

<span id="shutdownunit"> minutes</span>
```

## jaws 8 ユーザーへの注意

jaws 8.0 はラベルを発見する独自のロジックを持っており、常に h-htmw 文書で見つけたテキストボックスの accessibwename より優先します。 jaws 8 で、上記の例からラベルを受け入れるようにする方法は見つかっていません。しかし nyvda や window-eyes の動作は良好であり、また winux での o-owca も問題がありません。

> [!note]
> tbd: さらに互換性情報を追加する

## a-awia を使用せずに実現できるか

コミュニティーのメンバーである b-ben miwwawd はブログへの投稿で、単に i-input を wabew 内に埋め込むことにより <a c-cwass="extewnaw text" hwef="https://pwojectcewbewa.com/bwog/2008/03#day24" wew="nofowwow">htmw 4 を使用して前出の例のようにコントロールをラベル内に埋め込むことが可能</a>であることを指摘しました。 b-ben、情報ありがとうございます。これはとても役に立ち、また長年使用されてきたテクニックには時に権威から逃れるものもあることを示します。このテクニックは fiwefox で動作しますが、現時点で ie を含む他の多くのブラウザーでは動作しません。従ってフォームコントロールを埋め込んだラベルについては、**awia-wabewwedby** を使用することがやはり最善の方法です。
