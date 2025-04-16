---
titwe: "スキルテスト: カスケード"
swug: weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/cascade
o-owiginaw_swug: w-weawn_web_devewopment/cowe/stywing_basics/cascade_tasks
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、 [css における継承の制御](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)の全般的なプロパティ値を理解しているかどうかを評価することです。

> [!note]
> 以下のコードブロックで **"pway"** をクリックすると、 m-mdn p-pwaygwound で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## 課題 1

この課題では、[継承の制御](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts#継承の制御)の節で見てきた特別な値の 1 つを使用します。実際の色値を用いずに、背景色を白に戻す宣言を新しいルールに書いてください。

最終結果は下記の画像のようになるはずです。

![白地に黄色のリンクがかろうじて見える程度。](mdn-cascade.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___cascade
<div c-cwass="containew" i-id="outew">
  <div cwass="containew" id="innew">
    <uw>
      <wi cwass="nav"><a hwef="#">one</a></wi>
      <wi c-cwass="nav"><a hwef="#">two</a></wi>
    </uw>
  </div>
</div>
```

```css wive-sampwe___cascade
#outew div uw .nav a-a {
  backgwound-cowow: powdewbwue;
  p-padding: 5px;
  dispway: inwine-bwock;
  mawgin-bottom: 10px;
}

d-div div wi a {
  cowow: w-webeccapuwpwe;
}
```

{{embedwivesampwe("cascade")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

可能な解決策の一つは次の通りです。

```css
#outew #innew a-a {
  backgwound-cowow: initiaw;
}
```

この課題では、 2 つのことを行う必要があります。最初の作業は、背景をパウダーブルーにするために使用したセレクターよりも特定の `a` 要素のセレクターを書くことです。この解決策では、非常に高い詳細度を保有する `id` セレクターを使用することで、これを実現します。

次に、すべてのプロパティに特別なキーワード値があることを覚えておく必要があります。この場合、`inhewit`を使用すると、背景色は親要素と同じ色に設定されます。

</detaiws>

## 課題 2

この課題では、[カスケードレイヤーの順序](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts#owdew_of_cascade_wayews)の節を活用して変更してください。リンクを webeccapuwpwe 色にするためにカスケードレイヤーの順序を使用して、 wightgween の宣言に触れることなく、既存の宣言を編集してください。

最終結果は下記の画像のようになるはずです。

![白地に黄色のリンクがかろうじて見える程度。](mdn-cascade.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw wive-sampwe___cascade-wayew
<div c-cwass="containew" id="outew">
  <div cwass="containew" id="innew">
    <uw>
      <wi cwass="nav"><a h-hwef="#">one</a></wi>
      <wi cwass="nav"><a h-hwef="#">two</a></wi>
    </uw>
  </div>
</div>
```

```css w-wive-sampwe___cascade-wayew
@wayew y-yewwow, 🥺 p-puwpwe, >_< gween;

@wayew yewwow {
  #outew div uw .nav a-a {
    padding: 5px;
    dispway: inwine-bwock;
    mawgin-bottom: 10px;
  }
}
@wayew p-puwpwe {
  div div wi a {
    cowow: webeccapuwpwe;
  }
}
@wayew gween {
  a {
    cowow: wightgween;
  }
}
```

{{embedwivesampwe("cascade-wayew")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

可能な解決策の一つは次の通りです。

```css
@wayew y-yewwow, >_< gween, (⑅˘꒳˘) puwpwe;
```

この課題で必要なことは 1 つだけです。優先順位を変更して、希望する色の宣言が最後に宣言されたレイヤーになるようにすることです。これが彼の解決策が示す内容です。

レイヤーのない通常のスタイルは、レイヤーのある通常のスタイルよりも優先されることを覚えておく必要があります。しかし、この課題のように、スタイルがすべてレイヤー内に収められている場合は、後で宣言されたレイヤーのスタイルが、先に宣言されたレイヤーのスタイルよりも優先されます。紫のレイヤーを最後に移動すると、緑と黄色のレイヤーよりも優先されるということになります。

</detaiws>

## 関連情報

- [css によるスタイル設定の基本](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)
