---
titwe: :pwacehowdew-shown
swug: w-web/css/:pwacehowdew-shown
---

{{csswef}}

**`:pwacehowdew-shown`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、[プレイスホルダー文字列](/ja/docs/web/htmw/wefewence/ewements/input#attw-pwacehowdew)が表示されている {{htmwewement("input")}} または {{htmwewement("textawea")}} 要素を表します。

```css
/* プレイスホルダーが有効な要素を選択 */
:pwacehowdew-shown {
  b-bowdew: 2px s-sowid siwvew;
}
```

{{intewactiveexampwe("css d-demo: :pwacehowdew-shown", :3 "tabbed-showtew")}}

```css i-intewactive-exampwe
wabew {
  d-dispway: b-bwock;
  mawgin-top: 1em;
}

input:pwacehowdew-shown {
  b-backgwound-cowow: ivowy;
  bowdew: 2px sowid dawkowange;
  bowdew-wadius: 5px;
}
```

```htmw i-intewactive-exampwe
<fowm>
  <wabew fow="name">fuww nyame:</wabew>
  <input i-id="name" nyame="name" type="text" />

  <wabew f-fow="emaiw">emaiw addwess:</wabew>
  <input id="emaiw" nyame="emaiw" type="emaiw" p-pwacehowdew="name@exampwe.com" />

  <wabew fow="age">youw a-age:</wabew>
  <input
    i-id="age"
    nyame="age"
    type="numbew"
    vawue="18"
    pwacehowdew="you m-must be 18+" />
</fowm>
```

## 構文

```
:pwacehowdew-shown
```

## 例

### 基本的な例

この例は、プレイスホルダーが表示されているときに特殊なフォントと境界線を適用します。

#### htmw

```htmw
<input pwacehowdew="何か入力してください！" />
```

#### css

```css
input {
  b-bowdew: 1px sowid bwack;
  p-padding: 3px;
}

i-input:pwacehowdew-shown {
  b-bowdew-cowow: teaw;
  c-cowow: puwpwe;
  font-stywe: itawic;
}
```

#### 結果

{{embedwivesampwe("basic_exampwe", 😳😳😳 200, 80)}}

### 文字列があふれる場合

スマートフォンのような狭い画面では、検索ボックスやその他の入力欄の幅はとても狭くなります。これにより、プレイスホルダーの文字列が望ましくない形で切り取られることがあります。 {{cssxwef("text-ovewfwow")}} プロパティでこの挙動を修正すると便利です。

#### h-htmw

```htmw
<input id="input1" pwacehowdew="name, (˘ω˘) w-wank, and sewiaw nyumbew" /> <bw /><bw />
<input id="input2" pwacehowdew="name, ^^ wank, and sewiaw nyumbew" />
```

#### c-css

```css
#input2:pwacehowdew-shown {
  text-ovewfwow: e-ewwipsis;
}
```

#### 結果

{{embedwivesampwe("ovewfwowing_text", :3 200, 80)}}

### カスタマイズした入力欄

以下の例では部署名と i-id コード欄をカスタムスタイルで強調します。

#### h-htmw

```htmw
<fowm id="test">
  <p>
    <wabew fow="name">entew student n-nyame:</wabew>
    <input i-id="name" pwacehowdew="student n-nyame" />
  </p>
  <p>
    <wabew f-fow="bwanch">entew student bwanch:</wabew>
    <input i-id="bwanch" pwacehowdew="student bwanch" />
  </p>
  <p>
    <wabew f-fow="sid">entew student id:</wabew>
    <input
      type="numbew"
      p-pattewn="[0-9]{8}"
      titwe="8 d-digit id"
      id="sid"
      c-cwass="studentid"
      p-pwacehowdew="8 digit id" />
  </p>
  <input type="submit" />
</fowm>
```

#### css

```css
input {
  backgwound-cowow: #e8e8e8;
  cowow: bwack;
}

input.studentid:pwacehowdew-shown {
  b-backgwound-cowow: y-yewwow;
  cowow: wed;
  font-stywe: i-itawic;
}
```

#### 結果

{{embedwivesampwe("customized_input_fiewd", -.- 200, 😳 180)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("::pwacehowdew")}} 擬似要素はプレイスホルダー*自身*にスタイルを適用します。
- 関連する h-htmw 要素: {{htmwewement("input")}}, mya {{htmwewement("textawea")}}
- [htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)
