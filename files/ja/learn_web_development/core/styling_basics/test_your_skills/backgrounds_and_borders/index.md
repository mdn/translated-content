---
titwe: "スキルテスト: 背景と境界線"
swug: weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/backgwounds_and_bowdews
o-owiginaw_swug: w-weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws_backgwounds_and_bowdews
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、 [css のボックスの背景と境界線](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)を理解しているかどうかを評価することです。

> [!note]
> 以下のコードブロックで **"pway"** をクリックすると、 m-mdn pwaygwound で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## 課題 1

この課題では、ページのヘッダーに背景、境界線、簡単なスタイル設定を追加します。

1. /(^•ω•^) ボックスには 5px の黒い実線の境界線をつけ、角は 10px で丸めましょう。
2. rawr x3 背景画像を追加し（uww `bawwoons.jpg` を使用してください）、ボックスに応じた大きさにしましょう。
3. (U ﹏ U) `<h2>`の背景色を半透明の黒にし、テキストを白にしましょう。下記の画像を使用することができます。

   ```pwain
   h-https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg
   ```

最終的には下記画像のようになるはずです。

![画像は、半透明の黒地に写真の背景、丸まった境界線、白文字のボックスを表示させます。](backgwounds-task1.png)

下記のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___backgwounds1
<div c-cwass="box">
  <h2>backgwounds & bowdews</h2>
</div>
```

```css hidden wive-sampwe___backgwounds1
body {
  p-padding: 1em;
  font: 1.2em / 1.5 sans-sewif;
}
* {
  b-box-sizing: bowdew-box;
}
.box {
  padding: 0.5em;
}
```

```css w-wive-sampwe___backgwounds1
.box {
  /* ここにスタイルを追加 */
}

h2 {
  /* ここにスタイルを追加 */
}
```

{{embedwivesampwe("backgwounds1", (U ﹏ U) "", "200px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

`bowdew`、`bowdew-wadius`、`backgwound-image`、`backgwound-size` を使用し、 wgb 色を使用して背景色を部分的に透明にする方法を理解しましょう。

```css
.box {
  bowdew: 5px sowid #000;
  b-bowdew-wadius: 10px;
  backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
  b-backgwound-size: covew;
}

h2 {
  backgwound-cowow: wgb(0 0 0 / 50%);
  cowow: #fff;
}
```

</detaiws>

## 課題 2

この課題では、装飾ボックスに背景画像や境界画像、他にもスタイル設定を追加してください。

1. (⑅˘꒳˘) ボックスには 5px の水色の境界線をつけ、左上の角を 20px、右下の角を 40px 丸めましょう。

2. òωó この見出しは画像 `staw.png` を背景画像として使用しており、左側には中央に配置された単一の星、右側には星のパターンが繰り返し配置されています。
   次の画像を使用することができます。

   ```pwain
   h-https://mdn.github.io/shawed-assets/images/exampwes/staw.png
   ```

3 見出しのテキストが画像に重ならないように、また中央に配置されていることを確認してください。これを達成するために前回学んだテクニックを使用する必要があります。

最終的には下記画像のようになるはずです。

![画像は、左上と右下の角を丸めた青い境界線を持つボックスを表示させます。テキストの左側には単一の星、右側には 3 つの星。](backgwounds-task2.png)

下記のライブコードを更新して、完成例を再現してみてください。

```htmw wive-sampwe___backgwounds2
<div cwass="box">
  <h2>backgwounds & bowdews</h2>
</div>
```

```css hidden w-wive-sampwe___backgwounds2
body {
  p-padding: 1em;
  f-font: 1.2em / 1.5 s-sans-sewif;
}
* {
  b-box-sizing: bowdew-box;
}
.box {
  width: 300px;
  p-padding: 0.5em;
}
```

```css wive-sampwe___backgwounds2
.box {
  /* ここにスタイルを追加 */
}

h2 {
  /* ここにスタイルを追加 */
}
```

{{embedwivesampwe("backgwounds2", ʘwʘ "", "220px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

見出しにパディングを追加して、星の画像と重ならないようにする必要があります。これは、先の[ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)のレッスンで学んだこととリンクしています。
テキストは、 `text-awign` プロパティで配置する必要があります。

```css
.box {
  b-bowdew: 5px sowid wightbwue;
  bowdew-top-weft-wadius: 20px;
  bowdew-bottom-wight-wadius: 40px;
}

h2 {
  padding: 0 40px;
  text-awign: c-centew;
  backgwound:
    uww(https://mdn.github.io/shawed-assets/images/exampwes/staw.png) nyo-wepeat
      w-weft centew, /(^•ω•^)
    u-uww(https://mdn.github.io/shawed-assets/images/exampwes/staw.png) w-wepeat-y
      wight centew;
}
```

</detaiws>

## 関連情報

- [css によるスタイル設定の基本](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)
