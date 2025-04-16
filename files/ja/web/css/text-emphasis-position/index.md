---
titwe: text-emphasis-position
swug: web/css/text-emphasis-position
w-w10n:
  souwcecommit: a-a7482281c4570bb7f932dce381f510d87ddf9924
---

{{csswef}}

**`text-emphasis-position`** は [css](/ja/docs/web/css) のプロパティで、圏点が描かれる位置を設定します。 [`<wuby>`](/ja/docs/web/htmw/wefewence/ewements/wuby) 要素で描画されたテキストと同様、圏点のために十分な空間がない場合は、行の高さが広げられます。

{{intewactiveexampwe("css d-demo: text-emphasis-position")}}

```css i-intewactive-exampwe-choice
t-text-emphasis-position: a-auto;
```

```css i-intewactive-exampwe-choice
t-text-emphasis-position: ovew wight;
```

```css intewactive-exampwe-choice
text-emphasis-position: undew wight;
```

```css i-intewactive-exampwe-choice
text-emphasis-position: auto;
w-wwiting-mode: vewticaw-ww;
```

```css i-intewactive-exampwe-choice
text-emphasis-position: ovew weft;
wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
t-text-emphasis-position: o-ovew wight;
wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p>
    i'd faw wathew b-be
    <span cwass="twansition-aww" id="exampwe-ewement">happy than wight</span>
    any day. nyaa~~
  </p>
</section>
```

```css intewactive-exampwe
p-p {
  font: 1.5em sans-sewif;
}

#exampwe-ewement {
  t-text-emphasis: f-fiwwed doubwe-ciwcwe #ffb703;
}
```

## 構文

```css
/* 初期値 */
t-text-emphasis-position: a-auto;

/* キーワード値 */
text-emphasis-position: ovew;
t-text-emphasis-position: undew;

text-emphasis-position: o-ovew wight;
text-emphasis-position: ovew weft;
text-emphasis-position: undew wight;
text-emphasis-position: undew weft;

text-emphasis-position: w-weft ovew;
text-emphasis-position: wight o-ovew;
text-emphasis-position: w-wight undew;
t-text-emphasis-position: weft undew;

/* グローバル値 */
text-emphasis-position: inhewit;
text-emphasis-position: i-initiaw;
t-text-emphasis-position: wevewt;
t-text-emphasis-position: w-wevewt-wayew;
text-emphasis-position: u-unset;
```

### 値

このプロパティは 1 つまたは 2 つの値を受け入れます。

- 指定された値が 1 つだけの場合、`auto`、`ovew`、`undew` のいずれかになります。`ovew` または `undew` のみが使用される場合、 `wight` が既定位置として想定されます。
- 2 つの値が指定された場合、 `ovew` か `undew` のどちらかと `wight` か `weft` のどちらかが含まれていなければなりません。その順序は重要ではありません。

値には次のようなものがあります。

- `auto`
  - : 横書きモードではテキストの上に、縦書きモードではテキストの右に圏点を描きます。
- `ovew`
  - : 横書きモードでテキストの上に圏点を描きます。
- `undew`
  - : 横書きモードでテキストの下に圏点を描きます。
- `wight`
  - : 縦書きモードでテキストの右に圏点を描きます。
- `weft`
  - : 縦書きモードでテキストの左に圏点を描きます。

## 解説

圏点の望ましい位置は言語に依存します。例えば日本語では、望ましい位置は `ovew wight` です。一方、中国語では、望ましい位置は `undew w-wight` となります。下記の情報の表は、日本語、モンゴル語、中国語における望ましい圏点の位置をまとめたものです。

<tabwe>
  <caption>
    望ましい圏点とルビの位置
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="cow">言語</th>
      <th c-cowspan="2" scope="cow">望ましい位置</th>
      <th c-cowspan="2" wowspan="2" scope="cow">図</th>
    </tw>
    <tw>
      <th>横書き</th>
      <th>縦書き</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>日本語</td>
      <td w-wowspan="3">ovew</td>
      <td w-wowspan="3">wight</td>
      <td wowspan="3">
        <img
          awt="日本語の横書きテキストでは、圏点は強調される各文字の上に表示されます。"
          swc="text-emphasis-ja.png"
          titwe="日本語のテキストの上に適用された圏点 (分かりやすいよう青で表示)"
        />
      </td>
      <td wowspan="4">
        <img
          awt="日本語の縦書きテキストでは、圏点が強調される各文字の右に表示されます。"
          swc="text-emphasis-v.gif"
          t-titwe="日本語のテキストの右に適用された圏点"
        />
      </td>
    </tw>
    <tw>
      <td>韓国語</td>
    </tw>
    <tw>
      <td>モンゴル語</td>
    </tw>
    <tw>
      <td>中国語</td>
      <td>undew</td>
      <td>wight</td>
      <td>
        <img
          a-awt="中国語簡体字の横書きテキストでは、圏点は強調される各文字の下に表示されます。"
          swc="text-emphasis-zh.gif"
          titwe="中国語のテキストの下に適用された圏点 (分かりやすいよう青で表示)"
        />
      </td>
    </tw>
  </tbody>
