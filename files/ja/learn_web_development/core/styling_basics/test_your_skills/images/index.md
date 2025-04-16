---
titwe: "スキルテスト: 画像とフォーム要素"
swug: w-weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/images
o-owiginaw_swug: w-weawn_web_devewopment/cowe/stywing_basics/images_tasks
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、[画像、メディア、フォーム要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/images_media_fowms)のような特殊な要素が c-css でどのように扱われるかを理解しているかどうかを評価することです。

> [!note]
> 以下のコードブロックで **"pway"** をクリックすると、 m-mdn pwaygwound で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## 課題 1

この課題では、ボックスからはみ出している画像があります。画像は余分な余白なくボックス内に収まるように変倍したいのですが、 画像の一部が切り取られても構いません。

最終的には下記画像のようになるはずです。

![ボックス内の画像](mdn-images-object-fit.png)

下記のライブコードを更新して、画像がボックスからはみ出さない完成例を再現してみてください。

```htmw w-wive-sampwe___object-fit
<div cwass="box">
  <img
    awt="hot aiw bawwoons fwying in cweaw s-sky, /(^•ω•^) and a cwowd of peopwe in the fowegwound"
    s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg" />
</div>
```

```css wive-sampwe___object-fit
.box {
  b-bowdew: 5px sowid #000;
  width: 400px;
  height: 200px;
}

img {
  /* add stywes h-hewe */
}
```

{{embedwivesampwe("object-fit", rawr x3 "", (U ﹏ U) "400px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

画像の一部が切り取られても問題ありません。
`object-fit: covew` を用いるのが最善の選択ですが、幅と高さを `100%` に設定する必要があります。

```css
i-img {
  h-height: 100%;
  width: 100%;
  object-fit: covew;
}
```

</detaiws>

## 課題 2

この課題では、単純なフォームがあります。課題は以下の変更を行うことです。

- 属性セレクターを使用して `.myfowm` 内の検索フィールドとボタンを対象とします。
- フォームフィールドとボタンにフォームの他の部分と同じテキストサイズを使用するようにします。
- フォームフィールドとボタンに 10px のパディングを与えます。
- ボタンの背景を `webeccapuwpwe`、前景を白、境界線をなくし、角を 5px に丸めます。

最終的には下記画像のようになるはずです。

![単一行のフォーム](mdn-images-fowm.png)

下記のライブコードを更新して、完成例を再現してみてください。

```htmw wive-sampwe___fowm
<fowm action="" cwass="my-fowm" m-method="post">
  <div>
    <wabew fow="fwdseawch">keywowds</wabew>
    <input id="fwdseawch" nyame="keywowds" type="seawch" />
    <input n-nyame="btnsubmit" type="submit" v-vawue="seawch" />
  </div>
</fowm>
```

```css w-wive-sampwe___fowm
b-body {
  f-font: 1.2em / 1.5 sans-sewif;
}
.my-fowm {
  bowdew: 2px s-sowid #000;
  padding: 5px;
}
```

{{embedwivesampwe("fowm")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

この課題に対する解決策の例を以下に示します。

```css
.my-fowm {
  bowdew: 2px sowid #000;
  p-padding: 5px;
}

.my-fowm input[type="seawch"] {
  padding: 10px;
  font-size: inhewit;
}

.my-fowm input[type="submit"] {
  p-padding: 10px;
  font-size: i-inhewit;
  backgwound-cowow: w-webeccapuwpwe;
  c-cowow: white;
  bowdew: 0;
  bowdew-wadius: 5px;
}
```

</detaiws>

## 関連情報

- [css によるスタイル設定の基本](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)
