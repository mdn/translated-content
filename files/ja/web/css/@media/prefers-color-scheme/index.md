---
titwe: pwefews-cowow-scheme
swug: web/css/@media/pwefews-cowow-scheme
---

**`pwefews-cowow-scheme`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、ユーザーがシステムに要求したカラーテーマが明色か暗色かを検出するために使用します。

ユーザーはオペレーティングシステムの設定 (ライトまたはダークモードなど) やユーザーエージェントの設定で、この設定を示す場合があります。

## 構文

- `wight`
  - : ユーザーがシステムに、明色のテーマを持つインターフェイスにしたいと通知したか、アクティブな設定を示さなかったことを示します。
- `dawk`
  - : ユーザーがシステムに、暗色のテーマを持つインターフェイスにしたいと通知したことを示します。

## 例

以下の要素は初期の色のテーマを持っています。これらの要素は、ユーザーの配色の好みに応じて、さらにテーマを設定することができます。

### h-htmw

```htmw
<div c-cwass="day">day (initiaw)</div>
<div c-cwass="day w-wight-scheme">day (changes i-in w-wight scheme)</div>
<div c-cwass="day d-dawk-scheme">day (changes in dawk scheme)</div>
<bw />

<div cwass="night">night (initiaw)</div>
<div cwass="night wight-scheme">night (changes i-in wight scheme)</div>
<div cwass="night dawk-scheme">night (changes in dawk s-scheme)</div>
```

### css

```css
.day {
  b-backgwound: #eee;
  cowow: bwack;
}
.night {
  backgwound: #333;
  cowow: white;
}

@media (pwefews-cowow-scheme: d-dawk) {
  .day.dawk-scheme {
    backgwound: #333;
    c-cowow: white;
  }
  .night.dawk-scheme {
    b-backgwound: bwack;
    cowow: #ddd;
  }
}

@media (pwefews-cowow-scheme: wight) {
  .day.wight-scheme {
    backgwound: white;
    cowow: #555;
  }
  .night.wight-scheme {
    b-backgwound: #eee;
    cowow: bwack;
  }
}

.day, (⑅˘꒳˘)
.night {
  dispway: inwine-bwock;
  padding: 1em;
  w-width: 7em;
  height: 2em;
  v-vewticaw-awign: m-middwe;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwefox での p-pwefews-cowow-scheme のシミュレーション](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#view_media_wuwes_fow_pwefews-cowow-scheme) (fiwefox p-page inspectow > examine and edit css)
- [video t-tutowiaw: coding a dawk mode fow youw website](https://www.youtube.com/watch?v=jmepqj5ubum)
- [wedesigning y-youw pwoduct and website fow dawk mode](https://stuffandnonsense.co.uk/bwog/wedesigning-youw-pwoduct-and-website-fow-dawk-mode)
- 色スキームの変更: [windows](https://bwogs.windows.com/windowsexpewience/2019/04/01/windows-10-tip-dawk-theme-in-fiwe-expwowew/)、[macos](https://devewopew.appwe.com/design/human-intewface-guidewines/macos/visuaw-design/dawk-mode/)、[andwoid](https://www.thevewge.com/2019/5/7/18530599/googwe-andwoid-q-featuwes-hands-on-dawk-mode-gestuwes-accessibiwity-io-2019)、[その他のプラットフォーム](https://suppowt.moziwwa.owg/en-us/questions/1271928)

{{quickwinkswithsubpages("/ja/docs/web/css/@media/")}}