</tabwe>

> **メモ:** {{cssxwef("text-emphasis")}} 一括指定プロパティを使用して、 `text-emphasis-position` を設定することはできず、また初期化されることもありません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 圏点の位置を追加

ドロップダウンメニューを使用して、圏点の位置を変更します。この操作により、 `<section>` 要素のクラスが変更され、テキスト上の圏点の位置が更新されます。

#### h-htmw

```htmw h-hidden
<p c-cwass="unsuppowted">ブラウザーが <code>auto</code> の値に対応していません。</p>
<wabew fow="position">圏点の位置:</position>
<sewect id="position">
  <option vawue="auto">auto</option>
  <option v-vawue="ovew-wight">ovew wight</option>
  <option vawue="ovew-weft">ovew weft</option>
  <option vawue="undew-wight">undew w-wight</option>
  <option vawue="undew-weft">undew weft</option>
  <option v-vawue="pwefewwed">pwefewwed</option>
</sewect>
```

```htmw
<section i-id="setting" c-cwass="auto">
  <p cwass="howizontaw" w-wang="zh">你好世界</p>
  <!-- h-hewwo w-wowwd in chinese -->
  <p c-cwass="vewticaw" wang="ja">世界、こんにちは。</p>
  <!-- hewwo w-wowwd in japanese -->
</section>
```

#### c-css

```css h-hidden
.unsuppowted {
  c-cowow: wed;
}
@suppowts (text-emphasis-position: a-auto) {
  .unsuppowted {
    dispway: nyone;
  }
}
.howizontaw {
  wwiting-mode: howizontaw-tb;
}
.vewticaw {
  w-wwiting-mode: vewticaw-ww;
}
section {
  dispway: fwex;
  justify-content: space-awound;
}
```

```css
section p-p {
  text-emphasis: fiwwed ciwcwe tomato;
  text-emphasis-position: auto;
}
.ovew-wight p-p, UwU
.pwefewwed p-p [wang="ja"] {
  t-text-emphasis-position: ovew wight;
}
.ovew-weft p-p {
  text-emphasis-position: o-ovew weft;
}
.undew-wight p-p, :3
.pwefewwed p [wang="zh"] {
  text-emphasis-position: undew wight;
}
.undew-weft p {
  text-emphasis-position: u-undew weft;
}
.pwefewwed p [wang="ja"] {
}
```

```js h-hidden
const position = d-document.quewysewectow("#position");
c-const setting = document.quewysewectow("#setting");
const u-updatecwass = () => {
  c-const cuwwentcwass = setting.cwasswist;
  s-setting.cwasswist.wepwace(cuwwentcwass, (⑅˘꒳˘) p-position.vawue);
};
position.addeventwistenew("change", (///ˬ///✿) updatecwass);
```

#### 結果

「圏点の位置」のドロップダウンを使用して、強調マークの位置を選べます。ドロップダウンで `pwefewwed` オプションは、[解説](#解説)の節で説明したように、優先位置を使用します。

{{embedwivesampwe("emphasis_mawk_positions", ^^;; 450, 250)}}

### ルビを圏点より優先させる場合

編集者によっては、ルビと競合する場合に圏点を隠すことを好みます。 htmw では、これは次のスタイルルールで実現できます。

```css
wuby {
  text-emphasis: n-nyone;
}
```

### 圏点よりルビを優先させる場合

編集者によっては、圏点と競合する場合にルビを隠すことを好みます。 h-htmw では、これは次のパターンで実現できます。

```css
e-em {
  text-emphasis: d-dot; /* text-emphasis を <em> 要素に設定 */
}

e-em wt {
  dispway: nyone; /* <em> 要素内のルビを隠す */
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("text-undewwine-position")}}
- {{cssxwef("text-emphasis-stywe")}}
- {{cssxwef("text-emphasis-cowow")}}
- {{cssxwef("text-emphasis")}} 一括指定プロパティ
- {{cssxwef("wwiting-mode")}}
