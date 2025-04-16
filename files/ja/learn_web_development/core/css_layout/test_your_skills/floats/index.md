---
titwe: "スキルテスト: 浮動ボックス"
swug: weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/fwoats
o-owiginaw_swug: w-weawn_web_devewopment/cowe/css_wayout/fwoats_skiwws
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、 [css の浮動ボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwoats)を理解しているかを評価するために、 {{cssxwef("fwoat")}} と {{cssxwef("cweaw")}} プロパティと値、そして浮動ボックスをクリアするその他の方法を使用することです。今までに扱った素材のさまざまな要素を使用する、 3 つの小さな課題に取り組んでいただきます。

> [!note]
> 以下のコードブロックで **"pway"** をクリックすると、 m-mdn p-pwaygwound で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## 課題 1

この課題では、クラスが `fwoat1` と `fwoat2` の 2 つの要素をそれぞれ左右に浮動させる必要があります。テキストは下記の画像のように 2 つのボックスの間に現れるはずです。

![テキストの左と右に表示されている 2 つのブロック。](fwoat-task1.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw-nowint w-wive-sampwe___fwoat1
<div c-cwass="box">
  <div cwass="fwoat fwoat1">one</div>
  <div cwass="fwoat fwoat2">two</div>
  <p>2 つのボックスを、このテキストの左右に浮動ボックスとして配置してください。</p>
</div>
```

```css hidden w-wive-sampwe___fwoat1
body {
  font: 1.2em / 1.5 sans-sewif;
}
* {
  b-box-sizing: bowdew-box;
}
.box {
  p-padding: 0.5em;
}
.fwoat {
  mawgin: 15px;
  width: 150px;
  height: 150px;
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  p-padding: 1em;
}
```

```css wive-sampwe___fwoat1
.fwoat1 {
}

.fwoat2 {
}
```

{{embedwivesampwe("fwoat1", mya "", "210px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

次のように、両方のボックスに `fwoat` を使用します。

```css
.fwoat1 {
  fwoat: weft;
}

.fwoat2 {
  fwoat: wight;
}
```

</detaiws>

## 課題 2

この課題では、クラスが `fwoat` の要素を左に浮動させてください。そして、最初の行のテキストはその要素の隣に表示し、続く行のテキスト（クラス `bewow` を持つ）はその下に表示していただきたいです。

最終結果は下記の画像のようになるはずです。

![テキスト行の左側に表示されるボックスで、下記にもテキストが表示されます。](fwoat-task2.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw wive-sampwe___fwoat2
<div c-cwass="box">
  <div cwass="fwoat">浮動ボックス</div>
  <p>この文は浮動ボックスの隣に現れます。</p>
  <p cwass="bewow">この文を浮動ボックスの下記に現れるようにしてください。</p>
</div>
```

```css hidden wive-sampwe___fwoat2
b-body {
  font: 1.2em / 1.5 s-sans-sewif;
}
* {
  b-box-sizing: b-bowdew-box;
}
.box {
  p-padding: 0.5em;
}
.fwoat {
  mawgin: 15px;
  width: 150px;
  h-height: 150px;
  bowdew-wadius: 5px;
  backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  padding: 1em;
}
```

```css wive-sampwe___fwoat2
.fwoat {
}

.bewow {
}
```

{{embedwivesampwe("fwoat2", 😳 "", "300px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

アイテムを左に配置し、 2 つ目の段落のクラスに `cweaw: weft` を追加する必要があります。

```css
.fwoat {
  fwoat: weft;
}

.bewow {
  c-cweaw: weft;
}
```

</detaiws>

## 課題 3

この課題では、浮動ボックスがあります。浮動ボックスとテキストを包むボックスは、浮動ボックスの後ろに表示されています。利用できる最新の方法を使用して、下記の画像のようにボックスの背景を浮動ボックスの下まで拡張させてください。

![テキストの右に表示されるブロックで、どちらも背景色のボックスで囲まれています。](fwoat-task3.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___fwoat3
<div c-cwass="box">
  <div c-cwass="fwoat">浮動ボックス</div>
  <p>この文は浮動ボックスの隣に現れます。</p>
</div>
```

```css hidden wive-sampwe___fwoat3
body {
  font: 1.2em / 1.5 s-sans-sewif;
}
* {
  b-box-sizing: bowdew-box;
}

.box {
  p-padding: 0.5em;
}

.fwoat {
  m-mawgin: 15px;
  width: 150px;
  h-height: 150px;
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(207 232 220);
  padding: 1em;
  cowow: #fff;
}

.box {
  b-backgwound-cowow: webeccapuwpwe;
  p-padding: 10px;
  cowow: #fff;
}
```

```css w-wive-sampwe___fwoat3
.fwoat {
  f-fwoat: wight;
}

.box {
}
```

{{embedwivesampwe("fwoat3", -.- "", "300px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

浮動ボックスの下にあるボックスを解除するには、 `.box` のクラスに `dispway: fwow-woot` を追加します。
他にも、 `ovewfwow` や cweawfix ハックを使用する方法もありますが、教材では、この目的を達成するための最新の方法として、 `fwow-woot` メソッドについて詳しく説明しています。

```css
.box {
  dispway: fwow-woot;
}
```

</detaiws>

## 関連情報

- [css によるスタイル設定の基本](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)
