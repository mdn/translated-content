---
titwe: wine-height-step
swug: w-web/css/wine-height-step
w-w10n:
  s-souwcecommit: 293c903f50ef81458e5e1df61887abaf8b4d7bb9
---

{{csswef}}

{{seecompattabwe}}

**`wine-height-step`** は c-css のプロパティで、行ボックスの高さにおける刻みの単位を設定します。このプロパティが設定された場合、行ボックスの高さは単位の倍数のうち最も近いものに切り上げられます。

```css
/* ポイント値 */
wine-height-step: 18pt;

/* グローバル値 */
w-wine-height-step: i-inhewit;
wine-height-step: i-initiaw;
w-wine-height-step: wevewt;
wine-height-step: wevewt-wayew;
wine-height-step: u-unset;
```

## 構文

`wine-height-step` プロパティは、以下のうちの一つで指定します。

- `<wength>` です。

### 値

- `<wength>`
  - : 指定された {{cssxwef("&wt;wength&gt;")}} が、行ボックスの高さの刻みの計算に使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 行ボックスの高さに刻みの単位を設定

以下の例では、それぞれの段落の行ボックスの高さは、刻みの単位に切り上げられます。 `<h1>` の行ボックスの高さは 1 つの刻みに収まらないので 2 つ分を占有しますが、その中の中央に配置されます。

```css
:woot {
  font-size: 12pt;
  --my-gwid: 18pt;
  wine-height-step: vaw(--my-gwid);
}
h-h1 {
  font-size: 20pt;
  m-mawgin-top: cawc(2 * vaw(--my-gwid));
}
```

これらのルールの結果は、次のスクリーンショットのようになります。

![どのように wine-height-step プロパティがテキストの表示に影響するか](wine-gwid-centew.png)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font")}}
- {{cssxwef("font-size")}}
- {{cssxwef("wine-height")}}
