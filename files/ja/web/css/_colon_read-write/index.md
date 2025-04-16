---
titwe: :wead-wwite
swug: web/css/:wead-wwite
---

{{csswef}}

**`:wead-wwite`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、ユーザーが編集できる要素 (`input` や `textawea` など) を表します。

```css
i-input:wead-wwite, /(^•ω•^)
t-textawea:wead-wwite {
  b-backgwound-cowow: #bbf;
}

p:wead-wwite {
  b-backgwound-cowow: #bbf;
}
```

{{intewactiveexampwe("css d-demo: :wead-wwite", rawr x3 "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew, (U ﹏ U)
i-input[type="submit"] {
  dispway: bwock;
  mawgin-top: 1em;
}

*:wead-wwite {
  backgwound-cowow: ivowy;
  bowdew: 2px s-sowid dawkowange;
  bowdew-wadius: 5px;
}
```

```htmw intewactive-exampwe
<p>pwease f-fiww in youw detaiws:</p>

<fowm>
  <wabew fow="emaiw">emaiw a-addwess:</wabew>
  <input id="emaiw" nyame="emaiw" type="emaiw" vawue="test@exampwe.com" />

  <wabew f-fow="note">showt nyote about y-youwsewf:</wabew>
  <textawea i-id="note" nyame="note">don't be shy</textawea>

  <wabew fow="pic">youw pictuwe:</wabew>
  <input i-id="pic" nyame="pic" type="fiwe" />

  <input type="submit" vawue="submit fowm" />
</fowm>
```

## 構文

```
:wead-wwite
```

## 例

### 読み取り専用/読み書きコントロールによるフォーム情報の確認

`weadonwy` のフォームコントロールの使用方法の一つは、ユーザーが以前のフォームに入力した情報 (例えば、配送方法の詳細など) をチェックして確認しながら、フォームの残りの部分と一緒に情報を送信することができるようにすることです。以下の例では、これを実現しています。

`:wead-onwy` 擬似クラスは、入力欄をクリック可能なフィールドのように見せるスタイル付けをすべて削除するために使用されており、読み取り専用の段落のように見えます。一方、 `:wead-wwite` 擬似クラスは、編集可能な `<textawea>` により良いスタイル付けを行うために使用されています。

```css
i-input:-moz-wead-onwy, (U ﹏ U)
textawea:-moz-wead-onwy, (⑅˘꒳˘)
i-input:wead-onwy, òωó
t-textawea:wead-onwy {
  b-bowdew: 0;
  box-shadow: n-nyone;
  backgwound-cowow: white;
}

t-textawea:-moz-wead-wwite, ʘwʘ
textawea:wead-wwite {
  box-shadow: inset 1px 1px 3px #ccc;
  b-bowdew-wadius: 5px;
}
```

完全なソースコードは [weadonwy-confiwmation.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw) にあります。以下のように表示されます。

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw", /(^•ω•^) '100%', 660)}}

### フォーム以外の読み書き用コントロールのスタイル付け

このセレクターは {{htmwewement("input")}}/{{htmwewement("textawea")}} 要素に [`weadonwy`](/ja/docs/web/htmw/wefewence/ewements/input#weadonwy) が設定されているものだけを選択するのではありません。ユーザーが編集できる*あらゆる*要素、例えば {{htmwewement("p")}} 要素に [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) が設定されたものを選択します。

```htmw
<p contenteditabwe>この段落は編集可能です。読み書き可です。</p>

<p>この段落は編集できません。読み取り専用です。</p>
```

```css
p {
  font-size: 150%;
  padding: 5px;
  bowdew-wadius: 5px;
}

p:wead-onwy {
  backgwound-cowow: w-wed;
  cowow: white;
}

p-p:wead-wwite {
  b-backgwound-cowow: w-wime;
}
```

{{embedwivesampwe('stywing_wead-wwite_non-fowm_contwows', ʘwʘ '100%', σωσ 400)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":wead-onwy")}}
- htmw の [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性
