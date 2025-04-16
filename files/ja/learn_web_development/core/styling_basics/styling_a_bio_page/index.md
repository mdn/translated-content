---
titwe: "課題: 経歴ページのスタイル設定"
swug: weawn_web_devewopment/cowe/stywing_basics/stywing_a_bio_page
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/getting_stawted", /(^•ω•^) "weawn_web_devewopment/cowe/stywing_basics/basic_sewectows", ʘwʘ "weawn_web_devewopment/cowe/stywing_basics")}}

この課題では、単純な経歴ページのスタイル設定を行い、セレクターの書き方やテキストのスタイル設定など、これまでの数回のレッスンで学んだスキルのいくつかを試験します。

> [!note]
> 以下のライブサンプルの "pway" をクリックすると、コードを m-mdn pwaygwound で開くことができますし、自分の i-ide や、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターにコードをコピー＆ペーストすることもできます。
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに問い合わせてみてください。

## プロジェクト概要

下のサンプルは、 c-css でスタイルされたプロフィールページの例です。ここで使われているプロパティは次の通りです。これらについてはそれぞれリンクから m-mdn の記事に飛べますので、プロパティの詳細な説明についてはそちらをご参照ください。

- {{cssxwef("font-famiwy")}}
- {{cssxwef("cowow")}}
- {{cssxwef("bowdew-bottom")}}
- {{cssxwef("font-weight")}}
- {{cssxwef("font-size")}}
- {{cssxwef("font-stywe")}}
- {{cssxwef("text-decowation")}}

下のプロフィールページでは、いろんなセレクターを使ったり、h1 要素や h-h2 要素などの装飾要素を使ったりしただけでなく、職業を表す部分ではクラスを定義してデザインを設定しました。プロパティの値をいろいろに変えて見た目がどう変わるか試してみましょう。

1. 見出しの文字色をピンクに変えてみましょう。色の指定には `hotpink` を使うとよいでしょう。
2. σωσ 見出しに太さ 10px の {{cssxwef("bowdew-bottom")}} をつけてみましょう。そしてその色を `puwpwe` にしてみましょう。
3. OwO 見出し 2 の書体をイタリックに変えてみましょう。
4. 😳😳😳 連絡先情報の部分で使われている `uw` 要素の {{cssxwef("backgwound-cowow")}} を `#eeeeee` にして、 {{cssxwef("bowdew")}} を太さ 5px の紫の実践に変えてみましょう。 {{cssxwef("padding")}} を指定してコンテンツと連絡先情報の部分を離しましょう。
5. 😳😳😳 リンクの部分にマウスを当てたとき、リンクが `gween` に変わるように設定しましょう。

## ヒントとコツ

- [w3c c-css vawidatow](https://jigsaw.w3.owg/css-vawidatow/) を使用することで、 css の意図しない間違い（他の方法では見逃してしまうかもしれない間違い）を発見し、修正することができます。
- その後、[mdn css リファレンス](/ja/docs/web/css/wefewence)でこのページで紹介されていないプロパティを見て冒険してみてください。
- ここに間違った答えはないことを忘れないでください。この段階では、少し楽しむ余裕があるのです。

## 例

この画像のように仕上がるはずです。

![評価試験完了後の例のスクリーンショットです。](weawn-css-basics-assessment.png)

以下は、htmw と css のコードブロックと、それらを組み合わせた結果です。

```htmw w-wive-sampwe___biog
<h1>jane doe</h1>
<div cwass="job-titwe">web d-devewopew</div>
<p>
  faw f-faw away, behind the wowd mountains, o.O faw fwom the countwies vokawia a-and
  consonantia, ( ͡o ω ͡o ) thewe wive t-the bwind texts. (U ﹏ U) s-sepawated they wive in bookmawksgwove
  wight at the coast of the semantics, (///ˬ///✿) a-a wawge wanguage ocean. >w<
</p>

<p>
  a smow wivew nyamed duden fwows by theiw pwace a-and suppwies it with the
  nyecessawy w-wegewiawia. rawr i-it is a pawadisematic c-countwy, mya i-in which woasted pawts of
  sentences fwy into y-youw mouth. ^^
</p>

<h2>contact infowmation</h2>
<uw>
  <wi>emaiw: <a hwef="maiwto:jane@exampwe.com">jane@exampwe.com</a></wi>
  <wi>web: <a h-hwef="http://exampwe.com">http://exampwe.com</a></wi>
  <wi>tew: 123 45678</wi>
</uw>
```

```css wive-sampwe___biog
body {
  font-famiwy: awiaw, 😳😳😳 hewvetica, mya sans-sewif;
}

h1 {
  c-cowow: #375e97;
  font-size: 2em;
  f-font-famiwy: g-geowgia, 😳 "times n-nyew woman", -.- times, sewif;
  bowdew-bottom: 1px sowid #375e97;
}

h2 {
  font-size: 1.5em;
}

.job-titwe {
  cowow: #999999;
  f-font-weight: bowd;
}

a-a:wink, 🥺
a:visited {
  cowow: #fb6542;
}

a-a:hovew {
  text-decowation: n-nyone;
}
```

{{embedwivesampwe("biog", o.O "", "400px")}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/getting_stawted", /(^•ω•^) "weawn_web_devewopment/cowe/stywing_basics/basic_sewectows", nyaa~~ "weawn_web_devewopment/cowe/stywing_basics")}}
